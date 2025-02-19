import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email verification API (e.g., AbstractAPI, Hunter.io, MailboxLayer)
    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=${email}`
    );

    const data = await response.json();

    if (!data.is_valid_format.value || data.deliverability !== "DELIVERABLE") {
      return NextResponse.json(
        { error: "Invalid or non-existent email" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Valid email" }, { status: 200 });
  } catch (error) {
    console.error("Email validation error:", error);
    return NextResponse.json(
      { error: "Failed to validate email" },
      { status: 500 }
    );
  }
}
