"use client"
import React from 'react'

const AMChapterPage63B = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER VI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-2xl text-xl text-gray-200 max-w-4xl mx-auto font-bold">
              Rescue and Relief Machinery
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 602 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">602</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Accident Siren Code
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Siren Code Table */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
                            <th className="px-4 py-3 text-left text-sm font-bold text-indigo-300">S. No.</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-indigo-300">Description of accident</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-indigo-300">No. of hooters to be sounded</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr className="hover:bg-white/5 transition-colors duration-200">
                            <td className="px-4 py-4 text-sm font-semibold text-white">1.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">When an accident takes place in the loco shed or traffic yard adjoining the loco shed</td>
                            <td className="px-4 py-4 text-sm text-gray-200">2 long</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors duration-200">
                            <td className="px-4 py-4 text-sm font-semibold text-white">2.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">When an accident takes place at an out-station but main line is clear -- ART to be moved.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">3 long</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors duration-200">
                            <td className="px-4 py-4 text-sm font-semibold text-white">3.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">When an accident takes place at an out station but main line is clear – MRT and ART to be moved.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">3 long & 1 short</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors duration-200">
                            <td className="px-4 py-4 text-sm font-semibold text-white">4.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">When an accident takes place at an out-station and main line is blocked – ART to be moved.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">4 long</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors duration-200">
                            <td className="px-4 py-4 text-sm font-semibold text-white">5.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">When an accident takes place at an out station the main line is blocked -- MRT and ART to be moved.</td>
                            <td className="px-4 py-4 text-sm text-gray-200">4 long & 1 short</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Important Information Section */}
                  <div className="mt-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-violet-400/20">
                    <div className="space-y-4">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                          <span className="text-white font-bold text-sm">ℹ</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-violet-300 mb-3">Important Information:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">⏱</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  The duration of the long hooter shall be 30 seconds and the short hooter shall be 05 seconds with 30 seconds interval between two successive calls. At least 3 calls shall be given.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 bg-gradient-to-r from-indigo-700/10 to-purple-800/10 p-6 rounded-xl border border-indigo-400/20">
                  <h3 className="text-xl font-bold text-indigo-300 mb-4">602.1 Siren Operation & Emergency Procedures</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">🔌</span>
                      <div>
                        <span className="font-semibold text-indigo-200">Each siren is equipped with:</span>
                        <ul className="list-none pl-0 mt-2 space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-400">◆</span>
                            <span className="text-gray-200">A delayed action switch (Tumbler switch) marked <span className="font-semibold">&quot;Accident Warning&quot;</span></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-400">◆</span>
                            <span className="text-gray-200">A check switch marked <span className="font-semibold">&quot;Test Push&quot;</span></span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">📢</span>
                      <span className="text-gray-200">
                        The specific siren codes described above must be used to give the emergency call.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">🛠️</span>
                      <span className="text-gray-200">
                        The <span className="font-semibold">&apos;Test Push&apos;</span> check switch is used to verify the siren and motor are working. To test, press and hold the button until the siren gives a continuous blast of at least 30 seconds, then release.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">⚠️</span>
                      <div>
                        <span className="text-gray-200">
                          <span className="font-semibold">If the &quot;Accident Warning&quot; tumbler switch fails:</span> The emergency call must be given by manually operating the <span className="font-semibold">&apos;Test Push&apos;</span> check switch, using the specific siren codes as per the table above.
                        </span>
                        <br />
                        <span className="text-gray-200">
                          <span className="font-semibold">If the Long Range electric siren is out of order:</span> The emergency call should be given by sounding the engine whistle, following the same siren codes.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">🔑</span>
                      <span className="text-gray-200">
                        Both the &quot;Accident Warning&quot; tumbler switch and the &quot;Test Push&quot; check switch have locking arrangements. The key for the tumbler switch and the duplicate key for the check switch must be kept in a sealed glass-fronted box. The original check switch key is with the electrical staff. In emergencies, break the glass to retrieve the key, and after use, restore the key and arrange to reseal or replace the glass.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">🧪</span>
                      <span className="text-gray-200">
                        The &quot;Test Push&quot; check switch must be tested by the Electrical Department once every month.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">👤</span>
                      <span className="text-gray-200">
                        In case of an accident, the Dy. Chief Controller (Punctuality) on duty in the divisional control is responsible for giving the emergency call.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-1 text-white font-bold text-base">🚨</span>
                      <span className="text-gray-200">
                        Upon hearing the emergency call, all nominated staff must respond immediately and take up their assigned positions and duties.
                      </span>
                    </li>
                  </ul>
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

export default AMChapterPage63B