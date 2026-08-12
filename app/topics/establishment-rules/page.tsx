import React from 'react'
import Link from 'next/link'
import {
  ArrowLeftRight,
  ChevronRight,
  ClipboardList,
  FileCheck,
  HeartHandshake,
  Home,
  ScrollText,
  TrendingUp,
  Users,
} from 'lucide-react'

const establishmentTopics = [
  {
    href: '/topics/establishment-rules/apar',
    title: 'APAR',
    subtitle: 'Performance appraisal',
    description: 'Annual Performance Appraisal Report — process, timelines, and railway norms.',
    icon: ClipboardList,
    accent: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    iconClassName: 'text-teal-200',
    borderClassName: 'border-teal-500/25 hover:border-teal-400/45',
    ringClassName: 'ring-teal-500/10',
  },
  {
    href: '/topics/establishment-rules/hrms',
    title: 'HRMS',
    subtitle: 'Human resource system',
    description: 'AIMS HRMS portal, self-service, manuals, and settlement-related overview for employees.',
    icon: Users,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
  {
    href: '/topics/establishment-rules/macp',
    title: 'MACP',
    subtitle: 'Assured career progression',
    description: 'Modified Assured Career Progression — grades, benchmarks, and MACP cycles.',
    icon: TrendingUp,
    accent: 'from-emerald-500/20 via-green-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  {
    href: '/topics/establishment-rules/quarters',
    title: 'Quarters',
    subtitle: 'Railway housing',
    description: 'Allotment, types of quarters, and related establishment notes.',
    icon: Home,
    accent: 'from-orange-500/20 via-amber-500/10 to-transparent',
    iconClassName: 'text-orange-200',
    borderClassName: 'border-orange-500/25 hover:border-orange-400/45',
    ringClassName: 'ring-orange-500/10',
  },
  {
    href: '/topics/establishment-rules/service-rules',
    title: 'Service Rules',
    subtitle: 'Conduct & conditions',
    description: 'Railway service conditions, classifications, and linked establishment concepts.',
    icon: FileCheck,
    accent: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-indigo-200',
    borderClassName: 'border-indigo-500/25 hover:border-indigo-400/45',
    ringClassName: 'ring-indigo-500/10',
  },
  {
    href: '/topics/establishment-rules/staff-benefit-fund',
    title: 'Staff Benefit Fund',
    subtitle: 'Welfare schemes',
    description: 'Staff Benefit Fund — membership, advances, and welfare benefits.',
    icon: HeartHandshake,
    accent: 'from-rose-500/20 via-pink-500/10 to-transparent',
    iconClassName: 'text-rose-200',
    borderClassName: 'border-rose-500/25 hover:border-rose-400/45',
    ringClassName: 'ring-rose-500/10',
  },
  {
    href: '/topics/establishment-rules/transfers',
    title: 'Transfers',
    subtitle: 'Posting & mutual transfer',
    description: 'Transfer policy, inter-railway moves, and procedural highlights.',
    icon: ArrowLeftRight,
    accent: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
    iconClassName: 'text-fuchsia-200',
    borderClassName: 'border-fuchsia-500/25 hover:border-fuchsia-400/45',
    ringClassName: 'ring-fuchsia-500/10',
  },
]

const EstablishmentRulesPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-violet-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(139,92,246,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-violet-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to topics
        </Link>

        <div className="rounded-3xl border border-violet-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-violet-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <ScrollText className="h-7 w-7 text-violet-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-violet-100 via-indigo-100 to-fuchsia-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Establishment Rules
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse establishment study topics below — HR, career progression, housing, welfare, and transfers.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {establishmentTopics.map((topic) => {
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

export default EstablishmentRulesPage
