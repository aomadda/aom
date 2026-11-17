import React from 'react'

const chargedItems = [
  'President of India and its Office expenditure',
  'Pay & allowances of Vice President of India, Speaker, Dy. Speaker, C&AG, Supreme Court and High Court judges.',
  'Any sum required to satisfy any Judgment, Decree or Award or any Court or Arbitral Tribunal (not Awards by the Arbitrators appointed by GM)',
  'Debt charges for which the Govt of India is liable (inc: Interest & Repayment of Loans) - Examples are World Bank Loan & JICA (Japan International Cooperation Agency) loan taken for the construction of Dedicated Freight Corridor. Because the Govt cannot afford to delay the Loans repayment.',
  'Any other expenditure declared by the Constitution or by Parliament to be so charged.',
]

const corrections = [
  'Arbitration Award made by the Railway Arbitrator comes under Chargeable expenditure. - It is incorrect. The correct one is, comes under Voted Expenditure.',
  'Pay & Allowances of the Officers and Staff of Audit Dept comes under Chargeable Expenditure. The correct one is it comes under Voted expenditure duly allocated to the erstwhile Demand No.02 - Miscellaneous Expenditure (General) under Major Head 3001).',
  'However Pay & allowances of C&AG and its establishment (office) including Dy.C&AG comes under Chargeable Expenditure',
  'Chargeable expenditure is charged to the Contingency Fund of India. The correct one is the CFI Consolidated Fund of India (Authority: Article 302 of the Constitution of India)',
]

const ChargedExpenditurePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_30%,rgba(245,158,11,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-amber-400 to-cyan-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-amber-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Charged expenditure
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            <section className="space-y-3 rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-5 sm:px-5">
              <p className="text-[15px] leading-[1.85] text-slate-200 sm:text-base">
                Government expenditure is divided into 1. Voted expenditure & 2. Charged Expenditure
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <p className="rounded-2xl border border-sky-400/20 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                  Voted - Made from CFI – Consolidated Fund of India .
                </p>
                <p className="rounded-2xl border border-amber-400/20 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                  Charged – Charged upon CFI - Consolidated Fund of India
                </p>
              </div>
            </section>

            <section className="space-y-3 rounded-2xl border border-teal-400/25 bg-linear-to-br from-teal-950/30 via-slate-900/40 to-slate-900/20 px-4 py-5 sm:px-5">
              <p className="text-[15px] leading-[1.85] text-slate-200 sm:text-base">
                Para 302 of Finance Code & Article 112 (2) of Constitution of India prescribes estimates of
                expenditure embodied in the Annual financial statement i.e., Annual Budget shall show separately
                i.e.,
              </p>
              <p className="rounded-2xl border border-amber-400/20 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                Charged expenditure - the amounts required to meet expenditure charged upon the Consolidated Fund
                of India &
              </p>
              <p className="rounded-2xl border border-sky-400/20 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                Voted expenditure - the amounts required to meet other expenditure proposed to be made from the
                Consolidated Fund of India.
              </p>
            </section>

            <p className="rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base">
              Article 113 (1) the Constitution of India: The estimates of expenditure CHARGED upon the Consolidated
              Fund of India shall not be submitted to the Vote of Parliament&quot;. However Parliament may discuss it.
            </p>

            <p className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base">
              <strong className="font-semibold text-emerald-50">Rationale:</strong> The idea behind charging certain
              expenditures is to protect important constitutional offices and their functioning from being influenced
              by political considerations. By exempting them from the vote of Parliament, the Constitution ensures
              financial autonomy for key branches of government like the judiciary, the President’s office, and
              constitutional authorities like the CAG.
            </p>

            <p className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base">
              The meaning of &quot;Charge&quot; (adjective) is &quot;to impose on&quot;. In reality too, Charged
              expenditure is imposed on the Consolidated Fund of India instead of obtaining the approval of
              Parliament.
            </p>

            <p className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base">
              The concept of Charged expenditure and its specific privilege is operational in European countries too.
            </p>

            <ul className="space-y-3">
              {chargedItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-amber-400/20 bg-linear-to-br from-amber-950/25 via-slate-900/40 to-slate-900/20 px-4 py-4 ring-1 ring-white/4 sm:px-5"
                >
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">{item}</p>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              {corrections.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-rose-400/25 bg-linear-to-br from-rose-950/30 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ChargedExpenditurePage
