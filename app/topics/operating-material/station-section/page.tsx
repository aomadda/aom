'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Split } from 'lucide-react'


const stationSectionGroups = [
    {
      title: 'Double Line:',
      items: [
        'Between outermost facing points and LSS (Last Stop Signal).',
        'Or between BSLB (Block Section Limit Board) and LSS.',
      ],
    },
    {
      title: 'Single Line:',
      items: [
        'Between SLB/Advanced Starters (if present).',
        'Or between outermost facing points if no SLB/Advanced Starters exist.',
      ],
    },
  ]
const StationSectionPage = () => {
  return (
    <OperatingTopicPage title="Station Section (G.R. 1.02(54))" icon={Split}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.45s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Station Section (G.R. 1.02(54))
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
              Applies to Class „B‟ stations only.
            </p>

            <div className="space-y-5">
              {stationSectionGroups.map((group) => (
                <section key={group.title} className="space-y-3">
                  <h3 className="flex items-center gap-2 text-base font-bold text-amber-100 sm:text-lg">
                    <span className="text-amber-300" aria-hidden>
                      →
                    </span>
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((text) => (
                      <li
                        key={text}
                        className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                          ✓
                        </span>
                        <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </article>
    </OperatingTopicPage>
  )
}

export default StationSectionPage