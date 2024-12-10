import Image from "next/image"
import { Card } from "@/components/ui/card"

export function SimilarProducts() {
  const products = Array(5).fill({
    name: "Table",
    price: "159€",
    image: "/chair.jpg"
  })

  return (
    <section className="py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Articles similaires</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((product, i) => (
          <div key={i}>
            <Card className="p-4 hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  fill
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-base font-semibold text-[#00C896]">{product.price}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
