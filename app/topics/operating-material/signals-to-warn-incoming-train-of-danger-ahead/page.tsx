'use client'

import { Siren } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const items = [
  {
    roman: 'i',
    text: 'A red flashing hand signal lamp at night or a red flag during day shall be exhibited to warn the incoming train of an obstruction.',
  },
  {
    roman: 'ii',
    text: 'When necessary to protect an obstruction in a block section before the railway servant proceeds to place detonators, he shall place a red flashing hand signal lamp at night or a red flag during day.',
  },
  {
    roman: 'iii',
    text: 'All concerned railway servants shall keep a stock of red flashing hand signal lamp and red flag.',
  },
  {
    roman: 'iv',
    text: 'The railway administration shall be responsible for the supply, renewal, and safe custody of such signals and also ensure that the staff properly understands the procedure for using the same.',
  },
  {
    roman: 'v',
    text: 'Every railway servant concerned with the use of signals shall have a correct knowledge of their use and keep them ready for immediate use.',
  },
  {
    roman: 'vi',
    text: 'All supervisors shall ensure that concerned staff working under them has correct knowledge for the working.',
  },
  {
    roman: 'vii',
    text: 'When the Loco Pilot notices a signal warning of an obstruction, he shall stop his train immediately and act on the advice of the person exhibiting or on the basis of obstruction noticed.',
  },
  {
    roman: 'viii',
    text: 'In case no further details, stop one/two minutes day/night to ascertain the location/cause of warning, proceed cautiously up to next block station keeping sharp lookout.',
  },
]

const SignalsToWarnIncomingTrainOfDangerAheadPage = () => {
  return (
    <OperatingTopicPage
      title="Signals to Warn Incoming Train of Danger Ahead (G.R. 3.65/66/67)"
      icon={Siren}
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.roman}
            className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
          >
            <span className="mt-0.5 inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 to-orange-600/25 px-2 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {item.roman}
            </span>
            <p className="pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
          </li>
        ))}
      </ul>
    </OperatingTopicPage>
  )
}

export default SignalsToWarnIncomingTrainOfDangerAheadPage
