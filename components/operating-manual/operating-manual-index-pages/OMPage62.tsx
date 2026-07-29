'use client'
import React from 'react'
import { 
  BarChart3, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Settings,
  Train,
  Zap,
  Route,
  Info,
  Monitor,
  FileText,
  Shield,
  Target,
  TrendingUp,
  MapPin,
  Activity,
  Smartphone,
  Database,
  Search,
  Eye,
  Clipboard,
  UserCheck,
  BookOpen,
  Users,
  Wrench,
  Bell
} from 'lucide-react'

const OMPage62 = () => {
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
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Charting & Control Office Application</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to train charting systems, manual and computerized charting methods, 
              and modern control office applications for efficient railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Charting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Charting
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Trains are plotted by Section Controllers on Control charts which are graphs
                      consisting of Stations with their km and inter distance on vertical axis and time on
                      horizontal axis. Each one hour is divided into 6 units of 10 minutes each which is
                      further sub-divided into 5 smaller units of 2 minutes each.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      These charts are made one per shift and a Section Controller records all the
                      timings of the trains in the section and represents the train by drawing a line
                      connecting the timings received from the station. The details of the trains are
                      entered in the chart and linked to the respective lines so that the movement of the
                      train can be traced throughout.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Up Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        The up trains are plotted from the bottom of the
                        chart upwards and from the left diagonally towards the right.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Down Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        All down trains are plotted from the top of the
                        chart downwards and also diagonally from the left towards the right.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Other details like stabled loads, traffic blocks permitted, failure details etc.
                      are also mentioned in the charts. Based on the train running trend, the controller 
                      assesses and projects the train movements further and plans crossings or precedence judiciously.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manual Charting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Manual Charting
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Before, the advent of computerized charting, the control charts were manually drawn
                      with various color pencils / pens by Section Controllers. On shift completion, these
                      charts were then used for checking, analyzing and then preserved to the mandated
                      period of time.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Emergency Preparedness
                    </h5>
                    <p className="text-sm text-gray-200">
                      Manual charts have to be kept ready and in sufficient quantity in
                      case of any emergency where computerized charting becomes unavailable for
                      longer period of time due to technical / network problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Office Application Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Monitor className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Control Office Application
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Monitor className="w-4 h-4 mr-2" />
                      CoA - Control Office Application
                    </h5>
                    <p className="text-sm text-gray-200">
                      CoA – Control office Application is the computerized charting software. Most of the
                      basic facets of manual charting have been computerized and the timings are now
                      marked in the computer terminal by the Section Controller.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-pink-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Zap className="w-4 h-4 mr-2" />
                      Real-time Information
                    </h5>
                    <p className="text-sm text-gray-200">
                      With computerization, the first-hand information of train running which was
                      only available with Section Controller is now available to all others involved in train
                      operations like adjacent board controller, Chief Controllers, Other department
                      controllers and officers.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Route className="w-4 h-4 mr-2" />
                      System Integration
                    </h5>
                    <p className="text-sm text-gray-200">
                      With the linking of CoA to ICMS and FOIS, this information
                      is now available on a real time basis to the traveling public and freight customers,
                      thereby enabling greater transparency and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Train Movement Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Movement
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-orange-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      (a) Status Reporting
                    </h6>
                    <p className="text-sm text-gray-200">
                      Facilitates the user to report arrival/departure/through status of a train at
                      each station.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-red-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Clock className="w-4 h-4 mr-2" />
                      (b) Detention Details
                    </h6>
                    <p className="text-sm text-gray-200">
                      Reporting detention details for every block section and station.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-yellow-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Settings className="w-4 h-4 mr-2" />
                      (c) Train Management
                    </h6>
                    <p className="text-sm text-gray-200">
                      Stabling and regulation of trains.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-pink-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      (d) Abnormal Working
                    </h6>
                    <p className="text-sm text-gray-200">
                      Reporting abnormal working (obstruction, engine failure, train parting, work
                      on line, accidents).
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 md:col-span-2">
                    <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Route className="w-4 h-4 mr-2" />
                      (e) Single Line Working
                    </h6>
                    <p className="text-sm text-gray-200">
                      Single line working on a double line section.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Blocks Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Traffic Blocks
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-yellow-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Shield className="w-4 h-4 mr-2" />
                      (a) Block Management
                    </h6>
                    <p className="text-sm text-gray-200">
                      Imposition, Extension and cancellation of maintenance blocks.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-orange-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Clock className="w-4 h-4 mr-2" />
                      (b) Timestamp Modification
                    </h6>
                    <p className="text-sm text-gray-200">
                      Provision to modify various timestamps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caution Order Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Caution Order
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-red-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      (a) Speed Restrictions
                    </h6>
                    <p className="text-sm text-gray-200">
                      Imposition of speed restrictions (Temporary and Permanent) in a block
                      section and station.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-pink-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      (b) Cancellation
                    </h6>
                    <p className="text-sm text-gray-200">
                      Cancellation of speed restrictions.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-orange-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Settings className="w-4 h-4 mr-2" />
                      (c) Speed Modification
                    </h6>
                    <p className="text-sm text-gray-200">
                      Modifying speed for any speed restriction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Unusual Occurrence Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Info className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Unusual Occurrence – General
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Info className="w-4 h-4 mr-2" />
                      (a) Occurrence Reporting
                    </h6>
                    <p className="text-sm text-gray-200">
                      Reporting unusual occurrences (10 Types) both Train specific and Duration
                      specific.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <MapPin className="w-4 h-4 mr-2" />
                      (b) Location Reporting
                    </h6>
                    <p className="text-sm text-gray-200">
                      Facility to report occurrences at a station or in a block section.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Clock className="w-4 h-4 mr-2" />
                      (c) Detention Planning
                    </h6>
                    <p className="text-sm text-gray-200">
                      Enables user to define expected detention to trains (Up/Down) for advance
                      plotting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advance Plotting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Advance Plotting
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-emerald-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Target className="w-4 h-4 mr-2" />
                      (a) Train Projection
                    </h6>
                    <p className="text-sm text-gray-200">
                      Projection of the estimated arrival, departure and run through of a train over
                      the defined section.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-teal-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Route className="w-4 h-4 mr-2" />
                      (b) Precedence Planning
                    </h6>
                    <p className="text-sm text-gray-200">
                      Indicate ideal precedence/crossing points based on the actual running of the
                      train(s) under dynamic situation with the core objective of ensuring
                      punctuality.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-green-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Settings className="w-4 h-4 mr-2" />
                      (c) Manual Intervention
                    </h6>
                    <p className="text-sm text-gray-200">
                      Facilitates manual intervention by the controller to change points of crossing
                      or precedence.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Clock className="w-4 h-4 mr-2" />
                      (d) Punctuality Focus
                    </h6>
                    <p className="text-sm text-gray-200">
                      Focus on right time arrival of all scheduled passenger/express trains at the
                      section/divisional interchange point or destination if within the division.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 md:col-span-2">
                    <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col text-center">
                      <Activity className="w-4 h-4 mr-2" />
                      (e) Detention Minimization
                    </h6>
                    <p className="text-sm text-gray-200">
                      Detention is kept to bare minimum in conflict situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advance Features of COA Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Advance Features of COA
              </h2>
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-violet-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6 text-center">
                  The following are some features of CoA enabled by the computerization…
                </p>
                
                {/* Chart Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-3 text-center flex-col">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Chart Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-violet-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Eye className="w-4 h-4 mr-2" />
                        (a) Configurable View
                      </h6>
                      <p className="text-sm text-gray-200">
                        View of chart is configurable (number of hours).
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Settings className="w-4 h-4 mr-2" />
                        (b) Section Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        Collapsing/Expanding of sections/stations in master chart.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Route className="w-4 h-4 mr-2" />
                        (c) Horizontal Scrolling
                      </h6>
                      <p className="text-sm text-gray-200">
                        Horizontal scrolling to view any portion of chart.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Search className="w-4 h-4 mr-2" />
                        (d) Zoom Facility
                      </h6>
                      <p className="text-sm text-gray-200">
                        Zoom facility to view a particular area of chart.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Activity className="w-4 h-4 mr-2" />
                        (e) Line Occupancy
                      </h6>
                      <p className="text-sm text-gray-200">
                        Line occupancy depiction.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-teal-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (f) Visual Icons
                      </h6>
                      <p className="text-sm text-gray-200">
                        Cautions/Unusual depicted through visual icons.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 md:col-span-2">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Train className="w-4 h-4 mr-2" />
                        (g) Abnormal Working
                      </h6>
                      <p className="text-sm text-gray-200">
                        Abnormal working – Depiction showing all movements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MIS Reports */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-3 text-center flex-col">
                    <Database className="w-5 h-5 mr-2" />
                    MIS Reports
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Clock className="w-4 h-4 mr-2" />
                        (a) Punctuality Reports
                      </h6>
                      <p className="text-sm text-gray-200">
                        Reports Related To Punctuality of Trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-violet-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Train className="w-4 h-4 mr-2" />
                        (b) Freight Operations
                      </h6>
                      <p className="text-sm text-gray-200">
                        Reports Related To Freight Operations – Hours On Run (Train Wise/Section Wise), Interchange.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Wrench className="w-4 h-4 mr-2" />
                        (c) Asset Maintenance
                      </h6>
                      <p className="text-sm text-gray-200">
                        Reports Related to Asset Maintenance- Speed Restrictions, Utilization of Maintenance blocks, Programmed maintenance blocks.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        (d) Unusual Occurrences
                      </h6>
                      <p className="text-sm text-gray-200">
                        Reports Related to Unusual Occurrences including Equipment failures.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 md:col-span-2">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Settings className="w-4 h-4 mr-2" />
                        (e) Customized Reports
                      </h6>
                      <p className="text-sm text-gray-200">
                        Additional customized reports based on user requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SMS Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-3 text-center flex-col">
                    <Smartphone className="w-5 h-5 mr-2" />
                    SMS Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Bell className="w-4 h-4 mr-2" />
                        (a) SMS Alerts
                      </h6>
                      <p className="text-sm text-gray-200">
                        Facility to send SMS alerts to pre-defined users for specific events like equipment failures.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Zap className="w-4 h-4 mr-2" />
                        (b) Emergency Notifications
                      </h6>
                      <p className="text-sm text-gray-200">
                        In case of unusual occurrences/accidents etc. it will be possible to flash immediate information to all concerned.
                      </p>
                    </div>
                  </div>
                </div>

                {/* COA Integration */}
                <div>
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center gap-3 text-center flex-col">
                    <Route className="w-5 h-5 mr-2" />
                    COA Integration with other applications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        (a) FOIS Integration
                      </h6>
                      <p className="text-sm text-gray-200">
                        COA-FOIS integration has been done.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        (b) ICMS Integration
                      </h6>
                      <p className="text-sm text-gray-200">
                        COA-ICMS integration has been done.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-teal-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        (c) NTES Integration
                      </h6>
                      <p className="text-sm text-gray-200">
                        COA-NTES integration has been done.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Database className="w-4 h-4 mr-2" />
                        (d) Data Flow
                      </h6>
                      <p className="text-sm text-gray-200">
                        COA timings will flow from division to Integration Server at NDLS.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 md:col-span-2">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Route className="w-4 h-4 mr-2" />
                        (e) System Consumption
                      </h6>
                      <p className="text-sm text-gray-200">
                        Other applications will consume data from Integration Server at NDLS.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 mt-4">
                    <h5 className="font-semibold text-violet-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Info className="w-4 h-4 mr-2" />
                      Integration Benefits
                    </h5>
                    <p className="text-sm text-gray-200">
                      Integration allows focus on single point data entry and facilitates real time transfer of data from one division to the adjoining division. 
                      And also real time updating of other systems. Back reporting time in COA is limited to 30 minutes. (In FOIS it is 60 minutes).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Master Charts Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Master Charts
              </h2>
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-amber-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                      For every section Master Charts indicating trains run in 24 hours are prepared which
                      show the running of each Mail, Express or passenger trains over the sections
                      according to its scheduled running.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                      In between the running of trains carrying passengers, paths for goods trains are worked out and plotted. 
                      They are helpful in revision of time tables and planning the running of any extra train, maintenance
                      blocks and for guidance of section controllers.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-amber-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Eye className="w-4 h-4 mr-2" />
                      Display Requirement
                    </h5>
                    <p className="text-sm text-gray-200">
                      It should be displayed on boards for easy reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checking of Control Charts Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Search className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Checking of Control Charts
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                      Control Charts have to be checked regularly to scrutinize all cases of detentions.
                      The reasons have to be studied in detail to bring out any irregularities or constraints
                      in working in order to identify appropriate corrective measures.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <UserCheck className="w-4 h-4 mr-2" />
                        Poor Controlling Cases
                      </h6>
                      <p className="text-sm text-gray-200">
                        All cases of poor controlling have to be brought out and the concerned
                        Section controller has to be counseled or taken up appropriately.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Failure Reporting
                      </h6>
                      <p className="text-sm text-gray-200">
                        All cases of failures have to be reported as unsatisfactory feature and logged
                        against the concerned department.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Clipboard className="w-4 h-4 mr-2" />
                      Investigation Requirements
                    </h5>
                    <p className="text-sm text-gray-200">
                      All unsatisfactory features have to be investigated in detail by the respective departments and failure of staff, poor
                      maintenance and any other issues have to be taken up to minimize and eliminate such failures.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Clock className="w-4 h-4 mr-2" />
                        Daily Checking
                      </h6>
                      <p className="text-sm text-gray-200">
                        Control charts have to be checked daily by the CHC in charge and he/she
                        must bring out the critical deficiencies and put up the checked charts to AOM
                        on a daily basis.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-3 text-center flex-col">
                        <Users className="w-4 h-4 mr-2" />
                        Test Checks
                      </h6>
                      <p className="text-sm text-gray-200">
                        DOM / SrDOM shall do test checks and call for checked charts while
                        analyzing bad cases.
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

export default OMPage62