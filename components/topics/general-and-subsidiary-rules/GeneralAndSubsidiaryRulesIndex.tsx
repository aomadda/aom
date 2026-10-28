'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import { generalRulePages, type GeneralRulePage } from '@/lib/general-rule-pages'

function groupByChapter(rules: GeneralRulePage[]) {
  const groups: { chapter: string; rules: GeneralRulePage[] }[] = []
  for (const rule of rules) {
    const last = groups[groups.length - 1]
    if (last && last.chapter === rule.chapter) last.rules.push(rule)
    else groups.push({ chapter: rule.chapter, rules: [rule] })
  }
  return groups
}

export default function GeneralAndSubsidiaryRulesIndex() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRules = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return generalRulePages
    return generalRulePages.filter((item) => {
      return (
        item.chapter.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.rule.toLowerCase().includes(query)
      )
    })
  }, [searchTerm])

  const chapters = groupByChapter(filteredRules)

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
            Topics
          </p>
          <h1
            className="mb-4 bg-clip-text text-3xl font-bold text-transparent lg:text-5xl"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff, #a7f3d0, #cffafe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            General & Subsidiary Rules
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-base">
            Open any of the {generalRulePages.length} General Rules. Each page keeps the same
            chapter, title, rule and description.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm">{generalRulePages.length} Rules</span>
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
                placeholder="Search by chapter, title or rule, for example GR 1.02"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-full border border-white/30 bg-white/20 py-3 pr-10 pl-12 text-sm text-white shadow-2xl shadow-emerald-500/20 backdrop-blur-xl transition-all duration-300 placeholder:text-gray-300 focus:border-transparent focus:ring-2 focus:ring-emerald-400 focus:outline-none lg:text-base"
              />
              {searchTerm ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchTerm('')}
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
          Showing <span className="font-semibold text-white">{filteredRules.length}</span> of{' '}
          <span className="font-semibold text-white">{generalRulePages.length}</span> rules
        </p>

        <div className="mx-auto max-w-7xl space-y-10">
          {chapters.map((group) => (
            <section key={group.chapter}>
              <div className="mb-4 flex items-end justify-between gap-3">
                <h2 className="text-lg font-semibold text-emerald-100 sm:text-xl">{group.chapter}</h2>
                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-100">
                  {group.rules.length}
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.rules.map((item) => (
                  <Link
                    key={item.key}
                    href={`/acts/general-and-subsidiary-rules/${item.slug}`}
                    className="group relative flex min-h-42 flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-950/40"
                  >
                    <span
                      className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                      style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}
                    >
                      {item.number}
                    </span>
                    <span className="pr-10 text-xs font-semibold tracking-wide text-emerald-300 uppercase">
                      {item.rule}
                    </span>
                    <h3 className="mt-3 text-base leading-snug font-medium text-white">{item.title}</h3>
                    <span className="mt-auto inline-flex items-center pt-5 text-sm font-semibold text-cyan-200">
                      Open rule
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {filteredRules.length === 0 ? (
          <div className="py-4 text-center">
            <h3 className="mb-2 text-lg font-bold text-white lg:text-2xl">No rules found</h3>
            <p className="text-sm text-gray-400 lg:text-base">Try a title or a rule such as GR 1.02</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
