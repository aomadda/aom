'use client'

import React from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  Download,
  FileText,
  ShieldAlert,
  Settings,
  Sparkles,
  Award,
} from 'lucide-react'

const pdfSections = [
  {
    href: '/pdfs/authorities',
    title: 'Authority forms',
    subtitle: 'Official forms & guidelines',
    description:
      'Download official railway authority forms and related guidelines from the consolidated list.',
    icon: Award,
    gradient: 'from-purple-600 to-indigo-700',
    ring: 'ring-purple-500/35',
    iconBg: 'bg-purple-500/20',
  },
  {
    href: '/pdfs/accident-manual-amendments',
    title: 'Accident Manual amendments',
    subtitle: 'Amendment slips & updates',
    description:
      'Latest Accident Manual amendment slips and safety procedure updates as PDF downloads.',
    icon: ShieldAlert,
    gradient: 'from-red-600 to-orange-700',
    ring: 'ring-red-500/35',
    iconBg: 'bg-red-500/20',
  },
  {
    href: '/pdfs/block-working-manual-amendments',
    title: 'Block Working Manual amendments',
    subtitle: 'BWM slips & procedures',
    description:
      'Block Working Manual amendment slips and operational procedure updates for block working.',
    icon: Settings,
    gradient: 'from-emerald-600 to-teal-700',
    ring: 'ring-emerald-500/35',
    iconBg: 'bg-emerald-500/20',
  },
  {
    href: '/pdfs/general-subsidiary-rules-amendments',
    title: 'G&SR amendments',
    subtitle: 'General & Subsidiary Rules',
    description:
      'General and Subsidiary Rules (G&SR) amendments and updates in downloadable PDF format.',
    icon: FileText,
    gradient: 'from-sky-600 to-indigo-700',
    ring: 'ring-sky-500/35',
    iconBg: 'bg-sky-500/20',
  },
]

const PDFs = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50/70 to-blue-100/80">
      <header className="relative overflow-hidden border-b border-indigo-200/60 bg-linear-to-r from-indigo-800 via-indigo-700 to-blue-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-25%,rgba(255,255,255,0.2),transparent)]" />
        <div className="pointer-events-none absolute -right-28 top-8 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-100/95 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-100 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Downloads centre
            </div>

            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-linear-to-br from-white/25 to-white/5 p-4 shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                <Download className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              PDF <span className="text-indigo-200">documents</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-indigo-100/95 sm:text-lg">
              Authority forms and manual amendments — open a category to view lists and download files.
            </p>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Categories</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              {pdfSections.length} sections · PDFs open or download from each page
            </p>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {pdfSections.map((section) => {
            const Icon = section.icon
            return (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900/10 ${section.ring}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-90 ${section.gradient}`}
                    aria-hidden
                  />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${section.iconBg} text-slate-800`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span
                      className={`rounded-full bg-linear-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100 sm:text-xs ${section.gradient}`}
                    >
                      Open
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-indigo-800 sm:text-xl">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{section.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{section.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-indigo-700">
                    Browse PDFs
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

export default PDFs
