"use client"
import React from 'react'

const BWMPartAPage15 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Line Clear Cancellation & Block Section Closing
            </h1>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section A */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">3.3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-6">
                      {/* Rule Section */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                        <div className="flex items-start gap-3">
                          <div>
                          <span className="text-blue-400 text-xl mt-1 text-center flex items-center justify-center gap-3">🚂</span>
                            <h3 className="text-lg lg:text-xl font-semibold text-blue-300 mb-4">
                              3.3. (A) To cancel &apos;Line Clear&apos; before train enters into Block Section (G.R. 14.22).
                            </h3>
                            <div className="text-gray-200 mb-4">
                              <span className="font-semibold">Sending Station:</span> &apos;X&apos; &nbsp; | &nbsp;
                              <span className="font-semibold">Receiving Station:</span> &apos;Y&apos;
                            </div>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-blue-400/20 rounded-lg bg-gradient-to-r from-blue-900/40 to-indigo-900/40 text-gray-100">
                            <thead>
                              <tr>
                                <th className="px-3 py-2 border-b border-blue-400/20 text-left">Step</th>
                                <th className="px-3 py-2 border-b border-blue-400/20 text-left">Sending Station &apos;X&apos;</th>
                                <th className="px-3 py-2 border-b border-blue-400/20 text-left">Receiving Station &apos;Y&apos;</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-blue-400/10">
                              <tr>
                                <td className="px-3 py-2">1</td>
                                <td className="px-3 py-2">Give &apos;Call attention&apos; signal.</td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">2</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">Acknowledge. Attend telephone.</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">3</td>
                                <td className="px-3 py-2">On receipt of acknowledgement, attend telephone; ask consent by explaining the circumstances supported by a Private Number.</td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">4</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">Give consent and repeat the PN.</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">5</td>
                                <td className="px-3 py-2">
                                  <div className="mb-1">a) For Neale&apos;s Ball token instruments :-</div>
                                  <div className="mb-1">Insert token into token receiver and turn token receiver handle .</div>
                                  <div>b) For Neale&apos;s Tablet token instruments: -</div>
                                  <div>Draw out the token slide, keep the tablet token in the space provided and push back the token slide.</div>
                                </td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">6</td>
                                <td className="px-3 py-2">Send &apos;Cancel last signal&apos;. Prolong the last beat.</td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">7</td>
                                <td className="px-3 py-2">Turn Operating handle to &apos;Line closed&apos; position.</td>
                                <td className="px-3 py-2">Acknowledge &apos;Cancel last signal&apos;. Prolong the last beat.</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">8</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">Turn the Operating handle to &apos;Line closed&apos; position.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section B */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  
                  <div className="flex-1">
                    <div className="space-y-6">
                      {/* Rule Section */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                        <div className="flex items-start gap-3">
                          <div>
                          <span className="text-purple-400 text-xl mt-1 text-center flex items-center justify-center gap-3">🚂</span>
                            <h3 className="text-lg lg:text-xl font-semibold text-purple-300 mb-4">
                              3.3. (B) Closing of Block Section after pushing back of the train:
                            </h3>
                            <div className="text-gray-200 mb-4">
                              <span className="font-semibold">Sending station:</span> &apos;X&apos; &nbsp; | &nbsp;
                              <span className="font-semibold">Receiving station:</span> &apos;Y&apos;
                            </div>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-purple-400/20 rounded-lg bg-gradient-to-r from-purple-900/40 to-indigo-900/40 text-gray-100">
                            <thead>
                              <tr>
                                <th className="px-3 py-2 border-b border-purple-400/20 text-left">Step</th>
                                <th className="px-3 py-2 border-b border-purple-400/20 text-left">Sending station &apos;X&apos;</th>
                                <th className="px-3 py-2 border-b border-purple-400/20 text-left">Receiving station &apos;Y&apos;</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-purple-400/10">
                              <tr>
                                <td className="px-3 py-2">1</td>
                                <td className="px-3 py-2">Operating handle is in &apos;TGT&apos; position.</td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">2</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">Operating handle is in &apos;TCF&apos; position.</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">3</td>
                                <td className="px-3 py-2">Give &apos;Call attention&apos;; On acknowledgement, attend telephone and advise about the train pushing back.</td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">4</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">Attend telephone and note the advice. Put back all relevant signals to &apos;ON&apos; position.</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">5</td>
                                <td className="px-3 py-2">
                                  <div className="mb-1">i) On complete arrival of train, ensure the conditions for closing the block section are complied as per G.R.14.10.</div>
                                  <div>ii) Give &apos;Call attention&apos;. On acknowledgement, give clearance time supported by Private Number.</div>
                                </td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">6</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">
                                  <div className="mb-1">i) Acknowledge &apos;Call attention&apos; and attend telephone.</div>
                                  <div>ii) Repeat PN and note arrival time.</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">7</td>
                                <td className="px-3 py-2">Give &apos;Train out of block section&apos; signal and prolong last beat.</td>
                                <td className="px-3 py-2">-</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">8</td>
                                <td className="px-3 py-2">Turn Operating handle to &apos;Line closed&apos; position.</td>
                                <td className="px-3 py-2">Prolong the last beat.</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">9</td>
                                <td className="px-3 py-2">-</td>
                                <td className="px-3 py-2">Turn the Operating handle to &apos;Line closed&apos; position.</td>
                              </tr>
                            </tbody>
                          </table>
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

export default BWMPartAPage15