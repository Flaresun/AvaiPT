import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, date,time, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "you@yourdomain.com",
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      replyTo: email, // lets you reply directly to the user
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Date Available: ${date}
        Time Available : ${time}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: "Email sent successfully!" ,data:data});
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ ok: false, message: "Something went wrong" }, { status: 500 });
  }
}
