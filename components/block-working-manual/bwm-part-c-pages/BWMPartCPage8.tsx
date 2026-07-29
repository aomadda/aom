"use client"
import React from 'react'

const BWMPartCPage8: React.FC = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - II</h2>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Bell Code
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 2.3 Section */}
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">2.3. Bell Code:(G.R. 14.05)</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          For the signalling of trains, the prescribed code of bell signals as detailed below, shall be used and a copy thereof shall be exhibited in each <span className="text-blue-300 font-semibold">block station</span> near the place of operation of the <span className="text-green-300 font-semibold">block working equipment</span> –
                        </p>
                      </div>

                      {/* Table Header */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 font-bold text-yellow-300 lg:text-lg text-base">
                          <div>Ref. No</div>
                          <div>Indication</div>
                          <div>Code</div>
                          <div>How signalled</div>
                          <div>How acknowledged</div>
                        </div>
                      </div>

                      {/* Row 1 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 text-gray-200 lg:text-lg text-base">
                          <div className="text-yellow-300 font-semibold">1</div>
                          <div>Call attention or attend telephone</div>
                          <div className="text-green-300 font-semibold">0</div>
                          <div>One stroke Or beat</div>
                          <div>One stroke or Beat</div>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 text-gray-200 lg:text-lg text-base">
                          <div className="text-yellow-300 font-semibold">2</div>
                          <div>Is Line Clear or Line Clear enquiry</div>
                          <div className="text-green-300 font-semibold">00</div>
                          <div>Two</div>
                          <div>Two</div>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 text-gray-200 lg:text-lg text-base">
                          <div className="text-yellow-300 font-semibold">3 *</div>
                          <div>Train entering block section</div>
                          <div className="text-green-300 font-semibold">000</div>
                          <div>Three</div>
                          <div>Three</div>
                        </div>
                      </div>

                      {/* Row 4 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 text-gray-200 lg:text-lg text-base">
                          <div className="text-yellow-300 font-semibold">4*</div>
                          <div>(a) Train out of block section (b) Obstruction removed</div>
                          <div className="text-green-300 font-semibold">0000</div>
                          <div>Four</div>
                          <div>Four</div>
                        </div>
                      </div>

                      {/* Row 5 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 text-gray-200 lg:text-lg text-base">
                          <div className="text-yellow-300 font-semibold">5.</div>
                          <div>(a) Cancel last signal (b) Signal given in error</div>
                          <div className="text-green-300 font-semibold">00000</div>
                          <div>Five</div>
                          <div>Five</div>
                        </div>
                      </div>

                      {/* Row 6 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-200 lg:text-lg text-base space-y-3">
                          <div className="grid grid-cols-5 gap-2">
                            <div className="text-yellow-300 font-semibold">6</div>
                            <div>a) Obstruction danger signal (general)</div>
                            <div className="text-green-300 font-semibold">000000</div>
                            <div>Six</div>
                            <div>Six</div>
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            <div></div>
                            <div>b) Stop and examine train</div>
                            <div className="text-green-300 font-semibold">000000-0</div>
                            <div>Six pause one</div>
                            <div>Six pause one</div>
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            <div></div>
                            <div>c) Train passed without tail lamp or tail board</div>
                            <div className="text-green-300 font-semibold">000000-00</div>
                            <div>Six pause two</div>
                            <div>Six pause two</div>
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            <div></div>
                            <div>d) Train divided</div>
                            <div className="text-green-300 font-semibold">000000-000</div>
                            <div>Six pause three</div>
                            <div>Six pause three</div>
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            <div></div>
                            <div>e) Vehicles running away into the away into the block section on wrong line</div>
                            <div className="text-green-300 font-semibold">000000-0000</div>
                            <div>Six pause four</div>
                            <div>Six pause four</div>
                          </div>
                          <div className="grid grid-cols-5 gap-2">
                            <div></div>
                            <div>f) Vehicles running away into the block section on right line</div>
                            <div className="text-green-300 font-semibold">000000-00000</div>
                            <div>Six pause five</div>
                            <div>Six pause five</div>
                          </div>
                        </div>
                      </div>

                      {/* Row 7 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="grid grid-cols-5 gap-2 text-gray-200 lg:text-lg text-base">
                          <div className="text-yellow-300 font-semibold">7</div>
                          <div>Testing</div>
                          <div className="text-green-300 font-semibold">0000000000000000</div>
                          <div>sixteen</div>
                          <div>Sixteen</div>
                        </div>
                      </div>

                      {/* Note Section */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-6">Note :</h4>
                        <div className="space-y-3">
                          {/* i) Item */}
                          <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/5 rounded-lg lg:p-4 p-3 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">i</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  `<span className="text-green-300 font-semibold">0</span>&apos; indicates a stroke or a beat and &apos;<span className="text-green-300 font-semibold">––</span>&apos; indicates a pause.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* ii) Item */}
                          <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/5 rounded-lg lg:p-4 p-3 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">ii</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Each signal shall be given slowly and distinctly.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* iii) Item */}
                          <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/5 rounded-lg lg:p-4 p-3 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">iii</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  <span className="text-red-400 font-semibold">*</span> Item <span className="text-yellow-300 font-semibold">(3)</span> and <span className="text-yellow-300 font-semibold">(4)</span> are not required to be given wherever <span className="text-green-300 font-semibold">Axle counter proving Block Instruments</span> or <span className="text-green-300 font-semibold">continuous track circuiting</span> is in use.
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

export default BWMPartCPage8