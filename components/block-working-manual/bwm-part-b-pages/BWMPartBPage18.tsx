"use client"
import React from 'react'

const BWMPartBPage18: React.FC = () => {
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
              CHAPTER - II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">BELL CODE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-4">2.3. Bell Code (G.R. 14.05)</h3>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                      For the signalling of trains, the prescribed code of bell signals as detailed below, shall be used and a copy thereof shall be exhibited at each block station near the place of operation of the block working equipment –
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-white/20">
                        <thead>
                          <tr className="bg-white/10">
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Ref. No.</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Indication</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Code</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">How signalled</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">How acknowledged</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">1</td>
                            <td className="border border-white/20 p-3">Call attention or<br />Attend telephone</td>
                            <td className="border border-white/20 p-3 font-mono">0</td>
                            <td className="border border-white/20 p-3">One stroke or beat</td>
                            <td className="border border-white/20 p-3">One stroke or beat</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">2</td>
                            <td className="border border-white/20 p-3">Is Line Clear or Line Clear enquiry</td>
                            <td className="border border-white/20 p-3 font-mono">00</td>
                            <td className="border border-white/20 p-3">Two</td>
                            <td className="border border-white/20 p-3">Two</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">3 *</td>
                            <td className="border border-white/20 p-3">Train</td>
                            <td className="border border-white/20 p-3 font-mono">000</td>
                            <td className="border border-white/20 p-3">Three</td>
                            <td className="border border-white/20 p-3">Three</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">4*</td>
                            <td className="border border-white/20 p-3">
                              (a)Train out of<br />
                              block section<br />
                              (b) Obstruction removed
                            </td>
                            <td className="border border-white/20 p-3 font-mono">0000</td>
                            <td className="border border-white/20 p-3">Four</td>
                            <td className="border border-white/20 p-3">Four</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">5</td>
                            <td className="border border-white/20 p-3">
                              (a)Cancel<br />
                              (b)Signal given in error
                            </td>
                            <td className="border border-white/20 p-3 font-mono">00000</td>
                            <td className="border border-white/20 p-3">Five</td>
                            <td className="border border-white/20 p-3">Five</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">6</td>
                            <td className="border border-white/20 p-3">
                              (a) Obstruction danger signal (general)<br />
                              (b)Stop and examine train<br />
                              (c)Train passed without tail lamp or tail board<br />
                              (d)Train divided<br />
                              (e) Vehicles running away into the block section on single line
                            </td>
                            <td className="border border-white/20 p-3 font-mono">
                              000000<br />
                              000000-0<br />
                              000000-00<br />
                              000000-000<br />
                              000000-0000
                            </td>
                            <td className="border border-white/20 p-3">
                              Six<br />
                              Six pause one<br />
                              Six pause two<br />
                              Six pause three<br />
                              Six pause four
                            </td>
                            <td className="border border-white/20 p-3">
                              Six<br />
                              Six pause one<br />
                              Six pause two<br />
                              Six<br />
                              Six pause four
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">7</td>
                            <td className="border border-white/20 p-3">Testing</td>
                            <td className="border border-white/20 p-3 font-mono">0000000000000000</td>
                            <td className="border border-white/20 p-3">Sixteen</td>
                            <td className="border border-white/20 p-3">Sixteen</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="mb-4">
                          <span className="font-bold text-blue-300 text-xl">Note:</span>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-sm">1</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            &apos;0&apos; indicates a stroke or a beat and &apos; &apos; indicates a pause.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-sm">2</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            Each signal shall be given slowly and distinctly.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-sm">3</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            * Item (3) and (4) are not required to be given wherever Axle counter proving Block Instruments or continuous track circuiting is in use.
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

export default BWMPartBPage18