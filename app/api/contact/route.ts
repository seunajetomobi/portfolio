import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

/**
 * POST /api/contact
 * Handles contact form submissions and sends emails via Gmail SMTP
 */
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate input
    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to you (portfolio owner)
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Portfolio Contact: ${body.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This is an automated message from your portfolio contact form.</em></p>
      `,
      replyTo: body.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Contact form submission sent:', body);

    return NextResponse.json(
      { 
        success: true,
        message: 'Message received! I will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
