"use client"
import React from 'react'

const BWMPartCPage23A: React.FC = () => {
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
              Call Attention Signal
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 3.3 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">3.3. The &apos;Call attention&apos; signal:</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-lg lg:p-4 p-3 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">a</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              The <span className="text-green-300 font-semibold">&apos;Call attention&apos;</span> signal shall be given when it is necessary to direct the attention to the <span className="text-green-300 font-semibold">block instruments</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-lg lg:p-4 p-3 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">b</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              In order to ascertain that only the correct <span className="text-blue-300 font-semibold">block station</span> is in contact and to convey, the description and number of the train for which <span className="text-green-300 font-semibold">&apos;Line Clear&apos;</span> is required, as well as to ascertain whether the <span className="text-blue-300 font-semibold">block station</span> in advance is in a position to accept the <span className="text-green-300 font-semibold">&apos;Is line clear&apos;</span> signal, the <span className="text-green-300 font-semibold">&apos;Call attention&apos;</span> or <span className="text-green-300 font-semibold">&apos;Attend telephone&apos;</span> signal shall be sent to the <span className="text-blue-300 font-semibold">block station</span> in advance.
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

export default BWMPartCPage23A