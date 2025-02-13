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
};

const DonationPage = () => {
  const [isQrVisible, setIsQrVisible] = useState(false);

  const handleZelle = () => {
    setIsQrVisible(true);
  };

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
    <div>
      <div className="w-full h-16 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center flex items-center justify-center my-4">
        <h1 className="text-3xl font-bold text-center text-white">
          Make a donation for {selectedCategory}
        </h1>
      </div>
      <div className="max-w-5xl mx-auto p-6 my-4 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Categories Section */}
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {donationCategories.map((category) => (
                <div
                  key={category}
                  className={`p-4 rounded-lg cursor-pointer text-center text-white font-medium transition-all ${
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
          </div>

          {/* Donation Details Section */}
          <div className="col-span-2">
            <Card className="shadow-lg">
              <CardContent className="my-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                  Donation Details
                </h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Donation Type
                  </label>
                  <RadioGroup
                    value={donationType}
                    onValueChange={(
                      value: "one-time" | "monthly" | "yearly"
                    ) => {
                      setDonationType(value);
                      setSelectedAmount(donationOptions[value][0]); // Update selectedAmount dynamically
                    }}
                    className="flex space-x-4 mt-2"
                  >
                    <RadioGroupItem value="one-time" id="one-time" />
                    <label htmlFor="one-time">One Time</label>
                    <RadioGroupItem value="monthly" id="monthly" />
                    <label htmlFor="monthly">Monthly</label>
                    <RadioGroupItem value="yearly" id="yearly" />
                    <label htmlFor="yearly">Yearly</label>
                  </RadioGroup>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Amount
                  </label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {currentDonationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={
                          selectedAmount === amount ? "default" : "outline"
                        }
                        className={`py-2 ${
                          selectedAmount === amount
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300"
                        }`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                    <Input
                      className="col-span-3 mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Other Amount"
                      type="number"
                      value={customAmount}
                      onFocus={() => setSelectedAmount(null)}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    className="px-6 py-2 border border-gray-400 text-gray-700 hover:bg-red-600"
                  >
                    Back
                  </Button>
                  {/* Proceed Button */}
                  <div className="flex justify-end">
                    <Button
                      onClick={handleZelle}
                      className="bg-orange-400 text-white"
                    >
                      Pay With Zelle
                    </Button>
                  </div>

                  {/* QR Code Modal */}
                  {isQrVisible && (
                    <Dialog open={isQrVisible} onOpenChange={setIsQrVisible}>
                      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
                      <DialogTitle>CPFINT.ORG</DialogTitle>
                      <DialogContent className="bg-white p-6 rounded-lg shadow-lg w-[350px] mx-auto mt-20 text-center">
                        <h2 className="text-lg font-semibold mb-4">
                          Scan to Pay with Zelle
                        </h2>
                        <AspectRatio ratio={340 / 470}>
                          <Image
                            src="/zelle/zelle.png" // Replace with your actual QR code image
                            alt="Zelle QR Code"
                            className="w-40 h-40 mx-auto"
                            layout="fill"
                            loading="lazy"
                          />
                        </AspectRatio>
                        <h4>
                          Or Gmail -{" "}
                          <span className="text-blue-600">
                            cpfint20@gmail.com
                          </span>
                        </h4>
                        <Button
                          className="mt-4 bg-gray-600 text-white"
                          onClick={() => setIsQrVisible(false)}
                        >
                          Close
                        </Button>
                      </DialogContent>
                    </Dialog>
                  )}

                  <div className="flex justify-end">
                    <Button
                      onClick={handleProceed}
                      className="bg-green-600 text-white"
                    >
                      Pay With any card
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
