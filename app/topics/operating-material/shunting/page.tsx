'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeftRight } from 'lucide-react'

const points = [
  'Means the movement of a vehicle or vehicles with or without an engine or of any engine or any other self-propelled vehicle, for the purpose of attaching, detaching or transfer or for any other purpose. (G.R. 1.02(49))',
]

type Bullet = { mark: string; text: string }

type NumberedItem = {
  text: string
  sub?: Bullet[]
}

const shuntingKinds: NumberedItem[] = [
  {
    text: 'Shunting means the movement of a vehicle or vehicles with or without an engine or of an engine or any other self-propelled vehicle for the purpose of attaching, detaching or transfer or for any other purpose. The following are the kinds of shunting:',
  },
  {
    text: 'Flat Shunting: When vehicles are shunted by continuous forward and backward movements, the locomotive remaining attached to the vehicles, it is known as flat shunting.',
  },
  {
    text: 'Loose shunting: means pushing of vehicles by an engine and allowing them to run forward with the engine un-attached.',
  },
  {
    text: "Loose shunting of or against empty or loaded oil tank wagons, trucks loaded with heavy machinery/rails/timber, cranes, loaded explosive vans, livestock wagons, wagons labelled 'not to be loose shunted', coaching vehicles etc., is prohibited.",
  },
  {
    text: 'Fly shunting: It is a shunt movement in which two or more vehicles are given a push by an engine and are separated at the points by the smart reversal of points within the vehicles in order to send them on to different lines. Fly shunting is allowed only in hump yards.',
  },
  {
    text: 'Hump shunting: It is a kind of fly shunting in large yards where the shunting neck has camel hump to create an artificial gravity when wagons are pushed to its apex by the shunting engine and then detached; they roll down to specific classification lines by the force of gravity because of the steeply falling gradient towards the classification lines.',
  },
  {
    text: 'Hand shunting: Movement of vehicles from one place to another by employing manual labour is called hand shunting.',
  },
]

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

const receptionPrecautions: Bullet[] = [
  { mark: '', text: 'Shunting shall be carried out under supervision of authorized competent railway servant.' },
  { mark: '', text: 'Rake or load should be fully on-air brake' },
  { mark: '', text: 'The maximum speed during shunting operations shall not exceed 15 Kmph.' },
]

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
            <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{item.mark}</span>
          ) : (
            <span className="mt-0.5 w-4 shrink-0" aria-hidden />
          )}
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
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
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{sub.mark}</span>
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

const ShuntingPage = () => {
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
              <ArrowLeftRight className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Shunting
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((text, index) => (
              <div
                key={index}
                className="group flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.08 * (index + 1)}s both` }}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 via-amber-500/20 to-orange-600/25 text-amber-100 shadow-inner shadow-black/20 ring-1 ring-amber-400/35 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                  <ArrowLeftRight className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="min-w-0 flex-1 pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <SectionCard title="SHUNTING" delay={0.1}>
          <NumberedList items={shuntingKinds} />
        </SectionCard>

        <SectionCard title="Control and Responsibility for Shunting" delay={0.15}>
          <NumberedList items={controlItems} />
        </SectionCard>

        <SectionCard title="VI. Shunting During Reception of Trains (G.R/S.R. 5.16)" delay={0.2}>
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            When signals have been taken ‗off‘ for an incoming train on to a line which is not isolated, no
            shunting movement shall be carried out towards points over which the incoming train has to pass
            except under special instructions for identified stations where frequent shunting movements take
            place and where such points are protected by a stop signal or by a shunt signal with the following
            precautions to be observed while performing shunting:
          </p>
          <BulletList items={receptionPrecautions} />
        </SectionCard>

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
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{item.mark}</span>
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
                1. Beyond the Outermost Facing Points/Block Section Limit Board.
              </h4>
              <BulletList items={doubleLineBeyondOmfp} />
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-amber-50/95 sm:text-lg">2. Beyond LSS</h4>
              <BulletList items={doubleLineBeyondLss} />
            </div>
          </section>
        </SectionCard>

        <SectionCard
          title="VII. Authoritiesissued to Loco Pilot and Guard in Absolute Block system"
          delay={0.3}
        >
          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              (i) Single Line
            </h3>
            <BulletList items={absoluteSingleLine} />
          </section>

          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              (ii) Double Line
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

        <SectionCard
          title="IX Authoritiesissued to Loco Pilot and Guard in Automatic Block system"
          delay={0.35}
        >
          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              (i) Single Line
            </h3>
            <BulletList items={autoSingleLine} />
          </section>

          <section className="space-y-3">
            <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              (ii) Double Line
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

export default ShuntingPage
