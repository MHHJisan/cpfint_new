"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const donationCategories = [
  "Ramadan Supply",
  "Vocational Training",
  "Model Madrasha",
  "Health Care",
  "Women Empowerment",
  "Refuge Assistance",
  "General Donation",
];

const donationAmounts = [10, 20, 30, 50, 100];

const DonationPageTest = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    donationCategories[0]
  );
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState("");

  const handleProceed = async () => {
    const stripe = await stripePromise;
    if (!stripe) {
      return alert("Stripe is not available. Please try again later.");
    }

    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        category: selectedCategory,
        type: donationType,
      }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Make a Donation</h1>

      {/* Category Selection */}
      <div className="flex flex-wrap gap-2">
        {donationCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Donation Amount Selection */}
      <div className="grid grid-cols-3 gap-2">
        {donationAmounts.map((amount) => (
          <Button
            key={amount}
            variant={selectedAmount === amount ? "default" : "outline"}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
          >
            ${amount}
          </Button>
        ))}
        <Input
          className="col-span-3"
          placeholder="Other Amount"
          type="number"
          value={customAmount}
          onFocus={() => setSelectedAmount(null)}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
      </div>

      {/* Proceed Button */}
      <div className="flex justify-end">
        <Button onClick={handleProceed} className="bg-green-600 text-white">
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default DonationPageTest;
