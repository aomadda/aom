'use client'
import React from 'react'
import { 
  Clock, 
  Calendar, 
  FileText, 
  Users, 
  Train, 
  Settings, 
  Shield,
  MapPin,
  BarChart3,
  Route,
  AlertTriangle,
  RefreshCw,
  Globe,
  X,
  Info,
  BookOpen
} from 'lucide-react'

const OMPage39 = () => {
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
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TIME TABLING
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding railway time table management, 
              scheduling factors, types of time tables, and revision procedures.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Time Tabling Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                  The coaching train services are time tabled to serve the passengers. The arrival and
                  departure times of the trains for all the stations through which it runs is published
                  once in a year in the form of a time table.
                </p>
              </div>
            </div>

            {/* Factors for Scheduling */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Factors for Scheduling Passenger Trains
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                
                {/* Passenger Needs */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Users className="w-5 h-5 mr-2" />
                    Passenger&apos;s Needs
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Convenient departure and arrivals at station based on types of service offered.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Speed and reasonable transit time
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Appropriate halt for meals/breakfast
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Sufficient time for entraining and detraining of passengers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Requirements of short/medium/long distance passengers need to be balanced.
                    </li>
                  </ul>
                </div>

                {/* Service Requirements */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Train className="w-5 h-5 mr-2" />
                    Service Requirements
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Maintenance slot for primary, secondary and OEM.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Platform availability
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Coach Watering facility
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Catering for long distance trains
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></span>
                      Fueling if diesel loco planned.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Types of Time Tables */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Time Tables
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                
                {/* Public Time Table */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-5 flex lg:flex-row flex-col gap-3 items-center flex-col gap-2 text-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Public Time Table (PTT)
                  </h4>
                  <ul className="space-y-4 text-sm text-gray-200">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-300 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Shows arrival and departure timings of train services at stations with passenger stoppages. Timings are kept ahead of working time table at enroute stations to conserve running gains.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Info className="w-5 h-5 text-blue-300 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Contains useful information for passengers such as fare tables, reservation rules, available accommodations, etc. Published for each Zonal Railway.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 text-pink-300 mr-3 mt-0.5 shrink-0" />
                      <span>
                        &quot;Trains at a Glance&quot; is published with scheduled timings of important trains across Indian Railways.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 text-green-300 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Timings are also updated in NTES (National Train Enquiry System), an online platform for the public to view required train schedules.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Suburban Time Tables */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Suburban Time Tables
                  </h4>
                  <p className="text-sm text-gray-200">
                    These pocket sized time tables contain in detail the timings of all suburban services as well as of other 
                    passenger services running over the suburban sections and also the abstract timings of the passenger trains 
                    going beyond the suburban section.
                  </p>
                </div>

                {/* Sheet Time Tables */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Sheet Time Tables
                  </h4>
                  <p className="text-sm text-gray-200">
                    These time tables contain the tabulated schedules of passenger carrying trains running over an area on 
                    large sheets of papers and are displayed at platforms and waiting halls.
                  </p>
                </div>

                {/* Working Time Tables */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6 text-white">
                  <h4 className="font-semibold text-pink-300 mb-5 flex lg:flex-row flex-col gap-3 items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Working Time Tables (WTT)
                  </h4>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Issued separately for each division to guide Railway staff, especially running, station, control, and maintenance staff.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-400 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Includes arrival, departure, and run-through timings for trains at all stations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Settings className="w-5 h-5 text-pink-400 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Provides information on maintenance schedules and traffic allowances.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-green-400 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Contains sectional information, load charts, and permitted speeds for locomotives and rolling stock.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 shrink-0" />
                      <span>
                        Includes important JPOs, circulars, and other operational instructions.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Military Time Table */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Military Time Table
                  </h4>
                  <p className="text-sm text-gray-200">
                    The military timetable is given for movement of troops and military specials. These are framed at a 
                    meeting held annually by Railway authorities with Joint Director, Military (MILRAIL). The Military 
                    time table is issued as and when necessary and is meant for official use only and shall be strictly confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Time Table Publication */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calendar className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Time Table Publication & Revision
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Annual Review Process
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Time Tables are usually published once in a year. Hence any major review of timings is usually 
                    carried out once in a year in order to reap the benefits of improvements in track / signaling / 
                    traction / rolling stock; to suit the changed scenario of operations; to provide better timings 
                    based on passenger feedback.
                  </p>
                  <p className="text-sm text-gray-200">
                    However, in the interim period also timings can be revised by issuing relevant notifications and 
                    ensuring the information regarding the changed timings reach the travelling public / users.
                  </p>
                </div>

                {/* Revision Process */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-red-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Revision of Time Table
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Train className="w-5 h-5 text-blue-300 mt-1 mr-3 shrink-0" />
                      <span className="text-sm text-gray-200">
                        Divisions analyze ticket sales data, feedback from DRUCC, local leaders, and passenger associations to propose: new trains, additional services, train extensions, coach augmentation, provision or removal of halts, timing revisions, and train cancellations/diversions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-purple-300 mt-1 mr-3 shrink-0" />
                      <span className="text-sm text-gray-200">
                        Each proposal clearly mentions requirements for rakes, locomotives, train paths, and crew. These are reviewed and consolidated at the zonal headquarters.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 text-pink-300 mt-1 mr-3 shrink-0" />
                      <span className="text-sm text-gray-200">
                        Finalized zonal proposals are discussed in the Inter Railway Time Table Coordination Committee Meeting, organized annually by the Railway Board’s Directorate and attended by CPTMs and the Executive Director (Coaching).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-orange-300 mt-1 mr-3 shrink-0" />
                      <span className="text-sm text-gray-200">
                        Decisions from this meeting are included in the budget. Approved changes are implemented in the new time table.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Timeline for Revision */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-orange-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Timeline for Revision
                  </h4>
                  <div className="space-y-6">
                    <ol className="space-y-6 relative">
                      {[
                        {
                          label: "September",
                          text:
                            "Division proposals are finalized based on various demands, including probable timings and requirements of stock, locomotives, and crew.",
                        },
                        {
                          label: "October",
                          text:
                            "Minutes of the Divisional Time Table meeting are sent to the CPTM.",
                        },
                        {
                          label: "November",
                          text:
                            "CPTM's meeting with Mechanical, Electrical, Engineering, and S&T officials.",
                        },
                        {
                          label: "November",
                          text:
                            "CPTM's meeting with RMS authorities.",
                        },
                        {
                          label: "December",
                          text:
                            "CPTM's meeting with Sr. DOMs. Suggestions from DRUCCs and ZRUCC are duly considered in this meeting.",
                        },
                        {
                          label: "February/March",
                          text:
                            "Inter Railway Time Table Committee meeting, presided over by the ED (Coaching) with Director (Coaching) as Secretary and CPTMs of all Railways as members.",
                        },
                        {
                          label: "15th May",
                          text:
                            "Orders are issued to print the Time Table.",
                        },
                        {
                          label: "1st June",
                          text:
                            "The Time Table is published for the public.",
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start relative pl-12">
                          <span
                            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-500 text-white shadow-md font-bold text-lg md:text-xl w-9 h-9 md:w-11 md:h-11 border-2 border-orange-200 ring-2 ring-orange-300"
                            style={{
                              fontFamily: 'Montserrat, Lato, Arial, sans-serif',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {idx + 1}
                          </span>
                          <div className="bg-white/5 rounded-lg p-4 border-l-2 border-orange-400 shadow flex-1">
                            <p className="text-base text-gray-200">
                              <span className="font-semibold text-orange-200">{item.label}:</span> {item.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Temporary Changes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Temporary Changes in Time Table
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Emergency Changes
                  </h4>
                  <p className="text-sm text-gray-200">
                    During unusual incidents or for carrying out mega blocks / new works, temporary changes are done to 
                    coaching train services duly giving advance information to the public when possible.
                  </p>
                </div>

                {/* Diversion */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Diversion
                  </h4>
                  <p className="text-sm text-gray-200">
                    A passenger carrying train may be diverted to another route due to serious accidents or floods or 
                    any obstruction causing dislocation of traffic and blockade of line, under advice to all concerned.
                  </p>
                </div>

                {/* Cancellation */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <X className="w-5 h-5 mr-2" />
                    Cancellation
                  </h4>
                  <p className="text-sm text-gray-200">
                    A passenger carrying train may be cancelled fully or partially due to serious accident/dislocation 
                    or abnormal delay in running. This should be done as a last resort only as it causes inconvenience 
                    to many passengers as well as results in loss of earnings.
                  </p>
                </div>
              </div>
            </div>

            {/* Duplication of Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-cyan-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Duplication of Passenger Carrying Trains
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-cyan-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Emergency Duplication
                  </h4>
                  <p className="text-sm text-gray-200">
                    A passenger carrying train may be duplicated, if the original train is either stranded due to 
                    accidents or floods or breaches or running so late as would cause serious inconvenience to passengers. 
                    The duplicate train starts at an intermediate station and follows the path of the original train 
                    so that passengers in those stations can board the duplicate train.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-teal-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Users className="w-5 h-5 mr-2" />
                    Clone Trains
                  </h4>
                  <p className="text-sm text-gray-200">
                    In order to take care of very high demands for a train reflected by long waitlists, clone trains 
                    having similar origin and destination and stoppages are also run during peak seasons.
                  </p>
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

export default OMPage39