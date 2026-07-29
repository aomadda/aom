"use client"
import React from 'react'

const CoilSpringBreakage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Speed Restriction for Breakage of Coil Spring or Deflated Air Spring in En-route
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Speed Restrictions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Speed Restrictions
            </h2>

            <div className="space-y-6">
              {/* Restriction 1: ICF & Hybrid Primary Coil Breakage */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div className="bg-red-600/30 rounded-lg px-4 py-2 shrink-0">
                    <span className="text-red-200 font-bold text-lg">Restriction 1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">ICF & Hybrid - Primary Coil Breakage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Speed Restriction:</span>
                        <div className="mt-1 text-red-200 font-bold">100 kmph</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Reference:</span>
                        <div className="mt-1 text-red-200">RDSO L.No. MC/SPC dated 17.01.1991</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">Action to be taken:</h4>
                  <p className="text-gray-200 leading-relaxed">
                    If only one broken axle box coil spring with no excessive tilt of the axle box is detected enroute a running train, the coach may be allowed to continue journey upto the destination with the condition that the speed shall not exceed 100 kmph.
                  </p>
                </div>
              </div>

              {/* Restriction 2: ICF Bolster Coil Breakage */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div className="bg-red-600/30 rounded-lg px-4 py-2 shrink-0">
                    <span className="text-red-200 font-bold text-lg">Restriction 2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">ICF - Bolster Coil Breakage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Speed Restriction:</span>
                        <div className="mt-1 text-red-200 font-bold">Not allowed</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Reference:</span>
                        <div className="mt-1 text-red-200">RDSO L.No. MC/SPC dated 17.01.1991</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">Action to be taken:</h4>
                  <p className="text-gray-200 leading-relaxed">
                    A coach shall not be allowed to continue its journey in case of breakage of its bolster spring as unlike primary springs it may shift out of its position.
                  </p>
                </div>
              </div>

              {/* Restriction 3: Hybrid & LHB Secondary Air Spring */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div className="bg-red-600/30 rounded-lg px-4 py-2 shrink-0">
                    <span className="text-red-200 font-bold text-lg">Restriction 3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">Hybrid & LHB - Secondary Air Spring Heavy Leakage or Deflated</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Speed Restriction:</span>
                        <div className="mt-1 text-red-200 font-bold">60 kmph</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Reference:</span>
                        <div className="mt-1 text-red-200">1. RDSO L.No.MC/CB/MM dated 09.09.2009<br/>2. RDSO L.No. SV.AS.ML dated 30.10.2019</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">Action to be taken:</h4>
                  <p className="text-gray-200 leading-relaxed">
                    In case of heavy leakage or deflated air spring, the defective bogie is to be isolated with the help of isolaing valves and driver should observe a speed restriction of 60 kmph upto terminal point for maintenance.
                  </p>
                </div>
              </div>

              {/* Restriction 4: LHB Secondary Outer Flexi Coil Breakage */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div className="bg-red-600/30 rounded-lg px-4 py-2 shrink-0">
                    <span className="text-red-200 font-bold text-lg">Restriction 4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">LHB - Secondary Outer Flexi Coil Breakage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Speed Restriction:</span>
                        <div className="mt-1 text-red-200 font-bold">90 kmph with accompany</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Reference:</span>
                        <div className="mt-1 text-red-200">RDSO L.No. SV.FIAT spring dated 05.02.2015</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">Action to be taken:</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    In case of en-route breakage of outer flexi-coil spring of secondary stage suspension the LHB coach can be permitted to run with a restricted speed of 90 kmph upto the destination with TXR staff to escort the train and critically monitor the broken spring. The following should be ensured while permitting such movement:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">Only one spring is in broken condition.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">The spring is broken at one location which falls top or bottom two coils.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">The springs is not displaced from its position.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">Bump stop gap should not be zero.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Restriction 5: LHB Primary Outer Flexi Coil Breakage */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div className="bg-red-600/30 rounded-lg px-4 py-2 shrink-0">
                    <span className="text-red-200 font-bold text-lg">Restriction 5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">LHB - Primary Outer Flexi Coil Breakage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Speed Restriction:</span>
                        <div className="mt-1 text-red-200 font-bold">95 kmph with accompany</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-red-300">Reference:</span>
                        <div className="mt-1 text-red-200">RDSO L.No. SV.FIAT spring dated 08.11.2018</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">Action to be taken:</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    In case of en-route breakage of outer flexi-coil spring of primary stage suspension, the LHB coach can be permitted to run upto destination with escorting TXR staff at a restricted speed of 80 kmph. The following should be ensured while permitting such movement:
                  </p>
                  <div className="space-y-2 ml-4 mb-4">
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">Only one primary outer spring is broken and all other coil springs/air springs in primary as well as secondary suspension are in good condition. All springs must be checked critically before permitting the coach with restricted speed.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">The primary outer spring is broken at only one location which falls within one and a half (1.5) coil length from top/bottom end. The corresponding rubber pad primary bump stop must be intact and there should be no oil-leakage or any physical damage to the Primary Vertical Damper. Further, the control arm lugh should not have any marks of hitting with the Head Brackett.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">The broken spring is not displaced form its position.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span className="text-gray-200">The coach is to be escorted upto destination accompanied with TXR staff.</span>
                    </div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-3 border-l-4 border-red-400">
                    <p className="text-red-200 font-semibold">
                      <strong>Note:</strong> At the destination, broken spring should necessarily be replaced and detailed investigation of failure should be carried out.
                    </p>
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

export default CoilSpringBreakage