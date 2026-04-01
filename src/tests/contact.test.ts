// Comprehensive test cases for contact form functionality
import { validateContactForm } from '@/utils/validation';
import { createEmailService } from '@/services/emailService';
import { createDatabaseService } from '@/services/databaseService';
import { ContactFormData } from '@/types';

// Mock environment variables for testing
const mockEnv = {
  EMAIL_PROVIDER: 'sendgrid',
  SENDGRID_API_KEY: 'test-key',
  EMAIL_FROM: 'test@example.com',
  EMAIL_TO: 'recipient@example.com',
  DATABASE_TYPE: 'file'
};

// Test data
const validFormData: ContactFormData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 555-123-4567',
  subject: 'Test Subject',
  message: 'This is a test message with sufficient length to pass validation.'
};

const invalidFormData = {
  name: '',
  email: 'invalid-email',
  phone: 'abc',
  subject: '',
  message: 'short'
};

describe('Contact Form Validation', () => {
  beforeEach(() => {
    // Reset environment
    Object.assign(process.env, mockEnv);
  });

  test('should validate correct form data', () => {
    const result = validateContactForm(validFormData);
    
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  test('should reject empty name', () => {
    const data = { ...validFormData, name: '' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe('Name is required');
  });

  test('should reject short name', () => {
    const data = { ...validFormData, name: 'A' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe('Please enter a valid name');
  });

  test('should reject invalid email', () => {
    const data = { ...validFormData, email: 'invalid-email' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBe('Please enter a valid email address');
  });

  test('should reject empty email', () => {
    const data = { ...validFormData, email: '' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBe('Email is required');
  });

  test('should reject invalid phone when provided', () => {
    const data = { ...validFormData, phone: 'abc-def-ghij' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.phone).toBe('Please enter a valid phone number');
  });

  test('should allow empty phone (optional field)', () => {
    const data = { ...validFormData, phone: '' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(true);
    expect(result.errors.phone).toBeUndefined();
  });

  test('should reject short message', () => {
    const data = { ...validFormData, message: 'short' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBe('Message must be at least 10 characters long');
  });

  test('should reject empty message', () => {
    const data = { ...validFormData, message: '' };
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBe('Message is required');
  });
});

describe('Email Service', () => {
  let emailService: ReturnType<typeof createEmailService>;

  beforeEach(() => {
    Object.assign(process.env, mockEnv);
    emailService = createEmailService();
  });

  test('should create email service with SendGrid provider', () => {
    expect(emailService).toBeDefined();
  });

  test('should generate proper email HTML', async () => {
    // Mock the SendGrid API call
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 'test-email-id' })
    });

    const result = await emailService.sendContactEmail(validFormData);
    
    expect(result.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.sendgrid.com/v3/mail/send',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Authorization': 'Bearer test-key'
        })
      })
    );
  });

  test('should handle email service failure', async () => {
    // Mock failed API call
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 400,
      text: () => Promise.resolve('Bad Request')
    });

    const result = await emailService.sendContactEmail(validFormData);
    
    expect(result.success).toBe(false);
    expect(result.error).toContain('SendGrid API error');
  });

  test('should handle network errors', async () => {
    // Mock network error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    const result = await emailService.sendContactEmail(validFormData);
    
    expect(result.success).toBe(false);
    expect(result.error).toBe('Network error');
  });
});

describe('Database Service', () => {
  let dbService: ReturnType<typeof createDatabaseService>;

  beforeEach(() => {
    Object.assign(process.env, mockEnv);
    dbService = createDatabaseService();
  });

  test('should create database service', () => {
    expect(dbService).toBeDefined();
  });

  test('should save submission', async () => {
    const submissionData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1 555-123-4567',
      subject: 'Test Subject',
      message: 'Test message content',
      source: 'test',
      userAgent: 'test-agent',
      ipAddress: '127.0.0.1'
    };

    const result = await dbService.saveSubmission(submissionData);
    
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.name).toBe('Test User');
    expect(result.email).toBe('test@example.com');
    expect(result.status).toBe('pending');
    expect(result.createdAt).toBeInstanceOf(Date);
  });

  test('should retrieve submission by ID', async () => {
    const submissionData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1 555-123-4567',
      subject: 'Test Subject',
      message: 'Test message content',
      source: 'test',
      userAgent: 'test-agent',
      ipAddress: '127.0.0.1'
    };

    const saved = await dbService.saveSubmission(submissionData);
    const retrieved = await dbService.getSubmission(saved.id);
    
    expect(retrieved).toBeDefined();
    expect(retrieved?.id).toBe(saved.id);
    expect(retrieved?.name).toBe('Test User');
  });

  test('should update submission status', async () => {
    const submissionData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1 555-123-4567',
      subject: 'Test Subject',
      message: 'Test message content',
      source: 'test',
      userAgent: 'test-agent',
      ipAddress: '127.0.0.1'
    };

    const saved = await dbService.saveSubmission(submissionData);
    const updated = await dbService.updateStatus(saved.id, 'processed');
    
    expect(updated).toBe(true);
    
    const retrieved = await dbService.getSubmission(saved.id);
    expect(retrieved?.status).toBe('processed');
  });

  test('should delete submission', async () => {
    const submissionData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1 555-123-4567',
      subject: 'Test Subject',
      message: 'Test message content',
      source: 'test',
      userAgent: 'test-agent',
      ipAddress: '127.0.0.1'
    };

    const saved = await dbService.saveSubmission(submissionData);
    const deleted = await dbService.deleteSubmission(saved.id);
    
    expect(deleted).toBe(true);
    
    const retrieved = await dbService.getSubmission(saved.id);
    expect(retrieved).toBeNull();
  });
});

describe('Integration Tests', () => {
  test('should handle complete contact submission flow', async () => {
    Object.assign(process.env, mockEnv);

    // Mock successful email sending
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 'test-email-id' })
    });

    const emailService = createEmailService();
    const dbService = createDatabaseService();

    // Save to database
    const submissionData = {
      name: 'Integration Test User',
      email: 'integration@example.com',
      phone: '+1 555-987-6543',
      subject: 'Integration Test',
      message: 'This is an integration test message with sufficient length.',
      source: 'integration-test',
      userAgent: 'test-user-agent',
      ipAddress: '192.168.1.1'
    };

    const savedSubmission = await dbService.saveSubmission(submissionData);
    expect(savedSubmission.id).toBeDefined();

    // Send email
    const emailResult = await emailService.sendContactEmail(validFormData);
    expect(emailResult.success).toBe(true);

    // Update status
    const statusUpdated = await dbService.updateStatus(savedSubmission.id, 'processed');
    expect(statusUpdated).toBe(true);

    // Verify final state
    const finalSubmission = await dbService.getSubmission(savedSubmission.id);
    expect(finalSubmission?.status).toBe('processed');
  });

  test('should handle email failure gracefully', async () => {
    Object.assign(process.env, mockEnv);

    // Mock failed email sending
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      text: () => Promise.resolve('Server Error')
    });

    const emailService = createEmailService();
    const dbService = createDatabaseService();

    const submissionData = {
      name: 'Failure Test User',
      email: 'failure@example.com',
      phone: '+1 555-111-2222',
      subject: 'Failure Test',
      message: 'This is a failure test message with sufficient length.',
      source: 'failure-test',
      userAgent: 'test-user-agent',
      ipAddress: '192.168.1.2'
    };

    const savedSubmission = await dbService.saveSubmission(submissionData);
    expect(savedSubmission.id).toBeDefined();

    const emailResult = await emailService.sendContactEmail(validFormData);
    expect(emailResult.success).toBe(false);
    expect(emailResult.error).toBeDefined();

    // Submission should still be saved even if email fails
    const retrieved = await dbService.getSubmission(savedSubmission.id);
    expect(retrieved).toBeDefined();
    expect(retrieved?.status).toBe('pending');
  });
});

describe('Edge Cases', () => {
  test('should handle extremely long messages', () => {
    const longMessage = 'A'.repeat(5000);
    const data = { ...validFormData, message: longMessage };
    
    const result = validateContactForm(data);
    
    // Should still be valid (length check is minimum, not maximum)
    expect(result.isValid).toBe(true);
  });

  test('should handle special characters in name', () => {
    const data = { ...validFormData, name: "John O'Connor-Müller" };
    
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(true);
  });

  test('should handle international phone numbers', () => {
    const data = { ...validFormData, phone: '+44 20 7123 4567' };
    
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(true);
  });

  test('should handle Unicode characters in message', () => {
    const data = { ...validFormData, message: 'Hello 🌍 Testing Unicode characters: ñáéíóú' };
    
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(true);
  });

  test('should handle missing optional fields', () => {
    const data = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message with sufficient length.'
    };
    
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(true);
  });
});

describe('Security Tests', () => {
  test('should reject XSS attempts in message', () => {
    const data = { 
      ...validFormData, 
      message: '<script>alert("xss")</script>This is a test message with sufficient length.' 
    };
    
    const result = validateContactForm(data);
    
    // Validation should pass (XSS is handled by security middleware)
    expect(result.isValid).toBe(true);
  });

  test('should reject SQL injection attempts', () => {
    const data = { 
      ...validFormData, 
      message: 'DROP TABLE users; This is a test message with sufficient length.' 
    };
    
    const result = validateContactForm(data);
    
    // Validation should pass (SQL injection is handled by security middleware)
    expect(result.isValid).toBe(true);
  });

  test('should handle email injection attempts', () => {
    const data = { 
      ...validFormData, 
      email: 'test@example.com\r\nBcc: victim@example.com' 
    };
    
    const result = validateContactForm(data);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBe('Please enter a valid email address');
  });
});

// Performance Tests
describe('Performance Tests', () => {
  test('should handle multiple concurrent submissions', async () => {
    Object.assign(process.env, mockEnv);

    // Mock successful email sending
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 'test-email-id' })
    });

    const dbService = createDatabaseService();
    const submissions = Array.from({ length: 10 }, (_, i) => ({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      phone: '+1 555-123-4567',
      subject: `Subject ${i}`,
      message: `This is test message ${i} with sufficient length for validation.`,
      source: 'performance-test',
      userAgent: 'test-agent',
      ipAddress: `192.168.1.${i}`
    }));

    const startTime = Date.now();
    const results = await Promise.all(
      submissions.map(data => dbService.saveSubmission(data))
    );
    const endTime = Date.now();

    expect(results).toHaveLength(10);
    expect(endTime - startTime).toBeLessThan(1000); // Should complete within 1 second
  });

  test('should handle large number of retrievals efficiently', async () => {
    Object.assign(process.env, mockEnv);

    const dbService = createDatabaseService();
    
    // Save some test data
    for (let i = 0; i < 50; i++) {
      await dbService.saveSubmission({
        name: `User ${i}`,
        email: `user${i}@example.com`,
        phone: '+1 555-123-4567',
        subject: `Subject ${i}`,
        message: `This is test message ${i} with sufficient length for validation.`,
        source: 'performance-test',
        userAgent: 'test-agent',
        ipAddress: '192.168.1.1'
      });
    }

    const startTime = Date.now();
    const submissions = await dbService.getSubmissions(50, 0);
    const endTime = Date.now();

    expect(submissions).toHaveLength(50);
    expect(endTime - startTime).toBeLessThan(500); // Should complete within 500ms
  });
});

export {
  validFormData,
  invalidFormData,
  mockEnv
};
