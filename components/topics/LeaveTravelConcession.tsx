import React from 'react'

const LeaveTravelConcession = () => {
  const mainRules = [
    'Railway employees are allowed to avail LTC as per DoPT OM dated 27th March 2018',
    'Railway employees continue to be governed fully by the Railway Servants (Pass) Rules.',
    '"All India LTC" once in a block of four years.',
    '"All India LTC" will be purely optional for the railway employees.',
    'After availing "All India LTC" in a year, it will not be mandatory for the railway employee to opt for "All India LTC" in the next or subsequent block years.',
    'No "Home Town LTC" will be admissible.',
    'Railway employees will surrender the Privilege Passes admissible to them in the calendar year in which they intend to avail the LTC facility.',
    'They would continue to be eligible for Privilege Ticket Orders and other kinds of passes viz., Duty Pass, School Pass, Special Passes on Medical grounds, etc., as admissible under the Pass rules.',
    'If both spouses are Railway employees then both will surrender privilege passes.',
    'Beneficiaries will be members of family, dependents, etc as per conditions as laid down in the CCS (LTC) rules will be applicable for availing "All India LTC".',
  ]

  const briefRules = [
    'Family for the purpose of LTC - Government employee, spouse, two unmarried dependent children, divorced/widowed daughter, dependent parents residing with employee, dependent unmarried minor brother & sister and dependent divorced/widowed sister residing with employee.',
    'Government servant and each member of his family may visit different places of their choice during the block of four years.',
    'Employee should have completed one year continuous service on the date of journey.',
  ]

  const additionalRules = [
    {
      label: 'Travel entitlements of Government servants for LTC',
      text: 'LTC entitlements are the same as TA entitlements as per Ministry of Finance\'s O.M. dated 13.07.2017. Exception: Air travel entitlement for Pay Matrix Level 6 to Level 8 is allowed for TA only, not for LTC (i.e., only AC 2 tier by train for pay level 6 to level 8). Official drawing Pay in Level 9 is entitled to travel by Air for LTC purpose.',
    },
    {
      label: 'No daily allowance',
      text: 'No daily allowance is admissible for travel on LTC.',
    },
    {
      label: 'LTC for journeys in Government/public sector vehicles',
      text: 'LTC is admissible for journeys performed in vehicles operated by the Government or any Corporation in the public sector (Central, State, or local body).',
    },
    {
      label: 'Reimbursement for places not connected by Government transport',
      text: 'Reimbursement is allowed for journeys on transfer for a maximum limit of 100 Kms covered by private/personal transport, based on a self-certification, for places not connected by Government means of transport.',
    },
    {
      label: 'Air travel for employees not entitled to air travel',
      text: 'Employees not entitled to air travel may travel by any airline. Reimbursement in such cases is restricted to the fare of their entitled class of train, transport, or actual expense, whichever is less.',
    },
    {
      label: 'Reimbursement under LTC scheme not covering incidental expenses',
      text: 'The LTC scheme does not cover incidental expenses and expenditure incurred on local journeys.',
    },
    {
      label: 'Travel by Premium/Tatkal/Suvidha trains',
      text: 'Travel by Premium trains, Premium Tatkal trains, and Suvidha trains is allowed on LTC. Reimbursement of tatkal charges or premium tatkal charges is also admissible for LTC.',
    },
    {
      label: 'Flexi fare (dynamic fare) in Rajdhani/Shatabdi/Duronto trains',
      text: 'Dynamic fare applicable in Rajdhani/Shatabdi/Duronto trains is admissible for LTC journeys. Clarification: This dynamic fare component is not admissible if a non-entitled Government servant travels by air and claims reimbursement for the entitled class of Rajdhani/Shatabdi/Duronto trains.',
    },
    {
      label: 'Catering charges in Rajdhani/Shatabdi/Duronto trains',
      text: 'Catering charges included in the rail fare for Rajdhani/Shatabdi/Duronto trains are reimbursable in full as per entitlement/eligibility.',
    },
    {
      label: 'Reimbursement for children (5-12 years) for LTC',
      text: 'For children aged between 5 years and under 12 years, the actual rail fare (half or full tickets) purchased by the Government servant is reimbursed for LTC.',
    },
    {
      label: 'Time-limit for drawal of LTC advance',
      text: 'The time-limit for drawal of LTC advance is 125 days for journeys by train. It is mandatory for the Government servant to produce the outward journey tickets to the Competent Authority within ten days of advance drawal.',
    },
    {
      label: 'Air travel to North East Region (NER), Jammu and Kashmir (J&K), and Andaman & Nicobar Islands (A&N)',
      intro: 'This provision is extended for two years, w.e.f. 26th September, 2016, subject to the following conditions:',
      subPoints: [
        {
          key: 'a',
          label: 'Air India Economy class',
          text: 'Travel by air must continue to be performed by Air India in Economy class at LTC-80 fare or less.',
        },
        {
          key: 'b',
          label: 'Journey by air to Jammu & Kashmir',
          text: 'Travel by any airline is allowed, at a fare less than or equal to LTC80 fare of Air India.',
        },
        {
          key: 'c',
          label: 'Air ticket purchase options',
          text: 'Air tickets can be purchased either directly from the airlines (booking counters/website) or through authorized agents only, specifically mentioning M/s Balmer Lawrie and Co. Ltd., M/s Ashok Travels and Tours Ltd., and IRCTC.',
        },
        {
          key: 'd',
          label: "Gazetted officers' air travel",
          text: 'Gazetted officers can use air travel from their place of work.',
        },
        {
          key: 'e',
          label: 'Permitted air travel for non-entitled Government servants in Economy class',
          items: [
            'Between Kolkata/Guwahati and any place in NER.',
            'Between Kolkata/Chennai/Bhubaneswar and Port Blair.',
            'Between Delhi/Amritsar and any place in J&K.',
          ],
        },
        {
          key: 'f',
          label: 'Journey for non-entitled employees from Headquarters',
          text: 'Journey for these non-entitled employees from their Headquarters up to Kolkata/Guwahati/Chennai/Bhubaneswar/Delhi/Amritsar will have to be undertaken as per their entitlement.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-6">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-center leading-snug">
              LEAVE TRAVEL CONCESSION (LTC) FOR RAILWAY EMPLOYEES & CCS (LTC) RULES (A BRIEF)
            </h1>
          </div>
        </section>

        {/* Main Rules (1-10) */}
        <section className="space-y-4 mb-10">
          {mainRules.map((rule, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden hover:border-amber-500/40 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="flex gap-4 p-5 sm:p-6">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/40 text-amber-300 font-bold text-sm group-hover:bg-amber-600/50 transition-colors">
                  {index + 1}
                </span>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-1.5">
                  {rule}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Brief on orders - Subheading */}
        <section className="mb-6">
          <div className="bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                Brief on orders issued by DoPT/MOF on LTC
              </h2>
            </div>
          </div>
        </section>

        {/* Brief Rules (11-13) */}
        <section className="space-y-4 mb-10">
          {briefRules.map((rule, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden hover:border-amber-500/40 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="flex gap-4 p-5 sm:p-6">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/40 text-amber-300 font-bold text-sm group-hover:bg-amber-600/50 transition-colors">
                  {index + 11}
                </span>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-1.5">
                  {rule}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Additional Rules (14-25) */}
        <section className="space-y-4">
          {additionalRules.map((rule, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden hover:border-amber-500/40 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="flex gap-4 p-5 sm:p-6">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/40 text-amber-300 font-bold text-sm group-hover:bg-amber-600/50 transition-colors">
                  {index + 14}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-amber-300 font-semibold text-base mb-1.5">
                    {rule.label}
                  </h3>
                  {'subPoints' in rule && rule.subPoints ? (
                    <div className="space-y-4">
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        {rule.intro}
                      </p>
                      <ul className="space-y-3">
                        {rule.subPoints.map((sub: { key: string; label: string; text?: string; items?: string[] }) => (
                          <li key={sub.key} className="flex gap-3">
                            <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-amber-600/30 text-amber-400 font-semibold text-xs">
                              ({sub.key})
                            </span>
                            <div className="flex-1">
                              <span className="text-amber-200/90 font-medium text-sm">
                                {sub.label}:
                              </span>
                              {sub.text ? (
                                <span className="text-slate-200 text-sm sm:text-base leading-relaxed">
                                  {' '}{sub.text}
                                </span>
                              ) : sub.items ? (
                                <ul className="mt-2 ml-4 space-y-1.5">
                                  {sub.items.map((item, i) => (
                                    <li key={i} className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                                      <span className="text-amber-400/80 font-medium shrink-0">({['i', 'ii', 'iii'][i]}):</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      {rule.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default LeaveTravelConcession
