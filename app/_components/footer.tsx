import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
export function Footer() {
  return (
    <div className="w-full min-h-[505px] bg-black py-20 flex flex-wrap">
      <div className="w-[848px] h-[258px] flex flex-col gap-5 px-[70px] pr-[200px]">
        <div>
          <a href="/" className="inline-block">
            <img
              width="150"
              height="56"
              src="/img/Black-White-Logo1.png"
              alt="CPF Foundation Logo"
              className="h-[90px] max-w-[81%] w-[192.844px]"
            />
          </a>
        </div>
        <div className="pl-5">
          <h6 className="text-[16px] font-bold font-['Poppins'] leading-10 text-[#FFF8F8] tracking-wider">
            CPF Foundation is a 501(C)(3) charity organization, with Tax
            ID:87-1029937
          </h6>
        </div>
        <div className="pl-5">
          <Button
            asChild
            className="bg-[#FF3951] text-white font-['Poppins'] font-bold text-[14px] leading-[14px] uppercase tracking-[2px] px-[35px] py-[17px] rounded-[10px] hover:bg-[#FF3951]/90"
          >
            <a href="/donation">
              <span className="flex justify-center gap-[5px]">Donate</span>
            </a>
          </Button>
        </div>
      </div>
      <div className="w-[848px] h-[258px] flex flex-col gap-5 pl-[100px] pr-[200px]">
        <div>
          <h3 className="font-['Poppins'] font-bold text-[35px] leading-[45.5px] text-white">
            Contact
          </h3>
        </div>
        <div className="mt-[15px]">
          <h6 className="font-['Poppins'] font-bold text-[16px] leading-5 text-white">
            19029 Gallup Dr., Germantown, MD 20874
          </h6>
        </div>
        <div>
          <h6 className="font-['Poppins'] font-bold text-[16px] leading-5 text-white">
            +1(718) 316-2585
          </h6>
        </div>
        <div>
          <h6 className="font-['Poppins'] font-bold text-[16px] leading-5 text-[#FB7E30]">
            cpfint20@gmail.com
          </h6>
        </div>
        <div className="text-center">
          <div className="inline-block gap-[5px] w-[50px] justify-center">
            <span className="inline-block">
              <a
                href="https://www.facebook.com/profile.php?id=100069204492056"
                target="_blank"
                className="inline-flex text-[25px] leading-[25px] h-[50px] w-[50px] items-center justify-center rounded-full bg-[#3B5998] transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-[25px] w-[25px] text-white" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full px-[10px] py-[10px]">
        <div className="w-full">
          <div className="py-[15px]">
            <span className="w-full flex border-t border-[#39394] m-0"></span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="pl-20">
            <div className="leading-4 text-[16px] text-white/50">
              Copyright © 2024 cpfint | Powered by CPFINT
            </div>
          </div>
          <div className="pr-20">
            <div className="leading-4 text-[16px] text-white/50 hover:text-yellow-400">
              <a href="https://techraverse.com/" target="_blank">
                Developed by Techraverse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
