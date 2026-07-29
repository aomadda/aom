"use client"
import React from 'react'

const AMChapterPage3F = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-rose-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-rose-500 to-pink-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-pink-300 mb-4">INDICATIVE ACCIDENTS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-rose-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding potential hazards and near-miss incidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.9 - Indicative Accidents */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-rose-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.9</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-rose-400 to-pink-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Indicative Accidents
                    </h3>
                    <div className="bg-linear-to-r from-rose-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-rose-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            In real terms they are not accidents, but serious potential hazards and include all cases of:
                          </span>
                        </p>
                        <div className="space-y-4">
                          <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                            <p className="text-purple-200 font-semibold mb-2 flex items-center gap-2">
                              <span className="inline-block bg-purple-400 text-white rounded-full px-2 py-0.5 font-bold mr-2">a</span>
                              Averted collision <span className="text-purple-300 font-normal">(Classification – F)</span>
                            </p>
                          </div>
                          <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 lg:p-4 p-2 rounded-lg border border-blue-400/20">
                            <p className="text-blue-200 font-semibold mb-2 flex items-center gap-2">
                              <span className="inline-block bg-blue-400 text-white rounded-full px-2 py-0.5 font-bold mr-2">b</span>
                              Breach of block rules <span className="text-blue-300 font-normal">(Classification – G)</span>
                            </p>
                          </div>
                          <div className="bg-linear-to-r from-red-500/10 to-orange-500/10 lg:p-4 p-2 rounded-lg border border-red-400/20">
                            <p className="text-red-200 font-semibold mb-2 flex items-center gap-2">
                              <span className="inline-block bg-red-400 text-white rounded-full px-2 py-0.5 font-bold mr-2">c</span>
                              Train passing signal at danger <span className="text-red-300 font-normal">(Classification – H)</span>
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

export default AMChapterPage3F