'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { GitFork } from 'lucide-react'

type PointItem =
  | { num: string; text: string }
  | { num: string; text: string; checks: string[] }
  | { num: string; text: string; bullets: string[] }

const PointsAffectingTheMovementPage = () => {
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
  return (
    <OperatingTopicPage title="Points Affecting the Movement (G.R. 3.38)" icon={GitFork}>
          <ol className="space-y-4">
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
    </OperatingTopicPage>
  )
}

export default PointsAffectingTheMovementPage