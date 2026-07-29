'use client'

import React, { useState, useEffect } from 'react'

const GSRChapterPage8A = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-blue-900 relative overflow-hidden text-blue-100">
      <div className="absolute inset-0 overflow-hidden">
        {!isMobile && (
          <>
            <div className="absolute -top-28 -right-20 w-80 h-80 bg-linear-to-br from-cyan-400/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-linear-to-tr from-purple-500/25 via-blue-500/25 to-slate-800/25 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg h-lg bg-linear-to-r from-sky-400/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      <div className="relative z-10 py-8 px-2 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center mb-14">
            <div className="inline-flex	items-center justify-center mb-6">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-6xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              CHAPTER - II
            </h1>
            <div className="mt-4 inline-flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-linear-to-r from-transparent via-blue-400/50 to-white/70"></span>
              <span className="text-lg lg:text-2xl font-semibold text-indigo-200 tracking-[0.35em]">
                RULES APPLYING TO RAILWAY SERVANTS GENERALLY
              </span>
              <span className="h-px w-16 bg-linear-to-l from-transparent via-blue-400/50 to-white/70"></span>
            </div>
            
            
          </div>

          <div className={`bg-white/5 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-xl'} rounded-xl border border-white/10 shadow-2xl overflow-hidden`}>
            <div className="relative p-2 lg:p-10 space-y-8">
              {!isMobile && (
                <>
                  <div className="absolute -top-16 -left-16 w-48 h-48 bg-linear-to-br from-blue-400/25 to-purple-500/25 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>
                </>
              )}

              <section className="relative z-10 space-y-6">
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-2 lg:p-10 transition-all duration-500 hover:border-white/20 hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="grid gap-8 text-base lg:text-lg leading-relaxed text-blue-100/90 tracking-wide">
                    <div className="relative flex flex-col items-center gap-4 px-2 py-4 rounded-xl bg-linear-to-r from-cyan-900/20 via-blue-900/10 to-indigo-900/20 shadow-inner border border-cyan-500/10 mb-2">
                      <div className="shrink-0">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-500/40 to-blue-500/40 border-2 border-cyan-400/40 shadow-lg">
                          <span className="text-base font-bold text-cyan-100/90 tracking-wider">
                            2.01
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 text-center justify-center">
                          <span className="text-base lg:text-lg font-semibold text-cyan-100/95">Supply of copies of rules</span>
                        </div>
                        <p className="text-blue-100/90 text-base lg:text-lg font-normal leading-relaxed tracking-wide">
                          The Railway Administration shall supply
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6 bg-white/5/50 rounded-xl border border-white/10 p-4 lg:p-6">
                      <div className="space-y-5">
                        <div className="flex items-start gap-4 group/item">
                          <div className="shrink-0 mt-0.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-500/30 via-blue-500/30 to-indigo-500/30 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 group-hover/item:scale-110 transition-transform duration-300">
                              <span className="text-base font-bold text-cyan-200 tracking-wide">a</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-cyan-100/90 font-semibold leading-relaxed">a copy of these Rules</p>
                            <ul className="space-y-3 mt-4 ml-2 lg:ml-4">
                              <li className="flex items-start gap-3 group/subitem">
                                <div className="shrink-0 mt-0.5">
                                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-400/25 via-blue-400/25 to-indigo-400/25 border border-cyan-300/30 shadow-md shadow-cyan-400/10 group-hover/subitem:scale-110 transition-transform duration-300">
                                    <span className="text-xs font-semibold text-cyan-200/90">i</span>
                                  </div>
                                </div>
                                <span className="text-blue-100/85 leading-relaxed pt-0.5">to each station,</span>
                              </li>
                              <li className="flex items-start gap-3 group/subitem">
                                <div className="shrink-0 mt-0.5">
                                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-400/25 via-blue-400/25 to-indigo-400/25 border border-cyan-300/30 shadow-md shadow-cyan-400/10 group-hover/subitem:scale-110 transition-transform duration-300">
                                    <span className="text-xs font-semibold text-cyan-200/90">ii</span>
                                  </div>
                                </div>
                                <span className="text-blue-100/85 leading-relaxed pt-0.5">to each locomotive running shed and</span>
                              </li>
                              <li className="flex items-start gap-3 group/subitem">
                                <div className="shrink-0 mt-0.5">
                                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-400/25 via-blue-400/25 to-indigo-400/25 border border-cyan-300/30 shadow-md shadow-cyan-400/10 group-hover/subitem:scale-110 transition-transform duration-300">
                                    <span className="text-xs font-semibold text-cyan-200/90">iii</span>
                                  </div>
                                </div>
                                <span className="text-blue-100/85 leading-relaxed pt-0.5">to such other offices as it may prescribe;</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 group/item">
                          <div className="shrink-0 mt-0.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-500/30 via-blue-500/30 to-indigo-500/30 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 group-hover/item:scale-110 transition-transform duration-300">
                              <span className="text-base font-bold text-cyan-200 tracking-wide">b</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-cyan-100/90 font-semibold leading-relaxed">
                              to each railway servant on whom any definite responsibility is placed by
                              the said rules, a copy of the rules or of such portions thereof as related
                              to his duties and
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 group/item">
                          <div className="shrink-0 mt-0.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-500/30 via-blue-500/30 to-indigo-500/30 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 group-hover/item:scale-110 transition-transform duration-300">
                              <span className="text-base font-bold text-cyan-200 tracking-wide">c</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-cyan-100/90 font-semibold leading-relaxed">
                              to any railway servant a copy of these rules or translation of the said
                              rules or of such portions, thereof as relate to his duties, as may be
                              prescribed by special instructions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="relative z-10 space-y-6">
                <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-4 lg:p-10 ${isMobile ? '' : 'transition-all duration-500 hover:border-white/20 hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80'}`}>
                  <div className="space-y-5 text-base lg:text-lg leading-relaxed tracking-wide">
                    <div className="flex items-start gap-4 group/item">
                      <div className="shrink-0 mt-0.5">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-500/30 via-purple-500/30 to-blue-500/30 border border-indigo-400/40 shadow-lg shadow-indigo-500/20 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-base font-bold text-indigo-200 tracking-wide">a</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-semibold text-indigo-100/90 leading-relaxed">
                          SR 2.01 (a) The copy of the rules to be supplied by Railway Administration under General
                          Rule 2.01 may be hard copy or electronic copy of document or relevant
                          extracts thereof; (Item no.1 of II of AS-1 dt. 19.04.2021)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <div className="shrink-0 mt-0.5">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-500/30 via-purple-500/30 to-blue-500/30 border border-indigo-400/40 shadow-lg shadow-indigo-500/20 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-base font-bold text-indigo-200 tracking-wide">b</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-semibold text-indigo-100/90 leading-relaxed">
                          That Railway Administration shall ensure updation, revision and amendments
                          to rules in digital form simultaneously along with the changes in print form and
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <div className="shrink-0 mt-0.5">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-500/30 via-purple-500/30 to-blue-500/30 border border-indigo-400/40 shadow-lg shadow-indigo-500/20 group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-base font-bold text-indigo-200 tracking-wide">c</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-semibold text-indigo-100/90 leading-relaxed">
                          That Railway Administration shall provide necessary infrastructure/make
                          arrangements to enable (b) above and take steps to provide such equipment
                          (fixed as well as portable) as necessary so that the Rule books in digital form
                          can be accessed by the Railway Servant at all times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GSRChapterPage8A