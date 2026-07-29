"use client"
import React from 'react'

const BWMPartBPage19B: React.FC = () => {
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
              CHAPTER - II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">PRECEDENCE OF TRAINS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-6">2.5. Precedence of trains:</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">a</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            On controlled sections, trains shall be worked strictly in accordance with the orders of the Controller.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">b</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-4">On non-controlled sections or in the event of breakdown of control, the trains shall be given precedence over each other in the following order:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">1st</span> Relief trains or light engines proceeding to the site of an accident.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">2nd</span> Postal specials.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">3rd</span> Mail and Express trains.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">4th</span> Troop trains.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">5th</span> Passenger trains, including rail cars.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">6th</span> Specials engaged by public.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">7th</span> Inspection trains, whether working on time table or not and light engines when not going to an accident spot</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">8th</span> Mixed trains.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">9th</span> Parcel trains.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">10th</span> Relief trains returning from the site of accident (If with injured passengers higher priority shall be given.)</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">11th</span> Fast through goods trains.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">12th</span> Work trains/Road goods trains and empty passenger stock trains.</p>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed"><span className="font-bold text-blue-300">13th</span> Material trains</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">c</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            Owing to the irregular running of trains, if two or more trains are ready to start from the same end of a block section, preference shall be given to the trains standing higher in the table of precedence. If both trains have the same order of precedence, preference shall be given to the one having the greater distance to run.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">d</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-4">In order to avoid excessive detention to trains of lesser importance:</h4>
                            <div className="space-y-3 ml-2">
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">i</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  A Mail or Express train running less than ten minutes late may be detained up to a total of ten minutes in order to save a delay of thirty minutes or more to a passenger train or forty five minutes to a goods train.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">ii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  A passenger train running less than ten minutes late may be detained up to a total of ten minutes in order to avoid a delay of thirty minutes or more to a goods train.
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

export default BWMPartBPage19B