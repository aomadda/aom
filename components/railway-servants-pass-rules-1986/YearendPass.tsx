"use client"
import React from 'react'

const YearendPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-teal-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-teal-500 to-cyan-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              YEAR-ENDING PASSES/PTOs
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-cyan-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Advance issuance and validity rules for year-end travel benefits with comprehensive guidelines for privilege, PRC, and PTO accounts.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="bg-linear-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Year-ending passes on privilege or PRC account can be issued during the next FIVE months of the following year with specific validity and advance issuance rules. This system ensures proper utilization of travel benefits while maintaining operational efficiency.
              </p>
            </div>
          </div>

          {/* Main Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Privilege/PRC Passes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="lg:text-2xl text-xl font-bold text-white text-center">
                  Privilege/PRC Passes
                </h4>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-teal-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                  <div>
                    <p className="lg:text-lg text-base font-semibold text-teal-300">Issuance Period</p>
                    <p className="lg:text-base text-sm">Next FIVE months of the following year</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-teal-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <div>
                    <p className="lg:text-lg text-base font-semibold text-teal-300">Validity</p>
                    <p className="lg:text-base text-sm">Not valid beyond 31st MAY of the following year</p>
                  </div>
                </div>
                <div className="bg-linear-to-br from-teal-500/20 to-cyan-500/20 rounded-xl p-4 border border-teal-400/30 backdrop-blur-sm">
                  <p className="lg:text-base text-sm text-gray-200">
                    <strong className="text-teal-300">Note:</strong> This procedure applies to both privilege and PRC account passes.
                  </p>
                </div>
              </div>
            </div>

            {/* PTOs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center">
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="lg:text-2xl text-xl font-bold text-white text-center">PTOs</h4>
              </div>
              <div className="space-y-4 text-gray-200 w-full">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                  <div>
                    <p className="lg:text-lg text-base font-semibold text-cyan-300">Issuance Period</p>
                    <p className="lg:text-base text-sm">Next FIVE months of the following year</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-cyan-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <div>
                    <p className="lg:text-lg text-base font-semibold text-cyan-300">Validity</p>
                    <p className="lg:text-base text-sm">Not valid beyond 31st MAY of the following year</p>
                  </div>
                </div>
                <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-400/30 backdrop-blur-sm">
                  <p className="lg:text-base text-sm text-gray-200">
                    <strong className="text-cyan-300">Condition:</strong> Subject to the same validity restrictions as passes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advance Issue Rules */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Advance Issue Rules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Regular Passes/PTOs */}
              <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="lg:text-2xl text-xl font-bold text-white text-center">
                    Regular Passes/PTOs
                  </h4>
                </div>
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-blue-300">Eligibility</p>
                      <p className="lg:text-sm text-xs">When employee has availed all passes due in calendar year</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-blue-300">Issue</p>
                      <p className="lg:text-sm text-xs">One set of passes and/or one set of PTO</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-blue-300">Journey</p>
                      <p className="lg:text-sm text-xs">For journeys commencing in next year only</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-blue-300">Debit</p>
                                             <p className="lg:text-sm text-xs">To next year&apos;s pass account</p>
                    </div>
                  </div>
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-400/30 backdrop-blur-sm">
                    <p className="lg:text-sm text-xs text-gray-200">
                      <strong className="text-blue-300">Validity:</strong> Should not exceed FIVE months from date of issue
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-400/30 backdrop-blur-sm">
                    <p className="lg:text-sm text-xs text-gray-200">
                      <strong className="text-yellow-300">Reference:</strong> RBE No.41/2012
                    </p>
                  </div>
                </div>
              </div>

              {/* PRC/Widow Passes */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="lg:text-2xl text-xl font-bold text-white text-center">
                    PRC/Widow Passes
                  </h4>
                </div>
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👤</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-purple-300">Eligibility</p>
                      <p className="lg:text-sm text-xs">Retired railway servant on request</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-purple-300">Issue</p>
                      <p className="lg:text-sm text-xs">One set of PRC Pass/Widow Pass in advance</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-purple-300">Period</p>
                      <p className="lg:text-sm text-xs">Current calendar year from date of issue</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-purple-300">Journey</p>
                      <p className="lg:text-sm text-xs">For journeys commencing in next year</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                    <div>
                      <p className="lg:text-base text-sm font-semibold text-purple-300">Debit</p>
                                             <p className="lg:text-sm text-xs">To next year&apos;s account</p>
                    </div>
                  </div>
                  <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30 backdrop-blur-sm">
                    <p className="lg:text-sm text-xs text-gray-200">
                      <strong className="text-purple-300">Validity:</strong> FIVE months from date of issue
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-400/30 backdrop-blur-sm">
                    <p className="lg:text-sm text-xs text-gray-200">
                      <strong className="text-yellow-300">Reference:</strong> RBE 41/2012
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Validity Period */}
            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="lg:text-xl text-lg font-bold text-white text-center">Validity Period</h4>
              </div>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⏰</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-green-300">Maximum</p>
                    <p className="lg:text-sm text-xs">31st MAY of following year</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📅</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-green-300">Advance Issue</p>
                    <p className="lg:text-sm text-xs">FIVE months from date of issue</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">❌</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-green-300">Extension</p>
                    <p className="lg:text-sm text-xs">Not permitted beyond specified period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Issuance Conditions */}
            <div className="bg-linear-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="lg:text-xl text-lg font-bold text-white text-center">
                  Issuance Conditions
                </h4>
              </div>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-orange-300">Regular</p>
                    <p className="lg:text-sm text-xs">All passes availed in calendar year</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👤</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-orange-300">PRC/Widow</p>
                    <p className="lg:text-sm text-xs">On request basis</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">💳</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-orange-300">Account</p>
                                         <p className="lg:text-sm text-xs">Debited to next year&apos;s account</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Restrictions */}
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="lg:text-xl text-lg font-bold text-white text-center">
                  Journey Restrictions
                </h4>
              </div>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⏰</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-red-300">Timing</p>
                    <p className="lg:text-sm text-xs">For journeys commencing in next year</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚫</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-red-300">Advance</p>
                    <p className="lg:text-sm text-xs">Cannot be used for current year travel</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                  <div>
                    <p className="lg:text-base text-sm font-semibold text-red-300">Validity</p>
                    <p className="lg:text-sm text-xs">Strict adherence to time limits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-6 mb-6">
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
              <h4 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-4 items-center text-center">
                <span className="w-10 h-10 bg-linear-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Important Notes
              </h4>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚠️</span>
                  <p className="lg:text-base text-sm">Year-ending passes have strict validity periods that cannot be extended</p>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <p className="lg:text-base text-sm">Advance issue is limited to FIVE months from date of issue</p>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                                     <p className="lg:text-base text-sm">All advance issues are debited to the next year&apos;s account</p>
                </div>
                <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                  <p className="lg:text-base text-sm">Regular employees must exhaust current year passes before advance issue</p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <h4 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-4 items-center text-center">
                <span className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Application Process
              </h4>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <div className="lg:w-10 lg:h-10 w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <span className="lg:text-base text-sm">Verify all current year passes have been utilized</span>
                </div>
                <div className="flex items-center group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <div className="lg:w-10 lg:h-10 w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <span className="lg:text-base text-sm">Submit application for advance issue</span>
                </div>
                <div className="flex items-center group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <div className="lg:w-10 lg:h-10 w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <span className="lg:text-base text-sm">Specify journey commencement date in next year</span>
                </div>
                <div className="flex items-center group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                  <div className="lg:w-10 lg:h-10 w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <span className="lg:text-base text-sm">Ensure travel within FIVE months validity period</span>
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

export default YearendPass