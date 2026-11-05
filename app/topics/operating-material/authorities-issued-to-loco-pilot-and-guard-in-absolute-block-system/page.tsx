'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { FileCheck } from 'lucide-react'
import SectionCard from '@/app/topics/operating-material/section-card'
import BulletList from '@/app/topics/operating-material/bullet-list'

type Bullet = { mark: string; text: string }

const automaticBlockNotes: Bullet[] = [
  {
    mark: '',
    text: 'Shunting onto main lines or into the block section is not permitted unless the Semi-Automatic Stop Signals in the station are placed in manual mode, so that these signals can first be put to the ‗ON‘ position.',
  },
  {
    mark: '',
    text: 'On Single Line beyond Station Section the direction of traffic shall be established by informing the Station Master at the other end under exchange of messages with Private Numbers.',
  },
  { mark: '', text: 'Treating the entire section as one block section.' },
]

const absoluteDoubleLine: Bullet[] = [
    { mark: '', text: 'within station section: T/806' },
    { mark: '', text: 'Beyond the OMFP/BSLB: T/806 with Private Number' },
    { mark: '', text: 'Beyond LSS : T/806 with Private Number' },
    { mark: '', text: 'Shunting beyond LSS (Behind the train travelling away):' },
    {
      mark: '',
      text: 'If shunting beyond the Last Stop Signal is permitted in the Station Working Rules, behind a train travelling away from the station.',
    },
    {
      mark: '',
      text: 'The shunt signal (if provided) below the LSS may be taken ―OFF‖, or the Loco Pilot and Guard may be issued T/806 without PN.',
    },
    {
      mark: '',
      text: 'If the shunting is not completed, the line shall be blocked forward immediately after the preceding train clears the section.',
    },
  ]

  const absoluteSingleLine: Bullet[] = [
    { mark: '', text: 'Within Station Section: T/806' },
    { mark: '', text: 'UP TO FSS' },
    { mark: '', text: 'T/806 with Shunt Key' },
    { mark: '', text: 'or' },
    {
      mark: '',
      text: 'T/806 with Private Number from the other-end SM shall be used only when the Shunt Key cannot be extracted.',
    },
    { mark: '', text: 'Beyond FSS:-' },
    { mark: '', text: 'T/806 with Shunt Key' },
    { mark: '', text: 'or' },
    {
      mark: '',
      text: 'T/806 with PN from the other-end SM shall be used only when the Shunt Key cannot be extracted.',
    },
  ]


const AuthoritiesIssuedToLocoPilotAndGuardInAbsoluteBlockSystemPage = () => {
    
  return (
    <OperatingTopicPage title="VII Authoritiesissued to Loco Pilot and Guard in Absolute Block system" icon={FileCheck}>
        <SectionCard
          title="VII Authoritiesissued to Loco Pilot and Guard in Absolute Block system"
          delay={0.3}
        >
          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Single Line
            </h3>
            <BulletList items={absoluteSingleLine} />
          </section>

          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Double Line
            </h3>
            <BulletList items={absoluteDoubleLine} />
          </section>

          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              InAutomatic Block System
            </h3>
            <BulletList items={automaticBlockNotes} />
          </section>
        </SectionCard>
    </OperatingTopicPage>
  )
}

export default AuthoritiesIssuedToLocoPilotAndGuardInAbsoluteBlockSystemPage