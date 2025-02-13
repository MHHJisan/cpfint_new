"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1033/600/400",
  "https://picsum.photos/id/1044/600/400",
  "https://picsum.photos/id/1050/600/400",
  "https://picsum.photos/id/1060/600/400",
  "https://picsum.photos/id/1073/600/400",
  "https://picsum.photos/id/1084/600/400",
  "https://picsum.photos/id/1092/600/400",
  "https://picsum.photos/id/1100/600/400",
  "https://picsum.photos/id/1113/600/400",
  "https://picsum.photos/id/1125/600/400",
  "https://picsum.photos/id/1137/600/400",
  "https://picsum.photos/id/1149/600/400",
  "https://picsum.photos/id/1155/600/400",
];

const ImageSlider = () => {
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
    <div className="relative w-full  mx-auto overflow-hidden">
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
          <img
            src={images[(index - 1 + totalImages) % totalImages]}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Center (Main) Image */}
        <div className="w-1/3 scale-110 transition-transform">
          <img
            src={images[index]}
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Image */}
        <div className="w-1/3 opacity-60 transition-opacity">
          <img
            src={images[(index + 1) % totalImages]}
            className="w-full h-auto rounded-lg object-cover"
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

export default ImageSlider;
