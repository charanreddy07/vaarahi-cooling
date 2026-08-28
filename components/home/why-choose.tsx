import { Check, TrendingUp, Sparkles, Eye, BarChart3 } from 'lucide-react'

const reasons = [
  'Reliable cooling performance in high temperatures',
  'Energy efficient refrigeration systems saving electricity',
  'Durable commercial-grade construction',
  'Long product lifespan with low maintenance',
  'Specifically designed for retail and food businesses',
  'Trusted refrigeration technology backed by support',
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Shelf Life',
    desc: 'Keep perishable items fresh and safe for longer.',
  },
  {
    icon: Sparkles,
    title: 'Maintain Freshness',
    desc: 'Ensure every drink is served chilled and refreshing.',
  },
  {
    icon: Eye,
    title: 'Improve Display',
    desc: 'Attractive visibility for cold drinks to trigger impulse buys.',
  },
  {
    icon: BarChart3,
    title: 'Boost Sales',
    desc: 'Better refrigeration leads to higher sales.',
  },
]

export function WhyChoose() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Why Businesses Choose Our Cooling Solutions
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        <ul className="mt-8 space-y-4">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15">
                <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
          Key Customer Benefits
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
