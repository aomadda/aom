'use client'

import React from 'react'
import Link from 'next/link'
import { House } from 'lucide-react'

const points = [
  'Home signal is normally provided at all block stations.',
  'At class ‗A‘ station and class ‗B‘ stations in MAS, Home signal is the first stop signal.',
  'At class ‗C‘ station it is the FSS and LSS.',
  'In MAS at class ‗B‘ station, the Home signal is located at a distance of not less than 180 m from station section (outermost facing point/BSLB) on double line and 180 m from advanced starter or shunting limit board on single line or 300 m from outermost facing points where Advanced starter or SLB is not provided.',
  'Home signal shall not be taken off for shunting purposes.',
]

type ConditionItem =
  | { num: number; text: string }
  | { num: number; text: string; arrows: string[] }

const conditions: ConditionItem[] = [
  {
    num: 1,
    text: 'When a train is approaching:',
    arrows: [
      'On single line, home signal shall not be taken off unless the line is clear for an adequate distance beyond the trailing points or for an adequate distance beyond the place at which the train is required to come to a stand.',
      'On double line, beyond starter.',
      'Such adequate distance shall not be less than 120 meters in MAS.',
    ],
  },
  {
    num: 2,
    text: 'If the train stops at the home signal:',
    arrows: [
      'On single line, the line is clear up to trailing points or place at which the train is required to come to a stop.',
      'On double line, up to starter.',
    ],
  },
  {
    num: 3,
    text: 'At terminal stations or where there is an exception, CRS approval to be taken.',
  },
  {
    num: 4,
    text: 'Sand hump of approved design / derailing switch (CRS approval) shall be deemed to be efficient substitutes of adequate distance referred above.',
  },
  {
    num: 5,
    text: 'Adequate distances / any CRS approvals to be indicated in SWR.',
  },
  {
    num: 6,
    text: 'Whenever a stopping train is to be received on a line not provided with track circuit or axle counter, SM shall ensure that line is free including adequate distance.',
  },
]

const preWarned = [
  'At stations where calling on/signal post telephone is not provided, before granting line clear, SM shall ensure conditions for taking off home signal were also fulfilled and shall advise rear SM through message to issue written authority to loco pilots T.369(1) [advance authority] with clear description of signal and number as well as line on which it is being received (AS No 16 I.9 of 14.06.24).',
  'SM of advance station shall depute competent railway servant in uniform to exhibit Proceed Hand Signal (PHS).',
  'This T/369(1) authorizes Loco Pilot to pass the defective signal at ‗ON‘ duly observing the Proceed hand signal at the foot of the signal at a speed not exceeding 15 kmph.',
  'If absence of proceed hand signal, LP shall stop the train (AS No 16 I.20 of 14.06.24).',
]

type NotPreWarnedItem =
  | { text: string }
  | { text: string; letters: string[] }

const notPreWarned: NotPreWarnedItem[] = [
  { text: 'The train shall be brought to a stand at the foot of the signal.' },
  {
    text: 'Train can be admitted in three ways:',
    letters: [
      'By taking ‗off‘ calling on signal where provided, or',
      'By authorizing LP over signal post telephone under special instructions where provided (Not available in SCR), or',
      'By issuing written authority T/369(3b) only after ensuring correct setting, clamping and padlocking of points over the route.',
    ],
  },
  { text: 'All the relevant columns of T/369(3b) are to be carefully filled in.' },
  {
    text: 'LP on receipt of T/369(3b) to pass signal at ‗ON‘ with a speed not exceeding 15 kmph + PHS at the foot of the signal duly ensuring that nominated line is free for an adequate distance beyond the place where train is required to come to a stop.',
  },
  {
    text: 'At class ‗C‘ station, FSS is also LSS. So when FSS/LSS is defective, PLCT shall be issued after obtaining line clear from SM of station in advance.',
  },
]

const stuckOff = [
  'SR 3.69.9 for approach stop signal (AS No 17 I.17 of 14.06.24).',
  'SM shall attempt to put it back ―ON‖ by operating a panel and immediately report to S&T staff.',
  'If unable to do so, inform rear SM, SCOR.',
  'Make an entry in S&T failure register.',
  'Light of the signal shall be extinguished by pasting paper on the glass or putting across mark.',
  'A competent railway servant shall be deputed to exhibit Stop hand signals at the foot of the stuck ―OFF‖ signal till it is brought back to ―ON‖.',
]

const HomeSignalPage = () => {
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
              <House className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem] leading-snug">
              Home Signal (G.R. 3.09)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((text, index) => (
              <div
                key={index}
                className="group flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.08 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="min-w-0 flex-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Conditions for Taking Off Home Signal (G.R./S.R. 3.40)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {conditions.map((item, index) => (
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

                {'arrows' in item && item.arrows ? (
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

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Reception Signal (Home) Defective (G.R. & S.R. 3.69)
            </h2>
          </header>

          <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-9">
            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                When LP has been advised (pre-warned):
              </h3>
              <ul className="space-y-3">
                {preWarned.map((text) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                      ✓
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                When LP has not been advised (not pre-warned):
              </h3>
              <ul className="space-y-3">
                {notPreWarned.map((item) => (
                  <li
                    key={item.text}
                    className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <div className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                        →
                      </span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                    </div>

                    {'letters' in item && item.letters ? (
                      <ul className="mt-3 space-y-2.5 sm:pl-8">
                        {item.letters.map((letter) => (
                          <li
                            key={letter}
                            className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                          >
                            <span className="mt-0.5 inline-flex h-7 min-w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 text-xs font-bold text-amber-100/90 ring-1 ring-amber-400/30">
                              o
                            </span>
                            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{letter}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.42s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Signal Got Stuck Up in OFF Position in Station Limits (AS No 16 I.1, 5 & 6 of 14.06.24)
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {stuckOff.map((text) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              G.R. 4.44 Train Held Up at Home / FSS Signal
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              'When train is held up at home/FSS, Loco Pilot shall sound continuous whistle to warn guard.',
              'If apparent cause is not known, after 5 minutes, LP shall send Assistant Loco Pilot to proceed to the cabin or station to warn the station master.',
              'Assistant Loco Pilot proceeding to the station shall show stop hand signals towards the station.',
              'After 15 minutes, guard shall protect the train in rear irrespective of cause, as per GR 6.03.',
              'If in the meantime the signal is taken off or authority received by Loco Pilot, he shall sound continuous whistle to recall guard.',
              'Exchange hand signal with guard before starting the train.',
              'If train is without guard, these duties shall devolve on the Loco Pilot.',
              'During total interruption of communications, if train is held up at FSS, after 10 minutes the loco pilot shall send his Assistant to the station to warn the SM and immediately Guard shall protect in rear.',
            ].map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.6 + 0.03 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
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

export default HomeSignalPage
