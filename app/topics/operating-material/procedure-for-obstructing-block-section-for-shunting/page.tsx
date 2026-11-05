'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { ShieldAlert } from 'lucide-react'
import SectionCard from '@/app/topics/operating-material/section-card'
import BulletList from '@/app/topics/operating-material/bullet-list'

type Bullet = { mark: string; text: string }

const smDuties: Array<{ mark: string; text: string; note?: string }> = [
    { mark: '', text: 'Shall ensure the block section is clear of trains.' },
    {
      mark: '',
      text: 'On single Line the Station Master shall obstruct the line only when a nominated railway servant is in charge of shunting and the block section is confirmed clear of any approaching train.(Upto FSS).',
      note: 'Beyond the FSS, the Station Master shall intimate a ―Block Back‖ message to the Station Master at the other end.',
    },
    {
      mark: '',
      text: 'Secure the block instruments and obtain consent from the other end/Advance /Rear Station Master under exchange of Private Numbers including with Section Controller.',
    },
    { mark: '', text: 'Make necessary entries in the Train signal register with Red ink.' },
    { mark: '', text: 'Only then issue the required shunting authorities to the LP and Guard.' },
    {
      mark: '',
      text: 'SM authorizes the Loco Pilot to pass the Last Stop Signal at ‗ON‘ on T.806 and shunt into the Block Section.',
    },
    {
      mark: '',
      text: 'After completion of shunting, both Station masters shall ensure the block section is clear and exchange messages supported by Private Numbers before resuming normal working.',
    },
    { mark: '', text: 'Common point applicable for both systems of working on Single Line.' },
  ]
  
  const doubleLineBeyondOmfp: Bullet[] = [
    {
      mark: '',
      text: 'The Station Master shall intimate a ―Block Back‖ message to the Station Master at the rear end.',
    },
    { mark: '', text: 'Rear SM shall issue Private Number.' },
    {
      mark: '',
      text: 'The Station Master performing shunting shall ensure that the block instrument is kept in ‗Train on Line‘ position and locked, or that the LCB key is kept in the ‗OUT‘ position.',
    },
  ]

  const doubleLineBeyondLss: Bullet[] = [
    {
      mark: '',
      text: 'The Station Master shall intimate a ―Block forward‖ message to the Station Master at the advance end.',
    },
    {
      mark: '',
      text: 'The advance Station Master shall keep the SGE block instrument in ‗Train on Line‘ position and locked or keep the LCB key in the ‗OUT‘ position. Issue Private number.',
    },
  ]

const ProcedureForObstructingBlockSectionForShuntingPage = () => {
  return (
    <OperatingTopicPage title="Procedure for Obstructing Block Section for Shunting (In Both Systems of Working)." icon={ShieldAlert}>
        <SectionCard
          title="Procedure for Obstructing Block Section for Shunting (In Both Systems of Working)."
          delay={0.25}
        >
          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Duties of the Station Master on Duty
            </h3>
            <ul className="space-y-3">
              {smDuties.map((item, index) => (
                <li
                  key={`${index}-${item.text}`}
                  className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                >
                  <div className="flex gap-3">
                    <ListMark>{item.mark}</ListMark>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                  </div>
                  {'note' in item && item.note ? (
                    <p className="mt-3 border-l-2 border-amber-500/25 pl-4 text-[15px] leading-[1.75] text-slate-300 sm:ml-6 sm:text-base">
                      {item.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-3">
            {[
              'Shunting is normally permitted within the station section. Once Line Clear is granted, shunting in that direction is prohibited except where allowed in Station Working Rules.',
              'Authority T/806 without PN shall be issued to LP and Guard unless otherwise notified by Sr.DOM.',
              'On double line sections, shunting within the station section may be carried out provided the required reception signals are kept at ―ON‖.',
            ].map((text) => (
              <p
                key={text}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base"
              >
                {text}
              </p>
            ))}
          </div>

          <section className="space-y-4">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              On Double line
            </h3>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-amber-50/95 sm:text-lg">
                1 Beyond the Outermost Facing Points/Block Section Limit Board.
              </h4>
              <BulletList items={doubleLineBeyondOmfp} />
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-amber-50/95 sm:text-lg">2 Beyond LSS</h4>
              <BulletList items={doubleLineBeyondLss} />
            </div>
          </section>
        </SectionCard>
    </OperatingTopicPage>
  )
}

export default ProcedureForObstructingBlockSectionForShuntingPage