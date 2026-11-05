'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Unlink } from 'lucide-react'

type Bullet = {
    mark: string
    text: string
    children?: Bullet[]
  }
  
type NumberedItem = {
    text: string
    sub?: Bullet[]
  }

const detachingEngineItems: NumberedItem[] = [
    {
      text: 'The SM/Guard is responsible to ensure that the hand brakes of the vehicles are applied before the engine or brake-van is detached from the train.',
    },
    {
      text: 'At station, if the gradient is not steeper than 1 in 600, the hand brake of the brake-van or in the absence of the brake–van, hand brakes of 6 vehicles shall be applied.',
    },
    {
      text: 'If the gradient is steeper than 1 in 600 but not steeper than 1 in 260, hand brakes of brake–van and 6 vehicles or 12 vehicles shall be applied.',
    },
    {
      text: 'If the gradient is steeper than 1 in 260, the hand brakes of the brake-van and 12 vehicles or 18 vehicles shall be applied.',
    },
  ]

function BulletTree({ items, depth = 0 }: { items: Bullet[]; depth?: number }) {
  return (
    <ul
      className={`mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 ${depth === 0 ? 'sm:ml-12' : 'ml-4 sm:ml-6'}`}
    >
      {items.map((item, index) => (
        <li key={`${index}-${item.text}`}>
          <div className="flex gap-2.5">
            <ListMark>{item.mark}</ListMark>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
          </div>
          {item.children && item.children.length > 0 ? (
            <BulletTree items={item.children} depth={depth + 1} />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: NumberedItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.text.slice(0, 48)}`}
          className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <div className="flex gap-3">
            <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
          </div>
          {item.sub && item.sub.length > 0 ? <BulletTree items={item.sub} /> : null}
        </li>
      ))}
    </ol>
  )
}

const PrecautionsBeforeDetachingEngineWithinStationLimitsPage = () => {
  return (
    <OperatingTopicPage title="Precautions Before Detaching Engine Within Station Limits (S.R. 4.57.1)" icon={Unlink}>
        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Precautions Before Detaching Engine Within Station Limits (S.R. 4.57.1)
            </h2>
          </header>
          <div className="px-5 py-7 sm:px-8 sm:py-9">
            <NumberedList items={detachingEngineItems} />
          </div>
        </article>
    </OperatingTopicPage>
  )
}

export default PrecautionsBeforeDetachingEngineWithinStationLimitsPage