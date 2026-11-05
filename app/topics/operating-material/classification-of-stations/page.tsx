'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { Building2 } from 'lucide-react'

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

const ClassificationOfStationsPage = () => {
  return (
    <OperatingTopicPage title="Classification of Stations (G.R./S.R. 1.03)" icon={Building2}>
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
                1 Broad Categories
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
                2 Block Station Subclasses (Absolute Block System)
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
                3 Minimum Fixed Signal Equipment
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
    </OperatingTopicPage>
  )
}

export default ClassificationOfStationsPage