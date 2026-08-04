'use client'

import React from 'react'
import Link from 'next/link'
import { Truck } from 'lucide-react'

type SubPoint = { label: string; text: string }

type Point = {
  text: string
  sub?: SubPoint[]
}

const points: Point[] = [
  {
    text: "A heavy vehicle which can be readily lifted off the line by four men is called ‗Lorry‘.",
  },
  {
    text: 'When trolley is loaded with engineering material or working in some specified sections it shall be deemed to be lorry.',
  },
  { text: 'Lorries shall be manned by minimum six men.' },
  {
    text: 'Staff of Engineering/Electrical/S&T to be certified by their respective authorized officers, DEN/DEE/DSTE and issue competency certificates.',
  },
  { text: 'Trolleys/lorries not carried by M/E trains except in emergency.' },
  { text: 'Lorries are carried in BV of goods/mixed trains.' },
  {
    text: 'Will only work during daylight hours when visibility is clear up to 800m.',
  },
  {
    text: 'A trolley/lorry not insulated shall not be placed online within station limits where track circuit is provided.',
  },
  { text: 'Normally permitted without Block Protection.' },
  {
    text: 'Run under Block Protection in following cases if it is permitted and SM shall place Lorry online cap on the plunger of the Block Instrument:',
    sub: [
      { label: 'i.', text: 'In some specified sections' },
      { label: 'ii.', text: 'During thick foggy weather' },
      { label: 'iii.', text: 'During night' },
      { label: 'iv.', text: 'When loaded with heavy materials like rails, etc.' },
    ],
  },
  {
    text: 'Before placing the lorry on the line the official shall advise the SM in writing on the form No. T.1518 (Trolley/Lorry Notice).',
  },
  {
    text: 'T.1518 specifies the duration of work, the line/lines over which it has to work within station limits, and the KM up to which it is required to be worked outside station limits.',
  },
  {
    text: 'The Official In charge shall place the lorry on line only after receiving the acknowledgement of the SM on the record foil.',
  },
  {
    text: 'SM shall arrange to give Caution Orders to all the trains entering the Block section.',
  },
  {
    text: 'Whenever lorry is placed online protection of the lorry is to be done as:',
    sub: [
      {
        label: '',
        text: 'On Double line one or two men one at 400/600m, on MG/BG shall carry banner flags and at 800/1200m on MG/BG exhibit stop hand signal in the direction of train expected.',
      },
      {
        label: '',
        text: 'On Single Line one or two men at 400/600m on MG/BG show banner flag and at 800/1200m on MG/BG exhibit stop hand signal on either side.',
      },
      {
        label: '',
        text: 'Whenever stops the person at 400/600m shall keep banner flag across and exhibit stop hand signal and men at 800/1200m shall place 3 detonators 10m apart and show stop hand signal.',
      },
    ],
  },
  {
    text: 'Speed of lorry shall not exceed 10 kmph on straight line and 6 kmph on curves.',
  },
  {
    text: 'When lorries following a distance of 2 telegraph post to be maintained.',
  },
  {
    text: 'When lorries is not in use placed on Platform or beside the track it must be kept parallel to the track and the wheels chained and padlocked.',
  },
]

const LorryPage = () => {
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
              <Truck className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Short Notes on Lorry (G.R./S.R. 15.27)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
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

export default LorryPage
