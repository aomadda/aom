import React from 'react'

const GovernmentPension = () => {
  const retirementBenefits = [
    'PF and VPF contribution with interest.',
    'Retirement gratuity or death gratuity.',
    'Pension.',
    'Commutation of pension.',
    'Family pension in the case of death.',
    'Group insurance amount in the case of death while in service.',
    'Savings amount under group insurance scheme.',
    'Cash equivalent to leave salary.',
    'Composite transfer grant.',
    'Settlement pass, kit and wagon pass.',
    'Post retirement complimentary pass and Widow pass.',
    'PLB for the service rendered prior to retirement or death.',
    'Retention of Railway quarters for four months on normal rent.',
    'Retention of Railway quarters up to two years on normal rent in the event of death while in service.',
    'RELHS and DLI.',
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
              GOVERNMENT PENSION
            </h1>
          </div>
        </section>

        {/* Government Pension Overview */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Government Pension is a monthly retirement benefit for Railway servants. Staff retire on superannuation at 60 years of age. A person born on the 2nd or subsequent date retires on the last day of the birth month. A person born on the 1st of any month retires on the last day of the previous month.
              </p>
            </div>
          </div>
        </section>

        {/* Voluntary Retirement */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Voluntary Retirement</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Definition:</span> A person with 20+ years of qualifying service can voluntarily retire.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Notice Period:</span> 3 months&apos; notice for permanent Railway servants and one month&apos;s notice for temporary Railway servants.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Waiver:</span> A competent authority can waive the notice period with Accounts concurrence.
              </p>
            </div>
          </div>
        </section>

        {/* Pension Scheme */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Pension Scheme</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Introduction Date:</span> The pension scheme was introduced on 1.4.57.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Applicability:</span> Liberalized pension rules apply to all Railway Servants appointed on or after 16.11.57.
              </p>
            </div>
          </div>
        </section>

        {/* Retirement Benefits */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Retirement Benefits</h2>
            </div>
            <ul className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {retirementBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors"
                >
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-slate-200 text-sm leading-relaxed pt-0.5">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Compensation Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Compensation Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Granted to an employee discharged due to abolition of a permanent post, unless appointed to another post.
              </p>
            </div>
          </div>
        </section>

        {/* Invalid Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Invalid Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Granted to an employee who opts for retirement due to medical unfitness or medical de-categorization.
              </p>
            </div>
          </div>
        </section>

        {/* Retiring Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Retiring Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Granted to an employee permitted to retire after 55 years of age, or 30 years of service, or after 20 years of qualifying service under the voluntary retirement scheme.
              </p>
            </div>
          </div>
        </section>

        {/* Superannuation Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Superannuation Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Granted to an employee who retires upon attaining the age of superannuation.
              </p>
            </div>
          </div>
        </section>

        {/* Calculation of Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Calculation of Pension</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Method:</span> Pension is calculated at 50% of the last basic pay or average emoluments (last 10 months), whichever is more beneficial.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Limits:</span> Subject to a maximum of 50% of the highest basic pay and a minimum of Rs.9,000/- per month.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Running Staff:</span> For running staff, the basic pay is enhanced by 55%.
              </p>
            </div>
          </div>
        </section>

        {/* Qualifying Service */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Qualifying Service</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Definition:</span> Total service minus non-qualifying service, if any.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Condition:</span> To be reckoned for pension, the service should be permanent and substantive. Temporary and officiating service without break followed by confirmation in the same or another post shall count in full as qualifying service.
              </p>
              <div>
                <p className="text-amber-300 font-semibold mb-2">Some of the non-qualifying services are:</p>
                <ul className="space-y-1.5 ml-4 list-disc">
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Service in non-pensionable employment.</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Service as casual labour on daily rate.</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Service paid from contingency.</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Service rendered before attaining age of 18 years.</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Periods of EXL availed other than on medical grounds.</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Periods of suspension, unless treated otherwise.</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">When Foreign Service contribution for grant of pension is neither received nor waived.</li>
                </ul>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The entire period of training of Group - C and D employees who are required to undergo initial training before taking charge of the post shall count as qualifying service.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                In the case of casual labourers absorbed after attaining temporary status, their service from the date of temporary status to the date of absorption will count to the extent of 50% as qualifying service. In the case of substitutes their service after completion of 4 months will qualify for pension.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Qualifying service is worked out in blocks of six monthly periods and any fraction of 3 months and above is treated as a six monthly period. Maximum qualifying service for pension is limited to 33 years and a minimum of 10 years of qualifying service is necessary to earn monthly pension.
              </p>
            </div>
          </div>
        </section>

        {/* Average Emoluments */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Average Emoluments</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Average emolument means the Basic Pay drawn by the employee during the last 10 months immediately preceding the date of quitting service. During the period if the employee was on LHAP, EXL or suspension, the period should be ignored and an equal earlier period in which the employee has availed full salary is included for working out average emoluments.
              </p>
              <ul className="space-y-2 ml-4 list-disc">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">When an employee retires on a day other than the last day of the month exact 10 months from the date of quitting should be taken for calculating average emoluments.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">When an employee is on leave during the last 10 months and earned an increment in that period, though not drawn it shall count for average emoluments provided it had become due during the first 180 days of leave.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">In the case of erroneous reversion the pay fixed on re-promotion, even on proforma basis shall count for calculation of average emoluments.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Old Age Pensioners */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Additional Pension for Old Age Pensioners</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                The quantum of pension shall be increased for old age pensioners as follows:
              </p>
              <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                <table className="w-full min-w-[280px]">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Age of the pensioners</th>
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Additional pension</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600/60">
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">80 - 85 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">20% of basic pension</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">85 - 90 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">30% of basic pension</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">90 - 95 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">40% of basic pension</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">95 - 100 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">50% of basic pension</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">100 years or more</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">100% of basic pension</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Commutation of Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Commutation of Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Pension can be commuted to an extent up to 40% without medical examination, if preferred within one year. The value of commutation is depending on the age of the employee as on the next date of birth and to calculate it the age factor is given in Commutation rules.
              </p>
            </div>
          </div>
        </section>

        {/* Retirement Gratuity */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Retirement Gratuity</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The payable amount is 1/4th of the emoluments for each completed six monthly period of qualifying service.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Subject to a maximum of 16 ½ times of the emoluments. The total amount shall not exceed Rs.20 lakhs.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                It is calculated on the pay last drawn at the time of retirement and D.A. admissible there on. A minimum of 5 years of qualifying service is necessary to allow the benefit. In the case of running staff the pay is enhanced by 55% of the basic pay as pay element representing running allowance.
              </p>
            </div>
          </div>
        </section>

        {/* Death Gratuity */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Death Gratuity</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                Death Gratuity is payable at the following rates in the event of death of the Railway servant:
              </p>
              <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                <table className="w-full min-w-[320px]">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Qualifying service</th>
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Gratuity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600/60">
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">Less than one year</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">2 Times of Emoluments</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">One year or more but less than 5 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">6 Times of Emoluments</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">5 years or more but less than 11 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">12 Times of Emoluments</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">11 years or more but less than 20 years</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">20 Times of Emoluments</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">20 years or more</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Half of the emolument for every completed six monthly period of qualifying service subject to maximum of 33 times of emoluments, provided the amount is not exceeding Rs. 20 lakhs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Service Gratuity */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Service Gratuity</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Railway Servants retiring with less than 10 years of qualifying service are not entitled to pension. A lump sum payment called Service Gratuity is granted if the employee has completed a minimum of 6 months of service.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                It is paid at the rate of half a month&apos;s emolument (Basic Pay + DA) for each completed 6 monthly period of service. For running staff, the basic Pay is enhanced by 55%.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The maximum limit for all kinds of gratuity is Rs.20 Lakhs. With effect from 2-9-08, the benefit of adding qualifying service for pension computation is withdrawn.
              </p>
            </div>
          </div>
        </section>

        {/* Withholding of Gratuity for non Vacation of Quarters */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Withholding of Gratuity for non Vacation of Quarters after Retirement</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                Steps the Railway administration should take to discourage unauthorized retention of Railway accommodation after retirement:
              </p>
              <ul className="space-y-2 ml-4 list-disc">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">No claim certificate should not be given unless quarters are vacated and all dues (rent, electricity) are cleared.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">The entire amount of retirement/death gratuity should be withheld for non-vacation of quarters, to be released immediately upon vacation.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">One set of post-retirement Pass should be disallowed for every month of unauthorized retention, with a show-cause notice issued.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cash Equivalent to Leave Salary */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Cash Equivalent to Leave Salary</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                A lump sum payment at retirement or death for LAP + LHAP at credit up to a maximum of 300 days (LAP + LHAP). For running staff, basic pay is enhanced by 30%.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Rules for encashment of LHAP: Not eligible if having 300 days of LAP, but can encash LHAP up to (300-LAP) days if LAP is less than 300 days. Shortfall in LAP commutation of LHAP is not permissible. Effective from 1-9-08.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">Encashment of LHAP formula:</span> {'{(Half Pay + DA) / 30} × LHAP (300 - LAP)'}
              </p>
            </div>
          </div>
        </section>

        {/* Family Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Family Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Calculated at a uniform rate of 30% of basic pay. Subject to a minimum of Rs.9,000/- and a maximum of 50% of highest basic pay in the Government.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Family Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Enhanced Family Pension</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Payable to the family of a railway servant who dies in service. Duration: 10 years from the date of death without any upper age limit. In case of death of a pensioner, old rule will apply.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Double of family pension or 50% of the Basic Pay last drawn whichever is less.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                It should be further ensured that the payment in no case fall less than the original pension of the employee. In the case of an employee entitled for compensation under WCA it will be worked out @ 1.5 times of the family pension.
              </p>
            </div>
          </div>
        </section>

        {/* Payment of Family pension and Enhanced Family Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Payment of Family pension and Enhanced Family Pension</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <ol className="space-y-2 list-decimal list-inside text-slate-200 text-sm sm:text-base leading-relaxed">
                <li>To the widow or widower till their lifetime or remarriage whichever is earlier.</li>
                <li>Then to the wards in the order of their birth up to the age of 25 years for sons and up to the date of marriage or 25 years of age for daughters whichever is earlier.</li>
                <li>If a son or daughter is invalid, it is paid in their turn first and then shifted to all other eligible wards in their order of birth.</li>
                <li>Then it is reverted back to the invalid son or daughter till their lifetime. A medical certificate from the Railway Doctor should be produced for this purpose.</li>
              </ol>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Where there is more than one legally wedded wife the family pension is paid in equal shares. Family pension to a minor child is paid through a guardian.
              </p>
            </div>
          </div>
        </section>

        {/* Relief on Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Relief on Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The Dearness relief as and when notified to compensate the rise in cost of living is calculated on gross pension.
              </p>
            </div>
          </div>
        </section>

        {/* Deposit Linked Insurance */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Deposit Linked Insurance</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                On the death of the Railway servant the PF at credit is paid to the family with interest. In the preceding three years from the date of death, if PF is maintained at an average balance prescribed, an amount equal to the average balance or Rs.60,000 whichever is more is paid as DLI.
              </p>
            </div>
          </div>
        </section>

        {/* Group Insurance Scheme */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Group Insurance Scheme</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                CGEGIS was introduced on 01.01.1982. A sum of Rs.120, Rs.60, Rs.30 is recovered every month towards GIS contribution from Group A, B, and C employees respectively. The recovery is apportioned at the rate of 70% towards savings and 30% for insurance. In the event of the death of the Railway servant, the family is paid a sum of Rs.1,20,000, Rs.60,000, or Rs.30,000 as the case may be as insurance amount. The savings accumulation with interest is paid in both superannuation and death cases.
              </p>
            </div>
          </div>
        </section>

        {/* Disbursement of Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Disbursement of Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Pension is disbursed through Nationalised Banks and Treasuries. It is also arranged through Post Offices in the absence of Bank or Treasury.
              </p>
            </div>
          </div>
        </section>

        {/* Forfeiture of Pension */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Forfeiture of Pension</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Pension is forfeited in full or in part for conviction or misconduct of the pensioner.
              </p>
            </div>
          </div>
        </section>

        {/* RELHS-97 */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Retired Railway Employees Liberalized Health Scheme - 1997 (RELHS-97)</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                In terms of Board&apos;s letter No.2003/H/28/1/RELHS dated 12.10.2009, joining RELHS is mandatory for all retiring Railway employees. The retiring officers / staff unwilling to join this scheme should clearly submit his / her unwillingness in writing in the declaration proforma.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Retiring / retired Railway Servant, who has put in a minimum of 20 years of Railway Service is eligible for enrolling himself as a beneficiary in this Scheme. 20 years service is not required for death / medically de-categorized cases. A medical card is issued for this purpose.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Ministry of Health vide letter No. 11011/11/2016/CGHS (P) / EHS dated 09th January, 2017 has revised the rates of monthly contribution for availing the CGHS facility. The Pensioner also has to make contribution to avail medical facility of CGHS. Pensioner have an option to get their CGHS contribution on an annual basis (twelve months) or by making contribution for ten years for getting a pensioner CGHS card with life time validity. The similar scheme for retired railway employees is &quot;Retired Employees Liberalized Health Scheme&quot; (RELHS).
              </p>
            </div>
          </div>
        </section>

        {/* PBC No.26/2017 - RELHS Subscription rates */}
        <section>
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">PBC No.26/2017: Subscription rates of RELHS</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The rate of contribution to join RELHS shall be last month&apos;s basic pay drawn or the subscription rate indicated at different levels (as per 7th CPC) enumerated below in the table below, whichever is lower.
              </p>
              <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                <table className="w-full min-w-[320px]">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">S.N.</th>
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Levels in the Pay Matrix as per 7th CPC</th>
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Subscription rate to join RELHS in Rs.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600/60">
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">01</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Level 1 to 5</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">30,000/-</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm"></td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Level 6</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">54,000/-</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm"></td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Level 7 to 11</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">78,000/-</td>
                    </tr>
                    <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm"></td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Level 12 and above</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">1,20,000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                This revised rate of subscription is applicable to those retiring and joining RELHS on or after the date of issue of the letter No.2017/II/28/1/RELHS dated 23.02.2017. Those who have already retired and are not members of RELHS will be governed by the rules prevalent at their time of retirement.
              </p>
            </div>
          </div>
        </section>

        {/* Constant Attendant Allowance */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">CONSTANT ATTENDANT ALLOWANCE</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Pensioners who retired on disability pension under the Railway Services (Extraordinary Pension) Rules 1993 for 100% disability (where the individual is completely dependent on someone else for day-to-day functions) will be allowed a Constant Attendant Allowance of Rs.6,750/- per month. This allowance is in addition to the disability pension, following the lines existing in Defence Forces. The Railway Services (Extraordinary Pension) Rules, 1993, will be modified to this extent.
              </p>
            </div>
          </div>
        </section>

        {/* Computation of Average Emoluments */}
        <section>
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Computation of Average Emoluments</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                For Railway servants who have opted for fixation of pay in the revised Pay Structure and retire within 10 months from the date of coming over to the revised Pay Structure, the basic pay for the 10-month period preceding retirement shall be calculated by taking into account pay as follows:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">(i)</span>
                  <span>For the period during which pay is drawn in the revised Pay-Structure, the pay considered will be Pay drawn in the prescribed pay band plus the applicable grade pay.</span>
                </li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">(ii)</span>
                  <span>For the remaining period during which pay is drawn in the pre-revised scale of pay, the calculation will include Basic pay plus dearness pay and actual DA appropriate to the basic pay at the rates in force on 1.1.2006 drawn during the relevant period.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GovernmentPension
