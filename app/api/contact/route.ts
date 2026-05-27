import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

/**
 * POST /api/contact
 * Handles contact form submissions
 * 
 * Future: Integrate with Resend, SendGrid, or Nodemailer for email delivery
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

    // TODO: Send email here using your preferred service
    // Example with Resend:
    // const data = await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'seunjetomobi@gmail.com',
    //   subject: `New contact form submission from ${body.fullName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>From:</strong> ${body.fullName}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message.replace(/\n/g, '<br>')}</p>
    //   `,
    //   replyTo: body.email,
    // });

    console.log('Contact form submission:', body);

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
