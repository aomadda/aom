"use client"
import React from 'react'

const ICFCoaches = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Leading Dimensions of Conventional ICF Coaches
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* ICF Coaches Specifications */}
          <div className="space-y-6">
            {/* Coach 1: A/C FIRST CLASS COACH (SELF GENERATING) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-blue-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-blue-200 font-bold text-lg">Coach 1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">A/C FIRST CLASS COACH (SELF GENERATING)</h3>
                  <div className="bg-blue-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-blue-300 font-semibold">Code: WGFAC</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1313 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">46.2 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">1.4 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">18 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 2: SECOND CLASS 3-TIER SLEEPER COACH */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-green-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-green-200 font-bold text-lg">Coach 2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SECOND CLASS 3-TIER SLEEPER COACH</h3>
                  <div className="bg-green-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-green-300 font-semibold">Code: WGSCN Y</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">39.85 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">5.76 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">72 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 3: SECOND CLASS COACH DAY COACH (108 BERTH) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-purple-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-purple-200 font-bold text-lg">Coach 3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SECOND CLASS COACH DAY COACH (108 BERTH)</h3>
                  <div className="bg-purple-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-purple-300 font-semibold">Code: WGSCZ</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1278 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">36.90 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">8.64 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">108 TO SEAT</div>
                </div>
              </div>
            </div>

            {/* Coach 4: SECOND CLASS, LUGGAGE & BRAKE VAN */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-orange-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-orange-200 font-bold text-lg">Coach 4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SECOND CLASS, LUGGAGE & BRAKE VAN</h3>
                  <div className="bg-orange-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-orange-300 font-semibold">Code: SLR</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">36.92 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">9.92 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">42 TO SEAT</div>
                </div>
              </div>
            </div>

            {/* Coach 5: SECOND CLASS LUGGAGE & BRAKE VAN */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-cyan-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-cyan-200 font-bold text-lg">Coach 5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SECOND CLASS LUGGAGE & BRAKE VAN</h3>
                  <div className="bg-cyan-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-cyan-300 font-semibold">Code: LR</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1295 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">35 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">17 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">--</div>
                </div>
              </div>
            </div>

            {/* Coach 6: SECOND CLASS COACH */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-pink-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-pink-200 font-bold text-lg">Coach 6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SECOND CLASS COACH</h3>
                  <div className="bg-pink-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-pink-300 font-semibold">Code: WGS</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1278 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">36.79 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">7.2 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">90 TO SEAT</div>
                </div>
              </div>
            </div>

            {/* Coach 7: PANTRY CAR */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-indigo-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-indigo-200 font-bold text-lg">Coach 7</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">PANTRY CAR</h3>
                  <div className="bg-indigo-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-indigo-300 font-semibold">Code: WGCB</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">40.30 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">1.92 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">22 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 8: A/C FIRST CLASS CUM A/C 2-TIER SLEEPR (SELF GENERATING) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-emerald-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-emerald-200 font-bold text-lg">Coach 8</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">A/C FIRST CLASS CUM A/C 2-TIER SLEEPR (SELF GENERATING)</h3>
                  <div className="bg-emerald-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-emerald-300 font-semibold">Code: WGACF CW</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1313 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">50.05 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">2.4 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">10 TO SEAT-I AC<br/>20 TO SEAT- II AC</div>
                </div>
              </div>
            </div>

            {/* Coach 9: A/C II CLASS CHAIR CAR (WITH AIR BRAKE) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-rose-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-rose-200 font-bold text-lg">Coach 9</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">A/C II CLASS CHAIR CAR (WITH AIR BRAKE)</h3>
                  <div className="bg-rose-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-rose-300 font-semibold">Code: WSCZA C</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1313 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">49.2 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">5.68 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">73 TO SEAT</div>
                </div>
              </div>
            </div>

            {/* Coach 10: A/C 3-TIER SLEEPER COACH (WITH AIR BRAKE) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-violet-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-violet-200 font-bold text-lg">Coach 10</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">A/C 3-TIER SLEEPER COACH (WITH AIR BRAKE)</h3>
                  <div className="bg-violet-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-violet-300 font-semibold">Code: WACCN</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1313 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">52.53 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">5.12 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">64 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 11: SELF GENERATING A/C SLEEPR CAR */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-teal-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-teal-200 font-bold text-lg">Coach 11</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SELF GENERATING A/C SLEEPR CAR (WITH ROOF MOUNTED A/C PACKAGE)</h3>
                  <div className="bg-teal-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-teal-300 font-semibold">Code: WGACC W</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1313 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">50 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">3.7 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">46 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 12: HIGH CAPACITY PARCEL VAN */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-lime-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-lime-200 font-bold text-lg">Coach 12</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">HIGH CAPACITY PARCEL VAN</h3>
                  <div className="bg-lime-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-lime-300 font-semibold">Code: VPH</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1284 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">32 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">23 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">23 t TO CARRY</div>
                </div>
              </div>
            </div>

            {/* Coach 13: HIGH CAPACITY MOTOR CUM PARCEL VAN */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-amber-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-amber-200 font-bold text-lg">Coach 13</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">HIGH CAPACITY MOTOR CUM PARCEL VAN (16.25t AXLE LOAD BOGIE)</h3>
                  <div className="bg-amber-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-amber-300 font-semibold">Code: VPU</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1295 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">31.1 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">18 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">18 t TO CARRY</div>
                </div>
              </div>
            </div>

            {/* Coach 14: MILK TANK VAN TYPE 40,000 LTRS/ 9000 GALLONS */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-slate-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-slate-200 font-bold text-lg">Coach 14</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">MILK TANK VAN TYPE 40,000 LTRS/ 9000 GALLONS</h3>
                  <div className="bg-slate-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-slate-300 font-semibold">Code: VVN</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">14070 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">12800 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">2750 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">--</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">33.7 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">41.2 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">7925 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2515 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">18.72 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">40,000 LTRS/ 9000 GALLONS</div>
                </div>
              </div>
            </div>

            {/* Coach 15: NEW MILK TANK VAN (44,660 LITRES CAPACITY) ON ICF ALL COILED BOGIE */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-stone-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-stone-200 font-bold text-lg">Coach 15</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">NEW MILK TANK VAN (44,660 LITRES CAPACITY) ON ICF ALL COILED BOGIE</h3>
                  <div className="bg-stone-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-stone-300 font-semibold">Code: VVNH1</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">12588 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">11318 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3006 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1269 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">29.70 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">51.58 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">6794 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">20.32t</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">44,660 LITRES CAPACITY</div>
                </div>
              </div>
            </div>

            {/* Coach 16: INSPECTION CARRIAGE */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-neutral-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-neutral-200 font-bold text-lg">Coach 16</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">INSPECTION CARRIAGE</h3>
                  <div className="bg-neutral-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-neutral-300 font-semibold">Code: RA</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">41.3 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">1 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">--</div>
                </div>
              </div>
            </div>

            {/* Coach 17: FIRST CLASS */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-fuchsia-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-fuchsia-200 font-bold text-lg">Coach 17</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">FIRST CLASS</h3>
                  <div className="bg-fuchsia-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-fuchsia-300 font-semibold">Code: FC</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">40.03 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">3.12 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">39 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 18: NMG (NEW MODIFIED GOODS) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-sky-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-sky-200 font-bold text-lg">Coach 18</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">NMG (NEW MODIFIED GOODS)</h3>
                  <div className="bg-sky-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-sky-300 font-semibold">Code: NMG</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">32 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">9.2 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">13 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">--</div>
                </div>
              </div>
            </div>

            {/* Coach 19: ICF DESIGN AUTOMOBILE CARRIER COACH */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-orange-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-orange-200 font-bold text-lg">Coach 19</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">ICF DESIGN AUTOMOBILE CARRIER COACH</h3>
                  <div className="bg-orange-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-orange-300 font-semibold">Code: NMGH</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3245 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1378 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">32 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">12 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">--</div>
                </div>
              </div>
            </div>

            {/* Coach 20: ICF DESIGN AUTOMOBILE CARRIER COACH WITH SIDE ENTRY */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-lime-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-lime-200 font-bold text-lg">Coach 20</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">ICF DESIGN AUTOMOBILE CARRIER COACH WITH SIDE ENTRY</h3>
                  <div className="bg-lime-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-lime-300 font-semibold">Code: NMGHS</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3245 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1378 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">32 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">18 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">--</div>
                </div>
              </div>
            </div>

            {/* Coach 21: A/C FIRST CLASS COACH */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-emerald-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-emerald-200 font-bold text-lg">Coach 21</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">A/C FIRST CLASS COACH</h3>
                  <div className="bg-emerald-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-emerald-300 font-semibold">Code: WFAC</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1303 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">44 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">18 TO SEAT/SLEEP</div>
                </div>
              </div>
            </div>

            {/* Coach 22: A/C 2-TIER SLEEPER COACH (WITH AIR BRAKE) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-teal-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-teal-200 font-bold text-lg">Coach 22</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">A/C 2-TIER SLEEPER COACH (WITH AIR BRAKE)</h3>
                  <div className="bg-teal-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-teal-300 font-semibold">Code: WACCW</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
              </div>
            </div>

            {/* Coach 23: SELF GENERATING A/C 3-TIER SLEEPER COACH (WITH AIR BRAKE) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                <div className="bg-rose-600/30 rounded-lg px-4 py-2 shrink-0">
                  <span className="text-rose-200 font-bold text-lg">Coach 23</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2">SELF GENERATING A/C 3-TIER SLEEPER COACH (WITH AIR BRAKE)</h3>
                  <div className="bg-rose-900/20 rounded-lg px-3 py-1 inline-block">
                    <span className="text-rose-300 font-semibold">Code: WGACC N</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Buffers:</span>
                  <div className="mt-1 text-white font-bold">22297 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Length over Body:</span>
                  <div className="mt-1 text-white font-bold">21337 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Overall Width:</span>
                  <div className="mt-1 text-white font-bold">3250 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Height of floor from RL:</span>
                  <div className="mt-1 text-white font-bold">1312 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Tare Weight:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Carrying Capacity:</span>
                  <div className="mt-1 text-white font-bold">---</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Bogie Centres:</span>
                  <div className="mt-1 text-white font-bold">14783 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Wheel Base:</span>
                  <div className="mt-1 text-white font-bold">2896 mm</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="font-semibold text-gray-300">Max. Axle Load:</span>
                  <div className="mt-1 text-white font-bold">16.25 T</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 md:col-span-2 lg:col-span-3">
                  <span className="font-semibold text-gray-300">Accommodation:</span>
                  <div className="mt-1 text-white font-bold">64 TO SEAT/SLEEP</div>
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

export default ICFCoaches