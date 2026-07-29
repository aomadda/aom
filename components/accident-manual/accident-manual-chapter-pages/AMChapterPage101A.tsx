"use client"
import React from 'react'

const AMChapterPage101A = () => {
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
              {/* Section 903 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">903</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Object of Accident Inquiry
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Objectives List */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 text-lg font-bold">a)</span>
                        <p className="text-gray-200 leading-relaxed">
                          To ascertain the correct cause of accident.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 text-lg font-bold">b)</span>
                        <p className="text-gray-200 leading-relaxed">
                          To fix responsibility for the accident. (The responsibility shall be fixed at appropriate level and should be specific i.e., primary, secondary and blameworthy. While fixing individual responsibility, extenuating circumstances, if any shall be mentioned).
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 text-lg font-bold">c)</span>
                        <p className="text-gray-200 leading-relaxed">
                          To formulate proposals for preventing recurrence of similar accidents.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/30">
                      <div className="flex items-start gap-3">
                        <span className="text-orange-400 text-lg font-bold">d)</span>
                        <p className="text-gray-200 leading-relaxed">
                          To determine whether there was any laxity in working to which the accident could be attributed.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/30">
                      <div className="flex items-start gap-3">
                        <span className="text-pink-400 text-lg font-bold">e)</span>
                        <p className="text-gray-200 leading-relaxed">
                          To examine whether there has been any laxity / delay in rendering rescue, relief and restoring through lines of communication.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-teal-400/30">
                      <div className="flex items-start gap-3">
                        <span className="text-teal-400 text-lg font-bold">f)</span>
                        <p className="text-gray-200 leading-relaxed">
                          To suggest improvement in system, practices and procedures.
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

export default AMChapterPage101A