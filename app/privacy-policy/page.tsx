import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${site.brand} — how we collect, use, and protect your information.`,
}

const sections = [
  {
    heading: 'Information We Collect',
    body: [
      'When you contact us through our enquiry form, phone, or WhatsApp, we may collect your name, phone number, email address, and any details you choose to share about your refrigeration requirements.',
      'We do not sell products directly through this website; information is used solely to respond to your enquiry and provide a quotation.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'To respond to product enquiries and provide pricing and specifications.',
      'To arrange demonstrations, delivery, installation, and after-sales service.',
      'To send relevant updates about products and offers, only where you have expressed interest.',
    ],
  },
  {
    heading: 'Information Sharing',
    body: [
      `We do not sell or rent your personal information to third parties. Details may be shared with our manufacturing partner ${site.partner} strictly to fulfil your order, warranty, or service request.`,
    ],
  },
  {
    heading: 'Data Security',
    body: [
      'We apply reasonable safeguards to protect the information you provide against unauthorised access, alteration, or disclosure.',
    ],
  },
  {
    heading: 'Your Choices',
    body: [
      'You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      `For any questions about this privacy policy, reach us at ${site.email} or call ${site.phones[0]}.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="border-b border-border bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Legal</p>
          <h1 className="mt-3 text-pretty text-3xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            Your privacy matters to us. This policy explains what information {site.brand} collects and
            how it is used.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">{s.heading}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {s.body.map((p) => (
                  <p key={p} className="leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            Have a question? Contact us →
          </Link>
        </div>
      </section>
    </main>
  )
}
