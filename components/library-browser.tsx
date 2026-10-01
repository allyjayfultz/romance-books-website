'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { Book } from '@/lib/books'
import { BookCard } from '@/components/book-card'
import { cn } from '@/lib/utils'

export function LibraryBrowser({ books }: { books: Book[] }) {
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState<string>('All')

  const genres = useMemo(() => ['All', ...Array.from(new Set(books.map((b) => b.subgenre))).sort()], [books])

  const q = query.trim().toLowerCase()
  const filtered = books.filter((book) => {
    if (genre !== 'All' && book.subgenre !== genre) return false
    if (!q) return true
    return (
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.series?.toLowerCase().includes(q) ||
      book.characters.some((c) => c.name.toLowerCase().includes(q))
    )
  })

  return (
    <section id="library" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-serif text-3xl font-semibold">The Library</h2>
          <p className="mt-1 text-muted-foreground">Search by title, author, series or character.</p>
        </div>
        <label className="relative w-full md:w-80">
          <span className="sr-only">Search the library</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “Darcy” or “Maas”"
            className="h-11 w-full rounded-lg border bg-card pl-9 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by subgenre">
        {genres.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGenre(g)}
            aria-pressed={genre === g}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
              genre === g
                ? 'border-primary bg-primary text-primary-foreground'
                : 'bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            {g}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((book) => (
            <li key={book.slug}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-lg border border-dashed p-8 text-center text-muted-foreground">
          No entries match your search.
        </p>
      )}
    </section>
  )
}
