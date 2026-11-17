import React from 'react'

const feelProcedure = [
  <>
    Conduct the test at approximately <strong className="font-semibold text-amber-50">15 km/h</strong>.
  </>,
  <>
    Reduce Brake Pipe (BP) pressure by <strong className="font-semibold text-amber-50">0.5 kg/cm²</strong> through
    A-9 and release.
  </>,
  <>Feel/observe the brake application.</>,
  <>
    The speed should fall <strong className="font-semibold text-amber-50">to approximately 10 km/h</strong>.
  </>,
]

const powerProcedure = [
  <>
    The resulting speeds should be observed by the time BP pressure returns to{' '}
    <strong className="font-semibold text-sky-50">5.0 kg/cm²</strong>.
  </>,
  <>
    Apply brakes through <strong className="font-semibold text-sky-50">A-9</strong> and release after a small
    pause.
  </>,
  <>
    Resume normal traction when the{' '}
    <strong className="font-semibold text-sky-50">
      AFI (Air Flow Indicator) returns to 0 or its previous reading
    </strong>
    .
  </>,
]

const safetyNotes = [
  <>
    <strong className="font-semibold text-emerald-50">ALP (Assistant Loco Pilot):</strong> Ensure both tests are
    conducted; remind, observe and confirm to LP (Loco Pilot).
  </>,
  <>Obey signal aspects throughout both tests.</>,
  <>
    <strong className="font-semibold text-emerald-50">Up Gradient:</strong> Follow divisional guidelines to avoid
    stalling.
  </>,
]

const testParameters = [
  ['Coaching', '60–70 km/h', '1.0 kg/cm²', '30–35 km/h'],
  ['Loaded Goods', '40–50 km/h', '1.0 kg/cm²', '20–25 km/h'],
  ['Empty Goods', '40–50 km/h', '0.5 kg/cm²', '20–25 km/h'],
]

const differences = [
  ['When', 'Immediately after starting', 'First block section / first opportunity'],
  ['Coaching train', '15 km/h', '60–70 km/h'],
  ['Loaded goods', '15 km/h', '40–50 km/h'],
  ['Empty goods', '15 km/h', '40–50 km/h'],
  [
    'BP reduction',
    '0.5 kg/cm²',
    '1.0 kg/cm² (coaching & loaded goods); 0.5 kg/cm² (empty goods)',
  ],
  ['Expected speed', '10 km/h', 'As per the above table'],
]

const abbreviations = [
  ['BP', 'Brake Pipe'],
  ['AFI', 'Air Flow Indicator'],
  ['A-9', 'Automatic Brake Valve'],
]

function NumberedSteps({
  items,
  tone,
}: {
  items: React.ReactNode[]
  tone: 'amber' | 'sky' | 'emerald'
}) {
  const badge = {
    amber: 'from-amber-200 to-amber-500 text-amber-950 ring-amber-100/50 shadow-amber-950/40',
    sky: 'from-sky-200 to-sky-500 text-sky-950 ring-sky-100/50 shadow-sky-950/40',
    emerald: 'from-emerald-200 to-emerald-500 text-emerald-950 ring-emerald-100/50 shadow-emerald-950/40',
  }[tone]
  const card = {
    amber: 'border-amber-400/15',
    sky: 'border-sky-400/15',
    emerald: 'border-emerald-400/15',
  }[tone]

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 pb-3 last:pb-0 sm:gap-4">
          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br text-sm font-extrabold shadow-md ring-1 ${badge}`}
          >
            {index + 1}
          </span>
          <p
            className={`flex-1 rounded-2xl border bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4 ${card}`}
          >
            {item}
          </p>
        </li>
      ))}
    </ol>
  )
}

const BrakeFeelTestAndBrakePowerTestPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#100c12] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(251,146,60,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_30%,rgba(56,189,248,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-amber-500 via-sky-400 to-emerald-400" />

          <header className="border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-amber-100 via-orange-100 to-sky-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Brake Feel Test and Brake Power Test
            </h1>
          </header>

          <div className="space-y-6 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
            <section className="overflow-hidden rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-amber-400/20 bg-amber-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-amber-50 sm:text-base">
                  1. BRAKE FEEL TEST
                </h2>
              </div>
              <div className="space-y-5 px-4 py-5 sm:px-5">
                <p className="rounded-xl border border-amber-400/20 bg-amber-950/25 px-4 py-3 text-[15px] leading-[1.8] text-slate-100 sm:text-base">
                  <strong className="font-semibold text-amber-50">When to conduct:</strong> Immediately after
                  starting from the location where the crew took over.
                </p>
                <div className="space-y-3">
                  <h3 className="text-sm font-bold tracking-[0.08em] text-amber-100 sm:text-[15px]">Procedure</h3>
                  <NumberedSteps items={feelProcedure} tone="amber" />
                </div>
                <div className="rounded-2xl border border-amber-400/25 bg-slate-950/45 px-4 py-4 text-center">
                  <p className="text-sm font-semibold text-amber-100">Expected Speed Reduction:</p>
                  <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    15 km/h → 10 km/h
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-sky-400/25 bg-linear-to-br from-sky-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-sky-400/20 bg-sky-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-sky-50 sm:text-base">
                  2. BRAKE POWER TEST
                </h2>
              </div>
              <div className="space-y-5 px-4 py-5 sm:px-5">
                <p className="rounded-xl border border-sky-400/20 bg-sky-950/25 px-4 py-3 text-[15px] leading-[1.8] text-slate-100 sm:text-base">
                  <strong className="font-semibold text-sky-50">When to conduct:</strong> In the{' '}
                  <strong className="font-semibold text-sky-50">
                    first block section or at the first available opportunity
                  </strong>
                  .
                </p>
                <div className="space-y-3">
                  <h3 className="text-sm font-bold tracking-[0.08em] text-sky-100 sm:text-[15px]">
                    Test Parameters
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                    <table className="w-full min-w-160 border-collapse text-left text-sm lg:min-w-full">
                      <thead>
                        <tr className="bg-slate-800/80 text-sky-100">
                          <th className="border-b border-slate-600/60 px-4 py-3 font-semibold">Type of Train</th>
                          <th className="border-b border-l border-slate-600/60 px-4 py-3 text-right font-semibold">
                            Test Speed
                          </th>
                          <th className="border-b border-l border-slate-600/60 px-4 py-3 text-right font-semibold">
                            BP Drop
                          </th>
                          <th className="border-b border-l border-slate-600/60 px-4 py-3 text-right font-semibold">
                            Resulting Speed
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-[15px] leading-[1.7] text-slate-200">
                        {testParameters.map((row, index) => (
                          <tr
                            key={row[0]}
                            className={`${index % 2 === 1 ? 'bg-slate-800/25' : ''} ${index < testParameters.length - 1 ? 'border-b border-slate-700/60' : ''}`}
                          >
                            <td className="px-4 py-3 font-medium text-sky-50">{row[0]}</td>
                            <td className="border-l border-slate-700/70 px-4 py-3 text-right">{row[1]}</td>
                            <td className="border-l border-slate-700/70 px-4 py-3 text-right">{row[2]}</td>
                            <td className="border-l border-slate-700/70 px-4 py-3 text-right">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-bold tracking-[0.08em] text-sky-100 sm:text-[15px]">
                    Procedure and Important Instructions
                  </h3>
                  <NumberedSteps items={powerProcedure} tone="sky" />
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-emerald-400/20 bg-emerald-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-emerald-50 sm:text-base">
                  3. COMMON CREW & SAFETY NOTES
                </h2>
              </div>
              <div className="space-y-5 px-4 py-5 sm:px-5">
                <NumberedSteps items={safetyNotes} tone="emerald" />
                <div className="space-y-3">
                  <h3 className="text-sm font-bold tracking-[0.08em] text-emerald-100 sm:text-[15px]">
                    Abbreviations
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-3">
                    {abbreviations.map(([short, full]) => (
                      <li
                        key={short}
                        className="rounded-2xl border border-emerald-400/15 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.7] text-slate-200 ring-1 ring-white/4"
                      >
                        <strong className="font-semibold text-emerald-50">{short}</strong> = {full}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  <strong className="font-semibold text-emerald-50">Source:</strong> ACTM Vol. III (November 2022),
                  Para 30624.
                </p>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-violet-400/25 bg-linear-to-br from-violet-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-violet-400/20 bg-violet-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-violet-50 sm:text-base">
                  Important Difference for Quick Revision
                </h2>
              </div>
              <div className="px-4 py-5 sm:px-5">
                <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                  <table className="w-full min-w-180 border-collapse text-left text-sm lg:min-w-full">
                    <thead>
                      <tr className="bg-slate-800/80 text-violet-100">
                        <th className="border-b border-slate-600/60 px-4 py-3 font-semibold">Particulars</th>
                        <th className="border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                          Brake Feel Test
                        </th>
                        <th className="border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                          Brake Power Test
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[15px] leading-[1.7] text-slate-200">
                      {differences.map((row, index) => (
                        <tr
                          key={row[0]}
                          className={`align-top ${index % 2 === 1 ? 'bg-slate-800/25' : ''} ${index < differences.length - 1 ? 'border-b border-slate-700/60' : ''}`}
                        >
                          <td className="px-4 py-3 font-medium text-violet-50">{row[0]}</td>
                          <td className="border-l border-slate-700/70 px-4 py-3">{row[1]}</td>
                          <td className="border-l border-slate-700/70 px-4 py-3">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BrakeFeelTestAndBrakePowerTestPage
