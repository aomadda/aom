"use client"
import React from 'react'

const AMChapterPage16A = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CONTROLLING STATION MASTER</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of the controlling station master during accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Controlling Station Master Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">304</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Controlling Station Master Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Main Duty */}
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                              <h4 className="text-lg font-semibold text-green-300 mb-3 flex flex-col items-center justify-center gap-3">
                                <span className="bg-gradient-to-r from-green-400 to-green-500 p-2 rounded-lg">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </span>
                                Primary Responsibility
                              </h4>
                              <p className="text-white leading-relaxed">
                                The controlling Station Master must proceed to the site of the accident by the quickest means. He must take with him coolies, lamps, and any other equipment that he considers necessary.
                              </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                              <h4 className="text-lg font-semibold text-blue-300 mb-3 flex flex-col items-center gap-3">
                                <span className="bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-lg">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </span>
                                Key Responsibilities
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-blue-400 text-lg">🚦</span>
                                  <span className="text-white">Regulating the traffic</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-blue-400 text-lg">🏥</span>
                                  <span className="text-white">Attending to the injured</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-blue-400 text-lg">📝</span>
                                  <span className="text-white">Making a note of all evidence which may prove useful in ascertaining the cause of the accident</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-blue-400 text-lg">🎯</span>
                                  <span className="text-white">Taking general charge of the situation</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                              <h4 className="text-lg font-semibold text-orange-300 mb-3 flex flex-col items-center gap-3">
                                <span className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-lg">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </span>
                                Duration of Responsibility
                              </h4>
                              <p className="text-white leading-relaxed">
                                Till relieved by a Traffic Inspector or Officer, he will be responsible for all the above duties.
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

export default AMChapterPage16A