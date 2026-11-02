'use client'

import React from 'react'
import { Spline } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

type NumPoint = { text: string; sub?: string[] }

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

const IntermediateBlockSignalDefectivePage = () => {
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
  return (
    <OperatingTopicPage
      title="IB Signal Defective (S.R. 3.75) (AS NO 16 I.35 & 37 of 14.06.24)"
      icon={Spline}
    >
          <div className="space-y-8">
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
    </OperatingTopicPage>
  )
}

export default IntermediateBlockSignalDefectivePage