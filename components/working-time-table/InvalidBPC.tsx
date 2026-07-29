"use client"
import React from 'react'

const InvalidBPC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-xl font-bold bg-linear-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BPC INVALIDATION CONDITIONS
            </h1>
            <h2 className="lg:text-2xl text-lg font-medium text-orange-300 mb-4">When BPC becomes Invalid for Different Types of Examinations</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-md text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Brake Power Certificate (BPC) becomes invalid under specific conditions for different types of examinations
            </p>
          </div>

          {/* Important Note Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Note
            </h2>
            <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
              <p className="text-gray-200 text-md leading-relaxed">
                As per Railway Board letter No. 2002/M (N)/204/10/Vol.I dated 30.07.2009 regarding
                validity of BPC for detachment/ attachment of 5 BLC/BLL wagons permitted en-route during
                validity of BPC.
              </p>
            </div>
          </div>

          {/* Invalidation Conditions */}
          <div className="mb-12">
            <h3 className="lg:text-4xl text-2xl font-bold text-white mb-12 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              BPC Invalidation Conditions
            </h3>
            <div className="space-y-8">
              {/* Condition 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
                  <span className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">1</span>
                  <h4 className="lg:text-2xl text-xl font-bold text-white">Rake Integrity Disturbance</h4>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                  <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                    <h5 className="lg:text-xl text-lg font-bold text-blue-300 mb-4 flex items-center">
                      CC Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Rake integrity disturbed by more than 4 wagons within the validity of the BPC. Only
                      up to 4 wagons attachment/detachment of CC fit wagons is permitted
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                    <h5 className="lg:text-xl text-lg font-bold text-green-300 mb-4 flex items-center">
                      Premium Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Rake integrity disturbed by more than 4 wagons within the validity of the BPC.
                      Only up to 4 wagons attachment/ detachment is permitted enroute during
                      validity of BPC.
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 lg:col-span-1 md:col-span-2">
                    <h5 className="lg:text-xl text-lg font-bold text-purple-300 mb-4 flex items-center">
                      End to End Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Rake integrity disturbed by more than 4 wagons within the validity of the BPC.
                      Only up to 4 wagons attachment/ detachment is permitted enroute during
                      validity of BPC.
                    </p>
                  </div>
                </div>
              </div>

              {/* Condition 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
                  <span className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">2</span>
                  <h4 className="lg:text-2xl text-xl font-bold text-white">Stabling Duration Limit</h4>
                </div>
                <div className="bg-linear-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-orange-400/30">
                  <h5 className="lg:text-xl text-lg font-bold text-orange-300 mb-4 flex items-center">
                    All Examination Types
                  </h5>
                  <p className="text-gray-200 text-md leading-relaxed">
                    The rake shall not be stabled for more than <strong className="text-orange-300">24 hours</strong> at Train examination Yard.
                  </p>
                </div>
              </div>

              {/* Condition 3 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
                  <span className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">3</span>
                  <h4 className="lg:text-2xl text-xl font-bold text-white">Zone Movement Restriction</h4>
                </div>
                <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-blue-400/30">
                  <h5 className="lg:text-xl text-lg font-bold text-blue-300 mb-4 flex items-center">
                    CC Examination Only
                  </h5>
                  <p className="text-gray-200 text-md leading-relaxed">
                    CC rakes moved to any other Zone not mentioned in the circuit.
                  </p>
                </div>
              </div>

              {/* Condition 4 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
                  <span className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">4</span>
                  <h4 className="lg:text-2xl text-xl font-bold text-white">Movement & Loading Conditions</h4>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                    <h5 className="lg:text-xl text-lg font-bold text-blue-300 mb-4 flex items-center">
                      CC Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Overdue CC rake is not moved in the direction of PME depot.
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                    <h5 className="lg:text-xl text-lg font-bold text-green-300 mb-4 flex items-center">
                      Premium Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Premium rake moves for loading after 12 days from the date of issue of BPC.
                    </p>
                  </div>
                </div>
              </div>

              {/* Condition 5 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
                  <span className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">5</span>
                  <h4 className="lg:text-2xl text-xl font-bold text-white">Time & Distance Limits</h4>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                  <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                    <h5 className="lg:text-xl text-lg font-bold text-blue-300 mb-4 flex items-center">
                      CC Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      CC Rake running more than <strong className="text-blue-300">35 days/7500 kms</strong> or as per latest
                      guidelines issued by Railway Board.
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                    <h5 className="lg:text-xl text-lg font-bold text-green-300 mb-4 flex items-center">
                      Premium Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Empty rake running after the <strong className="text-green-300">12th day</strong> of issue of BPC or as per latest
                      guidelines issued by Railway Board.
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 lg:col-span-1 md:col-span-2">
                    <h5 className="lg:text-xl text-lg font-bold text-purple-300 mb-4 flex items-center">
                      End to End Examination
                    </h5>
                    <p className="text-gray-200 leading-relaxed">
                      Destination stations not mentioned or unsigned corrections of destination
                      name in the BPC of loaded rakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mb-12">
            <h3 className="lg:text-4xl text-2xl font-bold text-white mb-6 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Examination Type Summary
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 py-4 px-4">
                  <h4 className="lg:text-2xl text-xl font-bold text-white flex items-center">
                    <span className="text-3xl mr-3">🚂</span>
                    CC Examination
                  </h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">Rake integrity (4 wagons limit)</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">24hrs stabling limit</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">Zone movement restriction</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">PME depot movement</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">35 days/7500 kms limit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-linear-to-r from-green-600 to-green-700 py-4 px-4">
                  <h4 className="lg:text-2xl text-xl font-bold text-white flex items-center">
                    <span className="text-3xl mr-3">⭐</span>
                    Premium Examination
                  </h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">Rake integrity (4 wagons limit)</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">24hrs stabling limit</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">12 days loading limit</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">12 days empty rake limit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 lg:col-span-1 md:col-span-2">
                <div className="bg-linear-to-r from-purple-600 to-purple-700 py-4 px-4">
                  <h4 className="lg:text-2xl text-xl font-bold text-white flex items-center">
                    <span className="text-3xl mr-3">🔍</span>
                    End to End Examination
                  </h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">Rake integrity (4 wagons limit)</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">24hrs stabling limit</span>
                    </div>
                    <div className="flex items-center group">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-200 text-lg">Destination station validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Points
            </h3>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-white/10 rounded-xl p-4 transition-all duration-300">
                  <span className="w-8 h-8 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-lg group-hover:scale-110 transition-transform">!</span>
                  <div>
                    <h4 className="font-semibold text-white lg:text-xl text-lg mb-2">Wagon Limit</h4>
                    <p className="text-gray-300 lg:text-lg text-md">Maximum 4 wagons attachment/detachment permitted</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:bg-white/10 rounded-xl p-4 transition-all duration-300">
                  <span className="w-8 h-8 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-lg group-hover:scale-110 transition-transform">!</span>
                  <div>
                    <h4 className="font-semibold text-white lg:text-xl text-lg mb-2">Stabling Time</h4>
                    <p className="text-gray-300 lg:text-lg text-md">24 hours maximum at Train examination Yard</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-white/10 rounded-xl p-4 transition-all duration-300">
                  <span className="w-8 h-8 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-lg group-hover:scale-110 transition-transform">!</span>
                  <div>
                    <h4 className="font-semibold text-white lg:text-xl text-lg mb-2">Time Limits</h4>
                    <p className="text-gray-300 lg:text-lg text-md">CC: 35 days/7500 kms, Premium: 12 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:bg-white/10 rounded-xl p-4 transition-all duration-300">
                  <span className="w-8 h-8 bg-linear-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-lg group-hover:scale-110 transition-transform">!</span>
                  <div>
                    <h4 className="font-semibold text-white lg:text-xl text-lg mb-2">BLC/BLL Wagons</h4>
                    <p className="text-gray-300 lg:text-lg text-md">5 BLC/BLL wagons permitted en-route</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-red-600 to-orange-600 text-white rounded-2xl shadow-2xl py-4 px-2 text-center border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-white/20 lg:p-3 p-2 rounded-full mr-4 backdrop-blur-sm">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              BPC Compliance
            </h3>
            <p className="lg:text-xl text-md mb-6 text-gray-100">
              Strict adherence to BPC validity conditions ensures safe and compliant freight operations
            </p>
            <p className="text-sm opacity-90 text-gray-200">(For Official Railway Operations Reference)</p>
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

export default InvalidBPC