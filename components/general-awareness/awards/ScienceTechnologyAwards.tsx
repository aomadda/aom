import Link from 'next/link'
import React from 'react'
import { Atom, Award, ChevronRight, Globe, Medal, ScrollText, Sparkles, Trophy } from 'lucide-react'

import {
  abelPrizeSection,
  aryabhattaAwardSection,
  breakthroughPrizeFundamentalPhysicsSection,
  dhanvantriAwardSection,
  drBCRoyAwardSection,
  drYNaidammaMemorialAwardSection,
  fieldsMedalSection,
  gdBirlaAwardSection,
  kalingaPrizeSection,
  nobelPrizeSection,
  ramanujanMathematicsAwardSection,
  scienceTechnologyAwardsTitle,
  shantiSwarupBhatnagarPrizeSection,
  theAsianAwardsSection,
  vikramSarabhaiMemorialAwardSection,
} from '@/assets/general-awareness/awards/science-technology-awards'

type ScienceTechnologyAwardsProps = {
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

function DotBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 divide-y divide-slate-600/35 rounded-xl border border-slate-600/45 bg-slate-900/25">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 px-4 py-3.5 text-slate-300 leading-relaxed first:rounded-t-xl last:rounded-b-xl">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)]"
            aria-hidden
          />
          <span className="min-w-0 flex-1">{t}</span>
        </li>
      ))}
    </ul>
  )
}

function CheckBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 divide-y divide-slate-600/35 rounded-xl border border-slate-600/45 bg-slate-900/25">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 px-4 py-3.5 text-slate-300 leading-relaxed first:rounded-t-xl last:rounded-b-xl">
          <span className="mt-0.5 shrink-0 text-emerald-400/95" aria-hidden>
            ✓
          </span>
          <span className="min-w-0 flex-1">{t}</span>
        </li>
      ))}
    </ul>
  )
}

function DiamondMarker({ className = '' }: { className?: string }) {
  return (
    <span
      className={`mt-1.5 flex h-2.5 w-2.5 shrink-0 rotate-45 border border-emerald-400/75 bg-emerald-400/25 shadow-[0_0_12px_rgba(16,185,129,0.35)] ${className}`}
      aria-hidden
    />
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
          <DiamondMarker />
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

function NumberedLines({
  title,
  lines,
}: {
  title?: string
  lines: readonly string[]
}) {
  const hasTitle = Boolean(title && title.length > 0)
  return (
    <div className="mt-6">
      {hasTitle ? (
        <h3 className="rounded-t-xl border border-b-0 border-slate-600/45 bg-slate-900/45 px-4 py-3 text-sm font-bold uppercase tracking-wide text-emerald-300/95 sm:text-base">
          {title}
        </h3>
      ) : null}
      <ol
        className={`list-none overflow-hidden border border-slate-600/45 bg-slate-900/15 p-0 ${
          hasTitle ? 'rounded-b-xl' : 'rounded-xl'
        }`}
      >
        {lines.map((line, i) => (
          <li
            key={i}
            className="flex gap-3 border-t border-slate-600/30 px-4 py-3.5 first:border-t-0 sm:gap-4"
          >
            <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/35 to-teal-600/20 text-sm font-bold tabular-nums text-emerald-100 ring-1 ring-emerald-500/35">
              {i + 1}
            </span>
            <span className="min-w-0 flex-1 pt-0.5 leading-relaxed text-slate-300">{line}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

const ScienceTechnologyAwards = ({ showBackNav = false }: ScienceTechnologyAwardsProps) => {
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
            {scienceTechnologyAwardsTitle}
          </h1>
          <div
            className="mx-auto mt-5 h-1 w-28 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <div className="space-y-8 sm:space-y-10">
          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{dhanvantriAwardSection.heading}</SectionHeading>
            </div>
            {dhanvantriAwardSection.introLines.map((line, i) => (
              <p key={i} className={i === 0 ? 'leading-relaxed text-slate-300' : 'mt-3 leading-relaxed text-slate-300'}>
                {line}
              </p>
            ))}
            <ArrowBulletList items={dhanvantriAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Atom className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{aryabhattaAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={aryabhattaAwardSection.dotBullets} />
            <ArrowBulletList items={aryabhattaAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Award className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{drYNaidammaMemorialAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={drYNaidammaMemorialAwardSection.dotBullets} />
            <ArrowBulletList items={drYNaidammaMemorialAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{gdBirlaAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={gdBirlaAwardSection.dotBullets} />
            <ArrowBulletList items={gdBirlaAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <ScrollText className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{shantiSwarupBhatnagarPrizeSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={shantiSwarupBhatnagarPrizeSection.dotBullets} />
            <NumberedLines lines={shantiSwarupBhatnagarPrizeSection.disciplinesNumbered} />
            <ArrowBulletList items={shantiSwarupBhatnagarPrizeSection.arrowBullets} />
            <NumberedLines
              title={shantiSwarupBhatnagarPrizeSection.awards2020Title}
              lines={shantiSwarupBhatnagarPrizeSection.awards2020Lines}
            />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Globe className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{vikramSarabhaiMemorialAwardSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{vikramSarabhaiMemorialAwardSection.paragraph}</p>
            <ArrowBulletList items={vikramSarabhaiMemorialAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Award className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{drBCRoyAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={drBCRoyAwardSection.dotBullets} />
            <ArrowBulletList items={drBCRoyAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{kalingaPrizeSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={kalingaPrizeSection.dotBullets} />
            <ArrowBulletList items={kalingaPrizeSection.arrowBullets} />
            <p className="mt-4 leading-relaxed text-slate-300">{kalingaPrizeSection.extraLine}</p>
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Atom className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{breakthroughPrizeFundamentalPhysicsSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{breakthroughPrizeFundamentalPhysicsSection.paragraph}</p>
            <ArrowBulletList items={breakthroughPrizeFundamentalPhysicsSection.arrowBullets} />
            <NumberedLines
              title={breakthroughPrizeFundamentalPhysicsSection.for2021Title}
              lines={breakthroughPrizeFundamentalPhysicsSection.for2021Lines}
            />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{ramanujanMathematicsAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={ramanujanMathematicsAwardSection.dotBullets} />
            <ArrowBulletList items={ramanujanMathematicsAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{abelPrizeSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{abelPrizeSection.paragraph}</p>
            <CheckBulletList items={abelPrizeSection.checkBullets} />
            <ArrowBulletList items={abelPrizeSection.arrowBullets} />
            <NumberedLines title={abelPrizeSection.for2019Title} lines={abelPrizeSection.for2019Lines} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{fieldsMedalSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{fieldsMedalSection.paragraph}</p>
            <ArrowBulletList items={fieldsMedalSection.arrowBullets} />
            <NumberedLines title={fieldsMedalSection.for2018Title} lines={fieldsMedalSection.for2018Lines} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{nobelPrizeSection.heading}</SectionHeading>
            </div>
            {nobelPrizeSection.introLines.map((line, i) => (
              <p key={i} className={i === 0 ? 'leading-relaxed text-slate-300' : 'mt-3 leading-relaxed text-slate-300'}>
                {line}
              </p>
            ))}
            <ArrowBulletList items={nobelPrizeSection.arrowBullets} />
            <h3 className="mt-6 rounded-t-xl border border-b-0 border-slate-600/45 bg-slate-900/45 px-4 py-3 text-sm font-bold uppercase tracking-wide text-emerald-300/95 sm:text-base">
              {nobelPrizeSection.nobel2020Title}
            </h3>
            <ArrowBulletList
              className="mt-0 rounded-t-none rounded-b-xl border-t-0 [&_li:first-child]:rounded-none"
              items={nobelPrizeSection.nobel2020ArrowBullets}
            />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Globe className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{theAsianAwardsSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{theAsianAwardsSection.paragraph}</p>
            <ArrowBulletList items={theAsianAwardsSection.arrowBullets} />
            <NumberedLines title={theAsianAwardsSection.for2019Title} lines={theAsianAwardsSection.for2019Lines} />
          </SectionShell>
        </div>

        {showBackNav ? (
          <nav
            className="mt-14 flex flex-col items-center justify-center gap-3 pb-6 sm:flex-row sm:gap-4"
            aria-label="Section navigation"
          >
            <Link
              href="/general-awareness/awards"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              Awards
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

export default ScienceTechnologyAwards
