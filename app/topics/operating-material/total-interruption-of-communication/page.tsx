'use client'

import React from 'react'
import Link from 'next/link'
import { PhoneOff } from 'lucide-react'

type SubPoint = { label: string; text: string }

type Point = {
  text: string
  sub?: SubPoint[]
}

const singleMeans: SubPoint[] = [
  { label: 'i.', text: 'Block instrument, Track circuits or Axle counters' },
  { label: 'ii.', text: 'Telephone attached to the Block instrument' },
  { label: 'iii.', text: 'Station to Station Fixed Telephone' },
  { label: 'iv.', text: 'Fixed Telephone such as Railway Auto Phone or BSNL phone' },
  { label: 'v.', text: 'Control Telephone' },
  { label: 'vi.', text: 'VHF Set' },
]

const singlePoints: Point[] = [
  { text: 'Train shall be brought to a stop at station.' },
  {
    text: 'The SM who has trains to dispatch shall open communication with the SM of Block station at the other end by sending any one of the following vehicles in the order of preference:',
    sub: [
      { label: 'a)', text: 'Light engine' },
      { label: 'b)', text: 'Train engine, after it is detached from the train' },
      {
        label: 'c)',
        text: 'Motor trolley/Tower car - accompanied by guard or by off-duty ASM',
      },
      {
        label: 'd)',
        text: 'Trolley/cycle trolley accompanied by a guard or by off-duty ASM',
      },
      { label: 'e)', text: 'Diesel car/EMU/DMU after detraining the passengers.' },
    ],
  },
  {
    text: 'Loco Pilot/Guard/ASM shall be advised of the circumstances and obtain acknowledgement from the LP/Guard/ASM.',
  },
  {
    text: 'Loco Pilot/Guard/ASM shall be given T/B 602 (authority to open communication during TIC on single line) - to be prepared in duplicate.',
  },
  {
    text: 'This authority contains:',
    sub: [
      { label: 'a)', text: 'Authority to enter into Block section without Line Clear' },
      { label: 'b)', text: "Authority to pass departure signals at 'ON'" },
      { label: 'c)', text: 'Caution order (15/10)' },
      {
        label: 'd)',
        text: 'Line clear enquiry message – asking line clear for waiting trains',
      },
      {
        label: 'e)',
        text: 'Conditional line clear message – line clear for light engine/vehicle with or without train to come back',
      },
    ],
  },
  {
    text: 'If line clear is required for more than one train, LP shall be given T/B 602 and T/E 602 (line clear enquiry message).',
  },
  {
    text: 'If light engine or light engine with brake van is to be dispatched, LP shall be given T/B 602 and items line clear enquiry message, conditional line clear message shall be struck out.',
  },
  { text: 'Except LSS, all signals can be taken off.' },
  {
    text: 'Loco Pilot shall be vigilant and proceed with 15 Kmph during day when view is clear and 10 Kmph during night.',
  },
  {
    text: 'If view is obstructed, train shall be piloted by two persons on foot with danger hand signals and fog signals.',
  },
  {
    text: 'Tunnel shall be entered only after ascertaining that it is clear, headlight, lights of the engine shall be switched on.',
  },
  {
    text: 'If two engines/vehicles meet in the section, the in-charges decide the station to which they shall proceed, considering the importance of trains, distance of station, gradients, catch sidings, etc.',
  },
  { text: 'Engine/vehicles may either be coupled or may be loaded or may be followed.' },
  {
    text: 'Loco Pilot shall stop at FSS. The engine or vehicle may be admitted either on signals or piloting.',
  },
  {
    text: 'If train is held up at FSS, LP shall send ALP after 10 minutes and guard shall protect in rear.',
  },
  { text: 'On arrival at station, hand over T/B 602 or T/B.602 + T/E.602 to SM.' },
  {
    text: 'The SM of other station shall give following documents to light engines with or without train.',
  },
  {
    text: 'Conditional line clear ticket T/G.602 (Up) or T/H.602 (Dn) - ATP for light engine with or without train.',
  },
  {
    text: 'Conditional line clear reply message T/F.602 - granting line clear for trains at other station.',
  },
  { text: 'The engine/train while returning shall proceed with normal speed.' },
  {
    text: 'The engine/vehicle on return shall stop at the FSS and thereby it may be admitted on signals or piloting.',
  },
  { text: 'CLC reply shall be handed over to SM.' },
  { text: 'SM shall prepare conditional line clear ticket for waiting train.' },
  {
    text: 'If line clear obtained for more than one train, second and subsequent train may be despatched after an interval of 30 minutes.',
  },
  { text: 'First train may proceed with normal speed.' },
  { text: 'Each train shall be given CLCT.' },
  {
    text: 'For 2nd and subsequent trains, Caution Order shall be given to observe 25/10 kmph.',
  },
  {
    text: 'If there is even flow of trains, CLCM & LCEM shall be sent through guard of trains.',
  },
  {
    text: 'An endorsement to be made on CLCT with particulars of the preceding and following trains.',
  },
  {
    text: 'Normally backing is not permitted. If unavoidable, the train may be backed after protecting by placing one detonator at 250 m and two at 500 m, 10 m apart beyond the point up to which it is to be backed.',
  },
  {
    text: 'In case of accident, failure etc., protection shall be done by placing one detonator at a distance of 250 m and two detonators at a distance of 500 m, 10 m apart.',
  },
  {
    text: 'Trains must continue to work in this system till any one of the means of communication is restored by competent authority.',
  },
  {
    text: 'As soon as any one of the means of communication is restored, both SMs shall exchange messages in the form No. T/I 602 and ensure that no train in block section before resuming normal working.',
  },
  { text: 'Entries in TSR in red ink should be made.' },
  {
    text: 'TI of the section prepares and submits a report on working of trains during this period to DRM within 7 days of restoration of communication.',
  },
]

const doubleMeans: SubPoint[] = [
  { label: 'a)', text: 'Block instrument, Track circuits or Axle counters' },
  { label: 'b)', text: 'Telephone attached to the Block instrument' },
  { label: 'c)', text: 'Station to Station Fixed Telephone' },
  { label: 'd)', text: 'Fixed Telephone such as Railway Auto Phone or BSNL phone' },
  { label: 'e)', text: 'Control Telephone' },
  { label: 'f)', text: 'VHF Set' },
]

const doublePoints: Point[] = [
  { text: 'Trains shall be brought to a stop at station.' },
  { text: 'Guard and Loco Pilot shall be advised of the circumstances.' },
  { text: 'The SM shall issue T/C.602 to the Loco Pilot.' },
  {
    text: 'This authority (T/C.602) contains:',
    sub: [
      { label: 'a)', text: 'Authority to enter block section without Line Clear.' },
      { label: 'b)', text: 'Authority to pass departure signal at ON.' },
      {
        label: 'c)',
        text: 'Caution order – to observe SR of 25 Kmph when view is clear, 10 Kmph when view is not clear.',
      },
      { label: 'd)', text: 'Except LSS, all signals can be taken off.' },
      {
        label: 'e)',
        text: 'When view is not clear, trains shall be piloted by Assistant Loco Pilot.',
      },
    ],
  },
  {
    text: 'Tunnel shall be entered only after ascertaining that it is clear, switching on headlight, marker lights.',
  },
  {
    text: 'If train stops in the section and cannot proceed further, it shall be protected by placing one detonator at 250 mts and two detonators at 500 and 510 mts.',
  },
  {
    text: 'During this period, pushing back is not allowed. If unavoidable, the train may be pushed back only after protecting (as mentioned above) beyond the point up to which backing is required.',
  },
  {
    text: 'The Loco Pilot shall stop at FSS (even if OFF) and give a long whistle continuously.',
  },
  {
    text: 'If within 10 minutes signals are not taken off or no one turns up, Assistant Loco Pilot to be sent to station and Guard has to protect in rear.',
  },
  { text: 'On arrival into the station ahead, T/C.602 shall be handed over to SM.' },
  {
    text: 'There should be clear interval of 30 minutes between the train that has preceded the one which has to follow.',
  },
  {
    text: 'Trains must continue to work on this system, till any one of the means of communications is restored by competent authority.',
  },
  {
    text: 'As soon as any one of the means of communication is restored, both SMs shall exchange messages in the form no. T/I 602 and ensure that no train is in block section before resuming normal working.',
  },
  { text: 'Entries in TSR in red ink should be made.' },
  {
    text: 'TI of the section prepares and submits a report on the working of trains to DRM within 7 days of restoration of communication.',
  },
]

function SubList({ items }: { items: SubPoint[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
      {items.map((sub) => (
        <li key={`${sub.label}-${sub.text}`} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{sub.label}</span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{sub.text}</p>
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: Point[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.text.slice(0, 48)}`}
          className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <div className="flex gap-3">
            <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
          </div>
          {item.sub ? <SubList items={item.sub} /> : null}
        </li>
      ))}
    </ol>
  )
}

const TotalInterruptionOfCommunicationPage = () => {
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
              <PhoneOff className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Procedure for Working of Trains During Total Interruption of Communication on
              Single Line (S.R. 6.02.4)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                In the event of total interruption of communication, i.e., when line clear cannot be
                obtained by any one of the following means:
              </p>
              <SubList items={singleMeans} />
            </div>

            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              The following procedure shall be adopted for the working of trains:
            </p>

            <NumberedList items={singlePoints} />
          </div>
        </article>

        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Procedure for Working of Trains During Total Interruption of Communication on
              Double Line (S.R. 6.02.3)
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                In the event of total interruption of communication, i.e., when line clear cannot be
                obtained by any one of the following means:
              </p>
              <SubList items={doubleMeans} />
            </div>

            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              The following procedure shall be adopted for working of trains:
            </p>

            <NumberedList items={doublePoints} />
          </div>
        </article>

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

export default TotalInterruptionOfCommunicationPage
