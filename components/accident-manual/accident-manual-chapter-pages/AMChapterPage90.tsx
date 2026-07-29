"use client"
import React from 'react'

const AMChapterPage90 = () => {
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
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER VII</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Schedule of Powers, Media Management and Complimentary Passes
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 704 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">704</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </span>
                      Media Management at Site
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Media Management Overview */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                    <div className="space-y-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-blue-400 text-xl mt-1">📺</span>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                            <h4 className="text-lg font-bold text-green-300 mb-3 text-center">Electronic Media Reporting</h4>
                          </div>
                          
                          <ul className="list-none space-y-3 pl-2 text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-400">📺</span>
                              <span>
                                Electronic media often reports train accidents before details reach Divisional or Central Control, due to rapid information dissemination.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400">👤</span>
                              <span>
                                Only the DRM or the senior-most official at the disaster/accident site should act as the Chief Spokesperson.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-400">📝</span>
                              <span>
                                First-hand information provided to the media must be as accurate as possible for effective communication.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 704.1 */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                    <div className="space-y-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-blue-400 text-xl mt-1">👨‍💼</span>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-3 text-center">704.1 Duties of CPRO / PRO</h4>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <span className="text-orange-400 text-lg mt-1">a)</span>
                              <p className="text-gray-200 leading-relaxed">
                                On getting the information, proceed to the Emergency Control Room.
                              </p>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <span className="text-orange-400 text-lg mt-1">b)</span>
                              <p className="text-gray-200 leading-relaxed">
                                Collect the details on real time basis from the Emergency Control.
                              </p>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <span className="text-orange-400 text-lg mt-1">c)</span>
                              <p className="text-gray-200 leading-relaxed">
                                Only the reliable details as confirmed by the site Manager is to be given to the Print / Visual Media.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2 mt-6 animate-fade-in">
                    <h3 className="lg:text-2xl text-xl font-bold text-indigo-200 mb-4 flex flex-col text-center items-center gap-2">
                      <span className="text-pink-400 text-2xl">📰</span>
                      704.2 Objectives of Media Management Plan
                    </h3>
                    <ul className="list-none space-y-2 pl-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400">📢</span>
                        <span>To provide the public with factual and timely information.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400">🌟</span>
                        <span>To foster a positive public opinion.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400">🤝</span>
                        <span>To build and maintain a healthy relationship with the media.</span>
                      </li>
                    </ul>
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-pink-300 mb-2 flex items-center gap-2">
                        Key Actions & Protocols
                      </h4>
                      <ul className="list-none space-y-3 pl-2">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">📞</span>
                          <span>
                            Any accident must be reported by Central Control to the Public Relations Branch, ensuring that the CPRO/PRO is informed of all available details.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">🏢</span>
                          <span>
                            Depending on the seriousness of the situation, the CPRO or their representative will immediately position themselves in the Central Control.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">🚗</span>
                          <span>
                            The CPRO or their representative shall proceed to the accident site, when required, to take charge of public relations work at the location.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">🔎</span>
                          <span>
                            Meanwhile, the PR Official at Central Control will gather further details from the site for media updates.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">📝</span>
                          <span>
                            Upon arrival at the accident site, the Public Relations Officer will collect factual information from the Officer-in-Charge and relay it to both the media at the site and the PR representative in Control, establishing a real-time communication channel to keep the media informed.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">✔️</span>
                          <span>
                            The Railway&apos;s goal is to ensure that only factually correct and confirmed information is shared with the media. For this, the following measures are enforced:
                          </span>
                        </li>
                        <ul className="list-none space-y-2 pl-1">
                          <li className="flex items-start gap-2">
                            <span className="text-pink-400">🚫</span>
                            <span>
                              Unconfirmed news or information without a proper source must not be relayed to the media.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-pink-400">🗣️</span>
                            <span>
                              Only the PR representative stationed at Control or at the site is authorized to relay information to the media.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-pink-400">❌</span>
                            <span>
                              No Railway personnel shall express criticism, opinions, or personal views about the accident at any time.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-pink-400">👔</span>
                            <span>
                              Only the General Manager, CPRO, DRM, or an Officer authorized by the General Manager is permitted to interact with or give interviews to the media.
                            </span>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-indigo-200 mb-4 flex flex-col text-center items-center gap-2">
                      <span className="text-blue-400 text-2xl">📰</span>
                      Information to be Provided to the Media
                    </h4>
                    <ul className="list-none space-y-3 pl-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">📍</span>
                        <span>
                          <strong>Nature of the accident:</strong> Place, exact location, time, Train No., and names of the deceased and injured passengers.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">🚑</span>
                        <span>
                          <strong>Immediate relief:</strong> Steps taken by Railways to provide medical attention, food, travel facilities for stranded passengers, and communication facilities such as cell phones and STD phones.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">🏥</span>
                        <span>
                          <strong>Hospitals:</strong> Names of hospitals where the injured are being treated.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">🤝</span>
                        <span>
                          <strong>Support for families:</strong> Facilities offered to the kith and kin of the victims, including payment of ex-gratia.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">🛎️</span>
                        <span>
                          <strong>Assistance booths:</strong> Details of passenger assistance booths, telephone/fax numbers, and email addresses.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">🔀</span>
                        <span>
                          <strong>Train arrangements:</strong> Diversion of trains, road bridging, re-routing, etc.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">⏳</span>
                        <span>
                          <strong>Restoration:</strong> Probable time and details of restoration.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400">⚖️</span>
                        <span>
                          <strong>Cause of accident:</strong> Prima-facie cause will be shared with the press only with the approval of DRM/GM.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-xl border border-pink-400/20 p-4 mt-6 animate-fade-in">
                  <h4 className="lg:text-2xl text-xl font-bold text-pink-300 mb-4 flex flex-col text-center items-center gap-2">
                    <span className="text-pink-400 text-2xl">📰</span>
                    704.3 Media Needs at Accident Site
                  </h4>
                  <ul className="list-none space-y-4 pl-2 text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400">🎤</span>
                      <span>
                        <strong>Media Coordination:</strong> The Public Relations (PR) and Commercial Departments are responsible for managing all media requirements at the accident site.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400">🚗</span>
                      <span>
                        <strong>Convenience & Conveyance:</strong> PR personnel, with support from Commercial representatives, must ensure the convenience and transportation of media personnel. Media should be guided to hospitals where the injured are being treated.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">📋</span>
                      <span>
                        <strong>Passenger Information:</strong> The Commercial Department must promptly provide the PR Official (at Control/onsite) with the list of passengers on the affected train, as well as the names of the deceased and injured, using the fastest possible means.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-xl border border-pink-400/20 p-4 mt-6 animate-fade-in">
                <h4 className="lg:text-2xl text-xl font-bold text-pink-300 mb-4 flex flex-col text-center items-center gap-2">
                  <span className="text-pink-400 text-2xl">🗞️</span>
                  704.4 Advice to the Press
                </h4>
                <ul className="list-none space-y-6 pl-2 text-gray-200">
                  <li className="flex items-start gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <span className="text-indigo-400 text-xl mt-1">🗂️</span>
                        <span>
                          <strong>Divisional Press Notification:</strong> Divisional Railway Managers of Vijayawada, Guntakal, Guntur, and Nanded Divisions, in consultation with the Chief Public Relations Officer (CPRO), must send brief details of serious accidents to the nearest news agencies and local newspapers.
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-pink-400 text-xl mt-1">📢</span>
                        <span>
                          <strong>CPRO Notification:</strong> For Secunderabad and Hyderabad divisions, the CPRO alone will issue press notifications about serious accidents.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <span className="font-bold text-indigo-300 flex items-center gap-2">
                        Essential Information to the Press:
                      </span>
                      <ul className="list-none space-y-2 pl-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">⏰</span>
                          <span>Time, date, and location of the accident</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400">🚄</span>
                          <span>Nature of the incident (e.g., train collision, derailment, passenger or goods train)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">🧑‍🤝‍🧑</span>
                          <span>Names and addresses of the injured and deceased, with seriousness of injuries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">🚦</span>
                          <span>Whether traffic is interrupted or maintained by transshipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">🔄</span>
                          <span>Nature of transshipment (if arranged)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">⏳</span>
                          <span>Expected time for restoration of normal services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400">⚠️</span>
                          <span>Trivial injuries should not be reported to the press, but must be communicated to the Railway Board</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl mt-1">📑</span>
                    <span>
                      <strong>Detailed Information:</strong> As soon as possible, obtain and provide full particulars of the number and names of passengers and railway employees killed, seriously injured, and slightly injured (minor injuries) to the same news agencies.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <span className="font-bold text-indigo-300 flex items-center gap-2">
                        Message Communication:
                      </span>
                      <ul className="list-none space-y-2 pl-2 mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🆔</span>
                          <span>
                            All messages prefixed with <span className="font-mono bg-white/10 px-1 rounded">XXR</span> must be sent immediately to the Railway Board, C.C.R.S, C.R.S., and General Manager (T).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">⚡</span>
                          <span>
                            The first message should be dispatched quickly so that the press receives the news first from the Railway.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400">➕</span>
                          <span>
                            A second message with injury details should follow as soon as possible.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">📞</span>
                          <span>
                            The Railway Board must be kept informed of restoration progress through frequent messages or telephone updates.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">📰</span>
                          <span>
                            While daily updates to news agencies are not required, significant progress towards restoration should be communicated as needed.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400">📋</span>
                          <span>
                            The Divisional Safety Officer must collect daily updates from the Engineer-in-charge.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
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

export default AMChapterPage90