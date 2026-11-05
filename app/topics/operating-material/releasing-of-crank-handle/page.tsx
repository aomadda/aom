'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { KeyRound } from 'lucide-react'

const crankCentral =
  "i Ensure all signal knobs are normal. ii Press the crank handle release button ‗YK‘. Crank handle free indication will appear. Continuously press the button and turn the HKT/EKT to the left to extract the key with crank handle."

const crankEnd =
  'I When the route is not locked, adopt the procedure as in (a)(i) and (ii). II When the route is locked, press the crank handle release button after ensuring that signal knobs are normal. Then cancel indication will appear on the panel. After a lapse of 120 seconds, free indication will appear near the HKT/EKT in the box. Now turn the key to left duly pressing the button and release it.'

const crankAfter = [
  'Use crank handle to set the point to the required position. Observe the position of each end to which side they are set (wherever two ends are available) and decide whether both ends or only one end is to be cranked.',
  'After setting, they shall be clamped and padlocked.',
  'After setting the points, crank handle should be restored to HKT.',
  "After setting the points, if ‗N‘ or ‗R‘ indication available, signals can be taken off after clamping and padlocking.",
  'Otherwise, receive the train on authority T.369(3b) after clamping and padlocking the points.',
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

const ReleasingOfCrankHandlePage = () => {
  return (
    <OperatingTopicPage title="Instructions to Release Crank Handle" icon={KeyRound}>
        <SectionCard title="Instructions to Release Crank Handle">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    a At Central Panel Station (where the route is free or locked):
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {crankCentral}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    b At End Panel Stations:
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {crankEnd}
                  </p>
                </div>
                <NumberedList items={crankAfter} />
              </div>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default ReleasingOfCrankHandlePage