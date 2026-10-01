import Link from 'next/link'
import type { Book } from '@/lib/books'
import { accents } from '@/lib/accents'
import { cn } from '@/lib/utils'

export function BookCard({ book }: { book: Book }) {
  const a = accents[book.accent]
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/25"
    >
      <div className={cn('h-1.5 bg-gradient-to-r', a.bar)} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className={cn('rounded-full border px-2.5 py-0.5 font-medium', a.border, a.softBg, a.text)}>
            {book.subgenre}
          </span>
          <span className="text-muted-foreground">{book.published}</span>
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug group-hover:underline">{book.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">by {book.author}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">{book.tagline}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {book.series ? `${book.series} series` : 'Standalone'} · {book.characters.length} characters
        </p>
      </div>
    </Link>
  )
}
