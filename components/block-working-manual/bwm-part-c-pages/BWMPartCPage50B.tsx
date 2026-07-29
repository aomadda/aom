"use client"
import React from 'react'

const BWMPartCPage50B: React.FC = () => {
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
          <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - VIII</h2>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 8.2 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">8.2. Failure of the operating handle lock.</h3>
                    
                    <div className="space-y-4">
                      {/* Intro paragraph */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          If the last vehicle of a train arriving at <span className="text-green-300 font-semibold">&apos;Y&apos;</span> fails to operate the LVT and release the operating handle lock, the following procedure shall be carried out:
                        </p>
                      </div>

                      {/* Sub-section i */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">i</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              <span className="text-green-300 font-semibold">&apos;Y&apos;</span> shall satisfy himself that the train for which <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> has been given , has arrived complete by communicating with <span className="text-green-300 font-semibold">&apos;X&apos;</span> on telephone and ascertaining that there is no train in the section.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sub-section ii */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">ii</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              Block working shall be suspended and one train should be passed on Paper Line Clear Ticket after which normal working may be resumed.
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

export default BWMPartCPage50B