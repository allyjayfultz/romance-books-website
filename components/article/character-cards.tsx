'use client'

import { useState } from 'react'
import {
  Crown,
  Feather,
  HeartHandshake,
  Home,
  RotateCw,
  Shield,
  Skull,
  Sparkle,
  Star,
  Sword,
  TriangleAlert,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Character } from '@/lib/books'
import { cn } from '@/lib/utils'

const roleMeta: Record<Character['role'], { icon: LucideIcon; pill: string; glow: string }> = {
  Heroine: { icon: Crown, pill: 'bg-violet-400/15 text-violet-200 border-violet-400/40', glow: 'from-violet-500/40' },
  Hero: { icon: Sword, pill: 'bg-sky-400/15 text-sky-200 border-sky-400/40', glow: 'from-sky-500/40' },
  Protagonist: { icon: Star, pill: 'bg-emerald-400/15 text-emerald-200 border-emerald-400/40', glow: 'from-emerald-500/40' },
  Supporting: { icon: Users, pill: 'bg-slate-400/15 text-slate-200 border-slate-400/40', glow: 'from-slate-500/40' },
  Family: { icon: Home, pill: 'bg-teal-400/15 text-teal-200 border-teal-400/40', glow: 'from-teal-500/40' },
  Antagonist: { icon: Skull, pill: 'bg-red-500/15 text-red-200 border-red-500/40', glow: 'from-red-600/40' },
}

const numerals = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV']

function initials(name: string) {
  return name
    .replace(/["\u201C\u201D(].*?["\u201C\u201D)]/g, '')
    .split(/[\s,&.]+/)
    .filter((w) => /^[A-Z]/.test(w) && !['Mr', 'Mrs', 'Lady', 'Prince', 'Duke', 'Jr', 'King', 'Queen', 'General', 'Captain', 'Sir', 'Dr'].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

type Props = { characters: Character[]; bookTitle: string; accentBar: string; accentText: string }

export function CharacterCards({ characters, bookTitle, accentBar, accentText }: Props) {
  return (
    <div>
      <p className="mb-5 text-sm text-muted-foreground">
        Each card is a character in the deck. Cards marked with a flip icon reveal strengths, weaknesses, family and bonds on the back.
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {characters.map((c, i) => (
          <li key={c.name}>
            <CharacterCard character={c} index={i + 1} total={characters.length} bookTitle={bookTitle} accentBar={accentBar} accentText={accentText} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function CharacterCard({
  character: c,
  index,
  total,
  bookTitle,
  accentBar,
  accentText,
}: {
  character: Character
  index: number
  total: number
  bookTitle: string
  accentBar: string
  accentText: string
}) {
  const [flipped, setFlipped] = useState(false)
  const meta = roleMeta[c.role]
  const RoleIcon = meta.icon
  const profile = c.profile
  const canFlip = Boolean(profile)

  return (
    <div className="perspective-distant">
      <div
        className={cn(
          'grid transition-transform duration-700 ease-out transform-3d motion-reduce:transition-none',
          flipped && 'rotate-y-180',
        )}
      >
        {/* Front */}
        <article
          aria-hidden={flipped}
          inert={flipped}
          className={cn('rounded-2xl bg-gradient-to-br p-[2px] backface-hidden [grid-area:1/1]', accentBar)}
        >
          <div className="flex h-full flex-col rounded-[14px] bg-card p-3">
            <header className="flex items-start justify-between gap-2 px-1">
              <h3 className="font-serif text-lg font-semibold leading-tight text-balance">{c.name}</h3>
              <span className={cn('inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide', meta.pill)}>
                <RoleIcon className="size-3" aria-hidden="true" />
                {c.role}
              </span>
            </header>

            <div className="relative mt-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-background">
              <div className={cn('absolute inset-0 bg-radial-[at_50%_40%] to-transparent to-70%', meta.glow)} aria-hidden="true" />
              <div className="absolute inset-2 rounded-lg border border-dashed border-white/15" aria-hidden="true" />
              <span className={cn('absolute left-3 top-2 font-serif text-sm font-semibold tracking-widest', accentText)}>
                {numerals[index] ?? index}
              </span>
              <Sparkle className="absolute right-4 top-4 size-3 text-foreground/40" aria-hidden="true" />
              <Sparkle className="absolute bottom-10 left-5 size-2.5 text-foreground/30" aria-hidden="true" />
              <Sparkle className="absolute right-8 bottom-14 size-2 text-foreground/30" aria-hidden="true" />
              <span
                className="relative flex size-24 items-center justify-center rounded-full border-2 border-white/20 bg-card/70 font-serif text-4xl font-semibold shadow-lg"
                aria-hidden="true"
              >
                {initials(c.name) || c.name[0]}
              </span>
              {profile && (
                <span className="absolute inset-x-0 bottom-0 bg-background/80 py-1.5 text-center font-serif text-sm italic tracking-wide backdrop-blur">
                  {profile.archetype}
                </span>
              )}
            </div>

            <p className="mt-3 px-1 text-sm leading-relaxed text-foreground/85">{c.description}</p>

            {profile && (
              <ul className="mt-3 flex flex-wrap gap-1.5 px-1" aria-label="Personality traits">
                {profile.traits.map((t) => (
                  <li key={t} className="rounded-md border bg-muted px-2 py-0.5 text-xs">{t}</li>
                ))}
              </ul>
            )}

            <div className="min-h-4 flex-1" aria-hidden="true" />
            <footer className="flex items-center justify-between gap-2 border-t px-1 pt-3 text-[11px] text-muted-foreground">
              <span className="truncate">{bookTitle} · {index}/{total}</span>
              {canFlip && (
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 font-medium text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <RotateCw className="size-3" aria-hidden="true" />
                  Flip
                  <span className="sr-only"> card for {c.name}</span>
                </button>
              )}
            </footer>
          </div>
        </article>

        {/* Back */}
        {profile && (
          <article
            aria-hidden={!flipped}
            inert={!flipped}
            className={cn('rotate-y-180 rounded-2xl bg-gradient-to-br p-[2px] backface-hidden [grid-area:1/1]', accentBar)}
          >
            <div className="flex h-full flex-col rounded-[14px] bg-card p-4">
              <header className="border-b pb-3 text-center">
                <p className={cn('text-[11px] font-semibold uppercase tracking-[0.2em]', accentText)}>{profile.archetype}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold leading-tight">{c.name}</h3>
              </header>

              <dl className="mt-3 flex flex-col gap-3 text-sm">
                <StatBlock icon={Shield} label="Strengths" items={profile.strengths} tone="text-emerald-300" />
                <StatBlock icon={TriangleAlert} label="Weaknesses" items={profile.weaknesses} tone="text-red-300" />
                {profile.family && <StatBlock icon={Home} label="Family" items={profile.family} tone="text-teal-300" />}
                {profile.bonds && <StatBlock icon={HeartHandshake} label="Bonds" items={profile.bonds} tone="text-sky-300" />}
                {profile.detail && (
                  <div>
                    <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-300">
                      <Feather className="size-3.5" aria-hidden="true" />
                      From the book
                    </dt>
                    <dd className="mt-1 text-sm italic leading-relaxed text-foreground/85">{profile.detail}</dd>
                  </div>
                )}
              </dl>

              <div className="min-h-4 flex-1" aria-hidden="true" />
              <footer className="flex items-center justify-between gap-2 border-t pt-3 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Zap className="size-3" aria-hidden="true" />
                  {c.role}
                </span>
                <button
                  type="button"
                  onClick={() => setFlipped(false)}
                  className="inline-flex items-center gap-1 rounded-md border px-2 py-1 font-medium text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <RotateCw className="size-3" aria-hidden="true" />
                  Flip back
                  <span className="sr-only"> card for {c.name}</span>
                </button>
              </footer>
            </div>
          </article>
        )}
      </div>
    </div>
  )
}

function StatBlock({ icon: Icon, label, items, tone }: { icon: LucideIcon; label: string; items: string[]; tone: string }) {
  return (
    <div>
      <dt className={cn('flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider', tone)}>
        <Icon className="size-3.5" aria-hidden="true" />
        {label}
      </dt>
      <dd className="mt-1">
        <ul className="flex flex-col gap-0.5 leading-snug text-foreground/85">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-muted-foreground">{'\u2022'}</span>
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  )
}
