'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { ArrowLeftRight } from 'lucide-react'
import SectionCard from '@/app/topics/operating-material/section-card'
import BulletList from '@/app/topics/operating-material/bullet-list'

const receptionPrecautions: Array<{ mark: string; text: string }> = [
    { mark: '', text: 'Shunting shall be carried out under supervision of authorized competent railway servant.' },
    { mark: '', text: 'Rake or load should be fully on-air brake' },
    { mark: '', text: 'The maximum speed during shunting operations shall not exceed 15 Kmph.' },
  ]

const ShuntingDuringReceptionOfTrainsPage = () => {
    
  return (
    <OperatingTopicPage title="VI Shunting During Reception of Trains (G.R/S.R. 5.16)" icon={ArrowLeftRight}>
        <SectionCard title="VI Shunting During Reception of Trains (G.R/S.R. 5.16)" delay={0.2}>
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            When signals have been taken ‗off‘ for an incoming train on to a line which is not isolated, no
            shunting movement shall be carried out towards points over which the incoming train has to pass
            except under special instructions for identified stations where frequent shunting movements take
            place and where such points are protected by a stop signal or by a shunt signal with the following
            precautions to be observed while performing shunting:
          </p>
          <BulletList items={receptionPrecautions} index={0} />
        </SectionCard>
    </OperatingTopicPage>
  )
}

export default ShuntingDuringReceptionOfTrainsPage