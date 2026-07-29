"use client"
import React from 'react'

const AMChapterPage4A = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-pink-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-red-100 to-pink-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-pink-300 mb-4">TRAIN PASSING SIGNAL AT DANGER</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding violations of railway signal safety regulations
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.12 - Train Passing Signal at Danger */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.12</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-red-400 to-pink-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Train Passing Signal at Danger
                    </h3>
                    <div className="bg-linear-to-r from-red-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            When a train passes a fixed Stop signal including a Banner Flag or an Engineering Stop Indicator (other than automatic Stop signal, IB signal and Gate stop signal), at danger:
                          </span>
                        </p>
                        <div className="flex flex-col gap-5">
                          {/* a) No authority to pass */}
                          <div className="relative flex items-start group transition-transform duration-300 hover:scale-[1.04]">
                            <span className="absolute -top-4 -left-4 flex items-center justify-center w-12 h-12 bg-linear-to-tr from-orange-500 via-red-500 to-pink-500 text-white font-extrabold text-lg rounded-full ring-4 ring-orange-400/30 shadow-lg group-hover:scale-110 transition-all duration-300 select-none z-10 drop-shadow-lg">
                              a
                            </span>
                            <div className="pl-12 w-full bg-linear-to-r from-orange-500/20 via-red-500/10 to-pink-500/5 p-5 rounded-xl border border-orange-400/30 shadow-lg hover:shadow-orange-400/60 transition-shadow duration-300">
                              <p className="text-orange-200 font-bold text-lg mb-1 flex items-center gap-2 tracking-wide">
                                No authority to pass:
                              </p>
                              <p className="text-gray-100 leading-relaxed pl-5">
                                Without any authority to pass.
                              </p>
                            </div>
                          </div>
                          {/* b) Improper authority */}
                          <div className="relative flex items-start group transition-transform duration-300 hover:scale-[1.04]">
                            <span className="absolute -top-4 -left-4 flex items-center justify-center w-12 h-12 bg-linear-to-tr from-yellow-400 via-orange-400 to-pink-400 text-white font-extrabold text-lg rounded-full ring-4 ring-yellow-400/30 shadow-lg group-hover:scale-110 transition-all duration-300 select-none z-10 drop-shadow-lg">
                              b
                            </span>
                            <div className="pl-12 w-full bg-linear-to-r from-yellow-500/20 via-orange-500/10 to-pink-500/5 p-5 rounded-xl border border-yellow-400/30 shadow-lg hover:shadow-yellow-400/60 transition-shadow duration-300">
                              <p className="text-yellow-200 font-bold text-lg mb-1 flex items-center gap-2 tracking-wide">
                                Improper authority:
                              </p>
                              <p className="text-gray-100 leading-relaxed pl-5">
                                With an improper authority to pass.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-linear-to-r from-pink-500/10 to-red-500/10 p-4 rounded-lg border border-pink-400/20">
                          <p className="text-pink-200 font-semibold mb-2 flex items-center gap-2">
                            Classification:
                          </p>
                          <p className="text-gray-200">
                            It constitutes &apos;Train passing signal at danger&apos;.
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

export default AMChapterPage4A