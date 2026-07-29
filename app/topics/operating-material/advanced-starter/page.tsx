'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'

const items = [
  {
    roman: 'i',
    text: 'When a train leaving a station is guided by more than one starter signal, the outermost signal is the LSS of the station and is called the Advanced Starter.',
  },
  {
    roman: 'ii',
    text: 'It is interlocked with block instruments where there is no provision of Intermediate Block (IB) signal.',
  },
  {
    roman: 'iii',
    text: 'It shall be fixed at the limit beyond which no train may pass, unless Loco Pilot is given the Authority to Proceed (ATP).',
  },
  {
    roman: 'iv',
    text: 'Normally, it shall be placed outside all connections.',
  },
  {
    roman: 'v',
    text: 'At class ‗B‘ station, it demarcates the station section and the block section.',
  },
  {
    roman: 'vi',
    text: 'On single line tokenless sections and on double line, taking off Advanced Starter is normal ATP.',
  },
  {
    roman: 'vii',
    text: 'While taking off departure signals, the Advanced Starter shall be taken off first and then the starter/starters.',
  },
  {
    roman: 'viii',
    text: 'On a double line section, it shall be placed at a distance of 180 meters from Starter.',
  },
  {
    roman: 'ix',
    text: 'On a single line section, it shall be placed from the trailing points at a distance of 120 meters on MAS.',
  },
  {
    roman: 'x',
    text: 'It shall not be taken off for shunting purposes.',
  },
]

const defectivePoints = [
  'SM shall obtain line clear through electrical speaking instrument.',
  'Follow the procedure as mentioned in block working message (BWM) to be written in Train Signal Register (TSR) by both SMs in red ink.',
  'Authorise the Loco Pilot by issuing PLCT.',
  'SM shall fill T/A 1425 in one copy.',
  'As per direction of a train, hand over T/C 1425 or T/D 1425 and PN should be written which is available on T/A 1425.',
  'Obtain LP signature on T/C or T/D 1425 form.',
  'If signal detects any points, exhibition of Proceed Hand Signal is compulsory.',
]

const AdvancedStarterPage = () => {
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
              <ChevronsRight className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Advanced Starter
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ul className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {items.map((item, index) => (
              <li
                key={item.roman}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.05 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {item.roman}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Advanced Starter Defective (AS NO 16 I.23 & 39 of 14.06.24)
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {defectivePoints.map((text, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.3 + 0.04 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
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

export default AdvancedStarterPage
