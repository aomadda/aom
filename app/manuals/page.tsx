'use client'

import React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  ChevronRight,
  FileText,
  Library,
  Sparkles,
  Train,
  ShieldAlert,
  Clock,
  Map,
  Layers,
} from 'lucide-react'

const manuals = [
  {
    href: '/manuals/indian-railways-operating-manual',
    title: 'Indian Railways Operating Manual',
    subtitle: 'Railway Board — operations & procedures',
    description:
      'Government of India official operating manual: rules, chapters, and guidance for train operations across Indian Railways.',
    icon: Train,
    gradient: 'from-blue-600 to-indigo-700',
    ring: 'ring-blue-500/30',
    iconBg: 'bg-blue-500/20',
  },
  {
    href: '/manuals/opertaing-manual',
    title: 'Operating Manual (SCR)',
    subtitle: 'South Central Railway',
    description:
      'Division-specific operating manual with downloadable PDF and indexed sections for SCR working practices.',
    icon: BookOpen,
    gradient: 'from-violet-600 to-purple-700',
    ring: 'ring-violet-500/30',
    iconBg: 'bg-violet-500/20',
  },
  {
    href: '/manuals/block-working-manual',
    title: 'Block Working Manual',
    subtitle: 'Token & block systems',
    description:
      'Parts and annexures for single line, token block, and related block working on South Central Railway.',
    icon: Layers,
    gradient: 'from-slate-600 to-blue-800',
    ring: 'ring-slate-500/30',
    iconBg: 'bg-slate-500/20',
  },
  {
    href: '/manuals/general-subsidiary-rules',
    title: 'General Subsidiary Rules',
    subtitle: 'GSR — supplementary rules',
    description:
      'General Subsidiary Rules with chapters and appendix: signalling, working, and operational detail.',
    icon: FileText,
    gradient: 'from-emerald-600 to-teal-700',
    ring: 'ring-emerald-500/30',
    iconBg: 'bg-emerald-500/20',
  },
  {
    href: '/manuals/accident-manual',
    title: 'Accident Manual',
    subtitle: 'Response & investigation',
    description:
      'Accident management guidelines, chapters, and protocols for railway accident handling and reporting.',
    icon: ShieldAlert,
    gradient: 'from-red-600 to-orange-700',
    ring: 'ring-red-500/30',
    iconBg: 'bg-red-500/20',
  },
  {
    href: '/manuals/station-working-rules',
    title: 'Station Working Rules',
    subtitle: 'SWR — station-specific',
    description:
      'Station working rule topics: layouts, signalling, line clear, shunting, and abnormal working.',
    icon: Map,
    gradient: 'from-amber-600 to-yellow-700',
    ring: 'ring-amber-500/30',
    iconBg: 'bg-amber-500/20',
  },
  {
    href: '/manuals/working-time-table',
    title: 'Working Time Table',
    subtitle: 'WTT — divisions & downloads',
    description:
      'Working time table material by topic, division PDFs, and operational timing references.',
    icon: Clock,
    gradient: 'from-cyan-600 to-sky-700',
    ring: 'ring-cyan-500/30',
    iconBg: 'bg-cyan-500/20',
  },
]

const Manuals = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-violet-50/80 to-indigo-100/90">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-violet-200/60 bg-linear-to-r from-violet-700 via-purple-700 to-indigo-800 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.18),transparent)]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-violet-100/90 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-100 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Reference library
            </div>

            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-linear-to-br from-white/20 to-white/5 p-4 shadow-lg ring-1 ring-white/20 backdrop-blur-md">
                <Library className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Railway <span className="text-violet-200">manuals</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-violet-100/95 sm:text-lg">
              Operating rules, block working, GSR, accident procedures, station working, and time tables — one place to
              open every manual in this app.
            </p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">All manuals</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">{manuals.length} resources · tap a card to open</p>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {manuals.map((m) => {
            const Icon = m.icon
            return (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-900/10 ${m.ring}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-90 ${m.gradient}`}
                    aria-hidden
                  />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${m.iconBg} text-slate-800`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span
                      className={`rounded-full bg-linear-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100 sm:text-xs ${m.gradient}`}
                    >
                      Open
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-violet-800 sm:text-xl">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{m.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{m.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-violet-700">
                    View manual
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default Manuals
