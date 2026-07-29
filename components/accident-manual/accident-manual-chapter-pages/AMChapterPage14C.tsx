"use client"
import React from 'react'

const AMChapterPage14C = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">STATION MASTER / STATION MANAGER</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive duties and responsibilities during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Station Master Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">303</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      Station Master / Station Manager Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            [The Station Masters on either side of the block section if the accident occurred in the mid-section or the station master of the station where the accident has occurred.]
                          </span>
                        </p>
                        
                        <div className="mt-6 space-y-6">
                          {/* Duty 1 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">1.</span>
                              <div>
                                <span className="text-white">On a double line, immediately stop the trains proceeding into the affected block section in the opposite direction. If any train has already entered such block section, inform the crew and guard to immediately stop their train and tell them to proceed cautiously so as to stop short of any obstruction.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 2 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">2.</span>
                              <div>
                                <span className="text-white">Report the accident to the Section Controller and to the Station Master at the other end of the block section.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 3 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">3.</span>
                              <div>
                                <span className="text-white">Control to be advised regarding –</span>
                                <div className="ml-1 mt-2 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">a.</span>
                                    <span className="text-white">Time, and nature of accident.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">b.</span>
                                    <span className="text-white">Brief description of accident.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">c.</span>
                                    <span className="text-white">Medical Relief van required or not</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">d.</span>
                                    <span className="text-white">The need for ART with or without crane</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">e.</span>
                                    <span className="text-white">Adjacent lines clear or not.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">f.</span>
                                    <span className="text-white">Number of coaches/wagons derailed, canted, capsized, etc.,</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">g.</span>
                                    <span className="text-white">Availability of road approach to the accident site,</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty 4 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">4.</span>
                              <div>
                                <span className="text-white">Station Masters of Stations where sirens are provided shall sound the sirens and arrange to move the Medical Relief Van / ART special trains as per the control orders.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 5 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">5.</span>
                              <div>
                                <span className="text-white">Advise the section Traffic Inspector and the officials of other departments by quickest possible means.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 6 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">6.</span>
                              <div>
                                <span className="text-white">Call for off-duty Station Masters and pointsmen for assistance in operations.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 7 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">7.</span>
                              <div>
                                <span className="text-white">In case the accident occurs within station limits, the position of point knobs, signal knobs, route knobs, various readings of counters shall be kept intact till these are jointly recorded by the supervisors of Traffic, S&T and Engineering departments.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 8 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">8.</span>
                              <div>
                                <span className="text-white">Keep the lines free at the station for receiving the un-affected coaches/wagons, MRV, ART, etc.,</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 9 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">9.</span>
                              <div>
                                <span className="text-white">He will arrange for the following assistance:</span>
                                <div className="ml-1 mt-2 space-y-4">
                                  {/* Medical Assistance */}
                                  <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                      <span className="mt-1 text-red-400 text-lg">a)</span>
                                      <span className="text-red-200 font-semibold">Medical Assistance:</span>
                                    </div>
                                    <div className="ml-1 space-y-2">
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-red-400 text-lg">(i)</span>
                                        <span className="text-white">Assistance must be called for Ambulance service from the local Hospitals, Railway Hospitals and Health Units, Civil and Army Hospitals, St. John&apos;s Ambulance brigade, qualified first-aiders, fire fighting personnel, and other qualified medical personnel available on trains and at stations.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-red-400 text-lg">(ii)</span>
                                        <span className="text-white">Injured passengers to be transported to the nearest hospitals, by the most expeditious means.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-red-400 text-lg">(iii)</span>
                                        <span className="text-white">Arrange for the quick transport of A.R.M.E. Scale II equipment to the site of the accident.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-red-400 text-lg">(iv)</span>
                                        <span className="text-white">Arrange adequate number of First Aid boxes and stretchers.</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Refreshments */}
                                  <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                      <span className="mt-1 text-orange-400 text-lg">b)</span>
                                      <span className="text-orange-200 font-semibold">Refreshments to Passengers:</span>
                                    </div>
                                    <div className="ml-1 space-y-2">
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-orange-400 text-lg">(i)</span>
                                        <span className="text-white">Advise DCM / ACM for making available food and refreshments to stranded passengers.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-orange-400 text-lg">(ii)</span>
                                        <span className="text-white">Arrange for drinking water & beverages from VRR / NVRR and / or locally, free of cost to the affected passengers.</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Transport Assistance */}
                                  <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                      <span className="mt-1 text-yellow-400 text-lg">c)</span>
                                      <span className="text-yellow-200 font-semibold">Transport Assistance:</span>
                                    </div>
                                    <div className="ml-1 space-y-2">
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-yellow-400 text-lg">(i)</span>
                                        <span className="text-white">Arrangements shall be made to transport the injured on top priority by road or by a special train to the hospitals.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-yellow-400 text-lg">(ii)</span>
                                        <span className="text-white">Stranded passengers to be transported from the accident spot by arranging transhipment either by train or by hiring Road vehicles.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-yellow-400 text-lg">(iii)</span>
                                        <span className="text-white">Arrange for refund of fares as per the extant rules.</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Security Assistance */}
                                  <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                      <span className="mt-1 text-blue-400 text-lg">d)</span>
                                      <span className="text-blue-200 font-semibold">Security Assistance:</span>
                                    </div>
                                    <div className="ml-1">
                                      <span className="text-white">Station Master shall advise officials of Government Railway Police, State Police and the Railway Protection force to provide security to the private and railway property at the site of the accident. The Station master will also lodge an FIR with the jurisdiction GRP Inspector in case sabotage is suspected for the accident.</span>
                                    </div>
                                  </div>

                                  {/* Communication Assistance */}
                                  <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                      <span className="mt-1 text-purple-400 text-lg">e)</span>
                                      <span className="text-purple-200 font-semibold">Communication Assistance:</span>
                                    </div>
                                    <div className="ml-1 space-y-2">
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-purple-400 text-lg">(i)</span>
                                        <span className="text-white">Information counters to be opened at important stations and at the accident site.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-purple-400 text-lg">(ii)</span>
                                        <span className="text-white">Information regarding the injured and dead shall be ascertained and given to the relatives whenever asked for.</span>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <span className="mt-1 text-purple-400 text-lg">(iii)</span>
                                        <span className="text-white">Free Phone with STD facilities shall be made available to the affected passengers to convey their condition to their relatives from the site and stations.</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty 10 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">10.</span>
                              <div>
                                <span className="text-white">Controlling SM must proceed to the site by the quickest means taking with him sufficient porters and other staff who can assist in the relief operations.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 11 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">11.</span>
                              <div>
                                <span className="text-white">SM/SMR shall ensure securing of records in cabin and Station, such as Private number book, train signal register, line admission book, engine log book and speed charts from the loco and other relevant records. He shall also ensure sealing of slides, levers, knobs and relay rooms.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 12 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">12.</span>
                              <div>
                                <span className="text-white">Take all necessary action as prescribed by the rules and instructions in force.</span>
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

export default AMChapterPage14C