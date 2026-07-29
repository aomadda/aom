import React from 'react'

const Transfers = () => {
  const transferSections = [
    {
      title: 'Temporary Transfer',
      content: 'When the transfer is temporary the same should be mentioned in the transfer order. In such cases the employee is entitled to TA/DA for a period of 180 days after which the transfer will become permanent. The employee will continue to draw HRA/CCA at the rates admissible in respect of his old headquarters. He can retain the Railway quarters at the old station.',
    },
    {
      title: 'Permanent Transfer',
      content: 'In the case of permanent transfer ordered on administrative ground the employee is eligible for Composite transfer grant, joining time, pass on transfer account, advance of pay equal to one month basic pay. Staff are also transferred to other seniority units on administrative grounds on complaints from Vig/CBI/SPE etc.',
    },
    {
      title: 'Request Transfer',
      content: 'When a transfer is ordered at the request of the employee, transfer privileges are not admissible. However, in the case of periodical transfer where request of the employee is accepted composite transfer grant is paid. If the order is silent about the nature of the order, it will be construed that it is ordered on administrative grounds. In respect of request transfer from one station to another within the same seniority unit, transfer orders are issued on priority basis.',
    },
    {
      title: 'Periodical Transfer',
      content: 'Staff occupying sensitive posts and who come in contact with the public, contractors etc. are to be transferred once in every 4 years. In case of clerical staff working in sensitive posts rotational transfer from one section to another or one seat to another will meet the requirement of the periodical transfer.',
    },
    {
      title: 'Mutual Transfer',
      content: 'Mutual transfer may be allowed even in the intermediate grade where there is no element of direct recruitment. In mutual transfer the employees are given the seniority of the junior. Mutual Transfer if permitted only between the same Communities.',
    },
    {
      title: 'Transfer of Trade Union Officials',
      content: 'Proposal for transfer of an office bearer should be advised to the union concerned to make alternative arrangements. Union should be allowed to bring the proposal to the notice of DRM/CWM or GM later, if necessary.',
    },
  ]

  const additionalPoints = [
    'In the case of periodical transfer where GM decides not to cancel the order the transfer may be kept pending till next election, subject to a maximum period of one year. If an office bearer is transferred from one section/department within the same office there is no need to inform union.',
    'Transfer of union officials on the recommendation of CBI/SPE, can be decided only if the GM has seen the papers.',
    'The procedure of advising union about transfer is not necessary in the case of request transfer.',
    'Information as usual is to be given to the union in the case of promotional transfer.',
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
              TRANSFERS
            </h1>
          </div>
        </section>

        {/* Transfer Sections */}
        <section className="space-y-6">
          {transferSections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden hover:border-amber-500/40 transition-colors"
            >
              <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight">{section.title}</h2>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}

          {/* Additional points (continuation of Trade Union Officials) */}
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="p-5 sm:p-6 space-y-3">
              {additionalPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-3 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-semibold text-xs">
                    {index + 1}
                  </span>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-0.5">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive Transfer Policy */}
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-center">
                Comprehensive Transfer Policy - Exemption from 5 years service condition - [RBE No.12/2017 / PBC No.17/2017]
              </h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                No inter railway transfer requests will be considered till completion of five (05) years of joining Railway for non-gazetted employees.
              </p>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-3">
                  The following categories of transfers in the case of non-gazetted staff will be exempted from the condition of a minimum of five (05) years service.
                </p>
                <ul className="space-y-2">
                  {[
                    { key: 'i', text: 'Transfers sought on mutual exchange basis;' },
                    { key: 'ii', text: 'Transfers sought on spouse ground;' },
                    { key: 'iii', text: 'Railway servants who are care-givers to a disabled child and' },
                    { key: 'iv', text: 'Physically handicapped Railway servants.' },
                  ].map((item) => (
                    <li
                      key={item.key}
                      className="flex gap-3 rounded-lg border border-slate-600/50 bg-slate-700/30 px-4 py-2.5 hover:border-amber-500/30 hover:bg-slate-700/40 transition-colors"
                    >
                      <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-amber-600/40 text-amber-300 font-bold text-xs">
                        ({item.key})
                      </span>
                      <span className="text-slate-200 text-sm sm:text-base leading-relaxed pt-0.5">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Joining Time */}
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">JOINING TIME</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Joining time is granted to Railway servants on transfer to enable them to join a new post.
              </p>
              <ul className="space-y-2">
                {[
                  'It is not admissible for temporary transfer.',
                  'Railway servants are eligible for joining time to take up employment on reduction of establishment or on discharge provided the orders are received while working in old post, otherwise the break will be treated as joining time without pay up to 30 days.',
                  'Serving Railway servants, State and Central Government employees are entitled for joining time on appointment to Railways through competitive examinations. Temporary Railway servants with less than 3 years of service are eligible for joining time without pay.',
                  'Joining time commences from the date of relief if the charges are handed over in the forenoon and from the next day if the charges are handed over in the afternoon.',
                  'The joining time is calculated from old head quarters or tour station for all purposes.',
                  'Not more than one day joining time is admissible for transfer within the same station or where no change of residence is involved. Same station for this purpose includes areas falling within the localities of Municipality, Corporation, Suburban limits, Cantonment and other notified areas.',
                  'Joining time on account of transfer is admissible provided if change of residence is involved with reference to the distance between old and new station. It is allowed at the following rate.',
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
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-3">Joining Time Rate:</p>
                <div className="overflow-x-auto rounded-lg border border-slate-600/60">
                  <table className="w-full min-w-[280px]">
                    <thead>
                      <tr className="bg-slate-700/50">
                        <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Distance</th>
                        <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Days</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/60">
                      <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                        <td className="px-4 py-3 text-slate-200 text-sm">1000 Kms. Or less</td>
                        <td className="px-4 py-3 text-slate-200 text-sm">10 days</td>
                      </tr>
                      <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                        <td className="px-4 py-3 text-slate-200 text-sm">More than 1000 Kms</td>
                        <td className="px-4 py-3 text-slate-200 text-sm">12 days</td>
                      </tr>
                      <tr className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                        <td className="px-4 py-3 text-slate-200 text-sm">More than 2000 Kms</td>
                        <td className="px-4 py-3 text-slate-200 text-sm">15 days*</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 italic">
                  * In the case of travel by air, joining time will be limited to 12 days.
                </p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-3">Additional Rules:</p>
                <ul className="space-y-2">
                  {[
                    'Distance means the actual distance and not the weighted distance for the joining time.',
                    'Extension of joining time is allowed in special circumstances to Gr. C & D employees up to 30 days by DRM/HOD. Railway Board can allow extension beyond 30 days.',
                    'Extensions are calculated by adding eight days for preparation plus reasonable transit time, holidays, allowance for unavoidable detention due to disruption to transport, strike, natural calamities and time spent for catching connecting trains etc.',
                    'When holidays follow joining time, it is deemed as extended one.',
                    'When transfer order is modified by posting the Railway servant to a new station during transit, a fresh spell of joining time from the following day of the receipt of revised order is admissible.',
                    'Unavailed joining time can be credited to the LAP subject to the restrictions on the accumulation of LAP.',
                    'Joining time can be combined with all kinds of leave, vacation and holidays. It cannot be combined with CL and SCL.',
                    'Joining time is regarded as duty. Railway servants on joining time are eligible for Pay, DA, HRA, and CCA etc. as drawn in the old post.',
                    'The old station is the head quarters of the Railway servant during joining time.',
                    'At the time of deputation joining time will be allowed as provided in the Department / Organisation of joining unless different provisions are agreed mutually. (Rul 1101 to 1115 of IREC - 1)',
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
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Transfers
