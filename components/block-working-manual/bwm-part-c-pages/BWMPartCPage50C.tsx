"use client"
import React from 'react'

const BWMPartCPage50C: React.FC = () => {
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
          <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - VIII</h2>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 8.3 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">8.3. Failure of block instrument:</h3>
                    
                    <div className="space-y-4">
                      {/* Section I */}
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg lg:p-4 p-3 border border-indigo-400/30">
                        <div className="flex gap-3 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-lg">I</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed font-semibold">
                              The block instrument shall be considered to have failed and block working suspended in the following circumstances:
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 ml-1">
                          {/* Point a */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">a</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  When the indications on the TGT dial at <span className="text-green-300 font-semibold">&apos;X&apos;</span> do not correspond with the indications of the TCF dial at <span className="text-green-300 font-semibold">&apos;Y&apos;</span>.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point b */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">b</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-3">
                                  Whenever there is reason to believe that there is contact between the block and any other circuit.
                                </p>
                                
                                {/* Note for b */}
                                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/5 rounded-lg p-3 border border-blue-400/30">
                                  <div className="flex gap-2 items-start">
                                    <div className="flex-shrink-0">
                                      <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-gray-100 lg:text-base text-sm leading-relaxed flex-1 pt-0.5">
                                      <span className="text-yellow-300 font-bold">Note:</span>If an intermittent contact exists between the block and the circuit an irregular movement of the indicator or irregular bell beats or both will be observed. If permanent contact exists there may be a permanent wrong indication or bell beats or both. A contact between block wires might cause signals given on the instrument to be repeated on the neighbouring instrument or change of indications in the instruments.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Point c */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">c</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-3">
                                  When a train arrives at a station without <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span>.
                                </p>
                                
                                {/* Note for c */}
                                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/5 rounded-lg p-3 border border-blue-400/30">
                                  <div className="flex gap-2 items-start">
                                    <div className="flex-shrink-0">
                                      <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-gray-100 lg:text-base text-sm leading-relaxed flex-1 pt-0.5">
                                      <span className="text-yellow-300 font-bold">Note:</span> In this case the irregularity shall be reported as an accident unless the <span className="text-blue-300 font-semibold">Driver</span> is in possession of an authority as per S.R.6.02
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Point d */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">d</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  If the block instrument or its battery counter is found without seals or locks.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point e */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">e</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Whenever single line working is introduced.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point f */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">f</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  When the dial indicator glass is broken.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point g */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">g</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-3">
                                  If the Last Stop Signal can be taken <span className="text-yellow-300 font-semibold">&apos;OFF&apos;</span> with no <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> indication on the TGT dial.
                                </p>
                                
                                {/* Note for g */}
                                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/5 rounded-lg p-3 border border-blue-400/30">
                                  <div className="flex gap-2 items-start">
                                    <div className="flex-shrink-0">
                                      <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-gray-100 lg:text-base text-sm leading-relaxed flex-1 pt-0.5">
                                      <span className="text-yellow-300 font-bold">Note:</span> This test shall be made when <span className="text-blue-300 font-semibold">Station Master</span> takes charge of the block instrument and an entry made in the Train Signal Register.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Point h */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">h</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  If the operating handle can be restored from TOL to <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> position before complete arrival of the train.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point i */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">i</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Where the operating handle cannot be turned to TOL or <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> or to <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> in the process of granting or cancelling <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span>.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point j */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">j</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  Where signals on the bell are not received distinctly or fail altogether.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point k */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">k</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  When a train which has entered the block section on <span className="text-yellow-300 font-semibold">&apos;Line clear&apos;</span> is pushed back for any reason into the station.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Point l */}
                          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-bold text-base">l</span>
                                </div>
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                                  If it is known that the instrument is defective in any way not specified above.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section II */}
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg lg:p-4 p-3 border border-indigo-400/30">
                        <div className="flex gap-3 items-start mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-lg">II</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed font-semibold">
                              Block instruments failure record:
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-100 lg:text-lg text-base leading-relaxed mb-3 ml-1">
A record of the failures of block instruments/signals and other gear connected with working of signals shall be maintained in the S&T failure register at the station.
                        </p>
                        
                        {/* Note for II */}
                        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-600/5 rounded-lg p-3 border border-blue-400/30 ml-1">
                          <div className="flex gap-2 items-start">
                            <div className="flex-shrink-0">
                              <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-gray-100 lg:text-base text-sm leading-relaxed flex-1 pt-0.5">
                              <span className="text-yellow-300 font-bold">Note :</span> Block instrument failure either at station <span className="text-green-300 font-semibold">&apos;X&apos;</span> or station<span className="text-green-300 font-semibold">&apos;Y&apos;</span> shall be recorded by both <span className="text-blue-300 font-semibold">Station Masters</span> of <span className="text-green-300 font-semibold">X&apos;</span> and <span className="text-green-300 font-semibold">&apos;Y&apos;</span> in their S&T failure registers.
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

export default BWMPartCPage50C