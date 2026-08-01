'use client'

import React from 'react'
import Link from 'next/link'
import { LogIn } from 'lucide-react'

const points = ['Reception Signals = Outer, Home, Routing signals']

const testingIntro =
  'At interlocked stations with two cabins or one on either side or provided with central cabin where signal reversers are provided and taking OFF the reception and despatch signals controlled by means of control knobs in the SM‘s office and slot knob control in the cabin, the SM shall daily, during day time, when no train is due to arrive or leave the station, test the working of the reception signals in one direction for one line as for a stopping train.'

const testingProcedure = [
  'SM shall arrange taking off reception signal.',
  'SM shall put back his control knob and ensure signal gone back to ON.',
  'Follow the route cancellation procedure and record the same.',
  'Again, SM shall arrange taking off reception signal.',
  'Cabin SM shall put back signal knob to normal and ensure signal gone back to ON.',
  'Follow the route cancellation procedure and record the same.',
  'This procedure to be followed first day for UP direction and second day for down direction, duly continuing for each line. This procedure to be followed every day subsequently.',
  'Record the result in the station diary maintained in a station/cabin.',
]

const ReceptionSignalsPage = () => {
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
              <LogIn className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Reception Signals
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
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 via-amber-500/20 to-orange-600/25 text-amber-100 shadow-inner shadow-black/20 ring-1 ring-amber-400/35 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                  <LogIn className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="min-w-0 flex-1 pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
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
              Testing of Reception Signals (S.R. 3.36.3.1.1) (A.S-35)
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              {testingIntro}
            </p>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Procedure for Testing the Signal:
              </h3>
              <ul className="space-y-3">
                {testingProcedure.map((text) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                      ✓
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Reception of a Train on an Obstructed Line (G.R. 5.09)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              {
                type: 'text' as const,
                text: "Wherever possible, intimate Loco Pilot through the rear SM about reception onto obstructed line.",
              },
              {
                type: 'text' as const,
                text: "SM shall keep the reception signals at 'ON' and ensure that the signal/s are not taken 'OFF'.",
              },
              {
                type: 'text' as const,
                text: 'Ensure that all points over the route are correctly set and facing points locked.',
              },
              {
                type: 'nested' as const,
                intro:
                  "After stopping the train at the relevant stop signal, it may be received by authorizing the Loco Pilot to pass the stop signal at 'ON':",
                items: [
                  'By taking off the calling-on signal, if provided or',
                  'Through signal post telephone if provided in accordance with special instructions or',
                  'By delivering a written authority T/509 and piloting it.',
                ],
              },
              {
                type: 'text' as const,
                text: 'Train shall be stopped at facing points leading to the obstructed line until hand signalled forward by a competent railway servant.',
              },
              {
                type: 'text' as const,
                text: 'Stop hand signal shall be shown at a distance of 45 m from the obstruction.',
              },
              {
                type: 'text' as const,
                text: 'The Loco Pilot shall keep his train well under control and be prepared to stop short of an obstruction (not exceeding 15 kmph).',
              },
            ].map((rule, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.38 + 0.03 * (index + 1)}s both` }}
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
                          key={item}
                          className="flex gap-3 rounded-xl border border-slate-600/35 bg-slate-950/35 p-3.5 ring-1 ring-white/3 sm:p-4"
                        >
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                            
                          </span>
                          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Reception of a Train on a Non-Signalled Line
            </h2>
          </header>

          <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
              SM shall ensure that:
            </p>
            <ul className="space-y-3">
              {[
                { mark: '', text: 'The train shall be brought to a stand at FSS.' },
                {
                  mark: '',
                  text: 'The line is clear up to the trailing points or up to the place at which the train is required to come to a stand.',
                },
                { mark: '', text: 'All the points are correctly set and facing points locked.' },
                {
                  mark: '',
                  text: "SM shall authorize Loco Pilot to pass reception stop signal at 'ON' by issuing T/510 and pilot the train by competent railway servant in uniform.",
                },
                {
                  mark: '',
                  text: 'The Loco Pilot shall proceed cautiously and be prepared to stop short of any obstruction (not exceeding 15 kmph).',
                },
              ].map((item, index) => (
                <li
                  key={item.text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  style={{ animation: `fade-up 0.55s ease-out ${0.58 + 0.03 * (index + 1)}s both` }}
                >
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{item.mark}</span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ul>
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

export default ReceptionSignalsPage
