import React from 'react'

const notes = [
  'Online platform launched on 9th August, 2016 – Procurement of Goods & Services by various Government Depts, Organisations, PSUs',
  'Managed by GeM SPV, 100% Government owned, Non Profit company under the Ministry of Commerce & Industry.',
  'Replaced the DGS&D – Directorate General of Supplies & Disposals.',
]

const figures = [
  ['Primary Buyers', '1.6 Lakhs'],
  ['Secondary Buyers', '2.3 Lakhs'],
  ['Service Categories', '330+'],
  ['Order Volume in a Year', '63 Lakhs'],
  ['Order Value in a Year', 'Rs. 4 Lakhs Crores Approx (GMV – Gross Merchandise Value)'],
  ['MSE share', 'Approx 50%'],
  ['Top Buyer', 'Ministry of Defence'],
]

const GovernmentEMarket = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(6,182,212,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              GeM stands for Government electronic Marketplace
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

            <div className="grid gap-3 sm:grid-cols-2">
              {figures.map(([label, value]) => (
                <p
                  key={label}
                  className="rounded-2xl border border-teal-400/25 bg-linear-to-br from-teal-950/30 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.7] ring-1 ring-white/4 sm:px-5"
                >
                  <span className="block text-sm font-semibold text-teal-100">
                    {label}
                    {label === 'MSE share' || label === 'Top Buyer' ? ' – ' : ': '}
                  </span>
                  <span className="mt-1 block text-base font-medium text-slate-100 sm:text-lg">{value}</span>
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default GovernmentEMarket
