'use client'

import React from 'react'
import { LightbulbOff } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const defectivePoints = [
  'SM shall obtain line clear through electrical speaking instrument.',
  'Follow the procedure as mentioned in block working message (BWM) to be written in Train Signal Register (TSR) by both SMs in red ink.',
  'Authorise the Loco Pilot by issuing PLCT.',
  'SM shall fill T/A 1425 in one copy.',
  'As per direction of a train, hand over T/C 1425 or T/D 1425 and PN should be written which is available on T/A 1425.',
  'Obtain LP signature on T/C or T/D 1425 form.',
  'If signal detects any points, exhibition of Proceed Hand Signal is compulsory.',
]

const AdvancedStarterDefectivePage = () => {
  return (
    <OperatingTopicPage
      title="Advanced Starter Defective (AS NO 16 I.23 & 39 of 14.06.24)"
      icon={LightbulbOff}
    >
      <ol className="space-y-3">
        {defectivePoints.map((text, index) => (
          <li
            key={text}
            className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          >
            <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ol>
    </OperatingTopicPage>
  )
}

export default AdvancedStarterDefectivePage
