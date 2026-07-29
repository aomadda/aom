"use client"
import React from 'react'

const CompanionPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-rose-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-rose-500 to-pink-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-xl font-bold bg-linear-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              COMPANION IN LIEU OF ATTENDANT
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-pink-300 mb-4">TO FIRST /IST A POST RETIREMENT COMPLIMENTARY PASS /WIDOW PASS HOLDERS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-rose-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed mb-4">
              Comprehensive guidelines for companion travel facilities for retired railway employees and widows
            </p>
            <div className="bg-linear-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
              <p className="text-pink-300 font-medium text-sm sm:text-base">RBE No: 164/2009</p>
            </div>
          </div>

          {/* Age-Based Eligibility Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 65+ Years Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-2xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                Retired Railway Employees / Widows (65+ years)
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Retired Railway employees /Widows of 65 years of age and above entitled
                  to Ist Class /Ist &apos;A&apos; Post Retirement Complimentary Pass /Widow Passes are entitled to the facility of companion in higher class on payment of full difference of fare
                  between Sleeper Class/II Class and the class in which the retired Railway employee
                  /Widow in all trains other than Rajdhani /Shatabdi trains travels, subject to the
                  conditions laid down in the said Pass Rules.
                </p>
              </div>
            </div>

            {/* 70+ Years Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-2xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Retired Railway Employees / Widows (70+ years)
              </h2>
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Retired Railway employees /Widows of 70 years of age and above, who are entitled
                  to Ist Class /Ist &apos;A&apos; Post Retirement Complimentary /Widow Passes may be allowed
                  to take a companion in the same class by paying 1/3rd of the difference of fare
                  between Sleeper Class /II Class and the higher class in which the retired Railway
                  employee /Widow travels in all trains, including Rajdhani /Shatabdi trains, subject to
                  the existing restriction regarding number of berths in Rajdhani /Shatabdi trains.
                </p>
              </div>
            </div>
          </div>

          {/* Application Process Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Application Process
            </h2>
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                At the time of application for Post Retirement Complimentary /Widow Pass,
                the retired Railway employee / Widow of 70 years of age and above, who are entitled
                to Ist Class /Ist &apos;A&apos; Post Retirement Complimentary /Widow Pass, shall exercise option
                regarding facility of companion being availed and in addition to the endorsement as
                enclosed being made on their Pass, stamp regarding their entitlement to the number
                of berth[s] in Rajdhani / Shatabdi trains shall also be made.
              </p>
            </div>
          </div>

          {/* Important Note Section */}
          <div className="bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl shadow-2xl p-6 mb-8 text-white border border-yellow-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-2xl text-xl font-bold mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Important Note
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/90 leading-relaxed lg:text-lg text-base italic">
                &quot;Companion in lieu of attendant will be permitted only when the pass holder and
                other family member[s] more than 70 years of age is / are traveling in SL/II Class
                in trains other than Rajdhani/Shatabdi express, or in higher class by paying 1/3rd of
                the difference of fare between SL /II Class and the class in which the pass holder
                /family member[s] above 70 years of age is/are traveling in all trains, including
                Rajdhani /Shatabdi trains, subject to existing restriction regarding number of
                berths&quot;.
              </p>
            </div>
          </div>

          {/* Key Points Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Age-Based Eligibility */}
            <div className="bg-linear-to-br from-rose-600 to-rose-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">👴</span>
                Age-Based Eligibility
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">✓</span>
                  65+ years: Full fare difference
                </li>
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">✓</span>
                  70+ years: 1/3rd fare difference
                </li>
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">✓</span>
                  Different benefits for different ages
                </li>
                <li className="flex items-center">
                  <span className="text-rose-200 mr-2">✓</span>
                  Family member age affects eligibility
                </li>
              </ul>
            </div>

            {/* Train Restrictions */}
            <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🚂</span>
                Train Restrictions
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Rajdhani/Shatabdi restrictions
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Berth availability limitations
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Different rules for different trains
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Subject to existing restrictions
                </li>
              </ul>
            </div>

            {/* Documentation Requirements */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">📋</span>
                Documentation Requirements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Proper endorsement on passes
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Stamp for berth entitlement
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Application time exercise option
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Clear documentation process
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-rose-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Enhanced travel comfort for elderly passengers</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Reduced fare benefits for eligible age groups</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Flexible travel options across different train types</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Support for widows and retired employees</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Clear documentation and application process</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Comprehensive coverage for all eligible groups</span>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Summary Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 text-center">Eligibility Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 border border-white/20">
                <div className="bg-linear-to-br from-blue-500 to-blue-600 text-xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  65+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Years Age Group</h3>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>• Full fare difference payment</li>
                  <li>• Excludes Rajdhani/Shatabdi</li>
                  <li>• Higher class companion facility</li>
                  <li>• Standard pass rules apply</li>
                </ul>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 border border-white/20">
                <div className="bg-linear-to-br from-green-500 to-green-600 text-xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                  70+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Years Age Group</h3>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>• 1/3rd fare difference payment</li>
                  <li>• Includes Rajdhani/Shatabdi</li>
                  <li>• Same class companion facility</li>
                  <li>• Berth restrictions apply</li>
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

export default CompanionPass