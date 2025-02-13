"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear any temporary payment data if stored in local state
    console.log("Payment successful!");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">
          Thank You for Your Donation!
        </h1>
        <p className="text-gray-600 mt-2">
          Your payment was successful. We appreciate your support.
        </p>

        <div className="mt-6">
          <Button
            className="bg-blue-600 text-white px-6 py-2"
            onClick={() => router.push("/")}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
