'use client'

import React from 'react'
import Link from 'next/link'
import { Split } from 'lucide-react'

type Point =
  | { text: string; sub?: never }
  | { text: string; sub: { label: string; text: string }[] }

const points: Point[] = [
  {
    text: 'If a Loco Pilot realises, while on run, that there is rail fracture, shall:',
    sub: [
      { label: 'a)', text: 'Stop the train and protect the train.' },
      { label: 'b)', text: 'Examine the track.' },
      {
        label: 'c)',
        text: 'If considers safe, proceed further and give a written memo at advance station SM and obtain acknowledgement.',
      },
      {
        label: 'd)',
        text: 'If unsafe, inform SCOR and SMs and wait till Engg official certify fit.',
      },
    ],
  },
  {
    text: 'If a mate / key man / patrolman detects rail fracture of less than 30 mm gap, he shall show stop hand signals and inform Loco Pilot of first train to pass the fracture spot at 10 Kmph and subsequent trains at 15 Kmph.',
  },
  {
    text: 'Loco Pilot of the first train shall stop his train at the next block station and give memo about the rail fracture.',
  },
  {
    text: 'SM, who received report from Loco Pilot about the rail fracture, shall inform the SM of the station at other end of the block section.',
  },
  {
    text: 'Both the SMs shall arrange issue of caution order to trains to observe an SR of 15 Kmph and also advise all concerned.',
  },
  {
    text: 'If the gap is more than 30 mm or multiple fractures, only PWM/PWI can pass the trains after attending the rail fracture.',
  },
  {
    text: 'When report of any accident or obstruction is received by the Station Master in IR-ATP (Kavach) territory, the Station Master shall operate SOS in Station Master Operational Panel cum Indication Panel (SMOCIP) to prevent other functional IR-ATP (Kavach) trains from entering the affected section.',
  },
]

const RailFracturePage = () => {
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
              <Split className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Rail Fracture (S.R. 6.01)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((item, index) => (
              <li
                key={`${index}-${item.text.slice(0, 40)}`}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
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
                      <li key={sub.label} className="flex gap-2.5">
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

export default RailFracturePage
