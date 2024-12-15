import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProductsSection } from '@/components/products-section'
import { BlogSection } from '@/components/blog-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <BlogSection />
    </main>
  )
}

