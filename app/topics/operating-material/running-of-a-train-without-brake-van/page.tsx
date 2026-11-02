'use client'

import { Package } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const withoutBrakeVanPoints = [
  { num: 1, text: 'Every train entering block section should have one or more brake vans except under special instructions.' },
  { num: 2, text: 'During emergencies, to run a train without a brake van the following precautions should be observed.' },
  { num: 3, text: 'Specific orders of Sr. DOM or DOM is required.' },
  { num: 4, text: 'Strictly prohibited during total interruption of communication.' },
  { num: 5, text: 'Separate registers to be maintained in the control office.' },
  { num: 6, text: 'It shall be ensured that the train is provided with continuous and effective compressed air from engine to rearmost vehicle.' },
  {
    num: 7,
    text: 'In Automatic Block system, no passenger carrying train must be allowed to follow until the preceding train without brake van has arrived complete at the next block station in advance.',
  },
  {
    num: 8,
    text: 'Once a non-passenger train with guard and brake van or light engine/track machine/tower wagon/self-propelled vehicle follows the train running without brake van, passenger trains may be dispatched.',
  },
  {
    num: 9,
    text: 'At IBS stations, the SM shall not dispatch any passenger train behind a train running without a brake van until that train has reached the next station.',
  },
  { num: 10, text: 'Guard of the train shall travel in the engine.' },
  { num: 11, text: 'Last vehicle indicator i.e., tail board/tail lamp must be invariably fixed on the last vehicle.' },
  { num: 10, text: 'Station Master shall ensure that the train is complete by tail lamp/tail board.' },
  {
    num: 11,
    text: 'The station as well as the cabin staff should be particularly alert; when there is a doubt that the train is not complete, they should draw the attention of GLP by showing ‗train parting‘ signal.',
  },
  { num: 12, text: 'By waving a green flag by day & white light by night up and down vertically as high as low.' },
]

const troubleEnRoute = [
  'Guard and Assistant Loco Pilot should check and attend the trouble.',
  'Within station limits, help of C&W staff or pointsman should be taken.',
  'The Loco Pilot should regulate the speed depending on the ‗feel test‘ conducted by him.',
]

const RunningOfATrainWithoutBrakeVanPage = () => {
  return (
    <OperatingTopicPage
      title="Running of a train Without Brake Van not carrying passenger (S.R. 4.23)"
      icon={Package}
    >
      <div className="space-y-6">
        <ol className="space-y-3">
          {withoutBrakeVanPoints.map((item, index) => (
            <li
              key={`${item.num}-${index}`}
              className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
            >
              <span className="mt-0.5 inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 to-orange-600/25 px-2 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                {item.num}
              </span>
              <p className="pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
            </li>
          ))}
        </ol>

        <section className="space-y-3">
          <h2 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
            When train crew encounters trouble en route:
          </h2>
          <ul className="space-y-3">
            {troubleEnRoute.map((text) => (
              <li
                key={text}
                className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 sm:gap-5 sm:p-5"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  ✓
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </OperatingTopicPage>
  )
}

export default RunningOfATrainWithoutBrakeVanPage
