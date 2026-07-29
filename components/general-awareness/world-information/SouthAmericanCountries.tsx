import Link from 'next/link'
import React from 'react'
import { Building2, ChevronRight, Coins, Crown, Landmark, Sparkles } from 'lucide-react'

import * as SC from '@/assets/general-awareness/world-information/south-american-countries'

type SouthAmericanCountriesProps = {
  showBackNav?: boolean
}

const detailFields: readonly {
  label: string
  key: keyof SC.SouthAmericanCountryRow
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}[] = [
  { label: 'Capital', key: 'capital', Icon: Building2 },
  { label: 'Currency', key: 'currency', Icon: Coins },
  { label: 'President', key: 'headOfState', Icon: Crown },
  { label: 'Prime Minister', key: 'headOfGovernment', Icon: Landmark },
]

function CountryCard({ index, row }: { index: number; row: SC.SouthAmericanCountryRow }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/35 shadow-xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm">
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-teal-500/5 blur-2xl" />
      <div className="relative px-4 py-5 sm:px-6 sm:py-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/40 to-teal-600/25 text-sm font-bold tabular-nums text-emerald-50 ring-1 ring-emerald-400/45">
            {index + 1}
          </span>
          <h2 className="text-lg font-bold uppercase tracking-tight text-emerald-50 sm:text-xl">
            {row.country}
          </h2>
        </div>
        <div
          className="mb-4 h-0.5 w-14 rounded-full bg-linear-to-r from-emerald-400/90 via-teal-500/70 to-transparent"
          aria-hidden
        />
        <dl className="divide-y divide-slate-600/40 rounded-xl border border-slate-600/45 bg-slate-900/25">
          {detailFields.map((field) => (
            <div
              key={field.label}
              className="grid gap-1 px-4 py-3.5 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-4 sm:items-start"
            >
              <dt className="flex items-center gap-2 font-semibold uppercase text-emerald-200/95">
                <field.Icon className="h-4 w-4 shrink-0 text-emerald-300/90" strokeWidth={2} />
                {field.label}
              </dt>
              <dd className="min-w-0 leading-relaxed text-slate-300">{row[field.key]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const SouthAmericanCountries = ({ showBackNav = false }: SouthAmericanCountriesProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400/90" strokeWidth={2} />
            General Awareness
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-300/90 sm:text-base">
            {SC.worldInformationPageTitle}
          </p>
          <h1 className="mt-3 bg-linear-to-r from-emerald-100 via-teal-100 to-emerald-200 bg-clip-text text-xl font-bold uppercase tracking-tight text-transparent sm:text-2xl md:text-3xl">
            {SC.southAmericanCountriesHeaderLine}
          </h1>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <div className="space-y-6 sm:space-y-7">
          {SC.southAmericanCountriesRows.map((row, i) => (
            <CountryCard key={row.country} index={i} row={row} />
          ))}
        </div>

        {showBackNav ? (
          <nav
            className="mt-14 flex flex-col items-center justify-center gap-3 pb-6 sm:flex-row sm:gap-4"
            aria-label="Section navigation"
          >
            <Link
              href="/general-awareness/world-information"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-800/60 px-5 py-3 text-sm font-semibold uppercase text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              World information
            </Link>
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/45 bg-emerald-500/10 px-5 py-3 text-sm font-semibold uppercase text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              General Awareness
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  )
}

export default SouthAmericanCountries
