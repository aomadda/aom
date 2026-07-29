"use client"
import React from 'react'

const BWMPartAPage1B = () => {
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
              CHAPTER I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">Description of Neale&apos;s Ball Token Instrument</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Detailed description of Neale&apos;s Ball token instrument components
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">1.2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </span>
                      Description of Neale&apos;s Ball token instrument
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <p className="text-gray-200 lg:text-lg text-base italic">
                            (See Figure No.1 at the end of this Chapter)
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          {/* Token receiver cover */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">a</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-blue-300 mb-3 lg:text-2xl">
                                  Token receiver cover
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  The token receiver cover should be lifted for inserting the token into the instrument.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Token receiver handle */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-indigo-400/30 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">b</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-indigo-300 mb-3 lg:text-2xl">
                                  Token receiver handle
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  This should be turned for a token to fall into the instrument.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Galvanometer */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">c</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-purple-300 mb-3 lg:text-2xl">
                                  Galvanometer
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  This indicates the flow of current from one instrument to another.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Telephone */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-green-400/30 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">d</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-green-300 mb-3 lg:text-2xl">
                                  Telephone
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  This is provided in conjunction with the instrument for communication with the station at the other end of the block section.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Plunger */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-pink-400/30 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">e</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-pink-300 mb-3 lg:text-2xl">
                                  Plunger
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  The plunger is used for transmitting &apos;Bell Code&apos; signals and for operating the &apos;Operating Handle&apos;.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Operating Handle */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">f</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-yellow-300 mb-3 lg:text-2xl">
                                  Operating Handle
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  The operating handle can be set to &apos;Line Closed&apos;, &apos;TGT&apos;, or &apos;TCF&apos; positions. It is turned to the required position when a prolonged beat is received from the station at the other end of the block section.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Token Exit */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-red-400/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">g</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-red-300 mb-3 lg:text-2xl">
                                  Token Exit
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  The token exit is the point from which a token comes out when the &apos;Operating Handle&apos; is turned to the &apos;TGT&apos; position.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Token Windows */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">h</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-cyan-300 mb-3 lg:text-2xl">
                                  Token Windows
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  The token windows display the availability of tokens inside the instrument.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Bell */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-orange-400/30 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">j</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-orange-300 mb-3 lg:text-2xl">
                                  Bell
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  The bell responds to Bell Code signals sent by the station at the other end of the block section. At stations with more than one instrument, different bells or gongs with distinct sounds are provided to identify each instrument individually.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 'E' type lock with key in 'Train Going To' position */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-lime-400/30 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-lime-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">k</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-lime-300 mb-3 lg:text-2xl">
                                  &apos;E&apos; type lock with key in &apos;Train Going To&apos; position
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  This lock is provided where the Last Stop Signal is controlled mechanically through the block instruments. The key can be released only when the block handle is in the &apos;Train Going To&apos; position and is used for controlling the Last Stop Signal lever. This key may also be used for operating the slip siding points.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 'E' Type Lock with Key in 'Train Coming From' Position */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-teal-400/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-teal-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">l</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-teal-300 mb-3 lg:text-2xl">
                                  &apos;E&apos; Type Lock with Key in &apos;Train Coming From&apos; Position
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  This key can be released only when the Operating Handle is set to the &apos;Train Coming From&apos; position. It is used for controlling the catch siding points.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Station Master's Key */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border border-rose-400/30 hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-500/20">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-rose-500/50 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-white font-bold lg:text-xl text-lg">m</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-rose-300 mb-3 lg:text-2xl">
                                  Station Master&apos;s Key (SM&apos;s Key)
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                  When this key is taken out, it locks the instrument in its last operated position, allowing only incoming beats to be heard. The key should always be kept in the personal custody of the Station Master when not required for operating the instrument.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Divider before Note */}
                          <div className="flex items-center gap-4 py-4">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                            <div className="flex-shrink-0">
                              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                          </div>

                          {/* Note about Tokens */}
                          <div className="group hover:bg-white/5 lg:p-5 p-3 rounded-xl transition-all duration-300 border-2 border-yellow-400/40 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-500/30 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-yellow-300 mb-3 lg:text-2xl">
                                  Note
                                </h4>
                                <p className="text-gray-200 lg:text-lg text-base leading-relaxed font-medium">
                                  Each token is engraved with its number and the code initials of the two block stations at each end of the block section to which it applies. Tokens have grooves of different patterns for different sections. Ball tokens are provided in four different classes—A, B, C, and D—each for different block sections.
                                </p>
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
            <h3 className="lg:text-3xl text-2xl font-bold text-white mb-6 text-center flex flex-col gap-3 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-3 p-2 rounded-full mr-4">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Components
            </h3>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🔧</span>
                  <span className="text-gray-200 lg:text-lg text-base">Token receiver cover</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">🎛️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Token receiver handle</span>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Galvanometer</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 lg:p-4 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-4 mt-1 lg:text-2xl text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">Telephone</span>
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

export default BWMPartAPage1B