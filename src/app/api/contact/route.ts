import { NextResponse } from "next/server";
import { getBrand } from "@/lib/brand";
import { sendCustomerConfirmation, sendInternalNotifications } from "@/lib/email/sendgrid";

// Verify Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY not set');
    return false;
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      investorStatus, 
      investmentAmount, 
      message,
      turnstileToken 
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security verification required" },
        { status: 400 }
      );
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Security verification failed" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;
    const projectType = investorStatus 
      ? `Accredited Investor: ${investorStatus}${investmentAmount ? ` | Investment Amount: ${investmentAmount}` : ''}`
      : 'Investment Inquiry';

    console.log("Contact form submission:", {
      name: fullName,
      email,
      phone,
      investorStatus,
      investmentAmount,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send emails via SendGrid
    const brand = getBrand();
    const lead = {
      name: fullName,
      email: String(email),
      phone: phone ? String(phone).replace(/\D/g, '') : undefined,
      phone_plain: phone ? String(phone).replace(/\D/g, '') : undefined,
      projectType: projectType,
      projectDescription: message ? String(message) : undefined,
      investorStatus: investorStatus ? String(investorStatus) : undefined,
      investmentAmount: investmentAmount ? String(investmentAmount) : undefined,
      message: message ? String(message) : undefined,
    };

    // Add submitted_date to brand data
    const brandWithDate = {
      ...brand,
      submitted_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    // Send emails via SendGrid
    // Send customer confirmation first, then internal notifications
    const emailErrors: unknown[] = [];
    
    try {
      await sendCustomerConfirmation(brandWithDate, lead);
      console.log('Customer confirmation email sent successfully to:', email);
    } catch (error) {
      console.error("Failed to send customer confirmation email:", error);
      emailErrors.push(error);
      // Don't throw - we still want to try sending internal notifications
    }

    try {
      await sendInternalNotifications(brandWithDate, lead);
      console.log('Internal notification emails sent successfully');
    } catch (error) {
      console.error("Failed to send internal notification emails:", error);
      emailErrors.push(error);
      // Don't throw - form submission should still succeed
    }

    // Log if any emails failed, but don't block form submission
    if (emailErrors.length > 0) {
      console.warn(`Form submitted but ${emailErrors.length} email(s) failed to send. Check SendGrid configuration.`);
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
