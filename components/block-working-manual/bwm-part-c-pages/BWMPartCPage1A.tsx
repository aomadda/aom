"use client"
import React from 'react'

const BWMPartCPage1A: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - I
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-indigo-300 mb-4">DESCRIPTION BLOCK INSTRUMENTS, INDOOR APPARATUS AND OUTDOOR APPARATUS.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* Note Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">Note:</h3>
                    
                    <div className="space-y-4">
                      {/* i) Item */}
                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-xl lg:p-5 p-3 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">i</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              The term&apos; <span className="text-blue-300 font-semibold">Station Master</span>&apos; wherever used in this Manual, also applies to <span className="text-blue-300 font-semibold">Assistant Station Master</span>, <span className="text-blue-300 font-semibold">Cabin Assistant Station Master</span>, <span className="text-blue-300 font-semibold">Cabin Master / Switchman</span> and any other competent staff who may, for the time being, be in charge of <span className="text-green-300 font-semibold">block working</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* ii) Item */}
                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-xl lg:p-5 p-3 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">ii</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              The name of stations as represented by <span className="text-green-300 font-semibold">W,X,Y and Z</span> in this Manual and the number, direction and description of trains mentioned shall be read only as examples. In actual working the proper names of the stations and the number, direction and description of trains shall be used. <span className="text-red-400 font-semibold">(AS-5, dt.17.06.19/Item No.1/Rule 1.1 is amended)</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1.1 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">1.1. Provision of Block Instrument:</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                          The following types of <span className="text-green-300 font-semibold">Block instruments</span> are in use on the double line sections of this Railway.
                        </p>
                        <div className="space-y-3">
                          {/* A) Item */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-lg lg:p-4 p-3 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">A</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  <span className="text-blue-300 font-semibold">S.G.E. type Lock and Block instrument;</span>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* B) Item */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-lg lg:p-4 p-3 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">B</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  <span className="text-blue-300 font-semibold">SSBPAC(D) – Double Line Block instrument</span> and
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* C) Item */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-lg lg:p-4 p-3 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">C</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  <span className="text-blue-300 font-semibold">UFSBI - Double Line Block instrument.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          For detailed instructions of <span className="text-green-300 font-semibold">SSBPAC(D) – Double Line</span> and <span className="text-green-300 font-semibold">UFSBI - Double Line</span>, refer <span className="text-yellow-300 font-semibold">Annexure -1</span> at the end of <span className="text-yellow-300 font-semibold">Chapter 8</span>.
                        </p>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          The sections of the line provided with these <span className="text-green-300 font-semibold">Block instruments</span> are notified in the <span className="text-blue-300 font-semibold">Working Time Table</span>.
                        </p>
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

export default BWMPartCPage1A