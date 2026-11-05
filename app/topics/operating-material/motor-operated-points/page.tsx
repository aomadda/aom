'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Wrench } from 'lucide-react'

type MotorPointItem =
  | { num: number; text: string }
  | { num: number; text: string; letters: { label: string; text: string }[] }

const MotorOperatedPointsPage = () => {
    const motorOperatedPoints: MotorPointItem[] = [
        {
          num: 1,
          text: 'Whenever points are operated by motor, it is known as Motor Operated Point.',
        },
        {
          num: 2,
          text: 'In SCR there are two kinds of point motors in use:',
          letters: [
            { label: 'a', text: 'Universal' },
            { label: 'b', text: 'Siemens' },
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
  return (
    <OperatingTopicPage title="Motor Operated Points (S.R. 3.38.7, App XI-6)" icon={Wrench}>
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
    </OperatingTopicPage>
  )
}

export default MotorOperatedPointsPage