import React from 'react'

const stages = [
  'Advance Planning',
  'Advance Scrutiny Major Schemes',
  'Preliminary Works Programme (PWP)',
  'Final Works Programme (FWP)',
]

const stageNotes = [
  {
    title: 'Stage One - Formulation of Schemes as a Part of Advance Planning:',
    text: 'The Works Programme is not an isolated exercise for the year but is part of a continuous planning process from the level of Division to the Railway Board. Divisions - Plan for such works - either improvement in operations or removal of bottlenecks etc within the Division itself. Zonal Railway or Railway Board - Major Investment proposals which benefit a Zonal Railway or the Indian Railways as a whole should be planned. New Lines, GC, Doubling & Other Line capacity works - Rs. 150 Crores and above - Detailed Traffic & Engineering Surveys should be carried out. New Marshalling yards, Goods terminals, and Tranship yards - Work study teams should go into the actual work before the proposal. Rate of Return - 10 % and above When a number of works - to achieve a common objective - The ROR for the entire scheme should be worked out. If the Work covers two Zonal Railways, the Zonal Railway in which the major portion of the work falls should obtain figures from the contiguous /neighboring Zonal Railway for submitting joint figures of cost and financial implication i.e., ROR to the Railway Board',
  },
  {
    title: 'Stage Two - Advance Scrutiny of major schemes before PWP',
    text: 'All schemes costing Rs. 20 lakhs or above - worked out comprehensively with full details such as 1. Technical features 2. Cost break-up 3. Benefits expected to accrue 4. ROR 5. Sketch map Zonal Railways ensured that the cost of the project has been arrived at after the fullest possible investigation incl: ROR. After being scrutinized by the Railway Board, the Zonal Railways should be advised of the acceptance with or without any modifications for inclusion in the PWP. Track Renewal works - Rs. 20 lakhs and above - Proposals should comprise 1) Traffic density 2) Age of Track 3) Condition of Track components. These are initially scrutinized keeping in view the availability of P.Way materials, Progress of works already sanctioned etc, before inclusion in the PWP.',
  },
  {
    title: 'Stage Three - PWP - Preliminary Works Programme',
    text: 'PCE - Principal Chief Engineer - Responsible for preparation & submission of PWP in Zonal Railway The overall priorities within the ceilings given by the Railway Board - fixed by PCE duly consulting GM and other PHODs The Railway Board laid down the financial limits under Various Plan Heads. Zonal Railways has to make out their programmes for the following year duly vetted by the PFA. Permissible Cost (PC) = Ceiling (C) X Norms (N) - Throw Forward (TF) Ceiling = The Lumpsum Grant allocated to a particular Division. Norms = Likely Period of completion of works as per Norms stipulated by the Railway Board for PWP. Throw Forward = Throw Forward of ongoing works under Each Plan Head. June / July Each Year - Railway Board should convey the total outlay under each Plan Head within which the Works Programme should be framed by the Zonal Railway. Preference should be given to Works in Progress. Definition of Works in Progress: A work which has been sanctioned and for which funds have been allotted whether in the original or supplementary budget of a year should be treated as a "work in progress" for the next year. Select the New works which are expected to yield the maximum benefit (ROR) to the Railway. 1st September or any date fixed by the Board - Submission of PWP to the Railway Board with a proper financial appraisal of each work together with comments of PFA. Project cost - Based on firm data both as to quantity and rates at current price levels. Also, consider the increase in prices during the intervening period between PWP and FWP. But no other increase on account of change in the scope of the Project should be allowed. Each investment proposal should be accompanied by a detailed plan showing the scheduling of the project to match the traffic requirements and the financial outlay proposed for the year - for realistic funds allocation by the Railway Board.',
  },
  {
    title: 'Stage IV - Final Works Programme - FWP',
    text: "After examining the Individual Railways PWP and discussions with the GMs, the Railway Board will decide the works which should be undertaken during the following years' FWP. The Zonal Railways will modify their PWPs as a result of the Railway Board's decision and send their FWP to the Railway Board by the stipulated date. The Demand shall be for gross expenditure, the credits or recoveries being shown in the form of footnotes to Demands.",
  },
]

const tones = [
  'border-emerald-400/25 from-emerald-950/30 text-emerald-50 border-emerald-400/20 bg-emerald-500/10',
  'border-sky-400/25 from-sky-950/30 text-sky-50 border-sky-400/20 bg-sky-500/10',
  'border-amber-400/25 from-amber-950/30 text-amber-50 border-amber-400/20 bg-amber-500/10',
  'border-teal-400/25 from-teal-950/30 text-teal-50 border-teal-400/20 bg-teal-500/10',
]

const WorksProgrammePage = () => {
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
              The number of stages in Works Programme.
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            <ol className="grid gap-3 sm:grid-cols-2">
              {stages.map((stage, index) => (
                <li
                  key={stage}
                  className="flex gap-3 rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 ring-1 ring-white/4"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-200 to-emerald-500 text-sm font-extrabold text-emerald-950 shadow-md ring-1 ring-emerald-100/50">
                    {index + 1}
                  </span>
                  <p className="text-[15px] leading-[1.7] text-slate-100">{stage}</p>
                </li>
              ))}
            </ol>

            {stageNotes.map((stage, index) => {
              const [border, from, title, rule, wash] = tones[index].split(' ')

              return (
                <section
                  key={stage.title}
                  className={`overflow-hidden rounded-2xl border bg-linear-to-br via-slate-900/40 to-slate-900/20 ${border} ${from}`}
                >
                  <div className={`border-b px-4 py-4 sm:px-5 ${rule} ${wash}`}>
                    <h2 className={`text-[15px] font-semibold leading-relaxed sm:text-base ${title}`}>{stage.title}</h2>
                  </div>
                  <p className="px-4 py-5 text-[15px] leading-[1.85] text-slate-200 sm:px-5 sm:text-base">{stage.text}</p>
                </section>
              )
            })}
          </div>
        </article>
      </div>
    </div>
  )
}

export default WorksProgrammePage
