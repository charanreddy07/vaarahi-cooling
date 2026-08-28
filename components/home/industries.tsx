import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Utensils, Building2, Store, ShoppingCart, IceCream, CupSoda } from 'lucide-react'
import { Button } from '@/components/ui/button'

const industries = [
  { icon: Utensils, label: 'Restaurants' },
  { icon: Building2, label: 'Hotels' },
  { icon: Store, label: 'Kirana Shops' },
  { icon: ShoppingCart, label: 'Supermarkets' },
  { icon: IceCream, label: 'Ice Cream Stores' },
  { icon: CupSoda, label: 'Cool Drinks' },
]

const gallery = [
  { src: '/images/ind-restaurant.png', alt: 'Restaurant' },
  { src: '/images/ind-supermarket.png', alt: 'Supermarket' },
  { src: '/images/ind-cafe.png', alt: 'Cafe' },
  { src: '/images/ind-hotel.png', alt: 'Hotel' },
  { src: '/images/ind-icecream.png', alt: 'Ice cream store' },
  { src: '/images/ind-drinks.png', alt: 'Cold drinks cooler' },
]

export function Industries() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Versatile Cooling Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Whether you run a bustling restaurant, a premium hotel, or an industrial-grade retail
            store, our refrigeration equipment is engineered to keep your perishable goods perfectly
            chilled and safe.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {industries.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <Button asChild className="mt-8 rounded-full">
            <Link href="/products">
              View Equipment
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
