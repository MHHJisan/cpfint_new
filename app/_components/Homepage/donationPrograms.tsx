"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const donationPrograms = [
  {
    title: "Rikshaw Giveaway",
    link: "https://cpfint.org/what-we-do#rickshaw-giving-program",
    image: "/rickshaw/rickshaw_1.jpeg",
    description:
      "We have donated [Number] electric-powered rickshaws to rickshaw pullers, enhancing their earning potential, and improving their overall quality of life.",
  },
  {
    title: "Sewing Machine Giveaway",
    link: "https://cpfint.org/gallery#swing-machine-giveaway",
    image: "/swing_project/swing2.jpg",
    description:
      "In the aftermath of the coronavirus pandemic, we donated 100 sewing machines to the unemployed and poor families.",
  },
  {
    title: "Covid-19 Supply Program",
    link: "https://cpfint.org/gallery#covid-19-supply-program",
    image: "/COVID-19/atd5.jpg",
    description:
      "Through our volunteers, we provided food and hygiene items such as masks and sanitizing products to more than 600 individuals during Covid 19.",
  },
  {
    title: "Ramadan Supply Program",
    link: "https://cpfint.org/gallery#ramadan-supply-program",
    image: "/iftar_distribution-2023/File_000.png",
    description:
      "During Ramadan (Year), by the grace of almighty Allah we have provided meals and other family essentials to more than 650 people.",
  },
];

export default function DonationPrograms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const scrollElement = scrollRef.current;

    let scrollSpeed = 0.5;
    let requestId: number;
    // let scrollAmount = 0;

    function scroll() {
      if (!scrollElement) return;

      scrollElement.scrollLeft += scrollSpeed;

      if (
        scrollElement.scrollLeft >=
        scrollElement.scrollWidth - scrollElement.clientWidth
      ) {
        scrollElement.scrollLeft = 0;
      }

      requestId = requestAnimationFrame(scroll);
    }

    requestId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-transparent p-6">
      {/* Infinite Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-scoll scrollbar-none"
      >
        {[...donationPrograms, ...donationPrograms].map((program, index) => (
          <Card
            key={index}
            className="bg-transparent min-w-[280px] md:min-w-[320px] lg:min-w-[360px] overflow-hidden border-4 border-amber-300 rounded-2xl shadow-md"
          >
            <Link href={program.link} target="_blank">
              <Image
                src={program.image}
                alt={program.title}
                width={600}
                height={600}
                className="w-full h-48 object-cover"
              />
            </Link>
            <CardContent className="p-4 bg-transparent">
              <h6 className="text-lg text-white font-semibold">
                <Link
                  href={program.link}
                  target="_blank"
                  className="hover:underline"
                >
                  {program.title}
                </Link>
              </h6>
              <p className="text-sm text-white mt-2">{program.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
