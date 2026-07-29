"use client"
import React from 'react'

const BWMPartAPage10 = () => {
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
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              2.7. Inspection of Train Signal Register:
            </h1>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">2.7</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-6">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                          <span className="text-blue-400 text-xl mt-1 text-center flex items-center justify-center gap-3">📋</span>
                        <div className="flex items-start gap-3">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            a) The Train Signal Register in use shall be checked and signed by the Station Master in charge of the Station daily and his signature in the remarks column (at the end of the entries for the previous day) will be considered as a certificate and all trains have been duly and correctly entered in their regular course and sequence and that he has taken note of the irregularities of any description recorded in the Train Signal Register and also those observed by him in the course of his check.
                          </p>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                          <span className="text-indigo-400 text-xl mt-1 text-center flex items-center justify-center gap-3">📝</span>
                        <div className="flex items-start gap-3">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            b) The Train Signal Register shall also be examined and signed by the Traffic Inspector and Signal Inspector of the section whenever they visit the station and inspect the block room in the course of their duties.
                          </p>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                          <span className="text-purple-400 text-xl mt-1 text-center flex items-center justify-center gap-3">⚠️</span>
                        <div className="flex items-start gap-3">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            c) Irregularities, if any, shall be noted in the Train Signal Register and brought to the notice of officials concerned.
                          </p>
                        </div>
                      </div>

                      {/* Section d */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                          <span className="text-pink-400 text-xl mt-1 text-center flex items-center justify-center gap-3">🚫</span>
                        <div className="flex items-start gap-3">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            d) The Train Signal Register in use shall not be removed from the Cabin or the room, in which block instruments are placed without the orders of the DRM.
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

export default BWMPartAPage10