'use client'

import React from 'react'
import Link from 'next/link'
import { Hammer } from 'lucide-react'

type NestedItem = { label: string; text: string }

type Rule =
  | { type: 'text'; text: string }
  | { type: 'nested'; intro: string; items: NestedItem[] }

const generalRules: Rule[] = [
  {
    type: 'text',
    text: 'Track Tamping Machine (TTM) is a self-propelled vehicle fitted with headlight and two parking lights and is having 2 parts, viz. the engine and the tamping-cum-leveling units.',
  },
  {
    type: 'text',
    text: 'The machine can run both by day and night.',
  },
  {
    type: 'text',
    text: 'TTM will work under the direct supervision of an official not less than PWI, who is responsible for taking Traffic Block.',
  },
  {
    type: 'text',
    text: 'No person shall be permitted to drive any type of track machine unless he has undergone stipulated training and passed the examination at ZRTI/MLY in General and Subsidiary Rules. A Technical Competency Certificate shall be issued by Dy.CE/Track Machines or any other Competent Engineering Officer nominated by PCE.',
  },
  {
    type: 'text',
    text: 'The certificate shall be valid for 3 years unless revalidated after undergoing a refresher course at ZRTI. Competency certificate for Automatic block system, which will be issued at ZRTI/MLY, is valid for six months only, thereafter it shall be renewed by Loco Inspector after imparting one day orientation course.',
  },
  {
    type: 'text',
    text: 'Speed of all track maintenance machines shall run at a speed prescribed through JSC (Joint Safety Certificate), subject to other speed restrictions in force.',
  },
  {
    type: 'text',
    text: 'A copy of the JSC shall be made available in each such machine.',
  },
]

const workingRules: Rule[] = [
  {
    type: 'text',
    text: 'The TTM shall be treated and signaled as a train.',
  },
  {
    type: 'text',
    text: 'The sanction of CRS shall be available for working a TTM on the relevant section.',
  },
  {
    type: 'text',
    text: 'The TTM shall not be permitted to work during total interruption of communication.',
  },
  {
    type: 'text',
    text: 'The TTM shall be allowed to work during traffic block period only.',
  },
  {
    type: 'text',
    text: 'The person in charge shall inform the SM in writing where he intends to stop in the mid section, whether he will proceed to next station or return to the starting station.',
  },
  {
    type: 'nested',
    intro: 'The SM shall issue authorities as follows:',
    items: [
      { label: '', text: 'Work & return to same block station = T/465' },
      { label: '', text: 'Work & clear next block station = T/A465' },
    ],
  },
  {
    type: 'nested',
    intro: 'When more than one machine is permitted:',
    items: [
      { label: '', text: 'Various Authorities issued by SM are as follows:-' },
      { label: '', text: 'T/465 (1st TTM) and COs (for following units) – (return to same block station) or' },
      { label: '', text: 'COs for preceding and T/A465 (last unit) (proceeding to next block station)' },
      { label: '', text: 'The person in-charge shall personally supervise the movement by travelling in the rearmost machine.' },
      { label: '', text: 'Speeds to be followed are as follows.' },
      { label: '', text: 'The speed of the firstTTM while moving in a convoy in traffic block with maximum permissible speed.' },
      {
        label: '',
        text: 'Following track machines in convoy shall move with the speed of 40 kmph or lowest maximum permissible speed in the group whichever is lower duly following TSR/PSR in section.',
      },
      { label: '', text: 'A minimum safety margin of 250 metres shall be maintained between the respective units.' },
    ],
  },
]

const pushBackRules: NestedItem[] = [
  {
    label: 'a)',
    text: 'The official in-charge shall travel in the leading machine exhibiting hand signals to the following machine,',
  },
  {
    label: 'b)',
    text: 'The speed while pushing back shall not exceed 25 KMPH,',
  },
  {
    label: 'c)',
    text: 'The official in-charge of leading machine shall be responsible to ensure all L/C gates are closed against road traffic before passing,',
  },
  {
    label: 'd)',
    text: 'On wrong line reception the In-charge shall stop the machine at LSS of the same line. Machines may be received by taking off shunt signal if any and T/510 shall also be issued after ensuring that all points are correctly set and facing points are locked. Depute CRS in uniform to pilot the machine into the station.',
  },
  {
    label: 'e)',
    text: "On right line and on single line machines to stop at FSS and first machine may be received by taking off signals and subsequent machines either by taking ‗off‘ calling on signal or by issuing T/509.",
  },
  {
    label: 'f)',
    text: 'On arrival at the station the In-charge shall sign in the TSR in token of complete arrival of the unit/units,',
  },
  {
    label: 'g)',
    text: 'Only after this the SM shall clear the block section.',
  },
]

function RuleList({ rules, startDelay = 0 }: { rules: Rule[]; startDelay?: number }) {
  return (
    <ol className="space-y-3">
      {rules.map((rule, index) => (
        <li
          key={index}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          style={{ animation: `fade-up 0.55s ease-out ${startDelay + 0.03 * (index + 1)}s both` }}
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {index + 1}
          </span>

          {rule.type === 'text' ? (
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{rule.text}</p>
          ) : (
            <div className="min-w-0 flex-1 space-y-3 pt-0.5">
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{rule.intro}</p>
              <ul className="space-y-2.5">
                {rule.items.map((item) => (
                  <li
                    key={`${item.label}-${item.text}`}
                    className="rounded-xl border border-slate-600/35 bg-slate-950/35 p-3.5 ring-1 ring-white/3 sm:p-4"
                  >
                    <div className="flex gap-2.5">
                      <span className="shrink-0 text-sm font-bold text-amber-200">{item.label}</span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

const TrackTampingMachinePage = () => {
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
              <Hammer className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Track Tamping Machine (TTM) (S.R. 4.65))
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-8 px-5 py-8 sm:px-10 sm:py-10">
            <RuleList rules={generalRules} />

            <section className="space-y-3">
              <h2 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Working:
              </h2>
              <RuleList rules={workingRules} startDelay={0.25} />
            </section>

            <section className="space-y-3">
              <div className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  1
                </span>
                <div className="min-w-0 flex-1 space-y-3 pt-0.5">
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    If it is required to push back, the following precautions shall be observed:
                  </p>
                  <ul className="space-y-2.5">
                    {pushBackRules.map((item) => (
                      <li
                        key={item.label}
                        className="rounded-xl border border-slate-600/35 bg-slate-950/35 p-3.5 ring-1 ring-white/3 sm:p-4"
                      >
                        <div className="flex gap-2.5">
                          <span className="shrink-0 text-sm font-bold text-amber-200">{item.label}</span>
                          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
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

export default TrackTampingMachinePage
