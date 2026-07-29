'use client'

import React, { useMemo, useState } from 'react'
import { railwayActs } from '@/assets/railway-acts/railway-acts'

type FlatAct = {
  key: string
  number: number
  chapter: string
  title: string
  section: string
  description: string
}

type DescriptionKind = 'number' | 'letter' | 'roman' | 'plain'

type DescriptionPart = {
  marker: string
  text: string
  kind: DescriptionKind
  depth: number
}

const ROMAN_RE = /^(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)$/i

function classifyMarker(marker: string): DescriptionKind {
  if (/^\d+$/.test(marker)) return 'number'
  if (ROMAN_RE.test(marker)) return 'roman'
  if (/^[a-z]$/i.test(marker)) return 'letter'
  return 'plain'
}

function computeDepth(
  kind: DescriptionKind,
  marker: string,
  previous: DescriptionPart[],
): number {
  if (kind === 'number') {
    const n = Number(marker)
    const lastNumber = [...previous].reverse().find((part) => part.kind === 'number')
    if (lastNumber) {
      const prev = Number(lastNumber.marker)
      if (lastNumber.depth > 0 && n === prev + 1) return lastNumber.depth
      if (n < prev && n <= 10) return lastNumber.depth + 1
    }
    return 0
  }

  if (kind === 'letter') {
    const parent = [...previous]
      .reverse()
      .find((part) => part.kind === 'number' || part.kind === 'letter')
    if (parent?.kind === 'number') return parent.depth + 1
    if (parent?.kind === 'letter') return parent.depth
    return 1
  }

  if (kind === 'roman') {
    const parent = [...previous]
      .reverse()
      .find((part) => part.kind === 'letter' || part.kind === 'roman' || part.kind === 'number')
    if (parent?.kind === 'letter') return parent.depth + 1
    if (parent?.kind === 'roman') return parent.depth
    if (parent?.kind === 'number') return parent.depth + 1
    return 2
  }

  return 0
}

function cleanClauseText(text: string) {
  return text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim()
}

function parseDescription(description: string): DescriptionPart[] {
  const normalized = description.replace(/\r\n/g, '\n').trim()
  if (!normalized) return []

  const parts = normalized
    .split(
      /(?=(?:^|\n)\s*(?:\(\d+\)|\((?:i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)\)|\([a-z]\)|[a-z]\.)|(?<=[–—.])\s*(?:\(\d+\)|\([a-z]\)))/i,
    )
    .map((part) => part.trim())
    .filter(Boolean)

  const result: DescriptionPart[] = []

  for (const part of parts) {
    const explicit = part.match(/^\(([0-9]+|[a-z]+)\)\s*([\s\S]*)$/i)
    const dotted = part.match(/^([a-z])\.\s*([\s\S]*)$/i)

    let marker = ''
    let text = ''

    if (explicit) {
      marker = explicit[1]
      text = explicit[2]
    } else if (dotted) {
      marker = dotted[1]
      text = dotted[2]
    } else {
      result.push({ marker: '', text: cleanClauseText(part), kind: 'plain', depth: 0 })
      continue
    }

    const kind = classifyMarker(marker)
    if (kind === 'plain') {
      result.push({ marker: '', text: cleanClauseText(part), kind: 'plain', depth: 0 })
      continue
    }

    result.push({
      marker: marker.toLowerCase(),
      text: cleanClauseText(text),
      kind,
      depth: computeDepth(kind, marker, result),
    })
  }

  return result
}

function markerStyles(kind: DescriptionKind) {
  if (kind === 'letter') {
    return {
      badge: 'bg-violet-500/20 text-violet-100 ring-violet-400/45',
      card: 'border-violet-400/30 bg-violet-950/35',
      glow: 'from-violet-500/15 via-transparent to-fuchsia-500/10',
      label: 'Letter',
    }
  }
  if (kind === 'roman') {
    return {
      badge: 'bg-amber-500/20 text-amber-50 ring-amber-400/45',
      card: 'border-amber-400/30 bg-amber-950/30',
      glow: 'from-amber-500/15 via-transparent to-orange-500/10',
      label: 'Roman',
    }
  }
  return {
    badge: 'bg-cyan-500/20 text-cyan-50 ring-cyan-400/45',
    card: 'border-cyan-400/30 bg-slate-900/55',
    glow: 'from-cyan-500/15 via-transparent to-blue-500/10',
    label: 'Number',
  }
}

function DescriptionBlock({ description }: { description: string }) {
  const parts = parseDescription(description)

  if (parts.length === 0) {
    return (
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-300">{description}</p>
    )
  }

  return (
    <div className="mt-2 space-y-2.5">
      {parts.map((part, index) => {
        if (part.kind === 'plain') {
          return (
            <p key={`plain-${index}`} className="text-sm leading-relaxed text-gray-300">
              {part.text}
            </p>
          )
        }

        const styles = markerStyles(part.kind)
        const indent = Math.min(part.depth, 3) * 14
        const isNestedList = part.kind === 'letter' || part.kind === 'roman' || part.depth > 0

        return (
          <div
            key={`${part.kind}-${part.marker}-${index}`}
            className="relative"
            style={{ marginLeft: indent }}
          >
            {isNestedList ? (
              <div
                className="pointer-events-none absolute top-3 bottom-3 -left-3 w-px bg-linear-to-b from-white/30 via-white/15 to-transparent sm:-left-3.5"
                aria-hidden
              />
            ) : null}

            <div
              className={`relative overflow-hidden rounded-xl border px-3.5 py-3 shadow-sm shadow-black/25 ${styles.card}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br opacity-70 ${styles.glow}`}
              />
              <div className="relative flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg px-1.5 text-xs font-bold tracking-wide ring-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${styles.badge}`}
                  title={styles.label}
                >
                  {part.marker}
                </span>
                <p className="min-w-0 flex-1 pt-1 text-sm leading-relaxed text-blue-50/95">
                  {part.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function flattenActs(): FlatAct[] {
  const items: FlatAct[] = []
  let number = 0

  for (const chapter of railwayActs) {
    const chapterRecord = chapter as {
      id: number
      chapter: string
      acts?: Array<{ id: number; title: string; section: string; description: string }>
      pages?: Array<{ id: number; title: string; section: string; description: string }>
      sections?: Array<{ id: number; title: string; section: string; description: string }>
      rules?: Array<{ id: number; title: string; section: string; description: string }>
    }
    const acts =
      chapterRecord.acts ??
      chapterRecord.sections ??
      chapterRecord.pages ??
      chapterRecord.rules ??
      []

    for (const act of acts) {
      number += 1
      items.push({
        key: `act-${number}`,
        number,
        chapter: chapterRecord.chapter,
        title: act.title,
        section: act.section,
        description: act.description,
      })
    }
  }

  return items
}

const allActs = flattenActs()

const RailwayActs = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredActs = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    if (!q) return allActs

    return allActs.filter((item) => {
      return (
        item.chapter.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      )
    })
  }, [searchTerm])

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)',
      }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h1
            className="lg:text-5xl text-3xl font-bold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff, #bfdbfe, #e9d5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Indian Railway Act 1989
          </h1>
          <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">{allActs.length} Sections</span>
            </div>
          </div>
        </div>

        <div className="sticky top-20 z-40 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                placeholder="Search by Chapter, Title, Section or Description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-2xl shadow-purple-500/20 lg:text-base text-sm"
              />
              {searchTerm ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredActs.length}</span> of{' '}
            <span className="text-white font-semibold">{allActs.length}</span> sections
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredActs.map((item) => (
            <div
              key={item.key}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 min-h-[260px] flex flex-col"
            >
              <div
                className="absolute top-4 right-4 flex min-h-8 min-w-8 items-center justify-center rounded-full px-2 text-white text-xs font-bold shadow-lg sm:text-sm"
                style={{
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                }}
              >
                {item.section}
              </div>

              <div className="mt-8 space-y-4 flex-1">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-400">Chapter</span>
                  <p className="mt-1 text-sm text-gray-300 leading-relaxed">{item.chapter}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-400">Title</span>
                  <h3 className="mt-1 text-base font-medium text-white leading-tight">{item.title}</h3>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-400">Section</span>
                  <p className="mt-1 text-sm font-semibold text-cyan-300 tracking-wide">{item.section}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-400">Description</span>
                  <DescriptionBlock description={item.description} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredActs.length === 0 ? (
          <div className="text-center py-4">
            <div
              className="lg:w-24 lg:h-24 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: 'linear-gradient(to right, #6b7280, #4b5563)',
              }}
            >
              <svg className="lg:w-12 lg:h-12 w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
            </div>
            <h3 className="lg:text-2xl text-lg font-bold text-white mb-2">No sections found</h3>
            <p className="text-gray-400 lg:text-base text-sm">Try adjusting your search terms</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default RailwayActs
