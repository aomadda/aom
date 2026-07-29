"use client"
import React from 'react'

const BWMPartAPage3 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Description of Neale&apos;s Tablet Token Instrument</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Detailed description of Neale&apos;s Tablet token instrument components
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
                      <span className="text-white font-bold lg:text-lg text-base">1.3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </span>
                      Description of Neale&apos;s Tablet token instrument
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <p className="text-gray-200 lg:text-lg text-base italic">
                            (See Figure No.2 at the end of this Chapter)
                          </p>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 lg:p-5 p-3 rounded-xl border border-indigo-400/30">
                            <p className="text-gray-200 lg:text-lg text-base text-center font-medium leading-relaxed">
                              The instrument is similar to Neale&apos;s Ball token instrument except for the following differences: -
                            </p>
                          </div>

                          <div className="space-y-4">
                            {/* Token slide with handle */}
                            <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                                    <span className="text-white font-bold lg:text-xl text-lg">a</span>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-semibold text-blue-300 mb-3 lg:text-2xl">
                                    Token slide with handle
                                  </h4>
                                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                    A token slide is provided at the top of the instrument instead of a Token Receiver cover. A tablet token is inserted into the instrument by pulling out the slide, placing the tablet token in the recess and pushing back the slide.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Tablet windows */}
                            <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-indigo-400/30 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110">
                                    <span className="text-white font-bold lg:text-xl text-lg">b</span>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-semibold text-indigo-300 mb-3 lg:text-2xl">
                                    Tablet windows
                                  </h4>
                                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                    The Neale&apos;s Tablet token instruments are provided with Tablet windows instead of token indicators.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Divider before Note */}
                            <div className="flex items-center gap-4 py-4">
                              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                              <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                            </div>

                            {/* Note about Tokens */}
                            <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border-2 border-yellow-400/40 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-500/30 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-yellow-300 mb-3 lg:text-2xl">
                                    Note
                                  </h4>
                                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed font-medium">
                                    The number of the token and the code initials of the two block stations at each end of the block section to which the token applies are engraved on each token. Tablet Tokens are placed in different pattern of recess and pushed back the slide. Tablet tokens are provided in four different classes viz., A, B, C & D for different block sections.
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

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Differences
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Token slide with handle</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🪟</span>
                  <span className="text-gray-200 lg:text-lg text-base">Tablet windows</span>
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

export default BWMPartAPage3