import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/utils/validation';
import { createEmailService } from '@/services/emailService';
import { createDatabaseService } from '@/services/databaseService';
import { withRateLimit } from '@/middleware/rateLimit';
import { withSecurity } from '@/middleware/security';
import { RATE_LIMIT_CONFIGS } from '@/middleware/rateLimit';
import { DEFAULT_SECURITY_CONFIG } from '@/middleware/security';
import { ContactFormData, ContactSubmission } from '@/types';

// Enhanced API route with production-ready features
async function handleContactSubmission(request: NextRequest, context: any): Promise<NextResponse> {
  try {
    const formData = context.sanitizedBody || (await request.json());
    
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    // Create submission data
    const submissionData: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'> = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      subject: formData.subject || 'Contact Form Submission',
      message: formData.message,
      source: 'website-contact-form',
      userAgent: request.headers.get('user-agent') || undefined,
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'unknown'
    };

    // Initialize services
    const emailService = createEmailService();
    const databaseService = createDatabaseService();

    // Save to database first
    let savedSubmission: ContactSubmission | null = null;
    try {
      savedSubmission = await databaseService.saveSubmission(submissionData);
    } catch (dbError) {
      // Continue with email sending even if database fails
    }

    // Send email
    let emailResult: { success: boolean; error?: string };
    try {
      emailResult = await emailService.sendContactEmail(formData as ContactFormData);
      
      if (!emailResult.success) {
        throw new Error(emailResult.error);
      }
    } catch (emailError) {
      
      // If email fails but database succeeded, update status
      if (savedSubmission) {
        try {
          await databaseService.updateStatus(savedSubmission.id, 'pending');
        } catch (updateError) {
        }
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email. Your message was saved but we could not notify our team immediately.',
          code: 'EMAIL_SEND_FAILED'
        },
        { status: 500 }
      );
    }

    // Update submission status to processed
    if (savedSubmission) {
      try {
        await databaseService.updateStatus(savedSubmission.id, 'processed');
      } catch (updateError) {
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon!',
      data: {
        id: savedSubmission?.id,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

// Apply middleware chain
export async function POST(request: NextRequest) {
  const rateLimitMiddleware = withRateLimit(
    async (req: NextRequest) => {
      return withSecurity(handleContactSubmission, DEFAULT_SECURITY_CONFIG)(req);
    },
    RATE_LIMIT_CONFIGS.contactForm
  );
  
  return rateLimitMiddleware(request);
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
