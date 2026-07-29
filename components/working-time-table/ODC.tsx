"use client"
import React from 'react'

const ODC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden mt-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OVER DIMENSIONAL CONSIGNMENT
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-cyan-300 mb-4">(ODC)</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-md text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Conditions for Movement of ISMD/ODC - Comprehensive guidelines for safe transportation of oversized cargo
            </p>
          </div>

          {/* Regulatory Framework Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Regulatory Framework
            </h2>
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-1 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-sm">
                  <strong>Ref:</strong> 1. RAILWAY BOARD&rsquo;S LETTER No.2014/CEDO/SR/04 Dtd 20.10.2014
                </span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-1 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-sm">
                  <strong>Ref:</strong> 2. RAILWAY BOARD&rsquo;s LETTER No. 2022/TT-1/27/6 Dtd 23.06.2022
                </span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-1 rounded-lg transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-sm">
                  <strong>Ref:</strong> 3. DIAGRAM NO:1 D(EDO/T-2202 OF ACS No.27 TO IRSOD-2014
                </span>
              </div>
            </div>
          </div>

          {/* Definition Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">  
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Definition
            </h3>
            <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30">
              <p className="lg:text-lg text-md text-gray-200 leading-relaxed">
                Consignments which when loaded upon a wagon, would infringe the maximum standard moving
                Dimension, at any point, on the entire route, from the booking station to the Destination is called
                an <strong className="text-emerald-300">Over Dimensional Consignment (ODC)</strong>.
              </p>
              <p className="lg:text-lg text-md text-gray-200 mt-4">
                Any consignment exceeding the Dimension quoted below shall not be registered for booking
                unless prior sanction for its acceptance has been obtained from the zonal headquarters.
              </p>
            </div>
          </div>

          {/* Dimension Limits */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </span>
              Dimension Limits
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg p-4 rounded-lg border border-green-400/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-green-300 lg:text-lg text-md">Height at centre</span>
                    <span className="bg-green-500/30 text-green-200 px-4 py-2 rounded-lg font-medium backdrop-blur-sm">4265 mm</span>
                  </div>
                </div>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg p-4 rounded-lg border border-blue-400/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-blue-300 lg:text-lg text-md">Height at side</span>
                    <span className="bg-blue-500/30 text-blue-200 px-4 py-2 rounded-lg font-medium backdrop-blur-sm">3735 mm</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg p-4 rounded-lg border border-purple-400/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-purple-300 lg:text-lg text-md">Width</span>
                    <span className="bg-purple-500/30 text-purple-200 px-4 py-2 rounded-lg font-medium backdrop-blur-sm">3250 mm</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">up to a height of 3735 mm and 2030 mm beyond 3735 mm</p>
                </div>
                <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg p-4 rounded-lg border border-orange-400/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-orange-300 lg:text-lg text-md">Maximum width</span>
                    <span className="bg-orange-500/30 text-orange-200 px-4 py-2 rounded-lg font-medium backdrop-blur-sm">3250 mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ODC Classification */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </span>
              ODC Classification
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Class A */}
              <div className="bg-linear-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-green-400/30 hover:scale-105 transition-all duration-300">
                <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white py-4 px-4">
                  <h4 className="lg:text-xl text-md font-bold">Class &lsquo;A&rsquo;</h4>
                  <p className="text-green-100">Permitted out of gauge Loads</p>
                </div>
                <div className="p-4">
                  <div className="bg-green-500/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                    <p className="text-green-200 font-semibold">
                      Gross clearance of <strong>228.6 mm (9&rdquo;)</strong> and above
                    </p>
                  </div>
                  <h5 className="lg:text-lg text-md font-bold text-white mb-3">Sanctioning Authority:</h5>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• Within Division: <strong>DRM</strong></li>
                    <li>• Inter Division of the same Zone: <strong>COM</strong></li>
                    <li>• Inter Railway: <strong>COM of the Zone and COM of the concern Railway</strong></li>
                  </ul>
                </div>
              </div>

              {/* Class B */}
              <div className="bg-linear-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/30 hover:scale-105 transition-all duration-300">
                <div className="bg-linear-to-r from-yellow-600 to-amber-600 text-white py-4 px-4">
                  <h4 className="lg:text-xl text-md font-bold">Class &lsquo;B&rsquo;</h4>
                  <p className="text-yellow-100">Exceptional out of gauge Loads</p>
                </div>
                <div className="p-4">
                  <div className="bg-yellow-500/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                    <p className="text-yellow-200 font-semibold">
                      Gross clearance of <strong>152.4 mm (6&rdquo;)</strong> and above, but less than <strong>228.6 mm (9&rdquo;)</strong>
                    </p>
                  </div>
                  <h5 className="lg:text-lg text-md font-bold text-white mb-3">Sanctioning Authority:</h5>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• Local: <strong>DRM</strong></li>
                    <li>• Inter Division/Foreign Railway: <strong>COM</strong></li>
                  </ul>
                </div>
              </div>

              {/* Class C */}
              <div className="bg-linear-to-br from-red-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-red-400/30 hover:scale-105 transition-all duration-300">
                <div className="bg-linear-to-r from-red-600 to-pink-600 text-white py-4 px-4">
                  <h4 className="lg:text-xl text-md font-bold">Class &lsquo;C&rsquo;</h4>
                  <p className="text-red-100">Extra-ordinary out of gauge Loads</p>
                </div>
                <div className="p-4">
                  <div className="bg-red-500/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                    <p className="text-red-200 font-semibold">
                      Gross clearance of less than <strong>152.4 mm (6&rdquo;)</strong> but not less than <strong>101.6 mm (4&rdquo;)</strong>
                    </p>
                  </div>
                  <h5 className="lg:text-lg text-md font-bold text-white mb-3">Sanctioning Authority:</h5>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• <strong>CRS</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Movement Conditions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Conditions for Movement of ODC
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Class A Conditions */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg p-4 rounded-xl border border-green-400/30 hover:shadow-lg transition-all duration-300">
                <h4 className="lg:text-xl text-lg font-semibold text-green-300 mb-4">Class &lsquo;A&rsquo; Conditions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Speed:</span>
                    <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Sectional Speed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Permitted:</span>
                    <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Day & Night</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Escort:</span>
                    <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Not Necessary</span>
                  </div>
                </div>
              </div>

              {/* Class B Conditions */}
              <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg p-4 rounded-xl border border-yellow-400/30 hover:shadow-lg transition-all duration-300">
                <h4 className="lg:text-xl text-lg font-semibold text-yellow-300 mb-4">Class &lsquo;B&rsquo; Conditions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Speed:</span>
                    <span className="bg-yellow-500/30 text-yellow-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Max 40 kmph</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Permitted:</span>
                    <span className="bg-yellow-500/30 text-yellow-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Day & Night</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Escort:</span>
                    <span className="bg-yellow-500/30 text-yellow-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">TXR Required</span>
                  </div>
                </div>
              </div>

              {/* Class C Conditions */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg p-4 rounded-xl border border-red-400/30 hover:shadow-lg transition-all duration-300">
                <h4 className="lg:text-xl text-lg font-semibold text-red-300 mb-4">Class &lsquo;C&rsquo; Conditions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Speed:</span>
                    <span className="bg-red-500/30 text-red-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Max 25 kmph</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Permitted:</span>
                    <span className="bg-red-500/30 text-red-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">Day Time Only</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-200">Escort:</span>
                    <span className="bg-red-500/30 text-red-200 px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">SSE/P.WAY, SSE/C&W, TI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Electrified Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              In Electrified Section
            </h3>
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border-l-4 border-blue-400 p-4 rounded-xl mb-8">
              <p className="lg:text-lg text-md text-gray-200">
                The following are the clearances from contact wire for the passage of ODCs through
                electrified sections and the special restrictions required: <strong className="text-blue-300">C-10 (SCR)</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg p-4 rounded-xl border border-green-400/30 hover:shadow-lg transition-all duration-300">
                <h4 className="lg:text-xl text-lg font-semibold text-green-300 mb-3">More than 250 mm</h4>
                <p className="lg:text-lg text-md text-green-200">
                  A special speed restriction is <strong>not required</strong>
                </p>
              </div>
              
              <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg p-4 rounded-xl border border-yellow-400/30 hover:shadow-lg transition-all duration-300">
                <h4 className="lg:text-xl text-lg font-semibold text-yellow-300 mb-3">250 mm to 200 mm</h4>
                <p className="lg:text-lg text-md text-yellow-200">
                  Speed must be restricted to <strong>15 kmph</strong><br/>
                  <span className="text-sm">(ODC would not be stopped under critical locations. Representative of the OHE section should accompany the Train)</span>
                </p>
              </div>
              
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg p-4 rounded-xl border border-red-400/30 hover:shadow-lg transition-all duration-300">
                <h4 className="lg:text-xl text-lg font-semibold text-red-300 mb-3">Less than 200 mm</h4>
                <p className="lg:text-lg text-md text-red-200">
                  Speed must be restricted to <strong>15 kmph</strong> and power to OHE must be <strong>switched off</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-3 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-4">ODC Movement Guidelines</h3>
            <p className="lg:text-lg text-md mb-4 text-gray-200">
              Strict adherence to clearance requirements and speed restrictions ensures safe transportation
            </p>
            <p className="text-sm text-gray-300 opacity-90">(For Official Railway Operations Reference)</p>
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

export default ODC