"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface SectionTextFieldProps {
  shortText: string;
  fullText: string;
}

export function SectionTextField({
  shortText,
  fullText,
}: SectionTextFieldProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex flex-col min-h-[95px]">
      <div className="flex flex-col gap-5 w-full max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col text-black font-[Poppins] text-lg">
          <div className="py-0">
            <p className="mb-7 text-center">{shortText}</p>
            {isExpanded && <p className="mb-7 text-center">{fullText}</p>}
            {/* Button Centered Below */}
            <div className="flex justify-center">
              <Button
                onClick={toggleReadMore}
                className="text-white font-bold text-[22px] p-5 cursor-pointer hover:text-red-600"
              >
                {isExpanded ? "Show Less -" : "Read More +"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
