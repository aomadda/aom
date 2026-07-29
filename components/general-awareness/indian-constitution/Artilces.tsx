'use client'

import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { BookOpen, ChevronRight, Scale, Search, Sparkles, X } from 'lucide-react'

import { articlesRawContent } from '@/assets/general-awareness/indian-constitution/articles'

type ArtilcesProps = {
  showBackNav?: boolean
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/35 shadow-xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm">
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-teal-500/5 blur-2xl" />
      <div className="relative px-4 py-5 sm:px-7 sm:py-7">{children}</div>
    </section>
  )
}

function isAllCapsLike(value: string) {
  const letters = value.replace(/[^A-Za-z]/g, '')
  return letters.length > 0 && letters === letters.toUpperCase()
}

const Artilces = ({ showBackNav = false }: ArtilcesProps) => {
  const lines = articlesRawContent.split('\n')
  const [searchInput, setSearchInput] = useState('')
  const [articleSearch, setArticleSearch] = useState('')
  const [isSearchPinned, setIsSearchPinned] = useState(false)

  const normalizedSearch = articleSearch.trim().toUpperCase()

  const filteredLines = useMemo(() => {
    if (!normalizedSearch) return lines

    return lines.filter((line) => {
      const value = line.trim()
      if (!value) return false

      const articleMatch = value.match(/^([0-9]{1,3}[A-Z]*(?:\s*[–-]\s*[0-9]{1,3}[A-Z]*)?)\s+(.*)$/)
      if (!articleMatch) return false

      const articleNumber = articleMatch[1].replace(/\s+/g, '').toUpperCase()
      return articleNumber.includes(normalizedSearch)
    })
  }, [lines, normalizedSearch])

  const onSearch = () => {
    setArticleSearch(searchInput)
  }

  const onClearSearch = () => {
    setSearchInput('')
    setArticleSearch('')
  }

  useEffect(() => {
    const onScroll = () => {
      setIsSearchPinned(window.scrollY > 220)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400/90" strokeWidth={2} />
            General Awareness
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-300/90 sm:text-base">
            Indian Constitution
          </p>
          <h1 className="mt-3 bg-linear-to-r from-emerald-100 via-teal-100 to-emerald-200 bg-clip-text text-xl font-bold uppercase tracking-tight text-transparent sm:text-2xl md:text-3xl">
            PARTS, CHAPTERS, ARTICLES
          </h1>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <div
          className={`${
            isSearchPinned
              ? 'fixed left-1/2 top-20 z-40 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 sm:top-24 sm:w-[calc(100%-2rem)]'
              : 'relative mx-auto mb-6 w-full max-w-4xl sm:mb-8'
          }`}
        >
          <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/75 p-3 ring-1 ring-emerald-500/10 shadow-lg shadow-black/20 backdrop-blur-md sm:p-4">
            <label htmlFor="article-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200/85">
              Search by Article Number
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-300/80" />
                <input
                  id="article-search"
                  type="text"
                  inputMode="search"
                  placeholder="Try 98, 56, 125, 243A..."
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') onSearch()
                  }}
                  className="h-11 w-full min-w-0 rounded-xl border border-slate-500/45 bg-slate-950/70 pl-10 pr-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400/80 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-500/35"
                />
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={onSearch}
                  className="inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl border border-emerald-500/50 bg-linear-to-r from-emerald-500/20 to-teal-500/20 px-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-4"
                >
                  <Search className="h-4 w-4" aria-hidden />
                  <span className="hidden sm:inline">Search</span>
                </button>
                {(searchInput || articleSearch) && (
                  <button
                    type="button"
                    onClick={onClearSearch}
                    className="inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl border border-slate-500/60 bg-slate-800/60 px-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:bg-slate-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 sm:px-4"
                  >
                    <X className="h-4 w-4" aria-hidden />
                    <span className="hidden sm:inline">Clear</span>
                  </button>
                )}
              </div>
            </div>
            {normalizedSearch && (
              <p className="mt-2 text-xs text-emerald-200/80">
                Showing matches for article: <span className="font-semibold text-emerald-100">{normalizedSearch}</span>
              </p>
            )}
          </div>
        </div>
        {isSearchPinned ? <div className="mb-6 h-36 sm:mb-8 sm:h-24" aria-hidden /> : null}

        <SectionShell>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
              <BookOpen className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="text-lg font-bold uppercase tracking-tight text-emerald-50 sm:text-xl">Constitution Content</h2>
          </div>

          <div className="space-y-3">
            {filteredLines.map((line, index) => {
              const raw = line
              const value = raw.trim()

              if (!value) return <div key={`blank-${index}`} className="h-1.5" aria-hidden />

              if (/^PART\s*[–-]/i.test(value)) {
                return (
                  <div
                    key={`part-${index}`}
                    className="mt-3 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-emerald-100 sm:text-base"
                  >
                    {value}
                  </div>
                )
              }

              if (/^Chapter\s*[–-]/i.test(value)) {
                return (
                  <div
                    key={`chapter-${index}`}
                    className="inline-flex rounded-lg border border-sky-400/35 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-100 sm:text-sm"
                  >
                    {value}
                  </div>
                )
              }

              if (/^Articles?\s*\(/i.test(value)) {
                return (
                  <div
                    key={`articles-meta-${index}`}
                    className="rounded-xl border border-teal-500/30 bg-teal-950/35 px-4 py-2.5 text-sm font-semibold text-teal-100"
                  >
                    {value}
                  </div>
                )
              }

              const articleMatch = value.match(/^([0-9]{1,3}[A-Z]*(?:\s*[–-]\s*[0-9]{1,3}[A-Z]*)?)\s+(.*)$/)
              if (articleMatch) {
                return (
                  <div
                    key={`article-${index}`}
                    className="grid gap-2 rounded-xl border border-slate-600/40 bg-slate-900/30 px-4 py-3 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-4"
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-linear-to-br from-emerald-500/40 to-teal-600/25 px-2 text-xs font-bold text-emerald-50 ring-1 ring-emerald-400/45">
                        {articleMatch[1]}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200/90">Article</span>
                    </div>
                    <p className="leading-relaxed text-slate-300">{articleMatch[2]}</p>
                  </div>
                )
              }

              if (isAllCapsLike(value)) {
                return (
                  <div
                    key={`heading-${index}`}
                    className="rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-violet-100 sm:text-base"
                  >
                    {value}
                  </div>
                )
              }

              return (
                <div
                  key={`sub-${index}`}
                  className="rounded-xl border border-slate-600/35 bg-slate-900/20 px-4 py-2.5 text-sm leading-relaxed text-slate-300"
                >
                  {value}
                </div>
              )
            })}
            {normalizedSearch && filteredLines.length === 0 ? (
              <div className="rounded-xl border border-amber-500/35 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-100">
                No article found for <span className="font-bold">{normalizedSearch}</span>. Try another number like 98, 56, or 125.
              </div>
            ) : null}
          </div>
        </SectionShell>

        {showBackNav ? (
          <nav
            className="mt-14 flex flex-col items-center justify-center gap-3 pb-6 sm:flex-row sm:gap-4"
            aria-label="Section navigation"
          >
            <Link
              href="/general-awareness/indian-constitution"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-800/60 px-5 py-3 text-sm font-semibold uppercase text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              Constitution
            </Link>
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/45 bg-emerald-500/10 px-5 py-3 text-sm font-semibold uppercase text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <Scale className="h-4 w-4" aria-hidden />
              General Awareness
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  )
}

export default Artilces