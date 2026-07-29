"use client"

import Image from "next/image"
import React from "react"

const warnerImages = [
  {
    src: "/gsr-images/GSRPAGE15A.png",
    title: "Semaphore Warner signal on a standalone post",
    caption:
      "Visual reference showing the Warner arm in both ‘On’ and ‘Off’ positions on an independent post.",
  },
  {
    src: "/gsr-images/GSRPAGE15B.png",
    title: "Semaphore Warner signal below a Stop signal (‘On’)",
    caption:
      "Illustrates the caution aspect when the Warner arm remains ‘On’ beneath a protecting stop signal.",
  },
  {
    src: "/gsr-images/GSRPAGE16A.png",
    title: "Semaphore Warner signal below a Stop signal (‘Off’)",
    caption:
      "Depicts the proceed aspect granted when the Warner arm is taken ‘Off’ below the associated stop signal.",
  },
]

const colorWarnerImages = [
  {
    src: "/gsr-images/GSRPAGE16B.png",
    title: "Colour light Warner signal on a standalone post",
    caption:
      "Highlights caution and proceed aspects of a colour light Warner when mounted independently in two-aspect territory.",
  },
  {
    src: "/gsr-images/GSRPAGE17.png",
    title: "Colour light Warner signal below a stop signal",
    caption:
      "Shows stop, caution, and proceed indications when the colour light Warner is paired beneath the governing stop signal.",
  },
]

const GSRChapterPage14B = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-md bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 lg:px-8 px-2">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.06
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Description of Warner signals and their indications
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-2 lg:p-10 space-y-6">
                {/* Item (1) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">1</span>
                    </div>
                    <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                      A semaphore Warner signal has a fish-tailed arm.
                    </p>
                  </div>
                </div>

                {/* Item (2) Section */}
                <div className="space-y-4">
                  <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">2</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        A Warner signal is intended to warn a Loco Pilot -
                      </p>
                    </div>
                  </div>

                  <div className="pl-0 lg:pl-14 space-y-3">
                    {/* Item (a) */}
                    <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-sm lg:text-base font-bold text-white">a</span>
                        </div>
                        <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                          of the condition of the block section ahead, or
                        </p>
                      </div>
                    </div>

                    {/* Item (b) */}
                    <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-sm lg:text-base font-bold text-white">b</span>
                        </div>
                        <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                          that he is approaching a Stop signal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item (3) Section */}
                <div className="space-y-4">
                  <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">3</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        A Warner signal may be placed either-
                      </p>
                    </div>
                  </div>

                  <div className="pl-0 lg:pl-14 space-y-3">
                    {/* Item (a) */}
                    <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-sm lg:text-base font-bold text-white">a</span>
                        </div>
                        <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                          on a post by itself with a fixed green light 1.5 to 2 metres above it by night, or
                        </p>
                      </div>
                    </div>

                    {/* Item (b) */}
                    <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-sm lg:text-base font-bold text-white">b</span>
                        </div>
                        <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                          on the same post below the first Stop signal or the last Stop signal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item (4) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">4</span>
                    </div>
                    <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                      When placed in accordance with clause (b) of sub-rule (3), the variable light of
                      the Stop signal shall take the place of the fixed green light of the Warner signal
                      and the mechanical arrangement shall be such that the Warner signal cannot be
                      taken &apos;off&apos; while the Stop signal above it is &apos;on&apos;.
                    </p>
                  </div>
                </div>

                {/* Item (5) Section */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">5</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        The aspects and indications of a semaphore Warner signal are shown below:–
                      </p>
                    </div>

                    <div className="pl-0 lg:pl-14 space-y-3">
                      {/* Item (a) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">a</span>
                          </div>
                          <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                            Semaphore Warner signal in Two-Aspect Signalling Territory ––
                            on a post by itself
                          </p>
                        </div>
                      </div>

                      {/* Item (b) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">b</span>
                          </div>
                          <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                            Semaphore Warner signal in Two-Aspect Signalling Territory —
                            below a Stop signal
                          </p>
                        </div>
                      </div>

                      {/* Item (c) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">c</span>
                          </div>
                          <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                            Semaphore Warner signal in Two-Aspect Signalling Territory —
                            below a Stop signal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {warnerImages.map((image) => (
                        <div
                          key={image.src}
                          className="relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950/70 to-blue-900/60 p-2 shadow-xl transition-all duration-300 hover:border-cyan-300/30 hover:shadow-cyan-500/20"
                        >
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_55%)] opacity-80" />
                          <div className="relative flex h-full flex-col">
                            <div className="relative mx-auto flex w-full max-w-[18rem] items-center justify-center rounded-xl bg-slate-950/40 p-4 backdrop-blur">
                              <Image
                                src={image.src}
                                alt={image.title}
                                width={720}
                                height={540}
                                className="h-auto w-full rounded-md object-contain drop-shadow-[0_12px_30px_rgba(15,118,230,0.35)]"
                                priority={false}
                              />
                            </div>
                            <div className="mt-5 text-center">
                              <h4 className="text-lg font-semibold text-cyan-100">
                                {image.title}
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Item (6) Section */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">6</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        The aspects and indications of a colour light Warner signal are shown below:
                      </p>
                    </div>

                    <div className="pl-0 lg:pl-14 space-y-3">
                      {/* Item (a) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">a</span>
                          </div>
                          <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                            Colour light Warner signal in Two-Aspect Signalling Territory —
                            on a post by itself
                          </p>
                        </div>
                      </div>

                      {/* Item (b) */}
                      <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-500/80 to-indigo-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                            <span className="text-sm lg:text-base font-bold text-white">b</span>
                          </div>
                          <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                            Colour Light Warner signal in Two-Aspect Signalling Territory—
                            below a Stop signal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {colorWarnerImages.map((image) => (
                        <div
                          key={image.src}
                          className="relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950/70 to-blue-900/60 p-2 shadow-xl transition-all duration-300 hover:border-emerald-300/30 hover:shadow-emerald-500/20"
                        >
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_55%)] opacity-80" />
                          <div className="relative flex h-full flex-col">
                            <div className="relative mx-auto flex w-full max-w-[20rem] items-center justify-center rounded-xl bg-slate-950/40 p-4 backdrop-blur">
                              <Image
                                src={image.src}
                                alt={image.title}
                                width={720}
                                height={540}
                                className="h-auto w-full rounded-md object-contain drop-shadow-[0_12px_30px_rgba(16,185,129,0.35)]"
                                priority={false}
                              />
                            </div>
                            <div className="mt-5 text-center">
                              <h4 className="text-lg font-semibold text-emerald-100">
                                {image.title}
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Item (7) Section */}
                <div className="space-y-4">
                  <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-sm lg:text-base font-bold text-white">7</span>
                      </div>
                      <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                        A Warner signal with a fixed green light above it by night, on a post by itself,
                        shall be located at an adequate distance in rear of the Stop signal, the aspect of
                        which it pre-warns:
                      </p>
                    </div>
                  </div>

                  {/* Provided that section */}
                  <div className="pl-0 lg:pl-14">
                    <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-500/10">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-yellow-500/80 to-amber-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-xs lg:text-sm font-bold text-white">P</span>
                        </div>
                        <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1 italic">
                          Provided that when such a Warner signal applies to a gate Stop signal, it shall not
                          display the &apos;Proceed&apos; aspect unless there is adequate distance between the gate
                          Stop signal and the first Stop signal of the station ahead. The adequate distance in
                          such a case shall never be less than 1200 metres.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item (8) */}
                <div className="group/item relative overflow-hidden rounded-lg border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-blue-900/50 p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-orange-500/80 to-red-600/80 border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-sm lg:text-base font-bold text-white">8</span>
                    </div>
                    <p className="flex-1 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide pt-1">
                      Where special circumstances justify the use of an unworked Warner, it shall be
                      secured in the &apos;on&apos; position and not be coupled or duplicated for directing
                      purposes.
                    </p>
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

export default GSRChapterPage14B