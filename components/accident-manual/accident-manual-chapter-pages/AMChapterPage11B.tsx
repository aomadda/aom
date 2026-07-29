"use client"
import React from 'react'

const AMChapterPage11B = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Rule 203</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">EQUIPMENT FAILURE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Classification of equipment failures in railway operations
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-6 px-2 border border-white/20">
            <div className="space-y-8">
              {/* Class J - Failure of engine and rolling stock */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">J</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                      </span>
                      1. Class &apos;J&apos; – Failure of engine and rolling stock
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.1</h4>
                        <p className="text-white">Failure of engine hauling a train carrying passengers.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.2</h4>
                        <p className="text-white">Failure of engine hauling a train not carrying passengers, or failure of light engine.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.3</h4>
                        <p className="text-white">Parting of train carrying passengers.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.4</h4>
                        <p className="text-white">Parting of a train not carrying passengers.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.5</h4>
                        <p className="text-white">Failure of rolling stock, such as failure of tyres, wheels, axles, or braking apparatus etc., on a train carrying passengers and leading to detachment of rolling stock from the train.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.6</h4>
                        <p className="text-white">Failure of rolling stock, such as failure of tyres, wheels, axles, or braking apparatus etc., on a train not carrying passenger leading to detachment of rolling stock/stocks from the train.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.7</h4>
                        <p className="text-white">Failure of rolling stock, such as failure of tyres, wheels, axles, or braking apparatus etc., on a train carrying passengers and not leading to detachment of rolling stock from the train.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.8</h4>
                        <p className="text-white">Failure of rolling stock, such as failure of tyres, wheels, axles, or braking apparatus etc., on a train not carrying passengers, and not leading to detachment of rolling stock from the train.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.9</h4>
                        <p className="text-white">A train or a portion of a train running away or out of control.</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">J.10</h4>
                        <p className="text-white">Poor brake power in a train but not covered in class J.9.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class K - Failure of Permanent Way */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">K</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-green-400 to-green-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      2. Class &apos;K&apos; – Failure of Permanent Way
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.1</h4>
                        <p className="text-white">Buckling of track.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.2</h4>
                        <p className="text-white">Weld failure.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.3</h4>
                        <p className="text-white">Rail fracture.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.4</h4>
                        <p className="text-white">An unusually slack or rough running or heavy lurch experienced by Loco Pilots of running trains while passing over any length of permanent way leading to interruption in train running.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.5</h4>
                        <p className="text-white">Failure of railway tunnel, bridge, viaduct/formation/cutting, culvert, etc.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.6</h4>
                        <p className="text-white">Damage to track of such a nature other than those covered under class K.1 to K.5 so as to render it temporarily unsafe for passage of trains or likely to cause delay to traffic for a period above threshold value.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">K.7</h4>
                        <p className="text-white">Damage to track of such a nature as to render it temporarily unsafe for the passage of trains or likely to cause delays to traffic not covered under class K.1 to K.6.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <p className="text-yellow-200 font-semibold">Note:</p>
                        <p className="text-gray-200">In the above classification, those cases detected during regular maintenance and not affecting train movement will not be counted.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class L - Failure of Electrical equipment */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">L</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      3. Class &apos;L&apos; – Failure of Electrical equipment
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">L.1</h4>
                        <p className="text-white">Snapping of or any damage to OHE, requiring switching off of OHE for more than three minutes.</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">L.2</h4>
                        <p className="text-white">No OHE for more than three minutes.</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">L.3</h4>
                        <p className="text-white">Pantograph entanglement not covered under J.1 and J.2</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">L.4</h4>
                        <p className="text-white">Defect in AC or other electrical equipment leading to detachment of rolling stock from a train.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class M - Failure of Signalling and Telecommunication Equipment */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                      </span>
                      4. Class &apos;M&apos; - Failure of Signalling and Telecommunication Equipment.
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.1</h4>
                        <p className="text-white">Failure of part or complete panel/RRI.</p>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.2</h4>
                        <p className="text-white">Failure of interlocking, track circuit or axle counter.</p>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.3</h4>
                        <p className="text-white">Failure of block instruments.</p>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.4</h4>
                        <p className="text-white">Failure of point machine and related equipment.</p>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.5</h4>
                        <p className="text-white">Failure of signal, point.</p>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.6</h4>
                        <p className="text-white">Failure of control/station communication for more than fifteen minutes.</p>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">M.7</h4>
                        <p className="text-white">Failure of station to station communication or station to level crossing gate communication for more than 15 minutes.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <p className="text-yellow-200 font-semibold">Note:</p>
                        <p className="text-gray-200">Signaling and telecommunication failures which were not informed to S&T department will not be taken into account for failure.</p>
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

export default AMChapterPage11B