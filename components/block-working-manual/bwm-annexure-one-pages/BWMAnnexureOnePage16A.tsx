"use client"
import React from 'react'

const BWMAnnexureOnePage16A: React.FC = () => {
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
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">3.9 SHUNTING OF TRAIN</h4>
                    
                    <div className="space-y-6">
                      {/* Section 3.9.1 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-3 lg:text-lg">3.9.1 SHUNTING OF TRAIN UP TO LAST STOP SIGNAL</p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              While shunting on dispatch line, the LAST STOP SIGNAL should be kept at ON.
                            </p>
                          </div>
                          
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              SM Key shall be taken out. The driver of shunting train shall be given shunting order to shunt up to LAST. STOP SIGNAL. On completion of shunting, the line between STARTER/Shunt Signal/Stop Board/fouling mark and LAST STOP SIGNAL should be checked free from any vehicle and only then SM key shall be inserted and turned to IN position.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section 3.9.2 */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-3 lg:text-lg">3.9.2 SHUNTING BEHIND A TRAIN</p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Shunting behind a train should be performed with a message to station in advance. The station in advance shall take LCB Key out and keep in safe custody.
                            </p>
                          </div>
                          
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Shunting shall be performed as per 8.9.1. On completion of shunting, SM of sending station verifies the line between STARTER/Shunt Signal/Stop Board /fouling mark and LAST STOP SIGNAL free from any vehicle. The message regarding completion of shunting shall be sent to station in advance.
                            </p>
                          </div>
                          
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              SM of station in advance inserts LCB Key and turns to IN position.
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

export default BWMAnnexureOnePage16A