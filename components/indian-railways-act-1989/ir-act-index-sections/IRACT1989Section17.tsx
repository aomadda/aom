'use client'
import React from 'react'
import { 
  Scale,
  FileText
} from 'lucide-react'

const IRACT1989Section17 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4 flex items-center justify-center gap-4">
              <span>CHAPTER IV - CONSTRUCTION AND MAINTENANCE OF WORKS</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Additional Accommodation Works Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-cyan-400/50 shrink-0">
                    17
                  </span>
                  <span className="text-center">Power of owner, occupier, State Government or local authority to cause additional accommodation works to be made</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-cyan-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      1
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If an owner or occupier of any land affected by a railway considers the works made under section 16 to be insufficient for the use of the land, or if the State Government or a local authority desires to construct a public road or other work across, under or over a railway, such owner or occupier, or, as the case may be, the State Government or the local authority may, at the time, require the railway administration to make at the expense of the owner or occupier or of the State Government or the local authority, as the case may be, such further accommodation works as are considered necessary and are to be by the railway administration.
                    </span>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      The accommodation works made under sub-section (1) shall be maintained at the cost of the owner or occupier of the land, the State Government or the local authority, at whose request the works were made.
                    </span>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-600 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      3
                    </span>
                    <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      <p className="mb-4">
                        In the case of any difference of opinion between the railway administration and the owner or occupier, the State Government or the local authority, as the case may be, in relation to -
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-400/30 to-blue-500/30 text-cyan-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            i
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            the necessity of such further accommodation works ; or
                          </span>
                        </div>
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-400/30 to-blue-500/30 text-cyan-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            ii
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            the expenses to be incurred on the construction of such further accommodation works ; or
                          </span>
                        </div>
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-400/30 to-blue-500/30 text-cyan-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            iii
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            the quantum of expenses on the maintenance of such further accommodation works,
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-3">
                        it shall be referred to the Central Government whose decision thereon shall be final.
                      </p>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 mt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3 ml-4">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 17, sub-section (1) provides that an owner or occupier of any land or the State Government or a local authority desiring any additional accommodation work may require the railway administration to carry out such work at the cost of such owner, occupier, the State Government or the local authority.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (2) provides that the works carried on under sub-section (1) shall be maintained at the cost of the owner, occupier, the State Government or the local authority at whose request the works were done.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-clause (3) lays down that in case of any difference between the railway administration and the owner, occupier or the State Government or the local authority, in relation to the necessity of or expenses incurred on the construction of accommodation works, the same shall be referred to the Central Government whose decision thereon shall be final.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Indian Railways Act 1989 - Chapter IV
            </p>
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

export default IRACT1989Section17