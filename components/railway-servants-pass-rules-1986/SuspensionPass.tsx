"use client"
import React from 'react'

const SuspensionPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-pink-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-pink-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-xl font-bold bg-linear-to-r from-white via-red-100 to-pink-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              SUSPENSION PASSES & DISTANCE RESTRICTIONS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-red-500 to-pink-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Special provisions for suspended employees and route restrictions with comprehensive guidelines
            </p>
          </div>

          {/* Suspension Passes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-pink-500/20 rounded-full mb-4 backdrop-blur-sm">
                <div className="bg-linear-to-r from-red-500 to-pink-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-2xl text-lg font-bold text-white">
                Issue of Passes/PTOs to Railway Servants Under Suspension
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Passes Card */}
              <div className="bg-linear-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl py-4 px-3 border border-red-400/30 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center flex-col gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center flex-col gap-3 justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Passes</h3>
                </div>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-red-200 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">📋</span>
                    <div>
                      <p className="font-semibold">Group C & D:</p>
                      <p className="text-sm">Not more than one set of Pass</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-sm">
                      <strong>Condition:</strong> If only one set of Pass remains in the Railway Servant&apos;s account for the year, no pass can be issued.
                    </p>
                  </div>
                  <div className="flex items-start group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-red-200 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">💾</span>
                    <div>
                      <p className="font-semibold">Retention:</p>
                      <p className="text-sm">If retained in service after release from suspension, passes issued during suspension period within current calendar year shall be debited to pass account.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PTOs Card */}
              <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl py-4 px-3 border border-pink-400/30 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center flex-col gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">PTOs</h3>
                </div>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-start group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-pink-200 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">📊</span>
                    <div>
                      <p className="font-semibold">Limit:</p>
                      <p className="text-sm">Not more than 2 sets per year</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300">
                    <span className="text-pink-200 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">⚖️</span>
                    <div>
                      <p className="font-semibold">Stipulations:</p>
                      <p className="text-sm">Other stipulations similar to those for passes shall also apply</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-sm">
                      <strong>Reference:</strong> RBE No. 159/2019 dated 29/11/2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distance Restrictions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
                <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-2xl text-xl font-bold text-white">
                Distance Restrictions
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 mb-6">
              <p className="text-white/90 leading-relaxed text-center">
                Privilege pass shall be issued for journeys from the starting station to the destination station as desired by the railway servant, via shortest route, provided that a longer route may be permitted in the following circumstances:
              </p>
            </div>

            {/* Route Conditions Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Alternative Routes */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-4 px-3 border border-blue-400/30 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-4 flex-col gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Alternative Routes</h3>
                </div>
                <div className="space-y-4 text-white/90">
                  <p className="text-sm">Two alternative routes are available for a destination.</p>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-sm">
                      <strong>Examples:</strong>
                      <br />
                      • Bombay to Calcutta via Nagpur or via Allahabad
                      <br />• Bombay to Delhi by Central Railway or Western Railway
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Condition:</strong> Such passes may be permitted by either route irrespective of the distance involved
                  </p>
                </div>
              </div>

              {/* Longer Route within 15% */}
              <div className="bg-linear-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-6 border border-green-400/30 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-4 flex-col gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">15% Distance Rule</h3>
                </div>
                <div className="space-y-4 text-white/90">
                  <p className="text-sm">If the distance via longer route does not exceed by 15% of the direct route.</p>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-sm">
                      <strong>Examples:</strong>
                      <br />
                      • Chittaranjan to Kancharapara via Howrah
                      <br />• Lucknow to Southern/South Central Railway via Bombay V.T.
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Condition:</strong> Even if double journey over small portion is involved, provided distance doesn&apos;t exceed shortest route by more than 15%
                  </p>
                </div>
              </div>

              {/* Quicker Route */}
              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-4 flex-col gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Quicker Route</h3>
                </div>
                <div className="space-y-4 text-white/90">
                  <p className="text-sm">If the longer route to destination is quicker than the direct route.</p>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-sm">
                      <strong>Condition:</strong> Irrespective of distance involved
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Benefit:</strong> To take advantage of terminal facilities as in Bombay V.T.-Kalyan or Madras-Arkonam sections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-4 backdrop-blur-sm">
                <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-2xl text-xl font-bold text-white">
                Important Notes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚠️</span>
                  <span className="text-white/90">Suspension passes are strictly limited and subject to remaining pass balance</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🛤️</span>
                  <span className="text-white/90">Distance restrictions ensure optimal route usage while allowing flexibility</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📏</span>
                  <span className="text-white/90">15% rule allows for practical route choices considering terminal facilities</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-white/90">Quicker route option prioritizes time efficiency over distance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Guidelines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
                <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-2xl text-xl font-bold text-white">
                Application Guidelines
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <div className="lg:w-8 lg:h-8 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold group-hover:scale-110 transition-transform">1</div>
                  <span className="text-white/90">Check remaining pass balance before applying</span>
                </div>
                <div className="flex items-center group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <div className="lg:w-8 lg:h-8 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold group-hover:scale-110 transition-transform">2</div>
                  <span className="text-white/90">Specify preferred route with justification</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <div className="lg:w-8 lg:h-8 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold group-hover:scale-110 transition-transform">3</div>
                  <span className="text-white/90">Provide distance calculations if longer route requested</span>
                </div>
                <div className="flex items-center group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <div className="lg:w-8 lg:h-8 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold group-hover:scale-110 transition-transform">4</div>
                  <span className="text-white/90">Ensure proper documentation for route approval</span>
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

export default SuspensionPass