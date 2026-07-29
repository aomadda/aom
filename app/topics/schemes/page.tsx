import React from 'react'
import Link from 'next/link'

const SchemesPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-teal-950/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(20,184,166,0.15),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-2xl border border-teal-500/30 bg-slate-900/70 px-8 py-6 text-center shadow-xl shadow-black/20 ring-1 ring-teal-500/15 backdrop-blur-sm sm:px-12 sm:py-8">
          <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Schemes
          </h1>
        </div>
        <div className="mt-6">
          <Link
            href="/topics/schemes/lwis-scheme"
            className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-slate-900/65 px-5 py-4 text-emerald-100 shadow-lg shadow-black/20 ring-1 ring-emerald-500/15 transition hover:border-emerald-400/50 hover:bg-slate-900/85"
          >
            <span className="text-base font-semibold tracking-wide sm:text-lg">LWIS Scheme</span>
            <span className="text-xl leading-none transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SchemesPage