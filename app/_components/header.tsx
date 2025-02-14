import React from "react";
import { Phone, Mail, Facebook } from "lucide-react";

export function Header() {
  return (
    <div className="w-full min-h-[60px] bg-[#072B61] text-white font-sans px-4 md:px-10 lg:px-40 xl:px-80 flex items-center">
      {/* Wrapper for left and right sections */}
      <div className="w-full flex flex-wrap justify-between items-center gap-2 sm:gap-6">
        {/* Left Side (Phone & Email) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm md:text-xl lg:text-2xl">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1} />
            <p className="font-['Source_Sans_Pro']">+1 (718) 316-2585</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1} />
            <p className="font-['Source_Sans_Pro']">cpfint20@gmail.com</p>
          </div>
        </div>

        {/* Right Side (Social Links) */}
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100069204492056"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center transition-colors duration-200 hover:text-gray-200"
          >
            <Facebook className="w-5 h-5 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}
