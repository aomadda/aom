"use client"

import Image from "next/image"
import React from "react"

const GSRChapterPage17 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
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
                        3.07
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-xl lg:text-5xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Description of Distant signals and their indications
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-2 lg:p-10 space-y-6">
                {/* Item (1) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-2 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">1</span>
                    </div>
                    <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                      A semaphore Distant signal has a fish-tailed arm.
                    </p>
                  </div>
                </div>

                {/* Item (2) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">2</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        The aspects and indications of a semaphore Distant signal working in the lower quadrant are shown below:-
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col items-center">
                      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950/70 to-blue-900/60 p-4 shadow-xl transition-all duration-300 hover:border-amber-300/30 hover:shadow-amber-500/20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_60%)] opacity-80" />
                        <div className="relative">
                          <Image
                            src="/gsr-images/GSRPAGE18.png"
                            alt="Semaphore distant signal in two-aspect territory"
                            width={820}
                            height={700}
                            className="h-auto w-full rounded-lg object-contain drop-shadow-[0_12px_30px_rgba(251,191,36,0.35)]"
                            priority={false}
                          />
                        </div>
                        <div className="relative mt-4 text-center">
                          <h4 className="text-lg font-semibold text-amber-100">
                            Semaphore Distant Signal – Lower Quadrant
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                            Illustration of caution and proceed aspects for a lower-quadrant semaphore distant signal used in modified lower quadrant signalling territories.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pl-0 lg:pl-14">
                      <p className="mt-3 text-sm lg:text-base text-blue-100/70 tracking-wide italic">
                        Note: This signal shall be provided only in Modified Lower Quadrant signaling.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item (3) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">3</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        The aspects and indications of a semaphore Distant signal working in the upper quadrant are shown below:-
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col items-center">
                      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950/70 to-blue-900/60 p-4 shadow-xl transition-all duration-300 hover:border-amber-300/30 hover:shadow-amber-500/20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_60%)] opacity-80" />
                        <div className="relative">
                          <Image
                            src="/gsr-images/GSRPAGE19.png"
                            alt="Semaphore distant signal in multiple-aspect territory"
                            width={960}
                            height={720}
                            className="h-auto w-full rounded-lg object-contain drop-shadow-[0_12px_30px_rgba(251,191,36,0.35)]"
                            priority={false}
                          />
                        </div>
                        <div className="relative mt-4 text-center">
                          <h4 className="text-lg font-semibold text-amber-100">
                            Semaphore Distant Signal – Upper Quadrant
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                            Depicts caution, attention, and proceed indications of an upper-quadrant semaphore distant signal for multiple-aspect signalling territories.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pl-0 lg:pl-14">
                      <p className="mt-3 text-sm lg:text-base text-blue-100/70 tracking-wide italic">
                        Note: The distance between the two yellow lights shall be 1.5 metres, when this signal displays &apos;Attention&apos; aspect at night.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item (4) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">4</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        The aspects and indications of a colour light Distant signal are shown below:-
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col items-center">
                      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950/70 to-blue-900/60 p-4 shadow-xl transition-all duration-300 hover:border-yellow-300/30 hover:shadow-yellow-500/20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,224,71,0.18),transparent_60%)] opacity-80" />
                        <div className="relative">
                          <Image
                            src="/gsr-images/GSRPAGE20.png"
                            alt="Colour light distant signal aspects"
                            width={960}
                            height={720}
                            className="h-auto w-full rounded-lg object-contain drop-shadow-[0_12px_30px_rgba(253,224,71,0.35)]"
                            priority={false}
                          />
                        </div>
                        <div className="relative mt-4 text-center">
                          <h4 className="text-lg font-semibold text-yellow-100">
                            Colour Light Distant Signal – Multiple Aspect Territory
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                            Visualises caution, attention, and proceed aspects for a colour light distant signal, including the corresponding indications for main and loop lines.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pl-0 lg:pl-14">
                      <p className="mt-3 text-sm lg:text-base text-blue-100/70 tracking-wide italic">
                        Note: The change in aspect or indications of a distant signal is applicable for single distant signal territory and not for double distant territory.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item (5) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">5</span>
                    </div>
                    <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                      A Distant signal shall be located at an adequate distance in rear of the Stop signal, the aspect of which it pre-warns.
                    </p>
                  </div>
                </div>

                {/* Item (6) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">6</span>
                    </div>
                    <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                      Where necessary more than one Distant signal may be provided. In such a case, the outermost signal, to be located at an adequate distance from the first Stop signal, shall be called the Distant signal and the other called the Inner Distant signal, with the Distant signal capable of displaying &apos;Attention&apos; or &apos;Proceed&apos; aspect only.
                    </p>
                  </div>
                </div>

                {/* Item (7) Section */}
                <div className="space-y-4">
                  <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">7</span>
                      </div>
                      <div className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        <p>Under approved special instructions, a colour light Distant signal may be combined with the last Stop signal of a station in rear or with an Intermediate Block signal or with a Stop signal protecting a level crossing. When a colour Distant signal is combined, (i) with the last Stop signal of a station in rear or (ii) with an Intermediate Block signal or (iii) with a Stop signal protecting a level crossing, arrangement shall be such that the signal shall not display a less restrictive aspect than the &apos;stop&apos; aspect till Line Clear has been obtained from the station ahead in case of (i) &amp; (ii) above and until the level crossing gates have been closed and locked for the passage of trains as in case of (iii) above.</p>
                      </div>
                    </div>
                  </div>

                  {/* Provided that section */}
                  <div className="pl-0 lg:pl-14 space-y-3">
                    <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-500/10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-yellow-500/80 to-amber-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-xs lg:text-sm font-bold text-white">P</span>
                        </div>
                        <p className="flex-1 text-sm lg:text-base leading-relaxed text-blue-100/70 tracking-wide pt-1 italic">
                          Provided that, a colour light Distant signal may be permitted to be combined with the last Stop signal of a station in rear or with an Intermediate Block signal or with a Stop signal protecting a level crossing with arrangements as above, by the Sanctioning Authority (in case of item (a) below – Principal Chief Signal and Telecom Engineer of the concerned Zonal Railway, and in case of item (b), (c) and (d) below- General Manager of the concerned Railway) for the purpose of –
                        </p>
                      </div>
                    </div>

                    {/* Items (a), (b), (c), (d) */}
                    <div className="pl-0 lg:pl-14 space-y-3">
                      {/* Item (a) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">a</span>
                          </div>
                          <p className="flex-1 text-sm lg:text-base leading-relaxed text-blue-100/70 tracking-wide pt-1">
                            Interlocking of level crossings outside station limits;
                          </p>
                        </div>
                      </div>

                      {/* Item (b) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">b</span>
                          </div>
                          <p className="flex-1 text-sm lg:text-base leading-relaxed text-blue-100/70 tracking-wide pt-1">
                            Double Distant signaling along with corresponding changes at adjacent stations without yard remodelling;
                          </p>
                        </div>
                      </div>

                      {/* Item (c) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">c</span>
                          </div>
                          <p className="flex-1 text-sm lg:text-base leading-relaxed text-blue-100/70 tracking-wide pt-1">
                            Intermediate Block signaling except in section with Slip siding and Catch siding, along with corresponding changes at adjacent stations without yard remodelling; and
                          </p>
                        </div>
                      </div>

                      {/* Item (d) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">d</span>
                          </div>
                          <p className="flex-1 text-sm lg:text-base leading-relaxed text-blue-100/70 tracking-wide pt-1">
                            Automatic Block signaling except in section with Slip siding and Catch siding, along with corresponding changes at adjacent stations without yard remodelling.&quot; (Item no. 3 AS-02 Dt : 21.02.2025)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* S.R.3.07.1 Section */}
              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-6 lg:p-10 transition-all duration-500 hover:border-white/20 hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80 space-y-6">
                <div className="flex items-center flex-col gap-3 mb-4">
                  <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-cyan-500/80 to-blue-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                    <span className="text-sm lg:text-base font-bold text-white">S.R.</span>
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold bg-linear-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent flex items-center gap-2">
                    3.07.1 – Signal Aspects and Their Indications (Single Distant Territory)
                  </h3>
                </div>
                <div className="w-full overflow-x-auto text-blue-100/90">
                  <table className="min-w-full text-left border-separate border-spacing-y-2">
                    <thead>
                      <tr>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">No.</th>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">Distant Signal</th>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">Home Signal</th>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">Main Line Starter</th>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">Loop Line Starter</th>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">Advanced Starter</th>
                        <th className="px-2 py-1 font-semibold bg-slate-800/50 rounded">Indication to Loco Pilot</th>
                      </tr>
                    </thead>
                    <tbody className="text-base lg:text-lg">
                      <tr>
                        <td className="px-2 py-1">1. <span className="inline-block align-middle text-yellow-400">🟡</span></td>
                        <td className="px-2 py-1">Yellow</td>
                        <td className="px-2 py-1">Red</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">Stop at Home Signal</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1">2. <span className="inline-block align-middle text-yellow-300">🟡🟡</span></td>
                        <td className="px-2 py-1">Double Yellow</td>
                        <td className="px-2 py-1">Yellow</td>
                        <td className="px-2 py-1">Red</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">Stop at Main Line Starter</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1">3. <span className="inline-block align-middle text-yellow-300">🟡🟡</span></td>
                        <td className="px-2 py-1">Double Yellow</td>
                        <td className="px-2 py-1">Yellow<br /><span className="inline-block text-blue-200">with route indicator</span></td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">Red</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">Stop at Loop Line Starter</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1">4. <span className="inline-block align-middle text-yellow-300">🟡🟡</span></td>
                        <td className="px-2 py-1">Double Yellow</td>
                        <td className="px-2 py-1">Yellow<br /><span className="inline-block text-blue-200">with route indicator</span></td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">Yellow</td>
                        <td className="px-2 py-1">Green</td>
                        <td className="px-2 py-1">Run through via Loop Line</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1">5. <span className="inline-block align-middle text-green-400">🟢</span></td>
                        <td className="px-2 py-1">Green</td>
                        <td className="px-2 py-1">Green</td>
                        <td className="px-2 py-1">Green</td>
                        <td className="px-2 py-1">-</td>
                        <td className="px-2 py-1">Green</td>
                        <td className="px-2 py-1">Run through station via Main Line</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm lg:text-base text-blue-100/80 flex items-center gap-2">
                  Each combination gives a clear indication to the Loco Pilot about the stop or run-through at various signals in Single Distant Territory.
                </p>
              </div>

              {/* S.R.3.07.2 Section */}
              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-6 lg:p-10 transition-all duration-500 hover:border-white/20 hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80 space-y-4 mt-6">
                <div className="flex items-center flex-col gap-3 mb-4">
                  <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-emerald-500/80 to-teal-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                    <span className="text-sm lg:text-base font-bold text-white">S.R.</span>
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold bg-linear-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent flex items-center gap-2 text-center">
                    3.07.2 – Distant &amp; Inner Distant Signals (Multiple Aspect Signalling Sections)
                  </h3>
                </div>
                <ul className="list-none pl-0 space-y-2 text-blue-100/90 text-base lg:text-lg">
                  <li className="flex gap-2 items-start"><span className="mt-1 text-yellow-300">🟡</span> In some multiple aspect signalling sections, two distant signals are provided: the outermost is known as the <b>DISTANT</b> signal, and the next is called the <b>INNER DISTANT</b> signal.</li>
                  <li className="flex gap-2 items-start"><span className="mt-1 text-blue-200">📏</span> The Distant signal is generally placed at a distance of 2 km from the relevant Stop Signal.</li>
                  <li className="flex gap-2 items-start"><span className="mt-1 text-red-300">🚫</span> There is no warning board in double distant (two-distant) sections.</li>
                </ul>
              </div>
            </div>

            {/* S.R.3.07.3 Section */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-6 lg:p-10 transition-all duration-500 hover:border-white/20 hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80 space-y-6 mt-8">
              <div className="flex items-center flex-col gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                  <span className="text-sm lg:text-base font-bold text-white">S.R.</span>
                </div>
                <h3 className="text-lg lg:text-2xl font-bold bg-linear-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent flex items-center gap-2 text-center">
                  3.07.3 – Indications of Aspects – Distant &amp; Inner Distant Signals
                </h3>
              </div>
              <div className="overflow-auto">
                <table className="min-w-full border border-white/10 rounded-lg text-sm lg:text-base text-blue-100/90">
                  <thead>
                    <tr className="bg-blue-950/60 text-indigo-100">
                      <th className="px-2 py-1 font-semibold">S. No.</th>
                      <th className="px-2 py-1 font-semibold">Distant<br/>Signal</th>
                      <th className="px-2 py-1 font-semibold">Inner Distant<br/>Signal</th>
                      <th className="px-2 py-1 font-semibold">Home<br/>Signal</th>
                      <th className="px-2 py-1 font-semibold">Main Line<br/>Starter</th>
                      <th className="px-2 py-1 font-semibold">Loop Line<br/>Starter</th>
                      <th className="px-2 py-1 font-semibold">Advanced<br/>Starter</th>
                      <th className="px-2 py-1 font-semibold">Indication to<br/>Loco Pilot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-900/40 transition-colors">
                      <td className="px-2 py-1 text-center font-medium">1</td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡🟡<br/><span className="text-xs text-blue-100/70">Double Yellow</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡<br/><span className="text-xs text-blue-100/70">Yellow</span></td>
                      <td className="px-2 py-1 text-red-400 text-center">🔴<br/><span className="text-xs text-blue-100/70">Red</span></td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1">Stop at <span className="font-semibold text-indigo-200">Home Signal</span></td>
                    </tr>
                    <tr className="hover:bg-blue-900/40 transition-colors">
                      <td className="px-2 py-1 text-center font-medium">2</td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡🟡<br/><span className="text-xs text-blue-100/70">Double Yellow</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡<br/><span className="text-xs text-blue-100/70">Yellow</span></td>
                      <td className="px-2 py-1 text-red-400 text-center">🔴<br/><span className="text-xs text-blue-100/70">Red</span></td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1">Stop at <span className="font-semibold text-indigo-200">Main Line Starter</span></td>
                    </tr>
                    <tr className="hover:bg-blue-900/40 transition-colors">
                      <td className="px-2 py-1 text-center font-medium">3</td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1"><span className="font-semibold text-indigo-200">Run through</span></td>
                    </tr>
                    <tr className="hover:bg-blue-900/40 transition-colors">
                      <td className="px-2 py-1 text-center font-medium">4</td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡🟡<br/><span className="text-xs text-blue-100/70">Double Yellow</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡🟡<br/><span className="inline-block align-middle text-xs text-blue-100/70">Double Yellow</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡<span className="text-blue-200 text-xs ml-1">[with route indicator]</span></td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1 text-red-400 text-center">🔴<br/><span className="text-xs text-blue-100/70">Red</span></td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1">Stop at <span className="font-semibold text-indigo-200">Loop Line Starter</span></td>
                    </tr>
                    <tr className="hover:bg-blue-900/40 transition-colors">
                      <td className="px-2 py-1 text-center font-medium">5</td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡🟡<br/><span className="text-xs text-blue-100/70">Double Yellow</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡🟡<br/><span className="text-xs text-blue-100/70">Double Yellow</span></td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡<span className="text-blue-200 text-xs ml-1">[with route indicator]</span></td>
                      <td className="px-2 py-1 text-center">-</td>
                      <td className="px-2 py-1 text-yellow-300 text-center">🟡<br/><span className="text-xs text-blue-100/70">Yellow</span></td>
                      <td className="px-2 py-1 text-green-400 text-center">🟢<br/><span className="text-xs text-blue-100/70">Green</span></td>
                      <td className="px-2 py-1"><span className="font-semibold text-indigo-200">Run through via Loop Line</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm lg:text-base text-blue-100/80 flex items-center gap-2">
                <span>
                  <strong>Note:</strong> The two yellow lights of a Distant signal constitute the <span className="font-semibold text-yellow-200">&apos;Attention&apos;</span> aspect, signifying <span className="font-semibold text-blue-100/90">proceed, preparing to pass the next signal at restricted speed</span>.<br/>
                  <span className="ml-5">Restricted speed means the Loco Pilot/Motorman must control the train considering local conditions and brake power, so the train can be stopped at the next stop signal if required. The exact speed is to be adjusted by the Loco Pilot/Motorman based on these factors.</span>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/80 via-blue-950/80 to-indigo-900/70 shadow-lg p-6 lg:p-10 space-y-8">

              <div className="flex items-center flex-col justify-center gap-3 mb-6">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                  <span className="text-sm lg:text-base font-bold text-white">S.R.</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-center bg-linear-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  3.07.3 — Aspects and Indications of Distant Signals in Approach to Gate Stop Signal and IB Signal
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/5 rounded-lg border border-white/10 text-center text-blue-100">
                  <thead>
                    <tr className="bg-blue-900/50">
                      <th className="px-3 py-2">Aspect</th>
                      <th className="px-3 py-2">Indication</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-950/40 transition-colors">
                      <td className="px-3 py-2 text-yellow-300 font-semibold">Caution (🟡)</td>
                      <td className="px-3 py-2">
                        Proceed and <span className="text-indigo-200 font-medium">be prepared to stop at the next stop signal</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-950/40 transition-colors">
                      <td className="px-3 py-2 text-yellow-200 font-semibold">Attention (🟡🟡)</td>
                      <td className="px-3 py-2">
                        Proceed and <span className="text-indigo-200 font-medium">be prepared to pass the next signal at such restricted speed as may be prescribed by special instructions</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-950/40 transition-colors">
                      <td className="px-3 py-2 text-green-400 font-semibold">Proceed (🟢)</td>
                      <td className="px-3 py-2">
                        <span className="text-indigo-200 font-medium">Proceed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center flex-col gap-3 mt-8 mb-4">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                  <span className="text-sm lg:text-base font-bold text-white">S.R.</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold bg-linear-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent text-center">
                  3.07.4 — Indications for Combined Signal Arrangements
                </h3>
              </div>
              
              <div className="space-y-6 text-base lg:text-lg">
                {/* Gate-cum Distant Signal */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-indigo-300 mb-2">Gate-cum Distant Signal:</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1 text-blue-100/90">
                        <li>
                          <span className="font-semibold text-red-400">Red:</span> LC gate open to road traffic.
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-300">Yellow:</span> LC gate closed and train required to stop at Home signal.
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-200">Double Yellow:</span> LC gate closed and train required to stop at Main Line Starter / Loop Line Starter or to pass through via Loop Line.
                        </li>
                        <li>
                          <span className="font-semibold text-green-400">Green:</span> LC gate closed and train to pass/run through via Main Line.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* IBS-cum Distant Signal */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-indigo-300 mb-2">Intermediate Block Stop Signal (IBS)-cum-Distant Signal:</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1 text-blue-100/90">
                        <li>
                          <span className="font-semibold text-red-400">Red:</span> Block section ahead is not clear.
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-300">Yellow:</span> Train required to stop at Home signal of station ahead.
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-200">Double Yellow:</span> Train required to stop at Main or Loop Line Starter or to pass through Loop Line.
                        </li>
                        <li>
                          <span className="font-semibold text-green-400">Green:</span> Block section ahead is clear, train to pass/run through the station via Main Line.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Last Stop Signal–cum–Distant (LC Gate) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-indigo-300 mb-2">Last Stop Signal–cum–Distant Signal of LC Gate:</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1 text-blue-100/90">
                        <li>
                          <span className="font-semibold text-red-400">Red:</span> Line clear not obtained from the station in advance.
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-300">Yellow:</span> Line clear obtained and LC gate is open to road traffic.
                        </li>
                        <li>
                          <span className="font-semibold text-green-400">Green:</span> Line clear obtained and LC gate is closed to road traffic.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Last Stop Signal–cum–Distant (IB Signal) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-purple-500/80 to-pink-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">4</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-indigo-300 mb-2">Last Stop Signal–cum–Distant Signal of Intermediate Block (IB) Signal:</div>
                      <ul className="list-disc ml-6 mt-1 space-y-1 text-blue-100/90">
                        <li>
                          <span className="font-semibold text-red-400">Red:</span> Block section is not clear for an adequate distance beyond Intermediate Block Signal.
                        </li>
                        <li>
                          <span className="font-semibold text-yellow-300">Yellow:</span> Block section is clear for an adequate distance and train is required to stop at IB Signal.
                        </li>
                        <li>
                          <span className="font-semibold text-green-400">Green:</span> Train required to pass through Intermediate Block Signal (IB).
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
  )
}

export default GSRChapterPage17