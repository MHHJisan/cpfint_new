"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const donationPrograms = [
  {
    title: "Rikshaw Giveaway",
    link: "/",
    image: "/rickshaw/rickshaw_1.jpeg",
    description:
      "We have donated [Number] electric-powered rickshaws to rickshaw pullers, enhancing their earning potential, and improving their overall quality of life.",
  },
  {
    title: "Sewing Machine Giveaway",
    link: "/",
    image: "/swing_project/swing2.jpg",
    description:
      "In the aftermath of the coronavirus pandemic, we donated 100 sewing machines to the unemployed and poor families.",
  },
  {
    title: "Covid-19 Supply Program",
    link: "https://cpfint.org/what-we-do#covid-19-supply-program",
    image: "/COVID-19/atd5.jpg",
    description:
      "Through our volunteers, we provided food and hygiene items such as masks and sanitizing products to more than 600 individuals during Covid 19.",
  },
  {
    title: "Ramadan Supply Program",
    link: "https://cpfint.org/what-we-do#ramadan-supply-program",
    image: "/iftar_distribution-2023/File_000.png",
    description:
      "During Ramadan (Year), by the grace of almighty Allah we have provided meals and other family essentials to more than 650 people.",
  },
];

export default function OurCampaigns() {
  return (
    <div className="relative w-full bg-transparent p-6">
      {/* Centered Flex Container with Wrap */}
      <div className="flex flex-wrap justify-center gap-6 mx-5">
        {donationPrograms.map((program, index) => (
          <Card
            key={index}
            className="bg-transparent w-[250px] border-2 border-slate-900 rounded-2xl shadow-md"
          >
            <Link href={program.link} target="_blank">
              <Image
                src={program.image}
                alt={program.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </Link>
            <CardContent className="p-4 bg-transparent">
              <h6 className="text-lg text-black font-semibold">
                <Link
                  href={program.link}
                  target="_blank"
                  className="hover:underline"
                >
                  {program.title}
                </Link>
              </h6>
              <p className="text-sm text-black mt-2">{program.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
