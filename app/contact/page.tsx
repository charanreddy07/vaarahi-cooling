import type { Metadata } from 'next'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { site, telLink, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | VAARAHI COOLING',
  description:
    'Get in touch with Vaarahi Cooling for commercial refrigeration quotes, product enquiries, and support.',
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Get In Touch
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-navy-foreground md:text-5xl text-balance">
            Contact Vaarahi Cooling
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-navy-foreground/70">
            Have a question about our freezers or coolers? Reach out for quotes, availability, and
            expert guidance on the right refrigeration equipment for your business.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold text-foreground">Reach Us Directly</h2>
            <ul className="mt-5 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  {site.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telLink(phone)}
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Business Hours</p>
                  <p className="text-muted-foreground">Mon – Sat: 9:30 AM – 8:00 PM</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink('Hello Vaarahi Cooling, I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-medium text-success-foreground transition-colors hover:bg-success/90"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Vaarahi Cooling location map"
              src="https://www.google.com/maps?q=Arundelpet%2C%20Guntur%2C%20Andhra%20Pradesh&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  )
}
