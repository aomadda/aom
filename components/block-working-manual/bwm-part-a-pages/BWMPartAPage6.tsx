"use client"
import React from 'react'

const BWMPartAPage6 = () => {
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
              CHAPTER II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Bell Signals</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Prescribed code of bell signals for train signalling
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
                      <span className="text-white font-bold lg:text-lg text-base">2.3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S3 7.83 3 7s.67-1.5 1.5-1.5zm0 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S3 11.83 3 11s.67-1.5 1.5-1.5zm0 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S3 15.83 3 15s.67-1.5 1.5-1.5z" />
                        </svg>
                      </span>
                      Bell Signals Code
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="space-y-6">
                        <div className="group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                          <p className="text-gray-200 lg:text-lg text-base text-center leading-relaxed">
                            For the signalling of trains, the prescribed code of bell signals as detailed below, shall be used and a copy thereof shall be exhibited at each block station near the place of operation of the block working equipment –
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="mb-4">
                          <h4 className="text-xl font-semibold text-blue-300 mb-2 flex items-center text-center justify-center gap-2">
                            
                            Bell Signal Indications and Codes
                          </h4>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            Below are the prescribed bell signals for train operations. Each code is represented by a specific number of strokes or beats, and must be acknowledged in the same way. These codes should be clearly displayed at every block station near the block working equipment.
                          </p>
                        </div>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-blue-400 text-xl">📞</span>
                            <div>
                              <span className="font-bold text-indigo-200">Call attention or attend telephone</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">0</span> (One stroke or beat)</span>
                                <span className="block">Acknowledgement: One stroke or beat</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-blue-400 text-xl">🔵</span>
                            <div>
                              <span className="font-bold text-indigo-200">Is Line Clear or Line Clear enquiry</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">00</span> (Two strokes)</span>
                                <span className="block">Acknowledgement: Two strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-green-400 text-xl">🚦</span>
                            <div>
                              <span className="font-bold text-indigo-200">Train entering block section <span className="text-xs text-gray-400">*</span></span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000</span> (Three strokes)</span>
                                <span className="block">Acknowledgement: Three strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-yellow-400 text-xl">✅</span>
                            <div>
                              <span className="font-bold text-indigo-200">Train out of block section / Obstruction removed <span className="text-xs text-gray-400">*</span></span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">0000</span> (Four strokes)</span>
                                <span className="block">Acknowledgement: Four strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-red-400 text-xl">❌</span>
                            <div>
                              <span className="font-bold text-indigo-200">Cancel last signal / Signal given in error</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">00000</span> (Five strokes)</span>
                                <span className="block">Acknowledgement: Five strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-pink-400 text-xl">🚨</span>
                            <div>
                              <span className="font-bold text-indigo-200">Obstruction danger signal (General)</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000000</span> (Six strokes)</span>
                                <span className="block">Acknowledgement: Six strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-orange-400 text-xl">🛑</span>
                            <div>
                              <span className="font-bold text-indigo-200">Stop and examine train</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000000-0</span> (Six strokes, pause, one stroke)</span>
                                <span className="block">Acknowledgement: Six strokes, pause, one stroke</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-indigo-400 text-xl">🚩</span>
                            <div>
                              <span className="font-bold text-indigo-200">Train passed without tail lamp or tail board</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000000-00</span> (Six strokes, pause, two strokes)</span>
                                <span className="block">Acknowledgement: Six strokes, pause, two strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-purple-400 text-xl">🔀</span>
                            <div>
                              <span className="font-bold text-indigo-200">Train divided</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000000-000</span> (Six strokes, pause, three strokes)</span>
                                <span className="block">Acknowledgement: Six strokes, pause, three strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-teal-400 text-xl">🚃</span>
                            <div>
                              <span className="font-bold text-indigo-200">Vehicles running away into the block section on Single line</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000000-0000</span> (Six strokes, pause, four strokes)</span>
                                <span className="block">Acknowledgement: Six strokes, pause, four strokes</span>
                              </div>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1 text-lime-400 text-xl">🧪</span>
                            <div>
                              <span className="font-bold text-indigo-200">Testing</span>
                              <div className="text-gray-200">
                                <span className="block">Code: <span className="font-mono">000000000</span> or <span className="font-mono">0000000</span> (Sixteen strokes)</span>
                                <span className="block">Acknowledgement: Sixteen strokes</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-6 bg-white/5 p-4 rounded-lg border border-blue-400/10">
                          <p className="text-gray-300 text-sm">
                            <span className="mb-1 flex items-center gap-1">
                              <span className="font-bold">Note:</span>
                              <svg className="inline w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <span className="block">i) <span className="font-mono">0</span> indicates a stroke or a beat, and a long line (________) indicates a pause.</span>
                            <span className="block">ii) Each signal must be given slowly and distinctly.</span>
                            <span className="block">iii) <span className="text-xs text-gray-400">*</span> Items (3) and (4) are not required wherever continuous track circuiting is in use.</span>
                          </p>
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
              Key Requirements
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔔</span>
                  <span className="text-gray-200 lg:text-lg text-base">Prescribed bell signal codes</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-gray-200 lg:text-lg text-base">Copy exhibition at block stations</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">Train signalling system</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Block working equipment</span>
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

export default BWMPartAPage6