"use client"
import React from 'react'

const AMChapterPage2D = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-indigo-300 mb-4">ACCIDENT CLASSIFICATION</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive classification system for railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105 - Accident Classification */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-purple-400 to-purple-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                      Classification of Accidents
                    </h3>
                    <div className="bg-linear-to-r from-purple-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-6">
                        Accidents are classified under following heads:
                      </div>
                      <ul className="space-y-6 text-left mx-auto max-w-3xl text-gray-200 lg:text-lg text-base leading-relaxed">
                        <li className="flex items-start gap-5 group">
                          <span className="shrink-0 rounded-full border-2 border-purple-400 bg-linear-to-br from-purple-700 to-purple-500 text-white shadow-lg w-10 h-10 flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-400/50 select-none">1</span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-purple-500/10 transition-colors duration-300">
                            Train Accidents.
                          </span>
                        </li>
                        <li className="flex items-start gap-5 group">
                          <span className="shrink-0 rounded-full border-2 border-purple-400 bg-linear-to-br from-violet-800 to-purple-400 text-white shadow-lg w-10 h-10 flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-400/50 select-none">2</span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-purple-500/10 transition-colors duration-300">
                            Yard Accidents
                          </span>
                        </li>
                        <li className="flex items-start gap-5 group">
                          <span className="shrink-0 rounded-full border-2 border-purple-400 bg-linear-to-br from-fuchsia-900 to-purple-400 text-white shadow-lg w-10 h-10 flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-400/50 select-none">3</span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-purple-500/10 transition-colors duration-300">
                            Indicative Accidents
                          </span>
                        </li>
                        <li className="flex items-start gap-5 group">
                          <span className="shrink-0 rounded-full border-2 border-purple-400 bg-linear-to-br from-indigo-900 to-purple-400 text-white shadow-lg w-10 h-10 flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-400/50 select-none">4</span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-purple-500/10 transition-colors duration-300">
                            Equipment Failures
                          </span>
                        </li>
                        <li className="flex items-start gap-5 group">
                          <span className="shrink-0 rounded-full border-2 border-purple-400 bg-linear-to-br from-purple-900 to-purple-400 text-white shadow-lg w-10 h-10 flex items-center justify-center font-bold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-400/50 select-none">5</span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-purple-500/10 transition-colors duration-300">
                            Unusual Incidents
                          </span>
                        </li>
                      </ul>
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

export default AMChapterPage2D