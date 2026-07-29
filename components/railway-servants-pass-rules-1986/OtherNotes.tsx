"use client"
import React from 'react'

const OtherNotes = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OTHER NOTES
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines and important information about railway pass rules, validity, and usage
            </p>
          </div>

          {/* Pass Validity and Journey Limits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Pass Validity and Journey Limits
            </h2>
            <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                A pass shall be valid for a period of 5 months from the date of issue. A railway servant may be issued with one set of passes in a year. A railway servant may be issued with one set of passes in a year. A railway servant may be issued with one set of passes in a year. A railway servant may be issued with one set of passes in a year.
              </p>
            </div>
          </div>

          {/* Family Member Inclusion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Family Member Inclusion
            </h2>
            <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                The family members of a railway servant may be included in the pass. The family members of a railway servant may be included in the pass. The family members of a railway servant may be included in the pass. The family members of a railway servant may be included in the pass.
              </p>
            </div>
          </div>

          {/* Dependent Relative Inclusion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Dependent Relative Inclusion
            </h2>
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Not more than two dependent relatives may be included in a pass. Not more than two dependent relatives may be included in a pass. Not more than two dependent relatives may be included in a pass. Not more than two dependent relatives may be included in a pass.
              </p>
            </div>
          </div>

          {/* Total Member Limit Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-pink-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Total Member Limit
            </h2>
            <div className="bg-linear-to-br from-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                The total number of persons included in a pass shall not exceed 5. The total number of persons included in a pass shall not exceed 5. The total number of persons included in a pass shall not exceed 5. The total number of persons included in a pass shall not exceed 5.
              </p>
            </div>
          </div>

          {/* Attendant Travel Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Attendant Travel
            </h2>
            <div className="bg-linear-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                An attendant may be carried in the same class as the pass holder. An attendant may be carried in the same class as the pass holder. An attendant may be carried in the same class as the pass holder. An attendant may be carried in the same class as the pass holder.
              </p>
            </div>
          </div>

          {/* Important Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Important Guidelines
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Pass validity is strictly 5 months from issue date</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                <span className="text-gray-200 lg:text-lg text-base">Only one set of passes per year is allowed</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</span>
                <span className="text-gray-200 lg:text-lg text-base">Family members can be included in passes</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Maximum 2 dependent relatives per pass</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔢</span>
                <span className="text-gray-200 lg:text-lg text-base">Total persons cannot exceed 5 per pass</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                <span className="text-gray-200 lg:text-lg text-base">Attendants travel in same class as pass holder</span>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Validity Benefits */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Validity Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  5 months validity period
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Flexible travel planning
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Extended usage window
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Clear validity guidelines
                </li>
              </ul>
            </div>

            {/* Family Benefits */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Family Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Family member inclusion
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Dependent relative support
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Maximum 5 persons per pass
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Comprehensive coverage
                </li>
              </ul>
            </div>

            {/* Process Benefits */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-6 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Process Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Annual pass allocation
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Attendant travel facility
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Clear guidelines
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Simplified procedures
                </li>
              </ul>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Points to Remember
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Validity Period</h3>
                <p className="text-gray-200 text-sm">All passes are valid for exactly 5 months from the date of issue</p>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Annual Limit</h3>
                <p className="text-gray-200 text-sm">Only one set of passes is allowed per railway servant per year</p>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Family Inclusion</h3>
                <p className="text-gray-200 text-sm">Family members can be included in the pass with proper documentation</p>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold text-amber-300 mb-2">Member Limits</h3>
                <p className="text-gray-200 text-sm">Maximum 5 persons including dependents and attendants per pass</p>
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

export default OtherNotes