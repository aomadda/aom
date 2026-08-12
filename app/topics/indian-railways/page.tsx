import React from 'react'
import Link from 'next/link'
import { Building2, ChevronRight, TrainFront } from 'lucide-react'

const indianRailwaysTopics = [
  {
    href: '/topics/indian-railways/railway-organization',
    title: 'Railway Organization',
    subtitle: 'Structure & hierarchy',
    description:
      'Indian Railways organization — zones, divisions, departments, and examination-oriented reference.',
    icon: Building2,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
]

const IndianRailways = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(251,191,36,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(249,115,22,0.10),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-amber-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to topics
        </Link>

        <div className="rounded-3xl border border-amber-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-amber-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <TrainFront className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Indian Railways
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse Indian Railways study topics below. More sub-topics can be added to this grid later.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {indianRailwaysTopics.map((topic) => {
            const Icon = topic.icon

            return (
              <Link
                key={topic.href}
                href={topic.href}
                className={`group relative overflow-hidden rounded-3xl border bg-slate-900/65 p-6 shadow-xl shadow-black/20 ring-1 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-slate-900/80 ${topic.borderClassName} ${topic.ringClassName}`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${topic.accent}`} />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-black/10">
                      <Icon className={`h-7 w-7 ${topic.iconClassName}`} strokeWidth={2.2} />
                    </div>
                    <span className="text-xl leading-none text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {topic.subtitle}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">{topic.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {topic.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-200">
                    <span>Open topic</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndianRailways
