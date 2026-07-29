import Link from 'next/link'
import React from 'react'
import {
  Award,
  ChevronRight,
  Info,
  ListChecks,
  Medal,
  ScrollText,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'

import {
  chessIntroParagraph,
  chessOverviewSection,
  chessPageTitle,
  famousChessPlayersSection,
  relatedTermsSection,
  trophiesSection,
  worldChessChampionshipSection,
  worldChessOlympiadSection,
  worldRapidChessChampionshipSection,
} from '@/assets/general-awareness/sports/chess'

type ChessProps = {
  showBackNav?: boolean
}

function SectionShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/35 shadow-xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-teal-500/5 blur-2xl" />
      <div className="relative px-5 py-6 sm:px-8 sm:py-8">{children}</div>
    </section>
  )
}

function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className || 'mb-6'}>
      <h2 className="text-xl font-bold tracking-tight text-emerald-50 sm:text-2xl">{children}</h2>
      <div
        className="mt-3 h-0.5 w-16 rounded-full bg-linear-to-r from-emerald-400/90 via-teal-500/70 to-transparent"
        aria-hidden
      />
    </div>
  )
}

function splitCsvItems(values: readonly string[]) {
  return values
    .flatMap((line) => line.split(','))
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
}

function NumberedGrid({ items }: { items: readonly string[] }) {
  return (
    <ol className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="group flex items-center gap-3 rounded-xl border border-slate-600/45 bg-slate-900/25 px-4 py-3 transition hover:border-emerald-500/40 hover:bg-slate-900/45"
        >
          <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/35 to-teal-600/20 text-xs font-bold tabular-nums text-emerald-100 ring-1 ring-emerald-500/35">
            {i + 1}
          </span>
          <span className="min-w-0 flex-1 leading-relaxed text-slate-200">{item}</span>
        </li>
      ))}
    </ol>
  )
}



function ArrowBulletList({
  items,
  className = '',
}: {
  items: readonly { label: string; value: string }[]
  className?: string
}) {
  return (
    <ul
      className={`mt-5 divide-y divide-slate-600/35 rounded-xl border border-teal-500/20 bg-linear-to-br from-teal-950/25 via-slate-900/35 to-slate-950/40 ${className}`}
    >
      {items.map((b, i) => (
        <li key={`${b.label}-${i}`} className="flex gap-3 px-4 py-3.5 text-slate-200 first:rounded-t-xl last:rounded-b-xl">
          <span className="min-w-0 flex-1 leading-relaxed">
            <span className="font-semibold text-emerald-200/90">{b.label}</span>
            {' : '}
            {b.value.length > 0 ? b.value : <span className="text-slate-500"> </span>}
          </span>
        </li>
      ))}
    </ul>
  )
}

function BlockTitleAndCategories({
  blockTitle,
  items,
  headingClassName = 'mt-6',
}: {
  blockTitle: string
  items: readonly { label: string; value: string }[]
  headingClassName?: string
}) {
  return (
    <>
      <h3
        className={`${headingClassName} rounded-t-xl border border-b-0 border-slate-600/45 bg-slate-900/45 px-4 py-3 text-sm font-bold uppercase tracking-wide text-emerald-300/95 sm:text-base`}
      >
        {blockTitle}
      </h3>
      <ArrowBulletList
        className="mt-0 rounded-t-none rounded-b-xl border-t-0 [&_li:first-child]:rounded-none"
        items={items}
      />
    </>
  )
}

function NumberedLines({ lines }: { lines: readonly string[] }) {
  return (
    <ol className="mt-5 list-none overflow-hidden rounded-xl border border-slate-600/45 bg-slate-900/15 p-0">
      {lines.map((line, i) => (
        <li key={i} className="flex gap-3 border-t border-slate-600/30 px-4 py-3.5 first:border-t-0 sm:gap-4">
          <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/35 to-teal-600/20 text-sm font-bold tabular-nums text-emerald-100 ring-1 ring-emerald-500/35">
            {i + 1}
          </span>
          <span className="min-w-0 flex-1 pt-0.5 leading-relaxed text-slate-300">{line}</span>
        </li>
      ))}
    </ol>
  )
}

const Chess = ({ showBackNav = false }: ChessProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-12 text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400/90" strokeWidth={2} />
            General Awareness
          </div>
          <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-emerald-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl">
            {chessPageTitle}
          </h1>
          <div
            className="mx-auto mt-5 h-1 w-28 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <div className="space-y-8 sm:space-y-10">
          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Info className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="min-w-0 flex-1 text-base leading-relaxed text-slate-200 sm:text-lg">
                {chessOverviewSection.intro}
              </p>
            </div>

            <div className="mb-2 flex items-center gap-2.5">
              <ListChecks className="h-4.5 w-4.5 text-emerald-300" strokeWidth={2} aria-hidden />
              <h3 className="text-base font-bold tracking-tight text-emerald-100 sm:text-lg">
                {chessOverviewSection.keyFeaturesHeading}
              </h3>
            </div>
            <ArrowBulletList className="mt-2" items={chessOverviewSection.keyFeatures} />

            <div className="mt-3 overflow-hidden rounded-xl border border-teal-500/20 bg-linear-to-br from-teal-950/25 via-slate-900/35 to-slate-950/40">
              <p className="border-b border-slate-600/35 px-4 py-3 text-slate-200">
                <span className="font-semibold text-emerald-200/90">{chessOverviewSection.piecesLabel}</span>
                {' : '}
                {chessOverviewSection.piecesIntro}
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 px-4 py-3 sm:grid-cols-3 sm:px-6">
                {chessOverviewSection.pieces.map((p, i) => (
                  <li key={i} className="flex gap-2.5 py-1 text-slate-200">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.45)]"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ArrowBulletList className="mt-3" items={[chessOverviewSection.objective]} />

            <div className="mt-7 mb-2 flex items-center gap-2.5">
              <ScrollText className="h-4.5 w-4.5 text-emerald-300" strokeWidth={2} aria-hidden />
              <h3 className="text-base font-bold tracking-tight text-emerald-100 sm:text-lg">
                {chessOverviewSection.basicRulesHeading}
              </h3>
            </div>
            <NumberedLines lines={chessOverviewSection.basicRules} />
          </SectionShell>

          <SectionShell>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="min-w-0 flex-1 leading-relaxed text-slate-300">{chessIntroParagraph}</p>
            </div>
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{worldChessChampionshipSection.heading}</SectionHeading>
            </div>
            {worldChessChampionshipSection.introParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'leading-relaxed text-slate-300' : 'mt-3 leading-relaxed text-slate-300'}>
                {p}
              </p>
            ))}
            <ArrowBulletList items={worldChessChampionshipSection.arrowBullets} />
            <BlockTitleAndCategories
              blockTitle={worldChessChampionshipSection.blockTitle}
              items={worldChessChampionshipSection.blockArrowBullets}
            />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{worldChessOlympiadSection.heading}</SectionHeading>
            </div>
            {worldChessOlympiadSection.introParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'leading-relaxed text-slate-300' : 'mt-3 leading-relaxed text-slate-300'}>
                {p}
              </p>
            ))}
            <ArrowBulletList items={worldChessOlympiadSection.arrowBullets} />
            <BlockTitleAndCategories
              blockTitle={worldChessOlympiadSection.blockTitle}
              items={worldChessOlympiadSection.blockArrowBullets}
            />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{worldRapidChessChampionshipSection.heading}</SectionHeading>
            </div>
            {worldRapidChessChampionshipSection.introParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'leading-relaxed text-slate-300' : 'mt-3 leading-relaxed text-slate-300'}>
                {p}
              </p>
            ))}
            <ArrowBulletList items={worldRapidChessChampionshipSection.arrowBullets} />
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-emerald-300/95 sm:text-base">
              {worldRapidChessChampionshipSection.for2019Title}
            </p>
            <BlockTitleAndCategories
              blockTitle={worldRapidChessChampionshipSection.openTitle}
              headingClassName="mt-3"
              items={worldRapidChessChampionshipSection.openArrowBullets}
            />
            <BlockTitleAndCategories
              blockTitle={worldRapidChessChampionshipSection.womenTitle}
              items={worldRapidChessChampionshipSection.womenArrowBullets}
            />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{trophiesSection.heading}</SectionHeading>
            </div>
            <NumberedGrid items={splitCsvItems(trophiesSection.lines)} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Award className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{relatedTermsSection.heading}</SectionHeading>
            </div>
            <NumberedGrid items={splitCsvItems([relatedTermsSection.text])} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Users className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{famousChessPlayersSection.heading}</SectionHeading>
            </div>
            <NumberedLines lines={famousChessPlayersSection.lines} />
          </SectionShell>
        </div>

        {showBackNav ? (
          <nav
            className="mt-14 flex flex-col items-center justify-center gap-3 pb-6 sm:flex-row sm:gap-4"
            aria-label="Section navigation"
          >
            <Link
              href="/general-awareness/sports"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              Sports
            </Link>
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/45 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              General Awareness
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  )
}

export default Chess
