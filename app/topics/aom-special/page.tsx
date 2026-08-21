import React from 'react'
import Link from 'next/link'
import { BookMarked, BookOpen, BookOpenCheck, Calendar, CalendarDays, ChevronRight, Clock, FileText, FolderOpen, Gauge, Hash, Landmark, Layers, Percent, Ruler, Scale, ScrollText, Shield, Sparkles, Timer } from 'lucide-react'

const aomSpecialTopics = [
  {
    href: '/topics/aom-special/distance-wise',
    title: 'Distance Wise',
    subtitle: 'Clearances & locations',
    description:
      'Indian Railways distances for AOM exam — signal overlap, detonators, ODC clearance, gradients, and related figures.',
    icon: Ruler,
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-sky-200',
    borderClassName: 'border-sky-500/25 hover:border-sky-400/45',
    ringClassName: 'ring-sky-500/10',
  },
  {
    href: '/topics/aom-special/general-rules-all',
    title: 'General Rules All',
    subtitle: 'G&SR chapters & rules',
    description:
      'All General Rules chapters for AOM exam — rule numbers, titles, and chapter-wise reference in one place.',
    icon: BookOpenCheck,
    accent: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    iconClassName: 'text-violet-200',
    borderClassName: 'border-violet-500/25 hover:border-violet-400/45',
    ringClassName: 'ring-violet-500/10',
  },
  {
    href: '/topics/aom-special/general-subsidiary-rules-appendix',
    title: 'G&SR Appendix',
    subtitle: 'Appendices I–XVII',
    description:
      'General and Subsidiary Rules appendices for AOM exam — caution orders, LC gates, marshalling, shunting, SWR, and related instructions.',
    icon: Layers,
    accent: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
    iconClassName: 'text-fuchsia-200',
    borderClassName: 'border-fuchsia-500/25 hover:border-fuchsia-400/45',
    ringClassName: 'ring-fuchsia-500/10',
  },
  {
    href: '/topics/aom-special/general-subsidiary-rules-chapters',
    title: 'G&SR Chapters',
    subtitle: 'Chapters I–XVIII',
    description:
      'General and Subsidiary Rules chapters for AOM exam — 18 chapters covering signals, block working, accidents, level crossings, and more.',
    icon: BookOpen,
    accent: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    iconClassName: 'text-teal-200',
    borderClassName: 'border-teal-500/25 hover:border-teal-400/45',
    ringClassName: 'ring-teal-500/10',
  },
  {
    href: '/topics/aom-special/numbers-wise',
    title: 'Numbers Wise',
    subtitle: 'Limits & counts',
    description:
      'Important Indian Railways numbers for AOM exam — wagon limits, dead engines, support wagons, and related figures.',
    icon: Hash,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/aom-special/percentage-wise',
    title: 'Percentage Wise',
    subtitle: 'Rates & shares',
    description:
      'Important Indian Railways percentages for AOM exam — brake power, allowances, and related figures.',
    icon: Percent,
    accent: 'from-emerald-500/20 via-green-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  {
    href: '/topics/aom-special/permissions-authorisation',
    title: 'Permissions / Authorisation',
    subtitle: 'Sanctions & authority',
    description:
      'Permissions, sanctions, and authorised procedures for AOM exam — who may permit, sanction, or authorise railway operations.',
    icon: Shield,
    accent: 'from-rose-500/20 via-red-500/10 to-transparent',
    iconClassName: 'text-rose-200',
    borderClassName: 'border-rose-500/25 hover:border-rose-400/45',
    ringClassName: 'ring-rose-500/10',
  },
  {
    href: '/topics/aom-special/railway-servants-discipline-appeal-rules-1968-all-rules',
    title: 'Railway Servants (D&A) Rules, 1968',
    subtitle: 'All parts & rules',
    description:
      'Complete Railway Servants (Discipline & Appeal) Rules, 1968 for AOM exam — all parts and rule titles in one place.',
    icon: Scale,
    accent: 'from-stone-500/20 via-neutral-500/10 to-transparent',
    iconClassName: 'text-stone-200',
    borderClassName: 'border-stone-500/25 hover:border-stone-400/45',
    ringClassName: 'ring-stone-500/10',
  },
  {
    href: '/topics/aom-special/railway-servants-leave-rules-1949-all-rules',
    title: 'Railway Servants (Leave) Rules, 1949',
    subtitle: 'All leave rules',
    description:
      'Complete Railway Servants (Liberalised Leave) Rules, 1949 for AOM exam — all rule titles in one place.',
    icon: Calendar,
    accent: 'from-zinc-500/20 via-gray-500/10 to-transparent',
    iconClassName: 'text-zinc-200',
    borderClassName: 'border-zinc-500/25 hover:border-zinc-400/45',
    ringClassName: 'ring-zinc-500/10',
  },
  {
    href: '/topics/aom-special/railway-servants-rest-rules-2005-all-rules',
    title: 'Railway Servants (Rest) Rules, 2005',
    subtitle: 'Hours of work & rest',
    description:
      'Complete Railway Servants (Hours of Work and Period of Rest) Rules, 2005 for AOM exam — all parts and rule titles in one place.',
    icon: Clock,
    accent: 'from-neutral-500/20 via-stone-500/10 to-transparent',
    iconClassName: 'text-neutral-200',
    borderClassName: 'border-neutral-500/25 hover:border-neutral-400/45',
    ringClassName: 'ring-neutral-500/10',
  },
  {
    href: '/topics/aom-special/railway-services-conduct-rules-1966-all-rules',
    title: 'Railway Services (Conduct) Rules, 1966',
    subtitle: 'All parts & rules',
    description:
      'Complete Railway Services (Conduct) Rules, 1966 for AOM exam — all parts and rule titles in one place.',
    icon: ScrollText,
    accent: 'from-slate-500/20 via-zinc-500/10 to-transparent',
    iconClassName: 'text-slate-200',
    borderClassName: 'border-slate-500/25 hover:border-slate-400/45',
    ringClassName: 'ring-slate-500/10',
  },
  {
    href: '/topics/aom-special/indian-railway-act-1989-all-acts',
    title: 'Railways Act, 1989',
    subtitle: 'All chapters & sections',
    description:
      'Complete Railways Act, 1989 for AOM exam — all chapters and section titles in one place.',
    icon: Landmark,
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    iconClassName: 'text-blue-200',
    borderClassName: 'border-blue-500/25 hover:border-blue-400/45',
    ringClassName: 'ring-blue-500/10',
  },
  {
    href: '/topics/aom-special/speed-restrictions',
    title: 'Speed Restrictions',
    subtitle: 'Limits & caution',
    description:
      'Indian Railways speed restrictions for AOM exam — temporary, permanent, and related speed limits.',
    icon: Gauge,
    accent: 'from-orange-500/20 via-amber-500/10 to-transparent',
    iconClassName: 'text-orange-200',
    borderClassName: 'border-orange-500/25 hover:border-orange-400/45',
    ringClassName: 'ring-orange-500/10',
  },
  {
    href: '/topics/aom-special/standard-forms',
    title: 'Standard Forms',
    subtitle: 'Disciplinary proceedings',
    description:
      'Standard forms for disciplinary proceedings — SF-1 to SF series used in D&A cases, for AOM exam.',
    icon: FileText,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
  {
    href: '/topics/aom-special/station-working-rules-appendix',
    title: 'SWR Appendix',
    subtitle: 'Appendices A–G',
    description:
      'Station Working Rules appendices for AOM exam — SWR appendices covering station-specific working instructions.',
    icon: FolderOpen,
    accent: 'from-rose-500/20 via-pink-500/10 to-transparent',
    iconClassName: 'text-rose-200',
    borderClassName: 'border-rose-400/25 hover:border-rose-300/45',
    ringClassName: 'ring-rose-400/10',
  },
  {
    href: '/topics/aom-special/station-working-rules-chapters',
    title: 'SWR Chapters',
    subtitle: 'SWR chapter list',
    description:
      'Station Working Rules chapters for AOM exam — chapter-wise SWR reference in one place.',
    icon: BookMarked,
    accent: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    iconClassName: 'text-teal-200',
    borderClassName: 'border-teal-400/25 hover:border-teal-300/45',
    ringClassName: 'ring-teal-400/10',
  },
  {
    href: '/topics/aom-special/timings-wise',
    title: 'Timings Wise',
    subtitle: 'Time limits',
    description:
      'Important Indian Railways timings for AOM exam — notice periods, validity, and operational time limits.',
    icon: Timer,
    accent: 'from-violet-500/20 via-purple-500/10 to-transparent',
    iconClassName: 'text-violet-200',
    borderClassName: 'border-violet-400/25 hover:border-violet-300/45',
    ringClassName: 'ring-violet-400/10',
  },
  {
    href: '/topics/aom-special/years-wise',
    title: 'Years Wise',
    subtitle: 'Years & periods',
    description:
      'Important years and time periods for AOM exam — acts, rules, and railway operational timelines.',
    icon: CalendarDays,
    accent: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-400/25 hover:border-amber-300/45',
    ringClassName: 'ring-amber-400/10',
  },
]

const AOMSpecialPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-indigo-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(99,102,241,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(56,189,248,0.10),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to topics
        </Link>

        <div className="rounded-3xl border border-indigo-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-indigo-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Sparkles className="h-7 w-7 text-indigo-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-indigo-100 via-sky-100 to-violet-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            AOM Special
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Exam-oriented AOM notes grouped by distances, timings, percentages, and related topics.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {aomSpecialTopics.map((topic) => {
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

export default AOMSpecialPage
