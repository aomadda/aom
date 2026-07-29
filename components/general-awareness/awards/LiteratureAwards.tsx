import Link from 'next/link'
import React from 'react'
import { Award, BookMarked, BookOpen, ChevronRight, Medal, ScrollText, Sparkles, Trophy } from 'lucide-react'

import {
  asiaBookAwardSection,
  dscPrizeSection,
  jnanpithAwardSection,
  kalidasSammanAwardSection,
  kalojiNarayanaRaoAwardSection,
  kuswanthSinghMemorialAwardSection,
  literatureAwardsTitle,
  manBookerInternationalPrizeSection,
  manBookerPrizeSection,
  moortideviAwardSection,
  orangePrizeSection,
  sahityaAcademyAwardSection,
  saraswatiSammanAwardSection,
  vyasSammanAwardSection,
} from '@/assets/general-awareness/awards/literature-awards'

type LiteratureAwardsProps = {
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
}: {
  items: readonly { label: string; value: string }[]
}) {
  return (
    <ul className="mt-5 divide-y divide-slate-600/35 rounded-xl border border-teal-500/20 bg-linear-to-br from-teal-950/25 via-slate-900/35 to-slate-950/40">
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

const LiteratureAwards = ({ showBackNav = false }: LiteratureAwardsProps) => {
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
            {literatureAwardsTitle}
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
              <SectionHeading className="mb-0 min-w-0 flex-1">{jnanpithAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={jnanpithAwardSection.dotBullets} />
            <ArrowBulletList items={jnanpithAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <ScrollText className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{moortideviAwardSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{moortideviAwardSection.paragraph}</p>
            <ArrowBulletList items={moortideviAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <BookOpen className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{sahityaAcademyAwardSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{sahityaAcademyAwardSection.paragraph}</p>
            <ArrowBulletList items={sahityaAcademyAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <BookMarked className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{saraswatiSammanAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={saraswatiSammanAwardSection.dotBullets} />
            <ArrowBulletList items={saraswatiSammanAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <ScrollText className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{vyasSammanAwardSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{vyasSammanAwardSection.paragraph}</p>
            <ArrowBulletList items={vyasSammanAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Award className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{kalidasSammanAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={kalidasSammanAwardSection.dotBullets} />
            <ArrowBulletList items={kalidasSammanAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <BookOpen className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{dscPrizeSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={dscPrizeSection.dotBullets} />
            <ArrowBulletList items={dscPrizeSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{kalojiNarayanaRaoAwardSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{kalojiNarayanaRaoAwardSection.paragraph}</p>
            <ArrowBulletList items={kalojiNarayanaRaoAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <BookMarked className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{kuswanthSinghMemorialAwardSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={kuswanthSinghMemorialAwardSection.dotBullets} />
            <ArrowBulletList items={kuswanthSinghMemorialAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Trophy className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{manBookerPrizeSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{manBookerPrizeSection.paragraph}</p>
            <ArrowBulletList items={manBookerPrizeSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <BookOpen className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{manBookerInternationalPrizeSection.heading}</SectionHeading>
            </div>
            <DotBulletList items={manBookerInternationalPrizeSection.dotBullets} />
            <ArrowBulletList items={manBookerInternationalPrizeSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{asiaBookAwardSection.heading}</SectionHeading>
            </div>
            <ArrowBulletList items={asiaBookAwardSection.arrowBullets} />
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <ScrollText className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{orangePrizeSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{orangePrizeSection.paragraph}</p>
            <ArrowBulletList items={orangePrizeSection.arrowBullets} />
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

export default LiteratureAwards
