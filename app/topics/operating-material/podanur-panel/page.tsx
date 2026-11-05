'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { PanelTop } from 'lucide-react'

const podanur = [
    'Station diagram is depicted on panel with relevant point/signals/track indication.',
    'Knobs of different color codes are provided on panel below the diagram. The number of points/signals are painted on corresponding knobs for easy identification.',
    'Buttons for other purposes such as cancellation, etc. are also provided.',
  ]
  
  const podanurSetup = [
    'Signal knobs - red',
    'Point knob - black',
    'Shunt signal - yellow',
    'Siding signal - white',
    'Emergency route cancellation - grey',
    'Power failure - grey',
  ]
  
  const podanurRest = [
    'The points and signals are operated by turning the knob switches to required position.',
    'Three indications are provided on top of each point button viz:',
  ]
  
  const pointIndications = [
    'Green - normal',
    'Yellow - reverse',
    'White - free',
    'Green/yellow flash during operation',
  ]
  
  const podanurMore = [
    'Signal indications repeated on panel are as per the signal on field.',
    'When signal is taken off, white strip lights up for entire route indication, showing the setting and locking of route.',
    'Free indication above each point knob disappears when route is locked.',
    "As train passes, the aspect goes to ‗on‘.",
    'Route is released automatically.',
    'As train occupies each section of route, the track indication changes from white to red.',
    'After the complete train passes the route of the signal, the route releases automatically.',
    'In case the route is not released automatically, the route will be cancelled by route cancellation method.',
  ]

const callingOnPodanur = [
    'Calling-on signals shall be operated only when the train comes to a stop after occupying calling ON Track circuit and gets audible buzzer.',
    'SM on duty shall turn the calling-on signal knob to reverse (R) duly ensuring the correct setting of all the points in the route.',
    'The SM on duty now shall press and leave the COGGN push button.',
    'A steady white light will appear under the relevant veeder counter.',
    'A row of white light appears on the panel for the concerned route.',
    'After the lapse of 120 seconds, the calling-on signal assumes OFF aspect which is displayed by a steady yellow light.',
    'The relevant veeder counter will register next higher number and make entry in the concerned register.',
    'The route set will remain locked up even after the arrival of the train and it has to be released only through calling-on cancellation.',
    'Calling-on signal knob is to be put back to normal and Calling-on cancel button is to be pressed.',
    'White light indication appears below the calling-on cancel veeder counter.',
    'On completion of 240 seconds, the route illumination gets extinguished releasing the route and simultaneously causes the white indication to disappear.',
    'Make an entry in the calling-on cancellation register.',
  ]

function NumberedList({ items, start = 1 }: { items: string[]; start?: number }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${start + index}-${text.slice(0, 40)}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {start + index}
          </span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ol>
  )
}

function CircleList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <ListMark>o</ListMark>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h2 className="text-base font-semibold text-amber-100 sm:text-lg">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

const PodanurPanelPage = () => {
  return (
    <OperatingTopicPage title="PODANUR WORKSHOP PANEL" icon={PanelTop}>
        <SectionCard title="PODANUR WORKSHOP PANEL">
              <NumberedList items={podanur} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    4
                  </span>
                  <div>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      Normal setup is:
                    </p>
                    <CircleList items={podanurSetup} />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <NumberedList items={podanurRest} start={5} />
              </div>
              <CircleList items={pointIndications} />
              <div className="mt-4">
                <NumberedList items={podanurMore} start={7} />
              </div>
            </SectionCard>
        <SectionCard title="PODANUR PANEL">
              <NumberedList items={callingOnPodanur} />
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default PodanurPanelPage