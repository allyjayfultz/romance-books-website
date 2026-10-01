import { cn } from '@/lib/utils'

type Props = { sections: { id: string; label: string }[]; accentText: string }

export function TableOfContents({ sections, accentText }: Props) {
  return (
    <nav aria-label="Contents" className="sticky top-24">
      <p className={cn('text-xs font-semibold uppercase tracking-widest', accentText)}>Contents</p>
      <ol className="mt-3 flex flex-col gap-1 border-l text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-3 text-muted-foreground hover:border-foreground hover:text-foreground">
              <span className="mr-2 tabular-nums text-muted-foreground/70">{i + 1}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
