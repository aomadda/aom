'use client'

import React from 'react'
import Link from 'next/link'
import { CircleDashed } from 'lucide-react'

type Point =
  | { num: number; text: string }
  | { num: number; text: string; arrows: string[] }
  | { num: number; text: string; nested: { text: string; bullets: string[] }[] }

const points: Point[] = [
  {
    num: 1,
    text: 'Flat tyre is detected by the unusual/hammering sound of vehicles.',
  },
  {
    num: 2,
    text: 'It is caused due to not correctly keeping empty/load handle in position, not releasing vehicles properly and skidding of wheels.',
  },
  {
    num: 3,
    text: 'When train is run with flat tyre, it causes weld failures and rail fractures.',
  },
  {
    num: 4,
    text: 'LP and guard while on run notice flat tyre in block section:',
    arrows: [
      'Observe SR 30 kmph and clear block section.',
      'On arrival at station, intimate SM.',
    ],
  },
  {
    num: 5,
    text: "Station staff either through the crew of train or while 'exchange of all right signals' become aware of flat tyre they have to:",
    arrows: [
      'Give memo to TXR staff if available to examine the vehicle.',
      'TXR staff after examining, if found within permissible limits (i.e. 60 mm for wagons and 50 mm for coaches), has to certify the vehicle to run with normal speed.',
      'If TXR staff find the flatness beyond the permissible limits, advise SM to detach the vehicle at that station.',
      'If TXR staff not available at that station, with the consultation of SCOR, the vehicle has to be detached at that station.',
      'The detached vehicle sent to next TXR point by other train with a speed restriction of 30 kmph.',
    ],
  },
  {
    num: 6,
    text: 'Control office getting information about flat tyre:',
    arrows: [
      'Arrange to stop at next station.',
      'Advise DyCHC and CHC.',
      'If TXR staff is available at the station, arrange to examine and certify by TXR to either detach or permit the vehicle.',
      'If TXR staff not available, detach that vehicle after consultation with LP, guard, and SM.',
      'Detached vehicle may be moved to next TXR examination point by another light engine or by any train with SR 30 kmph.',
      'DyCHC with Engg. Control asks PWI to inspect rear block section by light engine/tower car with SR 30 kmph or by motor/push trolley.',
    ],
  },
  {
    num: 7,
    text: 'Engineering staff inspects the rear block section and certify.',
    nested: [
      {
        text: 'PWI shall impose caution order in the section till USFD test is done.',
        bullets: [
          'SR 50 kmph for passenger and empty goods trains.',
          'Loaded goods train shall not be permitted.',
        ],
      },
      {
        text: 'After USFD test is done in that section for the next 24 hours:',
        bullets: [
          'Speed for passenger/empty goods train – 75 kmph.',
          'Speed for loaded goods – 50 kmph.',
        ],
      },
    ],
  },
]

const FlatTyrePage = () => {
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
              <CircleDashed className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Flat Tyre
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
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

                {'nested' in item && item.nested ? (
                  <ul className="mt-3 space-y-2.5 sm:pl-12">
                    {item.nested.map((nest) => (
                      <li
                        key={nest.text}
                        className="rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <div className="flex gap-3">
                          <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                            →
                          </span>
                          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{nest.text}</p>
                        </div>
                        <ul className="mt-2.5 space-y-2 sm:pl-8">
                          {nest.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 rounded-lg border border-slate-600/25 bg-slate-900/50 p-3 ring-1 ring-white/3"
                            >
                              <span className="mt-0.5 shrink-0 text-amber-300/90" aria-hidden>
                                ▪
                              </span>
                              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : 'arrows' in item && item.arrows ? (
                  <ul className="mt-3 space-y-2.5 sm:pl-12">
                    {item.arrows.map((arrow) => (
                      <li
                        key={arrow}
                        className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                          →
                        </span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{arrow}</p>
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

export default FlatTyrePage
