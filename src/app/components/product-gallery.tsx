"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery() {
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);
  
  // Array of image sources
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
          src={images[currentImage]} // Dynamically display the current image based on the state
          alt="Product image"
          className="object-cover" // Ensures the image covers the area while maintaining its aspect ratio
          fill // Makes the image fill the container
          priority // Prioritizes loading this image
        />
        
        {/* Title Card displayed over the image */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
          <p className="text-sm text-gray-600">€159</p>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {/* Mapping over the images array to display thumbnails */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md cursor-pointer transition-transform duration-300 ${
              index === currentImage ? "ring-2 ring-[#00C896]" : "" // Highlight selected thumbnail with a ring
            } hover:scale-105`} // Apply scale effect on hover
            onClick={() => setCurrentImage(index)} // Update the currentImage state when a thumbnail is clicked
          >
            <Image
              src={src} // Source of the thumbnail image
              alt={`Thumbnail ${index + 1}`} // Alt text for the thumbnail
              className="object-cover" // Ensures the thumbnail image covers the area
              fill // Makes the thumbnail fill the container
            />
          </div>
        ))}
      </div>
    </div>
  );
}
