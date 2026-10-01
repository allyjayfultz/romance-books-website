import type { Relationship } from '@/lib/books'
import { cn } from '@/lib/utils'

type Props = { relationships: Relationship[]; accentText: string; accentBorder: string }

export function RelationshipList({ relationships, accentText, accentBorder }: Props) {
  return (
    <ul className="flex flex-col gap-3">
      {relationships.map((r) => (
        <li key={r.pair} className={cn('rounded-xl border-l-4 bg-card px-5 py-4', accentBorder)}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-serif text-lg font-semibold">{r.pair}</p>
            <span className={cn('text-xs font-medium uppercase tracking-wider', accentText)}>{r.type}</span>
          </div>
          <p className="mt-1.5 leading-relaxed text-foreground/85">{r.description}</p>
        </li>
      ))}
    </ul>
  )
}
