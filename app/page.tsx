import { books } from '@/lib/books'
import { HomeHero } from '@/components/home-hero'
import { LibraryBrowser } from '@/components/library-browser'
import { AuthorIndex } from '@/components/author-index'

export default function Page() {
  const characterCount = books.reduce((sum, b) => sum + b.characters.length, 0)
  const authorCount = new Set(books.map((b) => b.author)).size

  return (
    <main>
      <HomeHero bookCount={books.length} characterCount={characterCount} authorCount={authorCount} />
      <LibraryBrowser books={books} />
      <AuthorIndex books={books} />
    </main>
  )
}
