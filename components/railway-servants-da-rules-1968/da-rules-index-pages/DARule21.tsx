'use client'
import React from 'react'
import { 
  Scale,
  PenTool
} from 'lucide-react'

const DARule21 = () => {
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
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <PenTool className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                21. Form and contents and submission of appeal
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="pt-2">Every person preferring an appeal shall do so separately and in his own name. An appeal forwarded through or counter-signed by a legal practitioner or an assisting Railway servant or a Railway Trade Union Official shall not be entertained but shall be returned with the direction to submit it under the signature of the appellant only.</span>
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
                      <span className="pt-2">The appeal shall be presented to the authority to whom the appeal lies, a copy being forwarded by the appellant to the authority which made the order appealed against. It shall contain all material statements and arguments on which the appellant relies, shall not contain any disrespectful or improper language and shall be complete in itself.</span>
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
                      <span className="pt-2">The authority which made the order appealed against, shall, on receipt of a copy of the appeal, forward the same with its comments thereon together with the relevant records to the appellate authority without any avoidable delay and without waiting for any direction from the appellate authority.</span>
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

export default DARule21