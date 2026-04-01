// Enhanced logging and monitoring utilities
export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  error?: Error;
  requestId?: string;
  userId?: string;
  ip?: string;
  userAgent?: string;
}

export class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private maxLogs: number = 1000;
  private currentLogLevel: LogLevel = LogLevel.INFO;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setLogLevel(level: LogLevel): void {
    this.currentLogLevel = level;
  }

  private createLogEntry(level: LogLevel, message: string, context?: Record<string, any>, error?: Error): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } as Error : undefined,
      requestId: context?.requestId,
      userId: context?.userId,
      ip: context?.ip,
      userAgent: context?.userAgent
    };
  }

  private log(entry: LogEntry): void {
    if (entry.level <= this.currentLogLevel) {
      this.logs.push(entry);
      
      // Keep only the most recent logs
      if (this.logs.length > this.maxLogs) {
        this.logs = this.logs.slice(-this.maxLogs);
      }

      // Output to console with appropriate formatting
      const logString = this.formatLogEntry(entry);
      
      switch (entry.level) {
        case LogLevel.ERROR:
          console.error(logString);
          break;
        case LogLevel.WARN:
          console.warn(logString);
          break;
        case LogLevel.INFO:
          console.log(logString);
          break;
        case LogLevel.DEBUG:
          console.debug(logString);
          break;
      }
    }
  }

  private formatLogEntry(entry: LogEntry): string {
    const levelNames = ['ERROR', 'WARN', 'INFO', 'DEBUG'] as const;
    const timestamp = entry.timestamp;
    const levelName = levelNames[entry.level];
    const message = entry.message;
    
    let logString = `[${timestamp}] ${levelName}: ${message}`;
    
    if (entry.requestId) {
      logString += ` [req:${entry.requestId}]`;
    }
    
    if (entry.ip) {
      logString += ` [ip:${entry.ip}]`;
    }
    
    if (entry.context && Object.keys(entry.context).length > 0) {
      logString += ` ${JSON.stringify(entry.context)}`;
    }
    
    if (entry.error) {
      logString += `\nError: ${entry.error.message}`;
      if (entry.error.stack) {
        logString += `\nStack: ${entry.error.stack}`;
      }
    }
    
    return logString;
  }

  error(message: string, context?: Record<string, any>, error?: Error): void {
    const entry = this.createLogEntry(LogLevel.ERROR, message, context, error);
    this.log(entry);
  }

  warn(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry(LogLevel.WARN, message, context);
    this.log(entry);
  }

  info(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry(LogLevel.INFO, message, context);
    this.log(entry);
  }

  debug(message: string, context?: Record<string, any>): void {
    const entry = this.createLogEntry(LogLevel.DEBUG, message, context);
    this.log(entry);
  }

  getLogs(level?: LogLevel, limit?: number): LogEntry[] {
    let filteredLogs = this.logs;
    
    if (level !== undefined) {
      filteredLogs = filteredLogs.filter(log => log.level === level);
    }
    
    if (limit) {
      filteredLogs = filteredLogs.slice(-limit);
    }
    
    return filteredLogs;
  }

  clearLogs(): void {
    this.logs = [];
  }

  getLogStats(): {
    total: number;
    byLevel: Record<string, number>;
    recent: LogEntry[];
  } {
    const byLevel = {
      ERROR: 0,
      WARN: 0,
      INFO: 0,
      DEBUG: 0
    };

    this.logs.forEach(log => {
      const levelNames = ['ERROR', 'WARN', 'INFO', 'DEBUG'] as const;
      const levelName = levelNames[log.level];
      byLevel[levelName]++;
    });

    return {
      total: this.logs.length,
      byLevel,
      recent: this.logs.slice(-10)
    };
  }
}

// Monitoring utilities
export class MonitoringService {
  private static instance: MonitoringService;
  private metrics: Map<string, number> = new Map();
  private alerts: Array<{
    timestamp: string;
    message: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    context?: Record<string, any>;
  }> = [];

  private constructor() {}

  static getInstance(): MonitoringService {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService();
    }
    return MonitoringService.instance;
  }

  incrementMetric(name: string, value: number = 1): void {
    const current = this.metrics.get(name) || 0;
    this.metrics.set(name, current + value);
  }

  setMetric(name: string, value: number): void {
    this.metrics.set(name, value);
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  resetMetrics(): void {
    this.metrics.clear();
  }

  addAlert(message: string, severity: 'low' | 'medium' | 'high' | 'critical', context?: Record<string, any>): void {
    const alert = {
      timestamp: new Date().toISOString(),
      message,
      severity,
      context
    };
    
    this.alerts.push(alert);
    
    // Keep only recent alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-100);
    }

    // Log the alert
    const logger = Logger.getInstance();
    logger.warn(`ALERT [${severity.toUpperCase()}]: ${message}`, context);
  }

  getAlerts(severity?: 'low' | 'medium' | 'high' | 'critical', limit?: number): typeof this.alerts {
    let filteredAlerts = this.alerts;
    
    if (severity) {
      filteredAlerts = filteredAlerts.filter(alert => alert.severity === severity);
    }
    
    if (limit) {
      filteredAlerts = filteredAlerts.slice(-limit);
    }
    
    return filteredAlerts;
  }

  // Health check
  async healthCheck(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    checks: Record<string, boolean>;
    metrics: Record<string, number>;
    alerts: Array<{
      timestamp: string;
      message: string;
      severity: 'low' | 'medium' | 'high' | 'critical';
      context?: Record<string, any>;
    }>;
  }> {
    const checks: Record<string, boolean> = {
      logs: true,
      metrics: true,
      memory: this.checkMemoryUsage(),
      errors: this.checkErrorRate()
    };

    const allHealthy = Object.values(checks).every(check => check);
    const someHealthy = Object.values(checks).some(check => check);

    return {
      status: allHealthy ? 'healthy' : someHealthy ? 'degraded' : 'unhealthy',
      checks,
      metrics: this.getAllMetrics(),
      alerts: this.getAlerts('high', 5)
    };
  }

  private checkMemoryUsage(): boolean {
    const memoryUsage = process.memoryUsage();
    const heapUsedMB = memoryUsage.heapUsed / 1024 / 1024;
    return heapUsedMB < 500; // Alert if using more than 500MB
  }

  private checkErrorRate(): boolean {
    const logger = Logger.getInstance();
    const errorLogs = logger.getLogs(LogLevel.ERROR, 100);
    const totalLogs = logger.getLogs(undefined, 100);
    
    if (totalLogs.length === 0) return true;
    
    const errorRate = errorLogs.length / totalLogs.length;
    return errorRate < 0.1; // Alert if error rate > 10%
  }
}

// Contact form specific logging
export class ContactFormLogger {
  private logger: Logger;
  private monitoring: MonitoringService;

  constructor() {
    this.logger = Logger.getInstance();
    this.monitoring = MonitoringService.getInstance();
  }

  logSubmission(formData: any, submissionId: string, ip?: string): void {
    this.logger.info('Contact form submission received', {
      type: 'contact_submission',
      submissionId,
      email: formData.email,
      phone: formData.phone ? 'provided' : 'not_provided',
      ip,
      userAgent: formData.userAgent
    });

    this.monitoring.incrementMetric('contact_submissions');
  }

  logEmailSent(submissionId: string, provider: string): void {
    this.logger.info('Email sent successfully', {
      type: 'email_sent',
      submissionId,
      provider
    });

    this.monitoring.incrementMetric('emails_sent');
  }

  logEmailError(submissionId: string, error: Error, provider: string): void {
    this.logger.error('Email sending failed', {
      type: 'email_error',
      submissionId,
      provider
    }, error);

    this.monitoring.incrementMetric('email_errors');
    this.monitoring.addAlert(
      `Email sending failed for submission ${submissionId}`,
      'medium',
      { provider, error: error.message }
    );
  }

  logDatabaseError(operation: string, error: Error): void {
    this.logger.error('Database operation failed', {
      type: 'database_error',
      operation
    }, error);

    this.monitoring.incrementMetric('database_errors');
    this.monitoring.addAlert(
      `Database ${operation} failed`,
      'high',
      { operation, error: error.message }
    );
  }

  logValidationError(errors: Record<string, string>, ip?: string): void {
    this.logger.warn('Form validation failed', {
      type: 'validation_error',
      errors,
      ip
    });

    this.monitoring.incrementMetric('validation_errors');
  }

  logSecurityViolation(type: string, details: any, ip?: string): void {
    this.logger.error('Security violation detected', {
      type: 'security_violation',
      violationType: type,
      details,
      ip
    });

    this.monitoring.incrementMetric('security_violations');
    this.monitoring.addAlert(
      `Security violation: ${type}`,
      'high',
      { type, details, ip }
    );
  }

  logRateLimitExceeded(ip?: string): void {
    this.logger.warn('Rate limit exceeded', {
      type: 'rate_limit_exceeded',
      ip
    });

    this.monitoring.incrementMetric('rate_limit_exceeded');
  }
}

// Export singleton instances
export const logger = Logger.getInstance();
export const monitoring = MonitoringService.getInstance();
export const contactLogger = new ContactFormLogger();

// Utility functions
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function createLogContext(request: any): Record<string, any> {
  return {
    requestId: generateRequestId(),
    ip: request.headers?.get('x-forwarded-for') || 
        request.headers?.get('x-real-ip') || 
        'unknown',
    userAgent: request.headers?.get('user-agent'),
    method: request.method,
    url: request.url
  };
}
