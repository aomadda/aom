"use client"
import React from 'react'

const RSMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-pink-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              RPF SECURITY MANAGEMENT SYSTEM
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-pink-300 mb-3">(RSMS)</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital platform for Railway Protection Force operations, crime management, and security control
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 text-sm">Modernize Control Room Operations and strengthen RPF Security Management</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Enable quick sharing of multimedia rich information with Action Takers</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 text-sm">Facilitate electronic recording and maintenance of Crime Records & Registers</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 text-sm">Automate recording and exchange of Intelligence information</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">Leverage state-of-art technology for IT enablement of RPF operations</span>
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
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💬</span>
                  <span className="text-gray-200 text-sm">Digitalize Control Room Multimedia Messaging (Emergency, Crime, Intelligence)</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📝</span>
                  <span className="text-gray-200 text-sm">Fully digitize Crime Records & Registers with minimum data entry</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 text-sm">Online Crime Reviews & monitoring through DSS dashboards</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                  <span className="text-gray-200 text-sm">Effective response to crisis situations through better monitoring</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-sm">Easy to use system even for non-technical users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Modules Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Decision Support System */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Decision Support System (DSS)</h3>
              <p className="text-gray-300 text-sm">
                Dashboard providing crisp glimpse of actions, alerts, upcoming events, crime cases, and performance metrics.
              </p>
            </div>

            {/* Control Room Messaging */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Control Room Messaging</h3>
              <p className="text-gray-300 text-sm">
                Compose, Inbox, Outbox, Emergency messaging, attachments, archiving, and integration with crime records.
              </p>
            </div>

            {/* Crime Record and Register */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Crime Record and Register</h3>
              <p className="text-gray-300 text-sm">
                Electronic maintenance of C3, C4, C5, RPUP Act registers with inter-linkage and advanced features.
              </p>
            </div>

            {/* Special Intelligence Branch */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Special Intelligence Branch</h3>
              <p className="text-gray-300 text-sm">
                Automated recording and exchange of Intelligence information, forecasts, alerts, and mandatory reports.
              </p>
            </div>

            {/* Miscellaneous Crime */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Miscellaneous Crime (MC)</h3>
              <p className="text-gray-300 text-sm">
                Covers crimes not in CRR module, non-crime incidents, heinous crimes, and passenger-related crimes.
              </p>
            </div>

            {/* Monthly Crime Review */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monthly Crime Review (MCR)</h3>
              <p className="text-gray-300 text-sm">
                Report generating module with automatic compilation, data validation, and systematic report generation.
              </p>
            </div>
          </div>

          {/* Helpdesk Module */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 mb-8 text-white border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" />
              </svg>
              Helpdesk Module
            </h2>
            <p className="lg:text-lg text-base text-center">
              Providing hand holding support to users for registering complaints and suggestions for the software.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Information Availability */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 text-white border border-blue-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
                Information Availability
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                    </svg>
                    24X7 browser based system
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                    </svg>
                    Online Tracking Mechanism for all cases
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                    </svg>
                    Simultaneous availability at multiple locations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                    </svg>
                    Effective crisis response through monitoring
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 4l5 3.5v9.5H5V7.5L10 4z" />
                    </svg>
                    Seamless data exchange between modules
                  </li>
              </ul>
            </div>

            {/* Easy to Use */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 text-white border border-green-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Easy to Use
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Auto generated reports through system data
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  User-friendly for non-technical users
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Multi-lingual interface
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Role based access & Audit Trail
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Pictorial view for comparative analysis
                </li>
              </ul>
            </div>

            {/* Workflow */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 text-white border border-purple-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Workflow
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Workflow system for all types of approvals
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Paperless working environment
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Easing out work management
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Audit trail of all actions
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Future reference maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Milestones Achieved
            </h2>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  6000+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Registered Users</h3>
                <p className="text-gray-200 text-sm">Active users across the RPF network</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-green-500 to-green-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  3,00,000+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cases Registered</h3>
                <p className="text-gray-200 text-sm">Crime cases processed through the system</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  1 Cr. +
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Messages Transmitted</h3>
                <p className="text-gray-200 text-sm">Total messages sent across the network</p>
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

export default RSMS