import Link from 'next/link'
import type { Book } from '@/lib/books'
import { accents } from '@/lib/accents'
import { cn } from '@/lib/utils'

export function AuthorIndex({ books }: { books: Book[] }) {
  const byAuthor = new Map<string, Book[]>()
  for (const book of books) {
    byAuthor.set(book.author, [...(byAuthor.get(book.author) ?? []), book])
  }
  const authors = [...byAuthor.entries()].sort(([a], [b]) => {
    const last = (n: string) => n.split(' ').at(-1) ?? n
    return last(a).localeCompare(last(b))
  })

  return (
    <section id="authors" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
      <h2 className="font-serif text-3xl font-semibold">Authors A–Z</h2>
      <p className="mt-1 text-muted-foreground">Sorted by surname.</p>
      <div className="mt-6 overflow-hidden rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Author</th>
              <th scope="col" className="px-4 py-3 font-medium">Entries</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {authors.map(([author, list]) => (
              <tr key={author} className="bg-card">
                <th scope="row" className="px-4 py-3 font-serif text-base font-medium">{author}</th>
                <td className="px-4 py-3">
                  <ul className="flex flex-wrap gap-2">
                    {list.map((b) => (
                      <li key={b.slug}>
                        <Link href={`/books/${b.slug}`} className={cn('hover:underline', accents[b.accent].text)}>
                          {b.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
