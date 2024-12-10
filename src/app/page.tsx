// Import components used in the page layout
// import { Header } from "@/app/components/header"  // Commented out if not used
import { SiteHeader } from "./components/site-header";  // Header component for the site
import { ProductGallery } from "@/app/components/product-gallery";  // Component for displaying product images
import { ProductInfo } from "@/app/components/product-info";  // Component for displaying product details
import { SimilarProducts } from "@/app/components/similar-products";  // Component for displaying related products
import { Features } from "@/app/components/features";  // Component for site features section
import { PromoBanner } from "@/app/components/promo-banner";  // Promotional banner
import { FooterNav } from "./components/footer-nav";  // Footer navigation links

export default function Page() {
  return (
    // Root wrapper with minimum height and white background
    <div className="min-h-screen bg-white">
      {/* Site header: displays navigation and logo */}
      <SiteHeader />

      {/* Main content section */}
      <main className="container py-8">
        {/* Grid layout for product gallery and info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product images */}
          <ProductGallery />
          {/* Product details */}
          <ProductInfo />
        </div>
        {/* Similar products section */}
        <SimilarProducts />
      </main>

      {/* Features section (e.g., delivery, warranty, etc.) */}
      <Features />

      {/* Promotional banner */}
      <PromoBanner />

      {/* Footer with navigation links */}
      <FooterNav />
    </div>
  );
}
