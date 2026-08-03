'use client'

import React from 'react'
import Link from 'next/link'
import { LifeBuoy } from 'lucide-react'

type SubPoint = { label: string; text: string }

type Point = {
  text: string
  sub?: SubPoint[]
}

const intro =
  'Despatch of relief engine/relief train into an occupied/obstructed block section to assist the crippled or disabled engine/train:'

const points: Point[] = [
  { text: 'The authority in Absolute Block System is T/A.602.' },
  { text: 'The authority in Automatic Block System is T/C.912.' },
  {
    text: 'The authority contains:',
    sub: [
      {
        label: 'i.',
        text: 'Authority to proceed without Line Clear to proceed up to the point of obstruction and return back or go to the next station.',
      },
      { label: 'ii.', text: 'Authority to pass signals at ‗ON‘.' },
      {
        label: 'iii.',
        text: 'Caution Order to observe 15 Kmph when view ahead is clear during day and 10 Kmph during night and view ahead is not clear and Walking Speed preceded by one/two men on Double/Single line carrying Stop Hand signal and Detonators for ready use.',
      },
    ],
  },
  {
    text: 'In Automatic Block System, it must be ensured the line is free from the Block Station to the point of obstruction.',
  },
  { text: 'All movements shall be carried out in consultation with SCOR.' },
  {
    text: 'SM at other end shall be advised about the relief engine sent and clearance under exchange of Private Number.',
  },
  {
    text: 'Loco Pilot advised of the obstructions, location of Brake Van and Engine and station to which it has to clear.',
  },
  {
    text: 'Loco Pilot to keep sharp lookout, whistle frequently and be prepared to stop short of any obstruction.',
  },
  {
    text: 'Loco Pilot to bring stop short of obstruction and obey hand signals at the site.',
  },
  {
    text: 'While returning, Loco Pilot to act according to the aspect of signals on single line.',
  },
  {
    text: "While clearing to the station on double line, the Loco Pilot to act as per the aspect of the signal on right line or stop the train at LSS of the same line or FSS of the other line whichever comes first and after points are set correctly and piloted in on ‗Pilot in memo‘.",
  },
  {
    text: 'On arrival at the station, the authority to be handed over to the SM who shall keep with the station records.',
  },
  {
    text: 'Time of entering/clearing and restoration of normal working of the section shall be made in TSR in red ink.',
  },
  {
    text: 'Record of timing entering/clearing and restoration of normal working of the section made in TSR in red ink.',
  },
  {
    text: 'Before introduction of normal working, SMs to ensure:',
    sub: [
      {
        label: 'i.',
        text: 'Block section is free under exchange of Private Number.',
      },
      {
        label: 'ii.',
        text: '‗Track Fit‘ certificate to be obtained from Engineering Official in case of accident.',
      },
    ],
  },
  {
    text: 'Whenever engine is pushing, Rules for pushing back as per G.R. 4.12 to be observed.',
  },
]

const ReliefEnginePage = () => {
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
              <LifeBuoy className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Dispatch of Relief Engine / Relief Train into an Occupied or Obstructed Block
              Section in Absolute Block System and Automatic Block System (SR 6.02.6)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              {intro}
            </p>

            <ol className="space-y-3">
              {points.map((item, index) => (
                <li
                  key={`${index}-${item.text.slice(0, 40)}`}
                  className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  style={{ animation: `fade-up 0.55s ease-out ${0.03 * (index + 1)}s both` }}
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
                        <li key={`${sub.label}-${sub.text.slice(0, 24)}`} className="flex gap-2.5">
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

export default ReliefEnginePage
