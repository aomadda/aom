'use client'

import React from 'react'
import Link from 'next/link'
import { UserRoundCog } from 'lucide-react'

const points = [
  'Means the person on duty who is for the time being responsible for the working of the traffic within station limits and includes any person who is for the time being in independent charge of the working of any signals and responsible for the working of trains under the system of working in force. (G.R. 1.02(53))',
]

const beforeTakingOver = [
  'Take adequate rest and report to office in time as per the roster in neat uniform and badge.',
  'Ensure valid Competency certificate and updated G&SR is possessed with you and produce on demand by any higher officials.',
  'Ensure acknowledgement in the assurance register is available.',
  'Ensure that Periodical medical examination is not due.',
  'Cross check various counters with the concerned registers/TSR.',
  'Check the columns of station diary to see the remarks of the outgoing SM on duty and acknowledge by taking over charge.',
  'Note the position of various S&T gears/equipments, whether they are in working order and their seals intact.',
  'SM who granted line clear or obtained line clear shall remain on duty till train out of block section is received/given and acknowledged.',
  'Condition of the block section whether occupied or not; if occupied, remarks to be passed in TSR/station diary to that effect.',
  'Note the number of Caution orders in force in all the directions.',
  'Take position of various lines in the yard; if occupied, whether securing as per SR 5.23 has been done or not and remarks passed in TSR/diary.',
  'Whether all the essential equipments are available as per SWR or not.',
  'Condition of the weather and if patrolling is in force, name and time of departure/arrival of the patrolmen at the station.',
  'Entry of name and time to be made in the beat book as per the patrol chart.',
  'If patrolman does not turn up beyond 15 minutes after his scheduled arrival, issuing Caution order to observe 40 kmph.',
  'Whether any specific orders are given by the officers/SCOR to be followed.',
  'Acquaint thoroughly with the working of the station and SWR.',
  'Acquaint thoroughly with the latest amendment slips/JPOs and safety literature.',
  'Note the staff available in the shift and whether they are in sober condition.',
  'Take over charge by signing in TSR/Station diary and attendance register.',
]

const whileOnDuty = [
  'Be courteous and helpful to the passengers.',
  'Ensure that the station and its surroundings are kept neat and tidy.',
  'Properly respond to the SM of both ends and SCOR when called and obey the orders issued by the SCOR/Officers.',
  'Test the block Instrument and record the results in TSR.',
  'Satisfy all the conditions for granting line clear when asked.',
  'Before granting line clear, closure of non-interlocked gate has to be ensured.',
  'After line clear is asked, nominate the line of reception and set the point correctly.',
  'If it is not setting correctly, depute pointsman to ensure no obstruction is available between the stock and tongue rail.',
  'Further, if it is not setting, receive the train on other free lines available for which points are set correctly.',
  'If no line is vacant, set the points using crank handle and padlocking and issue of paper authorities for reception.',
  'Whenever any failure in S&T gear, intimate to S&T officials immediately and make entries in the failure register.',
  'Inform the gateman of interlocked gates in the station to close and transmit key.',
  'After receiving train entering block section signal, inform the interlocked gates.',
  'Seek permission from the SCOR as to send the train further or to receive and keep for crossing/precedence.',
  'If train is going further, inform the non-interlocked gates and obtain line clear.',
  'On arrival, ensure the train has arrived complete as per SR 14.10.',
  'Put back the reception signal and immediately alter the points in rear on double and single line and in front on single line as per GR 3.38.',
  'Close the block section and transmit key to gateman of interlocked gate at station.',
  'If route is held up, cancel the route normally and if not, adopt calling on cancellation procedure.',
  'If it is a run-through train, depute Pointman to show all right signal from offside and SM exhibit from station side as per GR & SR 4.42.',
  'If any danger is seen in the train, take suitable action as per SR 4.29 and JPOs.',
  'For dispatching the train, set the points on the route correctly, take off advance starter and then starter.',
  'After train enters the block section, intimate the other SM by signal and if any interlocked gates available in section, intimate them.',
  'On reaching the next station, receive train out of block section and ensure block instrument has been brought to line closed position.',
  'Normally all the points shall be set for straight line.',
  'In case while granting line clear, the points must be set to vacant line, and if all lines are occupied – set to line occupied by goods train and if all the lines are occupied by passenger trains then set the point to line where engine is facing.',
  'Receive Caution order messages given by the Engineering/S&T/Mechanical/Electrical Inspectors, note the same in caution order register and paste the message in the message book duly giving the serial number.',
  'It is the responsibility of SM to ensure all the LP/Guards of the trains entering that block section are advised of the caution order.',
  'Inform the message to notice stations and SCOR and obtain their PN and acknowledgement.',
  'Arrange to advise LP/Guard until the Notice station issues the caution order.',
  'Arrange to bring forward all the existing Caution Order in geographical order every Monday at 00.00 hrs.',
  'If any shunting has to take place, ensure all the stipulated rules are observed correctly SR 5.13 to SR 5.19.',
  'If patrolling is in force, arrange to see that patrolmen are following the patrol chart and patrolman having all the equipment with him and thoroughly acquaint with the rules.',
  'If any unusual is occurring, immediately inform SS/SCOR/TI and take necessary action before their arrival.',
  'Whenever S&T/Electrical/Engineering staff are attending the failure, suitable disconnection notice has to be ensured and before accepting reconnection, test the disconnected gear.',
  'If any train has to be passed during disconnection/Reconnection, it has to be done by piloting.',
  'In case of line block, ensure all the rules stipulated in SR 15.06 are carried out.',
  'In case of accidents, take proper action as per the situation tactfully and inform all the officials and doctors available in the disaster management board.',
  'In case any message received from the LP/Guard, convey those to the SCOR immediately and take necessary action.',
  'In case LP/Guard requests for pushing back his train due to emergency, act as per the provision given in GR & SR 4.12.',
  'In case LP/Guard requests for Relief Engine, follow the procedure laid down in GR & SR 6.02.6.',
  'Entries pertaining to trains and signals exchanged on the block instruments to be written in the TSR.',
  'Any cancellation is done, suitable entries to be done in registers.',
  'Perform all the commercial duties if no commercial staff posted.',
  'Test the points and signals whether working or not.',
  'If it is required to form trains, shunting/marshalling and precautions for them taken as laid down in SWR.',
  'Maintain all the registers available at the station.',
]

const handingOver = [
  'Complete all the entries in the station diary/TSR.',
  'Wait till the SM takes over charge.',
  'After SM takes over charge, the SM shall hand over charge and sign off.',
  'SM has to continue his duty till his reliever comes and takes over charge.',
  'Be available and report for duty whenever required in case of emergency apart from the roster.',
]

const guidelines = [
  {
    title: 'Identify Station Section and Limits:',
    items: ['Know the boundaries and section limits of your station.'],
  },
  {
    title: 'See Panel and Identify/Note:',
    items: [
      'Direction of trains, names of lines, various signals, their locations and numbers.',
    ],
  },
  {
    title: 'Read SWR and Note:',
    items: [
      'Names and codes of adjacent stations, distance from your station, running time of goods and passenger trains (WTT), halt stations, IB signals (if available).',
    ],
  },
  {
    title: 'Understand Working of Panel and Block Instruments:',
    items: [
      'Continuously watch on-duty SM performing, covering all the shift duties available at the station.',
    ],
  },
  {
    title: 'Understand Location and Use of Keys:',
    items: [
      'Relay room key, crank handle key, KL point key extraction, padlock keys, and their boxes and seals.',
      'Try to remove at least once and make entry in their registers as testing.',
    ],
  },
  {
    title: 'Note Number and Type of Gates:',
    items: [
      'Including their KM - non-interlocked and interlocked connected to the station.',
      "Learn the procedure of working these gates from Appendix ‗A‘ of SWR.",
    ],
  },
  {
    title: 'Note Special Precautions Due to Gradients:',
    items: [
      'Observe and understand any special precautions to be observed at the station due to gradients.',
    ],
  },
  {
    title: 'Prepare a Train Timetable:',
    items: [
      'Cover timings of trains with columns separately for UP and DOWN trains.',
      'Try to remember the timings.',
    ],
    showTimetable: true,
  },
  {
    title: 'Personally Visit Points and Gates:',
    items: [
      'Go to every point and gate within station section.',
      'Know the procedure for cranking these points in case of failure; if possible, try to crank handle at least one point.',
    ],
  },
  {
    title: 'Check Essential Equipment:',
    items: [
      "Ensure all essential equipment mentioned in Appendix ‗E‘ of SWR is available.",
      'Learn when and how to use them.',
    ],
  },
  {
    title: 'Read SWR and Note Important Items.',
    items: [],
  },
  {
    title: 'Know About Electrical Supply System:',
    items: [
      'Generators, IPS and its indication, rotary switches in case of failure, isolators in case of electrified section.',
    ],
  },
  {
    title: 'Go Through All Registers Available at the Station:',
    romanItems: [
      { label: 'i.', text: 'Attendance register – write your name, designation, and sign daily.' },
      {
        label: 'ii.',
        text: 'PLCT – T/A, B, C, D.1425 Up and Down directions separately.',
      },
      {
        label: 'iii.',
        text: 'Normal authorities – T.369(3b), T.806, T.409, T.1525, T/A.1525.',
      },
      {
        label: 'iv.',
        text: 'Abnormal authorities (T/A.602, T/D.602, etc.).',
      },
      {
        label: 'v.',
        text: 'Authorities used during Blocks – T.462, T/A.462, T.465, T/A.465, T.1708, T/A.1708 (electrified section).',
      },
      {
        label: 'vi.',
        text: 'TSR – try to make entries for the trains passed during your learning period, also see 16.00 time signal, signing on/off duties, PLCT working messages, safety slogans, various counter register numbers, testing of block instruments, etc.',
      },
      { label: 'vii.', text: 'Station Diary.' },
      {
        label: 'viii.',
        text: 'Caution Order Message books for Up and Down direction and CO registers.',
        note: 'Know procedure for pasting imposition and cancellation messages, making entries in the register, and brought forwarding them every Monday.',
      },
      {
        label: 'ix.',
        text: 'Disconnection and reconnection notices – how they are issued and pasted in the book and entries in the register.',
      },
      {
        label: 'x.',
        text: 'Relay room and Block key register – entries every time keys are taken and disconnection notice pertaining to them.',
      },
      {
        label: 'xi.',
        text: 'S&T failure register – entries of the failures and summary at the end of every month and failure memo book, obtaining signature of ESM/SI.',
      },
      { label: 'xii.', text: 'Stabling load register.' },
      {
        label: 'xiii.',
        text: 'Various counter registers – Crank handle, Route cancellation, Calling on cancellation, Relay room, Line clear cancellation, etc.',
      },
    ],
  },
  {
    title: 'For Big Stations:',
    items: [
      'Note engine links, rake links, normal shunting movements like backing of rakes, pit line occupation, berthing of trains on platforms, occupation charts of platform and pit line.',
    ],
  },
  {
    title: 'Note Down Emergency Contact Numbers:',
    items: [
      'SM, TI, AOM, DOM, ESM, SI, PWI, IOW, AEN, JE/SE (Electrical), CCI, ACM, DCM, TXR, etc.',
    ],
  },
  {
    title: 'If Commercial Duties Are Available:',
    items: [
      'Learn the working of issue of tickets and registers pertaining to them.',
      'Also, sealing of cash bag and depositing in the chest.',
    ],
  },
]

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${index}-${text.slice(0, 40)}`}
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
  )
}

function CircleList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">o</span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

const StationMasterPage = () => {
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
              <UserRoundCog className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Station Master
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
                  <UserRoundCog className="h-5 w-5" strokeWidth={2} />
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
              Responsibility and Functions of Station Staff in Working of Trains
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="mb-4 text-base font-semibold text-amber-100 sm:text-lg">
                Before Taking Over Charge
              </h3>
              <NumberedList items={beforeTakingOver} />
            </section>

            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="mb-4 text-base font-semibold text-amber-100 sm:text-lg">
                While On Duty
              </h3>
              <NumberedList items={whileOnDuty} />
            </section>

            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="mb-4 text-base font-semibold text-amber-100 sm:text-lg">
                Handing Over Charge
              </h3>
              <NumberedList items={handingOver} />
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
              GUIDELINES TO STATION MASTER (SM) AFTER GOING TO STATION
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {guidelines.map((item, index) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] font-semibold leading-[1.75] text-amber-100/90 sm:text-base">
                    {item.title}
                  </p>
                </div>

                {item.items && item.items.length > 0 ? (
                  <CircleList items={item.items} />
                ) : null}

                {'showTimetable' in item && item.showTimetable ? (
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
                    <table className="w-full min-w-[640px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-amber-500/20 bg-slate-950/50">
                          {[
                            'Train No (UP)',
                            'Departure from Important Station',
                            'Station Timing (Skip Timing)',
                            'Arrival at Important Station',
                            'Arrival',
                            'Departure',
                          ].map((header) => (
                            <th
                              key={`up-${header}`}
                              className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-700/50 bg-slate-900/30">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <td
                              key={`up-empty-${i}`}
                              className="h-10 border-r border-slate-700/40 px-3 py-3 last:border-r-0"
                            />
                          ))}
                        </tr>
                        <tr className="border-b border-amber-500/20 bg-slate-950/50">
                          {[
                            'Train No (DOWN)',
                            'Departure from Important Station',
                            'Station Timing (Skip Timing)',
                            'Arrival at Important Station',
                            'Arrival',
                            'Departure',
                          ].map((header) => (
                            <th
                              key={`dn-${header}`}
                              className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                        <tr className="bg-slate-900/30">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <td
                              key={`dn-empty-${i}`}
                              className="h-10 border-r border-slate-700/40 px-3 py-3 last:border-r-0"
                            />
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {'romanItems' in item && item.romanItems ? (
                  <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
                    {item.romanItems.map((sub) => (
                      <li key={sub.label} className="space-y-1">
                        <div className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">
                            {sub.label}
                          </span>
                          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                            {sub.text}
                          </p>
                        </div>
                        {'note' in sub && sub.note ? (
                          <p className="ml-6 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                            {sub.note}
                          </p>
                        ) : null}
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

export default StationMasterPage
