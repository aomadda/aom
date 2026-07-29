"use client"
import React from 'react'

const AMChapterPage103B = () => {  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER IX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              INVESTIGATION AND INQUIRIES
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 907 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">907</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Schedule for completion of Accident Inquiry
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Introduction */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                    <div className="space-y-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-blue-400 text-xl mt-1">⏰</span>
                        <div className="space-y-4">
                          <p className="text-gray-200 leading-relaxed">
                            In all accidents where inquiries are necessary, they must be held as soon as possible after the accident and the proceedings submitted without delay. The time-table counting &apos;D&apos; as the day of accident will be as under:
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Schedule Table */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                    <div className="space-y-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-green-400 text-xl mt-1">📅</span>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                            <h4 className="text-lg font-bold text-green-300 mb-3 text-center">Accident Inquiry Schedule</h4>
                          </div>
                          
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left text-gray-200 border border-white/10 rounded-lg overflow-hidden">
                              <thead className="bg-gradient-to-r from-blue-500/30 to-indigo-500/30">
                                <tr>
                                  <th className="px-3 py-2 font-semibold">S.No.</th>
                                  <th className="px-3 py-2 font-semibold">Target</th>
                                  <th className="px-3 py-2 font-semibold">Schedule / Remarks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">1</td>
                                  <td className="px-3 py-2 font-bold text-blue-300">D</td>
                                  <td className="px-3 py-2">Date of Accident.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">2</td>
                                  <td className="px-3 py-2 font-bold text-green-300">D+1</td>
                                  <td className="px-3 py-2">DRM /GM shall order the inquiry, if no particular department accepts the responsibility.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">3</td>
                                  <td className="px-3 py-2 font-bold text-purple-300">D+3</td>
                                  <td className="px-3 py-2">Committee shall commence the inquiry into the accident.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">4</td>
                                  <td className="px-3 py-2 font-bold text-orange-300">D+7</td>
                                  <td className="px-3 py-2">Committee shall submit the inquiry report to DRM /GM.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">5</td>
                                  <td className="px-3 py-2 font-bold text-pink-300">D+10</td>
                                  <td className="px-3 py-2">Acceptance of inquiry report by the DRM/GM.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">6</td>
                                  <td className="px-3 py-2 font-bold text-teal-300">D+15</td>
                                  <td className="px-3 py-2">Inquiry reports will be finalized by CSO/AGM.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">7</td>
                                  <td className="px-3 py-2 font-bold text-indigo-300">D+20</td>
                                  <td className="px-3 py-2">Submission of inquiry report to CRS with remarks. A copy of findings of the Inquiry Report to be sent to Railway Board.</td>
                                </tr>
                                <tr className="border-t border-white/10">
                                  <td className="px-3 py-2">8</td>
                                  <td className="px-3 py-2 font-bold text-yellow-300">D+90</td>
                                  <td className="px-3 py-2">DAR action against officials held responsible to be completed</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          {/* Notes */}
                          <div className="space-y-4 mt-6">
                            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/30">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-yellow-300 text-xl">📝</span>
                                <span className="text-lg font-semibold text-yellow-200">Note:</span>
                              </div>
                              <p className="text-gray-200 text-sm">
                                CSO for review cases only.<br/>
AGM for accident cases in which foreign railway staff are held responsible.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                              <div className="flex flex-col items-center gap-2 mb-2">
                                <span className="text-blue-300 text-xl">ℹ️</span>
                                <span className="text-lg font-semibold text-blue-200">Additional Notes:</span>
                              </div>
                              <div className="space-y-2">
                                <p className="text-gray-200 text-sm">
                                  <span className="font-bold text-blue-100">a)</span> DRM/GM may decide to have the inquiry conducted even in cases where a particular department accepts the responsibility for enabling thorough review of associated systems involved in the accident.
                                </p>
                                <p className="text-gray-200 text-sm">
                                  <span className="font-bold text-blue-100">b)</span> Time limits prescribed are the upper limits. Railway should make efforts to finalize the Inquiry Report and DAR action as early as possible but not beyond the prescribed time limits.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default AMChapterPage103B