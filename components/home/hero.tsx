import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, telLink, whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-showroom.png"
          alt="Commercial refrigeration showroom with beverage coolers and freezers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24 md:px-6 md:py-32">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-navy-foreground">
          {site.partner}
          <span className="text-navy-foreground/50">|</span>
          <span className="text-primary-foreground">Business Associate</span>
        </span>

        <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight text-navy-foreground text-balance md:text-6xl">
          Commercial Refrigeration Solutions for Modern Businesses
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-navy-foreground/80">
          High-performance freezers and visi coolers built for restaurants, hotels, kirana shops,
          supermarkets, and beverage vendors across the region.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">
              Get Quote
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
          >
            <a href={telLink(site.phones[0])}>
              <Phone className="mr-1 h-4 w-4" />
              Call Sales
            </a>
          </Button>
          <Button asChild size="lg" className="rounded-full bg-success text-success-foreground hover:bg-success/90">
            <a
              href={whatsappLink('Hello Vaarahi Cooling, I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              WhatsApp Inquiry
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
