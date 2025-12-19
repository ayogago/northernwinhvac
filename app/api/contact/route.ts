import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Service type labels for readable email
const serviceTypeLabels: Record<string, string> = {
  'ac-installation': 'AC Installation',
  'ac-repair': 'AC Repair',
  'heating-installation': 'Heating Installation',
  'heating-repair': 'Heating Repair',
  'maintenance': 'Maintenance',
  'air-quality': 'Indoor Air Quality',
  'emergency': 'Emergency Service',
  'other': 'Other',
};

// Urgency labels for readable email
const urgencyLabels: Record<string, string> = {
  'emergency': 'Emergency (ASAP)',
  'today': 'Today',
  'this-week': 'This Week',
  'next-week': 'Next Week',
  'flexible': 'Flexible',
};

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

// Validate phone number format
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+\.]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

export async function POST(request: NextRequest) {
  try {
    // Check if SMTP is configured
    if (!process.env.SMTP_PASSWORD) {
      console.error('SMTP_PASSWORD environment variable is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please call us directly at (818) 555-HVAC.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, phone, address, serviceType, urgency, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      address: sanitizeInput(address || ''),
      serviceType: sanitizeInput(serviceType || ''),
      urgency: sanitizeInput(urgency || ''),
      message: sanitizeInput(message || ''),
    };

    // Create transporter for Google Workspace
    const smtpUser = process.env.SMTP_USER || 'info@northernwindhvac.com';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please call us at (818) 555-HVAC.' },
        { status: 503 }
      );
    }

    // Format the email content
    const serviceLabel = serviceTypeLabels[sanitizedData.serviceType] || sanitizedData.serviceType || 'Not specified';
    const urgencyLabel = urgencyLabels[sanitizedData.urgency] || sanitizedData.urgency || 'Not specified';

    const emailSubject = sanitizedData.urgency === 'emergency'
      ? `[URGENT] New Service Request from ${sanitizedData.name}`
      : `New Service Request from ${sanitizedData.name}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e40af; }
          .value { margin-top: 5px; }
          .urgent { background: #fef2f2; border: 2px solid #ef4444; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
          .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Service Request</h1>
            <p style="margin: 10px 0 0 0;">NorthernWindHVAC Contact Form Submission</p>
          </div>
          <div class="content">
            ${sanitizedData.urgency === 'emergency' ? '<div class="urgent"><strong>URGENT REQUEST - Customer needs immediate assistance!</strong></div>' : ''}

            <div class="field">
              <div class="label">Customer Name:</div>
              <div class="value">${sanitizedData.name}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${sanitizedData.phone.replace(/\D/g, '')}">${sanitizedData.phone}</a></div>
            </div>

            ${sanitizedData.address ? `
            <div class="field">
              <div class="label">Service Address:</div>
              <div class="value">${sanitizedData.address}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Service Needed:</div>
              <div class="value">${serviceLabel}</div>
            </div>

            <div class="field">
              <div class="label">Urgency:</div>
              <div class="value">${urgencyLabel}</div>
            </div>

            ${sanitizedData.message ? `
            <div class="field">
              <div class="label">Additional Details:</div>
              <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p style="margin: 0;">This email was sent from the NorthernWindHVAC website contact form.</p>
            <p style="margin: 10px 0 0 0;">Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Service Request - NorthernWindHVAC

${sanitizedData.urgency === 'emergency' ? '*** URGENT REQUEST - Customer needs immediate assistance! ***\n' : ''}
Customer Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
${sanitizedData.address ? `Service Address: ${sanitizedData.address}` : ''}
Service Needed: ${serviceLabel}
Urgency: ${urgencyLabel}
${sanitizedData.message ? `\nAdditional Details:\n${sanitizedData.message}` : ''}

---
This email was sent from the NorthernWindHVAC website contact form.
    `.trim();

    // Send email to business
    await transporter.sendMail({
      from: `"NorthernWindHVAC Website" <${smtpUser}>`,
      to: process.env.CONTACT_EMAIL || 'info@northernwindhvac.com',
      replyTo: sanitizedData.email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    // Send confirmation email to customer
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      const confirmationHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${sanitizedData.name},</p>
              <p>Thank you for reaching out to NorthernWindHVAC! We have received your service request and will get back to you shortly.</p>
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your request</li>
                <li>We'll contact you within 1 hour during business hours</li>
                <li>For emergencies, we'll prioritize your request immediately</li>
              </ul>
              <p>If you have an urgent matter, please don't hesitate to call us directly at <strong>(818) 555-HVAC</strong>.</p>
              <p>Best regards,<br>The NorthernWindHVAC Team</p>
            </div>
            <div class="footer">
              <p style="margin: 0;">NorthernWindHVAC | (818) 555-HVAC | info@northernwindhvac.com</p>
            </div>
          </div>
        </body>
        </html>
      `;

      try {
        await transporter.sendMail({
          from: `"NorthernWindHVAC" <${smtpUser}>`,
          to: sanitizedData.email,
          subject: 'Thank you for contacting NorthernWindHVAC!',
          html: confirmationHtml,
        });
      } catch (confirmError) {
        // Don't fail the request if confirmation email fails
        console.error('Failed to send confirmation email:', confirmError);
      }
    }

    return NextResponse.json(
      { message: 'Your message has been sent successfully! We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Provide more specific error messages
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    if (errorMessage.includes('EAUTH') || errorMessage.includes('authentication')) {
      console.error('SMTP Authentication failed. Please check credentials.');
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly at (818) 555-HVAC.' },
      { status: 500 }
    );
  }
}
