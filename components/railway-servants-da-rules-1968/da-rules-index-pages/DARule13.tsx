'use client'
import React from 'react'
import { 
  Scale,
  Users,
} from 'lucide-react'

const DARule13 = () => {
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
                <span className="bg-linear-to-r from-blue-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                13. Common proceedings
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3 mb-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="pt-2">Where two or more Railway servants are concerned in any case, the President or any other authority competent to impose the penalty of dismissal from service on all such Railway servants, may make an order directing that disciplinary action against all of them may be taken in a common proceedings.</span>
                    </div>
                    <div className="mt-4 bg-blue-900/30 rounded-lg p-4 border border-blue-400/30">
                      <span className="font-semibold text-yellow-300">Note:</span> - If the authorities competent to impose the penalty of dismissal on such Railway servants are different, an order for taking disciplinary action in a common proceeding may be made by the highest of such authorities with the consent of the others.
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-r from-purple-500 via-pink-400 to-purple-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-pink-300/50">
                        2
                      </span>
                      <span className="pt-2">Any such order shall specify -</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">the authority which may function as the disciplinary authority for the purpose of such common proceedings;</span>
                      </div>
                      <div className="flex items-start gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          ii
                        </span>
                        <div className="flex-1 pt-1">
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed">the penalties specified in Rule 6 which such disciplinary authority shall be competent to impose;</span>
                          <div className="mt-2 bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                            <span className="font-semibold text-yellow-300">provided that</span> such authority shall not impose the penalties specified in clauses (vii) to (ix) of that rule if that authority is subordinate to the Appointing Authority;
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 bg-white/5 rounded-lg p-3 border border-purple-400/20 hover:bg-white/10 transition-colors">
                        <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md shrink-0 min-w-10 text-center text-sm">
                          iii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">whether the procedure laid down in Rule 9 and Rule 10 or Rule 11 shall be followed in the proceedings.</span>
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

export default DARule13