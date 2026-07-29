'use client'
import React from 'react'
import { 
  Eye,
  Users,
  Shield,
  Target,
  Settings,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Clipboard,
  Search,
  FileText,
  Monitor,
  Star,
  Award,
  Heart,
  Zap,
  Train,
  CheckSquare,
  BarChart3,
} from 'lucide-react'

const OMPage97 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER – VIII
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">INSPECTIONS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to railway inspection systems and their critical role in ensuring 
              safe, efficient, and accountable railway operations across India.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Railway Operations Scale
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Train operations in Indian Railways is spread over 68 divisions across more than 7300 stations. On an average, about 20000 trains are running per day in the system.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                        <div className="text-2xl font-bold text-blue-300 mb-2">68</div>
                        <div className="text-sm text-white">Divisions</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                        <div className="text-2xl font-bold text-cyan-300 mb-2">7300+</div>
                        <div className="text-sm text-white">Stations</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-2">20,000</div>
                        <div className="text-sm text-white">Daily Trains</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In order to manage such a large scale operation, every functional unit and staff operating them are provided with a set of rules and regulations.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <BookOpen className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">These rules are laid down carefully indicating clear individual responsibility so that there is proper accountability for every step of an operation.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection Purpose Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Monitor className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Inspection Purpose
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Implementation of these rules is monitored and ensured through Inspections. The functioning of the system; performance of the staff are assessed during the inspections.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <Search className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The need for review of the rules is also a part of the inspections.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Inspection is thus an important management tool, to ensure safe and efficient railway operations at all levels.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Objectives of Inspections
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-6">
                      The following objectives shall be borne in mind while conducting inspections…
                    </p>
                    
                    {/* Objective 1: Knowledge Adequacy */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-purple-300 mb-3 flex flex-col gap-3 text-center items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Ensuring adequacy of knowledge of staff
                      </h3>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-400">
                            <Star className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Every railway employee should be fully conversant with rules, instructions procedure relating to his duties.</span>
                        </div>
                      </div>
                    </div>

                    {/* Objective 2: Rules Implementation */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-purple-400 mb-3 flex flex-col gap-3 text-center items-center justify-center">
                        <Clipboard className="w-5 h-5 mr-2" />
                        Ascertaining that rules are put in to practice religiously
                      </h3>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-400">
                            <CheckSquare className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">All staff should perform their duties according to rules, instructions and procedures in force.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-500">
                            <AlertTriangle className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Undesirable shortcuts, irregularities of unsafe practices being resorted to by the staff should be detected and appropriate remedial action has to be taken which can be…</span>
                        </div>
                        
                        {/* Remedial Actions */}
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10 ml-1">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                              <span className="text-white text-sm">Educative, in case these are resorted to out of ignorance.</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                              <span className="text-white text-sm">Corrective, if there is something wrong in the working conditions, or there are system deficiencies.</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                              <span className="text-white text-sm">Punitive, if resorted to willfully or negligently and persisting even after repeated guidance and counseling.</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-600">
                            <FileText className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Registers, documents and other records have to be maintained and preserved according to instructions.</span>
                        </div>
                      </div>
                    </div>

                    {/* Objective 3: Working Environment */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-purple-500 mb-3 flex flex-col gap-3 text-center items-center justify-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Creating good working environment
                      </h3>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-400">
                            <Eye className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Inspecting official should observe the conditions prevailing at the work spots to understand the difficulties experienced by staff including their personal grievances and seeking on the spot redressal, wherever possible, or bringing to the notice of the concerned authority.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-500">
                            <Award className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Inculcate discipline and build up the morale of the workers.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-600">
                            <Users className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Monitor the behavior of staff towards customers, particularly promptness of response and willingness to help.</span>
                        </div>
                      </div>
                    </div>

                    {/* Objective 4: Resource Adequacy */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-purple-600 mb-3 flex flex-col gap-3 text-center items-center justify-center">
                        <Settings className="w-5 h-5 mr-2" />
                        Ensuring adequacy of resources
                      </h3>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-400">
                            <CheckCircle className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Inspecting official should check for the availability of full complement of staff and equipment; staff should be fit for duty and equipment should be in working order.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-500">
                            <BarChart3 className="w-4 h-4" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Analyze the actuals vs targets in performance; identify bottlenecks if any.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Inspection System Benefits
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Shield className="w-4 h-4 mr-2" />
                      Safety Assurance
                    </h5>
                    <p className="text-sm text-gray-200">
                      Ensures all safety protocols are followed and identifies potential risks
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-teal-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Users className="w-4 h-4 mr-2" />
                      Staff Development
                    </h5>
                    <p className="text-sm text-gray-200">
                      Identifies training needs and promotes continuous learning
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Settings className="w-4 h-4 mr-2" />
                      Process Improvement
                    </h5>
                    <p className="text-sm text-gray-200">
                      Highlights system deficiencies and operational bottlenecks
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-teal-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Performance Monitoring
                    </h5>
                    <p className="text-sm text-gray-200">
                      Tracks actual vs target performance and accountability
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

export default OMPage97