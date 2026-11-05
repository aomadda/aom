'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { ZapOff } from 'lucide-react'

const powerFail = [
    'When main power supply fails, an audible warning along with a red light indication is given on the panel.',
    'Stop the buzzer by pressing the acknowledgement button.',
    'The red light will continue to burn.',
    'Start generator No.1 by using push button arrangement. If it does not start, use crank handle to start it.',
    'Change the main/generator switch to generator position and change Generator (1)/(2) switch to generator (1) position.',
    'Check whether all indications are available on the panel and resume normal working.',
    'After 4 hours, if main power supply does not resume, start generator (2) and change over the generator (1)/(2) switch to generator (2) position.',
  ]
  
  const powerResume = [
    'Once again, audible warning comes on the panel. Stop it by pressing acknowledgement button. Now the red light indication disappears.',
    'Stop the generator.',
    'Change the main/generator switch to main position.',
    'Check the availability of all indications on the panel.',
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

const FailureOfMainPowerSupplyPage = () => {
  return (
    <OperatingTopicPage title="FAILURE OF MAIN POWER SUPPLY" icon={ZapOff}>
        <SectionCard title="FAILURE OF MAIN POWER SUPPLY">
              <NumberedList items={powerFail} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  When Main Power Supply Resumes:
                </h3>
                <NumberedList items={powerResume} />
              </div>
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Frequent Failure of Main Power Supply:
                </h3>
                <DotList
                  items={[
                    'If frequent and intermittent failure of main power supply is experienced, to avoid signals going blank in the face of an approaching train, the power supply shall not be changed over to the main till the required train movement is completed even if the main supply resumes. Send a report to DEE.',
                  ]}
                />
              </div>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default FailureOfMainPowerSupplyPage