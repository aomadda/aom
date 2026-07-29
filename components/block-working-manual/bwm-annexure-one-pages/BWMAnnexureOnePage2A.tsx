"use client"
import React from 'react'

const BWMAnnexureOnePage2A: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-white mb-6">ANNEXURE ONE</h1>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* Main Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">2.0 Description of Block Panel of SSBPAC(D)</h4>
                    <h5 className="text-blue-300 font-semibold lg:text-lg text-base mb-4">2.1 SM&apos;s Block panel is provided with following KYS for Following functions</h5>
                    
                    <div className="space-y-5">
                      {/* Section 2.1.1 */}
                      <div className="group relative bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl lg:p-5 p-3 hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 lg:w-14 lg:h-14 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold lg:text-base text-sm shadow-lg">
                            2.1.1
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-blue-200 font-semibold lg:text-xl text-lg mb-3">SM Key</p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-2">
                              SM/ASM&apos;s control key.
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-2">
                              The key when out prevent following operations:
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              a) Transmission of BELL code
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              b) Transmission of IS LINE CLEAR inquiry request
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              c) Cancellation of LINE CLEAR
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section 2.1.2 */}
                      <div className="group relative bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl lg:p-5 p-3 hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 lg:w-14 lg:h-14 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold lg:text-base text-sm shadow-lg">
                            2.1.2
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-purple-200 font-semibold lg:text-xl text-lg mb-3">LCB Key</p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-2">
                              LINE CLEAR BLOCKING key.
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-2">
                              It serves the following, when out,
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              To prevent station in rear to take LINE CLEAR.
                            </p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              To prevent closing of Block
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section 2.1.3 */}
                      <div className="group relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl lg:p-5 p-3 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 lg:w-14 lg:h-14 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold lg:text-base text-sm shadow-lg">
                            2.1.3
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-cyan-200 font-semibold lg:text-xl text-lg mb-3">SM&apos;s Back Cover lock key</p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              To open or lock the back cover by SM/ASM/Switchman, when required by signal staff for maintenance or repairs.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section 2.1.4 */}
                      <div className="group relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl lg:p-5 p-3 hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 lg:w-14 lg:h-14 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold lg:text-base text-sm shadow-lg">
                            2.1.4
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-indigo-200 font-semibold lg:text-xl text-lg mb-3">Maintainer Back cover lock key</p>
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              To open of lock the back cover by authorised signal staff, for maintenance or repairs, provided SM&apos;s back cover lock key as per cl.7.1.3 is also applied.
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

export default BWMAnnexureOnePage2A