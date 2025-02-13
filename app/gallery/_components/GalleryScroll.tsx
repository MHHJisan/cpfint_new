"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// const images = [
//   {
//     src: "/COVID-19/atd.jpg",
//     alt: "covid-19",
//   },
//   { src: "/eye_campaign/1.jpg", alt: "COVID-19" },
//   { src: "/financial_aid_to_flood/fatf1.jpeg", alt: "Safety Measures" },
//   { src: "/Flood_Project_2024/1.jpg", alt: "Social Distancing" },
//   { src: "/general_donations/general.jpeg", alt: "Vaccine Awareness" },
//   { src: "/iftar_distribution-2023/File_001.png", alt: "Health Guidelines" },
//   { src: "/medical_camp_flood/IMG_2677.png", alt: "Health Guidelines" },
//   { src: "/rickshaw/rickshaw_1.jpeg", alt: "Rickshaw" },
//   { src: "/swing_project/swing2.jpg", alt: "Swing Project" },
// ];

const images = [
  "/financial_aid_to_flood/fatf1.jpeg",
  "/medical_camp_flood/IMG_2677.png",
  "/Flood_Project_2024/1.jpg",
  "/iftar_distribution-2023/File_001.png",
  "/rickshaw/rickshaw_1.jpeg",
  "/skill_development/skill_dev03.jpeg",
  "/medical_help_images/medical_help03.jpeg",
  "/swing_project/swing2.jpg",
  "/COVID-19/covid01.jpg",
  "/aid_to_disable/atd7.jpg",
  "/single_mother/single_mother01.jpg",
  "/eye_campaign/8.jpg",
  "/general_donations/general.jpeg",
];

const GalleryScroll = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const totalImages = images.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center  mx-auto my-16 overflow-hidden py-20">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-700/50 text-white rounded-full"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Image Container */}
      <div className="flex justify-center items-center space-x-2">
        {/* Left Image */}
        <div className="w-1/3 opacity-60 transition-opacity">
          <Image
            src={images[(index - 1 + totalImages) % totalImages]}
            alt={images[(index - 1 + totalImages) % totalImages]}
            width={500} // Set a reasonable width
            height={480} // Set a reasonable height
            quality={75} // Adjust image quality (default is 75)
            loading="lazy"
            className="w-full h-96 rounded-lg object-cover"
          />
        </div>

        {/* Center (Main) Image */}
        <div className="w-1/3 scale-110 transition-transform">
          <Image
            src={images[index]}
            alt={images[index]}
            width={500} // Set a reasonable width
            height={480} // Set a reasonable height
            quality={75} // Adjust image quality (default is 75)
            loading="lazy"
            className="w-full h-96 rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Image */}
        <div className="w-1/3 opacity-60 transition-opacity">
          <Image
            src={images[(index + 1) % totalImages]}
            alt={images[(index + 1) % totalImages]}
            width={500} // Set a reasonable width
            height={480} // Set a reasonable height
            quality={75} // Adjust image quality (default is 75)
            loading="lazy"
            className="w-full h-96 rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-700/50 text-white rounded-full"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default GalleryScroll;
