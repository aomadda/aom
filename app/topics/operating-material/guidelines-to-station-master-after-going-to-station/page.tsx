'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { ClipboardCheck } from 'lucide-react'

function CircleList({ items }: { items: string[] }) {
    return (
      <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
        {items.map((text) => (
          <li key={text} className="flex gap-2.5">
            <ListMark>o</ListMark>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ul>
    )
  }

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
        { label: 'i', text: 'Attendance register – write your name, designation, and sign daily.' },
        {
          label: 'ii',
          text: 'PLCT – T/A, B, C, D.1425 Up and Down directions separately.',
        },
        {
          label: 'iii',
          text: 'Normal authorities – T.369(3b), T.806, T.409, T.1525, T/A.1525.',
        },
        {
          label: 'iv',
          text: 'Abnormal authorities (T/A.602, T/D.602, etc.).',
        },
        {
          label: 'v',
          text: 'Authorities used during Blocks – T.462, T/A.462, T.465, T/A.465, T.1708, T/A.1708 (electrified section).',
        },
        {
          label: 'vi',
          text: 'TSR – try to make entries for the trains passed during your learning period, also see 16.00 time signal, signing on/off duties, PLCT working messages, safety slogans, various counter register numbers, testing of block instruments, etc.',
        },
        { label: 'vii', text: 'Station Diary.' },
        {
          label: 'viii',
          text: 'Caution Order Message books for Up and Down direction and CO registers.',
          note: 'Know procedure for pasting imposition and cancellation messages, making entries in the register, and brought forwarding them every Monday.',
        },
        {
          label: 'ix',
          text: 'Disconnection and reconnection notices – how they are issued and pasted in the book and entries in the register.',
        },
        {
          label: 'x',
          text: 'Relay room and Block key register – entries every time keys are taken and disconnection notice pertaining to them.',
        },
        {
          label: 'xi',
          text: 'S&T failure register – entries of the failures and summary at the end of every month and failure memo book, obtaining signature of ESM/SI.',
        },
        { label: 'xii', text: 'Stabling load register.' },
        {
          label: 'xiii',
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

const GuidelinesToStationMasterAfterGoingToStationPage = () => {
  return (
    <OperatingTopicPage title="GUIDELINES TO STATION MASTER (SM) AFTER GOING TO STATION" icon={ClipboardCheck}>
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
                    <table className="w-full min-w-160 border-collapse text-left">
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
                          <ListMark>{sub.label}</ListMark>
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
    </OperatingTopicPage>
  )
}

export default GuidelinesToStationMasterAfterGoingToStationPage