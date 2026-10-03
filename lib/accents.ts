import type { Accent } from './books'

type AccentClasses = {
  text: string
  bg: string
  softBg: string
  border: string
  bar: string
}

export const accents: Record<Accent, AccentClasses> = {
  indigo: {
    text: 'text-indigo-300',
    bg: 'bg-indigo-400',
    softBg: 'bg-indigo-400/10',
    border: 'border-indigo-400/40',
    bar: 'from-indigo-300 to-indigo-600',
  },
  cyan: {
    text: 'text-cyan-300',
    bg: 'bg-cyan-400',
    softBg: 'bg-cyan-400/10',
    border: 'border-cyan-400/40',
    bar: 'from-cyan-300 to-cyan-600',
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
  blue: {
    text: 'text-blue-300',
    bg: 'bg-blue-400',
    softBg: 'bg-blue-400/10',
    border: 'border-blue-400/40',
    bar: 'from-blue-300 to-blue-600',
  },
  purple: {
    text: 'text-purple-300',
    bg: 'bg-purple-400',
    softBg: 'bg-purple-400/10',
    border: 'border-purple-400/40',
    bar: 'from-purple-300 to-purple-700',
  },
  teal: {
    text: 'text-teal-300',
    bg: 'bg-teal-400',
    softBg: 'bg-teal-400/10',
    border: 'border-teal-400/40',
    bar: 'from-teal-300 to-teal-600',
  },
}
