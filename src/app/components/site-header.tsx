'use client'

import Link from "next/link"
import Image from "next/image"
import { Search, LightbulbIcon, Heart, ShoppingCart, ChevronDown } from 'lucide-react'
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"

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

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="container py-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="">
  <Image
    src="/logo.png"
    alt="weframetech"
    width={300} // Increased width
    height={80} // Increased height
    className="h-20 w-auto" // Adjusted class for responsive scaling
  />
</Link>

          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Rechercher un produit"
                className="w-full pl-4 pr-10 bg-gray-50"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <LightbulbIcon className="h-5 w-5" />
              <span>Inspirations</span>
            </Button>
            
            <Button variant="ghost" className="flex items-center gap-2 relative">
              <Heart className="h-5 w-5" />
              <span>Mes favoris</span>
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                24
              </span>
            </Button>
            
            <Button className="bg-[#00A5E9] hover:bg-[#0094d2] text-white flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Panier</span>
            </Button>

            <Button variant="ghost" className="flex items-center gap-1">
              FR
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="mt-4 overflow-x-auto">
          <ul className="flex items-center gap-6 min-w-max">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href="#"
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

