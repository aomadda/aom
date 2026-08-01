'use client'

import React from 'react'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

const points = ['Despatch Signals = Starter, Advanced starter signals']

const generalInfo = [
  'G.R. 3.36 & SR there under: A signal which has been taken ‗off‘ for passage of a train shall not be placed to ‗ON‘ until the whole of the train which it controls has passed it, except in case of emergency to avert an accident.',
  'Where starter and advanced starter taken ‗off‘ for departing trains (i.e., trains starting from station after coming to stop) are required to be put back for the purpose of movement of another train for precedence or crossing, shall be put back to ‗ON‘ position and thereafter the Loco Pilot of that train shall be advised by on-duty Station Master through a secured means of communication (specified under special instructions) or through a written memo and his acknowledgement to the effect that the said signals have been replaced to ‗ON‘ and that the Loco Pilot shall not start.',
  'Till such time, points on the route set shall not be altered except to avert an accident.',
]

const receptionPassedOn = [
  'Whenever a train passes a reception signal at ‗ON‘, partly/completely without proper authority and comes to a stop short of usual berthing place, all the gears that are detected by that signal shall be treated as non-interlocked.',
  'Before authorising the train to restart, the Station Master shall ensure that all the points in the route are set correctly, clamped and padlocked, and any LC gate in between is closed under exchange of PN.',
  'The Station Master after satisfying himself that everything is safe, shall issue a ―restart memo‖ countersigned by guard and T/369(3b) to the Loco Pilot authorising him to restart and draw the train up to next stop signal or where the train is required to stand.',
  'A competent Railway servant in uniform shall be deputed at the first facing point, for the train which is going to encounter, for exhibiting PHS.',
]

const starterIntermediate = [
  'When leaving a station, if a train is brought to a stand after passing, partly or completely, the starter/intermediate starter at ‗ON‘:',
  'The Station Master shall after satisfying himself that everything is safe (closure of LC gates & clamping and padlocking etc.) for the train to leave, issue a T/369(3b) plus restart memo countersigned by the Guard to LP.',
  'Exhibition of PHS at the foot of the signal.',
]

const advanceStarterLss = [
  'LP stopped after passing advance starter or LSS partly.',
  'The Station Master shall after satisfying himself that everything is safe (closure of LC gates & clamping and padlocking if any etc.) for the train to leave.',
  'The Station Master shall authorise LP to restart by issuing a Combined Authority i.e., PLCT (T/C or T/D 1425) plus restart memo counter signed by guard.',
]

const DespatchSignalsPage = () => {
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
              <LogOut className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Despatch Signals
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
                  <LogOut className="h-5 w-5" strokeWidth={2} />
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
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              General Information
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {generalInfo.map((text) => (
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
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.28s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              SR 3.69.7: Procedure for Dealing a Train That Has Passed Reception Signal at “ON” (AS NO 16 I.22 of 14.06.24)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {receptionPassedOn.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ol>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.36s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              SR 3.70.2: Procedure for Dealing a Train Brought to a Stand That Has Passed the Departure Signal at „ON‟
            </h2>
          </header>

          <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-9">
            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Starter or Intermediate Starter (AS NO 16 I.24 of 14.06.24)
              </h3>
              <ol className="space-y-3">
                {starterIntermediate.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Advance Starter/LSS:
              </h3>
              <ol className="space-y-3">
                {advanceStarterLss.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Departure of a Train from Non-Signalled Line (G.R. 5.11/12)
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              'SM shall obtain Line Clear.',
              'All the relevant points shall be set and locked. (it should be second point)',
              'All the relevant points shall be set and locked.',
              'Authority in form T/511 shall be issued.',
              'Issue authority to proceed to the LP.',
              'If ATP is tangible, T/511 need not be issued to LP.',
              "If a line is provided with common departure signal in addition to ATP, a written permission for start (T.512) shall be given and common departure signal shall also be taken 'OFF'.",
            ].map((text, index) => (
              <li
                key={`${index}-${text}`}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.45 + 0.03 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
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

export default DespatchSignalsPage
