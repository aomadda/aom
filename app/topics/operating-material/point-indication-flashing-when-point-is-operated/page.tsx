'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { SignalMedium } from 'lucide-react'

const pointFlashing = [
    'If the flashing continues for 10 seconds, restore the points to its original position. Operate the points 4 to 5 times from N to R and R to N.',
    'If flashing still continues, physically verify the points at site and remove any obstruction in the points between the switch and stock rails.',
    'Again operate the points.',
    'If the flashing still continues, treat the point as defective and inform ESM/SI.',
    'Before extracting crank handle, keep the concerned point knob in required position.',
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

const PointIndicationFlashingWhenPointIsOperatedPage = () => {
  return (
    <OperatingTopicPage title="Point Indication Flashing When Point is Operated" icon={SignalMedium}>
        <SectionCard title="Point Indication Flashing When Point is Operated">
              <NumberedList items={pointFlashing} />
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default PointIndicationFlashingWhenPointIsOperatedPage