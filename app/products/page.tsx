import type { Metadata } from 'next'
import { Snowflake, Refrigerator } from 'lucide-react'
import { ProductSpecSection } from '@/components/product-spec-section'
import { products } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products | VAARAHI COOLING',
  description:
    'Browse Vaarahi Cooling commercial refrigeration: hard top freezers and visi coolers with full specifications and pricing.',
}

export default function ProductsPage() {
  const freezers = products.filter((p) => p.category === 'Freezer')
  const coolers = products.filter((p) => p.category === 'Cooler')

  return (
    <>
      <section className="border-b border-border bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Our Catalog
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-navy-foreground md:text-5xl text-balance">
            Commercial Refrigeration Products
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-navy-foreground/70">
            Explore our full range of hard top freezers and visi coolers, engineered for reliable
            cooling, energy efficiency, and long-lasting commercial performance.
          </p>
        </div>
      </section>

      <section id="freezers" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Refrigerator className="h-5 w-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Hard Top Freezers
          </h2>
        </div>
        <div className="space-y-8">
          {freezers.map((product, i) => (
            <ProductSpecSection key={product.id} product={product} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section id="coolers" className="scroll-mt-20 border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Snowflake className="h-5 w-5 text-primary" aria-hidden="true" />
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Visi Coolers
            </h2>
          </div>
          <div className="space-y-8">
            {coolers.map((product, i) => (
              <ProductSpecSection key={product.id} product={product} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
