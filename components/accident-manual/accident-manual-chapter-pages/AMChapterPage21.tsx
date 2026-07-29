"use client"
import React from 'react'

const AMChapterPage21 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">MEDICAL STAFF</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of medical staff during railway accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Medical Staff Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">313</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </span>
                      Medical Staff Duties
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">
                          {/* Initial Response Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">Initial Response:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">i)</span>
                                <span className="text-white">Note the time of receiving messages.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">ii)</span>
                                <span className="text-white">Inform CMS and other Doctors, and staff.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">iii)</span>
                                <span className="text-white">Alert Blood donors club, Local Hospitals, about arrival of the injured.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">iv)</span>
                                <span className="text-white">At least one doctor shall stay back in Railway Hospital to look after inpatients.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">v)</span>
                                <span className="text-white">The emergency box from Health Unit to be moved to the spot.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">vi)</span>
                                <span className="text-white">Reach the site by road using any available vehicle or hire taxi.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">vii)</span>
                                <span className="text-white">All doctors and staff shall move to MRV and inform Station Manager that Medical team is ready to move.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">viii)</span>
                                <span className="text-white">Inform CMD about movement of MRV.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">ix)</span>
                                <span className="text-white">Check all equipments in MRV.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">x)</span>
                                <span className="text-white">Get operation theatre ready.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xi)</span>
                                <span className="text-white">Suture of wounds, application of Plaster of Paris and minor surgery can be done in MRV operation Theatre.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xii)</span>
                                <span className="text-white">Make out a list of injured with the following details.</span>
                              </div>
                              <div className="ml-1 space-y-2">
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">a)</span>
                                  <span className="text-white">Simple</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <span className="mt-1 text-yellow-400 text-lg">b)</span>
                                  <span className="text-white">Grievous</span>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xiii)</span>
                                <span className="text-white">List out the dead</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xiv)</span>
                                <span className="text-white">Inform the Accident Manager and control.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xv)</span>
                                <span className="text-white">Dressings, splints can be applied at the site or in the First Aid post.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xvi)</span>
                                <span className="text-white">Details of the injured to be recorded.</span>
                              </div>
                              <div className="ml-1 space-y-4">
                                <div className="space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-yellow-400 text-lg">a)</span>
                                    <span className="text-white">Conscious</span>
                                  </div>
                                  <div className="ml-1 space-y-1 text-sm">
                                    <div>Name :</div>
                                    <div>Sex :</div>
                                    <div>Age</div>
                                    <div>Identification marks:</div>
                                    <div>Address :</div>
                                    <div>Ticket No. :</div>
                                    <div>Originating Station :</div>
                                    <div>Destination :</div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-yellow-400 text-lg">b)</span>
                                    <span className="text-white">Unconscious</span>
                                  </div>
                                  <div className="ml-1 space-y-1 text-sm">
                                    <div>Approximate age :</div>
                                    <div>Sex :</div>
                                    <div>Identification Marks:</div>
                                    <div>Ticket No. :</div>
                                    <div>Other particulars if relatives or friends are available.</div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">xvii)</span>
                                <span className="text-white">Move the patients to local hospitals by car, taxi, bus where admission is necessary.</span>
                              </div>
                            </div>
                          </div>

                          {/* On Reaching Accident Spot Section */}
                          <div className="space-y-4">
                            <h4 className="text-xl font-bold text-blue-300 mb-3">313.1 On Reaching The Accident Spot:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">i)</span>
                                <span className="text-white">The senior most doctor will take charge.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">ii)</span>
                                <span className="text-white">One doctor shall proceed to collect blood and urine samples of the crew of the train / trains.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">iii)</span>
                                <span className="text-white">Erect the tent and establish receiving station – (First aid post).</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">iv)</span>
                                <span className="text-white">Staff to split into groups depending upon the number of causalities.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">v)</span>
                                <span className="text-white">One team shall man the FA post.</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-xl">vi)</span>
                                <span className="text-white">Doctors must check the wreckage for injured and assist in extricating passengers.</span>
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
              Medical Staff Duties Summary
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Note time of receiving messages and inform CMS</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🩸</span>
                <span className="text-gray-200 lg:text-lg text-base">Alert blood donors club and local hospitals</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🏥</span>
                <span className="text-gray-200 lg:text-lg text-base">Keep one doctor at Railway Hospital for inpatients</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚑</span>
                <span className="text-gray-200 lg:text-lg text-base">Move emergency box and reach site by available transport</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🚂</span>
                <span className="text-gray-200 lg:text-lg text-base">Move to MRV and inform Station Manager</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔧</span>
                <span className="text-gray-200 lg:text-lg text-base">Check MRV equipment and prepare operation theatre</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Record details of injured and dead persons</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">👨‍⚕️</span>
                <span className="text-gray-200 lg:text-lg text-base">Senior doctor takes charge at accident spot</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🧪</span>
                <span className="text-gray-200 lg:text-lg text-base">Collect blood and urine samples from train crew</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⛺</span>
                <span className="text-gray-200 lg:text-lg text-base">Erect tent and establish first aid post</span>
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

export default AMChapterPage21