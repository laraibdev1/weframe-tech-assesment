// import { Header } from "@/app/components/header"
import { SiteHeader } from "./components/site-header"
import { ProductGallery } from "@/app/components/product-gallery"
import { ProductInfo } from "@/app/components/product-info"
import { SimilarProducts } from "@/app/components/similar-products"
import { Features } from "@/app/components/features"
import { PromoBanner } from "@/app/components/promo-banner"
import { FooterNav } from "./components/footer-nav"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <SiteHeader/>
      <main className="container py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProductGallery />
          <ProductInfo />
        </div>
        <SimilarProducts />
      </main>
      <Features />
      <PromoBanner />
      <FooterNav/>
    </div>
  )
}

