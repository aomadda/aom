import Link from 'next/link'
import React from 'react'
import { Award, ChevronRight, Globe2, Sparkles } from 'lucide-react'

type WorldTopic = {
  href: string
  title: string
  subtitle: string
  description: string
  gradient: string
  ring: string
  iconBg: string
}

const worldTopics: WorldTopic[] = [
  {
    href: '/general-awareness/world-information/asian-countries',
    title: 'Asian Countries',
    subtitle: 'Capitals · Currencies · Leaders',
    description: 'Country-wise capitals, currencies, heads of state, and heads of government across Asia.',
    gradient: 'from-blue-700 to-indigo-900',
    ring: 'ring-blue-500/30',
    iconBg: 'bg-blue-500/20',
  },
  {
    href: '/general-awareness/world-information/africa-countries',
    title: 'African Countries',
    subtitle: 'Capitals · Currencies · Leaders',
    description: 'Country-wise capitals, currencies, heads of state, and heads of government across Africa.',
    gradient: 'from-amber-700 to-orange-900',
    ring: 'ring-amber-500/30',
    iconBg: 'bg-amber-500/20',
  },
  {
    href: '/general-awareness/world-information/europe-countries',
    title: 'European Countries',
    subtitle: 'Capitals · Currencies · Leaders',
    description: 'Country-wise capitals, currencies, heads of state, and heads of government across Europe.',
    gradient: 'from-sky-700 to-blue-900',
    ring: 'ring-sky-500/30',
    iconBg: 'bg-sky-500/20',
  },
  {
    href: '/general-awareness/world-information/north-american-countries',
    title: 'North American Countries',
    subtitle: 'Capitals · Currencies · Leaders',
    description: 'Country-wise capitals, currencies, heads of state, and heads of government across North America.',
    gradient: 'from-rose-700 to-red-900',
    ring: 'ring-rose-500/30',
    iconBg: 'bg-rose-500/20',
  },
  {
    href: '/general-awareness/world-information/south-american-countries',
    title: 'South American Countries',
    subtitle: 'Capitals · Currencies · Leaders',
    description: 'Country-wise capitals, currencies, heads of state, and heads of government across South America.',
    gradient: 'from-lime-700 to-green-900',
    ring: 'ring-lime-500/30',
    iconBg: 'bg-lime-500/20',
  },
  {
    href: '/general-awareness/world-information/australian-countries',
    title: 'Australian Countries',
    subtitle: 'Capitals · Currencies · Leaders',
    description: 'Country-wise capitals, currencies, heads of state, and heads of government across Australia & Oceania.',
    gradient: 'from-cyan-700 to-teal-900',
    ring: 'ring-cyan-500/30',
    iconBg: 'bg-cyan-500/20',
  },
]

const WorldInformationPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-teal-50 via-emerald-50/90 to-cyan-100/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_118_110/0.12)_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.35]"
        aria-hidden
      />
      <header className="relative overflow-hidden border-b border-emerald-200/70 bg-linear-to-r from-emerald-700 via-teal-700 to-cyan-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(255,255,255,0.18),transparent)]" />
        <div className="pointer-events-none absolute -right-28 top-6 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
          <Link
            href="/general-awareness"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-100 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to General Awareness
          </Link>

          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-50 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              General Awareness
            </div>

            <div className="mb-5 flex justify-center">
              <div className="rounded-2xl bg-linear-to-br from-white/25 to-white/5 p-4 shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                <Globe2 className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-emerald-50">World information</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-emerald-50/95 sm:text-lg">
              Static GK for exams — countries, capitals, currencies, leaders, and global reference data.
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-1 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10 rounded-2xl border border-teal-200/60 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-teal-500/20 to-emerald-600/20 text-teal-800 ring-1 ring-teal-500/20">
              <Award className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Topics</h2>
              <p className="mt-0.5 text-sm text-slate-600 sm:text-base">Choose a topic below.</p>
            </div>
          </div>
        </div>

        <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {worldTopics.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className={`group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/15 ${topic.ring}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-90 ${topic.gradient}`}
                  aria-hidden
                />
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${topic.iconBg} text-slate-800`}
                  >
                    <Globe2 className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`rounded-full bg-linear-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100 sm:text-xs ${topic.gradient}`}
                  >
                    Open
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-emerald-800 sm:text-xl">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{topic.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-emerald-800">
                  Study topic
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default WorldInformationPage
