'use client'
import React from 'react'
import { 
  Scale,
  RotateCcw
} from 'lucide-react'

const DARule29 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - VII</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MISCELLANEOUS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <RotateCcw className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                29. Repeal and saving
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="pt-2">The Discipline and Appeal Rules for Railway servants, other than those employed in the Railway Protection Force, in force with effect from the 1st August, 1961 and any orders issued thereunder in so far as they are inconsistent with these rules, are hereby repealed:</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/30">
                        <div className="font-semibold text-yellow-300 mb-3">Provided that –</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-2 border border-blue-400/20">
                            <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              a
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">such repeal shall not affect the previous operation of the said rules, or any order made, or anything done, or any action taken, thereunder; and</span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg p-2 border border-blue-400/20">
                            <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold px-2 py-1 rounded-full shadow-sm shrink-0 min-w-8 text-center text-xs">
                              b
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">any proceedings under the said rules, pending at the commencement of these rules, shall be continued and disposed of, as far as may be, in accordance with the provisions of these rules, as if such proceedings were proceedings under these rules.</span>
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
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-pink-300/50">
                        2
                      </span>
                      <span className="pt-2">Nothing in these rules shall be construed as depriving any person to whom these rules apply, of any right of appeal which had accrued to him under the rules or orders in force before the commencement of these rules.</span>
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
                      <span className="pt-2">An appeal pending at the commencement of these rules against an order made before such commencement, shall be considered and orders thereon shall be made, in accordance with these rules, as if such orders were made and the appeal were preferred under these rules.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        4
                      </span>
                      <span className="pt-2">As from the commencement of these rules, any appeal or application for revision and/or review against any orders made before such commencement, shall be preferred or made under these rules, as if such orders were made under these rules:</span>
                    </div>
                    <div className="mt-4">
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/30">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="text-cyan-200 font-semibold shrink-0">Provided that</span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">nothing in these rules shall be construed as reducing any period of limitation for any appeal or revision and/or review provided by any rule in force before the commencement of these rules.</span>
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

export default DARule29