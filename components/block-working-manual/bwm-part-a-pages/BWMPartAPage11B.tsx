"use client"
import React from 'react'

const BWMPartAPage11B = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Station Masters handing over /taking over charge
            </h1>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">2.9</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="space-y-6">
                      {/* Clause a) */}
                      <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30 group hover:shadow-xl hover:bg-white/15 transition-all duration-300 overflow-x-auto">
                        <div className="flex items-start gap-4">
                          <span className="flex-shrink-0 text-blue-400 text-2xl mt-1 transition-transform group-hover:scale-125">⏳</span>
                          <div className="w-full">
                            <h4 className="text-2xl font-semibold text-blue-200 mb-2 flex items-center gap-2 whitespace-normal">
                              Continuation of Duty
                            </h4>
                            <div className="text-gray-100 lg:text-lg text-base leading-relaxed break-words">
                              <p className="mb-3">
                                The Station Master who enters a train in the Train Signal Register must remain on duty until every record for that train is fully completed.
                              </p>
                              <div className="flex items-start gap-2 mb-2">
                                <span className="text-blue-300 mt-1">🚦</span>
                                <span className="block flex-1 break-words whitespace-pre-line overflow-x-auto">
                                  If the Station Master requests ‘Line Clear’ for a train to enter a block section, they must be on duty until the ‘Train Out of Block Section’ signal is both received and acknowledged.
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-300 mt-1">🔔</span>
                                <span className="block flex-1 break-words whitespace-pre-line overflow-x-auto">
                                  Similarly, the Station Master who gives ‘Line Clear’ must stay on duty until the train has arrived and the ‘Train Out of Block Section’ signal is given and acknowledged.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Clause b) */}
                      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-green-400/20">
                        <div className="flex items-start gap-3">
                          <span className="text-green-400 text-xl mt-1">📝</span>
                          <div>
                            <h4 className="text-xl font-semibold text-green-300 mb-2">b) Duty Change Procedure</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              A line shall be drawn across the Train Signal Register whenever Station Masters change duty. The Station Master who is going off duty shall sign and enter the time above the line and the Station Master coming on duty shall sign and enter the time below the line.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Clause c) */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                        <div className="flex items-start gap-3">
                          <span className="text-purple-400 text-xl mt-1">🚂</span>
                          <div>
                            <h4 className="text-xl font-semibold text-purple-300 mb-2">c) Block Section Occupancy</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                              In the case of a train working in the block section, clause (a) need not be observed but the entry in the Train Signal Register so far made shall be initialled by both the Station Masters. An entry, as under, shall be made immediately below the entry for the train and above the line <span className="text-purple-400">see Clause (b)</span>
                            </p>
                            <div className="bg-black/20 p-4 rounded-lg border border-purple-400/30">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed font-mono">
                                &quot;Block section is still occupied by train(number and description)<br/>  
                                . ..................................................................... working on line.&quot;
                              </p>
                            </div>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed mt-4">
                              Both the Station Masters shall sign this entry as required in clause (b) above. An entry to this effect shall also be made in the Station Diary and initialled by both the Station Masters.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Clause d) */}
                      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/20">
                        <div className="flex items-start gap-3">
                          <span className="text-orange-400 text-xl mt-1">⚠️</span>
                          <div>
                            <h4 className="text-xl font-semibold text-orange-300 mb-2">d) Emergency Situations</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The procedure detailed in clause (c) above shall also be applicable in cases of accidents, engine failures, etc., when there is a likelihood of trains getting abnormally delayed and it is not possible for the same person/persons to continue to remain on duty to complete all the transactions for a train for which he/they had granted/obtained &apos;Line Clear&apos;.
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

export default BWMPartAPage11B