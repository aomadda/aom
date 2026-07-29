"use client"
import React from 'react'

const BWMPartAPage8A = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Signal Acknowledgement</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Protocol for acknowledging and responding to bell signals
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">2.5</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Acknowledgement of Signals (G.R. 14.06)
                    </h3>

                    <div className="space-y-6">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-blue-400 text-xl mt-1">✅</span>
                          <div>
                            <h4 className="text-xl font-semibold text-blue-300 mb-2">Authorized Acknowledgement</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Each signal received shall be acknowledged by sending its authorised acknowledgement.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-indigo-400 text-xl mt-1">🧠</span>
                          <div>
                            <h4 className="text-xl font-semibold text-indigo-300 mb-2">Clear Understanding</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              No signal shall be acknowledged until it is clearly understood.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-purple-400 text-xl mt-1">✨</span>
                          <div>
                            <h4 className="text-xl font-semibold text-purple-300 mb-2">Signal Completion</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              A signal shall not be deemed to be complete until it is acknowledged.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section d */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-pink-400 text-xl mt-1">🔄</span>
                          <div>
                            <h4 className="text-xl font-semibold text-pink-300 mb-2">Signal Repetition</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              If the station to which a signal is sent does not reply, the signal shall be repeated at intervals of not less than twenty seconds until reply is received.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section e */}
                      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-red-400 text-xl mt-1">🚫</span>
                          <div>
                            <h4 className="text-xl font-semibold text-red-300 mb-2">Unauthorized Signals</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              In no circumstances may unauthorised bell signals be exchanged on the instruments.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Note Section */}
                      <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-gray-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-gray-400 text-xl mt-1">📋</span>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-300 mb-3">Important Safety Note</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              As a precaution against unauthorised manipulation of block instrument, great care shall be taken not to acknowledge any but the correct authorised signals. Strange or indistinct bell signals, sometimes received due to disturbances by lightning, contact of wires, or other irregularity, shall on no account be acknowledged or responded to on the instrument. No attempt shall be made to operate the instrument which is affected by one or other of the causes mentioned above.
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

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Signal Protocol Essentials
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Authorized acknowledgement only</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🧠</span>
                  <span className="text-gray-200 lg:text-lg text-base">Clear understanding required</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">✨</span>
                  <span className="text-gray-200 lg:text-lg text-base">Acknowledgement completes signal</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 lg:text-lg text-base">20-second repetition rule</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚫</span>
                  <span className="text-gray-200 lg:text-lg text-base">No unauthorized signals</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-gray-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Safety against manipulation</span>
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

export default BWMPartAPage8A