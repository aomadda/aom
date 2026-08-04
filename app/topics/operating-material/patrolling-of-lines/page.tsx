'use client'

import React from 'react'
import Link from 'next/link'
import { Route } from 'lucide-react'

const occasions = [
  'Sudden storm or hurricane during day or night',
  'Monsoon patrolling',
  'Watch at vulnerable locations during monsoon',
  'Security patrolling during civil disorders',
]

const suddenStorm = [
  'When there is a sudden storm or hurricane, patrolling is immediately arranged.',
  'The gangman, on instructions from the gangmate, patrols the line.',
  'This is done in addition to any ongoing monsoon patrolling.',
]

const monsoonPoints = [
  { label: 'Timing:', text: 'Mostly confined to night times, from sunset to sunrise.' },
  {
    label: 'Decision:',
    text: 'The Divisional Engineer (DEN) decides the need for patrolling based on reports from the irrigation department and prepares patrol charts.',
  },
  { label: 'Beats:', text: 'The line is divided into different sections called "beat sections."' },
  {
    label: 'Patrolmen:',
    text: 'Patrolmen are appointed for each beat and must patrol as per the patrol charts issued by the DEN, according to the timetable in force.',
  },
  {
    label: 'Distribution:',
    text: 'Patrol charts are issued to the patrolman, Assistant Engineer (AEN), Permanent Way Inspector (PWI), running room, loco foreman, Section Controller (SCOR), and station.',
  },
  { label: 'Beat Division:', text: 'The length between stations is divided into equal beats.' },
  {
    label: 'Patrol Chart:',
    text: 'Includes all passenger runs between 18:00 hrs to 06:00 hrs.',
  },
  {
    label: 'Beat Book:',
    text: "Maintained by the Station Master (SM), serially numbered, containing the name of the patrolman, kilometers of patrol, and identification number.",
  },
  {
    label: 'Beat Book Columns:',
    text: 'Date, station, time of arrival and departure, and signature of SM.',
  },
]

const monsoonProcedure = [
  "Patrolman reports for duty as per patrol chart, contacts SM, obtains beat book with departure time and SM's signature.",
  'Proceeds to the other end of the beat, presents the beat book to the SM at the other end, who records the arrival time.',
  'If the other end is not a beat station, books are exchanged at an intermediate point with another patrolman.',
]

const monsoonExtra = [
  {
    label: 'Train Passing:',
    text: 'For every passenger train, the patrolman stands on the right-hand side, whistles, and exhibits his number plate showing the light of his hand signal lamp.',
  },
  {
    label: 'Reliever:',
    text: 'If his reliever does not turn up after completing the beat, the patrolman must continue patrolling the section.',
  },
  {
    label: 'Reporting:',
    text: 'Any abnormalities must be reported to the nearest SM after protecting the site.',
  },
]

const securityPatrolling = [
  'When civil disturbance is apprehended, the DEN contacts local police to arrange security patrolling of the railway line.',
  'The patrol beat will be much shorter during such times.',
  'The primary duty of the patrolman is to protect trains against any danger, such as tampering of track or obstruction placed on the line.',
]

const types = [
  { label: '1.', text: 'Ordinary Patrolling: Every 4 hours' },
  { label: '2.', text: 'Intensive Patrolling: Every 2 hours' },
  {
    label: '3.',
    text: 'Special Patrolling: Patrol special will be sent ½ hour before the scheduled departure of Passenger/VIP special trains.',
  },
]

const smDuties = [
  'Enter the name and actual time of departure and arrival of patrolman in Train Signal Register (TSR) in the remarks column and in the station diary.',
  'If the patrolman does not turn up within 15 minutes of his scheduled arrival, stop all trains proceeding into the block section and issue a Caution Order (CO) to the Loco Pilot to be alert and proceed at a speed restriction of 40 kmph.',
  'Inform PWI, AEN, DEN, and SCOR, and send the gangmate to proceed in the beat section.',
]

const summaryRows = [
  [
    'Definition',
    'Intensive inspection of line by foot, additional to daily keyman inspection',
  ],
  ['Main Occasions', 'Storms, monsoon, vulnerable points, civil disorder'],
  [
    'Monsoon Patrolling',
    'Night time, as per patrol charts, beats assigned, beat books maintained',
  ],
  [
    'Security Patrolling',
    'During civil disorder, shorter beats, focus on sabotage/obstruction',
  ],
  [
    'Types of Patrolling',
    'Ordinary (4 hrs), Intensive (2 hrs), Special (before VIP/Passenger trains)',
  ],
  ['SM Duties', 'Record keeping, train control, reporting, and communication'],
]

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
        >
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={text}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {index + 1}
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

const PatrollingOfLinesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <Route className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Appendix IV – Patrolling of Lines (G.R. 15.05)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <SectionCard title="What is Patrolling?">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                Patrolling is an intensive inspection of the railway line by foot, arranged in
                addition to the daily inspection of the line by the keyman. The primary objective is
                to ensure the safety of the track, especially during adverse weather conditions or
                times of potential danger.
              </p>
            </SectionCard>

            <SectionCard title="Occasions for Patrolling">
              <p className="mb-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                Patrolling is carried out under the following circumstances:
              </p>
              <NumberedList items={occasions} />
            </SectionCard>

            <SectionCard title="I. Sudden Storm or Hurricane">
              <DotList items={suddenStorm} />
            </SectionCard>

            <SectionCard title="II. Monsoon Patrolling">
              <ul className="space-y-3">
                {monsoonPoints.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
                  >
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      <span className="font-semibold text-amber-100/90">{item.label} </span>
                      {item.text}
                    </p>
                  </li>
                ))}
                <li className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                  <div className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                    <p className="text-[15px] leading-[1.75] font-semibold text-amber-100/90 sm:text-base">
                      Procedure:
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
                    {monsoonProcedure.map((text) => (
                      <li key={text} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">o</span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                {monsoonExtra.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
                  >
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      <span className="font-semibold text-amber-100/90">{item.label} </span>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="III. Watch at Vulnerable Points">
              <DotList
                items={[
                  'Special watch is kept at locations known to be vulnerable, especially during the monsoon.',
                ]}
              />
            </SectionCard>

            <SectionCard title="IV. Security Patrolling During Civil Disorders">
              <DotList items={securityPatrolling} />
            </SectionCard>

            <SectionCard title="Types of Patrolling">
              <ul className="space-y-3">
                {types.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {item.label.replace('.', '')}
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="Duties of Station Master (SM)">
              <DotList items={smDuties} />
            </SectionCard>

            <SectionCard title="Summary Table">
              <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
                <table className="w-full min-w-[320px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-amber-500/20 bg-slate-950/50">
                      <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                        Aspect
                      </th>
                      <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {summaryRows.map(([aspect, description]) => (
                      <tr
                        key={aspect}
                        className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                      >
                        <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] font-semibold leading-relaxed text-amber-100/95 sm:px-4 sm:text-[15px]">
                          {aspect}
                        </td>
                        <td className="px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                          {description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
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

export default PatrollingOfLinesPage
