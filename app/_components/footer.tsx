import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <div className="w-full bg-black py-10 px-10 flex flex-col  md:flex-row flex-wrap  items-center md:items-start ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 px-6 md:px-16 lg:px-20 flex flex-col gap-8 text-center md:text-left">
        <a href="/" className="inline-block mx-auto md:mx-0">
          <img
            width="150"
            height="56"
            src="/img/Black-White-Logo1.png"
            alt="CPF Foundation Logo"
            className="h-20 max-w-[81%] mx-auto md:mx-0"
          />
        </a>
        <h6 className="text-lg font-bold text-white tracking-wider">
          CPF Foundation is a 501(C)(3) charity organization, with Tax
          ID:87-1029937
        </h6>
        <Button
          asChild
          className="bg-[#FF3951] w-[120px] text-white font-bold text-sm uppercase tracking-wide px-8 py-3 rounded-lg hover:bg-[#FF3951]/90 mx-auto md:mx-0"
        >
          <a href="/donation">Donate</a>
        </Button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 px-6 md:px-16 lg:px-60 flex flex-col gap-5 text-center md:text-left mt-10 md:mt-0">
        <h3 className="text-2xl font-bold text-white">Contact</h3>
        <p className="text-white">19029 Gallup Dr., Germantown, MD 20874</p>
        <p className="text-white">+1(718) 316-2585</p>
        <p className="text-[#FB7E30]">cpfint20@gmail.com</p>
        <div className="flex justify-center md:justify-start">
          <a
            href="https://www.facebook.com/profile.php?id=100069204492056"
            target="_blank"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B5998] text-white text-2xl hover:opacity-90"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-6 mt-10 border-t border-gray-700 pt-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; 2024 cpfint | Powered by CPFINT
          </div>
          <div>
            <a
              href="https://techraverse.com/"
              target="_blank"
              className="hover:text-yellow-400"
            >
              Developed by Techraverse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
