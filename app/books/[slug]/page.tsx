import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { books, getBook } from '@/lib/books'
import { accents } from '@/lib/accents'
import { cn } from '@/lib/utils'
import { Infobox } from '@/components/article/infobox'
import { TableOfContents } from '@/components/article/table-of-contents'
import { CharacterList } from '@/components/article/character-list'
import { SeriesTable } from '@/components/article/series-table'
import { ArticleSection } from '@/components/article/article-section'

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: PageProps<'/books/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const book = getBook(slug)
  if (!book) return {}
  return { title: `${book.title} by ${book.author}`, description: book.overview }
}

export default async function BookPage({ params }: PageProps<'/books/[slug]'>) {
  const { slug } = await params
  const book = getBook(slug)
  if (!book) notFound()

  const a = accents[book.accent]
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'plot', label: 'Plot summary' },
    { id: 'characters', label: 'Characters' },
    ...(book.seriesEntries ? [{ id: 'series', label: 'Reading order' }] : []),
    { id: 'themes', label: 'Themes' },
    { id: 'trivia', label: 'Did you know?' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-foreground">Library</Link></li>
          <li aria-hidden="true">/</li>
          <li>{book.subgenre}</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">{book.title}</li>
        </ol>
      </nav>

      <header className="mt-6 border-b pb-6">
        <p className={cn('text-sm font-medium uppercase tracking-widest', a.text)}>
          {book.series ? `${book.series} series` : 'Standalone novel'}
        </p>
        <h1 className="mt-2 text-balance font-serif text-4xl font-semibold md:text-5xl">{book.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          by <span className="text-foreground">{book.author}</span> · {book.published}
        </p>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[200px_minmax(0,1fr)_300px]">
        <aside className="hidden lg:block">
          <TableOfContents sections={sections} accentText={a.text} />
        </aside>

        <div className="order-2 min-w-0 lg:order-none">
          <ArticleSection id="overview" title="Overview" accent={a.bg}>
            <p className="text-lg leading-relaxed">{book.overview}</p>
          </ArticleSection>

          <ArticleSection id="plot" title="Plot summary" accent={a.bg}>
            <p className={cn('mb-5 rounded-lg border px-4 py-3 text-sm', a.border, a.softBg)}>
              <strong className={a.text}>Spoiler warning:</strong> this section describes the full plot, including the ending.
            </p>
            <ol className="flex flex-col gap-4">
              {book.plot.map((para, i) => (
                <li key={i} className="flex gap-4">
                  <span className={cn('mt-1 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-background', a.bg)}>
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-foreground/90">{para}</p>
                </li>
              ))}
            </ol>
          </ArticleSection>

          <ArticleSection id="characters" title="Characters" accent={a.bg}>
            <CharacterList characters={book.characters} />
          </ArticleSection>

          {book.seriesEntries && (
            <ArticleSection id="series" title="Reading order" accent={a.bg}>
              <SeriesTable entries={book.seriesEntries} currentTitle={book.title} accentText={a.text} />
            </ArticleSection>
          )}

          <ArticleSection id="themes" title="Themes" accent={a.bg}>
            <ul className="flex flex-wrap gap-2">
              {book.themes.map((t) => (
                <li key={t} className={cn('rounded-full border px-3 py-1 text-sm', a.border, a.softBg)}>{t}</li>
              ))}
            </ul>
          </ArticleSection>

          <ArticleSection id="trivia" title="Did you know?" accent={a.bg}>
            <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed marker:text-muted-foreground">
              {book.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </ArticleSection>
        </div>

        <div className="order-1 lg:order-none">
          <Infobox book={book} />
        </div>
      </div>
    </main>
  )
}
