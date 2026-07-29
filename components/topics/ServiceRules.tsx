import React from 'react'

const ServiceRules = () => {
  const rules = [
    {
      label: 'CCL (Child Care Leave)',
      text: 'CCL can be combined with any other kind of leave.',
    },
    {
      label: 'MACP (Modified Assured Career Progression)',
      text: 'MACP has become operational w.e.f 1-09-2008. (For SMs the first MACP will be Level -7, 2nd MACP= Level-8 and the 3rd MACP will be Level-9 w.e.f 16-02-2018)',
    },
    {
      label: 'Family Pension',
      text: 'Post retiral spouse is eligible for Family Pension.',
    },
    {
      label: 'LTC (Leave Travel Concession) and CCL',
      text: 'LTC cannot be availed alongwith Child Care Leave.',
    },
    {
      label: 'EL (Earned Leave) Credit',
      text: 'EL is credited in advance @ 15 days on 1st January and 1st July every year (5/2 days per completed calender month).',
    },
    {
      label: 'HPL (Half Pay Leave) Credit',
      text: 'HPL is credited in advance @ 10 days on 1st January and 1st July every year (5/3 days per completed calendar month).',
    },
    {
      label: 'Maternity Leave',
      text: '180 days Maternity Leave is allowed for female government employees having less than two children.',
    },
    {
      label: 'Suspension - Subsistence Allowance',
      text: '50% Subsistence Allowance is allowed during suspension for the first three months.',
    },
    {
      label: 'GPF (General Provident Fund)',
      text: 'GPF subscription can be enhanced twice and reduced once in a financial year.',
    },
    {
      label: 'LND (Leave Not Due)',
      text: '360 days LND can be used during the entire service period.',
    },
    {
      label: 'HPL - Leave in Excess',
      text: 'If leave is used in excess, HPL account is debited but leave salary is not paid.',
    },
    {
      label: 'Retirement Gratuity - Recovery',
      text: 'Recovery of government dues from Retirement Gratuity is permitted without the consent of the government employee.',
    },
    {
      label: 'Minimum & Maximum Pension',
      text: 'Minimum pension Rs. 3500 PM / Rs. 9000 PM and maximum pension Rs. 45,000 PM / Rs. 1,25,000 PM come into force from 1/1/2006 and 1/1/2016 respectively.',
    },
    {
      label: 'LTC during Suspension',
      text: 'An officer under suspension cannot avail LTC, but his family can avail LTC.',
    },
    {
      label: 'Court Attachment - Subsistence Allowance',
      text: 'Amount payable due to Court Attachment shall not be recovered from Subsistence Allowance.',
    },
    {
      label: 'Maternity Leave (Unmarried Women)',
      text: 'Unmarried female government employees are also eligible for Maternity Leave subject to other conditions, i.e., after adoption and CCL.',
    },
    {
      label: 'SAS Apprentice - Pension',
      text: 'Service rendered as SAS Apprentice qualifies for pension.',
    },
    {
      label: 'Deputation Allowance',
      text: 'Deputation Allowance is allowed up to 5% with a maximum of Rs. 4500 PM if the officer is on deputation at the same station; Rs. 9000 PM if on deputation at another station.',
    },
    {
      label: 'FR 24 - Increment Bar',
      text: 'Increment bar under FR 24 applies only to the increment falling due after the date of issue of orders in this regard.',
    },
    {
      label: 'CCL for Single Male Parent',
      text: 'Single male parents can avail CCL.',
    },
    {
      label: 'LTC - Air Travel (Level 9)',
      text: 'An officer drawing pay at Level 9 is entitled to travel by air for LTC benefit.',
    },
    {
      label: 'TA - Air Travel (Level 6+)',
      text: 'An officer drawing pay at Level 6 and above is entitled to travel by air for TA benefit.',
    },
    {
      label: 'AC First Class (Level 12)',
      text: 'An officer drawing pay at Level 12 is entitled to travel by AC First Class train.',
    },
    {
      label: 'Leave during Suspension',
      text: 'Leave shall not be granted to a government employee during suspension for the period applied for.',
    },
    {
      label: 'Pension - Minimum Qualifying Service',
      text: 'Minimum qualifying service for pension is 10 years.',
    },
    {
      label: 'Maximum Retirement Gratuity',
      text: 'Maximum Retirement Gratuity is Rs. 20,00,000 w.e.f 01-01-2016.',
    },
    {
      label: 'Extra Pension (90-95 years)',
      text: 'Pensioner / Family Pensioner from 90 years to 95 years of age is allowed additional 40% pension / family pension.',
    },
    {
      label: 'Car Transport - Packing Charges',
      text: 'If car is transported by passenger train, packing charges are not allowed.',
    },
    {
      label: 'Joining Time - Own Request Transfer',
      text: 'Joining Time is not allowed for transfer on own request.',
    },
    {
      label: 'Casual Leave - Joining Time',
      text: 'Casual Leave shall not be combined with Joining Time.',
    },
    {
      label: 'Retirement Gratuity - Minimum Service',
      text: 'Minimum qualifying service for Retirement Gratuity is 5 years.',
    },
    {
      label: 'Spouse Transfer - Transfer Grant',
      text: 'If transfer takes place 60 days after the spouse\'s transfer, 50% Transfer Grant is allowed to the transferred spouse.',
    },
    {
      label: 'TA on Retirement - Resignation/Dismissal',
      text: 'TA on retirement is not allowed to government employees who have resigned, been dismissed or compulsorily retired from service as a disciplinary measure.',
    },
    {
      label: 'LTC - Re-employed Officers',
      text: 'Re-employed officers are eligible for LTC if re-joined immediately after retirement.',
    },
    {
      label: 'LTC - Both Spouses Government Employees',
      text: 'If both husband and wife are government employees, both are allowed to encash leave when availing LTC.',
    },
    {
      label: 'TA/DA - Daily Allowance (Headquarters)',
      text: 'For TA/DA benefit, 30% Daily Allowance is allowed if absent from headquarters up to 6 hours and 70% Daily Allowance if absent from 6 hours to 12 hours.',
    },
    {
      label: 'Transfer - City Classification (Y/Z to X)',
      text: 'A government employee transferred from Y or Z class city to X class city is allowed the rates indicated for X class city.',
    },
    {
      label: '7th Pay Commission - Apex Scale',
      text: 'As per 7th Pay Commission, Apex scale pay is Rs. 2,25,000.',
    },
    {
      label: 'LTC - Adoption',
      text: 'A government employee residing in own town is allowed LTC only for return journey when legally adopting a child.',
    },
    {
      label: 'Leave - Joining Time Combination',
      text: 'Leaves can be combined with Joining Time, but cannot be combined before.',
    },
    {
      label: 'Suspension - Medical Reimbursement',
      text: 'Medical reimbursement is allowed to a suspended officer during the suspension period.',
    },
    {
      label: 'Dies-Non - CEA/Hostel Subsidy',
      text: 'CEA/Hostel subsidy reimbursement is not allowed during dies-non period.',
    },
    {
      label: 'Disabled Employees - Transport Allowance',
      text: 'Double transport allowance is allowed for disabled employees.',
    },
    {
      label: 'Disabled Children - CEA/Hostel Subsidy',
      text: 'For children with disabilities, CEA/Hostel subsidy reimbursement is allowed at double the normal rate.',
    },
    {
      label: 'Hostel Subsidy and CEA',
      text: 'Both Hostel subsidy and Children Education Allowance cannot be availed simultaneously.',
    },
    {
      label: 'LTC - Closed Holidays',
      text: 'LTC can be availed only on closed holidays, without taking any leave.',
    },
    {
      label: 'CCL - Minimum Period',
      text: 'CCL (Child Care Leave) can be granted for less than 15 days. It can be availed in 3 spells in a calendar year.',
    },
    {
      label: 'CCL - Maximum for Two Children',
      text: 'Maximum 730 days CCL for two children during entire service period.',
    },
    {
      label: 'CCL - Child Age Limit',
      text: 'CCL is not allowed if child is 18 years or above. In case of children with disabilities/mental challenges, it is allowed up to 22 years of age.',
    },
    {
      label: 'MACP - Benchmark Upgrade',
      text: 'Benchmark for MACP grant was upgraded from "Good" to "Very Good".',
    },
    {
      label: 'ACP/MACP - Dies-Non Period',
      text: 'Dies-non period is not counted as normal service for benefit of financial upgradation under ACP/MACP scheme.',
    },
    {
      label: 'TA - Full Month Leave',
      text: 'If an officer takes leave for full calendar month, transport allowance is not paid for that month.',
    },
    {
      label: 'TA - Mid-Month Suspension',
      text: 'If an officer is under suspension in the middle of month, transport allowance is paid proportionately for that month.',
    },
    {
      label: 'Suspension - Qualifying for Pension',
      text: 'Period of suspension counts as qualifying service for pension.',
    },
    {
      label: 'Casual Leave - Combination',
      text: 'Casual leave can be combined with leave.',
    },
    {
      label: 'LPR - Commuted Leave',
      text: 'Commuted Leave is not granted in respect of LPR (Leave Preparatory to Retirement).',
    },
    {
      label: 'Date of Retirement - 1st of Month',
      text: 'If a government employee\'s date of birth is 1st of month, he shall retire from service on the afternoon of the last day of the preceding month in the year he completed 60 years of age, which is one day before his 60th birthday.',
    },
    {
      label: 'Family Pension - Widow Remarriage',
      text: 'Family Pension is allowed to childless widow even after remarriage.',
    },
    {
      label: 'GPF - Cessation before Retirement',
      text: 'GPF (General Provident Fund) subscription is stopped three months before retirement.',
    },
    {
      label: 'Leave Not Due - Debit',
      text: 'Leave Not Due is to be debited to Half Pay Leave account, which the government employee shall earn subsequently.',
    },
    {
      label: 'Family Pension - Rate',
      text: 'Family Pension at normal rate is 30% of last pay.',
    },
    {
      label: 'Honorarium / Funds',
      text: 'Honorarium and funds are drawn from Indian Consolidated Fund.',
    },
    {
      label: 'Leave Conversion - Time Limit',
      text: 'Request for conversion of one kind of leave into another kind of leave shall be submitted within 30 days of joining duty.',
    },
    {
      label: 'SC - Reservation in Direct Recruitment',
      text: 'Reservation in Direct Recruitment for SC (Scheduled Castes) is 15%.',
    },
    {
      label: 'Increment - Casual Leave',
      text: 'If employee is on CL (Casual Leave) on 1st July / 1st January, increment may be granted.',
    },
    {
      label: 'Paternity Leave',
      text: '15 days of paternity leave is allowed for male government employees with less than two surviving children.',
    },
    {
      label: 'CGHS - Private Ward Facility',
      text: 'A Government Servant whose Basic Pay is more than Rs. 63,100 is entitled to reimburse Private Ward facility under CGHS.',
    },
    {
      label: 'CEA and Hostel Subsidy - Rates',
      text: 'Reimbursement of CEA for normal child is Rs. 2250 per month and Hostel subsidy is Rs. 6750 per month.',
    },
    {
      label: 'GPF Subscription - Limits',
      text: 'GPF subscription can be made minimum 6% of Basic Pay and maximum of 100% Basic Pay.',
    },
    {
      label: 'Casual Leave - Special Combination',
      text: 'Casual Leave can be combined with Special Casual Leave / Vacation but not with any other kind of leave.',
    },
    {
      label: 'EOL/Dies-Non - EL Reduction',
      text: '1/10th of EOL/Dies-non availed during the previous half year subject to maximum of 15 days and to the extent of such credit of EL will be reduced.',
    },
    {
      label: 'Dies-Non - HPL Reduction',
      text: '1/18th of Dies-non availed during the previous half year subject to maximum of 10 days and to the extent of such credit of HPL will be reduced.',
    },
    {
      label: 'LPR - Commuted Leave / LND',
      text: 'Commuted Leave / LND cannot be granted in the case of Leave Preparatory to Retirement.',
    },
    {
      label: 'Commuted Leave - HPL Debit',
      text: 'If commuted leave is taken, twice the number of days availed should be debited in the half pay leave account.',
    },
    {
      label: 'LTC - EL Encashment',
      text: 'Maximum of 10 days of EL in one occasion and maximum of 60 days in entire career can be encashed while availing LTC.',
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-rose-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-rose-800 to-rose-900 text-white px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
              SUBSTANCE OF SERVICE RULES
            </h1>
          </div>
        </section>

        {/* Rules List */}
        <section className="space-y-4">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden hover:border-rose-500/40 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="flex gap-4 p-5 sm:p-6">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-800/40 text-rose-300 font-bold text-sm group-hover:bg-rose-700/50 transition-colors">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-rose-300 font-semibold text-base mb-1.5">
                    {rule.label}
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ServiceRules
