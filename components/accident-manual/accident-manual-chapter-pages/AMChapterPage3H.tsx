"use client"
import React from 'react'

const AMChapterPage3H = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-purple-400/10 to-violet-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-violet-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-violet-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">BREACH OF BLOCK RULES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-violet-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding violations of railway block section regulations
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.11 - Breach of Block Rules */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-violet-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.11</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-violet-400 to-purple-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                      Breach of Block Rules
                    </h3>
                    <div className="bg-linear-to-r from-violet-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-violet-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            The following incidents are treated as breach of block rules:
                          </span>
                        </p>
                        <ul className="space-y-6">
                          <li className="flex items-start gap-4 group">
                            <span className="flex items-center justify-center rounded-full bg-linear-to-tr from-red-500 via-pink-600 to-orange-400 text-white font-bold shadow-lg w-10 h-10 text-lg ring-4 ring-red-400/30 group-hover:scale-110 transition-transform duration-200">
                              a
                            </span>
                            <div>
                              <span className="font-semibold text-red-200 text-lg group-hover:text-red-300 transition-colors">No authority to proceed:</span>
                              <div className="text-gray-200 ml-1 mt-1 text-base">
                                When a train enters a block section without any authority to proceed.
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-4 group">
                            <span className="flex items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-orange-300 to-yellow-500 text-white font-bold shadow-lg w-10 h-10 text-lg ring-4 ring-yellow-400/30 group-hover:scale-110 transition-transform duration-200">
                              b
                            </span>
                            <div>
                              <span className="font-semibold text-yellow-200 text-lg group-hover:text-yellow-300 transition-colors">Improper authority:</span>
                              <div className="text-gray-200 ml-1 mt-1 text-base">
                                When a train enters a block section with an improper authority to proceed.
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-4 group">
                            <span className="flex items-center justify-center rounded-full bg-linear-to-tr from-blue-500 via-indigo-500 to-blue-400 text-white font-bold shadow-lg w-10 h-10 text-lg ring-4 ring-blue-400/30 group-hover:scale-110 transition-transform duration-200">
                              c
                            </span>
                            <div>
                              <span className="font-semibold text-blue-200 text-lg group-hover:text-blue-300 transition-colors">Blocked line reception:</span>
                              <div className="text-gray-200 ml-1 mt-1 text-base">
                                When a train is received on a blocked line but not constituting an averted collision.
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-4 group">
                            <span className="flex items-center justify-center rounded-full bg-linear-to-tr from-green-500 via-emerald-500 to-teal-400 text-white font-bold shadow-lg w-10 h-10 text-lg ring-4 ring-green-400/30 group-hover:scale-110 transition-transform duration-200">
                              d
                            </span>
                            <div>
                              <span className="font-semibold text-green-200 text-lg group-hover:text-green-300 transition-colors">Wrong line entry:</span>
                              <div className="text-gray-200 ml-1 mt-1 text-base">
                                When a train enters or is received on a wrong line at a station or when a train enters catch/slip siding or sand hump.
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="bg-linear-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg border border-indigo-400/20">
                          <p className="text-indigo-200 font-semibold mb-2 flex items-center gap-2">
                            <span className="text-indigo-400">📝</span>
                            Note:
                          </p>
                          <p className="text-gray-200">
                            When a train is received on a blocked line but not constituting an averted collision (C above) means: a train is received on to a line without keeping the adequate distance clear as per GR 3.40, and the said train has stopped short of starter signal which is at &apos;ON&apos;.
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

export default AMChapterPage3H