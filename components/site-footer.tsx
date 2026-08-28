import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { site, telLink } from '@/lib/site'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'All Products' },
  { href: '/about', label: 'About Company' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
]

const productLinks = [
  { href: '/products#freezers', label: 'Hard Top Freezers' },
  { href: '/products#coolers', label: 'Visi Coolers' },
  { href: '/products#coolers', label: 'Water Dispensers' },
  { href: '/products#freezers', label: 'Deep Freezers' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            {site.tagline}
          </p>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs">
            <p className="font-semibold text-navy-foreground">Business Associate Partner</p>
            <p className="text-navy-foreground/70">{site.brand}</p>
            <p className="text-navy-foreground/70">{site.legalName}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Products
          </h3>
          <ul className="space-y-3 text-sm">
            {productLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-navy-foreground/70">
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={telLink(phone)}
                  className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-navy-foreground/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} ICE MAKE | VAARAHI COOLING. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-navy-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
