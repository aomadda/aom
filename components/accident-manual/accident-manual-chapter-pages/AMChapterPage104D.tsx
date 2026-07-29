"use client"
import React from 'react'

const AMChapterPage104D = () => {  
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
              {/* Section 911 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">911</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Method of conducting Joint / Inter Departmental Inquiries
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Sub-sections */}
                  <div className="space-y-4">
                    {/* Section a */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-red-400 text-xl mt-1">📋</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-red-400/30">
                              <h4 className="text-lg font-bold text-red-300 mb-3 text-center">a) Inquiry Issues and Evidence</h4>
                            </div>
                            
                            <ul className="space-y-4 text-gray-200 leading-relaxed">
                              <li className="flex items-start gap-2">
                                <span className="text-yellow-400 text-xl mt-1">📝</span>
                                <span>
                                  <span className="font-semibold">Frame the Issues:</span> Before starting the Inquiry, clearly define the issues to be examined. Evidence should be confined to these specific issues as much as possible.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-400 text-xl mt-1">❓</span>
                                <span>
                                  <span className="font-semibold">Relevant Questioning:</span> Witnesses should not be allowed to make long or irrelevant statements. They must be asked questions directly related to the framed issues from the very beginning.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-400 text-xl mt-1">🔊</span>
                                <span>
                                  <span className="font-semibold">Read Back Evidence:</span> After recording a witness’s statement, it should be read aloud to them, and they should be asked if they wish to add anything further.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-400 text-xl mt-1">🔄</span>
                                <span>
                                  <span className="font-semibold">Cross-Examination:</span> Witnesses should be cross-examined and re-examined if necessary, to bring out all important details.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section b */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-blue-400 text-xl mt-1">📝</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/30">
                              <h4 className="text-lg font-bold text-blue-300 mb-3 text-center">b) Prior Statement Handling</h4>
                            </div>
                            
                            <ul className="space-y-4 text-gray-200 leading-relaxed">
                              <li className="flex items-start gap-2">
                                <span className="text-blue-400 text-xl mt-1">📖</span>
                                <span>
                                  If a witness has given a statement before the Inquiry, it must be read aloud to them and recorded as their official deposition.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-400 text-xl mt-1">➕</span>
                                <span>
                                  The witness should be specifically asked if they wish to add or modify anything in their previous statement, and their reply must be recorded along with their signature.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-yellow-400 text-xl mt-1">🔄</span>
                                <span>
                                  Any further evidence from the witness should only come through cross-examination; no new independent statement should be recorded.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-purple-400 text-xl mt-1">✍️</span>
                                <span>
                                  All questions asked during cross-examination and the answers given must be recorded immediately.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section c */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-purple-400 text-xl mt-1">⚖️</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-purple-400/30">
                              <h4 className="text-lg font-bold text-purple-300 mb-3 text-center">c) Rule Violation Awareness</h4>
                            </div>
                            
                            <ul className="space-y-4 text-gray-200 leading-relaxed">
                              <li className="flex items-start gap-2">
                                <span className="text-purple-300 text-xl mt-1">❗</span>
                                <span>
                                  If a witness describes events that are <span className="font-semibold">against rules or regulations</span> and may indicate neglect or violation,
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-indigo-300 text-xl mt-1">🤔</span>
                                <span>
                                  The witness should be <span className="font-semibold">specifically asked</span> during examination or cross-examination whether they are aware that their actions were contrary to the rules.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section d */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-orange-400 text-xl mt-1">🔍</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-orange-400/30">
                              <h4 className="text-lg font-bold text-orange-300 mb-3 text-center">d) Comprehensive Investigation</h4>
                            </div>
                            
                            <ul className="space-y-4 text-gray-200 leading-relaxed">
                              <li className="flex items-start gap-2">
                                <span className="text-orange-300 text-xl mt-1">🔎</span>
                                <span>
                                  The Inquiry Officer or Committee should not be satisfied with just finding the immediate cause(s) of the accident.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-yellow-300 text-xl mt-1">🧩</span>
                                <span>
                                  They must gather all necessary evidence and identify any <span className="font-semibold">contributory factors</span> that led staff to breach rules.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-300 text-xl mt-1">⚠️</span>
                                <span>
                                  <span className="font-semibold">Contributory factors</span> may include irregular or unauthorized working methods, or general laxity due to lack of supervision.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-red-300 text-xl mt-1">⛔</span>
                                <span>
                                  The Committee should also examine <span className="font-semibold">compelling circumstances</span> that may have influenced the accident.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-cyan-300 text-xl mt-1">🔧</span>
                                <span>
                                  <span className="font-semibold">Compelling circumstances</span> can include:
                                  <ul className="ml-0 mt-2 space-y-2 list-none">
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-200">📉</span>
                                      <span>Inadequate signalling, interlocking, or safety devices (e.g., key box, point indicator)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-200">📞</span>
                                      <span>Insufficient or absent communication equipment, causing frequent long-distance trips by staff</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-200">⏰</span>
                                      <span>Impossibility of performing all duties during peak periods</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-200">👥</span>
                                      <span>Shortage of minimum required staff</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-200">📋</span>
                                      <span>Difficulty in complying with Station Working Rules</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-200">🕒</span>
                                      <span>Staff working overtime due to lack of timely relief</span>
                                    </li>
                                  </ul>
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-300 text-xl mt-1">📝</span>
                                <span>
                                  Great care should be taken in assessing these compelling circumstances. The standards considered desirable should be related to the station&apos;s workload and compared with standards at similar stations.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section e */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-pink-400 text-xl mt-1">💡</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-pink-400/30">
                              <h4 className="text-lg font-bold text-pink-300 mb-3 text-center">e) Matters Brought to Light</h4>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed">
                              The Inquiry Officer or the committee shall also note &quot;matters brought to light&quot; in the course of the Inquiry, which though not having a direct bearing on the accident may lead to accidents in future.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section f */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 py-3 lg:px-4 px-2">
                      <div className="space-y-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="text-teal-400 text-xl mt-1">👥</span>
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 lg:p-4 py-3 lg:px-4 px-2 rounded-xl border border-teal-400/30">
                              <h4 className="text-lg font-bold text-teal-300 mb-3 text-center">f) Joint Inquiry Participation</h4>
                            </div>
                            
                            <ul className="space-y-3 text-gray-200 leading-relaxed">
                              <li className="flex items-start gap-2">
                                <span className="text-teal-300 text-xl mt-1">🚫</span>
                                <span>
                                  Members of the Magistracy and Police <span className="font-semibold">do not need to attend</span> the deliberations regarding the findings in a Joint Inquiry.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-teal-300 text-xl mt-1">✍️</span>
                                <span>
                                  They <span className="font-semibold">are not required to sign</span> the Joint Inquiry proceedings.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-teal-300 text-xl mt-1">❓</span>
                                <span>
                                  However, they <span className="font-semibold">may ask questions</span> during the examination of witnesses.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-teal-300 text-xl mt-1">📝</span>
                                <span>
                                  The <span className="font-semibold">answers to such questions</span> can be recorded as part of the proceedings.
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

export default AMChapterPage104D
