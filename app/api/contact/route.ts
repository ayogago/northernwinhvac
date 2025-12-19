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

export async function POST(request: NextRequest) {
  try {
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
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter for Google Workspace
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER || 'info@northernwindhvac.com',
        pass: process.env.SMTP_PASSWORD, // App-specific password from Google Workspace
      },
    });

    // Format the email content
    const serviceLabel = serviceTypeLabels[serviceType] || serviceType || 'Not specified';
    const urgencyLabel = urgencyLabels[urgency] || urgency || 'Not specified';

    const emailSubject = urgency === 'emergency'
      ? `[URGENT] New Service Request from ${name}`
      : `New Service Request from ${name}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
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
            <h1>New Service Request</h1>
            <p>NorthernWindHVAC Contact Form Submission</p>
          </div>
          <div class="content">
            ${urgency === 'emergency' ? '<div class="urgent"><strong>URGENT REQUEST - Customer needs immediate assistance!</strong></div>' : ''}

            <div class="field">
              <div class="label">Customer Name:</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>

            ${address ? `
            <div class="field">
              <div class="label">Service Address:</div>
              <div class="value">${address}</div>
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

            ${message ? `
            <div class="field">
              <div class="label">Additional Details:</div>
              <div class="value">${message}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the NorthernWindHVAC website contact form.</p>
            <p>Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Service Request - NorthernWindHVAC

${urgency === 'emergency' ? '*** URGENT REQUEST - Customer needs immediate assistance! ***\n' : ''}
Customer Name: ${name}
Email: ${email}
Phone: ${phone}
${address ? `Service Address: ${address}` : ''}
Service Needed: ${serviceLabel}
Urgency: ${urgencyLabel}
${message ? `\nAdditional Details:\n${message}` : ''}

---
This email was sent from the NorthernWindHVAC website contact form.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"NorthernWindHVAC Website" <${process.env.SMTP_USER || 'info@northernwindhvac.com'}>`,
      to: 'info@northernwindhvac.com',
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    // Optionally send confirmation email to customer
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      const confirmationHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
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
              <p>NorthernWindHVAC | (818) 555-HVAC | info@northernwindhvac.com</p>
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"NorthernWindHVAC" <${process.env.SMTP_USER || 'info@northernwindhvac.com'}>`,
        to: email,
        subject: 'Thank you for contacting NorthernWindHVAC!',
        html: confirmationHtml,
      });
    }

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
