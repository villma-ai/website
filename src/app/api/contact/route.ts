import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validate Gmail environment variables
function validateGmailConfig() {
  const gmailUser = process.env.WEBSITE_CONTACT_GMAIL_USER;
  const gmailPassword = process.env.WEBSITE_CONTACT_GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    const missingVars = [];
    if (!gmailUser) missingVars.push('WEBSITE_CONTACT_GMAIL_USER');
    if (!gmailPassword) missingVars.push('WEBSITE_CONTACT_GMAIL_APP_PASSWORD');

    throw new Error(`Missing required Gmail environment variables: ${missingVars.join(', ')}`);
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(gmailUser)) {
    throw new Error('WEBSITE_CONTACT_GMAIL_USER must be a valid email address');
  }

  return { gmailUser, gmailPassword };
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, requestReasons } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate Gmail configuration
    let gmailConfig;
    try {
      gmailConfig = validateGmailConfig();
    } catch (error) {
      console.error(
        'Gmail configuration error:',
        error instanceof Error ? error.message : 'Unknown error'
      );
      return NextResponse.json(
        {
          error: 'Email service configuration error',
          details:
            process.env.NODE_ENV === 'development'
              ? error instanceof Error
                ? error.message
                : 'Unknown error'
              : undefined
        },
        { status: 500 }
      );
    }

    // Create transporter with explicit configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: gmailConfig.gmailUser,
        pass: gmailConfig.gmailPassword
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Gmail transporter verification failed:', error);
      return NextResponse.json(
        {
          error: 'Email service configuration error',
          details:
            process.env.NODE_ENV === 'development' ? 'Failed to verify Gmail connection' : undefined
        },
        { status: 500 }
      );
    }

    // Format request reasons for display
    const reasonsText =
      requestReasons && requestReasons.length > 0 ? requestReasons.join(', ') : 'Not specified';

    // Email content
    const mailOptions = {
      from: gmailConfig.gmailUser,
      to: gmailConfig.gmailUser,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Request Reasons: ${reasonsText}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Company:</strong> ${company || 'Not provided'}</p>
<p><strong>Request Reasons:</strong> ${reasonsText}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        timestamp: new Date().toISOString(),
        recipient: gmailConfig.gmailUser
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details:
          process.env.NODE_ENV === 'development'
            ? error instanceof Error
              ? error.message
              : 'Unknown error'
            : undefined,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
