import React from 'react'

const rows = [
  [
    '1',
    'Check of Day to Day transactions. Work of One person is proved independently or complementary to the work of another',
    'Selected few topics - Checking in all aspects to ensure effectiveness of System, Compliance of policies & Prevention of frauds.',
  ],
  [
    '2',
    'Checking by the Same section staff',
    'Review activity carried out by Persons totally independent of Internal check personnel',
  ],
  ['3', 'Frequency Daily/Regular Basis', 'Frequency - Periodic Basis'],
  ['4', 'Built in device', 'Not built in device'],
  [
    '5',
    'Object: Early detection of fraud or prevention of frauds at the time of passing Bills',
    'Suggests System improvement & ensure compliance, service to the Management, Compliance of policies',
  ],
  [
    '6',
    'Checking every aspect',
    'Checking few selected topics thoroughly(in all aspects) in order to achieve the object of System improvement/Service to Management',
  ],
  ['7', 'Object: Narrow', 'Object: Broad'],
  ['8', 'Basis: Transaction/Bill/Event', 'Basis: System as a whole'],
]

const InternalCheckPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(251,191,36,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-teal-400 to-amber-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-amber-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Internal Check Vs Internal Audit
            </h1>
          </header>

          <div className="px-3 py-5 sm:px-5 sm:py-6">
            <div className="overflow-x-auto rounded-xl border border-slate-600/50">
              <table className="w-full min-w-200 border-collapse text-left text-sm lg:min-w-full">
                <thead>
                  <tr>
                    <th className="w-14 border-b border-slate-600/60 bg-slate-800/80 px-3 py-3" />
                    <th className="border-b border-l border-emerald-400/30 bg-emerald-500/15 px-4 py-3 font-semibold text-emerald-50">
                      Internal Check
                    </th>
                    <th className="border-b border-l border-amber-400/30 bg-amber-500/15 px-4 py-3 font-semibold text-amber-50">
                      Internal Audit
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px] leading-[1.7] text-slate-200">
                  {rows.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={`align-top ${index % 2 === 1 ? 'bg-slate-800/25' : ''} ${index < rows.length - 1 ? 'border-b border-slate-700/60' : ''}`}
                    >
                      <td className="px-3 py-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-teal-200 to-teal-500 text-sm font-extrabold text-teal-950 shadow-md ring-1 ring-teal-100/50">
                          {row[0]}
                        </span>
                      </td>
                      <td className="border-l border-slate-700/70 px-4 py-3">{row[1]}</td>
                      <td className="border-l border-slate-700/70 px-4 py-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default InternalCheckPage
