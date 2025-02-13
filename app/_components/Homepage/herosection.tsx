import React from "react";
import { DonateButton } from "@/components/DonateButton";

export function Herosection() {
  return (
    <section className="w-full relative bg-[#f8f8f8] text-[17px] leading-[31.5714px] font-['Source_Sans_Pro']">
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{
          backgroundImage: "url('/iftar_distribution-2023/File_042.png')",
        }}
      />
      <div className="absolute inset-0  bg-black opacity-75 z-5" />
      <div className="relative mx-auto max-w-[1140px] min-h-[800px] flex items-center px-6">
        <div className="w-full">
          <div className="mb-5">
            <h5 className="text-white font-bold text-xl">Together, we can</h5>
          </div>
          <div className="mb-5">
            <h2 className="text-white font-bold text-[55px] leading-[71.5px]">
              Every act of kindness matters
            </h2>
          </div>
          <div className="mb-5">
            <h3 className="text-white font-bold text-[35px] leading-[45.5px]">
              Join us in making a difference.
            </h3>
          </div>
          <div className="mt-5 mb-5">
            <h2 className="text-[#E37F1C] font-bold text-[50px] leading-[65px]">
              প্রতিটি সহানুভূতির কাজই গুরুত্বপূর্ণ
            </h2>
          </div>
          <div className="mb-5">
            <h4 className="text-[#E37F1C] font-bold text-[26px] leading-[31.2px]">
              আমাদের সাথে যুক্ত হোন একটি ইতিবাচক পরিবর্তন আনার লক্ষ্যে
            </h4>
          </div>
          <div className="pt-10">
            <DonateButton />
          </div>
        </div>
      </div>
    </section>
  );
}
