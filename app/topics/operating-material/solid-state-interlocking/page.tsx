'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { CircuitBoard } from 'lucide-react'

const ssi = [
    'Relay Interlocking requiring thousands of relays and wirings has inherent limitation in regard to flexibility, high cost of installation, requiring large space and regular/preventive maintenance schedules.',
    'These factors lead to the high cost of operations which is overcome by new type of interlocking system called Solid State Interlocking (SSI) being installed on Indian Railways.',
    'Reduction in relay room sizes, air conditioners and power requirements are other advantages in addition to reduced cost for installation and alterations even in case of major yard alterations.',
    'The operating domino type panel is used by SM for operating SSI. Push buttons of the panel are read by input modules of SSI and panel indications are provided through separate panel processors which is connected to SSI through a serial data link.',
    'Two panels can be provided for End panel operation.',
    'A data logger logs the input and output of SSI with time stamping for later off-line operational and failure analysis.',
    'A maintainer terminal is provided to monitor SSI status including failures.',
    'The reliability of SSI system is very high as the processors are not only duplicated but additional state is provided in Hot standby mode.',
    'A safety monitor detects the processor failures and switches to standby processors automatically.',
    'In short, this technology provides maintenance free and easy fault localizing system of interlocking giving fault indications on the faulty unit. If the hot standby is not available for automatic change over, faulty unit is replaced by maintenance staff immediately.',
  ]
  
  const ssiAdvantages = [
    'Increase in section capacity',
    'User friendly operation',
    'Fail safe technique',
    'Multiple mode operation',
  ]
  
  const ssiSignificance = [
    'Reduce manpower',
    'Centralized operation',
    'Multiple mode of operation',
    'Control cum indication Panel',
    'Video display unit (PC)',
    'Centralised traffic Control (CTC) permits remote operation',
    'Significant reduction of traffic block time',
    'Easier and simple operation',
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

const SolidStateInterlockingPage = () => {
  return (
    <OperatingTopicPage title="Solid State Interlocking (SSI)" icon={CircuitBoard}>
        <SectionCard title="Solid State Interlocking (SSI)">
              <DotList items={ssi} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Advantages of SSI
                </h3>
                <DotList items={ssiAdvantages} />
              </div>
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Significance of SSI for Operating Staff
                </h3>
                <DotList items={ssiSignificance} />
              </div>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default SolidStateInterlockingPage