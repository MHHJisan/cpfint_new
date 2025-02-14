"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MenuBar() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white relative border-b border-[#eaeaea]">
      <div className="container mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-20">
        {/* Logo Section */}
        <div className="flex h-[70px] sm:h-[90px] items-center">
          <a href="/" rel="home" aria-current="page">
            <img
              width="130"
              height="50"
              src="/img/Black-White-Logo1.png"
              alt="cpfint"
              className="max-w-[130px] w-[130px] h-[50px] transition-all duration-200"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Section - Desktop */}
        <nav className="hidden md:flex items-center font-roboto font-medium">
          <ul className="flex space-x-6 text-[#072B61] text-[17px]">
            <li>
              <a
                href="/"
                className={cn(
                  "text-[18px] font-extrabold px-4 py-2",
                  currentPath === "/" && "text-[#FF3951]"
                )}
              >
                Home
              </a>
            </li>
            {["About", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className={cn(
                    "text-[18px] font-extrabold px-4 py-2",
                    currentPath === `/${item.toLowerCase()}` && "text-[#FF3951]"
                  )}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Donate Button */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="font-bold text-sm text-white bg-[#FF3951] hover:bg-[#FF3951]/90 uppercase tracking-wide px-6 py-3"
          >
            <a href="/donation">Donate</a>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg absolute w-full left-0 top-[70px] z-50"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="/"
                  className={cn(
                    "block text-[18px] px-6 py-2",
                    currentPath === "/" && "text-[#FF3951]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              {["About", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className={cn(
                      "block text-[18px] px-6 py-2",
                      currentPath === `/${item.toLowerCase()}` &&
                        "text-[#FF3951]"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {/* Donate Button in Mobile Menu */}
              <li>
                <Button
                  asChild
                  className="w-full text-white bg-[#FF3951] hover:bg-[#FF3951]/90 uppercase tracking-wide px-6 py-3"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="/donation">Donate</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
