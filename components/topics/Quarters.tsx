'use client'
import React from 'react'
import { GraduationCap, Home, Sparkles } from 'lucide-react'

const Quarters = () => {
  const accommodationData = [
    { slNo: '1', category: 'Up to GP 1800 / Level 1', entitlement: 'Type I' },
    { slNo: '2', category: 'GP 1900- 2400 / Level 2 - 4', entitlement: 'Type II' },
    { slNo: '3', category: 'GP 2800- 4200 / Level 5 - 6', entitlement: 'Type III' },
    { slNo: '4', category: 'Non gazetted above 4200 GP / Level 7-9', entitlement: 'Type IV' },
    { slNo: '5', category: 'Gazetted with less than GP 6600 / upto Level 10', entitlement: 'Type IV' },
    { slNo: '6', category: 'Gazetted with 6600 GP / Level 11', entitlement: 'Type IV spl.' },
    { slNo: '7', category: 'Gazetted with more than GP 6600 / above Level 12', entitlement: 'Type V' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#120d08] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_-10%,rgba(251,146,60,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_90%_20%,rgba(245,158,11,0.10),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-3xl animate-[fade-up_0.55s_ease-out]">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Establishment
          </p>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-500/10 text-amber-200">
            <Home className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            QUARTERS
          </h1>
          <p className="mt-3 text-lg font-medium text-amber-100/90 sm:text-xl">
            Types of Accommodation and Eligibility
          </p>
        </header>

        {/* Eligibility table / cards */}
        <section className="mb-14 animate-[fade-up_0.65s_ease-out]">
          <h2 className="mb-6 font-serif text-2xl font-bold text-white sm:text-3xl">
            Types of Accommodation and Eligibility
          </h2>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-3xl border border-amber-400/20 bg-white/[0.03] md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-400/20 bg-amber-500/10">
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                    SI.No
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                    Category of Staff
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                    Entitlement
                  </th>
                </tr>
              </thead>
              <tbody>
                {accommodationData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 transition hover:bg-amber-500/[0.06] last:border-b-0"
                  >
                    <td className="px-5 py-4 font-mono text-sm text-amber-300/90">{row.slNo}</td>
                    <td className="px-5 py-4 text-sm text-slate-200">{row.category}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-lg border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-100">
                        {row.entitlement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid gap-3 md:hidden">
            {accommodationData.map((row, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-amber-400">{row.slNo}</span>
                  <span className="rounded-lg border border-amber-400/25 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-100">
                    {row.entitlement}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{row.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Retention */}
        <section className="animate-[fade-up_0.75s_ease-out]">
          <h2 className="mb-3 font-serif text-2xl font-bold text-white sm:text-3xl">
            Retention of Railway quarter on transfer, deputation, retirement etc.
          </h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            The instructions contained in Board&apos;s letter of even number dated 01.06.2001 (RBE No. 100/2001) regarding retention of Railway quarter on transfer, deputation, retirement etc. have been reviewed in Ministry of Railways and full Board have decided to partially modify provisions mentioned in para 1(a) and para 5.1 of the above-mentioned instructions as under.
          </p>

          {/* Permanent Transfer */}
          <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <h3 className="mb-5 font-serif text-xl font-bold text-white">1. Permanent Transfer</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/10 font-mono text-xs font-bold text-amber-300">
                  i
                </span>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  A Railway employee on transfer from one station to another which necessitates change of residence, may be permitted to retain the railway accommodation at the former station of posting for a period of two months on payment of normal licence fee plus six months on payment of double licence fee.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/10 font-mono text-xs font-bold text-amber-300">
                  ii
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mb-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                    Further extension beyond the aforesaid period may be granted on educational ground only as mentioned below:
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-amber-400/15 bg-amber-500/[0.06] p-4">
                      <div className="mb-2 flex items-center gap-2 text-amber-200">
                        <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
                        <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                          Academic session
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">
                        To cover the current academic session (i.e. end of the academic/scholastic session) plus 15 days. The end of academic/scholastic session shall, in this case, mean &quot;last paper of annual examination.&quot;
                      </p>
                    </div>
                    <div className="rounded-2xl border border-amber-400/15 bg-amber-500/[0.06] p-4">
                      <div className="mb-2 flex items-center gap-2 text-amber-200">
                        <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
                        <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                          Class 9th / 11th
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">
                        When the ward of the railway employee is studying in Class 9th or Class 11th, retention of railway accommodation may be allowed on educational ground to cover the current academic session and also the next academic session (examination) of the ward, till end of the academic/scholastic session of class 10th or 12th respectively plus 15 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/10 font-mono text-xs font-bold text-amber-300">
                  iii
                </span>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Beyond the permitted/permissible limits, however no further extension will be allowed on any ground whatsoever. Therefore, no request or representation on this score shall be entertained. For all occupations beyond the permitted period, immediate action should be taken to cancel the allotment, declare the occupation as unauthorised and initiate eviction proceedings, charging damage rent for the over-stay.
                </p>
              </div>
            </div>
          </div>

          {/* Retirement */}
          <div className="rounded-3xl border border-amber-400/25 bg-linear-to-br from-amber-950/70 via-[#120d08] to-orange-950/30 p-5 sm:p-7">
            <h3 className="mb-4 font-serif text-xl font-bold text-white">2. Retirement</h3>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Railway employees on retirement, including voluntary retires and those retired compulsorily, may be permitted to retain non-earmarked Railway accommodation for a period of 4 months on payment of normal rent/flat rate of licence fee and the next 4 months on payment of special fee, i.e. double the normal rent or double the flat rate of licence fee. This is also applicable to audit staff doing Railway audit work. The cases of retirement on medical invalidation grounds are also to be treated at par with normal retirement.
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Quarters
