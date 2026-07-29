"use client"
import React from 'react'

const AMChapterPage11A = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Rule 202</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">INDICATIVE ACCIDENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Classification of indicative accidents in railway operations
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-6 px-2 border border-white/20">
            <div className="space-y-8">
              {/* Class F - Averted collisions */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">F</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      1. Class &apos;F&apos;- Averted collisions
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 lg:p-4 p-2 rounded-lg border border-emerald-400/20">
                        <h4 className="text-lg font-semibold text-emerald-300 mb-2">F.1</h4>
                        <p className="text-white">Averted collision between trains, at least one of which is carrying passengers.</p>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 lg:p-4 p-2 rounded-lg border border-emerald-400/20">
                        <h4 className="text-lg font-semibold text-emerald-300 mb-2">F.2</h4>
                        <p className="text-white">Averted collision between a train carrying passengers and an obstruction.</p>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 lg:p-4 p-2 rounded-lg border border-emerald-400/20">
                        <h4 className="text-lg font-semibold text-emerald-300 mb-2">F.3</h4>
                        <p className="text-white">Averted collision between trains not carrying passengers.</p>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 lg:p-4 p-2 rounded-lg border border-emerald-400/20">
                        <h4 className="text-lg font-semibold text-emerald-300 mb-2">F.4</h4>
                        <p className="text-white">Averted collision between a train not carrying passengers and an obstruction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class G - Breach of block rules */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">G</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-amber-400 to-amber-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      2. Class &apos;G&apos; – Breach of block rules
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 lg:p-4 p-2 rounded-lg border border-amber-400/20">
                        <h4 className="text-lg font-semibold text-amber-300 mb-2">G.1</h4>
                        <p className="text-white">Trains carrying passengers entering a block section without any authority to proceed or without a proper &apos;Authority to proceed&apos;</p>
                      </div>

                      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 lg:p-4 p-2 rounded-lg border border-amber-400/20">
                        <h4 className="text-lg font-semibold text-amber-300 mb-2">G.2</h4>
                        <p className="text-white">Trains not carrying passengers entering a block section without any authority to proceed or without a proper &apos;Authority to proceed&apos;</p>
                      </div>

                      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 lg:p-4 p-2 rounded-lg border border-amber-400/20">
                        <h4 className="text-lg font-semibold text-amber-300 mb-2">G.3</h4>
                        <p className="text-white">Train received on a blocked line, but not constituting an averted collision.</p>
                      </div>

                      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 lg:p-4 p-2 rounded-lg border border-amber-400/20">
                        <h4 className="text-lg font-semibold text-amber-300 mb-2">G.4</h4>
                        <p className="text-white">Train received on/or entering a wrong line at a station or catch siding or slip siding or sand hump etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class H - Train passing signal at danger */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-rose-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">H</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-rose-400 to-rose-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      3. Class &apos;H&apos; – Train passing signal at danger
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-rose-500/10 to-rose-600/10 lg:p-4 p-2 rounded-lg border border-rose-400/20">
                        <h4 className="text-lg font-semibold text-rose-300 mb-2">H.1</h4>
                        <p className="text-white">Train carrying passengers running past a stop signal at danger without proper authority.</p>
                      </div>

                      <div className="bg-gradient-to-r from-rose-500/10 to-rose-600/10 lg:p-4 p-2 rounded-lg border border-rose-400/20">
                        <h4 className="text-lg font-semibold text-rose-300 mb-2">H.2</h4>
                        <p className="text-white">Train not carrying passengers running past a stop signal at danger without proper authority.</p>
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

export default AMChapterPage11A