"use client"
import React from 'react'

const AMChapterPage12 = () => {
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
              CHAPTER-II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Rule 204</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">UNUSUAL INCIDENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Classification of unusual incidents in railway operations
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-6 px-2 border border-white/20">
            <div className="space-y-8">
              {/* Class N - Train Wrecking or attempted train wrecking or Sabotage */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">N</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      1. Class &apos;N&apos; - Train Wrecking or attempted train wrecking or Sabotage to a train
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 lg:p-4 p-2 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">N.1</h4>
                        <p className="text-white">Train wrecking or attempted wrecking or Bomb Blast or Explosion or Hijacking or sabotage to a train carrying passengers with or without loss of human life and / or grievous hurt and / or damage to Railway property.</p>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 lg:p-4 p-2 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">N.2</h4>
                        <p className="text-white">Train wrecking or attempted wrecking or Bomb Blast or Explosion or Hijacking or sabotage to a train not carrying passengers with or without loss of human life and / or grievous hurt and / or damage to Railway property.</p>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 lg:p-4 p-2 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">N.3</h4>
                        <p className="text-white">Train wrecking or attempted wrecking or Bomb Blast or Explosion or sabotage to signaling and track or forceful confinement of train running staff on duty and / or passengers but not involving a train.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class P - Casualties */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      2. Class &apos;P&apos; – Casualties
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">P.1</h4>
                        <p className="text-white">Person or persons falling out of a running train resulting in loss of human life or grievous hurt.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">P.2</h4>
                        <p className="text-white">Person or persons run over or knocked down by a train resulting in loss of human life or grievous hurt.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">P.3</h4>
                        <p className="text-white">Person or persons falling out of a running train or knocked down by a train or engine or railway vehicle but not resulting in loss of human life or grievous hurt.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class Q - Other incidents */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">Q</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      3. Class &apos;Q&apos; – Other incidents
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Q.1</h4>
                        <p className="text-white">Accidental or natural death or grievous hurt to any person, whether passenger/ railway employee/ trespasser (or any other person), within railway premises (excluding railway quarters).</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Q.2</h4>
                        <p className="text-white">Murder or suicide in a train or within railway premises.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Q.3</h4>
                        <p className="text-white">Robbery, attempted robbery, theft or attempted theft in railway premises, including trains.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Q.4</h4>
                        <p className="text-white">Fire or explosion within railway premises but not involving trains.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Q.5</h4>
                        <p className="text-white">Fire or explosion resulting in damage to railway bridge and viaduct etc.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Q.6</h4>
                        <p className="text-white">Blockade to train services due to agitation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class R - Miscellaneous */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-gray-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">R</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-gray-400 to-gray-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                      4. Class &apos;R&apos; – Miscellaneous
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 lg:p-4 p-2 rounded-lg border border-gray-400/20">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">R.1</h4>
                        <p className="text-white">Vehicle or vehicles running away.</p>
                      </div>

                      <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 lg:p-4 p-2 rounded-lg border border-gray-400/20">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">R.2</h4>
                        <p className="text-white">Train running over cattle.</p>
                      </div>

                      <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 lg:p-4 p-2 rounded-lg border border-gray-400/20">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">R.3</h4>
                        <p className="text-white">Floods, breaches and landslides etc., resulting in interruption of traffic in an important through line for more than the threshold value.</p>
                      </div>

                      <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 lg:p-4 p-2 rounded-lg border border-gray-400/20">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">R.4</h4>
                        <p className="text-white">Other cases of floods, breaches, landslides etc., resulting in interruption to traffic.</p>
                      </div>

                      <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 lg:p-4 p-2 rounded-lg border border-gray-400/20">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">R.5</h4>
                        <p className="text-white">Any accident not included in foregoing classifications.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 p-4 rounded-xl border border-blue-400/20">
                <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-3">
                  
                  Important Notes
                </h3>
                <div className="space-y-4 text-gray-200">
                  <div className="bg-gradient-to-r from-blue-500/5 to-blue-600/5 lg:p-4 p-2 rounded-lg border border-blue-400/10">
                    <p className="text-blue-200 font-semibold">Note: 1.</p>
                    <p className="text-white">The term &apos;cattle&apos; does not include sheep, goats, pigs, dogs, donkeys, rams, ewe and lambs.</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/5 to-blue-600/5 lg:p-4 p-2 rounded-lg border border-blue-400/10">
                    <p className="text-blue-200 font-semibold">Note: 2.</p>
                    <p className="text-white">A train includes a trolley, lorry, motor trolley, when worked under the rules for working of trains.</p>
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

export default AMChapterPage12