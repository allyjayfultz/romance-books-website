import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { books, getBook } from '@/lib/books'
import { accents } from '@/lib/accents'
import { cn } from '@/lib/utils'
import { Infobox } from '@/components/article/infobox'
import { CharacterCards } from '@/components/article/character-cards'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SeriesTable } from '@/components/article/series-table'
import { ArticleSection } from '@/components/article/article-section'
import { RelationshipList } from '@/components/article/relationship-list'

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
    { id: 'characters', label: 'Character cards' },
    ...(book.relationships ? [{ id: 'relationships', label: 'Relationships' }] : []),
    ...(book.seriesEntries ? [{ id: 'series', label: 'Reading order' }] : []),
    { id: 'themes', label: 'Themes' },
    ...(book.adaptations ? [{ id: 'adaptations', label: 'Adaptations' }] : []),
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
          {book.series ? `${book.series} series` : `Standalone ${(book.format ?? 'novel').toLowerCase()}`}
        </p>
        <h1 className="mt-2 text-balance font-serif text-4xl font-semibold md:text-5xl">{book.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          by <span className="text-foreground">{book.author}</span> · {book.published}
        </p>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Tabs defaultValue="overview" className="order-2 min-w-0 gap-6 lg:order-none">
          <TabsList
            aria-label={`${book.title} sections`}
            className="w-full flex-wrap justify-start gap-1 rounded-xl border bg-card p-1.5 group-data-horizontal/tabs:h-auto"
          >
            {sections.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="h-9 flex-none cursor-pointer px-3 data-active:border-primary/50 data-active:bg-primary/15 data-active:text-primary dark:data-active:border-primary/50 dark:data-active:bg-primary/15 dark:data-active:text-primary"
              >
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="text-base">
          <ArticleSection id="overview" title="Overview" accent={a.bg}>
            <p className="text-lg leading-relaxed">{book.overview}</p>
          </ArticleSection>
          </TabsContent>

          <TabsContent value="plot" className="text-base">
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
          </TabsContent>

          <TabsContent value="characters" className="text-base">
          <ArticleSection id="characters" title="Character cards" accent={a.bg}>
            <CharacterCards characters={book.characters} bookTitle={book.title} accentBar={a.bar} accentText={a.text} />
          </ArticleSection>
          </TabsContent>

          {book.relationships && (
            <TabsContent value="relationships" className="text-base">
            <ArticleSection id="relationships" title="Relationships" accent={a.bg}>
              <RelationshipList relationships={book.relationships} accentText={a.text} accentBorder={a.border} />
            </ArticleSection>
            </TabsContent>
          )}

          {book.seriesEntries && (
            <TabsContent value="series" className="text-base">
            <ArticleSection id="series" title="Reading order" accent={a.bg}>
              <SeriesTable entries={book.seriesEntries} currentTitle={book.title} accentText={a.text} />
            </ArticleSection>
            </TabsContent>
          )}

          <TabsContent value="themes" className="text-base">
          <ArticleSection id="themes" title="Themes" accent={a.bg}>
            <ul className="flex flex-wrap gap-2">
              {book.themes.map((t) => (
                <li key={t} className={cn('rounded-full border px-3 py-1 text-sm', a.border, a.softBg)}>{t}</li>
              ))}
            </ul>
          </ArticleSection>
          </TabsContent>

          {book.adaptations && (
            <TabsContent value="adaptations" className="text-base">
            <ArticleSection id="adaptations" title="Adaptations" accent={a.bg}>
              <ul className="flex flex-col gap-2">
                {book.adaptations.map((item) => (
                  <li key={item} className={cn('rounded-lg border px-4 py-3 leading-relaxed', a.border, a.softBg)}>{item}</li>
                ))}
              </ul>
            </ArticleSection>
            </TabsContent>
          )}

          <TabsContent value="trivia" className="text-base">
          <ArticleSection id="trivia" title="Did you know?" accent={a.bg}>
            <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed marker:text-muted-foreground">
              {book.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </ArticleSection>
          </TabsContent>
        </Tabs>

        <div className="order-1 lg:order-none">
          <Infobox book={book} />
        </div>
      </div>
    </main>
  )
}
