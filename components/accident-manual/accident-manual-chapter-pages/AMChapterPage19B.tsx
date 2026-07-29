"use client"
import React from 'react'

const AMChapterPage19B = () => {
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
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">SIGNAL AND TELECOMMUNICATION STAFF</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of signal and telecommunication staff during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Signal and Telecommunication Staff Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">310</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </span>
                      Signal and Telecommunication Staff Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Duty 1 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">1.</span>
                              <div>
                                <span className="text-white">Proceed to site by quickest means available.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 2 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">2.</span>
                              <div>
                                <span className="text-white">Ensure portable telephone / emergency telephone set is provided at site.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 3 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">3.</span>
                              <div>
                                <span className="text-white">Wherever feasible, wireless sets to be installed at accident site for communication with Divisional Headquarters and if possible with Railway Headquarters. Walkie- Talkie sets / Megaphones / loud hailers to be deployed as necessary.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 4 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">4.</span>
                              <div>
                                <span className="text-white">DOT/BSNL telephone with STD facility to be arranged at the temporary enquiry offices opened at site and nearest location wherever possible.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 5 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">5.</span>
                              <div>
                                <span className="text-white">Render such assistance as required by Guard in attending to the accident victims and stranded passengers.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 6 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">6.</span>
                              <div>
                                <span className="text-white">Seal Block instruments, Relay rooms and note positions of levers, knob, slides indications etc., as the case may.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 7 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">7.</span>
                              <div>
                                <span className="text-white">Arrange for early restoration of signalling and telecom equipment as soon as such restoration is permitted.</span>
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

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Signal and Telecommunication Staff Duties Summary
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚀</span>
                <span className="text-gray-200 lg:text-lg text-base">Proceed to site by quickest means available</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📞</span>
                <span className="text-gray-200 lg:text-lg text-base">Ensure portable/emergency telephone set at site</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📻</span>
                <span className="text-gray-200 lg:text-lg text-base">Install wireless sets for communication with headquarters</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">☎️</span>
                <span className="text-gray-200 lg:text-lg text-base">Arrange DOT/BSNL telephone with STD facility</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🤝</span>
                <span className="text-gray-200 lg:text-lg text-base">Assist Guard in attending to accident victims</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔒</span>
                <span className="text-gray-200 lg:text-lg text-base">Seal Block instruments and note lever positions</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔧</span>
                <span className="text-gray-200 lg:text-lg text-base">Arrange early restoration of signalling equipment</span>
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

export default AMChapterPage19B