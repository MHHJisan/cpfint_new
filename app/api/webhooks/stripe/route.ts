import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook Error:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed":
      console.log("✅ Payment Completed:", event.data.object);
      break;

    case "invoice.payment_succeeded":
      console.log("✅ Subscription Payment Successful:", event.data.object);
      break;

    case "customer.subscription.created":
      console.log("🔔 Subscription Created:", event.data.object);
      break;

    case "customer.subscription.updated":
      console.log("🔄 Subscription Updated:", event.data.object);
      break;

    case "customer.subscription.deleted":
      console.log("❌ Subscription Canceled:", event.data.object);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
