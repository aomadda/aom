"use client"
import React from 'react'

const AMChapterPage16B = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">TRAIN SUPERINTENDENT / TRAVELLING TICKET EXAMINER</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of train staff during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* TTE Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">305</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      TTE Duties During Accidents
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Duty 1 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">1.</span>
                              <div>
                                <span className="text-white">Ascertain if any Doctor is travelling by seeing the reservation chart and making verbal enquiries and arrange for First aid to the injured passengers.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 2 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">2.</span>
                              <div>
                                <span className="text-white">Along with other TTEs in the train, he should assist the injured passengers to come out of their coaches. The TTEs should also help passengers trapped in the coaches to come out of the coaches.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 3 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">3.</span>
                              <div>
                                <span className="text-white">Unclaimed luggage and other belongings should be handed over to the GRP with full details and acknowledgement obtained.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 4 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">4.</span>
                              <div>
                                <span className="text-white">Prepare list of dead and injured. The list should be classified as under:</span>
                                <div className="ml-1 mt-2 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-red-400 text-lg">•</span>
                                    <span className="text-red-200 font-semibold">DEAD</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-orange-400 text-lg">•</span>
                                    <span className="text-orange-200 font-semibold">GRIEVOUSLY INJURED</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-yellow-400 text-lg">•</span>
                                    <span className="text-yellow-200 font-semibold">SIMPLE INJURED</span>
                                  </div>
                                </div>
                                <p className="text-white mt-2">Details of the dead and injured should be obtained from the reservation chart, tickets held (to and from) or co-passengers. Assistance of the Police travelling in the train to be obtained also for identification.</p>
                              </div>
                            </div>
                          </div>

                          {/* Duty 5 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">5.</span>
                              <div>
                                <span className="text-white">The following details should be collected:</span>
                                <div className="ml-1 mt-2 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">a)</span>
                                    <span className="text-white">Tickets of the Passengers travelling (to and from)</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">b)</span>
                                    <span className="text-white">Ticket Numbers – Class</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">c)</span>
                                    <span className="text-white">Coach Number and its position from the engine</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">d)</span>
                                    <span className="text-white">Address of the passengers</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">e)</span>
                                    <span className="text-white">Nature of injury (Simple, Grievous)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty 6 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">6.</span>
                              <div>
                                <span className="text-white">He should keep record of the number of dead and injured (simple, grievous) if they are already transported by local people to the nearest hospital before the Railway Doctors had arrived.</span>
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

export default AMChapterPage16B