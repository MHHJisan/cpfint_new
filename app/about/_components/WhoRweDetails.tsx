import React from "react";

export function WhoRweDetails() {
  return (
    <div className="w-full min-h-full bg-[url('/img/blue-bg-pattern.png')] flex flex-col lg:flex-row mt-8 py-8 px-16 gap-8">
      <div className="w-full p-3 bg-cover bg-center text-[rgba(0,0,0,0.65)] text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out">
        <p className="font-bold text-[36px] leading-[46.8px] text-white m-0 p-0 ">
          We are a team of change-makers who believe that every helping hand can
          make a difference and create a better future for all.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-white">
          Driven by the spirit of giving, we, a group of individuals from
          Companigonj, Noakhali, find fulfillment in bringing smiles to those in
          need. Our roots and the generosity we've received from our nation and
          society call us back to give back. This is the driving force behind
          our efforts to make a positive impact on the world around us.
        </p>
        <p className="text-white">
          We are empowering rural communities through self-employment,
          single-mother aid, and educational assistance. We're always looking
          for the best, most sustainable, and impactful ways to help those in
          need.
        </p>
      </div>
    </div>
  );
}
