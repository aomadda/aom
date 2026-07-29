"use client"
import React from 'react'

const PrevilegePass = () => {
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
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-linear-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              PRIVILEGE PASS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Travel benefit for railway servants enabling personal travel with family members at concessional rates
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-6">
            
            {/* Definition and Purpose Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-purple-500 to-indigo-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Definition and Purpose
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                Privilege Pass is a travel benefit issued to railway servants for personal
                travel. It allows the employee and their authorized family members to travel
                on Indian Railways at concessional rates or free of cost as per their
                entitlement level.
              </p>
            </div>

            {/* Eligibility Criteria Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-green-500 to-emerald-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Eligibility Criteria
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                Railway servants who have completed the required service period are eligible
                for privilege passes. The entitlement is based on their pay level and grade
                as per the railway rules and regulations.
              </p>
            </div>

            {/* Family Member Inclusion Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Family Member Inclusion
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                Family members including spouse, children, dependent relatives, and parents
                can be included in privilege passes as per the rules. The total number of
                persons cannot exceed the specified limit.
              </p>
            </div>

            {/* Validity and Usage Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-orange-500 to-amber-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Validity and Usage
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                Privilege passes are valid for a period of 5 months from the date of issue.
                They can be used for both single and return journeys within the validity
                period. Break of journey is permitted as per rules.
              </p>
            </div>

            {/* Class of Travel Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-red-500 to-pink-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </span>
                Class of Travel
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                The class of travel depends on the employee&apos;s pay level and grade.
                Higher grades typically get higher class passes. Upgradation to higher
                class requires payment of fare difference.
              </p>
            </div>

            {/* Key Features Section */}
            <div className="bg-linear-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-4 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-yellow-500 to-orange-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚂</span>
                    <span className="text-white/90 text-sm">Personal travel benefit for railway employees</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</span>
                    <span className="text-white/90 text-sm">Family members can be included as per rules</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⏰</span>
                    <span className="text-white/90 text-sm">5 months validity from issue date</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🎫</span>
                    <span className="text-white/90 text-sm">Class of travel based on pay level</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🔄</span>
                    <span className="text-white/90 text-sm">Break of journey permitted</span>
                  </li>
                  <li className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⬆️</span>
                    <span className="text-white/90 text-sm">Upgradation possible with fare difference</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Grid Section */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Travel Benefits */}
              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center flex-col gap-3">
                  <span className="mr-2">🚂</span>
                  Travel Benefits
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-purple-200 mr-2">✓</span>
                    Personal travel facility
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-200 mr-2">✓</span>
                    Family inclusion
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-200 mr-2">✓</span>
                    Concessional rates
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-200 mr-2">✓</span>
                    Multiple journeys
                  </li>
                </ul>
              </div>

              {/* Validity Benefits */}
              <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center flex-col gap-3">
                  <span className="mr-2">⏰</span>
                  Validity Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-indigo-200 mr-2">✓</span>
                    5 months validity
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Single & return journeys
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Break of journey
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Flexible usage
                  </li>
                </ul>
              </div>

              {/* Class Benefits */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center flex-col gap-3">
                  <span className="mr-2">🎫</span>
                  Class Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-blue-200 mr-2">✓</span>
                    Pay level based
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-200 mr-2">✓</span>
                    Higher grade benefits
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-200 mr-2">✓</span>
                    Upgradation option
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-200 mr-2">✓</span>
                    Fare difference payment
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

export default PrevilegePass