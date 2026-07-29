"use client"
import React from 'react'

const AMChapterPage18B = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">ENGINEERING STAFF</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of engineering staff during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Engineering Staff Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">308</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      Engineering Staff Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Duty 1 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">1.</span>
                              <div>
                                <span className="text-white">All Engineering officials shall report to the senior most Officer at site or take charge if he happens to be the senior most. The staff who are not on duty or travelling by train shall assist in rescue and relief operations.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 2 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">2.</span>
                              <div>
                                <span className="text-white">Render assistance to give medical relief / treatment to injured passengers. Make available all transport facilities to the injured passengers and assist in rescue of trapped passengers.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 3 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">3.</span>
                              <div>
                                <span className="text-white">Arrange divers with diving equipment for under water rescue.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 4 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">4.</span>
                              <div>
                                <span className="text-white">Safeguard and preserve clues till Police or RPF personnel arrive at site and take charge. Collect evidence in the form of track readings and rolling stock measurements.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 5 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">5.</span>
                              <div>
                                <span className="text-white">Ensure water supply at adjoining stations and arrange for supply at accident site.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 6 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">6.</span>
                              <div>
                                <span className="text-white">Cutting equipment available with the Section Engineers (P.Way) and Section Engineer (Bridges) and workshops to be moved to the site for supplementing the ones available in the B.D. special.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 7 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">7.</span>
                              <div>
                                <span className="text-white">Assist other departments in establishing communications and power supply at site, including hiring of Diesel generator sets for augmenting the power supply arrangements.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 8 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">8.</span>
                              <div>
                                <span className="text-white">Assist in transhipment of passengers and their luggage.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 9 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">9.</span>
                              <div>
                                <span className="text-white">Provide tents and other temporary shelter at site for protection against elements of weather.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 10 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">10.</span>
                              <div>
                                <span className="text-white">Ensure track is restored for traffic at the earliest.</span>
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

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Engineering Staff Duties Summary
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👷</span>
                <span className="text-gray-200 lg:text-lg text-base">Report to senior officer and assist in rescue operations</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🏥</span>
                <span className="text-gray-200 lg:text-lg text-base">Provide medical assistance and transport facilities</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🏊</span>
                <span className="text-gray-200 lg:text-lg text-base">Arrange divers for underwater rescue</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🛡️</span>
                <span className="text-gray-200 lg:text-lg text-base">Preserve clues and collect evidence</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💧</span>
                <span className="text-gray-200 lg:text-lg text-base">Ensure water supply at stations and accident site</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔧</span>
                <span className="text-gray-200 lg:text-lg text-base">Move cutting equipment to accident site</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Establish communications and power supply</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚚</span>
                <span className="text-gray-200 lg:text-lg text-base">Assist in passenger and luggage transhipment</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⛺</span>
                <span className="text-gray-200 lg:text-lg text-base">Provide tents and temporary shelter</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🛤️</span>
                <span className="text-gray-200 lg:text-lg text-base">Restore track for traffic at earliest</span>
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

export default AMChapterPage18B