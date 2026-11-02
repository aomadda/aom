'use client'

import React from 'react'
import Link from 'next/link'



const signalFailsToClear = [
  'Ensure that Station Master‘s key is in.',
  'Check all the buttons/knobs are in the required positions.',
  'Check the point position to see that the correct route is set and the track circuits on the route are showing white indication on the panel.',
  'Check whether the crank handle is IN.',
  'Ensure siding key IN and LC gate closed indication before clearing the signal.',
  'If signal lamp failure indication is flashing and audible warning is ringing, stop the warning bell by pressing the acknowledgement button.',
]

const dutiesLead =
  'If there is no fixed signal at a place where a fixed signal is ordinarily shown.'

const dutiesWhenDefective = [
  'If the light of a signal is not burning when it should.',
  'If a white light is shown in place of a colour light.',
  'If the aspect of a signal is misleading or imperfectly shown.',
  'If more than one aspect is displayed.',
  'No steady aspect of signal even after 60 seconds.',
  'Unable to take ―off‖ signal, even after fulfilling all conditions for taking ―off‖ signal.',
  'A signal stuck up in ―OFF‖ position.',
]

const dutiesArrows = [
  'SM shall attempt to put it back to ―ON‖ position by operating the panel.',
  'Report such defect to ESM/SI and copy to TI, DSTE, DSO, and SCOR.',
  'Make entry in the S&T failure register.',
  'If signal detects any points, such points shall be treated as non-interlocked as well as level crossing gate.',
  'SM shall personally ensure that nominated line is free for an adequate distance beyond the place where train is required to come to a stop and correct setting, clamping, and padlocking of points over the route, unless the train is dealt on calling-on signal.',
]

const sntStaffDuties = [
  'Issue disconnection notice to SM (T/351) after obtaining acknowledgement of SM, then carry out the works.',
  'After rectification, issue reconnection notice to SM (T/351).',
]

const DefectiveSignalsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Defective Signals (App XI-6, G.R/S.R. 3.68, 3.69 and 3.70)
            </h2>
          </header>

          <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-9">
            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Signal Fails to Clear
              </h3>
              <ul className="space-y-3">
                {signalFailsToClear.map((text) => (
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
                Duties of SM in Station Limits When Signal is Treated as Defective
              </h3>

              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {dutiesLead}
              </p>

              <ol className="space-y-3">
                {dutiesWhenDefective.map((text, index) => (
                  <li
                    key={text}
                    className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <div className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                    </div>

                    {index === dutiesWhenDefective.length - 1 ? (
                      <ul className="mt-3 space-y-2.5 sm:pl-12">
                        {dutiesArrows.map((arrow) => (
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
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                For S&T Staff to Attend Reported Failure.
              </h3>
              <ul className="space-y-3">
                {sntStaffDuties.map((text) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                      •
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
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

export default DefectiveSignalsPage
