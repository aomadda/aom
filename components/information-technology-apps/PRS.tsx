"use client"
import React from 'react'

const PRS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              PASSENGER RESERVATION SYSTEM
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-emerald-300 mb-3">(PRS)</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              World&apos;s largest online Railway reservation system providing transparent and modern technology-based ticket booking services
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🌍</span>
                  <span className="text-gray-200 text-sm">Reservation system for world&apos;s second largest populous country</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 text-sm">Anywhere to anywhere ticket booking across the country</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Multiple delivery channels - Counters, e-ticketing, etc.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-sm">Hassle free reservation services during peak hours</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 text-sm">To leverage state-of-art technological solutions to bring about better passenger convenience and more transparency in Indian Railway reserved ticket booking system</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Transparent Modern Technology based Reserved ticket booking system</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🤖</span>
                  <span className="text-gray-200 text-sm">Analytics and AI based fraud detection</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Efficient utilization of available assets and services</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-sm">Improve ticket distribution efficiency and earnings of Indian Railways</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 text-sm">Computerization of Railway reservation has been a success story for Indian Railways</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🏆</span>
                  <span className="text-gray-200 text-sm">Passenger Reservation System is the world&apos;s largest online Railway reservation system that has been developed, implemented and maintained by Centre for Railway Information Systems (CRIS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONCERT */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              CONCERT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🎵</span>
                  <span className="text-gray-200 text-sm">CONCERT (Country-wide Network for Computerized Enhanced reservation and Ticketing) is a mission critical Online Transaction Processing Application</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💾</span>
                  <span className="text-gray-200 text-sm">Based on a distributed database model</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🖥️</span>
                  <span className="text-gray-200 text-sm">Implemented using 3 tier Client Server architecture</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🌐</span>
                  <span className="text-gray-200 text-sm">4 data centres at New Delhi, Mumbai, Kolkata, and Chennai</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📍</span>
                  <span className="text-gray-200 text-sm">Data centres provide access to end user terminal locations in their respective geographical territory</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💾</span>
                  <span className="text-gray-200 text-sm">Each data centre hosts database for trains belonging to Railway zones under the specific data centre</span>
                </div>
              </div>
            </div>
          </div>

          {/* NGeT */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              NGeT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Next Generation e-Ticketing (NGeT) System brought paradigm shift in online rail reservation service</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-sm">Simplifies day to day life of millions of citizens</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 text-sm">Railway being one of the most popular transport medium and lifeline of our country</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-sm">About 04 crore users spread all over the country</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Provides facility of doing train berth/seat reservation from homes/offices or through mobile phones</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚶</span>
                  <span className="text-gray-200 text-sm">No need to go to rail reservation centres</span>
                </div>
              </div>
            </div>
          </div>

          {/* RESERVATION CHARTS */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              RESERVATION CHARTS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👀</span>
                  <span className="text-gray-200 text-sm">Enhances travel experience and brings greater transparency for Indian Railway passengers</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📄</span>
                  <span className="text-gray-200 text-sm">Reservation Charts available for public view on the internet</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 text-sm">Facilitates prospective passengers in getting information of vacant berths after chart preparation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📄</span>
                  <span className="text-gray-200 text-sm">Complete information of vacant berths from train source as well as intermediate locations</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Prospective customer can use information for onboard booking of vacant berths by TTE</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Feature available in web as well as mobile version</span>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE APP */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              MOBILE APP
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Indian Railway&apos;s e-ticketing System is one of the most essential services running in the country today</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-sm">Caters to over 10 lakhs passengers daily (comprising 57 percent of total reserved passengers)</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Passengers can book Railways reserved tickets without leaving their homes/offices</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Android & iOS based mobile app &quot;IRCTC Rail Connect&quot; developed for reserved booking</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Brings power of Next Generation E-ticketing System like High Performance and Enhanced Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* PRIMES */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              PRIMES
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">PASSENGER RESERVATION INFORMATION MANAGEMENT ENHANCED SYSTEM (PRIMES)</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-sm">Developed to provide one-stop destination for all types of reports to Indian Railways</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">Includes MIS reports, DSS reports and analytics reports for reserved passengers, unreserved passengers and other IT systems</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💾</span>
                  <span className="text-gray-200 text-sm">Available to Railway officials with live data of PRS and some data of UTS</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 text-sm">Provides tool to analyze and deep dive into vast volume of data available with PRS</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">Covers passengers, utilization, and train and berth inventory details etc.</span>
                </div>
              </div>
            </div>
          </div>

          {/* PRS DATA-WAREHOUSE */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </span>
              PRS DATA-WAREHOUSE
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💾</span>
                  <span className="text-gray-200 text-sm">Data Warehouse system of PRS serves as Decision Support System (DSS) for Railway Managers</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-sm">Furnishes trend analysis for utilisation and earnings of reserved segment of passenger traffic</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">Based on historical data</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">More than 250 reports available in Data Warehouse system of PRS</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💾</span>
                  <span className="text-gray-200 text-sm">Provides access to past data of more than 10 years based on PNR records</span>
                </div>
              </div>
            </div>
          </div>

          {/* GUIDBA */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              GUIDBA
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💾</span>
                  <span className="text-gray-200 text-sm">Database management system for PRS provides graphical user interface to Railway users</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 text-sm">Used for changes in train, fare, stations, users and terminals definitions in the database</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-emerald-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Back-office application used by Railway database administration staff</span>
                </div>
              </div>
            </div>
          </div>

          {/* DATA ANALYTICS */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              DATA ANALYTICS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-sm">Ever-increasing demand for transportation of goods and rise in passenger traffic</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 text-sm">Pushing Indian Railways to increase capacity while managing assets across vast network</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Industry focusing on effective asset utilization, improving operational efficiency, and enhancing safety</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 text-sm">Aim to move from reactive strategy to proactive strategy</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 text-sm">Data Analytics used for determining heavy demand routes, planning coach augmentation, new train planning, coach production forecasting and customer segmentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* WAITLIST PREDICTION */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              WAITLIST PREDICTION
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Critical functionality developed for Waitlist Confirmation Prediction</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🤖</span>
                  <span className="text-gray-200 text-sm">New system developed using advanced analytics concepts of machine learning</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">Model prepared using actual PNRs of more than 2 years</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Web service based application developed to serve real time Waitlist Confirmation Prediction enquiries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Digital Transformation - Computerization of complex business rules and transparent system</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Enhanced Passenger Experience - Multiple touch points for convenience</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Cashless Ecosystem - 73% transactions are cashless</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Better Asset Utilization - Automatic release of vacant accommodation</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Decision Support System - Visual dashboards for managers</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">World&apos;s Largest System - Developed and maintained by CRIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Milestones Achieved
            </h2>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-green-500 to-green-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  20.5L+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Daily Passengers</h3>
                <p className="text-gray-200 text-sm">Passengers booked per day</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-shadow">
                  125Cr+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Daily Earnings</h3>
                <p className="text-gray-200 text-sm">Revenue generated per day</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-teal-500/50 transition-shadow">
                  6900+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Booking Counters</h3>
                <p className="text-gray-200 text-sm">Manual booking counters</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-green-500 to-green-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  25K+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transactions/Min</h3>
                <p className="text-gray-200 text-sm">Maximum booking transactions per minute</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-shadow">
                  5.72Cr+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">User Accounts</h3>
                <p className="text-gray-200 text-sm">Online user accounts</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-8 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 lg:text-4xl text-2xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-teal-500/50 transition-shadow">
                  5L+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Concurrent Users</h3>
                <p className="text-gray-200 text-sm">Simultaneous active users</p>
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

export default PRS