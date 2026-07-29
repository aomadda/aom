"use client"
import React from 'react'

const AMChapterPage23 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">COMMERCIAL CONTROL</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of commercial control during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Commercial Control Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">315</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </span>
                      Commercial Control Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Introduction Section */}
                          <div className="space-y-4">
                            <div className="space-y-3">
                              <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                  <span className="mt-1 text-blue-400 text-xl">🛟</span>
                                  <span className="text-white">
                                    Commercial control plays a crucial role in organizing rescue and restoration during all types of accidents, especially those involving casualties or injuries.
                                  </span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <span className="mt-1 text-indigo-400 text-xl">👤</span>
                                  <span className="text-white">
                                    Usually, commercial control is managed by a single employee in the control office.
                                  </span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-xl">⚠️</span>
                                  <span className="text-white">
                                    In case of an accident, one person cannot handle all the diverse responsibilities of commercial control.
                                  </span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <span className="mt-1 text-green-400 text-xl">👥</span>
                                  <span className="text-white">
                                    Therefore, the first duty of Sr.DCM/DCM is to strengthen commercial control by posting one commercial officer and 3 or 4 commercial inspectors round the clock until restoration is completed.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Important Tasks Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">Important tasks to be handled by commercial control in case of a serious accident are as follows:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">1.</span>
                                <span className="text-white">Inform Sr.DCM, DCM, ACM</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">2.</span>
                                <span className="text-white">Like C&W staff, some commercial staff should be nominated to go along with the MRV, whenever the MRV is ordered. This nomination should be done in the normal course and Sr.DCM need not wait for an accident. Some catering staff should also be included in the nominations, who should load drinking water, tea/coffee, snacks and milk in the MRV for serving the affected passengers at site.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">3.</span>
                                <span className="text-white">Commercial control should alert the commercial inspectors and commercial supervisors on either side of the accident site for proceeding to site either by rail or road. They should take with them sufficient number of off duty commercial staff, porters, catering items, cash, etc.,</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">4.</span>
                                <span className="text-white">Commercial control should also establish contact with the TTEs on the train and instruct them to first rescue the injured passengers and render first aid. The TTEs should also collect and protect the luggage of dead and injured passengers.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">5.</span>
                                <span className="text-white">Commercial control should keep the road maps of the concerned states of A.P, Karnataka, Maharashtra. By using these maps, they should be able to locate the nearest road links available to the accident. This is crucial for moving injured passengers to hospitals as well as to reach the relief materials to the site.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">6.</span>
                                <span className="text-white">With the help of the TTEs and commercial staff who reached site, the details (Name, ticket no, phone no, designation, address, etc.,) of dead and injured passengers have to be collected. Simultaneously, the details of doctors classification of injuries as grievous or simple should be collected. All these details have to be relayed to the originating/destination/important junction stations so that the relatives of the dead/injured passengers can be informed.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">7.</span>
                                <span className="text-white">Arrange for refunds as per rules.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">8.</span>
                                <span className="text-white">Arrange for free passes for the relatives of injured/dead to reach the site/hospitals.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">9.</span>
                                <span className="text-white">Organize for making ex-gratia payments as applicable on the basis of the injury classification given by doctors.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">10.</span>
                                <span className="text-white">Co-ordinate with operating control for the transport of the passengers of the affected trains. Similarly, organize to regulate other passenger carrying trains at stations where catering facilities are available. Alert the catering staff/ catering contractors at those stations well in advance about the regulations.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">11.</span>
                                <span className="text-white">Make arrangements so that drinking water is supplied to the Railway staff working at site. Catering arrangements should be planned well in advance for the Railway staff working at site, so that food reaches site in time.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">12.</span>
                                <span className="text-white">Mobilize logistics like vans, staff, etc., for reaching and distributing food at site.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">13.</span>
                                <span className="text-white">Nominate commercial staff to associate with GRP/RPF for drawing &quot; Panchanamas&quot; of the dead passengers in the hospitals.</span>
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
              Commercial Control Duties Summary
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Strengthen commercial control with officers and inspectors</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📞</span>
                <span className="text-gray-200 lg:text-lg text-base">Inform Sr.DCM, DCM, ACM immediately</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚑</span>
                <span className="text-gray-200 lg:text-lg text-base">Nominate commercial staff to accompany MRV</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚨</span>
                <span className="text-gray-200 lg:text-lg text-base">Alert commercial inspectors and supervisors</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🎫</span>
                <span className="text-gray-200 lg:text-lg text-base">Instruct TTEs to rescue passengers and protect luggage</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🗺️</span>
                <span className="text-gray-200 lg:text-lg text-base">Maintain road maps for emergency access</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Collect passenger details and injury classifications</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">💰</span>
                <span className="text-gray-200 lg:text-lg text-base">Arrange refunds and ex-gratia payments</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🍽️</span>
                <span className="text-gray-200 lg:text-lg text-base">Coordinate catering and food arrangements</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚚</span>
                <span className="text-gray-200 lg:text-lg text-base">Mobilize logistics for food distribution</span>
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

export default AMChapterPage23