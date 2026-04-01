// Rate limiting middleware for API protection
import { NextRequest, NextResponse } from 'next/server';
import { RateLimitConfig } from '@/types';

interface RateLimitEntry {
  count: number;
  resetTime: number;
  lastAccess: number;
}

interface RateLimitResult {
  allowed: boolean;
  resetTime?: number;
  remaining?: number;
}

interface RateLimitMiddlewareResult {
  allowed: true;
  headers: Headers;
}

class RateLimiter {
  private store: Map<string, RateLimitEntry> = new Map();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
    this.cleanup();
  }

  private getClientIdentifier(request: NextRequest): string {
    // Try to get real IP, fallback to forwarded IP, then to a hash
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwarded?.split(',')[0] || realIp || 'unknown';
    
    // Hash IP for privacy
    return this.hashString(ip + request.headers.get('user-agent') || '');
  }

  private hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString(36);
  }

  private cleanup(): void {
    // Clean up expired entries every minute
    setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.store.entries()) {
        if (now > entry.resetTime) {
          this.store.delete(key);
        }
      }
    }, 60000);
  }

  isAllowed(request: NextRequest): RateLimitResult {
    const clientId = this.getClientIdentifier(request);
    const now = Date.now();
    
    let entry = this.store.get(clientId);
    
    if (!entry || now > entry.resetTime) {
      // Create new entry or reset expired entry
      entry = {
        count: 1,
        resetTime: now + this.config.windowMs,
        lastAccess: now
      };
      this.store.set(clientId, entry);
      
      return {
        allowed: true,
        resetTime: entry.resetTime,
        remaining: this.config.maxRequests - 1
      };
    }
    
    // Update existing entry
    entry.count++;
    entry.lastAccess = now;
    
    if (entry.count > this.config.maxRequests) {
      return {
        allowed: false,
        resetTime: entry.resetTime,
        remaining: 0
      };
    }
    
    return {
      allowed: true,
      resetTime: entry.resetTime,
      remaining: this.config.maxRequests - entry.count
    };
  }

  getStats(): { totalClients: number; activeClients: number; memoryUsage: number } {
    const now = Date.now();
    const activeClients = Array.from(this.store.values())
      .filter(entry => now <= entry.resetTime).length;
    
    return {
      totalClients: this.store.size,
      activeClients,
      memoryUsage: this.store.size * 200 // Rough estimate in bytes
    };
  }

  reset(clientId?: string): void {
    if (clientId) {
      this.store.delete(clientId);
    } else {
      this.store.clear();
    }
  }
}

// Default rate limit configurations
export const RATE_LIMIT_CONFIGS = {
  contactForm: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // 5 submissions per 15 minutes
    skipSuccessfulRequests: false,
    message: 'Too many contact form submissions. Please try again later.'
  },
  api: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // 100 requests per 15 minutes
    skipSuccessfulRequests: true,
    message: 'Rate limit exceeded. Please try again later.'
  },
  strict: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 10, // 10 requests per minute
    skipSuccessfulRequests: false,
    message: 'Strict rate limit exceeded. Please slow down.'
  }
};

// Create rate limiters for different endpoints
const contactFormLimiter = new RateLimiter(RATE_LIMIT_CONFIGS.contactForm);
const apiLimiter = new RateLimiter(RATE_LIMIT_CONFIGS.api);
const strictLimiter = new RateLimiter(RATE_LIMIT_CONFIGS.strict);

export function createRateLimitMiddleware(config: RateLimitConfig) {
  const limiter = new RateLimiter(config);
  
  return function rateLimit(request: NextRequest): NextResponse | RateLimitMiddlewareResult {
    const result = limiter.isAllowed(request);
    
    if (!result.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: config.message || 'Rate limit exceeded',
          retryAfter: Math.ceil((result.resetTime! - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': config.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(result.resetTime! / 1000).toString(),
            'Retry-After': Math.ceil((result.resetTime! - Date.now()) / 1000).toString()
          }
        }
      );
    }
    
    // Add rate limit headers to successful responses
    const headers = new Headers();
    headers.set('X-RateLimit-Limit', config.maxRequests.toString());
    headers.set('X-RateLimit-Remaining', result.remaining!.toString());
    headers.set('X-RateLimit-Reset', Math.ceil(result.resetTime! / 1000).toString());
    
    return {
      allowed: true,
      headers
    };
  };
}

// Specific middleware for contact form
export const contactFormRateLimit = createRateLimitMiddleware(RATE_LIMIT_CONFIGS.contactForm);

// General API rate limit middleware
export const apiRateLimit = createRateLimitMiddleware(RATE_LIMIT_CONFIGS.api);

// Strict rate limit middleware
export const strictRateLimit = createRateLimitMiddleware(RATE_LIMIT_CONFIGS.strict);

// Rate limit middleware wrapper for Next.js API routes
export function withRateLimit(
  handler: (request: NextRequest) => Promise<NextResponse>,
  config: RateLimitConfig = RATE_LIMIT_CONFIGS.api
) {
  const middleware = createRateLimitMiddleware(config);
  
  return async function rateLimitedHandler(request: NextRequest): Promise<NextResponse> {
    const result = middleware(request);
    
    if (result instanceof NextResponse) {
      return result;
    }
    
    const response = await handler(request);
    
    // Add rate limit headers to the response
    if (result.headers) {
      result.headers.forEach((value, key) => {
        response.headers.set(key, value);
      });
    }
    
    return response;
  };
}

// Rate limit monitoring utilities
export function getRateLimitStats() {
  return {
    contactForm: contactFormLimiter.getStats(),
    api: apiLimiter.getStats(),
    strict: strictLimiter.getStats()
  };
}

// Reset rate limits (for admin use)
export function resetRateLimits(type?: 'contactForm' | 'api' | 'strict') {
  switch (type) {
    case 'contactForm':
      contactFormLimiter.reset();
      break;
    case 'api':
      apiLimiter.reset();
      break;
    case 'strict':
      strictLimiter.reset();
      break;
    default:
      contactFormLimiter.reset();
      apiLimiter.reset();
      strictLimiter.reset();
  }
}

// Export for testing
export { RateLimiter };
