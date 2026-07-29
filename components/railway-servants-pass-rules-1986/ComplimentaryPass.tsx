"use client"
import React from 'react'

const ComplimentaryPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-rose-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-pink-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-xl font-bold bg-linear-to-r from-white via-red-100 to-pink-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              COMPLIMENTARY CARD PASSES
            </h1>
            <h2 className="lg:text-4xl text-xl font-semibold text-pink-300 mb-4">Freedom Fighters & Widows</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Special travel benefits for freedom fighters and their widows on All Indian Railways with specific conditions and restrictions
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-bold text-white">Overview</h3>
            </div>
            <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
              Freedom fighters and their widows are entitled to special complimentary card passes for free rail travel on All Indian Railways with specific conditions and restrictions.
            </p>
          </div>

          {/* Travel Entitlements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Regular Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:shadow-red-500/50 transition-shadow">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white lg:text-xl text-lg">Regular Trains</h4>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🎫</span>
                  <div>
                    <strong className="text-white">Class:</strong> 1st Class/2nd AC
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">👥</span>
                  <div>
                    <strong className="text-white">Companion:</strong> Allowed in same class
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">⚠️</span>
                  <div>
                    <strong className="text-white">Restrictions:</strong> Any train other than Rajdhani/Shatabdi trains
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🚂</span>
                  <div>
                    <strong className="text-white">Coverage:</strong> All Indian Railways [except Metro Railway/Kolkata]
                  </div>
                </div>
              </div>
            </div>

            {/* Rajdhani/Shatabdi Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:shadow-pink-500/50 transition-shadow">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white lg:text-xl text-lg">Rajdhani/Shatabdi Trains</h4>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🚄</span>
                  <div>
                    <strong className="text-white">Rajdhani:</strong> 3rd AC
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">💺</span>
                  <div>
                    <strong className="text-white">Shatabdi/Jan Shatabdi:</strong> Chair Car [CC]
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">👥</span>
                  <div>
                    <strong className="text-white">Companion:</strong> Allowed in same class
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">  
                  <span className="text-pink-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🖊️</span>
                  <div>
                    <strong className="text-white">Note:</strong> Special stamping required
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pass Stamping Requirements */}
          <div className="bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl shadow-2xl py-4 px-4 mb-8 text-white border border-yellow-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="text-center mb-4">
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="lg:text-2xl text-xl font-bold">Pass Stamping Requirements</h4>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl py-4 px-2 border border-white/30">
              <p className="lg:text-lg text-base italic text-white/90 leading-relaxed">
                &quot;Valid for travel in 3rd AC in Rajdhani trains and Chair Car [CC] in Shatabdi/Jan-Shatabdi trains along with a companion in same class...&quot;
              </p>
            </div>
          </div>

          {/* Pass Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Validity */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">  
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:shadow-green-500/50 transition-shadow">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white lg:text-xl text-lg">Validity</h4>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">👥</span>
                  <div>
                    <strong className="text-white">Persons:</strong> Two persons (self and companion)
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">⏰</span>
                  <div>
                    <strong className="text-white">Duration:</strong> Life-time basis
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🔄</span>
                  <div>
                    <strong className="text-white">Renewal:</strong> Every year
                  </div>
                </div>
              </div>
            </div>

            {/* Issuance Period */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:shadow-blue-500/50 transition-shadow">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white lg:text-xl text-lg">Issuance Period</h4>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">📅</span>
                  <div>
                    <strong className="text-white">Grant Period:</strong> One year
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🔄</span>
                  <div>
                    <strong className="text-white">Renewal:</strong> Annual renewal required
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✅</span>
                  <div>
                    <strong className="text-white">Validity:</strong> Continuous lifetime benefit
                  </div>
                </div>
              </div>
            </div>

            {/* Issuing Authority */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto group-hover:shadow-purple-500/50 transition-shadow">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-bold text-white lg:text-xl text-lg">Issuing Authority</h4>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🏢</span>
                  <div>
                    <strong className="text-white">Location:</strong> Divisional/Zonal Headquarters only
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🚫</span>
                  <div>
                    <strong className="text-white">Restriction:</strong> Cannot be issued at other offices
                  </div>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">🎯</span>
                  <div>
                    <strong className="text-white">Centralized:</strong> Controlled issuance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Important Notes</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                    <p className="lg:text-lg text-base">Passes are valid for lifetime but require annual renewal</p>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                    <p className="lg:text-lg text-base">Companion facility is available in all cases</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚫</span>
                    <p className="lg:text-lg text-base">Metro Railway/Kolkata is excluded from coverage</p>
                  </div>
                  <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                    <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🖊️</span>
                    <p className="lg:text-lg text-base">Special stamping is mandatory for Rajdhani/Shatabdi travel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl shadow-2xl py-4 px-4 text-white border border-green-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="text-center mb-4">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="lg:text-4xl text-2xl font-bold">Application Process</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-white font-bold">
                      1
                    </div>
                    <span className="lg:text-lg text-base">Submit application with freedom fighter certificate</span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-white font-bold">
                      2
                    </div>
                    <span className="lg:text-lg text-base">Visit Divisional/Zonal Headquarters only</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-white font-bold">
                      3
                    </div>
                    <span className="lg:text-lg text-base">Collect pass with proper stamping</span>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-white font-bold">
                      4
                    </div>
                    <span className="lg:text-lg text-base">Renew annually as required</span>
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

export default ComplimentaryPass