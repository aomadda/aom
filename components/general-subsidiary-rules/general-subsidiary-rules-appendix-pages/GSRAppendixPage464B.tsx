"use client"
import React from 'react'

const GSRAppendixPage464B = () => {
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
              3. RELAY ROOM REGISTER:
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                <div className="space-y-4 lg:space-y-5">
                  {[
                    { num: "3.1", text: "A Register shall be kept in the Station Master's/Cabin SM's office in which the S&T staff intending to carry out the work requiring the opening of Relay Room should make suitable entries." },
                    { num: "3.2", text: "After ascertaining the entries made by S&T official are proper and in order, the Station Master/Cabin SM shall handover the key to the S&T Maintainer duly appending his signature also in the register." },
                    { num: "3.3", text: "After carrying out the work and locking the Relay Room, the Signal Maintainer/JE/SSE shall return the SM's key to Station Master. Both shall sign in the register indicating the date and time of returning the key." }
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
                  
                  {/* Point 3.4 with Table */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                    <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                      <div className="flex items-center gap-4">
                        <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                          3.4
                        </span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                      </div>
                      <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                        <p>Following is the proforma of SM&apos;s Relay Room key register –</p>
                        
                        {/* Table */}
                        <div className="mt-6 overflow-x-auto">
                          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6">
                            <table className="w-full text-sm lg:text-base text-blue-100/90 border-collapse">
                              <thead>
                                <tr className="border-b border-white/20">
                                  <th className="p-2 text-left font-semibold text-white/90">S.No.</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Date&<br/>Time</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Name and<br/>designation of<br/>Supervisor<br/>carrying out works</th>
                                  <th className="p-2 text-left font-semibold text-white/90">No. of<br/>Railway<br/>staff<br/>working<br/>inside Relay<br/>Room</th>
                                  <th className="p-2 text-left font-semibold text-white/90">No. of<br/>contractual<br/>staff working<br/>inside Relay<br/>Room</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Details of<br/>the work<br/>to<br/>be done</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Whether<br/>work<br/>involves<br/>disconnection</th>
                                  <th className="p-2 text-left font-semibold text-white/90">If so,<br/>whether<br/>disconnection<br/>is obtained</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Counter<br/>no.<br/>before<br/>extracting<br/>the key</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Counter<br/>no.<br/>after<br/>extracting<br/>the key</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Signature<br/>of<br/>S&T staff<br/>taking over<br/>the key</th>
                                  <th className="p-2 text-left font-semibold text-white/90">Signature<br/>of SM<br/>Handing<br/>over the<br/>key</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-white/10">
                                  <td className="p-2">1</td>
                                  <td className="p-2">2</td>
                                  <td className="p-2">3</td>
                                  <td className="p-2">4</td>
                                  <td className="p-2">5</td>
                                  <td className="p-2">6</td>
                                  <td className="p-2">7</td>
                                  <td className="p-2">8</td>
                                  <td className="p-2">9</td>
                                  <td className="p-2">10</td>
                                  <td className="p-2">11</td>
                                  <td className="p-2">12</td>
                                </tr>
                                <tr>
                                  <td colSpan={12} className="p-2 pt-4">
                                    <table className="w-full border-collapse">
                                      <thead>
                                        <tr className="border-b border-white/20">
                                          <th className="p-2 text-left font-semibold text-white/90">Date & Time of<br/>Relay Room key<br/>returned by S&T<br/>official</th>
                                          <th className="p-2 text-left font-semibold text-white/90">Signature of S&T<br/>official handing over<br/>the relay room key</th>
                                          <th className="p-2 text-left font-semibold text-white/90">Signature of SM<br/>taking over relay<br/>room key</th>
                                          <th className="p-2 text-left font-semibold text-white/90">Remarks</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="p-2">13</td>
                                          <td className="p-2">14</td>
                                          <td className="p-2">15</td>
                                          <td className="p-2">16</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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

export default GSRAppendixPage464B