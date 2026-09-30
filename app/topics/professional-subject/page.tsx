import React from 'react'
import Link from 'next/link'
import {
  Boxes,
  Briefcase,
  ChevronRight,
  Gauge,
  Ruler,
  TriangleAlert,
  Users,
  Warehouse,
  Wrench,
} from 'lucide-react'

const professionalSubjectTopics = [
  {
    href: '/topics/professional-subject/accident-inquiries',
    title: 'Accident Inquiries',
    subtitle: 'Inquiry notes',
    description: 'Accident inquiry study notes for the AOM professional subject.',
    icon: TriangleAlert,
    accent: 'from-rose-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-rose-200',
    borderClassName: 'border-rose-500/25 hover:border-rose-400/45',
    ringClassName: 'ring-rose-500/10',
  },
  {
    href: '/topics/professional-subject/double-stack-dwarf-container',
    title: 'Double Stack Dwarf Container',
    subtitle: 'Container loading',
    description: 'Double stack dwarf container study notes for the AOM professional subject.',
    icon: Boxes,
    accent: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    iconClassName: 'text-sky-200',
    borderClassName: 'border-sky-500/25 hover:border-sky-400/45',
    ringClassName: 'ring-sky-500/10',
  },
  {
    href: '/topics/professional-subject/gati-shakti-cargo-terminal',
    title: 'Gati Shakti Cargo Terminal',
    subtitle: 'Cargo terminal',
    description: 'Gati Shakti cargo terminal study notes for the AOM professional subject.',
    icon: Warehouse,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  {
    href: '/topics/professional-subject/maintenance-traffic-spare-coaches',
    title: 'Maintenance Traffic Spare Coaches',
    subtitle: 'Coach holding',
    description: 'Maintenance, traffic and spare coaches study notes for the AOM professional subject.',
    icon: Wrench,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/professional-subject/over-dimensional-consignment',
    title: 'Over Dimensional Consignment',
    subtitle: 'ODC movement',
    description: 'Over dimensional consignment study notes for the AOM professional subject.',
    icon: Ruler,
    accent: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    iconClassName: 'text-violet-200',
    borderClassName: 'border-violet-500/25 hover:border-violet-400/45',
    ringClassName: 'ring-violet-500/10',
  },
  {
    href: '/topics/professional-subject/operating-staff-categorization',
    title: 'Operating Staff Categorization',
    subtitle: 'Staff categories',
    description: 'Operating staff categorization study notes for the AOM professional subject.',
    icon: Users,
    accent: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
    iconClassName: 'text-fuchsia-200',
    borderClassName: 'border-fuchsia-500/25 hover:border-fuchsia-400/45',
    ringClassName: 'ring-fuchsia-500/10',
  },
  {
    href: '/topics/professional-subject/private-freight-terminal',
    title: 'Private Freight Terminal',
    subtitle: 'PFT',
    description: 'Private freight terminal study notes for the AOM professional subject.',
    icon: Warehouse,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
  {
    href: '/topics/professional-subject/speeds-of-wagons',
    title: 'Speeds of Wagons',
    subtitle: 'Wagon speeds',
    description: 'Speeds of wagons study notes for the AOM professional subject.',
    icon: Gauge,
    accent: 'from-orange-500/20 via-amber-500/10 to-transparent',
    iconClassName: 'text-orange-200',
    borderClassName: 'border-orange-500/25 hover:border-orange-400/45',
    ringClassName: 'ring-orange-500/10',
  },
]

const ProfessionalSubjectPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-orange-950/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(251,146,60,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(245,158,11,0.10),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-orange-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to topics
        </Link>

        <div className="rounded-3xl border border-orange-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-orange-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Briefcase className="h-7 w-7 text-orange-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-orange-100 via-amber-100 to-yellow-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Professional Subject
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            AOM professional subject notes — accident inquiries, containers, terminals, coaches, ODC, staff categorization, and wagon speeds.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {professionalSubjectTopics.map((topic) => {
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

export default ProfessionalSubjectPage
