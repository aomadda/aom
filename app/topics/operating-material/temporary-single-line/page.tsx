'use client'

import React from 'react'
import Link from 'next/link'
import { GitMerge } from 'lucide-react'

type SubPoint = { label: string; text: string }

type Point = {
  text: string
  sub?: SubPoint[]
}

const points: Point[] = [
  {
    text: 'Whenever any line is obstructed on double line due to accident or any other reason, the traffic may temporarily be worked over single line.',
  },
  {
    text: 'SM must have reliable information in writing that one line is clear for introducing TSL.',
  },
  { text: 'If there is a doubt about clearance of track, ask PWI to certify the track.' },
  {
    text: 'If there is no reliable information in writing, train other than passenger carrying train may be despatched on block ticket (T/J.602) with a restricted speed of 15/8 kmph to get information.',
  },
  {
    text: 'For introduction of TSL working, decision of Sr.DOM/DOM (Incharge) is final and nomination of stations also.',
  },
  {
    text: 'TSL working shall be introduced between nearest stations provided with favorable crossover between up and down lines on either side.',
  },
  { text: 'If cross over is not available, it shall be extended up to next station.' },
  { text: 'Treating each block section as a separate.' },
  {
    text: 'Commutator of block instruments pertaining to obstructed line, including that of intermediate block station/s if any between the nominated stations, SGE B.I shall be kept in TOL position and locked for the entire duration of TSL working.',
  },
  {
    text: 'During wrong line operations, the block instrument pertaining to the unobstructed line shall be kept in TOL position and locked. In case of UFSBI, the LCB key shall be kept in OUT position.',
  },
  {
    text: 'SM proposing TSL working shall issue a message to SM of other end containing following information under exchange of PNs:',
    sub: [
      { label: 'a)', text: 'Cause of introduction of single line working;' },
      { label: '(b)', text: 'Place of obstruction;' },
      { label: '(c)', text: 'The line by which single line working is proposed;' },
      { label: '(d)', text: 'The source of information that the said line is clear;' },
      { label: '(e)', text: 'Restriction of speed, if any, on the line;' },
      {
        label: '(f)',
        text: 'The number and timings of the last train which arrived/left the station nominated.',
      },
    ],
  },
  {
    text: 'Line Clear will be obtained on electrical communication (AS 17 included CUG SIM No).',
  },
  {
    text: 'Authority is T/D 602 (authority for temporary single line working on double line section).',
  },
  {
    text: 'This authority contains line clear ticket, authority to pass all departure signals of a station at ―ON‖ and caution order.',
  },
  {
    text: 'The maximum speed of first train over TSL working is restricted to 25 Kmph. An endorsement shall be made in the T/D602 issued to Loco Pilot of 1st train to inform all gangmen, gateman, patrolman, OHE and Telecom staff about introduction of TSL working.',
  },
  {
    text: "The second and subsequent trains can proceed with normal/sectional speed duly observing SR‘s in force.",
  },
  {
    text: 'In the T/D 602, Loco Pilot shall be informed about the line, Kilometreage of obstruction and speed restriction, if any, and assurance about the setting of trap points.',
  },
  {
    text: 'When train is stopped on account of accident or engine failure or any other cause, protection shall be done as per Rule 6.03.',
  },
  {
    text: 'When train is despatching from wrong line, after ensuring that all points enroute are correctly set and locked.',
  },
  {
    text: 'Depute competent railway with T/D 602 to hand over to train crew and train shall be piloted by competent railway servant in uniform till last points of the station.',
  },
  {
    text: 'LP shall switch on flasher light, if fails any staff notices shall stop the train.',
  },
  { text: 'Reception of a train on wrong line, stop the train at LSS (wrong line).' },
  { text: 'LP shall give long whistle.' },
  {
    text: 'SM after ensuring all the points enroute are correctly set and locked.',
  },
  {
    text: 'Depute competent railway with T.510 to hand over to train crew and train shall be piloted by competent railway servant in uniform till the place where required to come to a stop.',
  },
  { text: 'After completion on wrong line movements.' },
  { text: "SM‘s shall exchange message for Right line movements." },
  { text: 'Shall bring into use of Block Instruments.' },
  { text: 'Issue T/D 602 for train crew.' },
  { text: 'In case of any IB signal in section, shall brought to force.' },
  { text: 'All departure signals including IB shall be taken ―Off‖.' },
  { text: 'On right line, reception signal can be taken off.' },
  {
    text: 'Normal working shall be introduced only after obtaining written certificate from PWI and issuing message to other SMs under the exchange of PNs.',
  },
  {
    text: 'LP of first train shall be issued caution order of 25 kmph and shall inform all field staff about resumption of normal working.',
  },
  {
    text: 'When double line working is introduced, all Block instruments, IB signal and fixed signals shall be brought into use.',
  },
  { text: 'Entries in TSR should be made in red ink.' },
  { text: 'TI of the section must scrutinise all the records.' },
  { text: 'Submit a report to Sr.DOM /DOM (Incharge) within 7 days.' },
]

const TemporarySingleLinePage = () => {
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
              <GitMerge className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Procedure for Working of Trains When One Line is Obstructed on Double Section
              (S.R. 6.02.1)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((item, index) => (
              <li
                key={`${index}-${item.text.slice(0, 40)}`}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.02 * (index + 1)}s both` }}
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

export default TemporarySingleLinePage
