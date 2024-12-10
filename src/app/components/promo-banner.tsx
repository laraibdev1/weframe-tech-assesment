'use client'

import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Input } from "@/app/components/ui/input"

export function PromoBanner() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
    alert("Subscribed successfully!");
  };

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src="/rchair.jpg"
              alt="Modern living room with green sofa"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/fallback.jpg";
              }}
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-pink-50/80">
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              S'inscrire & économiser{" "}
              <span className="text-[#4CD6E3]">10%</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="john@doe.com"
                aria-label="Email Address"
                required
                className="flex-1 bg-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <button
                type="submit"
                className="bg-[#4CD6E3] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3bc5d2] transition-colors"
              >
                S'INSCRIRE
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
