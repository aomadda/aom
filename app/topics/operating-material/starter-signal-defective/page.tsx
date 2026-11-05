'use client'

import React from 'react'
import { LightbulbOff } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const combinedAuthority =
  'In case starter or intermediate starter along with advance starter is defective, SM shall issue Combined Authority as per direction-wise (T/C or T/D 1425), which must be printed only.'

const despatchWays = [
  'By taking off calling-on signal where provided, or',
  'By authorising the Loco Pilot with T/369(3b) plus Proceed Hand Signal (PHS) at the foot of the signal, duly ensuring correct setting, clamping, and padlocking of the points over the route.',
]

const StarterSignalDefectivePage = () => {
  return (
    <OperatingTopicPage title="Departure Signal Defective (G.R. & S.R. 3.70)" icon={LightbulbOff}>
      <div className="space-y-5">
        <h2 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
          Starter / Intermediate Starter Defective (AS NO 16 I.23 of 14.06.24)
        </h2>

        <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
          <div className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
              →
            </span>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
              Train shall be brought to a stand and train can be despatched:
            </p>
          </div>

          <ul className="mt-4 space-y-3">
            {despatchWays.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-950/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 rounded-2xl border border-amber-500/25 bg-amber-950/20 p-4 ring-1 ring-amber-400/15 sm:p-5">
          <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
            →
          </span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{combinedAuthority}</p>
        </div>
      </div>
    </OperatingTopicPage>
  )
}

export default StarterSignalDefectivePage
