"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ImageFieldProps {
  images: { src: string; alt: string }[];
  galleryPageUrl: string;
  sectionId: string;
}

export function ImageField({
  images,
  galleryPageUrl,
  sectionId,
}: ImageFieldProps) {
  const router = useRouter();

  const goToGalleryPage = () => {
    router.push(`${galleryPageUrl}#${sectionId}`);
  };

  return (
    <div className="w-full min-h-full py-[10px]">
      <div className="max-w-[1140px] mx-auto px-4 flex flex-wrap gap-5 justify-center">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="w-[285px] p-[10px]">
            <div className="h-[300px]">
              <img
                className="h-[300px] w-[265px] object-cover rounded-[10px]"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Button to navigate to full gallery */}
      <div className="flex justify-center gap-3 mt-4">
        <Button
          onClick={goToGalleryPage}
          className="text-white hover:text-red-700 w-44 h-10 text-[22.3px] font-semibold cursor-pointer"
        >
          Show More
        </Button>
        <Button
          asChild
          className="bg-yellow-300 w-44 h-10 text-green-600 font-extrabold text-[22.3px] uppercase  px-[35px] py-[17px] hover:bg-[#FF3951]/90 hover:text-white"
        >
          <a href="/donation">
            <span className="flex justify-center gap-[5px]">Donate</span>
          </a>
        </Button>
      </div>

      <div className="flex items-center justify-center"></div>
    </div>
  );
}
