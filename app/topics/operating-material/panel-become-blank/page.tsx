'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { PanelTop } from 'lucide-react'

const panelBlank = [
    'Check the power supply, whether it failed.',
    'On electrified sections, change the switches to other AT or State Electricity supply.',
    'On non-electrified section, start generator. Generator shall not be used by more than four hours continuously. If required, use the other generator.',
    'If power is available and the fault continues, inform ESM/SI.',
    'Check the position of points and signals.',
    'Use crank handle to set the points and trains shall be dealt on an authority T.369(3b) duly clamping and padlocking the points.',
    'If power is failed and alternative supply is not possible, take action as mentioned above.',
    'In non-electrified section, DC calling on signal has been provided. This signal can be taken off in case of power failure without starting generator, but it should be done after ensuring the correct position of the points.',
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

const PanelBecomeBlankPage = () => {
  return (
    <OperatingTopicPage title="Panel Becomes Blank" icon={PanelTop}>
        <SectionCard title="Panel Becomes Blank">
              <NumberedList items={panelBlank} />
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default PanelBecomeBlankPage