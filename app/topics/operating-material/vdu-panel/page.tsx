'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Eye } from 'lucide-react'

const callingOnVdu = [
    'Calling-on signals shall be operated only when the train comes to a stop after occupying calling ON Track circuit and gets audible buzzer.',
    'Click the right button of the mouse, pointing the cursor on the concerned calling-on signal icon, a pop-up menu will appear on the screen.',
    'Left click on concerned route in the menu of calling-on signal.',
    'Route for calling-on signal will be set and concerned portion of the track on VDU changes to yellow, the initiation indication also flashes. It indicates that the initiation of calling-ON signal is in process. After the lapse of 60 seconds, calling-on signal gets cleared.',
    'Make an entry in the calling-on cancellation register.',
  ]
  
  
  const vduTestingIntro =
    "Take off any signal, against which no train is approaching, lock the SM‘s key/log off from VDU and put back the signal to ON and ensure the following:"
  
  const vduTestingChecks = [
    'That the signal is put back to ON',
    'That the route of the signal is still holding',
    'Try to alter any point in the route and observe that the point does not get altered',
    'Try to cancel the route, neither route cancellation shall be initiated nor should the route get cancelled.',
  ]

  const vduTestingRest = [
    'Change over the VDU to standby VDU and ensure that occupation or clearances of the lines/track circuits/axle counters are updated automatically in accordance with status in the previous VDU.',
    'Take off signal to a route and attempt to take off another signal whose route infringes the path of the signal taken off or the signals which are locked. It should not obey.',
    'Observe the signal is going back to ON as a train passes the signal and proper sequential occupation and clearance of track detection systems (track circuit/axle counters) as the train passes.',
    'Ensure the N and R indications are showing in accordance with the position of the points indications.',
    'Ensure that free indication of points disappears when the route involving the point is locked.',
    'Ensure that free indication of crank handle disappears when signal for the route involving the points in the group of the crank handle is taken off.',
    'At stations having interlocked traffic gates, proper working of LC gate control to be checked by transmitting and receiving the gate control. Working of emergency gate released shall also be checked.',
    'Try to take off advance starter/IB signal, which is connected to block instrument, without taking line clear and ensure that the signal does not assume off aspect.',
    'Cancel any signal route and check whether the corresponding veeder counter is increased to next higher number. Also, check the time taken for cancellation and ensure the time is as prescribed in SWR. Jumping of numbers shall be taken as failure.',
    'Ensure that overlap point is released only after prescribed tie delay.',
    'Calling-on signals shall be taken off for nominated routes.',
    'Route cancellation for home signals and emergency calling-on cancellation to be checked.',
    'Observe aspect sequence and ensure that they are as per aspect sequence chart.',
    'Block any signal and try to take off the signal. The signal shall not obey.',
    'Block any point on the VDU and try to take off the signal involving the blocked point. The signal shall not obey.',
    'Try to take off a signal by setting the points in the route to wrong position, check that the route is set and signal assumes off aspect only after the points are set correctly and locked.',
    'Crank handle to be checked for extraction, it should be possible to extract immediately if the route is clear and with a time delay if route is not clear.',
  ]

  function DotList({ items }: { items: string[] }) {
    return (
      <ul className="space-y-3">
        {items.map((text) => (
          <li
            key={text}
            className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
          >
            <ListMark></ListMark>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ul>
    )
  }


  function ArrowList({ items }: { items: string[] }) {
    return (
      <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
        {items.map((text) => (
          <li key={text} className="flex gap-2.5">
            <ListMark></ListMark>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ul>
    )
  }

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

const VduPanelPage = () => {
  return (
    <OperatingTopicPage title="VDU PANEL" icon={Eye}>
        <SectionCard title="VDU PANEL">
              <NumberedList items={callingOnVdu} />
            </SectionCard>

            

            <SectionCard title="Testing of VDU Panel">
              <DotList items={[vduTestingIntro]} />
              <ArrowList items={vduTestingChecks} />
              <div className="mt-4">
                <DotList items={vduTestingRest} />
              </div>
              <CircleList
                items={[
                  'When the crank handle is taken out, signals controlling the points grouped in that crank handle shall not obey.',
                ]}
              />
              <div className="mt-4">
                <DotList
                  items={[
                    'Test functioning of buzzers for various unusuals, failure indications, communication links, calling-on signal, emergency point buttons and emergency gate release key by simulation with help of S&T staff.',
                  ]}
                />
              </div>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default VduPanelPage