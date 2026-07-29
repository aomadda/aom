"use client"
import React from 'react'

const AMChapterPage61 = () => {
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
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER V</h2>    
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              SIGNAL & TELECOMMUNICATION (POINTS & SIGNALS)
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 507 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">507</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      SIGNAL & TELECOMMUNICATION (POINTS & SIGNALS)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Station/Cabin Information */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">📍</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-3">Station / Cabin Information</h4>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-200">Name of the Station / Cabin:</span>
                            <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_____________</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Table */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Introduction */}
                  <div className="space-y-4">
                    <p className="text-gray-200 leading-relaxed">
                      Pro-forma to be filled in case of accident/derailment when Signal & Telecommunication equipment is involved in accident. (Information to be furnished by the Signal & Telecommunication department):
                    </p>
                  </div>

                  {/* Signal & Telecommunication Details Table */}
                  <div className="overflow-x-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                      <table className="w-full text-sm text-gray-200 border-collapse">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-l-lg">S. No.</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Particulars</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-r-lg">Details / Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-l-lg font-semibold">1</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">Particulars of damage</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg font-semibold">2</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Whether rod worked, D.W. worked, or power operated</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg font-semibold">3</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10">Whether fitted with key lock or E.F.P.L</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg font-semibold">4</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10">Whether fitted with lock bar or provided with track circuit</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-l-lg font-semibold">5</td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10">Whether fitted with linear detector, rotary detector (direct/indirect), or electrical detector</td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-l-lg font-semibold">6</td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10">Position of levers of points and/or detector</td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg font-semibold">7</td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">Noted dimensions of point switch and lock slides</td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-l-lg font-semibold">8</td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10">Last movement done over the points just before the accident and whether signaled or un-signaled</td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-r-lg">
                              <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Signature Section */}
                  <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">✍</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-blue-300 mb-3">To be jointly signed by</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">Supervisor (S&T)</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">Supervisor (Traffic)</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">Supervisor (P.Way)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Signal Details Table */}
                  <div className="mt-8">
                    <div className="overflow-x-auto">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                        <table className="w-full text-sm text-gray-200 border-collapse">
                          <thead>
                            <tr className="border-b border-white/20">
                              <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-l-lg">S. No.</th>
                              <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Item</th>
                              <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-r-lg">Details / Remarks</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-l-lg font-semibold">9</td>
                              <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">Position of Signal arm and aspect displayed by signals concerned</td>
                              <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg font-semibold">10</td>
                              <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Position of lock plunger whether fully plunged or otherwise with dimensions</td>
                              <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg font-semibold">11</td>
                              <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10">Position of lock bar with reference to rail table, with dimensions of clearances etc.</td>
                              <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg font-semibold">12</td>
                              <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10">Damage of lock bar with reference to rail table, with dimensions of clearance etc.</td>
                              <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-l-lg font-semibold">13</td>
                              <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10">Damage to stretcher bar/lockbar/detector rods etc., with sketches of components affected</td>
                              <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-l-lg font-semibold">14</td>
                              <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10">Any other abnormal features of the components or assembly of points noticed with details of abnormal clearances (If any)</td>
                              <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg font-semibold">15</td>
                              <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">Any other abnormal features of the signal fittings and components noticed with details</td>
                              <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-l-lg font-semibold">16</td>
                              <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10">Remarks</td>
                              <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-r-lg">
                                <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">_________</span> 
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Final Signature Section */}
                  <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-emerald-400/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">✍</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-emerald-300 mb-3">To be jointly signed by (All the pages to be jointly signed)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">SSE/SE (S&T)</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">TI/SS (Traffic)</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">SSE/SE (P.Way)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 507.1 */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">507.1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3">Signal and Telecommunication (Block)</h4>
                  </div>
                </div>
              </div>

              {/* Block Details Table */}
              <div className="overflow-x-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                  <table className="w-full text-sm text-gray-200 border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-l-lg">S. No.</th>
                        <th className="text-left p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">Particulars</th>
                        <th className="text-left p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-r-lg">Details / Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-l-lg font-semibold">1</td>
                        <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">Name of the Station / Cabin</td>
                        <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg font-semibold">2</td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Block Section</td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg font-semibold">3</td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10">System of Train Working</td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg font-semibold">4</td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10">Position of block instrument / commutator / slide at both stations</td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-l-lg font-semibold">5</td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10">Whether TSR taken into custody or not</td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span> 
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-l-lg font-semibold">6</td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10">Recorded entries in TSR of previous three movements in either direction</td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg font-semibold">7</td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">Any discrepancies or overwriting noticed in TSR</td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-l-lg font-semibold">8</td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10">Whether last stop signal interlocked with block. If so, any defect noticed.</td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-l-lg font-semibold">9</td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10">Whether ESR or MSR provided & whether it was working satisfactorily</td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="w-full text-sm text-gray-200 border-collapse mt-8">
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-l-lg font-semibold w-1/3">
                          Person who manipulated block instruments
                        </td>
                        <td className="p-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-r-lg">
                          B.S. Man, S.M., or any unauthorised person
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-l-lg font-semibold">
                          On single line, token number and train number involved, number of tokens in use on the section
                        </td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-lime-500/10 rounded-l-lg font-semibold">
                          Any other irregularity of block working noticed
                        </td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-lime-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-l-lg font-semibold">
                          62B
                        </td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-l-lg font-semibold">
                          Remarks
                        </td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-r-lg">
                          <span className="text-gray-400 bg-white/10 px-3 py-1 rounded-lg border border-white/20">____________</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4 text-gray-200">
                    <div className="font-semibold mb-2">To be jointly signed by:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>SSE/SE (S&T)</li>
                      <li>TI/SS (Traffic)</li>
                      <li>SSE/SE (P.way)</li>
                    </ul>
                    <div className="mt-4 text-sm text-gray-300">
                      <span className="font-semibold">Note:</span> The measurements indicated in the above pro-forma are only indicative and not exhaustive. In some accidents where the cause is not readily apparent, more measurements may have to be taken from loco/coach/wagon/track/S&T gear, etc. The decision of Sr.DSO and DRM will be final in this matter.
                      <br />
                      <span className="font-semibold">Suggestion:</span> The minimum and maximum parameter of each item pertaining to Pway, Loco, and Rolling stock may be added in above forms for ready reference for non-technical staff.
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

export default AMChapterPage61