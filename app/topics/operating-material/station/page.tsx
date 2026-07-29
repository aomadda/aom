'use client'

import React from 'react'
import Link from 'next/link'
import { Building2 } from 'lucide-react'

const points = [
  'Means any place on a line of railway at which traffic is dealt with, or at which an authority to proceed is given under the system of working. (G.R. 1.02(51))',
]

const differences = [
  {
    block: 'Authority to proceed is given to Loco Pilots',
    nonBlock: 'Authority to proceed is not given',
  },
  {
    block: 'Signals are provided',
    nonBlock: 'Signals are not provided',
  },
  {
    block: 'Station Master shall manage the station',
    nonBlock: 'CC/Contractor will manage the station',
  },
  {
    block: 'SM/ASM shall work round the clock',
    nonBlock: 'CC/contractor may work for round the clock or specified periods only',
  },
  {
    block: 'Station staff shall exchange all right signals',
    nonBlock: 'Exchange of all right signals is not required',
  },
  {
    block: 'Station limits are between two outermost signals',
    nonBlock: 'Station limits are between platform ends',
  },
  {
    block: 'All trains shall stop at station when signal is at ‗ON‘ or as per WTT',
    nonBlock: 'Trains shall stop and start according to Working Time Table',
  },
  {
    block: 'As per Absolute Block System these are classified as ‗A‘, ‗B‘, ‗C‘ and Special class stations',
    nonBlock: 'These stations are also known as ‗D‘ class station. Loco Pilot can identify approach of this station by ―H‖ board',
  },
  {
    block: 'Station Master shall arrange to announce to start a passenger carrying train',
    nonBlock: 'Such announcement is not required',
  },
]

const broadCategories = [
  'Block Stations: Stations where the Loco Pilot must obtain an Authority to Proceed to enter the block section.',
  'Non-Block Stations (Class „D‟): Stopping places between two consecutive block stations, not forming the boundary of any block section.',
]

const blockSubclasses = [
  {
    className: 'Class „A‟',
    description:
      'Line Clear cannot be given unless the reception line is clear for ≥400 meters beyond the Home Signal (or up to the Starter).',
  },
  {
    className: 'Class „B‟',
    description: 'Line Clear can be given before clearing the station section for the train.',
  },
  {
    className: 'Class „C‟',
    description:
      'Line Clear cannot be given unless the entire preceding train has passed ≥400 meters beyond the Home Signal (includes Intermediate Block Posts).',
  },
  {
    className: 'Special Class',
    description: 'Stations that cannot be classified as A/B/C.',
  },
]

const subclassNotes = [
  'Non-Block Stations (Class „D‟) are identified by an “H” board for Loco Pilots.',
  'Classification details must be mentioned in the Station Working Rules (SWR) and Working Time Table (WTT).',
]

const signalEquipment = [
  'Class „B‟ Stations: -Distant, Home, and Starter signals (for single/double lines).',
  'Class „C‟ Stations: -Distant and Home signals (for single/double lines).',
  'Additional signals may be provided as needed.',
]

const stationSectionGroups = [
  {
    title: 'Double Line:',
    items: [
      'Between outermost facing points and LSS (Last Stop Signal).',
      'Or between BSLB (Block Section Limit Board) and LSS.',
    ],
  },
  {
    title: 'Single Line:',
    items: [
      'Between SLB/Advanced Starters (if present).',
      'Or between outermost facing points if no SLB/Advanced Starters exist.',
    ],
  },
]

const StationPage = () => {
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
              <Building2 className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Station
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
                  <Building2 className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="min-w-0 flex-1 pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Differences Between Block Stations and Non-Block Stations (G.R.1.02(52), 1.03(2), (3), S.R.4.35(4,5))
            </h2>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full min-w-xl border-collapse text-left">
              <thead>
                <tr className="border-b border-amber-500/20 bg-slate-950/50">
                  <th className="w-1/2 px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-amber-200 sm:px-6 sm:text-base">
                    Block Station
                  </th>
                  <th className="w-1/2 px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-amber-200 sm:px-6 sm:text-base">
                    Non-Block Station
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {differences.map((row, index) => (
                  <tr
                    key={index}
                    className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                  >
                    <td className="border-r border-slate-700/40 px-4 py-4 text-[15px] leading-relaxed text-slate-300 sm:px-6 sm:text-base">
                      {row.block}
                    </td>
                    <td className="px-4 py-4 text-[15px] leading-relaxed text-slate-300 sm:px-6 sm:text-base">
                      {row.nonBlock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Classification of Stations (G.R./S.R. 1.03)
            </h2>
          </header>

          <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-9">
            <section className="space-y-4">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                1. Broad Categories
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">
                Stations are classified into Block Stations and Non-Block Stations:
              </p>
              <ul className="space-y-3">
                {broadCategories.map((text, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                      →
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                2. Block Station Subclasses (Absolute Block System)
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
                <table className="w-full min-w-xl border-collapse text-left">
                  <thead>
                    <tr className="border-b border-amber-500/20 bg-slate-950/50">
                      <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-200 sm:px-5 sm:text-base">
                        Class
                      </th>
                      <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-200 sm:px-5 sm:text-base">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {blockSubclasses.map((row) => (
                      <tr
                        key={row.className}
                        className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                      >
                        <td className="whitespace-nowrap border-r border-slate-700/40 px-4 py-4 text-[15px] font-semibold text-amber-100/95 sm:px-5 sm:text-base">
                          {row.className}
                        </td>
                        <td className="px-4 py-4 text-[15px] leading-relaxed text-slate-300 sm:px-5 sm:text-base">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="space-y-3">
                {subclassNotes.map((text, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                      →
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                3. Minimum Fixed Signal Equipment
              </h3>
              <ul className="space-y-3">
                {signalEquipment.map((text, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                      ✓
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.45s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Station Section (G.R. 1.02(54))
            </h2>
          </header>

          <div className="space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <p className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-[15px] font-semibold leading-relaxed text-amber-100 ring-1 ring-amber-400/15 sm:text-base">
              Applies to Class „B‟ stations only.
            </p>

            <div className="space-y-5">
              {stationSectionGroups.map((group) => (
                <section key={group.title} className="space-y-3">
                  <h3 className="flex items-center gap-2 text-base font-bold text-amber-100 sm:text-lg">
                    <span className="text-amber-300" aria-hidden>
                      →
                    </span>
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((text) => (
                      <li
                        key={text}
                        className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                          ✓
                        </span>
                        <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
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

export default StationPage
