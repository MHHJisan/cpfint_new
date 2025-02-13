import React from "react";

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full min-h-full">
      <header
        className="w-full p-3 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
      >
        <h3 className="font-bold text-[36px] leading-[46.8px] text-white m-0 p-0 flex items-center justify-center">
          {title}
        </h3>
      </header>
    </div>
  );
}
