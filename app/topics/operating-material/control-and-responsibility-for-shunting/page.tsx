'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { UserRoundCog } from 'lucide-react'

type Bullet = { mark: string; text: string }

type NumberedItem = {
  text: string
  sub?: Bullet[]
}

function NumberedList({ items }: { items: NumberedItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.text.slice(0, 40)}`}
          className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <div className="flex gap-3">
            <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
          </div>
          {item.sub && item.sub.length > 0 ? (
            <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
              {item.sub.map((sub, subIndex) => (
                <li key={`${subIndex}-${sub.text}`} className="flex gap-2.5">
                  <ListMark>{sub.mark}</ListMark>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{sub.text}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function SectionCard({
  title,
  delay,
  children,
}: {
  title: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <article
      className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
      style={{ animation: `fade-up 0.55s ease-out ${delay}s both` }}
    >
      <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
          {title}
        </h2>
      </header>
      <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">{children}</div>
    </article>
  )
}

const ControlAndResponsibilityForShuntingPage = () => {
    const controlItems: NumberedItem[] = [
        { text: 'Shunting operations shall be controlled by fixed signals or hand signals or by verbal directions.' },
        {
          text: 'At major stations where separate staff viz., outdoor Station Master / Yard SM / YM / Shunting Master / Shunting Jamedarare provided for supervising the shunting, Form No. T/806 need not be given within station section. Suchstations shall be notified by respective Sr.DOMs and incorporated in Station working rules.',
        },
        {
          text: 'Shunting order in Form T/806 shall be issued with full details of all shunt movements within the station section and for shunting during block forward/block back in double line and block back in single line.',
        },
        { text: 'The Guard/competent railway servant supervising the shunting must accompany the train.' },
        { text: 'SM and Loco Pilot shall ensure closure of LC gates, if any.' },
        {
          text: 'SM shall ensure the block section in Absolute Block system or the entire line between two block stations in Automatic Block system is clear of trains.',
        },
        {
          text: 'SM must also obtain consent from the Station Master at the other end before starting block forward or block back operations.',
        },
        {
          text: 'Block forward/block back messages shall be exchanged with Private Numbers and recorded in red ink in the Train signal register.',
        },
        { text: 'SM shall also inform Section controller under exchange of Private Number.' },
        {
          text: 'In case shunting of trains from one line to another across main line or wagons containing explosives, the shunting operations shall be carried out under personal supervision of SM.',
        },
        {
          text: 'Carriages occupied by passenger shall not be moved for shunting purposes without the orders of the SM and also the Guard of the train who will jointly be responsible to warn the passengers in the carriage.',
        },
        {
          text: 'At stations where shunting is supervised by SM or Guard, LP and Guard shall be given with form no. T/806.',
        },
        { text: 'All fixed signals except First stop signal and Last stop signal may be used for shunting purpose.' },
        {
          text: 'Where shunt movements are not governed by signals, all concerned points in the route shall be correctly set, ―cotter bolted and pin inserted‖ where provided or ―clamped and padlocked‖ and Proceed hand signal shall be exhibited.',
        },
        {
          text: 'If a fixed shunt signal alone or below a Stop signal becomes defective, SM shall issue T/369 (3b) after ensuring correct point setting and securing by clamping and padlocking and depute competent railway servant to show the Proceed Hand Signal from the foot of the signal.',
        },
        {
          text: 'If the Shunting Permitted Indicator (SPI) is defective, issue T/369 (3b) and show the Proceed Hand Signal from its foot after ensuring correct point setting and securing by cotter bolt & pin insertion or clamping and padlocking.',
        },
        { text: 'The speed during shunting operations shall not exceed 15 kmph.' },
        {
          text: 'In case of vehicles containing inflammable liquids, explosives, coaching vehicles speed is restricted to 8 kmph.',
        },
        { text: 'Slip coaches shall not be kept on blocked line in the rear of passenger carrying trains.' },
        {
          text: 'No engine, except train engine or banking engine or shunting engine shall be allowed on any running line at a station occupied by a train carrying passengers.',
          sub: [
            {
              mark: '',
              text: 'If it is unavoidable to allow the engine(s) in rear of a passenger carrying train, such engine(s) shall be accompanied and hand signalled by shunting staff and stopped in rear of passenger carrying train at a safe distance.',
            },
            { mark: '', text: 'The Shunter/Loco Pilot of light engine(s) shall be informed.' },
            { mark: '', text: 'All such light engine(s) should not be left unmanned.' },
            {
              mark: '',
              text: 'When shunting is required to be carried out for attaching or detaching of vehicles on passenger carryingtrains, the shunting engine / banking engine / train engine with or without vehicles shall first come to a halt 20 metres away from the train and thereafter perform the shunting carefully.',
            },
            {
              mark: '',
              text: 'While pushing back in shunting movement on line terminating in Dead End, train must be stopped 20 meters before the Dead End and then shall be pushed back cautiously so that bumping with Dead end can be avoided.',
            },
          ],
        },
        {
          text: 'When vehicles moved by an engine for attaching to passenger train, shall be connected up so that adequate brake power shall be available.',
        },
        {
          text: 'In case of shunting on goods trains at intermediate station, the brake continuity shallbe connected with engine.',
        },
      ]
  return (
    <OperatingTopicPage title="Control and Responsibility for Shunting" icon={UserRoundCog}>
        <SectionCard title="Control and Responsibility for Shunting" delay={0.15}>
          <NumberedList items={controlItems} />
        </SectionCard>
    </OperatingTopicPage>
  )
}

export default ControlAndResponsibilityForShuntingPage