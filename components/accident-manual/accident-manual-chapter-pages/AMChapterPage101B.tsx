"use client"
import React from 'react'

const AMChapterPage101B = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CHAPTER IX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              INVESTIGATION AND INQUIRIES
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 904 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">904</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Classification of Accident Inquiries
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Introduction */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                    <div className="space-y-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-blue-400 text-xl mt-1">📋</span>
                        <div className="space-y-4">
                          <p className="text-gray-200 leading-relaxed">
                            The Accident inquiries are classified into two types. They are
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Classification Types */}
                  <div className="space-y-6">
                    {/* Non-Railway Enquiries */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-red-400 text-xl mt-1">🏛️</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-red-400/30">
                              <h4 className="text-lg font-bold text-red-300 mb-3 text-center">a) Non-Railway Enquiries</h4>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-green-400 text-lg font-bold">i.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Judicial Commission or Commission of Inquiry as per Enquiries Act of 1952.
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-blue-400 text-lg font-bold">ii.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Commissioner of Railway Safety Enquiry
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-purple-400 text-lg font-bold">iii.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Magisterial Enquiry
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-orange-400 text-lg font-bold">iv.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Police Enquiry
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Railway Enquiries */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-blue-400 text-xl mt-1">🚂</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                              <h4 className="text-lg font-bold text-blue-300 mb-3 text-center">b) Railway Enquiries</h4>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-green-400 text-lg font-bold">i.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Joint Inquiry
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-purple-400 text-lg font-bold">ii.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Inter-departmental Inquiry
                                  </p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/30">
                                <div className="flex items-start gap-3">
                                  <span className="text-orange-400 text-lg font-bold">iii.</span>
                                  <p className="text-gray-200 leading-relaxed">
                                    Departmental Inquiry
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-sections */}
                  <div className="space-y-4">
                    {/* 904.1 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-red-400 text-xl mt-1">⚖️</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-red-400/30">
                              <h4 className="text-lg font-bold text-red-300 mb-3 text-center">904.1 The Judicial Commission or Commission of Inquiry</h4>
                            </div>
                            
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">🏛️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The Central Government may appoint a <span className="font-semibold text-red-200">Commission of Inquiry</span> under the Commission of Inquiry Act, 1952 (LX of 1952) in case of a very serious accident.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">⏹️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  When such a Commission is appointed, <span className="font-semibold text-red-200">all other enquiries, investigations, or proceedings</span> related to that accident shall be stopped.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">📄</span>
                                <span className="text-gray-200 leading-relaxed">
                                  <span className="font-semibold text-red-200">All records and documents</span> related to the enquiry must be forwarded to the authority specified by the Central Government.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 904.2 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-blue-400 text-xl mt-1">🔍</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                              <h4 className="text-lg font-bold text-blue-300 mb-3 text-center">904.2 Commissioner of Railway Safety Inquiry</h4>
                            </div>
                            
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-blue-400 text-xl mt-1">📜</span>
                                <span className="text-gray-200 leading-relaxed">
                                  <span className="font-semibold text-blue-200">CRS</span> shall hold statutory enquiry into accidents falling under <span className="font-semibold">Section 113 of the Railways Act, 1989</span>.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-400 text-xl mt-1">🕵️‍♂️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The CRS may order and personally conduct an inquiry into any other accident (not under Section 113) if it is considered sufficiently serious.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-400 text-xl mt-1">📅</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The CRS shall inform the <span className="font-semibold text-blue-200">General Manager (GM)</span> or <span className="font-semibold text-blue-200">Chief Safety Officer (CSO)</span> about the intention to hold an inquiry.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-400 text-xl mt-1">⏰</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The date, time, and place of the inquiry must be fixed and communicated by the CRS.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 904.3 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-purple-400 text-xl mt-1">👨‍⚖️</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                              <h4 className="text-lg font-bold text-purple-300 mb-3 text-center">904.3 Magisterial Inquiry</h4>
                            </div>
                            
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-400 text-xl mt-1">🏛️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  <span className="font-semibold text-purple-200">Magisterial Inquiry</span> may be <span className="font-semibold">judicial</span> or <span className="font-semibold">non-judicial</span> and is appointed by the <span className="font-semibold">State Government</span>.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-400 text-xl mt-1">🚆</span>
                                <span className="text-gray-200 leading-relaxed">
                                  In case of a <span className="font-semibold">reportable train accident</span>, the <span className="font-semibold">District Magistrate</span> or any other Magistrate may conduct the inquiry personally.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-400 text-xl mt-1">👨‍💼</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The Magistrate may also <span className="font-semibold">depute a Subordinate Magistrate</span> to conduct the inquiry.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-400 text-xl mt-1">👮‍♂️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  Alternatively, the Magistrate may <span className="font-semibold">direct the Police</span> to carry out the investigation.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 904.4 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2 mb-4">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-red-400 text-xl mt-1">🚨</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-red-400/30">
                              <h4 className="text-lg font-bold text-red-300 mb-3 text-center">904.4 Police Inquiry</h4>
                            </div>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">👮‍♂️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  <span className="font-semibold text-red-200">Railway Police</span> are empowered to investigate the causes of accidents occurring during railway operations.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">💀</span>
                                <span className="text-gray-200 leading-relaxed">
                                  If an accident results in <span className="font-semibold">loss of human life</span>,
                                  the Police Inquiry is mandatory.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">🤕</span>
                                <span className="text-gray-200 leading-relaxed">
                                  In case of <span className="font-semibold">grievous injury</span> to any person, Police Inquiry is conducted.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">🏗️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  If there is <span className="font-semibold">serious damage to railway property</span> exceeding <span className="font-semibold">Rs. 2 Crore</span>, Police Inquiry is initiated.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">⚖️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  If the accident appears to be due to any <span className="font-semibold">criminal act or omission</span>, the Police will investigate.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-400 text-xl mt-1">🔄</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The Police Inquiry may proceed <span className="font-semibold">parallel to other inquiries</span> if required.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 904.5 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2 mb-4">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-yellow-400 text-xl mt-1">🤝</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-yellow-400/30">
                              <h4 className="text-lg font-bold text-yellow-300 mb-3 text-center">904.5 Joint Inquiry</h4>
                            </div>
                              <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                  <span className="text-yellow-300 text-xl mt-1">🚨</span>
                                  <span className="text-gray-200 leading-relaxed">
                                    When an accident as defined in <span className="font-semibold">Section 113 of the Act</span> occurs, the Head of the Railway Administration must promptly order a thorough investigation.
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-yellow-300 text-xl mt-1">👥</span>
                                  <span className="text-gray-200 leading-relaxed">
                                    The investigation is conducted by a <span className="font-semibold">Committee of Railway Officers</span>, known as a <span className="font-semibold">Joint Inquiry</span>.
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-yellow-300 text-xl mt-1">⭐</span>
                                  <span className="text-gray-200 leading-relaxed">
                                    In special cases, the <span className="font-semibold">General Manager</span> may order <span className="font-semibold">Inter-departmental Inquiries</span>.
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-yellow-300 text-xl mt-1">🗂️</span>
                                  <span className="text-gray-200 leading-relaxed">
                                    The General Manager specifies the officers or senior subordinates for the committee and, if necessary, fixes the date for the inquiry.
                                  </span>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 904.6 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2 mb-4">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-green-400 text-xl mt-1">🏢</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-green-400/30">
                              <h4 className="text-lg font-bold text-green-300 mb-3 text-center">904.6 Inter Departmental Inquiry</h4>
                            </div>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-green-300 text-xl mt-1">🛡️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  For accidents <span className="font-semibold">not under the purview of the Commissioner of Railway Safety (CRS)</span>, the <span className="font-semibold">Divisional Railway Manager (DRM)</span> shall order an inquiry by a committee of officers from the relevant departments.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-300 text-xl mt-1">🏛️</span>
                                <span className="text-gray-200 leading-relaxed">
                                  If the <span className="font-semibold">General Manager</span> considers it necessary, an inquiry may be conducted by <span className="font-semibold">Heads of Departments (HODs)</span> or <span className="font-semibold">Principal Heads of Departments (PHODs)</span>.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-300 text-xl mt-1">✅</span>
                                <span className="text-gray-200 leading-relaxed">
                                  In such cases, the <span className="font-semibold">DRM</span> does <span className="font-semibold">not need to order a separate inquiry</span>.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 904.7 */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-pink-400 text-xl mt-1">📋</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/30">
                              <h4 className="text-lg font-bold text-pink-300 mb-3 text-center">904.7 Departmental Inquiries</h4>
                            </div>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <span className="text-pink-300 text-xl mt-1">🔍</span>
                                <span className="text-gray-200 leading-relaxed">
                                  If the <span className="font-semibold">cause of the accident</span> is clearly linked to a specific department and the <span className="font-semibold">Head of that Department</span> accepts responsibility,
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-pink-300 text-xl mt-1">🚫</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The <span className="font-semibold">inter-departmental committee inquiry</span> may be <span className="font-semibold">dispensed with</span>.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-pink-300 text-xl mt-1">👨‍💼</span>
                                <span className="text-gray-200 leading-relaxed">
                                  The inquiry can be conducted by an <span className="font-semibold">officer or officers of the concerned department</span>.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-pink-300 text-xl mt-1">📝</span>
                                <span className="text-gray-200 leading-relaxed">
                                  Purpose: To <span className="font-semibold">determine staff responsibility</span> and <span className="font-semibold">recommend measures</span> to prevent future accidents.
                                </span>
                              </li>
                            </ul>
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

export default AMChapterPage101B
