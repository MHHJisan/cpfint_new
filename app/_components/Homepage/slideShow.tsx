"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const images = [
  {
    src: "https://cpfint.org/wp-content/uploads/2023/11/332332086_606931390799966_3550377125408866358_n.jpeg",
    alt: "332332086_606931390799966_3550377125408866358_n",
  },
  {
    src: "https://cpfint.org/wp-content/uploads/2023/11/img1.jpeg",
    alt: "img1",
  },
  {
    src: "https://cpfint.org/wp-content/uploads/2023/11/Anaconda-Navigator.jpeg",
    alt: "Anaconda-Navigator",
  },
  {
    src: "https://cpfint.org/wp-content/uploads/2023/11/336584091_6380186302013742_4109805184295451756_n.jpeg",
    alt: "336584091_6380186302013742_4109805184295451756_n",
  },
  {
    src: "https://cpfint.org/wp-content/uploads/2023/11/eye4.jpg",
    alt: "eye4",
  },
];
export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="w-full min-h-[517px] bg-[#042C64] p-10">
      <div className="max-w-[1640px] mx-auto">
        <div className="relative h-[435px]">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Image Carousel"
            className="overflow-hidden pb-8"
          >
            <div
              className="relative flex transition-transform duration-300 h-[405px]"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${images.length}`}
                  className="flex-shrink-0 w-full h-full"
                >
                  <figure className="text-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-[405px] inline-block"
                      decoding="async"
                    />
                  </figure>
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[rgba(237,237,237,0.9)] z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[rgba(237,237,237,0.9)] z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-1 left-0 w-full text-center z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index}
                  className={`inline-block w-1.5 h-1.5 rounded-full mx-1.5 bg-black ${
                    currentSlide === index ? "opacity-100" : "opacity-20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
