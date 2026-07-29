"use client"
import React from 'react'

const AMChapterPage4C = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-slate-400/20 to-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-zinc-400/20 to-gray-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-gray-400/10 to-slate-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-slate-500/20 to-gray-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-slate-500 to-gray-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-slate-100 to-gray-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-300 mb-4">UNUSUAL INCIDENTS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-slate-500 to-gray-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding law and order related railway incidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.14 - Unusual Incidents */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-slate-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.14</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-slate-400 to-gray-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Unusual Incidents
                    </h3>
                    <div className="bg-linear-to-r from-slate-500/10 to-gray-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-slate-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-start gap-3">
                          <span>
                            These include cases related to law and order resulting in train accidents or not resulting in train accidents and other incidents as follows:
                          </span>
                        </p>
                        <ul className="space-y-6">
                          {/* a) Security incidents */}
                          <li className="flex gap-4 items-start group">
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-tr from-red-500 via-pink-500 to-orange-400 shadow-lg ring-4 ring-red-400/30 text-white font-extrabold text-xl group-hover:scale-110 transition-transform duration-200 select-none drop-shadow-lg">
                              a
                            </span>
                            <div className="flex-1">
                              <span className="text-red-200 font-bold text-lg group-hover:text-red-300 transition-colors tracking-wide">
                                Security incidents
                              </span>
                              <div className="text-gray-100 mt-1 text-base">
                                Attempted Train wrecking, Train wrecking, Bomb Blast, Explosion, Hijacking, or Sabotage 
                                <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-red-600/90 text-white shadow-lg align-middle">Class N</span>
                              </div>
                            </div>
                          </li>

                          {/* b) Personal accidents */}
                          <li className="flex gap-4 items-start group">
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-tr from-yellow-400 via-orange-400 to-yellow-500 shadow-lg ring-4 ring-yellow-400/30 text-white font-extrabold text-xl group-hover:scale-110 transition-transform duration-200 select-none drop-shadow-lg">
                              b
                            </span>
                            <div className="flex-1">
                              <span className="text-yellow-200 font-bold text-lg group-hover:text-yellow-300 transition-colors tracking-wide">
                                Personal accidents
                              </span>
                              <div className="text-gray-100 mt-1 text-base">
                                Persons falling out of train or run over 
                                <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-yellow-600/90 text-white shadow-lg align-middle">Class P</span>
                              </div>
                            </div>
                          </li>

                          {/* c) Other incidents */}
                          <li className="flex gap-4 items-start group">
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-tr from-blue-500 via-indigo-500 to-blue-400 shadow-lg ring-4 ring-blue-400/30 text-white font-extrabold text-xl group-hover:scale-110 transition-transform duration-200 select-none drop-shadow-lg">
                              c
                            </span>
                            <div className="flex-1">
                              <span className="text-blue-200 font-bold text-lg group-hover:text-blue-300 transition-colors tracking-wide">
                                Other incidents
                              </span>
                              <div className="text-gray-100 mt-1 text-base">
                                Accidental death, Natural death, Murder, Suicide, Robbery, or Blockade to train services 
                                <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-blue-600/90 text-white shadow-lg align-middle">Class Q</span>
                              </div>
                            </div>
                          </li>

                          {/* d) Miscellaneous */}
                          <li className="flex gap-4 items-start group">
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-tr from-green-500 via-teal-500 to-lime-400 shadow-lg ring-4 ring-green-400/30 text-white font-extrabold text-xl group-hover:scale-110 transition-transform duration-200 select-none drop-shadow-lg">
                              d
                            </span>
                            <div className="flex-1">
                              <span className="text-green-200 font-bold text-lg group-hover:text-green-300 transition-colors tracking-wide">
                                Miscellaneous
                              </span>
                              <div className="text-gray-100 mt-1 text-base">
                                Vehicles running away, Train running over cattle, Floods, Breaches, Landslides, etc. 
                                <span className="ml-2 px-2 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white shadow-lg align-middle">Class R</span>
                              </div>
                            </div>
                          </li>
                        </ul>
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

export default AMChapterPage4C