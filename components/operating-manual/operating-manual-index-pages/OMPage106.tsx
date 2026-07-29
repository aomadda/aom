'use client'
import React from 'react'
import { 
  Map,
  Search,
  CheckCircle,
  Users,
  FileText,
  Target,
  Settings,
  BarChart3,
  Activity,
  Shield,
  Building,
  Network,
  Calculator,
  Globe,
  Zap,
  FileBarChart,
  MapPin,
  UserCheck,
  Key,
} from 'lucide-react'

const OMPage106 = () => {
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
                <Map className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TRAFFIC SURVEY
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Comprehensive Traffic Analysis & Planning</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete guide to traffic survey methodologies, feasibility studies, Gati Shakti implementation, and final location surveys 
              for railway infrastructure development and strategic planning.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Traffic Survey Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Search className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Traffic Survey Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      It is a detailed study of traffic conditions and prospects of an area with the object of determining the most promising routes for the railways in the area.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Traffic surveys are ordered and conducted to study the feasibility of major works like new lines, doubling/tripling/quadrupling, gauge conversion.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <Calculator className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It includes an assessment of Financial Internal Rate of Return to see if the project is economically viable.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">For certain strategic lines which are critical for country&apos;s defense, socio-economic development of a backward area etc., the sanctions are awarded by the government despite poor financial returns.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Survey Team Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Traffic Survey Team Structure
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-green-400">
                              <UserCheck className="w-5 h-5" />
                            </span>
                            <div className="text-white text-sm">
                              <strong>Team Leadership:</strong> The traffic survey wing is headed by an experienced administrative officer of the traffic (Operating/Commercial) department.
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <div className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-green-500">
                              <Calculator className="w-5 h-5" />
                            </span>
                            <div className="text-white text-sm">
                              <strong>Financial Expertise:</strong> An accounts officer of appropriate status is associated with the traffic survey officer to ensure realistic estimates and financial appraisal.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-green-600">
                            <FileText className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Terms of Reference:</strong> The traffic survey team is supplied with terms of reference containing instructions regarding the scope and nature of the investigation to be carried out.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
                        <h6 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                          <Network className="w-5 h-5 mr-2" />
                          Collaboration Requirements:
                        </h6>
                        <ul className="space-y-3 text-sm text-white">
                          <li className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-green-400">
                              <Users className="w-4 h-4" />
                            </span>
                            <span>
                              The team should work closely with the HQ at various intervals, both during field work and recess, to consult the General Manager and, if needed, have the original terms of reference modified by the competent authority.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-green-500">
                              <Network className="w-4 h-4" />
                            </span>
                            <span>
                              The traffic survey team should collaborate with the engineering survey party (if present in the field), visit all trade centers in the area, and consult local authorities and prominent citizens regarding trade, industry, and the most suitable alignment for the proposed railway line.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Traffic Survey Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Traffic Survey
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Traffic survey is mainly of two types:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Item (a) */}
                      <div className="bg-white/5 rounded-2xl lg:p-7 p-4 border border-orange-300/30 shadow-lg transition-transform hover:scale-[1.02] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
                          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-yellow-300 shadow-md w-14 h-14 border-4 border-white/10 text-3xl font-extrabold text-white drop-shadow-lg select-none">
                            a
                          </span>
                        </div>
                        <h4 className="text-orange-300 font-semibold text-lg mb-3 mt-7 text-center tracking-wide">
                          Reconnaissance / Preliminary Engineering cum Traffic survey (RET/PET)
                        </h4>
                        <div className="space-y-3 text-sm text-white">
                          <p>
                            RET/PET surveys are also called as feasibility studies. They are undertaken to determine how a proposed line will fit in the general development of railway and what return is likely to yield on the estimated total cost.
                          </p>
                          <div className="bg-orange-300/5 rounded-lg lg:p-5 p-3 border border-orange-300/20">
                            <h6 className="font-semibold text-orange-300 mb-2">Based on careful study of:</h6>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                                Existing map
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                                Trade and population
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                                Financial and statistical data of the railway of similar area
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                                Modes of transport available in the area
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Item (b) */}
                      <div className="bg-white/5 rounded-2xl lg:p-7 p-4 border border-red-300/30 shadow-lg transition-transform hover:scale-[1.02] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
                          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 to-red-400 shadow-md w-14 h-14 border-4 border-white/10 text-3xl font-extrabold text-white drop-shadow-lg select-none">
                            b
                          </span>
                        </div>
                        <h4 className="text-red-300 font-semibold text-lg mb-3 mt-7 text-center tracking-wide">
                          Final Location Survey (FLS)
                        </h4>
                        <div className="space-y-3 text-sm text-white">
                          <p>
                            Final location survey is done with the sanction of Railway Board. It is sanctioned for those approved feasibility studies after their scrutiny and acceptance.
                          </p>
                          <div className="bg-red-300/5 rounded-lg p-3 border border-red-300/20">
                            <h6 className="font-semibold text-red-300 mb-2">Includes detailed assessment of:</h6>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Acquisition of land
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                High flood level
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Station site and junctions
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                Road ways and gradients
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feasibility Studies Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Feasibility Studies & Approvals
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-400">
                            <Target className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Decision Making:</strong> From this investigation, the railway administration decides whether final location survey should be undertaken or not and what would be the standard of construction.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-purple-500">
                            <FileBarChart className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Budget Requirements:</strong> All estimates for traffic survey require the sanction of the railway board and the cost of the survey is included in the budget.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg lg:p-6 p-3 border border-purple-400/30">
                        <h6 className="font-semibold text-purple-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                          <Settings className="w-5 h-5 mr-2" />
                          Approval Authorities:
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white">
                          <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                            <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              DRM Level
                            </h6>
                            <p>Feasibility study for projects lying exclusively within the Division</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                              <Network className="w-4 h-4 mr-2" />
                              GM Level
                            </h6>
                            <p>Feasibility study of inter-divisional projects within the Zonal railways jurisdiction</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <h6 className="font-semibold text-purple-400 mb-2 flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Railway Board
                            </h6>
                            <p>Feasibility study of Inter Railway projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gati Shakti Units Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Gati Shakti Units
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                            <CheckCircle className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>National Master Plan:</strong> Railways are one of the key drivers of the PM Gati Shakti National Master Plan. Ministry of Railways has set up a multi-disciplinary Gati Shakti Directorate in Railway Board.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                            <Building className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Division Coverage:</strong> The Gati Shakti Units in all 68 divisions have been created to fast track all the important works from sanctioning to commissioning.
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg lg:p-6 p-3 border border-yellow-400/30">
                        <h6 className="font-semibold text-yellow-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                          <Activity className="w-5 h-5 mr-2" />
                          Implementation Process:
                        </h6>
                        <ul className="space-y-3 text-sm text-white">
                          <li className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                              <Search className="w-5 h-5" />
                            </span>
                            <span>
                              <strong>Feasibility Studies:</strong> Gati Shakti units in Divisions conduct feasibility studies for projects such as New Lines, Doubling, and Gauge Conversions. For inter-Division and inter-Zonal projects, CAO/C is responsible. These studies utilize resources and capabilities available on the &quot;PM Gati Shakti&quot; portal (by BISAG-N) and may involve expert agencies.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                              <Key className="w-5 h-5" />
                            </span>
                            <span>
                              <strong>Enhanced Powers:</strong> Gati Shakti Units have enhanced sanctioning powers with updated SOPs. All related works must be processed in IRPSM with the Gati-Shakti Tag, following Railway Board policy guidelines.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Planning Group Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Network className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Network Planning Group (NPG)
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                            <Target className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Purpose:</strong> Each Division and Zonal Railway Headquarter will have a Network Planning Group (NPG) for selecting feasible projects for the preparation of DPR to improve mobility, throughput/loading in the Railway.
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <h6 className="font-semibold text-indigo-300 mb-2 flex items-center justify-center text-center">
                            <Building className="w-4 h-4 mr-2" />
                            Zonal Level NPG
                          </h6>
                          <p className="text-sm text-white">PCOM/CTPM of Railway (PCOM/CTPM & SAG officers of Engineering, Electrical, S&T & Finance) as approved by GM.</p>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                          <h6 className="font-semibold text-blue-300 mb-2 flex items-center justify-center text-center">
                            <Network className="w-4 h-4 mr-2" />
                            Division Level NPG
                          </h6>
                          <p className="text-sm text-white">CPM/GS (Dy. CPM/GS/T or equivalent with SG/JAG officers of Engineering, Electrical, S&T, Operating, Mechanical & Finance) as approved by DRM.</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg lg:p-6 p-3 border border-indigo-400/30">
                        <h6 className="font-semibold text-indigo-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          DPR Preparation Approval:
                        </h6>
                        <div className="space-y-2 text-sm text-white">
                          <p>On completion of the feasibility study and submission of its report, approval of the DRM/GM is obtained for preparation of DPR for feasible projects required to be executed by Zonal Railway for improving mobility, throughput and loading in the Railways.</p>
                          <p>DRM/GM is empowered to sanction works for preparation of DPR for such projects (whose feasibility study was approved by them) that are found feasible.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Location Survey Details Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <MapPin className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Final Location Survey Details
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-400">
                            <CheckCircle className="w-5 h-5" />
                          </span>
                          <div className="text-white text-sm">
                            <strong>Approval Process:</strong> Final location survey is done with the sanction of Railway Board. It is sanctioned for those approved feasibility studies after their scrutiny and acceptance.
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h6 className="font-semibold text-red-300 mb-2 flex items-center justify-center text-center">
                            <Building className="w-4 h-4 mr-2" />
                            Land & Infrastructure
                          </h6>
                          <ul className="text-sm text-white space-y-1">
                            <li>• Acquisition of land</li>
                            <li>• Boundaries of village lands</li>
                            <li>• Station site and junctions</li>
                            <li>• Road ways and gradients</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h6 className="font-semibold text-pink-300 mb-2 flex items-center justify-center text-center">
                            <Building className="w-4 h-4 mr-2" />
                            Environmental Factors
                          </h6>
                          <ul className="text-sm text-white space-y-1">
                            <li>• High flood level</li>
                            <li>• Position of canals, rivers</li>
                            <li>• Protection work required</li>
                            <li>• Clearance from environment ministry</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h6 className="font-semibold text-red-400 mb-2 flex items-center justify-center text-center">
                            <Users className="w-4 h-4 mr-2" />
                            Social & Cultural
                          </h6>
                          <ul className="text-sm text-white space-y-1">
                            <li>• Expected cooperation of local public</li>
                            <li>• Military and civil authority requirements</li>
                            <li>• Religious places and burial places</li>
                            <li>• Traffic diversion planning</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg lg:p-6 p-3 border border-red-400/30">
                        <h6 className="font-semibold text-red-300 mb-2 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                          <Calculator className="w-4 h-4 mr-2" />
                          Financial Assessment:
                        </h6>
                        <p className="text-sm text-white">
                          The final survey reports also include a detailed financial assessment on the project by calculating the FIRR – Financial Internal Rate of Return.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Survey Components Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Survey Components Summary
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center justify-center text-center">
                      <Search className="w-4 h-4 mr-2" />
                      Traffic Survey
                    </h5>
                    <p className="text-sm text-gray-200">
                      Detailed study of traffic conditions and prospects for railway route planning
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-300 mb-2 flex items-center justify-center text-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Feasibility Studies
                    </h5>
                    <p className="text-sm text-gray-200">
                      RET/PET surveys to determine project viability and financial returns
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center justify-center text-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Gati Shakti Units
                    </h5>
                    <p className="text-sm text-gray-200">
                      68 division units for fast-tracking railway infrastructure projects
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-400 mb-2 flex items-center justify-center text-center">
                      <Network className="w-4 h-4 mr-2" />
                      Network Planning
                    </h5>
                    <p className="text-sm text-gray-200">
                      NPG groups for selecting feasible projects and DPR preparation
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-500 mb-2 flex items-center justify-center text-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Final Location Survey
                    </h5>
                    <p className="text-sm text-gray-200">
                      Detailed assessment of land, environment, and social factors
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-500 mb-2 flex items-center justify-center text-center">
                      <Calculator className="w-4 h-4 mr-2" />
                      Financial Assessment
                    </h5>
                    <p className="text-sm text-gray-200">
                      FIRR calculation for project economic viability evaluation
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

export default OMPage106