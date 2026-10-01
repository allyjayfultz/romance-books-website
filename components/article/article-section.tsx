import { cn } from '@/lib/utils'

type Props = { id: string; title: string; accent: string; children: React.ReactNode }

export function ArticleSection({ id, title, accent, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-b py-8 first:pt-0 last:border-b-0">
      <h2 id={`${id}-heading`} className="mb-5 flex items-center gap-3 font-serif text-2xl font-semibold">
        <span className={cn('h-6 w-1 rounded-full', accent)} aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  )
}
