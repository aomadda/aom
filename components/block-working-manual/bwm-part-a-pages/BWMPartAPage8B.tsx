"use client"
import React from 'react'

const BWMPartAPage8B = () => {
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
              CHAPTER II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Train Signal Register</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Documentation and record-keeping for block instrument operations
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">2.6</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Train Signal Register (G.R.14.07) [TSR (T.14)]
                    </h3>

                    <div className="space-y-6">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-blue-400 text-xl mt-1">📋</span>
                          <div>
                            <h4 className="text-xl font-semibold text-blue-300 mb-2">Register Maintenance</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              A Train Signal Register shall be kept by the Station Master or under his order in conjunction with each Block Instrument.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Section b */}
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-indigo-400 text-xl mt-1">✍️</span>
                          <div>
                            <h4 className="text-xl font-semibold text-indigo-300 mb-2">Signal Documentation</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              All signals received or sent on the electrical block instrument and the timings of receipt and despatch shall be entered therein immediately after acknowledgement, by the person operating the Block Instrument.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-purple-400 text-xl mt-1">⏰</span>
                          <div>
                            <h4 className="text-xl font-semibold text-purple-300 mb-2">Timing Records</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The timings entered in the register shall be the actual timings except that any fraction of a minute shall be counted as one.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section d */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-pink-400 text-xl mt-1">👤</span>
                          <div>
                            <h4 className="text-xl font-semibold text-pink-300 mb-2">Record Responsibility</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The person who keeps the register for the time being shall be responsible for all entries made therein and for correct filling in each column thereof.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section e */}
                      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-red-400 text-xl mt-1">🔄</span>
                          <div>
                            <h4 className="text-xl font-semibold text-red-300 mb-2">Handover Procedures</h4>
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              The time of relief and handing over the Block Instruments shall be recorded by the outgoing Station Master in the Train Signal Register along with the last number registered in the counters and signed by both the Station Masters (Relieved and Reliever).
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Note Section */}
                      <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/20">
                        <div className="flex items-start gap-3 mb-4">
                          <div>
                          <span className="text-orange-400 text-xl mt-1 text-center flex items-center justify-center">📝</span>
                            <h4 className="text-xl font-semibold text-orange-300 mb-3 text-center flex items-center justify-center">Testing and Safety Procedures</h4>
                            <div className="space-y-4">
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm mb-2">
                                  <span className="text-blue-300 font-semibold">i)</span> The Station Master taking over charge shall test the block instrument and make a record of the result then and there in the Train Signal Register.
                                </p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm mb-2">
                                  <span className="text-green-300 font-semibold">ii)</span>
                                  <span className="block ml-4">
                                    <span className="text-green-400 font-medium">a)</span> On single line token sections, wherever despatch signals are not provided and the &apos;TGT&apos; position of the Block Instrument is interlocked with &apos;Proceed&apos; aspect of Main Home signal in the Multiple Aspect signalling Territory, the Main Home signal lever should be pulled without turning the &apos;operating handle&apos; to &apos;TGT&apos; position and if the signal can be taken off to &apos;proceed&apos; , the block working shall be suspended, advising all concerned accordingly.
                                  </span>
                                  <span className="block ml-4 mt-2">
                                    <span className="text-green-400 font-medium">b)</span> In the Lower Quadrant signalling territory, wherever departure signals are not provided and the &apos;TGT&apos; position of the Block Instrument is interlocked with &apos;OFF&apos; aspect of Warner signal, the Warner signal lever should be pulled without turning the &apos;operating handle&apos; to TGT position and if the signal can be taken off, the block working shall be suspended, advising all concerned accordingly.
                                  </span>
                                </p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm mb-2">
                                  <span className="text-purple-300 font-semibold">iii)</span> In the case of Neale&apos;s Token Instruments, the Station Master shall try to turn the &apos;operating handle&apos; to the &apos;TGT&apos; and &apos;TCF&apos; positions without the co-operation of the Station Master at the other end. If the handle cannot be turned to these positions the instrument shall be considered to be in order.
                                </p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm mb-2">
                                  <span className="text-pink-300 font-semibold">iv)</span> In the case of block instruments provided with Galvanometers, the Station Master shall also satisfy himself that the deflection in the Galvanometer is correct.
                                </p>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-gray-200 lg:text-base text-sm mb-2">
                                  <span className="text-red-300 font-semibold">v)</span> If the test conditions detailed above are not satisfied, the block instrument should be considered as defective and the token working suspended. If a token can be extracted during such test without the co-operation of the Station Master at the other end, the token working shall be suspended and all concerned shall be advised. The token so extracted, shall be secured safely and handed over to the Signal Inspector or any Authorized Official.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
<div className="space-y-4 mt-6">
  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-xl border border-yellow-400/20">
    <h4 className="text-lg font-semibold text-yellow-300 mb-2 flex flex-col items-center justify-center gap-2">
      <span className="text-yellow-400 text-xl">🖋️</span>
      Train Signal Register Entry Guidelines
    </h4>
    <div className="flex flex-col gap-3 text-gray-200 lg:text-base text-sm">
      <div className="flex items-start gap-2">
        <span className="text-yellow-300 text-lg mt-1">🖊️</span>
        <span><span className="font-semibold text-yellow-200">All entries in the Train Signal Register must be written using ink.</span></span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-yellow-300 text-lg mt-1">🚫</span>
        <span>
          <span className="font-semibold text-yellow-200">No erasures or overwriting are allowed.</span>
          If a mistake is made, cross it out with a single line (so the original is still readable), write the correct entry above, and initial it.
        </span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-red-400 text-lg mt-1">🟥</span>
        <span>
          <span className="font-semibold text-yellow-200">At the end of each day,</span>
          &nbsp;draw a line in <span className="text-red-400 font-semibold">red ink</span> below the last entry of the date.
        </span>
      </div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-4 rounded-xl border border-red-400/20">
    <h4 className="text-lg font-semibold text-red-300 mb-2 flex flex-col items-center justify-center gap-2">
      <span className="text-red-400 text-xl">📝</span>
      Special Red Ink Entries
    </h4>
    <p className="text-gray-200 mb-2">Entries must be made in <span className="text-red-400 font-semibold">red ink</span> in the following situations:</p>
    <ol className="relative ml-6 space-y-4 text-gray-200 lg:text-base text-sm">
      {[
        "When a material train enters the block section.",
        "When a motor trolley, lorry, or trolley enters the block section on 'Line Clear'.",
        "When signals are being tested and signal exchange occurs.",
        "When there is any interruption in block working.",
        "During trolley movements (as per SR 15.26.2.1) and lorry movements (as per SR 15.27.6.1).",
        "When a notification of line obstruction (Line Block) is received from the Engineering Branch.",
        "For any other special occurrence related to block working.",
        "When a running line at a station is blocked by stabled vehicles or trains.",
      ].map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 group">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 via-pink-400 to-yellow-400 shadow-lg flex items-center justify-center font-bold text-lg text-white border-2 border-red-300 group-hover:scale-110 group-hover:from-red-400 group-hover:to-yellow-300 transition-all">
            {idx + 1}
          </span>
          <span className="font-medium text-yellow-100">{item}</span>
        </li>
      ))}
    </ol>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Register Management Essentials
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-gray-200 lg:text-lg text-base">Maintained by Station Master</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">✍️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Immediate signal recording</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⏰</span>
                  <span className="text-gray-200 lg:text-lg text-base">Accurate timing records</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👤</span>
                  <span className="text-gray-200 lg:text-lg text-base">Personal responsibility</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 lg:text-lg text-base">Proper handover procedures</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🧪</span>
                  <span className="text-gray-200 lg:text-lg text-base">Instrument testing required</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🖋️</span>
                  <span className="text-gray-200 lg:text-lg text-base">All entries in ink</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">✏️</span>
                  <span className="text-gray-200 lg:text-lg text-base">No erasures allowed</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Daily closure marking</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔴</span>
                  <span className="text-gray-200 lg:text-lg text-base">Special entries in red ink</span>
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

export default BWMPartAPage8B