'use client'
import React from 'react'
import { 
  Scale,
} from 'lucide-react'

const DARule14 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PROCEDURE FOR IMPOSING PENALTIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                
                14. Special procedure in certain cases
              </h2>

              {/* Main Content */}
              <div className="bg-linear-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    Notwithstanding anything contained in Rules 9 to 13 -
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-4 bg-white/5 rounded-lg p-3 border border-red-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-red-500 to-orange-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">where any penalty is imposed on a Railway servant on the ground of conduct which has led to his conviction on a criminal charge; or</span>
                      </div>
                      <div className="flex items-start gap-4 bg-white/5 rounded-lg p-3 border border-red-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-orange-500 to-red-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">where the disciplinary authority is satisfied, for reasons to be recorded by it in writing, that it is not reasonably practicable to hold an inquiry in the manner provided in these rules; or</span>
                      </div>
                      <div className="flex items-start gap-4 bg-white/5 rounded-lg p-3 border border-red-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-red-500 to-orange-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          iii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">where the President is satisfied that in the interest of the security of the State, it is not expedient to hold an inquiry in the manner provided in these rules;</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      the disciplinary authority may consider the circumstances of the case and make such orders thereon as it deems fit:
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-red-900/30 rounded-lg p-4 border border-red-400/30">
                        <span className="font-semibold text-yellow-300">Provided that</span> the Railway servant may be given an opportunity of making representation on the penalty proposed to be imposed before any order is made in a case falling under clause (i) above:
                      </div>
                      <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-400/30">
                        <span className="font-semibold text-yellow-300">Provided further that</span> the Commission shall be consulted where such consultation is necessary, before any orders are made in any case under this rule.
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

export default DARule14