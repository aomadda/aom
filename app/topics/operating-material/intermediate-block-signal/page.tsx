'use client'

import React from 'react'
import Link from 'next/link'
import { Spline } from 'lucide-react'

const numberedPoints = [
  {
    number: '1',
    text: 'Intermediate block signaling means an arrangement of signals on single line or double line or multiple line in which a long block section is split into two portions, each constituting a separate block section by providing an intermediate block post. A telephone is provided to contact the rear Station Master.',
  },
  {
    number: '2',
    text: 'The intermediate block post is a ‗C‘ class station on a single line or double line or multiple line, remotely controlled from the block station in rear.',
  },
  {
    number: '3',
    text: 'It is provided to increase section capacity, reduce detentions, reduce staff, and secure economy and efficiency in operations.',
  },
  {
    number: '4',
    text: 'On double line, by providing IB post, a lengthy block section is divided into Axle Counter section and IB section. First section from LSS to 400 m beyond IB shall be termed as Axle Counter section and second section from 400 m beyond IB to FSS of the next block section shall be termed as IB section.',
  },
  {
    number: '5',
    text: 'On single line, the first section shall be termed as ‗station controlled Intermediate block section‘ and the section between IB signal to FSS of block section ahead shall be termed as ‗block controlled Intermediate block section‘.',
  },
  {
    number: '6',
    text: 'Axle counters section is controlled by axle counters. One set of axle counters is provided in advance of LSS and another set is provided 400 m in advance of IB Home signal.',
  },
  {
    number: '7',
    text: 'LSS is interlocked with axle counter and IB signal is interlocked with block instrument.',
  },
]

const kIndications = [
  { code: 'K1', text: 'When train passes IB signal at ON.' },
  { code: 'K2', text: 'When train passes LSS in OFF position.' },
  { code: 'K3', text: 'When train passes IB signal at OFF position.' },
  { code: 'K4', text: 'Power fails or when bulb is fused.' },
]

const pbButtons = [
  { code: 'PB-1', text: 'To reset the axle counter when train passed IB signal at ON.' },
  { code: 'PB-2I/Reset button', text: 'To reset the axle counter due to failure or improper counting.' },
  { code: 'PB-3', text: 'To give co-operation to the station in rear.' },
]

const normalWorking = [
  { letter: 'a', text: 'Obtain line clear from advance station (two private numbers, one for LC and one for consent).' },
  { letter: 'b', text: 'Ensure axle counter section is free and take off LSS and IB signal.' },
  { letter: 'c', text: 'When train passes LSS, A/C indication shows occupied and K2 indication appears with buzzer and will be stopped when LSS knob or lever is normalized.' },
  { letter: 'd', text: 'When train passes IB signal (OFF), K3 indication appears with buzzer and it will be stopped when IB signal knob or lever is normalized and advance SM turns the handle of block instrument to TOL position of SGE B.I.' },
  { letter: 'e', text: 'In latest B.I UFSBI/SSBPAC, it automatically comes to TOL position with acknowledgement buttons along with buzzers.' },
  { letter: 'f', text: 'When train completely passes second axle counter (at 400 m from IB), section becomes free.' },
  { letter: 'g', text: 'Then obtain consent (1 private number) for second train and take off LSS.' },
  { letter: 'h', text: 'By the time second train reaches IB signal, first train may clear into advance station and SM will get Line clear (1 private number) to enter IB section.' },
  { letter: 'i', text: 'Rear SM can take off IB signal.' },
]

const smAwareBeforeDispatch = [
  'Suspend the IB working.',
  'Treat entire section as one block section.',
  'Obtain line clear from SM of advance block station.',
  'If any LC gate is interlocked with IB signal, it shall be treated as non-interlocked.',
  'Ensure closure of LC gate by exchange of PN with gateman, all particulars to be recorded in T/A or T/B 1425.',
  "Issue combined authority to Loco Pilot to pass LSS and IB stop signal at 'ON', i.e., PLCT T/C or T/D 1425.",
  'LP may proceed with normal speed.',
]

const lpFindsIbOn = [
  "LP shall stop the train before IB signal and contact SM of rear station on IB telephone.",
  "If block section is free and line clear is obtained, SM shall authorise the Loco Pilot to pass IB signal at 'ON' by giving PN obtained from advance SM, duly ensuring closure of LC gates if any, interlocked with such IB signal.",
  'Loco Pilot can pass the IB signal with normal speed.',
]

const telephoneOutOfOrder = [
  'After waiting for 5 minutes, LP shall pass the signal at ‗ON‘ and in case any LC gates are interlocked with IB signal, follow gate rules (G.R. 3.73).',
  'Proceed with a restricted speed of 15 kmph when view is clear and 8 kmph when view is not clear up to the FSS of next station, even if that signal and the intervening signals, if any, display ‗off‘ aspect. The Loco Pilot shall act upon the aspect of the FSS of the station in advance only after he has reached the FSS.',
  'When LP passes IB at ON, rear SM gets K1 indication with buzzer.',
  'Advise the advance SM particulars of train which passed IB at ON.',
  'In case any train is occupied in IB section, intimate LP through gatemen if any LC gates are available.',
  'By switching ―off‖ OHE through CTO TPC.',
  'By advance SM issuing caution order to LP of adjacent line trains.',
  'SM of rear shall ensure clearance of block section from advance SM.',
  'By exchanging private numbers and record the same by both SMs in TSR in red ink.',
  'The Loco Pilot must report the failure to the SM of the block section ahead.',
  'Compulsory red ink entries in TSR & station diary.',
]

const IntermediateBlockSignalPage = () => {
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
              <Spline className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-3xl md:text-[2.25rem] leading-snug">
              IB Signal (G.R./S.R. 3.75, S.R. 14.13, 14.14)
            </h1>
            <p className="mt-4 text-center text-base font-semibold text-amber-100/90 sm:text-lg">
              Double Line / Single Line
            </p>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            {numberedPoints.map((item, index) => (
              <div
                key={item.number}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {item.number}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
              </div>
            ))}

            <section className="space-y-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  8
                </span>
                <span>On SM panel, A/C indication, K1, K2, K3, K4 indications, and signal repeater indications are provided.</span>
              </p>
              <ul className="ml-2 space-y-3 border-l border-amber-500/25 pl-4 sm:ml-8 sm:pl-5">
                {kIndications.map((item) => (
                  <li
                    key={item.code}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-950/40 p-3.5 ring-1 ring-white/4 sm:p-4"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                      {item.code}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
                  </li>
                ))}
              </ul>
              <p className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
                In addition to these indications, a buzzer is also provided.
              </p>
            </section>

            <section className="space-y-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  9
                </span>
                <span>PB-1, PB-2, PB-3 (Analog), PB-I, Reset Buttons, PB-III (Digital) emergency release buttons are also provided.</span>
              </p>
              <ul className="ml-2 space-y-3 border-l border-amber-500/25 pl-4 sm:ml-8 sm:pl-5">
                {pbButtons.map((item) => (
                  <li
                    key={item.code}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-950/40 p-3.5 ring-1 ring-white/4 sm:p-4"
                  >
                    <span className="mt-0.5 inline-flex h-auto min-w-fit shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 px-2 py-1 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                      {item.code}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
                  </li>
                ))}
              </ul>
              <p className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
                For any above reasons to be reset, SM shall make an entry in concerned registers.
              </p>
            </section>

            <section className="space-y-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3 text-[15px] font-semibold leading-[1.75] text-amber-100 sm:text-base">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  10
                </span>
                <span>Normal working (Double Line):</span>
              </p>
              <ul className="ml-2 space-y-3 border-l border-amber-500/25 pl-4 sm:ml-8 sm:pl-5">
                {normalWorking.map((item) => (
                  <li
                    key={item.letter}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-950/40 p-3.5 ring-1 ring-white/4 sm:p-4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                      {item.letter}
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                11
              </span>
              <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                On single line (IB section), first the direction of traffic shall be established and then the line clear shall be obtained from the block section in advance as per the established direction of traffic. Only after establishing the direction of traffic, the train movement in the station controlled Intermediate block section shall be permitted.
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
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              IB Signal Defective (S.R. 3.75) (AS NO 16 I.35 & 37 of 14.06.24)
            </h2>
          </header>

          <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-9">
            <section className="space-y-3">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                When SM of rear is aware that the IB stop signal is defective or T.C/A.C failed or LSS failed or IB Distant failed or Block Instrument failed before dispatching a train:
              </p>
              <ol className="space-y-3">
                {smAwareBeforeDispatch.map((text, index) => (
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
                When Loco Pilot finds an IB signal at &apos;ON&apos;:
              </h3>
              <ul className="space-y-3">
                {lpFindsIbOn.map((text) => (
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

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                If the telephone is out of order (AS NO 16 I.36 of 14.06.24):
              </h3>
              <ul className="space-y-3">
                {telephoneOutOfOrder.map((text) => (
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

export default IntermediateBlockSignalPage
