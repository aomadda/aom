'use client'
import React from 'react'
import { 
  Shield,
  FileText
} from 'lucide-react'

const AntiCollisionDevice = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-rose-500/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-purple-500/70 via-pink-500/70 to-rose-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-purple-700/60 to-pink-800/60 backdrop-blur-md shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              ANTI COLLISION DEVICE (ACD)
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Main Content Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Anti Collision Device Overview
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                    <ul className="space-y-4 list-none">
                      {/* 1. Overview */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500/70 to-cyan-500/70 shadow-lg border border-white/20 text-white font-bold text-xl mr-2 mt-1">
                          1
                        </span>
                        <div>
                          <span className="font-semibold text-blue-100 block mb-1">Comprehensive Safety System</span>
                          <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                            The <b>Anti Collision Device (ACD)</b> is an advanced Electronic Control System developed to minimize collisions and enhance safety on the railways. It operates as a <span className="italic">non-signaling</span> solution, providing a crucial shield against collisions caused by human error, limitations, or equipment failure. Notably, it <b>does not replace</b> or interfere with existing signaling or interlocking systems.
                          </span>
                        </div>
                      </li>
                      {/* 2. ACD Network & Components */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500/70 to-cyan-500/70 shadow-lg border border-white/20 text-white font-bold text-xl mr-2 mt-1">
                          2
                        </span>
                        <div>
                          <span className="font-semibold text-blue-100 block mb-1">Distributed Control Network</span>
                          <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                            The ACD system is a <b>network</b> comprising:
                            <ul className="list-disc ml-6 mt-2 space-y-1 text-blue-50/90">
                              <li>Onboard (Mobile) ACDs for Locomotives and Guard vans</li>
                              <li>Track-side (Stationary) ACDs</li>
                              <li>Level Crossing ACDs</li>
                              <li>Loco Shed ACDs</li>
                              <li>Sensor-based ACOs and ACO Repeaters</li>
                            </ul>
                            All ACDs communicate via radio when within a radial range of <b>at least 3 km</b>. Onboard computers leverage GPS to determine train location, speed, and direction, enabling real-time distributed decision making and automatic brake application without user intervention. 
                          </span>
                        </div>
                      </li>
                      {/* 3. Collision Prevention Features */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500/70 to-cyan-500/70 shadow-lg border border-white/20 text-white font-bold text-xl mr-2 mt-1">
                          3
                        </span>
                        <div>
                          <span className="font-semibold text-blue-100 block mb-1">Intelligent Safety Actions</span>
                          <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                            When two ACOs are at risk of collision, the <b>system triggers automatic braking</b> to prevent an accident and is specifically designed to interface seamlessly with diverse locomotive braking systems. The system uses both embedded software and operational rules for these critical actions.
                          </span>
                        </div>
                      </li>
                      {/* 4. Level Crossing & Slope Monitoring */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500/70 to-cyan-500/70 shadow-lg border border-white/20 text-white font-bold text-xl mr-2 mt-1">
                          4
                        </span>
                        <div>
                          <span className="font-semibold text-blue-100 block mb-1">Level Crossing & Terrain Safety</span>
                          <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                            The system delivers <b>audio-visual &quot;Train Approach&quot;</b> warnings to road users at level crossings. At manned LC gates, if a &quot;Gate Open&quot; condition is detected, the train/loco speed is automatically regulated. It can also monitor dangerous land slopes using inclinometer grids and provides timely warnings to prevent accidents. Importantly, the ACD functions <span className="italic">without disrupting normal train operations</span>.
                          </span>
                        </div>
                      </li>
                      {/* 5. Deployment Status */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500/70 to-cyan-500/70 shadow-lg border border-white/20 text-white font-bold text-xl mr-2 mt-1">
                          5
                        </span>
                        <div>
                          <span className="font-semibold text-blue-100 block mb-1">Extensive Deployment</span>
                          <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                            Over <b>2,000 ACD units</b> have been installed on more than <b>2,700 route kilometers</b> of Indian Railways, with major installations on the North East Frontier and Konkan Railway networks. Plans are in motion to expand ACD coverage to the entire broad gauge network.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default AntiCollisionDevice
