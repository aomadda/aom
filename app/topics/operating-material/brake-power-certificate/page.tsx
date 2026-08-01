'use client'

import React from 'react'
import Link from 'next/link'
import { FileBadge } from 'lucide-react'

type Bullet = { mark: string; text: string }

function BulletList({ items, delay = 0 }: { items: Bullet[]; delay?: number }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${item.mark}-${item.text}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          style={{ animation: `fade-up 0.55s ease-out ${delay + 0.03 * (index + 1)}s both` }}
        >
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{item.mark}</span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
        </li>
      ))}
    </ul>
  )
}

function SectionCard({
  title,
  items,
  delay = 0,
}: {
  title: string
  items: Bullet[]
  delay?: number
}) {
  return (
    <article
      className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
      style={{ animation: `fade-up 0.55s ease-out ${delay}s both` }}
    >
      <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
          {title}
        </h2>
      </header>
      <div className="px-5 py-7 sm:px-8 sm:py-9">
        <BulletList items={items} delay={delay + 0.05} />
      </div>
    </article>
  )
}

const introItems: Bullet[] = [
  { mark: '', text: 'It is a certificate to be prepared in duplicate by TXR after examining the formation.' },
  { mark: '', text: 'It will be signed by TXR, Guard, and Loco Pilot for goods train.' },
  { mark: '', text: 'It should be possessed by the Loco Pilot and Guard till the train completes its journey.' },
  { mark: '', text: 'There are only 3 types of examinations in SCR:' },
  { mark: '', text: 'CC rake examination' },
  { mark: '', text: 'Premium end-to-end examination' },
  { mark: '', text: 'End-to-end examination' },
]

const ccRakeItems: Bullet[] = [
  { mark: '', text: 'Formed from air brake stock only including containers.' },
  { mark: '', text: 'Examination points: RDM, BPA, SNF, BZA, COA & GY.' },
  { mark: '', text: '100% brake power during PME.' },
  { mark: '', text: 'Enroute 90%.' },
  { mark: '', text: 'BPC colour shall be yellow.' },
  {
    mark: '',
    text: 'Examples: Bhadradri, Godavari, Black Rocket, Red Star, Green Arrow, Red Arrow, Blue Star, Blue Arrow, Galaxy, etc.',
  },
  { mark: '', text: 'The rake will move over any station to any station in the zones mentioned on BPC.' },
  {
    mark: '',
    text: 'LP must record the KM run and sign with name, base and date. When LP not recorded, balance KM can be retrieved from FOIS, otherwise BPC is valid for 20 days only.',
  },
  {
    mark: '',
    text: 'Attaching/detaching is permitted up to 4 wagons enroute; in case of BLL/BLC wagons, up to 5 wagons are permitted.',
  },
]

const premiumItems: Bullet[] = [
  { mark: '', text: 'Formed from air brake open and covered stock only.' },
  { mark: '', text: 'Examination points: RDM, BPA, SNF, DKJ, KZJ, BZA, COA, BTTR, RJY, GY, PAU, NZB & NLPD.' },
  { mark: '', text: 'BPC is valid for 12 days.' },
  { mark: '', text: 'Grace period 5 days.' },
  { mark: '', text: 'Brake power – 95%.' },
  { mark: '', text: 'Enroute not specified.' },
  { mark: '', text: 'BPC colour shall be green.' },
  { mark: '', text: 'To avoid examination in loaded condition, grace period is permitted.' },
  {
    mark: '',
    text: 'After a lapse of 17 days, even a loaded premium rake shall be offered for examination at the first TXR point in the direction of movement.',
  },
  { mark: '', text: 'Loading after 12th day should not be permitted.' },
]

const endToEndItems: Bullet[] = [
  { mark: '', text: 'This is for all stocks.' },
  { mark: '', text: 'Validity –from TXR examination point up to loading point to further up to unloading point.' },
  { mark: '', text: 'At loading point, the operating/commercial staff shall ensure that the destination is mentioned on BPC.' },
  { mark: '', text: 'LP shall not move the loaded rake from the loading point unless the destination is clearly mentioned on BPC.' },
  { mark: '', text: 'Brake power – 90%.' },
  { mark: '', text: 'Enroute – 75%.' },
  { mark: '', text: 'BPC colour shall be green.' },
  { mark: '', text: 'Empty checked rake by TXR must reach the loading point within 4 days including the day of issue.' },
]

const intensiveItems: Bullet[] = [
  { mark: '', text: 'Must have a nominated base depot.' },
  { mark: '', text: 'Trains must touch the base depot at least once in a month.' },
  { mark: '', text: 'Brake power – 90%.' },
  { mark: '', text: 'Enroute not specified.' },
  {
    mark: '',
    text: 'BPC is valid for 30 days, without endorsement of TXR (CASNUB RAKES) with endorsement of TXR once in fortnight (UIC RAKES).',
  },
  { mark: '', text: 'After every loading/unloading by GLP check.' },
]

const reVehicleItems: Bullet[] = [
  { mark: '', text: 'BPC will be issued with validity of maximum 30 days as per existing practice.' },
  {
    mark: '',
    text: 'Revalidation of BPC of these trains at work site can be done by flying gangs maximum by 30 days, when trains are moving within the Zone/Division on a project.',
  },
  {
    mark: '',
    text: 'It should be ensured that these trains are brought out to the nominated examination depot for proper examination every 60 days.',
  },
]

const invalidCcItems: Bullet[] = [
  { mark: '', text: 'Rake integrity disturbed by more than 4 wagons.' },
  { mark: '', text: 'For BLC/BLL wagons disturbed by 5 (1 unit).' },
  { mark: '', text: 'Stabled for more than 24 hrs at Train Examination Yard.' },
  { mark: '', text: 'Moved to any zone not mentioned in BPC.' },
  { mark: '', text: 'Overdue rakes not moved in the direction of PME depot.' },
  { mark: '', text: 'Running more than 35 days/7500 km.' },
]

const invalidPremiumItems: Bullet[] = [
  { mark: '', text: 'Rake integrity disturbed by more than 4 wagons.' },
  { mark: '', text: 'Stabled for more than 24 hrs at Train Examination Yard.' },
  { mark: '', text: 'Moves for loading after 12 days.' },
  { mark: '', text: 'Empty rake running after the 12th day.' },
]

const invalidEndToEndItems: Bullet[] = [
  { mark: '', text: 'Rake integrity disturbed by more than 4 wagons.' },
  { mark: '', text: 'Stabled for more than 24 hrs at Train Examination Yard.' },
  { mark: '', text: 'Destination station not mentioned.' },
  { mark: '', text: 'Unsigned corrections of destination name.' },
  {
    mark: '',
    text: 'Empty rake checked rake by TXR must reach the loading point within 4 days including the day of issue.',
  },
]

const stablingItems: Bullet[] = [
  { mark: '', text: 'If any rake is stabled enroute, train crew shall hand over BPC to SM for safe custody.' },
  { mark: '', text: 'It is the responsibility of SM to hand over BPC to outgoing train crew while clearing stable load.' },
]

const BrakePowerCertificatePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <FileBadge className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Brake Power Certificate (Freight Trains)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <BulletList items={introItems} />
          </div>
        </article>

        <SectionCard title="CC Rake Examination (Periodical Monitoring Examination)" items={ccRakeItems} delay={0.1} />
        <SectionCard title="Premium Rake Examination" items={premiumItems} delay={0.15} />
        <SectionCard title="End-to-End Examination" items={endToEndItems} delay={0.2} />
        <SectionCard title="Intensive Examination for Material Train" items={intensiveItems} delay={0.25} />
        <SectionCard title="BPC of RE Vehicles" items={reVehicleItems} delay={0.3} />

        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              When BPC Becomes Invalid
            </h2>
          </header>

          <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-base font-bold text-amber-100 sm:text-lg">
                CC Rakes:
              </h3>
              <BulletList items={invalidCcItems} delay={0.38} />
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-base font-bold text-amber-100 sm:text-lg">
                Premium Rakes:
              </h3>
              <BulletList items={invalidPremiumItems} delay={0.42} />
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-base font-bold text-amber-100 sm:text-lg">
                End-to-End Rakes:
              </h3>
              <BulletList items={invalidEndToEndItems} delay={0.46} />
            </section>
          </div>
        </article>

        <SectionCard title="Handling of BPC During Stabling" items={stablingItems} delay={0.5} />

        <div className="flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes soft-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.92;
          }
        }
      `}</style>
    </div>
  )
}

export default BrakePowerCertificatePage
