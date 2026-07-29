'use client'
import React from 'react'
import { 
  Scale,
  Building2
} from 'lucide-react'

const DARule19 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - V</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">APPEALS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-indigo-500 to-violet-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                19. Appellate Authorities
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3 mb-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="text-gray-200 lg:text-base text-sm leading-relaxed">A Railway servant, including a person who has ceased to be in Railway service, may prefer an appeal against all or any of the orders specified in Rule 18 to the authority specified in this behalf either in the Schedules or, where no such authority is specified -</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">where a penalty is imposed by a revising authority under Rule 25, to the authority to which it is immediately subordinate;</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">where a penalty is enhanced, either in appeal or on revision, to the authority to which the authority making the order is immediately subordinate;</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          iii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">in the case of an appeal against an order specified in clause (iv) of Rule 18, relating to a rule, to the authority which appointed the appellant or the authority which made the rule to which the order under appeal relates, whichever of them may be the higher authority, and in the case of an appeal relating to an agreement, to the authority which appointed the appellant;</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          iv
                        </span>
                        <div className="flex-1 pt-1">
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">in case of an appeal against an order specified in clause (v) of Rule 18 -</span>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-center flex-col gap-4 bg-blue-900/20 rounded p-2 border border-blue-500/20">
                              <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-sm">
                                a
                              </span>
                              <span className="text-gray-200 lg:text-sm text-sm leading-relaxed pt-1">in respect of a Railway servant on whom the penalty of dismissal from service can be imposed only by the President, to the President; and</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-4 bg-blue-900/20 rounded p-2 border border-blue-500/20">
                              <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-semibold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-sm">
                                b
                              </span>
                              <span className="text-gray-200 lg:text-sm text-sm leading-relaxed pt-1">in respect of any other Railway servant, to the authority to which the authority making the order is immediately subordinate.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3 mb-3">
                      <span className="bg-linear-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-pink-300/50">
                        2
                      </span>
                      <span className="text-gray-200 lg:text-base text-sm leading-relaxed">Notwithstanding anything contained in sub-rule (1),</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">an appeal against an order in a common proceeding held under Rule 13, shall lie to the authority to which the authority functioning as the disciplinary authority for the purpose of that proceeding, is immediately subordinate;</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <div className="flex-1 pt-1">
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">where the person who made the order appealed against becomes, by virtue of his subsequent appointment or otherwise, the appellate authority in respect of such order, an appeal against such order shall lie to the authority to which such person is immediately subordinate:</span>
                          <div className="flex items-center justify-center flex-col gap-4 bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                            <span className="font-semibold text-yellow-300">Provided that</span> in a case where the appellate authority is the Railway Board, the appeal shall be dealt with by any Member of the Railway Board, who has not made the order appealed against.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-linear-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-indigo-500 via-violet-400 to-indigo-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-violet-300/50">
                        3
                      </span>
                      <span className="text-gray-200 lg:text-base text-sm leading-relaxed">A Railway servant may prefer an appeal against an order imposing any of the penalties specified in Rule 6 to the President, where no such appeal lies to him under sub-rule (1) or sub-rule (2), if such penalty is imposed by any authority other than the President, on such Railway servant in respect of his activities connected with his work as an office bearer of an association, federation or union participating in the Joint Consultation and Compulsory Arbitration Scheme.</span>
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

export default DARule19