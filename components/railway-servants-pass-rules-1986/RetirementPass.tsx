"use client"
import React from 'react'

const RetirementPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-amber-500/20 to-orange-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-amber-500 to-orange-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              POST-RETIREMENT COMPLIMENTARY PASS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Retirement benefits for railway servants with comprehensive travel entitlements
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Post-Retirement Complimentary Pass
              </h2>
              <p className="text-amber-300 font-medium text-sm sm:text-base">
                Retirement benefits for railway servants
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl py-4 px-3 shadow-md border border-amber-200/30 mb-6">
              <p className="text-gray-200 leading-relaxed">
                A post-retirement complimentary pass may be issued to a railway
                servant after retirement or after he ceases to be a railway
                servant.
              </p>
              <div className="mt-4 bg-amber-500/20 rounded-lg p-4 border border-amber-300/30">
                <p className="text-sm text-amber-200">
                  <strong>For Travel entitlement</strong> please refer RBE No.
                  16/2019 Dated 31/01/2019
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Advance Issue */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">Advance Issue</h4>
              </div>
              <p className="text-gray-200 text-sm">
                A retired railway servant may be issued, on request, one set of
                PRC Pass/Widow Pass in advance of the current calendar year from
                the date of issue, for journeys commencing in the next year duly
                debiting such issue of complimentary pass in the next
                year&apos;s account. The validity of the Pass will be for FIVE
                months, from the date of issue. RBE 41/2012
              </p>
            </div>

            {/* Medical Decategorisation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Medical Decategorisation
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                A benefit of additional 5 years service for post-retirement
                complimentary passes may be allowed to those medically
                decategorised/unfit Railway servants who retire either by
                refusing to accept the alternative post or the alternative post
                being not available.
              </p>
            </div>

            {/* Retirement Year Entitlement */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Retirement Year Entitlement
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                In the year in which the Railway servant retires from service he
                is entitled to that number of single journey Post-retirement
                complimentary passes which represents the difference between the
                number of privilege passes he is normally entitled to in a
                calendar year while in service and the number actually availed
                by him.
              </p>
            </div>

            {/* Both Spouses Retired */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Both Spouses Retired
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                In cases where both husband and wife are retired Railway
                servants, they may avail the complimentary passes on each
                other&apos;s account.
              </p>
            </div>

            {/* Voluntary Retirement */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Voluntary Retirement
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                A benefit of 5 years service on voluntary retirement is granted
                towards the qualifying service for the grant of post-retirement
                complimentary passes on the same conditions as are laid down in
                Board&apos;s letter No. E (P&A) I 77 RT-46 dated 09.11.1977.
              </p>
            </div>

            {/* Identity Verification */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Identity Verification
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Pass Issuing Authority shall satisfy himself about the identity
                of the retired Railway employee before issuing the Post
                retirement complimentary passes.
              </p>
            </div>

            {/* Identity Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">Identity Card</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Railway administration shall issue an identity card bearing the
                photographs of superannuated/retired railway employee and the
                family members eligible for inclusion in the post retirement
                passes.
              </p>
            </div>

            {/* Last Month Issue */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Last Month Issue
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                A retired Railway servant may be issued on his request one set
                of complimentary pass in the last month of the current calendar
                year for journey commencing in the next year duly debiting such
                issue of complimentary pass in the next year&apos;s account. The
                validity will be for 5 months, as the case may be from the date
                of issue.
              </p>
            </div>

            {/* Choice of Office */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Choice of Office
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                A retired Railway servant, if he so, desires, can obtain his
                post-retirement complimentary passes from an office of his
                choice authorized to issue such passes irrespective of the
                Railway or office from where he had retired.
              </p>
            </div>

            {/* Senior Citizen Companion */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Senior Citizen Companion
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                The retired senior citizen Railway servant eligible to travel
                with companion instead of attendant in same class provided if
                the retired railway servant is at the age of 70 years and above.
              </p>
            </div>

            {/* Nilgiri Railway Restriction */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-red-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Nilgiri Railway Restriction
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Passes to retired employees are not admissible over the Nilgiri
                Railway during the months of April, May and June.
              </p>
            </div>

            {/* Level 1 Employees */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border-l-4 border-amber-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Level 1 Employees
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Employees in LEVEL 1 entitled for post retirement Passes/PTOs.
                (RB Letter No. E(W)2010/PS-5/8-4 dated 02.03.2012)
              </p>
            </div>
          </div>

          {/* Entitlement Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Category & Number of PRC Passes Admissible
              </h3>
              <p className="text-orange-300 text-sm">(RBE 16/2019 DATED 31.01.2019)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gazetted Officers */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 border-l-4 border-orange-500 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Gazetted Officers</h4>
                </div>
                <div className="space-y-3 text-sm text-gray-200">
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>CRB & Board Members</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>DGs & GMs</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>Other Equivalent Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>HAG Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>SAG Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>Selection Grade Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>JAG Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>Sr Scale Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>Other Group A & B Officers</span>
                    <span className="font-semibold text-orange-300">3 SETS</span>
                  </div>
                  <div className="mt-3 p-2 bg-orange-500/20 rounded text-xs border border-orange-300/30">
                    <strong className="text-orange-200">Class:</strong> <span className="text-gray-200">First Class &apos;A&apos;</span>
                  </div>
                  <div className="p-2 bg-yellow-500/20 rounded text-xs border border-yellow-300/30">
                    <strong className="text-yellow-200">Remarks:</strong> <span className="text-gray-200">AFTER 20 YEARS OF RAILWAY SERVICE</span>
                  </div>
                </div>
              </div>

              {/* Non-Gazetted Officers */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 border-l-4 border-orange-500 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Non-Gazetted Officers</h4>
                </div>
                <div className="space-y-3 text-sm text-gray-200">
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>6 AND ABOVE</span>
                    <span className="font-semibold text-orange-300">2 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>5</span>
                    <span className="font-semibold text-orange-300">2 SETS</span>
                  </div>
                  <div className="flex justify-between group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span>4, 3, 2 & 1</span>
                    <span className="font-semibold text-orange-300">2 SETS</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="p-2 bg-orange-500/20 rounded text-xs border border-orange-300/30">
                      <strong className="text-orange-200">6 AND ABOVE:</strong> <span className="text-gray-200">First Class</span>
                    </div>
                    <div className="p-2 bg-orange-500/20 rounded text-xs border border-orange-300/30">
                      <strong className="text-orange-200">5:</strong> <span className="text-gray-200">Second Class A</span>
                    </div>
                    <div className="p-2 bg-orange-500/20 rounded text-xs border border-orange-300/30">
                      <strong className="text-orange-200">4, 3, 2 & 1:</strong> <span className="text-gray-200">Second/Sleeper</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Members Permitted Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Members Permitted in PRC Passes
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-2 border-l-4 border-blue-500 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Family Members</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">👨‍👩‍👧‍👦</span>
                    Spouse and Children (Subject to the same conditions of serving employees)
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">💑</span>
                    Post Retrial Spouse
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">👨‍🎓</span>
                    Children who are above 21 years of age
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">👩‍🦳</span>
                    Widowed daughter/ Legally divorced daughter
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">👵</span>
                    Widowed Mother
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">👨‍👩‍👧‍👦</span>
                    Family in case of Group &apos;D&apos;
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="text-blue-400 mr-2 mt-1">♿</span>
                    &quot;Handicapped wards, Bonafide students etc….&quot;
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-2 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Children Above 21 Years</h4>
                </div>
                <p className="text-sm text-gray-200 mb-3">Must be:</p>
                <ul className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="shrink-0 bg-blue-600/80 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 shadow-lg border-2 border-blue-400 group-hover:bg-blue-700">a</span>
                    <span className="flex items-center gap-1">
                      Bonafide students of any recognized educational institution
                    </span>
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="shrink-0 bg-blue-600/80 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 shadow-lg border-2 border-blue-400 group-hover:bg-blue-700">b</span>
                    <span className="flex items-center gap-1">
                      engaged in any research work
                    </span>
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="shrink-0 bg-blue-600/80 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 shadow-lg border-2 border-blue-400 group-hover:bg-blue-700">c</span>
                    <span className="flex items-center gap-1">
                      working as an articled clerk
                    </span>
                  </li>
                  <li className="flex items-start group hover:bg-white/5 p-2 rounded transition-all duration-300">
                    <span className="shrink-0 bg-blue-600/80 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 shadow-lg border-2 border-blue-400 group-hover:bg-blue-700">d</span>
                    <span className="flex items-center gap-1">
                      Invalid, on appropriate certificate from Railway Doctor
                    </span>
                  </li>
                </ul>
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

export default RetirementPass