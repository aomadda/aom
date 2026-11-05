'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { CircuitBoard } from 'lucide-react'
import SectionCard from '@/app/topics/operating-material/section-card'

type Bullet = { mark: string; text: string }

  
  const autoSingleLine: Bullet[] = [
    { mark: '', text: 'Within Station Section: T/806' },
    { mark: '', text: 'Beyond Station Section T/806 with Private number' },
  ]
  
  const autoDoubleLine: Bullet[] = [
    { mark: '', text: 'within station section: T/806' },
    { mark: '', text: 'Beyond the OMFP/BSLB: T/806 with Private Number' },
    { mark: '', text: 'Beyond LSS:T/806 with Private Number.' },
    { mark: '', text: 'Return movement:' },
    { mark: '', text: 'Take off shunt signal if any or' },
    { mark: '', text: 'Guided by Proceed Hand signal, after ensuring points set, clamped, padlocked.' },
  ]
  
  const rearOfTrain: Bullet[] = [
    { mark: '', text: 'Applicable only when permitted in SWR.' },
    { mark: '', text: 'Duly considering gradient, visibility, speed, weight, brakes.' },
    { mark: '', text: 'Inform other SM.' },
    { mark: '', text: 'Issue T/806 to Loco pilot and Guard.' },
    { mark: '', text: 'Authorize to pass LSS at ―ON‖.' },
    { mark: '', text: 'If train ahead clears, note & block forward if needed.' },
    {
      mark: '',
      text: 'If not cleared, on shunting train return, inform SM supported by Private Numbers.',
    },
    { mark: '', text: 'Then normal working.' },
  ]

  function BulletList({ items }: { items: Bullet[] }) {
    return (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={`${index}-${item.text}`}
            className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          >
            {item.mark ? (
              <ListMark>{item.mark}</ListMark>
            ) : (
              <span className="mt-0.5 w-4 shrink-0" aria-hidden />
            )}
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
          </li>
        ))}
      </ul>
    )
  }

const AuthoritiesIssuedToLocoPilotAndGuardInAutomaticBlockSystemPage = () => {
  return (
    <OperatingTopicPage title="Authorities issued to Loco Pilot and Guard in Automatic Block system" icon={CircuitBoard}>
        <SectionCard
          title="Authorities issued to Loco Pilot and Guard in Automatic Block system"
          delay={0.35}
        >
          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Single Line
            </h3>
            <BulletList items={autoSingleLine} />
          </section>

          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Double Line
            </h3>
            <BulletList items={autoDoubleLine} />
          </section>

          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Shunting in rear of train travelling away
            </h3>
            <BulletList items={rearOfTrain} />
          </section>
        </SectionCard>
    </OperatingTopicPage>
  )
}

export default AuthoritiesIssuedToLocoPilotAndGuardInAutomaticBlockSystemPage