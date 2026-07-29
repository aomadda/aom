"use client"
import React from 'react'

const ReliefTrains = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden mt-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-yellow-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-linear-to-r from-red-600 to-orange-600 text-white py-4 px-2 rounded-xl shadow-2xl mb-8 border border-red-400/30 backdrop-blur-lg">
              <div className="flex flex-col gap-4 items-center justify-center mb-4">
                <div className="bg-white/20 rounded-full p-3 mr-4 backdrop-blur-sm">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="lg:text-4xl text-xl font-bold animate-fade-in">Accident Relief Equipment</h1>
              </div>
              <p className="lg:text-lg text-sm font-medium text-red-100">Status of 140T BD Cranes, ARTs, ARMVs & RARVs over SCR</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-4xl text-xl font-bold text-red-300 mb-6 flex flex-col gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-red-500 to-orange-500 p-3 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-6 lg:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Emergency Response Infrastructure
              </h2>
              <p className="lg:text-lg text-md text-gray-200 mb-6 leading-relaxed">
                Comprehensive network of <span className="font-medium text-red-400 bg-red-900/30 px-2 py-1 rounded">Accident Relief Trains (ARTs)</span> and
                <span className="font-medium text-red-400 bg-red-900/30 px-2 py-1 rounded"> specialized vehicles</span> across South Central Railway
              </p>
              
              <div className="bg-linear-to-r from-yellow-500/20 to-orange-500/20 border-l-4 border-yellow-400 p-4 rounded-xl backdrop-blur-sm border">
                <h3 className="lg:text-2xl text-xl font-medium text-yellow-300 mb-3 flex items-center">
                  Equipment Classification:
                </h3>
                <p className="lg:text-lg text-sm text-yellow-200 leading-relaxed">
                  <strong>&ldquo;A&rdquo; Class ART:</strong> 140T DHBD Crane + HRE Set<br/>
                  <strong>&ldquo;B&rdquo; Class ART:</strong> HRE Set Only
                </p>
              </div>
            </div>
          </div>

          {/* ART Locations Grid */}
          <div className="mb-8">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-6 text-center flex flex-col gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              ART Locations Across Divisions
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* SC Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 px-3">
                  <h4 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center">
                    <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    SC Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-blue-400/30">
                      <h5 className="font-bold text-blue-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                        SC Station
                      </h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Type:</span>
                          <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-400/30 backdrop-blur-sm">&quot;A&quot; Class</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Crane:</span>
                          <span className="text-sm text-gray-300">Cowans Sheldon New Design-140T</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-green-400/30">
                      <h5 className="font-bold text-green-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                        SC Station
                      </h5>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">Type:</span>
                        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium border border-green-400/30 backdrop-blur-sm">&quot;B&quot; Class (SPART)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KZJ Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-green-600 to-green-700 text-white py-3 px-3">
                  <h4 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center">
                    <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    KZJ Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-6">
                    <div className="bg-green-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-green-400/30">
                      <h5 className="font-bold text-green-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                        KZJ Station
                      </h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Type:</span>
                          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium border border-green-400/30 backdrop-blur-sm">&quot;A&quot; Class</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Crane:</span>
                          <span className="text-sm text-gray-300">Cowans Sheldon Old Design-140T</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-blue-400/30">
                      <h5 className="font-bold text-blue-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                        KZJ Station
                      </h5>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">Type:</span>
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-400/30 backdrop-blur-sm">&quot;B&quot; Class (SPART)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BZA Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white py-3 px-3">
                  <h4 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center">
                    <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    BZA Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-6">
                    <div className="bg-purple-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-purple-400/30">
                      <h5 className="font-bold text-purple-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                        BZA Station
                      </h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Type:</span>
                          <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-medium border border-purple-400/30 backdrop-blur-sm">&quot;A&quot; Class</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Crane:</span>
                          <span className="text-sm text-gray-300">Cowans Sheldon Old Design-140T</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-orange-400/30">
                      <h5 className="font-bold text-orange-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                        BZA Station
                      </h5>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">Type:</span>
                        <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">&quot;B&quot; Class (SPART)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Divisions */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-orange-600 to-orange-700 text-white py-3 px-3">
                  <h4 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center">
                    <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    Other Locations
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">BPA</span>
                      <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">HYB NZB</span>
                      <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">RJY</span>
                      <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">BTTR</span>
                      <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GTL Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-indigo-600 to-indigo-700 text-white py-3 px-3">
                  <h4 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center">
                    <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    GTL Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-6">
                    <div className="bg-indigo-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-indigo-400/30">
                      <h5 className="font-bold text-indigo-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-indigo-400 rounded-full mr-2"></span>
                        GY Station
                      </h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Type:</span>
                          <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-lg font-medium border border-indigo-400/30 backdrop-blur-sm">&quot;A&quot; Class</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Crane:</span>
                          <span className="text-sm text-gray-300">Cowans Sheldon Old Design-140T</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">GTL</span>
                        <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-lg font-medium border border-indigo-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">RU</span>
                        <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-lg font-medium border border-indigo-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">DMM</span>
                        <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-lg font-medium border border-indigo-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NED Division */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-linear-to-r from-red-600 to-red-700 text-white py-3 px-3">
                  <h4 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center">
                    <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                      <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    NED Division
                  </h4>
                </div>
                <div className="p-2">
                  <div className="space-y-6">
                    <div className="bg-red-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-red-400/30">
                      <h5 className="font-bold text-red-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                        PAU Station
                      </h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Type:</span>
                          <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg font-medium border border-red-400/30 backdrop-blur-sm">&quot;A&quot; Class</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium text-gray-200">Crane:</span>
                          <span className="text-sm text-gray-300">Gottwald New Design-140T</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 backdrop-blur-sm p-3 py-4 rounded-xl border border-green-400/30">
                      <h5 className="font-bold text-green-300 mb-4 text-lg flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                        GNT Station
                      </h5>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-medium text-gray-200">Type:</span>
                        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium border border-green-400/30 backdrop-blur-sm">&quot;B&quot; Class</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 140-T DHBD Cranes Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-6 text-center flex flex-col gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-2 rounded-full mr-3 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
            140-T DHBD Cranes Specifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { location: 'SC', division: 'SC', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'New', year: '2001', returnDate: '2029', speed: '100 kmph' },
                { location: 'KZJ', division: 'SC', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'Old', year: '1989', returnDate: '2025', speed: '75 kmph' },
                { location: 'BZA', division: 'BZA', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'Old', year: '1990', returnDate: '2026', speed: '75 kmph' },
                { location: 'GY', division: 'GTL', type: '"A" Class', capacity: '140 Ton', make: 'Cowans Sheldon', design: 'Old', year: '1990', returnDate: '2026', speed: '75 kmph' },
                { location: 'PAU', division: 'NED', type: '"A" Class', capacity: '140 Ton', make: 'Gottwald', design: 'New', year: '2009', returnDate: '2025', speed: '100 kmph' }
              ].map((crane, index) => (
                <div key={index} className="bg-linear-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-3 py-4 border border-blue-400/30 hover:bg-blue-500/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h4 className="text-xl md:text-2xl font-bold text-blue-300">{crane.location}</h4>
                    <p className="text-sm text-gray-300">{crane.division} Division</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">Type:</span>
                      <span className="font-medium text-blue-300">{crane.type}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">Capacity:</span>
                      <span className="font-medium text-green-300">{crane.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">Make:</span>
                      <span className="text-sm text-gray-300">{crane.make}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">Design:</span>
                      <span className={`font-medium ${crane.design === 'New' ? 'text-green-300' : 'text-orange-300'}`}> 
                        {crane.design}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">Year:</span>
                      <span className="text-sm text-gray-300">{crane.year}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">POH/MLR:</span>
                      <span className="text-sm text-gray-300">{crane.returnDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg">
                      <span className="font-medium text-gray-200">Speed:</span>
                      <span className="font-medium text-purple-300">{crane.speed}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARMVs and RARVs */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* ARMVs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-green-600 to-green-700 text-white py-3 px-3">
                <h3 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center text-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  Accident Relief Medical Vans (ARMVs)
                </h3>
              </div>
              <div className="p-2">
                <div className="space-y-3">
                  {[
                    { div: 'SC', location: 'SC', type: 'SPARMV' },
                    { div: 'SC', location: 'KZJ', type: 'HS-SPARMV' },
                    { div: 'SC', location: 'HYB NZB', type: 'SPARMV' },
                    { div: 'BZA', location: 'BZA', type: 'HS-SPARMV' },
                    { div: 'BZA', location: 'RJY', type: 'SPARMV' },
                    { div: 'BZA', location: 'BTTR', type: 'SPARMV' },
                    { div: 'GTL', location: 'GTL', type: 'HS-SPARMV' },
                    { div: 'GTL', location: 'RU', type: 'Conventional' },
                    { div: 'GTL', location: 'DMM', type: 'Conventional' },
                    { div: 'GTL', location: 'GNT', type: 'HS-SPARMV' },
                    { div: 'NED', location: 'PAU', type: 'HS-SPARMV' }
                  ].map((armv, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border-b border-gray-700/30 last:border-b-0">
                      <div>
                        <span className="font-medium text-gray-200">{armv.location}</span>
                        <span className="text-sm text-gray-400 ml-2">({armv.div})</span>
                      </div>
                      <span className={`px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border ${
                        armv.type.includes('HS') ? 'bg-green-500/20 text-green-300 border-green-400/30' : 
                        armv.type === 'Conventional' ? 'bg-blue-500/20 text-blue-300 border-blue-400/30' : 
                        'bg-orange-500/20 text-orange-300 border-orange-400/30'
                      }`}>
                        {armv.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RARVs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white py-3 px-3">
                <h3 className="lg:text-4xl text-xl font-bold flex flex-col gap-4 items-center justify-center text-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="lg:w-6 lg:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </span>
                  Road Accident Restoration Vehicles (RARVs)
                </h3>
              </div>
              <div className="p-2">
                <div className="space-y-3">
                  {[
                    { div: 'SC', location: 'SC' },
                    { div: 'SC', location: 'BDCR' },
                    { div: 'SC', location: 'HYB KCG' },
                    { div: 'BZA', location: 'BZA' },
                    { div: 'GTL', location: 'GTL' },
                    { div: 'GTL', location: 'GNT' },
                    { div: 'NED', location: 'PAU' }
                  ].map((rarv, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border-b border-gray-700/30 last:border-b-0">
                      <div className="flex items-center">
                        <span className="lg:w-8 lg:h-8 w-6 h-6 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center text-sm font-medium mr-3 border border-purple-400/30 backdrop-blur-sm">
                          {index + 1}
                        </span>
                        <div>
                          <span className="font-medium text-gray-200">{rarv.location}</span>
                          <span className="text-sm text-gray-400 ml-2">({rarv.div})</span>
                        </div>
                      </div>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium border border-purple-400/30 backdrop-blur-sm">
                        RARV
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-2xl p-3 text-center border border-red-400/30 backdrop-blur-lg hover:shadow-3xl transition-all duration-300">
            <div className="flex flex-col gap-4 items-center justify-center mb-6">
              <div className="bg-white/20 rounded-full p-3 mr-3 backdrop-blur-sm">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="lg:text-4xl text-xl font-bold">Emergency Response Network</h3>
            </div>
            <p className="lg:text-xl text-sm mb-6 text-red-100">
              Comprehensive accident relief infrastructure ensuring rapid response across South Central Railway
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <p className="text-sm md:text-base opacity-90">(For Emergency Operations Reference)</p>
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

export default ReliefTrains