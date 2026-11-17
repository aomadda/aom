import React from 'react'

const notes = [
  'Dedicated fund for Railway Safety',
  'Based on the recommendations of High Level Safety Review Committee, 2012 headed by Shri Anil Kakodkar, former chairman of Atomic Energy Commission.',
  'Established in the year 2017-18. Period – Five years.',
  'Now extended to another five years from 2022-23 to 2026-27',
]

const works = [
  'Track renewals &upgradation',
  'Bridge rehabilitation',
  'Elimination of LC gates on BG routes',
  'Construction of ROBs/RUBs',
  'Replacement & Improvement of Signaling system.',
  'Improvement & up gradation of Rolling Stock.',
  'Replacement of Electrical assets',
  'HRD – Human Resources Development.',
]

const RashtriyaRailSanrakshaKoshPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(251,191,36,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-amber-400 to-teal-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-amber-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              RRSK – Rashtriya Rail Sanraksha Kosh
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            {notes.map((note) => (
              <p
                key={note}
                className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base"
              >
                {note}
              </p>
            ))}

            <section className="overflow-hidden rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/30 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-amber-400/20 bg-amber-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold text-amber-50 sm:text-base">RRSK Works</h2>
              </div>
              <ul className="space-y-3 px-4 py-5 sm:px-5">
                {works.map((work) => (
                  <li
                    key={work}
                    className="rounded-2xl border border-amber-400/15 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4"
                  >
                    {work}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default RashtriyaRailSanrakshaKoshPage
