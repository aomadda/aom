'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import type { WhoIsWhoItem } from '@/assets/general-awareness/who-is-who'
import {
  bureaucrats,
  cabinetMinisters,
  chairmanDirectors,
  constitutionalOfficials,
  defenseServicesOfficials,
  headsOfFinancialInstitutions,
  headsOfGovernmentDepartment,
  headsOfSports,
  ministersOfState,
  ministersOfStateIndependent,
  politicalOfficials,
} from '@/assets/general-awareness/who-is-who'

const sections = [
  constitutionalOfficials,
  politicalOfficials,
  defenseServicesOfficials,
  headsOfGovernmentDepartment,
  headsOfFinancialInstitutions,
  bureaucrats,
  headsOfSports,
  cabinetMinisters,
  ministersOfStateIndependent,
  ministersOfState,
  chairmanDirectors,
] as const

const WhoIsWho = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0)

  const toggleSection = (index: number) => {
    setOpenSectionIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Who is Who
          </h1>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 opacity-80"
            aria-hidden
          />
        </header>

        <div className="space-y-3 sm:space-y-4">
          {sections.map((section, sectionIdx) => {
            const headingId = `who-is-who-${section.sectionTitle.toLowerCase().replace(/\s+/g, '-')}`
            const panelId = `${headingId}-panel`
            const isOpen = openSectionIndex === sectionIdx

            return (
              <section
                key={section.sectionTitle}
                className="rounded-2xl border border-slate-600/80 bg-slate-800/60 shadow-xl shadow-slate-950/50 backdrop-blur-sm overflow-hidden"
              >
                <button
                  type="button"
                  id={`${headingId}-trigger`}
                  className="w-full bg-linear-to-r from-amber-700 via-amber-600 to-amber-700 px-4 py-4 sm:py-5 text-left transition-colors hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  onClick={() => toggleSection(sectionIdx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="flex w-full items-center justify-between gap-4">
                    <h2
                      id={headingId}
                      className="text-lg sm:text-xl font-bold text-white tracking-wide"
                    >
                      {section.sectionTitle}
                    </h2>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-white/95 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </span>
                </button>

                {isOpen && (
                  <ul
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="divide-y divide-slate-700/90"
                  >
                    {section.items.map((item, itemIdx) => {
                      const row = item as WhoIsWhoItem
                      return (
                        <li
                          key={`${section.sectionTitle}-${itemIdx}`}
                          className="group px-4 py-5 sm:px-6 sm:py-6 bg-linear-to-r from-slate-800/80 to-slate-800/40 hover:from-slate-800 hover:to-slate-800/70 transition-colors duration-300"
                        >
                          <div className="flex gap-4 sm:gap-5">
                            <span
                              className="shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-sm sm:text-base shadow-inner"
                              aria-hidden
                            >
                              {row.index}
                            </span>
                            <div className="min-w-0 flex-1 space-y-1.5">
                              <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                                {row.designation}
                              </p>
                              <p className="text-lg sm:text-xl font-semibold text-slate-100 leading-snug whitespace-pre-line">
                                {row.nameAndOrdinal}
                              </p>
                              {row.constituency != null &&
                                row.constituency !== '' && (
                                  <p className="text-base sm:text-lg text-slate-300/95 leading-snug">
                                    Constituency : {row.constituency}
                                  </p>
                                )}
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WhoIsWho
