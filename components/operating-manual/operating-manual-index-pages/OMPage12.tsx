'use client'
import React from 'react'
import { 
  FileText, 
  Building2, 
  Settings, 
  Shield, 
  MapPin, 
  Zap,
  Eye,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  Route,
  Lock,
  Gauge,
  Target,
  BookOpen,
  Clipboard,
  UserCheck,
  Calendar,
  Cpu
} from 'lucide-react'

const OMPage12 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STATION WORKING RULES (SWR)
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter II - Working of Stations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to station working rules, essential documents, staff responsibilities, 
              and safety procedures for efficient railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Station Working Rules Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Working Rules (SWR)
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  As every station has its unique features of station yard like running lines, isolation,
                  gradients, facilities like shunting neck, sidings, different standards of interlocking,
                  etc., the rules on how trains are to be dealt in the station is provided as Station
                  Working Rules.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    GR 5.06 Mandate
                  </h4>
                  <p className="text-sm text-gray-200">
                    GR 5.06 mandates that in addition to the General Rules for Indian
                    Railways and Subsidiary Rules of a Railway, each station shall be provided with
                    Station Working Rules applicable to the station, issued under special instructions.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-cyan-300 mb-3 flex flex-col gap-2 items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Objective
                  </h4>
                  <p className="text-sm text-gray-200">
                    The objective of issuing SWR is to inform all staff about the procedure to be followed 
                    in train operations in the station as well as the special features of the station to 
                    ensure safety. These rules also cover details and procedures with respect to block 
                    sections, adjacent block stations, level crossings etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Documents */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Important Documents in SWR
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The following are some important documents that are part of SWR&hellip;
                </p>
                
                <div className="space-y-6">
                  {/* Station Working Rule Diagram */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Station Working Rule Diagram
                    </h4>
                    <p className="text-sm text-gray-200">
                      It contains the complete layout of the yard, points, signals, gradients and 
                      interlocking arrangement of the station, holding capacity of all individual lines 
                      in meters, details of adjacent station and IBH signals where ever provided along 
                      with their respective distance.
                    </p>
                  </div>

                  {/* OHE Diagram */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      OHE Diagram
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      In Electrified section, OHE diagram of the station is provided showing the 
                      elementary sections within the station as well as the adjacent block sections 
                      juxtaposed with the yard layout.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <Zap className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        This helps in understanding the impact of power blocks and OHE failures on train movements
                      </li>
                      <li className="flex items-start">
                        <MapPin className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        OHE diagram also provides location of isolators
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        It shall be given in Appendix &ldquo;G&rdquo; of SWR
                      </li>
                    </ul>
                  </div>

                  {/* Siding Diagram */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                      <Route className="w-5 h-5 mr-2" />
                      Siding Diagram
                    </h4>
                    <p className="text-sm text-gray-200">
                      While the station working rule diagram gives the details of the station yard, 
                      the details of sidings and their layout is furnished in siding diagrams.
                    </p>
                  </div>

                  {/* List of Essential Safety Equipment */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      List of Essential Safety Equipment
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      List of essential equipment of stations along with descriptions and numbers 
                      is to be given in the chapter &ldquo;11&rdquo; and Appendix &ldquo;E&rdquo; of SWR.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <Gauge className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        The quantity and quality depends on the size of the station, nature and volume of traffic dealt
                      </li>
                      <li className="flex items-start">
                        <UserCheck className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        It shall be the duty of station in-charge to ensure all essential equipment is in good fettle
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        Equipment must be available for use when required
                      </li>
                    </ul>
                  </div>

                  {/* Duties of Staff */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Duties of Staff
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      The duties assigned to each of the station staff like Station Master, Shunting 
                      Jamedar and Pointsman/Gateman is to be mentioned in the SWR.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <Settings className="w-4 h-4 text-green-400 mt-1 mr-3 shrink-0" />
                        Where more than one Station Master is available in a shift, duties of each are specifically given
                      </li>
                    </ul>
                  </div>

                  {/* Gate Working Instructions */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                      <Lock className="w-5 h-5 mr-2" />
                      Gate Working Instructions (GWI)
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Instructions for Working of LC gates are to be given in Appendix &ldquo;A&rdquo; of SWR.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        Copy of the GWI should be kept at the Gate lodge in English, Hindi & local language
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="w-4 h-4 text-emerald-400 mt-1 mr-3 shrink-0" />
                        GWI is prepared based on the guidelines issued in Appendix II of G&SR
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SM's Responsibility for Assurance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <UserCheck className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                SM&rsquo;s Responsibility for Assurance
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Initial Learning Requirement
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Before an employee takes independent charge for the first time at any station,
                    he/she must undergo learning at the end of which he/she must give a written
                    assurance that he/she has understood the working rules of the station and is fully
                    conversant with the duties he/she has to perform.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-purple-400 mt-1 mr-3 shrink-0" />
                      Similar assurance is also required when there is a change of system/means of working of trains
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-purple-400 mt-1 mr-3 shrink-0" />
                      This learning has to cover all the shifts
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Learning Process
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <FileText className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      Staff has to read the entire Station Working Rules
                    </li>
                    <li className="flex items-start">
                      <Clipboard className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      Note down salient features like physical yard layout, Signalling and Telecommunication arrangements
                    </li>
                    <li className="flex items-start">
                      <Eye className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      Observe all train/shunt movements carefully and working pattern
                    </li>
                    <li className="flex items-start">
                      <Route className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      At stations with sidings, accompany pilots at least once to and fro
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      Observe salient features of siding yard, placement, removals and shunting procedures
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Learning Duration Guidelines
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Adequate number of days for learning has to be provided for covering all aspects:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-purple-200 mb-2 text-center flex flex-col gap-2 items-center justify-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        Junction stations with Marshalling yard and lobby
                      </h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-purple-500/30 px-2 py-1 rounded">10 days</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-pink-200 mb-2 text-center flex flex-col gap-2 items-center justify-center">
                        <Route className="w-4 h-4 mr-2" />
                        Terminal stations with Marshalling yard and lobby
                      </h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-pink-500/30 px-2 py-1 rounded">8 days</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-purple-200 mb-2 text-center flex flex-col gap-2 items-center justify-center">
                        <Settings className="w-4 h-4 mr-2" />
                        Large stations or Junction stations
                      </h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-purple-500/30 px-2 py-1 rounded">5 days</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-pink-200 mb-2 text-center flex flex-col gap-2 items-center justify-center">
                        <Gauge className="w-4 h-4 mr-2" />
                        Medium stations
                      </h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-pink-500/30 px-2 py-1 rounded">4 days</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-purple-200 mb-2 text-center flex flex-col gap-2 items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Road side stations (Continuous roster)
                      </h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-purple-500/30 px-2 py-1 rounded">3 days</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-pink-200 mb-2 text-center flex flex-col gap-2 items-center justify-center">
                        <Cpu className="w-4 h-4 mr-2" />
                        Road side stations (EI roster)
                      </h6>
                      <div className="text-center">
                        <span className="text-xs text-gray-200 bg-pink-500/30 px-2 py-1 rounded">2 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Additional Requirements
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <Shield className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      Apart from assurance, employee must possess necessary competency certificates
                    </li>
                    <li className="flex items-start">
                      <Users className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      Necessary hand holding to be provided for new employees before allowing fully independent duties
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-pink-400 mt-1 mr-3 shrink-0" />
                      In emergencies and simple duties, pickup period may be reduced by SrDOM
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 items-center">
                    <Clipboard className="w-5 h-5 mr-2" />
                    Assurance Register
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    The Assurance shall be obtained in the Assurance Register which is maintained in three parts&hellip;
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-purple-200 mb-2 flex flex-col gap-2 items-center">
                        <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                        Part A
                      </h6>
                      <p className="text-sm text-gray-200">
                        New member joins or amendment issued to SWR or SWR renewed - acknowledgement of all Station staff
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-pink-200 mb-2 flex flex-col gap-2 items-center">
                        <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
                        Part B
                      </h6>
                      <p className="text-sm text-gray-200">
                        Out-station staff before resuming duties at the station to acknowledge
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h6 className="font-semibold text-purple-200 mb-2 flex flex-col gap-2 items-center">
                        <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                        Part C
                      </h6>
                      <p className="text-sm text-gray-200">
                        Station staff acknowledgement when resuming duty after absence of 15 consecutive days or more
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

export default OMPage12