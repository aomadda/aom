'use client'

import { Suspense, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { abbreviations } from '@/assets/abbreviations'
import { findAbbreviation } from '@/lib/abbreviation-topics'

type AbbreviationItem = {
  acronym: string
  fullForm: string
  explanation: string
  reference: string
}

const letterGroups = Object.entries(abbreviations) as [string, AbbreviationItem[]][]
const totalCount = letterGroups.reduce((count, [, items]) => count + items.length, 0)

function AbbreviationsBrowser() {
  const searchParams = useSearchParams()
  const letterParam = searchParams.get('letter') ?? ''
  const indexParam = searchParams.get('i')
  const queryParam = searchParams.get('q') ?? ''
  const selectionKey = `${letterParam}|${indexParam ?? ''}|${queryParam}`

  const [searchTerm, setSearchTerm] = useState(queryParam)
  const [seenSelection, setSeenSelection] = useState(selectionKey)
  const [pinned, setPinned] = useState(letterParam !== '' && indexParam !== null)

  if (seenSelection !== selectionKey) {
    setSeenSelection(selectionKey)
    setSearchTerm(queryParam)
    setPinned(letterParam !== '' && indexParam !== null)
  }

  const pinnedItem = useMemo(() => {
    if (!pinned || indexParam === null) return null
    const index = Number(indexParam)
    return findAbbreviation(letterParam, index)
  }, [pinned, letterParam, indexParam])

  const filteredGroups = useMemo(() => {
    if (pinnedItem) return [{ letter: pinnedItem.letter, items: [pinnedItem.item] }]

    const query = searchTerm.trim().toLowerCase()
    if (!query) {
      return letterGroups.map(([letter, items]) => ({ letter, items }))
    }

    return letterGroups
      .map(([letter, items]) => ({
        letter,
        items: items.filter(
          (item) =>
            item.acronym.toLowerCase().includes(query) ||
            item.fullForm.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [pinnedItem, searchTerm])

  const shownCount = filteredGroups.reduce((count, group) => count + group.items.length, 0)

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #134e4a, #0f172a)',
      }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-blob rounded-full bg-emerald-500 opacity-20 mix-blend-multiply blur-xl filter" />
        <div className="animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 animate-blob rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-xl filter" />
        <div className="animation-delay-4000 absolute top-40 left-40 h-80 w-80 animate-blob rounded-full bg-teal-500 opacity-20 mix-blend-multiply blur-xl filter" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-emerald-300 uppercase">
            Study
          </p>
          <h1
            className="mb-4 bg-clip-text text-3xl font-bold text-transparent lg:text-5xl"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff, #a7f3d0, #cffafe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Abbreviations
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-base">
            Search any of the {totalCount} Indian Railways abbreviations by acronym or full form.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm">{totalCount} Abbreviations</span>
          </div>
        </div>

        <div className="sticky top-20 z-40 mb-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by acronym or full form, for example DRM"
                value={searchTerm}
                onChange={(event) => {
                  setPinned(false)
                  setSearchTerm(event.target.value)
                }}
                className="w-full rounded-full border border-white/30 bg-white/20 py-3 pr-10 pl-12 text-sm text-white shadow-2xl shadow-emerald-500/20 backdrop-blur-xl transition-all duration-300 placeholder:text-gray-300 focus:border-transparent focus:ring-2 focus:ring-emerald-400 focus:outline-none lg:text-base"
              />
              {searchTerm ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    setPinned(false)
                    setSearchTerm('')
                  }}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <p className="mb-8 text-center text-gray-400">
          Showing <span className="font-semibold text-white">{shownCount}</span> of{' '}
          <span className="font-semibold text-white">{totalCount}</span> abbreviations
        </p>

        <div className="mx-auto max-w-7xl space-y-10">
          {filteredGroups.map((group) => (
            <section key={group.letter}>
              <div className="mb-4 flex items-end justify-between gap-3">
                <h2 className="text-lg font-semibold text-emerald-100 sm:text-xl">{group.letter}</h2>
                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-100">
                  {group.items.length}
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, index) => (
                    <article
                      key={`${group.letter}-${item.acronym}-${index}`}
                      className="group relative flex min-h-42 flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-950/40"
                    >
                      <span
                        className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                        style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}
                      >
                        {group.letter}
                      </span>
                      <span className="pr-10 text-xs font-semibold tracking-wide text-emerald-300 uppercase">
                        {item.acronym}
                      </span>
                      <h3 className="mt-3 text-base leading-snug font-medium text-white">{item.fullForm}</h3>
                      <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-semibold tracking-wide text-emerald-300 uppercase">
                          Explanation
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-200">{item.explanation}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                        <span className="text-xs font-semibold tracking-wide text-emerald-300 uppercase">
                          Reference
                        </span>
                        <span className="text-right text-xs font-medium text-cyan-200">{item.reference}</span>
                      </div>
                    </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {shownCount === 0 ? (
          <div className="py-4 text-center">
            <h3 className="mb-2 text-lg font-bold text-white lg:text-2xl">No abbreviations found</h3>
            <p className="text-sm text-gray-400 lg:text-base">
              Try an acronym or a full form such as DRM
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function AbbreviationsPage() {
  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-screen items-center justify-center text-emerald-100"
          style={{ background: 'linear-gradient(to bottom right, #0f172a, #134e4a, #0f172a)' }}
        >
          Loading abbreviations...
        </div>
      }
    >
      <AbbreviationsBrowser />
    </Suspense>
  )
}
