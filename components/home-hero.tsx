type Props = { bookCount: number; characterCount: number; authorCount: number }

export function HomeHero({ bookCount, characterCount, authorCount }: Props) {
  const stats = [
    { label: 'Entries', value: bookCount, color: 'text-primary' },
    { label: 'Characters', value: characterCount, color: 'text-sky-300' },
    { label: 'Authors', value: authorCount, color: 'text-teal-300' },
  ]

  return (
    <section className="border-b bg-gradient-to-b from-accent/40 to-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">The Free Romance Encyclopedia</p>
        <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Every love story, carefully catalogued.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Browse romance novels and series with plot summaries, character guides, authors and reading
          orders. Each entry sticks to what happens in the books themselves.
        </p>
        <dl className="mt-10 flex flex-wrap gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</dt>
              <dd className={`font-serif text-3xl font-semibold ${stat.color}`}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
