"use client"
import React from 'react'

const GSRAppendixPage464A = () => {
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
              2. OPENING OF RELAY ROOM:
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                <div className="space-y-4 lg:space-y-5">
                  {[
                    { num: "2.1", text: "The opening of Relay Room shall be arranged by authorised S&T staff only. The Relay Room shall be kept open for a bare minimum time not exceeding The Signal Maintainer of the station, JE/SSE (Signals) of the section and any staff authorised by Sr.DSTE through a signed letter of the authorisation shall constitute the authorised staff." },
                    { num: "2.2", text: "The Signal Maintainer of the station, JE/SSE (Signals) of the section and any staff authorised is permitted to obtain the SM's key by showing their identity card issued by Railways for maintenance/failure attendance." },
                    { num: "2.3", text: "When the relay room is required to be opened for construction /projects/PSUs, such as RVNL/RITES/IRCON and RE works, the concerned Signal Supervisor of the executing agency shall first obtain an authorisation from Sr.DSTE, duly submitting the full details of drawings/ layout plan and plan of activity. On authorisation of Sr.DSTE, they shall produce the letter of authorisation to the Station Master and handover a copy that shall be pasted in the Relay Room key register." },
                    { num: "2.4", text: ". the sealed glass fronted box to authorised S&T staff. The S&T staff shall open the glass fronted box and extract the EKT key. When the EKT is taken out, the counter shall change to next higher number; 'Green' light shall become off and 'Red' light shall glow. The S&T staff shall enter the previous and progressed number in the Relay Room Key register along with other particulars." },
                    { num: "2.5", text: ". shall be made in the Relay Room Key Register before opening and after closing of relay room." },
                    { num: "2.6", text: "Work that takes more than two hours shall have the prior permission from Sr.DSTE. If any work that exceeds two hours unanticipated, concerned S&T official shall make a report on the circumstances that warranted to keep the relay room open beyond the stipulated time to Sr.DSTE, a copy of which shall be pasted in the Relay Room key register." }
                  ].map((item, index) => (
                    <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                      <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                        <div className="flex items-center gap-4">
                          <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                            {item.num}
                          </span>
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                        </div>
                        <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default GSRAppendixPage464A