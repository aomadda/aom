'use client'

import React from 'react'
import Link from 'next/link'
import { Signal } from 'lucide-react'

const fourTypes = [
  { roman: 'I', title: 'FIXED SIGNALS' },
  { roman: 'II', title: 'HAND SIGNALS' },
  { roman: 'III', title: 'DETONATING SIGNALS' },
  { roman: 'IV', title: 'FLARE (WARNING SIGNALS)' },
]

const stopSignalSubtypes = [
  { letter: 'a', text: 'Reception Signals = Outer, Home, Routing signals' },
  { letter: 'b', text: 'Despatch Signals = Starter, Advanced starter signals' },
  { letter: 'c', text: 'Other Signals = Gate, IB, Automatic signals' },
]

const handSignals = [
  { roman: 'i', text: 'Hand signal flags' },
  { roman: 'ii', text: 'Hand signal lamp' },
  { roman: 'iii', text: 'Bare hands' },
]

const stopAndExamine = [
  'When SM observes anything unusual (other than absence of tail lamp or tail board) on a train during its passage through the station, such as goods falling off, vehicle on fire, broken axle or coupling etc., he shall try to stop the train. If he failed to stop the train, stop & examine signal (six pause one on block instrument) may be sent to SM in advance.',
  'SM to intimate the nature of irregularity.',
  'SM in advance acknowledges by giving six pause one and on arrival, even a run-through train out of course and take remedial action.',
  'After ensuring all is clear, send ―train out of block section‖ to SM in rear.',
  'SM of the station who notices or suspects it would have caused damage or obstruction to block section in rear, inform the SM in rear about irregularity.',
  'Both SMs to issue CO for trains entering the block section until it is confirmed all is right.',
  'On double line, CO will be issued to the LPs proceeding on the adjacent line.',
]

const cancelLastIntro =
  "The ‗Cancel last signal‘ cancels the last signal given from the block station from which it is sent. Where ‗Is line clear‘ signal has been forwarded and it is afterwards found that the train to which it referred has to be detained for shunting or other purposes, or has to return to the block station from which that signal was sent, the ‗Cancelling signal‘ shall be sent to the block station in advance, so that the previous signal may be cancelled."

const cancelBeforeEntry = [
  'SM of X (sending station) shall ask consent for cancellation.',
  'Explain the circumstances supported by a Private Number.',
  'SM of Y (receiving station) will give consent and repeat the PN.',
]

const daidoCancel = [
  'SM X shall turn cancellation switch S-1 for cancellation from Normal to Reverse.',
  "Wait for 120 seconds until ‗Time Release‘ Indicator shows \"Free\".",
  'Concerned counter registers next higher number.',
  "Restore S-1 to normal and send ‗Cancel last signal.‘",
  'Keep PB 1 and PB 2 pressed for 5 seconds on the last beat.',
  'SM Y will turn the block handle to line closed position.',
  'SM Y will give cancel last signal and keep pressing PB1 and PB2.',
  'SM X will turn the block handle to line closed position.',
]

const podanurCancel = [
  "SM X shall operate the ‗Cancellation‘ button along with Bell Code Button (BCB).",
  'Counter registers next higher number.',
  "‗Time release‘ Free indication appears after 90 seconds.",
  "SM X gives 'Cancel last signal' bell, presses ‗Line closed‘ button and BCB.",
  "At the end of the last beat, SM Y will co-operate by pressing ‗Line closed‘ button and Bell Code Button till ‗Line closed‘ indication appears.",
  "‗Line closed‘ indication appears in both the block instruments.",
  "Acknowledge ‗Cancel last signal‘ bell by SM Y.",
]

const ufsbiCancel = [
  'SM X shall press Cancel Co-op button and SM Y shall get Co-op to light up, then SM Y shall press Bell and Cancel button at Y Station. Counter registers next higher number. On getting Bell code, SM X will release Cancel Co-op button.',
  'At Station X, TRAIN GOING TO INDICATOR starts flashing and at Station Y, TRAIN COMING INDICATOR flashes green and CANCEL Indicator flashes yellow.',
  'After 120 seconds, flashing will stop and at both stations, LINE CLOSED indicator lights up.',
]

const sgeCancel = [
  "SM X shall give ‗Cancel last signal‘.",
  "SM Y will acknowledge ‗Cancel last signal‘.",
  "Holding the bell plunger pressed during last beat, SM Y turns the operating handle to ‗Line Closed‘ position.",
  "TCF dial displays ‗Line Closed‘ indication at Y.",
  "TGT dial displays ‗Line Closed‘ indication at X.",
]

const SignalsPage = () => {
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
              <Signal className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Signals
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-6 px-5 py-8 sm:px-10 sm:py-10">
            <p className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
              In the Indian Railways, there are four types of signals
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {fourTypes.map((item, index) => (
                <li
                  key={item.roman}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  style={{ animation: `fade-up 0.55s ease-out ${0.08 * (index + 1)}s both` }}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.roman}
                  </span>
                  <span className="text-[15px] font-semibold leading-snug text-slate-200 sm:text-base">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              FIXED SIGNALS
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3 text-[15px] leading-relaxed text-slate-300 sm:text-base">
                <span className="shrink-0 font-bold text-amber-200">i.</span>
                <span>Permissive Signals = Warner, Distant signals</span>
              </p>
            </div>

            <section className="space-y-3">
              <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <p className="flex gap-3 text-[15px] leading-relaxed text-slate-300 sm:text-base">
                  <span className="shrink-0 font-bold text-amber-200">ii.</span>
                  <span>Stop Signals = Reception, Despatch, Other Signals</span>
                </p>
              </div>
              <ul className="ml-2 space-y-3 border-l border-amber-500/25 pl-4 sm:ml-4 sm:pl-5">
                {stopSignalSubtypes.map((item) => (
                  <li
                    key={item.letter}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-950/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {item.letter}
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3 text-[15px] leading-relaxed text-slate-300 sm:text-base">
                <span className="shrink-0 font-bold text-amber-200">iii.</span>
                <span>Subsidiary Signals = Calling On, Shunt, Co-acting, Repeating signals</span>
              </p>
            </div>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.3s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              HAND SIGNALS
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {handSignals.map((item) => (
              <li
                key={item.roman}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
              >
                <span className="mt-0.5 inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {item.roman}
                </span>
                <p className="pt-0.5 text-[15px] leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <article
            className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
            style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
          >
            <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
                DETONATING SIGNALS
              </h2>
            </header>
            <div className="px-5 py-6 sm:px-6">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-center text-[15px] leading-relaxed text-slate-300 ring-1 ring-white/4 sm:text-base">
                Detonators
              </p>
            </div>
          </article>

          <article
            className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
            style={{ animation: 'fade-up 0.55s ease-out 0.45s both' }}
          >
            <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
                FLARE (WARNING) SIGNALS
              </h2>
            </header>
            <div className="px-5 py-6 sm:px-6">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-center text-[15px] leading-relaxed text-slate-300 ring-1 ring-white/4 sm:text-base">
                Red flag, Red flashing lamp
              </p>
            </div>
          </article>

          <article
            className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
            style={{ animation: 'fade-up 0.55s ease-out 0.5s both' }}
          >
            <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
                STOP AND EXAMINE SIGNAL (BWM Part A-5.6, B-5.7, C-5.8)
              </h2>
            </header>
            <ol className="space-y-3 px-5 py-6 sm:px-6">
              {stopAndExamine.map((text, index) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                >
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </article>

          <article
            className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
            style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
          >
            <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
                Cancel Last Signal
              </h2>
            </header>

            <div className="space-y-4 px-5 py-6 sm:px-6">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {cancelLastIntro}
              </p>

              <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  a) Cancellation of Line Clear Before the Train Enters Block Section
                </h3>
                <ol className="space-y-3">
                  {cancelBeforeEntry.map((text, index) => (
                    <li
                      key={text}
                      className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5"
                    >
                      <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                        {text}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>

              {[
                {
                  title: 'i) Daido Tokenless Handle Type Block Instrument',
                  items: daidoCancel,
                },
                {
                  title: 'ii) Podanur/Kyosan Push Button Block Instrument',
                  items: podanurCancel,
                },
                {
                  title: 'iii) UFSBI & SSBPAC(D) Single Line',
                  items: ufsbiCancel,
                },
                {
                  title: 'iv) Double Line SGE Block Instrument',
                  items: sgeCancel,
                },
              ].map((section) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
                >
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    {section.title}
                  </h3>
                  <ol className="space-y-3">
                    {section.items.map((text, index) => (
                      <li
                        key={text}
                        className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5"
                      >
                        <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                          {index + 1}
                        </span>
                        <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </article>
        </div>

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

export default SignalsPage
