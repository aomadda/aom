'use client'
import React from 'react'
import { 
  Scale,
  RefreshCcw
} from 'lucide-react'

const DARule25 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - VI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">REVISION AND REVIEW</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Rule 25 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <RefreshCcw className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                25. Revision
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="pt-2">Notwithstanding anything contained in these rules -</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the President, or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the Railway Board, or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          iii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the General Manager of a Railway Administration or an authority of that status in the case of a Railway servant serving under his control, or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          iv
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the appellate authority not below the rank of a Divisional Railway Manager in cases where no appeal has been preferred, or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          v
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">any other authority not below the rank of Deputy Head of Department in the case of a Railway servant serving under his control -</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      may at any time, either on his or its own motion or otherwise, call for the records of any inquiry and revise any order made under these rules or under the rules repealed by Rule 29, after consultation with the Commission, where such consultation is necessary, and may -
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center flex-col gap-2 bg-blue-900/20 rounded-lg p-3 border border-blue-500/20 hover:bg-blue-900/30 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">confirm, modify or set aside the order; or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-blue-900/20 rounded-lg p-3 border border-blue-500/20 hover:bg-blue-900/30 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">confirm, reduce, enhance or set aside the penalty imposed by the order, or impose any penalty where no penalty has been imposed; or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-blue-900/20 rounded-lg p-3 border border-blue-500/20 hover:bg-blue-900/30 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          c
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">remit the case to the authority which made the order or to any other authority directing such authority to make such further inquiry as it may consider proper in the circumstances of the case; or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-blue-900/20 rounded-lg p-3 border border-blue-500/20 hover:bg-blue-900/30 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          d
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">pass such orders as it may deem fit:</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/30">
                        <div className="font-semibold text-yellow-300 mb-3">Provided that -</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-2 border border-blue-400/20">
                            <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              a
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">no order imposing or enhancing any penalty shall be made by any revising authority unless the Railway servant concerned has been given a reasonable opportunity of making a representation against the penalty proposed;</span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-2 border border-blue-400/20">
                            <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              b
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">subject to the provisions of Rule 14, where it is proposed to impose any of the penalties specified in clauses (v) to (ix) of Rule 6 or the penalty specified in clause (iv) of Rule 6 which falls within the scope of the provisions contained in sub-rule (2) of Rule 11 or to enhance the penalty imposed by the order under revision to any of the penalties specified in this sub-clause, no such penalty shall be imposed except after following the procedure for inquiry in the manner laid down in Rule 9, unless such inquiry has already been held, and also except after consultation with the Commission, where such consultation is necessary.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-pink-300/50">
                        2
                      </span>
                      <span className="pt-2">No proceeding for revision shall be commenced until after -</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the expiry of the period of limitation for appeal; or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the disposal of the appeal where any such appeal has been preferred:</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="text-purple-200 font-semibold shrink-0">Provided that</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the provisions of this sub-rule shall not apply to the revision of punishment in case of Railway accidents.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-linear-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-indigo-500 via-violet-400 to-indigo-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-violet-300/50">
                        3
                      </span>
                      <span className="pt-2">An application for revision shall be dealt with in the same manner as if it were an appeal under these rules.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        4
                      </span>
                      <span className="pt-2">No power of revision shall be exercised under this rule -</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">by the appellate or revising authority where it has already considered the appeal or the case and passed orders thereon; and</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-blue-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">by a revising authority unless it is higher than the appellate authority where an appeal has been preferred or where no appeal has been preferred and the time limit laid down for revision by the appellate authority, has expired:</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/30">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="text-cyan-200 font-semibold shrink-0">Provided that</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">nothing contained in clauses (i) and (ii) above, shall apply to revision by the President.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (5) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-pink-300/50">
                        5
                      </span>
                      <span className="pt-2">No action under this rule shall be initiated by -</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">an appellate authority other than the President; or</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the revising authorities mentioned in item (v) of sub-rule (1) -</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      after more than six months from the date of the order to be revised in cases where it is proposed to impose or enhance a penalty or modify the order to the detriment of the Railway servant; or more than one year after the date of the order to be revised in cases where it is proposed to reduce or cancel the penalty imposed or modify the order in favour of the Railway servant:
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="text-purple-200 font-semibold shrink-0">Provided that</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">when revision is undertaken by the Railway Board or the General Manager of a Zonal Railway or an authority of the status of a General Manager in any other Railway Unit or Administration when they are higher than the appellate Authority, and by the President even when he is the appellate authority, this can be done without restriction of any time limit.</span>
                        </div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="text-purple-200 font-semibold shrink-0">Explanation:</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">For the purposes of this sub-rule the time limits for revision of cases shall be reckoned from the date of issue of the orders proposed to be revised. In cases where original order has been upheld by the appellate authority, the time limit shall be reckoned from the date of issue of the appellate orders.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 25-A */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-indigo-500 to-violet-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <RefreshCcw className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                25-A. Review
              </h2>

              {/* Main Content */}
              <div className="bg-linear-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div>
                      The President may at any time either on his own motion or otherwise review any order passed under these rules when any new material or evidence which could not be produced or was not available at the time of passing the order under review and which has the effect of changing the nature of the case has come or has been brought to his notice:
                    </div>
                    <div className="mt-4">
                      <div className="bg-indigo-900/30 rounded-lg p-3 border border-indigo-400/30">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="text-indigo-200 font-semibold shrink-0">Provided that</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">no order imposing or enhancing any penalty shall be made by the President unless the Railway servant concerned has been given a reasonable opportunity of making a representation against the penalty proposed or where it is proposed to impose any of the major penalties specified in Rule 6 or to enhance the minor penalty imposed by the order sought to be reviewed to any of the major penalties and if an enquiry under Rule 9 has not already been held in the case, no such penalty shall be imposed except after inquiring in the manner laid down in Rule 9, subject to the provisions of Rule 14 and except after consultation with the Commission where such consultation is necessary.</span>
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

export default DARule25