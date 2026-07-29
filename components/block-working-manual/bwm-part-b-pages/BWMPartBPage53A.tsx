"use client"
import React from 'react'

const BWMPartBPage53A: React.FC = () => {
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
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              When to Obtain Line Clear
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-indigo-300 mb-4">Block Instrument Timings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">3.12. &apos;Is Line clear&apos; in case of Diodo Handle type block instruments and &apos;Train Going To&apos; indication in respect of Kyosan / Podanur Push button block instruments – when to be obtained:</h3>
                    
                    <div className="space-y-4">
                      {/* At train starting stations */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          At train starting stations, <span className="text-blue-300 font-semibold">&apos;Line clear&apos;</span> in case of Handle type block instruments and <span className="text-blue-300 font-semibold">TGT</span> indication in case of Push button block instruments, shall be obtained on the respective block instrument <span className="text-yellow-300 font-semibold">five minutes before</span> the departure time of the train, if the train is ready to start.
                        </p>
                      </div>

                      {/* At intermediate stations */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <ul className="mb-4 space-y-3">
                          {/* Icon: 👀 */}
                          <li className="flex items-start gap-3">
                            <span className="text-2xl" aria-label="Eye">👀</span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              For all stopping trains at intermediate stations (halt less than five minutes), obtain <span className="text-blue-300 font-semibold">&apos;Line clear&apos;</span> (Handle type block) or <span className="text-blue-300 font-semibold">TGT</span> indication (Push button block) <span className="text-green-300 font-semibold">when the train is sighted</span>.
                            </span>
                          </li>
                          {/* Icon: ⏰ */}
                          <li className="flex items-start gap-3">
                            <span className="text-2xl" aria-label="Clock">⏰</span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              For trains booked to run through the station, obtain <span className="text-blue-300 font-semibold">&apos;Line clear&apos;</span> or <span className="text-blue-300 font-semibold">TGT</span> indication <span className="text-yellow-300 font-semibold">seven minutes before</span> due passing time,
                              counting from when the <span className="text-blue-300 font-semibold">&apos;Line clear&apos;</span>/<span className="text-blue-300 font-semibold">TOL</span> indication is obtained.
                              <br />
                              <span className="block mt-1">
                                <span className="text-amber-400 font-semibold">Note:</span> If the running time is less than seven minutes, indication should be obtained immediately after getting the <span className="text-blue-300 font-semibold">&apos;Line clear&apos;</span>/<span className="text-blue-300 font-semibold">TOL</span> indication.
                              </span>
                            </span>
                          </li>
                        </ul>
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

export default BWMPartBPage53A