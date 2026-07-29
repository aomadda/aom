'use client'
import React from 'react'
import { 
  Scale,
  Users
} from 'lucide-react'

const DARule24 = () => {
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
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                24. Special provisions for non-gazetted staff
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-start gap-4">
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-cyan-300/50">
                        1
                      </span>
                      <span className="pt-2">Where the penalty of dismissal, removal, compulsory retirement, reduction or withholding of increment has been imposed, the appellate authority may, at its discretion and if it considers it necessary, give the non-gazetted Railway servant a personal hearing before disposing of the appeal. At this personal hearing, the Railway servant may be accompanied, if he so chooses, by another Railway servant employed on the same Railway Administration, Office of the Railway Board, its attached office or subordinate office, as the case may be, in which the appellant was or is working or an official (who is not a legal practitioner) of a Railway Trade Union recognized by the Railway Administration on which the appellant was or is employed.</span>
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
                      <span className="pt-2">A Group &apos;C&apos; Railway servant who has been dismissed, removed or compulsorily retired from service may, after his appeal to the appropriate appellate authority has been disposed of, and within 45 days thereafter, apply to the General Manager for a revision of the penalty imposed on him. In this application, he may, if he so chooses, request the General Manager to refer the case to the Railway Rates Tribunal for advice before he disposes of the revision petition. On receipt of such a request, the General Manager shall refer the case to the Chairman, Railway Rates Tribunal for advice sending all the relevant papers.</span>
                    </div>
                    <div className="ml-0">
                      On receipt of the revision application by the General Manager, or on receipt of advice from the Railway Rates Tribunal, as the case may be, the General Manager shall dispose of the application in accordance with the procedure laid down in Rule 25 and pass such orders as he may think fit:
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                        <div className="flex items-center justify-center flex-col gap-3">
                          <span className="text-purple-200 font-semibold shrink-0">Provided that</span>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-center flex-col gap-2">
                              <span className="text-purple-200">-</span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed">the procedure mentioned in this sub-rule shall not apply in cases where the General Manager or the Railway Board are the Appellate Authority:</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-2 mt-2">
                              <span className="text-purple-200 font-semibold shrink-0">Provided further that</span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed">where a revision application has been disposed of by the General Manager under this sub-rule, no further revision shall lie under Rule 25.</span>
                            </div>
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
                  
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-3 flex-1">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-indigo-500 via-violet-400 to-indigo-600 text-white font-extrabold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg shrink-0 flex items-center justify-center min-w-12 border-2 border-violet-300/50">
                        3
                      </span>
                      <span className="pt-2">A Group &apos;D&apos; Railway servant, who has been dismissed, removed or compulsorily retired from service may, after his appeal to the appropriate appellate authority has been disposed of and within 45 days thereafter, apply to the Divisional Railway Manager and where he is not under the control of any Divisional Railway Manager to the senior-most Administrative Grade Officer under whose control he may be working, for a revision of the penalty imposed on him. The Divisional Railway Manager or the senior-most Administrative Grade Officer, as the case may be, shall thereafter dispose of the revision application in accordance with the procedure laid down in Rule 25 and pass such orders as he may think fit:</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-indigo-900/30 rounded-lg p-3 border border-indigo-400/30">
                        <div className="flex items-center justify-center flex-col gap-3">
                          <span className="text-indigo-200 font-semibold shrink-0">Provided that</span>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-center flex-col gap-2">
                              <span className="text-indigo-200">-</span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed">the procedure mentioned in this sub-rule shall not apply where the Divisional Railway Manager or the senior-most Administrative Grade Officer or any higher authority, as the case may be, is the appellate authority:</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-2 mt-2">
                              <span className="text-indigo-200 font-semibold shrink-0">Provided further that</span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed">where a revision application has been disposed of by the Divisional Railway Manager or the senior-most Administrative Grade Officer under this sub-rule, no further revision shall lie under Rule 25.</span>
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

export default DARule24