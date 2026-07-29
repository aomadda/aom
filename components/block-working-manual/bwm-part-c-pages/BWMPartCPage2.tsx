"use client"
import React from 'react'

const BWMPartCPage2: React.FC = () => {
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
            <h2 className="lg:text-3xl text-xl font-bold text-purple-300 mb-4">CHAPTER - I</h2>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Description of the Block Instrument
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 1.3 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">1.3. Description of the Block instrument:</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 rounded-xl lg:p-5 p-3 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">a</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-cyan-200 font-bold lg:text-xl text-lg">
                              The &apos;Train Going To dial&apos;:
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                            The indications of this dial refer to trains leaving the station and the dial serves as a visual indicator of the conditions of the <span className="text-green-300 font-semibold">block section</span> in advance. These indications are electrically controlled by the <span className="text-blue-300 font-semibold">Station Master</span> at the <span className="text-green-300 font-semibold">block station</span> immediately in advance and the indications can be altered only by him .The indications of the <span className="text-green-300 font-semibold">&apos; Train going to&apos; dial</span> correspond with those of the <span className="text-green-300 font-semibold">&apos;Train coming from&apos; dial</span> of the corresponding instrument at the station in advance. There are three indications viz;
                          </p>
                          <div className="space-y-3">
                            {/* (i) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-cyan-300/20">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                <span className="text-yellow-300 font-semibold">(i)</span> <span className="text-green-300 font-semibold">&apos;Line closed&apos;</span> indication appears when there is no train in the <span className="text-green-300 font-semibold">block section</span> and permission has not been given for any train to enter it. The needle remains vertical on the white segment of the dial.
                              </p>
                            </div>
                            {/* (ii) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-cyan-300/20">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                <span className="text-yellow-300 font-semibold">(ii)</span> <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> indication appears when permission has been obtained for a train to enter the <span className="text-green-300 font-semibold">block section</span>. The needle remains deflected to the right on the green segment of the dial.
                              </p>
                            </div>
                            {/* (iii) Item */}
                            <div className="bg-white/5 rounded-lg p-3 border border-cyan-300/20">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                <span className="text-yellow-300 font-semibold">(iii)</span> <span className="text-green-300 font-semibold">&apos;Train On Line&apos;</span> indication appears when the <span className="text-green-300 font-semibold">block section</span> is occupied by a train or other obstruction and the needle remains deflected to the left on the red segment of the dial.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/5 rounded-xl lg:p-5 p-3 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">b</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-teal-200 font-bold lg:text-xl text-lg">
                              The &apos; Train Coming From dial&apos;:
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            The indications of this dial refer to trains approaching a station and the dial serves as a visual indicator of the conditions of the <span className="text-green-300 font-semibold">block section</span> in rear. It is worked entirely by the <span className="text-blue-300 font-semibold">Station Master</span> of the station at which the instrument is located. The indications of the <span className="text-green-300 font-semibold">TCF dial</span> at a station correspond with those of the <span className="text-green-300 font-semibold">TGT dial</span> of the corresponding instrument at the station in the rear. These indications are the same as those described against the <span className="text-green-300 font-semibold">TGT dial</span>.
                          </p>
                        </div>
                      </div>

                      {/* Section c */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 rounded-xl lg:p-5 p-3 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">c</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-emerald-200 font-bold lg:text-xl text-lg">
                              The Operating Handle:
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2 space-y-3">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            The <span className="text-green-300 font-semibold">&apos;Operating Handle&apos;</span> has three positions viz., <span className="text-green-300 font-semibold">&apos;Train On Line&apos;</span>, <span className="text-green-300 font-semibold">&apos;Line closed&apos;</span> and <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span>. The normal or middle position is <span className="text-green-300 font-semibold">&apos;Line closed&apos;</span> with the arrow painted on the operating handle in vertical position. When turned to the right, it assumes the <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> position and when turned to left, it assumes the <span className="text-green-300 font-semibold">&apos;Train On Line&apos;</span> position.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            When the operating handle at <span className="text-green-300 font-semibold">&apos;Y&apos;</span> is turned to the <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> position, the <span className="text-green-300 font-semibold">TCF dial</span> at <span className="text-green-300 font-semibold">&apos;Y&apos;</span> and <span className="text-green-300 font-semibold">TGT dial</span> at <span className="text-green-300 font-semibold">&apos;X&apos;</span> will indicate <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span>. Simultaneously the lock on the <span className="text-blue-300 font-semibold">Last Stop Signal</span> at <span className="text-green-300 font-semibold">&apos;X&apos;</span> will be released.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            When the operating handle is turned to the left or <span className="text-green-300 font-semibold">&apos;Train On Line&apos;</span> position, the <span className="text-green-300 font-semibold">TCF dial</span> at <span className="text-green-300 font-semibold">&apos;Y&apos;</span> and the <span className="text-green-300 font-semibold">TGT dial</span> at <span className="text-green-300 font-semibold">&apos;X&apos;</span> will indicate <span className="text-green-300 font-semibold">&apos;Train On Line&apos;</span>.
                          </p>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            The operating handle is free to be turned from <span className="text-green-300 font-semibold">&apos;Line closed&apos;</span> to either <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> or <span className="text-green-300 font-semibold">Train On Line&apos;</span> and also from <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> to <span className="text-green-300 font-semibold">&apos;Line closed&apos;</span> position. However, when turned to the <span className="text-green-300 font-semibold">&apos;Train On Line&apos;</span> from <span className="text-green-300 font-semibold">&apos;Line Clear&apos;</span> position, the handle gets locked in this position until the train has arrived inside the <span className="text-blue-300 font-semibold">Last Vehicle Track Circuit</span> and <span className="text-blue-300 font-semibold">Home signal</span> has been put back to <span className="text-red-400 font-semibold">&apos;ON&apos;</span>.
                          </p>
                        </div>
                      </div>

                      {/* Section d */}
                      <div className="bg-gradient-to-r from-sky-500/10 to-sky-600/5 rounded-xl lg:p-5 p-3 border border-sky-400/30 hover:border-sky-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">d</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-sky-200 font-bold lg:text-xl text-lg">
                              Bell plunger:
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            The <span className="text-green-300 font-semibold">bell plunger</span> is used to give bell signals to the station at the other end of the <span className="text-green-300 font-semibold">block section</span>. Each time the plunger is pressed the bell or gong of the corresponding instrument at the other end of the <span className="text-green-300 font-semibold">block section</span> will give a single beat. The <span className="text-green-300 font-semibold">bell plunger</span> in its normal position locks the <span className="text-green-300 font-semibold">&apos;Operating Handle&apos;</span> in any of its three positions. The plunger should, therefore, be pressed before the handle is turned.
                          </p>
                        </div>
                      </div>

                      {/* Section e */}
                      <div className="bg-gradient-to-r from-violet-500/10 to-violet-600/5 rounded-xl lg:p-5 p-3 border border-violet-400/30 hover:border-violet-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">e</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-violet-200 font-bold lg:text-xl text-lg">
                              Bell:
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            The <span className="text-green-300 font-semibold">bell</span> is intended to receive bell signals from <span className="text-green-300 font-semibold">&apos;Y&apos;</span>, the station at the other end of the <span className="text-green-300 font-semibold">block section</span>. Each time the <span className="text-green-300 font-semibold">bell plunger</span> is pressed at the other station, the <span className="text-green-300 font-semibold">bell</span> will respond once.
                          </p>
                        </div>
                      </div>

                      {/* Section f */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-xl lg:p-5 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-4 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-xl">f</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-pink-200 font-bold lg:text-xl text-lg">
                              Telephone:
                            </h4>
                          </div>
                        </div>
                        <div className="lg:ml-16 ml-2">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            A <span className="text-green-300 font-semibold">telephone</span> is provided along with each instrument for communication with the station at the other end of the <span className="text-green-300 font-semibold">block section</span>.
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

export default BWMPartCPage2