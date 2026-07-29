'use client'

import React from 'react'
import Link from 'next/link'
import { Signpost } from 'lucide-react'

const comparisonRows = [
  {
    sno: '1.',
    point:
      'It indicates the position in which the points are set.',
    trap: 'It indicates the position of derailing switch.',
  },
  {
    sno: '2.',
    point:
      'It is provided where there are no departure signals or where single arm Home is provided on MAS.',
    trap: 'It is provided at derailing switch where there is no signal protection.',
  },
  {
    sno: '3.',
    point:
      'Point indicator shall show a white target by day or a white light by night in both directions when points are set for the straight line.',
    trap: 'Trap indicator shall show red target by day and red light by night in both directions when the derailing switch is open.',
  },
  {
    sno: '4.',
    point:
      'Point indicator shall show no target by day or a green light by night in both directions when points are set for the turnout.',
    trap: 'Trap indicator shall show a knife edge of the disc by day and green light by night in both directions when the derailing switch is closed.',
  },
]

const PointTrapIndicatorPage = () => {
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
              <Signpost className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Differences Between Point Indicator and Trap Indicator (S.R. 3.50.2, 3.51.3.1)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
              <table className="w-full min-w-160 border-collapse text-left">
                <thead>
                  <tr className="border-b border-amber-500/20 bg-slate-950/50">
                    <th className="whitespace-nowrap px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      S.No.
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Point Indicator
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Trap Indicator
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {comparisonRows.map((row) => (
                    <tr key={row.sno} className="bg-slate-900/30 transition-colors hover:bg-slate-900/55">
                      <td className="whitespace-nowrap border-r border-slate-700/40 px-3 py-4 text-[15px] font-semibold text-amber-100/95 sm:px-4 sm:text-base">
                        {row.sno}
                      </td>
                      <td className="border-r border-slate-700/40 px-3 py-4 text-[15px] leading-relaxed text-slate-300 sm:px-4 sm:text-base">
                        {row.point}
                      </td>
                      <td className="px-3 py-4 text-[15px] leading-relaxed text-slate-300 sm:px-4 sm:text-base">
                        {row.trap}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
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

export default PointTrapIndicatorPage
