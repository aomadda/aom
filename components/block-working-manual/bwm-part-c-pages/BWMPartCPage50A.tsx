"use client"
import React from 'react'

const BWMPartCPage50A: React.FC = () => {
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
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* Chapter VIII Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    {/* Chapter Heading */}
                    <div className="text-center mb-4">
                      <h2 className="text-yellow-300 font-bold lg:text-3xl text-2xl">CHAPTER VIII</h2>
                    </div>
                    
                    {/* Title */}
                    <div className="text-center mb-6">
                      <h3 className="text-green-300 font-bold lg:text-xl text-lg">FAILURE OF BLOCK INSTRUMENTS OR APPARATUS.</h3>
                    </div>
                    
                    {/* 8.1 Section */}
                    <div className="space-y-4">
                      <h4 className="text-blue-300 font-bold lg:text-xl text-lg mb-4">8.1. Failure of Last Stop Signal:</h4>
                      
                      {/* Intro paragraph */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          In the following cases of failure of LSS, Block instrument shall not be suspended.
                        </p>
                      </div>

                      {/* Point 1 */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">1</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              Where block instrument is interlocked with LSS and LSS cannot be taken off even though Line Clear has been obtained on block instrument.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Point 2 */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">2</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              Where block instrument is interlocked with IBS, and line clear has been obtained on block instrument, but LSS cannot be taken OFF despite the track circuiting provided beyond the LSS and the axle counters provided at either end of block section are in working condition.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* In both cases paragraph */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          In both the cases above, the Last stop signal shall be treated as defective and PLCT (T/C or T/D 1425) shall be issued to <span className="text-blue-300 font-semibold">Loco pilot</span> as authority to proceed duly mentioning that Line clear was obtained through Block instrument.
                        </p>
                      </div>

                      {/* Where IBS paragraph */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Where IBS is working, it can be taken OFF.
                        </p>
                      </div>

                      {/* Note */}
                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-400/30">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-bold">Note:</span> when Line clear is obtained on block instrument, filling T/A 1425 and T/B 1425 shall be dispensed with.
                        </p>
                      </div>

                      {/* Failure of IBS heading */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 mt-6">
                        <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-3">Failure of IBS:</h5>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          During all cases of IBS failure, Block working shall be suspended.
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

export default BWMPartCPage50A