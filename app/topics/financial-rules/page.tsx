import React from 'react'
import Link from 'next/link'
import { BookOpenText, Files, FileStack, Landmark, LayoutGrid } from 'lucide-react'

const financialRuleTopics = [
  {
    href: '/topics/financial-rules/plan-heads',
    title: 'Plan heads',
    subtitle: 'Works classification',
    description:
      'Plan head codes, source of finance, coordinator details, and related reference tables in one place.',
    icon: BookOpenText,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconClassName: 'text-emerald-200',
    borderClassName: 'border-emerald-500/25 hover:border-emerald-400/45',
    ringClassName: 'ring-emerald-500/10',
  },
  {
    href: '/topics/financial-rules/major-heads',
    title: 'Major heads',
    subtitle: 'Core classifications',
    description:
      'Major head references and top-level financial classifications for quick study and future expansion.',
    icon: Files,
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    iconClassName: 'text-violet-200',
    borderClassName: 'border-violet-500/25 hover:border-violet-400/45',
    ringClassName: 'ring-violet-500/10',
  },
  {
    href: '/topics/financial-rules/demands',
    title: 'Demands',
    subtitle: 'Grant categories',
    description:
      'Demand-wise financial references, grouped grant topics, and supporting material for study and revision.',
    icon: FileStack,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconClassName: 'text-amber-200',
    borderClassName: 'border-amber-500/25 hover:border-amber-400/45',
    ringClassName: 'ring-amber-500/10',
  },
  {
    href: '/topics/financial-rules/primary-units',
    title: 'Primary units',
    subtitle: 'Object heads',
    description:
      'Primary unit references, object head structure, and related financial classification material for study.',
    icon: LayoutGrid,
    accent: 'from-pink-500/20 via-rose-500/10 to-transparent',
    iconClassName: 'text-pink-200',
    borderClassName: 'border-pink-500/25 hover:border-pink-400/45',
    ringClassName: 'ring-pink-500/10',
  },
  {
    href: '/topics/financial-rules/railway-budget',
    title: 'Railway budget',
    subtitle: 'Budget structure',
    description:
      'Budget preparation, grants, parliamentary control, propriety standards, and related budget concepts.',
    icon: Landmark,
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    iconClassName: 'text-cyan-200',
    borderClassName: 'border-cyan-500/25 hover:border-cyan-400/45',
    ringClassName: 'ring-cyan-500/10',
  },
]

const FinancialRulesPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(16,185,129,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(6,182,212,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/70 px-8 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-emerald-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">Topics</p>
          <h1 className="mt-3 bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Financial rules
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse the available financial rule topics below. More sections can be added to this grid later without
            changing the layout.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {financialRuleTopics.map((topic) => {
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

export default FinancialRulesPage
