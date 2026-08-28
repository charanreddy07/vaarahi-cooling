import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Handshake, ShieldCheck, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | VAARAHI COOLING',
  description:
    'Learn about Vaarahi Cooling — a trusted business associate of ICE MAKE delivering commercial refrigeration equipment to businesses across the region.',
}

const values = [
  {
    icon: Target,
    title: 'Purpose-Built Engineering',
    desc: 'Every unit is designed for the demands of Indian commercial environments and high ambient temperatures.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependable Quality',
    desc: 'Commercial-grade components and rigorous standards ensure long service life with minimal downtime.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficiency',
    desc: 'Optimised cooling systems keep running costs low while maintaining consistent temperatures.',
  },
  {
    icon: Handshake,
    title: 'Local Service Support',
    desc: 'Responsive sales and after-sales support so your business never loses its cool.',
  },
]

const stats = [
  { value: '10+', label: 'Product Models' },
  { value: '500+', label: 'Businesses Served' },
  { value: '2°C–8°C', label: 'Precise Cooling' },
  { value: '24/7', label: 'Sales Support' },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            {site.partner} | Business Associate
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-navy-foreground md:text-5xl text-balance">
            About Vaarahi Cooling
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-navy-foreground/70">
            We supply premium commercial refrigeration equipment to restaurants, hotels,
            supermarkets, kirana shops, and beverage vendors — helping businesses keep their
            products fresh, visible, and ready to sell.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/manufacturing.png"
            alt="Commercial refrigeration manufacturing and quality inspection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            Cooling technology businesses can rely on
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              As a proud business associate of ICE MAKE, Vaarahi Cooling brings trusted, industrial
              refrigeration technology to businesses that depend on consistent cold storage every
              single day.
            </p>
            <p>
              Our catalog spans hard top freezers and visi coolers built for durability, energy
              efficiency, and clear product display. Whether you need to store frozen stock or
              showcase chilled beverages, we help you choose the right equipment for your space and
              budget.
            </p>
          </div>
          <Button asChild className="mt-6 rounded-full">
            <Link href="/products">
              Explore Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4 md:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
            What Sets Us Apart
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
