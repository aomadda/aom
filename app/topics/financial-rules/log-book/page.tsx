import React from 'react'

const points = [
  'Regular maintenance schedule & Service dates',
  'Warranty claims',
  'Tracking the expenses',
  'Odometer readings',
]

const LogBookPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(56,189,248,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-teal-400 to-sky-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-sky-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Log Book
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            <p className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base">
              Maintaining a vehicle maintenance log book is essential for ensuring the longevity, reliability, and
              value of your four-wheeler. This log book serves as a detailed record of all maintenance activities,
              repairs, and services performed on your vehicle.
            </p>

            <ol className="space-y-3">
              {points.map((point, index) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-sky-400/20 bg-linear-to-br from-sky-950/25 via-slate-900/40 to-slate-900/20 px-4 py-4 ring-1 ring-white/4 sm:px-5"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-200 to-sky-500 text-sm font-extrabold text-sky-950 shadow-md ring-1 ring-sky-100/50">
                    {index + 1}
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">{point}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </div>
  )
}

export default LogBookPage
