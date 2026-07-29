"use client"
import React from 'react'

const GSRAppendixPage445 = () => {
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
              APPENDIX-XI
            </h1>
            <div className="mt-4 inline-flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-white/70"></span>
              <span className="text-lg lg:text-2xl font-semibold text-indigo-200 tracking-[0.35em]">
                INTERLOCKING
              </span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent via-blue-400/50 to-white/70"></span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                {/* I. INTERLOCKING Section */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">I</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      I. INTERLOCKING:
                    </p>

                    {/* 1.1 Definition */}
                    <div className="space-y-4">
                      <p className="font-semibold text-base lg:text-xl text-white/90">
                        1.1. Interlocking can be defined as an arrangement between points, signals and other appliances interconnected electrically or mechanically or both to ensure the following objectives:-
                      </p>

                      {/* Objectives a-f */}
                      <div className="space-y-3 lg:space-y-4">
                        {[
                          { letter: 'a', text: "It shall not be possible to take 'off' signals for a route unless all the points are correctly set and the facing points are locked for that route," },
                          { letter: 'b', text: "Once the signals are cleared, it shall not be possible to alter the points on the route unless the signals are put back to 'on'," },
                          { letter: 'c', text: "Even though the signals are put back to 'on', it shall not be possible to alter the points unless the intended movement over such points is completed," },
                          { letter: 'd', text: "It shall not be possible to operate signals leading to conflicting movements," },
                          { letter: 'e', text: "The points and signals can be operated only in a sequence to ensure safety, and" },
                          { letter: 'f', text: "Where signals are connected to any devices, the signal shall not obey until the conditions for working such devices are fulfilled." }
                        ].map((item, index) => (
                          <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                            <div className="relative flex gap-4 rounded-xl bg-slate-900/50 px-5 py-4 lg:px-6 lg:py-5">
                              <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold tracking-wide text-cyan-100 text-center lg:text-base flex-shrink-0">
                                {item.letter})
                              </span>
                              <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg flex-1 pt-1">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Four Essentials Summary */}
                      <div className="mt-6 space-y-3">
                        <p className="text-base lg:text-lg text-blue-100/90">
                          The above objectives can be summarized as four essentials of interlocking:-
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                          {[
                            { num: 'i', text: 'Setting of route,' },
                            { num: 'ii', text: 'Locking,' },
                            { num: 'iii', text: 'Holding, and' },
                            { num: 'iv', text: 'Prevention of conflicting movements.' }
                          ].map((item, index) => (
                            <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-indigo-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                              <div className="relative flex gap-3 rounded-xl bg-slate-900/50 px-5 py-4 lg:px-6 lg:py-5">
                                <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/10 text-sm font-semibold tracking-wide text-indigo-100 text-center lg:text-base flex-shrink-0">
                                  {item.num})
                                </span>
                                <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg flex-1 pt-1">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1.2 Standards of Interlocking */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">1.2</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-4 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      1.2. Standards of Interlocking
                    </p>
                    <p className="text-base lg:text-lg text-blue-100/90">
                      Depending upon the standards of safety devices provided at the stations, in conformity to the speed factor, there are four standards of interlocking, namely Std I (R), Std II (R), Std III (R) and Std IV (R). The signal equipment, the manner of locking facing points and operation of points and signals differ in the different standards of interlocking.
                    </p>
                  </div>
                </div>

                {/* 1.3 Table Section */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl shadow-purple-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">1.3</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      1.3. Following are the essentials of the minimum signalling features of the four standards of interlocking:-
                    </p>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <div className="inline-block min-w-full">
                        <div className="overflow-hidden rounded-xl border border-white/10">
                          <table className="min-w-full divide-y divide-white/10 bg-slate-900/50">
                            <thead>
                              <tr className="bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30">
                                <th className="px-4 py-3 text-left text-xs lg:text-sm font-semibold text-white/90 uppercase tracking-wider border-r border-white/10">S. No.</th>
                                <th className="px-4 py-3 text-left text-xs lg:text-sm font-semibold text-white/90 uppercase tracking-wider border-r border-white/10">Item</th>
                                <th className="px-4 py-3 text-center text-xs lg:text-sm font-semibold text-white/90 uppercase tracking-wider border-r border-white/10">Std. I (R)</th>
                                <th className="px-4 py-3 text-center text-xs lg:text-sm font-semibold text-white/90 uppercase tracking-wider border-r border-white/10">Std. II (R)</th>
                                <th className="px-4 py-3 text-center text-xs lg:text-sm font-semibold text-white/90 uppercase tracking-wider border-r border-white/10">Std. III (R)</th>
                                <th className="px-4 py-3 text-center text-xs lg:text-sm font-semibold text-white/90 uppercase tracking-wider">Std. IV (R)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10" colSpan={6}>
                                  Allowable speed (KMPH) Upto 50 Upto 110 Upto 140 Upto 160
                                </td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">1</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Isolation</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Compulsory</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">2</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Two Aspect (TAS) semaphore/Multi Aspect Signalling</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">TAS/MAS</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">TAS/MAS</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">MAS</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">MAS</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">3</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Double Distant</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Desirable</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Compulsory</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10" colSpan={6}>
                                  Allowable speed (KMPH) Upto 50 Upto 110 Upto 140 Upto 160
                                </td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">4</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Point operation</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Electrical</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">5</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Point locking</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Key/Facing Point/hand plunger</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Facing Point locking with point machine</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Facing Point locking with point machine</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Clamp type direct locking is desirable</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">6</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Point detection</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Electrical</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">7</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Lock detection</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Compulsory</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">8</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Interlocking</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Key/Mechanical</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical/Electronic</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical/Electrical/Electronic</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Electrical/Electronic</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">9</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Track circuiting</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Mechanical – main line Electrical / Electronic – all running lines</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">All running lines</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">All running lines</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">10</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Block working</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Token</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Token/SGE</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">SGE/Track circuit</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">SGE/Track Circuit</td>
                              </tr>
                              <tr className="bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 font-medium border-r border-white/10">11</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 border-r border-white/10">Preventing signal passing at danger</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not Compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center border-r border-white/10">Not compulsory</td>
                                <td className="px-4 py-3 text-xs lg:text-sm text-blue-100/90 text-center">Desirable</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1.4 Instructions Section */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">1.4</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      1.4. The following instructions shall be taken into consideration while providing the above standards of interlocking:-
                    </p>

                    <div className="space-y-4 lg:space-y-5">
                      {/* Instruction 1 */}
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                        <div className="relative flex flex-col gap-4 rounded-xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                          <div className="flex items-center gap-4">
                            <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                              1
                            </span>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                          </div>
                          <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                            <p>Isolation is not compulsory provided that the conditions laid down in GR 4.11 are complied with.</p>
                            <div className="space-y-2 ml-4 lg:ml-6">
                              <p className="flex gap-2">
                                <span className="text-cyan-300/80 font-medium">a)</span>
                                <span>No train shall run through an interlocked station at a speed exceeding 50 kilometres an hour, or such less speed as may be prescribed by approved special instructions unless the line on which the train is to run has been isolated from all other lines by the setting of points or other approved means, and interlocking is such as to maintain the condition during the passage of the train.</span>
                              </p>
                              <p className="flex gap-2">
                                <span className="text-cyan-300/80 font-medium">b)</span>
                                <span>In every case in which trains are permitted to run through on a non-isolated line, all shunting shall be stopped and no vehicle unattached to an engine or not properly secured in accordance with Rule 5.23 may be kept standing on a connected line which is not isolated from the through line.</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Instruction 2 */}
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                        <div className="relative flex flex-col gap-4 rounded-xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                          <div className="flex items-center gap-4">
                            <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                              2
                            </span>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                          </div>
                          <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                            <p>Double Distant is required on sections where goods trains have a braking distance of more than 1 KM.</p>
                          </div>
                        </div>
                      </div>

                      {/* Instruction 3 */}
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                        <div className="relative flex flex-col gap-4 rounded-xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                          <div className="flex items-center gap-4">
                            <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                              3
                            </span>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                          </div>
                          <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                            <p>At stations provided with central panel interlocking [Std III (R) or Std IV (R)] on high density routes, suitable means for verifying complete arrival of train are required.</p>
                          </div>
                        </div>
                      </div>

                      {/* Note */}
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-indigo-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10 mt-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                        <div className="relative flex flex-col gap-5 rounded-xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                          <div className="space-y-3 text-sm leading-relaxed text-blue-200/80 italic lg:text-base">
                            <p>
                              <span className="font-semibold text-indigo-200/90 not-italic">Note:</span> The provisions of revised standards of interlocking will only apply to future signalling and interlocking installations. Wherever existing installations do not fulfill these requirements, existing speed of operation may be permitted to continue.
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

export default GSRAppendixPage445
