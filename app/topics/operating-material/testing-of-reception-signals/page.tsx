'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { ClipboardCheck } from 'lucide-react'

const testingIntro =
  'At interlocked stations with two cabins or one on either side or provided with central cabin where signal reversers are provided and taking OFF the reception and despatch signals controlled by means of control knobs in the SM‘s office and slot knob control in the cabin, the SM shall daily, during day time, when no train is due to arrive or leave the station, test the working of the reception signals in one direction for one line as for a stopping train.'

const TestingOfReceptionSignalsPage = () => {
    const testingProcedure = [
        'SM shall arrange taking off reception signal.',
        'SM shall put back his control knob and ensure signal gone back to ON.',
        'Follow the route cancellation procedure and record the same.',
        'Again, SM shall arrange taking off reception signal.',
        'Cabin SM shall put back signal knob to normal and ensure signal gone back to ON.',
        'Follow the route cancellation procedure and record the same.',
        'This procedure to be followed first day for UP direction and second day for down direction, duly continuing for each line. This procedure to be followed every day subsequently.',
        'Record the result in the station diary maintained in a station/cabin.',
      ]
  return (
    <OperatingTopicPage title="Testing of Reception Signals (S.R. 3.36.3.1.1)" icon={ClipboardCheck}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Testing of Reception Signals (S.R. 3.36.3.1.1)
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              {testingIntro}
            </p>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Procedure for Testing the Signal:
              </h3>
              <ul className="space-y-3">
                {testingProcedure.map((text) => (
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
    </OperatingTopicPage>
  )
}

export default TestingOfReceptionSignalsPage