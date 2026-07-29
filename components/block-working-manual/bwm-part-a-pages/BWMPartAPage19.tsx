"use client"
import React from 'react'

const BWMPartAPage19 = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Exchange of Private Numbers between Station Master and Cabin/Cabins for reception of trains</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Sequence of action from reception line nomination to signal control release
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-gray-400/20">
                <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">3.6</span>
                    </div>
                  </div>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
The sequence of action to be followed from the time reception line is nominated till Station Master releases his control on the Home/Routing signal and exchange of Private Numbers is explained below:
                  </p>
                </div>
              </div>

              {/* Duty Station Master Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">a</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      Duty Station Master
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-blue-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            As soon as &apos;Line Clear&apos; has been granted for a train by the Station Master or CASM (if the block instruments are situated in the cabins), the Station Master shall decide the line on which the train is to be received and satisfy himself that the reception line including the adequate distance is clear and free from obstruction.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-indigo-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            He will then advise the CASM/ Cabinman on telephone to both the cabins simultaneously the train number, description, probable time of arrival, whether the train is stopping or running through and the line nominated for its reception.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-purple-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            The CASM / Cabin man in both the cabins shall acknowledge by repeating these particulars.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CASM/Cabinman Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">b</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-indigo-400 to-purple-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      CASM/ Cabinman at the facing end
                    </h3>
                    <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-indigo-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            The CASM / Cabinman, on receipt of the above information from the Station Master, shall set all relevant points at his end correctly for reception of the train on the nominated line and lock all the relevant facing points.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-purple-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            He will then satisfy himself that the nominated reception line is clear and free from obstruction.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-pink-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            He will then give a categorical assurance to the CASM/Cabinman in the Cabin at the trailing end after ensuring that:
                          </span>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/20 ml-6">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-yellow-400 text-sm">a)</span>
                              <span className="text-gray-200 lg:text-base text-sm">
                                The nominated reception line is clear and free from obstruction, clearly indicating the number of that line.
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-orange-400 text-sm">b)</span>
                              <span className="text-gray-200 lg:text-base text-sm">
                                All the relevant points at his end have been correctly set for the reception of the train on the said line.
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-yellow-400 text-sm">c)</span>
                              <span className="text-gray-200 lg:text-base text-sm">
                                All the facing points have been locked; and
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-orange-400 text-sm">d)</span>
                              <span className="text-gray-200 lg:text-base text-sm">
                                All level crossing gates are closed and locked against the road traffic and ask him to release his slot on the Home/Routing signal referring to the nominated reception line.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">c</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-pink-400 to-yellow-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </span>
                      CASM / Cabinman at the Trailing End
                    </h3>
                    <div className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-pink-400 text-lg">🌟</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            Upon receiving categorical assurance from the Cabinman at the facing end, the CASM/Cabinman at the trailing end must correctly set all relevant points for the reception of the train on the nominated line, ensuring the entire reception line and adequate distance are clear and free from obstruction.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-yellow-400 text-lg">🚧</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            Confirm that all level crossing gates are closed and securely locked against road traffic.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-pink-400 text-lg">🔑</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            Communicate a Private Number to the CASM/Cabinman at the facing end and then release the slot on the relevant Home/Routing signal.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">d</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-pink-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </span>
                      CASM / Cabinman at the Facing End
                    </h3>
                    <div className="bg-gradient-to-r from-yellow-400/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/20">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-yellow-400 text-lg">🔄</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            Upon receiving the Private Number from the trailing end, promptly communicate the same Private Number to the Station Master on duty, confirming that all preparations at both end cabins are complete for the train&apos;s reception.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">e</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-pink-400 to-yellow-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
                        </svg>
                      </span>
                      Duty Station Master
                    </h3>
                    <div className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-pink-400 text-lg">🗝️</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            On receiving the Private Number from the facing end, if all is ready for the train&apos;s reception, issue a Private Number to the CASM/Cabinman at the facing end and release control on the relevant Home/Routing signal.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">f</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-yellow-400 to-pink-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      CASM / Cabinman at the Facing End
                    </h3>
                    <div className="bg-gradient-to-r from-yellow-400/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/20">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-yellow-400 text-lg">🚦</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            After confirming that the slot indicator displays the OFF indication, take ‘OFF’ the reception signals to allow the train to enter.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-400/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">g</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-green-400 to-blue-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      No Private Number Exchange Required with Track Circuiting
                    </h3>
                    <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-green-400/20">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-green-400 text-lg">✨</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            The exchange of Private Numbers is intended to prevent the possibility of a signal being taken ‘OFF’ for an obstructed line. However, when track circuiting or axle counters are provided and functioning, the exchange of Private Numbers is not required.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">h</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-purple-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Exchange in Central Cabin Stations
                    </h3>
                    <div className="bg-gradient-to-r from-purple-400/10 to-indigo-400/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-purple-400 text-lg">🏢</span>
                          <span className="text-gray-200 lg:text-lg text-base">
                            At stations equipped with central cabins, the exchange of Private Numbers between the cabin and the Station Master on duty must be carried out as described above, before the Station Master releases control of the signal.
                          </span>
                        </li>
                      </ul>
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
              Key Responsibilities
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">Telephone communication</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚦</span>
                  <span className="text-gray-200 lg:text-lg text-base">Line clearance verification</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔒</span>
                  <span className="text-gray-200 lg:text-lg text-base">Point locking</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Acknowledgment protocol</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Level crossing gates</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">Signal slot release</span>
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

export default BWMPartAPage19