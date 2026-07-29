"use client"
import React from 'react'

const EWSS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              E-WORKING SOFTWARE SOLUTION
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(EWSS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Workflow-based electronic office solution customized for Railway needs to handle file movements and office automation
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-3 rounded-full lg:mr-4 mr-2 shadow-lg">
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
                  <span className="text-gray-200 lg:text-lg text-base">To reduce time involved in physical movement of files</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                  <span className="text-gray-200 lg:text-lg text-base">To enable immediate tracking of any file within office, division or zone</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 lg:text-lg text-base">A major shift in working culture from manual notings to online remarks</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">To ensure accountability for all actions by maintaining an audit trail</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💡</span>
                  <span className="text-gray-200 lg:text-lg text-base">To conceptualise an effective electronic office management system</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-4 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full lg:mr-4 mr-2 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 lg:text-lg text-base">Improve efficiency and decision-making ability through digitalization</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">Provide effective online tracking mechanism for files/documents</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Enhance decision-making capabilities with extensive search</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Eliminate wear and tear associated with manual files</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Workflow-based solution customized for Railway needs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Modules Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mb-8">
            {/* File Movement & Tracking */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg mb-3 rounded-2xl shadow-2xl py-8 px-6 border border-blue-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">File Movement & Tracking</h3>
              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                Complete solution for electronic file handling with Dakpad, File tray, E-Letter, forwarding letters, and search capabilities.
              </p>
            </div>

            {/* Manual File Tracking System */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg mb-3 rounded-2xl shadow-2xl py-8 px-6 border border-green-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Manual File Tracking System</h3>
              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                Tracks movement of manual files across SECR departments with search engine and performance evaluation reports.
              </p>
            </div>

            {/* Leave Module */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg mb-3 rounded-2xl shadow-2xl py-8 px-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Leave Module</h3>
              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                Manages all leave types: Casual Leave, Restricted Holiday, HQ Leave, Average Pay, Half Pay, Encashment, and Ex-India Leave.
              </p>
            </div>

            {/* Tour Program Module */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg mb-3 rounded-2xl shadow-2xl py-8 px-6 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Tour Program Module</h3>
              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                Online application and sanction of Tour Programs with tracking and automatic TA bill generation through TAJ application.
              </p>
            </div>

            {/* Non Stock Indent */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg mb-3 rounded-2xl shadow-2xl py-8 px-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-indigo-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Non Stock Indent</h3>
              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                Raising of Non Stock Indent requisition with customizable flow, online status tracking, and useful reports generation.
              </p>
            </div>

            {/* Add-ons */}
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-lg mb-3 rounded-2xl shadow-2xl py-8 px-6 border border-teal-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 lg:p-4 p-3 rounded-full mb-6 inline-block shadow-lg group-hover:shadow-teal-500/50 transition-shadow">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-4">Add-ons</h3>
              <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                Store Tender Monitoring, Sick list entry, Emergency Quot, and other modules enhancing EWSS usability.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {/* File Tracking Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center">
                <span className="mr-3">📊</span>
                File Tracking
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Easy tracking with reports and search engine
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Saves time and effort
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Effective utilization of Human Resources
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-3">✓</span>
                  Central repository for information access
                </li>
              </ul>
            </div>

            {/* Decision Making Benefits */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center">
                <span className="mr-3">🎯</span>
                Decision Making
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Extensive search capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Instant access (24x7) to information
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Reduces process completion time
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Increases employee efficiency
                </li>
              </ul>
            </div>

            {/* Environment Friendly Benefits */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex lg:flex-row flex-col gap-4 items-center">
                <span className="mr-3">🌱</span>
                Environment Friendly
              </h3>
              <ul className="space-y-3 lg:text-lg text-base">
                <li className="flex items-center">
                  <span className="text-emerald-200 mr-3">✓</span>
                  Considerable reduction in paper usage
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-200 mr-3">✓</span>
                  Major step towards green environment
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-200 mr-3">✓</span>
                  Sustainable office practices
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-200 mr-3">✓</span>
                  Digital transformation benefits
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 text-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  3000+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Registered Zonal Users</h3>
                <p className="text-gray-200 lg:text-lg text-base">Active users across railway zones</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  15
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Years of Usage</h3>
                <p className="text-gray-200 lg:text-lg text-base">Proven track record of successful implementation</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold p-4 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-shadow">
                  50+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Departments Covered</h3>
                <p className="text-gray-200 lg:text-lg text-base">Comprehensive coverage across railway departments</p>
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

export default EWSS