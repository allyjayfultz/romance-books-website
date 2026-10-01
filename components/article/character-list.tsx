import type { Character } from '@/lib/books'
import { cn } from '@/lib/utils'

const roleStyles: Record<Character['role'], string> = {
  Heroine: 'bg-rose-400/15 text-rose-300 border-rose-400/30',
  Hero: 'bg-sky-400/15 text-sky-300 border-sky-400/30',
  Protagonist: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
  Supporting: 'bg-muted text-muted-foreground border-border',
  Family: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
  Antagonist: 'bg-red-400/15 text-red-300 border-red-400/30',
}

function initials(name: string) {
  return name
    .replace(/["“”(].*?["“”)]/g, '')
    .split(/[\s,&.]+/)
    .filter((w) => /^[A-Z]/.test(w) && !['Mr', 'Mrs', 'Lady', 'Prince', 'Duke', 'Jr'].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {characters.map((c) => (
        <li key={c.name} className="flex gap-4 rounded-xl border bg-card p-4">
          <span
            className={cn('flex size-11 shrink-0 items-center justify-center rounded-full border font-serif font-semibold', roleStyles[c.role])}
            aria-hidden="true"
          >
            {initials(c.name) || c.name[0]}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-serif text-base font-semibold">{c.name}</h3>
              <span className={cn('rounded-full border px-2 py-0.5 text-[11px] font-medium', roleStyles[c.role])}>{c.role}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
