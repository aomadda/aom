'use client'

import { Leaf, Search, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import {
  biosphereReservesByState,
  biosphereReservesTitleLine,
} from '@/assets/general-awareness/biosphere-reserves'

type BiosphereReservesProps = {
  showBackNav?: boolean
}

const totalReserveCount = biosphereReservesByState.reduce(
  (n, g) => n + g.reserves.length,
  0,
)

function filterGroups(query: string) {
  const raw = query.trim()
  if (!raw) {
    return biosphereReservesByState
  }
  const q = raw.toLowerCase()

  return biosphereReservesByState
    .map((group) => ({
      ...group,
      reserves: group.reserves.filter((row) => {
        if (group.state.toLowerCase().includes(q)) return true
        if (row.reserveName.toLowerCase().includes(q)) return true
        if (row.year.includes(raw)) return true
        return false
      }),
    }))
    .filter((g) => g.reserves.length > 0)
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
          placeholder="Biosphere Reserves of India"
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

const BiosphereReserves = ({ showBackNav = false }: BiosphereReservesProps) => {
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
    () => filteredGroups.reduce((n, g) => n + g.reserves.length, 0),
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
              inputId="biosphere-reserves-search-floating"
              variant="floating"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
            Biosphere Reserves
          </h1>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            {biosphereReservesTitleLine}
          </p>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 opacity-80"
            aria-hidden
          />
        </header>

        <div
          ref={searchAnchorRef}
          className="mb-8 sm:mb-10"
          role="search"
          aria-label="Filter biosphere reserves by state, name, or year"
        >
          <SearchBarField
            value={search}
            onChange={setSearch}
            inputId="biosphere-reserves-search"
          />
          {isFiltering ? (
            <p className="mt-3 text-center text-sm text-slate-400">
              Showing{' '}
              <span className="font-semibold text-emerald-300/90 tabular-nums">
                {visibleCount}
              </span>{' '}
              of {totalReserveCount} reserves
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
                  <Leaf className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-300/90 sm:text-lg">
                  About Biosphere Reserves
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                There are{' '}
                <span className="font-semibold text-emerald-200">
                  18 biosphere reserves
                </span>{' '}
                in India. [1] They protect larger areas of natural habitat than a
                typical national park or animal sanctuary, and often include one
                or more national parks or reserves, along with{' '}
                <span className="font-semibold text-slate-100">buffer zones</span>{' '}
                that are open to some economic uses. Protection is granted not
                only to the flora and fauna of the protected region, but also to
                the human communities who inhabit these regions, and their ways
                of life. In total there are 18 biosphere reserves in India.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-10 sm:space-y-12">
          {filteredGroups.length === 0 ? (
            <div className="rounded-2xl border border-slate-600/70 bg-slate-800/40 px-6 py-14 text-center shadow-xl shadow-slate-950/40 backdrop-blur-sm">
              <p className="text-sm font-medium text-slate-300 sm:text-base">
                No reserves match your search.
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
                key={group.state}
                className="rounded-2xl border border-slate-600/70 bg-slate-800/40 shadow-xl shadow-slate-950/40 backdrop-blur-sm overflow-hidden"
              >
                <div className="bg-linear-to-r from-emerald-900/50 via-slate-800/90 to-slate-800/70 px-4 py-4 sm:px-6 sm:py-4 border-b border-slate-600/60">
                  <h2 className="text-lg sm:text-xl font-bold text-emerald-100 tracking-tight">
                    {group.state}
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-600/60 bg-slate-900/40">
                        <th
                          scope="col"
                          className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 w-14 sm:w-16"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 w-24 sm:w-28"
                        >
                          Year
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 min-w-36"
                        >
                          Biosphere Reserve Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 sm:px-5 text-xs font-semibold uppercase tracking-wide text-emerald-400/90 min-w-40"
                        >
                          UNESCO Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.reserves.map((row) => (
                        <tr
                          key={`${group.state}-${row.serial}-${row.reserveName}`}
                          className="border-b border-slate-700/50 last:border-0 hover:bg-slate-800/50 transition-colors"
                        >
                          <td className="px-3 py-3 sm:px-5 text-sm tabular-nums text-slate-400">
                            {row.serial}
                          </td>
                          <td className="px-3 py-3 sm:px-5 text-sm tabular-nums text-slate-200">
                            {row.year}
                          </td>
                          <td className="px-3 py-3 sm:px-5 text-sm sm:text-base font-medium text-slate-100">
                            {row.reserveName}
                          </td>
                          <td className="px-3 py-3 sm:px-5 text-sm text-slate-300">
                            {row.unescoStatus}
                          </td>
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
          <div className="mt-12 flex justify-center pb-4">
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/20 hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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

export default BiosphereReserves
