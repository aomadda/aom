'use client'
import React from 'react'
import { 
  Clock, 
  Train, 
  BarChart3, 
  Monitor, 
  Navigation, 
  Database, 
  Settings, 
  Zap,
  Target,
  XCircle,
  Activity,
  Route,
  TrendingUp,
  Users
} from 'lucide-react'

const OMPage42 = () => {
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
              PUNCTUALITY
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Operating Manual - Chapter on Punctuality</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding railway punctuality monitoring, 
              real-time reporting systems, and the technologies that ensure efficient train operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Punctuality Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Punctuality Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="shrink-0 bg-blue-500/80 rounded-full p-2 mr-4">
                      <TrendingUp className="lg:w-6 lg:h-6 w-4 h-4 text-white" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Punctuality in running of passenger carrying trains is a key indicator of Railway efficiency. It is closely monitored at various levels of Railway operations and management.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 bg-cyan-500/80 rounded-full p-2 mr-4">
                      <Activity className="lg:w-6 lg:h-6 w-4 h-4 text-white" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Any major disruption in passenger train services also impacts goods train movement and corridor blocks. Therefore, punctuality is crucial not only for passenger satisfaction but also for the smooth functioning of freight operations, maintenance, and safety.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 bg-blue-400/80 rounded-full p-2 mr-4">
                      <BarChart3 className="lg:w-6 lg:h-6 w-4 h-4 text-white" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Punctuality statistics for each Division and Railway are monitored daily for improvement through the Punctuality Analysis Module (PAM) of the Integrated Coaching Management System (ICMS).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ICMS Integration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Monitor className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                ICMS Integration & Analysis
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Based on ICMS data, inputs of which are made at different levels detailed analysis 
                  of bad runners, bad sections are done and action plan are drawn in order to improve punctuality.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Zap className="w-5 h-5 mr-2" />
                    COA Integration
                  </h4>
                  <p className="text-sm text-gray-200">
                    Integration of ICMS to COA ensures real time status of the train services.
                  </p>
                </div>
              </div>
            </div>

            {/* Train Categories */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Categories for Monitoring
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  To monitor the Passenger carrying trains effectively according to their importance,
                  relevance and stock they are grouped into following categories.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* M/Express Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Zap className="w-5 h-5 mr-2" />
                      M/Express Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      Vandebharat, Rajdhani, Duronto, Shatabdi, Garib Rath,
                      Jan-Shatabdi, Superfast, Mail/Express & Suvidha trains
                    </p>
                  </div>

                  {/* Passenger Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Route className="w-5 h-5 mr-2" />
                      Passenger Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      DEMU, MEMU, Holiday Specials, Conventional rakes
                    </p>
                  </div>

                  {/* Sub-urban Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Sub-urban Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      Local and suburban train services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Punctuality Norms */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Punctuality Norms
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Train arriving late is considered to be &quot;Lost Train&quot; based on the following norms.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Intra Zonal & Terminating Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Route className="w-5 h-5 mr-2" />
                      Intra Zonal & Terminating Trains
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-200">
                        Arriving more than <span className="font-bold text-red-300">15 minutes late</span> at destination
                      </span>
                    </div>
                  </div>

                  {/* Originating & Passing Through Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Originating & Passing Through Trains
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-200">
                        Handing over by more than <span className="font-bold text-red-300">3 minutes</span> at interchange point
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-urban Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Sub-urban Trains
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-200">
                      Punctuality of the train is lost when it arrives more than <span className="font-bold text-red-300">5 minutes late</span> at destination
                    </span>
                  </div>
                </div>

                {/* Punctuality Formula */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Punctuality Percentage Formula
                  </h4>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 border border-white/20">
                    <p className="text-center lg:text-lg text-base font-bold text-red-200 mb-2">
                      % Punctuality = (Total No. of trains - No. of trains lost Punctuality) × 100
                    </p>
                    <p className="text-center text-sm text-gray-200">
                      (Total No. of trains)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Time Reporting */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Activity className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Real Time Reporting
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  To improve factual reporting of punctuality and asset failures in ICMS by the
                  divisions, Railway Board declared 2018-19 as &quot;Zero base year&quot;. Further to improve
                  factual reporting, Control Office Application (COA) has been integrated with
                  RTIS/REMMLOT devices provided in locos; Data loggers; E-TSR & C-TSR at stations.
                </p>
                
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Through these, timings of trains are automatically captured in the Control
                  Office Application and further transmitted in NTES, thereby ensuring that, real time
                  information is available to the public and division office.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* REMMLOT / RTIS */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Navigation className="w-5 h-5 mr-2" />
                      REMMLOT / RTIS
                    </h4>
                    <p className="text-sm text-gray-200 mb-3">
                      <span className="font-semibold text-blue-200">REMMLOT:</span> Remote Monitoring and management of Locomotives and Trains
                    </p>
                    <p className="text-sm text-gray-200 mb-3">
                      <span className="font-semibold text-blue-200">RTIS:</span> Real time train information system
                    </p>
                    <p className="text-sm text-gray-200">
                      These devices are based on GPS system provided in Diesel / Electric locos which automatically update location of trains in COA.
                    </p>
                  </div>

                  {/* Data Logger */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Database className="w-5 h-5 mr-2" />
                      Data Logger
                    </h4>
                    <p className="text-sm text-gray-200">
                      At originating/terminating/interchange stations, data loggers have been
                      integrated with COA. The SM has to input the train number against the occupation of
                      berthing track circuits by the train at the station.
                    </p>
                  </div>
                </div>

                {/* E-TSR & C-TSR */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    E-TSR & C-TSR
                  </h4>
                  <p className="text-sm text-gray-200">
                    E-TSR & C-TSR are provided at stations where SM makes entries of train
                    arrival/departure in a computerized system which is connected online to COA.
                  </p>
                </div>

                {/* Sequence of Picking Up Timings */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-blue-300 mb-3 flex lg:flex-row flex-col gap-3 items-center flex-col gap-2 text-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Sequence of Picking Up Timings in COA
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <span className="text-sm text-gray-200">REMMLOT/RTIS</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <span className="text-sm text-gray-200">Data Logger</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <span className="text-sm text-gray-200">E-TSR & C-TSR</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 border border-white/20">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                      <span className="text-sm text-gray-200">Manually by the SCOR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lost Train Analysis */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <XCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Lost Train Analysis
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                
                {/* Point 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-red-300 mb-3 flex lg:flex-row flex-col gap-3 items-center flex-col gap-2 text-center">
                    <Target className="w-5 h-5 mr-2" />
                    Analysis of Punctuality Loss
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Trains that lost punctuality for the day are analyzed to identify the reasons in
                    order to initiate measures for correcting them. Information is obtained through
                    LTM of Guard & entries by SCOR in COA.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-red-200 mb-2">LTM Report (Late Train Movement Report)</h5>
                    <p className="text-sm text-gray-200 mb-3">
                      Every coaching train Guard after completion of his journey is required to submit a report called LTM report.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></span>
                        It is a summary of the timing lost and gained on account of various departments and causes
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></span>
                        The Guard at the end of the trip has to total up all the losses occurred under various department heads
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></span>
                        Summarize for each of the department separately
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-3 flex lg:flex-row flex-col gap-3 items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Categorization of Punctuality Loss
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Trains lost punctuality are categorized into different causes based on the
                    maximum time of loss on the concerned department in PAM module of ICMS.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-200">Engineering</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-200">Planned Blocks</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-200">Traffic</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-200">Signal & Telecommunications</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-200">Carriage & Wagons</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-red-200">Diesel Loco</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-red-200">Electric Loco</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-red-200">ACP</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-red-200">Accidents & Incidents</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-red-200">LC gate, Weather, etc.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point 3 & 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">  
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Daily Analysis
                    </h4>
                    <p className="text-sm text-gray-200">
                      The trains which lost punctuality are analysed by the concerned departments in
                      detail daily and necessary action is taken.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Regular Meetings
                    </h4>
                    <p className="text-sm text-gray-200">
                      Daily, weekly and monthly Punctuality meetings are held at HQ of Divisional,
                      Zonal & Railway Board to analyse the reasons and improve punctuality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Measures for Improving Punctuality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Measures for Improving Punctuality
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Punctuality requires constant analysis and monitoring. Long term measures like
                  improved design and maintenance of Locos, Track, S&T Gears, Security,
                  Commercial and Terminal arrangements have a significant effect on punctuality.
                </p>
                
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Some of the day to day activities which are very important to achieve punctual
                  running of passenger trains are as follows…
                </p>

                {/* Originating Stations */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Train className="w-5 h-5 mr-2" />
                    Originating Stations
                  </h4>
                  <p className="text-sm text-gray-200">
                    Timely placement of empty rakes for train examination, sick detaching, marshaling,
                    berthing on the platform, booking of staff, right time start and running to PTT, etc. are
                    very critical to achieve 100% punctuality.
                  </p>
                </div>

                {/* Control Organization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Control Organization
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Crossings and precedence have to be arranged judiciously and efficiently.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Wrong / improper crossings / precedence contrary to normal priority like
                        through goods trains over passenger trains should be rarely done.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        The Controller should develop knowledge of the various passenger trains,
                        dependability of the Loco Pilot and Guards, behavior of the passengers,
                        particularly the daily commuters and the nature of the section.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Perennial issues if any should be flagged to time table controller to factor in
                        during time tabling.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stations enroute */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Stations enroute
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Timely advice to gateman for closure of gates, timely planning of shunting or
                        other conflicting movements.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        In case of single line section, smart calculation of block section running time
                        for reception & dispatch of trains or utilizing provision of simultaneous
                        reception.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        If there are perishables loading, the material is to be stacked at suitable place
                        for prompt loading.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        At crew change points, ensure readiness of the crew and box loading if any.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Clearing signals as per PTT timings.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Proper information should be conveyed to public regarding platform
                        nominations etc., well in advance.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Crew of the train */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Users className="w-5 h-5 mr-2" />
                    Crew of the train
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Shall attend to their assigned trains well in time with complete equipment;
                        conduct brake continuity test and verify that the train is in proper state of
                        function and with complete equipments to travel safely.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Make up time in case the train is running late by conserving gains on run and
                        smartly exchanging all right signals.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Take prompt remedial actions in case of unusual occurrences and
                        equipment defects.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Before scheduled departure, Guard to ensure parcel/luggage loading is
                        completed, SLR doors are closed and locked, and relevant papers taken.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></span>
                      <span className="text-sm text-gray-200">
                        Start the train as per PTT.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

             {/* Coaching Terminal Operational Procedures */}
             <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
               <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                 <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                   <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                 </span>
                 Coaching Terminal Operational Procedures
               </h2>
               <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                 
                 <div className="space-y-4">
                   {/* Point i */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">i</div>
                       <p className="text-sm text-gray-200">
                         On arrival of a rake at a station, mechanical staff to close all doors and windows of coaches.
                       </p>
                     </div>
                   </div>

                   {/* Point ii */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">ii</div>
                       <p className="text-sm text-gray-200">
                         Before backing on to stabled/pit line, SM to ensure parcels and bedrolls are unloaded.
                       </p>
                     </div>
                   </div>

                   {/* Point iii */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">iii</div>
                       <p className="text-sm text-gray-200">
                         In case of major repairs/ due for IOH/POH, mechanical and electrical staff has to advise SM for detaching with its replacement duly advising the control.
                       </p>
                     </div>
                   </div>

                   {/* Point iv */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">iv</div>
                       <p className="text-sm text-gray-200">
                         If any coach is to be detached / attached on account of electrical maintenance, the SSE/TL shall inform the SSE/C&W and the mechanical staff shall issue sick/fit certificate to the Station Master.
                       </p>
                     </div>
                   </div>

                   {/* Point v */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">v</div>
                       <p className="text-sm text-gray-200">
                         SM will form rake with fit coaches as per it‟s consist and place it on the pit line as per its schedule.
                       </p>
                     </div>
                   </div>

                   {/* Point vi */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">vi</div>
                       <p className="text-sm text-gray-200">
                         The TNC/SM has to advise Mechanical department in form No T.431 duly mentioning the painted numbers of the coaches and timing.
                       </p>
                     </div>
                   </div>

                   {/* Point vii */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">vii</div>
                       <p className="text-sm text-gray-200">
                         Once the rake is offered for examination, SM shall neither disturb the rake nor perform any shunting onto the rake.
                       </p>
                     </div>
                   </div>

                   {/* Point viii */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">viii</div>
                       <p className="text-sm text-gray-200">
                         SSE/C&W shall obtain line block from the SM before deputing men on to the formation. The mechanical staff shall place danger board at the entry into the pit line, place scotch block and lock before commencing the work on the formation, to prevent in advertent entry of outside vehicles, which may harm the staff attending the rake.
                       </p>
                     </div>
                   </div>

                   {/* Point ix */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">ix</div>
                       <p className="text-sm text-gray-200">
                         After the rake is checked the mechanical staff advise SM by returning one foil of T.431 mentioning the time of completion and release the Line Block. The mechanical staff shall also remove the danger board and the scotch block.
                       </p>
                     </div>
                   </div>

                   {/* Point x */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">x</div>
                       <p className="text-sm text-gray-200">
                         SM to back the rake on stabled/platform line as necessary.
                       </p>
                     </div>
                   </div>

                   {/* Point xi */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">xi</div>
                       <p className="text-sm text-gray-200">
                         The VG of the train will be prepared by SM/TNC and handed over to the Guard of the train.
                       </p>
                     </div>
                   </div>

                   {/* Point xii */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">xii</div>
                       <p className="text-sm text-gray-200">
                         The TNC/Station staff has to ensure that the BV equipment is available in front/middle/rear SLR and is sealed.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Coaching Vehicle Census */}
             <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
               <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                 <span className="bg-gradient-to-r from-purple-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                   <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                 </span>
                 Coaching Vehicle Census
               </h2>
               <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                 
                 <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                   Coaching Vehicle census is conducted to know the location of coaching vehicles and
                   cross check the information with regard to its due dates. It is done under the
                   directives of Railway Board.
                 </p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                   {/* Census Notification */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
                       <Clock className="w-5 h-5 mr-2" />
                       Census Notification
                     </h4>
                     <p className="text-sm text-gray-200">
                       The month, date time of census is notified to all the staff involving in census.
                     </p>
                   </div>

                   {/* Pre-census Meeting */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-indigo-300 mb-3 flex items-center">
                       <Users className="w-5 h-5 mr-2" />
                       Pre-census Meeting
                     </h4>
                     <p className="text-sm text-gray-200">
                       Prior to conducting a coaching vehicle census, CPTM holds a meeting and instructs the census officials.
                     </p>
                   </div>
                 </div>

                 {/* Data Update */}
                 <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mt-6">
                   <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
                     <Monitor className="w-5 h-5 mr-2" />
                     Data Update in ICMS
                   </h4>
                   <p className="text-sm text-gray-200">
                     The data obtained through coaching census is updated in the master table of ICMS.
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

export default OMPage42