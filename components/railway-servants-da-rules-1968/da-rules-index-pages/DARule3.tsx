'use client'
import React from 'react'
import { 
  Scale,
  Target
} from 'lucide-react'

const DARule3 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - I</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">GENERAL</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Railway Servants (Discipline & Appeal) Rules, 1968 - Rule 3
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Application */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                3. Application
              </h2>
              
              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center gap-4 flex-col mb-6">
                  <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 mr-4 border-4 border-cyan-300 animate-fade-in">
                    1
                  </span>
                  <h3 className="text-xl lg:text-xl font-bold text-cyan-200 text-center bg-linear-to-r from-cyan-300 via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-slow">
                    These rules shall apply to every Railway servant but shall not apply to -
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        a
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed text-center">
                        any member of the All India Services;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        b
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed text-center">
                        any member of the Railway Protection Force as defined in the Railway Protection Force Act, 1957 (23 of 1957);
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        c
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed text-center">
                        any person in casual employment; and
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        d
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed text-center">
                        any person for whom special provision is made, in respect of matters covered by these rules by or under any law for the time being in force or by or under any agreement entered into by or with the previous approval of the President before or after the commencement of these rules, in regard to matters covered by such special provisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="flex items-center justify-center flex-col gap-3 mb-2">
                  <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center shrink-0">
                    2
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    Notwithstanding anything contained in sub-rule (1), the President may, by order, exclude any class of Railway servants from the operation of all or any of these rules.
                  </span>
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
        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default DARule3