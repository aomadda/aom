"use client"
import React from 'react'

const GSRAppendixPage387B = () => {
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
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                {/* Section 2 Header */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      2. Occasions when line patrolling is necessary:
                    </p>
                  </div>
                </div>

                {/* Section 2.1 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.1</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="text-base lg:text-lg text-blue-100/90 mb-4">
                      2.1. Patrolling of railway line is resorted to under the following circumstances.
                    </p>
                    <div className="space-y-3">
                      {[
                        { num: 1, text: "In the event of sudden storm or hurricane during day or night;" },
                        { num: 2, text: "Monsoon patrolling;" },
                        { num: 3, text: "Watch at vulnerable points during monsoons;" },
                        { num: 4, text: "Security patrolling during civil disorders." }
                      ].map((item, index) => (
                        <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                          <div className="relative flex flex-col gap-3 rounded-2xl bg-slate-900/50 px-5 py-4 lg:px-6 lg:py-5">
                            <div className="flex items-center gap-4">
                              <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold tracking-wide text-cyan-100 text-center lg:text-base">
                                {item.num}
                              </span>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                            </div>
                            <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg pl-14 lg:pl-12">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2.2 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.2</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                      <p>
                        2.2. In the event of sudden storm or hurricane during day or night, Gangmen shall turn up
                        on their own initiative for patrolling of track as directed by the Gangmate. This shall be
                        in addition to the regular monsoon patrolling that is already in force during the night.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2.3 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.3</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                      <p>
                        2.3. During the monsoon, certain sections of the railway line as may be specified shall be
                        patrolled to detect damage by floods such as breaches, settlements or scours and
                        immediate action should be taken to protect trains. This patrol is confined mostly during
                        night times from sunset to sunrise. The normal monsoon period for Secunderabad,
                        Hyderabad and Nanded divisions is from 15th June to 15th October, for Guntakal
                        division from 15th June to 31st January and for Vijayawada and Guntur divisions, from
                        15th June to 15th January of the following year. The DENs shall decide from the state
                        of the weather and from any forecast telegrams and from reports of highways and
                        irrigation departments that may be communicated to them, as to when it is necessary
                        to put on the patrol. The procedure for monsoon patrolling is described in detail in
                        paras 4 to 6 below.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2.4 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.4</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                      <p>
                        2.4. The PWIs and AENs should get themselves thoroughly acquainted with the instructions
                        contained in Chapters X and XI of the Indian Railways Way & Works Manual and
                        chapter VII and X of Indian Railways Permanent Way Manual before and during
                        monsoon and ensure that those working under them understand the instructions
                        pertaining to their duties thoroughly. DENs should satisfy themselves that officers and
                        staff working under them are carrying out these instructions without fail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2.5 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.5</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-xl text-white/90 mb-4">
                      2.5. Watch at vulnerable points during monsoon:-
                    </p>
                    <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                      <p>
                        On certain sections where it is not warranted to have full scale line patrolling but to
                        confine only to known vulnerable locations to be watched, it may be considered
                        sufficient during monsoon period to post watchmen particularly during nights with
                        complete equipment for protection of the line. During day time, as Keyman is
                        patrolling the line, or as gang is available or as the Loco Pilot is having a clear view of
                        the track, it is not normally necessary to provide watchman. However DENs, at their
                        discretion may provide day watchman also where visibility to an approaching Loco Pilot
                        is not good for adequate distance or due to other considerations. The list of vulnerable
                        locations must be reviewed and brought up to date before every monsoon period by
                        DENs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2.6 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl shadow-purple-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.6</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-xl text-white/90 mb-6">
                      2.6. Security patrolling during civil disorders:-
                    </p>

                    {/* 2.6.1 */}
                    <div className="space-y-4">
                      <p className="font-semibold text-base lg:text-lg text-white/90">
                        2.6.1.On the apprehension of a civil disturbance, the DENs shall contact the Local Police
                        authority and arrange, as circumstances may warrant, for security patrolling of the
                        railway line. In such cases the patrol beat will be much shorter than that in the
                        monsoon period. The primary duty of Patrolmen employed on security patrolling shall
                        be to protect the trains against any condition of danger such as tampering of track or
                        obstruction placed on line.
                      </p>

                      {/* 2.6.2 */}
                      <div className="space-y-4">
                        <p className="font-semibold text-base lg:text-lg text-white/90">
                          2.6.2.The following types of security patrolling will ordinarily be introduced:
                        </p>
                        <div className="space-y-3">
                          {[
                            { num: 1, title: "Ordinary patrolling:", text: "This is done in the same manner as monsoon patrolling and is the easiest to adopt since men and supervisory staff are already used to this kind of patrolling. The maximum interval covering any point is 4 hours." },
                            { num: 2, title: "Intensive patrolling:", text: "This is again the same as ordinary patrolling except that the maximum interval covering any point does not exceed 2 hours." },
                            { num: 3, title: "Special patrolling:", text: "This is necessary when it is intended to patrol the line just before the passage of a passenger train or V.I.P. special. It is essential that the line is patrolled for at least half an hour before the passage of the train concerned." }
                          ].map((item, index) => (
                            <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-purple-900/20 transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-blue-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                              <div className="relative flex flex-col gap-3 rounded-2xl bg-slate-900/50 px-5 py-4 lg:px-6 lg:py-5">
                                <div className="flex items-center gap-4">
                                  <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 text-sm font-semibold tracking-wide text-purple-100 text-center lg:text-base">
                                    {item.num}
                                  </span>
                                  <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-400/40 via-indigo-400/30 to-transparent"></div>
                                </div>
                                <p className="font-semibold text-base text-white/90 lg:text-lg pl-14 lg:pl-12">
                                  {item.title}
                                </p>
                                <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg pl-14 lg:pl-12">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 2.6.3 */}
                      <div className="space-y-4 mt-6">
                        <p className="font-semibold text-base lg:text-lg text-white/90">
                          2.6.3. The following procedure shall be adopted for special patrolling:
                        </p>
                        <div className="space-y-3">
                          {[
                            { num: 1, text: "On the particular day, on which such patrolling is intended to be done over a length of line, if a goods/patrol train immediately can precede the passenger train in question and where such goods/patrol train passes over a portion of the line more or less half an hour before scheduled time of the passage of the passenger train, the goods/patrol train will be deemed to have done the necessary patrolling and no further patrolling need to be done in the portion of the line." },
                            { num: 2, text: "Where patrolling has to be done, the length concerned will be divided into sections of about 1 km to 1.25 km long and each such section will be patrolled by a patrolman or a group of patrolmen as decided by the DRM" },
                            { num: 3, text: "Each Patrolman in-charge of a beat should start patrolling the line from one end of the beat about half to three quarters of an hour before the train is expected to pass over the portion and move in the direction of the train. He will, therefore, be able to cover the beat in about 20 minutes and on reaching the end of the beat, he should immediately start walking back to the starting point which should be reached in approximately another 20 minutes. The Patrolman should then continue his up and down journey in his beat till the train passes. Such patrolling will mean that the ends of the beat will be inspected once in about 40 minutes while the mid-point will be patrolled once in 20 minutes." }
                          ].map((item, index) => (
                            <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-purple-900/20 transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-blue-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                              <div className="relative flex flex-col gap-3 rounded-2xl bg-slate-900/50 px-5 py-4 lg:px-6 lg:py-5">
                                <div className="flex items-center gap-4">
                                  <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 text-sm font-semibold tracking-wide text-purple-100 text-center lg:text-base">
                                    {item.num}
                                  </span>
                                  <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-400/40 via-indigo-400/30 to-transparent"></div>
                                </div>
                                <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg pl-14 lg:pl-12">
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

                {/* Section 2.7 */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">2.7</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-xl text-white/90 mb-6">
                      2.7. Patrolling of the lines shall be suitably modified under the following circumstances:
                    </p>
                    <div className="space-y-3">
                      {[
                        { num: 1, text: "On branch lines where there are no passenger trains during the night, patrolling need not be done. On such sections, it will be the duty of Keyman to walk over their full lengths before the passage of the first train, their duty hours being suitably adjusted during the monsoon period." },
                        { num: 2, text: "When there are passenger trains only during the early hours of the night, night patrol can stop after the passage of the last passenger train, but before the first passenger train in the following morning the line should be patrolled as in 2.6.2.1 above. In case the last passenger train runs late for any reason, the patrolling shall be continued by the Patrolmen till the last train passes over the section. This should be ensured by the Station Master on duty." },
                        { num: 3, text: "Similarly, when there are no passenger trains during the early hours of night, but there are passenger trains during early hours of the morning, patrolling can be arranged only in the early hours of the morning , so that patrolling is done once at least before the passage of the first train." },
                        { num: 4, text: "Should it, however, be found necessary to run trains at night on these sections, the DRM shall communicate, not less than 24 hours in advance direct with the AENs and with all Station Masters on the section concerned and the latter shall at once advise the PWI and the nearest Gangmate, who shall depute Gangmen to patrol the line." }
                      ].map((item, index) => (
                        <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-indigo-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-blue-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                          <div className="relative flex flex-col gap-3 rounded-2xl bg-slate-900/50 px-5 py-4 lg:px-6 lg:py-5">
                            <div className="flex items-center gap-4">
                              <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/10 text-sm font-semibold tracking-wide text-indigo-100 text-center lg:text-base">
                                {item.num}
                              </span>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-400/40 via-purple-400/30 to-transparent"></div>
                            </div>
                            <p className="text-base leading-relaxed text-blue-100/90 lg:text-lg pl-14 lg:pl-12">
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

export default GSRAppendixPage387B