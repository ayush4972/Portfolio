import { NextResponse } from "next/server";
import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      message?: unknown;
    };

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "ayushchaudhary4972@gmail.com";
    const from =
      process.env.RESEND_FROM_EMAIL ??
      "Portfolio Contact <onboarding@resend.dev>";

    await getResend().emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    const message =
      error instanceof Error && error.message.includes("RESEND_API_KEY")
        ? "Email service is not configured."
        : "Unable to send message right now.";

    return NextResponse.json({ message }, { status: 500 });
  }
}
