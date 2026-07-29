"use client"
import React from 'react'

const AMAppendixPage156A = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">APPENDIX-IV</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              WEATHER WARNING – CYCLONE WARNINGS
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-red-300 mb-2">Weather Warning Message</h4>
                        <p className="text-gray-200 leading-relaxed mb-4">Arrangements exist with the Meteorological Department, Government of India for issuing messages of warning and also through fax and e- mail, whenever storm/gales or heavy rainfall are expected. The following are conditions under which warnings are issued.</p>
                        <div className="space-y-3 ml-0">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white font-bold text-sm">a</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">Amount of rainfall considered dangerous – 5 centimeters and above in 24 hours</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white font-bold text-sm">b</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">Wind velocity considered dangerous – 65 kms and above per hour</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white font-bold text-sm">c</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">Period when warning will be given – throughout the year</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default AMAppendixPage156A