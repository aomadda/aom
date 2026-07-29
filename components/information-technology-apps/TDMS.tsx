"use client"
import React from 'react'

const TDMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TRACTION DISTRIBUTION MANAGEMENT SYSTEM
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-yellow-300 mb-4">(TDMS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Digital platform for Traction Assets Management, Inspections, and Maintenance across Indian Railways
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Migration of Traction Assets Management from manual to electronic system</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                  <span className="text-gray-200 lg:text-lg text-base">Integration with other Asset management platforms</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 lg:text-lg text-base">Real time information capturing during inspections</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Forecasting of Asset life based on codal life and inspection results</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛠️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Proactive traction maintenance for improved reliability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 lg:text-lg text-base">Digitalization of Traction Assets and maintenance records</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📚</span>
                  <span className="text-gray-200 lg:text-lg text-base">Elimination of physical inspection registers</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Automated data validation and verification</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Predictive and prioritized Asset Maintenance</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Single point destination for all Traction Assets information</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modules Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Traction Assets Master */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6a2 2 0 012-2h2a2 2 0 012 2v13" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Traction Assets Master</h3>
              <p className="text-gray-300 text-sm">Submodules for Mast/Portal, Turnout/X-over, ATD, Cantilever, Section Insulator, Over line Structure, and more.</p>
            </div>
            
            {/* Inspection & Maintenance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Inspection & Maintenance</h3>
              <p className="text-gray-300 text-sm">Captures asset maintenance details, planning, and generates exception/compliances.</p>
            </div>
            
            {/* Failure Recording */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Failure Recording</h3>
              <p className="text-gray-300 text-sm">Records OHE failures affecting punctuality and Power Block/Traffic Block.</p>
            </div>
            
            {/* Real Time Data Logging */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real Time Data Logging</h3>
              <p className="text-gray-300 text-sm">Mobile app enables real time capturing and reporting of OHE defects with photographs.</p>
            </div>
            
            {/* GPS Based Tracking */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">GPS Based Tracking</h3>
              <p className="text-gray-300 text-sm">Online map-based tracking of Patrolling teams and OHE assets.</p>
            </div>
            
            {/* Alerts & Integration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Alerts & Integration</h3>
              <p className="text-gray-300 text-sm">Exception generation, SMS alerts, and seamless integration with other Railway Asset systems.</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Improved Data Accuracy */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white border border-yellow-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Improved Data Accuracy
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  Digitalization improves data collection and reduces errors
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  Optimal utilization of staff
                </li>
              </ul>
            </div>
            
            {/* Availability */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white border border-green-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
                Availability
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  No need to carry registers, all reports available online
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Historical data retrieval for any number of years
                </li>
              </ul>
            </div>
            
            {/* Reliable & Timely */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white border border-orange-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Reliable & Timely
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  Optimum resource utilization and proactive maintenance
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  No time lag between data gathering and analysis
                </li>
              </ul>
            </div>
          </div>

          {/* More Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              More Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">Standardized formats for data capture at centralized location</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Automatic validation and verification of data</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Forecasting of Asset life based on codal life and inspection results</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">Customized/parameter-driven reports for better decision making</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Intelligent actionable reports available anytime anywhere</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Milestone
            </h2>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-4xl font-bold p-6 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                2018
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implemented Since</h3>
              <p className="text-gray-300 lg:text-lg text-base">TDMS has been successfully implemented since 2018</p>
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

export default TDMS