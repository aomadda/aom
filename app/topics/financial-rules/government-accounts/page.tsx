import React from 'react'

const rows = [
  ['Article (Constitution of India)', '266(1)', '267(1)', '266(2)'],
  [
    'Receipts',
    'Coaching, Goods & Sundry Other Earnings',
    'Fixed Sum (Rs.30,000 Crores – Govt of India)',
    'Receipts other Than Consolidated Fund of India (PF, SBF, Appropriations to Railways Funds i.e., DRF, DF etc)',
  ],
  [
    'Payments',
    'Erstwhile Demands 1 to 16',
    'Unforeseen expenditure (New Service)',
    'Payments other than Consolidated Fund (PF withdrawals, SBF expenditure, Expenditure from Railway Funds i.e., DRF, DF etc)',
  ],
  ['Approval of Parliament', 'Prior approval', 'Post approval', 'Approval not required'],
  ['Sub parts', '1.Revenue 2.Capital 3. Debt', 'Nil', '1.Debt & Deposits 2.Remittances'],
]

const GovernmentAccountsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(56,189,248,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-amber-400 to-sky-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-amber-100 to-sky-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Government Accounts – 3 Parts
            </h1>
          </header>

          <div className="px-3 py-5 sm:px-5 sm:py-6">
            <div className="overflow-x-auto rounded-xl border border-slate-600/50">
              <table className="w-full min-w-240 border-collapse text-left text-sm lg:min-w-full">
                <thead>
                  <tr>
                    <th className="border-b border-slate-600/60 bg-slate-800/80 px-4 py-3 font-semibold text-slate-100">
                      Basis
                    </th>
                    <th className="border-b border-l border-emerald-400/30 bg-emerald-500/15 px-4 py-3 font-semibold text-emerald-50">
                      Consolidated Fund
                    </th>
                    <th className="border-b border-l border-amber-400/30 bg-amber-500/15 px-4 py-3 font-semibold text-amber-50">
                      Contingency Fund
                    </th>
                    <th className="border-b border-l border-sky-400/30 bg-sky-500/15 px-4 py-3 font-semibold text-sky-50">
                      Public Account
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] leading-[1.7] text-slate-200">
                  {rows.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={`align-top ${index % 2 === 1 ? 'bg-slate-800/25' : ''} ${index < rows.length - 1 ? 'border-b border-slate-700/60' : ''}`}
                    >
                      <td className="px-4 py-3 font-medium text-slate-50">{row[0]}</td>
                      <td className="border-l border-slate-700/70 px-4 py-3">{row[1]}</td>
                      <td className="border-l border-slate-700/70 px-4 py-3">{row[2]}</td>
                      <td className="border-l border-slate-700/70 px-4 py-3">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default GovernmentAccountsPage
