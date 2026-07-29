import React from 'react'

const ModifiedAssuredCareerProgression = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight relative z-10 text-center">MODIFIED ASSURED CAREER PROGRESSION (MACP):</h1>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            {[
              "MACP will be administered at 10, 20 and 30 years of service, the employee will move to immediate next pay Level in the new pay Matrix. The MACP scheme continues to be effective from 1/9/2008. There shall be three FUG under MACPS, counted from entry grade on completion of 10,20 and 30 years of services, respectively or 10 years of continuous service in the same level in Pay Matrix, whichever is earlier.",
              "Regular service for the purpose of the MACPS shall commence from the date of joining of a post in direct entry grade on a regular basis either on direct recruitment basis or on absorption/re-employment basis. The Departmental screening committee will consider the case for grant of FUG under MACP scheme and assess the suitability of an employee. No stepping up of pay in the level would be admissible with regard to junior getting more pay than the senior on account of pay fixation under MACP scheme. The MACPS envisages merely placement in the immediate next higher level in the hierarchy of the pay matrix and thus it may be lower in certain cases than the level of the regular promotion. In such cases ,the higher level attached to the next promotional post in the hierarchy of the cadre will be given only at the time of regular promotion. No reservation order/roster shall apply to the MACPS.",
              "The benefits of pay fixation available at the time of regular promotion shall also be allowed at the time of FUG under the scheme. There shall be no further fixation of pay at the time of regular promotion if it is in the same pay level as granted under MACPS. However, at the time of actual promotion if it happens to be in a post carrying higher pay level than what is available under MACPS, then the employee shall be placed in the level to which he is promoted.",
              "The employee shall exercise an option to get this fixation done either on the date of promotion or wef the date of next increment viz.1st July or 1st January (whichever is beneficial)",
              "Promotion/FUG granted in the past to those grades which are in the same Level in the pay matrix due to merger of pay scales of posts recommended by the 7th-PC shall be ignored for the purpose of granting upgradations under MACPS. The benefit of merger will accrue wef the date notification of the recruitment rules for the relevant post. As a result of the implementation of 7th-PC, if the Grade pay of the substantive post held by an employee is upgraded by granting a higher pay level, in such cases the MACP already granted to the employee shall be refixed. However, all the FUGs should be done strictly in accordance with the hierarchy of Levels in the pay matrix.",
              "On grant of FUG, there shall be no change in the designation, classification or higher status. However, financial and certain other benefits which are linked to the pay drawn by an employee such as HBA, allotment of Govt.accomadation shall be permitted.",
              "If a regular promotion has been offered but was refused by the employee before becoming entitled to an upgradation under the scheme, no FUG shall be granted allowed as the employee has not stagnated due to lack of opputunities. However, FUG has been allowed due to stagnation and the employee subsequently refuse the promotion, it shall not be a ground to withdraw the FUG. The employee shall however not be eligible to be considered for the further FUG till he agrees to be considered for promotion.",
            ].map((text, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-indigo-400/70"
              >
                <span className="flex h-7 w-7 shrink-0 mt-0.5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-200 text-sm leading-relaxed pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ModifiedAssuredCareerProgression
