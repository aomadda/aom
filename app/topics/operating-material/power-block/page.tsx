'use client'

import React from 'react'
import Link from 'next/link'
import { Zap } from 'lucide-react'

type Point = {
  text: string
  sub?: string[]
}

const points: Point[] = [
  {
    text: "All Departments requiring traffic block, power block or ‗permit to work‘ in the danger zone shall give advance notice to DEE/Tr.D before 10.00 hours on Monday.",
  },
  {
    text: 'The applications contain:',
    sub: [
      'Nature of work',
      'Persons carrying out the work',
      'Location of work and section & line to be blocked',
      'Train between which block required',
      'Whether Diesel traffic may be permitted during the block.',
    ],
  },
  { text: 'DEE/Tr.D with DOM issue weekly programme by 12 hours on every Wednesday.' },
  {
    text: 'Weekly programme sent by DOM by Friday evening to be commenced from Monday.',
  },
  { text: 'Works of urgent nature taken up by obtaining emergency blocks from TPC.' },
  {
    text: 'When Power Block is sanctioned, TPC issues to SCOR Power Block message either through messenger or through telephone under exchange of PN.',
  },
  {
    text: 'SCOR with consultation of SM acknowledge and permit indicating the exact time of permission supported by PN.',
  },
  {
    text: "TPC will arrange to isolate and make dead the portion of Electrical equipment and issue ‗Permit to Work‘ to concerned officials.",
  },
  { text: 'In case of emergency TPC will isolate and advise SCOR.' },
  {
    text: "When more than one working party is issued ‗Permit to Work‘ TPC will issue to one authorized person who is responsible that all have completed the works and then issue cancellation message.",
  },
  { text: 'Cancellation of Block advised by TPC to SCOR under exchange of PN.' },
  {
    text: "In order to prevent electric rolling stock from being admitted into tracks where working carried out, the SM shall use ‗Power Block Collars‘.",
  },
  {
    text: 'Points and Signals to the concerned lines should be locked and keys kept with SM.',
  },
  {
    text: 'SCOR on receipt of Power Block message from TPC repeat it to SM concerned.',
  },
  {
    text: 'SM to record and acknowledge with PN and then block the electric traffic from time indicated and place Power Block collars on the concerned levers.',
  },
  { text: 'Power Block collars removed only on receipt of message from SCOR.' },
  { text: 'Information of Power Block mentioned in the Station Diary.' },
]

const forms = [
  'E/Tr.D/2 – Exchange of messages between TPC & SCOR when Power Block is imposed.',
  'E/Tr.D/3 – Used by TPC to SCOR for cancellation of Power Block.',
  'E/Tr.D/4 – Used by TPC and SCOR for cancellation of CO imposed by TPC.',
  'E/Tr.D/5 – Used by TPC for imposing speed restriction for OHE defective.',
  'E/Tr.D/6 – Used by field staff to permit other department to work on adjacent to electrical equipment.',
]

const PowerBlockPage = () => {
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
              <Zap className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Power Block (S.R. 17.04.3, 4)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              Power Block – means blocking of a section of line against movement of electric
              traffic. This block is exclusively used for OHE maintenance purposes.
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
                        <li key={sub} className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">
                            
                          </span>
                          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                            {sub}
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

        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Forms to Be Used
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {forms.map((text) => (
              <li
                key={text}
                className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
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

export default PowerBlockPage
