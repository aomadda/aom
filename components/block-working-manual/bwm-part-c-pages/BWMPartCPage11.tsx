"use client"
import React from 'react'

const BWMPartCPage11: React.FC = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - II</h2>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Train Signal Register
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 2.7 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">2.7. Train Signal Register : (T.15)</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">a</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              A <span className="text-green-300 font-semibold">Train Signal Register</span> shall be kept by the <span className="text-blue-300 font-semibold">Station Master</span> or under his order in conjunction with each <span className="text-green-300 font-semibold">block instrument</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">b</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              All signals received or sent on the <span className="text-green-300 font-semibold">Electrical block instruments</span> and the timings of receipt and despatch shall be entered therein immediately after acknowledgement, by the person operating the <span className="text-green-300 font-semibold">Block Instrument</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">c</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              The timings entered in the register shall be the actual timings except that any fraction of a minute shall be counted as one.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section d */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">d</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              The person who keeps the register for the time being shall be responsible for all entries made therein and for correct filling in each column thereof.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section e */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">e</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              The time of relief and handing over the <span className="text-green-300 font-semibold">block instruments</span> shall be recorded by the outgoing <span className="text-blue-300 font-semibold">Station Master</span> in the <span className="text-green-300 font-semibold">Train Signal Register</span> along with the last number registered in the counters and signed by both the <span className="text-blue-300 font-semibold">Station Masters</span>.(Relieved and Reliever)
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Note Section */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-blue-200 font-bold lg:text-xl text-lg mb-3">Note:</h4>
                        <div className="space-y-3 ml-4">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">i)</span> The <span className="text-blue-300 font-semibold">Station Master</span> taking over charge shall test the <span className="text-green-300 font-semibold">block instrument</span> and make a record of the result then and there in the <span className="text-green-300 font-semibold">Train Signal Register</span>.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">ii)</span> In the case of instruments provided with <span className="text-green-300 font-semibold">Galvanometers</span>, the <span className="text-blue-300 font-semibold">Station Master</span> shall also satisfy himself that the deflection in the <span className="text-green-300 font-semibold">Galvanometer</span> is correct.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="text-yellow-300 font-semibold">iii)</span> The <span className="text-blue-300 font-semibold">Station Master</span>, after taking over charge of the <span className="text-green-300 font-semibold">block instrument</span>, shall test the instrument by attempting to take off the <span className="text-blue-300 font-semibold">Last Stop Signal</span> without obtaining <span className="text-green-300 font-semibold">&apos;Line Clear&apos;</span>. If <span className="text-blue-300 font-semibold">Last Stop Signal</span> cannot be taken <span className="text-red-400 font-semibold">&apos;off&apos;</span> , the <span className="text-green-300 font-semibold">block instrument</span> shall be considered to be in order.
                          </p>
                        </div>
                      </div>

                      {/* Section f */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">f</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              All the entries in the <span className="text-green-300 font-semibold">Train Signal Register</span> shall be made in <span className="text-green-300 font-semibold">ink</span> .
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section g */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">g</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              No erasures or overwriting shall be made in the <span className="text-green-300 font-semibold">Train Signal Register</span>. If any entry is found to be incorrect, a line shall be drawn through it, so that it may be read at any time and the correct entry made above it and initialled.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section h */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-lg lg:p-4 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">h</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              A line shall be drawn, in <span className="text-red-400 font-semibold">red ink</span>, below the entry for the last train of the date.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section i */}
                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-xl lg:p-5 p-3 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">i</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-red-200 font-bold lg:text-xl text-lg">
                              Entries in red ink –
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2">
                          <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-6">
                            Entries shall be made in <span className="text-red-400 font-semibold">red ink</span> when -
                          </p>
                          <div className="space-y-3">
                            {/* i) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">i)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  The section is blocked forward or blocked back.
                                </p>
                              </div>
                            </div>

                            {/* ii) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">ii)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Material trains enter the <span className="text-green-300 font-semibold">block section</span>.
                                </p>
                              </div>
                            </div>

                            {/* iii) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">iii)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Motor trollies, lorries and trollies entering the <span className="text-green-300 font-semibold">block section</span> on line clear.
                                </p>
                              </div>
                            </div>

                            {/* iv) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">iv)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Testing signals are exchanged.
                                </p>
                              </div>
                            </div>

                            {/* v) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">v)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  <span className="text-green-300 font-semibold">Block working</span> is interrupted.
                                </p>
                              </div>
                            </div>

                            {/* vi) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">vi)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Trolley movements, as mentioned in <span className="text-yellow-300 font-semibold">SR 15.26.2.1</span> and lorry movements, as mentioned in <span className="text-yellow-300 font-semibold">SR 15.27.6.1</span>.
                                </p>
                              </div>
                            </div>

                            {/* vii) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">vii)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Notice of obstruction of up/down lines (Line block) received from the Engineering branch.
                                </p>
                              </div>
                            </div>

                            {/* viii) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">viii)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Any other special occurrence in connection with <span className="text-green-300 font-semibold">block working</span>.
                                </p>
                              </div>
                            </div>

                            {/* ix) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-red-300/20 hover:border-red-300/40 transition-all duration-300">
                              <div className="flex gap-2 items-start">
                                <span className="text-red-300 font-semibold text-lg flex-shrink-0">ix)</span>
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Whenever a running line at a station is blocked by stabled vehicle / trains.
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

export default BWMPartCPage11