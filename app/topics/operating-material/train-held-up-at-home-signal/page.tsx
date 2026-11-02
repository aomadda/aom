'use client'

import { OctagonX } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const points = [
  'When train is held up at home/FSS, Loco Pilot shall sound continuous whistle to warn guard.',
  'If apparent cause is not known, after 5 minutes, LP shall send Assistant Loco Pilot to proceed to the cabin or station to warn the station master.',
  'Assistant Loco Pilot proceeding to the station shall show stop hand signals towards the station.',
  'After 15 minutes, guard shall protect the train in rear irrespective of cause, as per GR 6.03.',
  'If in the meantime the signal is taken off or authority received by Loco Pilot, he shall sound continuous whistle to recall guard.',
  'Exchange hand signal with guard before starting the train.',
  'If train is without guard, these duties shall devolve on the Loco Pilot.',
  'During total interruption of communications, if train is held up at FSS, after 10 minutes the loco pilot shall send his Assistant to the station to warn the SM and immediately Guard shall protect in rear.',
]

const TrainHeldUpAtHomeSignalPage = () => {
  return (
    <OperatingTopicPage title="G.R. 4.44 Train Held Up at Home / FSS Signal" icon={OctagonX}>
      <ol className="space-y-3">
        {points.map((text, index) => (
          <li
            key={text}
            className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
          >
            <span className="mt-0.5 inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 to-orange-600/25 px-2 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ol>
    </OperatingTopicPage>
  )
}

export default TrainHeldUpAtHomeSignalPage
