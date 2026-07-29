'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  XCircle
} from 'lucide-react'

const RTIAct2005Section31 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MISCELLANEOUS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Repeal Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <XCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                31. Repeal
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                  <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                  <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                    <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">1</span>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                      The Freedom of Information Act, 2002 (5 of 2003) is hereby repealed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* THE FIRST SCHEDULE SECTION */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-purple-300/30 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                THE FIRST SCHEDULE
              </h2>
              <div className="space-y-4 lg:text-lg text-base text-gray-200 leading-relaxed">
                <div className="rounded-lg border-l-4 border-purple-400/80 border border-purple-400/20 bg-white/5 p-4 pl-4 shadow-inner">
                  <p>
                    <strong>Applicable Sections:</strong> 13(3) and 16(3)
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-purple-400/80 border border-purple-400/20 bg-white/5 p-4 pl-4 shadow-inner">
                  <p>
                    <strong>Form of Oath or Affirmation</strong><br />
                    <span className="text-cyan-100/95">To be made by the Chief Information Commissioner, Information Commissioner, State Chief Information Commissioner, or State Information Commissioner</span>
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-purple-400 bg-white/5 p-4 mt-2">
                  <span className="block text-center text-lg lg:text-xl font-semibold text-pink-100 mb-4">
                    Oath / Affirmation Text
                  </span>
                  <blockquote className="italic text-cyan-100">
                    “I, <span className="text-pink-200 font-bold">.....................</span>, having been appointed Chief Information Commissioner / Information Commissioner / State Chief Information Commissioner / State Information Commissioner,
                    <br />
                    <span className="inline-flex flex-wrap items-center gap-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-400 rounded-full px-2 py-0.5 text-xs font-semibold text-white">swear in the name of God</span>
                      <span className="text-gray-300">or</span>
                      <span className="bg-linear-to-r from-blue-500 to-cyan-400 rounded-full px-2 py-0.5 text-xs font-semibold text-white">solemnly affirm</span>
                    </span>
                    <br />
                    that I will bear true faith and allegiance to the Constitution of India as by law established, that I will uphold the sovereignty and integrity of India, that I will duly and faithfully and to the best of my ability, knowledge and judgment perform the duties of my office without fear or favour, affection or ill-will and that I will uphold the Constitution and the laws.”
                  </blockquote>
                </div>
              </div>
            </div>


            {/* THE SECOND SCHEDULE SECTION */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-pink-400/30 hover:bg-white/15 transition-all duration-300 mt-10">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-pink-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                THE SECOND SCHEDULE
              </h2>
              <div className="space-y-3 lg:text-lg text-base text-gray-200 leading-relaxed">
                <div className="rounded-lg border-l-4 border-pink-500/80 border border-pink-500/20 bg-white/5 p-4 pl-4 shadow-inner">
                  <p>
                    <strong>Reference:</strong> See Section 24
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-pink-500/80 border border-pink-500/20 bg-white/5 p-4 pl-4 shadow-inner">
                  <p>
                    <strong>Title:</strong> Intelligence and Security Organisations established by the Central Government
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-pink-400 bg-white/5 p-4 mt-3 overflow-x-auto">
                  <ol className="list-none space-y-3 p-0 m-0 text-cyan-100">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">1</span>
                      <div className="min-w-0 flex-1">Intelligence Bureau</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">2</span>
                      <div className="min-w-0 flex-1">
                        Research and Analysis Wing (RAW), including its technical wing, namely, the Aviation Research Centre of the Cabinet Secretariat
                        <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 319(E), dated 4-5-2021)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">3</span>
                      <div className="min-w-0 flex-1">Directorate of Revenue Intelligence</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">4</span>
                      <div className="min-w-0 flex-1">Central Economic Intelligence Bureau</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">5</span>
                      <div className="min-w-0 flex-1">Directorate of Enforcement</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">6</span>
                      <div className="min-w-0 flex-1">Narcotics Control Bureau</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">7</span>
                      <div className="min-w-0 flex-1 line-through text-gray-400">
                        [Omitted]
                        <span className="block text-xs text-gray-400 ml-2 not-italic">(Serial Number 7 omitted by notification No. G.S.R. 319(E), dated 4-5-2021)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">8</span>
                      <div className="min-w-0 flex-1">
                        Special Frontier Force of the Cabinet Secretariat
                        <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 319(E), dated 4-5-2021)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">9</span>
                      <div className="min-w-0 flex-1">Border Security Force</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">10</span>
                      <div className="min-w-0 flex-1">Central Reserve Police Force</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">11</span>
                      <div className="min-w-0 flex-1">Indo-Tibetan Border Police</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">12</span>
                      <div className="min-w-0 flex-1">Central Industrial Security Force</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">13</span>
                      <div className="min-w-0 flex-1">National Security Guards</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">14</span>
                      <div className="min-w-0 flex-1">Assam Rifles</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">15</span>
                      <div className="min-w-0 flex-1">
                        Sashastra Seema Bal
                        <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 347, dated 28-9-2005)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">16</span>
                      <div className="min-w-0 flex-1">
                        Directorate General of Income-tax (Investigation)
                        <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 235(E), dated 27-3-2008)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">17</span>
                      <div className="min-w-0 flex-1">
                        National Technical Research Organisation
                        <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 235(E), dated 27-3-2008)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">18</span>
                      <div className="min-w-0 flex-1">
                        Financial Intelligence Unit, India
                        <span className="block text-xs text-gray-400 mt-1">(Substituted by notification No. G.S.R. 235(E), dated 27-3-2008)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">19</span>
                      <div className="min-w-0 flex-1">
                        <div>Special Protection Group</div>
                        <div>Defence Research and Development Organisation</div>
                        <div>Border Road Development Board</div>
                        <span className="block text-xs text-gray-400 mt-1">[Added by notification No. G.S.R. 347, dated 28-9-2005. Partly omitted by G.S.R. 235(E), dated 27-3-2008]</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">20</span>
                      <div className="min-w-0 flex-1">
                        National Security Council Secretariat
                        <span className="block text-xs text-gray-400 mt-1">(Added by notification No. G.S.R. 726(E), dated 8-10-2008)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">21</span>
                      <div className="min-w-0 flex-1">
                        <div>Central Bureau of Investigation</div>
                        <div>National Investigation Agency</div>
                        <div>National Intelligence Grid</div>
                        <span className="block text-xs text-gray-400 mt-1">(Added by notification No. G.S.R. 442(E), dated 9-6-2011)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex min-w-8 shrink-0 justify-center rounded-full bg-linear-to-r from-pink-500/80 to-purple-600/80 px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:min-w-9 sm:px-2.5 sm:text-sm">22</span>
                      <div className="min-w-0 flex-1">
                        Strategic Forces Command
                        <span className="block text-xs text-gray-400 mt-1">(Inserted by notification No. G.S.R. 673(E) dated 8-7-2016)</span>
                      </div>
                    </li>
                  </ol>
                </div>
                {/* Notification footnotes */}
                <div className="mt-6">
                  <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-linear-to-br from-slate-900/40 to-purple-900/20 p-4 shadow-lg backdrop-blur-md lg:p-5">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-400/60 via-purple-500/50 to-pink-500/50" aria-hidden />
                    <h3 className="pl-1 text-sm font-bold uppercase tracking-wide text-cyan-200/95 lg:text-base">
                      References & Notifications
                    </h3>
                    <ul className="mt-3 list-none space-y-0 p-0 pl-1" role="list">
                      {[
                        'Item 2: Substituted by notification No. G.S.R. 319(E), dated 4-5-2021',
                        'Item 7: Serial Number 7 omitted by notification No. G.S.R. 319(E), dated 4-5-2021',
                        'Item 8: Substituted by notification No. G.S.R. 319(E), dated 4-5-2021',
                        'Item 15: Substituted by notification No. G.S.R. 347, dated 28-9-2005',
                        'Items 16, 17, 18: Substituted by notification No. G.S.R. 235(E), dated 27-3-2008',
                        'Items 19–21: Added by notification No. G.S.R. 347, dated 28-9-2005. Some omitted by G.S.R. 235(E), dated 27-3-2008',
                        'Item 22: Added by notification No. G.S.R. 726(E), dated 8-10-2008',
                        'Items 23–25: Added by notification No. G.S.R. 442(E), dated 9-6-2011',
                        'Item 26: Inserted by notification No. G.S.R. 673(E), dated 8-7-2016',
                      ].map((line) => (
                        <li
                          key={line}
                          className="group flex items-start gap-3 border-b border-white/5 py-2.5 text-sm leading-relaxed text-gray-300 last:border-b-0 last:pb-0 first:pt-0 lg:text-[15px]"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-cyan-300 to-pink-400 ring-2 ring-cyan-400/25 transition-transform group-hover:scale-125"
                            aria-hidden
                          />
                          <span className="min-w-0 text-gray-200/90">{line}</span>
                        </li>
                      ))}
                    </ul>
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

export default RTIAct2005Section31
