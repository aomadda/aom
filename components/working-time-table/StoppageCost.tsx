"use client"
import React from 'react'

const StoppageCost = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden mt-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-linear-to-r from-orange-600 to-red-600 text-white py-6 px-4 rounded-2xl shadow-2xl mb-8 border border-orange-400/30 backdrop-blur-lg">
              <div className="flex items-center flex-col gap-4 justify-center mb-4">
                <div className="bg-white/20 rounded-full p-3 mr-4 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="lg:text-4xl text-xl font-bold animate-fade-in"> Stoppage Cost Analysis</h1>
              </div>
              <p className="lg:text-xl text-md font-medium text-orange-100">Railway Operations & Efficiency Impact</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-semibold text-orange-300 mb-6 flex flex-col gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-orange-500 to-red-500 p-3 rounded-full mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </span>
                &ldquo;Unnecessary Stoppages - Revenue Loss&rdquo;
              </h2>
              <p className="lg:text-lg text-md text-gray-200 mb-6 leading-relaxed">
                Stoppages result in <span className="font-medium text-orange-400 bg-orange-900/30 px-2 py-1 rounded">significant revenue loss</span> and
                <span className="font-medium text-orange-400 bg-orange-900/30 px-2 py-1 rounded"> operational inefficiency!</span>
              </p>
              
              <div className="bg-linear-to-r from-red-500/20 to-pink-500/20 border-l-4 border-red-400 p-4 rounded-xl backdrop-blur-sm border">
                <h3 className="text-xl md:text-2xl font-semibold text-red-300 mb-3 flex items-center">
                  Critical Impact:
                </h3>
                <p className="lg:text-lg text-md text-red-200 leading-relaxed">
                  Every minute of unnecessary stoppage costs money and affects<br/>
                  passenger satisfaction and freight delivery timelines.
                </p>
              </div>
            </div>
          </div>

          {/* Cost Analysis Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Passenger Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 px-4">
                <h3 className="text-xl md:text-2xl font-bold flex flex-col gap-4 items-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  PASSENGER TRAINS
                </h3>
              </div>
              <div className="p-2">
                <div className="space-y-6">
                  <div className="bg-blue-500/10 backdrop-blur-sm p-3 rounded-xl border border-blue-400/30">
                    <h4 className="font-semibold text-blue-300 mb-4 lg:text-xl text-lg flex items-center">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                      Express Trains
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Rajdhani Express</span>
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-400/30 backdrop-blur-sm">₹2,500/min</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Shatabdi Express</span>
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-400/30 backdrop-blur-sm">₹2,200/min</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Duronto Express</span>
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-400/30 backdrop-blur-sm">₹2,000/min</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 backdrop-blur-sm p-3 rounded-xl border border-green-400/30">
                    <h4 className="font-semibold text-green-300 mb-4 lg:text-xl text-lg flex items-center">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                      Mail Trains
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Superfast Mail</span>
                        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium border border-green-400/30 backdrop-blur-sm">₹1,800/min</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Ordinary Mail</span>
                        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-medium border border-green-400/30 backdrop-blur-sm">₹1,500/min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Freight Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white py-4 px-4">
                <h3 className="text-xl md:text-2xl font-bold flex flex-col gap-4 items-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </span>
                   FREIGHT TRAINS
                </h3>
              </div>
              <div className="p-2">
                <div className="space-y-6">
                  <div className="bg-purple-500/10 backdrop-blur-sm p-3 rounded-xl border border-purple-400/30">
                    <h4 className="font-semibold text-purple-300 mb-4 lg:text-xl text-lg flex items-center">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                      Container Trains
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Double Stack</span>
                        <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-medium border border-purple-400/30 backdrop-blur-sm">₹3,200/min</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Single Stack</span>
                        <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-medium border border-purple-400/30 backdrop-blur-sm">₹2,800/min</span>
                      </div>
                    </div>
                  </div>
                  
                    <div className="bg-orange-500/10 backdrop-blur-sm p-3 rounded-xl border border-orange-400/30">
                    <h4 className="font-semibold text-orange-300 mb-4 lg:text-xl text-lg flex items-center">
                      <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                      Bulk Freight
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Coal Trains</span>
                        <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">₹2,500/min</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">Iron Ore</span>
                        <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">₹2,300/min</span>
                      </div>
                      <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="font-light text-gray-200">General Goods</span>
                        <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium border border-orange-400/30 backdrop-blur-sm">₹2,000/min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Analysis */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-3 border-l-4 border-red-400 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center">
                <div className="lg:w-20 lg:h-20 w-10 h-10 bg-linear-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:bg-red-500/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-red-300 mb-3">Revenue Loss</h3>
                <p className="lg:text-lg text-md text-gray-300">Direct financial impact on railway revenue due to stoppages</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-3 border-l-4 border-yellow-400 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center">
                <div className="lg:w-20 lg:h-20 w-10 h-10 bg-linear-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:bg-yellow-500/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-yellow-300 mb-3">Time Loss</h3>
                <p className="lg:text-lg text-md text-gray-300">Cumulative delay affecting multiple train services</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border-l-4 border-blue-400 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center">
                <div className="lg:w-20 lg:h-20 w-10 h-10 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:bg-blue-500/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-blue-300 mb-3">Customer Impact</h3>
                <p className="lg:text-lg text-md text-gray-300">Reduced passenger satisfaction and freight reliability</p>
              </div>
            </div>
          </div>

          {/* Prevention Strategies */}
          <div className="bg-white/10 backdrop-blur-lg rounded- xl shadow-xl px-1 py-3 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="flex flex-col gap-2 items-center justify-center mb-4">
                <div className="bg-linear-to-r from-green-500 to-emerald-500 p-3 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="lg:text-3xl text-xl font-semibold text-white"> Prevention Strategies</h3>
              </div>
              <p className="lg:text-lg text-md text-gray-300">Effective measures to minimize unnecessary stoppages</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 group-hover:scale-110 transition-transform prevention-icon">
                    <svg className="w-4 h-4 rounded-full sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Proactive Maintenance</h4>
                    <p className="text-gray-300 text-sm">Regular inspection and maintenance of rolling stock</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 group-hover:scale-110 transition-transform prevention-icon">
                    <svg className="w-4 h-4 rounded-full sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Signal Optimization</h4>
                    <p className="text-gray-300 text-sm">Efficient signal management and route planning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 group-hover:scale-110 transition-transform prevention-icon">
                    <svg className="w-4 h-4 rounded-full sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Staff Training</h4>
                    <p className="text-gray-300 text-sm">Enhanced training for operational staff</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 group-hover:scale-110 transition-transform prevention-icon">
                    <svg className="w-4 h-4 rounded-full sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Technology Integration</h4>
                    <p className="text-gray-300 text-sm">Advanced monitoring and control systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 group-hover:scale-110 transition-transform prevention-icon">
                    <svg className="w-4 h-4 rounded-full sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Emergency Response</h4>
                    <p className="text-gray-300 text-sm">Quick response teams for rapid issue resolution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 group-hover:scale-110 transition-transform prevention-icon">
                    <svg className="w-4 h-4 rounded-full sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Performance Monitoring</h4>
                    <p className="text-gray-300 text-sm">Real-time tracking and performance analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-xl p-2 text-center border border-orange-400/30 backdrop-blur-lg hover:shadow-3xl transition-all duration-300">
            <div className="flex flex-col gap-4 items-center justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4 mr-4 backdrop-blur-sm">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold">Minimize Stoppages, Maximize Efficiency</h3>
            </div>
            <p className="lg:text-lg text-md mb-6 text-orange-100">
              Every minute saved is revenue earned and customer satisfaction improved
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <p className="text-sm md:text-base opacity-90">(For Official Railway Operations Reference)</p>
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
        
        /* Force rounded-full on mobile devices */
        @media (max-width: 768px) {
          .prevention-icon svg {
            border-radius: 9999px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default StoppageCost