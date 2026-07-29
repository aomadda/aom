import React from 'react'

const EmployeesCompensationAct2010 = () => {
  const benefits = [
    'Safeguard against risk in employment.',
    'Inexpensive and quick remedy.',
    'Nominal application fee.',
    'Civil courts are excluded.',
    'Commissioner is quasi-judicial authority.',
    'Suo-moto action by the Commissioner.',
    'No civil court formalities followed.',
  ]

  const aims = [
    'To provide for payment of compensation to certain classes of workers for injuries / death caused due to accidents, arising out of and in the course of employment.',
    'To regulate the payment of compensation according to the nature and result of the accidents.',
    'To prescribe the procedure to be followed in the payment of compensation.',
    'To evolve suitable machinery has been to ensure proper implementation of the provisions of the Act.',
  ]

  const scheduleIIExclusions = [
    { key: 'a', text: 'a master, seaman or other member of the crew of a ship,' },
    { key: 'b', text: 'a captain or other member of the crew of an aircraft,' },
    { key: 'c', text: 'a person recruited as driver, helper, mechanic, cleaner or in any other capacity in connection with a motor vehicle.' },
    { key: 'd', text: 'a person, recruited for work abroad by a company and who is employed out side India in such capacity as specified in schedule-II.' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
              EMPLOYEES COMPENSATION ACT - 2010 (ECA)
            </h1>
          </div>
        </section>

        {/* Introductory Paragraph */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                ECA is an act, which safeguards certain classes of employees against the risk in employment and payment of compensation for injuries sustained by them in accidents. As amended under Gazette of India (extraordinary) dt. 23.12.09, RBE 61/11. In place of Workmen&apos;s Compensation Act 1923.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">BENEFITS</h2>
            </div>
            <ul className="p-5 sm:p-6 space-y-2">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-3 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed pt-0.5">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Aim */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Aim</h2>
            </div>
            <ul className="p-5 sm:p-6 space-y-2">
              {aims.map((aim, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-3 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed pt-0.5">{aim}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Definitions */}
        <section>
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">DEFINITIONS</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              {/* Workmen */}
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-3">Workmen</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-3">
                  Workmen means any person who is
                </p>
                <div className="space-y-3 ml-4">
                  <div className="flex gap-3">
                    <span className="text-amber-300 font-semibold shrink-0">(i)</span>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      a railway servant as defined in Section 2(34) of Railways Act 1989, not permanently employed in any administrative, or divisional or sub divisional office of a railway and not employed in any such capacity as specified in schedule-II.
                    </p>
                  </div>
                  <ul className="ml-8 space-y-1.5">
                    {scheduleIIExclusions.map((item) => (
                      <li key={item.key} className="flex gap-2 text-slate-200 text-sm sm:text-base leading-relaxed">
                        <span className="text-amber-400 shrink-0">({item.key}) -</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <span className="text-amber-300 font-semibold shrink-0">(ii)</span>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      Employed in any such capacity as specified in schedule-II.
                    </p>
                  </div>
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-4 p-4 rounded-lg bg-slate-700/40 border border-slate-600/50">
                  <span className="text-amber-300 font-semibold">Workmen - In relation to Railways</span> it means all Railway servants as defined in &quot;The Railways Act 1989&quot; except those employed in District, Divisional, Sub Divisional or Administrative offices and in clerical capacity, but includes Casual Labour.
                </p>
              </div>

              {/* Wages */}
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-2">Wages</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Wages - Means all remuneration expressed in terms of money or capable of being expressed in terms of money. It excludes traveling allowance, contribution to PF by the employer, amounts given to cover special kind of expenses and services. Wages for purpose of calculation of compensation will be limited to Rs.8,000.
                </p>
              </div>

              {/* Employer */}
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-2">Employer</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Employer - Means any body or persons or any managing agent of the employer or any legal representative of deceased employer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accidents */}
        <section className="mt-8 mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Accidents</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Means an unexpected event happening without design even though there may be negligence on the part of the workmen.
              </p>
            </div>
          </div>
        </section>

        {/* Circumstances under which Compensation is Payable */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Circumstances under which Compensation is Payable</h2>
            </div>
            <ul className="p-5 sm:p-6 space-y-2">
              {[
                'Where a personal injury caused to workmen is lasting a period of more than 3 days.',
                'The injury is caused as a result of accident.',
                'The accident has arisen out of and in the course of employment (out of refers to the place of accident and in the course of refers to the time of accident).',
                'Injury has resulted in disablement or death.',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-3 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Circumstances under which Compensation is not Payable */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Circumstances under which Compensation is not Payable (Sec.3)</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                <span className="text-amber-400 shrink-0">•</span>
                <span>In respect of any injury, which does not result in the total or partial disablement of workmen for a period, exceeding 3 days.</span>
              </p>
              <div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2 mb-2">
                  <span className="text-amber-400 shrink-0">•</span>
                  <span>In respect of any injury (excluding death) caused by accident which is directly attributable to-</span>
                </p>
                <ul className="ml-6 space-y-1.5">
                  {[
                    'The influence of Drink or Drug at the time of accidents.',
                    'Willful removal or disregard of safety appliances.',
                    'Willful disobedience of safety instructions.',
                  ].map((item, index) => (
                    <li key={index} className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                      <span className="text-amber-400 shrink-0">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disablement Table */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Disablement</h2>
            </div>
            <div className="p-5 sm:p-6 overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm border-r border-slate-600/60" colSpan={2}>Partial</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm" colSpan={2}>Total</th>
                  </tr>
                  <tr className="bg-slate-700/40">
                    <th className="px-4 py-2 text-amber-300/90 font-medium text-xs border-r border-slate-600/60">Temporary</th>
                    <th className="px-4 py-2 text-amber-300/90 font-medium text-xs border-r border-slate-600/60">Permanent</th>
                    <th className="px-4 py-2 text-amber-300/90 font-medium text-xs">Temporary</th>
                    <th className="px-4 py-2 text-amber-300/90 font-medium text-xs">Permanent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-600/60">
                  <tr className="bg-slate-700/20">
                    <td className="px-4 py-3 text-slate-200 text-sm border-r border-slate-600/60">Reduce the earning capacity of the workmen in any of the employment he was capable of performing at the time of accident.</td>
                    <td className="px-4 py-3 text-slate-200 text-sm border-r border-slate-600/60">Reduce the earning capacity of the workmen in every employment he was capable of performing at the time of accident.</td>
                    <td className="px-4 py-3 text-slate-200 text-sm"></td>
                    <td className="px-4 py-3 text-slate-200 text-sm">Incapacitate the workmen in all types of work.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compensation under the Act */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Compensation under the Act</h2>
            </div>
            <div className="p-5 sm:p-6 overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Temporary</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Partial Permanent</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Total Permanent</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Death</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-600/60">
                  <tr className="bg-slate-700/20">
                    <td className="px-4 py-3 text-slate-200 text-sm">No compensation. HMP is payable during the period of treatment. (25% of wages)</td>
                    <td className="px-4 py-3 text-slate-200 text-sm">Compensation is worked out for total permanent disablement and allowed proportionately based on LEC %.</td>
                    <td className="px-4 py-3 text-slate-200 text-sm">60% of wages multiplied by age factor or Rs.1,40,000/- whichever is more.</td>
                    <td className="px-4 py-3 text-slate-200 text-sm">50% of wages multiplied by age factor or Rs.1,20,000/- whichever is more.</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-slate-300 text-xs sm:text-sm mt-4 italic">
                HMP: If the accident is found to have resulted in permanent disablement, the HMP be converted to lump sum less HMP already received.
              </p>
            </div>
          </div>
        </section>

        {/* Schedules */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Schedules</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              {[
                { schedule: 'Schedule-I', text: 'Part-I List of total disablement with loss of earning capacity. Part-II List of partial disablement with loss of earning capacity.' },
                { schedule: 'Schedule-II', text: 'List of workmen.' },
                { schedule: 'Schedule-III', text: 'List of occupational diseases.' },
                { schedule: 'Schedule-IV', text: 'Age relevant factor.' },
              ].map((item) => (
                <div
                  key={item.schedule}
                  className="flex gap-3 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-3 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                >
                  <span className="shrink-0 text-amber-300 font-semibold text-sm">{item.schedule}:</span>
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed pt-0.5">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Relevant Factor */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Age Relevant Factor</h2>
            </div>
            <div className="p-5 sm:p-6">
              <ul className="space-y-2">
                {[
                  { age: '19 years', factor: '225.22' },
                  { age: '39 years', factor: '186.90' },
                  { age: '59 years', factor: '121.05' },
                ].map((item) => (
                  <li
                    key={item.age}
                    className="flex gap-4 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-3 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                  >
                    <span className="text-amber-300 font-semibold text-sm w-20">{item.age}</span>
                    <span className="text-slate-200 text-sm sm:text-base">-</span>
                    <span className="text-slate-200 text-sm sm:text-base">{item.factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Schedule-I Part-I and Part-II Tables */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Schedule-I - Part-I & Part-II</h2>
            </div>
            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                  <table className="w-full min-w-[240px]">
                    <thead>
                      <tr className="bg-slate-700/50">
                        <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm" colSpan={3}>Schedule-I, Part-I</th>
                      </tr>
                      <tr className="bg-slate-700/40">
                        <th className="px-4 py-2 text-amber-300/90 font-medium text-xs w-8">No.</th>
                        <th className="px-4 py-2 text-amber-300/90 font-medium text-xs">Description</th>
                        <th className="px-4 py-2 text-amber-300/90 font-medium text-xs w-16">%</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/60">
                      {[
                        { desc: 'Loss of both hands', pct: '100%' },
                        { desc: 'Loss of one hand and one leg', pct: '100%' },
                        { desc: 'Loss of both legs', pct: '100%' },
                        { desc: 'Loss of sight', pct: '100%' },
                        { desc: 'Very severe facial disfigurement', pct: '100%' },
                        { desc: 'Absolute deafness', pct: '100%' },
                      ].map((row, i) => (
                        <tr key={i} className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                          <td className="px-4 py-3 text-slate-200 text-sm">{i + 1}</td>
                          <td className="px-4 py-3 text-slate-200 text-sm">{row.desc}</td>
                          <td className="px-4 py-3 text-slate-200 text-sm">{row.pct}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                  <table className="w-full min-w-[240px]">
                    <thead>
                      <tr className="bg-slate-700/50">
                        <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm" colSpan={3}>Schedule-I, Part-II</th>
                      </tr>
                      <tr className="bg-slate-700/40">
                        <th className="px-4 py-2 text-amber-300/90 font-medium text-xs w-8">No.</th>
                        <th className="px-4 py-2 text-amber-300/90 font-medium text-xs">Description</th>
                        <th className="px-4 py-2 text-amber-300/90 font-medium text-xs w-16">%</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/60">
                      {[
                        { desc: 'Thumb', pct: '30%' },
                        { desc: 'Index finger', pct: '14%' },
                        { desc: 'Middle finger', pct: '12%' },
                        { desc: 'Ring finger', pct: '7%' },
                        { desc: 'Little finger', pct: '7%' },
                      ].map((row, i) => (
                        <tr key={i} className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                          <td className="px-4 py-3 text-slate-200 text-sm">{i + 1}</td>
                          <td className="px-4 py-3 text-slate-200 text-sm">{row.desc}</td>
                          <td className="px-4 py-3 text-slate-200 text-sm">{row.pct}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Burden of Proof */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Burden of Proof</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                For denying employee compensation benefits, the burden of proof lies on the employer. The job must be casual and employment must be for other than the employer&apos;s trade or business. Railway Servant - Sec.2(31) & Sec.197(1) Railways Act 1989.
              </p>
            </div>
          </div>
        </section>

        {/* AOO & ICE */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">AOO & ICE</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Tests for Accident Origin:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-3">
                  These tests to determine whether accident has arisen out of and in the course of employment.
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    'The employee was employed on duties at the time of accident.',
                    'The accident occurred at the place of performance of his duties.',
                    'The immediate act which led to accident is not so remote from the sphere of his duties, to be regarded as something foreign.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate-200 text-sm sm:text-base leading-relaxed">
                      <span className="text-amber-400 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Definitions:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-2">
                  <span className="text-amber-300/90 font-medium">AOO:</span> AOO means there must be casual relationship between accident and employment. If accident occurred due to risk incidental to employment, then it is AOO.
                </p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  <span className="text-amber-300/90 font-medium">ICE:</span> ICE - not only the duties assigned strictly by agreement but includes the duties connected with, relating to or AOO but consistent with specific directions of employer. (Example - though employed as night watchman, had gone on bicycle to fetch material as directed by employer).
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Examples (AOO & ICE):</p>
                <ul className="space-y-1 ml-4">
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Died contaminated water from the drum @ factory - AOO & ICE</li>
                  <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Murdered in riot while proceeding to his work from his house - AOO & ICE</li>
                </ul>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 italic ml-4">
                  (ie) Had the workman not left his house, he would not have been killed in the riot.
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Not AOO employment:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  No direct connection between death and accident. When a worker without the knowledge of the management and on his own accord, took a vehicle/car and met with accident resulting in disablement, it is not AOO & ICE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notional Extension of Time and Place */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">NOTIONAL EXTENSION OF TIME AND PLACE</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Notional extension of time space depends on circumstances of a given case. Gang man walking towards his tool box - snake bites - died.
              </p>
            </div>
          </div>
        </section>

        {/* Partial Disablement */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">PARTIAL DISABLEMENT (PDA)</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">PDA:</span> PDA means any disablement as reduces the earning capacity of a workman. It may be temporary or permanent.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">TPDA:</span> TPDA - any disablement as reduces the earning capacity in any employment in which he was employed at the time of accident.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <span className="text-amber-300 font-semibold">PPDA:</span> PPDA - any disablement as reduces the earning capacity of a workmen in every employment which he was capable of undertaking at the time of accident.
              </p>
            </div>
          </div>
        </section>

        {/* Distinction on Injury and Earning Capacity */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Distinction on Injury and Earning Capacity</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The reduction of earning capacity due to injury depends on whether it affects the workman in all employments he could undertake, or only in the specific employment in which he was engaged at the time of the injury.
              </p>
            </div>
          </div>
        </section>

        {/* Total Disablement */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">TOTAL DISABLEMENT</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Total disablement means such disablement as incapacitates a workman for all work which he was capable of performing at the time of the accident. It may be temporary or permanent.
              </p>
            </div>
          </div>
        </section>

        {/* Payment of Compensation */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">PAYMENT OF COMPENSATION</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Compensation under WCA:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Compensation payable under HMP (Honorable Member of Parliament) or WCA (Workmen&apos;s Compensation Act) cannot be assigned, charged or made liable for attachment, nor can any claim be set off against it.
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Claim Filing:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Claim must be submitted before the Commissioner within 2 years from the date of accident, or in case of death, within 2 years from the date of death. This period may be condoned for sufficient cause.
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Reports:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Report of fatal accidents and serious bodily injuries must be sent within 7 days of the death/injury.
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">WCA Commissioner:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  No civil court shall have jurisdiction to settle, decide or deal with any question which is by or under this Act required to be settled, decided or dealt with, or to enforce any liability under this Act.
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-2">Appeals:</p>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  An appeal lies to the High Court from an order of the Commissioner in accordance with the CPC (Code of Civil Procedure).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Amendment in 2000: Minimum Compensation */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Amendment in 2000: Minimum Compensation</h2>
            </div>
            <div className="p-5 sm:p-6 overflow-x-auto">
              <table className="w-full min-w-[280px]">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Item</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Minimum Compensation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-600/60">
                  {[
                    { item: 'Death', amount: 'Rs. 1,20,000' },
                    { item: 'Permanent total disablement', amount: 'Rs. 1,40,000' },
                    { item: 'Monthly Wage', amount: 'Rs. 8,000' },
                    { item: 'Funeral Advance', amount: 'Rs. 2,500' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">{row.item}</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Undue Delay in Payment of Compensation */}
        <section>
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Undue Delay in Payment of Compensation</h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Where any undue delay (i.e., not paid within one month from the date it fell due) occurs in the payment of compensation, the employer shall be liable to pay, in addition to the compensation, a penalty of up to 50% of the compensation amount, along with simple interest @ 12%. This penalty is also payable to the workman or his dependents.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EmployeesCompensationAct2010
