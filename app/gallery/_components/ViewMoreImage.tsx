"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageFieldProps {
  images: { src: string; alt: string }[];
}

export function ViewMoreImage({ images }: ImageFieldProps) {
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 images
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more images on each click
  };

  // Function to close the modal
  const closeModal = () => setSelectedIndex(null);

  // Handle next and previous image navigaion
  const showNextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => ((prevIndex ?? 0) + 1) % images.length);
    }
  };

  const showPrevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prevIndex) =>
          (prevIndex !== null
            ? prevIndex - 1 + images.length
            : images.length - 1) % images.length
      );
    }
  };

  // Listen for "Esc" key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal(); // Close modal if Esc key is pressed
      }
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPrevImage();
    };

    // Attach event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="w-full min-h-full py-[10px]">
      <div className="mx-auto px-4 flex flex-wrap gap-5 justify-center">
        {images.slice(0, visibleCount).map((image, index) => (
          <div key={index} className="w-[285px] p-[10px]">
            <div
              className="h-[300px] cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                className="h-[300px] w-[265px] object-cover rounded-[10px]"
                src={image.src}
                alt={image.alt}
                width={600} // Set a reasonable width
                height={480} // Set a reasonable height
                quality={100}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Show More button (Hidden when all images are shown) */}
      {visibleCount < images.length && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={showMore}
            className="text-orange-300 hover:bg-green-400 hover:text-black font-bold tracking-widest cursor-pointer"
          >
            View More
          </Button>
        </div>
      )}

      {/* Modal for viewing image */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal} // Close on background click
        >
          <div
            className="relative flex flex-row items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            {/* Previous Button */}
            <button
              className="absolute left-0 p-4 text-white text-3xl bg-gray-800 rounded-full shadow-md hover:bg-gray-600"
              onClick={showPrevImage}
            >
              ❮
            </button>

            <Image
              src={images[selectedIndex].src}
              alt="Enlarged View"
              width={1280}
              height={720}
              quality={100}
              loading="lazy"
              className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
              style={{ aspectRatio: "16 / 9" }}
            />

            {/* Next Button */}
            <button
              className="absolute right-0 p-4 text-white text-3xl bg-gray-800 rounded-full shadow-md hover:bg-gray-600"
              onClick={showNextImage}
            >
              ❯
            </button>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 rounded-full px-2 py-1"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
