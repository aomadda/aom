"use client"
import React from 'react'

const AMChapterPage102 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER IX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              INVESTIGATION AND INQUIRIES
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 905 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">905</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Ordering of Inquiries
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Introduction */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                    <div className="space-y-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-blue-400 text-xl mt-1">📋</span>
                        <div className="space-y-4">
                          <p className="text-gray-200 leading-relaxed">
                            Normally DRM shall order all departmental and inter- departmental inquiries into accidents. The GM or on his behalf, the CSO may order a joint inquiry into serious accidents, as deemed fit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-sections */}
                  <div className="space-y-4">
                    {/* Section a */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-red-400 text-xl mt-1">📢</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-red-400/30">
                              <h4 className="text-lg font-bold text-red-300 mb-3 text-center">a) Joint Inquiry Notice</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed mb-4">
                              Whenever a Joint Inquiry is to be made, the Head of the Railway Administration concerned shall issue notice about the date, time and place at which the Inquiry will conducted to the following Officers, namely––
                            </p>

                            <div className="space-y-3">
                              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-green-400 text-lg font-bold">i.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    the District Magistrate of the district in which the accident occurred or such other officer as the State Government may appoint in this behalf, and the Superintendent of the Railway Police and District Superintendent of Police;
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-blue-400 text-lg font-bold">ii.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    the Commissioner of Railway Safety.
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-purple-400 text-lg font-bold">iii.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    the Head of the Railway Police having jurisdiction at the place where the accident occurred or, if there are no Railway Police, the Officer in-charge of the police station having jurisdiction at such place.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section b */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-orange-400 text-xl mt-1">⏰</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/30">
                              <h4 className="text-lg font-bold text-orange-300 mb-3 text-center">b) Timing of Inquiry</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              The date and time at which the Inquiry will commence shall be fixed so as to give the Officers mentioned, above sufficient time to reach the place where the Inquiry is to be held.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section c */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-pink-400 text-xl mt-1">📰</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/30">
                              <h4 className="text-lg font-bold text-pink-300 mb-3 text-center">c) Press Note for Joint Inquiry</h4>
                            </div>
                            
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-pink-400 text-xl mt-1">🤝</span>
                                <span className="text-gray-200 leading-relaxed">
                                  When a Joint Inquiry is conducted into an accident due to the Commissioner of Railway Safety being unable to hold an inquiry (as per Sub-rule (5) of Rule 228, Statutory Investigation into Railway Accidents Rules 1973),
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-pink-400 text-xl mt-1">📰</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The Head of the concerned Railway Administration must issue a press note regarding the Joint Inquiry.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-pink-400 text-xl mt-1">📢</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The press note should invite the public to provide evidence at the inquiry or send information related to the accident.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-pink-400 text-xl mt-1">🏢</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The address of the Joint Inquiry Committee, where information can be sent, must be clearly specified in the press note.
                                </span>
                              </li>
                            </ul>
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

export default AMChapterPage102