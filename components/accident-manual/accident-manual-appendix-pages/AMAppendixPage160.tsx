"use client"
import React from 'react'

const AMAppendixPage160 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}  
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">APPENDIX - IV</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Flood Warning
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Introduction - Flood Warning Indicator */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-4 relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 absolute right-0 top-0">
                      <span className="text-white font-bold text-lg">1.4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-2 text-center mt-12">FLOOD WARNING INDICATOR</h4>
                      <p className="text-gray-200 leading-relaxed">Flood warning devices have been installed on trail basis at some of the bridges. Two types of devices are installed as follows:</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section A - GSM based device */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">a</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-4 text-center">GSM based device</h4>

                      <div className="space-y-4 ml-0">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">i</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">Once the flood water level reaches the danger mark, the device sends an SMS warning message to the cell phone kept at Station Master&apos;s room and activates the signals installed at the bridge approach into &apos;ON&apos; position.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">ii</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">The Loco Pilot of the approaching train should stop the train at the signals in &apos;ON&apos; position. He shall restart his train only after getting clearance from the concerned SE/JE/P.Way at the site.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section B - VHF based device */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">b</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-4 text-center">VHF based device</h4>

                      <div className="space-y-4 ml-0">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">i</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">Once the flood water level reaches the danger mark, the device sends an audio– visual indication (by giving beep sound) to the Station Master room and activates the signals installed at the bridge approach into &apos;ON&apos; position.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">ii</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">The Loco Pilot/Assistant Loco pilot of the approaching train should stop the train at the signals in &apos;ON&apos; position. He shall restart his train only after getting clearance from the concerned SE/JE/P.Way at the site.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section C - Station Master Actions */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">c</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-2 text-center">Station Master and concerned staff shall take the following action</h4>
                      <p className="text-gray-200 leading-relaxed">Once the Station Master receives the message from the flood warning device, he should stop immediately the approaching train and inform adjacent Station Masters and concerned JE/SE/SSE/P.Way to take precautionary measures till such time he gets clearance from JE/SE/SSE/P.Way for safe passage of trains.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section D - SE/JE P.Way Actions */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20 hover:border-red-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">d</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-300 mb-2 text-center">SE/JE P.Way Actions</h4>
                      <div className="space-y-4">
                        <p className="text-gray-200 leading-relaxed">As soon as SE/JE P.way receives the message, he should visit the site and assess the situation and regulate the traffic.</p>
                        <p className="text-gray-200 leading-relaxed">He should post temporary Watchmen until the flood water recedes.</p>
                        <p className="text-gray-200 leading-relaxed">He should inform the adjacent Station Master regarding the condition of flood and whether train movement can take place or not.</p>
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

export default AMAppendixPage160