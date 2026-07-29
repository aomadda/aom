"use client"
import React from 'react'

const AMAppendixPage203 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">APPENDIX - VI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              SPECIMEN FORMS FOR SUBMISSION OF ACCIDENT ENQUIRY REPORTS
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Form Header Section */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">📋</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-4">Form Acc 9-K<br />Marshalling and Rolling stock particulars:</h4>

                      <div className="space-y-4">
                        <div className="bg-red-900/20 lg:p-4 p-2 rounded-lg border border-red-400/20">
                          <div className="text-center text-gray-200 space-y-2">
                            <p><strong>Composition, Marshalling Order and particulars of Rolling Stock on the trains involved Down / Up train No……………. Ex ................. to</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rolling Stock Table Section */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">🚆</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-4">Rolling Stock Details:</h4>

                      <div className="space-y-4">
                        <div className="bg-red-900/20 lg:p-4 p-2 rounded-lg border border-red-400/20">
                          <div className="text-gray-200 space-y-2">
                            {/* Table Header */}
                            <div className="grid grid-cols-12 gap-1 font-medium text-center text-xs">
                              <div className="p-2 bg-red-800/30 rounded">S.No</div>
                              <div className="p-2 bg-red-800/30 rounded">Owning Rly</div>
                              <div className="p-2 bg-red-800/30 rounded col-span-2">Class or type and painted number</div>
                              <div className="p-2 bg-red-800/30 rounded col-span-3">Weight</div>
                              <div className="p-2 bg-red-800/30 rounded">From</div>
                              <div className="p-2 bg-red-800/30 rounded">To</div>
                              <div className="p-2 bg-red-800/30 rounded">E (Empty) or L (Loaded) And Commodity</div>
                              <div className="p-2 bg-red-800/30 rounded">Last POH at Date</div>
                              <div className="p-2 bg-red-800/30 rounded">Repacked Date</div>
                              <div className="p-2 bg-red-800/30 rounded">Remarks</div>
                            </div>
                            {/* Weight Sub-headers */}
                            <div className="grid grid-cols-12 gap-1 text-center text-xs">
                              <div className="col-span-4"></div>
                              <div className="p-1 bg-red-700/20 rounded">Booked</div>
                              <div className="p-1 bg-red-700/20 rounded">Tare</div>
                              <div className="p-1 bg-red-700/20 rounded">Gross</div>
                              <div className="p-1 bg-red-700/20 rounded">T</div>
                              <div className="p-1 bg-red-700/20 rounded">G</div>
                              <div className="p-1 bg-red-700/20 rounded">T</div>
                              <div className="p-1 bg-red-700/20 rounded">G</div>
                              <div className="col-span-4"></div>
                            </div>
                            {/* Serial Numbers */}
                            <div className="grid grid-cols-12 gap-1 text-center text-xs">
                              <div className="p-1 bg-red-600/20 rounded">1</div>
                              <div className="p-1 bg-red-600/20 rounded">2</div>
                              <div className="p-1 bg-red-600/20 rounded">3</div>
                              <div className="p-1 bg-red-600/20 rounded">4</div>
                              <div className="p-1 bg-red-600/20 rounded">5</div>
                              <div className="p-1 bg-red-600/20 rounded">6</div>
                              <div className="p-1 bg-red-600/20 rounded">7</div>
                              <div className="p-1 bg-red-600/20 rounded">8</div>
                              <div className="p-1 bg-red-600/20 rounded">9</div>
                              <div className="p-1 bg-red-600/20 rounded">10</div>
                              <div className="p-1 bg-red-600/20 rounded">11</div>
                              <div className="p-1 bg-red-600/20 rounded">12</div>
                            </div>
                            <div className="grid grid-cols-12 gap-1 text-center text-xs">
                              <div className="p-1 bg-red-600/20 rounded">13</div>
                              <div className="p-1 bg-red-600/20 rounded">14</div>
                              <div className="p-1 bg-red-600/20 rounded">15</div>
                              <div className="col-span-9"></div>
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

export default AMAppendixPage203
