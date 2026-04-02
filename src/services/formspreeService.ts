// Simple Formspree integration for Midland Wellness Centre
// This is the easiest option for your first live project!

interface FormspreeData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export class FormspreeService {
  private formId: string;

  constructor(formId: string) {
    this.formId = formId;
  }

  async sendAppointment(data: FormspreeData): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`https://formspree.io/f/${this.formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          service: data.service,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          _subject: `New Appointment Request - ${data.name}`,
          _template: 'table', // Makes the email look nice
        }),
      });

      if (response.ok) {
        console.log('Appointment sent successfully via Formspree');
        return { success: true };
      } else {
        const errorData = await response.text();
        throw new Error(`Formspree error: ${response.status} - ${errorData}`);
      }
    } catch (error) {
      console.error('Formspree service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send appointment'
      };
    }
  }
}

export function createFormspreeService(): FormspreeService {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  
  if (!formId) {
    throw new Error('Formspree form ID is required. Please set NEXT_PUBLIC_FORMSPREE_ID in your environment variables.');
  }

  return new FormspreeService(formId);
}
