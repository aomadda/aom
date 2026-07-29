'use client'
import React from 'react'
import { 
  AlertTriangle,
  Shield,
  Phone,
  Train,
  Users,
  Eye,
  FileText,
  Settings,
  CheckCircle,
  AlertCircle,
  PhoneCall,
  RadioTower,
  UserCheck,
  MapPin,
  Signal,
  Flag,
  Zap,
  BookOpen,
  Target,
} from 'lucide-react'

const OMPage81 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER – VI
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-yellow-300 mb-4">UNUSUAL OCCURRENCES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to handling unusual occurrences, safety protocols, and emergency procedures 
              during railway operations to ensure passenger and staff safety.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Chapter Overview
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <ul className="space-y-5">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm leading-relaxed">
                          Train operations are complex, involving resources like locomotives, wagons, signals, track, and OHE.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <UserCheck className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm leading-relaxed">
                          All staff must strictly follow rules, manuals, and safety instructions to ensure operational safety.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <AlertTriangle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm leading-relaxed">
                          Occasionally, failures or unusual occurrences may happen due to the large scale of the system.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-rose-400">
                          <BookOpen className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm leading-relaxed">
                          Actions, procedures, and rules for handling such situations are well documented and must be followed.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Zap className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm leading-relaxed">
                          This chapter briefly discusses a few of these unusual circumstances and the required responses.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Alertness Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Eye className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Alertness Requirements
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Users className="w-5 h-5 mr-2" />
                      Staff Alertness
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      All railway servants including Station staff, Loco Pilots, Guards, Gatemen and maintenance staff of Engineering, Mechanical, Electrical and S&T; their supervisors and officers shall always be alert especially while on duty.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">They must keep a look out for any unusual happenings in the fixed infrastructure like track, OHE, signals etc.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">And also in the trains passing by them or in which they are traveling.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-600">
                          <Users className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Railway servants normally travelling by trains such as TTEs, AC mechanics, power car staff shall also be alert to any possible unsafe indications.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-700">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">All railway servants shall be well acquainted in identifying unusual occurrences and the follow up action to be taken.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection and Reporting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Protection and Reporting
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-6">
                  
                  {/* Immediate Action */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Immediate Action Required
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-3">
                      Any Railway Servant who notices an unusual occurrence that endangers or likely to endanger safety of trains or public shall take immediate steps to prevent an accident.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Signal className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If there is a train approaching towards the danger location or is involved in the unusual, immediate action has to be taken to bring the train to a stop by showing danger signal.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <Flag className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Red flag or red lamp; using banner flag; setting up detonators on track etc.</span>
                      </div>
                                              <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-600">
                            <AlertCircle className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Only in train parting cases, the staff shall not show danger signal to Loco Pilot.</span>
                        </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-700">
                          <MapPin className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If there is no train approaching, danger signal has to be shown or placed in the direction on which the train is expected.</span>
                      </div>
                    </div>
                  </div>

                  {/* Communication Methods */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Communication and Reporting
                    </h5>
                    <div className="space-y-4">
                      <p className="text-white lg:text-base text-sm leading-relaxed">
                        Once the protection is done, or in parallel, information regarding the unusual has to be reported to the adjacent station master, so that no train is allowed towards the danger location.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-pink-400">
                            <PhoneCall className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">In case, where the staff is unable to contact the station master, they should immediately contact control office and convey the information.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-pink-500">
                            <MapPin className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">There are emergency phone sockets available in the block section for every km with direction boards.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-pink-600">
                            <FileText className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Their locations are also mentioned in the WTT.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-pink-700">
                            <Phone className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">These can be accessed by portable control telephones.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-pink-800">
                            <Settings className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Portable control phone is a part of the SLR equipment of coaching trains.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Station Master Actions Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <UserCheck className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Master Responsibilities
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Immediate Actions Required
                    </h5>
                    <div className="space-y-4">
                      <p className="text-white lg:text-base text-sm leading-relaxed">
                        On receipt of the unusual message from the staff or control, SM shall advise the other end block SM also and should not allow train movement before confirming safety and fitness as per the rules laid down for such an unusual.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-blue-400">
                            <Zap className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">If there are trains that are already on run towards the danger location, he/she shall immediately advise control to switch off OHE in electrified sections.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-blue-500">
                            <Users className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">The SM shall also advise gate keepers or other railway staff working in mid-section to stop the train.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-blue-600">
                            <RadioTower className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">The SM shall also try to alert the crew through walkie talkie or guard&apos;s mobile.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-blue-700">
                            <CheckCircle className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Where rules permit the train movements, the SM shall permit duly following all the precautions laid down in such rules.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Safety Points Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Safety Points Summary
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center flex-col gap-2 text-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Constant Alertness
                    </h5>
                    <p className="text-sm text-gray-200">
                      All railway staff must remain alert and vigilant for unusual occurrences.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-2 text-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Immediate Protection
                    </h5>
                    <p className="text-sm text-gray-200">
                      Take immediate steps to protect trains and public safety.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Quick Communication
                    </h5>
                    <p className="text-sm text-gray-200">
                      Report unusual occurrences immediately to station master or control.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Rule Compliance
                    </h5>
                    <p className="text-sm text-gray-200">
                      Follow all safety rules and procedures during unusual occurrences.
                    </p>
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

export default OMPage81