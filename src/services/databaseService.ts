// Database service for contact submissions
import { ContactSubmission, ContactFormData } from '@/types';

export interface DatabaseService {
  saveSubmission(submission: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission>;
  getSubmission(id: string): Promise<ContactSubmission | null>;
  getSubmissions(limit?: number, offset?: number): Promise<ContactSubmission[]>;
  updateStatus(id: string, status: ContactSubmission['status']): Promise<boolean>;
  deleteSubmission(id: string): Promise<boolean>;
}

export class FileDatabaseService implements DatabaseService {
  private filePath: string;
  private submissions: ContactSubmission[] = [];

  constructor(filePath?: string) {
    this.filePath = filePath || './data/contact-submissions.json';
    this.loadSubmissions();
  }

  private async loadSubmissions(): Promise<void> {
    try {
      // In a real implementation, this would read from a file system
      // For now, we'll use in-memory storage
      this.submissions = [];
    } catch (error) {
      this.submissions = [];
    }
  }

  private async saveToFile(): Promise<void> {
    try {
      // In a real implementation, this would write to file system
    } catch (error) {
    }
  }

  async saveSubmission(submissionData: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      ...submissionData,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'pending'
    };

    this.submissions.push(submission);
    await this.saveToFile();
    
    return submission;
  }

  async getSubmission(id: string): Promise<ContactSubmission | null> {
    return this.submissions.find(sub => sub.id === id) || null;
  }

  async getSubmissions(limit: number = 50, offset: number = 0): Promise<ContactSubmission[]> {
    return this.submissions
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(offset, offset + limit);
  }

  async updateStatus(id: string, status: ContactSubmission['status']): Promise<boolean> {
    const submission = this.submissions.find(sub => sub.id === id);
    if (!submission) return false;

    submission.status = status;
    await this.saveToFile();
    return true;
  }

  async deleteSubmission(id: string): Promise<boolean> {
    const index = this.submissions.findIndex(sub => sub.id === id);
    if (index === -1) return false;

    this.submissions.splice(index, 1);
    await this.saveToFile();
    return true;
  }

  private generateId(): string {
    return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export class MongoDBService implements DatabaseService {
  private collection: string = 'contact_submissions';

  async saveSubmission(submissionData: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> {
    // This would require MongoDB driver and connection
    // Placeholder implementation
    const submission: ContactSubmission = {
      ...submissionData,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'pending'
    };

    return submission;
  }

  async getSubmission(id: string): Promise<ContactSubmission | null> {
    return null;
  }

  async getSubmissions(limit: number = 50, offset: number = 0): Promise<ContactSubmission[]> {
    return [];
  }

  async updateStatus(id: string, status: ContactSubmission['status']): Promise<boolean> {
    return true;
  }

  async deleteSubmission(id: string): Promise<boolean> {
    return true;
  }

  private generateId(): string {
    return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export class PostgreSQLService implements DatabaseService {
  private tableName: string = 'contact_submissions';

  async saveSubmission(submissionData: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> {
    // This would require PostgreSQL client and connection
    // Placeholder implementation
    const submission: ContactSubmission = {
      ...submissionData,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'pending'
    };

    return submission;
  }

  async getSubmission(id: string): Promise<ContactSubmission | null> {
    return null;
  }

  async getSubmissions(limit: number = 50, offset: number = 0): Promise<ContactSubmission[]> {
    return [];
  }

  async updateStatus(id: string, status: ContactSubmission['status']): Promise<boolean> {
    return true;
  }

  async deleteSubmission(id: string): Promise<boolean> {
    return true;
  }

  private generateId(): string {
    return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export function createDatabaseService(): DatabaseService {
  const dbType = process.env.DATABASE_TYPE || 'file';
  
  switch (dbType) {
    case 'mongodb':
      return new MongoDBService();
    case 'postgresql':
      return new PostgreSQLService();
    case 'file':
    default:
      return new FileDatabaseService();
  }
}

// Database schema for reference
export const CONTACT_SUBMISSION_SCHEMA = {
  id: 'string (primary key)',
  name: 'string (required)',
  email: 'string (required)',
  phone: 'string (optional)',
  subject: 'string (optional)',
  message: 'text (required)',
  status: 'enum: pending, processed, archived',
  source: 'string (required)',
  userAgent: 'string (optional)',
  ipAddress: 'string (optional)',
  createdAt: 'timestamp (required)',
  updatedAt: 'timestamp (optional)'
};

// SQL schema for PostgreSQL
export const POSTGRESQL_SCHEMA = `
CREATE TABLE IF NOT EXISTS contact_submissions (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'archived')),
    source VARCHAR(100) NOT NULL,
    user_agent TEXT,
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
`;

// MongoDB collection schema
export const MONGODB_SCHEMA = {
  _id: 'ObjectId (auto-generated)',
  id: 'string (required)',
  name: 'string (required)',
  email: 'string (required)',
  phone: 'string (optional)',
  subject: 'string (optional)',
  message: 'string (required)',
  status: 'string (required, enum: pending, processed, archived)',
  source: 'string (required)',
  userAgent: 'string (optional)',
  ipAddress: 'string (optional)',
  createdAt: 'Date (required)',
  updatedAt: 'Date (auto-generated)'
};
