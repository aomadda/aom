"use client"
import React from 'react'

const PassLevels = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              PASS LEVELS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Railway pass levels determine travel entitlements and comfort facilities for railway employees
            </p>
          </div>

          {/* Pass Levels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* First Class Pass */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">First Class Pass</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Higher grade officers
                </div>
                <div className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Premium travel facilities
                </div>
                <div className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Enhanced comfort
                </div>
                <div className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Priority booking
                </div>
              </div>
            </div>

            {/* Second Class Pass */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Second Class Pass</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Regular employees
                </div>
                <div className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Standard facilities
                </div>
                <div className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Most common type
                </div>
                <div className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Reliable service
                </div>
              </div>
            </div>

            {/* Sleeper Class Pass */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sleeper Class Pass</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Lower grade employees
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Basic facilities
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Cost-effective
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Essential travel
                </div>
              </div>
            </div>

            {/* AC Class Pass */}
            <div className="bg-linear-to-br from-cyan-600 to-cyan-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AC Class Pass</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  AC travel facilities
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Climate controlled
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Premium comfort
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-200 mr-2">✓</span>
                  Enhanced experience
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-indigo-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Pass Level Guidelines
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Pass level is determined by employee grade and entitlement</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Higher grades typically get higher class passes</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Pass level affects travel comfort and facilities</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Upgradation to higher class requires fare difference payment</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Pass level is non-negotiable and rule-based</span>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Employee Benefits */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-2 items-center justify-center">
                <span className="mr-2">👥</span>
                Employee Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Structured entitlements
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Clear hierarchy system
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Fair distribution
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Transparent rules
                </li>
              </ul>
            </div>

            {/* Travel Benefits */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-2 items-center justify-center">
                <span className="mr-2">🚂</span>
                Travel Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Comfort levels
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Facility access
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Priority services
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Enhanced experience
                </li>
              </ul>
            </div>

            {/* Administrative Benefits */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-2 items-center justify-center">
                <span className="mr-2">⚙️</span>
                Administrative Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Systematic management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Clear guidelines
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Efficient processing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Standardized approach
                </li>
              </ul>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center">
              Pass Level Summary
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-4 border border-purple-400/30">
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">First & AC Class</h3>
                  <p className="text-gray-200 text-sm">Premium travel facilities for higher grade officers and entitled employees with enhanced comfort and priority services.</p>
                </div>
                <div className="bg-linear-to-r from-indigo-500/20 to-blue-500/20 rounded-lg p-4 border border-indigo-400/30">
                  <h3 className="text-lg font-semibold text-indigo-200 mb-2">Second Class</h3>
                  <p className="text-gray-200 text-sm">Standard facilities for regular employees, providing reliable service with balanced comfort and accessibility.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-400/30">
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Sleeper Class</h3>
                  <p className="text-gray-200 text-sm">Basic facilities for lower grade employees, offering cost-effective travel with essential amenities.</p>
                </div>
                <div className="bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 border border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Guidelines</h3>
                  <p className="text-gray-200 text-sm">Clear rules-based system ensuring fair distribution and transparent entitlements across all employee categories.</p>
                </div>
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

export default PassLevels