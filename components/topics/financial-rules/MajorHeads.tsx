import React from 'react'
import Link from 'next/link'

const revenueReceiptHeads = [
  '1001: Indian Railways - Miscellaneous Receipts',
  '1002: Indian Railways - Commercial Lines - Revenue Receipts (includes sub-heads/abstracts for coaching earnings, goods earnings, sundry other earnings, etc.)',
  '1003: Indian Railways - Strategic Lines - Revenue Receipts',
]

const expenditureHeads = [
  '3001: Indian Railways - Policy Formulation, Direction, Research and other Miscellaneous Organisation (covers Railway Board, RDSO, etc.)',
  '3002: Indian Railways - Commercial Lines - Working Expenses',
  '3003: Indian Railways - Strategic Lines - Working Expenses',
  '3004: Indian Railways - Open Line Works (Revenue)',
  '3005: Payments to General Revenues (e.g., dividends, contributions)',
  '3006: Appropriation from Railway Surplus',
  '3007: Repayment of Loans taken from General Revenues',
]

const abstractHeads = [
  'Abstract A: General Superintendence and Services',
  'Abstract B: Repairs and Maintenance of Permanent Way and Works',
  'Abstract C: Repairs and Maintenance of Motive Power',
  'Abstract D: Repairs and Maintenance of Carriage and Wagon',
  'Abstract E: Repairs and Maintenance of Plant and Equipment',
  'Abstract F: Operating Expenses - Rolling Stock and Equipment',
  'Abstract G: Operating Expenses - Traffic',
  'Abstract H: Operating Expenses - Fuel',
  'Abstract J: Staff Welfare and Amenities',
  'Abstract K: Miscellaneous Working Expenses',
  'Abstract L: Provident Fund, Pension and Other Retirement Benefits',
  'Abstract M: Appropriation to Funds',
  'Abstract N: Suspense',
]

const capitalHeads = [
  '5002: Capital Outlay on Indian Railways - Commercial Lines (main head for most plan expenditure; includes sub-major/minor heads for assets)',
  '5003: Capital Outlay on Indian Railways - Strategic Lines',
]

const planHeadExamples = [
  '11: New Lines (Construction)',
  '14: Gauge Conversion',
  '15: Doubling',
  '16: Traffic Facilities (e.g., yard remodelling)',
  '21: Rolling Stock',
  '31: Track Renewals',
  '32: Bridge Works',
  '33: Signalling and Telecommunication Works',
  '35: Electrification Projects',
  '51: Staff Quarters',
  '53: Passenger Amenities',
  '(and others like road safety works, workshops, etc.; full list in Finance Code or Appendix IV).',
]

const otherRelatedHeads = [
  '0021: Income Tax (deductions related to railways)',
  '0049: Interest Receipts (e.g., on advances to staff)',
  '7002: Loans to Railways (to funds like DF, Capital Fund, etc.)',
  '7610: Loans to Government Servants (HBA, scooter, computer, etc.)',
  '8009: State Railway Provident Fund (SRPF)',
  '8011: Insurance and Pension Funds (e.g., CGEIS)',
  '8115: Depreciation/Renewal Reserve Funds (DRF)',
  '8121: General and Other Reserve Funds (e.g., Staff Benefit Fund - SBF)',
  '8337: Deposits of Railways',
  '8445: Railway Deposits (e.g., EMD, SD, unpaid wages)',
  '8660: Suspense Accounts - Railways',
  '8670: Cheques and Bills',
  '8671: Departmental Balances',
  '8672: Permanent Cash Imprest',
  '8675: Deposits with Reserve Bank',
  '8677: Remittances Into Bank (RIB)',
  '8787: Adjusting Account with Railways',
  '8790: Accounts with States, etc. (Railways)',
  '8797: Exchange Accounts (Transfer Transactions)',
]

const MajorHeads = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-violet-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(168,85,247,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-violet-100 via-fuchsia-100 to-cyan-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Major Heads Overview
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-violet-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-violet-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            Major Heads in Indian Railways form the top level of the government&apos;s List of Major and Minor Heads of
            Account, as detailed in the Indian Railway Finance Code Volume I & II and Account Code. They classify
            revenues, expenses, capital outlays, loans, and funds into distinct categories for budgeting and auditing,
            with nearly 30 key heads specific to railways.
          </p>
        </article>

        <section className="mt-8 rounded-2xl border border-violet-500/20 bg-slate-900/40 p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-violet-50 sm:text-2xl">
            Complete List of Key Major Heads
          </h2>
          <div className="mt-4 h-px w-16 rounded-full bg-violet-500/40" />
          <p className="mt-6 text-base leading-relaxed text-slate-300/95 sm:text-[1.05rem] sm:leading-[1.75]">
            The following table lists the primary Major Heads used in Indian Railways financial rules, grouped by type
            (revenue, expenditure, capital, etc.). Bolded ones are most frequently referenced.
          </p>
        </section>

        <section className="mt-8 space-y-8">
          <article className="rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-emerald-100 sm:text-2xl">
              Revenue Receipt Heads (under Consolidated Fund - Revenue Account)
            </h2>
            <ul className="mt-6 space-y-4">
              {revenueReceiptHeads.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-emerald-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-cyan-100 sm:text-2xl">
              Expenditure Heads (Revenue Account - Working Expenses)
            </h2>
            <ul className="mt-6 space-y-4">
              {expenditureHeads.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-cyan-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-sky-100 sm:text-2xl">
              Sub-Major Heads/Abstracts under 3002/3003 (Ordinary Working Expenses - 13 abstracts): These break down
              revenue working expenses.
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {abstractHeads.map((item) => (
                <li key={item} className="rounded-2xl border border-sky-500/15 bg-slate-950/35 px-4 py-4 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem]">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-fuchsia-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-fuchsia-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-fuchsia-100 sm:text-2xl">Capital Heads (Capital Account)</h2>
            <ul className="mt-6 space-y-4">
              {capitalHeads.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-fuchsia-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-fuchsia-400 shadow-[0_0_0_4px_rgba(232,121,249,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-300/95 sm:text-[1.05rem] sm:leading-[1.75]">
              Expenditure under 5002/5003 is further classified by Plan Heads (treated as minor heads), such as:
            </p>

            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {planHeadExamples.map((item) => (
                <li key={item} className="rounded-2xl border border-fuchsia-500/15 bg-slate-950/35 px-4 py-4 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem]">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-amber-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-amber-100 sm:text-2xl">
              Other Related Major Heads (Loans, Funds, Deposits, Suspense, Remittances - often under Public Account)
            </h2>
            <ul className="mt-6 space-y-4">
              {otherRelatedHeads.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-amber-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-violet-100 sm:text-2xl">Allocation Structure</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            Each Major Head breaks down hierarchically: Major Head → Sub-Major Head → Minor Head → Sub Head →
            Detailed Head → Object Head (Primary Unit). Example for PFA&apos;s HRA: 3002-01-200-210-211-04.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-rose-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-rose-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-rose-100 sm:text-2xl">Summary</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            These Major Heads enable precise tracking of railway finances under erstwhile demands (e.g., 16 for
            capital works). Updates occur via Railway Board circulars or CAG&apos;s List of Major/Minor Heads, aligning
            with national five-year plans.
          </p>
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

export default MajorHeads