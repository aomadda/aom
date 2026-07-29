"use client"
import React from 'react'

const GSRAppendixPage467C = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-6xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              5. Telecommunication:
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">5</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                      <p>
                        The availability of the telecommunication facilities at the station and their operational
                        aspects should be clearly defined:
                      </p>
                      
                      {/* List items */}
                      <div className="space-y-3 mt-4 ml-4">
                        {[
                          { letter: "a", text: "Section Control/Dy. Control/Traction Power Control telephone etc." },
                          { letter: "b", text: "Auto / DOT telephones," },
                          { letter: "c", text: "Magneto telephone with the cabins / gates," },
                          { letter: "d", text: "IBS telephone with IBS at Km. - - - - - -" },
                          { letter: "e", text: "Telephone with axle counter reset boxes," },
                          { letter: "f", text: "Telephone for yard communication," },
                          { letter: "g", text: "VHF sets, and" },
                          { letter: "h", text: "Mobile Train Radio Communication (MTRC)" }
                        ].map((item, index) => (
                          <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold text-cyan-100 flex items-center justify-center">
                                {item.letter}
                              </span>
                              <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="mt-4">
                        The action to be taken in case of failure of communication(s) given above has to be
                        clearly spelt out.
                      </p>
                      
                      {/* Note */}
                      <div className="relative overflow-hidden rounded-xl border border-indigo-400/30 bg-indigo-500/10 p-4 mt-4">
                        <p className="text-sm italic text-indigo-100/90">
                          (Details of working should be given in appendix &apos;B&apos;)
                        </p>
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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default GSRAppendixPage467C