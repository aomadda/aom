import React from 'react'
import Link from 'next/link'

const planHeadRows: { code: string; description: string; coordinator: string }[] = [
  { code: '11', description: 'New Lines (Construction)', coordinator: 'PCOM' },
  { code: '12', description: 'Purchase of new lines ', coordinator: 'PCOM' },
  { code: '14', description: 'Gauge conversion ', coordinator: 'PCOM' },
  { code: '15', description: 'Doubling ', coordinator: 'PCOM' },
  { code: '16', description: 'Traffic facilities - Yard remodelling and others ', coordinator: 'PCOM' },
  { code: '17', description: 'Computerization ', coordinator: 'PCCM' },
  { code: '18', description: 'Railway Research ', coordinator: 'None' },
  { code: '21', description: 'Rolling Stock ', coordinator: 'None' },
  { code: '22', description: 'Leased assets - Payment of capital component of lease charges to IRFC etc. ', coordinator: 'None' },
  { code: '29', description: 'Road Safety Works – Conversion of Unmanned Level Crossings into Manned Level Crossings ', coordinator: 'PCSTE' },
  { code: '30', description: 'Road Safety Works – Conversion of Level Crossings into Road over Bridges/Road under Bridges ', coordinator: 'CBE' },
  { code: '31', description: 'Track renewals ', coordinator: 'CTE' },
  { code: '32', description: 'Bridge works ', coordinator: 'CBE' },
  { code: '33', description: 'Signalling and Telecommunication works ', coordinator: 'PCSTE' },
  { code: '34', description: 'Taking over of line wires from P. & T. Dept. ', coordinator: 'None' },
  { code: '35', description: 'Electrification projects ', coordinator: 'PCOM' },
  { code: '36', description: 'Other Electrical works ', coordinator: 'PCEE' },
  { code: '37', description: 'Traction Distribution Works ', coordinator: 'None' },
  { code: '41', description: 'Machinery and Plant ', coordinator: 'PCME' },
  { code: '42', description: 'Workshops including Production Units ', coordinator: 'CME' },
  { code: '51', description: 'Staff Quarters ', coordinator: 'PCE' },
  { code: '52', description: 'Amenities for staff ', coordinator: 'None' },
  { code: '53', description: '(i) Passenger Amenities (ii) Other Railway User Amenities ', coordinator: 'PCCM' },
  { code: '61', description: 'Investment in Government Commercial Undertakings - Road services ', coordinator: 'PCOM' },
  { code: '62', description: 'Investment in PSU/JV/SPV ', coordinator: 'None' },
  { code: '63', description: 'Investment in Non Government Undertaking including JVs/SPVs ', coordinator: 'PCOM' },
  { code: '64', description: 'Other specified works ', coordinator: 'PCE' },
  { code: '65', description: 'Training/HRD ', coordinator: 'PCPO' },
  { code: '71', description: 'Stores suspense ', coordinator: 'None' },
  { code: '72', description: 'Manufacturing suspense ', coordinator: 'None' },
  { code: '73', description: 'Miscellaneous Advances ', coordinator: 'None' },
  { code: '81', description: 'Metropolitan Transport Projects ', coordinator: 'PCOM' },
  { code: '82', description: 'Transfer to Special Railway Safety Fund (discontinued since 2008) ', coordinator: 'None' },
  { code: '83', description: 'New Lines (Construction) - Dividend free projects ', coordinator: 'PCOM' },
]

const recentAdditionCodes = new Set(['17', '18', '22', '29', '30', '65', '83'])

const sourceOfFinanceRows: { code: string; source: string; remarks: string }[] = [
  { code: '20', source: 'Capital', remarks: '' },
  { code: '21', source: 'DRF – Depreciation Reserve Fund', remarks: '' },
  { code: '23', source: 'DF (Depreciation Fund)-1 = Passenger', remarks: '' },
  { code: '33', source: 'DF (Depreciation Fund)-2 = Labour Welfare', remarks: '' },
  { code: '43', source: 'DF (Depreciation Fund)-3 = Unremunerative', remarks: '' },
  { code: '53', source: 'DF (Depreciation Fund)-4 = Safety', remarks: '' },
  { code: '25', source: 'Capital Fund', remarks: '' },
  { code: '26', source: 'RSF – Railway Safety Fund', remarks: '' },
  { code: '27', source: 'SRSF – Special Railway Safety Fund', remarks: 'Not in operation. It was ceased in the 2008 year.' },
  { code: '28', source: 'Capital – Nirbhaya Fund', remarks: '' },
  { code: '29', source: 'RRSK - Rashtriya Rail Sanrakshak Kosh', remarks: '' },
  { code: '30', source: 'Capital - Covid funds', remarks: '' },
  { code: '35', source: 'SGF - Sovereign Green Fund', remarks: '' },
  { code: '82', source: 'EBR – PPP (Extra Budgetary Resources – Public Private Partnership)', remarks: '' },
  { code: '83', source: 'EBR – IF (Extra Budgetary Resources – Institutional Finance)', remarks: '' },
  { code: '84', source: 'EBR – IRFC (Extra Budgetary Resources – Indian Railway Financial Corporation)', remarks: '' },
  { code: '85', source: 'EBR – Special (Extra Budgetary Resources – Special)', remarks: '' },
]

const PlanHeads = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Indian Railways Plan Heads List
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-emerald-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-emerald-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.75]">
            Plan Heads (PH) are the minor heads under the capital expenditure classification in Indian Railways,
            used for budgeting and accounting works like construction and renewals under Demand No. 16 (now
            Assets-Acquisition, Construction and Replacement). They link to major heads 5002 (Commercial Lines) and
            5003 (Strategic Lines), with an 8-digit code: Source (2 digits) – PH (2 digits) – Sub/Detailed Head (2
            digits) – Primary Unit (2 digits).
          </p>
        </article>

        <section className="mt-8 rounded-2xl border border-emerald-500/20 bg-slate-900/40 p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-emerald-50 sm:text-2xl">Complete List of Plan Heads</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-emerald-500/40" />
          <p className="mt-6 text-base leading-relaxed text-slate-300/95 sm:text-[1.05rem] sm:leading-[1.75]">
            Here is the standard list of Plan Heads from official and exam resources, including new additions
            (highlighted where noted). Some like PH 82 are discontinued.
          </p>

          <div className="mt-8 -mx-1 overflow-x-auto rounded-xl border border-emerald-500/20 bg-slate-950/50 ring-1 ring-white/5 sm:mx-0">
            <table className="w-full min-w-[min(100%,640px)] border-collapse text-left text-sm text-slate-200">
              <thead>
                <tr className="border-b border-emerald-500/25 bg-emerald-950/40">
                  <th className="sticky left-0 z-10 w-18 whitespace-nowrap border-b border-emerald-500/20 bg-emerald-950/50 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-200/95 backdrop-blur-sm sm:px-5">
                    Plan Head
                  </th>
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-200/95 sm:px-5">
                    Description
                  </th>
                  <th className="min-w-28 whitespace-nowrap px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-200/95 sm:px-5">
                    Co-ordernator
                  </th>
                </tr>
              </thead>
              <tbody>
                {planHeadRows.map(({ code, description, coordinator }) => {
                  const isRecent = recentAdditionCodes.has(code)
                  const isDiscontinued = code === '82'
                  return (
                    <tr
                      key={code}
                      className={[
                        'border-b border-white/5 transition-colors last:border-b-0',
                        isRecent ? 'bg-emerald-500/5 hover:bg-emerald-500/10' : 'hover:bg-white/3',
                        isDiscontinued ? 'text-slate-400' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <td
                        className={[
                          'sticky left-0 z-1 whitespace-nowrap border-r border-white/5 px-4 py-3 font-mono text-[0.95rem] font-semibold tabular-nums sm:px-5',
                          isRecent ? 'bg-emerald-950/60 text-emerald-200' : 'bg-slate-950/80 text-emerald-100/90',
                        ].join(' ')}
                      >
                        {code}
                      </td>
                      <td className="px-4 py-3 pr-3 leading-relaxed sm:px-5">{description}</td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-emerald-200/90 sm:px-5">
                        {coordinator}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-slate-900/50 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-lg font-bold tracking-tight text-amber-100/95 sm:text-xl">Key Notes</h2>
          <div className="mt-3 h-px w-12 rounded-full bg-amber-500/35" />
          <ul className="mt-6 list-none space-y-4 text-base leading-relaxed text-slate-300/95 sm:text-[1.05rem] sm:leading-[1.75]">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
              <span>
                New Plan Heads (e.g., 17, 18, 22, 29, 30, 65, 83) are marked in sources for recent additions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
              <span>Sub-heads and detailed heads vary by asset (e.g., land, bridges for new lines).</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
              <span>
                This list aligns with Finance Code Appendix and exam materials, though minor updates may occur
                via Railway Board circulars.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
          <div className="space-y-4 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.75]">
            <p>
              The whole exercise is trimming the Number of Plan Heads duly merged PHs into the similar nature of PH
              and deleting the PHs which are not required in present circumstances. Some PHs are renamed duly giving
              the effect of merger. Overall 7 Plan Heads are deleted (some are merged in other PHs)
            </p>

            <div className="rounded-2xl border border-cyan-500/15 bg-slate-950/45 p-5 ring-1 ring-white/5 sm:p-6">
              <p className="font-semibold text-cyan-100">Major Heads for Works expenditure are</p>
              <p className="mt-3">5002 – Capital outlay on Indian Railways – Commercial Lines</p>
              <p>5003 – Capital outlay on Indian Railways – Strategic Lines</p>
            </div>

            <p>Accounting Classification of Works expenditure - 8 digit numerical code like follows.</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/50 ring-1 ring-white/5">
            <div className="grid grid-cols-8 border-b border-cyan-500/20 text-center">
              {['1', '2', '3', '4', '5', '6', '7', '8'].map((digit, index) => (
                <div
                  key={digit}
                  className={[
                    'border-r border-cyan-500/20 px-3 py-2 text-lg font-bold',
                    index === 7 ? 'border-r-0' : '',
                    index < 2 || index === 6 || index === 7 ? 'text-rose-300' : '',
                    index >= 2 && index <= 4 ? 'text-emerald-300' : '',
                    index === 5 ? 'text-sky-300' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {digit}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-8 text-center text-sm font-semibold sm:text-base">
              <div className="col-span-2 border-r border-cyan-500/20 px-3 py-4 text-rose-200">Source of Finance</div>
              <div className="col-span-3 border-r border-cyan-500/20 px-3 py-4 text-emerald-200">
                Plan Head (Minor Head)
              </div>
              <div className="col-span-2 border-r border-cyan-500/20 px-3 py-4 text-sky-200">Detailed Head</div>
              <div className="col-span-1 px-3 py-4 text-rose-200">Primary Unit</div>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-bold tracking-tight text-cyan-100 sm:text-2xl">Sources of Finance</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-cyan-500/20 bg-slate-950/50 ring-1 ring-white/5">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-200">
                <thead>
                  <tr className="border-b border-cyan-500/25 bg-cyan-950/30">
                    <th className="px-4 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-cyan-200/95 sm:px-5">
                      Numerical Code
                      <br />
                      (First 2 digits in Classification)
                    </th>
                    <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-cyan-200/95 sm:px-5">
                      Source of Finance
                    </th>
                    <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-cyan-200/95 sm:px-5">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sourceOfFinanceRows.map(({ code, source, remarks }) => (
                    <tr key={code} className="border-b border-white/5 align-top transition-colors last:border-b-0 hover:bg-white/3">
                      <td className="px-4 py-3 font-mono font-semibold text-cyan-100/90 sm:px-5">{code}</td>
                      <td className="px-4 py-3 leading-relaxed sm:px-5">{source}</td>
                      <td className="px-4 py-3 leading-relaxed text-slate-300/90 sm:px-5">{remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/financial-rules"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-black/15 ring-1 ring-emerald-500/10 transition hover:border-emerald-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Financial Rules page</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PlanHeads
