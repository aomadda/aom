import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MONTHS = [
  {
    href: '/general-awareness/important-days/january',
    label: 'January',
    short: 'Jan',
    accent: 'from-sky-500 to-blue-600',
    glow: 'bg-sky-500/10',
    ring: 'hover:border-sky-500/45',
  },
  {
    href: '/general-awareness/important-days/february',
    label: 'February',
    short: 'Feb',
    accent: 'from-rose-500 to-pink-600',
    glow: 'bg-rose-500/10',
    ring: 'hover:border-rose-500/45',
  },
  {
    href: '/general-awareness/important-days/march',
    label: 'March',
    short: 'Mar',
    accent: 'from-emerald-500 to-green-600',
    glow: 'bg-emerald-500/10',
    ring: 'hover:border-emerald-500/45',
  },
  {
    href: '/general-awareness/important-days/april',
    label: 'April',
    short: 'Apr',
    accent: 'from-lime-500 to-emerald-600',
    glow: 'bg-lime-500/10',
    ring: 'hover:border-lime-500/45',
  },
  {
    href: '/general-awareness/important-days/may',
    label: 'May',
    short: 'May',
    accent: 'from-amber-500 to-orange-600',
    glow: 'bg-amber-500/10',
    ring: 'hover:border-amber-500/45',
  },
  {
    href: '/general-awareness/important-days/june',
    label: 'June',
    short: 'Jun',
    accent: 'from-orange-500 to-red-600',
    glow: 'bg-orange-500/10',
    ring: 'hover:border-orange-500/45',
  },
  {
    href: '/general-awareness/important-days/july',
    label: 'July',
    short: 'Jul',
    accent: 'from-cyan-500 to-teal-600',
    glow: 'bg-cyan-500/10',
    ring: 'hover:border-cyan-500/45',
  },
  {
    href: '/general-awareness/important-days/august',
    label: 'August',
    short: 'Aug',
    accent: 'from-teal-500 to-emerald-600',
    glow: 'bg-teal-500/10',
    ring: 'hover:border-teal-500/45',
  },
  {
    href: '/general-awareness/important-days/september',
    label: 'September',
    short: 'Sep',
    accent: 'from-indigo-500 to-violet-600',
    glow: 'bg-indigo-500/10',
    ring: 'hover:border-indigo-500/45',
  },
  {
    href: '/general-awareness/important-days/october',
    label: 'October',
    short: 'Oct',
    accent: 'from-fuchsia-500 to-purple-600',
    glow: 'bg-fuchsia-500/10',
    ring: 'hover:border-fuchsia-500/45',
  },
  {
    href: '/general-awareness/important-days/november',
    label: 'November',
    short: 'Nov',
    accent: 'from-violet-500 to-indigo-600',
    glow: 'bg-violet-500/10',
    ring: 'hover:border-violet-500/45',
  },
  {
    href: '/general-awareness/important-days/december',
    label: 'December',
    short: 'Dec',
    accent: 'from-blue-500 to-indigo-600',
    glow: 'bg-blue-500/10',
    ring: 'hover:border-blue-500/45',
  },
] as const

const ImportantDaysPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Important Days
          </h1>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Select a month to explore its important days
          </p>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 opacity-80"
            aria-hidden
          />
        </header>

        <nav
          className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          aria-label="Months for important days"
        >
          {MONTHS.map((month, index) => (
            <Link
              key={month.href}
              href={month.href}
              className={`group relative flex flex-col justify-between min-h-36 rounded-2xl border border-slate-600/50 bg-linear-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 p-5 shadow-lg shadow-slate-950/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${month.ring}`}
            >
              <span
                className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-colors ${month.glow}`}
                aria-hidden
              />
              <span
                className="pointer-events-none absolute right-3 bottom-1 text-6xl font-black tabular-nums leading-none text-white/5 select-none"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg ${month.accent}`}
                >
                  <CalendarDays className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span
                  className="text-slate-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg leading-none"
                  aria-hidden
                >
                  →
                </span>
              </div>

              <div className="relative mt-4">
                <span className="block text-xl sm:text-[1.35rem] font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                  {month.label}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {month.short}
                </span>
                <span
                  className={`mt-3 block h-0.5 w-0 rounded-full bg-linear-to-r group-hover:w-12 transition-all duration-300 ease-out ${month.accent}`}
                  aria-hidden
                />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default ImportantDaysPage
