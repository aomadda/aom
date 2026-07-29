"use client"
import React from 'react'

const AMChapterPage4I = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">THRESHOLD VALUE</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding the threshold values for accident reporting and classification
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 108 - Threshold Value */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">108</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      Threshold Value
                    </h3>
                    <div className="bg-linear-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span className="mt-1 text-blue-400 text-xl">📋</span>
                          <span>
                            For the purpose of reporting of accident, threshold value is a minimum value beyond which the accident will be treated as having serious repercussion on the basis of loss to railway property or interruption to through traffic. It shall constitute two portions.
                          </span>
                        </p>
                        
                        <div className="space-y-4 mt-6">
                          <div className="flex items-start gap-3">
                            <span className="mt-1 text-indigo-400 text-xl">a)</span>
                            <span>
                              Threshold value of loss of railway property is fixed at one lakh rupees or;
                            </span>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <span className="mt-1 text-purple-400 text-xl">b)</span>
                            <span>
                              Threshold value of interruption to through traffic either partial or total is where duration of interruption is equal to or more than the number of hours specified against each column below.
                            </span>
                          </div>
                        </div>

                        {/* Table Section */}
                        <div className="mt-6">
                          <div className="bg-white/5 rounded-lg p-4 border border-white/20 flex flex-col gap-4">
                            <div className="text-blue-300 font-semibold mb-2">Threshold values for interruption to through traffic:</div>
                            <div className="flex items-start gap-3">
                              <span className="text-indigo-400 text-2xl mt-1">🔹</span>
                              <span className="text-white">
                                For BG (Broad Gauge) A, B, C or D Special routes: 
                                <span className="font-semibold text-blue-200"> 3 hours </span> for total interruption, or 
                                <span className="font-semibold text-blue-200"> 6 hours </span> for total + partial interruption.
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-purple-400 text-2xl mt-1">🔸</span>
                              <span className="text-white">
                                For BG D, E Special or MG (Meter Gauge) Q, R routes: 
                                <span className="font-semibold text-purple-200"> 4 hours </span> for total interruption, or 
                                <span className="font-semibold text-purple-200"> 8 hours </span> for total + partial interruption.
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-pink-400 text-2xl mt-1">🔺</span>
                              <span className="text-white">
                                For BG E or MG S routes: 
                                <span className="font-semibold text-pink-200"> 6 hours </span> for total interruption, or 
                                <span className="font-semibold text-pink-200"> 12 hours </span> for total + partial interruption.
                              </span>
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

export default AMChapterPage4I