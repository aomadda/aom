'use client'
import React from 'react'
import { 
  Scale,
  Gavel,
} from 'lucide-react'

const RTIAct2005Section19 = () => {
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
              RIGHT TO INFORMATION ACT 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER V</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">POWERS AND FUNCTIONS OF THE INFORMATION COMMISSIONS, APPEAL AND PENALTIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Appeal Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Gavel className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                19. Appeal
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">1</span>
                      <div className="w-full text-left">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          Any person who, does not receive a decision within the time specified in sub-section (1) or clause (a) of sub-section (3) of section 7, or is aggrieved by a decision of the Central Public Information Officer or State Public Information Officer, as the case may be, may within thirty days from the expiry of such period or from the receipt of such a decision prefer an appeal to such officer who is senior in rank to the Central Public Information Officer or State Public Information Officer as the case may be, in each public authority:
                        </p>
                        <div className="mt-2 rounded-lg border border-orange-400/35 bg-orange-500/20 p-3 shadow-sm">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> such officer may admit the appeal after the expiry of the period of thirty days if he or she is satisfied that the appellant was prevented by sufficient cause from filing the appeal in time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">2</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        Where an appeal is preferred against an order made by a Central Public Information Officer or a State Public Information Officer, as the case may be, under section 11 to disclose third party information, the appeal by the concerned third party shall be made within thirty days from the date of the order.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">3</span>
                      <div className="w-full text-left">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                          A second appeal against the decision under sub-section (1) shall lie within ninety days from the date on which the decision should have been made or was actually received, with the Central Information Commission or the State Information Commission:
                        </p>
                        <div className="mt-2 rounded-lg border border-orange-400/35 bg-orange-500/20 p-3 shadow-sm">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Provided that</span> the Central Information Commission or the State Information Commission, as the case may be, may admit the appeal after the expiry of the period of ninety days if it is satisfied that the appellant was prevented by sufficient cause from filing the appeal in time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (4) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">4</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        If the decision of the Central Public Information Officer or State Public Information Officer, as the case may be, against which an appeal is preferred relates to information of a third party, the Central Information Commission or State Information Commission, as the case may be, shall give a reasonable opportunity of being heard to that third party.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (5) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">5</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        In any appeal proceedings, the onus to prove that a denial of a request was justified shall be on the Central Public Information Officer or State Public Information Officer, as the case may be, who denied the request.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (6) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">6</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        An appeal under sub-section (1) or sub-section (2) shall be disposed of within thirty days of the receipt of the appeal or within such extended period not exceeding a total of forty-five days from the date of filing thereof, as the case may be, for reasons to be recorded in writing.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (7) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">7</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        The decision of the Central Information Commission or State Information Commission, as the case may be, shall be binding.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (8) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">8</span>
                      <div className="w-full text-left">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          In its decision, the Central Information Commission or State Information Commission, as the case may be, has the power to—
                        </p>
                        <div className="ml-4 space-y-3 border-l border-cyan-300/30 pl-4">
                          <div>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed mb-2">
                              <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">a</span>
                              require the public authority to take any such steps as may be necessary to secure compliance with the provisions of this Act, including—
                            </p>
                            <div className="ml-0 mt-2 space-y-2 border-l border-blue-400/25 pl-4">
                              <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">i</span>
                                by providing access to information, if so requested, in a particular form;
                              </p>
                              <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">ii</span>
                                by appointing a Central Public Information Officer or State Public Information Officer, as the case may be;
                              </p>
                              <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">iii</span>
                                by publishing certain information or categories of information;
                              </p>
                              <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">iv</span>
                                by making necessary changes to its practices in relation to the maintenance, management and destruction of records;
                              </p>
                              <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">v</span>
                                by enhancing the provision of training on the right to information for its officials;
                              </p>
                              <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                                <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">vi</span>
                                by providing it with an annual report in compliance with clause (b) of sub-section (1) of section 4;
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">b</span>
                            require the public authority to compensate the complainant for any loss or other detriment suffered;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">c</span>
                            impose any of the penalties provided under this Act;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">d</span>
                            reject the application.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (9) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">9</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        The Central Information Commission or State Information Commission, as the case may be, shall give notice of its decision, including any right of appeal, to the complainant and the public authority.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (10) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">10</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        The Central Information Commission or State Information Commission, as the case may be, shall decide the appeal in accordance with such procedure as may be prescribed.
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

export default RTIAct2005Section19
