import Link from 'next/link'
import { Snowflake } from 'lucide-react'
import { site } from '@/lib/site'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.brand} home`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Snowflake className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-xs font-semibold tracking-widest ${light ? 'text-navy-foreground/70' : 'text-muted-foreground'}`}
        >
          {site.partner}
        </span>
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${light ? 'text-navy-foreground' : 'text-foreground'}`}
        >
          VAARAHI<span className="text-primary"> COOLING</span>
        </span>
      </span>
    </Link>
  )
}
