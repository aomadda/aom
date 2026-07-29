import Link from 'next/link'
import React from 'react'
import { Award, ChevronRight, Medal, Sparkles } from 'lucide-react'

import {
  bharatRatnaSection,
  indianCivilAwardsIntro,
  indianCivilAwardsOutline,
  indianCivilAwardsTitle,
  padmaAwardsHeader,
  padmaAwardsTypesBlock,
  padmaAwardsTypesIntro,
  padmaBhushanSection,
  padmaSriSection,
  padmaVibhushanSection,
} from '@/assets/general-awareness/awards/indian-civil-awards'

type IndianCivilAwardsProps = {
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
  accent = 'emerald',
  uppercase = false,
  className = '',
}: {
  children: React.ReactNode
  accent?: 'emerald' | 'amber'
  uppercase?: boolean
  className?: string
}) {
  const bar =
    accent === 'amber'
      ? 'from-amber-500/80 via-orange-400/60 to-transparent'
      : 'from-emerald-400/90 via-teal-500/70 to-transparent'
  return (
    <div className={className || 'mb-6'}>
      <h2
        className={`font-bold text-emerald-50 ${
          uppercase
            ? 'text-lg uppercase tracking-[0.15em] sm:text-xl'
            : 'text-xl tracking-tight sm:text-2xl'
        }`}
      >
        {children}
      </h2>
      <div className={`mt-3 h-0.5 w-16 rounded-full bg-linear-to-r ${bar}`} aria-hidden />
    </div>
  )
}

function RecipientRow({ entry }: { entry: string }) {
  const lines = entry.split('\n')
  const label = (lines[0] ?? '').trim()
  const body = lines.slice(1).join('\n').trim()

  return (
    <li className="group flex gap-3 sm:gap-4">
      <span
        className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-500/12 text-xs font-bold tabular-nums text-emerald-200 shadow-inner shadow-emerald-900/20 sm:h-11 sm:min-w-11 sm:text-sm"
        aria-hidden
      >
        {label}
      </span>
      <div className="min-w-0 flex-1 rounded-xl border border-slate-600/40 bg-slate-900/40 px-4 py-3 text-sm leading-relaxed text-slate-200 transition group-hover:border-emerald-500/25 group-hover:bg-slate-900/55 sm:text-base">
        {body}
      </div>
    </li>
  )
}

function SincePill({ year }: { year: string }) {
  return (
    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-slate-200">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" aria-hidden />
      <span className="font-semibold text-emerald-200/95">Since</span>
      <span className="tabular-nums text-slate-100">{year}</span>
    </div>
  )
}

const IndianCivilAwards = ({ showBackNav = false }: IndianCivilAwardsProps) => {
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
            {indianCivilAwardsTitle}
          </h1>
          <div
            className="mx-auto mt-5 h-1 w-28 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <div className="space-y-8 sm:space-y-10">
          <SectionShell>
            <p className="text-base leading-relaxed text-slate-300">{indianCivilAwardsIntro}</p>
            <ul className="mt-6 space-y-4">
              {indianCivilAwardsOutline.map((item) => (
                <li key={item.key}>
                  <div className="flex gap-3 sm:gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-bold text-emerald-300 ring-1 ring-emerald-500/30">
                      {item.key}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-semibold text-slate-100">{item.text}</p>
                      {'sub' in item && item.sub ? (
                        <ul className="mt-3 space-y-2 border-l-2 border-emerald-500/30 pl-4">
                          {item.sub.map((sub) => (
                            <li key={sub.key} className="flex gap-2 text-sm text-slate-300 sm:text-base">
                              <span className="font-semibold text-emerald-400/90">{sub.key}.</span>
                              <span>{sub.text}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                <Award className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{bharatRatnaSection.heading}</SectionHeading>
            </div>
            <p className="text-slate-300 leading-relaxed">{bharatRatnaSection.paragraph}</p>
            <dl className="mt-6 space-y-3">
              {bharatRatnaSection.bullets.map((b) => (
                <div
                  key={b.label}
                  className="rounded-xl border border-slate-600/50 bg-slate-900/45 px-4 py-3 sm:flex sm:items-baseline sm:gap-4 sm:py-4"
                >
                  <dt className="shrink-0 text-xs font-bold uppercase tracking-wider text-emerald-400/90 sm:w-28 sm:text-[11px]">
                    {b.label}
                  </dt>
                  <dd className="mt-1 text-slate-200 leading-relaxed sm:mt-0 sm:flex-1">{b.value}</dd>
                </div>
              ))}
            </dl>
          </SectionShell>

          <SectionShell>
            <SectionHeading accent="amber" uppercase>
              {padmaAwardsHeader}
            </SectionHeading>
            <p className="text-slate-300">{padmaAwardsTypesIntro}</p>
            <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-linear-to-br from-slate-900/60 to-slate-800/40 p-5 sm:p-6">
              <p className="whitespace-pre-line text-center text-base font-medium leading-loose text-slate-100 sm:text-left">
                {padmaAwardsTypesBlock}
              </p>
            </div>
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{padmaVibhushanSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{padmaVibhushanSection.paragraph}</p>
            <SincePill year={padmaVibhushanSection.since} />
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-emerald-300/90">
              {padmaVibhushanSection.for2021Label}
            </p>
            <ul className="mt-4 space-y-3">
              {padmaVibhushanSection.recipients2021.map((entry, i) => (
                <RecipientRow key={i} entry={entry} />
              ))}
            </ul>
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{padmaBhushanSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{padmaBhushanSection.paragraph}</p>
            <SincePill year={padmaBhushanSection.since} />
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-emerald-300/90">
              {padmaBhushanSection.for2021Label}
            </p>
            <ul className="mt-4 space-y-3">
              {padmaBhushanSection.recipients2021.map((entry, i) => (
                <RecipientRow key={i} entry={entry} />
              ))}
            </ul>
          </SectionShell>

          <SectionShell>
            <div className="mb-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <Medal className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading className="mb-0 min-w-0 flex-1">{padmaSriSection.heading}</SectionHeading>
            </div>
            <p className="leading-relaxed text-slate-300">{padmaSriSection.paragraph}</p>
            <SincePill year={padmaSriSection.since} />
            <p className="mt-5 rounded-lg border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-200">
              {padmaSriSection.for2021Line}
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-emerald-300/90">
              {padmaSriSection.teluguStatesLabel}
            </p>
            <ul className="mt-4 space-y-3">
              {padmaSriSection.teluguStatesRecipients.map((entry, i) => (
                <RecipientRow key={i} entry={entry} />
              ))}
            </ul>
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

export default IndianCivilAwards
