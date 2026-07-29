"use client"
import React from 'react'

const DutyPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-900 via-red-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-orange-500 to-red-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DUTY PASS
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Official travel authorization for railway servants with comprehensive entitlement details
            </p>
          </div>

          {/* Eligibility & Purpose Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Eligibility & Purpose
            </h2>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="lg:text-lg text-base">A railway servant may be issued a duty pass for performing journey on duty.</span>
              </div>
              <div className="bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30 backdrop-blur-sm">
                <p className="lg:text-base text-sm leading-relaxed">
                  <strong className="text-orange-300">For Travel entitlement</strong> please refer RBE No. 16/2019 Dated 31/01/2019
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="space-y-2">
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                <span className="text-gray-200 lg:text-lg text-base">Issued for official duty travel only</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Valid for specific journey and duration</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✍️</span>
                <span className="text-gray-200 lg:text-lg text-base">Must be properly authorized and signed</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📜</span>
                <span className="text-gray-200 lg:text-lg text-base">Subject to travel entitlement rules</span>
              </div>
            </div>
          </div>

          {/* Duty Pass Entitlement Cards */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Duty Pass Entitlements
            </h2>
            <div className="space-y-6">
              {/* Gazetted Cadre Section */}
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-4 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center">
                  <span className="bg-linear-to-r from-orange-500 to-red-600 p-2 rounded-full mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </span>
                  Gazetted Cadre
                </h3>
                <div className="grid gap-4">
                  {/* CRB & Board Members */}
                  <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-yellow-500 to-amber-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-yellow-400/50 shrink-0">
                          a
                        </span>
                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex items-start gap-2 mb-2">
                          <span className="bg-linear-to-br from-yellow-400/30 to-amber-500/30 text-yellow-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5">
                            i
                          </span>
                          <h4 className="lg:text-lg text-base font-bold text-white">
                            CRB & Board Members including FC
                          </h4>
                        </div>
                        <div className="flex items-start gap-2 mb-2">
                          <span className="bg-linear-to-br from-yellow-400/30 to-amber-500/30 text-yellow-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5">
                            ii
                          </span>
                          <div className="text-gray-200 lg:text-base text-sm">
                            DGs & GMs granted Apex Scale
                          </div>
                        </div>
                        <div className="flex items-start gap-2 mb-3">
                          <span className="bg-linear-to-br from-yellow-400/30 to-amber-500/30 text-yellow-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5">
                            iii
                          </span>
                          <div className="text-gray-200 lg:text-base text-sm">
                            Chief Commissioner for Railway Safety
                          </div>
                        </div>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 17
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Gold Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GMs & Equivalent Officers */}
                  <div className="bg-linear-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-gray-500 to-slate-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-gray-400/50 shrink-0">
                          b
                        </span>
                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          GMs & other equivalent Officers
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 16
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-gray-500 to-slate-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Silver Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* HAG Officers */}
                  <div className="bg-linear-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-gray-500 to-slate-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-gray-400/50 shrink-0">
                          c
                        </span>
                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          HAG Officers (Including NF-HAG)
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 15
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-gray-500 to-slate-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Silver Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* SAG Officers */}
                  <div className="bg-linear-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-600/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-yellow-600 to-amber-700 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-yellow-500/50 shrink-0">
                          d
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          SAG Officers (Including NF-SAG)
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 14
                        </div>
                      </div>
                      <div className="w-full flex justify-center mt-3 lg:mt-0 lg:ml-6 lg:flex-none lg:w-auto">
                        <span className="bg-linear-to-r from-yellow-600 to-amber-700 text-white px-4 py-2 rounded-full font-semibold text-sm lg:text-base shadow-lg text-center block whitespace-normal wrap-break-word max-w-full">
                          Bronze/First Class &apos;A&apos; Pass (1-AC authority)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selection Grade Officers */}
                  <div className="bg-linear-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-600/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-yellow-600 to-amber-700 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-yellow-500/50 shrink-0">
                          e
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          Selection Grade Officers
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 13
                        </div>
                      </div>
                      <div className="w-full flex justify-center mt-3 lg:mt-0 lg:ml-6 lg:flex-none lg:w-auto">
                        <span className="bg-linear-to-r from-yellow-600 to-amber-700 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Bronze/First Class &apos;A&apos; Pass (1-AC authority)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* JAG Officers */}
                  <div className="bg-linear-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-600/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-yellow-600 to-amber-700 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-yellow-500/50 shrink-0">
                          f
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          JAG Officers
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 12
                        </div>
                      </div>
                      <div className="w-full flex justify-center mt-3 lg:mt-0 lg:ml-6 lg:flex-none lg:w-auto">
                        <span className="bg-linear-to-r from-yellow-600 to-amber-700 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Bronze/First Class &apos;A&apos; Pass (1-AC authority)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Other Group A & B Officers */}
                  <div className="bg-linear-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-600/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-yellow-600 to-amber-700 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-yellow-500/50 shrink-0">
                          g
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          Other Group &apos;A&apos; & &apos;B&apos; Gazetted Officers
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 11, 10, 9, 8
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-yellow-600 to-amber-700 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Bronze/First Class &apos;A&apos; Pass
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-gazetted Cadre Section */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center">
                  <span className="bg-linear-to-r from-green-500 to-emerald-600 p-2 rounded-full mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  Non-gazetted Cadre
                </h3>
                <div className="grid gap-4">
                  {/* Level 6 & above */}
                  <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-green-500 to-emerald-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-green-400/50 shrink-0">
                          6+
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">
                          Level 6 & above
                        </h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 6 & above
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          First Class Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Level 5 */}
                  <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-green-500 to-emerald-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-green-400/50 shrink-0">
                          5
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">Level 5</h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 5
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          First Class Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Level 4 */}
                  <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                          4
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">Level 4</h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 4
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Second Class &apos;A&apos; Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Level 3 */}
                  <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                          3
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">Level 3</h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 3
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Second Class &apos;A&apos; Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Level 2 */}
                  <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-indigo-500 to-purple-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-indigo-400/50 shrink-0">
                          2
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">Level 2</h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 2
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Second/Sleeper Class Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Level 1 */}
                  <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start gap-3 mb-4 lg:mb-0 lg:mr-4">
                        <span className="bg-linear-to-br from-indigo-500 to-purple-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-indigo-400/50 shrink-0">
                          1
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="lg:text-lg text-base font-bold text-white mb-3">Level 1</h4>
                        <div className="text-orange-300 font-medium lg:text-base text-sm">
                          PLPM: 1
                        </div>
                      </div>
                      <div className="mt-3 lg:mt-0 lg:ml-6">
                        <span className="bg-linear-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold lg:text-base text-sm shadow-lg">
                          Second/Sleeper Class Pass
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Special Notes */}
            <div className="space-y-6">
              {/* Special Note */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 px-2 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300 group">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                  <span className="bg-linear-to-r from-red-500 to-pink-600 p-2 rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </span>
                  Special Note
                </h3>
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-red-500/20 to-pink-500/20 rounded-lg p-4 border border-red-400/30 backdrop-blur-sm">
                    <p className="lg:text-base text-sm leading-relaxed text-gray-200">
                      <strong className="text-red-300">Officers in PLPM 8, 9, 10 & 11</strong> shall continue to be issued Bronze Pass/First Class &apos;A&apos; Card Pass with validity for travel only over Zonal Railways or Indian Railways as per existing conditions.
                    </p>
                  </div>

                  <div className="bg-linear-to-r from-yellow-500/20 to-amber-500/20 rounded-lg py-4 px-2 border border-yellow-400/30 backdrop-blur-sm">
                    <h4 className="font-semibold text-white mb-3 lg:text-lg text-base">
                      Important Points:
                    </h4>
                    <ul className="space-y-2 text-gray-200">
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">🔶</span>
                        <span className="lg:text-base text-sm">Bronze Pass for specific officer categories</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">🎫</span>
                        <span className="lg:text-base text-sm">First Class &apos;A&apos; Card Pass validity</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">🚂</span>
                        <span className="lg:text-base text-sm">Limited to Zonal Railways or Indian Railways</span>
                      </li>
                      <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">📋</span>
                        <span className="lg:text-base text-sm">Subject to existing conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Application Process */}
            <div className="space-y-6">
              {/* Application Process */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300 group">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                  <span className="bg-linear-to-r from-green-500 to-emerald-600 p-2 rounded-full mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="lgw-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Application Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-base text-sm shadow-lg group-hover/item:scale-110 transition-transform">
                      1
                    </div>
                    <span className="text-gray-200 lg:text-lg text-base">
                      Submit duty pass application
                    </span>
                  </div>
                  <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-base text-sm shadow-lg group-hover/item:scale-110 transition-transform">
                      2
                    </div>
                    <span className="text-gray-200 lg:text-lg text-base">
                      Attach duty order/authorization
                    </span>
                  </div>
                  <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-base text-sm shadow-lg group-hover/item:scale-110 transition-transform">
                      3
                    </div>
                    <span className="text-gray-200 lg:text-lg text-base">
                      Get approval from competent authority
                    </span>
                  </div>
                  <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-base text-sm shadow-lg group-hover/item:scale-110 transition-transform">
                      4
                    </div>
                    <span className="text-gray-200 lg:text-lg text-base">
                      Collect pass from issuing office
                    </span>
                  </div>
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

export default DutyPass