"use client"
import React from 'react'

const DetentionCost = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-yellow-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-linear-to-r from-red-600 to-red-700 text-white py-6 px-2 rounded-xl shadow-2xl mb-8 border border-red-400/30 backdrop-blur-lg">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mb-4">
                <div className="bg-white/20 rounded-full p-3 mr-4 backdrop-blur-sm">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="lg:text-4xl text-2xl  font-bold animate-fade-in"> Attention !!!</h1>
              </div>
              <p className="lg:text-2xl text-md font-medium text-red-100">Traffic, C & W and Loco Officials</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-4 p-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-xl lg:text-3xl font-bold text-red-300 mb-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-red-500 to-pink-500 p-3 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </span>
                                 &ldquo;Avoidable Detention to Rolling Stock&rdquo;
              </h2>
              <p className="lg:text-lg text-md font-medium text-gray-200 mb-6 leading-relaxed">
                Detentions result in <span className="font-medium text-red-400 bg-red-900/30 px-2 py-1 rounded">Loss of Earnings</span> besides
                <span className="font-medium text-red-400 bg-red-900/30 px-2 py-1 rounded"> higher Maintenance Costs!</span>
              </p>
              
              <div className="bg-linear-to-r from-yellow-500/20 to-orange-500/20 border-l-4 border-yellow-400 p-6 rounded-xl backdrop-blur-sm border">
                <h3 className="lg:text-3xl text-xl text-md font-bold text-yellow-300 mb-3 flex items-center">
                  Do You Know?  
                </h3>
                <p className="lg:text-lg text-md text-yellow-200 leading-relaxed">
                  How much would Detention for one Hour Costs? Or<br/>
                  How much Money can you save by preventing Detention for one Hour?
                </p>
              </div>
            </div>
          </div>

          {/* Cost Details Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {/* Locomotives */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-6 px-2">
                <h3 className="text-xl md:text-2xl font-bold flex flex-col gap-4 items-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  I. LOCOMOTIVES
                </h3>
              </div>
              <div className="p-3">
                <div className="mb-8">
                  <h4 className="font-bold text-gray-200 mb-4 text-lg md:text-xl flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    Diesel
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WDM-2</span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-bold border border-blue-400/30 backdrop-blur-sm">₹16,754</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WDG-3A</span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-bold border border-blue-400/30 backdrop-blur-sm">₹16,760</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WDG-4</span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-bold border border-blue-400/30 backdrop-blur-sm">₹17,015</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WDM-3D</span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-bold border border-blue-400/30 backdrop-blur-sm">₹16,801</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-200 mb-4 text-lg md:text-xl flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    Electrical
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WAP-7</span>
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹23,174</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WAM-4</span>
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹21,333</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <span className="font-medium text-gray-200">WAG-9</span>
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹21,125</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coaches */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-green-600 to-green-700 text-white py-6 px-2">
                <h3 className="text-xl md:text-2xl font-bold flex flex-col gap-4 items-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  II. COACHES
                </h3>
              </div>
              <div className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">AC 1st</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,687</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">AC 2Tier</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹2,020</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">AC 3Tier</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,913</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">AC Chair Car</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹2,044</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">Sleeper</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,297</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">General</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,242</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">II Chair</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,303</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">II+Lug+Brake</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,480</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">Pantry</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-bold border border-green-400/30 backdrop-blur-sm">₹1,173</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wagons */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white py-6 px-6">
                <h3 className="text-xl md:text-2xl font-bold flex flex-col gap-4 items-center">
                  <span className="bg-white/20 rounded-full p-2 mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </span>
                  III. WAGONS
                </h3>
              </div>
              <div className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">BCN</span>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-bold border border-purple-400/30 backdrop-blur-sm">₹1,273</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">BOXN</span>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-bold border border-purple-400/30 backdrop-blur-sm">₹1,309</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">Bogie BCNHL</span>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-bold border border-purple-400/30 backdrop-blur-sm">₹1,533</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <span className="font-medium text-gray-200">Bogie BTPN</span>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-bold border border-purple-400/30 backdrop-blur-sm">₹1,145</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-green-600 to-blue-600 text-white rounded-2xl shadow-2xl p-2 text-center border border-green-400/30 backdrop-blur-lg hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center flex-col gap-4 justify-center mb-6">
              <div className="bg-white/20 rounded-full p-3 mr-4 backdrop-blur-sm">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                             <h3 className="text-xl md:text-3xl font-bold"> Minimise &ldquo;Detentions&rdquo; Keep Rolling Stock &ldquo;Moving&rdquo;</h3>
            </div>
            <p className="lg:text-xl text-md mb-6 text-green-100">
              Enhance Revenue, Reduce Expenses, Improve Productivity
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <p className="text-sm md:text-base opacity-90">(For Official Communication only)</p>
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

export default DetentionCost