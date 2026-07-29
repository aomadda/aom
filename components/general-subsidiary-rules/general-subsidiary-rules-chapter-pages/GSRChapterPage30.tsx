"use client"

import Image from "next/image"
import React from "react"

const GSRChapterPage30 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.14
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-xl lg:text-5xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              3.14. Shunt signals
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-2 lg:p-10 space-y-8">
                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full space-y-4">
                      <div className="space-y-3 ml-0 lg:ml-8">
                        <div className="space-y-2">
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="shrink-0">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20 bg-linear-to-br from-cyan-600/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                <span className="text-xs lg:text-sm font-bold text-white">a</span>
                              </div>
                            </div>
                            <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                              A Shunt signal is a subsidiary signal and shall be either-
                            </p>
                          </div>
                          <div className="ml-6 lg:ml-10 space-y-2">
                            <div className="flex items-start gap-2 lg:gap-3">
                              <div className="shrink-0">
                                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border border-white/20 bg-linear-to-br from-teal-600/90 via-cyan-600/90 to-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                  <span className="text-xs font-bold text-white">i</span>
                                </div>
                              </div>
                              <p className="text-sm lg:text-base leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                                a white disc with a red bar across it, or
                              </p>
                            </div>
                            <div className="flex items-start gap-2 lg:gap-3">
                              <div className="shrink-0">
                                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border border-white/20 bg-linear-to-br from-teal-600/90 via-cyan-600/90 to-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                  <span className="text-xs font-bold text-white">ii</span>
                                </div>
                              </div>
                              <p className="text-sm lg:text-base leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                                a position light signal.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="shrink-0">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20 bg-linear-to-br from-cyan-600/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                              <span className="text-xs lg:text-sm font-bold text-white">b</span>
                            </div>
                          </div>
                          <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                            Under special instructions, a Shunt signal may be a miniature semaphore arm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">2</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center">
                        Shunt signals control shunting movements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">3</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center">
                        A Shunt signal may be placed on a post by itself or below a Stop signal other than the first Stop signal of a station.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">4</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center">
                        More than one Shunt signal may be placed on the same post and when so placed the topmost Shunt signal shall apply to the extreme left hand line and the second Shunt signal from the top shall apply to the next line from the left and so on.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center">
                        When a Shunt signal is taken &apos;off&apos;, it authorises the Loco Pilot to draw ahead with caution for shunting purposes although Stop signal, if any, above it is at &apos;on&apos;.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">6</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center">
                        When a Shunt signal is placed below a Stop signal, it shall show no light in the &apos;on&apos; position.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center">
                        In case Shunt signals are not provided, hand signals may be used for shunting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">8</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center mb-6">
                        The aspects and indications of a disc type Shunt signal are shown below:-
                      </p>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg">
                          <Image
                            src="/gsr-images/GSRPAGE31A.png"
                            alt="Disc type shunt signal in two-aspect signalling territory"
                            width={887}
                            height={647}
                            className="h-auto w-full rounded-lg"
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg">
                          <Image
                            src="/gsr-images/GSRPAGE31B.png"
                            alt="Disc type shunt signal in multiple-aspect signalling territory"
                            width={918}
                            height={603}
                            className="h-auto w-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">9</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center mb-6">
                        The aspects and indications of a position light type shunt signal are shown below:-
                      </p>
                      <div>
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg">
                          <Image
                            src="/gsr-images/GSRPAGE32A.png"
                            alt="Position light type shunt signal in two-aspect or multiple-aspect territory"
                            width={893}
                            height={650}
                            className="h-auto w-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-blue-500/80 via-indigo-500/80 to-purple-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-lg lg:text-2xl font-bold text-white">10</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide text-center mb-6">
                        The aspects and indications of a semaphore arm type shunt signal are shown below:-
                      </p>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg">
                          <Image
                            src="/gsr-images/GSRPAGE32B.png"
                            alt="Miniature semaphore arm type shunt signal in two-aspect territory"
                            width={937}
                            height={563}
                            className="h-auto w-full rounded-lg"
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg">
                          <Image
                            src="/gsr-images/GSRPAGE33.png"
                            alt="Miniature semaphore arm type shunt signal in multiple-aspect territory"
                            width={871}
                            height={618}
                            className="h-auto w-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-linear-to-br from-emerald-500/80 via-teal-500/80 to-cyan-500/80 rounded-full blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 bg-linear-to-br from-emerald-600/90 via-teal-600/90 to-cyan-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <span className="text-xs lg:text-sm font-bold text-white">S.R.</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full space-y-4">
                      <div>
                        <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide">
                          <span className="font-semibold text-emerald-300">S.R.3.14.1.</span> In case the Shunt signal, including a Shunt signal placed below a Stop signal is defective, the Loco Pilot shall be authorized by a written authority in form No.T/369 (3b) to pass such signal at &apos;on&apos; position. In addition to the written authority, a &apos;Proceed Hand Signal&apos; shall also be exhibited at the foot of the defective Shunt signal.
                        </p>
                      </div>
                      <div>
                        <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide">
                          <span className="font-semibold text-emerald-300">S.R.3.14.2.</span> Gate Stop signals protecting level crossings inside station limits shall be taken &apos;off&apos; for shunt movement past them.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide">
                          <span className="font-semibold text-emerald-300">S.R.3.14.3.</span> Shunting permitted indicators are provided at certain stations.
                        </p>
                        <div className="ml-0 lg:ml-8 space-y-3">
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="shrink-0">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20 bg-linear-to-br from-cyan-600/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                <span className="text-xs lg:text-sm font-bold text-white">1</span>
                              </div>
                            </div>
                            <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                              Shunting permitted indicators are not signals but appliances, which work in conjunction with Stop signals and are provided for shunting movement in either direction in the non-interlocked portion of yard after being isolated from the interlocked portion. It shows in both the directions, by day, a black disc with a yellow cross painted on it and by night, a yellow cross light or both by day and by night a yellow cross light when shunting is permitted.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="shrink-0">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20 bg-linear-to-br from-cyan-600/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                <span className="text-xs lg:text-sm font-bold text-white">2</span>
                              </div>
                            </div>
                            <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                              The person operating the ground lever of a &apos;shunting permitted indicator&apos; for performing shunting shall, before returning the lever to normal, personally ensure that the fouling marks of the concerned points are clear.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="shrink-0">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20 bg-linear-to-br from-cyan-600/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                <span className="text-xs lg:text-sm font-bold text-white">3</span>
                              </div>
                            </div>
                            <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                              When the &apos;Shunting Permitted Indicator&apos; is defective, the Station Master shall arrange to issue to the Loco Pilot T/369 (3b) and Proceed hand signals to be shown at the defective &apos;Shunting Permitted Indicator&apos;.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="shrink-0">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/20 bg-linear-to-br from-cyan-600/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                                <span className="text-xs lg:text-sm font-bold text-white">4</span>
                              </div>
                            </div>
                            <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide flex-1 pt-0.5">
                              Detailed instructions regarding the working of the &apos;shunting permitted indicator&apos; shall be incorporated in the Station Working Rules.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide">
                          <span className="font-semibold text-emerald-300">S.R.3.14.4.</span> The &apos;point indicators&apos;, where provided, shall also be observed during shunting operations.
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
  )
}

export default GSRChapterPage30