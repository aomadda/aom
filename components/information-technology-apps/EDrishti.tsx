"use client"
import React from 'react'

const EDrishti = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-violet-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              E-DRISHTI / RAILDRISHTI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Modern All-in-One DSS dashboard providing real-time insights and transparency for Indian Railways stakeholders
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Real-time availability of mammoth information to top management</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⏱️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Zero compilation and information collection time delays</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Error free data for Quick-Analysis, decision making & monitoring</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Digitally promote Transparency and accountability</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🪟</span>
                  <span className="text-gray-200 lg:text-lg text-base">Bring information from myriad sources under single window</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">Provide meaningful information through data mining</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">Data Analytics based SWOT Analysis of major KPIs</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🕐</span>
                  <span className="text-gray-200 lg:text-lg text-base">24*7 availability of current information</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏛️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Development of G2C tool for government communication</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 lg:text-lg text-base">Empower citizens with Multi-media monitoring features</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mb-6">
            {/* KPIs At a Glance */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-blue-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">KPIs At a Glance</h3> 
              <p className="text-gray-200 text-base leading-relaxed">
                Important KPIs including Earnings, Expenditure, Tickets, Passengers, Freight Loading, Punctuality, and more with trend analysis.
              </p>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-green-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Services</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Six services including PNR enquiry, ODC application, Complaint Enquiry, Tender Enquiry, Shramik Enquiry, and Freight enquiries.
              </p>
            </div>

            {/* LIVE Kitchen Feeds */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-red-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-red-500 to-red-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-red-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">LIVE Kitchen Feeds</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Live feeds from Railway kitchens allowing public to observe food preparation and packaging for transparency.
              </p>
            </div>

            {/* Trains On Run */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Trains On Run</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Real-time view of all passenger and freight trains on country map with running status and contact information.
              </p>
            </div>

            {/* Grievances */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Grievances</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Track Railway-related grievances with status monitoring, zone-wise breakup, and complaint type analysis.
              </p>
            </div>

            {/* Shramik Kalyan */}
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-teal-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-teal-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Shramik Kalyan</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Self-service enquiry mechanism for unorganized sector labourers to check wages, contractors, and mandays.
              </p>
            </div>
          </div>

          {/* Additional Features Section */}
          <div className="grid md:grid-cols-2 gap-1 mb-6">
            {/* Achievements */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-yellow-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Achievements</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                View achievements of Indian Railways as a whole and achievements in various states and constituencies, including 100 days achievements of government.
              </p>
            </div>

            {/* Heritage */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-indigo-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Heritage</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Cultural aspect showcasing Rail heritage, memorable journeys, 360 degree Virtual Tours, and tourism desk for Railway-related services.
              </p>
            </div>

            {/* Station Beautification */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-emerald-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Station Beautification</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Monitor progress of major initiatives for Passenger Amenities with before and after images across IR network.
              </p>
            </div>

            {/* Freight Calculator */}
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-pink-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-pink-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Freight Calculator</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Freight calculator for transportation by Railways and links to nine important Railway websites from citizen&apos;s perspective.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-1 mb-6">
            {/* Information Availability */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-3 shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
                <span className="mr-3">📊</span>
                Information Availability
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Real time availability with zero delays
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Automated data integrations
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Minimal chances of data errors
                </li>
              </ul>
            </div>

            {/* Live Monitoring */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mb-3 shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
                <span className="mr-3">📹</span>
                Live Monitoring
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Live Kitchen streams visibility
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Station Development Photographs
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Significant improvements in cleanliness
                </li>
              </ul>
            </div>

            {/* Digital India Initiative */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl mb-3 shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
                <span className="mr-3">🇮🇳</span>
                Digital India Initiative
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Single window for various stakeholders
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  As a &quot;Digital India Digital Rail initiative&quot;
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-3">✓</span>
                  Information and services availability
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Benefits Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Decision Support System */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-indigo-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Decision Support System</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                First of a kind monitoring DSS mechanism for quick monitoring and decision making in Indian Railways, considered as one of the achievements in NDA government&apos;s 5 years achievement list.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-green-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Transparency</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Digital step in promoting transparency and accountability by sharing government statistics, initiatives, and achievements with general public.
              </p>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl mb-3 shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 text-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-5xl text-3xl font-bold p-4 rounded-full lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  3.25 Cr+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Page Views</h3>
                <p className="text-gray-200 lg:text-lg text-base">Total page views on the platform</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 mb-3">
                <div className="bg-gradient-to-br from-green-500 to-green-600 lg:text-5xl text-3xl font-bold p-4 rounded-full lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  40+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Applications Integrated</h3>
                <p className="text-gray-200 lg:text-lg text-base">Number of applications integrated into the platform</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 mb-3">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-5xl text-3xl font-bold p-4 rounded-full lg:w-40 lg:h-40 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  5 Lakh+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Station Photos</h3>
                <p className="text-gray-200 lg:text-lg text-base">Station photographs uploaded to the platform</p>
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

export default EDrishti