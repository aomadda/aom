import React from 'react'

const AnnualPerformanceAppraisalReport = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-amber-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 via-amber-600 to-orange-600 text-white px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight relative z-10 text-center">ANNUAL PERFORMANCE APPRAISAL REPORT (APAR)</h1>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-xl border-l-4 border-amber-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-amber-400/70">
              <p className="text-slate-200 text-sm leading-relaxed">
                The prescribed benchmark for grant of MACP is <span className="font-bold text-amber-400">VERY GOOD</span> for all levels w.e.f: 25.7.2016 and the revised benchmark shall be applicable for the APARs for the year 2016-2017 and subsequent years.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-amber-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-amber-400/70">
              <p className="text-slate-200 text-sm leading-relaxed">
                APAR is an important document which provides the basic and vital inputs for assessing the performance of an employee and to his further advancements in career.
              </p>
            </div>
          </div>
        </section>

        {/* Responsibilities and Guidelines */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-amber-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600/90 to-orange-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Responsibilities and Guidelines:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-xl border-l-4 border-amber-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-amber-400/70">
              <p className="text-slate-200 text-sm leading-relaxed">
                Therefore, the employee reported upon, reporting officer, reviewing officer and Accepting authority, should undertake the duty of filling out the form with a high sense of responsibility and to strictly follow the time schedule to finalise the APAR for the concerned year ending.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-amber-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-amber-400/70">
              <h3 className="text-amber-400 font-semibold text-sm mb-2">Objective of APAR:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                APAR should be used as a tool for human resource development and the reporting officer should realize that the objective of APAR is to develop an employee so that he realizes his true potential and APAR is not meant to be a fault finding process. The reporting officer/reviewing officer should not shy away from reporting short comings in performance, attitudes and overall personality of the employee reported upon.
              </p>
            </div>

            {/* Structure of APAR - Parts 1-5 */}
            <div className="rounded-xl border-l-4 border-amber-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-amber-400/70">
              <h3 className="text-amber-400 font-semibold text-sm mb-3">Structure of APAR:</h3>
              <ul className="space-y-2 list-none">
                {[
                  { part: "PART-1", text: "contains the Personal data," },
                  { part: "PART-2", text: "has to be filled by the employee reported upon," },
                  { part: "PART-3", text: "requires the comment of the reporting authority," },
                  { part: "PART-4", text: "contains the remarks of the reviewing authority and finally," },
                  { part: "PART-5", text: "contains the remarks of the Accepting Authority who will be recording an overall grade/ Benchmark." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-0.5">{item.part}</span>
                    <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border-l-4 border-amber-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-amber-400/70">
              <h3 className="text-amber-400 font-semibold text-sm mb-2">Grading and Transparency:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                The numerical grade will be awarded based on the Integrity, work output, personal attributes and functional competency. There should be openness in the system of appraisal and should be communicated to the employee. Any representation made by the employee for upgrading the benchmark, shall be accepted by the authorities and modify the APAR if required.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AnnualPerformanceAppraisalReport
