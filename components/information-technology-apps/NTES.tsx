"use client"
import React from 'react'

const NTES = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              NATIONAL TRAIN ENQUIRY SYSTEM
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-amber-300 mb-3">(NTES)</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital platform for real-time train information, schedules, and passenger services across Indian Railways
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"> 
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-sm">To keep the travellers informed about updated train schedules</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 text-sm">Dissemination of information to public about trains cancelled / diverted</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">To facilitate passengers by providing expected Trains Arrival / Departure timings</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 text-sm">To track Live Current Running status of any train on Indian Railways Network</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💡</span>
                  <span className="text-gray-200 text-sm">Systematic communication of delays, rescheduling, cancellations to commuters</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 text-sm">To provide passengers complete schedule of single/all trains with all stoppages</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-sm">To provide commuters the expected train arrival / departure in next 2,4,6 or 8 hours</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 text-sm">Facilitate information dissemination through multiple channels</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 text-sm">To keep travellers informed about live Train running status & exceptions</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Empower passengers with near real time passenger train running information</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Core Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 text-sm">Spot Your Train - Current running status and ETA/ETD</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-gray-200 text-sm">Train Schedule - Complete schedule with all stoppages</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🏢</span>
                  <span className="text-gray-200 text-sm">Live Station - Display boards at station replication</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔗</span>
                  <span className="text-gray-200 text-sm">Trains between Stations - All trains between any two stations</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚠️</span>
                  <span className="text-gray-200 text-sm">Exceptional Trains - Cancelled, rescheduled, diverted trains</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🌐</span>
                  <span className="text-gray-200 text-sm">Website - Mobile compatible web interface</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Mobile Apps - Android, Windows and iOS platforms</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📺</span>
                  <span className="text-gray-200 text-sm">Display Boards - Platform and station information</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 text-sm">Enquiry - Face to face and IVRS based services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Wide Reach - 23 million passengers benefit daily</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Customer Convenience - Quick and easy access to information</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Mobility - No more long queues at enquiry counters</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Real Time Information - Live train running position</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Enhanced User Experience - Speed, simplicity and rich information</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Multiple Channels - Website, Mobile Apps, Display Boards, IVRS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Wide Reach Benefits */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🌍</span>
                Wide Reach
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  23 million daily passengers
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  Growing internet users
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  Increased dependency
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  National coverage
                </li>
              </ul>
            </div>

            {/* Customer Convenience Benefits */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">👥</span>
                Customer Convenience
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Quick access to information
                </li>
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Speed and simplicity
                </li>
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Rich information content
                </li>
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Enhanced user experience
                </li>
              </ul>
            </div>

            {/* Real Time Benefits */}
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">⚡</span>
                Real Time Information
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-yellow-200 mr-2">✓</span>
                  Live train running position
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-200 mr-2">✓</span>
                  Arrival/departure timings
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-200 mr-2">✓</span>
                  Exception handling
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-200 mr-2">✓</span>
                  Near real-time updates
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Milestones Achieved
            </h2>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/50 transition-shadow">
                  3.5Cr+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Daily Enquiries</h3>
                <p className="text-gray-200 text-sm">Millions of daily queries processed</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-amber-500/50 transition-shadow">
                  80K+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Concurrent Users</h3>
                <p className="text-gray-200 text-sm">Simultaneous active users</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-yellow-500/50 transition-shadow">
                  8M+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">App Downloads</h3>
                <p className="text-gray-200 text-sm">Mobile app installations</p>
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

export default NTES