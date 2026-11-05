'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Signpost } from 'lucide-react'

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
            •
          </span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )

const ShuntingPermittedIndicatorPage = () => {
    const spiPoints = [
        'It is an appliance that works in conjunction with the stop signal and is provided to control shunting movements.',
        'It shall be placed on a post by itself only.',
        'It can permit shunt movements in both directions.',
        'It is provided in the non-interlocked area of the yard where the interlocked area is isolated.',
        'Normally, it can be operated by a ground lever or through panel.',
        'It shall not show any light when shunting is not permitted.',
        'When shunting is permitted, it shows a yellow cross light in both directions during day and night.',
        'When shunting permitted indicator becomes defective, authority to pass defective indicator is T.369(3b) plus proceed hand signals (PHS).',
        'Detailed instructions regarding the working of SPI are available in SWR.',
      ]
  return (
    <OperatingTopicPage title="Shunting Permitted Indicator (S.R. 3.14.3)" icon={Signpost}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Shunting Permitted Indicator (S.R. 3.14.3)
            </h2>
          </header>

          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <BulletList items={spiPoints} />
          </div>
        </article>
    </OperatingTopicPage>
  )
}

export default ShuntingPermittedIndicatorPage