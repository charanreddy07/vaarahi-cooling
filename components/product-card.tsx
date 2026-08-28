import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { type Product, formatINR } from '@/lib/site'

export function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {product.badge && (
        <div className="bg-secondary px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
          {product.badge}
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">{product.name}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-success" aria-hidden="true" />
            {product.volumeSummary}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2 rounded-lg bg-accent px-3 py-2">
            <span className="font-display text-xl font-extrabold text-primary">
              {formatINR(product.price)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {formatINR(product.mrp)}
            </span>
            <span className="rounded bg-success px-2 py-0.5 text-xs font-semibold text-success-foreground">
              {discount}% OFF
            </span>
          </div>

          <Button asChild variant="outline" className="w-full">
            <Link href={`/products#${product.id}`}>View Full Specs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
