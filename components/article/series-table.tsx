import type { SeriesEntry } from '@/lib/books'
import { cn } from '@/lib/utils'

type Props = { entries: SeriesEntry[]; currentTitle: string; accentText: string }

export function SeriesTable({ entries, currentTitle, accentText }: Props) {
  const hasFocus = entries.some((e) => e.focus)
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            <th scope="col" className="w-12 px-4 py-3 font-medium">#</th>
            <th scope="col" className="px-4 py-3 font-medium">Title</th>
            {hasFocus && <th scope="col" className="px-4 py-3 font-medium">Couple / focus</th>}
            <th scope="col" className="px-4 py-3 text-right font-medium">Year</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {entries.map((e) => {
            const current = e.title === currentTitle
            return (
              <tr key={e.order} className={cn('bg-card', current && 'bg-accent/50')} aria-current={current ? 'true' : undefined}>
                <td className="px-4 py-3 tabular-nums text-muted-foreground">{e.order}</td>
                <td className={cn('px-4 py-3 font-medium', current && accentText)}>
                  {e.title}
                  {current && <span className="ml-2 text-xs font-normal text-muted-foreground">(this entry)</span>}
                </td>
                {hasFocus && <td className="px-4 py-3 text-muted-foreground">{e.focus ?? '—'}</td>}
                <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">{e.year}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
