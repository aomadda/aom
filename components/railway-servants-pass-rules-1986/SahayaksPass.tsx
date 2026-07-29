"use client"
import React from 'react'

const SahayaksPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-purple-500 to-pink-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-xl font-bold bg-linear-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              PASSES/PTOS FOR LICENSED PORTES
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">(SAHAYAKS)</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive pass system designed for licensed porters (Sahayaks) providing both complimentary passes and privilege ticket orders for railway travel.
            </p>
          </div>

          {/* Pass Types Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Pass Types and Eligibility
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Complimentary Administrative Cheque Passes */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-linear-to-r from-purple-500 to-pink-600 p-3 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="lg:text-2xl text-lg font-bold text-white text-center">Complimentary Administrative Cheque Passes</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-gray-200">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-purple-300 block mb-1">Type:</span>
                    <span className="text-white">Self & Spouse</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-purple-300 block mb-1">Class:</span>
                    <span className="text-white">Second/Sleeper</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-purple-300 block mb-1">Number:</span>
                    <span className="text-white">1</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-purple-300 block mb-1">Validity:</span>
                    <span className="text-white">5 Months</span>
                  </div>
                </div>
              </div>

              {/* Privilege Ticket Orders */}
              <div className="bg-linear-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row gap-4 items-center mb-4">
                  <div className="bg-linear-to-r from-pink-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <h3 className="lg:text-2xl text-lg font-bold text-white text-center">Privilege Ticket Orders (PTO)</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-gray-200">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-pink-300 block mb-1">Type:</span>
                    <span className="text-white">Self & Spouse</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-pink-300 block mb-1">Class:</span>
                    <span className="text-white">Second/Sleeper</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-pink-300 block mb-1">Number:</span>
                    <span className="text-white">2</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="font-medium text-pink-300 block mb-1">Validity:</span>
                    <span className="text-white">5 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                <span className="text-gray-200 lg:text-lg text-base">Available for licensed porters (Sahayaks)</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                <span className="text-gray-200 lg:text-lg text-base">Both complimentary passes and PTOs available</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Self and spouse eligible for both types</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                <span className="text-gray-200 lg:text-lg text-base">Second/Sleeper class travel only</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">5 months validity period</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">Different number of passes for each type</span>
              </div>
            </div>
          </div>

          {/* Important Notes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Notes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔒</span>
                <span className="text-gray-200 lg:text-lg text-base">Only licensed porters are eligible for these passes</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                <span className="text-gray-200 lg:text-lg text-base">Passes are non-transferable</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                <span className="text-gray-200 lg:text-lg text-base">Must be used within validity period</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-4 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Subject to railway rules and regulations</span>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py- px-3 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Benefits for Sahayaks
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-4 px-3 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="lg:text-xl text-lg font-bold mb-3">Complimentary Travel</h3>
                <p className="text-blue-200 text-sm">Free travel benefits for licensed porters and their spouses</p>
              </div>

              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-4 px-3 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="lg:text-xl text-lg font-bold mb-3">Privilege Orders</h3>
                <p className="text-purple-200 text-sm">Additional PTO benefits for enhanced travel options</p>
              </div>

              <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl py-4 px-3 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-16 lg:h-16 w-12 h-12 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-xl text-lg font-bold mb-3">Extended Validity</h3>
                <p className="text-pink-200 text-sm">5-month validity period for flexible travel planning</p>
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

export default SahayaksPass