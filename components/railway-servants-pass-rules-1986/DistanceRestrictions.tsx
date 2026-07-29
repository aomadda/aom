"use client"
import React from 'react'

const DistanceRestrictions = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-900 via-cyan-900 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-teal-500/20 to-cyan-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-teal-500 to-cyan-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              DISTANCE RESTRICTIONS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-teal-500 to-cyan-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Guidelines for privilege pass issuance with distance considerations and route flexibility
            </p>
          </div>

          {/* Main Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              Privilege Pass Distance Guidelines
            </h2>
            <p className="text-gray-200 lg:text-lg text-base max-w-4xl mx-auto leading-relaxed text-center mb-6">
              Privilege pass shall be issued for journeys from the starting station to the destination
              station as desired by the railway servant, via shortest route, provided that a longer
              route may be permitted on the Privilege Pass in the following circumstances:
            </p>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Alternative Routes Card */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 text-white hover:scale-105 transition-all duration-300 group">
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Alternative Routes Available</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Two alternative routes are available for a destination. For example – Bombay to Calcutta via Nagpur or via Allahabad and Bombay to Delhi by the Central Railway or by the Western Railway. Such passes may be permitted by either route irrespective of the distance involved.
                </p>
              </div>

              {/* Longer Route Within 15% Card */}
              <div className="bg-linear-to-br from-cyan-600 to-cyan-700 rounded-2xl shadow-2xl p-6 text-white hover:scale-105 transition-all duration-300 group">
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Longer Route Within 15% Distance</h3>
                </div>
                <p className="text-cyan-100 leading-relaxed text-sm">
                  If the longer route requested by the railway servant does not exceed 15% of the direct route distance, such passes may be issued. Even if there is a small portion of double journey, it is permitted for the benefit of terminal facilities as long as the total distance does not exceed 15% of the shortest route.
                </p>
              </div>

              {/* Quicker Route Card */}
              <div className="bg-linear-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-6 text-white hover:scale-105 transition-all duration-300 group">
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Quicker Route Option</h3>
                </div>
                <p className="text-green-100 leading-relaxed text-sm">
                  If the longer route to destination is quicker than the direct route irrespective of distance involved, such passes may be permitted to optimize travel time and efficiency for railway servants.
                </p>
              </div>
            </div>
          </div>

          {/* Key Considerations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-teal-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 text-sm">Shortest route is the default preference for all privilege passes</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📏</span>
                  <span className="text-gray-200 text-sm">15% distance tolerance for longer routes with valid reasons</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🏢</span>
                  <span className="text-gray-200 text-sm">Terminal facilities consideration for route selection</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-sm">Time efficiency overrides distance in certain cases</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 text-sm">Double journey allowance on small portions when justified</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👤</span>
                  <span className="text-gray-200 text-sm">Flexibility for railway servant convenience and efficiency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🎯</span>
                Route Flexibility
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Alternative route options
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  15% distance tolerance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Time efficiency priority
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Flexible routing options
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-cyan-600 to-cyan-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">⚡</span>
                Efficiency Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Faster travel options
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Terminal facility access
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Reduced travel time
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Optimized journey planning
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🛡️</span>
                Policy Compliance
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✓</span>
                  Regulatory adherence
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✓</span>
                  Transparent guidelines
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✓</span>
                  Fair application
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✓</span>
                  Consistent implementation
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-teal-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Policy Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  15%
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Distance Tolerance</h3>
                <p className="text-gray-200 text-sm">Maximum allowed deviation from shortest route</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-cyan-500 to-cyan-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transition-shadow">
                  100%
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Route Flexibility</h3>
                <p className="text-gray-200 text-sm">Alternative routes available when justified</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-green-500 to-green-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  24/7
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Policy Support</h3>
                <p className="text-gray-200 text-sm">Continuous policy guidance and support</p>
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

export default DistanceRestrictions