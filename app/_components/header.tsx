import React from "react";
import { Phone, Mail, Facebook } from "lucide-react";

export function Header() {
  return (
    <div className="w-full h-[60px] bg-[#072B61] text-white font-sans px-80 flex items-center">
      {/* Wrapper for left and right sections */}
      <div className="w-full flex justify-between items-center">
        {/* Left Side (Phone & Email) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={29} strokeWidth={1} />
            <p className="text-2xl font-['Source_Sans_Pro']">
              +1 (718) 316-2585
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={31} strokeWidth={1} />
            <p className="text-2xl font-['Source_Sans_Pro']">
              cpfint20@gmail.com
            </p>
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
            <Facebook size={29} />
          </a>
        </div>
      </div>
    </div>
  );
}
