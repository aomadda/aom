"use client"
import React from 'react'

const AMChapterPage3G = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-slate-400/20 to-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-zinc-400/20 to-gray-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-gray-400/10 to-slate-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-slate-500/20 to-gray-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-slate-500 to-gray-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-slate-100 to-gray-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-300 mb-4">AVERTED COLLISION</h2>
            <div className="w-24 h-1 bg-linear-to-r from-slate-500 to-gray-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding circumstances that prevent train collisions
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.10 - Averted Collision */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-slate-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.10</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-slate-400 to-gray-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Averted Collision
                    </h3>
                    <div className="bg-linear-to-r from-slate-500/10 to-gray-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-slate-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            An averted collision is a circumstance under which, but for the vigilance shown by any person or persons, a collision would have occurred either outside station limits or within station limits between two trains or between a train and an obstruction.
                          </span>
                        </p>
                        <div className="bg-linear-to-r from-red-500/10 to-orange-500/10 p-4 rounded-lg border border-red-400/20">
                          <p className="text-red-200 font-semibold mb-2 flex items-center gap-2">
                            Such an occurrence may not be treated as an &apos;Averted Collision&apos;:
                          </p>
                          <div className="flex flex-col gap-4 lg:gap-5">
                            {/* (a) Outside station limits */}
                            <div className="relative group">
                              <div className="absolute -top-3 -left-3 flex items-center justify-center w-12 h-12 bg-linear-to-br from-yellow-300 via-yellow-500 to-orange-400 rounded-full shadow-lg border-4 border-yellow-200 group-hover:scale-110 transition-transform duration-300">
                                <span className="font-extrabold text-lg text-yellow-900 drop-shadow-[0_2px_6px_rgba(255,166,0,0.2)] select-none tracking-wide">a</span>
                              </div>
                              <div className="pl-12 bg-linear-to-r from-yellow-500/10 to-orange-500/20 p-5 rounded-xl border border-yellow-400/30 shadow-md hover:shadow-yellow-400/40 transition-shadow duration-300">
                                <p className="text-yellow-300 font-bold text-lg mb-1 flex items-center gap-2">
                                  
                                  Outside station limits:
                                </p>
                                <p className="text-gray-100 leading-relaxed pl-6">
                                  If the distance between the two trains or the train and the obstruction, at the time the train or trains have finally come to a stop, is <span className="font-semibold text-yellow-200">400 metres or more</span>.
                                </p>
                              </div>
                            </div>

                            {/* (b) Within station limits */}
                            <div className="relative group">
                              <div className="absolute -top-3 -left-3 flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-300 via-blue-600 to-indigo-600 rounded-full shadow-lg border-4 border-blue-200 group-hover:scale-110 transition-transform duration-300">
                                <span className="font-extrabold text-lg text-blue-100 drop-shadow-[0_2px_6px_rgba(32,88,255,0.18)] select-none tracking-wide">b</span>
                              </div>
                              <div className="pl-12 bg-linear-to-r from-blue-500/15 to-indigo-700/15 p-5 rounded-xl border border-blue-400/30 shadow-md hover:shadow-blue-400/40 transition-shadow duration-300">
                                <p className="text-blue-200 font-bold text-lg mb-1 flex items-center gap-2">
                                  
                                  Within station limits:
                                </p>
                                <p className="text-gray-100 leading-relaxed pl-6">
                                  If there is an <span className="font-semibold text-blue-200">intervening fixed stop signal at danger</span> which is governing the moving train; and compliance by the moving train with the indication conveyed by the fixed stop signal has averted the collision between the trains or between the train and the obstruction.
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

export default AMChapterPage3G