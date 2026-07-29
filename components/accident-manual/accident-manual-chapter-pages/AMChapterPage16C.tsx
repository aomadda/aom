"use client"
import React from 'react'

const AMChapterPage16C = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">OFFICER OR SENIOR SUPERVISOR FIRST REACHING THE SITE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive duties and responsibilities of senior officials at accident sites
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Officer Duties */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">306</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Senior Official Duties at Accident Site
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <div className="mt-6 space-y-6">  
                          {/* Duty 1 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">1.</span>
                              <div>
                                <span className="text-white">The Officer or the Senior Supervisor first reaching the site of the accident shall check up:-</span>
                                <div className="ml-1 mt-2 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">a)</span>
                                    <span className="text-white">Whether protection has been done.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">b)</span>
                                    <span className="text-white">On a double line, whether the other line is free from obstruction for moving trains.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">c)</span>
                                    <span className="text-white">Whether necessary message supposed to be relayed regarding the details of the accident, casualties etc., have already been relayed or not.</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty 2 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">2.</span>
                              <div>
                                <span className="text-white">He shall make a quick assessment of the assistance required and relay the same to the control. He will also marshal all available resources like Guard, TTEs, other Railway employees, volunteers from passengers, escort RPF, etc., and organize rescue and relief of the injured and other passengers.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 3 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">3.</span>
                              <div>
                                <span className="text-white">He shall also examine and make a note of all evidence which may prove useful in ascertaining the cause of accident.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 4 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">4.</span>
                              <div>
                                <span className="text-white">He shall arrange for protection of the site/area that holds the clues/evidence which will be essential to arrive at the cause of accident. He shall ensure that such clues/evidence is not tampered with by Railway staff or outsiders.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 5 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">5.</span>
                              <div>
                                <span className="text-white">The following points require special attention:</span>
                                <div className="ml-1 mt-2 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">a)</span>
                                    <span className="text-white">The condition of the track, with special reference to the alignment, gauge, cross- levels, curvature, super elevation and rail headwear:</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">b)</span>
                                    <span className="text-white">Point of mount or point of drop, if any</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">c)</span>
                                    <span className="text-white">The condition of rolling stock with special reference to Brake power.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">d)</span>
                                    <span className="text-white">Marks on sleepers and rails:</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">e)</span>
                                    <span className="text-white">Position of derailed vehicles;</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">f)</span>
                                    <span className="text-white">The position of Block Instruments, signals, points, levers, indicators, keys;</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">g)</span>
                                    <span className="text-white">If the accident has taken place within station section, the position of switches and indications of the Signals, points and track circuits should be jointly recorded preferably by three officers (or three senior subordinates of Traffic, S&T & Engineering departments) of different branches and the relay room should be sealed as soon as possible.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">h)</span>
                                    <span className="text-white">Position of important relays and the condition of the block instrument (i.e. whether open or locked) and</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-blue-400 text-lg">i)</span>
                                    <span className="text-white">He should cross check the list of casualties prepared by the Railway Doctor and countersigned by the civil police (if some bodies are yet to be recovered, it should specifically be mentioned that the list is not final and will be conveyed after salvaging bodies from debris).</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty 6 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">6.</span>
                              <div>
                                <span className="text-white">Where possible a rough sketch showing the position of Derailed vehicles, marks on sleepers etc., should be made.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 7 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">7.</span>
                              <div>
                                <span className="text-white">All relevant materials, clues, damages and deficiencies on the locomotive and rolling stock as well as position of broken or detached parts of Permanent way and rolling stock must be carefully noted and all such clues etc., carefully preserved so that, if considered necessary, the scene could be reconstructed before the police, the Commissioner of Railway Safety or any other senior officer, or court of law.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 8 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">8.</span>
                              <div>
                                <span className="text-white">If, however, sabotage is suspected, in addition to noting and preservation of all such clues, no object should be disturbed unless the police have had an opportunity of making thorough inspection of the site. However, if there is delay in the arrival of Civil and Police officials at the site of the accident, the senior most Railway Official at site may, at his discretion, jack up any portion of a coach or shift any property to the minimum extent necessary, after noting its original position by sketch to extricate human beings trapped under it, in the shortest possible time to save life and minimize sufferings. Normal traffic, however, should not be permitted without consulting the police.</span>
                                <div className="ml-1 mt-2 space-y-2">
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-orange-400 text-lg">a)</span>
                                    <span className="text-white">Further specific enquiry should also be made from the Commissioner of Railway Safety in case of suspected sabotage to ascertain if he would like to inspect the site before the clearance operations commence.</span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                    <span className="mt-1 text-orange-400 text-lg">b)</span>
                                    <span className="text-white">Restoration / clearance should not commence (except to the minimum extent necessary to save human lives) unless such permission has been received from police authorities as well as CRS.</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty 9 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">9.</span>
                              <div>
                                <span className="text-white">In the case of serious explosion or fire caused by explosives or dangerous goods, all wreckage and debris must be left untouched, except in so far as its removal may be necessary for the rescue of the trapped / injured persons and recovery of dead bodies, until the Chief Inspector of Explosives or his representative has completed his inquiry or intimated that he does not intend to make any investigation.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 10 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">10.</span>
                              <div>
                                <span className="text-white">If the station staff are prima facie responsible, the train passing records must be seized and statements of station staff concerned recorded.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 11 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">11.</span>
                              <div>
                                <span className="text-white">If a passenger carrying train is involved, the officer or senior subordinate must secure the written evidence of as many witnesses as possible and their names and addresses should be recorded. The witnesses selected should not be railwaymen,</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 12 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">12.</span>
                              <div>
                                <span className="text-white">He should have a complete list of names and addresses of the injured and dead along with the addresses of relatives and ensure messages are sent to the relatives of the injured or dead.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 13 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">13.</span>
                              <div>
                                <span className="text-white">He should also ensure that Superintendent of Police and District Magistrate have been advised.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 14 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">14.</span>
                              <div>
                                <span className="text-white">He should give the prima-facie cause of the accident with the expected time of restoration.</span>
                              </div>
                            </div>
                          </div>

                          {/* Duty 15 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-green-400 text-xl">15.</span>
                              <div>
                                <span className="text-white">He should ensure that progress report is relayed to control every one hour.</span>
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

export default AMChapterPage16C