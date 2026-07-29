'use client'
import React from 'react'
import { 
  Zap,
  Settings,
  Power,
  Shield,
  Radio,
  Train,
  Users,
  Wrench,
  FileText
} from 'lucide-react'

const VariousConcepts = () => {
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
                      <Zap className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              CONCEPTS OF ELECTRIC TRACTION
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Power Supply Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Power className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Power Supply
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    25 kV, ac, 50 Hz single phase power supply for electric traction is derived from the grid system of State Electricity Boards through traction sub-stations located along the route of the electrified sections at distances of 35 to 50 km apart. The distance between adjacent sub-stations may however be even less depending on intensity of traffic and load of trains.
                  </p>
                </div>
              </div>
            </div>

            {/* Sectioning of OHE Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Sectioning of OHE
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      To ensure rapid isolation of faults on the OHE and to facilitate maintenance work the OHE is sectioned at intervals of 10 to 15 km along the route. At each such point a &apos;switching station interruptors&apos; usually rated at 600A are provided. The shortest section of the OHE which can be isolated by opening interruptors alone is called a &apos;sub-sector&apos;. Each sub-sector is further sub-divided into smaller &apos;elementary sections&apos; by provision of off-load type manually operated isolator switches.
                    </p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      At some stations with large yards, alternative feeding arrangements are provided so that the power for feeding and yards may be drawn from alternative routes. Normally the switch is locked in one position, being changed to the other when required after taking necessary precautions.
                    </p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      To meet requirements at electric loco running sheds, isolator with an earthing device in the &apos;off position is provided. At watering stations manually operated interrupters and isolator with earthing heels are provided to enable switching off of the power supply locally and earthing the OHE to enable working on roofs of rolling-stock. There are several types of switching stations as detailed in the following paras.
                    </p>
                  </div>

                  {/* Feeding Post (FP) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                    <h3 className="text-green-200 font-bold lg:text-lg text-base mb-3">Feeding Post (FP)</h3>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      It is a supply control post, where the incoming feeder link from grid substation are terminated.
                    </p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      Each feeder supplies the OHE on one side of the feeding post through interrupters controlling supply to the individual lines. Thus, for a two track line, there will be four interrupters at each feeding post.
                    </p>
                  </div>

                  {/* Sectioning and Paralleling Post (SP) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                    <h3 className="text-green-200 font-bold lg:text-lg text-base mb-3">Sectioning and Paralleling Post (SP)</h3>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      These posts are situated approximately midway between feeding posts marking the demarcating point of two zones fed from different phases a &apos;paralleling interrupter&apos; is provided at each &apos;SP&apos; to parallel the OHE of the up and down tracks of a double track section, &apos;bridging interrupters&apos; are also provided to permit one feeding post to feed beyond the sectioning post upto the next FP if its 25 kV supply is interrupted for some reasons. These bridging interrupters are normally kept open and should only be closed after taking special precautions as detailed in these rules.
                    </p>
                  </div>

                  {/* Sub-Sectioning and Paralleling Post (SSP) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                    <h3 className="text-green-200 font-bold lg:text-lg text-base mb-3">Sub-Sectioning and Paralleling Post (SSP)</h3>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      One or more SSPs are provided between each FP and adjacent SP depending upon the distance between them. In a double track section, normally three interrupters are provided at each SSP i.e. two connecting the adjacent sub-sectors of up and down tracks.
                    </p>
                  </div>

                  {/* Sub-Sectioning Post (SS) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                    <h3 className="text-green-200 font-bold lg:text-lg text-base mb-3">Sub-Sectioning Post (SS)</h3>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      These are provided only occasionally. They are similar to SSPs with provision for sectioning of the OHE but not paralleling.
                    </p>
                  </div>

                  {/* Neutral Section */}
                  <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                    <h3 className="text-green-200 font-bold lg:text-lg text-base mb-3">Neutral Section</h3>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      It is a short section of insulated and dead overhead equipment which separates the area fed by adjacent substation or feeding post.
                    </p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      A neutral section is provided to make it impossible for the pantograph of an electric locomotive or EMU train to bridge the different phases of 25 kV supply, while passing from the zone fed from one sub-station to the next one. Since the neutral section remains &apos;dead&apos;, warning boards are provided in advance to warn and remind the Loco pilot of an approaching electric locomotive/EMU to open locomotive circuit breaker (DJ) before approaching the &apos;neutral section&apos;, to coast through it and then switch &apos;on&apos; on the other side. Special care is taken in fixing the location of neutral sections, on level tangent tracks far away from signals, level crossing gates etc. to ensure that the train coasts through the neutral section at a sufficiently high speed, to obviate the possibility of its stopping and getting stuck within the neutral section.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Important Equipment at Switching Stations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Other Important Equipment at Switching Stations
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                  <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Certain equipments are installed at various points to protect the lines, to monitor the availability of power supply and provide other facilities. These are generally as under:
                  </p>
                  <div className="space-y-2">
                    {[
                      'Lightning arresters are provided to protect every sub-sector against voltage surges.',
                      'Auxiliary transformers are provided at all the posts and also at certain intermediate points to supply ac at 240 V, 50 Hz required for signalling and operationally essential lighting installations. To ensure a fairly steady voltage, automatic voltage regulators are also provided where required.',
                      'Potential transformers are provided at the various switching stations for monitoring supply to each sub-sector.',
                      'A small masonry cubicle is provided to accommodate remote control equipment, control panel, telephone and batteries and battery chargers required for the control of interruptors and other similar equipments.'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-purple-900/30 rounded-lg px-3 py-2 border border-purple-400/20 hover:bg-purple-800/40 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-purple-500/60 to-pink-500/60 border border-purple-300/30 text-purple-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-purple-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Overhead Equipment Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-cyan-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Radio className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  OVERHEAD EQUIPMENT
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  
                  {/* Catenary and Contact Wires */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-4">Catenary and Contact Wires</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-cyan-400/10">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3 bg-cyan-900/30 rounded-lg px-3 py-2 border border-cyan-400/20 hover:bg-cyan-800/40 transition-all duration-300 group">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-cyan-500/60 to-blue-500/60 border border-cyan-300/30 text-cyan-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                              1
                            </span>
                            <span className="text-cyan-50/95 lg:text-base text-sm flex-1 leading-relaxed">The overhead equipment above the tracks comprises of the following: -</span>
                          </div>
                          <div className="ml-4 space-y-2">
                            {[
                              'A stranded cadmium copper wire of about 65 mm² section or stranded aluminium alloy wire of about 116 mm² section for catenary.',
                              'A grooved hard drawn copper contact wire of 107 mm² cross-section (when new) supported from the catenary by means of droppers of 5 mm diameter spaced not more than 9 m apart.'
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3 bg-cyan-900/20 rounded-lg px-3 py-2 border border-cyan-400/15 hover:bg-cyan-800/30 transition-all duration-300 group">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br from-cyan-400/50 to-blue-400/50 border border-cyan-300/25 text-cyan-100 font-bold text-xs shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                                  {String.fromCharCode(97 + idx)}
                                </span>
                                <span className="text-cyan-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-cyan-400/10">
                        <div className="flex items-start gap-3 bg-cyan-900/30 rounded-lg px-3 py-2 border border-cyan-400/20 hover:bg-cyan-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-cyan-500/60 to-blue-500/60 border border-cyan-300/30 text-cyan-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                            2
                          </span>
                          <span className="text-cyan-50/95 lg:text-base text-sm flex-1 leading-relaxed">The catenary and contact wire together have an equivalent copper section of 157 mm². The current normally permissible on a single track is 600 A approximately, because of equivalent cross-sectional area of OHE. This current limit is based on the temperature limit of 85°C in contact wire. Certain sections in Waltair-Kirandul section have the catenary and contact wires together having an equivalent copper section of 200 mm².</span>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-cyan-400/10">
                        <div className="flex items-start gap-3 bg-cyan-900/30 rounded-lg px-3 py-2 border border-cyan-400/20 hover:bg-cyan-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-cyan-500/60 to-blue-500/60 border border-cyan-300/30 text-cyan-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                            3
                          </span>
                          <span className="text-cyan-50/95 lg:text-base text-sm flex-1 leading-relaxed">For loop lines, sidings, yards and spur lines excluding the main running lines and first loop or lines taking off from main running line, tramway type OHE having only grooved hard drawn copper contact wire of 107 mm² section is provided.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Height of Contact Wire */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-3">Height of Contact Wire</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      The normal height of contact wire for regulated OHE is 5.60 m (with 10 cm pre-sag for 72 m span) above rail level. For unregulated OHE in areas with a temperature range of 4°C to 65° C, this figure is 5.75 m and in areas with a temperature range of 15 °C to 65 °C, it is 5.65 m. In certain cases, such as under over-line structures, the height may be as low as 4.65 m on BG and 4.02 m on MG. For passing oversize consignments on such lines, special precautions have to be taken.
                    </p>
                  </div>

                  {/* Span of Supporting Mast/Structures */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-3">Span of Supporting Mast/Structures</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      The span normally used for supporting the OHE from masts/structure using the cantilever type bracket assembly varies from maximum 72 m on straight track to 27 m on curved track, the spans depending upon the degree of curvature. The catenary system is normally supported on straight tracks at maximum intervals of 72 m (63 m on MG) by cantilever type arms fixed to galvanized broad flange or I section steel masts or fabricated steel structures. On curves the catenary is supported at closer intervals, the spans adopted depending upon the degree of curvature.
                    </p>
                  </div>

                  {/* Stagger */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-3">Stagger</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      The contact wire is staggered so that as the pantograph glides along, the contact wire sweeps across the current collecting strips of the pantograph upto a distance of 200 mm on either side of the centre line on straight runs and 300 mm on one side on curves. This ensures a uniform wear of the current collecting strips of the pantographs.
                    </p>
                  </div>

                  {/* Overlaps */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-3">Overlaps</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed mb-4">
                      The OHE conductors are terminated at intervals of about 1.5 km with an overlap generally as shown in Fig. 2.02, the conductor height being so adjusted that the pantograph glides from one conductor to the other smoothly.
                    </p>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      There are two types of overlap spans as under:-
                    </p>
                    <div className="space-y-2">
                      {[
                        'Uninsulated overlap spans where the distance of separation between two contact wires is 200 mm and the two conductors are permanently connected together electrically by suitable jumpers.',
                        'Insulated overlaps, where the two OHE systems are kept apart at a distance of 500 mm. Normally the electrical discontinuity at insulated overlaps is bridged by interrupters or isolator except at neutral sections.'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-cyan-900/20 rounded-lg px-3 py-2 border border-cyan-400/15 hover:bg-cyan-800/30 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br from-cyan-400/50 to-blue-400/50 border border-cyan-300/25 text-cyan-100 font-bold text-xs shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                            {String.fromCharCode(97 + idx)}
                          </span>
                          <span className="text-cyan-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Regulated and Unregulated OHE */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-3">Regulated and Unregulated OHE</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      OHE with automatic tensioning called &apos;regulated OHE&apos; is generally provided for all main lines, but for large isolated yard and unimportant lines, automatic tensioning is dispensed with in the interest of economy and only unregulated OHE is used.
                    </p>
                  </div>

                  {/* Section Insulator Assembly */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-xl text-lg mb-3">Section Insulator Assembly</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Section insulators are provided to insulate the OHE of one elementary section from the OHE of the adjacent elementary section such as at cross-overs. When the pantograph of a locomotive passes from one track to another along a cross-over/turnout, current collection changes from one OHE to other and therefore the runners of the section insulators overlap with contact wire so that there is no arcing.
                    </p>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      On double line sections with runners trailing, the section insulator assembly using porcelain insulators are fit for speeds upto 120 km/h provided it is installed between the first one-tenth and one - third of the span. In case the runners of the section insulator assembly are in the facing direction or it is not installed within the first one third of the span, the speed should be restricted to 80 km/h.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* General Description of Electric Rolling Stock Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  GENERAL DESCRIPTION OF ELECTRIC ROLLING STOCK
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  
                  {/* Classification of Electric Rolling Stock */}
                  <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-orange-400/20">
                    <h3 className="text-orange-200 font-bold lg:text-xl text-lg mb-4">Classification of Electric Rolling Stock</h3>
                    <div className="space-y-4">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        Locomotives and Multiple Unit stocks are classified by means of a three/four letter code followed by a number to indicate the individual class and a series of the same.
                      </p>
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed mb-3">
                        The code letters used for AC locos and EMUs are given below:
                      </p>
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10 space-y-2">
                        <p className="text-orange-50/95 lg:text-base text-sm">
                          The first letter denotes the Gauge: &apos;W&apos; for BG and &apos;Y&apos; for MG.
                        </p>
                        <p className="text-orange-50/95 lg:text-base text-sm">
                          The second (middle) letters &apos;A&apos; denotes the system of power supply for which it is suitable - A for AC &amp; C for DC, CA for DC &amp; AC.
                        </p>
                        <p className="text-orange-50/95 lg:text-base text-sm mb-2">
                          The third letter for locos indicates the class of service -
                        </p>
                        <div className="ml-0 space-y-2">
                          {[
                            "'M' for mixed traffic locos suitable for both passenger and freight services,",
                            "'G' for Freight (Goods) service locos,",
                            "'P' for Passenger services locos, and",
                            "'S' for Shunting locos."
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-orange-900/20 rounded-lg px-3 py-2 border border-orange-400/15 hover:bg-orange-800/30 transition-all duration-300 group">
                              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br from-orange-400/50 to-amber-400/50 border border-orange-300/25 text-orange-100 font-bold text-xs shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                                {['M', 'G', 'P', 'S'][idx]}
                              </span>
                              <span className="text-orange-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-orange-50/95 lg:text-base text-sm mt-2">
                          Multiple Unit Stock is denoted by the letter &apos;U&apos;.
                        </p>
                      </div>
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed mb-3">
                        The various classes of ac locos and EMUs at present in service on Indian Railway are as under:-
                      </p>
                      <div className="space-y-2">
                        {[
                          'AC Locos— WAG1, WAG2. WAG3, WAG4, WAG5, WAG6, WAG7, WAG9WAG9M',
                          'WAP1, WAP2, WAP3, WAM1, WAM2, WAM3, WAM4, WAP4, WAP 5, YAM1',
                          'AC/DC Locos— WCAM1,',
                          'AC EMUs— WAU1, WAU2, WAU3, WAU4, YAU.'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-orange-900/30 rounded-lg px-3 py-2 border border-orange-400/20 hover:bg-orange-800/40 transition-all duration-300 group">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-orange-500/60 to-amber-500/60 border border-orange-300/30 text-orange-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                              {String.fromCharCode(97 + idx)}
                            </span>
                            <span className="text-orange-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                        In addition two types of BG DC EMUs converted for AC working are in use on the Eastern Railway.
                      </p>
                    </div>
                  </div>

                  {/* Important Equipment of Electric Loco/EMU */}
                  <div className="bg-white/5 rounded-xl p-5 border border-orange-400/20">
                    <h3 className="text-orange-200 font-bold lg:text-xl text-lg mb-6">Important Equipment of Electric Loco/EMU</h3>
                    <div className="space-y-6">
                      
                      {/* Pantograph */}
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10">
                        <h4 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">Pantograph</h4>
                        <div className="space-y-3">
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            For collecting power from 25 kV ac contact wire pantographs are mounted on the roof of the traction vehicles. AM 12 pantograph of Faively design has been adopted by Indian Railways for 25 kV ac electric locomotives and EMUs. These pantographs are provided with steel strips for current collection. The raising and lowering of the pantograph is by means of a pneumatically operated servo motor. This pantograph is a single pan design having two o-springs mounted on it. For keeping the pantograph in the lowered condition, main springs have been used. The suspension of pan is on plungers.
                          </p>
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            This pantograph is suitable for operation upto 140 km/h. For increasing the speed potential, improved pantograph with lower dynamic mass and independent pan heads have been used. Further, in order to improve the life of the contact wire, use of carbon strips has also been tried. Use of carbon strips for current collection has already been adopted in European countries.
                          </p>
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            Use of carbon strips necessitates change in the design of the pantograph; the pan head which is more or less rigid in case of steel strip pantograph needs to be made more flexible in the vertical, horizontal and transverse movement for carbon strip pantographs. This is achieved by improved suspension of the pan head. The speed potential of such a pantograph is of the order of 250 km/h.
                          </p>
                        </div>
                      </div>

                      {/* Circuit Breaker */}
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10">
                        <h4 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">2. Circuit Breaker</h4>
                        <div className="bg-white/5 rounded-lg p-3 border border-orange-400/5 mb-3">
                          <ul className="ml-0 space-y-1 text-orange-50/95 lg:text-base text-sm">
                            <li>-- Air Blast Circuit breaker</li>
                            <li>-- Vacuum Circuit breaker</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            These breakers are designed for isolation of power to the traction vehicle in the event of faults. Vacuum Circuit Breakers were introduced on electric locomotives on Indian Rlys. in the year 1985.
                          </p>
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            The VCB is a simplified design with fewer number of parts (260 Nos.), have a simplified control block and self - contained interrupting medium that is vacuum. Due to these features, the life of the main contact achievable is as high as 1 lakh electrical operations as against 20,000 operations for air blast circuit breakers. As a result, the periodicity of replacement of main contact is second POH for VCB and IOH for Air Blast Circuit Breakers. Besides, these factors, VCB also offers the advantages of reduced size, reduced weight and reduced maintenance cost as compared to these for air blast circuit breakers. The total trip-time for VCB is less than 60 milli-seconds while the same is of the order of 100 milli-seconds for air blast circuit breakers. The air blast circuit breaker is only capable of breaking the fault current with breaking capacity of 250 MVA. The VCB, besides having breaking capacity is also designed for making capacity of the same rating, i.e. 250 MVA and can handle the same level of fault current during closing also.
                          </p>
                        </div>
                      </div>

                      {/* Transformer */}
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10">
                        <h4 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">3. Transformer</h4>
                        <div className="space-y-3">
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            Power to the traction vehicles is available at 25 kV ac single phase from the contact wire. In order to step down the voltage as well as to control the same for feeding to the traction motors, the traction power transformers are provided on the traction vehicles.
                          </p>
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            These transformers generally have a primary winding, a regulating winding, traction secondary windings and auxiliary windings. The regulating winding is designed for choosing appropriate voltage for the traction motors. The auxiliary winding is required for feeding the auxiliary motors on the locomotive.
                          </p>
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            In order to increase the h.p. of the locomotives, the traction transformers have been uprated from time to time keeping the overall dimensions unchanged on account of space constraint. The upratings have been achieved by using increased copper section of the conductor used, improved insulation scheme and in certain cases adoption of aluminium foil wound construction for minimizing the losses. With the introduction of thyristorised converters, the design of the traction transformer has undergone simplification with the deletion of regulating winding. The transformer for thyristorised converter becomes a two limb construction and traction secondary winding split into 4 windings for two step sequence control.
                          </p>
                          <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                            The traction transformer necessarily has to have forced oil circulation and forced air cooling. For this purpose oil pump, oil cooler and blower form an integral part of the traction transformer.
                          </p>
                        </div>
                      </div>

                      {/* Tap Changer */}
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10">
                        <h4 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">Tap Changer</h4>
                        <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                          Tap changer is provided on 25 kV (HT) regulating winding of locomotive transformer for controlling the voltage input to main transformer.
                        </p>
                      </div>

                      {/* Traction Motor */}
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10">
                        <h4 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">Traction Motor</h4>
                        <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                          In case of traction motor great emphasis is being given on improving power to weight ratio, keeping in view the limited space available on locomotive for mounting the same. There is continuous effort to improve the performance of traction motor by making them lighter/compact, at the same time more reliable. Indian Railways have been adopting the latest technology available for design and manufacture of traction motor. Over a period of years the traction motors have become now 2.5 times lighter specially for EMU application.
                        </p>
                      </div>

                      {/* Arno Converter */}
                      <div className="bg-white/5 rounded-lg p-4 border border-orange-400/10">
                        <h4 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">Arno Converter</h4>
                        <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                          Arno Converter is a special duty machine for conversion of single phase in-coming supply into 3 phase out- put supply. 3 phase supply is essentially required on most of the electrical locomotives for driving certain auxiliary equipment like blowers and compressors. The function of Amo Converter is to supply 3 phase power required for these auxiliaries.
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Crew Links, Loco Links and Power Plan Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  CREW LINKS, LOCO LINKS AND POWER PLAN
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-blue-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  
                  {/* Procedure for Calculating Crew Requirement of a Division */}
                  <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-xl text-lg mb-4">PROCEDURE FOR CALCULATING CREW REQUIREMENT OF A DIVISION</h3>
                    <div className="space-y-2">
                      {[
                        'Running staff review should be carried out after every six months i.e. on 15th Jan. and 1st July by STA (Senior technical assistant) of the division.',
                        'Before preparing review, loco pilot\'s links of all the sheds should be got prepared and vetted by personnel branch.',
                        'Statement of avg. hours on road and no. of goods',
                        'Trains ran during last six months for each section should be ready duly approved by Sr. DOM/DOM. A list of shunting points and DMTs running to be prepared and signed by Sr. DOM/DOM.',
                        'Mail/Express/Passenger Loco pilots requirement to be worked on the basis of loco pilots/crew links.',
                        'For goods crews, the requirement should be worked out as per power plan signed by Sr DME(P) and Sr. DOM. 7.67 Crews are to be demanded for one freight POL. Separate crews to be demanded for the activities which cannot been covered in power plan e.g., Light engine and Empty coaching rakes running etc.',
                        '30% leave reserve and 10 % trainee reserve should be demanded for this additional requirement.',
                        'Shunters should be demanded @ 1 against 8 hrs. point. Also rest giver @ 1 for 6 shunters to be demanded. Leave reserve and trainee post to be demanded separately.',
                        'Requirement of DSL assistants should be same as that of loco pilots (Excluding motormen where no assistant loco pilot is required).',
                        'Running staff review duly signed by Sr. DME/Sr DEE should be put up to Sr. DAO for vetting.',
                        'After accounts vetting sanction of DRM be taken and Sr. DPO will issue circulars of revised sanction.',
                        'Running supervisors review should also be made with staff review @ 1 loco Inspector against 25 loco pilots or 50 shunters. No rest giver allowed. Leave reserve 12.5%.'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-indigo-900/30 rounded-lg px-3 py-2 border border-indigo-400/20 hover:bg-indigo-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-indigo-500/60 to-blue-500/60 border border-indigo-300/30 text-indigo-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-indigo-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Points to be Kept in View While Preparing Loco Pilot's Links */}
                  <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-xl text-lg mb-4">POINTS TO BE KEPT IN VIEW WHILE PREPARING LOCO PILOT&apos;S LINKS</h3>
                    <div className="space-y-2">
                      {[
                        'Loco pilot/Crew links are prepared by CPRC/CTLC and got verified from Personnel Branch. Objective of crew links is to ensure optimum utilization of crews.',
                        'Train timings to be checked from the latest timetable.',
                        'Links to be prepared before promulgation of new time table.',
                        'Max. duty hours in anyone trip should not exceed 10 hours.',
                        'Avg. duty hours in a fortnight should not exceed 104 hours.',
                        'Min. no. of rests in a month should be 5 of 22 hrs. or 4 of 30 hours including night in bed from 22 hrs. to 6 hrs. from sign off to sign on.',
                        'Efforts should be made to include all the sections in the link to avoid giving learning road again and again.',
                        'Min. out of station rest in case less than 8 hrs. duty in the previous trip should be 6 hrs from sign off to sign on. In case duty is 8 hrs or more than 8 hrs, then 8 hrs. rest to be given. In case of short trips of less than or equal to 5 hours then duty performed plus 1 hrs. will be sufficient.',
                        'Min. home station rest should be',
                        'Link having the maximum earning kilometerage should be worked by senior most loco pilots and so on.',
                        'Separate links should be prepared for superfast trains such as Rajdhani/Shatabdi Exp. Chronic late running trains should be kept in view to avoid link failures.'
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-start gap-3 bg-indigo-900/30 rounded-lg px-3 py-2 border border-indigo-400/20 hover:bg-indigo-800/40 transition-all duration-300 group">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-indigo-500/60 to-blue-500/60 border border-indigo-300/30 text-indigo-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-indigo-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                          </div>
                          {idx === 8 && (
                            <div className="ml-0 space-y-2">
                              {[
                                'If duty performed in the last trip is less than 8 hrs., then 12 hrs.',
                                'If duty is 8 hrs. or more. then 16 hrs.',
                                'If staff is required to work train less then stipulated rest then breach of rest allowance is payable to running staff.'
                              ].map((subitem, subidx) => (
                                <div key={subidx} className="flex items-start gap-3 bg-indigo-900/20 rounded-lg px-3 py-2 border border-indigo-400/15 hover:bg-indigo-800/30 transition-all duration-300 group">
                                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-indigo-400/50 to-blue-400/50 border border-indigo-300/25 text-indigo-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                                    {String.fromCharCode(97 + subidx)}
                                  </span>
                                  <span className="text-indigo-50/95 lg:text-base text-sm flex-1 leading-relaxed">{subitem}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Points to be Kept in View While Preparing Locomotive Links */}
                  <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-xl text-lg mb-4">POINTS TO BE KEPT IN VIEW WHILE PREPARING LOCOMOTIVE LINKS</h3>
                    <div className="space-y-2">
                      {[
                        'Loco/Power links are prepared by HQ.\'s office and circulated to the divisions. The objective of power links is to ensure optimum utilization of powers.',
                        'Train timings should be checked from latest time table.',
                        'Links to be prepared before commencement of new time table.',
                        'Efforts should be made to send the loco to home shed for servicing within the stipulated schedule time',
                        'Minimum possible out station halt should be provided.',
                        'Ensure loco is permitted to run on the sections at the max. permissible speed of the train.'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-indigo-900/30 rounded-lg px-3 py-2 border border-indigo-400/20 hover:bg-indigo-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-indigo-500/60 to-blue-500/60 border border-indigo-300/30 text-indigo-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-indigo-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Power Requirement (Power Plan) */}
                  <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-xl text-lg mb-4">POWER REQUIREMENT (POWER PLAN)</h3>
                    <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10 mb-4">
                      <p className="text-indigo-200 font-semibold lg:text-base text-sm mb-3">(A)</p>
                    </div>
                    <div className="space-y-2">
                      {[
                        'To be prepared once in six months.',
                        'Avg. No. of trains run on each section per day and Avg. hours on road for last six months duly signed by Sr.DME(P) and Sr.DOM to be prepared.',
                        'Formula: Section wise average freight POL for the last six months to be calculated as under:',
                        '3.5 % further growth and 10% Bunching allowance to be demanded on Bare POL',
                        'Loco\'s requirement. for DMT. ART. and other loco\'s which remain in outage but not added in POL for the purpose of calculation of average kilometers to be added in the bare requirement.',
                        'To arrive total POL. last six month average POL of shunting loco link WDS-4, WDS-5 pilots and Mail lie over to be added in the POL calculated above.',
                        'Mail/Exp./Pass. Loco requirement to be worked out on the basis of loco link. Add 10% for major repair allowance.',
                        'For shunting services, work out number of points for 8 hours shunting, demand 0.33 POL. Add 1 loco as overlap against 06 loco. Add 10% for major repairs.',
                        'Kms formula: Total kms earned on the Avg. per day during last six months divided by average loco utilization.'
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-start gap-3 bg-indigo-900/30 rounded-lg px-3 py-2 border border-indigo-400/20 hover:bg-indigo-800/40 transition-all duration-300 group">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-indigo-500/60 to-blue-500/60 border border-indigo-300/30 text-indigo-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5 shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-indigo-50/95 lg:text-base text-sm flex-1 leading-relaxed">{item}</span>
                          </div>
                          {idx === 2 && (
                            <div className="ml-0 space-y-2">
                              <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/5">
                                <p className="text-indigo-50/95 lg:text-base text-sm font-mono text-center">
                                  Bare POL = PDD + HOR + PAD
                                </p>
                              </div>
                              <p className="text-indigo-50/95 lg:text-base text-sm">
                                (POL=Power on line ; PDD = Pre departure detention; HOR=Hours on road; PAD=Post arrival detention)
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Loco Maintenance Schedule Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-emerald-500/30 to-teal-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-teal-500/30 transition-all duration-500">
                  <Wrench className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  LOCO MAINTENANCE SCHEDULE
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  
                  {/* (I) & (II) Conventional Locos */}
                  <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-xl text-lg mb-4">(I) &amp; (II) Conventional Locos</h3>
                    
                    {/* Coaching Locos */}
                    <div className="bg-white/5 rounded-lg p-4 border border-emerald-400/10 mb-4">
                      <p className="text-emerald-50/95 lg:text-base text-sm mb-3">
                        Coaching Locos (Railway Board Letter No.92/Elect (TRS)/138/5 Pt. I, dated 18.01.2001 &amp; Railway Board Letter No.9/Elect (TRS)/138/5 Pt.II, dated 21.12.001)
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-base border-collapse">
                          <thead>
                            <tr className="bg-white/10">
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Maintenance schedule</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Periodicity</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">Trip Inspection(TI)</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">After 3000 kms or one trip, whichever is later</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">2 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IA</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">40 + 3days.</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">4hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IB</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">80 + 3days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IC</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">120 + 3days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">8 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">AOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">12 months + 15 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">36 months + 1 month or 4(6 lakh for wAP-1/4 loco) lakh kms. whichever is earlier.</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">9 days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">POH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 years+ 3 months or 8 lakh kms. (12 lakh for WP-1/4 loco) whichever is earlier.</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">28 days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Freight Locos */}
                    <div className="bg-white/5 rounded-lg p-4 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-base text-sm mb-3">
                        Freight Locos (Railway Board Letter No.92/Elect (TRS)/138/5 Pt. I, dated 18.01.2001)
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-base border-collapse">
                          <thead>
                            <tr className="bg-white/10">
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Maintenance schedule</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Periodicity</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">Trip Inspection(TI)</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">15 days (Fitted with TAO TMs) (20 days (fitted with Hitachi TMs)</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">2 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IA</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">45+ 3 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">4 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IB</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">90+ 3 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IC</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">135+ 3 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">8 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">AOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">18 months + 10 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 working days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">54 months + 1 monthy or 6 lakh kms whichever is earlier</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">9 working days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">POH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">9 years + 3 months or 12 lakh kms whichever earlier</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">28 working days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* (iii) 3-Ph.ABB Locomotives */}
                  <div className="bg-white/5 rounded-xl p-3 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-xl text-lg mb-4">(iii) 3-Ph.ABB Locomotives</h3>
                    <p className="text-emerald-50/95 lg:text-base text-sm mb-4">
                      (Railway Board Letter No.97/Elect (TRS)/440/18/44 (3Ph, dated 23.02.07)
                    </p>
                    
                    {/* Coaching Locos (WAP5/WAP7 Locos) */}
                    <div className="bg-white/5 rounded-lg p-4 border border-emerald-400/10 mb-4">
                      <p className="text-emerald-50/95 lg:text-base text-sm mb-3 font-semibold">Coaching Locos (WAP5/WAP7 Locos)</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-base border-collapse">
                          <thead>
                            <tr className="bg-white/10">
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Maintenance schedule</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Periodicity</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">Trip Inspection</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">3000 kms or one trip, whichever is later</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">2 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IA</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">90 days.</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IB</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">180 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IC</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">270 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">8 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">MOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">18 months</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 working days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">4.5 years + 6 months or 12 lakh kms. whichever is earlier</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">11 working days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">POH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">9 years+ 6 months or 24 lakh kms. whichever is earlier.</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">28 working days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Freight Locos (WAG9/WAG9H Locos) */}
                    <div className="bg-white/5 rounded-lg p-4 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-base text-sm mb-3 font-semibold">Freight Locos (WAG9/WAG9H Locos)</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-base border-collapse">
                          <thead>
                            <tr className="bg-white/10">
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold lg:text-base text-sm">Maintenance Schedule</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold lg:text-base text-sm">Periodicity</th>
                              <th className="border border-emerald-400/30 px-3 py-2 text-left text-emerald-200 font-semibold lg:text-base text-sm">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">Trip Inspection</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">45 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">4 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IA</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">90 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IB</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">180 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IC</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">270 days</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">8 hrs</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">MOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">18 months</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">2nd MOH</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">IOH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">6 years + 6 months or 12 lakh kms. whichever is earlier.</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">11 working days</td>
                            </tr>
                            <tr className="bg-white/5">
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">POH</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">12 years + 6 months or 24 lakh kms. whichever is earlier</td>
                              <td className="border border-emerald-400/30 px-3 py-2 text-emerald-50/95 lg:text-base text-sm">28 working days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Diesel Loco Schedule & Duration Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  DIESEL LOCO SCHEDULE &amp; DURATION
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-amber-500/15 to-orange-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-3 border border-yellow-400/20">
                  <div className="overflow-x-auto">
                    <table className="w-full text-base border-collapse">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-yellow-400/30 px-2 py-2 text-left text-yellow-200 font-semibold lg:text-base text-sm">S.No.</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-left text-yellow-200 font-semibold lg:text-base text-sm">Description</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAM4</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP1</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP4</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP5</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP6</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold">WAP7</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold">WAG5 A/B</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WAG5 HA/HB</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WAG6</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WAG7</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WAG9</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WAG9 H</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold">WCAM1</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WCAM2</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WCAM3</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WCAG1</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WCM5</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm ">WCG2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">1</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Supply System-AC(kV)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">1.5 DC</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Continuous HP</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">3640</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">3800</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5000</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5440</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5060</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">6120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">3850</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">3850</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6000</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5000</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">6120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">3640/2930</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">4715/2916</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">5000/4600</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5000/4600</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">4600</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">4200</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">3</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Max. Speed (kmph)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">130</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">140</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">160</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">160</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">130</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">80</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">80</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">100</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">100</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">90</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">105</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">100</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">105</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">80</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Starting Tractive Effort (Tonnes)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">33.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">22.4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">32.4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">26.29</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">30.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">32.88</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">33.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">46</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">44</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">46.89</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">52</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">33.84/23.2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">33.5/26.0</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">40.2/26.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">43.5/30.0</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">39.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">35.6</td>
                        </tr> 
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Continuous Tractive Effort (Tonnes)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">56</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">13.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">22.42</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.23</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">32</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">27</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.12</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">46</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">16.8/22.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.8/24.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">26.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">31/30</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">27</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">30</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Total Weight</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">112.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">108.3</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">112.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">78</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">113.2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">118.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">118.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">112.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">117</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">121</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">128</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">132</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">7</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Braking</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Bogies Arrangment</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Bo-Bo</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Bo-Bo-Bo</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">9</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Bogies Type</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Flexi</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Flexi</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Flexi.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Gear Ratio</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">15.62</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">21.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.59</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">17:35:67</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.72</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">17.77/15.62</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.64</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">16.63/20.75</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">16.65</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">15.77/21.107</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">21.107</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">16.61/21.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">15.62/21.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.64</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">16.65</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.64</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.74</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">11</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">No. of Traction Motors</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">12</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Traction Motor</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FXA-7059</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FRA-6068</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">ASEAL3M450-2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FRA-6068</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FRA-6068 HT</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TM-4939 A2</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">13</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Axle Load</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.05</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.9</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">21.3</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Electric Locomotive Features Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-pink-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-pink-500/30 to-rose-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-rose-500/30 transition-all duration-500">
                  <Power className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  ELECTRIC LOCOMOTIVE FEATURES
                </span>
              </h2>
              <div className="bg-linear-to-br from-pink-500/20 via-rose-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-3 lg:p-5 border border-pink-400/20">
                  <div className="overflow-x-auto">
                    <table className="w-full text-base border-collapse">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-pink-400/30 px-3 py-2 text-left text-pink-200 font-semibold lg:text-base text-sm">Schedule</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm">WDM2</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold">WDM3A/B/C/D</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm">WDM3A/B/C/D (30 days)</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold">WDG3A</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm">WDG3A (30 days)</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold">WDP1/3A</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-left text-pink-200 font-semibold lg:text-base text-sm">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">T-1</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">15 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">20 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">20 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">As per link</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">As per link</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">As per link</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">4 hrs.</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">T-2</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">40 days Trip – 30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">40 days Trip–30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">6 hrs</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-2</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">8 hrs</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-4</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td> 
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">16 hrs</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-12</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">4 days</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-24 MOH)</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">24 Months</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-48 (IOH)</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">48 Months</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-96 (POH)</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">96 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">96 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">96 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">30 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Diesel Loco Schedule & Duration Section (Duplicate) */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  DIESEL LOCO SCHEDULE &amp; DURATION
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-amber-500/15 to-orange-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                  <div className="overflow-x-auto">
                    <table className="w-full text-base border-collapse">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-yellow-400/30 px-2 py-2 text-left text-yellow-200 font-semibold lg:text-base text-sm">S.No.</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-left text-yellow-200 font-semibold lg:text-base text-sm">Description</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAM4</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP1</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP4</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP5</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP6</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAP7</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAG5 A/B</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAG5 HA/HB</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAG6</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAG7</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAG9</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WAG9 H</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WCAM1</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WCAM2</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WCAM3</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WCAG1</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WCM5</th>
                          <th className="border border-yellow-400/30 px-2 py-2 text-center text-yellow-200 font-semibold lg:text-base text-sm">WCG2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">1</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Supply System-AC(kV)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">25</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">25/1.5 DC</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Continuous HP</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">3640</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">3800</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">5000</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">5440</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">5060</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">3850</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">3850</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6000</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">5000</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">3640/2930</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">4715/2916</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5000/4600</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">5000/4600</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">4600</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">4200</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">3</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Max. Speed (kmph)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">130</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">140</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">160</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">160</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">130</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">80</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">80</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">100</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">100</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">90</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">105</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">100</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">105</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">80</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Starting Tractive Effort (Tonnes)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">22.4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">32.4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">26.29</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">30.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">32.88</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">46</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">44</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">46.89</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">52</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.84/23.2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.5/26.0</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">40.2/26.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">43.5/30.0</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">39.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">35.6</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Continuous Tractive Effort (Tonnes)</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">56</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">13.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">22.42</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.23</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">32</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">27</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">33.12</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">46</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">16.8/22.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.8/24.6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">26.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">31/30</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">27</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">30</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Total Weight</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">112.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">108.3</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">112.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">78</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">113.2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">118.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">118.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">123</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">112.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">117</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">121</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">128</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">120</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">132</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">7</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Braking</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">A,R</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">D</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">D</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Bogies Arrangment</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Bo-Bo</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Bo-Bo-Bo</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Co-Co</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">9</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Bogies Type</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">Flexi</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Flexi</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Flexi.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Fab.</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">Cast</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">10</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Gear Ratio</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">15.62</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">21.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">23.59</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">17:35:67</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">23.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">20.72</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">17.77/15.62</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">18.64</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">16.63/20.75</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">16.65</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">15.77/21.107</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">21.107</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">16.61/21.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">15.62/21.58</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">18.64</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">16.65</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">18.64</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">18.74</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">11</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">No. of Traction Motors</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">4</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">12</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95">Traction Motor</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FXA-7059</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FRA-6068</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">ASEAL3M450-2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FRA-6068</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">6FRA-6068 HT</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">TAO-659</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">HS-15250A</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">TM-4939 A2</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">13</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 lg:text-base text-sm ">Axle Load</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center lg:text-base text-sm ">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.05</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.9</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">18.8</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">19.5</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20.2</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">21.3</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">20</td>
                          <td className="border border-yellow-400/30 px-2 py-2 text-yellow-50/95 text-center">22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Electric Locomotive Features Section (Duplicate) */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-pink-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-pink-500/30 to-rose-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-rose-500/30 transition-all duration-500">
                  <Power className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  ELECTRIC LOCOMOTIVE FEATURES
                </span>
              </h2>
              <div className="bg-linear-to-br from-pink-500/20 via-rose-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-3 border border-pink-400/20">
                  <div className="overflow-x-auto">
                    <table className="w-full text-base border-collapse">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-pink-400/30 px-3 py-2 text-left text-pink-200 font-semibold lg:text-base text-sm ">Schedule</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm ">WDM2</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm ">WDM3A/B/C/D</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm ">WDM3A/B/C/D (30 days)</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm ">WDG3A</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm ">WDG3A (30 days)</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-center text-pink-200 font-semibold lg:text-base text-sm ">WDP1/3A</th>
                          <th className="border border-pink-400/30 px-3 py-2 text-left text-pink-200 font-semibold lg:text-base text-sm ">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">T-1</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">15 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">20 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">20 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">As per link</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">As per link</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">As per link</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">4 hrs.</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">T-2</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">40 days Trip – 30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">40 days Trip–30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">30 days</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">6 hrs</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">M-2</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">2 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">8 hrs</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-4</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">4 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">16 hrs</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">M-12</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">12 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">4 days</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">M-24 MOH)</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">24Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">24 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">16 days</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95">M-48 (IOH)</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center">48 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">21 days</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 lg:text-base text-sm ">M-96 (POH)</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">96 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">96 Months</td>
                          <td className="border border-pink-400/30 px-3 py-2 text-pink-50/95 text-center lg:text-base text-sm ">96 Months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Details of Brake Power Certificate Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-violet-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-violet-100 bg-clip-text text-transparent">
                  DETAILS OF BRAKE POWER CERTIFICATE
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-3 border border-violet-400/20">
                  <p className="text-violet-200 font-semibold lg:text-lg text-base mb-4">Brake Power%</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-base border-collapse">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-violet-400/30 px-2 py-2 text-left text-violet-200 font-semibold lg:text-base text-sm ">S.No</th>
                          <th className="border border-violet-400/30 px-2 py-2 text-left text-violet-200 font-semibold lg:text-base text-sm ">Type of train</th>
                          <th className="border border-violet-400/30 px-2 py-2 text-left text-violet-200 font-semibold lg:text-base text-sm ">Validity</th>
                          <th className="border border-violet-400/30 px-2 py-2 text-left text-violet-200 font-semibold">Originating station</th>
                          <th className="border border-violet-400/30 px-2 py-2 text-left text-violet-200 font-semibold lg:text-base text-sm ">En-route station</th>
                          <th className="border border-violet-400/30 px-2 py-2 text-left text-violet-200 font-semibold lg:text-base text-sm ">Conditions for invalid BPC &amp; Other instructions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/5">
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">1</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Ordinary End to End Rakes<br />Vacuum brake rake, Air brake rake other than Premium</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Examination-Loading-Unloading-Examination, ie., one time loading</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">85- Vacuum brake stock<br />90- Air brake stock</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">75</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">
                            The BPC will become invalid, if –<br />
                            i) No destination mentioned on the BPC of Loaded train<br />
                            ii) Empty rake does not reach loading point within 04 days (for Vacuum brake stock)<br />
                            iii) Train composition is changed by 10FWUs or Four 8 wheeled wagons or more<br />
                            iv) Train is stabled more than 24 hours in examination yard.
                          </td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">2</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Premium Air brake Rakes<br />VOXN, BCN, BRN, BOBRN, etc.</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">12 days for multiple loading, i.e., loading to be done within 12 days +3 days grace period in loaded condition.</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Minimum 95</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Not mentioned</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">
                            The BPC will become invalid, if –<br />
                            i) Rake integrity is disturbed by more than Four 8 – wheeled wagons<br />
                            ii) Train is stabled more than 24 hours in examination yard<br /><br />
                            Instructions for Premium End to End rakes:<br />
                            i) After lapse of 12 days, rake to be offered for examination at the first nominated intensive examination point in the direction of movement.<br />
                            ii) After lapse of 15 days, rake either empty or loaded shall be offered for examination at the first exam point in the direction of movement<br />
                            iii) Premium BPC shall be issued from the nominated &quot;A&quot; category depot.<br />
                            iv) Normal End to End BPC shall be issued if the rake is not offered for examination in empty condition or at nominated &quot;A&quot; category exam point.<br />
                            v) After each loading/unloading, the rake shall be subjected to GDR check
                          </td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">3</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Close circuit rakes only Air brake stock</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">
                            Premium CC rake – 7500 kms/35 days whichever is earlier Or 6000 kms/30 days&apos; whichever is earlier<br />
                            (Some railways have CC rakes of 6000 kms/30 days whichever is earlier. C..Rly. does not have such rakes)
                          </td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">100</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">90</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">
                            The BPC will become invalid, if –<br />
                            i) Rake is not running in nominated circuit.<br />
                            ii) Rake is stabled more than 4 hrs at examination station.<br />
                            iii) Rake has completed either stipulated Kms or days<br />
                            iv) More than 4 wagons are replaed between two Periodical Maintenance Examination ie., PME<br /><br />
                            Instructions for Premium CC rakes:<br />
                            i) Rake shall be offered at its Nominated &quot;A&quot; category base depot<br />
                            ii) Rake shall be formed off POH/ROH wagons only<br />
                            iii) After each loading/unloading, the rake shall be subjected to GDR check<br />
                            iv) BPC shall be revalidated by C&amp;W staff wherever TXR staff is provided<br />
                            v) Wagons to be attached shall be good examined wagons.
                          </td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">4</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">Container rakes<br />BLCA+BLCB</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">6000 kms/0 days<br />Circuits – TKD – JNPTDADRI/TKDJNPT/TKD/AQ depot run on free circuit basis</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">100</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">90</td>
                          <td className="border border-violet-400/30 px-2 py-2 text-violet-50/95 lg:text-base text-sm ">
                            The BPC will become invalid, if –<br />
                            j) Rake has completed either Stipulated Kms or days.<br />
                            ii) Rake is not running in nominated circuit<br /><br />
                            Instructions for Container rakes:<br />
                            iii) Rake integrity is to be maintained<br />
                            iv) Revalidation of BPC by TXR staff after every unloading/loading<br />
                            v) Rake shall be formed from New wagons or Off POH/ROH wagons<br />
                            vi) Utilization of wagons in 6000 kms. Rake – New wagons up to 12 months/Off POH/ROH wagons up to 09 months.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Various Machines used for Track Maintenance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-slate-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-slate-500/30 to-gray-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-gray-500/30 transition-all duration-500">
                  <Wrench className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-slate-100 bg-clip-text text-transparent">
                  Various Machines used for Track Maintenance
                </span>
              </h2>
              <div className="bg-linear-to-br from-slate-500/20 via-gray-500/15 to-zinc-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-2 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-3 border border-slate-400/20">
                  <p className="text-slate-200 font-semibold lg:text-sm text-xs mb-4">Minimum Stipulated Block Period Maximum Stipulated</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-base border-collapse">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">S.No</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Type of Track Machines</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Purpose of Deployment</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Deliverables</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold">To &amp; fro time (in*)</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Setting &amp; winding up time (in*)</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Working time</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Total</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Output/Effective hour (new m/c)</th>
                          <th className="border border-slate-400/30 px-2 py-2 text-left text-slate-200 font-semibold lg:text-base text-sm ">Minimum Ty. Speed Restriction, if any.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">1</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">09-3X<br />Plain Track Tamping</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It corrects track geometry i.e. alignment, twist, cross level, longitudinal level and pack ballast under sleepers. This machine can pack three sleepers at a time.</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">1.6Km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">Nil, except in summer with 50 kmph, if not followed by DTS</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">2</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">CSM<br />Plain Track Tamping</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">DO. But can pack two sleepers at a time.</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">1.2 Km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">do</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">UNO<br />Plain Track Tamping</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">DO. Generally deployed at work site. But can pack one sleeper at a time.</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">0.5km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">do</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">DUO (0)<br />Plain Track Tamping</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">0.8km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">do</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">5</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">WST<br />Plain Track Tamping</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">DO. Generally deployed at work site. But can pack two sleepers at a time</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">0.8 km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">do</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">6</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">BCM<br />Ballast screening of Plain &amp; Turnout Track</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It screens track ballast by removing muck, thus, improve drainage &amp; elasticity of track for safe &amp; comfortable running</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">30 as 3 m/c go in block</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">40</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">2:50</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">0.2km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">20kmph or 40kmph if DTS+ TTM deployed behind it &amp; stipulated safety instructions followed.</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">7</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">FRM<br />Shoulder Ballast Cleaning</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It is used to carry out cleaning of shoulder ballast by removing muck, drainage of track and elasticity improving of ballast bed.</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">30</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">30</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">0.4km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">Nil, ecxept in summer with 50 kmph if not followed by DTS</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">8</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">UNI<br />Turnout packing</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It corrects turnout track geometry i.e. alignment, twist, cross level, 1ongitudinal level and pack ballast under sleepers</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">1 T/Out</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">Nil</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">9</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">DGS<br />Consolidation of newly tamped track</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">It build up lateral resistance &amp; consolidation of track faster and helps to relax speed restriction early</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">3:35</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">1 km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">Nil</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">TRT<br />Laying of Track</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">It is a fully mechanized system of complete Track Renewal</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">40</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">50</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">2:30</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">O.36km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">30kmph or 40 kmph if DGS deployed and ballasting, rail joints are done as per IRPWM</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">11</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">PQRS<br />Laying of Track</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It is a semi mechanised system of track renewal wherein pre fabricated rail panels are laid and existing panels removed with minimum labour</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95 lg:text-base text-sm ">25</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">20</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">3:15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">0.24km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">20kmph</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">12</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">T-28<br />Turnout Replacement Machine</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It is a fully mechanised system of complete turnout with minimum manual labour</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">2:40</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">1Turnout per 4 hour</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">20 Kmph</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">13</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">UIV<br />Utility Vehicle</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It is a mechanized system of transporting heavy material like rail, sleepers, etc, from one station to another in traffic block.</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">15</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">10</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">2:45</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">50 rails per hour in one BFR</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">Nil</td>
                        </tr>
                        <tr className="bg-white/5">
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">14</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">BRM<br />Ballast Regulating Machine</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">It is a mechanized system of track ballast equalization, regulatation and profiling,</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">-</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">20</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">20</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">3:20</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">4:00</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">2km</td>
                          <td className="border border-slate-400/30 px-2 py-2 text-slate-50/95">Nil</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-50/95 lg:text-base text-sm mt-4 italic">*As per Board&apos;s Joint Circular</p>
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

export default VariousConcepts
