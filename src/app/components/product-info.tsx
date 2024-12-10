import { Heart, Star } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function ProductInfo() {
  return (
    <div className="space-y-8 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Product Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Mathéo Raphaël
          </h1>
          <p className="text-lg text-gray-600">Luxury Brand</p>
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">(120 reviews)</p>
          </div>
        </div>
        <div>
          <Button size="icon" variant="outline" className="rounded-full">
            <Heart className="h-5 w-5 text-gray-800" />
          </Button>
        </div>
      </div>

      {/* Product Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/aesthetic-chair.jpg"
          alt="Product"
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/blue-chair.jpg"
            alt="Thumbnail"
            className="w-full h-auto rounded-lg object-cover"
          />
          <img
            src="/relaxing-chair.jpg"
            alt="Thumbnail"
            className="w-full h-auto rounded-lg object-cover"
          />
          <img
            src="vibrant-chair.jpg"
            alt="Thumbnail"
            className="w-full h-auto rounded-lg object-cover"
          />
          <img
            src="wooden-chair.jpg"
            alt="Thumbnail"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Description</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Experience unmatched luxury with the ANSHUL SHIRBHATE collection.
          Crafted with precision and designed to perfection, our products blend
          timeless elegance with modern aesthetics. Made from premium materials
          and engineered for durability, this is the ultimate statement piece
          for your wardrobe.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Premium quality materials</li>
          <li>Timeless and elegant design</li>
          <li>Available in multiple sizes and colors</li>
          <li>Eco-friendly and sustainably crafted</li>
        </ul>
      </div>

      {/* Specifications Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Specifications
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>
            <span className="font-semibold">Material:</span> 100% Genuine Leather
          </p>
          <p>
            <span className="font-semibold">Warranty:</span> 2 Years
          </p>
          <p>
            <span className="font-semibold">Weight:</span> 1.2kg
          </p>
          <p>
            <span className="font-semibold">Dimensions:</span> 30 x 20 x 15cm
          </p>
          <p>
            <span className="font-semibold">Color:</span> Black, Tan, Navy Blue
          </p>
          <p>
            <span className="font-semibold">Care Instructions:</span> Clean
            with a dry cloth
          </p>
        </div>
      </div>

      {/* Add to Cart Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Price</h2>
        <p className="text-4xl font-bold text-green-600">$299.99</p>
        <Button className="w-full bg-[#00C896] hover:bg-[#00B085] text-white text-lg py-4 rounded-lg shadow-md">
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
}
