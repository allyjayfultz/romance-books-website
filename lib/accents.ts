import type { Accent } from './books'

type AccentClasses = {
  text: string
  bg: string
  softBg: string
  border: string
  bar: string
}

export const accents: Record<Accent, AccentClasses> = {
  rose: {
    text: 'text-rose-300',
    bg: 'bg-rose-400',
    softBg: 'bg-rose-400/10',
    border: 'border-rose-400/40',
    bar: 'from-rose-400 to-rose-600',
  },
  amber: {
    text: 'text-amber-300',
    bg: 'bg-amber-400',
    softBg: 'bg-amber-400/10',
    border: 'border-amber-400/40',
    bar: 'from-amber-300 to-amber-600',
  },
  sky: {
    text: 'text-sky-300',
    bg: 'bg-sky-400',
    softBg: 'bg-sky-400/10',
    border: 'border-sky-400/40',
    bar: 'from-sky-300 to-sky-600',
  },
  violet: {
    text: 'text-violet-300',
    bg: 'bg-violet-400',
    softBg: 'bg-violet-400/10',
    border: 'border-violet-400/40',
    bar: 'from-violet-300 to-violet-600',
  },
  emerald: {
    text: 'text-emerald-300',
    bg: 'bg-emerald-400',
    softBg: 'bg-emerald-400/10',
    border: 'border-emerald-400/40',
    bar: 'from-emerald-300 to-emerald-600',
  },
  orange: {
    text: 'text-orange-300',
    bg: 'bg-orange-400',
    softBg: 'bg-orange-400/10',
    border: 'border-orange-400/40',
    bar: 'from-orange-300 to-orange-600',
  },
  fuchsia: {
    text: 'text-fuchsia-300',
    bg: 'bg-fuchsia-400',
    softBg: 'bg-fuchsia-400/10',
    border: 'border-fuchsia-400/40',
    bar: 'from-fuchsia-300 to-fuchsia-600',
  },
  teal: {
    text: 'text-teal-300',
    bg: 'bg-teal-400',
    softBg: 'bg-teal-400/10',
    border: 'border-teal-400/40',
    bar: 'from-teal-300 to-teal-600',
  },
}
