import React from 'react'

const notes = [
  'Revenue in nature, but the firm derives benefits for a period of more than one year.',
  'But we cannot categorize this expenditure as Capital. Because such expenditures do not result in the acquisition of an Asset.',
  'Hence, these expenses are proportionately deferred over the period for which its benefits are derived. (More than one Year) . Complies Matching Principle',
  'Best example is Heavy Advertisement expenses incurred during launch of New product to reach the public. But the results (i.e., Sales) showing its benefits over the period of 2 to 3 years.',
  'Treatment: Deferred Revenue expenditure shown as Asset in Balance Sheet till it was written off in Profit & Loss Account for a period of 3 to 5 years.',
]

const comparison = [
  ['Daily operations & maintenance', 'Assets – acquiring, upgrading & extending the life'],
  ['For Running the Business or Organisation', 'Expanding or improving the Business'],
  ['Less than a Financial Year', 'More than a Financial year'],
  ['Expired cost', 'Unexpired cost'],
  ['Accounted in Profit & Loss Account as expenditure', 'Shown in Balance Sheet as an Asset'],
  ['Recurring', 'Non recurring or One time'],
]

const RevenueExpenditurePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_30%,rgba(6,182,212,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Revenue Expenditure
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            {notes.map((note, index) => (
              <p
                key={note}
                className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base"
              >
                {index === notes.length - 1 ? (
                  <>
                    <strong className="font-semibold text-emerald-50">Treatment:</strong>{' '}
                    {note.slice('Treatment:'.length).trim()}
                  </>
                ) : (
                  note
                )}
              </p>
            ))}

            <section className="overflow-hidden rounded-2xl border border-teal-400/25 bg-linear-to-br from-teal-950/30 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-teal-400/20 bg-teal-500/10 px-4 py-4 text-center sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-teal-50 sm:text-base">
                  Revenue Expenditure Vs Capital Expenditure
                </h2>
              </div>
              <div className="px-3 py-4 sm:px-4">
                <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                  <table className="w-full min-w-140 border-collapse text-left text-sm lg:min-w-full">
                    <thead>
                      <tr>
                        <th className="w-1/2 border-b border-emerald-400/30 bg-emerald-500/15 px-4 py-3 text-center font-semibold text-emerald-50">
                          Revenue Expenditure
                        </th>
                        <th className="w-1/2 border-b border-l border-cyan-400/30 bg-cyan-500/15 px-4 py-3 text-center font-semibold text-cyan-50">
                          Capital Expenditure
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[15px] leading-[1.7] text-slate-200">
                      {comparison.map((row, index) => (
                        <tr
                          key={row[0]}
                          className={`align-top ${index % 2 === 1 ? 'bg-slate-800/25' : ''} ${index < comparison.length - 1 ? 'border-b border-slate-700/60' : ''}`}
                        >
                          <td className="px-4 py-3">{row[0]}</td>
                          <td className="border-l border-slate-700/70 px-4 py-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default RevenueExpenditurePage
