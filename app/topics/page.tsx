'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowLeftRight,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  ClipboardList,
  Container,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Home,
  Landmark,
  Laptop,
  MapPinned,
  Megaphone,
  Network,
  Orbit,
  Package,
  PiggyBank,
  Plane,
  Scale,
  ScrollText,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  FileCheck,
  FileStack,
  Gauge,
  Clock,
  TriangleAlert,
  Wrench,
} from 'lucide-react'


type TopicCard = {
  href: string
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  gradient: string
  ring: string
  iconBg: string
}

const topicSections: { heading: string; blurb: string; items: TopicCard[] }[] = [
  {
    heading: 'Study & systems',
    blurb: 'Chief Controller exam prep and railway IT applications.',
    items: [
      {
        href: '/topics/chief-controller',
        title: 'Chief Controller',
        subtitle: 'AOM study material',
        description:
          'Speed restrictions, timings, distances, G&SR, rules, SWR, permissions, and standard forms — full reference for aspirants.',
        icon: Briefcase,
        gradient: 'from-blue-600 to-indigo-700',
        ring: 'ring-blue-500/30',
        iconBg: 'bg-blue-500/20',
      },
      {
        href: '/topics/information-technology-apps',
        title: 'Information technology apps',
        subtitle: 'FOIS, ICMS, PRS & more',
        description:
          'Railway IT systems: booking, freight, control, safety and employee-facing applications explained in one place.',
        icon: Laptop,
        gradient: 'from-slate-600 to-violet-700',
        ring: 'ring-slate-500/30',
        iconBg: 'bg-slate-500/20',
      },
      {
        href: '/topics/indian-railways',
        title: 'Indian Railways',
        subtitle: 'Organization & structure',
        description:
          'Indian Railways overview — organization, zones, and examination-oriented reference material.',
        icon: Building2,
        gradient: 'from-amber-700 to-orange-900',
        ring: 'ring-amber-500/30',
        iconBg: 'bg-amber-500/20',
      },
      {
        href: '/topics/block-working-manual',
        title: 'Block Working Manual',
        subtitle: 'Block instruments & records',
        description:
          'Block instruments, PLCT, private numbers, station diary, and train signal register — study topics in one place.',
        icon: Wrench,
        gradient: 'from-sky-600 to-blue-800',
        ring: 'ring-sky-500/30',
        iconBg: 'bg-sky-500/20',
      },
      {
        href: '/topics/accident-manual',
        title: 'Accident Manual',
        subtitle: 'Accident & safety working',
        description:
          'Accident Manual study topics — classification, duties, reporting, and examination-oriented reference.',
        icon: TriangleAlert,
        gradient: 'from-rose-600 to-orange-800',
        ring: 'ring-rose-500/30',
        iconBg: 'bg-rose-500/20',
      },
      {
        href: '/topics/operating-manual',
        title: 'Operating Manual',
        subtitle: 'Station & train working',
        description:
          'Operating Manual study topics — station working, train operations, and examination-oriented reference.',
        icon: BookOpen,
        gradient: 'from-indigo-600 to-blue-800',
        ring: 'ring-indigo-500/30',
        iconBg: 'bg-indigo-500/20',
      },
      {
        href: '/topics/working-time-table',
        title: 'Working Time Table',
        subtitle: 'WTT & train timings',
        description:
          'Working Time Table study topics — train timings, sectional speeds, and examination-oriented reference.',
        icon: Clock,
        gradient: 'from-teal-600 to-cyan-800',
        ring: 'ring-teal-500/30',
        iconBg: 'bg-teal-500/20',
      },
      {
        href: '/topics/national-rail-plan',
        title: 'National rail plan',
        subtitle: 'Network vision & projects',
        description: 'National Rail Plan — policy context, corridors, and examination-oriented summary.',
        icon: MapPinned,
        gradient: 'from-cyan-700 to-blue-800',
        ring: 'ring-cyan-500/30',
        iconBg: 'bg-cyan-500/20',
      },
      {
        href: '/topics/mission-3000MT',
        title: 'Mission 3000 MT',
        subtitle: 'Freight & logistics',
        description: 'Mission 3000 MT — reference summary for the freight capacity mission.',
        icon: Target,
        gradient: 'from-purple-700 to-indigo-900',
        ring: 'ring-purple-500/30',
        iconBg: 'bg-purple-500/20',
      },
      {
        href: '/topics/national-logistics-policy',
        title: 'National logistics policy',
        subtitle: 'Policy framework',
        description: 'National Logistics Policy — framework, PM Gati Shakti links, and exam-focused notes.',
        icon: Package,
        gradient: 'from-teal-800 to-emerald-900',
        ring: 'ring-teal-500/30',
        iconBg: 'bg-teal-500/20',
      },
      {
        href: '/topics/container-rail-terminals',
        title: 'Container rail terminals',
        subtitle: 'CRT & freight hubs',
        description: 'Container rail terminals — facilities, handling, and examination-oriented reference.',
        icon: Container,
        gradient: 'from-sky-700 to-blue-900',
        ring: 'ring-sky-500/30',
        iconBg: 'bg-sky-500/20',
      },
      {
        href: '/topics/gati-shakti-terminals',
        title: 'Gati Shakti terminals',
        subtitle: 'Rail terminals under Gati Shakti',
        description: 'Gati Shakti terminals — multimodal connectivity and examination-oriented reference.',
        icon: Network,
        gradient: 'from-orange-600 to-rose-700',
        ring: 'ring-orange-500/30',
        iconBg: 'bg-orange-500/20',
      },
      {
        href: '/topics/government-e-market',
        title: 'Government e-market',
        subtitle: 'GeM & public procurement',
        description: 'Government e-Market (GeM) — procurement portal overview and examination-oriented reference.',
        icon: ShoppingCart,
        gradient: 'from-emerald-600 to-green-800',
        ring: 'ring-emerald-500/30',
        iconBg: 'bg-emerald-500/20',
      },
    ],
  },
  {
    heading: 'Establishment & service',
    blurb: 'HR, career, rules, pension, housing, and transfers.',
    items: [
      {
        href: '/topics/hrms',
        title: 'HRMS',
        subtitle: 'Human resource system',
        description: 'AIMS HRMS portal, self-service, manuals, and settlement-related overview for employees.',
        icon: Users,
        gradient: 'from-cyan-600 to-teal-700',
        ring: 'ring-cyan-500/30',
        iconBg: 'bg-cyan-500/20',
      },
      {
        href: '/topics/apar',
        title: 'APAR',
        subtitle: 'Performance appraisal',
        description: 'Annual Performance Appraisal Report — process, timelines, and railway norms.',
        icon: ClipboardList,
        gradient: 'from-teal-600 to-emerald-700',
        ring: 'ring-teal-500/30',
        iconBg: 'bg-teal-500/20',
      },
      {
        href: '/topics/macp',
        title: 'MACP',
        subtitle: 'Assured career progression',
        description: 'Modified Assured Career Progression — grades, benchmarks, and MACP cycles.',
        icon: TrendingUp,
        gradient: 'from-emerald-600 to-green-700',
        ring: 'ring-emerald-500/30',
        iconBg: 'bg-emerald-500/20',
      },
      {
        href: '/topics/permanent-negotiating-machinery',
        title: 'Permanent negotiating machinery',
        subtitle: 'PNM & joint consultations',
        description:
          'Permanent Negotiating Machinery — forums, union–management dialogue, and examination-oriented reference.',
        icon: Handshake,
        gradient: 'from-fuchsia-600 to-pink-800',
        ring: 'ring-fuchsia-500/30',
        iconBg: 'bg-fuchsia-500/20',
      },
      {
        href: '/topics/joint-consultative-machinery',
        title: 'Joint consultative machinery',
        subtitle: 'JCM & staff–government dialogue',
        description:
          'Joint Consultative Machinery — levels, councils, and examination-oriented reference for central services.',
        icon: UsersRound,
        gradient: 'from-violet-600 to-fuchsia-800',
        ring: 'ring-violet-500/30',
        iconBg: 'bg-violet-500/20',
      },
      {
        href: '/topics/prem',
        title: 'PREM',
        subtitle: 'Establishment reference',
        description: 'PREM — examination-oriented reference for railway establishment.',
        icon: FileStack,
        gradient: 'from-slate-700 to-zinc-900',
        ring: 'ring-slate-500/30',
        iconBg: 'bg-slate-500/20',
      },
      {
        href: '/topics/cat',
        title: 'CAT',
        subtitle: 'Central Administrative Tribunal',
        description: 'CAT jurisdiction, procedures, and railway-related references for appeals.',
        icon: Scale,
        gradient: 'from-amber-600 to-orange-700',
        ring: 'ring-amber-500/30',
        iconBg: 'bg-amber-500/20',
      },
      {
        href: '/topics/service-rules',
        title: 'Service rules',
        subtitle: 'Conduct & conditions',
        description: 'Railway service conditions, classifications, and linked establishment concepts.',
        icon: FileCheck,
        gradient: 'from-indigo-600 to-blue-700',
        ring: 'ring-indigo-500/30',
        iconBg: 'bg-indigo-500/20',
      },
      {
        href: '/topics/master-circulars',
        title: 'Master circulars',
        subtitle: 'Board & policy compilations',
        description: 'Key master circulars and consolidated instructions for railway administration.',
        icon: ScrollText,
        gradient: 'from-violet-600 to-purple-700',
        ring: 'ring-violet-500/30',
        iconBg: 'bg-violet-500/20',
      },
      {
        href: '/topics/merry-go-round',
        title: 'Merry go round',
        subtitle: 'Study topic',
        description: 'Merry go round — reference page for this topic.',
        icon: Orbit,
        gradient: 'from-indigo-600 to-violet-700',
        ring: 'ring-indigo-500/30',
        iconBg: 'bg-indigo-500/20',
      },
      {
        href: '/topics/irem',
        title: 'IREM',
        subtitle: 'Indian Railway Establishment Manual',
        description: 'IREM chapters and establishment procedures for railway servants.',
        icon: BookOpen,
        gradient: 'from-green-600 to-emerald-700',
        ring: 'ring-green-500/30',
        iconBg: 'bg-green-500/20',
      },
      {
        href: '/topics/irec',
        title: 'IREC',
        subtitle: 'Indian Railway Establishment Code',
        description: 'IREC references and code provisions for establishment matters.',
        icon: BookMarked,
        gradient: 'from-lime-600 to-green-700',
        ring: 'ring-lime-500/30',
        iconBg: 'bg-lime-500/20',
      },
      {
        href: '/topics/staff-benefit-fund',
        title: 'Staff benefit fund',
        subtitle: 'Welfare schemes',
        description: 'Staff Benefit Fund — membership, advances, and welfare benefits.',
        icon: HeartHandshake,
        gradient: 'from-rose-600 to-pink-700',
        ring: 'ring-rose-500/30',
        iconBg: 'bg-rose-500/20',
      },
      {
        href: '/topics/leave-travel-concession',
        title: 'Leave travel concession',
        subtitle: 'LTC rules',
        description: 'LTC entitlement, blocks, family, and journey rules for railway employees.',
        icon: Plane,
        gradient: 'from-sky-600 to-cyan-700',
        ring: 'ring-sky-500/30',
        iconBg: 'bg-sky-500/20',
      },
      {
        href: '/topics/national-pension-scheme',
        title: 'National pension scheme',
        subtitle: 'NPS',
        description: 'NPS for railway employees — Tier I & II, contributions, and withdrawal overview.',
        icon: PiggyBank,
        gradient: 'from-slate-600 to-zinc-700',
        ring: 'ring-slate-500/30',
        iconBg: 'bg-slate-500/20',
      },
      {
        href: '/topics/govt-pension',
        title: 'Government pension',
        subtitle: 'OPS & pension rules',
        description: 'Government / old pension scheme concepts and railway pension references.',
        icon: Landmark,
        gradient: 'from-stone-600 to-neutral-700',
        ring: 'ring-stone-500/30',
        iconBg: 'bg-stone-500/20',
      },
      {
        href: '/topics/quarters',
        title: 'Quarters',
        subtitle: 'Railway housing',
        description: 'Allotment, types of quarters, and related establishment notes.',
        icon: Home,
        gradient: 'from-orange-600 to-amber-700',
        ring: 'ring-orange-500/30',
        iconBg: 'bg-orange-500/20',
      },
      {
        href: '/topics/transfers',
        title: 'Transfers',
        subtitle: 'Posting & mutual transfer',
        description: 'Transfer policy, inter-railway moves, and procedural highlights.',
        icon: ArrowLeftRight,
        gradient: 'from-fuchsia-600 to-purple-700',
        ring: 'ring-fuchsia-500/30',
        iconBg: 'bg-fuchsia-500/20',
      },
    ],
  },
  {
    heading: 'Public & rolling stock',
    blurb: 'Complaints handling and technical reference data.',
    items: [
      {
        href: '/topics/public-complaints',
        title: 'Public complaints',
        subtitle: 'Grievance handling',
        description: 'Public complaint mechanisms, channels, and railway citizen-facing norms.',
        icon: Megaphone,
        gradient: 'from-red-600 to-rose-700',
        ring: 'ring-red-500/30',
        iconBg: 'bg-red-500/20',
      },
      {
        href: '/topics/establishment-rules',
        title: 'Establishment rules',
        subtitle: 'Rules & procedures',
        description: 'Railway establishment rules — reference, compilations, and study material in one place.',
        icon: ScrollText,
        gradient: 'from-violet-600 to-indigo-800',
        ring: 'ring-violet-500/30',
        iconBg: 'bg-violet-500/20',
      },
      {
        href: '/topics/financial-rules',
        title: 'Financial rules',
        subtitle: 'Budget & accounts',
        description: 'Railway financial rules — reference material for exam prep and day-to-day queries.',
        icon: PiggyBank,
        gradient: 'from-emerald-600 to-teal-800',
        ring: 'ring-emerald-500/30',
        iconBg: 'bg-emerald-500/20',
      },
      {
        href: '/topics/engine-on-load',
        title: 'Engine on load',
        subtitle: 'Locomotive operation',
        description: 'Engine on load — operating reference for examination and field use.',
        icon: Gauge,
        gradient: 'from-yellow-600 to-amber-800',
        ring: 'ring-amber-500/30',
        iconBg: 'bg-amber-500/20',
      },
    ],
  },
]

const topicsAlphabetical: TopicCard[] = topicSections
  .flatMap((s) => s.items)
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

const totalTopics = topicsAlphabetical.length

const Topics = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50/80 to-fuchsia-100/70">
      <header className="relative overflow-hidden border-b border-pink-200/70 bg-linear-to-r from-pink-600 via-rose-600 to-fuchsia-700 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.22),transparent)]" />
        <div className="pointer-events-none absolute -right-24 top-4 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-fuchsia-400/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-pink-100 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-50 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Study topics
            </div>

            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-linear-to-br from-white/25 to-white/5 p-4 shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                <GraduationCap className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Railway <span className="text-pink-100">topics</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-pink-50 sm:text-lg">
              Curated material for examinations and service reference — Chief Controller, IT apps, establishment rules,
              pensions, housing, and more.
            </p>
            <p className="mt-3 text-sm font-medium text-pink-100/90">{totalTopics} topic pages</p>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section aria-label="All topics A to Z">
          <div className="mb-8 border-b border-pink-200/80 pb-4">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">All topics (A–Z)</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Study systems, establishment, rolling stock — sorted alphabetically by title.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {topicsAlphabetical.map((topic) => {
              const Icon = topic.icon
              return (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-900/10 ${topic.ring}`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-90 ${topic.gradient}`}
                      aria-hidden
                    />
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${topic.iconBg} text-slate-800`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>
                      <span
                        className={`rounded-full bg-linear-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100 sm:text-xs ${topic.gradient}`}
                      >
                        Open
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-rose-800 sm:text-xl">
                      {topic.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{topic.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-rose-700">
                      Read topic
                      <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Topics
