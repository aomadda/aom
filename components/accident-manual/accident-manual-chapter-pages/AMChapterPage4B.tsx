"use client"
import React from 'react'

const AMChapterPage4B = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-amber-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">EQUIPMENT FAILURES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding railway equipment failure classifications
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.13 - Equipment Failures */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.13</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-amber-400 to-orange-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      Equipment Failures
                    </h3>
                    <div className="bg-linear-to-r from-amber-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-amber-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            Equipment will be considered as failed if it is not able to perform the prescribed function within the prescribed time limit. These include all failures of railway equipment i.e.:
                          </span>
                        </p>
                        <div className="space-y-6">
                          {/* a) Locomotive and rolling stock */}
                          <div className="relative flex items-start p-5 rounded-2xl shadow-lg border border-red-400/30 bg-linear-to-br from-red-700/20 via-orange-600/10 to-orange-300/5 hover:scale-[1.02] group transition-transform duration-300">
                            <div className="absolute -top-5 -left-5">
                              <div className="w-14 h-14 rounded-full bg-linear-to-br from-red-400 via-orange-400 to-yellow-200 shadow-2xl flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                                <span className="text-2xl font-black text-white drop-shadow-[0_2px_6px_rgba(255,120,120,0.7)] tracking-wider select-none font-serif">a</span>
                              </div>
                            </div>
                            <div className="ml-12">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block bg-red-500/30 px-3 py-1 rounded-lg text-red-200 font-bold text-lg shadow">Locomotive and rolling stock</span>
                              </div>
                              <p className="text-gray-100 ml-1 text-base lg:text-lg">
                                <span className="font-semibold text-red-300">Failure of locomotive and rolling stock</span> – <span className="text-orange-300 font-semibold">Class J</span>.
                              </p>
                            </div>
                          </div>
                          {/* b) Permanent Way */}
                          <div className="relative flex items-start p-5 rounded-2xl shadow-lg border border-yellow-400/30 bg-linear-to-br from-yellow-700/20 via-amber-400/10 to-orange-300/5 hover:scale-[1.02] group transition-transform duration-300">
                            <div className="absolute -top-5 -left-5">
                              <div className="w-14 h-14 rounded-full bg-linear-to-br from-yellow-200 via-yellow-400 to-orange-300 shadow-2xl flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                                <span className="text-2xl font-black text-yellow-900 drop-shadow-[0_2px_6px_rgba(255,222,89,1)] tracking-wider select-none font-serif">b</span>
                              </div>
                            </div>
                            <div className="ml-12">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block bg-yellow-500/30 px-3 py-1 rounded-lg text-yellow-200 font-bold text-lg shadow">Permanent Way</span>
                              </div>
                              <p className="text-gray-100 ml-1 text-base lg:text-lg">
                                <span className="font-semibold text-yellow-300">Failure of Permanent Way</span> – <span className="text-orange-300 font-semibold">Class K</span>.
                              </p>
                            </div>
                          </div>
                          {/* c) Electrical Equipment */}
                          <div className="relative flex items-start p-5 rounded-2xl shadow-lg border border-blue-400/30 bg-linear-to-br from-blue-700/20 via-blue-400/10 to-indigo-300/5 hover:scale-[1.02] group transition-transform duration-300">
                            <div className="absolute -top-5 -left-5">
                              <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-300 via-blue-500 to-indigo-500 shadow-2xl flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                                <span className="text-2xl font-black text-blue-100 drop-shadow-[0_2px_6px_rgba(73,155,255,1)] tracking-wider select-none font-serif">c</span>
                              </div>
                            </div>
                            <div className="ml-12">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block bg-blue-500/30 px-3 py-1 rounded-lg text-blue-200 font-bold text-lg shadow">Electrical Equipment</span>
                              </div>
                              <p className="text-gray-100 ml-1 text-base lg:text-lg">
                                <span className="font-semibold text-blue-200">Failure of Electrical Equipment</span> – <span className="text-indigo-300 font-semibold">Class L</span>.
                              </p>
                            </div>
                          </div>
                          {/* d) Signaling and Telecommunication */}
                          <div className="relative flex items-start p-5 rounded-2xl shadow-lg border border-green-400/30 bg-linear-to-br from-green-700/20 via-emerald-400/10 to-teal-400/5 hover:scale-[1.02] group transition-transform duration-300">
                            <div className="absolute -top-5 -left-5">
                              <div className="w-14 h-14 rounded-full bg-linear-to-br from-green-300 via-emerald-400 to-teal-400 shadow-2xl flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                                <span className="text-2xl font-black text-green-900 drop-shadow-[0_2px_6px_rgba(52,211,153,1)] tracking-wider select-none font-serif">d</span>
                              </div>
                            </div>
                            <div className="ml-12">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block bg-green-500/30 px-3 py-1 rounded-lg text-green-200 font-bold text-lg shadow">Signaling &amp; Telecommunication</span>
                              </div>
                              <p className="text-gray-100 ml-1 text-base lg:text-lg">
                                <span className="font-semibold text-green-200">Failure of Signaling and Telecommunication</span> – <span className="text-teal-300 font-semibold">Class M</span>.
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
        .animate-pulse-glow {
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 12px 2px rgba(255,255,255,0.18), 0 0 0 0 rgba(0,0,0,0.05);}
          100% { box-shadow: 0 0 18px 8px rgba(255,255,255,0.36), 0 0 0 12px rgba(255,255,255,0.025);}
        }
      `}</style>
    </div>
  )
}

export default AMChapterPage4B