'use client'
import React from 'react'
import {
  FileText
} from 'lucide-react'

const StationWorkingRules = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-rose-500/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-purple-500/70 via-pink-500/70 to-rose-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-purple-700/60 to-pink-800/60 backdrop-blur-md shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              STATION WORKING RULES (SWRs) AND TEMPORARY WORKING ORDER
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  General Rules 5.06, stipulates
                </p>
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-linear-to-tr from-blue-400 via-cyan-500 to-indigo-400 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white/10 ring-2 ring-blue-300/20 animate-fade-in">
                      1
                    </span>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed transition-colors duration-300">
                      In addition to General Rules for Indian Railways and Subsidiary Rules of a Railway each station shall be provided with Station Working Rules, applicable to the station, issued under special instructions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-linear-to-tr from-blue-400 via-cyan-500 to-indigo-400 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white/10 ring-2 ring-blue-300/20 animate-fade-in">
                      2
                    </span>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed transition-colors duration-300">
                      A copy of the Station Working Rules or relevant extract thereof shall be kept at stations, cabins and level crossings concerned.
                    </span>
                  </li>
                </ol>
                <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                  SWRs shall be issued in Bi-lingual i.e. in English and Hindi (Devnagri script) form.
                </p>
              </div>
            </div>

            {/* Section 1: Object */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                1
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Object
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The object of issuing SWR is to inform all staff concerned with working of trains about the special features of the station to ensure safe train operations at & between stations including level crossings, depending on local conditions.
                </p>
              </div>
            </div>

            {/* Section 2: Authority to issue SWRs */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                2
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Authority to issue SWRs
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-linear-to-tr from-green-400 via-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white/10 ring-2 ring-green-300/20 animate-fade-in">
                      i
                    </span>
                    <span className="text-green-50/95 lg:text-base text-sm leading-relaxed transition-colors duration-300">
                      Under the provisions of GR 5.06, the authority to issue SWRs rests with the Authorised Officer of Railway. The power to issue SWRs has further been delegated to the Sr.DOM/DOM and Sr.DSTE/DSTE jointly for all stations within the Division.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-linear-to-tr from-green-400 via-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white/10 ring-2 ring-green-300/20 animate-fade-in">
                      ii
                    </span>
                    <span className="text-green-50/95 lg:text-base text-sm leading-relaxed transition-colors duration-300">
                      SWRs are issued in conformity with the G&amp;SR and can not, in any way supersede them. In case of any conflict, the provisions of G&amp;SR will prevail.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 3: SWRs requiring sanction of CRS */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                3
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  SWRs requiring sanction of Commissioner of Railway Safety (CRS)
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Beautiful vertical timeline/numbered items */}
                  <div className="relative flex items-start group">
                    <div className="flex flex-col items-center mr-5">
                      <span className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 via-purple-400 to-pink-400 shadow-lg border-4 border-indigo-200/30 flex items-center justify-center text-xl font-extrabold text-white animate-pulse transition">
                        i
                      </span>
                      <span className="h-full w-1 bg-linear-to-b from-pink-300/40 via-indigo-500/10 to-transparent block mt-1"></span>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-indigo-200/15 w-full shadow-xl transition group-hover:border-indigo-400/40">
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        At stations where relaxation has been obtained from provisions of General Rules under approved special instructions, the approval of CRS already obtained shall find place in the SWRs.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start group">
                    <div className="flex flex-col items-center mr-5">
                      <span className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 via-purple-400 to-pink-400 shadow-lg border-4 border-indigo-200/30 flex items-center justify-center text-xl font-extrabold text-white animate-pulse transition">
                        ii
                      </span>
                      <span className="h-full w-1 bg-linear-to-b from-pink-300/40 via-indigo-500/10 to-transparent block mt-1"></span>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-indigo-200/15 w-full shadow-xl transition group-hover:border-indigo-400/40">
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        Railway administration must obtain sanction of the CRS, when the SWRs are revised as a result of any work listed in para 1302 of the Indian Railway&apos;s P.Way Manual.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start group">
                    <div className="flex flex-col items-center mr-5">
                      <span className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 via-purple-400 to-pink-400 shadow-lg border-4 border-indigo-200/30 flex items-center justify-center text-xl font-extrabold text-white animate-pulse transition">
                        iii
                      </span>
                      <span className="h-full w-1 bg-linear-to-b from-pink-300/40 via-indigo-500/10 to-transparent block mt-1"></span>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-indigo-200/15 w-full shadow-xl transition group-hover:border-indigo-400/40">
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        Works requiring the sanction of Commissioner of Railway Safety and notice thereof (See Appendix B to Ch XV of G&SRs)
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start group">
                    <div className="flex flex-col items-center mr-5">
                      <span className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 via-purple-400 to-pink-400 shadow-lg border-4 border-indigo-200/30 flex items-center justify-center text-xl font-extrabold text-white animate-pulse transition">
                        iv
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-indigo-200/15 w-full shadow-xl transition group-hover:border-indigo-400/40">
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        SWRs of Special Class Stations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Procedure for Preparation of SWR */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                4
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Procedure for Preparation of SWR
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ol className="space-y-5 list-none">
                  {[
                    {
                      key: "i",
                      text: (
                        <>
                          The Sr.DSTE/DSTE will prepare/amend the Rule Diagram on the basis of signalling plan/appendices and send the Rule Diagram and also signalling plan/ appendices in case of interlocked station, to the Sr.DOM/DOM for framing Station Working Rules.
                        </>
                      ),
                    },
                    {
                      key: "ii-1",
                      number: "ii",
                      text: (
                        <>
                          Since the Rule Diagram has a vital bearing on the preparation of the SWRs, the Sr.DOM/DOM will scrutinise the Rule Diagram and the Signalling Appendices, if any, and have these checked at the site.
                        </>
                      ),
                    },
                    {
                      key: "ii-2",
                      number: "ii",
                      text: (
                        <>
                          The Sr.DOM/DOM will arrange for preparation of the Draft Working Rules by the Transportation Inspector in the Standard Format, after which these will be checked and approved by the Sr.DOM/DOM personally. In case of interlocked stations the Draft Working Rules shall be checked and approved by Sr.DSTE/DSTE. Sr.DEE/DEE (TRD) shall also be associated in electrified sections.
                        </>
                      ),
                    },
                    {
                      key: "iii",
                      text: (
                        <>
                          If there is a &apos;D&apos; (Flag Station) and &apos;DK&apos; (station with siding) between two Block Stations, the SWRs of the Block Stations on either side shall contain a reference to such D/DK class Station (in Appendix &apos;F&apos; of the SWR). In the case of a DK class Station, the special instructions for working the siding shall also be incorporated in the SWRs of the Block Stations situated on either side of the &apos;DK&apos; class Station. A copy of these special instructions along with the Rule Diagram shall be made available at such DK class Stations.
                        </>
                      ),
                    },
                    {
                      key: "iv",
                      text: (
                        <>
                          LC Gates controlled by the Stations and rules for their working shall be incorporated in Appendix A of SWR.
                        </>
                      ),
                    },
                    {
                      key: "v",
                      text: (
                        <>
                          The detailed working instructions of Ghat sections shall also be appended on Appendix to the SWRs of adjacent block stations of Ghat section.
                        </>
                      ),
                    },
                  ].map((item) => (
                    <li
                      key={item.key}
                      className="relative pl-16 group flex items-start"
                    >
                      <span
                        className={`
                          absolute left-0 top-1
                          flex items-center justify-center
                          w-11 h-11
                          rounded-full
                          shadow-lg
                          bg-linear-to-br from-teal-500 via-cyan-400 to-blue-400
                          border-4 border-white/10
                          text-xl font-extrabold text-white
                          group-hover:from-white/80 group-hover:to-teal-400
                          transition-all duration-300
                          animate-pulse
                        `}
                      >
                        <span className="drop-shadow-lg">
                          {item.number ? item.number : item.key}
                        </span>
                      </span>
                      <div className="bg-white/5 rounded-xl p-5 border border-teal-100/10 shadow-xl w-full transition group-hover:border-cyan-300/30">
                        <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Section 5: Responsibility of the Officers signing the SWRs */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-amber-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                5
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Responsibility of the Officers signing the SWRs
                </span>
              </h2>
              <div className="bg-linear-to-br from-amber-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ol className="space-y-5">
                  <li className="flex items-start gap-4 bg-white/5 rounded-xl border border-amber-100/10 shadow-xl p-6 group hover:border-amber-300/40 transition">
                    <span className="mt-1 shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-tr from-amber-500 via-orange-400 to-yellow-300 text-white text-lg font-extrabold shadow-lg ring-2 ring-amber-200/30 group-hover:scale-110 group-hover:ring-yellow-200/60 transition-all duration-300 select-none">
                      i)
                    </span>
                    <span className="text-amber-50/95 lg:text-base text-sm leading-relaxed w-full">
                      SWRs are the functional rules governing the working of stations,. These need to be prepared with care and attention as any deficiency in these rules can endanger safety ,in which case the officers signing the SWRs shall alsol be held responsible along with other staff for breach of safety rules.
                    </span>
                  </li>

                  <li className="flex items-start gap-4 bg-white/5 rounded-xl border border-amber-100/10 shadow-xl p-6 group hover:border-amber-300/40 transition">
                    <span className="mt-1 shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-tr from-amber-500 via-orange-400 to-yellow-300 text-white text-lg font-extrabold shadow-lg ring-2 ring-amber-200/30 group-hover:scale-110 group-hover:ring-yellow-200/60 transition-all duration-300 select-none">
                      ii)
                    </span>
                    <span className="text-amber-50/95 lg:text-base text-sm leading-relaxed w-full">
                      It is obligatory that the rule diagram of the ground conditions are compared at site to confirm accuracy of R.D. In absence of officials signing the SWR having verified it personally, the Transportation Inspector and the SE (Signal) will, after having jointly inspected the site shall certify in writing that the actual layout conforms to what is shown in the Rule Diagram and the number of points and signals quoted therein are correct.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 6: Reviewing of SWRs */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-rose-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                6
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Reviewing of SWRs
                </span>
              </h2>
              <div className="bg-linear-to-br from-rose-500/20 via-pink-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-rose-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The SWRs should be reviewed once in every five years. In case the review brings out the necessity of carrying out changes, the SWRs should be re-issued. In the event of more than three correction slips having to be issued, the SWRs should be reissued without waiting for the periodical review to be conducted every five years as mentioned above.
                </p>
              </div>
            </div>

            {/* Section 7: Method of correcting SWRs */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                7
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Method of correcting SWRs
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-violet-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Whenever any addition/amendment is required to be made in the said rules, the entire page/pages duly signed by concerned officers on which the provisions requiring addition/amendment appears should be replaced. The method of pasting correction slips by hand in the SWRs is not permitted.
                </p>
              </div>
            </div>

            {/* Section 8: Responsibility of Transportation Inspectors (TI) */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                8
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Responsibility of Transportation Inspectors (TI)
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  {/* Styled number list items for better appearance */}
                  <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-cyan-400/20 shadow-md hover:bg-cyan-500/5 transition-all duration-300">
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700/70 backdrop-blur-md border-2 border-cyan-300/20 text-cyan-100 font-extrabold text-lg shadow ring-2 ring-cyan-400/10">
                        ii
                      </span>
                    </div>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      The Transportation Inspector is responsible to see that SWRs of stations on his section are correct and upto date. He will also be responsible to ensure that the station staff viz. Station Supdt., Station Master, Switchman, Cabinman, Pointsman, Gateman and any other staff who are in any way connected with train passing duties, possess correct knowledge of the Rule Diagram and the SWRs and observe them strictly.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-cyan-400/20 shadow-md hover:bg-cyan-500/5 transition-all duration-300">
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700/70 backdrop-blur-md border-2 border-cyan-300/20 text-cyan-100 font-extrabold text-lg shadow ring-2 ring-cyan-400/10">
                        iii
                      </span>
                    </div>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      Transportation Inspector will also check the SWRs and Rule Diagram and point out irregularities, if any, detected by him. If he finds that certain rules are impracticable thereby forcing the staff to infringe them, he shall immediately bring this matter to the notice of the Sr.DOM/DOM. If he detects any error or omissions which, in any way, affect safe running of trains, he shall take immediate steps at the spot as necessary for safe working of trains and report the matter to the Sr.DOM/DOM concerned for necessary amendment/ modification in the SWRs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Responsibilities of Station Manager/Station master in charge */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                9
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Responsibilities of Station Manager/Station master in charge
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-emerald-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The Station Superintendent/Station Master on receipt of the SWRs must immediately check to ensure that these conform to the local conditions at their stations. If he finds any discrepancy in the said rules, he shall immediately bring such discrepancies and difficulties to the notice of the Sr.DOM/DOM and Transportation Inspector of the section. The Station Manager in charge shall see that all staff having definite responsibilities in train passing at their stations correctly understand and follow the SWR.
                </p>
              </div>
            </div>

            {/* Section 10: Assurance of staff */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-pink-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                10
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Assurance of staff
                </span>
              </h2>
              <div className="bg-linear-to-br from-pink-500/20 via-rose-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Item i */}
                  <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-pink-400/20 shadow-md hover:bg-pink-500/5 transition-all duration-300">
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-600/70 backdrop-blur-md border-2 border-pink-200/20 text-pink-100 font-extrabold text-lg shadow ring-2 ring-pink-400/15">
                        i
                      </span>
                    </div>
                    <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                      All the staff who are in any way associated with train passing duties, must sign a declaration in the Assurance Register in token of having studied the SWRs, Rule Diagram and other instructions pertaining to their duties and understood the same and that they are in a position to take up duties independently at the Station. In case of illiterate staff, the Station Manager in charge/Yard Master/Assistant Station Master shall personally explain the SWRs, Rule Diagram and their duties and obtain their acknowledgements in the Assurance Register as a token of their having understood the instructions. The SS/YM/SM/ASM shall also certify that the staff concerned has understood the instructions pertaining to their duties.
                    </p>
                  </div>
                  {/* Item ii */}
                  <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-pink-400/20 shadow-md hover:bg-pink-500/5 transition-all duration-300">
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-600/70 backdrop-blur-md border-2 border-pink-200/20 text-pink-100 font-extrabold text-lg shadow ring-2 ring-pink-400/15">
                        ii
                      </span>
                    </div>
                    <div>
                      <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        Fresh assurance shall be obtained in the Assurance Register from the staff concerned when –
                      </p>
                      <ul className="ml-0 pl-0  space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center rounded font-semibold text-pink-200 mr-1">(a)</span>
                          <span className="text-pink-50/85 lg:text-base text-sm leading-relaxed">He joins at the station as a new member,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center rounded font-semibold text-pink-200 mr-1">(b)</span>
                          <span className="text-pink-50/85 lg:text-base text-sm leading-relaxed">There is any change in the Station Working Rules,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center rounded font-semibold text-pink-200 mr-1">(c)</span>
                          <span className="text-pink-50/85 lg:text-base text-sm leading-relaxed">He resumes duty at the station after an absence of 15 consecutive days or more.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10: Distribution of Station Working Rules */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                10
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Distributio of Station Working Rules
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Copies of SWRs shall be distributed as per current instructions
                </p>
              </div>
            </div>

            {/* Section 11: Standardisation of SWRs */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                11
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Standardisation of SWRs
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-amber-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-yellow-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  To maintain uniformity in the SWRs, the following format shall be used while framing/revising the Station Working Rules for stations. Care may, however, be taken to ensure that –
                </p>
                <ol className="space-y-4 list-none pl-0">
                  <li className="flex items-start gap-3 bg-linear-to-r from-yellow-700/10 to-transparent rounded-xl p-5 border border-yellow-300/20 shadow-lg group hover:shadow-yellow-400/30 transition-all duration-300 relative">
                    <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-yellow-800/70 border-2 border-yellow-300/30 text-yellow-100 font-bold text-base shadow group-hover:scale-110 group-hover:bg-yellow-700/80 transition-all duration-300 mt-1">
                      a
                    </span>
                    <span className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      The SWRs framed as per the format are self-contained, brief, precise to the point and written in simple spoken language and
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-linear-to-r from-yellow-700/10 to-transparent rounded-xl p-5 border border-yellow-300/20 shadow-lg group hover:shadow-yellow-400/30 transition-all duration-300 relative">
                    <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-yellow-800/70 border-2 border-yellow-300/30 text-yellow-100 font-bold text-base shadow group-hover:scale-110 group-hover:bg-yellow-700/80 transition-all duration-300 mt-1">
                      b
                    </span>
                    <span className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      General and Subsidiary Rules need not be reproduced in the SWRs. Relevant GR/SR number, may be mentioned in bracket against each para when required.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-linear-to-r from-yellow-700/10 to-transparent rounded-xl p-5 border border-yellow-300/20 shadow-lg group hover:shadow-yellow-400/30 transition-all duration-300 relative">
                    <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-yellow-800/70 border-2 border-yellow-300/30 text-yellow-100 font-bold text-base shadow group-hover:scale-110 group-hover:bg-yellow-700/80 transition-all duration-300 mt-1">
                      c
                    </span>
                    <span className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      Sr.DOM/DOM and Sr.DSTE/DSTE and Sr.DEE/DEE (TRD) are required to add those special items or features having a bearing on safety in operation at the concerned Station, which is not covered by the format given below (This format has been fixed by RLY Bd) :
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Format Template Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Format Template
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
                  <p className="text-indigo-50/95 lg:text-lg text-base leading-relaxed font-light mb-4 text-center">
                    ……………RAILWAY<br/>
                    No………………….. …………DIVISION<br/>
                    STATION WORKING RULES OF ------------ (Name of the station)<br/>
                    ……………. (BG/MG/NG)<br/>
                    Date of issue: -----------------<br/>
                    Date brought in force---------
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 rounded-xl p-3 border-2 border-indigo-400/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <p className="text-indigo-200 lg:text-xl text-lg font-bold">NOTE:</p>
                    </div>
                    <ol className="space-y-4 pl-0 list-none">
                      <li className="flex items-start gap-4 bg-linear-to-r from-indigo-700/10 to-transparent rounded-xl p-3 border border-indigo-400/30 shadow-lg group hover:shadow-indigo-400/30 transition-all duration-300 relative">
                        <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-indigo-800/80 border-2 border-indigo-400/30 text-indigo-100 font-bold text-lg shadow-md group-hover:scale-110 group-hover:bg-indigo-700/80 transition-all duration-300 mt-1 drop-shadow-lg ring-2 ring-white/10">
                          i
                        </span>
                        <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                          The Station working rules (SWR) must be read in conjunction with General& subsidiary Rules and Block Working Manual. These rules do not in any way supersede any rule in the above books. The language of SWR should be simple, brief and unambiguous applying provision of rules to the specific conditions at the relevant station. These rules must be in simple language intelligible to ordinary railwaymen. However, relevant GR/SR Numbers may be mentioned in the brackets.
                        </span>
                      </li>
                      <li className="flex items-start gap-4 bg-linear-to-r from-indigo-700/10 to-transparent rounded-xl p-5 border border-indigo-400/30 shadow-lg group hover:shadow-indigo-400/30 transition-all duration-300 relative">
                        <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-indigo-800/80 border-2 border-indigo-400/30 text-indigo-100 font-bold text-lg shadow-md group-hover:scale-110 group-hover:bg-indigo-700/80 transition-all duration-300 mt-1 drop-shadow-lg ring-2 ring-white/10">
                          ii
                        </span>
                        <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                          The SWR must be page numbered with the station name code written on each page and signed by the Divisional Operations Manager and Divisional Signal & Telecom Engineer at interlocked stations and at non-interlocked stations by Divisional Operations Manager and Divisional Engineer should sign each page.
                        </span>
                      </li>
                      <li className="flex items-start gap-4 bg-linear-to-r from-indigo-700/10 to-transparent rounded-xl p-5 border border-indigo-400/30 shadow-lg group hover:shadow-indigo-400/30 transition-all duration-300 relative">
                        <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-indigo-800/80 border-2 border-indigo-400/30 text-indigo-100 font-bold text-lg shadow-md group-hover:scale-110 group-hover:bg-indigo-700/80 transition-all duration-300 mt-1 drop-shadow-lg ring-2 ring-white/10">
                          iii
                        </span>
                        <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                          The SWR should be issued afresh after every five years or after issue of three amendment slips and reviewed as and when required.
                        </span>
                      </li>
                      <li className="flex items-start gap-4 bg-linear-to-r from-indigo-700/10 to-transparent rounded-xl p-5 border border-indigo-400/30 shadow-lg group hover:shadow-indigo-400/30 transition-all duration-300 relative">
                        <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-indigo-800/80 border-2 border-indigo-400/30 text-indigo-100 font-bold text-lg shadow-md group-hover:scale-110 group-hover:bg-indigo-700/80 transition-all duration-300 mt-1 drop-shadow-lg ring-2 ring-white/10">
                          iv
                        </span>
                        <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                          Any new innovations introduced to facilitate train operation should be incorporated in SWR.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Format Section 1: Station working rule diagram */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                1
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Station Working Rule Diagram
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-5 border border-blue-400/20">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                      <span className="font-semibold text-blue-200">SWR Diagram No.</span> ---------- based on <span className="font-semibold text-blue-200">CSTE/----- Railway</span> and <span className="font-semibold text-blue-200">Signal Inter locking Plan No.</span> ------- should show the complete layout of the yard, Points, Signals, gradients and interlocking arrangements of the station including the non-interlocked sidings.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-blue-400/20 hover:bg-white/10 transition-all duration-300">
                      <h4 className="text-blue-200 font-semibold mb-2 flex items-center gap-2">
                        Key Information Required
                      </h4>
                      <ul className="space-y-4 lg:text-base text-sm">
                        <li className="flex items-start gap-4 bg-blue-900/50 rounded-xl p-3 border border-blue-400/20 hover:shadow-lg transition-all duration-300 group">
                          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/30 border border-blue-200/20 text-blue-200 font-bold text-lg shadow group-hover:bg-blue-600/50 transition-all duration-300 mt-1">
                            1
                          </span>
                          <span className="text-blue-50/95 flex-1 leading-relaxed">
                            Exact and actual holding capacity of all individual lines in metres
                          </span>
                        </li>
                        <li className="flex items-start gap-4 bg-blue-900/50 rounded-xl p-3 border border-blue-400/20 hover:shadow-lg transition-all duration-300 group">
                          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/30 border border-blue-200/20 text-blue-200 font-bold text-lg shadow group-hover:bg-blue-600/50 transition-all duration-300 mt-1">
                            2
                          </span>
                          <span className="text-blue-50/95 flex-1 leading-relaxed">
                            Actual inter signal (demarcation point) distances
                          </span>
                        </li>
                        <li className="flex items-start gap-4 bg-blue-900/50 rounded-xl p-3 border border-blue-400/20 hover:shadow-lg transition-all duration-300 group">
                          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/30 border border-blue-200/20 text-blue-200 font-bold text-lg shadow group-hover:bg-blue-600/50 transition-all duration-300 mt-1">
                            3
                          </span>
                          <span className="text-blue-50/95 flex-1 leading-relaxed">
                            Names of adjacent stations and IBH signals
                          </span>
                        </li>
                        <li className="flex items-start gap-4 bg-blue-900/50 rounded-xl p-3 border border-blue-400/20 hover:shadow-lg transition-all duration-300 group">
                          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/30 border border-blue-200/20 text-blue-200 font-bold text-lg shadow group-hover:bg-blue-600/50 transition-all duration-300 mt-1">
                            4
                          </span>
                          <span className="text-blue-50/95 flex-1 leading-relaxed">
                            Distances from centre line of station building
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border border-cyan-400/20 hover:bg-white/10 transition-all duration-300">
                      <h4 className="text-cyan-200 font-semibold mb-2 flex items-center gap-2">
                        Important Requirements
                      </h4>
                      <ul className="grid gap-4 lg:text-base text-sm">
                        <li className="flex items-center gap-4 bg-cyan-900/60 rounded-lg px-4 py-3 border border-cyan-400/20 shadow-sm hover:shadow-cyan-400/30 transition-all duration-300 group">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-300/20">
                            <svg className="w-5 h-5 text-cyan-300 group-hover:text-cyan-100 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-cyan-50/95 flex-1 leading-relaxed">
                            Show actual distances, not minimum prescribed
                          </span>
                        </li>
                        <li className="flex items-center gap-4 bg-cyan-900/60 rounded-lg px-4 py-3 border border-cyan-400/20 shadow-sm hover:shadow-cyan-400/30 transition-all duration-300 group">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-300/20">
                            <svg className="w-5 h-5 text-cyan-300 group-hover:text-cyan-100 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-cyan-50/95 flex-1 leading-relaxed">
                            Mention date up to which it is corrected
                          </span>
                        </li>
                        <li className="flex items-center gap-4 bg-cyan-900/60 rounded-lg px-4 py-3 border border-cyan-400/20 shadow-sm hover:shadow-cyan-400/30 transition-all duration-300 group">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-300/20">
                            <svg className="w-5 h-5 text-cyan-300 group-hover:text-cyan-100 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-cyan-50/95 flex-1 leading-relaxed">
                            Signed by DOM, DSTE and Divisional Engineer
                          </span>
                        </li>
                        <li className="flex items-center gap-4 bg-cyan-900/60 rounded-lg px-4 py-3 border border-cyan-400/20 shadow-sm hover:shadow-cyan-400/30 transition-all duration-300 group">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-300/20">
                            <svg className="w-5 h-5 text-cyan-300 group-hover:text-cyan-100 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-cyan-50/95 flex-1 leading-relaxed">
                            Include any other day-to-day operation information
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-400/20">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">Additional Documents:</span> The detection table, Lever Collar Chart and Pull Sheet may be provided in Appendix &apos;B&apos;. Pull Sheet should be reproduced on a board brightly painted in the cabins to be placed above the Lever Frames.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Format Section 2: Description of station */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                2
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Description of Station
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ol className="space-y-6">
                  {/* 2.1 */}
                  <li className="relative bg-white/5 rounded-xl p-4 border border-white/10 pl-16">
                    <span className="absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/70 text-white text-lg font-bold shadow-lg border-2 border-white/15">
                      2.1
                    </span>
                    <h3 className="text-purple-200 font-semibold lg:text-lg text-base mb-2">General (Location)</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      -------- (Name of the station) is a ------- class station on the ------------ (name of the section) double/single line Electrified/non-electrified (BG/MG/NG) section of -------. Railway on --------------- route. It is situated at KM ------- from-----( a nominated point on the Railway). The number of cabins should be furnished.
                    </p>
                  </li>
                  {/* 2.2 */}
                  <li className="relative bg-white/5 rounded-xl p-4 border border-white/10 pl-16">
                    <span className="absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/70 text-white text-lg font-bold shadow-lg border-2 border-white/15">
                      2.2
                    </span>
                    <h3 className="text-purple-200 font-semibold lg:text-lg text-base mb-2">BLOCK STATIONS, IBH, IBS ON EITHER SIDE AND THEIR DISTANCE AND OUTLYING SIDINGS</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      ------- Station is situated between -------- (Name of adjacent station on one side) in the---------(North/South/ East/West) side at a distance of ----- km and ----------- ( Name of adjacent station on the other side) in the --------(North/South/ East/West) at a distance of ------ km.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      In case of IBS signal being provided in the adjacent section the mention of the same need to be made as follows: The section between ------ ------ (name of the section on which the IBS is provided) has been split into two Block sections by providing Track Circuit/Axle Counters and Intermediate Block Stop Signal at Km. -------- and Km. ------ on Up and Dn lines respectively, which are controlled by Track Circuit/Electronic Axle Counter and Double Line Block Instrument.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      In case the adjacent section is provided with the automatic signals, necessary mention of the same need to be made in the SWR literature.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      In case of outlying sidings/DK station taking off from the section its name and Km in Up/Dn direction should be mentioned. Their detailed working instructions should be given in Appendix &apos;F&apos;.
                    </p>
                  </li>
                  {/* 2.3 */}
                  <li className="relative bg-white/5 rounded-xl p-4 border border-white/10 pl-16">
                    <span className="absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/70 text-white text-lg font-bold shadow-lg border-2 border-white/15">
                      2.3
                    </span>
                    <h3 className="text-purple-200 font-semibold lg:text-lg text-base mb-2">BLOCK SECTION LIMITS ON EITHER SIDE OF THE STATION ON DIFFERENT DIRECTIONS</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Points up to which block section in rear terminates and the point from which the block section in advance starts should be indicated in the following tabular format:
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 mt-2">
                      <div className="grid grid-cols-3 gap-2 lg:text-base text-sm">
                        <div className="font-semibold text-purple-200">Between Stations</div>
                        <div className="font-semibold text-purple-200">The point from which the &quot;Block Section&quot; commences</div>
                        <div className="font-semibold text-purple-200">The point at which the &quot;Block Section&quot; ends</div>
                      </div>
                    </div>
                  </li>
                  {/* 2.4 */}
                  <li className="relative bg-white/5 rounded-xl p-4 border border-white/10 pl-16">
                    <span className="absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/70 text-white text-lg font-bold shadow-lg border-2 border-white/15">
                      2.4
                    </span>
                    <h3 className="text-purple-200 font-semibold lg:text-lg text-base mb-2">GRADIENTS IF ANY</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      The gradients in the yard and the adjacent block sections should be mentioned with their locations. Any gradient which are steep enough to warrant special precaution in train operation should be mentioned.
                    </p>
                  </li>
                  {/* 2.5 */}
                  <li className="relative bg-white/5 rounded-xl p-4 border border-white/10 pl-16">
                    <span className="absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/70 text-white text-lg font-bold shadow-lg border-2 border-white/15">
                      2.5
                    </span>
                    <h3 className="text-purple-200 font-semibold lg:text-lg text-base mb-2">LAY OUT</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Under this head, information pertaining to the number of running lines in the main yard, (namely UP Loop, UP Main, DN Main and Common Loop etc.), Goods sheds/siding, Hot Axle siding, passing sidings, engineering sidings, sidings taking off from the yard with the details whether electrified/non-electrified etc. and how they are isolated from the running lines should be mentioned. The information in relation to provision of low/high level platforms on the running lines/goods sidings should be given.
                    </p>
                    <ol className="space-y-2 mt-4 list-none">
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-purple-400/40 text-purple-200 font-bold flex items-center justify-center">
                          2.5.1
                        </span>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-purple-200">RUNNING LINES, DIRECTION OF MOVEMENT &amp; HOLDING CAPACITY IN CSR.</span> The direction of movements on all the lines and Clear Standing Room of running lines in terms of metres need to be specified.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-purple-400/40 text-purple-200 font-bold flex items-center justify-center">
                          2.5.2
                        </span>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-purple-200">NON RUNNING LINES AND THEIR CAPACITY IN CSR</span>
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-purple-400/40 text-purple-200 font-bold flex items-center justify-center">
                          2.5.3
                        </span>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold text-purple-200">ANY SPECIAL FEATURE IN THE LAYOUT.</span> Any special feature of the yard such as catch siding, slip siding, non-standard turnouts, curves, spring points etc. having bearing on the operation of trains need to be mentioned.
                        </p>
                      </li>
                    </ol>
                  </li>
                  {/* 2.6 */}
                  <li className="relative bg-white/5 rounded-xl p-4 border border-white/10 pl-16">
                    <span className="absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/70 text-white text-lg font-bold shadow-lg border-2 border-white/15">
                      2.6
                    </span>
                    <h3 className="text-purple-200 font-semibold lg:text-lg text-base mb-2">LEVEL CROSSINGS</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      Detailed working of the gate along with the particulars regarding LC gate No., location, class, normal position, whether interlocked or non-interlocked, whether communication provided or not and whether Train Actuated Warning Device(TAWD) provided or not, how the gate is operated etc, need to be mentioned in Appendix &apos;A&apos;.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Format Section 3: SYSTEM AND MEANS OF WORKING */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                3
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  System and Means of Working
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                  System of working in force - Absolute/Automatic by using Double line/ Single line Token/Tokenless Block Instruments, whether co-operative or non-co-operative, the staff responsible for their operation and custody of keys should be clearly mentioned. Mention should also be made of the availability of block telephone at the station and Telephone provided at IBS posts to establish contact by the Loco pilot with Station Master in rear, in case of any necessity.
                </p>
              </div>
            </div>

            {/* Format Section 4: SYSTEM OF SIGNALLING AND INTERLOCKING */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                4
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  System of Signalling and Interlocking
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Item 4.1 */}
                  <div className="relative bg-white/5 rounded-xl p-3 border border-blue-400/20 shadow-md flex items-start group hover:shadow-blue-400/20 transition-all duration-300">
                    <span className="absolute -left-5 -top-5 lg:-left-7 lg:-top-7 lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-linear-to-br from-blue-600/50 to-blue-900/50 border-4 border-blue-400/20 shadow-xl flex items-center justify-center lg:text-3xl text-base font-bold text-white group-hover:ring-2 group-hover:ring-blue-200 transition-all duration-300">
                      4.1
                    </span>
                    <div className="pl-3">
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-3 tracking-wide drop-shadow-sm">
                        Standard of Interlocking and Signalling System
                      </h3>
                      <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        The Standard of interlocking, type of signalling (MLQ/TALQ/MAUQ/MACLS), method of operating the signals/points from Lever Frames/Control Panel/VDU/CTC, provision of axle counters/track circuits on running lines, Calling-On Signals/IBS, special signalling features such as fixed Warner, stop boards at terminal stations, emergency cross-overs, permanently locked points, motor operated points at an otherwise mechanically worked stations, emergency/crank handle keys and their custody, indications(electric/banner type) of points/trap points/signals/track circuits/axle counters need to be mentioned. The detailed description of the Lever Frame/control panel/Video Display Unit for route setting using point/signal/gate control switches, individual operation of points, operations of gates within the station limits, setting of points using the crank handle and the maintenance of proper records of emergency operation counters provided on the panel need to be mentioned here.
                      </p>
                      <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        Procedure for working of stations provided with Train Protection and Warning System and Anti Collision Device need to be mentioned. The procedure for resetting of the system in case of failure of Axle counter on berthing portion as well as IBS section, emergency operation of points, emergency route cancellation, clearing of block etc also need to be mentioned from operations point of view.
                      </p>
                      <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed italic">
                        (Details of signalling and interlocking should, however, be given in Appendix &apos;B&apos; and details of Anti Collision Device, if provided, be given in Appendix &apos;C&apos;).
                      </p>
                    </div>
                  </div>
                  {/* Item 4.2 */}
                  <div className="relative bg-white/5 rounded-xl p-3 border border-blue-400/20 shadow-md flex items-start group hover:shadow-blue-400/20 transition-all duration-300">
                    <span className="absolute -left-5 -top-5 lg:-left-7 lg:-top-7 lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-linear-to-br from-blue-600/50 to-blue-900/50 border-4 border-blue-400/20 shadow-xl flex items-center justify-center lg:text-3xl text-base font-bold text-white group-hover:ring-2 group-hover:ring-blue-200 transition-all duration-300">
                      4.2
                    </span>
                    <div className="pl-3">
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-2 tracking-wide drop-shadow-sm">
                        CUSTODY OF RELAY ROOM KEY AND PROCEDURE FOR ITS HANDING OVER AND TAKING OVER BETWEEN STATION MASTER AND S&amp;T MAINTENANCE STAFF
                      </h3>
                    </div>
                  </div>
                  {/* Item 4.3 */}
                  <div className="relative bg-white/5 rounded-xl p-3 border border-blue-400/20 shadow-md flex items-start group hover:shadow-blue-400/20 transition-all duration-300">
                    <span className="absolute -left-5 -top-5 lg:-left-7 lg:-top-7 lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-linear-to-br from-blue-600/50 to-blue-900/50 border-4 border-blue-400/20 shadow-xl flex items-center justify-center lg:text-3xl text-base font-bold text-white group-hover:ring-2 group-hover:ring-blue-200 transition-all duration-300">
                      4.3
                    </span>
                    <div className="pl-3">
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-2 tracking-wide drop-shadow-sm">
                        POWER SUPPLY
                      </h3>
                      <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                        The sources of Power supply for Signalling such as Dn AT/Up AT/ Local supply (State Electricity Board)/Diesel Generator/UPS/Integrated Power Supply etc. should be mentioned here. It should be clearly mentioned whether the changeover from one source of supply to the other shall be automatic or manual in case of failure of normal source of supply. The procedure for manual changeover should be described.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Format Section 5: TELECOMMUNICATION */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-rose-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                5
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Telecommunication
                </span>
              </h2>
              <div className="bg-linear-to-br from-rose-500/20 via-pink-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-rose-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The availability of the telecommunication facilities at the station and their operational aspects should be clearly defined:
                </p>
                <ol className="grid grid-cols-1 lg:grid-cols-2 gap-5 list-none">
                  {[
                    "Section Control/Dy. Control/Traction Power Control Telephone, etc.",
                    "Auto/DOT Telephones",
                    "Magneto Telephone with the cabins/gates",
                    "IBS Telephone with IBS at Km. -------",
                    "Telephone with Axle Counter reset boxes",
                    "Telephone for yard communication",
                    "VHF Sets",
                    "Mobile Train Radio Communication (MTRC)",
                  ].map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 bg-linear-to-r from-rose-900/30 to-purple-900/10 rounded-xl px-4 py-3 border border-rose-400/20 shadow-lg group hover:shadow-rose-500/20 transition-all duration-300 relative"
                    >
                      <span className="flex items-center justify-center w-9 h-9 min-w-9 rounded-full bg-rose-600/60 border-2 border-rose-200/20 text-rose-50 font-bold text-base shadow group-hover:bg-pink-600/70 group-hover:scale-105 transition-all duration-300 mt-0 drop-shadow-lg">
                        {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"][idx]}
                      </span>
                      <span className="text-rose-50/95 lg:text-base text-sm leading-relaxed flex-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed mt-4">
                  The action to be taken in case of failure of communication given above to be clearly spelt out. (Details of working should be given in appendix &apos;B&apos;)
                </p>
              </div>
            </div>

            {/* Format Section 6: SYSTEM OF TRAIN WORKING */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                6
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  System of Train Working
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-amber-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">

                  {/* 6.1 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.1
                      </span>
                      DUTIES OF TRAIN WORKING STAFF
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      The duties of the train working operational staff such as Station Master, Switchman, Cabinman, Leverman, Pointsman, Platform Porter, Gateman for train operation should be mentioned in detail in Appendix &apos;D&apos; giving specific references to the G&SR of the Railway and the Block Working Manual.
                    </p>
                    <ol className="space-y-2 mt-4 ml-2">
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400/10 border-2 border-yellow-200/40 text-yellow-200 font-bold text-sm shadow mt-0.5">
                          6.1.1
                        </span>
                        <span className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          TRAIN WORKING STAFF IN EACH SHIFT - The availability of above operation staff provided at the Station in each shift with their duties for working of trains should be mentioned in Appendix &apos;D&apos;.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400/10 border-2 border-yellow-200/40 text-yellow-200 font-bold text-sm shadow mt-0.5">
                          6.1.2
                        </span>
                        <span className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          RESPONSIBILITY FOR ASCERTAINING CLEARANCE OF THE LINES AND ZONES OF RESPONSIBILITY - Responsibility for ascertaining clearance of lines and zones of responsibility of each of the staff on duty should be clearly mentioned here. Mention should be made that Private Number Book should be under the custody of train passing staff who is authorised to use it.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400/10 border-2 border-yellow-200/40 text-yellow-200 font-bold text-sm shadow mt-0.5">
                          6.1.3
                        </span>
                        <span className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          ASSURANCE OF STAFF IN THE ASSURANCE REGISTER - Every train passing staff posted newly at the station or leave reserve staff at the station or regular staff who has resumed his duties after more than 15 days absence must go through Station Working Rules in force and give assurance in the prescribed Assurance Register.
                        </span>
                      </li>
                    </ol>
                  </div>

                  {/* 6.2 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.2
                      </span>
                      CONDITIONS FOR GRANTING LINE CLEAR
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Under this head, principles of the System of Working in force on the station should be described briefly and clearly as applicable to the station. Specific points on the track up to which the line is required to be kept clear must be indicated. Mention of outlying sidings, if involved, may also be made.
                    </p>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200/20 border border-yellow-100/30 text-yellow-200 font-bold text-sm shadow mt-0.5">
                          6.2.1
                        </span>
                        <span className="text-yellow-50/95 lg:text-base text-sm">
                          Any Special Conditions To Be Observed While Receiving Or Despatching A Train
                        </span>
                      </div>
                      <ol className="ml-10 space-y-0.5 list-decimal list-inside">
                        {[
                          "6.2.1.1 Setting of points against block line.",
                          "6.2.1.2 Reception of train on blocked line.",
                          "6.2.1.3 Reception of train on non-signalled line.",
                          "6.2.1.4 Despatch of train from non-signalled line.",
                          "6.2.1.5 Despatch of train from line provided with common starter signal.",
                          "6.2.1.6 Any other special conditions should be mentioned giving reference to the G&SR.",
                        ].map((text, idx) => (
                          <li key={text} className="text-yellow-50/95 lg:text-base text-sm ml-2 relative pl-4 flex items-center">
                            <span className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-300/10 border border-yellow-100/20 text-yellow-200 font-bold text-sm shadow">{String.fromCharCode(97 + idx)})</span>
                            <span className="pl-7">{text.slice(7)}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* 6.3 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.3
                      </span>
                      Conditions for taking &apos;off&apos; approach signals
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      This needs to be mentioned here giving reference to the relevant provisions of the G&SR.
                    </p>
                    <div className="flex items-start gap-3 mt-1">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400/10 border-2 border-yellow-200/40 text-yellow-200 font-bold text-sm shadow mt-0.5">
                        6.3.1
                      </span>
                      <span className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                        Responsibility of station master for restoration of signals to &apos;on&apos;. Station master should ensure that signal is put back to &apos;ON&apos; after passage of the train as per GR 3.36.2 (b).
                      </span>
                    </div>
                  </div>

                  {/* 6.4 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.4
                      </span>
                      Simultaneous Reception/Despatch, Crossing And Precedence OF TRAINS
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      This should mention the specific setting of points and traps for the purpose of achieving the desired signal overlaps/isolations to Sand Humps/sidings etc. while receiving trains simultaneously, crossing and giving precedence to trains at the station.
                    </p>
                  </div>

                  {/* 6.5 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.5
                      </span>
                      Complete Arrival Of Trains
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      Responsibility for verification of complete arrival of trains before closing the block section should be made clear. In case Block Proving by Axle Counter (BPAC) installed on the section, the procedure of block working should be mentioned, giving reference to the relevant provisions of G&SR and Block Working Manual.
                    </p>
                  </div>
                  
                  {/* 6.6 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.6
                      </span>
                      Despatch of trains
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      Particulars regarding starting of trains from running lines, non-signalled lines, issue of caution orders etc should be mentioned giving reference to the provision of G&SR and Block Working Manual. In case IBS is provided, the procedure for despatch of trains up to the IBS and thereafter to the next station should be clearly defined.
                    </p>
                  </div>

                  {/* 6.7 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.7
                      </span>
                      Trains running through
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      The provisions given in G&SR should be mentioned.
                    </p>
                  </div>

                  {/* 6.8 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.8
                      </span>
                      Working in case of failure
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      Working in case of failure of track circuits, points, signals, block instruments, axle counters, Axle Counter Block, procedure for working over damaged points, reception of trains on obstructed lines, non-signalled line including failure to read the occupation of line by trolley or light engine etc. should be mentioned in detail here
                    </p>
                  </div>
                  
                  {/* 6.9 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-yellow-200 font-semibold lg:text-lg text-base mb-4 flex items-center gap-2">
                      <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-200 font-bold lg:text-lg text-base shadow-md ring-2 ring-yellow-200/30 mr-2">
                        6.9
                      </span>
                      Provisions for working of trolleys/motor trolleys/material lorries
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Some of the precautions such as given below should be mentioned:
                    </p>
                    <ul className="ml-2 space-y-3 text-sm">
                      {[
                        "(i) The section where axle counters are provided in lieu of track circuits, Trolleys, Motor Trolleys, Lorries etc., which are not insulated, shall not be allowed to run except on line clear.",
                        "(ii) Motor trolleys/Tower Wagon/Material Lorries are not likely to actuate the Axle counter correctly. When they are to run over the section split by Axle counters, the whole section to be treated as one and next train to be started after the last train has arrived complete.",
                        "(iii) In all other respects the working of a light Motor trolley shall conform to the rules laid down for ordinary trolleys while running without block protection and to those laid down for motor trolleys while running under block protection or following another light motor trolley or a motor trolley.",
                        "(iv) Any other restriction on movement of trolleys/motor trolleys/material lorries/tower wagons etc."
                      ].map((txt, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200/10 border border-yellow-100/30 text-yellow-200 font-bold text-sm shadow mt-0.5">
                            {["i", "ii", "iii", "iv"][idx]}
                          </span>
                          <span className="text-yellow-50/95">{txt.slice(txt.indexOf(')')+1).trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Format Section 7: Blocking of line */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                7
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Blocking of line
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-red-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The precautions to be taken by the Station Master, when lines are blocked by stabled vehicles or otherwise for maintenance works, to be detailed here.
                </p>
              </div>
            </div>

            {/* Format Section 8: Shunting */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                8
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Shunting
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-4">
                  {[
                    {
                      num: "8.1",
                      text: "General precautions"
                    },
                    {
                      num: "8.2",
                      text: "Shunting in the face of approaching train"
                    },
                    {
                      num: "8.3",
                      text: "Prohibition of shunting, special features if any."
                    },
                    {
                      num: "8.4",
                      text: "Shunting on single line – Within station section, Between Last Stop Signal and opposite First Stop Signal, Beyond opposite First Stop Signal, During failure of block instrument on single line."
                    },
                    {
                      num: "8.5",
                      text: "Shunting on double line - Block back, Block forward, Following a train travelling away, Upto IBS, Beyond IBS, During failure of block instrument on double line."
                    },
                    {
                      num: "8.6",
                      text: "Shunting in the siding taking off from station yard/ goods yard."
                    }
                  ].map((item) => (
                    <li
                      key={item.num}
                      className={`flex items-start gap-4 bg-linear-to-r 
                        from-orange-700/10 to-transparent rounded-xl p-3 
                        border border-orange-400/30 shadow-lg group hover:shadow-orange-400/30 
                        transition-all duration-300 relative`}
                    >
                      <span className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-orange-800/80 border-2 border-orange-400/30 text-orange-100 font-bold text-lg shadow-md group-hover:scale-110 group-hover:bg-orange-700/80 transition-all duration-300 mt-1 drop-shadow-lg ring-2 ring-white/10 select-none">
                        {item.num}
                      </span>
                      <span className="text-orange-50/95 lg:text-base text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Format Section 9: Abnormal conditions */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                9
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Abnormal conditions
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* (a) The Rules To Be Observed In The Event Of Abnormal Conditions */}
                  <div className="bg-linear-to-r from-violet-800/30 to-fuchsia-700/20 rounded-xl p-5 border border-violet-400/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-violet-500/50 to-fuchsia-500/70 text-white text-lg font-bold border-2 border-violet-300/30 shadow-md">
                        a
                      </span>
                      <h3 className="text-violet-100 font-semibold lg:text-lg text-base">
                        The Rules To Be Observed In The Event Of Abnormal Conditions
                      </h3>
                    </div>
                    <p className="text-violet-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The procedure to be followed in the event of following abnormal conditions should be specifically mentioned.
                    </p>
                    <ul className="flex flex-col gap-1 mt-2">
                      {[
                        "During partial interruption/ failure of Electrical communication instrument.",
                        "The authority to proceed in the occupied block section in case of obstruction of line or accident etc.",
                        "Trains delayed in block section",
                        "Failure/passing of intermediate block stop signal at 'ON'.",
                        "Failure of Axle Counter Block/ BPAC",
                        "Failure of MTRC",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-6 h-6 min-w-6 flex items-center justify-center rounded-full bg-violet-700/60 text-violet-50 font-bold text-xs border border-violet-50/30 shadow group">
                            {String.fromCharCode(0x69 + idx) /* i, ii, iii... */}
                          </span>
                          <span className="text-violet-50/95 text-xs lg:text-sm leading-relaxed select-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* (b) Procedure For Emergency Operation Of Points By Crank Handle */}
                  <div className="bg-linear-to-r from-violet-800/30 to-fuchsia-700/20 rounded-xl p-5 border border-violet-400/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-violet-500/50 to-fuchsia-500/70 text-white text-lg font-bold border-2 border-violet-300/30 shadow-md">
                        b
                      </span>
                      <h3 className="text-violet-100 font-semibold lg:text-lg text-base">
                        Procedure For Emergency Operation Of Points By Crank Handle
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-1 mt-2">
                      {[
                        "The detailed procedure for emergency crank handle operation of motor operated points at different lines at the station from operation point of view should be mentioned here.",
                        "Procedure for Emergency operation of point with point zone axle counter/ track circuit failure and emergency route release, giving reference to GR 3.39 and GR 3.77 should be mentioned here."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-6 h-6 min-w-6 flex items-center justify-center rounded-full bg-violet-700/60 text-violet-50 font-bold text-xs border border-violet-50/30 shadow group">
                            {String.fromCharCode(0x69 + idx)}
                          </span>
                          <span className="text-violet-50/95 text-xs lg:text-sm leading-relaxed select-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* (c) Certification Of Clearance Of Track Before Calling On Signal Operation Is Initiated */}
                  <div className="bg-linear-to-r from-violet-800/30 to-fuchsia-700/20 rounded-xl p-5 border border-violet-400/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-violet-500/50 to-fuchsia-500/70 text-white text-lg font-bold border-2 border-violet-300/30 shadow-md">
                        c
                      </span>
                      <h3 className="text-violet-100 font-semibold lg:text-lg text-base">
                        Certification Of Clearance Of Track Before Calling On Signal Operation Is Initiated
                      </h3>
                    </div>
                    <p className="text-violet-50/95 lg:text-base text-sm leading-relaxed">
                      Mention should be made that before taking off Calling-on Signal during failure of track circuit/axle counter, the route and the clearance of the track over which train would pass to be verified by SM/ASM.
                    </p>
                  </div>

                  {/* (d) Reporting Failure Of Points, Track Circuit/Axle Counter And Interlocking */}
                  <div className="bg-linear-to-r from-violet-800/30 to-fuchsia-700/20 rounded-xl p-5 border border-violet-400/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-violet-500/50 to-fuchsia-500/70 text-white text-lg font-bold border-2 border-violet-300/30 shadow-md">
                        d
                      </span>
                      <h3 className="text-violet-100 font-semibold lg:text-lg text-base">
                        Reporting Failure Of Points, Track Circuit/Axle Counter And Interlocking
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-1 mt-2">
                      {[
                        "Mention should be made that whenever there is a failure of points, track circuit/Axle Counter or any other interlocking gear at the station, the failure should be reported by SM/ASM on duty to the concerned Signalling Maintenance Staff on duty responsible for attending to the failure and only after receipt of the written memo from the Signalling Maintainer for rectification of the fault, SM/ASM should restore the normal working..",
                        "The entries in failure register to be done with message to the Section Controller."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-6 h-6 min-w-6 flex items-center justify-center rounded-full bg-violet-700/60 text-violet-50 font-bold text-xs border border-violet-50/30 shadow group">
                            {idx === 0 ? "i" : "ii"}
                          </span>
                          <span className="text-violet-50/95 text-xs lg:text-sm leading-relaxed select-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 9.1 TOTAL FAILURE OF COMMUNICATION */}
                  <div className="bg-linear-to-r from-fuchsia-800/30 to-violet-700/20 rounded-xl p-5 border border-fuchsia-400/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500/50 to-violet-500/70 text-white text-lg font-bold border-2 border-fuchsia-300/30 shadow-md">
                        9.1
                      </span>
                      <h3 className="text-fuchsia-100 font-semibold lg:text-lg text-base">
                        TOTAL FAILURE OF COMMUNICATION
                      </h3>
                    </div>
                    <p className="text-fuchsia-50/95 lg:text-base text-sm leading-relaxed">
                      Provision of the SR and instructions laid down in Block Working Manual relating to the working of trains during total failure of communication at the station should be briefly summed up giving the action to be taken and by whom and what precaution to be taken giving reference to the relevant provisions of the G&amp;SR.
                    </p>
                  </div>

                  {/* 9.2 TEMPORARY SINGLE LINE WORKING ON DOUBLE LINE SECTION */}
                  <div className="bg-linear-to-r from-fuchsia-800/30 to-violet-700/20 rounded-xl p-5 border border-fuchsia-400/20 shadow-lg flex items-center gap-3">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500/50 to-violet-500/70 text-white text-lg font-bold border-2 border-fuchsia-300/30 shadow-md">
                      9.2
                    </span>
                    <h3 className="text-fuchsia-100 font-semibold lg:text-lg text-base">
                      TEMPORARY SINGLE LINE WORKING ON DOUBLE LINE SECTION
                    </h3>
                  </div>

                  {/* 9.3 DESPATCH OF TRAIN UNDER AUTHORITY TO PROCEED WITHOUT LINE CLEAR OR TO ASSIST THE CRIPPLED TRAIN */}
                  <div className="bg-linear-to-r from-fuchsia-800/30 to-violet-700/20 rounded-xl p-5 border border-fuchsia-400/20 shadow-lg flex items-center gap-3">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500/50 to-violet-500/70 text-white text-lg font-bold border-2 border-fuchsia-300/30 shadow-md">
                      9.3
                    </span>
                    <h3 className="text-fuchsia-100 font-semibold lg:text-lg text-base">
                      DESPATCH OF TRAIN UNDER AUTHORITY TO PROCEED WITHOUT LINE CLEAR OR TO ASSIST THE CRIPPLED TRAIN
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Format Section 10: VISIBILITY TEST OBJECT */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                10
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Visibility Test Object
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Position of the Visibility Test Object in each Zone of operation and the officials authorised to check the V.T.O from a nominated place at the station should be mentioned here.
                </p>
              </div>
            </div>

            {/* Format Section 11: ESSENTIAL EQUIPMENTS AT THE STATION */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                11
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Essential Equipments at the Station
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-emerald-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The list of the essential equipment should be given in Appendix-&apos;E&apos;.
                </p>
              </div>
            </div>

            {/* Format Section 12: FOG SIGNAL MEN */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-slate-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-2 items-center justify-center text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/60 border-2 border-white/20 shadow-lg text-blue-100 font-bold text-base mb-3">
                12
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Fog Signal Men Called to be when Fog
                </span>
              </h2>
              <div className="bg-linear-to-br from-slate-500/20 via-gray-500/15 to-zinc-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-slate-50/95 lg:text-lg text-base leading-relaxed font-light">
                  In Foggy or tempestuous weather or in dust storm when V.T.O. cannot be seen from the SM&apos;s Office, the SM shall send trained men to act as fog signalmen. Instructions regarding their selection from Traffic and Engineering Departments, entry of their names in the Fog Signal Register and taking assurance by the SM to be mentioned clearly.
                </p>
              </div>
            </div>

            {/* List of Appendices Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  LIST OF APPENDICES
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center font-bold text-white text-lg">A</div>
                      <h3 className="text-purple-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;A&apos;</h3>
                    </div>
                    <p className="text-purple-50/95 lg:text-base text-sm">WORKING OF LEVEL CROSSING GATES</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center font-bold text-white text-lg">B</div>
                      <h3 className="text-blue-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;B&apos;</h3>
                    </div>
                    <p className="text-blue-50/95 lg:text-base text-sm">SYSTEM OF SIGNALLING AND INTERLOCKING AND COMMUNICATION ARRANGEMENTS AT THE STATION</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center font-bold text-white text-lg">C</div>
                      <h3 className="text-red-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;C&apos;</h3>
                    </div>
                    <p className="text-red-50/95 lg:text-base text-sm">ANTI COLLISION DEVICE (RAKSHA KAVACH)</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center font-bold text-white text-lg">D</div>
                      <h3 className="text-green-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;D&apos;</h3>
                    </div>
                    <p className="text-green-50/95 lg:text-base text-sm">DUTIES OF TRAIN PASSING STAFF AND STAFF IN EACH SHIFT</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-500/30 to-amber-500/30 flex items-center justify-center font-bold text-white text-lg">E</div>
                      <h3 className="text-yellow-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;E&apos;</h3>
                    </div>
                    <p className="text-yellow-50/95 lg:text-base text-sm">LIST OF ESSENTIAL EQUIPMENTS PROVIDED AT THE STATION</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500/30 to-violet-500/30 flex items-center justify-center font-bold text-white text-lg">F</div>
                      <h3 className="text-indigo-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;F&apos;</h3>
                    </div>
                    <p className="text-indigo-50/95 lg:text-base text-sm">RULES FOR WORKING OF DK STATIONS, HALTS, IBH, IBS, AND OUTLYING SIDINGS</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 lg:col-span-2">
                    <div className="flex items-center flex-col text-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center font-bold text-white text-lg">G</div>
                      <h3 className="text-teal-200 font-semibold lg:text-base text-sm mb-3">APPENDIX &apos;G&apos;</h3>
                    </div>
                    <p className="text-teal-50/95 lg:text-base text-sm mb-2">RULES FOR WORKING OF TRAINS IN ELECTRIFIED SECTIONS</p>
                    <p className="text-teal-50/80 lg:text-base text-sm italic">(To be jointly signed by Divisional Operations Manager and Divisional Electrical Engineer)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Temporary Working Order Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  TEMPORARY WORKING ORDER
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-xl py-4 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-orange-50/80 lg:text-sm text-xs italic mb-4 text-center">(Details of N.I. Working are given in a later chapter)</p>
                
                <div className="bg-white/5 rounded-xl p-5 border border-orange-400/20 mb-6">
                  <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Temporary Working order or <span className="font-semibold text-orange-200">TWO</span> is an embodiment of detailed instructions issued and circulated by the Sr.DOM/DOM whenever any pre-planned work of signalling, electrical (OHE) or engineering department is to be executed, requiring special safety precautions to be observed by staff.
                  </p>
                </div>

                {/* Section I: Circumstances */}
                <div className="bg-white/5 rounded-xl p-3 border border-orange-400/20 mb-6">
                  <h3 className="text-orange-200 font-bold lg:text-xl text-lg mb-4 flex items-center flex-col text-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-orange-500/40 to-amber-500/40 flex items-center justify-center font-bold text-white">I</div>
                    <span className="mb-3">Circumstances under which &apos;TWO&apos; is to be issued:</span>
                  </h3>
                  <div className="space-y-3 pl-0">
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400/50 hover:bg-white/10 transition-all duration-300">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-bold text-orange-300 text-lg">1.</span> <span className="ml-2">When the nature of work is such, that it will require the imposition of speed restriction for more than one day.</span>
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400/50 hover:bg-white/10 transition-all duration-300">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-bold text-orange-300 text-lg">2.</span> <span className="ml-2">In all the cases when addition or alteration in the layout of the yard or to permanent signalling and interlocking arrangements are to be made.</span>
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400/50 hover:bg-white/10 transition-all duration-300">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-bold text-orange-300 text-lg">3.</span> <span className="ml-2">Overhauling of the signal and lever frames.</span>
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400/50 hover:bg-white/10 transition-all duration-300">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-bold text-orange-300 text-lg">4.</span> <span className="ml-2">The nature of the work involves temporary cessation of working of the trains.</span>
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400/50 hover:bg-white/10 transition-all duration-300">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-bold text-orange-300 text-lg">5.</span> <span className="ml-2">For construction of all new installations on or near the track, such as new station, foot over bridge, OHE, renewal of track, providing temporary diversions, etc.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section II: Procedure */}
                <div className="bg-white/5 rounded-xl p-3 border border-amber-400/20">
                  <h3 className="text-amber-200 font-bold lg:text-xl text-lg mb-4 flex items-center flex-col text-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-500/40 to-yellow-500/40 flex items-center justify-center font-bold text-white">II</div>
                    <span className="mb-3">Procedure for preparation of Temporary Working Order/Instructions:</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-amber-400/20 hover:bg-white/10 transition-all duration-300">
                      <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed">
                        The draft of TWO is prepared by the supervisor concerned viz. <span className="font-semibold text-amber-200">SE(P.Way)</span> for engineering works, by the <span className="font-semibold text-amber-200">SE(Signal)</span> for signalling and interlocking work and the <span className="font-semibold text-amber-200">SE(Elec.)</span> for electrified sections etc. for electrical works detailing the requirement of the work and precaution to be observed. This preplanning of the work is known as <span className="font-semibold text-amber-200">Draft of TWO</span>.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-amber-400/20 hover:bg-white/10 transition-all duration-300">
                      <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed">
                        Draft TWO is submitted by the <span className="font-semibold text-amber-200">SE(P.Way)/SE(Signal)/SE(Elec.)</span> to their Divisional Officers i.e <span className="font-semibold text-amber-200">Sr.DEN/DEN/ Sr.DSTE/DSTE/Sr.DEE/DEE</span>. After the draft TWO is checked and justified by the divisional officer of department concerned. <span className="font-semibold text-amber-200">Sr.DEN/DEN/ Sr.DSTE/DSTE/Sr.DEE/DEE</span> will send the draft TWO to the <span className="font-semibold text-amber-200">Sr.DOM/DOM</span> who will include instructions for regulation of Traffic during the execution of work and will issue the TWO with detailed instructions including the safety precautions to be observed during execution of work.
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default StationWorkingRules