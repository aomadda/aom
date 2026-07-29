"use client"
import React from 'react'

const AMChapterPage30 = () => {
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
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in"> CHAPTER - IV </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">ACCIDENT REPORT PARTICULARS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Essential details required in accident reports as per Railways Act, 1989
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 403 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">403</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      Particulars to be given in the Accident Report
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                  <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <p className="text-white mb-6">The notices mentioned in section 113 of the Railways Act, 1989 referred to as &apos;The Act&apos;, shall henceforth contain the following particulars, namely ––</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(i)</span>
                          <span className="text-white">KM, station or between stations at which the accident occurred;</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(ii)</span>
                          <span className="text-white">Time and date of the accident;</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(iii)</span>
                          <span className="text-white">Number and description of the train or trains;</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(iv)</span>
                          <span className="text-white">Nature of the accident;</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(v)</span>
                          <span className="text-white">Number of people killed or injured, as far as is known;</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(vi)</span>
                          <span className="text-white">Prima-facie Cause of the accident; and</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-green-400 text-xl font-bold">(vii)</span>
                          <span className="text-white">Probable time of restoration of through running.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accident Format Section */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/20 mt-6">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                  <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </span>
                        ACCIDENT FORMAT
                      </h4>
                      
                      <div className="bg-white/5 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-blue-400 font-bold">Nature of Accident:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-blue-400 font-bold">Accident Classification:</span>
                            <span className="text-white">_________________</span>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full bg-white/5 rounded-lg border border-white/10">
                          <thead>
                            <tr className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
                              <th className="px-4 py-3 text-left text-white font-bold border-b border-white/20">Sl. No</th>
                              <th className="px-4 py-3 text-left text-white font-bold border-b border-white/20">Particulars</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">1</td>
                              <td className="px-4 py-3 text-white">Date and time of accident</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">2</td>
                              <td className="px-4 py-3 text-white">Division</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">3</td>
                              <td className="px-4 py-3 text-white">Section</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">4</td>
                              <td className="px-4 py-3 text-white">Block section</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">5</td>
                              <td className="px-4 py-3 text-white">At station or mid-section</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">6</td>
                              <td className="px-4 py-3 text-white">Gauge (BG/MG)</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">7</td>
                              <td className="px-4 py-3 text-white">Traction (elect./Non-elect.)</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">8</td>
                              <td className="px-4 py-3 text-white">Route</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">9</td>
                              <td className="px-4 py-3 text-white">System of working</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">10</td>
                              <td className="px-4 py-3 text-white">Class of station Type of signalling<br/>Standard of interlocking</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">11</td>
                              <td className="px-4 py-3 text-white">Train particulars</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">12</td>
                              <td className="px-4 py-3 text-white">Brief particulars</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">13</td>
                              <td className="px-4 py-3 text-white">Train working condition (normal/abnormal) in brief</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">14</td>
                              <td className="px-4 py-3 text-white">Procedural failures, if any</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">15</td>
                              <td className="px-4 py-3 text-white">Casualities<br/>Killed:<br/>Grievous Injuries: Simple injuries:</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">16</td>
                              <td className="px-4 py-3 text-white">Relief arrangements<br/>MRT/.... ordered at .... and left at ..... arrived spot....<br/>ART/.... ordered at .... and left at ...... arrived spot .<br/>140T//.... ordered at ....and left at ...... arrived spot....</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">17</td>
                              <td className="px-4 py-3 text-white">Officers at site</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">18</td>
                              <td className="px-4 py-3 text-white">Time of Restoration</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">19</td>
                              <td className="px-4 py-3 text-white">Time of first train passed on the affected line/s</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">20</td>
                              <td className="px-4 py-3 text-white">Prima-facie cause</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">21</td>
                              <td className="px-4 py-3 text-white">Gate particulars, if involved<br/>As per Annexure</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">22</td>
                              <td className="px-4 py-3 text-white">Loco pilot particulars<br/>As per Annexure</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">23</td>
                              <td className="px-4 py-3 text-white">Guard particulars</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">24</td>
                              <td className="px-4 py-3 text-white">State/District</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-blue-400 font-bold">25</td>
                              <td className="px-4 py-3 text-white">Other information, if any</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annexure A Section */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-emerald-400/20 mt-6">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                  <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                        Annexure &quot;A&quot;
                      </h4>
                      
                      <h5 className="text-lg font-bold text-white mb-6 text-center">Gate Particulars (Manned/Unmanned)</h5>

                      <div className="overflow-x-auto">
                        <table className="w-full bg-white/5 rounded-lg border border-white/10">
                          <thead>
                            <tr className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20">
                              <th className="px-4 py-3 text-left text-white font-bold border-b border-white/20">Sl. No</th>
                              <th className="px-4 py-3 text-left text-white font-bold border-b border-white/20">Information</th>
                              <th className="px-4 py-3 text-left text-white font-bold border-b border-white/20">Particulars</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">1</td>
                              <td className="px-4 py-3 text-white">Gate No.: Kms.:</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">2</td>
                              <td className="px-4 py-3 text-white">Class:</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">3</td>
                              <td className="px-4 py-3 text-white">Traffic/Engineering gate:</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">4</td>
                              <td className="px-4 py-3 text-white">Telephone provided or not</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">5</td>
                              <td className="px-4 py-3 text-white">Provided with lifting barrier or leaves or chains.</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">6</td>
                              <td className="px-4 py-3 text-white">Normal position of the gate</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">7</td>
                              <td className="px-4 py-3 text-white">Interlocked or non-interlocked</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">8</td>
                              <td className="px-4 py-3 text-white">TVUs with Date of census</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">9</td>
                              <td className="px-4 py-3 text-white">Type of Roads & road approaches.</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">10</td>
                              <td className="px-4 py-3 text-white">Availability of Road signs</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">11</td>
                              <td className="px-4 py-3 text-white">Availability of Speed breakers and their condition</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">12</td>
                              <td className="px-4 py-3 text-white">Availability of Whistle board</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">13</td>
                              <td className="px-4 py-3 text-white">Visibility (in meters)- Up direction and DN direction<br/>(meters on both LH & RH side)</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">14</td>
                              <td className="px-4 py-3 text-white">Gradient if any –</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-emerald-400 font-bold">15</td>
                              <td className="px-4 py-3 text-white">No. of accidents during last two years at the same gate</td>
                              <td className="px-4 py-3 text-white">_______</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annexure B Section */}
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/20 mt-6">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                  <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                        <span className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        Annexure -&quot;B&quot;
                      </h4>
                      
                      <h5 className="text-lg font-bold text-white mb-6 text-center">Loco-Pilot&apos;s Particulars</h5>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Name:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date of Birth:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Family members:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Qualification:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Head Quarter:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Grade:</span>
                            <span className="text-white">_________________</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Breathlyser test:</span>
                            <div className="mt-2 space-y-1">
                              <div className="text-white">(Positive – intoxication)</div>
                              <div className="text-white">(Negative – without intoxication)</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date of Appointment:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date Promoted as Asst. Loco-pilot:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date Promoted as Goods Loco-pilot:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date Promoted as Pass. Loco-pilot:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date Promoted as Mail/Exp. Loco-pilot:</span>
                            <span className="text-white">_________________</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date of Medical Examination:</span>
                            <div className="mt-2 text-white">Last attended....... , next due ........</div>
                          </div>
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Date of Refresher:</span>
                            <div className="mt-2 text-white">G&SR attended on .... next due ....</div>
                          </div>
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Technical:</span>
                            <div className="mt-2 text-white">attended on ...... next due on .....</div>
                          </div>
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Safety Camp attended on:</span>
                            <span className="text-white">_________________</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Safety category Grading:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Psycho Test:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Awards/Punishments:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Nominated Loco Inspector:</span>
                            <span className="text-white">_________________</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-orange-400 font-bold">Time of Signing On / Off:</span>
                            <span className="text-white">_________________</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                          <span className="text-orange-400 font-bold">Rest availed before duty in hours:</span>
                          <span className="text-white">_________________</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                          <span className="text-orange-400 font-bold">Last trip on the Section:</span>
                          <span className="text-white">_________________</span>
                        </div>
                      </div>

                      <div className="p-4 bg-white/5 rounded-lg border border-white/10 mb-6">
                        <span className="text-orange-400 font-bold">Previous history of accident, if any:</span>
                        <span className="text-white ml-3">_________________</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-cyan-400/20 mt-6">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                  <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        Additional Information
                      </h4>
                      
                      <p className="text-white mb-4">In addition to the particulars prescribed above, the following particulars shall also be furnished:-</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-cyan-400 text-xl font-bold">(i)</span>
                          <span className="text-white">Whether the train engine was fitted with an electric head light , flasher light and buffer lights and their working (this shall be furnished only in the case of accidents involving running trains, which occur during nights);</span>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className="mt-1 text-cyan-400 text-xl font-bold">(ii)</span>
                          <span className="text-white">In the accident message to the Railway Board and to the Chief Commissioner of Railway Safety/ Commissioner of Railway Safety, the particulars required shall be given; also, as soon as possible, additional information shall be given regarding the approximate cost of damage to railway property, number of persons who have been killed or have sustained grievous injury or simple injury, under &apos;Passengers&apos; and &apos;Railway Staff&apos; separately. The number of persons in the other train, if any, viz. a Goods train, or in other vehicles, such as trollies or road vehicles, or persons not travelling in either of these such as travelling on the foot-boards or on the track who are killed or have sustained grievous injury or simple injury, under &apos;Passengers&apos;, Railway Staff&apos; and &apos;outsiders&apos;, shall be furnished separately. In reporting accidents to material trains, details as to whether the train concerned was carrying workmen shall always be given.</span>
                        </div>
                      </div>

                      <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4 mt-4">
                        <p className="text-yellow-200 font-semibold">Note: For the purpose of this rule, a passenger traveling on the foot-board of a train shall NOT be deemed to be passenger in the train.</p>
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

export default AMChapterPage30