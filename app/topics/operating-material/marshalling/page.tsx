'use client'

import React from 'react'
import Link from 'next/link'
import { Combine } from 'lucide-react'

const summaryRows = [
  [
    'Detonator Register',
    'Maintained at every station, four parts, signed by SM and fog signalman, checked by TI',
  ],
  [
    'Marshalling (Explosives)',
    'Max 10 (goods), 3 (mixed/parcel), separation by dummy wagons, close coupling',
  ],
  [
    'Petroleum Wagons',
    'No limit, close coupling, separation as per class and contents, dummy wagons as per rules',
  ],
  [
    'Dead Engines',
    '1 (passenger), 2 (goods), escorting rules, brake power conditions, special rules for emergencies',
  ],
  [
    'SLRs',
    'Anti-telescopic/steel-bodied at ends, special rules for old/wooden SLRs, short trains in middle',
  ],
  [
    'Four Wheelers',
    'Not between two bogies, may be at front/rear, speed restrictions',
  ],
  [
    "Officers' Saloons",
    'Restrictions on certain trains, permission for mail/express, operational convenience, load limits',
  ],
]

function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function CircleList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">o</span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h2 className="text-base font-semibold text-amber-100 sm:text-lg">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function SubBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
      <div className="flex gap-2.5">
        <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
        <p className="text-[15px] font-semibold leading-[1.75] text-amber-100/90 sm:text-base">
          {title}
        </p>
      </div>
      <div className="mt-1">{children}</div>
    </div>
  )
}

const MarshallingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <Combine className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              APPENDIX VIII – MARSHALLING
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <SectionCard title="Definition">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                Marshalling is the systematic arrangement of vehicles (coaches and wagons) on a train
                to meet specific transportation needs such as safety, operational efficiency,
                elimination of delay, and optimum utilization of transport capacity.
              </p>
            </SectionCard>

            <SectionCard title="I. Wagons Containing Explosives">
              <div className="space-y-3">
                <SubBlock title="Maximum Number:">
                  <ArrowList
                    items={['Goods trains: 10 wagons', 'Mixed/parcel trains: 3 wagons']}
                  />
                </SubBlock>
                <SubBlock title="Separation:">
                  <CheckList
                    items={[
                      'At least 3 dummy wagons from brake van, passenger coaches, wagons containing dangerous/inflammable goods.',
                      'At least 1 dummy wagon from electric or diesel loco.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Coupling:">
                  <CheckList
                    items={[
                      'Explosive wagons must be coupled close together and to other wagons.',
                    ]}
                  />
                </SubBlock>
              </div>
            </SectionCard>

            <SectionCard title="II. Wagons Containing Petroleum and Other Inflammable Liquids">
              <div className="space-y-3">
                <SubBlock title="Number:">
                  <CheckList items={['No limit on the number of such wagons.']} />
                </SubBlock>
                <SubBlock title="Coupling:">
                  <CheckList items={['Must be coupled closely.']} />
                </SubBlock>
                <SubBlock title="Guard Wagons (Class A – Flashpoint below 23°C):">
                  <ArrowList
                    items={[
                      'At least 1 dummy wagon from passenger coaches, brake van, electric/diesel engines, dangerous/inflammable goods.',
                      'At least 3 dummy wagons from other wagons containing explosives.',
                      'If 8-wheeler brake van is provided, guard/dummy wagon is not required.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Class B (Flashpoint above 23°C but below 65°C):">
                  <ArrowList
                    items={[
                      'Separated from electric/diesel loco, brake van, passenger coach by 1 dummy wagon.',
                      'Separated from compressed/liquefied gases by 2 wagons.',
                      'Separated from explosives by 3 wagons.',
                      'If 8-wheeler brake van is used, guard wagon is not required.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Class C (Flashpoint at 65°C and above):">
                  <ArrowList items={['No special separation required.']} />
                </SubBlock>
              </div>
            </SectionCard>

            <SectionCard title="III. Dead Engines">
              <div className="space-y-3">
                <SubBlock title="Passenger Trains:">
                  <CheckList
                    items={['Normally only one dead loco permitted, next to train engine.']}
                  />
                </SubBlock>
                <SubBlock title="Goods Trains:">
                  <CheckList
                    items={[
                      'Maximum of two dead locos may be attached with one/two working locos.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Escorting:">
                  <CheckList
                    items={[
                      'Not necessary if brakes are fully operational and dead loco is next to train engine.',
                      'Required if attached in rear of brake van or if there is a defect in undergear equipment.',
                      'Escort must be at least an Assistant Loco Pilot.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Attachment to Trains:">
                  <ArrowList
                    items={[
                      'Dead loco can be attached to Mail/Express/Superfast trains (except Rajdhani, Shatabdi, Duranto).',
                      'Brake power of train should be at least 90% excluding dead loco.',
                      'Special rules for certain sections (e.g., KZJ-SC/HYB) and emergencies.',
                      'If dead loco brakes are not functional, only one dead loco is permitted and brake power must be at least 90%.',
                    ]}
                  />
                </SubBlock>
              </div>
            </SectionCard>

            <SectionCard title="IV. Marshalling of SLRs (Seating-cum-Luggage Rakes)">
              <div className="space-y-3">
                <SubBlock title="Mail/Express Trains:">
                  <CheckList
                    items={[
                      'Anti-telescopic or steel-bodied SLRs must be marshalled as the last coach at both ends.',
                      'If front SLR is absent, the coach next to engine must be kept empty and locked.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Old Design SLRs:">
                  <CircleList
                    items={[
                      'Marshal so that luggage portion is trailing outermost or next to engine.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Passenger Trains:">
                  <CircleList
                    items={[
                      'Two anti-telescopic/steel-bodied coaches inside SLR at both ends (one for passenger trains).',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Wooden SLRs:">
                  <CircleList
                    items={[
                      'Marshal inside of two (for passenger, one) anti-telescopic coaches.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Short Trains:">
                  <CircleList
                    items={[
                      'SLR should be marshalled in the middle. Outermost vehicles must be anti-telescopic/steel-bodied coaches.',
                    ]}
                  />
                </SubBlock>
              </div>
            </SectionCard>

            <SectionCard title="V. Marshalling of Four Wheelers">
              <div className="space-y-3">
                <SubBlock title="Single Four Wheelers:">
                  <CircleList
                    items={[
                      'Must not be marshalled between two bogies.',
                      'May be attached between engine and a bogie vehicle to avoid shunting delays.',
                      'Not applicable when banking/assisting engine is attached in rear of brake van.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Attachment:">
                  <CircleList
                    items={[
                      'Four-wheeler coaching vehicle/goods wagon can be attached to a passenger train either in front (next to engine) or at the rear.',
                      'Maximum speed: 75 kmph on BG, 50 kmph on MG.',
                    ]}
                  />
                </SubBlock>
              </div>
            </SectionCard>

            <SectionCard title="VI. Railway Officers' Saloons">
              <div className="space-y-3">
                <SubBlock title="Restrictions:">
                  <CircleList
                    items={[
                      'Not to be attached to race specials, postal express, military specials, Rajdhani, Shatabdi, or trains with AC SLRs.',
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Attachment:">
                  <CheckList
                    items={[
                      'Saloons of GM, HODs, and CRS may be attached to any train except those above.',
                      'Not more than one saloon per mail train.',
                      'Saloons of Heads of Departments and DRMs should be attached to passenger, parcel, or goods trains.',
                      "COM‘s permission required for mail/express trains.",
                    ]}
                  />
                </SubBlock>
                <SubBlock title="Other Rules:">
                  <ArrowList
                    items={[
                      'May be attached to light engine if fitted with vacuum/air brake and tail lamp/board.',
                      'Can be attached if prescribed load permits; if in excess, actual tonnage must be shown in VG.',
                    ]}
                  />
                  <CircleList
                    items={[
                      'Attach for minimum detention and operational convenience.',
                      'Saloons should not be sent outside jurisdiction without prior consent of HOD and COM.',
                    ]}
                  />
                </SubBlock>
              </div>
            </SectionCard>

            <SectionCard title="Summary Table">
              <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
                <table className="w-full min-w-[320px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-amber-500/20 bg-slate-950/50">
                      <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                        Section
                      </th>
                      <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                        Key Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {summaryRows.map(([section, points]) => (
                      <tr
                        key={section}
                        className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                      >
                        <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] font-semibold leading-relaxed text-amber-100/95 sm:px-4 sm:text-[15px]">
                          {section}
                        </td>
                        <td className="px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                          {points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
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

export default MarshallingPage
