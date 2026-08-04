'use client'

import React from 'react'
import Link from 'next/link'
import { GitBranch } from 'lucide-react'

const introduction = [
  'Sidings are branch lines connected to the main running line or yard line of a block station (called the Serving Station) and lead to the premises of the Siding authorities.',
  'The Serving Station is the block station that serves a siding.',
  'Loading/unloading arrangements are managed by the Siding authorities as per the commodity.',
  'Diesel/Electric engines from the Serving Station may place/remove the inward/outward rake directly into/from the Siding.',
  'Where there is no operating in-charge in the siding, Pilots shall be worked under either of the following systems:',
]

const classifications = ['One Pilot System', 'Multiple Pilot System']

const commonFeatures = [
  'The system to be adopted is decided by Sr. DOM and incorporated in SWR.',
  'SM maintains a ―Pilot Movement Register‖ for recording the details of movements of trains to and from the siding.',
  'An operating staff shall be deputed by the Station Master as Pilot in-charge of the Pilot.',
  'Pilot in-charge is responsible for safe working, correct setting and securing of all points concerned using cotter & bolt/clamp and padlock while entering/leaving siding and during shunting operations.',
  'The Pilot in-charge has to ensure that the Pilot train is standing within the fouling marks and adequately secured before detaching the engine.',
  'The Pilot in-charge is responsible for ensuring proper wagon couplings, securing the wagon doors, connecting the hose pipes and ensuring that the air pressure is maintained up to the last vehicle.',
  'The Pilot in-charge shall ensure that no vehicle is left over on the line between the station yard and the siding yard.',
  'Pilots can be worked during day and night and normally engine should be in leading while working the Pilot train to and from the siding.',
]

const pushBackCircumstances =
  'a. At sidings where engine reversal facilities are not provided. b. At sidings authorized by Sr. DOM, with specific instructions for Loco Pilots and Shunting Staff in the Station Working Rules. c. Under exceptional circumstances authorized by Sr. DOM.'

const pushBackPrecautions =
  'i. The station yard is isolated from the siding line for Pilots from sidings. ii. If the station yard is not isolated from the siding line, the take-off line shall be kept free before permitting the Pilot from the siding. iii. The line on which trains will be pushed shall have a Buffer Stop / Sand Hump / Derail switch at the trailing end and the line shall be set on to the Buffer Stop/Sand Hump till Pilot comes to a stand on the line. iv. In case the trailing end is isolated with Derail switch, it shall be kept open till Pilot comes to a stand on the line. v. The maximum speed while pushing shall not exceed 15 KMPH.'

const onePilot = [
  'SM to ensure clearance before despatch of the pilot by seeing the pilot movement register.',
  'SM advises in charge of Pilot and LP about work to be done in siding through written memo. Handover the load slip, LV No. & Caution Order to observe both ways on the siding line.',
  'SM thereafter sets the route for dispatch, clears shunt signal where provided and hands over written authority to LP in the prescribed format and takes acknowledgment. This written authority authorizes LP to go to siding and return to station.',
  "SM, in a position to admit, shall set the route and receive into station by taking ‗off‘ shunt signals or pilot in memo.",
  'On complete arrival of the Pilot train inside the fouling mark and after verifying the Last Vehicle number, the Pilot in-charge shall sign in the Pilot Movement Register with time and date.',
  'Where Pilots do not enter the Serving Stations or go away immediately, the Pilot in-charge shall call the Station Master of the Serving Station, through walkie-talkie, and confirm complete arrival of the Pilot, duly mentioning the name/number of the train with time and date and exchange Private Numbers supported with initials with the Station Master of the Serving Station.',
]

const multiplePilot = [
  'SM advises Pilot in-charge & LP about work to be done through written memo.',
  'Handover the load slip of wagon particulars and LV No. Caution Order to be observed both ways on siding line.',
  'SM will set the route for dispatch, hand over written authority to LP in format and obtain acknowledgement.',
  'LP proceeds to siding duly observing prescribed SRs if any.',
  'Pilot shall stop short of top points/stop board/earmarked place at the siding yard.',
  'On arrival inside the siding, Pilot in-charge assures the SM, duly supported by PN, that pilot arrived complete into the siding and line between station and siding is clear.',
  'The PN issued by pilot in-charge is assurance for SM to despatch second pilot to siding.',
  'If a second pilot is to be sent where a pilot is already in siding, SM shall mention the particulars of pilot available in siding in written authority.',
  'On completion of work in siding yard, Pilot in-charge advises SM the load particulars and LV No. of Pilot to return to station and seeks his permission to start.',
  'SM shall give permission supported by PN only after ensuring that line between siding & station is free through Pilot movement register.',
  "On receiving SM‘s permission, Pilot in-charge ensures correct setting and locking of points for despatch from siding and hands over written authority to LP in format.",
  "SM will set the route & receives the Pilot into station yard by taking ‗off‘ shunt signal or by Pilot in memo.",
  'On arrival of pilot at station, Pilot in-charge shall ensure complete arrival and sign in pilot movement register with date and time.',
  'Where Pilots do not enter the Serving Stations or go away immediately, the Pilot in-charge shall call the Station Master of the Serving Station, through walkie-talkie, and confirm complete arrival of the Pilot, duly mentioning the name/number of the train with time and date and exchange Private Numbers supported with initials with the Station Master of the Serving Station.',
]

function NumberedList({ items, start = 1 }: { items: string[]; start?: number }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${start + index}-${text.slice(0, 48)}`}
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

const WorkingOfSidingPage = () => {
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
              <GitBranch className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              APPENDIX XXVII – WORKING OF SIDING
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <SectionCard title="Introduction">
              <DotList items={introduction} />
            </SectionCard>

            <SectionCard title="Classification of Sidings">
              <p className="mb-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                Sidings are classified into the following categories:
              </p>
              <DotList items={classifications} />
            </SectionCard>

            <SectionCard title="Common Features of the System">
              <NumberedList items={commonFeatures} />
            </SectionCard>

            <SectionCard title="Engine Push Back">
              <p className="mb-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                Trains (either loaded or empty) may be permitted to work with engine pushing in the
                following circumstances:
              </p>
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {pushBackCircumstances}
              </p>
            </SectionCard>

            <SectionCard title="Precautions for Push Back Operation">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {pushBackPrecautions}
              </p>
            </SectionCard>

            <SectionCard title="I. ONE PILOT SYSTEM">
              <NumberedList items={onePilot} />
            </SectionCard>

            <SectionCard title="II. MULTIPLE PILOT SYSTEM">
              <NumberedList items={multiplePilot} />
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

export default WorkingOfSidingPage
