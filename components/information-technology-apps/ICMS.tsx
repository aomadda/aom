"use client"
import React from 'react'

const ICMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INTEGRATED COACHING MANAGEMENT SYSTEM
            </h1>
            <h2 className="lg:text-4xl text-3xl font-bold text-indigo-300 mb-4">(ICMS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital platform for monitoring punctuality, managing coaching operations, and providing integrated railway management solutions
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-2">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Online Punctuality Analysis & Monitoring</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Online asset failure reporting and analysis</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">Online analysis of coach holding and its utilization</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Maintenance of Train Master over Indian Railways</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">💡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Support to entire gamut of coaching operations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 lg:text-lg text-base">Online monitoring and reporting of Punctuality performance</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">Digitalization of all operational activities</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Seamless Integration with train operation applications</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Centralized data entry and reporting</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Integrated application framework for seamless integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Modules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Core Modules
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">PAM - Punctuality Analysis & Monitoring</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">COIS - Coaching Operations Information System</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🔧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Passenger Loco Module - Operational activities</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">📧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Utility & Mail - User feedback and management</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">🔗</span>
                  <span className="text-gray-200 lg:text-lg text-base">Integration Service - IR systems integration</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 lg:text-xl text-base group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">MIS Reports - Comprehensive reporting system</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 rounded-2xl shadow-2xl p-4 mb-12 text-white border border-purple-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-2xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Single point of Data entry and centralized reporting</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Trend analysis of past years for improvement</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">System-generated Caution orders</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Accurate coach reporting</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Automated System generated VG</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Automation of coach number sending to PRS</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 2v10h16V2H4zm16 10v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8h16z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Online FTR Train(s) / Coach(es) booking</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Time Table Integration & Distribution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {/* Improved Accuracy Benefits */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">

            <h2 className="lg:text-3xl text-2xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
            <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              Improved Accuracy
            </h2>


              
              <ul className="space-y-2 text-base">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3 lg:text-xl text-base">✓</span>
                  Single point of Data entry
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3 lg:text-xl text-base">✓</span>
                  Centralized reporting
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3 lg:text-xl text-base">✓</span>
                  Trend analysis capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3 lg:text-xl text-base">✓</span>
                  System-generated orders
                </li>
              </ul>
            </div>

            {/* Automation Benefits */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">

              <h2 className="lg:text-3xl text-2xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              Automation
            </h2>

              
              
              <ul className="space-y-2 text-base">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3 lg:text-xl text-base">✓</span>
                  Automated VG generation
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3 lg:text-xl text-base">✓</span>
                  Coach number automation
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3 lg:text-xl text-base">✓</span>
                  Improved Loco reporting
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-3 lg:text-xl text-base">✓</span>
                  Online booking systems
                </li>
              </ul>
            </div>

            {/* Integration Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">

              <h2 className="lg:text-3xl text-2xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              Integration
            </h2>

              <ul className="space-y-2 text-base">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3 lg:text-xl text-base">✓</span>
                  Seamless system integration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3 lg:text-xl text-base">✓</span>
                  Multiple IR systems
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3 lg:text-xl text-base">✓</span>
                  Centralized data access
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3 lg:text-xl text-base">✓</span>
                  Real-time synchronization
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 text-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  20+
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Integrated Applications</h3>
                <p className="text-gray-200 text-base">Seamless system integration</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  400+
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Terminals</h3>
                <p className="text-gray-200 text-base">Active terminals across network</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  24X7
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Helpdesk</h3>
                <p className="text-gray-200 text-base">Round-the-clock support</p>
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

export default ICMS