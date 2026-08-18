import React from 'react'
import Link from 'next/link'
import { BarChart3, ChevronLeft } from 'lucide-react'
import { railwayStatistics } from '@/assets/indian-railways/railway-statistics'

const [unitLabel, year2023Label, year2024Label] = railwayStatistics.columns

type StatRow = {
  item: string
  unit: string
  year2023_24: string
  year2024_25: string
}

type NumberedRow = {
  sno: string
  item: string
  unit?: string
  year2023_24?: string
  year2024_25?: string
  children?: NumberedRow[]
}

function MetricBoxes({
  unit,
  year2023_24,
  year2024_25,
}: {
  unit?: string
  year2023_24?: string
  year2024_25?: string
}) {
  if (!unit && !year2023_24 && !year2024_25) return null

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-3">
      {unit ? (
        <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{unitLabel}</p>
          <p className="mt-1.5 text-base font-medium text-slate-100">{unit}</p>
        </div>
      ) : null}
      {year2023_24 ? (
        <div className="rounded-xl border border-amber-500/15 bg-amber-500/8 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300/80">{year2023Label}</p>
          <p className="mt-1.5 text-base font-semibold tabular-nums text-amber-100">{year2023_24}</p>
        </div>
      ) : null}
      {year2024_25 ? (
        <div className="rounded-xl border border-orange-500/15 bg-orange-500/8 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300/80">{year2024Label}</p>
          <p className="mt-1.5 text-base font-semibold tabular-nums text-orange-100">{year2024_25}</p>
        </div>
      ) : null}
    </div>
  )
}

function NumberedEntries({
  entries,
  headers,
}: {
  entries: NumberedRow[]
  headers: readonly string[]
}) {
  return (
    <div className="space-y-4">
      {entries.map((entry) =>
        entry.children ? (
          <div key={`${entry.sno}-${entry.item}`} className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-amber-400/20 bg-amber-500/10 px-5 py-4">
              {entry.sno ? (
                <span className="shrink-0 rounded-lg border border-amber-400/25 bg-slate-950/40 px-2.5 py-1 text-sm font-bold text-amber-100">
                  {entry.sno}
                </span>
              ) : null}
              <h2 className="text-lg font-bold text-white sm:text-xl">{entry.item}</h2>
              {entry.unit ? (
                <span className="ml-auto text-sm font-medium text-amber-100/80">{entry.unit}</span>
              ) : null}
            </div>
            <div className="space-y-4 pl-0 sm:pl-4">
              {entry.children.map((child) => (
                <NumberedStatCard
                  key={`${entry.item}-${child.sno}-${child.item}`}
                  row={child}
                  headers={headers}
                />
              ))}
            </div>
          </div>
        ) : (
          <NumberedStatCard key={`${entry.sno}-${entry.item}`} row={entry} headers={headers} />
        ),
      )}
    </div>
  )
}

function NumberedStatCard({
  row,
  headers,
}: {
  row: NumberedRow
  headers: readonly string[]
}) {
  const [snoLabel, itemLabel] = headers

  return (
    <article className="rounded-2xl border border-amber-500/20 bg-slate-900/70 p-5 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-6">
      <div className="flex items-start gap-3">
        {row.sno ? (
          <span className="mt-0.5 shrink-0 rounded-lg border border-amber-400/25 bg-amber-500/10 px-2.5 py-1 text-sm font-bold text-amber-100">
            <span className="sr-only">{snoLabel} </span>
            {row.sno}
          </span>
        ) : null}
        {row.item ? (
          <h3 className="text-lg font-bold text-white sm:text-xl">
            <span className="sr-only">{itemLabel} </span>
            {row.item}
          </h3>
        ) : null}
      </div>
      <MetricBoxes unit={row.unit} year2023_24={row.year2023_24} year2024_25={row.year2024_25} />
    </article>
  )
}

function StatCard({ row }: { row: StatRow }) {
  return (
    <article className="rounded-2xl border border-amber-500/20 bg-slate-900/70 p-5 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-6">
      <h3 className="text-lg font-bold text-white sm:text-xl">{row.item}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/8 bg-white/4 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{unitLabel}</p>
          <p className="mt-1.5 text-base font-medium text-slate-100">{row.unit}</p>
        </div>
        <div className="rounded-xl border border-amber-500/15 bg-amber-500/8 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300/80">{year2023Label}</p>
          <p className="mt-1.5 text-base font-semibold tabular-nums text-amber-100">{row.year2023_24}</p>
        </div>
        <div className="rounded-xl border border-orange-500/15 bg-orange-500/8 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300/80">{year2024Label}</p>
          <p className="mt-1.5 text-base font-semibold tabular-nums text-orange-100">{row.year2024_25}</p>
        </div>
      </div>
    </article>
  )
}

const RailwayStatistics = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-amber-950/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(249,115,22,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl space-y-14 px-4 py-10 sm:px-6 lg:py-16">
        {railwayStatistics.sections.map((section, sectionIndex) => (
          <section key={section.title}>
            <header className="mb-8 text-center sm:mb-10">
              {sectionIndex === 0 ? (
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-500/10">
                  <BarChart3 className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
                </div>
              ) : null}
              <h1 className="text-2xl font-extrabold tracking-tight text-amber-100 sm:text-3xl">
                {section.title}
              </h1>
              {'unit' in section || 'year2023_24' in section ? (
                <div className="mx-auto max-w-3xl">
                  <MetricBoxes
                    unit={'unit' in section ? section.unit : undefined}
                    year2023_24={'year2023_24' in section ? section.year2023_24 : undefined}
                    year2024_25={'year2024_25' in section ? section.year2024_25 : undefined}
                  />
                </div>
              ) : null}
            </header>

            {'numberedHeaders' in section && section.numberedHeaders ? (
              <p className="mb-4 text-center text-sm font-semibold tracking-wide text-amber-200/80 sm:text-base">
                {section.numberedHeaders.join('  ')}
              </p>
            ) : null}

            {'entries' in section && section.entries && 'numberedHeaders' in section && section.numberedHeaders ? (
              <NumberedEntries entries={section.entries} headers={section.numberedHeaders} />
            ) : null}

            {'rows' in section && section.rows?.length ? (
              <div className="space-y-4">
                {section.rows.map((row) => (
                  <StatCard key={row.item} row={row} />
                ))}
              </div>
            ) : null}

            {'groups' in section && section.groups ? (
              <div
                className={`space-y-10 ${
                  ('rows' in section && section.rows?.length) || ('entries' in section && section.entries)
                    ? 'mt-10'
                    : ''
                }`}
              >
                {section.groups.map((group) => (
                  <div key={group.title}>
                    <h2 className="mb-4 text-xl font-bold text-orange-100 sm:text-2xl">{group.title}</h2>
                    {'entries' in group &&
                    group.entries &&
                    'numberedHeaders' in section &&
                    section.numberedHeaders ? (
                      <NumberedEntries entries={group.entries} headers={section.numberedHeaders} />
                    ) : null}
                    {'rows' in group && group.rows ? (
                      <div className="space-y-4">
                        {group.rows.map((row) => (
                          <StatCard key={`${group.title}-${row.item}`} row={row} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        {railwayStatistics.notes.length ? (
          <div className="rounded-2xl border border-amber-500/15 bg-slate-900/50 px-5 py-5 sm:px-6">
            <ul className="space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              {railwayStatistics.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="flex justify-center">
          <Link
            href="/topics/indian-railways"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-400/30 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-amber-50 shadow-lg shadow-amber-950/40 ring-1 ring-amber-400/15 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-amber-300/55 hover:bg-slate-900"
          >
            <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-amber-400/10 via-orange-400/5 to-transparent" />
            <ChevronLeft
              className="relative h-4 w-4 text-amber-200 transition-transform duration-200 group-hover:-translate-x-0.5"
              strokeWidth={2.4}
            />
            <span className="relative">Back to Indian Railways</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RailwayStatistics
