'use client'
import React from 'react'
import { 
  Scale,
  Fence,
  FileText
} from 'lucide-react'

const IRACT1989Section18 = () => {
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
            
            {/* Fences, gates and bars Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-emerald-500 to-green-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-emerald-400/50 shrink-0">
                    18
                  </span>
                  <span className="text-center">Fences, gates and bars</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-emerald-400/30">
                <div className="space-y-6">
                  {/* Main Content */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3">
                      <span className="bg-linear-to-r from-emerald-500 to-green-500 p-2 rounded-full shrink-0 mt-1">
                        <Fence className="lg:w-6 lg:h-6 w-4 h-4 text-white" />
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-4">
                          The Central Government may, within such time as may be specified by it or within such further time, as it may grant, require that –
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                            <span className="bg-linear-to-br from-emerald-500 to-green-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-emerald-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              a
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                              boundary marks or fences be provided or renewed by a railway administration for a railway or any part thereof and for roads constructed in connection therewith ;
                            </span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                            <span className="bg-linear-to-br from-green-500 to-emerald-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-green-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              b
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                              suitable gates, chains, bars, stiles or hand-rails be erected or renewed by railway administration at level crossings ;
                            </span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                            <span className="bg-linear-to-br from-emerald-600 to-green-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-emerald-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              c
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                              persons be employed by a railway administration to open and shut gates, chains or bars.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 mt-6">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 18 provides that the Central Government may require boundary marks or fences to be provided by a railway administration and further provides that suitable gates, chains, bars, etc. may be erected and renewed at level crossing or that persons be employed by a railway administration to open and close such gates, chains, or bars etc.
                      </p>
                      <div className="mt-3 pt-3 border-t border-blue-400/30">
                        <p className="text-blue-200 font-semibold lg:text-base text-sm mb-2">Obligation on railways to provided fencing, if absolute</p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          There is no duty on the part of the railway administration to fence the Railway line so as to prevent children from getting over the railway tracks. It cannot be the connection that providing fencing to the railway quarters located in the precincts of the station would safeguard the children from going to the line. At any rate, in the present case, there is no evidence whatsoever that the railway quarters of the plaintiff&apos;s father was not provided with fencing. Even if such fencing is provided, the Railways cannot be blamed if children are allowed by the parents to go out of the fencing.
                        </p>
                      </div>
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

export default IRACT1989Section18