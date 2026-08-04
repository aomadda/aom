'use client'

import React from 'react'
import Link from 'next/link'
import { TriangleAlert } from 'lucide-react'

const introBullets = [
  'The speed at which the train is to proceed',
  'The kilometres between which the speed restriction is to be observed',
  'The reason for the speed restriction',
  'The station or between stations where restriction applies',
]

const types = [
  'Caution Order (T.409): Issued at notice station/stations and comprises all the caution orders between two notice stations and stations.',
  'Nil Caution Order (T/A.409): Issued at notice station/station when there are no cautions between notice stations/stations.',
  'Remainder Caution Order (T/B.409): Not in use in SCR.',
]

const notifying = [
  {
    text: 'Officials of Engg./S&T/Elec/Mech/Security/Traffic shall give a written advice to one of the SMs at either end of the block section.',
  },
  {
    text: 'The message must mention exact km, stations between, reasons, and likely duration of the Caution Order.',
  },
  { text: 'Work shall not commence until acknowledgement is received from SM.' },
  {
    text: 'SM shall not acknowledge unless he advises the SM at the other end of block section and obtains his acknowledgement under exchange of Private Number.',
  },
  {
    text: 'After receiving the written advice, SM shall not permit any train in the block section unless:',
    checks: [
      'SCOR and SM of notice station are advised under exchange of Private Number.',
      'The LP and Guard are warned of speed restrictions by issue of Caution Order.',
    ],
  },
  {
    text: 'Messages are communicated to the official in charge at divisional HQ responsible for preparation of Caution Order or fed in the system if available.',
  },
]

const acknowledgement = [
  {
    label: 'i.',
    text: 'If notice station is in the same control section, SM shall call SM of notice station and advise message under exchange of Private Number with initials.',
  },
  {
    label: 'ii.',
    text: 'If notice station is in a different control section/division, SM shall inform PN and initial to SCOR who shall in turn inform SM of the notice station and obtain his initial and PN, then communicate to SM.',
  },
  {
    label: 'iii.',
    text: 'Where auto phones are provided, these messages are exchanged by SM duly advising SCOR.',
  },
  {
    label: 'iv.',
    text: 'Then SCOR will give message to SM to issue Caution Order to the No. and description of trains between the notice station and concerned block station.',
  },
]

const preparation = [
  'Caution Order should be serially numbered and name of station, issuing shall be stamped on each copy.',
  'Caution Order should have space to include at least four Caution Orders.',
  'No entries made on backside.',
  'If more than one page, it should be serially numbered (Page-1, Page-2, etc.).',
  'It shall specify km, stations at which or between which Caution Order required to be observed, reasons for the imposition, names of the stations written in full (no codes).',
  'It shall contain all the speed restrictions (permanent & temporary) in geographical order in the direction of movement from one notice station to the other.',
  'Caution Order shall be made for each train. They shall be on white paper with blue or black font, typed with ―Caution Order‖ written on top in bold letters.',
  'The SM shall check the cyclostyled/computer printout or the Caution Order received from the divisional office and before delivering, all Caution Orders in force shall be incorporated.',
  'Details of total number of Caution Orders, number of additions & deletions shall be indicated.',
  'Dated & signed in full by SM.',
  'In case of error or overwriting, it shall be cancelled and fresh one prepared & issued.',
]

const issueAtNotice = [
  {
    label: 'I.',
    text: 'On receipt of the imposition/modification of SR, the SM shall issue to each and every train passing over the affected block section.',
  },
  {
    label: 'II.',
    text: "When SM receives no restriction of speed to be imposed up to next notice station, shall issue ‗NIL‘ Caution Order (T/A.409) to all trains.",
  },
  {
    label: 'III.',
    text: "The LP shall not start a train from notice station without a divisional Caution Order (T.409) or ‗NIL‘ Caution Order (T/A.409).",
  },
  {
    label: 'IV.',
    text: 'It shall be issued to LP, ALP, and guard of all trains personally or through a railway servant.',
  },
  {
    label: 'V.',
    text: 'The signatures of LP & guard obtained on record foil of the Caution Order.',
  },
]

const messageRecord = [
  'At all stations & notice stations where Caution Orders are issued, the messages are pasted in Caution Order message book with serial number.',
  'When cancellation message is received, this message pasted juxtapose to the imposition with reference to S.No.',
  'The SM shall keep updated record of SR imposed, date & time of enforcement and cancellation.',
  'S.No. used in both directions commencing from 1st January to 31st December.',
  'After 31st December, the Caution Order shall be brought forward and new S.No. issued together with the reference of old serial number.',
]

const registerPoints = [
  'The SM shall keep updated record of SR imposed, date & time of enforcement and cancellation in Caution Order Register.',
  'Caution Order Register shall be brought forward on every Monday at 00.00 hours in geographical order in relation to direction of movement.',
  'The SM shall record in station diary the S.Nos. of Caution Orders in force at the time of signing off duty.',
]

const preservation = [
  'Record copy of each Caution Order issued shall be preserved.',
  'In case of printed Caution Order, one master copy of Caution Order for each direction for each day shall be preserved.',
  'Acknowledgement of LP/ALP/Guard shall be obtained in the separate registers at Notice stations/Crew control lobbies.',
  'Caution Orders are preserved for a period of six months after use.',
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

function SectionCard({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h2 className="flex gap-3 text-base font-semibold text-amber-100 sm:text-lg">
        <span className="inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
          {number}
        </span>
        <span>{title}</span>
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

const CautionOrderPage = () => {
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
              <TriangleAlert className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Method of Notifying, Preparation, Issue, Record, and Preservation of Caution Order
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                Whenever a line is under repairs or for any other reason, special precautions are
                necessary to be observed by the Loco Pilots and Guards of trains, the same shall be
                notified by the Station Master through a written/printed advice. This advice must
                clearly indicate:
              </p>
              <ArrowList items={introBullets} />
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                This advice is known as the Caution Order123.
              </p>
            </div>

            <SectionCard number="1" title="Types of Caution Order">
              <CheckList items={types} />
            </SectionCard>

            <SectionCard number="2" title="Method of Notifying">
              <ul className="space-y-3">
                {notifying.map((item) => (
                  <li key={item.text}>
                    <div className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                      <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                    {item.checks ? (
                      <div className="mt-2 sm:ml-6">
                        <CheckList items={item.checks} />
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard number="3" title="Method of Obtaining Acknowledgement by Notice Stations">
              <ul className="space-y-3">
                {acknowledgement.map((item) => (
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
            </SectionCard>

            <SectionCard number="4" title="List of Notice Stations">
              <DotList items={['The list of notice stations is mentioned in the respective WTT of the division.']} />
            </SectionCard>

            <SectionCard number="5" title="Description and Preparation of Caution Order">
              <ArrowList items={preparation} />
            </SectionCard>

            <SectionCard number="6" title="Procedure of Issue of Caution Order at Notice Station">
              <ul className="space-y-3">
                {issueAtNotice.map((item) => (
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
              <div className="mt-3">
                <DotList
                  items={[
                    'If train originates from other than notice station, SM to consult SCOR/notice station and issue Caution Order up to the notice station.',
                  ]}
                />
              </div>
            </SectionCard>

            <SectionCard number="7" title="Change of Crew Enroute">
              <DotList
                items={[
                  'The LP/Guard taking over charge must take over all Caution Orders relating to his train and give acknowledgement in logbook/rough book of LP/guard.',
                ]}
              />
            </SectionCard>

            <SectionCard number="8" title="Attaching Assisting/Banking Engine">
              <DotList
                items={[
                  'Whenever assisting/banking engine is attached, the LP/guard of the engine also shall be issued Caution Order copy by SM of the station where such engine is attached.',
                ]}
              />
            </SectionCard>

            <SectionCard number="9" title="In Case of Local/Suburban Trains">
              <DotList
                items={[
                  'The Caution Order is issued only once to the crew as per the link and mentioned in WTT.',
                ]}
              />
            </SectionCard>

            <SectionCard number="10" title="Cancellation of Caution Order">
              <DotList
                items={[
                  'Whenever a Caution Order is cancelled, SM who receives cancellation message shall inform notice station, adjacent station and SCOR under exchange of Private Number with initials and record in the relevant register.',
                  'When SM receives cancellation message, the speed restriction which is cancelled shall be scored out and signed by SM, before delivering Caution Order to LP & Guard of the train.',
                ]}
              />
            </SectionCard>

            <SectionCard number="11" title="Record of Caution Order Message">
              <ArrowList items={messageRecord} />
            </SectionCard>

            <SectionCard number="12" title="Caution Order Register">
              <ArrowList items={registerPoints} />
            </SectionCard>

            <SectionCard number="13" title="Preservation of Caution Order">
              <ArrowList items={preservation} />
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

export default CautionOrderPage
