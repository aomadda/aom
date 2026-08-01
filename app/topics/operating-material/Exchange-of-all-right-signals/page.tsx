'use client'

import React from 'react'
import Link from 'next/link'
import { Handshake } from 'lucide-react'

type Rule =
  | { type: 'text'; text: string }
  | {
      type: 'nested'
      intro: string
      items: Array<{ label: string; text: string }>
    }
  | {
      type: 'list'
      intro: string
      items: Array<{ label: string; text: string }>
    }

const rules: Rule[] = [
  {
    type: 'text',
    text: 'All right signals are exchanged between Guard, Loco Pilot, and Station Staff to ensure that the train is running in a safe and proper manner.',
  },
  {
    type: 'text',
    text: 'The All-Right signal is given by holding out the green flag horizontally by day and by showing the green light horizontally by night.',
  },
  {
    type: 'text',
    text: 'In case of full-length train/longer loads, when it is not possible to exchange the signals physically, then walkie-talkies may be used duly clearly mentioning the identity.',
  },
  {
    type: 'nested',
    intro:
      'While working trains like Vande Bharat, where red and green lights have been provided at top corner on both the ends for exchange of all right signals, LP and Guard shall exchange all right signals to the station staff by switching ‗ON‘ such light of their respective units. They shall also convey the signals to each other through telecommunication provided in the train or on walkie-talkie.',
    items: [
      {
        label: 'a)',
        text: "If the signal exchange light is defective, they shall acknowledge all 'All Right' signals by exhibiting the proceed hand signal.",
      },
      {
        label: 'b)',
        text: 'Signal exchange light does not relieve the Loco Pilot, Assistant Loco Pilot, or Train Manager from observing the hand signal exchange given by station staff, train passing staff, or running staff of adjacent trains.',
      },
    ],
  },
  {
    type: 'list',
    intro: 'All right signals shall be exchanged:',
    items: [
      { label: 'i.', text: 'When a train starts after stopping at a station.' },
      { label: 'ii.', text: 'When a train starts after stopping between stations.' },
      { label: 'iii.', text: 'When a train runs through a station.' },
      { label: 'iv.', text: 'While passing through ghat sections.' },
      { label: 'v.', text: 'While approaching important girder bridges.' },
      { label: 'vi.', text: 'When last vehicle has cleared the Caution Order spot.' },
      { label: 'vii.', text: 'After clearance of the loop line crossover points at a station.' },
      { label: 'viii.', text: 'When any train passing on the adjacent line(s).' },
    ],
  },
]

const ExchangeOfAllRightSignalsPage = () => {
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
              <Handshake className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              G.R. 4.42 Method of Exchange of All Right Signals
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.05 * (index + 1)}s both` }}
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
                )}
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

export default ExchangeOfAllRightSignalsPage
