"use client"
import React from 'react'

const BWMPartBPage20: React.FC = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">TRAIN SIGNAL REGISTER [TSR (T.14)]</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-6">2.6. Train Signal Register [TSR (T.14)] (G.R.14.07)</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">a</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            A Train Signal Register shall be kept by the Station Master or under his order in conjunction with each Block Instrument.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">b</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            All signals received or sent on the electrical Block Instruments and the timings of receipt and despatch shall be entered therein immediately after acknowledgement, by the person operating the Block Instrument.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">c</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            The timings entered in the register shall be the actual timings except that any fraction of a minute shall be counted as one.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">d</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            The person who keeps the register for the time being shall be responsible for all entries made therein and for correct filling in each column thereof.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">e</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-4">The time of relief and handing over the Block Instruments shall be recorded by the outgoing Station Master in the Train Signal Register along with the last number registered in the counters and signed by both the Station Masters (Relieved and Reliever).</h4>
                            <div className="space-y-3 ml-2">
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">i</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  The Station Master taking over charge shall test the Block Instrument and make a record of the result then and there in the Train Signal Register.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">ii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  In the case of Diodo make handle type Token less block instruments; the Station Master shall try to turn the block handle to the TGT and TCF position without the co-operation of the Station Master at the other end. If the handle cannot be so turned to the two positions the instrument should be considered to be in order.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">iii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  In the case of Kyosan / Podanur make push button Token less block instruments; the Station Master shall, when taking over charge of the block instrument, test the instrument by attempting to take off the Last Stop Signal without obtaining &apos;Line Clear&apos; to see that the Last Stop Signal is not taken &apos;OFF&apos;. If Last Stop Signal cannot be taken off, the instrument should be considered to be in order. Where block instruments are housed in the station, the Station Master should ask the Cabin man / Lever man in the cabin, to take off Last Stop Signal and advise.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">iv</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  In the case of instruments provided with Galvanometers, the Station Master shall also satisfy himself that the deflection in the Galvanometer is correct.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">v</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  If the test conditions detailed above are not satisfied, the instrument shall be considered to be defective and block working suspended.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">f</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            All the entries in the Train Signal Register shall be made in ink and signed.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">g</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            No erasures or overwriting shall be made in the Train Signal Register. If any entry is found to be incorect, a line shall be drawn through it, so that it may be read at any time and the correct entry made above it and initialled.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">h</span>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                            A line shall be drawn, in red ink, below the entry for the last train of the date.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-base">i</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-4">Entries shall be made in red ink in the following circumstances:</h4>
                            <div className="space-y-3 ml-2">
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">i</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Material trains entering the block section
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">ii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Motor trollies, lorries and trollies entering the block section on line clear.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">iii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Testing signals are exchanged.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">iv</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Block working is interrupted.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">v</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Trollies movements, as mentioned in SR 15.26.2.1 and lorries movements, as mentioned in SR 15.27.6.1
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">vi</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Notice of obstruction of up/down lines (Line block) received from the engineering branch.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">vii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Any other special occurrence in connection with block working.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                    <span className="text-white font-medium text-xs">viii</span>
                                  </div>
                                </div>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                                  Whenever a running line at a station is blocked by stabled vehicle/ train.
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

export default BWMPartBPage20