'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Waypoints } from 'lucide-react'

const axleCounter = [
    'In conventional block signalling, last vehicle check is done by the Cabinman/SM of receiving station to ensure complete arrival of train.',
    'Human error can play a vital role in correct detection if a parted bogie stays in the block section.',
    'This can be avoided if block is proved by the Axle counter.',
    'Axle counter block working monitors the train movement to the block section.',
    'Automatic checking up of the clearance of track up to Block overlap and restoration of all signals to ON position.',
    'After arrival of last train with locking of relevant points, ensure reduction in block operating time.',
    'The SMs at both the stations get automatic display of status of the track (line closed and train on line) and direction of train movement (train going to / train coming from).',
    'The Axle counter block working is possible for both single line and double line section.',
    'In single line sections, one axle counter is placed at either side of the station.',
    'The track device is mounted on the advance track circuit of both ends of the block section.',
    'In double line section, both up and down lines have axle counter at the receiving station.',
    'Track devices are mounted on the advance starter and home signal track circuits of each line.',
    'The system consists of relay logic circuit and combiner/converter units at both ends and relay status data is exchanged by using fail safe digital multiplexing.',
    'As in count of axles at dispatching station are tallied with out count of axles at receiving station for block proving, the possibility of leaving any stock in the block section is nullified.',
    'In case of failure of axle counter, block resetting is possible with co-operation from the other end of station master.',
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

const BlockProvingByAxleCountersPage = () => {
  return (
    <OperatingTopicPage title="Block Proving by Axle Counters (BPAC)" icon={Waypoints}>
        <SectionCard title="Block Proving by Axle Counters (BPAC)">
              <DotList items={axleCounter} />
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default BlockProvingByAxleCountersPage