import { NextRequest, NextResponse } from 'next/server';
import { validateAppointmentForm, sanitizeInput } from '@/utils/validation';
import { SERVICES } from '@/constants';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const validation = validateAppointmentForm(body);
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
      firstName: sanitizeInput(body.firstName),
      lastName: sanitizeInput(body.lastName),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      service: sanitizeInput(body.service),
      preferredDate: sanitizeInput(body.preferredDate),
      preferredTime: sanitizeInput(body.preferredTime),
      message: sanitizeInput(body.message || ''),
    };

    // Get service details
    const service = SERVICES.find(s => s.id === sanitizedData.service);
    const serviceTitle = service ? service.title : sanitizedData.service;

    // Here you would typically:
    // 1. Check availability in your booking system
    // 2. Create appointment in database
    // 3. Send confirmation email to client
    // 4. Send notification to staff
    // 5. Add to calendar system
    // 6. Send SMS confirmation

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Appointment request submitted successfully! We will contact you shortly to confirm your booking.',
      data: {
        ...sanitizedData,
        serviceTitle,
        fullName: `${sanitizedData.firstName} ${sanitizedData.lastName}`
      }
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to book appointment. Please try again or call us directly.' 
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
