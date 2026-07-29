'use client'
import React from 'react'
import { 
  Scale,
  MessageSquare,
  BookOpen
} from 'lucide-react'

const IRACT1989Section136 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XIV</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Regulation of hours of work and period of rest</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 136 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                136. Power to make rules in respect of matters in this chapter
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          1
                        </span>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          The Central Government may, by notification, make rules to carry out the purposes of this chapter.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          2
                        </span>
                        <div className="flex-1 space-y-3">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            In particular, and without prejudice to the generally of the foregoing power, such rules may be provided for all or any of the following matters, namely;
                          </p>
                          <div className="space-y-3 ml-4">
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                a
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the authorities who may declare the employment of any railway servant essentially intermittent or intensive;
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                b
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the appeals against any such declaration and the manner in which, and the conditions subject to which any such appeal may be filed and heard;
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                c
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the categories of staff that may be specified under subclauses (iv) and (v) of Cl. © of sec. 130;
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                d
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the authorities by whom exemptions under sub-section (4) of sec. 132 or sub-section (3) of sec. 133 may be made;
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                e
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the delegation of power by the authorities referred to in Cl. (d);
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                f
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the railway servants to whom Cl. (ii) of Sub-section (2) of Sec. 133 apply and the periods of rest to be granted to them;
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                g
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                the appointment of supervisors of railway labour and their functions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 136 empowers the Central Government to make rules for carrying out the purposes of Chapter XIV. The matter in respect of which rules are to be made by the central Government are enumerated in sub-section (2).
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

export default IRACT1989Section136