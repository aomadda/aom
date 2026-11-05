'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { LogIn } from 'lucide-react'

const ReceptionOfATrainOnANonSignalledLinePage = () => {
  return (
    <OperatingTopicPage title="Reception of a Train on a Non-Signalled Line" icon={LogIn}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Reception of a Train on a Non-Signalled Line
            </h2>
          </header>

          <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
              SM shall ensure that:
            </p>
            <ul className="space-y-3">
              {[
                { mark: '', text: 'The train shall be brought to a stand at FSS.' },
                {
                  mark: '',
                  text: 'The line is clear up to the trailing points or up to the place at which the train is required to come to a stand.',
                },
                { mark: '', text: 'All the points are correctly set and facing points locked.' },
                {
                  mark: '',
                  text: "SM shall authorize Loco Pilot to pass reception stop signal at 'ON' by issuing T/510 and pilot the train by competent railway servant in uniform.",
                },
                {
                  mark: '',
                  text: 'The Loco Pilot shall proceed cautiously and be prepared to stop short of any obstruction (not exceeding 15 kmph).',
                },
              ].map((item, index) => (
                <li
                  key={item.text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  style={{ animation: `fade-up 0.55s ease-out ${0.58 + 0.03 * (index + 1)}s both` }}
                >
                  <ListMark>{item.mark}</ListMark>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
    </OperatingTopicPage>
  )
}

export default ReceptionOfATrainOnANonSignalledLinePage