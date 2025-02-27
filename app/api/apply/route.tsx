import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const { name, lastName, email, phone, address, roles, message } =
      await req.json();

    // Ensure roles is always a properly formatted string
    const formattedRoles =
      typeof roles === "string"
        ? roles
        : Array.isArray(roles)
        ? roles.join(", ")
        : "No role selected";

    // Validate required fields
    if (
      !name ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !roles ||
      !message
    ) {
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

    // Email subject
    const subject = `New Application for ${formattedRoles}`;

    // Email options
    const mailOptions = {
      from: email,
      to: "cpfint20@gmail.com",
      subject,
      text: `New application received:\n\n
      Name: ${name} ${lastName}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Address: ${address}\n
      Applying for: ${formattedRoles}\n
      Message: ${message}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${name} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Applying for:</strong> ${formattedRoles}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send application email." },
      { status: 500 }
    );
  }
}
