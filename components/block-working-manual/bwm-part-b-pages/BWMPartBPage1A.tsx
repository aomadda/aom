"use client"
import React from 'react'

const BWMPartBPage1A: React.FC = () => {
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
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">DESCRIPTION OF BLOCK INSTRUMENTS, INDOOR APPARATUS AND OUTDOOR APPARATUS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="mb-6">
                      <span className="font-bold text-blue-300 text-xl">Note:</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                        </div>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                          The term&apos; Station Master&apos; wherever used in this Manual, also applies to Assistant Station Master, Cabin Assistant Station Master, Cabin Master / Switchman and any other competent staff, who may, for the time being, be in charge of block working.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                        </div>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                          The name of stations as represented by W, X, Y and Z in this Manual and the number, direction and description of trains mentioned shall be read only as examples. In actual working, the proper names of the stations and the number, direction and description of trains shall be used.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-4">1.1. Provision of Block Instrument:</h3>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                      The following types of Token less Block Instruments are in use on certain Single Line sections of this Railway.
                    </p>
                    <div className="space-y-4">
                      {/* Item a) */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
                            <span className="text-white font-semibold text-sm">a</span>
                          </div>
                        </div>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                          Daido Handle Type and
                        </p>
                      </div>
                      
                      {/* Item b) */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
                            <span className="text-white font-semibold text-sm">b</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                            Push Button Type: Following types of Push Button type Block Instruments are provided in this Railway.
                          </p>
                          <div className="space-y-3 ml-2">
                            {/* Sub-item i */}
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                  <span className="text-white font-medium text-xs">i</span>
                                </div>
                              </div>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                Kyosan make;
                              </p>
                            </div>
                            
                            {/* Sub-item ii */}
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                  <span className="text-white font-medium text-xs">ii</span>
                                </div>
                              </div>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                Podanur make and
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item iii */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
                            <span className="text-white font-semibold text-sm">iii</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                            Axle Counter Proven Block Panel: Following types of Axle Counter Proven Block Instruments are provided on this Railway:
                          </p>
                          <div className="space-y-3 ml-2">
                            {/* Sub-item a */}
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow">
                                  <span className="text-white font-medium text-xs">a</span>
                                </div>
                              </div>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                UFSBI and
                              </p>
                            </div>
                            
                            {/* Sub-item b */}
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow">
                                  <span className="text-white font-medium text-xs">b</span>
                                </div>
                              </div>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                SSBPAC (D) - Single Line.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mt-6">
                      The sections of the line provided with these Block Instruments are notified in the Working Time Table for passenger trains.
                    </p>
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

export default BWMPartBPage1A