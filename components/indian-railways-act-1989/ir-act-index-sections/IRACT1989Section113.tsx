'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section113 = () => {
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
              <span>CHAPTER XII</span>
            </h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Accidents</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 113 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    113
                  </span>
                  <span className="text-center">Notice of railway accident</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 text-center">
                      When on any railway an accident of the nature described in sub-section (1) occurs, the station master of the station nearest to the place at which the accident occurs, or where there is no station master , the railway servant in charge of the section of the railway on which the accident occurs, shall give notice of the accident to the District Magistrate and Superintendent of Police, within whose jurisdiction the accident occurs, the officer in charge of the police station within the local limits of which the accident occurs and to such other Magistrate or police officer as may be appointed in this behalf by the Central Government.
                    </p>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 text-center">
                      An accident of the nature described in sub-section (1) means –
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          any accident attended with loss of any human life, or with grievous hurt, as defined in the Indian Penal Code ( 45 of 1860) , or with such serious injury to property as may be prescribed ; or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          any collision between trains of which one is a train carrying passengers ; or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          c
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          the derailment of any train carrying passengers, or of any part of such train; or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          d
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          any accident of a description usually attended with loss of human life or with such grievous hurt as aforesaid or with serious injury to property; or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          e
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          any accident, of any other description which the Central Government may notify in this behalf in the Official Gazette, occurs, or where there is no station master , the railway servant in charge of the section of the railway on which the accident to the District Magistrate and Superintendent of Police, within whose jurisdiction the accident occurs, the officer in charge of the police station within the local limits of which the accident occurs and to such other Magistrate or police officer as may be appointed in this behalf by the Central Government.
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          2
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          The railway administration within whose jurisdiction the accident occurs, as also the railway administration to whom the train involved in the accident belongs, shall without delay, give notice of the accident to the State Government and the Commissioner having jurisdiction over the place of the accident.
                        </span>
                      </div>
                    </div>
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
                        Section 113, sub-section (1) imposes an obligation on the station master or the railway servant in charge of the section where any railway accident takes place to give a notice of such accident to the District Magistrate Superintendent of Police, etc.,
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (2) imposes an obligation on the railway administration to give a notice of such accident to the State Government and the Commissioner.
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

export default IRACT1989Section113
