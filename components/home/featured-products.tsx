'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/site'

const tabs = [
  { key: 'Freezer', label: 'Hard Top Freezers' },
  { key: 'Cooler', label: 'Visi Coolers' },
] as const

export function FeaturedProducts() {
  const [active, setActive] = useState<'Freezer' | 'Cooler'>('Cooler')
  const shown = products.filter((p) => p.category === active).slice(0, 3)

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
          Featured Commercial Products
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
      </div>

      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === tab.key
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
