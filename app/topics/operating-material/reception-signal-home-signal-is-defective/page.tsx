'use client'

import React from 'react'
import { House } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const ReceptionSignalHomeSignalIsDefectivePage = () => {
    const preWarned = [
        'At stations where calling on/signal post telephone is not provided, before granting line clear, SM shall ensure conditions for taking off home signal were also fulfilled and shall advise rear SM through message to issue written authority to loco pilots T.369(1) [advance authority] with clear description of signal and number as well as line on which it is being received (AS No 16 I.9 of 14.06.24).',
        'SM of advance station shall depute competent railway servant in uniform to exhibit Proceed Hand Signal (PHS).',
        'This T/369(1) authorizes Loco Pilot to pass the defective signal at ‗ON‘ duly observing the Proceed hand signal at the foot of the signal at a speed not exceeding 15 kmph.',
        'If absence of proceed hand signal, LP shall stop the train (AS No 16 I.20 of 14.06.24).',
      ]
      
      type NotPreWarnedItem =
        | { text: string }
        | { text: string; letters: string[] }
      
      const notPreWarned: NotPreWarnedItem[] = [
        { text: 'The train shall be brought to a stand at the foot of the signal.' },
        {
          text: 'Train can be admitted in three ways:',
          letters: [
            'By taking ‗off‘ calling on signal where provided, or',
            'By authorizing LP over signal post telephone under special instructions where provided (Not available in SCR), or',
            'By issuing written authority T/369(3b) only after ensuring correct setting, clamping and padlocking of points over the route.',
          ],
        },
        { text: 'All the relevant columns of T/369(3b) are to be carefully filled in.' },
        {
          text: 'LP on receipt of T/369(3b) to pass signal at ‗ON‘ with a speed not exceeding 15 kmph + PHS at the foot of the signal duly ensuring that nominated line is free for an adequate distance beyond the place where train is required to come to a stop.',
        },
        {
          text: 'At class ‗C‘ station, FSS is also LSS. So when FSS/LSS is defective, PLCT shall be issued after obtaining line clear from SM of station in advance.',
        },
      ]
  return (
    <OperatingTopicPage
      title="Reception Signal (Home) Defective (G.R. & S.R. 3.69)"
      icon={House}
    >
          <div className="space-y-8">
            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                When LP has been advised (pre-warned):
              </h3>
              <ul className="space-y-3">
                {preWarned.map((text) => (
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
                When LP has not been advised (not pre-warned):
              </h3>
              <ul className="space-y-3">
                {notPreWarned.map((item) => (
                  <li
                    key={item.text}
                    className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <div className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                        →
                      </span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                    </div>

                    {'letters' in item && item.letters ? (
                      <ul className="mt-3 space-y-2.5 sm:pl-8">
                        {item.letters.map((letter) => (
                          <li
                            key={letter}
                            className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                          >
                            <span className="mt-0.5 inline-flex h-7 min-w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 text-xs font-bold text-amber-100/90 ring-1 ring-amber-400/30">
                              o
                            </span>
                            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{letter}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>
    </OperatingTopicPage>
  )
}

export default ReceptionSignalHomeSignalIsDefectivePage