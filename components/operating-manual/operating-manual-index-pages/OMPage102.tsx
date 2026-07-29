'use client'
import React from 'react'
import { 
  Calendar,
  Search,
  CheckCircle,
  AlertCircle,
  Info,
  Users,
  FileText,
  Clock,
  Target,
  Eye,
  TrendingUp,
  Settings,
  BarChart3,
  Activity,
  CheckSquare,
  ClipboardList,
  Monitor,
  Shield,
  BookOpen,
  MessageSquare,
  AlertTriangle,
  FileCheck,
  Send,
  Star,
  ArrowUpRight,
} from 'lucide-react'

const OMPage102 = () => {
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
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INSPECTION GUIDELINES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Comprehensive Inspection Management System</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete guide to effective inspection scheduling, quality assurance, and compliance monitoring for railway operations 
              ensuring safety and operational excellence.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Scheduling of Inspections Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Calendar className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
        Scheduling of Inspections
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      In order to ensure that all areas of a division are covered in an effective periodicity, a schedule for various types of inspections is made. Based on the goals to be achieved, the schedules can be tailored. However, a minimum level of inspection should always be ensured so that safety is not compromised at any point of time.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The schedules are generally issued by divisional or zonal headquarters.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Schedules are tailored based on specific goals and objectives to be achieved.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Minimum level of inspection must always be maintained to ensure safety standards.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality of Inspections Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
Quality of Inspections
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      <em>Excerpts from PCOM&apos;s DO letter No. T.387/Insp./Optg/Rules/Vol.II dated 29.11.2021</em>
                    </p>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
While carrying out inspections, the following points may be noted:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg py-4 lg:px-4 px-2 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-green-400">
                            <CheckSquare className="w-5 h-5" />
                          </span>
                          <div className="text-white lg:text-base text-sm">
                            <strong>Quality of inspection shall be ensured.</strong> Exceptional reports that require corrections/improvements in safe working shall be reported prominently and first. List of factual information/items found in order shall be reported in the last, if required.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg py-4 lg:px-4 px-2 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-green-500">
                            <Eye className="w-5 h-5" />
                          </span>
                          <div className="text-white lg:text-base text-sm">
                            <strong>Station coverage:</strong> Stations nearer to headquarters and bigger stations that have easy access are being inspected frequently. It is desirable to cover remotely located stations as well. Covering all stations/locations periodically shall be monitored by divisional headquarters.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg py-4 lg:px-4 px-2 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-green-600">
                            <Clock className="w-5 h-5" />
                          </span>
                          <div className="text-white lg:text-base text-sm">
                            <strong>Timing distribution:</strong> Inspections shall be spread throughout the month, instead of month end rush to complete as per schedule.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg lg:p-6 p-3 border border-green-400/30">
                      <h6 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Compliance Requirements:
                      </h6>
                      <ul className="space-y-3 text-sm text-white">
                        <li className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-green-400">
                            <AlertCircle className="w-5 h-5" />
                          </span>
                          <span>
                            Ensure prompt compliance with observations made by inspecting officials at Station, Divisional, and Zonal levels.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-blue-400">
                            <FileText className="w-5 h-5" />
                          </span>
                          <span>
                            Station Superintendents must submit <strong>Action Taken Reports (ATR)</strong> on observations, after taking corrective actions such as counseling or written advice to concerned departments. ATRs should be sent to SrDOMs, with a copy to the inspecting official.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                            <Star className="w-5 h-5" />
                          </span>
                          <span>
                            <strong>Important:</strong> ATRs should not be a mere &quot;Noted&quot; remark; they must reflect actual corrective action.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-400">
                            <ArrowUpRight className="w-5 h-5" />
                          </span>
                          <span>
                            If observations are beyond the Station Superintendent’s purview, escalate to the concerned authorities. DOMs/AOMs (General) must monitor compliance of scheduled inspections by various officials.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Effective Inspections Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
Effective Inspections
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      In order to ensure that an inspection achieves its purpose, the following action needs to be taken before / during / after the inspection time.
                    </p>
                    
                    {/* Preparation for Inspection */}
                    <div className="space-y-4">
                      <h4 className="text-orange-300 font-semibold text-lg flex items-center justify-center text-center flex-col gap-2">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Preparation for Inspection
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <div className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-orange-400">
                              <Info className="w-5 h-5" />
                            </span>
                            <div className="text-white text-sm">
                              <strong>Understanding:</strong> The inspecting official should have a clear understanding of the unit to be inspected. For a station inspection, the station layout – its signaling, special features of working and the instructions in regard to reception, dispatch crossing shunting and running through of trains should be studied in advance, especially for a detailed planned inspection.
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <div className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-orange-500">
                              <ClipboardList className="w-5 h-5" />
                            </span>
                            <div className="text-white text-sm">
                              <strong>Checklist:</strong> The inspecting official should have a detailed check list for the inspection. Standard formats / check lists are available for all types of inspection.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-orange-600">
                            <FileText className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Documentation:</strong> All books, forms and registers shall be kept ready for the inspecting official so that time is not wasted in searching for those during the inspection. Machine generated reports like Data logger exception reports, Speedometer reports, FOIS/ICMS reports for terminal stations shall also be taken out before the inspection.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Conducting the Inspection */}
                    <div className="space-y-4 mt-6">
                      <h4 className="text-orange-300 font-semibold text-lg flex items-center justify-center text-center flex-col gap-2">
                        <Monitor className="w-5 h-5 mr-2" />
                        Conducting the Inspection
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <div className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-orange-400">
                              <CheckSquare className="w-5 h-5" />
                            </span>
                            <div className="text-white text-sm">
                              <strong>Document Review:</strong> All registers, books and forms should be carefully pursued to check whether the staff has complied with their instructions. If any of these instructions have not been carried out written explanation of the Station Master should be obtained.
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <div className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-orange-500">
                              <Eye className="w-5 h-5" />
                            </span>
                            <div className="text-white text-sm">
                              <strong>Observation:</strong> Observe the actual working of staff and equipment by means of personal observation as well as cross checking with registers for the same.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-orange-400">
                            <Search className="w-5 h-5" />
                          </span>
                          <span className="text-white text-sm">Intensive scrutiny of selected features during preparation and ones identified through intuition through careful observation and cross checking in detail and questioning the staff concerned.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-orange-500">
                            <FileCheck className="w-5 h-5" />
                          </span>
                          <span className="text-white text-sm">All books and registers inspected must be signed by the inspecting official with date.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-orange-600">
                            <MessageSquare className="w-5 h-5" />
                          </span>
                          <span className="text-white text-sm">If any irregularities are found, they shall be discussed with the staff concerned as well as their supervisors. Such a discussion will prove to be educative and produce desired results.</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-orange-700">
                            <Settings className="w-5 h-5" />
                          </span>
                          <span className="text-white text-sm">It shall not be enough merely to point out the irregularity of the staff; matters must be put right personally while at the station to the extent possible.</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
                        <h6 className="font-semibold text-orange-300 mb-2 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Collaborative Approach:
                        </h6>
                        <div className="space-y-2 text-sm text-white">
                          <p>As far as possible, discuss the points common to two or more branches, like the Signaling & Telecommunication branch or C&W, Civil Engineering and Commercial branches jointly for objective and acceptable solutions.</p>
                          <p>Interact with the staff and test their knowledge on aspects pertaining to their duties and recent developments in railways and counsel them wherever required.</p>
                          <p>Inquire on their welfare and any issues cropping up and try to solve or give suitable advises to the problems. Make the staff comfortable to express their problems without any inhibition as hidden dissatisfactions will demoralize and de-motivate, which cause unimaginable loss to the administration.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Monitoring Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Activity className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Compliance Monitoring
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-400">
                            <Send className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Inspection Notes:</strong> All inspections should be followed up with a clear, precise inspection note bringing out the deficiencies to the forefront along with the desired action to be taken. They need to be marked to the concerned person and it shall be ensured that the inspection note reaches to all the concerned including the unit inspected.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-500">
                            <TrendingUp className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Follow-up Actions:</strong> The action taken by the concerned staff / supervisor / officer / department on the deficiencies brought out should be followed up closely for satisfactory compliance. Non complied deficiencies of previous inspections done in the same place have to be highlighted and escalated to higher ups as the case may be.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Inspection Principles Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Inspection Principles Summary
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      Scheduling
                    </h5>
                    <p className="text-sm text-gray-200">
                      Effective periodicity covering all division areas with tailored schedules
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Quality Assurance
                    </h5>
                    <p className="text-sm text-gray-200">
                      Exceptional reports first, comprehensive coverage of all stations
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Target className="w-4 h-4 mr-2" />
                      Preparation
                    </h5>
                    <p className="text-sm text-gray-200">
                      Clear understanding, detailed checklists, ready documentation
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Monitor className="w-4 h-4 mr-2" />
                      Execution
                    </h5>
                    <p className="text-sm text-gray-200">
                      Document review, staff observation, collaborative discussions
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-500 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Send className="w-4 h-4 mr-2" />
                      Documentation
                    </h5>
                    <p className="text-sm text-gray-200">
                      Clear inspection notes with actionable recommendations
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-500 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Follow-up
                    </h5>
                    <p className="text-sm text-gray-200">
                      Continuous monitoring and escalation of non-compliance
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

export default OMPage102