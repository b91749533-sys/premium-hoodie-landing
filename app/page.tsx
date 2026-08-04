'use client'

import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import ProductGallery from '@/components/sections/product-gallery'
import ColorSelector from '@/components/sections/color-selector'
import SizeGuide from '@/components/sections/size-guide'
import WhyChoose from '@/components/sections/why-choose'
import Reviews from '@/components/sections/reviews'
import FAQ from '@/components/sections/faq'
import CTA from '@/components/sections/cta'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Features />
      <ProductGallery />
      <ColorSelector />
      <SizeGuide />
      <WhyChoose />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
