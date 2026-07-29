'use client'

import { Plane, Search, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'

type InternationalAirportsProps = {
  showBackNav?: boolean
}

type AirportRow = {
  serial: string
  stateOrUt: string
  airportName: string
  cityOrLocation: string
  year: string
}

const airports: AirportRow[] = [
  {
    serial: '1',
    stateOrUt: 'Andaman & Nicobar Islands',
    airportName: 'Veer Savarkar International Airport',
    cityOrLocation: 'Port Blair',
    year: '2000s',
  },
  {
    serial: '2',
    stateOrUt: 'Andhra Pradesh',
    airportName: 'Visakhapatnam International Airport (Alluri Sitarama Raju)',
    cityOrLocation: 'Visakhapatnam',
    year: '2010s',
  },
  {
    serial: '3',
    stateOrUt: 'Assam',
    airportName: 'Lokpriya Gopinath Bordoloi International Airport',
    cityOrLocation: 'Guwahati',
    year: '2000s',
  },
  {
    serial: '4',
    stateOrUt: 'Bihar',
    airportName: 'Jay Prakash Narayan International Airport',
    cityOrLocation: 'Gaya',
    year: '2002',
  },
  {
    serial: '5',
    stateOrUt: 'Chandigarh (UT)',
    airportName: 'Chandigarh International Airport',
    cityOrLocation: 'Chandigarh',
    year: '2010s',
  },
  {
    serial: '6',
    stateOrUt: 'Delhi',
    airportName: 'Indira Gandhi International Airport',
    cityOrLocation: 'New Delhi',
    year: '1962 (major expansions later)',
  },
  {
    serial: '7',
    stateOrUt: 'Goa',
    airportName: 'Dabolim Airport (Goa International Airport)',
    cityOrLocation: 'Dabolim',
    year: '1960s',
  },
  {
    serial: '8',
    stateOrUt: 'Goa',
    airportName: 'Manohar International Airport (Mopa)',
    cityOrLocation: 'Mopa / North Goa',
    year: '2023',
  },
  {
    serial: '9',
    stateOrUt: 'Gujarat',
    airportName: 'Sardar Vallabhbhai Patel International Airport',
    cityOrLocation: 'Ahmedabad',
    year: '1990s',
  },
  {
    serial: '10',
    stateOrUt: 'Gujarat',
    airportName: 'Surat International Airport',
    cityOrLocation: 'Surat',
    year: '2010s-2020s',
  },
  {
    serial: '11',
    stateOrUt: 'Jammu & Kashmir',
    airportName: 'Sheikhul Aalam International Airport',
    cityOrLocation: 'Srinagar',
    year: '2000s',
  },
  {
    serial: '12',
    stateOrUt: 'Karnataka',
    airportName: 'Kempegowda International Airport',
    cityOrLocation: 'Bengaluru',
    year: '2008',
  },
  {
    serial: '13',
    stateOrUt: 'Karnataka',
    airportName: 'Mangaluru International Airport',
    cityOrLocation: 'Mangaluru',
    year: '2000s',
  },
  {
    serial: '14',
    stateOrUt: 'Kerala',
    airportName: 'Cochin International Airport',
    cityOrLocation: 'Kochi',
    year: '1999',
  },
  {
    serial: '15',
    stateOrUt: 'Kerala',
    airportName: 'Calicut International Airport',
    cityOrLocation: 'Kozhikode',
    year: '2000s',
  },
  {
    serial: '16',
    stateOrUt: 'Kerala',
    airportName: 'Thiruvananthapuram International Airport',
    cityOrLocation: 'Thiruvananthapuram',
    year: 'Pre-2000 (major hub)',
  },
  {
    serial: '17',
    stateOrUt: 'Kerala',
    airportName: 'Kannur International Airport',
    cityOrLocation: 'Kannur',
    year: '2018',
  },
  {
    serial: '18',
    stateOrUt: 'Madhya Pradesh',
    airportName: 'Devi Ahilya Bai Holkar Airport',
    cityOrLocation: 'Indore',
    year: '2010s-2020s',
  },
  {
    serial: '19',
    stateOrUt: 'Maharashtra',
    airportName: 'Chhatrapati Shivaji Maharaj International Airport',
    cityOrLocation: 'Mumbai',
    year: '1942',
  },
  {
    serial: '20',
    stateOrUt: 'Maharashtra',
    airportName: 'Dr. Babasaheb Ambedkar International Airport',
    cityOrLocation: 'Nagpur',
    year: '2000s',
  },
  {
    serial: '21',
    stateOrUt: 'Maharashtra',
    airportName: 'Pune Airport',
    cityOrLocation: 'Pune',
    year: '2010s (customs facilities)',
  },
  {
    serial: '22',
    stateOrUt: 'Maharashtra',
    airportName: 'Navi Mumbai International Airport',
    cityOrLocation: 'Navi Mumbai',
    year: '2025',
  },
  {
    serial: '23',
    stateOrUt: 'Manipur',
    airportName: 'Imphal International Airport',
    cityOrLocation: 'Imphal',
    year: '2010s',
  },
  {
    serial: '24',
    stateOrUt: 'Odisha',
    airportName: 'Biju Patnaik International Airport',
    cityOrLocation: 'Bhubaneswar',
    year: '1962 (upgraded later)',
  },
  {
    serial: '25',
    stateOrUt: 'Punjab',
    airportName: 'Sri Guru Ram Dass Jee International Airport',
    cityOrLocation: 'Amritsar',
    year: '2000s',
  },
  {
    serial: '26',
    stateOrUt: 'Rajasthan',
    airportName: 'Jaipur International Airport',
    cityOrLocation: 'Jaipur',
    year: '2000s',
  },
  {
    serial: '27',
    stateOrUt: 'Tamil Nadu',
    airportName: 'Chennai International Airport',
    cityOrLocation: 'Chennai',
    year: '1930s-1940s (major hub)',
  },
  {
    serial: '28',
    stateOrUt: 'Tamil Nadu',
    airportName: 'Coimbatore International Airport',
    cityOrLocation: 'Coimbatore',
    year: '2010s',
  },
  {
    serial: '29',
    stateOrUt: 'Tamil Nadu',
    airportName: 'Tiruchirappalli International Airport',
    cityOrLocation: 'Tiruchirappalli',
    year: '2000s',
  },
  {
    serial: '30',
    stateOrUt: 'Tamil Nadu',
    airportName: 'Madurai International Airport',
    cityOrLocation: 'Madurai',
    year: '2010s (customs facilities)',
  },
  {
    serial: '31',
    stateOrUt: 'Telangana',
    airportName: 'Rajiv Gandhi International Airport',
    cityOrLocation: 'Hyderabad (Shamshabad)',
    year: '2008',
  },
  {
    serial: '32',
    stateOrUt: 'Uttar Pradesh',
    airportName: 'Chaudhary Charan Singh International Airport',
    cityOrLocation: 'Lucknow',
    year: '2000s',
  },
  {
    serial: '33',
    stateOrUt: 'Uttar Pradesh',
    airportName: 'Lal Bahadur Shastri International Airport',
    cityOrLocation: 'Varanasi',
    year: '2000s',
  },
  {
    serial: '34',
    stateOrUt: 'Uttar Pradesh',
    airportName: 'Noida International Airport (Jewar)',
    cityOrLocation: 'Jewar (near Greater Noida)',
    year: '2026 (inaugurated March 2026; operations starting mid-2026)',
  },
  {
    serial: '35',
    stateOrUt: 'West Bengal',
    airportName: 'Netaji Subhas Chandra Bose International Airport',
    cityOrLocation: 'Kolkata',
    year: '1920s-1930s (major hub)',
  },
  {
    serial: '36',
    stateOrUt: 'West Bengal',
    airportName: 'Bagdogra International Airport',
    cityOrLocation: 'Siliguri',
    year: '2002',
  },
]

const totalAirportCount = airports.length

type AirportGroup = {
  stateOrUt: string
  airports: AirportRow[]
}

const airportGroups: AirportGroup[] = airports.reduce<AirportGroup[]>((acc, row) => {
  const existing = acc.find((group) => group.stateOrUt === row.stateOrUt)
  if (existing) {
    existing.airports.push(row)
  } else {
    acc.push({ stateOrUt: row.stateOrUt, airports: [row] })
  }
  return acc
}, [])

function filterGroups(query: string) {
  const raw = query.trim()
  if (!raw) {
    return airportGroups
  }

  const q = raw.toLowerCase()
  return airportGroups
    .map((group) => ({
      ...group,
      airports: group.airports.filter((row) => {
        if (group.stateOrUt.toLowerCase().includes(q)) return true
        if (row.airportName.toLowerCase().includes(q)) return true
        if (row.cityOrLocation.toLowerCase().includes(q)) return true
        if (row.year.includes(raw)) return true
        return false
      }),
    }))
    .filter((group) => group.airports.length > 0)
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
      ? 'border-slate-500/80 bg-slate-800/85 shadow-2xl shadow-black/50 ring-emerald-500/15'
      : 'border-slate-600/70 bg-slate-800/60 shadow-lg shadow-slate-950/50 ring-slate-500/20'

  return (
    <div
      className={`relative mx-auto max-w-2xl rounded-2xl border p-1.5 backdrop-blur-md ring-1 transition-shadow focus-within:ring-emerald-500/35 focus-within:shadow-emerald-950/20 ${shell}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[calc(1rem-2px)] bg-linear-to-r from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 transition-opacity focus-within:opacity-100" />
      <div className="relative flex items-center gap-2 sm:gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300/90">
          <Search className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="International Airports of India"
          className="min-w-0 flex-1 bg-transparent py-2.5 text-base text-slate-100 placeholder:text-slate-500 focus:outline-none"
          autoComplete="off"
          spellCheck={false}
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-600/80 text-slate-400 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        ) : null}
      </div>
    </div>
  )
}

const InternationalAirports = ({ showBackNav = false }: InternationalAirportsProps) => {
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
    () => filteredGroups.reduce((n, group) => n + group.airports.length, 0),
    [filteredGroups],
  )
  const isFiltering = search.trim().length > 0

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-emerald-950/90 py-10 px-3 sm:px-6 lg:px-8">
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
              inputId="international-airports-search-floating"
              variant="floating"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <header className="text-center mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
            International Airports in India
          </h1>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 opacity-80"
            aria-hidden
          />
        </header>

        <div
          ref={searchAnchorRef}
          className="mb-8 sm:mb-10"
          role="search"
          aria-label="Filter international airports by state, airport name, city, or year"
        >
          <SearchBarField
            value={search}
            onChange={setSearch}
            inputId="international-airports-search"
          />
          {isFiltering ? (
            <p className="mt-3 text-center text-sm text-slate-400">
              Showing{' '}
              <span className="font-semibold text-emerald-300/90 tabular-nums">
                {visibleCount}
              </span>{' '}
              of {totalAirportCount} airports
            </p>
          ) : null}
        </div>

        <section className="mb-8 sm:mb-10">
          <div className="relative overflow-hidden rounded-2xl border border-slate-600/70 bg-slate-800/40 shadow-xl shadow-slate-950/40 backdrop-blur-sm">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/60 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-linear-to-b from-emerald-500 via-teal-500 to-emerald-600"
              aria-hidden
            />
            <div className="p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Plane className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-300/90 sm:text-lg">
                  About Airports in India
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                India has a total of{' '}
                <span className="font-semibold text-emerald-200">
                  487 airports and airstrips
                </span>
                . This list of airports in India includes airports recognized by{' '}
                <span className="font-semibold text-slate-100">
                  Airports Authority of India (AAI)
                </span>
                . There are{' '}
                <span className="font-semibold text-slate-100">
                  36 international
                </span>{' '}
                and{' '}
                <span className="font-semibold text-slate-100">
                  11 limited international
                </span>{' '}
                airports apart from other domestic, private and civil enclaves.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-10 sm:space-y-12">
          {filteredGroups.length === 0 ? (
            <div className="rounded-2xl border border-slate-600/70 bg-slate-800/40 px-6 py-14 text-center shadow-xl shadow-slate-950/40 backdrop-blur-sm">
              <p className="text-sm font-medium text-slate-300 sm:text-base">
                No airports match your search.
              </p>
              <button
                type="button"
                onClick={() => setSearch('')}
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-emerald-500/45 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/20 hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredGroups.map((group) => (
              <section
                key={group.stateOrUt}
                className="rounded-2xl border border-slate-600/70 bg-slate-800/40 shadow-xl shadow-slate-950/40 backdrop-blur-sm overflow-hidden"
              >
                <div className="bg-linear-to-r from-emerald-900/50 via-slate-800/90 to-slate-800/70 px-4 py-4 sm:px-6 sm:py-4 border-b border-slate-600/60">
                  <h2 className="text-lg sm:text-xl font-bold text-emerald-100 tracking-tight">
                    {group.stateOrUt}
                  </h2>
                </div>

                <div className="grid gap-3 p-4 sm:gap-4 sm:p-6">
                  <div className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-900/45">
                    <table className="w-full min-w-[760px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700/60 bg-slate-900/70">
                          <th className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 w-16">
                            S.No.
                          </th>
                          <th className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 min-w-72">
                            Airport Name
                          </th>
                          <th className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 min-w-48">
                            City / Location
                          </th>
                          <th className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 min-w-64">
                            Year
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.airports.map((row) => (
                          <tr
                            key={`${row.serial}-${row.airportName}`}
                            className="border-b border-slate-700/50 last:border-0 hover:bg-slate-800/50 transition-colors"
                          >
                            <td className="px-3 py-3 sm:px-5 text-sm tabular-nums text-slate-400">{row.serial}</td>
                            <td className="px-3 py-3 sm:px-5 text-sm sm:text-base font-medium text-slate-100">
                              {row.airportName}
                            </td>
                            <td className="px-3 py-3 sm:px-5 text-sm text-slate-300">{row.cityOrLocation}</td>
                            <td className="px-3 py-3 sm:px-5 text-sm text-slate-300">{row.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>

        {showBackNav ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-400/45 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 transition-colors hover:bg-blue-500/20"
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

export default InternationalAirports