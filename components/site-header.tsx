import Link from 'next/link'
import { BookHeart } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BookHeart className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">The Romance Codex</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          <Link href="/#library" className="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
            Library
          </Link>
          <Link href="/#authors" className="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  )
}
