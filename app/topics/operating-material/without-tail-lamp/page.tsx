'use client'

import React from 'react'
import Link from 'next/link'
import { LightbulbOff } from 'lucide-react'

type Rule =
  | { type: 'text'; text: string }
  | {
      type: 'nested'
      intro: string
      items: string[]
    }

const rules: Rule[] = [
  {
    type: 'text',
    text: 'SM shall observe and ensure that all trains passing through the station are provided with tail board/tail light.',
  },
  {
    type: 'text',
    text: 'When SM notices train without tail board/tail lamp he must intimate to the SM in advance by bell code (six pause two) that train is without last vehicle indicator and SM in rear that the train has arrived incomplete (six pause three) and shall not clear the block section.',
  },
  {
    type: 'text',
    text: 'Where block proving axle counters are provided and functioning, SM may clear the block section. The Station Master shall still advise the station in advance to stop the train to see that the defect is remedied.',
  },
  {
    type: 'nested',
    intro:
      'On double line SM shall give caution order to LP of the train which is to enter adjacent block section to observe special caution.If train has already left, SM shall:',
    items: [
      'Intimate gateman to stop and advise the LP and Guard of the circumstances,',
      'Keep the IB signal at ON.',
      'In OHE area, power supply shall be switched off and advise TPC to inform LP.',
    ],
  },
]

const WithoutTailLampPage = () => {
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
              <LightbulbOff className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Responsibility of SM When He Notices Train Passing Without Tail Board/Tail Lamp (S.R. 4.17)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.05 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>

                {rule.type === 'text' ? (
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{rule.text}</p>
                ) : (
                  <div className="min-w-0 flex-1 space-y-3 pt-0.5">
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{rule.intro}</p>
                    <ul className="space-y-2.5">
                      {rule.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-xl border border-slate-600/35 bg-slate-950/35 p-3.5 ring-1 ring-white/3 sm:p-4"
                        >
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                            
                          </span>
                          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ol>
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

export default WithoutTailLampPage
