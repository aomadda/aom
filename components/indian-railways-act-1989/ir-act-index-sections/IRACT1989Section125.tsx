'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section125 = () => {
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
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2 flex items-center justify-center gap-4">
              <span>CHAPTER XIII</span>
            </h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Liability of Railway Administration for Death and injury to passengers due to accidents.</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 125 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    125
                  </span>
                  <span className="text-center">Application for compensation.</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        1
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        An application for compensation under section 124 (or Sec.124-A) may be made to the Claims Tribunal –
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          by the person who has sustained the injury or suffered any loss. Or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          by any agent duly authorized by such person in this behalf. Or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          c
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          where such person is minor, by his guardian or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          d
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          where death has resulted from the accident (or the untoward incident ) by any dependant of the deceased or where such a dependant is a minor, by his guardian.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      Every application by a dependant for compensation under this section shall be for the benefit of every other dependent.
                    </span>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 125 lays down the persons who can make an application for compensation under sec.124 and the time limit within which such application may be made.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Retrospective effect.- In view of the fact that the rights are to be determined at the time of commencement of the lis, and that Chapter XIII of the Railway Act,1989 has not been made retrospectively applicable, expressly or by implication, therefore, subsequent change in law cannot be taken into consideration for holding the application for compensation filed under Sec.82© of the old act 1890 as maintainable, as the appellants do not fall within the definition of &quot;dependant&quot; as given in Explanation after sub-section(3) of Sec.82-C of the old act 1890 and the meaning assigned to it under sec.2(d) of the workmen&apos;s Compensation Act.
                      </p>
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

export default IRACT1989Section125
