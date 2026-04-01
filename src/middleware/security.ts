// Security middleware for input validation and sanitization
import { NextRequest, NextResponse } from 'next/server';
import { SecurityConfig } from '@/types';

export class SecurityMiddleware {
  private config: SecurityConfig;

  constructor(config: SecurityConfig) {
    this.config = config;
  }

  // Enhanced input sanitization
  sanitizeInput(input: string): string {
    if (!input || typeof input !== 'string') {
      return '';
    }

    let sanitized = input.trim();

    if (this.config.enableInputSanitization) {
      // Remove HTML tags
      sanitized = sanitized.replace(/<[^>]*>/g, '');
      
      // Remove script tags and content
      sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
      
      // Remove potentially dangerous attributes
      sanitized = sanitized.replace(/on\w+\s*=/gi, '');
      
      // Remove javascript: protocol
      sanitized = sanitized.replace(/javascript:/gi, '');
      
      // Remove data URLs
      sanitized = sanitized.replace(/data:\s*text\/html/gi, '');
      
      // Limit length
      if (sanitized.length > this.config.maxMessageLength) {
        sanitized = sanitized.substring(0, this.config.maxMessageLength);
      }
    }

    return sanitized;
  }

  // Validate request origin
  validateOrigin(request: NextRequest): boolean {
    if (!this.config.allowedDomains || this.config.allowedDomains.length === 0) {
      return true; // Allow all if no restrictions
    }

    const origin = request.headers.get('origin') || request.headers.get('referer');
    
    if (!origin) {
      return false; // Reject requests without origin/referer
    }

    try {
      const url = new URL(origin);
      const hostname = url.hostname;
      
      return this.config.allowedDomains.some(domain => {
        if (domain === hostname) return true;
        if (domain.startsWith('*.')) {
          return hostname.endsWith(domain.substring(1));
        }
        return false;
      });
    } catch {
      return false;
    }
  }

  // Generate CSRF token
  generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Validate CSRF token
  validateCSRFToken(request: NextRequest): boolean {
    if (!this.config.enableCSRF) {
      return true;
    }

    const headerToken = request.headers.get('x-csrf-token');
    const bodyToken = request.headers.get('csrf-token'); // Alternative header

    const token = headerToken || bodyToken;
    
    if (!token) {
      return false;
    }

    // In a real implementation, you would validate this against a stored token
    // For now, we'll just check if it exists and has reasonable length
    return token.length >= 32;
  }

  // Detect suspicious patterns
  detectSuspiciousContent(input: string): { isSuspicious: boolean; reasons: string[] } {
    const reasons: string[] = [];
    const suspiciousPatterns = [
      { pattern: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, reason: 'Script tags detected' },
      { pattern: /javascript:/gi, reason: 'JavaScript protocol detected' },
      { pattern: /on\w+\s*=/gi, reason: 'Event handlers detected' },
      { pattern: /data:\s*text\/html/gi, reason: 'Data URLs detected' },
      { pattern: /eval\s*\(/gi, reason: 'Eval function detected' },
      { pattern: /document\.cookie/gi, reason: 'Cookie access detected' },
      { pattern: /window\.location/gi, reason: 'Location manipulation detected' },
      { pattern: /union\s+select/gi, reason: 'SQL injection pattern' },
      { pattern: /drop\s+table/gi, reason: 'SQL injection pattern' },
      { pattern: /insert\s+into/gi, reason: 'SQL injection pattern' },
      { pattern: /<iframe/gi, reason: 'Iframe tags detected' },
      { pattern: /<object/gi, reason: 'Object tags detected' },
      { pattern: /<embed/gi, reason: 'Embed tags detected' }
    ];

    for (const { pattern, reason } of suspiciousPatterns) {
      if (pattern.test(input)) {
        reasons.push(reason);
      }
    }

    // Check for excessive repetition (potential DoS)
    const words = input.split(/\s+/);
    const wordCounts: Record<string, number> = {};
    for (const word of words) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
      if (wordCounts[word] > 10) {
        reasons.push('Excessive word repetition detected');
        break;
      }
    }

    // Check for very long words (potential buffer overflow)
    const longWords = words.filter(word => word.length > 50);
    if (longWords.length > 0) {
      reasons.push('Unusually long words detected');
    }

    return {
      isSuspicious: reasons.length > 0,
      reasons
    };
  }

  // Validate email format more strictly
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(email)) {
      return false;
    }

    // Additional checks
    const [local, domain] = email.split('@');
    
    // Local part shouldn't be too long
    if (local.length > 64) return false;
    
    // Domain part shouldn't be too long
    if (domain.length > 253) return false;
    
    // No consecutive dots
    if (email.includes('..')) return false;
    
    // No leading or trailing dots
    if (email.startsWith('.') || email.endsWith('.')) return false;
    
    return true;
  }

  // Validate phone number format
  validatePhone(phone: string): boolean {
    if (!phone) return true; // Phone is optional
    
    const cleaned = phone.replace(/\D/g, '');
    
    // Basic validation for North American numbers
    if (cleaned.length === 10) {
      return /^\d{10}$/.test(cleaned);
    }
    
    // International numbers (10-15 digits)
    if (cleaned.length >= 10 && cleaned.length <= 15) {
      return /^\d{10,15}$/.test(cleaned);
    }
    
    return false;
  }

  // Check for bot behavior
  detectBot(request: NextRequest): { isBot: boolean; confidence: number; reasons: string[] } {
    const reasons: string[] = [];
    let confidence = 0;

    const userAgent = request.headers.get('user-agent') || '';
    const referer = request.headers.get('referer');
    
    // Check for common bot signatures
    const botSignatures = [
      /bot/i, /crawler/i, /spider/i, /scraper/i,
      /curl/i, /wget/i, /python/i, /java/i,
      /node/i, /axios/i, /fetch/i
    ];

    for (const signature of botSignatures) {
      if (signature.test(userAgent)) {
        reasons.push('Bot signature in User-Agent');
        confidence += 0.3;
      }
    }

    // Check for missing or suspicious referer
    if (!referer) {
      reasons.push('Missing referer header');
      confidence += 0.2;
    }

    // Check for request timing (too fast)
    const now = Date.now();
    const timestamp = request.headers.get('x-request-timestamp');
    if (timestamp) {
      const requestTime = parseInt(timestamp);
      if (now - requestTime < 100) { // Less than 100ms
        reasons.push('Request too fast');
        confidence += 0.2;
      }
    }

    // Check for header anomalies
    const headers = Array.from(request.headers.keys());
    if (headers.length < 5) {
      reasons.push('Too few headers');
      confidence += 0.1;
    }

    return {
      isBot: confidence > 0.5,
      confidence: Math.min(confidence, 1),
      reasons
    };
  }

  // Apply all security checks
  async validateRequest(request: NextRequest, body?: any): Promise<{
    isValid: boolean;
    errors: string[];
    sanitizedData?: any;
    securityHeaders?: Record<string, string>;
  }> {
    const errors: string[] = [];
    const securityHeaders: Record<string, string> = {};

    // Add security headers
    securityHeaders['X-Content-Type-Options'] = 'nosniff';
    securityHeaders['X-Frame-Options'] = 'DENY';
    securityHeaders['X-XSS-Protection'] = '1; mode=block';
    securityHeaders['Referrer-Policy'] = 'strict-origin-when-cross-origin';
    securityHeaders['Content-Security-Policy'] = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";

    // Validate origin
    if (!this.validateOrigin(request)) {
      errors.push('Invalid request origin');
    }

    // Validate CSRF
    if (!this.validateCSRFToken(request)) {
      errors.push('Invalid CSRF token');
    }

    // Check for bot behavior
    const botDetection = this.detectBot(request);
    if (botDetection.isBot && botDetection.confidence > 0.8) {
      errors.push('Bot behavior detected');
    }

    // Validate and sanitize body
    let sanitizedData = body;
    if (body) {
      if (typeof body === 'object') {
        sanitizedData = {};
        for (const [key, value] of Object.entries(body)) {
          if (typeof value === 'string') {
            const suspicious = this.detectSuspiciousContent(value);
            if (suspicious.isSuspicious) {
              errors.push(`Suspicious content in ${key}: ${suspicious.reasons.join(', ')}`);
            }
            
            // Field-specific validation
            if (key === 'email' && !this.validateEmail(value)) {
              errors.push('Invalid email format');
            }
            
            if (key === 'phone' && !this.validatePhone(value)) {
              errors.push('Invalid phone format');
            }
            
            sanitizedData[key] = this.sanitizeInput(value);
          } else {
            sanitizedData[key] = value;
          }
        }
      } else if (typeof body === 'string') {
        const suspicious = this.detectSuspiciousContent(body);
        if (suspicious.isSuspicious) {
          errors.push(`Suspicious content: ${suspicious.reasons.join(', ')}`);
        }
        sanitizedData = this.sanitizeInput(body);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData,
      securityHeaders
    };
  }
}

// Default security configuration
export const DEFAULT_SECURITY_CONFIG: SecurityConfig = {
  enableCSRF: true,
  enableRateLimit: true,
  enableInputSanitization: true,
  maxMessageLength: 2000,
  allowedDomains: [
    'midlandwellness.ca',
    'www.midlandwellness.ca',
    'localhost:3000',
    '127.0.0.1:3000'
  ]
};

// Create security middleware instance
export const securityMiddleware = new SecurityMiddleware(DEFAULT_SECURITY_CONFIG);

// Wrapper function for Next.js API routes
export function withSecurity(
  handler: (request: NextRequest, context?: any) => Promise<NextResponse>,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
) {
  const security = new SecurityMiddleware(config);
  
  return async function securedHandler(request: NextRequest, context?: any): Promise<NextResponse> {
    try {
      const body = request.method === 'POST' ? await request.json().catch(() => null) : null;
      const validation = await security.validateRequest(request, body);
      
      if (!validation.isValid) {
        return NextResponse.json(
          {
            success: false,
            error: 'Security validation failed',
            details: validation.errors
          },
          { 
            status: 400,
            headers: validation.securityHeaders
          }
        );
      }
      
      // Add security headers to response
      const response = await handler(request, { ...context, sanitizedBody: validation.sanitizedData });
      
      if (validation.securityHeaders) {
        Object.entries(validation.securityHeaders).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      }
      
      return response;
    } catch (error) {
      console.error('Security middleware error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Internal security error'
        },
        { status: 500 }
      );
    }
  };
}
