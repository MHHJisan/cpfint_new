"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const donationCategories = [
  "Ramadan Supply",
  "IT Training",
  "Model Madrasha",
  "Health Care",
  "Women Empowerment",
  "Refuge Assistance",
  "General Donation/Sadakah",
  "Zakat",
];

const donationOptions = {
  "one-time": [10, 20, 30, 50, 100],
  monthly: [20, 30, 50, 100],
  yearly: [500, 1000, 3000, 5000],
} as const; // Ensures TypeScript recognizes fixed keys

const DonationPage = () => {
  const [isQrVisible, setIsQrVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    donationCategories[0]
  );
  const [donationType, setDonationType] = useState<
    "one-time" | "monthly" | "yearly"
  >("one-time");

  const [selectedAmount, setSelectedAmount] = useState<number | null>(
    donationOptions["one-time"][0]
  );
  const [customAmount, setCustomAmount] = useState("");

  const currentDonationAmounts = donationOptions[donationType];

  const handleProceed = async () => {
    const stripe = await stripePromise;
    if (!stripe)
      return alert("Stripe is not available. Please try again later.");

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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full h-16 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center flex items-center justify-center my-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Make a donation for {selectedCategory}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Categories Section */}
          <div className="md:col-span-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {donationCategories.map((category) => (
              <div
                key={category}
                className={`p-3 sm:p-4 rounded-lg cursor-pointer text-center text-white font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600"
                    : "bg-blue-400 hover:bg-blue-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Donation Details Section */}
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="my-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                  Donation Details
                </h2>

                {/* Donation Type */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Donation Type
                  </label>
                  <RadioGroup
                    value={donationType}
                    onValueChange={(value) => {
                      if (["one-time", "monthly", "yearly"].includes(value)) {
                        setDonationType(
                          value as "one-time" | "monthly" | "yearly"
                        ); // Type assertion
                        setSelectedAmount(
                          donationOptions[
                            value as keyof typeof donationOptions
                          ][0]
                        );
                      }
                    }}
                  >
                    {Object.keys(donationOptions).map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={type} />
                        <span>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Donation Amount */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Amount
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                    {currentDonationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={
                          selectedAmount === amount ? "default" : "outline"
                        }
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                    <Input
                      className="col-span-2 sm:col-span-3 mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Other Amount"
                      type="number"
                      value={customAmount}
                      onFocus={() => setSelectedAmount(null)}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                </div>

                {/* Payment Options */}
                <div className="flex flex-wrap justify-between mt-6 gap-4">
                  <Button
                    onClick={handleProceed}
                    className="bg-green-600 text-white"
                  >
                    Pay With any card
                  </Button>
                  {donationType === "one-time" && (
                    <Button
                      onClick={() => setIsQrVisible(true)}
                      className="bg-orange-400 text-white"
                    >
                      Pay With Zelle
                    </Button>
                  )}
                </div>

                {/* QR Code Modal */}
                {isQrVisible && donationType === "one-time" && (
                  <Dialog open={isQrVisible} onOpenChange={setIsQrVisible}>
                    <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
                    <DialogTitle>CPF</DialogTitle>
                    <DialogContent className="bg-white p-6 rounded-lg shadow-lg w-[350px] mx-auto text-center">
                      <h2 className="text-lg font-semibold">
                        Scan to Pay with Zelle
                      </h2>
                      <h2 className="text-lg font-semibold">
                        Email:{" "}
                        <span className="font-bold text-[#3d0cc3]">
                          cpfint20@gmail.com
                        </span>
                      </h2>
                      <AspectRatio ratio={1}>
                        <Image
                          src="/zelle/zelle.png"
                          alt="Zelle QR Code"
                          layout="fill"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <Button
                        className="mt-4 bg-gray-600 text-white"
                        onClick={() => setIsQrVisible(false)}
                      >
                        Close
                      </Button>
                    </DialogContent>
                  </Dialog>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
