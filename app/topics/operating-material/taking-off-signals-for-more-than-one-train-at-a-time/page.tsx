'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Signal } from 'lucide-react'

const takingOffSignals = [
    'Taking ‗off‘ signals for more than one train at a time when two or more trains are approaching simultaneously from any direction is permitted.',
    'May be permitted over non-isolated lines also where under special instructions requirement of adequate distance are fulfilled.',
    'Under approved special instructions where requirement of adequate distance are not fulfilled.',
    'Such condition shall be mentioned in the signal and interlocking plan and in SWR diagram under heading ―simultaneous movements without physical isolation‖.',
  ]

const TakingOffSignalsForMoreThanOneTrainAtAtimePage = () => {
  return (
    <OperatingTopicPage title="Taking Off Signals for More Than One Train at a Time (G.R./S.R. 3.47)" icon={Signal}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Taking Off Signals for More Than One Train at a Time (G.R./S.R. 3.47)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {takingOffSignals.map((text, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.3 + 0.04 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ol>
        </article>
    </OperatingTopicPage>
  )
}

export default TakingOffSignalsForMoreThanOneTrainAtAtimePage