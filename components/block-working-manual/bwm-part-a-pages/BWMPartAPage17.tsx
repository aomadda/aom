"use client"
import React from 'react'

const BWMPartAPage17 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Shunting between the Last Stop Signal and opposing First Stop Signal at a class &apos;B&apos; single line station equipped with two aspect signals</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              General Rule 8.11 - Shunting operations at class &apos;B&apos; stations
            </p>    
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Rule Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">3.4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="space-y-4">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-400 font-bold text-xl">a)</span> At a class &apos;B&apos; station on single line, the line between the Last Stop Signal and the opposing Outer signal shall not be obstructed, unless a railway servant specially appointed in this behalf by the Station Master is in charge of the operations and unless:
                        </p>
                        
                        <div className="space-y-3 ml-1">
                          <div className="flex items-start gap-3">
                            <span className="mt-1 text-blue-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base">
                              The block section into which the shunting is to take place is clear of an approaching train and all relevant signals are at &apos;ON&apos; position,
                            </span>
                          </div>
                          <div className="text-center text-blue-300 font-semibold lg:text-lg text-base">or</div>
                          <div className="flex items-start gap-3">
                            <span className="mt-1 text-indigo-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base">
                              If an approaching train has arrived at the Outer signal, the Station Master has personally satisfied himself that the train has been brought to a dead stop at the signal.
                            </span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/20 mt-4">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed italic">
                            &quot;Provided that the line shall not be obstructed under clause (ii) in thick, foggy or tempestuous weather impairing visibility, or during night or at stations where the Outer signal concerned is not visible from the Station Master&apos;s office&quot;.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* T.806 Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="text-indigo-400 font-bold text-xl">b)</span> T.806 alone shall be given where shunt key is not available. Shunt key, where available, shall be given in addition to T.806.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tail Lamp Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="text-purple-400 font-bold text-xl">c)</span> A tail lamp/tail board shall be placed on the rear most vehicle or on the engine if no vehicles are attached on the side facing the station in rear so as to serve as an indication of the complete return of all the vehicles before the &apos;Cancel last signal&apos; is given.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 mt-6">
              <div className="flex flex-col gap-3 items-center space-y-4 relative">
                
                <div className="flex-1">
                  <h3 className="lg:text-2xl text-xl font-semibold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                    3.4.1 Shunting Between the Last Stop Signal and Opposing First Stop Signal<br />
                    <span className="text-base font-medium text-indigo-300">(Class ‘B’ Single Line Station with Multiple Aspect Signals – G.R. 8.12)</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4 rounded-xl border border-blue-400/20">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold text-xl">a)</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          The line outside the Last Stop Signal or Shunting Limit Board and up to the opposing First Stop Signal shall not be obstructed unless a railway servant, specially appointed for this purpose by the Station Master, is in charge of the shunting operations. Additionally, the block section into which shunting is to take place must be clear of any approaching train.
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-xl border border-indigo-400/20">
                      <div className="flex items-start gap-3">
                        <span className="text-indigo-400 font-bold text-xl">b)</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          T.806 token shall be given alone where the shunt key is not available. Where the shunt key is available, it shall be given in addition to T.806.
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-400/20">
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold text-xl">c)</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          A tail lamp/tail board shall be placed on the rear most vehicle or on the engine if no vehicles are attached on the side facing the station in rear so as to serve as an indication of the complete return of all the vehicles before the &apos;Cancel last signal&apos; is given.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-4 rounded-xl border border-pink-400/20 mt-6">
                    
                  
                    <h4 className="lg:text-2xl text-xl font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center justify-center text-center">
                      <span className="text-pink-400 text-xl mt-1 text-center flex items-center justify-center gap-3">🚧</span>
                      <span>
                        3.4.2 Shunting Beyond the First Stop Signal on Single Line
                        <br />
                        <span className="text-base font-medium text-indigo-300">
                          (Applicable to Two Aspect &amp; Multiple Aspect Signal Territory)
                        </span>
                      </span>
                      <span className="text-base font-medium text-indigo-300">
                        (Applicable to Two Aspect & Multiple Aspect Signal Territory)
                      </span>
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-1" role="img" aria-label="permission">✅</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          When Station Master <span className="font-semibold text-white">&apos;X&apos;</span> needs to shunt a train partly or fully outside the First Stop Signal, they must first obtain <span className="font-semibold text-white">&apos;Line Clear&apos;</span> from Station Master <span className="font-semibold text-white">&apos;Y&apos;</span>. The reason for this shunting movement must be clearly explained and recorded in the Train Signal Registers at both <span className="font-semibold text-white">&apos;X&apos;</span> and <span className="font-semibold text-white">&apos;Y&apos;</span>.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-1" role="img" aria-label="train">🚂</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          This shunting movement is to be treated as a <span className="font-semibold text-white">train movement</span>.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-1" role="img" aria-label="document">📝</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          The Station Master must issue to the Driver an <span className="font-semibold text-white">&apos;Authority to Proceed&apos;</span> applicable to the section, along with a <span className="font-semibold text-white">handwritten memo</span> for the return to Station <span className="font-semibold text-white">&apos;X&apos;</span>.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-1" role="img" aria-label="signal">🚦</span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          For this purpose, both the <span className="font-semibold text-white">departure</span> and <span className="font-semibold text-white">reception signals</span> may be taken <span className="font-semibold text-white">‘OFF’</span>.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Requirements
            </h3>
            <div className="grid lg:grid-cols-3 gap-2 lg:gap-6">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚦</span>
                <span className="text-gray-200 lg:text-lg text-base">Signals at &apos;ON&apos; position</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔑</span>
                <span className="text-gray-200 lg:text-lg text-base">T.806 and shunt key</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💡</span>
                <span className="text-gray-200 lg:text-lg text-base">Tail lamp/tail board</span>
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

export default BWMPartAPage17