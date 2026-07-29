import React from 'react'
import Link from 'next/link'

const demandsList = [
  ['1', 'Railway Board '],
  ['2', 'Miscellaneous Expenditure (General) '],
  ['3', 'General Superintendence and Services on Railways (Abstract A / SMH 01) '],
  ['4', 'Repairs and Maintenance of Permanent Way and Works (Abstract B / SMH 02) '],
  ['5', 'Repairs and Maintenance of Motive Power (Abstract C / SMH 03) '],
  ['6', 'Repairs and Maintenance of Carriages and Wagons (Abstract D / SMH 04) '],
  ['7', 'Repairs and Maintenance of Plant and Equipment (Abstract E / SMH 05) '],
  ['8', 'Operating Expenses - Rolling Stock and Equipment (Abstract F / SMH 06) '],
  ['9', 'Operating Expenses - Traffic (Abstract G / SMH 07) '],
  ['10', 'Operating Expenses - Fuel (Abstract H / SMH 08) '],
  ['11', 'Staff Welfare and Amenities (Abstract J / SMH 09) '],
  ['12', 'Miscellaneous Working Expenses (Abstract K / SMH 10) '],
  ['13', 'Provident Fund, Pension and Other Retirement Benefits (Abstract L / SMH 11) '],
  ['14', 'Appropriation to Funds (Abstract M) '],
  ['15', 'Dividend to General Revenues, Repayment of Loans from General Revenues and Amortization of Over Capitalisation '],
  ['16', 'Assets - Acquisition, Construction and Replacement (Capital Works; consolidated all capital sources)'],
]

const notes = [
  'Pre-1979: More granular; post-restructuring, Demands 3-12 map to core working expenses (Abstracts A-K).',
  'Demand 16: Single grant for all capital/plan expenditure (e.g., New Lines, Track Renewals) from sources like Capital, DRF, CF.',
  'Numerical Mapping: Abstracts use codes like A=03, B=04 (for computerization), matching Demand Nos. 3-12.',
  'Authorities control expenditure per Demand (e.g., PCE for 4, PFA for pensions).',
  'This structure supports performance budgeting and aligns with CAG audits.',
]

const Demands = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(245,158,11,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Demands for Grants Overview
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-amber-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-amber-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            In Indian Railways Financial Rules (Indian Railway Finance Code Vol. I & II), Demands for Grants represent
            parliamentary approvals for expenditure from the Consolidated Fund, restructured from April 1, 1979, into
            16 main Demands. They classify revenue, capital (now consolidated into Demand 16), pension, and
            miscellaneous expenses, corresponding to Sub-Major Heads under 3002/3003.
          </p>
        </article>

        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-slate-900/40 p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-amber-50 sm:text-2xl">Complete List of Demands</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-amber-500/40" />
          <p className="mt-6 text-base leading-relaxed text-slate-300/95 sm:text-[1.05rem] sm:leading-[1.75]">
            The standard list from Finance Code appendices:
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-amber-500/20 bg-slate-950/50 ring-1 ring-white/5">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-200">
              <thead>
                <tr className="border-b border-amber-500/25 bg-amber-950/30">
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-200/95 sm:px-5">
                    Demand No.
                  </th>
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-200/95 sm:px-5">
                    Name of Demand
                  </th>
                </tr>
              </thead>
              <tbody>
                {demandsList.map(([number, demand]) => (
                  <tr key={number} className="border-b border-white/5 align-top transition-colors last:border-b-0 hover:bg-white/3">
                    <td className="px-4 py-3 font-mono font-semibold text-amber-100/90 sm:px-5">{number}</td>
                    <td className="px-4 py-3 leading-relaxed sm:px-5">{demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-orange-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-orange-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-orange-100 sm:text-2xl">Key Changes and Notes</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-orange-500/40" />
          <ul className="mt-6 space-y-4">
            {notes.map((item) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-orange-500/15 bg-slate-950/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400 shadow-[0_0_0_4px_rgba(251,146,60,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/financial-rules"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-black/15 ring-1 ring-emerald-500/10 transition hover:border-emerald-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Financial Rules page</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Demands