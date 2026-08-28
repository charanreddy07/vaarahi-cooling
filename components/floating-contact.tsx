import { Phone, MessageCircle } from 'lucide-react'
import { site, telLink, whatsappLink } from '@/lib/site'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink('Hello Vaarahi Cooling, I would like a quote for commercial refrigeration equipment.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-success-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={telLink(site.phones[0])}
        aria-label="Call sales"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  )
}
