import { Hero } from '@/components/home/hero'
import { FeaturedProducts } from '@/components/home/featured-products'
import { Industries } from '@/components/home/industries'
import { WhyChoose } from '@/components/home/why-choose'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Industries />
      <WhyChoose />
    </>
  )
}
