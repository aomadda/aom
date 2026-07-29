"use client"
import React from 'react'

const PassTransfer = () => {
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
            <div className="inline-block p-2 bg-linear-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              PASS TRANSFER
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines and regulations for pass transfer policies and restrictions
            </p>
          </div>

          {/* Transfer Conditions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Transfer Conditions
            </h2>
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 px-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Passes and PTOs are not transferable and should be used only by the person
                  in whose favour they have been issued. Transfer of passes to other persons
                  is strictly prohibited and may result in disciplinary action.
                </p>
              </div>
            </div>
          </div>

          {/* Authorized Usage Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Authorized Usage
            </h2>
            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 px-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col gap-3 items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Only the railway servant and their authorized family members or dependents
                  as specified in the pass rules can use the passes. Unauthorized usage by
                  any other person is not permitted.
                </p>
              </div>
            </div>
          </div>

          {/* Penalties Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Penalties for Transfer
            </h2>
            <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 px-3 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-orange-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚠️</span>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Any attempt to transfer or allow unauthorized persons to use passes may
                  result in disciplinary action including suspension, dismissal, or other
                  penalties as per railway rules.
                </p>
              </div>
            </div>
          </div>

          {/* Reporting Violations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Reporting Violations
            </h2>
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Railway authorities should be immediately informed of any suspected
                  transfer or misuse of passes. Timely reporting helps prevent further
                  violations and protects legitimate pass holders.
                </p>
              </div>
            </div>
          </div>

          {/* Important Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Important Guidelines
            </h2>
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-purple-400 mr-3 text-lg group-hover:scale-110 transition-transform">🚫</span>
                    <span className="text-gray-200 lg:text-base text-sm">Passes are strictly non-transferable</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</span>
                    <span className="text-gray-200 lg:text-base text-sm">Only authorized family members can use passes</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                    <span className="text-gray-200 lg:text-base text-sm">Transfer violations lead to disciplinary action</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📢</span>
                    <span className="text-gray-200 lg:text-base text-sm">Report any suspected misuse immediately</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🔒</span>
                    <span className="text-gray-200 lg:text-base text-sm">Pass holders are responsible for pass security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Non-Transferable */}
            <div className="bg-linear-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl py-6 px-2 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-12 h-12 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-10 lg:h-10 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold mb-3 text-center">Non-Transferable</h3>
              <p className="text-red-200 lg:text-lg text-base text-center mb-6">Passes cannot be transferred to other persons</p>
              <div className="flex justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Strict Rule</span>
              </div>
            </div>

            {/* Authorized Users */}
            <div className="bg-linear-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl py-6 px-2 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-12 h-12 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-10 lg:h-10 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold mb-3 text-center">Authorized Users</h3>
              <p className="text-green-200 lg:text-lg text-base text-center mb-6">Only family members and dependents</p>
              <div className="flex justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Permitted</span>
              </div>
            </div>

            {/* Penalties */}
            <div className="bg-linear-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl py-6 px-2 text-white hover:scale-105 transition-all duration-300 group">
              <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-12 h-12 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                <svg className="lg:w-10 lg:h-10 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold mb-3 text-center">Penalties</h3>
              <p className="text-orange-200 lg:text-lg text-base text-center mb-6">Disciplinary action for violations</p>
              <div className="flex justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Severe</span>
              </div>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Compliance Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center justify-center text-center">
                  
                  Pass Holder Responsibilities
                </h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">🔒</span>
                    <span className="lg:text-base text-sm">Maintain pass security at all times</span>
                  </li>
                  <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">👥</span>
                    <span className="lg:text-base text-sm">Ensure only authorized users access passes</span>
                  </li>
                  <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">📋</span>
                    <span className="lg:text-base text-sm">Follow all pass usage guidelines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 px-2 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4 flex items-center justify-center text-center">
                  
                  Reporting Procedures
                </h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">📞</span>
                    <span className="lg:text-base text-sm">Report violations immediately</span>
                  </li>
                  <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">📝</span>
                    <span className="lg:text-base text-sm">Provide detailed information</span>
                  </li>
                  <li className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">🛡️</span>
                    <span className="lg:text-base text-sm">Cooperate with investigations</span>
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

export default PassTransfer