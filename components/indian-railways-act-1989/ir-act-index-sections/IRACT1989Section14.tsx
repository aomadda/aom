'use client'
import React from 'react'
import { 
  Scale,
  FileText
} from 'lucide-react'

const IRACT1989Section14 = () => {
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
            
            {/* Temporary entry upon land Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-orange-500 to-red-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-orange-400/50 shrink-0">
                    14
                  </span>
                  <span className="text-center">Temporary entry upon land to remove obstruction, to repair or to prevent accident</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-orange-500 to-red-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-orange-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      1
                    </span>
                    <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      <p className="mb-4">
                        Where in the opinion of a Railway administration -
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-orange-400/30 to-red-500/30 text-orange-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            a
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            there is imminent danger that any tree, post or structure may fall on the railway so as to obstruct the movement of the rolling stock; or
                          </span>
                        </div>
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-orange-400/30 to-red-500/30 text-orange-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            b
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            any tree, post, structure or light obstructs the view of any signal provided for movement of rolling stock; or
                          </span>
                        </div>
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-orange-400/30 to-red-500/30 text-orange-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            c
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            any tree, post or structure obstructs any telephone or telegraph line maintained on it,
                          </span>
                        </div>
                      </div>
                      <p className="mt-4">
                        it may take such steps as may be necessary to avert such danger or remove such obstruction and submit a report thereof to the Central Government in such manner and within such time as may be prescribed.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-red-500 to-orange-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-red-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      <p className="mb-4">
                        Where in the opinion of a railway administration -
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-red-400/30 to-orange-500/30 text-red-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            a
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            a slip or accident has occurred; or
                          </span>
                        </div>
                        <div className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-red-400/30 to-orange-500/30 text-red-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            b
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed flex-1">
                            there is apprehension of any slip or accident to any cutting embankment or other work on a railway,
                          </span>
                        </div>
                      </div>
                      <p className="mt-4">
                        it may enter upon any lands adjoining the railway and do all such works as may be necessary for the purpose of repairing or preventing such slip or accident and submit a report thereof to the Central Government in such manner and within such time as may be prescribed.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-orange-600 to-red-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-orange-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      3
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      The Central Government may, after considering the report under sub-section (1) or sub-section (2), in the interest of public safety, by order, direct the railway administration that further action under sub-section (1) or sub-section (2) shall be stopped or the same shall be subject to such condition as may be specified in that order.
                    </span>
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

export default IRACT1989Section14