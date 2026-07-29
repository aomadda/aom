"use client"
import React from 'react'

const AMChapterPage42 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">ACCIDENT RETURNS - TABLES 1 TO 7</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines for preparing accident returns in prescribed table formats
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 423 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">423</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      Accident Returns- Tables 1 to 7
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Section (a) */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">a</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 leading-relaxed">
                          The returns shall be prepared by the railways in the forms Tables 1 to 7.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section (b) */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">b</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 leading-relaxed">
                          These returns should be submitted showing cumulative dates to end of June, September, December and March and reach Board&apos;s office not later than 55 days after the close of the period to which they relate. &apos;NIL&apos; returns in the prescribed forms should be submitted if no reportable accidents occurred during the period covered.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section (c) */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">c</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 leading-relaxed">
                          Only those accidents which occurred during the period to which the returns relate shall be included in the relevant returns. In regard to accidents where details are not available at the time of forwarding the returns for any reason, such accidents are to be included in the statement with a clear indication that further details would follow.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section (d) */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">d</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 leading-relaxed">
                          Accidents which are of a trivial nature such as minor accidents in shunting, failure of springs, bursting open of points by trains resulting in no further damage or consequence, land-slides not interrupting traffic should not be included in the returns except in the case of &apos;fires in trains&apos; where the amount of damages caused is more than 50,000/-and upto 2 crore.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accidents to be included section */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                      <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                        Accidents to be included for the purpose of these statistics are:
                      </span>
                    </h4>
                    
                    <div className="space-y-6">
                      {/* Section (i) */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">i</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              Cases of loss of life or loss of limb or injury to limb, during the course of working of railways.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section (ii) */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">ii</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              All cases of damage to the permanent way, works and rolling stock.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section (iii) */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">iii</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              All cases, without exception, of cattle being thrown off the line or run over, i.e., all cases of cattle coming in contact with running trains shall be included in the accident returns.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section (iv) */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">iv</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              While reporting the number of accidents, the figures should be given irrespective of the number of casualties to persons or cattle caused by each particular accident, which should be separately stated. Similarly, the number of collisions and derailments should be shown irrespective of the vehicles damaged or derailed by such collisions or derailments. Each accident must be shown only once and in the event of an accident falling in more than one category, it should be treated as an accident in the higher category.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section (v) */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">v</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              Collisions / derailments in the course of operations other than the operation of trains as herein defined in marshalling yards, sidings etc., should be separated from the train accidents and recorded under the heads other collisions / derailments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 423.1 */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          423.1. For guidance in the matter of compilation of Tables, the following general instructions are given:
                        </span>
                      </h4>
                      
                      <div className="space-y-6">
                        {/* Section (i) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">i</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                The accidents given in Table 1 to 3 shall be given separately for each gauge as well as for the system as a whole.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (ii) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">ii</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Of the accidents included in the form marked Table 1 to 3, the accidents of the following description, which are reportable to the State Government shall be included under Col.2 thereof entitled &apos;Accidents reported to Local Government&apos; under section 113 of the Railways Act 1989 (24 of 1989)
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (iii) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">iii</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Collision between trains of which one is a passenger train.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (iv) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">iv</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Derailment of any train carrying passengers or part of such a train.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (v) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">v</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Train wrecking or a attempted train wrecking involving passenger train
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (vi) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">vi</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Fire in passenger train.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (vii) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">vii</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Passenger train running into road traffic at level crossing gates.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (viii) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">viii</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Passenger train running over obstruction placed on the line, other than those stated in clause (iii )and (vii) above.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (ix) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">ix</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Landslides or breaches by rain or flood which cause the interruption to any important through line of communication for at least 24 hours.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Section (x) */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mt-1">
                              <span className="text-white font-bold text-sm">x</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed">
                                Any other categories of accidents included in the Tables 1 to 3, but not covered above, and attended with loss of human life or with grievous hurt as defined in Section 320 of Indian Penal code or with serious injury to Railway property.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table 1 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 1: Train Accidents on Open Lines
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🚆</span>
                              <span>
                                Includes the number and outcome of train accidents on open lines.<br />
                                <span className="text-indigo-200">Train accidents:</span> collisions, derailments, fires (including explosions), and accidents at level crossings.<br />
                                <span className="text-blue-300">Note:</span> Collisions between trains and push trollies are <b>not</b> included here; they are shown under item No.6 of Table 3.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🛤️</span>
                              <span>
                                <span className="text-indigo-200">Derailments:</span> Data should be given separately for derailments in mid-sections and within station limits.<br />
                                <span className="text-blue-300">Train wrecking:</span> Serious damage or derailments due to willful obstruction/tampering should be shown under 2.01A(d), 2.01B(d), 2.02A(d), 2.02B(d).<br />
                                <span className="text-blue-300">No sabotage:</span> If no intention of sabotage, report under 2.01A(b), 2.01B(b), 2.02A(b), 2.02B(b).
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🔥</span>
                              <span>
                                <span className="text-indigo-200">Fire in trains:</span> Include all cases resulting in death, injury, or property damage of ₹50,000 and above up to ₹2 crore.<br />
                                <span className="text-blue-300">Below ₹50,000:</span> Accounted for under &apos;Miscellaneous accidents&apos; in Table 3.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🚉</span>
                              <span>
                                <span className="text-indigo-200">Fire cases reporting:</span> Report separately for &apos;passenger and mixed trains&apos;, &apos;EMU stock&apos;, and &apos;other trains&apos;.<br />
                                <span className="text-blue-300">EMU stock:</span> Only log cases where fire spreads to passenger compartments. If confined to low/high tension compartment, treat as fire in electric/diesel engines (item 1.05, Table 2).
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🚦</span>
                              <span>
                                <span className="text-indigo-200">Level crossing accidents:</span> Include trains running into road traffic and/or road traffic running into trains at level crossings.<br />
                                <span className="text-blue-300">Separate figures:</span> Provide for manned and unmanned level crossings, for both passenger and other trains.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Table 2 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 2: Failure of Railway Equipment
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🚆</span>
                              <span>
                                Failures are classified as: <b>rolling stock</b>, <b>permanent way</b>, <b>electric overhead equipment</b>, and <b>signalling apparatus</b> failures.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">⏱️</span>
                              <span>
                                <b>Engine failures</b> are split into two categories:<br />
                                <span className="ml-4">• <b>Time failures</b>: Engine fails on train causing delay of one hour or more.</span><br />
                                <span className="ml-4">• <b>Other failures</b>: Excludes failures of shunting engines in yards.</span>
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🔌</span>
                              <span>
                                Failures of <b>diesel</b> and <b>electric locomotives</b> must be shown separately.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-2xl mt-1">🔥</span>
                              <span>
                                <b>Failures due to fire</b> in diesel and electric locomotives should be reported under item 1.05 of this Table.
                              </span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="mt-6 space-y-6">
                          {/* Section (i) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">i</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  The cases of failure occurring in yards, except those on the running lines, should be excluded while reporting the cases of failure of Permanent Way against items 6.01, 6.02 and 6.03. Similarly the cases of rail fractures detected by Permanent Way staff should be excluded while reporting the cases of broken rails against item 6.04.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (ii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">ii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  The case of &apos;non-statistical engine failures&apos; shall be reported separately for diesel and electric engines against item No.5 of this table. For reckoning a non-statistical engine failure, the following conditions and circumstances should be observed:
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (iii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">iii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Loco going under repair at the end of its trip at out-station/terminal yard/shed and not being available for the return trip.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (iv) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">iv</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Failures on locos booked on trial after heavy schedules or change of major components like turbo etc., while working loads.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (v) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">v</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Failures of locos which are overdue by more than 24 hours, particularly if the components that fail need attention during the schedule.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (vi) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">vi</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Cases of heavy time losses (more than 60 minutes) on the run as a result of inclement weather.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (vii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">vii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Cases of heavy time losses (more than 60 minutes) due to overload (load being more than specified).
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table 3 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 3: Miscellaneous Accidents
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <p>
                            Miscellaneous accidents include the following category of accidents to trains in addition to other accidents not involving trains:
                          </p>
                        </div>
                        
                        <div className="mt-6 space-y-6">
                          {/* Section (i) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">i</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Trains running over cattle on the line but not derailed.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (ii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">ii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Attempted train wrecking.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (iii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">iii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Trains running over obstructions but not derailed (which are not covered under the above circumstances or under the train accidents at level crossings)
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (iv) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">iv</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Passenger trains running in wrong directions trail through points but not derailed.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (v) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">v</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Fires including explosions in trains when the amount of damage is less than 50,000/-.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (vi) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">vi</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  The collisions and derailments between light engines or/and vehicles or/and wagons or those between light engines and push trolleys.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table 4 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 4: Casualties by Movement of Trains
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <p>
                            Shall include the number of persons killed and injured by the movement of trains and railway vehicles (on open lines) exclusive of accidents covered by Table 1 to 3, in three parts namely I. Passengers, II. Railway Employees and III. Others.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Table 5 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 5: Other Accidents on Open Lines
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                              <span className="mt-1 text-red-500 text-xl">🚫</span>
                              <span>
                                Includes the number of persons killed or injured by accidents on open railway lines <b>not covered under Table 1 to 4</b>, i.e., accidents where the movement of vehicles was <b>not involved</b>.
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="mt-1 text-blue-500 text-xl">💧</span>
                              <span>
                                <b>Excludes</b> casualties from causes unconnected with railway working, such as:
                                <ul className="ml-0 mt-2 space-y-2 list-none">
                                  <li className="flex items-start gap-2">
                                    <span className="text-green-500">🛌</span>
                                    <span>Death of passengers in carriages or at stations from natural causes</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-500">🕳️</span>
                                    <span>Falling into wells or drowning in wells/ponds within station limits</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-yellow-500">🤕</span>
                                    <span>Slight abrasions or bruises incidental to a person&apos;s ordinary duties</span>
                                  </li>
                                </ul>
                                Such accidents <b>should not be included</b> in Table 5 or these returns.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Table 6 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 6: Accidents in Special Areas
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <p>
                            Shall include the following type of accidents:
                          </p>
                        </div>
                        
                        <div className="mt-6 space-y-6">
                          {/* Section (i) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">i</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  in railway workshops; or
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (ii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">ii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  on new works not opened for traffic; or
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (iii) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">iii</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  on lines under construction; or
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (iv) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">iv</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  on lines not used for the public carriage of passengers, animals or goods; or
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Section (v) */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">v</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  to steamers or flats working in connection with railways.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table 7 Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-indigo-300 mb-6 text-center">
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 px-4 py-2 rounded-lg">
                          Table 7: Railway Employee Accidents
                        </span>
                      </h4>
                      
                      <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/10">
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4">
                          <p>
                            Shall include the number of railway employees killed or injured due to accidents occurred during shunting of vehicles or engines and other accidents (included in Table 4) under various causes. The total of items 1 to 5 of this table should tally with the number of casualties to railway servants given in Table No.4.
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

export default AMChapterPage42