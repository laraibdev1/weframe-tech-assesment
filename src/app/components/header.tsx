import { Search, ShoppingCart, User } from 'lucide-react'
import { Input } from "@/app/components/ui/input"

export function Header() {
  return (
    <header className="bg-[#00C896] text-white py-2 sticky top-0 z-50 transition-transform transform duration-500 ease-in-out">
      <div className="container flex items-center justify-between">
        {/* Search Input Section */}
        <div className="flex items-center gap-4 flex-1 opacity-100 transition-opacity ease-in-out">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Rechercher un produit, une marque..." 
              className="pl-10 pr-4 py-2 bg-white text-black rounded-full focus:ring-2 focus:ring-[#00C896] transition-all duration-300 ease-in-out" 
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <span className="text-sm hidden md:inline-block hover:scale-105 transition-all duration-200">
            Bonjour
          </span>
          
          {/* User Icon */}
          <div className="hover:scale-110 transition-all duration-200">
            <User className="h-6 w-6 cursor-pointer" />
          </div>

          {/* Shopping Cart Icon */}
          <div className="hover:scale-110 transition-all duration-200">
            <ShoppingCart className="h-6 w-6 cursor-pointer" />
          </div>
        </nav>
      </div>
    </header>
  )
}
