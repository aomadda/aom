import React from 'react'
import Link from 'next/link'
import {
  BarChart3,
  Box,
  Calendar,
  Database,
  Eye,
  FileText,
  Globe,
  Grid3X3,
  Laptop,
  Layers,
  Map,
  Monitor,
  Network,
  Radio,
  Receipt,
  Shield,
  Ticket,
  TrainFront,
  Users,
} from 'lucide-react'

const itApplicationTopics = [
  {
    href: '/topics/information-technology-apps/cms',
    title: 'CMS',
    subtitle: 'Crew management',
    description: 'Crew Management System objectives, feature list, and coverage statistics.',
    icon: Users,
    accent: 'from-zinc-500/20 via-amber-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/information-technology-apps/coa',
    title: 'COA',
    subtitle: 'Accounting',
    description: 'COA application materials and related study references.',
    icon: Receipt,
    accent: 'from-lime-500/20 via-green-500/10 to-transparent',
    iconClassName: 'text-lime-200',
    borderClassName: 'border-lime-500/25 hover:border-lime-400/45',
    ringClassName: 'ring-lime-500/10',
  },
  {
    href: '/topics/information-technology-apps/cois',
    title: 'COIS',
    subtitle: 'Coaching operations',
    description: 'Coaching Operations Information System within ICMS, with modules, functions, and role notes.',
    icon: Box,
    accent: 'from-purple-500/20 via-cyan-500/10 to-transparent',
    iconClassName: 'text-purple-200',
    borderClassName: 'border-purple-500/25 hover:border-purple-400/45',
    ringClassName: 'ring-purple-500/10',
  },
  {
    href: '/topics/information-technology-apps/icms',
    title: 'ICMS',
    subtitle: 'Integrated management',
    description: 'ICMS app page with related content and references.',
    icon: Monitor,
    accent: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    iconClassName: 'text-indigo-200',
    borderClassName: 'border-indigo-500/25 hover:border-indigo-400/45',
    ringClassName: 'ring-indigo-500/10',
  },
  
  {
    href: '/topics/information-technology-apps/rms',
    title: 'RMS',
    subtitle: 'Rake management',
    description: 'Rake Management System as a FOIS subsystem, with core functions and development notes.',
    icon: Layers,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  {
    href: '/topics/information-technology-apps/rtis',
    title: 'RTIS',
    subtitle: 'Live train tracking',
    description: 'Real Time Train Information System: GPS, COA, IRN, and roll-out status notes.',
    icon: Radio,
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    iconClassName: 'text-blue-200',
    borderClassName: 'border-blue-500/25 hover:border-indigo-400/45',
    ringClassName: 'ring-blue-500/10',
  },
  {
    href: '/topics/information-technology-apps/satsang',
    title: 'SATSANG',
    subtitle: 'Timetable planning',
    description: 'Software Aided Train Scheduling And Network Governance: scheduling, PRESS, and implementation notes.',
    icon: Calendar,
    accent: 'from-slate-500/20 via-cyan-500/10 to-transparent',
    iconClassName: 'text-slate-200',
    borderClassName: 'border-slate-500/30 hover:border-slate-400/50',
    ringClassName: 'ring-slate-500/10',
  },
  {
    href: '/topics/information-technology-apps/tms',
    title: 'TMS',
    subtitle: 'Traffic systems',
    description: 'Traffic management application references and study points.',
    icon: Network,
    accent: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    iconClassName: 'text-teal-200',
    borderClassName: 'border-teal-500/25 hover:border-teal-400/45',
    ringClassName: 'ring-teal-500/10',
  },
  {
    href: '/topics/information-technology-apps/e-drishti',
    title: 'E-Drishti',
    subtitle: 'Monitoring',
    description: 'Dashboards, monitoring views, and app-related reference material.',
    icon: Eye,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
  {
    href: '/topics/information-technology-apps/ess',
    title: 'ESS',
    subtitle: 'Employee self service',
    description: 'Employee self service references and related application notes.',
    icon: Laptop,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  
  {
    href: '/topics/information-technology-apps/ewss',
    title: 'EWSS',
    subtitle: 'System support',
    description: 'EWSS application content and supporting study material.',
    icon: Shield,
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    iconClassName: 'text-violet-200',
    borderClassName: 'border-violet-500/25 hover:border-violet-400/45',
    ringClassName: 'ring-violet-500/10',
  },
  {
    href: '/topics/information-technology-apps/fois',
    title: 'FOIS',
    subtitle: 'Freight operations',
    description: 'Freight Operation Information System page with introduction and feature details.',
    icon: TrainFront,
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
  
  {
    href: '/topics/information-technology-apps/rsms',
    title: 'RSMS',
    subtitle: 'Management system',
    description: 'RSMS concepts, workflow references, and application-related content.',
    icon: BarChart3,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/information-technology-apps/tdms',
    title: 'TDMS',
    subtitle: 'Data management',
    description: 'Train or data management references collected for quick revision.',
    icon: Database,
    accent: 'from-blue-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-blue-200',
    borderClassName: 'border-blue-500/25 hover:border-blue-400/45',
    ringClassName: 'ring-blue-500/10',
  },
  {
    href: '/topics/information-technology-apps/pms',
    title: 'PMS',
    subtitle: 'Project systems',
    description: 'PMS-related topic page for references and future content.',
    icon: Grid3X3,
    accent: 'from-pink-500/20 via-rose-500/10 to-transparent',
    iconClassName: 'text-pink-200',
    borderClassName: 'border-pink-500/25 hover:border-pink-400/45',
    ringClassName: 'ring-pink-500/10',
  },
  {
    href: '/topics/information-technology-apps/rshc',
    title: 'RSHC',
    subtitle: 'Health systems',
    description: 'RSHC application references and future content entry point.',
    icon: Globe,
    accent: 'from-rose-500/20 via-pink-500/10 to-transparent',
    iconClassName: 'text-rose-200',
    borderClassName: 'border-rose-500/25 hover:border-rose-400/45',
    ringClassName: 'ring-rose-500/10',
  },
  {
    href: '/topics/information-technology-apps/ntes',
    title: 'NTES',
    subtitle: 'Train enquiry',
    description: 'National Train Enquiry System references and related notes.',
    icon: Map,
    accent: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    iconClassName: 'text-sky-200',
    borderClassName: 'border-sky-500/25 hover:border-sky-400/45',
    ringClassName: 'ring-sky-500/10',
  },
  
  {
    href: '/topics/information-technology-apps/prs-application',
    title: 'PRS Application',
    subtitle: 'Passenger reservation',
    description: 'Passenger reservation system application page and related material.',
    icon: FileText,
    accent: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
    iconClassName: 'text-fuchsia-200',
    borderClassName: 'border-fuchsia-500/25 hover:border-fuchsia-400/45',
    ringClassName: 'ring-fuchsia-500/10',
  },
  {
    href: '/topics/information-technology-apps/uts-application',
    title: 'UTS Application',
    subtitle: 'Ticketing',
    description: 'Unreserved ticketing system application references and notes.',
    icon: Ticket,
    accent: 'from-orange-500/20 via-amber-500/10 to-transparent',
    iconClassName: 'text-orange-200',
    borderClassName: 'border-orange-500/25 hover:border-orange-400/45',
    ringClassName: 'ring-orange-500/10',
  },
]

const ITApplications = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-cyan-950/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(34,211,238,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(59,130,246,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-cyan-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-cyan-100 via-sky-100 to-blue-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Information technology apps
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse the available IT application topics below. More application topics can be added to this grid later
            without changing the layout.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {itApplicationTopics.map((topic) => {
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
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{topic.subtitle}</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">{topic.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{topic.description}</p>
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

export default ITApplications