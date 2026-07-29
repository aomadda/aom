"use client"
import React from 'react'

const BWMPartCPage25B: React.FC = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - III</h2>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Change of Indications
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 3.10 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">3.10. Change of indications from &apos;Line clear&apos; to &apos;Train on line&apos;:</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">a</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              At <span className="text-green-300 font-semibold">&apos;X&apos;</span>, as soon as the train passes the <span className="text-blue-300 font-semibold">Last Stop Signal</span> and enters <span className="text-green-300 font-semibold">&apos;X ––Y&apos; block section</span>, it actuates the <span className="text-green-300 font-semibold">FVT</span> controlling the <span className="text-blue-300 font-semibold">Last Stop Signal</span> and the signal will go back to <span className="text-red-400 font-semibold">&apos;ON&apos;</span>. It will be possible to clear this signal again only after obtaining a fresh <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> from <span className="text-green-300 font-semibold">&apos;Y&apos;</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">b</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">&apos;X&apos;</span> will give the <span className="text-green-300 font-semibold">&apos;Train entering block section&apos;</span> signal only after the <span className="text-blue-300 font-semibold">Last Stop Signal</span> returns to <span className="text-red-400 font-semibold">&apos;ON&apos;</span> and the train has entered <span className="text-green-300 font-semibold">&apos;X ––Y&apos; block section</span>. <span className="text-green-300 font-semibold">&apos;Y&apos;</span> will acknowledge the signal and while doing so shall press the <span className="text-green-300 font-semibold">bell plunger</span> on the last beat and turn the <span className="text-green-300 font-semibold">operating handle</span> to the <span className="text-red-400 font-semibold">TOL</span> position. This will change the <span className="text-green-300 font-semibold">TCF dial</span> at <span className="text-green-300 font-semibold">&apos;Y&apos;</span> and the <span className="text-green-300 font-semibold">TGT dial</span> at <span className="text-green-300 font-semibold">&apos;X&apos;</span> to the <span className="text-red-400 font-semibold">TOL</span> indication.
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

export default BWMPartCPage25B