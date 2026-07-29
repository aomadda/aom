'use client'

import React from 'react'
import Link from 'next/link'
import { Waypoints } from 'lucide-react'

type PointItem =
  | { num: string; text: string }
  | { num: string; text: string; checks: string[] }
  | { num: string; text: string; bullets: string[] }

const points: PointItem[] = [
  {
    num: '1',
    text: 'Points shall normally be set for straight line, i.e., Normal position.',
  },
  {
    num: '2',
    text: 'Before taking off signal for a train, Station Master (SM) shall ensure:',
    checks: [
      'All the facing points over which train is likely to pass are set correctly and locked.',
      'All trailing points are set correctly, and in case of motor operated points, locked.',
    ],
  },
  {
    num: '3',
    text: 'Immediately after arrival of the train at a station, if there is no shunting or other movement, SM shall:',
    bullets: [
      'Set the points against the occupied line on either side on single line.',
      'Set the points against the occupied line in rear on double line.',
    ],
  },
  {
    num: '4',
    text: 'While granting line clear, if all the lines are occupied, points shall be set to the line occupied by stabled load or a goods train.',
  },
  {
    num: '5',
    text: 'If all lines are occupied by passenger trains, and line clear is asked, points are set to loop line in which engine is facing the direction of incoming train.',
  },
  {
    num: '6',
    text: 'At an interlocked station a train may run through a loop with 1 in 8½ turnouts if points are set, locked, and signals are taken off.',
  },
  {
    num: '7',
    text: 'When signal which is interlocked with points becomes defective, these points shall be treated as Non-Interlocked.',
  },
  {
    num: '8',
    text: 'Speed of a train over non-interlocked points shall not exceed 30 kmph.',
  },
  {
    num: '8 A',
    text: 'In non-interlocked yards, each point must have bolts and cotters, secured with cotter bolt and pin insertion , and padlocked.',
  },
  {
    num: '8B',
    text: 'Where control is required, padlocking after cotter bolt must be mandated in the Station Working Rules by Sr.DOM.',
  },
  {
    num: '9',
    text: 'When a train or vehicle is left standing or otherwise obstructed, or when a train stops at a station for crossing and/or for precedence to another train/trains, the line block caps to be placed on the relevant signal/point/route knobs/buttons to prevent the operation of signal/point/route knobs/buttons and to give a visual warning to SM.',
  },
  {
    num: '10',
    text: 'In VDU panels, facility to block a line through the pop-up message; SM has to apply line block indication.',
  },
  {
    num: '11',
    text: 'Whenever power block has been given, the power block caps (―power block‖ in red letters on yellow colour caps) to be placed on the relevant signal/point/route knobs/buttons to prevent the operation of signal/point/route knobs/buttons and to give a visual warning to SM.',
  },
  {
    num: '12',
    text: 'In VDU panels, the line block/power block indication to be applied through pop-up messages.',
  },
]

type MotorPointItem =
  | { num: number; text: string }
  | { num: number; text: string; letters: { label: string; text: string }[] }

const motorOperatedPoints: MotorPointItem[] = [
  {
    num: 1,
    text: 'Whenever points are operated by motor, it is known as Motor Operated Point.',
  },
  {
    num: 2,
    text: 'In SCR there are two kinds of point motors in use:',
    letters: [
      { label: 'a)', text: 'Universal' },
      { label: 'b)', text: 'Siemens' },
    ],
  },
  {
    num: 3,
    text: 'These motors are operated electrically by pressing buttons or by turning knobs on a panel or by operating miniature levers in the cabin or by mouse operation in VDU.',
  },
  {
    num: 4,
    text: 'Normal (N) and Reverse (R) positions are repeated in cabin/station.',
  },
  {
    num: 5,
    text: 'After operation of points, the SM shall check the indications.',
  },
  {
    num: 6,
    text: 'There are two positions ‗N‘ & ‗R‘ and three indications ‗N‘, ‗R‘ & ‗free‘ in the panel.',
  },
  {
    num: 7,
    text: 'The SM shall operate the point only when there is free indication.',
  },
  {
    num: 8,
    text: 'If after operation the point is not setting, try to operate 4 to 5 times from ‗N‘ to ‗R‘ and ‗R‘ to ‗N‘.',
  },
  {
    num: 9,
    text: 'If SM does not get any steady indication, physically verify the points at site and remove any obstruction between switch & stock rails.',
  },
  {
    num: 10,
    text: 'If flashing still continues, treat the points as defective, intimate S&T officials & make entry in S&T failure register.',
  },
  {
    num: 11,
    text: 'When point becomes defective, use crank handle and set points to the required position.',
  },
  {
    num: 12,
    text: 'SM shall ensure correct setting, clamping and padlocking of facing and trailing points.',
  },
  {
    num: 13,
    text: 'Where two points are operated by a single knob/buttons it is known as double ended points, which are operated separately by two motors.',
  },
  {
    num: 14,
    text: 'The end nearer to station is denoted as ‗A‘ end and farther end is denoted by ‗B‘ end. In case of failure, setting of both ends to the required position is compulsory.',
  },
  {
    num: 15,
    text: 'SM shall personally ensure correct setting of each end of the point and decide which end point to be cranked and if it is set correctly, it must be clamped and padlocked.',
  },
  {
    num: 16,
    text: 'After setting the points using crank handle if N or R indication is available, signals can be taken off after clamping and padlocking.',
  },
  {
    num: 17,
    text: 'If emergency crank handle has been taken out for maintenance work by S&T staff at that time the line block cap should be placed on the relevant point knobs/buttons.',
  },
  {
    num: 18,
    text: 'In case of VDU panel, ―Point block‖ application to be ensured on the relevant points.',
  },
]

const PointsPage = () => {
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
              <Waypoints className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Points Affecting the Movement (G.R. 3.38)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((item, index) => (
              <li
                key={item.num}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.num}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </div>

                {'checks' in item && item.checks ? (
                  <ul className="mt-3 space-y-2.5 sm:pl-12">
                    {item.checks.map((check) => (
                      <li
                        key={check}
                        className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                          ✓
                        </span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{check}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {'bullets' in item && item.bullets ? (
                  <ul className="mt-3 space-y-2.5 sm:pl-12">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                          •
                        </span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Motor Operated Points (S.R. 3.38.7, App XI-6)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {motorOperatedPoints.map((item, index) => (
              <li
                key={item.num}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.3 + 0.04 * (index + 1)}s both` }}
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.num}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </div>

                {'letters' in item && item.letters ? (
                  <ul className="mt-3 space-y-2.5 sm:pl-12">
                    {item.letters.map((letter) => (
                      <li
                        key={letter.label}
                        className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 px-1.5 text-xs font-bold text-amber-100/90 ring-1 ring-amber-400/30">
                          {letter.label}
                        </span>
                        <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{letter.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </article>

        <div className="mt-10 flex justify-center">          <Link
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

export default PointsPage
