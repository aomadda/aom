'use client'

import React from 'react'
import Link from 'next/link'
import { Bike } from 'lucide-react'

type SubPoint = { label: string; text: string }

type Point = {
  text: string
  sub?: SubPoint[]
}

const definitions: Point[] = [
  {
    text: 'A vehicle which can be lifted bodily off the line by four men shall be deemed to be a trolley and any similar but heavier vehicle shall be deemed to be a lorry.',
  },
  { text: 'Any trolley which is self-propelled, by means of a motor, is motor trolley.' },
  { text: 'Push trollies and lorries shall always be pushed and not pulled.' },
  {
    text: 'Cycle trollies or trollies which are propelled by pedaling instead of pushing, and moped trollies can either be driven by a motor or pedaled. It may be pushed when necessary, but not pulled.',
  },
  {
    text: 'Cycle trollies and moped trollies shall be treated as push trollies in all respects.',
  },
  { text: 'Push trollies / motor trolley shall be manned by at least four trolley men.' },
  {
    text: 'Lorries shall be manned by at least six lorry men exclusive of any flagman.',
  },
  {
    text: 'A cycle trolley or moped trolley shall be manned by three persons including the person pedaling or driving.',
  },
  {
    text: 'Maximum number of men to be carried:',
    sub: [
      { label: 'i.', text: 'Push trolley – ten on BG' },
      { label: 'ii.', text: 'Cycle trolley or moped trolley shall not exceed five.' },
      { label: 'iii.', text: 'Motor trolley – ten on BG.' },
    ],
  },
]

const working: Point[] = [
  {
    text: 'A motor trolley shall always run under block protection and it shall be treated and signaled as a train. It shall not be placed on any line without permission of SM. Motor trolley may follow a train or another motor trolley during daylight hours in clear light only.',
  },
  { text: 'SM shall obtain line clear on block telephone.' },
  { text: 'On IB section, treat two block sections as one block section.' },
  { text: 'On single line – tokenless & double line: T/A.1525.' },
  {
    text: "Relevant free starters can be taken off. Place ‗trolley online‘ cap on the plunger.",
  },
  {
    text: "On double line, turn the block handle to TOL position and place ‗trolley online‘ cap on the commutator.",
  },
  { text: 'On single line, reception signals can be taken off.' },
  {
    text: 'On arrival, in charge of motor trolley will sign with time and date on authority and deliver to SM with an endorsement. Authority shall be pasted in the Station Diary.',
  },
  { text: 'Clearance may be informed to the SM in rear supported by PN.' },
  { text: 'All entries should be made in red ink in the TSR.' },
]

const following: Point[] = [
  {
    text: 'A motor trolley/motor trollies may be allowed to follow a train/motor trolley during daylight hours and in clear weather only.',
  },
  { text: 'Train will be despatched on normal authority to proceed.' },
  {
    text: 'Advise SM in advance by message and obtain his permission supported by private number.',
  },
  { text: 'Motor trolley will be despatched on T/1525.' },
  { text: 'Out report shall be given separately and make an entry in TSR.' },
  { text: 'In a section where IB is provided, treat two block sections as one.' },
  {
    text: 'In Automatic Block System, automatic working shall be suspended and introduce Absolute Block System.',
  },
  {
    text: 'Motor trolley will be treated as last vehicle of the train which it is following.',
  },
  {
    text: 'The reception signal lever/knob shall not be normalized after the arrival of the train and the points shall not be altered and the block section should not be cleared until the arrival of motor trolley.',
  },
  {
    text: 'In report shall be sent separately for train/motor trolley and following motor trolley and make separate entries in the TSR.',
  },
  { text: 'Red ink entry shall be made in the TSR.' },
  {
    text: 'On arrival at the station, the official in-charge of trolley will hand over the T.1525 with an endorsement that the motor trolley arrived complete with date and time and sign in the TSR.',
  },
  { text: 'The SM will intimate the block station in rear, supported by PN.' },
  {
    text: 'Motor trolley following goods train on the sections specified (15.26.2.1) is not permitted.',
  },
]

function NumberedList({ items }: { items: Point[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.text.slice(0, 40)}`}
          className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <div className="flex gap-3">
            <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
              {item.text}
            </p>
          </div>
          {item.sub ? (
            <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
              {item.sub.map((sub) => (
                <li key={`${sub.label}-${sub.text}`} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">
                    {sub.label}
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {sub.text}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function SectionCard({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <article
      className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
      style={{ animation: `fade-up 0.55s ease-out ${delay}s both` }}
    >
      <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
          {title}
        </h2>
      </header>
      <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">{children}</div>
    </article>
  )
}

const MotorTrolleyPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <Bike className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>
            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Trolley, Lorry and Motor Trolley (G.R/S.R. 15.18)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>
          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <NumberedList items={definitions} />
          </div>
        </article>

        <SectionCard title="Working of Motor Trolley (S.R. 15.25)" delay={0.1}>
          <NumberedList items={working} />
        </SectionCard>

        <SectionCard title="Motor trolley following a train:" delay={0.15}>
          <NumberedList items={following} />
        </SectionCard>

        <div className="flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes soft-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.92;
          }
        }
      `}</style>
    </div>
  )
}

export default MotorTrolleyPage
