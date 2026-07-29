"use client"
import React from 'react'

const AMChapterPage20B = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">SECURITY STAFF</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of security staff during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Security Staff Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">312</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                      Security Staff Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* First Response Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">312.1 First Response:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">•</span>
                                <div>
                                  <span className="text-white">First information about any calamity involving trains or Railway premises will normally be received by the nearest RPF post / Outpost. The person receiving such information should muster maximum available manpower within the shortest possible time and dispatch them to the scene of accident by the quickest means. After dispatching the available force immediately, the Post / Out Post in- charge should requisite additional manpower. He should also simultaneously pass on the information to the senior supervisors, officers and the control rooms.</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Reinforcement Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">312.2 Reinforcement:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">•</span>
                                <div>
                                  <span className="text-white">Efforts will be made to get the reinforcement from the neighbouring posts / outposts, Reserve Line, Divisional Headquarters or Zonal Reserve. In case any RPSF battalion or Company is located in the vicinity, men can be requisitioned from there for dealing with such emergent situation till additional force is available from other sources.</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Equipment Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">312.3 Equipment:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">•</span>
                                <div>
                                  <span className="text-white">While sending reinforcement, it should be ensured that the necessary equipment required for rescue, recovery and protection of the scene of incident are provided. Such equipment should include:</span>
                                </div>
                              </div>
                              <div className="ml-6 space-y-2">
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">i)</span>
                                  <span className="text-white">Torches and other lighting arrangements, if it is night time.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">ii)</span>
                                  <span className="text-white">Nylon ropes and poles for segregating the affected area from unwanted visitors and spectators.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">iii)</span>
                                  <span className="text-white">Loud-hailer for making announcements.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">iv)</span>
                                  <span className="text-white">Stretchers and first aid equipments.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">v)</span>
                                  <span className="text-white">Wireless sets for inter communication.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">vi)</span>
                                  <span className="text-white">Cameras for photographing the scene.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">vii)</span>
                                  <span className="text-white">Video recording of rescue and salvage operations and connected administrative arrangements.</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action at Scene Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">312.4 Action at the Scene of Incident:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">•</span>
                                <div>
                                  <span className="text-white">The senior most RPF Officer available at the scene of incident shall take over control and immediately start the following action:</span>
                                </div>
                              </div>
                              <div className="ml-6 space-y-3">
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">1.</span>
                                  <span className="text-white">Separate the area of incident by establishing temporary barriers by use of nylon ropes or any other makeshift device available at the scene. It should be ensured that the on lookers and spectators do not enter the affected area to disturb the scene or hamper the rescue operations.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">2.</span>
                                  <span className="text-white">Baggage of passengers should be isolated and protected and consigned goods should be taken care of, till they are handed over to claimants or taken over by Railway authorities.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">3.</span>
                                  <span className="text-white">RPF personnel should respond to any call for assistance to rescue victims and transport them to the nearest hospital. A record of casualties sent to the hospitals should be maintained.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">4.</span>
                                  <span className="text-white">Hourly position will be sent by the officer at the scene of incident to the Divisional / Zonal Control room giving the latest situation.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">5.</span>
                                  <span className="text-white">A temporary RPF assistance post (shed or tent) with proper Board should be established at a conspicuous location so that people needing help approach the RPF. If the operation continues for a longer period, effort should be made to install a temporary telephone connection through the Railway Telecommunication Department, so that the information is passed on quickly. A log book should be opened and minute to minute progress of action by RPF on the lines indicated above, shall be recorded.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">6.</span>
                                  <span className="text-white">The senior most officer available at the scene of incident will also ensure proper documentation about the number of persons injured or dead, giving their identity and addresses, if available. In case the friends or relatives of the injured / deceased make any enquires they should be properly guided. After the rescue / restoration operation is completed, cassette and photographs of the scene of incident will be retained by the CSC in his office and will be properly catalogued and preserved for future reference.</span>
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

          {/* Key Points Summary */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mt-6 border border-white/20">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Security Staff Duties Summary
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚨</span>
                <span className="text-gray-200 lg:text-lg text-base">First response and immediate dispatch of available manpower</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Arrange reinforcement from neighbouring posts and RPSF</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🛠️</span>
                <span className="text-gray-200 lg:text-lg text-base">Ensure necessary equipment for rescue and protection</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚧</span>
                <span className="text-gray-200 lg:text-lg text-base">Establish barriers and control access to incident area</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💼</span>
                <span className="text-gray-200 lg:text-lg text-base">Protect passenger baggage and consigned goods</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🏥</span>
                <span className="text-gray-200 lg:text-lg text-base">Assist in rescue and transport victims to hospitals</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📞</span>
                <span className="text-gray-200 lg:text-lg text-base">Send hourly updates to control rooms</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Maintain proper documentation and log books</span>
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

export default AMChapterPage20B