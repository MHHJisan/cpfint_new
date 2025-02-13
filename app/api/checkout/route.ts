import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export async function POST(req: Request) {
  try {
    const { amount, category, type } = await req.json();

    if (!amount || !category || !type) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    let session;

    if (type === "one-time") {
      // ✅ One-Time Payment
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Donation for ${category}`,
                description: `Type: ${type}`,
              },
              unit_amount: amount * 100, // Convert to cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      });
    } else {
      // ✅ Subscription (Monthly or Yearly)
      const product = await stripe.products.create({
        name: `Recurring Donation for ${category}`,
        description: `Type: ${type}`,
      });

      const price = await stripe.prices.create({
        unit_amount: amount * 100,
        currency: "usd",
        recurring: {
          interval: type === "monthly" ? "month" : "year",
        },
        product: product.id,
      });

      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        line_items: [{ price: price.id, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      });
    }

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
