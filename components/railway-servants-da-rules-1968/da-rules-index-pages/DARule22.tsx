'use client'
import React from 'react'
import { 
  Scale,
  CheckCircle2
} from 'lucide-react'

const DARule22 = () => {
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
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <CheckCircle2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                22. Consideration of appeal
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="pt-2">In the case of an appeal against an order of suspension, the appellate authority shall consider whether in the light of the provisions of Rule 5 and having regard to the circumstances of the case, the order of suspension is justified or not and confirm or revoke the order accordingly.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-pink-300/50">
                        2
                      </span>
                      <span className="pt-2">In the case of an appeal against an order imposing any of the penalties specified in Rule 6 or enhancing any penalty imposed under the said rule, the appellate authority shall consider :-</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">whether the procedure laid down in these rules has been complied with, and if not, whether such non-compliance has resulted in the violation of any provisions of the Constitution of India or in the failure of justice;</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">whether the findings of the disciplinary authority are warranted by the evidence on the record; and</span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          c
                        </span>
                        <div className="flex-1 pt-1">
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">whether the penalty or the enhanced penalty imposed is adequate, inadequate or severe; and pass orders:-</span>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-center flex-col gap-3 bg-purple-900/20 rounded p-2 border border-purple-500/20">
                              <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                                i
                              </span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">confirming, enhancing, reducing or setting aside the penalty; or</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 bg-purple-900/20 rounded p-2 border border-purple-500/20">
                              <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-semibold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                                ii
                              </span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">remitting the case to the authority which imposed or enhanced the penalty or to any other authority with such directions as it may deem fit in the circumstances of the case:</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                        <div className="font-semibold text-yellow-300 mb-3">Provided that -</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-2 border border-purple-400/20">
                            <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              i
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the Commission shall be consulted in all cases where such consultation is necessary;</span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-2 border border-purple-400/20">
                            <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              ii
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">if the enhanced penalty which the appellate authority proposes to impose is one of the penalties specified in clauses (v) to (ix) of Rule 6 and an inquiry under Rule 9 has not already been held in the case, the appellate authority shall, subject to the provisions of Rule 14, itself hold such inquiry or direct that such inquiry be held in accordance with the provisions of Rule 9 and thereafter, on a consideration of the proceedings of such inquiry, make such orders as it may deem fit;</span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-2 border border-purple-400/20">
                            <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              iii
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">if the enhanced penalty which the appellate authority proposes to impose, is one of the penalties specified in clauses (v) to (ix) of Rule 6 and an inquiry under Rule 9 has already been held in the case, the appellate authority shall, make such orders as it may deem fit;</span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-2 border border-purple-400/20">
                            <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              iv
                            </span>
                            <div className="flex-1 pt-1">
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed">subject to the provisions of Rule 14, the appellate authority shall –</span>
                              <div className="mt-2 space-y-1">
                                <div className="flex items-center justify-center flex-col gap-2 bg-purple-800/30 rounded p-1.5 border border-purple-400/30">
                                  <span className="bg-linear-to-r from-purple-400 to-pink-400 text-white font-medium px-1.5 py-0.5 rounded-full shrink-0 min-w-6 text-center text-xs">
                                    a
                                  </span>
                                  <span className="text-gray-200 lg:text-base text-sm leading-relaxed">where the enhanced penalty which the appellate authority proposes to impose, is the one specified in clause (iv) of Rule 6 and falls within the scope of the provisions contained in sub-rule (2) of Rule 11; and</span>
                                </div>
                                <div className="flex items-center justify-center flex-col gap-2 bg-purple-800/30 rounded p-1.5 border border-purple-400/30">
                                  <span className="bg-linear-to-r from-pink-400 to-purple-400 text-white font-medium px-1.5 py-0.5 rounded-full shrink-0 min-w-6 text-center text-xs">
                                    b
                                  </span>
                                  <span className="text-gray-200 lg:text-base text-sm leading-relaxed">where an inquiry in the manner laid down in Rule 9, has not already been held in the case, itself hold such inquiry or direct that such inquiry be held in accordance with the provisions of Rule 9 and thereafter, on a consideration of the proceedings of such inquiry, pass such orders as it may deem fit; and</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-4 bg-white/5 rounded-lg p-2 border border-purple-400/20">
                            <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              v
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">no order imposing an enhanced penalty shall be made in any other case unless the appellant has been given a reasonable opportunity, as far as may be, in accordance with the provisions of Rule 11, of making a representation against such enhanced penalty.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-linear-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-indigo-500 via-violet-400 to-indigo-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-violet-300/50">
                        3
                      </span>
                      <span className="pt-2">In an appeal against any other order specified in Rule 18, the appellate authority shall consider all the circumstances of the case and make such orders as it may deem just and equitable.</span>
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

export default DARule22