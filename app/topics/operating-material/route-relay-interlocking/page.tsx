'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Workflow } from 'lucide-react'
const rri = [
    'The route relay interlocking is an improvement on the panel interlocking and generally adopted for big yards, junctions having large number of points and signals and frequent yard movements.',
    'In this system, points in the route, overlap and isolation get set automatically to the required position when a route setting is initiated from a signal to a required route.',
    'Entrance-exit (N-X) system is being adopted on Indian Railway but generally N-X type Siemens system is adopted on Western Railway.',
  ]
  
  const rriOp = [
    'If the points are required to be operated individually for testing and maintenance purposes, the concerned point button and common group point button (COPB) is pressed simultaneously and released.',
    'For clearing the signal, the signal button is pressed in conjunction with the relevant route button and the buttons are released after 2 or 3 seconds.',
    'This operation sets all the points in the route, overlap and isolation to the required position and then clears the signal.',
    'The whole route from that signal to the signal in advance is also set.',
    "This is indicated by white light continuously including the overlap. If all the conditions for taking off signals are fulfilled, one signal clears to ‗OFF‘ aspect.",
    'The whole route from one signal to the next signal comprises of one or more sub-routes.',
    'As the train passes the signal and occupies and clears the track circuits in a sequential order, the sub-route gets released automatically one by one till the train comes to on berthing track.',
    'The sub routes released in this way in the rear can be immediately used for any subsequent movement involving that sub-route.',
    'The time delay ensures that the points in the overlap do not get released when the train is approaching. The approach and back locking is also provided.',
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

const RouteRelayInterlockingPage = () => {
  return (
    <OperatingTopicPage title="Route Relay Interlocking (RRI)" icon={Workflow}>
        <SectionCard title="Route Relay Interlocking (RRI)">
              <DotList items={rri} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Operation of RRI:
                </h3>
                <DotList items={rriOp} />
              </div>
            </SectionCard>
    </OperatingTopicPage>
  )
}

export default RouteRelayInterlockingPage