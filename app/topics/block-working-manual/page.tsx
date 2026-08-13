import React from 'react'
import Link from 'next/link'
import {
  BookMarked,
  ChevronRight,
  CircuitBoard,
  ClipboardList,
  FileWarning,
  KeyRound,
  Wrench,
} from 'lucide-react'

const blockWorkingManualTopics = [
  {
    href: '/topics/block-working-manual/block-instruments',
    title: 'Block Instruments',
    subtitle: 'Token & tokenless',
    description: 'Block instruments used for line clear, interlocking with signals, and PLCT when defective.',
    icon: CircuitBoard,
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-sky-200',
    borderClassName: 'border-sky-500/25 hover:border-sky-400/45',
    ringClassName: 'ring-sky-500/10',
  },
  {
    href: '/topics/block-working-manual/plct-working',
    title: 'PLCT Working',
    subtitle: 'Paper Line Clear Ticket',
    description: 'Paper Line Clear Ticket working — forms, procedure, and examination-oriented reference.',
    icon: FileWarning,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/block-working-manual/private-numbers',
    title: 'Private Numbers',
    subtitle: 'PN exchange',
    description: 'Private numbers — exchange, verification, and related block working practice.',
    icon: KeyRound,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  {
    href: '/topics/block-working-manual/station-diary',
    title: 'Station Diary',
    subtitle: 'Daily station records',
    description: 'Station diary — entries, responsibilities, and examination-oriented notes.',
    icon: ClipboardList,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
  {
    href: '/topics/block-working-manual/train-signal-register',
    title: 'Train Signal Register',
    subtitle: 'TSR records',
    description: 'Train Signal Register — recording train movements, signals, and related working notes.',
    icon: BookMarked,
    accent: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-indigo-200',
    borderClassName: 'border-indigo-500/25 hover:border-indigo-400/45',
    ringClassName: 'ring-indigo-500/10',
  },
]

const BlockWorkingManual = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-sky-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(56,189,248,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(14,165,233,0.10),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-sky-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to topics
        </Link>

        <div className="rounded-3xl border border-sky-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-sky-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Wrench className="h-7 w-7 text-sky-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-sky-100 via-cyan-100 to-blue-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Block Working Manual
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse block working study topics — instruments, PLCT, private numbers, station diary, and TSR.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blockWorkingManualTopics.map((topic) => {
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

export default BlockWorkingManual
