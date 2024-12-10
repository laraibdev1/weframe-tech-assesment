import Image from "next/image" // Next.js Image component for optimized images
import { Card } from "@/components/ui/card" // Custom Card component for styling individual product cards

// Component to display similar products
export function SimilarProducts() {
  // Sample product data
  const products = Array(5).fill({
    name: "Table", // Name of the product
    price: "159€", // Price of the product
    image: "/chair.jpg" // Image URL for the product
  })

  return (
    <section className="py-12">
      {/* Section title */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
        Articles similaires {/* French for "Similar Products" */}
      </h2>
      
      {/* Grid container for product cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((product, i) => (
          // Key for rendering list items
          <div key={i}>
            {/* Product Card */}
            <Card className="p-4 hover:shadow-lg transition-shadow duration-300 rounded-lg">
              {/* Image container with hover effect */}
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image} // Product image
                  alt={product.name} // Alternate text for accessibility
                  className="object-cover transition-transform duration-300 hover:scale-110" // Hover effect
                  fill // Enables the image to fill its container
                />
              </div>

              {/* Product details */}
              <div className="p-2">
                {/* Product name */}
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                {/* Product price */}
                <p className="text-base font-semibold text-[#00C896]">{product.price}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
