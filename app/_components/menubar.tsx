"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MenuBar() {
  const currentPath = usePathname();

  return (
    <header className="w-full bg-white relative  border-b-0 border-[#eaeaea]">
      <div className="w-full min-h-[20px] flex items-stretch justify-evenly">
        <div className="grid grid-cols-[405px_1fr] items-center gap-5">
          <div className="flex flex-nowrap h-[90px] min-h-0 items-center">
            <div className="flex items-center flex-wrap p-0">
              <div className="leading-[17px] self-center py-[17px]">
                <a href="/" rel="home" aria-current="page">
                  <img
                    width="150"
                    height="56"
                    src="/img/Black-White-Logo1.png"
                    alt="cpfint"
                    className="max-w-[150px] w-[150px] h-[56px] align-middle transition-all duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap h-[90px] min-h-0 items-center justify-end">
            <nav className="font-roboto font-medium flex items-center flex-wrap pr-2.5">
              <div className="ml-0">
                <div className="h-[31.5625px]">
                  <div className="h-[30px] inline-flex items-center flex-wrap content-center p-0">
                    <ul className="text-[#072B61] text-[17px] flex flex-wrap self-center list-none p-0 m-0">
                      <li className="flex justify-center flex-col leading-[30px] text-[27px] font-bold font-['Roboto'] relative">
                        <a
                          href="/"
                          aria-current="page"
                          className={cn(
                            "text-[18px] h-[30px] font-extrabold font-['Roboto'] flex items-center px-[18px]",
                            currentPath === "/" && "text-[#FF3951]"
                          )}
                        >
                          Home
                        </a>
                      </li>
                      {["About", "Gallery", "Contact"].map((item) => (
                        <li
                          key={item}
                          className="flex justify-center flex-col leading-[30px] text-[27px] font-bold font-['Roboto'] relative"
                        >
                          <a
                            href={`/${item.toLowerCase()}`}
                            className={cn(
                              "text-[#072B61] text-[18px] h-[30px] flex items-center px-[18px]",
                              currentPath === `/${item.toLowerCase()}` &&
                                "text-[#FF3951]"
                            )}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <div className="flex items-center flex-wrap pl-2.5">
              <Button
                asChild
                className="font-poppins font-bold text-sm text-[#FBFCFF] bg-[#FF3951] hover:bg-[#FF3951]/90 leading-[14px] uppercase tracking-[2px] rounded-none px-[35px] py-[17px]"
              >
                <a href="/donation" target="_self">
                  Donate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
