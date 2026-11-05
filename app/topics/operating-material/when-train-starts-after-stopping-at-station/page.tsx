'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { MoveRight } from 'lucide-react'

const WhenTrainStartsAfterStoppingAtStationPage = () => {
  return (
    <OperatingTopicPage title="When train starts after stopping at station:" icon={MoveRight}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              When train starts after stopping at station:
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              'When train starts, the Guard shall look back and satisfy himself that no stop hand signals are given by station staff, he shall then exchange the ―All Right" signal with the Loco Pilot.',
              'All right signals shall be exchanged until the engine has passed the advanced starter / LSS. Where the all right signals cannot be exchanged either physically or through walkie-talkie, the station staff shall relay the all-right signals given by Loco Pilot and Guard.',
              'If Loco Pilot does not get the signal from the Guard through the above any means, he/she shall give two short whistles and if there is no response, shall stop the train to ascertain the cause.',
            ].map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.6 + 0.04 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  
                </span>
                <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </article>
    </OperatingTopicPage>
  )
}

export default WhenTrainStartsAfterStoppingAtStationPage