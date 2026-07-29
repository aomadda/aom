"use client"
import React from 'react'

const PassTypes = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-purple-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-purple-500 to-indigo-600 py-3 px-2 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
          PASS TYPES
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to different types of railway passes available for employees and their families
            </p>
          </div>

          {/* Pass Types Container */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-4 p-2 border border-white/20">
            <div className="space-y-6">
              
              {/* Privilege Pass */}
              <div className="bg-linear-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-center gap-3  lg:text-left">
                <div className="lg:w-16 h:h-16 w-10 h-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-full flex flex-col text-center items-center justify-center text-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-col text-center mb-4">
                      
                      <h3 className="lg:text-2xl text-xl font-bold text-white">
                        Privilege Pass
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Privilege Pass is issued to railway servants for personal travel. It allows the employee and their family members to travel on Indian Railways at concessional rates or free of cost as per their entitlement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Duty Pass */}
              <div className="bg-linear-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-indigo-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:text-left">
                <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-center flex-col gap-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-col  mb-4">
                      
                      <h3 className="lg:text-2xl text-xl font-bold text-white">
                        Duty Pass
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Duty Pass is issued for official travel purposes. It is used when railway servants need to travel for work-related purposes such as training, meetings, inspections, or other official duties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Post-Retirement Pass */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-start lg:text-left">
                  <div className="shrink-0 mr-6 mb-4 lg:mb-0">
                    <div className="relative">
                      <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-col mb-4">
                      <h3 className="lg:text-2xl text-xl font-bold text-white">
                        Post-Retirement Pass
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Post-Retirement Pass is issued to retired railway employees. It allows them to continue traveling on Indian Railways with certain benefits and restrictions as per retirement rules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Widow Pass */}
              <div className="bg-linear-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-start lg:text-left">
                  <div className="shrink-0 mr-6 mb-4 lg:mb-0">
                    <div className="relative">
                      <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">4</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-col mb-4">
                      <h3 className="lg:text-2xl text-xl font-bold text-white">
                        Widow Pass
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      Widow Pass is issued to widows of deceased railway employees. It provides travel benefits to help them with their transportation needs after the death of their railway employee spouse.
                    </p>
                  </div>
                </div>
              </div>

              {/* School Pass */}
              <div className="bg-linear-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-start lg:text-left">
                  <div className="shrink-0 mr-6 mb-4 lg:mb-0">
                    <div className="relative">
                      <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">5</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-col mb-4">
                      
                      <h3 className="lg:text-2xl text-xl font-bold text-white">
                        School Pass
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
                      School Pass is issued for children of railway employees to travel to and from their educational institutions. It helps with the transportation needs of railway employee families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pass Type Guidelines */}
              <div className="bg-linear-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row items-start lg:text-left">
                  <div className="shrink-0 mr-6 mb-4 lg:mb-0">
                    
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-col mb-6">
                      
                      <h3 className="lg:text-2xl text-xl font-bold text-white">
                        Pass Type Guidelines
                      </h3>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-start group/item hover:bg-white/5 p-4 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40">
                        <div className="shrink-0 mr-4">
                          <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <span className="lg:text-lg text-base text-gray-200 leading-relaxed font-medium">Each pass type has specific eligibility criteria</span>
                      </div>
                      <div className="flex items-start group/item hover:bg-white/5 p-4 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40">
                        <div className="shrink-0 mr-4">
                          <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <span className="lg:text-lg text-base text-gray-200 leading-relaxed font-medium">Pass types determine travel entitlements and benefits</span>
                      </div>
                      <div className="flex items-start group/item hover:bg-white/5 p-4 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40">
                        <div className="shrink-0 mr-4">
                          <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <span className="lg:text-lg text-base text-gray-200 leading-relaxed font-medium">Different pass types have different validity periods</span>
                      </div>
                      <div className="flex items-start group/item hover:bg-white/5 p-4 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40">
                        <div className="shrink-0 mr-4">
                          <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <span className="lg:text-lg text-base text-gray-200 leading-relaxed font-medium">Pass types may have different family member inclusion rules</span>
                      </div>
                      <div className="flex items-start group/item hover:bg-white/5 p-4 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40">
                        <div className="shrink-0 mr-4">
                          <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <span className="lg:text-lg text-base text-gray-200 leading-relaxed font-medium">Some pass types are for specific purposes only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Eligibility Benefits */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🎯</span>
                Eligibility Criteria
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-purple-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#C4B5FD"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Service duration requirements</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-purple-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#C4B5FD"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Employment status verification</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-purple-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#C4B5FD"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Family member definitions</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-purple-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#C4B5FD"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Specific purpose validation</span>
                </li>
              </ul>
            </div>

            {/* Travel Benefits */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🚄</span>
                Travel Entitlements
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-indigo-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#A5B4FC"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Concessional fare rates</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-indigo-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#A5B4FC"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Free travel benefits</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-indigo-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#A5B4FC"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Class of travel options</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-indigo-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#A5B4FC"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Route restrictions</span>
                </li>
              </ul>
            </div>

            {/* Validity Benefits */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">⏰</span>
                Validity Periods
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-blue-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#60A5FA"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Annual entitlement limits</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-blue-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#60A5FA"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Journey completion time</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-blue-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#60A5FA"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Extension possibilities</span>
                </li>
                <li className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2 transition-all hover:bg-blue-500/30 shadow-sm">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400/80 shadow-inner text-xl mr-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#60A5FA"/>
                      <path d="M6 10.3l2.4 2.2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Renewal requirements</span>
                </li>
              </ul>
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

export default PassTypes