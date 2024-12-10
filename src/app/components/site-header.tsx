'use client' // Enables client-side rendering for this component

import Link from "next/link" // Next.js Link component for navigation
import Image from "next/image" // Next.js Image component for optimized images
import { Search, LightbulbIcon, Heart, ShoppingCart, ChevronDown } from 'lucide-react' // Icons for UI elements
import { Input } from "@/app/components/ui/input" // Custom Input component
import { Button } from "@/app/components/ui/button" // Custom Button component

// Array of categories for the navigation bar
const categories = [
  "ART DE LA TABLE",
  "MOBILIER",
  "NAPPAGE",
  "MATÉRIEL DE SALLE",
  "CUISINE",
  "BARBECUE",
  "TENTE",
  "CHAUFFAGE",
  "PODIUM - PISTE DE DANSE",
  "SON ET LUMIÈRE",
  "PACKS",
  "CONSOMMABLES"
]

// SiteHeader component for the header section of the website
export function SiteHeader() {
  return (
    <header className="w-full border-b">
      {/* Container for the header content */}
      <div className="container py-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-6">
          {/* Logo Section */}
          <Link href="/" className="">
            <Image
              src="/logo.png"
              alt="weframetech"
              width={300} 
              height={80} 
              className="h-20 w-auto" // Ensures responsive sizing for the logo
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Rechercher un produit" // French placeholder for "Search a product"
                className="w-full pl-4 pr-10 bg-gray-50"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right Navigation Buttons */}
          <div className="flex items-center gap-6">
            {/* Inspirations Button */}
            <Button variant="ghost" className="flex items-center gap-2">
              <LightbulbIcon className="h-5 w-5" />
              <span>Inspirations</span>
            </Button>
            
            {/* Favorites Button */}
            <Button variant="ghost" className="flex items-center gap-2 relative">
              <Heart className="h-5 w-5" />
              <span>Mes favoris</span> {/* French for "My favorites" */}
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                24 {/* Dynamic badge for the number of favorites */}
              </span>
            </Button>
            
            {/* Cart Button */}
            <Button className="bg-[#00A5E9] hover:bg-[#0094d2] text-white flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Panier</span> {/* French for "Cart" */}
            </Button>

            {/* Language Dropdown */}
            <Button variant="ghost" className="flex items-center gap-1">
              FR {/* French language option */}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="mt-4 overflow-x-auto">
          <ul className="flex items-center gap-6 min-w-max">
            {/* Dynamically rendering category links */}
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href="#" // Replace with actual category URLs
                  className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
