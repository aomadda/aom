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

type NumPoint = { text: string; sub?: string[] }

const k1Points: NumPoint[] = [
  {
    text: "With audible alarm sounds when IBS passed at ‗ON‘. The alarm can be stopped by pressing acknowledgement button.",
  },
  {
    text: "Immediately SM must alert SM in advance and give time when it passed IBS at ‗ON‘.",
  },
  {
    text: 'In case train entered into occupied IB section then SM shall:',
    sub: [
      'Advise gateman to stop & inform LP & guard',
      'Inform TPC when handled by electric loco to switch off OHE power supply and inform through emergency socket',
      'Advise SM in advance to issue Caution Order to train coming on the other line to inform the LP of the train',
      'In case train entered unoccupied IB section, SM shall take action as per point No.2 above.',
      'In both circumstances, on complete arrival of train, the SM shall give clearance under exchange of private numbers, duly making entries in TSR / Station Diary in red ink at both stations.',
      'The indication disappears after normal restoration by using PB-1 and PB-3 at the other end.',
      'Till such time, no train shall be allowed to enter the section.',
    ],
  },
]

const k2Points = [
  'K2 indicator appears with audible alarm when train passes LSS in OFF position and enters A/C section.',
  'Indications disappear and audible alarm stops as LSS knob is put back to normal.',
]

const k3Points = [
  "K3 indicator appears with audible alarm as train passes IBS in ‗off‘ position and enters ‗IB‘ section.",
  'The indication disappears and audible alarm stops as IBS knob is normalized.',
]

const k4Points = [
  'K4 indicator appears and audible alarm sounds whenever the normal / clear aspect bulb of IBS / IB distant signal bulb fuses or power supply to IB fails.',
  'Pressing acknowledgement button stops the alarm.',
  'Indication will disappear after the replacement of fused bulb or resumption of power supply.',
]

const analogAxle = [
  "PB-1: To reset A/C when IB is passed at ‗ON‘",
  'PB-2: Reset A/C due to failure or improper counting',
  'PB-3: Give cooperation to station in rear',
  'PB-1 or PB-2 used with cooperation of station ahead. This cooperation is given by pressing PB-3 and indicated by white light near PB-1 or PB-2 buttons',
]

const digitalAxleBullets = [
  "PB-1: To permit LSS of rear station to be taken ‗off‘ when IB passed at ‗ON‘",
  'PB-3: Give cooperation to station in rear',
  'Reset button: To reset axle counter due to failure or improper counting',
]

const digitalAxlePoints = [
  'PB-1 is used only with cooperation after pressing PB-3; white light appears near PB-1 button.',
  'When reset is initiated, digital A/C of rear section enters into preparatory reset mode. The first train dealt on written authority.',
  'On clearing the section on preparatory reset, if A/C shows clear indication, all subsequent trains dealt normally.',
  'If it is showing continuously occupied, the A/C is treated as defective.',
]

const loopLineReset = [
  'When it has become necessary to reset the axle counter, the SM has to call for one operating/S&T staff.',
  'SM on duty shall physically verify the clearance of line for which axle counter is being reset.',
  'Then press the push button provided inside the plunger box which is provided on the platform/line/cabin.',
  "A ‗YELLOW‘ indication will appear in the reset box on the panel.",
  "On observing this, the SM on duty and the operating/S&T staff deputed shall simultaneously press the button in the plunger box and the push button reset key provided in the reset Panel in the SM‘s office.",
  'Before giving cooperation, the operating/S&T staff shall ensure that the line is free.',
  "Whenever the axle counter is reset, the ‗RED‘ indication will change to ‗GREEN‘ and the counter will register next higher number. Entries shall be made in the relevant registers.",
]

const digitalIbsBpac = [
  'The SM on duty shall cross check the same with the other end SM on duty and advise him to reset the apparatus under exchange of Private Number for section clearance, following the procedure as under:',
  "Insert SM‘s reset key, turn right and keep pressed.",
  'Press reset push button.',
  "Release both SM‘s key and reset button.",
  "Turn left and remove SM‘s key and reset key and keep in safe custody.",
  'Similar operation is to be carried out at the adjacent station independently.',
  'Reset counter number increases by one – SM on duty has to enter number in the register provided for this purpose with all details.',
  'After application of reset at both ends, the system will not show clear indication but enters into preparatory mode.',
  'The preparatory reset indication appears on the reset box.',
  "In case the other end SM does not reset, the ‗occupied‘ indication continues. In such a situation, the SM at the other station shall be reminded to do reset operation so that the system enters into preparatory reset mode.",
  'The first train is to be dealt on written authority PLCT .when the system is in preparatory reset mode.',
]

const analogIbsReset = [
  "Wherever the axle counter indication does not resume 'GREEN' even after the train has cleared IBS section, the SM on duty must inform the on duty SM at the other end and ascertain the clearance of the train.",
  'If this is confirmed by bell code of signals, a RED ink entry must be made supported by exchanging of Private Number in the Train Register.',
  'He must then notify the particulars of train time when the train has cleared the section in order to normalize the axle counter.',
  'On receipt of confirmation from the SM on duty at the station in advance as to the train having cleared into that station complete, shall request on duty SM of that station to operate PB-3 for co-operation.',
  "On observing the indication for co-operation, insert SM‘s reset key PB-2, turn right and keep pressed.",
  'This operation is recorded in the numerical counter attached to PB-2 button.',
  'The particulars of operation and the progressive numbers appearing in the numerical counter must be recorded in RED ink in the Train Signal Register and the Counter Registers.',
]

function NumberedBlock({ items }: { items: (string | NumPoint)[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => {
        const text = typeof item === 'string' ? item : item.text
        const sub = typeof item === 'string' ? undefined : item.sub
        return (
          <li
            key={`${index}-${text.slice(0, 40)}`}
            className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          >
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                {index + 1}
              </span>
              <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
            </div>
            {sub ? (
              <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
                {sub.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{s}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

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

            <section className="space-y-5">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Indications and Re-setting Buttons at a Station Where IB Signal Is Operated (S.R.
                14.14)
              </h3>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-amber-200">K1 Indicator</h4>
                <NumberedBlock items={k1Points} />
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-amber-200">K2 Indicator</h4>
                <NumberedBlock items={k2Points} />
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-amber-200">K3 Indicator</h4>
                <NumberedBlock items={k3Points} />
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-amber-200">K4 Indicator</h4>
                <NumberedBlock items={k4Points} />
              </div>
            </section>

            <section className="space-y-5">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Resetting Axle Counter (S.R. 14.13)
              </h3>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-amber-200">I. Analog Axle Counters</h4>
                <NumberedBlock items={analogAxle} />
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-amber-200">
                  II. Resetting Digital Axle Counter
                </h4>
                <ul className="space-y-2">
                  {digitalAxleBullets.map((text) => (
                    <li
                      key={text}
                      className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
                    >
                      <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                    </li>
                  ))}
                </ul>
                <NumberedBlock items={digitalAxlePoints} />
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Resetting Button for Axle Counters Provided for Loop Line
              </h3>
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                When the axle counter equipment shows occupied indication even though the concerned
                line is clear of any obstruction, it indicates that the axle counter equipment has
                failed.
              </p>
              <NumberedBlock items={loopLineReset} />
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Reset Operation on Digital Axle Counters Provided for IBS and BPAC
              </h3>
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                The resetting operation shall be resorted to only when there is ‗occupied‘ indication
                even though the section is clear.
              </p>
              <NumberedBlock items={digitalIbsBpac} />
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Reset of Analog Axle Counter Provided for IBS
              </h3>
              <ul className="space-y-2.5">
                {analogIbsReset.map((text) => (
                  <li
                    key={text}
                    className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
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
