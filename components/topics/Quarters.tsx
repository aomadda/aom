import React from 'react'

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
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-950/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-8">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
              QUARTERS
            </h1>
          </div>
        </section>

        {/* Types of Accommodation and Eligibility */}
        <section className="mb-8">
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Types of Accommodation and Eligibility</h2>
            </div>
            <div className="p-5 sm:p-6 overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">SI.No</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Category of Staff</th>
                    <th className="px-4 py-3 text-left text-amber-300 font-semibold text-sm">Entitlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-600/60">
                  {accommodationData.map((row, index) => (
                    <tr key={index} className="bg-slate-700/20 hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 text-slate-200 text-sm">{row.slNo}</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">{row.category}</td>
                      <td className="px-4 py-3 text-slate-200 text-sm">{row.entitlement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Retention of Railway quarter */}
        <section>
          <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-amber-700/90 to-amber-800/90 text-white px-6 py-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Retention of Railway quarter on transfer, deputation, retirement etc.</h2>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The instructions contained in Board&apos;s letter of even number dated 01.06.2001 (RBE No. 100/2001) regarding retention of Railway quarter on transfer, deputation, retirement etc. have been reviewed in Ministry of Railways and full Board have decided to partially modify provisions mentioned in para 1(a) and para 5.1 of the above-mentioned instructions as under.
              </p>

              {/* 1. Permanent Transfer */}
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-3">1. Permanent Transfer</h3>
                <div className="space-y-4 ml-4">
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                    <span className="text-amber-300 font-semibold shrink-0">(i)</span>
                    <span>A Railway employee on transfer from one station to another which necessitates change of residence, may be permitted to retain the railway accommodation at the former station of posting for a period of two months on payment of normal licence fee plus six months on payment of double licence fee.</span>
                  </p>
                  <div className="flex gap-2">
                    <span className="text-amber-300 font-semibold shrink-0">(ii)</span>
                    <div>
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-2">
                        Further extension beyond the aforesaid period may be granted on educational ground only as mentioned below:
                      </p>
                      <ul className="space-y-1.5 ml-4 list-disc">
                        <li className="text-slate-200 text-sm sm:text-base leading-relaxed">
                          To cover the current academic session (i.e. end of the academic/scholastic session) plus 15 days. The end of academic/scholastic session shall, in this case, mean &quot;last paper of annual examination.&quot;
                        </li>
                        <li className="text-slate-200 text-sm sm:text-base leading-relaxed">
                          When the ward of the railway employee is studying in Class 9th or Class 11th, retention of railway accommodation may be allowed on educational ground to cover the current academic session and also the next academic session (examination) of the ward, till end of the academic/scholastic session of class 10th or 12th respectively plus 15 days.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed flex gap-2">
                    <span className="text-amber-300 font-semibold shrink-0">(iii)</span>
                    <span>Beyond the permitted/permissible limits, however no further extension will be allowed on any ground whatsoever. Therefore, no requests or representation on this score shall be entertained. For all occupations beyond the permitted period, immediate action should be taken to cancel the allotment, declare the occupation as unauthorised and initiate eviction proceedings, charging damage rent for the over-stay.</span>
                  </p>
                </div>
              </div>

              {/* 2. Retirement */}
              <div>
                <h3 className="text-amber-300 font-semibold text-base mb-3">2. Retirement</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed ml-4">
                  Railway employees on retirement, including voluntary retires and those retired compulsorily, may be permitted to retain non-earmarked Railway accommodation for a period of 4 months on payment of normal rent/flat rate of licence fee and the next 4 months on payment of special fee, i.e. double the normal rent or double the flat rate of licence fee. This is also applicable to audit staff doing Railway audit work. The cases of retirement on medical invalidation grounds are also to be treated at par with normal retirement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Quarters
