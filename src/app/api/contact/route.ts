import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, sanitizeInput } from '@/utils/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const validation = validateContactForm(body);
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

    // Sanitize input
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      subject: sanitizeInput(body.subject || 'Contact Form Submission'),
      message: sanitizeInput(body.message),
    };

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Nodemailer, or Resend
    // 2. Save to database (MongoDB, PostgreSQL, etc.)
    // 3. Send notification to admin
    // 4. Log the submission
    
    console.log('Contact form submission:', sanitizedData);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon!',
      data: sanitizedData
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
