'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { TriangleAlert } from 'lucide-react'

const ReceptionOfATrainOnAnObstructedLinePage = () => {
  return (
    <OperatingTopicPage title="Reception of a Train on an Obstructed Line (G.R. 5.09)" icon={TriangleAlert}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Reception of a Train on an Obstructed Line (G.R. 5.09)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              {
                type: 'text' as const,
                text: "Wherever possible, intimate Loco Pilot through the rear SM about reception onto obstructed line.",
              },
              {
                type: 'text' as const,
                text: "SM shall keep the reception signals at 'ON' and ensure that the signal/s are not taken 'OFF'.",
              },
              {
                type: 'text' as const,
                text: 'Ensure that all points over the route are correctly set and facing points locked.',
              },
              {
                type: 'nested' as const,
                intro:
                  "After stopping the train at the relevant stop signal, it may be received by authorizing the Loco Pilot to pass the stop signal at 'ON':",
                items: [
                  'By taking off the calling-on signal, if provided or',
                  'Through signal post telephone if provided in accordance with special instructions or',
                  'By delivering a written authority T/509 and piloting it.',
                ],
              },
              {
                type: 'text' as const,
                text: 'Train shall be stopped at facing points leading to the obstructed line until hand signalled forward by a competent railway servant.',
              },
              {
                type: 'text' as const,
                text: 'Stop hand signal shall be shown at a distance of 45 m from the obstruction.',
              },
              {
                type: 'text' as const,
                text: 'The Loco Pilot shall keep his train well under control and be prepared to stop short of an obstruction (not exceeding 15 kmph).',
              },
            ].map((rule, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.38 + 0.03 * (index + 1)}s both` }}
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
    </OperatingTopicPage>
  )
}

export default ReceptionOfATrainOnAnObstructedLinePage