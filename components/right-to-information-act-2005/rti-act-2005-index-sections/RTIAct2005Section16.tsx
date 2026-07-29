'use client'
import React from 'react'
import { 
  Scale,
  CheckCircle
} from 'lucide-react'

const numCyan = 'inline-flex items-center align-baseline justify-center min-w-9 h-7 sm:h-8 px-2 mx-0.5 rounded-lg bg-linear-to-br from-cyan-400/35 to-sky-800/30 border border-cyan-200/40 text-cyan-100 font-bold text-sm tabular-nums shadow-sm ring-1 ring-cyan-200/20'

const numBlue = 'inline-flex items-center align-baseline justify-center min-w-9 h-7 sm:h-8 px-2 mx-0.5 rounded-lg bg-linear-to-br from-blue-400/35 to-cyan-900/25 border border-blue-200/40 text-sky-100 font-bold text-sm tabular-nums shadow-sm ring-1 ring-blue-200/20'

const numAmend = 'inline-flex items-center align-baseline justify-center min-w-[4.5rem] sm:min-w-[4.75rem] min-h-7 sm:min-h-8 px-2 py-0.5 mx-0.5 rounded-lg bg-linear-to-br from-amber-400/40 to-violet-950/30 border border-amber-200/40 text-amber-100 font-bold text-sm tabular-nums shadow-sm ring-1 ring-amber-200/25'

const footPill = 'inline-flex items-center align-baseline justify-center min-w-9 h-7 sm:h-8 px-2 mx-0.5 rounded-lg bg-linear-to-br from-amber-400/40 to-amber-950/30 border border-amber-200/40 text-amber-100 font-bold text-sm tabular-nums shadow-sm ring-1 ring-amber-200/30'

const amendMark = 'font-semibold text-yellow-300 bg-yellow-400/10 rounded-md px-1.5 py-0.5 ring-1 ring-yellow-300/20'

const RTIAct2005Section16 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RIGHT TO INFORMATION ACT 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">THE STATE INFORMATION COMMISSION</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Term of office and conditions of service Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                16. Term of office and conditions of service
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="pl-0.5">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3 flex items-center justify-center flex-col">
                        <span className={numCyan}>1</span> The State Chief Information Commissioner shall hold office <span className={amendMark}>1[for such term as may be prescribed by the Central Government]</span> and shall not be eligible for reappointment:
                      </p>
                      <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
                          <span className="inline-flex sm:mt-0.5 min-w-9 h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-xs font-extrabold text-white shadow-md ring-1 ring-white/20">!</span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> no State Chief Information Commissioner shall hold office as such after he has attained the age of sixty-five years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="pl-0.5">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3 flex items-center justify-center flex-col">
                        <span className={numBlue}>2</span> Every State Information Commissioner shall hold office <span className={amendMark}>1[for such term as may be prescribed by the Central Government]</span> or till he attains the age of sixty-five years, whichever is earlier, and shall not be eligible for reappointment as such State Information Commissioner:
                      </p>
                      <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
                          <span className="inline-flex sm:mt-0.5 min-w-9 h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-xs font-extrabold text-white shadow-md ring-1 ring-white/20">!</span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> every State Information Commissioner shall, on vacating his office under this sub-section, be eligible for appointment as the State Chief Information Commissioner in the manner specified in sub-section (3) of section 15:
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
                          <span className="inline-flex sm:mt-0.5 min-w-9 h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-xs font-extrabold text-white shadow-md ring-1 ring-white/20">!</span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided further that</span> where the State Information Commissioner is appointed as the State Chief Information Commissioner, his term of office shall not be more than five years in aggregate as the State Information Commissioner and the State Chief Information Commissioner.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed pl-0.5 flex items-center justify-center flex-col">
                      <span className={numCyan}>3</span> The State Chief Information Commissioner or a State Information Commissioner, shall before he enters upon his office make and subscribe before the Governor or some other person appointed by him in that behalf, an oath or affirmation according to the form set out for the purpose in the First Schedule.
                    </p>
                  </div>

                  {/* Subsection (4) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="pl-0.5">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3 flex items-center justify-center flex-col">
                        <span className={numBlue}>4</span> The State Chief Information Commissioner or a State Information Commissioner may, at any time, by writing under his hand addressed to the Governor, resign from his office:
                      </p>
                      <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
                          <span className="inline-flex sm:mt-0.5 min-w-9 h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-xs font-extrabold text-white shadow-md ring-1 ring-white/20">!</span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> the State Chief Information Commissioner or a State Information Commissioner may be removed in the manner specified under section 17.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footnote 1 */}
                  <div className="group relative overflow-hidden rounded-xl border border-amber-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-amber-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-amber-300 to-orange-400"></div>
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed pl-0.5">
                      <span className={footPill}><span className="font-semibold text-yellow-200">1.</span></span> Subs. by Act 24 of 2019, s. 3, for, &quot;for a term of five years from the date on which he enters upon his office&quot;(w.e.f. 24-10-2019).
                    </p>
                  </div>

                  {/* Subsection (5) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="pl-0.5">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3 flex items-center justify-center flex-col">
                        <span className={numAmend}><span className="text-amber-50">5</span></span> The salaries and allowances payable to and other terms and conditions of service of the State Chief Information Commissioner and the State Information Commissioners shall be such as may be prescribed by the Central Government:
                      </p>
                      <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
                          <span className="inline-flex sm:mt-0.5 min-w-9 h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-xs font-extrabold text-white shadow-md ring-1 ring-white/20">!</span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> the salaries, allowances and other conditions of service of the State Chief Information Commissioner and the State Information Commissioners shall not be varied to their disadvantage after their appointment:
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
                          <span className="inline-flex sm:mt-0.5 min-w-9 h-9 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-xs font-extrabold text-white shadow-md ring-1 ring-white/20">!</span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided further that</span> the State Chief Information Commissioner and the State Information Commissioners appointed before the commencement of the Right to Information (Amendment) Act, 2019 shall continue to be governed by the provisions of this Act and the rules made there under as if the Right to Information (Amendment) Act, 2019 had not come into force.]
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (6) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed pl-0.5 flex items-center justify-center flex-col">
                      <span className={numBlue}>6</span> The State Government shall provide the State Chief Information Commissioner and the State Information Commissioners with such officers and employees as may be necessary for the efficient performance of their functions under this Act, and the salaries and allowances payable to and the terms and conditions of service of the officers and other employees appointed for the purpose of this Act shall be such as may be prescribed.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default RTIAct2005Section16
