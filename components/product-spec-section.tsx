import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, whatsappLink, type Product, formatINR } from '@/lib/site'

export function ProductSpecSection({ product, reverse }: { product: Product; reverse?: boolean }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div id={product.id} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className={`grid gap-8 md:grid-cols-2 md:items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          {product.badge && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              {product.badge}
            </span>
          )}
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {product.categoryLabel}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            {product.name}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{product.shortDesc}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="font-display text-2xl font-extrabold text-primary">
              {formatINR(product.price)}
            </span>
            <span className="text-muted-foreground line-through">{formatINR(product.mrp)}</span>
            <span className="rounded bg-success px-2 py-0.5 text-xs font-semibold text-success-foreground">
              {discount}% OFF
            </span>
          </div>

          <dl className="mt-6 divide-y divide-border rounded-lg border border-border">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
                <dt className="text-muted-foreground">{spec.label}</dt>
                <dd className="text-right font-medium text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Ideal For
            </p>
            <div className="flex flex-wrap gap-2">
              {product.idealFor.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-foreground"
                >
                  <Check className="h-3 w-3 text-success" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a
                href={whatsappLink(`Hello ${site.brand}, I'm interested in the ${product.name}. Please share more details.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Inquiry
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
