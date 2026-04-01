// Email service with multiple provider support
import { EmailProvider, ContactEmailData, ContactFormData } from '@/types';

export class EmailService {
  private provider: EmailProvider;

  constructor(provider: EmailProvider) {
    this.provider = provider;
  }

  async sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
      const emailData = this.generateContactEmail(formData);
      
      switch (this.provider.name) {
        case 'sendgrid':
          return this.sendWithSendGrid(emailData);
        case 'resend':
          return this.sendWithResend(emailData);
        case 'smtp':
          return this.sendWithSMTP(emailData);
        default:
          throw new Error(`Unsupported email provider: ${this.provider.name}`);
      }
    } catch (error) {
      console.error('Email service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email'
      };
    }
  }

  private generateContactEmail(formData: ContactFormData): ContactEmailData {
    const subject = formData.subject 
      ? `Contact Form: ${formData.subject}` 
      : 'New Contact Form Submission';

    const html = this.generateEmailHTML(formData);
    const text = this.generateEmailText(formData);

    return {
      to: this.provider.to[0],
      subject,
      html,
      text,
      replyTo: formData.email
    };
  }

  private generateEmailHTML(formData: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9fafb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
            .footer { padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Midland Wellness Centre</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${this.escapeHtml(formData.name)}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${this.escapeHtml(formData.email)}</div>
              </div>
              ${formData.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${this.escapeHtml(formData.phone)}</div>
              </div>
              ` : ''}
              ${formData.subject ? `
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${this.escapeHtml(formData.subject)}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${this.escapeHtml(formData.message)}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Midland Wellness Centre contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private generateEmailText(formData: ContactFormData): string {
    return `
New Contact Form Submission - Midland Wellness Centre

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.subject ? `Subject: ${formData.subject}` : ''}

Message:
${formData.message}

---
Submitted on: ${new Date().toLocaleString()}
    `;
  }

  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }

  private async sendWithSendGrid(emailData: ContactEmailData): Promise<{ success: boolean; error?: string }> {
    if (!this.provider.apiKey) {
      throw new Error('SendGrid API key is required');
    }

    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.provider.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: emailData.to.split(',').map(email => ({ email: email.trim() })),
            subject: emailData.subject,
          }],
          from: { email: this.provider.from },
          reply_to: { email: emailData.replyTo || this.provider.from },
          content: [
            { type: 'text/html', value: emailData.html },
            { type: 'text/plain', value: emailData.text || '' }
          ],
        }),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const errorData = await response.text();
        throw new Error(`SendGrid API error: ${response.status} - ${errorData}`);
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'SendGrid sending failed'
      };
    }
  }

  private async sendWithResend(emailData: ContactEmailData): Promise<{ success: boolean; error?: string }> {
    if (!this.provider.apiKey) {
      throw new Error('Resend API key is required');
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.provider.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.provider.from,
          to: [emailData.to],
          subject: emailData.subject,
          html: emailData.html,
          text: emailData.text,
          reply_to: emailData.replyTo,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Email sent successfully via Resend:', result.id);
        return { success: true };
      } else {
        const errorData = await response.text();
        throw new Error(`Resend API error: ${response.status} - ${errorData}`);
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Resend sending failed'
      };
    }
  }

  private async sendWithSMTP(emailData: ContactEmailData): Promise<{ success: boolean; error?: string }> {
    // Note: SMTP implementation would require a server-side library like nodemailer
    // For now, we'll throw an error indicating this needs server-side implementation
    throw new Error('SMTP provider requires server-side implementation. Use SendGrid or Resend for client-side sending.');
  }

  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const testData: ContactFormData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test email to verify the email service is working correctly.'
      };

      return this.sendContactEmail(testData);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Email service test failed'
      };
    }
  }
}

export function createEmailService(): EmailService {
  const providerName = process.env.EMAIL_PROVIDER || 'sendgrid';
  
  const provider: EmailProvider = {
    name: providerName as 'sendgrid' | 'resend' | 'smtp',
    apiKey: process.env.SENDGRID_API_KEY || process.env.RESEND_API_KEY,
    from: process.env.EMAIL_FROM || 'noreply@midlandwellness.ca',
    to: (process.env.EMAIL_TO || 'sriramkrantikumar7672@gmail.com').split(','),
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  };

  return new EmailService(provider);
}
