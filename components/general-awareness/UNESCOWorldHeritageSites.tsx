'use client'

import { Landmark, Search, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'

type UNESCOWorldHeritageSitesProps = {
  showBackNav?: boolean
}

type SiteRow = {
  siteName: string
  stateName: string
  year: string
}

type SiteGroup = {
  title: string
  rows: SiteRow[]
}

const siteGroups: SiteGroup[] = [
  {
    title: 'Cultural World Heritage Sites (36)',
    rows: [
      { siteName: 'Agra Fort', stateName: 'Uttar Pradesh', year: '1983' },
      { siteName: 'Ajanta Caves', stateName: 'Maharashtra', year: '1983' },
      { siteName: 'Ellora Caves', stateName: 'Maharashtra', year: '1983' },
      { siteName: 'Taj Mahal', stateName: 'Uttar Pradesh', year: '1983' },
      { siteName: 'Sun Temple, Konarak', stateName: 'Odisha', year: '1984' },
      { siteName: 'Group of Monuments at Mahabalipuram', stateName: 'Tamil Nadu', year: '1984' },
      { siteName: 'Churches and Convents of Goa', stateName: 'Goa', year: '1986' },
      { siteName: 'Fatehpur Sikri', stateName: 'Uttar Pradesh', year: '1986' },
      { siteName: 'Group of Monuments at Hampi', stateName: 'Karnataka', year: '1986' },
      { siteName: 'Khajuraho Group of Monuments', stateName: 'Madhya Pradesh', year: '1986' },
      { siteName: 'Group of Monuments at Pattadakal', stateName: 'Karnataka', year: '1987' },
      { siteName: 'Elephanta Caves', stateName: 'Maharashtra', year: '1987' },
      { siteName: 'Great Living Chola Temples', stateName: 'Tamil Nadu', year: '1987, extended 2004' },
      { siteName: 'Buddhist Monuments at Sanchi', stateName: 'Madhya Pradesh', year: '1989' },
      { siteName: "Humayun's Tomb", stateName: 'Delhi', year: '1993' },
      { siteName: 'Qutb Minar and its Monuments', stateName: 'Delhi', year: '1993' },
      {
        siteName: 'Mountain Railways of India (Darjeeling Himalayan, Nilgiri, Kalka-Shimla)',
        stateName: 'Multiple states',
        year: '1999, 2005, 2008',
      },
      { siteName: 'Rock Shelters of Bhimbetka', stateName: 'Madhya Pradesh', year: '2003' },
      { siteName: 'Champaner-Pavagadh Archaeological Park', stateName: 'Gujarat', year: '2004' },
      {
        siteName: 'Chhatrapati Shivaji Terminus (formerly Victoria Terminus)',
        stateName: 'Maharashtra',
        year: '2004',
      },
      { siteName: 'Red Fort Complex', stateName: 'Delhi', year: '2007' },
      { siteName: 'The Jantar Mantar, Jaipur', stateName: 'Rajasthan', year: '2010' },
      {
        siteName: 'Western Ghats',
        stateName: 'Multiple states',
        year: '2012 (Note: Natural, corrected in list below)',
      },
      { siteName: 'Hill Forts of Rajasthan', stateName: 'Rajasthan', year: '2013' },
      { siteName: "Rani-ki-Vav (the Queen's Stepwell) at Patan", stateName: 'Gujarat', year: '2014' },
      {
        siteName: 'Great Himalayan National Park Conservation Area',
        stateName: 'Himachal Pradesh',
        year: '2014 (Note: Natural)',
      },
      {
        siteName: 'Archaeological Site of Nalanda Mahavihara at Nalanda, Bihar',
        stateName: 'Bihar',
        year: '2016',
      },
      {
        siteName: 'The Architectural Work of Le Corbusier (Capitol Complex, Chandigarh)',
        stateName: 'Chandigarh',
        year: '2016',
      },
      { siteName: 'Historic City of Ahmadabad', stateName: 'Gujarat', year: '2017' },
      {
        siteName: 'Victorian Gothic and Art Deco Ensembles of Mumbai',
        stateName: 'Maharashtra',
        year: '2018',
      },
      { siteName: 'Jaipur City', stateName: 'Rajasthan', year: '2019' },
      { siteName: 'Dholavira: a Harappan City', stateName: 'Gujarat', year: '2021' },
      { siteName: 'Kakatiya Rudreshwara (Ramappa) Temple', stateName: 'Telangana', year: '2021' },
      { siteName: 'Sacred Ensembles of the Hoysalas', stateName: 'Karnataka', year: '2023' },
      { siteName: 'Santiniketan', stateName: 'West Bengal', year: '2023' },
      {
        siteName: 'Moidams - the Mound-Burial System of the Ahom Dynasty',
        stateName: 'Assam',
        year: '2024',
      },
      {
        siteName: 'Maratha Military Landscapes of India',
        stateName: 'Maharashtra & Tamil Nadu',
        year: '2025 (Note: This brings the cultural count to 36; some sources vary slightly in numbering due to serial extensions.)',
      },
    ],
  },
  {
    title: 'Natural World Heritage Sites (7)',
    rows: [
      { siteName: 'Kaziranga National Park', stateName: 'Assam', year: '1985' },
      { siteName: 'Keoladeo National Park', stateName: 'Rajasthan', year: '1985' },
      { siteName: 'Manas Wildlife Sanctuary', stateName: 'Assam', year: '1985' },
      { siteName: 'Sundarbans National Park', stateName: 'West Bengal', year: '1987' },
      {
        siteName: 'Nanda Devi and Valley of Flowers National Parks',
        stateName: 'Uttarakhand',
        year: '1988, extended 2005',
      },
      { siteName: 'Western Ghats', stateName: 'Multiple states', year: '2012' },
      {
        siteName: 'Great Himalayan National Park Conservation Area',
        stateName: 'Himachal Pradesh',
        year: '2014',
      },
    ],
  },
  {
    title: 'Mixed World Heritage Site (1)',
    rows: [
      {
        siteName: 'Khangchendzonga National Park',
        stateName: 'Sikkim',
        year: '2016 (Cultural + Natural criteria)',
      },
    ],
  },
]

const totalSiteCount = siteGroups.reduce((n, group) => n + group.rows.length, 0)

function filterGroups(query: string) {
  const raw = query.trim()
  if (!raw) {
    return siteGroups
  }

  const q = raw.toLowerCase()

  return siteGroups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((row) => {
        if (row.siteName.toLowerCase().includes(q)) return true
        if (row.stateName.toLowerCase().includes(q)) return true
        if (row.year.includes(raw)) return true
        return false
      }),
    }))
    .filter((group) => group.rows.length > 0)
}

type SearchBarFieldProps = {
  value: string
  onChange: (next: string) => void
  inputId: string
  variant?: 'inline' | 'floating'
}

function SearchBarField({
  value,
  onChange,
  inputId,
  variant = 'inline',
}: SearchBarFieldProps) {
  const shell =
    variant === 'floating'
      ? 'border-slate-500/80 bg-slate-800/85 shadow-2xl shadow-black/50 ring-cyan-500/15'
      : 'border-slate-600/70 bg-slate-800/60 shadow-lg shadow-slate-950/50 ring-slate-500/20'

  return (
    <div
      className={`relative mx-auto max-w-2xl rounded-2xl border p-1.5 backdrop-blur-md ring-1 transition-shadow focus-within:ring-cyan-500/35 focus-within:shadow-cyan-950/20 ${shell}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[calc(1rem-2px)] bg-linear-to-r from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity focus-within:opacity-100" />
      <div className="relative flex items-center gap-2 sm:gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300/90">
          <Search className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="UNESCO World Heritage Sites of India"
          className="min-w-0 flex-1 bg-transparent py-2.5 text-base text-slate-100 placeholder:text-slate-500 focus:outline-none"
          autoComplete="off"
          spellCheck={false}
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-600/80 text-slate-400 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        ) : null}
      </div>
    </div>
  )
}

const UNESCOWorldHeritageSites = ({ showBackNav = false }: UNESCOWorldHeritageSitesProps) => {
  const [search, setSearch] = useState('')
  const searchAnchorRef = useRef<HTMLDivElement>(null)
  const [showFloatingSearch, setShowFloatingSearch] = useState(false)

  useEffect(() => {
    const el = searchAnchorRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingSearch(!entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filteredGroups = useMemo(() => filterGroups(search), [search])
  const visibleCount = useMemo(
    () => filteredGroups.reduce((n, group) => n + group.rows.length, 0),
    [filteredGroups],
  )
  const isFiltering = search.trim().length > 0

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-950 via-slate-900 to-cyan-950 px-3 py-10 sm:px-6 lg:px-8">
      <div
        className={`fixed inset-x-0 top-16 z-40 flex min-w-0 justify-center px-2 pt-2 pb-1 sm:px-4 sm:pt-3 sm:pb-2 transition-all duration-300 ease-out ${
          showFloatingSearch
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!showFloatingSearch}
      >
        <div
          className={`w-full min-w-0 max-w-2xl transition-transform duration-300 ease-out ${
            showFloatingSearch ? 'translate-y-0' : '-translate-y-2'
          }`}
        >
          <div className="rounded-2xl border border-slate-600/50 bg-slate-900/92 p-1.5 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-2">
            <SearchBarField
              value={search}
              onChange={setSearch}
              inputId="unesco-world-heritage-sites-search-floating"
              variant="floating"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <header className="mb-10 rounded-3xl border border-cyan-400/25 bg-slate-900/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">General Awareness</p>
          <h1 className="mt-3 text-2xl font-bold text-white sm:text-4xl">UNESCO World Heritage Sites of India</h1>
          
        </header>

        <div
          ref={searchAnchorRef}
          className="mb-8 sm:mb-10"
          role="search"
          aria-label="Filter UNESCO sites by site name, state name, or year"
        >
          <SearchBarField
            value={search}
            onChange={setSearch}
            inputId="unesco-world-heritage-sites-search"
          />
          {isFiltering ? (
            <p className="mt-3 text-center text-sm text-slate-400">
              Showing{' '}
              <span className="font-semibold text-cyan-300/90 tabular-nums">
                {visibleCount}
              </span>{' '}
              of {totalSiteCount} sites
            </p>
          ) : null}
        </div>

        <section className="mb-8 sm:mb-10">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-900/55 shadow-2xl shadow-black/30 backdrop-blur-md">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-linear-to-b from-cyan-500 via-sky-500 to-indigo-600"
              aria-hidden
            />
            <div className="p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Landmark className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h2 className="text-base font-semibold uppercase tracking-wide text-cyan-300 sm:text-lg">
                  About UNESCO World Heritage Sites
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  The United Nations Educational, Scientific and Cultural
                  Organization (UNESCO) designates World Heritage Sites of
                  outstanding universal value to cultural or natural heritage
                  which have been nominated by countries which are signatories to
                  the{' '}
                  <span className="font-semibold text-slate-100">
                    UNESCO World Heritage Convention, established in 1972
                  </span>
                  .[1] Cultural heritage consists of monuments (such as
                  architectural works, monumental sculptures, or inscriptions),
                  groups of buildings, and sites (including archaeological sites).
                  Natural features (consisting of physical and biological
                  formations), geological and physiographical formations
                  (including habitats of threatened species of animals and
                  plants), and natural sites which are important from the point of
                  view of science, conservation or natural beauty, are defined as
                  natural heritage.[2] India accepted the convention on{' '}
                  <span className="font-semibold text-cyan-200">
                    14 November 1977
                  </span>
                  , making its sites eligible for inclusion on the list.[3]
                </p>

                <p>
                  There are{' '}
                  <span className="font-semibold text-cyan-200">
                    44 World Heritage Sites
                  </span>{' '}
                  in India. Out of these, 36 are cultural, seven are natural, and
                  one,{' '}
                  <span className="font-semibold text-slate-100">
                    Khangchendzonga National Park
                  </span>
                  , is of mixed type, listed for both cultural and natural
                  properties. India has the sixth-most sites worldwide. The first
                  sites to be listed were the Ajanta Caves, Ellora Caves, Agra
                  Fort, and Taj Mahal, all of which were inscribed in the 1983
                  session of the World Heritage Committee. The most recent
                  addition is the Maratha Military Landscapes of India (inscribed
                  in 2025).
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-8">
          {filteredGroups.length === 0 ? (
            <div className="rounded-2xl border border-slate-600/70 bg-slate-800/40 px-6 py-14 text-center shadow-xl shadow-slate-950/40 backdrop-blur-sm">
              <p className="text-sm font-medium text-slate-300 sm:text-base">
                No UNESCO sites match your search.
              </p>
              <button
                type="button"
                onClick={() => setSearch('')}
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-cyan-500/45 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/20 hover:border-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredGroups.map((group) => (
              <section
                key={group.title}
                className="overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-900/45 shadow-xl shadow-black/25 backdrop-blur-sm"
              >
                <div className="border-b border-slate-600/60 bg-linear-to-r from-cyan-800/40 via-indigo-800/30 to-slate-900/60 px-4 py-4 sm:px-6">
                  <h2 className="text-lg font-bold text-cyan-100 sm:text-xl">{group.title}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead>
                      <tr className="border-b border-slate-700/70 bg-slate-950/60">
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-cyan-300 sm:px-6">
                          S.No
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-cyan-300 sm:px-6">
                          Site Name
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-cyan-300 sm:px-6">
                          State Name
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-cyan-300 sm:px-6">
                          Year
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row, index) => (
                        <tr
                          key={`${group.title}-${row.siteName}`}
                          className="border-b border-slate-800/70 last:border-0 transition-colors hover:bg-slate-800/45"
                        >
                          <td className="px-4 py-3 text-sm tabular-nums text-slate-300 sm:px-6">{index + 1}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-slate-100 sm:px-6">{row.siteName}</td>
                          <td className="px-4 py-3 text-sm text-slate-200 sm:px-6">{row.stateName}</td>
                          <td className="px-4 py-3 text-sm text-slate-300 sm:px-6">{row.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))
          )}
        </div>

        {showBackNav ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/45 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/20"
            >
              <span aria-hidden>←</span>
              Back to General Awareness
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default UNESCOWorldHeritageSites