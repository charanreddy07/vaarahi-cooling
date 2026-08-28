'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site, whatsappLink } from '@/lib/site'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const waMessage = `Hello ${site.brand}!%0AName: ${form.name}%0APhone: ${form.phone}%0AProduct: ${form.product}%0AMessage: ${form.message}`

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been recorded. For the fastest response, send us the same details on
          WhatsApp and our sales team will get back to you shortly.
        </p>
        <Button asChild className="mt-6 rounded-full bg-success text-success-foreground hover:bg-success/90">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue on WhatsApp
          </a>
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <h3 className="font-display text-xl font-bold text-foreground">Request a Quote</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in your details and our team will reach out with pricing and availability.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
            placeholder="+91 00000 00000"
          />
        </div>

        <div>
          <label htmlFor="product" className="mb-1.5 block text-sm font-medium text-foreground">
            Product of Interest
          </label>
          <select
            id="product"
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
          >
            <option value="">Select a product</option>
            <option>Hard Top Freezer</option>
            <option>Visi Cooler</option>
            <option>Water Dispenser</option>
            <option>Other / Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
            placeholder="Tell us about your requirement"
          />
        </div>

        <Button type="submit" className="w-full rounded-full">
          <Send className="mr-1 h-4 w-4" />
          Send Enquiry
        </Button>
      </div>
    </form>
  )
}
