import React from "react";
import { Phone, Mail, Facebook } from "lucide-react";
export function Header() {
  return (
    <div className="w-full h-[60px] bg-[#072B61] text-white font-sans ">
      <div className="w-full min-h-[54px] flex justify- px-4">
        <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center gap-5">
          <div className="flex items-center h-[44.5px] flex-wrap">
            <div className="flex items-center pr-2.5">
              <div className="text-white opacity-100 visible">
                <p className="text-2xl flex items-center gap-2 text-white">
                  <Phone size={29} strokeWidth={1} />
                  +1 (718) 316-2585
                </p>
              </div>
            </div>
            <div className="flex items-center pl-2.5">
              <div className="text-white">
                <p className="text-2xl flex items-center gap-2">
                  <Mail size={31} strokeWidth={1} />
                  cpfint20@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end h-[44.5px]">
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/profile.php?id=100069204492056"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-colors duration-200 hover:text-gray-200"
              >
                <span className="flex items-center">
                  <Facebook size={23} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
