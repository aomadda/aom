import React from 'react'

const NationalPensionScheme = () => {
  const partialWithdrawalPurposes = [
    'Higher Education for wards',
    'Marriage of adopted child/child',
    'House Building',
    'Treatment',
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
              NATIONAL PENSION SCHEME (NPS)
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                This system is mandatory for all new recruits from 01-01-2004. The monthly contribution is 10% of (Basic Pay + DA). Government Contribution is now 14% for Central Government Employees. Both the amount will be deposited in a non-withdrawable tier-I account. No amount towards PF should be deducted. In addition to the above pension account, railway servant may also have a tier-II account at his option. The railway will not make any contribution to tier-II account. The employee can withdraw a part or whole of the amount in tier-II account at any time.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Recoveries towards the contribution to tier-I account will commence from the first of the month following the month in which the employee has joined the service. At the time of appointment, every railway servant have to furnish, in the prescribed format, the details of name, designation, scale of pay, pay, date of birth, nominee for the fund, etc. Each Bill Drawing Officer have to consolidate the above details in respect of all the railway servants who have joined during the previous month and sent it to the associate bill-passing Accounts Officer by 7th of each month.
              </p>
            </div>
          </div>
        </section>

        {/* PPAN Structure */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Permanent Pension Account Number (PPAN)</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                An unique 16 digit Permanent Pension Account Number (PPAN), in the pattern of:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">1st to 4th digits -</span>
                  <span>calendar year in which the account is opened</span>
                </li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">5th digit -</span>
                  <span>Ministry code (Railways-5)</span>
                </li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">6th to 8th digits -</span>
                  <span>Zone / Production Unit code</span>
                </li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">9th to 11th digits -</span>
                  <span>Accounts Unit code</span>
                </li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                  <span className="text-amber-300 font-semibold shrink-0">12th to 16th digits -</span>
                  <span>Employee number (running from January to December)</span>
                </li>
              </ul>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Once PPAN allotted will not be changed. The Accounts Officer will maintain an index register with all details and enter the PPAN allotted to the new entrants. The PPAN allotted will be intimated to the employee. The Accounts Officer will consolidate the details of new entrants in the prescribed format and send it to FA&CAO by 12th of each month.
              </p>
            </div>
          </div>
        </section>

        {/* Transfer and Other Rules */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Transfer, Death & Annual Statement</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                When the railway servant is transferred from one accounting unit to another, the balance in the tier-I account will not be transferred. However, in the LPC the PPAN, the month up to which the Employee&apos;s contribution and Railway&apos;s contribution has been transferred to Pension Fund will be indicated. If the employee is transferred during the month, the recovery under this scheme will be made by the office which draws salary. If the employee dies while in service the entire accumulation under tier-I account will be given to the spouse / dependent.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                At the end of each financial year, an annual statement showing the details of deduction and contribution made by the railways along with the interest allowed is prepared. The encashment of leave salary is admissible on account of retirement / death. Under this scheme, the Charge Allowance will be included in the pay. In case of running staff, 30% of pay will be included in the pay.
              </p>
            </div>
          </div>
        </section>

        {/* Partial Withdrawal */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Partial Withdrawal: Purpose</h2>
            </div>
            <ul className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {partialWithdrawalPurposes.map((purpose, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors"
                >
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-slate-200 text-sm leading-relaxed pt-0.5">{purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conditions - Partial Withdrawal */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Conditions</h2>
            </div>
            <div className="p-5 sm:p-6">
              <ul className="space-y-2 ml-4 list-disc">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Amount: Tier-1 account Max 25% of employee&apos;s contribution</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Minimum 10 years contribution prior to withdrawal</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Maximum 3 times in entire service</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">A Minimum interval of 5 years between two subsequent withdrawals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* General */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">General</h2>
            </div>
            <div className="p-5 sm:p-6">
              <ul className="space-y-2 ml-4 list-disc">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Cannot be attached by court without the permission from NPS Trust.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Cannot be pledged as security for loan etc. without permission from NPS Trust.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">President (as in other service conditions) can withheld for pecuniary loss (T-1)</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">No settlement if judicial / departmental inquiry is pending till finalization.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">In case of sanction of additional disability pension to transfer or adjust T-1 savings to government on taking acceptance unconditionally from deceased or family member in writing.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">To stop recovery & contribution 3 months before retirement.</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">No default annuity scheme</li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">Nomination Must & Only ECS Transaction.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Settlement */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Settlement</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Event/Category</th>
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Lump Sum Details</th>
                      <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Pension Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600/60">
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-slate-200 text-sm font-medium" rowSpan={2}>Superannuation</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Up to 2 Lakhs</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Lump sum Payment, No Pension</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-slate-200 text-sm">More than 2 Lakhs</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">60% - Lump sum, 40% - Annuity Purchase **</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-slate-200 text-sm font-medium" rowSpan={2}>VR/Resignation</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Up to 1 Lakh</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Lump sum, No pension</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-slate-200 text-sm">Above 1 lakh</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">20% Lump sum, 80% - Annuity Purchase **</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-slate-200 text-sm font-medium" rowSpan={2}>Death</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Up to 2 Lakhs</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">Lump sum payment to Nominee, No Pension</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-slate-200 text-sm">Above 2 lakhs</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">20% Lump sum, 80% - Annuity Purchase **</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                ** Superannuation: If not opted for 60% withdrawal, to get in writing and settlement at the age of 70 years.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                ** VR/Resignation: To contribute NPS till attains the age for purchase of fund.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Pension is Payable in the order - Subscriber, spouse, living mother and living father. After all the persons, purchase price shall be returned to son/daughter/legal heirs.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Relief on Death/Disability */}
        <section>
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Additional Relief on Death/Disability</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-2">On invalidation not attributable to duty</h3>
                <ol className="space-y-1 ml-4 list-decimal list-inside text-slate-200 text-sm sm:text-base leading-relaxed">
                  <li>Invalid pension calculated as per CCS(Pension) Rules 1972.</li>
                  <li>Retirement Gratuity.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-2">Death in service not attributable to duty</h3>
                <ol className="space-y-1 ml-4 list-decimal list-inside text-slate-200 text-sm sm:text-base leading-relaxed">
                  <li>Family Pension calculated as per CCS(P) Rules, 1972</li>
                  <li>Death Gratuity</li>
                </ol>
              </div>
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-2">Death in service attributable to duty</h3>
                <ol className="space-y-1 ml-4 list-decimal list-inside text-slate-200 text-sm sm:text-base leading-relaxed">
                  <li>Extraordinary Family Pension calculated as per CCS(Extraordinary Pension) Rules, and scheme of Liberalized Pension Awards.</li>
                  <li>Death Gratuity as per CCS(P) Rules, 1972.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-2">Discharge from service due to disease/injury attributable to duty</h3>
                <ol className="space-y-1 ml-4 list-decimal list-inside text-slate-200 text-sm sm:text-base leading-relaxed">
                  <li>Disability pension calculated as per CCS(Extraordinary Pension) Rules.</li>
                  <li>Retirement Gratuity as per CCS(P) Rules, 1972.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* DP/DR and References */}
        <section className="mt-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-700/40 shadow-lg overflow-hidden">
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                The Railway employee/Family will be paid DP/DR admissible from time to time in addition to the above benefits from 1.1.2004
              </p>
              <ul className="space-y-3 ml-4 list-disc">
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Govt contribution to NPS to rise to 14% of basic salary.
                  <span className="block mt-1">
                    <span className="text-amber-300/90 text-xs font-medium">Ref: </span>
                    <a
                      href="https://www.financialexpress.com/money/national-pension-scheme-bonanza-for-government-employees-govt-contribution-to-nps-to-rise-to-14-of-basic-salary/1405942/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 underline break-all text-xs sm:text-sm"
                    >
                      financialexpress.com
                    </a>
                  </span>
                </li>
                <li className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Tier-1 and Tier-2, Difference-
                  <span className="block mt-1">
                    <span className="text-amber-300/90 text-xs font-medium">Ref: </span>
                    <a
                      href="https://www.personalfinanceplan.in/difference-between-nps-tier-1-nps-tier-2-accounts/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 underline break-all text-xs sm:text-sm"
                    >
                      personalfinanceplan.in
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default NationalPensionScheme
