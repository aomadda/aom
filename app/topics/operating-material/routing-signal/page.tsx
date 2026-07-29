'use client'

import React from 'react'
import Link from 'next/link'
import { GitBranch } from 'lucide-react'

const routeIndicatorPoints = [
  'These are provided to give information regarding which of the two or more lines is set for Loco Pilots.',
  'Route indicators are treated as stop signals.',
  'If the route indicator in the reception signal is not in working order, the relevant stop signal shall be treated as defective.',
  'If the Loco Pilot finds the route indicator on starter signal displaying incorrect route, he shall treat the starter signal at ON.',
]

const routeIndicationTypes = ['Stencil type', 'Multi lamp type', 'Junction type']

const stencilPoints = [
  'This indicating apparatus is placed on the same post below or above the stop signal.',
  'When the signal is taken OFF, the number or description of the line for which signal is cleared will appear on the indicator in the form of an illuminated number or alphabet.',
]

const multiLampPoints = [
  'A number of electrical bulbs are arranged on a panel kept on the signal post.',
  'When the signal is cleared, the line number appears on the panel by selective lighting up of the electric bulbs in the required pattern.',
]

const junctionPoints = [
  'Also known as position type route indicator.',
  'Provided with five miniature white lights. Six indicators can be fixed on a signal post.',
  'When signal is taken off for main line and when signal is at ON there is no route indication. When signal is off (yellow MAS/green/TAS) with route indicator indicates signal is cleared for turnout.',
]

const electricRepeaterPoints = [
  'Miniature Signal Repeaters are provided on Station Master‘s Control panel/VDUs to repeat the aspect displayed by each signal.',
  'Whenever any signal repeater is not in working order, the relevant fixed signal need not be treated as defective if it is possible for the Station Master to observe personally the position of the signal or by proceeding to the convenient place outside from where the signal can be seen or at stations provided with cabins at either ends of the yard, the Station Master at the station shall ascertain from the cabin concerned that the signal is working properly and exchange Private Number.',
  'Whenever the miniature light repeater in the colour light signalling territory is found to be defective and the signal light aspect is not visible from the station/cabin, the signal which it repeats shall be treated as defective and not taken ‗off‘ for any train and action shall be taken as per Rule 3.68 to 3.72.',
]

const ArrowPoint = ({ text }: { text: string }) => (
  <div className="group flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5">
    <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
      →
    </span>
    <p className="min-w-0 flex-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
  </div>
)

const CheckPoint = ({ text }: { text: string }) => (
  <li className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60">
    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
      ✓
    </span>
    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
  </li>
)

const BulletPoint = ({ text }: { text: string }) => (
  <li className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60">
    <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
      •
    </span>
    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
  </li>
)

const SectionCard = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <article className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl">
    <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
      <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
      <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
        {title}
      </h2>
    </header>
    <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">{children}</div>
  </article>
)

const RoutingSignalPage = () => {
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

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem] leading-snug">
              Routing Signal (G.R. 3.09)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            <ArrowPoint text="Routing signal is provided to indicate to the Loco Pilot which of the two or more routes is set in his favour when the Home signal, due to its position, is inconvenient for this purpose." />
          </div>
        </article>

        <SectionCard title="Route (Indication) Indicators (SEM Part I)">
          <ul className="space-y-3">
            {routeIndicatorPoints.map((text) => (
              <CheckPoint key={text} text={text} />
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Types of Route Indication">
          <p className="flex gap-3 text-[15px] font-semibold leading-relaxed text-amber-100 sm:text-base">
            <span className="shrink-0 text-amber-300" aria-hidden>
              •
            </span>
            <span>Route indicators are of three types:</span>
          </p>
          <ul className="space-y-3">
            {routeIndicationTypes.map((text) => (
              <CheckPoint key={text} text={text} />
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="a) Stencil Type Route Indicators">
          <ul className="space-y-3">
            {stencilPoints.map((text) => (
              <CheckPoint key={text} text={text} />
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="b) Multi-Lamp Type Route Indicator">
          <ul className="space-y-3">
            {multiLampPoints.map((text) => (
              <BulletPoint key={text} text={text} />
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="c) Junction Type Route Indicator">
          <ul className="space-y-3">
            {junctionPoints.map((text) => (
              <BulletPoint key={text} text={text} />
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Electric Repeater (G.R & S.R 3.23)">
          <ul className="space-y-3">
            {electricRepeaterPoints.map((text) => (
              <BulletPoint key={text} text={text} />
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="S.R. 3.36.2">
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            The Station Master (SM) shall assure himself, in all cases either personally or by means of a repeater, that the concerned signal governing the movement of a train, or taken off for the train, is correctly operated and such signals are put back to ON immediately after the train has completely passed the signal. However, the position of the points shall not be changed until the whole train has come to a stop at the station or run through the station, except where sectional route release facility is provided.
          </p>
        </SectionCard>

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

export default RoutingSignalPage
