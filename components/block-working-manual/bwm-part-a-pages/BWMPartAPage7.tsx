"use client"
import React from 'react'

const BWMPartAPage7 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Train Precedence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Priority system for train operations and scheduling
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">2.4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Precedence of Trains
                    </h3>

                    <div className="space-y-6">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-blue-400 text-xl mt-1">🚂</span>
                          <div>
                            <h4 className="text-xl font-semibold text-blue-300 mb-2">Controlled Sections</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              On controlled sections, trains shall be worked strictly in accordance with the orders of the Controller.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-indigo-400 text-xl mt-1">📋</span>
                          <div>
                            <h4 className="text-xl font-semibold text-indigo-300 mb-4">Non-Controlled Sections Priority Order</h4>
                            <p className="text-gray-200 lg:text-lg text-base mb-4 leading-relaxed">
                              On non-controlled sections or in the event of breakdown of control, the trains shall be given precedence over each other in the following order:
                            </p>
                            <div className="grid gap-2">
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-red-400 font-bold text-sm min-w-[20px]">1st</span>
                                <span className="text-gray-200">Relief trains or light engines proceeding to accident spot</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-orange-400 font-bold text-sm min-w-[20px]">2nd</span>
                                <span className="text-gray-200">Postal specials</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-yellow-400 font-bold text-sm min-w-[20px]">3rd</span>
                                <span className="text-gray-200">Mail and Express trains</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-green-400 font-bold text-sm min-w-[20px]">4th</span>
                                <span className="text-gray-200">Troop trains</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-blue-400 font-bold text-sm min-w-[20px]">5th</span>
                                <span className="text-gray-200">Passenger trains, including Rail Cars</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-indigo-400 font-bold text-sm min-w-[20px]">6th</span>
                                <span className="text-gray-200">Specials engaged by public</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-purple-400 font-bold text-sm min-w-[20px]">7th</span>
                                <span className="text-gray-200">Inspection trains, whether working on time table or not and light engines when not going to an accident spot</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-pink-400 font-bold text-sm min-w-[20px]">8th</span>
                                <span className="text-gray-200">Mixed trains</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-teal-400 font-bold text-sm min-w-[20px]">9th</span>
                                <span className="text-gray-200">Parcel trains</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-cyan-400 font-bold text-sm min-w-[20px]">10th</span>
                                <span className="text-gray-200">Relief trains returning from accident spot (If with injured passengers higher priority shall be given)</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-lime-400 font-bold text-sm min-w-[20px]">11th</span>
                                <span className="text-gray-200">Fast through goods trains</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-emerald-400 font-bold text-sm min-w-[20px]">12th</span>
                                <span className="text-gray-200">Work trains/Road goods trains and Empty passenger trains</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <span className="text-violet-400 font-bold text-sm min-w-[20px]">13th</span>
                                <span className="text-gray-200">Material trains</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-purple-400 text-xl mt-1">⚖️</span>
                          <div>
                            <h4 className="text-xl font-semibold text-purple-300 mb-2">Block Section Priority Rules</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Owing to the irregular running of trains, if two or more trains are ready to start from the same end of a block section, preference shall be given to the trains standing higher in the table of precedence. If both trains have the same order of precedence, preference shall be given to the one having the greater distance to run.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section d */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-pink-400 text-xl mt-1">⏱️</span>
                          <div>
                            <h4 className="text-xl font-semibold text-pink-300 mb-3">Detention Rules to Avoid Excessive Delays</h4>
                            <p className="text-gray-200 lg:text-lg text-base mb-4 leading-relaxed">
                              In order to avoid excessive detention to trains of lesser importance:
                            </p>
                            <div className="space-y-3">
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm">
                                  <span className="text-blue-300 font-semibold">i)</span> A Mail or Express train running less than ten minutes late may be detained upto a total of ten minutes in order to save a delay of thirty minutes or more to a passenger train or forty five minutes to a goods train.
                                </p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm">
                                  <span className="text-blue-300 font-semibold">ii)</span> A passenger train running less than ten minutes late may be detained upto a total of ten minutes in order to avoid a delay of thirty minutes or more to a goods train.
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

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Priority Guidelines
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚨</span>
                  <span className="text-gray-200 lg:text-lg text-base">Relief trains highest priority</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Postal services priority</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚆</span>
                  <span className="text-gray-200 lg:text-lg text-base">Express & Mail priority</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Controller orders final</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📏</span>
                  <span className="text-gray-200 lg:text-lg text-base">Distance consideration</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <span className="text-gray-200 lg:text-lg text-base">Strategic detention rules</span>
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

export default BWMPartAPage7