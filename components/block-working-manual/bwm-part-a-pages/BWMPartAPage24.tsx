"use client"
import React from 'react'

const BWMPartAPage24 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4"> 3.16 Delivery of token (&apos;Authority to Proceed&apos;) to the Driver</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              
              {/* Point a */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">a</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        Token is the &apos;Authority to proceed&apos; for the Driver when the token Block Instruments are in working order. The Station Master shall deliver the token personally to the Driver and if it is not possible for any reason, it may be delivered to the Driver through a competent railway servant. The outgoing token shall be delivered to the Driver only after he surrenders the incoming token.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point b */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">b</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-indigo-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                        Delivery of token to the Driver of a stopping train:
                      </p>
                      <div className="space-y-3 ml-1">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-indigo-400 font-bold">i)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            In case of trains booked to stop at stations for more than five minutes, the outgoing token shall be delivered to the Driver just before the train is due to start at the place where the engine usually comes to a stand.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-purple-400 font-bold">ii)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            In case of trains booked to stop for five minutes or less, the outgoing token shall be delivered opposite to the Station Master&apos;s office.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-indigo-400 font-bold">iii)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            The outgoing token shall not be delivered to the Driver of a train which has to perform shunting at the station, until the shunting is completed and the train is ready to start.
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-purple-400 font-bold">iv)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            When more than one train is to be despatched, the Station Master shall not send more than one token at a time through the same person for delivering to the Drivers. The Station Master shall, in such circumstances, specially ensure that the correct token is delivered to the Driver of the correct train.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point c */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">c</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                        <span className="inline-flex items-center gap-2">
                          
                          <span>Delivery of token to the Driver of a non-stopping train:</span>
                        </span>
                        <br />
                        The token shall be delivered to the Driver opposite to the Station Master’s office or at the nominated pick-up points. During night, a lighted torch must be exhibited to enable the Driver to pick up the token.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point d */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">d</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-pink-500/10 to-yellow-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                        <span className="inline-flex items-center gap-2">
                          
                          <span>Delivery of ‘Authority to proceed’ when two engines are on train:</span>
                        </span>
                        <br />
                        If two engines are coupled together, or if one engine is in front and another at the rear of the train, the ‘Authority to proceed’ must be given to the Driver of the leading engine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point e */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-yellow-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">e</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                        <span className="inline-flex items-center gap-2">
                          
                          <span>Driver to examine ‘Authority to proceed’ <span className="text-xs text-gray-400">(G.R. 14.09)</span>:</span>
                        </span>
                      </p>
                      <ul className="list-none ml-1 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-green-400 font-bold">i)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            The Driver must ensure that the ‘Authority to proceed’ given to him is the correct authority as per the system of working, refers to the block section he is about to enter, and, if the authority is in writing, that it is complete in all respects and duly signed in full with ink.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-green-400 font-bold">ii)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            If the conditions mentioned above are not complied with, the Driver shall not take his train past or start from the station until the mistake or the omission is rectified.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-green-400 font-bold">iii)</span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            A damaged token shall not be accepted as ‘Authority to proceed’. A damaged token is a token which cannot be inserted into or extracted from the Block Instrument or which has the class or the number or the station code initials defaced beyond recognition.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point f */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">f</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2 flex items-center gap-2">
                        
                        <span>Train in Block Section Without ‘Authority to Proceed’ <span className="text-xs text-gray-400">(G.R. 6.06)</span>:</span>
                      </p>
                      <ul className="list-none ml-1 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-orange-400 font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" /></svg>
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            If a Driver enters a block section without a valid ‘Authority to proceed’, after following the steps in GR 6.06 (1) and (2), a report explaining the circumstances must be sent to the nearest Station Master through the Brakesman or Assistant Driver.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-orange-400 font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2M5 10V7a7 7 0 0114 0v3" /></svg>
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            If the report is sent to the station in rear, the Station Master must issue a Paper Line Clear Ticket to the Driver to proceed to the next station, suspending block working. All actions must be recorded in the Train Signal Register.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-orange-400 font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" /></svg>
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            If the report is sent to the station in advance, the Station Master must inform the control and the other end of the block section, and send a caution order for the train to approach his station, suspending block working. Proper entries must be made in the Train Signal Register.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-orange-400 font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            Upon arrival of the train, the Station Master must notify the other end of the block section with a message supported by a Private Number, confirming the complete arrival of the train.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-orange-400 font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            Before proceeding with a Paper Line Clear Ticket or Caution Order, the Driver must collect the detonators placed ahead for train protection.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-orange-400 font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm">
                            If the token or Line Clear Ticket is lost or misplaced during the run, or if the token cannot be extracted from the Train Key Lock or Token Exchanger Box in a siding, the Driver may proceed to the next block station and report the occurrence to the Station Master.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point g */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">g</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-green-400/20">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                        <span>
                          <span className="font-semibold">Token Territory Indication Boards:</span> To remind Drivers that they are in possession of a token or written authority when moving from a block section worked by tokenless or double line block instruments to a section worked by token block instruments, ‘Token Territory’ indication boards are provided on the line leading into such block sections.
                        </span>
                      </p>
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

export default BWMPartAPage24