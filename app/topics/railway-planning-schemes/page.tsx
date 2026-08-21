import React from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Container,
  Gauge,
  MapPinned,
  Network,
  Orbit,
  Package,
  Target,
  Warehouse,
} from 'lucide-react'

const planningTopics = [
  {
    href: '/topics/railway-planning-schemes/container-rail-terminals',
    title: 'Container Rail Terminals',
    subtitle: 'CRT & freight hubs',
    description: 'Container rail terminals — facilities, handling, and examination-oriented reference.',
    icon: Container,
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-sky-200',
    borderClassName: 'border-sky-500/25 hover:border-sky-400/45',
    ringClassName: 'ring-sky-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/engine-on-load',
    title: 'Engine On Load',
    subtitle: 'Locomotive operation',
    description: 'Engine on load — operating reference for examination and field use.',
    icon: Gauge,
    accent: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/gati-shakti-terminals',
    title: 'Gati Shakti Terminals',
    subtitle: 'Rail terminals under Gati Shakti',
    description: 'Gati Shakti terminals — multimodal connectivity and examination-oriented reference.',
    icon: Network,
    accent: 'from-orange-500/20 via-rose-500/10 to-transparent',
    iconClassName: 'text-orange-200',
    borderClassName: 'border-orange-500/25 hover:border-orange-400/45',
    ringClassName: 'ring-orange-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/lwis-scheme',
    title: 'LWIS Scheme',
    subtitle: 'Liberalized Wagon Investment',
    description:
      'Liberalized Wagon Investment Scheme — private wagon investment, freight marketing, and examination-oriented notes.',
    icon: Warehouse,
    accent: 'from-lime-500/20 via-green-500/10 to-transparent',
    iconClassName: 'text-lime-200',
    borderClassName: 'border-lime-500/25 hover:border-lime-400/45',
    ringClassName: 'ring-lime-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/merry-go-round',
    title: 'Merry Go Round',
    subtitle: 'MGR freight circuit',
    description: 'Merry Go Round (MGR) — dedicated freight circuit working and examination-oriented reference.',
    icon: Orbit,
    accent: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    iconClassName: 'text-indigo-200',
    borderClassName: 'border-indigo-500/25 hover:border-indigo-400/45',
    ringClassName: 'ring-indigo-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/mission-3000MT',
    title: 'Mission 3000 MT',
    subtitle: 'Freight & logistics',
    description: 'Mission 3000 MT — reference summary for the freight capacity mission.',
    icon: Target,
    accent: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    iconClassName: 'text-purple-200',
    borderClassName: 'border-purple-500/25 hover:border-purple-400/45',
    ringClassName: 'ring-purple-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/national-logistics-policy',
    title: 'National Logistics Policy',
    subtitle: 'Policy framework',
    description: 'National Logistics Policy — framework, PM Gati Shakti links, and exam-focused notes.',
    icon: Package,
    accent: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    iconClassName: 'text-teal-200',
    borderClassName: 'border-teal-500/25 hover:border-teal-400/45',
    ringClassName: 'ring-teal-500/10',
  },
  {
    href: '/topics/railway-planning-schemes/national-rail-plan',
    title: 'National Rail Plan',
    subtitle: 'Network vision & projects',
    description: 'National Rail Plan — policy context, corridors, and examination-oriented summary.',
    icon: MapPinned,
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
]

const RailwayPlanningSchemesPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-cyan-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(6,182,212,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(14,165,233,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to topics
        </Link>

        <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-cyan-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <MapPinned className="h-7 w-7 text-cyan-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-cyan-100 via-sky-100 to-teal-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Railway Planning Schemes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse planning and freight scheme topics — terminals, logistics policy, and capacity missions.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {planningTopics.map((topic) => {
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

export default RailwayPlanningSchemesPage
