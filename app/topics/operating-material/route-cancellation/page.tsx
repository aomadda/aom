'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Route } from 'lucide-react'

const siemensCancel = [
    'Route cancellation procedure will be adopted to cancel the signalled movement or to change the route already set.',
    'Before applying route cancellation, ensure that the train has not passed the signal.',
    "Press the concerned signal button {GN} and Emergency signal button {EGGN} to bring the signal back to ‗ON‘ position.",
    "Keep pressing ‗GN‘ and ‗EUUYN‘ buttons simultaneously till such time cancellation indication (white dot) appears by the side of the concerned signal.",
    "After white dot appears, release ‗GN‘ and ‗EUUYN‘ buttons and the flashing cancellation will become steady after an interval of approximately 2 minutes.",
    "Now press ‗GN‘ and ‗EUUYN‘ buttons. Keep ‗GN‘ pressed and release ‗EUUYN‘ and press concerned route button.",
    "All track indications and white dot cancellation will disappear and the ‗EUUYN‘ counter will record next higher number. The SM shall enter the counter number in the special register with reasons.",
  ]
  
  const podanurCancel = [
    'Route cancellation procedure will be adopted to cancel the signalled movement or to change the route already set.',
    'Keep the signal knob in normal position after ensuring that the train has not passed the signal.',
    'Press and release route cancellation button. White light indication appears below the counter and after 2 minutes, the route will be free.',
    'Route cancellation counter will record next higher number.',
    'Flashing white light indication below the counter will disappear.',
    'SM shall record the counter number with all the particulars in the concerned register.',
    'In case relay interlocked, if route is locked after passage of the train, try to cancel the route by normal cancellation. In case route still remains locked, cancel the route by calling on route cancellation and entries shall be in red ink in TSR.',
  ]
  
  const vduCancel = [
    'Route cancellation procedure will be adopted to cancel the signalled movement or to change the route already set.',
    'Point the cursor on the concerned signal icon and click the right button of the mouse. A pop-up menu appears on the screen.',
    "Left click on SIGNAL CANCEL, this will cause signal to go to ‗ON‘.",
    'Left click on the ROUTE RELEASE, the indication of cancellation starts flashing.',
    'After a lapse of 120 seconds, the route gets cleared.',
    'Route Cancellation counter will increment by one number. SM shall enter the counter number in the route cancellation register with reasons.',
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

const RouteCancellationPage = () => {
  return (
    <OperatingTopicPage title="Route Cancellation" icon={Route}>
        <SectionCard title="Route Cancellation">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Cancellation of Route on Siemens Panel
                  </h3>
                  <NumberedList items={siemensCancel} />
                </div>
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Route Cancellation on Podanur Panel
                  </h3>
                  <NumberedList items={podanurCancel} />
                </div>
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Cancellation of Route on VDU
                  </h3>
                  <NumberedList items={vduCancel} />
                </div>
              </div>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default RouteCancellationPage