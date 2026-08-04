'use client'

import React from 'react'
import Link from 'next/link'
import { BrickWall } from 'lucide-react'

const classification = [
  'Level crossing means the intersection of road with railway track at the same level.',
  'Level crossing gate means any form of movable barrier, including a chain, capable of being closed across the road at the level crossing.',
  'Level crossing gates are classified according to the train vehicle units (TVU) of the gate.',
  'Census for the purpose is conducted once in 3 years.',
  'TVUs are calculated as: Number of trains × road vehicle units.',
]

const tvuClasses = [
  { label: 'i.', text: 'Special class – TVUs more than 50,000' },
  { label: 'ii.', text: '„A‟ class – 50,000 – 30,000' },
  { label: 'iii.', text: '„B‟ class – 30,000 – 20,000' },
  { label: 'iv.', text: '„C‟ class – other than ‗A‘, ‗B‘ and special' },
  { label: 'v.', text: '„D‟ class – Cattle crossings' },
]

const classificationRest = [
  'Level crossing gates situated within outermost stop signals of a station are under the control of Station Master (Traffic LC Gates). Level crossing gates situated outside the outermost stop signals of a station are under control of PWI (Engineering Gates).',
  'When LC gate is interlocked with Station signals or Gate signals it is called as interlocked gate. When LC gate is not interlocked with any signals it is called as Non-interlocked gate.',
  "In case of obstruction, keep the signal at ‗ON‘ and inform the SM.",
]

const annexures = [
  'Annexure–I: Engineering LC gate, interlocked and open for road traffic & telephone provided',
  'Annexure–II: Traffic LC gate, interlocked and open for road traffic & telephone provided',
  'Annexure–III: Traffic LC gate, non-interlocked and closed for road traffic & telephone provided',
  'Annexure–IV: Engineering non-interlocked gate, open for road traffic & telephone provided',
  'Annexure–V: Engineering non-interlocked LC gate, closed for road traffic & telephone provided',
  'Annexure–VI: Engineering non-interlocked LC gate, closed for road traffic and telephone not provided',
]

const nonInterlockedEngg = [
  'Non-interlocked engineering gates are under the control of PWI and are not connected to any station signals.',
  'The gate is operated manually by the gateman.',
  'Before closing the gate for road traffic and opening for rail traffic, the gateman must ensure the line is clear and no road vehicle is on the crossing.',
  'After closing the gate for road, the gateman shall display the required hand signals for approaching trains.',
  "If any obstruction is noticed, the signal must be kept at ‗ON‘ and the Station Master must be informed immediately.",
  'Communication (if provided) should be used to coordinate with the nearest station or PWI for safe operation.',
]

const receivingEnd = [
  'Advise the gateman, number, description, and direction of the train and issue a Private Number.',
  'Where APNG system is provided and working, SM shall initiate an advice through the system and record the concerned system-generated number in the register (AS 19).',
  'Gateman will then close the level crossing gate against road traffic and confirm the same to the SM supported by Private Number.',
  'Where APNG system is provided and working, SM shall also observe system-generated number on gate closure and record the same in the register before proceeding for obtaining/granting Line Clear (AS 19).',
  'Then the SM may grant line clear.',
]

const despatchingEnd = [
  'Advise the gateman, number, description, and direction of the train and issue a Private Number.',
  'Where APNG system is provided and working, SM shall initiate an advice through the system and record the concerned system-generated number in the register (AS 19).',
  'Gateman will then close the level crossing gate against road traffic and confirm the same to the SM supported by Private Number.',
  'Where APNG system is provided and working, SM shall also observe system-generated number on gate closure and record the same in the register before proceeding for obtaining/granting Line Clear (AS 19).',
  'Then the SM may obtain line clear.',
]

const normalPositionOpen = [
  "When normal position is ‗open to road traffic‘, gate once closed can be opened by the gateman after passage of train/trains.",
]

const normalPositionClosed = [
  "When normal position is ‗closed to road traffic‘, gate once closed following the above rule shall be permitted by Station Master for opening to road traffic only:",
]

const closedPermission = [
  'After confirming from gateman that the train passed through the gate; or',
  'When Line Clear was neither obtained nor granted; or cancelled subsequently due to change in planning of train movement.',
  'Gate can be opened by the gateman after passage of train with the permission of the Station Master, duly exchanging private number and entering in the Register.',
  'After passage of road traffic and when it is clear between the gate posts, gateman shall close the gate.',
  'The opening and closing timings along with PN exchanged shall be recorded in the gate PN exchange register by the gateman and SM on duty, lock it and confirm this to the Station Master duly exchanging the PN (AS 19).',
]

const gateProtection = [
  'Gateman to fix a red banner flag by day / red light by night before opening the LC gate at 5m on either side of the gate.',
]

const changeInPlanning = [
  'After getting the private number in assurance of closure of level crossing gate from gateman, if the train has not left due to change in planning / some circumstances, Station Master on duty shall inform the cancellation of the train movement supported by a private number.',
  'Then only he can permit gateman to open the level crossing gate to the road traffic.',
  'In case, the same train has to be despatched after some time, Station Master shall exchange private numbers with the gateman afresh.',
]

const teleFailure = [
  'If no response from the gateman after 2 or 3 attempts, SM shall arrange to issue Caution Order to all Loco Pilots entering the block section to observe gate rules.',
  'In case of an approaching train, the Station Master shall advise the Station Master at the despatching end, under exchange of PN, that the telephone at the gate has failed.',
  'The Station Master at the despatching end shall then issue a Caution Order to the Loco Pilot to observe gate rules, before despatching a train into the block section from his end.',
  'Station Master shall also advise the gateman through Gangman/Patrolman or Loco Pilot of the first train that the telephone has become defective.',
  'He should also advise S&T staff responsible for maintenance of the telephone to rectify the defect at the earliest.',
  'Normal working will be resumed only after S&T staff rectifies the telephone and issues reconnection/fit memo for the same.',
]

const barrierFailure = [
  'Gateman will immediately inform the Station Master on duty under exchange of PN and ensure that lifting barriers or leaf gates do not foul the track.',
  'He shall immediately fix red banner flag by day/ red light by night on the post at that end first from which the train is approaching and then at the other end.',
  'If sliding booms are available, gateman shall secure the gate against the road traffic by closing the gate. Before using the sliding boom, gateman shall make an entry in the Gate timing Register and exchange PN with SM. After resumption of normal working, again entry to be made and PN to be exchanged with SM.',
  'Where sliding booms are not available/not working, gateman shall secure the gate against road traffic by means of safety chains and padlocks.',
  'After securing the gate against road traffic, gateman shall show green hand signal to the Loco Pilot of an approaching train.',
  'Station Master on duty shall issue Caution Order to the Loco Pilot of a departing train.',
  'He shall also advise the Station Master at the despatching end, under exchange of PN, to similarly issue a Caution Order to the Loco Pilot before despatching a train into the block section from his end.',
  'He should also advise maintenance staff responsible for maintenance of the lifting barriers/leaf gates to rectify the defect at the earliest.',
  'Normal working will be resumed only after maintenance staff rectify the lifting barrier/leaf gates and issue reconnection/fit memo for the same.',
]

const obstruction = ['Gateman shall inform the SM and protect the gate as per GR 6.03.']

const trafficGateTeleFail = [
  'SM shall send a Porter with written advice to close the gate and after his return with PN from the gateman as having closed the gate, he shall take off the signals.',
]

const interlockedGates = [
  'The detailed mode of operation for opening and closing the LC gate shall be provided in the respective SWR and Gate Working Instructions.',
]

const standardProcedure = [
  'Immediately after departure of the train, Station Master shall advise the Gateman, the number, description, and direction of the train.',
  'If the telephone is connected to the station at the receiving end, this advice shall be given by the SM to the Gateman, as soon as he receives train entering section advice from the dispatching station.',
  'If the actual running time of the train from either end of the section is less than 10 minutes, SM will convey this advice to the Gateman before obtaining/granting Line Clear.',
  'It should be the duty of the Gateman to ensure that the gate is closed in time, so that there is no detention to the train or excessive detention to road traffic.',
]

const interlockedTeleFail = [
  'SM issues a caution order advising the Loco Pilot to give intermittently long whistles and proceed cautiously while approaching the gate.',
  'The Loco Pilot shall be instructed to pass the gate cautiously, on being hand signalled by the Gateman.',
  'If hand signal is not seen, the Loco Pilot should be prepared to stop short of the gate and ensure that gate is closed and observe gate rules.',
  'In case of an approaching train, the Station Master shall advise the Station Master at the despatching end that the telephone at the gate has failed.',
  'The Station Master at the despatching end shall then issue a Caution Order to the Loco Pilot before despatching a train into the block section from his end.',
  'Station Master should also advise S&T staff responsible for maintenance of the telephone to rectify the defect at the earliest.',
  'Normal working will be resumed only after S&T staff rectifies the telephone and issues reconnection/fit memo for the same.',
]

const interlockedWithSignals = [
  'Station Master on duty shall send written advice to the Gateman through the Porter with full details of number, description, and direction of the train.',
  "Gateman on receipt of such advice shall close the gate and transmit the key to the Station Master, which will enable them to take ‗off‘ reception/departure signals.",
  "When sufficient time is not available because of greater frequency of train service, Station Master will issue written authority to the Loco Pilot to pass the signal at ‗on‘ position.",
]

const specialSituations = [
  'If lifting barriers/leaf gates get damaged or become out of order, gateman shall use the spare chain with disc and padlocks for securing the gate against road traffic.',
  'If sliding boom arrangement is available, Gateman has to use them for closing the gate against road traffic.',
  'If the interlocking arrangement is available for sliding booms, after closing the gate with sliding booms, signals can be taken off.',
  'Whenever sliding boom used and signals have been taken off, SM need not issue Caution Order to the Loco Pilots to that effect.',
  'Before resorting to the use of sliding booms for closing the gate, Gateman shall make an entry in the Gate Timing Register and exchange PN with Station Master.',
  'After resuming working of normal booms, again entry to be made and PN to be exchanged with SM to this effect.',
  'Where sliding booms are not available/not working, Gateman shall secure the gate against road traffic by means of safety chains and padlocks.',
  'When Gate is closed using Safety Chains and padlocks, SM shall advise the LP through a caution order intimating that the Gate has been closed using Safety Chains and Padlocks.',
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

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
        >
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items, start = 1 }: { items: string[]; start?: number }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={text}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {start + index}
          </span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ol>
  )
}

function SectionCard({
  number,
  title,
  children,
}: {
  number?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h2 className="flex gap-3 text-base font-semibold text-amber-100 sm:text-lg">
        {number ? (
          <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {number}
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

const LevelCrossingGatesPage = () => {
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
              <BrickWall className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              LEVEL CROSSING GATES (APPENDIX-II)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <SectionCard title="Classification of Level Crossing Gates">
              <NumberedList items={classification} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <p className="mb-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  <span className="inline-flex h-7 min-w-9 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    6
                  </span>
                  <span className="ml-3">Level crossing gates are classified as:</span>
                </p>
                <ul className="space-y-2 border-l-2 border-amber-500/25 pl-4">
                  {tvuClasses.map((item) => (
                    <li key={item.label} className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">
                        {item.label}
                      </span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <NumberedList items={classificationRest} start={7} />
              </div>
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <p className="mb-3 flex gap-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    10
                  </span>
                  <span>Different classifications of the gates are:</span>
                </p>
                <ul className="space-y-2 border-l-2 border-amber-500/25 pl-4">
                  {annexures.map((text) => (
                    <li key={text} className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard title="Procedure of Non-Interlocked Engineering LC Gate Working">
              <DotList items={nonInterlockedEngg} />
            </SectionCard>

            <SectionCard title="Working of Non-Interlocked Gate, Open/Closed to Road Traffic & Telephone Provided">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      1
                    </span>
                    <span>SM at Receiving End Before Granting Line Clear:</span>
                  </h3>
                  <CheckList items={receivingEnd} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      2
                    </span>
                    <span>SM at Despatching End Before Obtaining Line Clear:</span>
                  </h3>
                  <CheckList items={despatchingEnd} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      3
                    </span>
                    <span>Gate Operation Based on Normal Position:</span>
                  </h3>
                  <ArrowList items={normalPositionOpen} />
                  <ArrowList items={normalPositionClosed} />
                  <div className="mt-2 sm:ml-2">
                    <CheckList items={closedPermission} />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      4
                    </span>
                    <span>Gate Protection:</span>
                  </h3>
                  <ArrowList items={gateProtection} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      5
                    </span>
                    <span>Change in Planning:</span>
                  </h3>
                  <ArrowList items={changeInPlanning} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      6
                    </span>
                    <span>Failure of Telephonic Communication:</span>
                  </h3>
                  <ArrowList items={teleFailure} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      7
                    </span>
                    <span>Gate Cannot Be Closed Due to Failure of Lifting Barriers or Leaf Gates:</span>
                  </h3>
                  <ArrowList items={barrierFailure} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      8
                    </span>
                    <span>Obstruction at the Gate:</span>
                  </h3>
                  <ArrowList items={obstruction} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 flex gap-3 text-sm font-semibold text-amber-100 sm:text-base">
                    <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      9
                    </span>
                    <span>Traffic Gate – Telephone Communication Fails:</span>
                  </h3>
                  <ArrowList items={trafficGateTeleFail} />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Working of Interlocked Gates">
              <DotList items={interlockedGates} />
            </SectionCard>

            <SectionCard title="Standard Procedure">
              <ArrowList items={standardProcedure} />
            </SectionCard>

            <SectionCard title="In Case of Telephonic Communication Failure">
              <p className="mb-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                e) When telephonic communication fails or there is no response from the Gateman
                despite 2 or 3 attempts, the following procedure should be adopted:
              </p>
              <CheckList items={interlockedTeleFail} />
            </SectionCard>

            <SectionCard title="In Case of Gates Interlocked with Station Signals">
              <CheckList items={interlockedWithSignals} />
            </SectionCard>

            <SectionCard title="Special Situations">
              <NumberedList items={specialSituations} />
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

export default LevelCrossingGatesPage
