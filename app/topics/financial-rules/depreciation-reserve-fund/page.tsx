import React from 'react'

const notes = [
  'Established in 1924 (April 1st) - The Oldest Working Railway Fund',
  'The Previous Name - The Programme Revenue . The first two numerals (Capital classification of 8 Digits) - 21',
  'The Uniqueness is, Source is Revenue i.e., erstwhile Demand Number 14 (Internal i.e., from Railway’s Revenue) and the expenditure is Capital i.e., erstwhile Demand No.16',
  'Erstwhile Demand No.14 is now renamed as SMH - Sub Major Head 12 (under Major Head 3002 - Indian Railways Commercial Lines - Working Expenses)',
  'This is a Minor Head under the Major Head 8115 - Depreciation / Renewal Reserve Funds',
  'DRF Account will be maintained in the books of the Railway and in the office of the Railway Board',
]

const credits = [
  'Contributed annually from the Railway Revenues (as per the recommendations of RCC – Railway Convention Committee)',
  'The amount realized from the disposal of the original cost (at the Debit of Capital or DF)',
  'The amount of Interest earned on the balance of the Fund.',
]

const debits = [
  'The cost of replacements & renewals (incl: cost of dismantling, handling & shifting)',
  'The cost of replacement of Ballast (incl: improvement type)',
  'The cost at debit of Capital or DF of an Asset (other than Land) which is abandoned or disposed without being replaced.',
  'Modernization of Rolling Stock',
]

function NumberedList({
  items,
  tone,
}: {
  items: string[]
  tone: 'emerald' | 'amber'
}) {
  const badge = {
    emerald: 'from-emerald-200 to-emerald-500 text-emerald-950 ring-emerald-100/50',
    amber: 'from-amber-200 to-amber-500 text-amber-950 ring-amber-100/50',
  }[tone]
  const card = {
    emerald: 'border-emerald-400/15',
    amber: 'border-amber-400/15',
  }[tone]

  return (
    <ol>
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 pb-3 last:pb-0 sm:gap-4">
          <span
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br text-sm font-extrabold shadow-md ring-1 ${badge}`}
          >
            {index + 1}
          </span>
          <p
            className={`flex-1 rounded-2xl border bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4 ${card}`}
          >
            {item}
          </p>
        </li>
      ))}
    </ol>
  )
}

const DepreciationReserveFundPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(56,189,248,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-sky-400 to-amber-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-sky-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              DRF – Depreciation Reserve Fund
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            {notes.map((note) => (
              <p
                key={note}
                className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base"
              >
                {note}
              </p>
            ))}

            <section className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-950/30 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-emerald-400/20 bg-emerald-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold text-emerald-50 sm:text-base">Credits:</h2>
              </div>
              <div className="px-4 py-5 sm:px-5">
                <NumberedList items={credits} tone="emerald" />
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/30 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-amber-400/20 bg-amber-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold text-amber-50 sm:text-base">Debits:</h2>
              </div>
              <div className="px-4 py-5 sm:px-5">
                <NumberedList items={debits} tone="amber" />
              </div>
            </section>

            <p className="rounded-2xl border border-sky-400/25 bg-linear-to-br from-sky-950/30 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-100 ring-1 ring-white/4 sm:px-5 sm:text-base">
              Balance will be carried from year to year.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default DepreciationReserveFundPage
