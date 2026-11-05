'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Siren } from 'lucide-react'

const StopAndExamineSignalPage = () => {
    const stopAndExamine = [
        'When SM observes anything unusual (other than absence of tail lamp or tail board) on a train during its passage through the station, such as goods falling off, vehicle on fire, broken axle or coupling etc., he shall try to stop the train. If he failed to stop the train, stop & examine signal (six pause one on block instrument) may be sent to SM in advance.',
        'SM to intimate the nature of irregularity.',
        'SM in advance acknowledges by giving six pause one and on arrival, even a run-through train out of course and take remedial action.',
        'After ensuring all is clear, send ―train out of block section‖ to SM in rear.',
        'SM of the station who notices or suspects it would have caused damage or obstruction to block section in rear, inform the SM in rear about irregularity.',
        'Both SMs to issue CO for trains entering the block section until it is confirmed all is right.',
        'On double line, CO will be issued to the LPs proceeding on the adjacent line.',
      ]
  return (
    <OperatingTopicPage title="STOP AND EXAMINE SIGNAL (BWM Part A-5.6, B-5.7, C-5.8)" icon={Siren}>
        <article
            className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
            style={{ animation: 'fade-up 0.55s ease-out 0.5s both' }}
          >
            <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
                STOP AND EXAMINE SIGNAL (BWM Part A-5.6, B-5.7, C-5.8)
              </h2>
            </header>
            <ol className="space-y-3 px-5 py-6 sm:px-6">
              {stopAndExamine.map((text, index) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
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
          </article>
    </OperatingTopicPage>
  )
}

export default StopAndExamineSignalPage