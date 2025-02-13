"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const CancelPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <XCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Payment Canceled</h1>
        <p className="text-gray-600 mt-2">
          Your payment was not completed. You can try again or contact support
          if you need help.
        </p>

        <div className="mt-6 flex space-x-4">
          <Button
            className="bg-blue-600 text-white px-6 py-2"
            onClick={() => router.push("/")}
          >
            Go to Home
          </Button>
          <Button
            className="bg-gray-400 text-white px-6 py-2"
            onClick={() => router.push("/donate")}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
