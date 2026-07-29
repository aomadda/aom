"use client"
import React from 'react'

const SplitPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              SPLIT PASS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Special pass facility for railway employees when they cannot accompany their family during travel
            </p>
          </div>

          {/* What is Split Pass Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              What is Split Pass?
            </h2>
            <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                When a Railway employee is unable to accompany his family, he can avail pass for himself and a pass for family.
              </p>
            </div>
          </div>

          {/* Pass Issuance Process Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Pass Issuance Process
            </h2>
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Separate passes will be issued which will constitute a set. Such passes shall be issued within a period of one month.
              </p>
            </div>
          </div>

          {/* Important Restriction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Restriction
            </h2>
            <div className="bg-linear-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed font-semibold">
                This facility is not applicable to retired railway employees.
              </p>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍💼</span>
                <span className="text-gray-200 lg:text-lg text-base">Available for active railway employees only</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</span>
                <span className="text-gray-200 lg:text-lg text-base">Separate passes for employee and family</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Passes constitute a set</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Must be issued within one month</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                <span className="text-gray-200 lg:text-lg text-base">Not available for retired employees</span>
              </div>
            </div>
          </div>

          {/* When to Use Split Pass Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              When to Use Split Pass
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚶‍♂️</span>
                <span className="text-gray-200 lg:text-lg text-base">When employee cannot travel with family</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</span>
                <span className="text-gray-200 lg:text-lg text-base">When family needs to travel separately</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💼</span>
                <span className="text-gray-200 lg:text-lg text-base">When employee has work commitments</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">When family travel is urgent</span>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Employee Benefits */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Employee Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Flexible travel options
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Work-life balance
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Family travel support
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Emergency travel facility
                </li>
              </ul>
            </div>

            {/* Family Benefits */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Family Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Independent travel
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Urgent travel support
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Flexible scheduling
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Emergency assistance
                </li>
              </ul>
            </div>

            {/* Process Benefits */}
            <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Process Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Quick issuance
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Set-based passes
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  One month validity
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Simplified process
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Notes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Eligibility</h3>
                <p className="text-gray-200 text-sm">Only active railway employees are eligible for split pass facility</p>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Time Limit</h3>
                <p className="text-gray-200 text-sm">Passes must be issued within one month of application</p>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Pass Set</h3>
                <p className="text-gray-200 text-sm">Separate passes constitute a complete set for the journey</p>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Restrictions</h3>
                <p className="text-gray-200 text-sm">Retired employees are not eligible for this facility</p>
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

export default SplitPass