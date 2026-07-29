"use client"
import React from 'react'

const AMChapterPage22 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHIEF CONTROLLER / DEPUTY CHIEF CONTROLLER</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of chief controller and deputy chief controller during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Chief Controller Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">314</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      </span>
                      Chief Controller / Deputy Chief Controller Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Ordering of Medical Relief Vans Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">314.1 Ordering of Medical Relief Vans and Relief Trains:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">a)</span>
                                <span className="text-white">In case of an accident involving a passenger carrying train or an accident involving a road vehicle at a manned/unmanned level crossing, invariably order the Medical Relief Train, irrespective of the information received or other wise about casualties. Subsequently, if found not required this may be cancelled with the permission of the Divisional Railway Manager. Order a second MRV also if needed to work from the other side site.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">b)</span>
                                <span className="text-white">Immediately order Accident Relief Train if required.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">c)</span>
                                <span className="text-white">Record the timings of ordering of the Accident Relief Train and MRV, the actual departure from the concerned stations and arrival at the spot.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">d)</span>
                                <span className="text-white">Ensure a clear path for rushing the Medical Van, Accident Relief Train etc.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">e)</span>
                                <span className="text-white">Arrange to despatch cranes with the Accident Relief Train , if required.</span>
                              </div>
                            </div>
                          </div>

                          {/* Collection and Recording Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">314.2 Collection and Recording of Information:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">a)</span>
                                <span className="text-white">Open a register in which all items are to be logged indicating time against each.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">b)</span>
                                <span className="text-white">Collect and record the following information in the register :</span>
                              </div>
                              <div className="ml-1 space-y-2">
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">i)</span>
                                  <span className="text-white">Time of accident and time information received about accident.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">ii)</span>
                                  <span className="text-white">Kilometerage, adjacent line/lines affected or not in case of double/ multiple lines, number of coaches derailed, capsized, canting etc.,</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">iii)</span>
                                  <span className="text-white">Train / Trains involved whether Mail / Express / Passenger / Goods / Mixed / Pilot etc.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">iv)</span>
                                  <span className="text-white">Type of stock involved, ie, whether tank wagons, BOX, Box N.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">v)</span>
                                  <span className="text-white">Load of the train involved.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">vi)</span>
                                  <span className="text-white">Nature of accident namely collision, derailment, averted collision or Level crossing (manned / Unmanned) fire etc.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">vii)</span>
                                  <span className="text-white">Casualties / Injuries (grievous, simple, etc)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">viii)</span>
                                  <span className="text-white">Progress in regard to the restoration work and other movements for operational requirements with timing.</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Movement of Trains Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">314.3 Movement of Trains:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">a)</span>
                                <span className="text-white">Stop movement of trains in to the affected section on double line and in both the directions on single line.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">b)</span>
                                <span className="text-white">Check from site / station if adjacent line / lines fouled or otherwise.</span>
                              </div>
                            </div>
                          </div>

                          {/* Communication Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">314.4 Communication:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">a)</span>
                                <span className="text-white">Inform DRM/ADRM/Sr.DOM/Sr.DSO/DOM/AOM</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">b)</span>
                                <span className="text-white">Inform all the other controls in the control office.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">c)</span>
                                <span className="text-white">Inform TI/SE(P.Way)/Stations on either side.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">d)</span>
                                <span className="text-white">Inform Central control.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">e)</span>
                                <span className="text-white">Call off duty Dy.Chief controllers for manning phones and for gathering and discriminating information.</span>
                              </div>
                            </div>
                          </div>

                          {/* Medical Relief Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">314.5 Medical Relief:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">a)</span>
                                <span className="text-white">Advise immediately Civil, Military and Private Hospitals and Medical Officers in the area and arrange for doctors, medical equipments and ambulances from nearby stations.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">b)</span>
                                <span className="text-white">Make arrangements for the transport of Railway doctors to the site immediately, if necessary, by engaging road vehicles as required.</span>
                              </div>
                            </div>
                          </div>

                          {/* Regulation and Diversion Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">314.6 Regulation and Diversion of Trains:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">a)</span>
                                <span className="text-white">Arrange to regulate all passenger carrying trains which are nearer to the accident site at convenient stations, preferably junction stations where catering facilities, drinking water etc, are available.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">b)</span>
                                <span className="text-white">Arrange to draw out the unaffected portion of the train involved in the accident without undue delay to a nearby convenient station where catering / drinking water facilities are available in consultation with DRM or Sr. DOM.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">c)</span>
                                <span className="text-white">Arrange diversion of long distance trains, if found necessary keeping in view the time required for restoration of the line / lines in consultation with Headquarters.</span>
                              </div>
                            </div>
                          </div>

                          {/* Civil Authorities Section */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">314.7</span>
                              <span className="text-white">Advise civil authorities, Superintendent of Police GRP with in whose jurisdiction the accident has occurred.</span>
                            </div>
                          </div>

                          {/* RPF Section */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">314.8</span>
                              <span className="text-white">Advise RPF for arranging protection of Railway and public property.</span>
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
              Chief Controller Duties Summary
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚑</span>
                <span className="text-gray-200 lg:text-lg text-base">Order Medical Relief Vans and Relief Trains immediately</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Record timings and maintain detailed accident register</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚧</span>
                <span className="text-gray-200 lg:text-lg text-base">Stop train movement in affected sections</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📞</span>
                <span className="text-gray-200 lg:text-lg text-base">Inform all authorities and control offices</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🏥</span>
                <span className="text-gray-200 lg:text-lg text-base">Arrange medical relief and transport doctors</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚂</span>
                <span className="text-gray-200 lg:text-lg text-base">Regulate and divert trains to convenient stations</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👮</span>
                <span className="text-gray-200 lg:text-lg text-base">Advise civil authorities and RPF for protection</span>
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

export default AMChapterPage22