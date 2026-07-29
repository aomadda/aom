"use client"
import React from 'react'

const GMPowers = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-amber-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              POWERS OF THE GENERAL MANAGERS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">TO CONDONE IRREGULARITIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines on the discretionary powers granted to General Managers for condoning administrative irregularities in railway pass issuance
            </p>
          </div>

          {/* Scope of Powers Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Scope of Powers
            </h2>
            <div className="bg-linear-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Except in cases of transfer and settlement passes issued to Railway servants, General Managers may condone the irregularities in the cases enumerated below.
              </p>
            </div>
          </div>

          {/* Types of Irregularities Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Types of Irregularities That Can Be Condoned
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-linear-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">1️⃣</span>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 text-center">Higher Class Issue</h4>
                      <p className="text-gray-200 text-sm">Issue of higher class of Passes and Privilege Ticket Orders under misinterpretation of the extant rules.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">2️⃣</span>
                    <div>
                      <h4 className="font-semibold text-orange-300 mb-2 text-center">Excess Issue</h4>
                      <p className="text-gray-200 text-sm">Excess issue of Passes and Privilege Ticket Orders during a year.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-amber-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">3️⃣</span>
                    <div>
                      <h4 className="font-semibold text-amber-300 mb-2 text-center">Early Issue</h4>
                      <p className="text-gray-200 text-sm">Issue of more than one set of Passes before completion of five years service.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-yellow-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">4️⃣</span>
                    <div>
                      <h4 className="font-semibold text-yellow-300 mb-2 text-center">Extra Family Members</h4>
                      <p className="text-gray-200 text-sm">Inclusion of more than five members in a Pass/Privilege Ticket Orders when a dependent relative is included.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">5️⃣</span>
                    <div>
                      <h4 className="font-semibold text-orange-300 mb-2 text-center">Extra Dependent Relatives</h4>
                      <p className="text-gray-200 text-sm">Inclusion of more than two dependent relatives in a Pass/Privilege Ticket Order.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">6️⃣</span>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 text-center">Adult Sons Without Certificates</h4>
                      <p className="text-gray-200 text-sm">Inclusion of sons and dependent brothers aged 21 years or over without necessary school or college certificate.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-linear-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">7️⃣</span>
                    <div>
                      <h4 className="font-semibold text-pink-300 mb-2 text-center">Guardian Passes</h4>
                      <p className="text-gray-200 text-sm">Issue of Passes for &quot;Guardians&quot; on school account when the son is aged 18 years or above.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">8️⃣</span>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2 text-center">Post-retirement Dependent Relatives</h4>
                      <p className="text-gray-200 text-sm">Inclusion of dependent relatives in Post-retirement Passes to retired Railway servants.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">9️⃣</span>
                    <div>
                      <h4 className="font-semibold text-indigo-300 mb-2 text-center">Class IV Retired Servants</h4>
                      <p className="text-gray-200 text-sm">Inclusion of children in Post-retirement Passes to retired Class IV Railway servants.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔟</span>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Longer Route</h4>
                      <p className="text-gray-200 text-sm">Issue of Passes by a longer route.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-cyan-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">1️⃣1️⃣</span>
                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2 text-center">Incorrect Issue Period</h4>
                      <p className="text-gray-200 text-sm">Incorrect issue of a Pass exceeding three months for single journey or 4 months for return journey.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-teal-500/20 to-green-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">1️⃣2️⃣</span>
                    <div>
                      <h4 className="font-semibold text-teal-300 mb-2 text-center">Correct Issue but Late Use</h4>
                      <p className="text-gray-200 text-sm">Correct issue but use after the period of availability by Railway servant or family.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Note
            </h2>
            <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed font-semibold">
                The irregularity mentioned in item (12) above may be condoned by debiting an extra pass to the Railway servant&apos;s account.
              </p>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Points
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">General Managers have discretionary powers to condone irregularities</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                <span className="text-gray-200 lg:text-lg text-base">Transfer and settlement passes are excluded from this scope</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Various types of administrative errors can be condoned</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📄</span>
                <span className="text-gray-200 lg:text-lg text-base">Proper documentation and justification required</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                <span className="text-gray-200 lg:text-lg text-base">Some cases may require additional pass debiting</span>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Administrative Benefits */}
            <div className="bg-linear-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Administrative Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">✓</span>
                  Flexible decision making
                </li>
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">✓</span>
                  Error correction capability
                </li>
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">✓</span>
                  Administrative efficiency
                </li>
                <li className="flex items-center">
                  <span className="text-red-200 mr-2">✓</span>
                  Case-by-case evaluation
                </li>
              </ul>
            </div>

            {/* Employee Benefits */}
            <div className="bg-linear-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Employee Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  Fair treatment
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  Error rectification
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  Administrative relief
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-2">✓</span>
                  Justice delivery
                </li>
              </ul>
            </div>

            {/* Process Benefits */}
            <div className="bg-linear-to-br from-amber-600 to-amber-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Process Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Streamlined procedures
                </li>
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Quick resolution
                </li>
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Clear guidelines
                </li>
                <li className="flex items-center">
                  <span className="text-amber-200 mr-2">✓</span>
                  Consistent approach
                </li>
              </ul>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Summary
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-blue-300 mb-2">Discretionary Powers</h3>
                <p className="text-gray-200 text-sm">General Managers have authority to condone various administrative irregularities in pass issuance</p>
              </div>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-blue-300 mb-2">Scope Limitations</h3>
                <p className="text-gray-200 text-sm">Transfer and settlement passes are excluded from condonation powers</p>
              </div>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-blue-300 mb-2">Documentation Required</h3>
                <p className="text-gray-200 text-sm">Proper documentation and justification are essential for condonation approval</p>
              </div>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-blue-300 mb-2">Additional Measures</h3>
                <p className="text-gray-200 text-sm">Some cases may require debiting extra passes to employee accounts</p>
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

export default GMPowers