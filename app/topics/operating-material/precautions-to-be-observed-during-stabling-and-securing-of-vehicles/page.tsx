'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { SquareParking } from 'lucide-react'

type Bullet = {
    mark: string
    text: string
    children?: Bullet[]
  }
  
  type NumberedItem = {
    text: string
    sub?: Bullet[]
  }
const securingItems: NumberedItem[] = [
    { text: 'Vehicles/load/train shall be inside the fouling marks.' },
    {
      text: 'Vehicles/load/train be chained and padlocked using at least two chains, one at either end.',
    },
    {
      text: 'At least four wooden wedges/iron skids be used, two each below the outermost pair of wheels at either end.',
    },
    {
      text: 'Hand brakes of at least 6 EFFECTIVE wagons from either end must be fully tightened.',
    },
    {
      text: 'If hand brakes of any of the first six EFFECTIVE wagons at each end cannot be applied, hand brakes of subsequent wagons should be applied till six wagons in total are achieved.',
    },
    {
      text: "In case coaching vehicles are stabled, Guard's hand brakes in SLR(s) must be applied.",
    },
    {
      text: 'The hand brakes must be operated under the personal supervision of the Guard, and in the absence of Guard, by SM/ASM on duty.',
    },
    { text: 'All the vehicles of stabled load/train should be coupled together.' },
    {
      text: 'In case the stabled load has to be split for any reason, each such split part should be treated as a separate load for the purpose of securing.',
    },
    {
      text: 'The points must be set, clamped and padlocked against the blocked line and towards dead end or trap point (if available).',
    },
    {
      text: 'The padlock keys of the Safety Chains and clamps shall be in the personal custody of the SM.',
    },
    {
      text: 'Line Block Collars must be placed on relevant signal/point buttons/slides/levers etc.',
    },
    {
      text: "Remarks should be made in TSR and SM diary in Red ink to the effect that 'Line No.‘ is blocked and all precautions for securing the load have been taken as prescribed above.",
    },
    {
      text: 'At stations with gradient steeper than 1 in 400 additional precautions have to be taken prescribed under approved special instructions (by CRS) and mentioned in SWR of respective station.',
    },
    {
      text: 'In case load/train is stabled with locomotive attached or light engine(s) is/are shutdown or stabled:',
      sub: [
        {
          mark: '',
          text: 'SM has to give a written authority for unmanning loco only after Loco is secured.',
        },
        { mark: '', text: 'LP should not leave the loco unmanned while on duty.' },
        {
          mark: '',
          text: 'If LP is required to leave the loco unmanned he can do so only after getting a written authority from SM.',
        },
        {
          mark: '',
          text: 'Before leaving LP to ensure securing of loco by:',
          children: [
            {
              mark: '',
              text: 'Application of SA-9 (Loco brake) and A-9 (Formation brakes) brakes;',
            },
            { mark: '', text: 'LP to apply hand brake and parking brake;' },
            {
              mark: '',
              text: 'Secure the loco with wooden wedges/iron skids provided on the loco.',
            },
          ],
        },
        {
          mark: '',
          text: 'SM shall give written authority only after ensuring that loco is secured as per extant rules.',
        },
      ],
    },
    {
      text: 'Before leaving the Station/Yard, the Loco Pilot and Guard should jointly sign record in the stabled train register to be maintained with SM.',
    },
    {
      text: 'If the Loco is not stabled with the formation only guard has to sign in the stabled load register.',
    },
    {
      text: 'After load/train/loco is stabled, SM must inform the SCOR supported by private number that all the laid down precautions for stabling and securing the load/train/loco have been taken.',
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

const PrecautionsToBeObservedDuringStablingAndSecuringOfVehiclesPage = () => {
  return (
    <OperatingTopicPage title="Precautions to be Observed During Stabling and Securing of Vehicles/Formation (G.R./S.R. 5.19, 5.23)" icon={SquareParking}>
        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.3s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Precautions to be Observed During Stabling and Securing of Vehicles/Formation
              (G.R./S.R. 5.19, 5.23)
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              Action by SM/Traffic Staff when vehicles/load/train is to be stabled at station:
            </p>
            <NumberedList items={securingItems} />
          </div>
        </article>
    </OperatingTopicPage>
  )
}

export default PrecautionsToBeObservedDuringStablingAndSecuringOfVehiclesPage