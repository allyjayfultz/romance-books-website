import type { Book } from '@/lib/books'
import { accents } from '@/lib/accents'
import { cn } from '@/lib/utils'

export function Infobox({ book }: { book: Book }) {
  const a = accents[book.accent]
  const heroine = book.characters.find((c) => c.role === 'Heroine' || c.role === 'Protagonist')
  const hero = book.characters.find((c) => c.role === 'Hero' || (c.role === 'Protagonist' && c !== heroine))

  const rows: [string, string][] = [
    ['Author', book.author],
    ['First published', String(book.published)],
    ['Series', book.series ?? 'Standalone'],
    ['Subgenre', book.subgenre],
    ['Setting', book.setting],
  ]
  if (heroine && hero) rows.push(['Central couple', `${heroine.name} & ${hero.name}`])
  if (book.seriesEntries) rows.push(['Books in series', String(book.seriesEntries.length)])

  return (
    <aside aria-label={`${book.title} at a glance`} className={cn('overflow-hidden rounded-xl border bg-card lg:sticky lg:top-24', a.border)}>
      <div className={cn('bg-gradient-to-br px-5 py-6', a.bar)}>
        <p className="text-xs font-semibold uppercase tracking-widest text-background/80">At a glance</p>
        <p className="mt-1 font-serif text-xl font-semibold leading-snug text-background">{book.title}</p>
      </div>
      <dl className="divide-y text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[110px_1fr] gap-3 px-5 py-3">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="font-medium leading-snug">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
