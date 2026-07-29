"use client"
import React from 'react'

const FreightTrainExamination = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-900 via-red-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-orange-500 to-red-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              FREIGHT TRAIN EXAMINATION
            </h1>
            <h2 className="lg:text-4xl text-xl font-semibold text-orange-300 mb-4">Examination Points in South Central Railway</h2>
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-lg text-md text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive examination system ensuring safe and efficient freight operations across all divisions
            </p>
          </div>

          {/* Examination Infrastructure Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Examination Infrastructure
            </h2>
            <p className="lg:text-lg text-md text-gray-200 mb-6 text-center">
              The examination points on SCR shall be as under for ensuring safe and efficient freight operations
            </p>
            
            <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
              <h3 className="lg:text-2xl text-xl font-bold text-yellow-300 mb-4 flex items-center">
                Special Note
              </h3>
              <p className="lg:text-lg text-md text-gray-200 leading-relaxed">
                62 Nos of privately owned Tank Wagons (BTCS) loaded with Caustic soda owned by M/s
                Andhra sugar Ltd, Tanuku, being examined on end-to-end pattern at freight examination
                facilities developed at KVR by the firm.
              </p>
            </div>
          </div>

          {/* Examination Points by Division */}
          <div className="mb-6">
            <h3 className="lg:text-4xl text-2xl font-bold text-white mb-6 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-purple-500 lg:p-4 p-2 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Examination Points by Division
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SC Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 px-2">
                  <h4 className="lg:text-2xl text-xl font-bold flex items-center">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚂</span>
                    SC Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-4">
                    <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-blue-300 mb-2">CC+ Premium Base Depot</h5>
                      <p className="text-blue-200">RDM, BPA & SNF</p>
                    </div>
                    <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4 rounded-lg border border-green-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-green-300 mb-2">Premium Examination Point</h5>
                      <p className="text-green-200">RDM, BPA, SNF, DKJ</p>
                    </div>
                    <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-lg border border-purple-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-purple-300 mb-2">End to End Examination</h5>
                      <p className="text-purple-200">RDM, BPA, SNF, DKJ & KZJ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BZA Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-2">
                  <h4 className="lg:text-2xl text-xl font-bold flex items-center">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚂</span>
                    BZA Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-4">
                    <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4 rounded-lg border border-green-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-green-300 mb-2">CC+ Premium Base Depot</h5>
                      <p className="text-green-200">BZA & COA</p>
                    </div>
                    <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-blue-300 mb-2">Premium Examination Point</h5>
                      <p className="text-blue-200">BZA, COA & BTTR</p>
                    </div>
                    <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-lg border border-purple-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-purple-300 mb-2">End to End Examination</h5>
                      <p className="text-purple-200">BZA, COA, BTTR & RJY*</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GTL Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white py-4 px-2">
                  <h4 className="lg:text-2xl text-xl font-bold flex items-center">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚂</span>
                    GTL Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-4">
                    <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-lg border border-purple-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-purple-300 mb-2">CC+ Premium Base Depot</h5>
                      <p className="text-purple-200">GY</p>
                    </div>
                    <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4 rounded-lg border border-green-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-green-300 mb-2">Premium Examination Point</h5>
                      <p className="text-green-200">GY</p>
                    </div>
                    <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-blue-300 mb-2">End to End Examination</h5>
                      <p className="text-blue-200">GY</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NED Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-red-600 to-red-700 text-white py-4 px-2">
                  <h4 className="lg:text-2xl text-xl font-bold flex items-center">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚂</span>
                    NED Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-4">
                    <div className="bg-linear-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm p-4 rounded-lg border border-red-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-red-300 mb-2">CC+ Premium Base Depot</h5>
                      <p className="text-red-200">-</p>
                    </div>
                    <div className="bg-linear-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm p-4 rounded-lg border border-orange-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-orange-300 mb-2">Premium Examination Point</h5>
                      <p className="text-orange-200">PAU</p>
                    </div>
                    <div className="bg-linear-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm p-4 rounded-lg border border-yellow-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-yellow-300 mb-2">End to End Examination</h5>
                      <p className="text-yellow-200">PAU</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GNT Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-indigo-600 to-indigo-700 text-white py-4 px-2">
                  <h4 className="lg:text-2xl text-xl font-bold flex items-center">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚂</span>
                    GNT Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-4">
                    <div className="bg-linear-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm p-4 rounded-lg border border-indigo-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-indigo-300 mb-2">CC+ Premium Base Depot</h5>
                      <p className="text-indigo-200">-</p>
                    </div>
                    <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-blue-300 mb-2">Premium Examination Point</h5>
                      <p className="text-blue-200">NLPD</p>
                    </div>
                    <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4 rounded-lg border border-green-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-green-300 mb-2">End to End Examination</h5>
                      <p className="text-green-200">NLPD</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HYB Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-teal-600 to-teal-700 text-white py-4 px-2">
                  <h4 className="lg:text-2xl text-xl font-bold flex items-center">
                    <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚂</span>
                    HYB Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-4">
                    <div className="bg-linear-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm p-4 rounded-lg border border-teal-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-teal-300 mb-2">CC+ Premium Base Depot</h5>
                      <p className="text-teal-200">-</p>
                    </div>
                    <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-blue-300 mb-2">Premium Examination Point</h5>
                      <p className="text-blue-200">-</p>
                    </div>
                    <div className="bg-linear-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4 rounded-lg border border-green-400/30 hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-green-300 mb-2">End to End Examination</h5>
                      <p className="text-green-200">NZB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Material Train Depots */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-amber-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Material Train Depots
            </h3>
            <div className="bg-linear-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <h4 className="lg:text-2xl text-lg font-bold text-orange-300 mb-6 flex items-center">
                For Only Material Train (Depots)
              </h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['GY', 'KZJ', 'RJY', 'BTTR', 'NLPD', 'PAU'].map((depot, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-orange-400/30 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    <span className="lg:text-3xl text-xl font-bold text-orange-300 group-hover:text-orange-200 transition-colors duration-300">{depot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Important Notes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Important Notes
            </h3>
            <ul className="space-y-4">
              {/* Item a */}
              <li className="relative flex items-center justify-center flex-col gap-4 bg-linear-to-br from-blue-600/20 via-blue-500/20 to-blue-400/30 p-6 rounded-xl border-blue-300 shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full shadow-xl bg-linear-to-tr from-blue-400 to-cyan-500 text-white text-2xl font-bold border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  a
                </span>
                <div className="ml-0">
                  <h4 className="lg:text-xl text-lg font-bold text-blue-200 mb-2 flex items-center gap-2">
                    
                    Infrastructure Upgradation
                  </h4>
                  <p className="text-gray-100 leading-relaxed text-md pl-1">
                    All CC rake and premium points should be upgraded to &lsquo;A&rsquo; category, and works sanctioned
                    should be completed.
                  </p>
                </div>
              </li>
              {/* Item b */}
              <li className="relative flex items-center justify-center flex-col gap-4 bg-linear-to-br from-green-600/20 via-green-500/20 to-green-400/30 p-6 rounded-xl border-green-300 shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full shadow-xl bg-linear-to-tr from-green-400 to-green-500 text-white text-2xl font-bold border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  b
                </span>
                <div className="ml-0">
                  <h4 className="lg:text-xl text-lg font-bold text-green-200 mb-2 flex items-center gap-2">
                    
                    ROH Depots
                  </h4>
                  <p className="text-gray-100 leading-relaxed text-md pl-1">
                    RDM, BPA, SNF (for BLC, BCFC & BCCW), BZA and GY are nominated as ROH depots.
                  </p>
                </div>
              </li>
              {/* Item c */}
              <li className="relative flex items-center justify-center flex-col gap-4 bg-linear-to-br from-purple-600/20 via-purple-500/20 to-purple-400/30 p-6 rounded-xl border-purple-300 shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full shadow-xl bg-linear-to-tr from-purple-400 to-pink-500 text-white text-2xl font-bold border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  c
                </span>
                <div className="ml-0">
                  <h4 className="lg:text-xl text-lg font-bold text-purple-200 mb-2 flex items-center gap-2">
                    Infrastructure Requirements
                  </h4>
                  <p className="text-gray-100 leading-relaxed text-md pl-1">
                    For carrying out CC & Premium rake examination, Divisions should plan and provide the
                    following infrastructure facilities, Machinery &amp; Plants without fail.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Types of Examinations */}
          <div className="mb-16">
            <h3 className="lg:text-4xl text-2xl font-bold text-white mb-12 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              Types of Examinations
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 px-4">
                  <h4 className="lg:text-xl text-lg font-bold">1. CC RAKE EXAMINATION</h4>
                </div>
                <div className="p-4">
                  <div className="text-center">
                    <div className="lg:w-20 lg:h-20 w-10 h-10 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <span className="lg:text-3xl text-xl">🚂</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-md">
                      Comprehensive examination of Container Carrying rakes for safety and compliance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-4">
                  <h4 className="lg:text-xl text-lg font-bold">2. PREMIUM RAKE EXAMINATION</h4>
                </div>
                <div className="p-4">
                  <div className="text-center">
                    <div className="lg:w-20 lg:h-20 w-10 h-10 bg-linear-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <span className="lg:text-3xl text-xl">⭐</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-md">
                      High-priority examination for premium freight trains with enhanced safety protocols
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white py-4 px-4">
                  <h4 className="lg:text-xl text-lg font-bold">3. END TO END EXAMINATION</h4>
                </div>
                <div className="p-4">
                  <div className="text-center">
                    <div className="lg:w-20 lg:h-20 w-10 h-10 bg-linear-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <span className="lg:text-3xl text-xl">🔍</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-md">
                      Complete examination covering entire train length from start to finish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-2xl p-6 text-center border border-white/20">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <svg className="lg:w-12 lg:h-12 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="lg:text-4xl text-2xl font-bold mb-6">Freight Train Safety</h3>
            <p className="lg:text-2xl text-lg mb-6 text-orange-100">
              Comprehensive examination system ensuring safe and efficient freight operations
            </p>
            <p className="lg:text-lg text-md opacity-90 text-orange-200">(For Official Railway Operations Reference)</p>
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

export default FreightTrainExamination