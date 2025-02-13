import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const { formType, name, email, message } = await req.json();

    if (!name || !email || !message || !formType) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the subject based on formType
    let subject = "";
    if (formType === "joinTheMovement") {
      subject = "New Join the Movement Form Submission";
    } else if (formType === "contact") {
      subject = "New Contact Form Submission";
    }

    // Email options
    const mailOptions = {
      from: email,
      to: "cpfint20@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
