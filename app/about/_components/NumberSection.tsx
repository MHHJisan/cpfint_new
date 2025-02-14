"use client";
import React, { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000;
    const increment = Math.ceil(end / (duration / 50));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <p className="text-5xl md:text-6xl font-bold mt-2 inline-block">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
};

const NumbersSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16">
        <div className="lg:w-1/3 flex flex-col justify-center text-left mx-auto lg:mx-0 mb-10 lg:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold font-roboto">
            Our Numbers That Speak
          </h3>
          <p className="font-roboto text-gray-600 mt-2 text-base md:text-lg">
            Driven by numbers, fueled by passion, we’re making a difference
            every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full lg:w-2/3">
          <div className="bg-transparent p-6 rounded-lg">
            <Counter end={550} suffix="+" />
            <h4 className="text-lg md:text-xl font-roboto font-bold">
              Members Worldwide
            </h4>
            <div className="w-full h-0.5 bg-[#fb7e30] mt-4"></div>
          </div>
          <div className="bg-transparent p-6 rounded-lg">
            <Counter end={3000} suffix="+" />
            <h4 className="text-lg md:text-xl font-extrabold">
              People Benefitted
            </h4>
            <div className="w-full h-0.5 bg-[#fb7e30] mt-4"></div>
          </div>
          <div className="bg-transparent p-6 rounded-lg">
            <Counter end={20000} prefix="$" suffix="+" />
            <h4 className="text-lg md:text-xl font-semibold">Funds Raised</h4>
            <div className="w-full h-0.5 bg-[#fb7e30] mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
