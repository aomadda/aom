import Link from 'next/link'
import React from 'react'
import { BookOpen, ChevronRight, MapPin, Sparkles } from 'lucide-react'

import * as CG from '@/assets/general-awareness/states-information/chhattisgarh'

type ChhattisgarhProps = {
  showBackNav?: boolean
}

function SectionShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`relative overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/35 shadow-xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-teal-500/5 blur-2xl" />
      <div className="relative px-4 py-5 sm:px-7 sm:py-7">{children}</div>
    </section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold uppercase tracking-tight text-emerald-50 sm:text-xl">{children}</h2>
      <div
        className="mt-2 h-0.5 w-14 rounded-full bg-linear-to-r from-emerald-400/90 via-teal-500/70 to-transparent"
        aria-hidden
      />
    </div>
  )
}

function KeyValueGrid({ items }: { items: readonly { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-slate-600/40 rounded-xl border border-slate-600/45 bg-slate-900/25">
      {items.map((row) => (
        <div key={row.label} className="grid gap-1 px-4 py-3.5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4">
          <dt className="font-semibold uppercase text-emerald-200/95">{row.label}</dt>
          <dd className="min-w-0 text-slate-300 leading-relaxed">{row.value || '\u2014'}</dd>
        </div>
      ))}
    </dl>
  )
}

function ExtendedFactsGrid({
  facts,
  className = 'mt-5',
}: {
  facts: readonly CG.ChhattisgarhExtendedFact[]
  className?: string
}) {
  return (
    <dl
      className={`divide-y divide-slate-600/40 rounded-xl border border-slate-600/45 bg-slate-900/25 ${className}`}
    >
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="grid gap-2 px-4 py-3.5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4 sm:items-start"
        >
          <dt className="font-semibold uppercase text-emerald-200/95">{fact.label}</dt>
          <dd className="min-w-0">
            {fact.kind === 'text' ? (
              <p className="whitespace-pre-line leading-relaxed text-slate-300">{fact.value}</p>
            ) : (
              <ol className="space-y-2.5">
                {fact.items.map((item, i) => (
                  <li key={`${fact.label}-${i}-${item}`} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/40 to-teal-600/25 text-xs font-bold tabular-nums text-emerald-50 ring-1 ring-emerald-400/45 sm:text-sm">
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1 pt-0.5 leading-relaxed text-slate-300">{item}</span>
                  </li>
                ))}
              </ol>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function ScrollTable({ header, children }: { header: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mt-3 overflow-x-auto rounded-xl border border-slate-600/45 ring-1 ring-white/5">
      <table className="w-full min-w-lg border-collapse text-left text-sm text-slate-200">
        <thead className="bg-slate-900/60 text-xs font-semibold uppercase tracking-wide text-emerald-200/95 sm:text-sm">
          {header}
        </thead>
        <tbody className="divide-y divide-slate-600/35 bg-slate-900/20">{children}</tbody>
      </table>
    </div>
  )
}

function RowNumberCell({ index }: { index: number }) {
  const n = index + 1
  return (
    <td className="w-14 px-2 py-2.5 align-middle sm:w-16 sm:px-3">
      <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/40 to-teal-600/25 text-xs font-bold tabular-nums text-emerald-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.2)] ring-1 ring-emerald-400/45 sm:text-sm">
        {n}
      </span>
    </td>
  )
}

function NumberColumnHeader() {
  return (
    <th className="w-14 px-2 py-3 text-center text-[11px] font-bold tracking-wider text-emerald-300/95 sm:w-16 sm:px-3 sm:text-xs">
      #
    </th>
  )
}

function MiscellaneousListItem({ line }: { line: string }) {
  const m = line.match(/^(\d+)\.\s*(.*)$/)
  if (m) {
    return (
      <li className="flex gap-3.5 rounded-xl border border-slate-600/40 bg-slate-900/35 px-4 py-3.5 shadow-sm ring-1 ring-white/5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/40 to-teal-600/25 text-sm font-bold tabular-nums text-emerald-50 ring-1 ring-emerald-400/45">
          {m[1]}
        </span>
        <span className="min-w-0 flex-1 pt-0.5 leading-relaxed text-slate-300">{m[2]}</span>
      </li>
    )
  }
  return (
    <li className="rounded-xl border border-teal-500/25 bg-teal-950/25 px-4 py-3.5 text-sm font-semibold leading-relaxed text-emerald-100/95 ring-1 ring-teal-500/15 sm:text-base">
      {line}
    </li>
  )
}

const Chhattisgarh = ({ showBackNav = false }: ChhattisgarhProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400/90" strokeWidth={2} />
            General Awareness
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-300/90 sm:text-base">
            {CG.statesInformationPageTitle}
          </p>
          <h1 className="mt-3 bg-linear-to-r from-emerald-100 via-teal-100 to-emerald-200 bg-clip-text text-xl font-bold uppercase tracking-tight text-transparent sm:text-2xl md:text-3xl">
            {CG.chhattisgarhHeaderLine}
          </h1>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <div className="space-y-8 sm:space-y-9">
          <SectionShell>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
                <BookOpen className="h-5 w-5" strokeWidth={2} />
              </div>
            </div>
            <KeyValueGrid items={CG.chhattisgarhBasicFacts} />
            <ExtendedFactsGrid facts={CG.chhattisgarhExtendedFacts} />
          </SectionShell>

          <SectionShell>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </div>
              <SectionHeading>{CG.templesSectionTitle}</SectionHeading>
            </div>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Temple/Church/Masjid</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.templesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.industriesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Industry/Company Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                </tr>
              }
            >
              {CG.industriesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.powerPlantsSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Power Plant Name</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.powerPlantsRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <ExtendedFactsGrid className="mt-0" facts={[{ label: 'RIVERS', kind: 'ordered', items: CG.riversOrdered }]} />
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.lakesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Lake Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                  <th className="px-3 py-3 sm:px-4">River</th>
                </tr>
              }
            >
              {CG.lakesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.river}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.projectsDamsSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Project/Dam Name</th>
                  <th className="px-3 py-3 sm:px-4">River</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.projectsDamsRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.river}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location || '—'}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.waterfallsBeachSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.waterfallsBeachRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.portsPeakSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Port Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.portsPeakRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.hillsValleyCavesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.hillsValleyCavesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.biosphereSectionTitle}</SectionHeading>
            <p className="mt-2 text-sm font-semibold uppercase text-teal-200/95">{CG.biosphereNote}</p>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.tigerReservesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.tigerReservesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.elephantReservesSectionTitle}</SectionHeading>
            {CG.elephantReservesNote ? (
              <p className="mt-2 text-sm font-semibold uppercase text-teal-200/95">{CG.elephantReservesNote}</p>
            ) : null}
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.elephantReservesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.ramsarSitesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.ramsarSitesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.nationalParksSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.nationalParksRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4 whitespace-pre-line">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.wildlifeSanctuariesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Year</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.wildlifeSanctuariesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.year}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location || '---'}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.zooMuseumsSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Zoo Park Name</th>
                  <th className="px-3 py-3 sm:px-4">City</th>
                </tr>
              }
            >
              {CG.zooMuseumsRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.city}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.internationalAirportsSectionTitle}</SectionHeading>
            <p className="mt-2 text-sm font-semibold uppercase text-teal-200/95">{CG.internationalAirportsNote}</p>
            {CG.internationalAirportsRows.length > 0 ? (
              <ScrollTable
                header={
                  <tr>
                    <NumberColumnHeader />
                    <th className="px-3 py-3 sm:px-4">Airport Name</th>
                    <th className="px-3 py-3 sm:px-4">City</th>
                    <th className="px-3 py-3 sm:px-4">Category</th>
                  </tr>
                }
              >
                {CG.internationalAirportsRows.map((row, i) => (
                  <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                    <RowNumberCell index={i} />
                    <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                    <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.city}</td>
                    <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.category}</td>
                  </tr>
                ))}
              </ScrollTable>
            ) : null}
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.airportsSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Airport Name</th>
                  <th className="px-3 py-3 sm:px-4">City</th>
                  <th className="px-3 py-3 sm:px-4">Category</th>
                </tr>
              }
            >
              {CG.airportsRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.city}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.category}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.iitSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.iitRows.map((row, i) => (
                <tr key={`${row.name}-${row.location}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.universitiesSectionTitle}</SectionHeading>
            <ScrollTable
              header={
                <tr>
                  <NumberColumnHeader />
                  <th className="px-3 py-3 sm:px-4">University Name</th>
                  <th className="px-3 py-3 sm:px-4">Location</th>
                </tr>
              }
            >
              {CG.universitiesRows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                  <RowNumberCell index={i} />
                  <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                  <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                </tr>
              ))}
            </ScrollTable>
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.stadiumsSectionTitle}</SectionHeading>
            {CG.stadiumsRows.length === 0 ? (
              <p className="mt-2 text-slate-400">—</p>
            ) : (
              <ScrollTable
                header={
                  <tr>
                    <NumberColumnHeader />
                    <th className="px-3 py-3 sm:px-4">Stadium Name</th>
                    <th className="px-3 py-3 sm:px-4">Location</th>
                  </tr>
                }
              >
                {CG.stadiumsRows.map((row, i) => (
                  <tr key={`${row.name}-${i}`} className="hover:bg-slate-800/40">
                    <RowNumberCell index={i} />
                    <td className="px-3 py-2.5 sm:px-4">{row.name}</td>
                    <td className="px-3 py-2.5 text-slate-300 sm:px-4">{row.location}</td>
                  </tr>
                ))}
              </ScrollTable>
            )}
          </SectionShell>

          <SectionShell>
            <ExtendedFactsGrid
              className="mt-0"
              facts={[{ label: 'FAMOUS PERSONS', kind: 'ordered', items: CG.famousPersonsOrdered }]}
            />
          </SectionShell>

          <SectionShell>
            <SectionHeading>{CG.miscellaneousSectionTitle}</SectionHeading>
            <p className="mb-6 text-slate-300 leading-relaxed">{CG.miscellaneousIntroParagraph}</p>
            <div className="space-y-8">
              {CG.miscellaneousBlocks.map((block, blockIndex) => (
                <div key={`${blockIndex}-${block.heading}`}>
                  <h3 className="mb-3 text-base font-bold uppercase text-emerald-100/95 sm:text-lg">
                    {block.heading}
                  </h3>
                  <ul className="space-y-2.5">
                    {block.lines.map((line, lineIndex) => (
                      <MiscellaneousListItem key={`${blockIndex}-${lineIndex}-${line}`} line={line} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionShell>
        </div>

        {showBackNav ? (
          <nav
            className="mt-14 flex flex-col items-center justify-center gap-3 pb-6 sm:flex-row sm:gap-4"
            aria-label="Section navigation"
          >
            <Link
              href="/general-awareness/states-information"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-800/60 px-5 py-3 text-sm font-semibold uppercase text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              States information
            </Link>
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/45 bg-emerald-500/10 px-5 py-3 text-sm font-semibold uppercase text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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

export default Chhattisgarh
