'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { PanelTop } from 'lucide-react'

const callingOnSiemens = [
  'The calling on signal is to be operated only when the train has occupied the calling on track and has come to a stop at concerned Home/starter signal and gets audible buzzer.',
  'Then the Main Signal button and COGGN button are to be pressed simultaneously and keeping the main signal button pressed, route button is to be pressed duly releasing the COGGN button.',
  'The points in the route and isolation are operated automatically to the required position and get locked.',
  'A row of white light appears on the panel for the concerned route and flashing circular white indication near the signal button appears.',
  'Calling on signal will clear after a time interval of 120 seconds and flashing indication will disappear.',
  'Each operation of clearance of calling on signal is electrically counted and registered.',
  'The on duty SM must record the number of counter after each operation, duly putting his initial in the concerned calling on register.',
  'If the route is not cleared automatically, the following procedure shall be adopted:',
]

const callingOnSiemensCancel = [
  'The signal button and EGGN button shall be pressed simultaneously.',
  'The signal button and the Calling on Cancellation button shall be pressed simultaneously.',
  'Signal button and route button shall be pressed, leaving Calling on Cancellation button.',
  'This will cause the calling on cancellation indication of the signal to flash.',
  'After the lapse of 240 seconds, the route of the calling on signal shall be released.',
  'This action gets registered in the calling on signal cancellation counter.',
  'The cancellation of calling on signal shall be recorded in the concerned register by SM.',
]

const pointRed =
  "a Ensure Station Master‘s key is IN and turned to unlock the panel, b Verify the point track indication for occupation, c If it is clear, call for ESM to attend the track failure, and d If the particular point is required to be operated under conditions of track circuit failure, operate the point button WN with EWN button."

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

const SiemensPanelPage = () => {
    const siemens = [
        'Station diagrams are depicted on the panel board.',
        'Push buttons of different color codes are provided near the points, signals, etc. for their operations.',
        'Buttons for other purposes such as cancellation, etc. are also provided.',
        'Normal setup is as follows.',
        'Buttons used are self-restoring type, return to normal on release.',
        'Buttons are required to be pressed for not more than 3 seconds.',
        'No function can be performed by pressing a single button.',
        'Two related buttons are pressed and released simultaneously for operating a given function.',
        'Normal and reverse indications are displayed by strip indications at concerned points.',
        'The indications flash when operated and become steady when correctly set and locked.',
        'Points locked indication appears as a white dot near the point.',
        'Points cannot be operated when white dot near points is available.',
        'When points are occupied by a train, the strip indications assume red.',
        'Only two signal indications are available: ―red‖ and ―green‖ for ‗on‘ and ‗off‘.',
        'SM ensures route is correctly set.',
        'All points indications are steady.',
        'Track circuit over route is clear.',
        "Press signal button ‗GN‘ and corresponding route button ‗UN‘ simultaneously.",
        'When signal is cleared, all track including overlap appear on panel.',
        'Point lock dot indication appears near concerned point.',
        "As train passes, the aspect goes to ‗ON‘.",
        'Route is released automatically.',
        'As train occupies each section of route, the track indication changes from white to red.',
        'As train clears each section, the indication disappears signifying route release.',
        'In case the route is not released automatically, the route will be cancelled by route cancellation method.',
      ]
  return (
    <OperatingTopicPage title="SIEMENS PANEL" icon={PanelTop}>
      <article
        className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
        style={{ animation: 'fade-up 0.55s ease-out 0.5s both' }}
      >
        <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
          <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
          <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
            SIEMENS PANEL
          </h2>
        </header>
        <ol className="space-y-3 px-5 py-6 sm:px-6">
          {siemens.map((text, index) => (
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
      </article>
      <SectionCard title="Procedure for Taking Off and Cancelling Calling On Signal (Siemens Panel)">
              <NumberedList items={callingOnSiemens} />
              <ArrowList items={callingOnSiemensCancel} />
            </SectionCard>
      <SectionCard title="POINT POSITION INDICATION SHOWING RED:">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {pointRed}
              </p>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default SiemensPanelPage