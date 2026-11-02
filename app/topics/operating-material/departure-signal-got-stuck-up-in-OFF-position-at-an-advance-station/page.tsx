'use client'

import { LightbulbOff } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const departureStuckOff = [
  'SM shall attempt to put it back ―ON‖ by operating a panel and immediately report to S&T staff.',
  'If unable to do so, inform rear SM, SCOR.',
  'Make an entry in S&T failure register.',
  'Light of the signal shall be extinguished by pasting paper on the glass or putting across mark.',
  'A competent railway servant shall be deputed to exhibit Stop hand signals at the foot of the stuck ―OFF‖ signal till it is brought back to ―ON‖.',
  'SM shall try to receive the train on other line as far as possible.',
  'In case it is not possible, then SM of advance station shall advise rear SM to intimate LP the fact through issuing caution order.',
  'Train at advance station shall be admitted by indirect reception after conveying message to LP.',
]

const DepartureSignalGotStuckUpInOFFPositionAtAnAdvanceStationPage = () => {
  return (
    <OperatingTopicPage
      title="SR 3.70.3 Where Departure Signal Got Stuck Up in “OFF” Position at an Advance Station"
      icon={LightbulbOff}
    >
      <ul className="space-y-3">
        {departureStuckOff.map((text, index) => (
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
      </ul>
    </OperatingTopicPage>
  )
}

export default DepartureSignalGotStuckUpInOFFPositionAtAnAdvanceStationPage
