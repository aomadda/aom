'use client'

import { SignalMedium } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const stuckOff = [
  'SR 3.69.9 for approach stop signal (AS No 17 I.17 of 14.06.24).',
  'SM shall attempt to put it back ―ON‖ by operating a panel and immediately report to S&T staff.',
  'If unable to do so, inform rear SM, SCOR.',
  'Make an entry in S&T failure register.',
  'Light of the signal shall be extinguished by pasting paper on the glass or putting across mark.',
  'A competent railway servant shall be deputed to exhibit Stop hand signals at the foot of the stuck ―OFF‖ signal till it is brought back to ―ON‖.',
]

const SignalGotStuckUpInOFFPositionInStationLimitsPage = () => {
  return (
    <OperatingTopicPage
      title="Signal Got Stuck Up in OFF Position in Station Limits (AS No 16 I.1, 5 & 6 of 14.06.24)"
      icon={SignalMedium}
    >
      <ul className="space-y-3">
        {stuckOff.map((text) => (
          <li
            key={text}
            className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
          >
            <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
              →
            </span>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ul>
    </OperatingTopicPage>
  )
}

export default SignalGotStuckUpInOFFPositionInStationLimitsPage
