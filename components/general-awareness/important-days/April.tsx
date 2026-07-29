import Link from 'next/link'
import React from 'react'

import { april } from '@/assets/general-awareness/important-days'

type AprilProps = {
  showBackNav?: boolean
}

const April = ({ showBackNav = false }: AprilProps) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Important Days
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-300 tracking-wide">
            {april.sectionTitle}
          </p>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 opacity-80"
            aria-hidden
          />
        </header>

        <div className="space-y-5 sm:space-y-6">
          {april.items.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-slate-600/80 bg-slate-800/50 shadow-xl shadow-slate-950/40 backdrop-blur-sm overflow-hidden"
            >
              <div className="bg-linear-to-r from-amber-900/40 via-slate-800/80 to-slate-800/60 px-4 py-4 sm:px-5 sm:py-4 border-b border-slate-600/60">
                <h2 className="text-base sm:text-lg font-semibold text-amber-100 leading-snug">
                  {item.headline}
                </h2>
              </div>
              <dl className="px-4 py-4 sm:px-5 sm:py-5 space-y-3.5">
                {item.fields.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="grid gap-1 sm:grid-cols-[minmax(8rem,11rem)_1fr] sm:gap-4"
                  >
                    <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-amber-400/95 shrink-0">
                      {row.label}
                    </dt>
                    <dd className="text-sm sm:text-base text-slate-200/95 leading-relaxed">
                      {row.value.trim() === '' ? (
                        <span className="text-slate-500 italic">—</span>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {showBackNav ? (
          <div className="mt-12 flex justify-center pb-4">
            <Link
              href="/general-awareness/important-days"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/50 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-500/20 hover:border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span aria-hidden>←</span>
              Back to Important Days
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default April
