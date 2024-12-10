import { Search } from 'lucide-react'
import { Input } from "@/app/components/ui/input"
import Image from 'next/image' // for optimized image handling

export function ProductHeader() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-8 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#00C896]" 
            />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <button className="text-sm transition-all duration-300 ease-in-out hover:text-[#00C896]">Sign in</button>
          <button className="text-sm transition-all duration-300 ease-in-out hover:text-[#00C896]">Cart (0)</button>
        </nav>
      </div>
      <div className="container mt-4 flex justify-center">
        <Image
          src="/item.jpg"  // Image from the public folder
          alt="Item"  // Provide meaningful alt text
          width={192}  // Width of the image
          height={192}  // Height of the image
          className="rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </header>
  )
}
