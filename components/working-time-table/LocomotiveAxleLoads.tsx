"use client"
import React from 'react'

const LocomotiveAxleLoads = () => {
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
            <h1 className="lg:text-5xl text-3xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Electric Locomotive Axle Load
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Passenger Locomotive Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Passenger Locomotives
            </h2>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAM4</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">18.8 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAG5</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods/Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">20 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAG7</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods/Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">20.5 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAP1</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">18.8 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAP4</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">19 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAP5</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">19.5 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAP7</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">20.5 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAP7 HS</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">18.08 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold text-lg mb-2">WAG 9</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Service Chg</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-blue-400">20.5 Tonnes</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goods Locomotive Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Goods Locomotives
            </h2>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WAG 9H</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">22 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WAG 9HH</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">22 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WAG 9HC</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">22 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WAG 12B</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">22.5 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WAG 11</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">21 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WCAM 3</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">20.2 Tonnes</span></p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1">
                    <h3 className="text-green-300 font-bold text-lg mb-2">WAG C3</h3>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm">Service: Goods</p>
                      <p className="text-gray-200 font-semibold">Axle Load: <span className="text-green-400">20.5 Tonnes</span></p>
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

export default LocomotiveAxleLoads