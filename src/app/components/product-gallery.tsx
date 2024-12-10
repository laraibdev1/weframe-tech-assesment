"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/office-chair.jpg",
    "/chair11.jpg",
    "/chair77.jpg",
    "/comfy-chair.jpg",
  ];

  return (
    <div className="border p-4 rounded-lg space-y-4">
      {/* Main Image with Title Card */}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={images[currentImage]}
          alt="Product image"
          className="object-cover"
          fill
          priority
        />
        {/* Title Card */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
          <p className="text-sm text-gray-600">€159</p>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md cursor-pointer transition-transform duration-300 ${
              index === currentImage ? "ring-2 ring-[#00C896]" : ""
            } hover:scale-105`}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}