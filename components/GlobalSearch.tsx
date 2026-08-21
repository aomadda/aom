'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Search, X } from 'lucide-react'

import { searchTopics } from '@/lib/search-topics'
import { filterTopics } from '@/lib/topic-search'

const GlobalSearch = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [prevQuery, setPrevQuery] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Reset search UI when the route changes (avoid setState inside an effect).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }

  // Keep keyboard highlight in sync when the query changes.
  if (query !== prevQuery) {
    setPrevQuery(query)
    setActiveIndex(0)
  }

  const results = useMemo(() => filterTopics(query), [query])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const openSearch = useCallback(() => {
    setOpen(true)
    setActiveIndex(0)
  }, [])

  useEffect(() => {
    if (!open) return
    const id = window.setTimeout(() => inputRef.current?.focus(), 30)
    return () => window.clearTimeout(id)
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isModK = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'
      if (isModK) {
        event.preventDefault()
        setOpen((prev) => !prev)
        return
      }

      if (!open) return

      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((prev) => (results.length === 0 ? 0 : (prev + 1) % results.length))
        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((prev) =>
          results.length === 0 ? 0 : (prev - 1 + results.length) % results.length,
        )
        return
      }

      if (event.key === 'Enter' && results[activeIndex]) {
        event.preventDefault()
        const link = document.getElementById(`global-search-result-${activeIndex}`)
        link?.click()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, close, results, activeIndex])

  useEffect(() => {
    if (!open) return
    const active = listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
    active?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search topics"
        className="fixed bottom-5 right-5 z-60 flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-blue-600 text-white shadow-xl shadow-violet-900/30 ring-1 ring-white/20 transition hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        <Search className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.25} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-70 flex items-start justify-center px-3 pt-[12vh] sm:px-4">
          <button
            type="button"
            aria-label="Close search"
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
            onClick={close}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search topics"
            className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/25"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 sm:px-5">
              <Search className="h-5 w-5 shrink-0 text-violet-600" strokeWidth={2.25} />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search here what you want . . ."
                className="min-w-0 flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                autoComplete="off"
                spellCheck={false}
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <kbd className="hidden rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-500 sm:inline-block">
                  Esc
                </kbd>
              )}
            </div>

            <div ref={listRef} className="max-h-[min(60vh,28rem)] overflow-y-auto px-2 py-0 sm:px-3">
              {!query.trim() ? (
                <p className="px-1 py-0 text-center text-sm text-slate-500">
                  
                </p>
              ) : results.length === 0 ? (
                <p className="px-1 py-3 text-center text-sm text-slate-500">
                  No topics found for &ldquo;{query.trim()}&rdquo;.
                </p>
              ) : (
                <ul className="space-y-1">
                  {results.map((topic, index) => {
                    const isActive = index === activeIndex
                    return (
                      <li key={topic.href}>
                        <Link
                          id={`global-search-result-${index}`}
                          href={topic.href}
                          data-index={index}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={close}
                          className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                            isActive
                              ? 'bg-violet-50 text-violet-900 ring-1 ring-violet-200'
                              : 'text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-semibold sm:text-base">
                              {topic.title}
                            </div>
                            <div className="mt-0.5 truncate text-xs text-slate-500 sm:text-sm">
                              {topic.category}
                              {topic.parent && topic.parent !== topic.category
                                ? ` · ${topic.parent}`
                                : ''}
                            </div>
                          </div>
                          <ArrowRight
                            className={`h-4 w-4 shrink-0 ${isActive ? 'text-violet-600' : 'text-slate-300'}`}
                          />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500 sm:px-5">
              <span>
                {results.length > 0
                  ? `${results.length} result${results.length === 1 ? '' : 's'}`
                  : `Total topics: (${searchTopics.length})`}
              </span>
              <span className="hidden sm:inline">↑↓ navigate · Enter open · Esc close</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default GlobalSearch
