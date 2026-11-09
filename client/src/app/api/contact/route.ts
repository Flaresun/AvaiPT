import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  // Constructed per-request: at module scope a missing key throws during
  // `next build`, which fails the whole production build.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, message: "Email is not configured. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const { firstName, lastName, email, date, time, message } =
      await req.json();

    const { data, error } = await new Resend(apiKey).emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "you@yourdomain.com",
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      replyTo: email, // lets you reply directly to the user
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Date Available: ${date}`,
        `Time Available: ${time}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Email sent successfully!",
      data,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
