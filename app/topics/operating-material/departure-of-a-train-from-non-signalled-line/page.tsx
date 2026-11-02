'use client'

import { LogOut } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const points = [
  'SM shall obtain Line Clear.',
  'All the relevant points shall be set and locked. (it should be second point)',
  'All the relevant points shall be set and locked.',
  'Authority in form T/511 shall be issued.',
  'Issue authority to proceed to the LP.',
  'If ATP is tangible, T/511 need not be issued to LP.',
  "If a line is provided with common departure signal in addition to ATP, a written permission for start (T.512) shall be given and common departure signal shall also be taken 'OFF'.",
]

const DepartureOfATrainFromNonSignalledLinePage = () => {
  return (
    <OperatingTopicPage
      title="Departure of a Train from Non-Signalled Line (G.R. 5.11/12)"
      icon={LogOut}
    >
      <ul className="space-y-3">
        {points.map((text, index) => (
          <li
            key={`${index}-${text}`}
            className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
          >
            <span className="mt-0.5 inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 to-orange-600/25 px-2 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ul>
    </OperatingTopicPage>
  )
}

export default DepartureOfATrainFromNonSignalledLinePage
