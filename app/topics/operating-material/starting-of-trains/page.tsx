'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Play } from 'lucide-react'

type StartingRule =
  | { type: 'text'; text: string }
  | {
      type: 'nested'
      intro: string
      items: Array<{ label: string; text: string; bullets?: string[] }>
    }

const startingOfTrains: StartingRule[] = [
    {
      type: 'text',
      text: 'Before starting a train, the Loco Pilot shall satisfy that all correct fixed signals and hand signals (if required) are given and line is clear of visible obstructions and Guard has given the signal to start the train.',
    },
    {
      type: 'text',
      text: 'Guard shall not give starting permission unless he satisfies that all is right for the train to proceed.',
    },
    {
      type: 'text',
      text: 'Before giving permission, Guard shall ensure that no person is travelling in any compartment or vehicle or roof of the vehicle not intended for the use of passengers.',
    },
    {
      type: 'text',
      text: 'If anyone is traveling, Guard, LP & ALP shall take help from GRP/RPF/station staff to remove the unauthorised person.',
    },
    {
      type: 'nested',
      intro: 'The SM shall not grant authority to proceed to a train till the following conditions have been fulfilled:',
      items: [
        {
          label: 'a',
          text: 'Line clear has been obtained from the station in advance,',
        },
        {
          label: 'b',
          text: 'Correct starter signal has been taken off or Starting Permit has been given,',
        },
        {
          label: 'c',
          text: 'In case of train carrying passengers, arrange to announce through PA system where provided or at all other stations by ringing the station bell as follows:',
          bullets: [
            '2 Beats for starting a Down train',
            '3 Beats for starting an Up train',
            '4 Beats for starting a Branch line train.',
          ],
        },
      ],
    },
    {
      type: 'text',
      text: 'When all work in connection with the train is completed, the Guard shall sound his whistle and display a green flag by day and a green light by night to the LP to start his train.',
    },
  ]

const StartingOfTrainsPage = () => {
  return (
    <OperatingTopicPage title="Starting of Trains (G.R./S.R. 4.35)" icon={Play}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Starting of Trains (G.R./S.R. 4.35)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {startingOfTrains.map((rule, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.45 + 0.04 * (index + 1)}s both` }}
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
                          key={item.label}
                          className="rounded-xl border border-slate-600/35 bg-slate-950/35 p-3.5 ring-1 ring-white/3 sm:p-4"
                        >
                          <div className="flex gap-2.5">
                            <ListMark>{item.label}</ListMark>
                            <div className="min-w-0 space-y-2">
                              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                              {item.bullets ? (
                                <ul className="space-y-1.5 pl-1">
                                  {item.bullets.map((bullet) => (
                                    <li
                                      key={bullet}
                                      className="flex gap-2 text-[15px] leading-[1.75] text-slate-300 sm:text-base"
                                    >
                                      <span className="mt-1.5 shrink-0 text-amber-300" aria-hidden>
                                        
                                      </span>
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </article>
    </OperatingTopicPage>
  )
}

export default StartingOfTrainsPage