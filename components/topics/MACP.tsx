'use client'
import React from 'react'
import { Sparkles, TrendingUp } from 'lucide-react'

const macpPoints = [
  'MACP will be administered at 10, 20 and 30 years of service, the employee will move to immediate next pay Level in the new pay Matrix. The MACP scheme continues to be effective from 1/9/2008. There shall be three FUG under MACPS, counted from entry grade on completion of 10,20 and 30 years of services, respectively or 10 years of continuous service in the same level in Pay Matrix, whichever is earlier.',
  'Regular service for the purpose of the MACPS shall commence from the date of joining of a post in direct entry grade on a regular basis either on direct recruitment basis or on absorption/re-employment basis. The Departmental screening committee will consider the case for grant of FUG under MACP scheme and assess the suitability of an employee. No stepping up of pay in the level would be admissible with regard to junior getting more pay than the senior on account of pay fixation under MACP scheme. The MACPS envisages merely placement in the immediate next higher level in the hierarchy of the pay matrix and thus it may be lower in certain cases than the level of the regular promotion. In such cases ,the higher level attached to the next promotional post in the hierarchy of the cadre will be given only at the time of regular promotion. No reservation order/roster shall apply to the MACPS.',
  'The benefits of pay fixation available at the time of regular promotion shall also be allowed at the time of FUG under the scheme. There shall be no further fixation of pay at the time of regular promotion if it is in the same pay level as granted under MACPS. However, at the time of actual promotion if it happens to be in a post carrying higher pay level than what is available under MACPS, then the employee shall be placed in the level to which he is promoted.',
  'The employee shall exercise an option to get this fixation done either on the date of promotion or wef the date of next increment viz.1st July or 1st January (whichever is beneficial)',
  'Promotion/FUG granted in the past to those grades which are in the same Level in the pay matrix due to merger of pay scales of posts recommended by the 7th-PC shall be ignored for the purpose of granting upgradations under MACPS. The benefit of merger will accrue wef the date notification of the recruitment rules for the relevant post. As a result of the implementation of 7th-PC, if the Grade pay of the substantive post held by an employee is upgraded by granting a higher pay level, in such cases the MACP already granted to the employee shall be refixed. However, all the FUGs should be done strictly in accordance with the hierarchy of Levels in the pay matrix.',
  'On grant of FUG, there shall be no change in the designation, classification or higher status. However, financial and certain other benefits which are linked to the pay drawn by an employee such as HBA, allotment of Govt.accomadation shall be permitted.',
  'If a regular promotion has been offered but was refused by the employee before becoming entitled to an upgradation under the scheme, no FUG shall be granted allowed as the employee has not stagnated due to lack of opputunities. However, FUG has been allowed due to stagnation and the employee subsequently refuse the promotion, it shall not be a ground to withdraw the FUG. The employee shall however not be eligible to be considered for the further FUG till he agrees to be considered for promotion.',
]

const milestones = [
  { years: '10', label: 'First FUG' },
  { years: '20', label: 'Second FUG' },
  { years: '30', label: 'Third FUG' },
]

const ModifiedAssuredCareerProgression = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08140f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_12%_-8%,rgba(52,211,153,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_90%_15%,rgba(16,185,129,0.12),transparent)]" />
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
        <header className="mb-10 max-w-3xl animate-[fade-up_0.55s_ease-out]">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/90">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Establishment
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            MACP
          </h1>
          <p className="mt-3 text-lg font-medium text-emerald-100/90 sm:text-xl">
            Modified Assured Career Progression
          </p>
        </header>

        {/* Milestone strip */}
        <section
          className="mb-12 animate-[fade-up_0.65s_ease-out] overflow-hidden rounded-3xl border border-emerald-400/25 bg-linear-to-br from-emerald-950/80 via-green-950/40 to-[#08140f] p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <TrendingUp className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                Financial upgradations
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Effective from <span className="font-semibold text-white">1/9/2008</span>
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {milestones.map((item, index) => (
              <div
                key={item.years}
                className="relative rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-6 text-center"
              >
                {index < milestones.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-1/2 -right-2 hidden h-px w-4 -translate-y-1/2 bg-emerald-400/40 sm:block"
                    aria-hidden
                  />
                ) : null}
                <p className="font-serif text-4xl font-bold text-white sm:text-5xl">{item.years}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/80">
                  years
                </p>
                <p className="mt-3 text-sm font-medium text-emerald-100">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content points */}
        <section className="animate-[fade-up_0.75s_ease-out]">
          <h2 className="mb-2 font-serif text-2xl font-bold text-white sm:text-3xl">
            MODIFIED ASSURED CAREER PROGRESSION (MACP):
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-slate-400">
            Key rules on FUG, pay fixation, promotion refusal, and 7th CPC related treatment.
          </p>

          <ol className="space-y-4">
            {macpPoints.map((text, i) => (
              <li
                key={i}
                className="group grid gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/[0.05] sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 font-mono text-sm font-bold text-emerald-300 transition group-hover:scale-105">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm leading-relaxed text-slate-300 sm:pt-2 sm:text-[15px]">
                  {text}
                </p>
              </li>
            ))}
          </ol>
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

export default ModifiedAssuredCareerProgression
