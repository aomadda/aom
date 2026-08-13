'use client'

import React from 'react'
import Link from 'next/link'
import { BookMarked } from 'lucide-react'

const points = [
  'It is an important register and SM shall keep separate register for each block instrument.',
  'All the signals sent on Block Instrument and timings shall be recorded.',
  'The timings recorded shall be actual and can be rounded off to next higher minutes.',
  'All the entries in TSR must be made in ink.',
  'All signatures shall be made in full.',
  'No erasure or overwriting shall be made in TSR.',
  'A line shall be drawn through on a wrong entry.',
  'Testing of Block instrument, handing over and taking over, Signing ON and signing OFF shall be recorded in TSR.',
  'A red ink line shall be drawn below the entry of the last train of the date.',
  "The SM shall continue to remain on duty till all the entries of the train are complete. In case of any delay both SM‘s shall put their initials.",
  'The in-charge SM/SS shall daily check the TSR and pass remark in TSR.',
  'TSR shall not be removed from cabin/SM without the orders of DRM.',
  'TSR shall be retained at the station for one year after the half year in which it is completed. SIR AS PER O.M 1YR.',
  'All the TSR books shall be preserved for any pending enquiry if any pending and back shall be kept in safe custody of SM.',
]

const redInkEntries = [
  'When the section is Block Forwarded or Blocked Back.',
  'Working of Material Train.',
  'M.T., Lorries and trollies entering the block section.',
  'Testing signals exchanged.',
  'Block working is interrupted.',
  'Trollies and lorries working without line clear.',
  'Line block is given to engineering department.',
  'Running line is blocked with a stabled load at a station.',
  'Balancing of tokens.',
  'Train passed IB at ON.',
  'Any other special occurrence in connection with block working.',
]

const TrainSignalRegisterPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <BookMarked className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Train Signal Register (BWM Part A-2.6, B-2.6, C-2.7) (T/14 for SINGLE LINE & T/1407
              for DOUBLE LINE)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <ol className="space-y-3">
              {points.map((text, index) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
                >
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {text}
                  </p>
                </li>
              ))}
            </ol>

            <section className="rounded-2xl border border-rose-500/25 bg-slate-900/40 p-4 ring-1 ring-rose-500/10 sm:p-5">
              <h2 className="text-base font-semibold text-rose-100 sm:text-lg">
                Red Ink Entries in TSR (BWM Part A-2.6, B-2.6, C-2.7)
              </h2>
              <ol className="mt-4 space-y-3">
                {redInkEntries.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4 ring-1 ring-rose-500/10 transition-colors hover:border-rose-400/35 hover:bg-rose-950/30 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-rose-400/30 to-red-600/30 px-1.5 text-xs font-bold text-rose-100 ring-1 ring-rose-400/40">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/block-working-manual"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Block Working Manual</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes soft-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.92;
          }
        }
      `}</style>
    </div>
  )
}

export default TrainSignalRegisterPage
