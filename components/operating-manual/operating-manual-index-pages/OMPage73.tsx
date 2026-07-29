'use client'
import React from 'react'
import { 
  Building2, 
  Users,
  Phone,
  Settings,
  Route,
  CheckCircle,
  Database,
  Target,
  TrendingUp,
  UserCheck,
  BarChart3,
  ClipboardList,
  AlertTriangle,
  Clock,
  Zap,
  Globe,
  Eye,
  MessageSquare,
  Calendar,
  BookOpen,
  Archive,
  Link,
  Cloud,
  Layers,
  Ban,
  Send,
} from 'lucide-react'

const OMPage73 = () => {
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
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              ZONAL CONTROL OFFICE
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Organization & Emergency Control Systems</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive overview of zonal control office structure, central control functions, 
              and emergency control procedures for efficient railway operations management.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Zonal Control Office Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Zonal Control Office Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Building2 className="w-5 h-5" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          Every zonal headquarters has a zonal control office located in the General Manager&apos;s office premises.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <Layers className="w-5 h-5" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          It operates at the zonal level, covering all divisions of the zone, similar to a division office.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-cyan-400">
                          <Ban className="w-5 h-5" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          There are no section-wise control boards, as such activities are not handled by the zonal control office.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-pink-400">
                          <Link className="w-5 h-5" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          The main function is coordination between divisions and acting as a single communication source with the Railway Board.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <Users className="w-5 h-5" />
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          All departments are represented in the zonal control setup with their own controls.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization of Zonal Operating Control Office Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Organization of Zonal Operating Control Office
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-3 text-center items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Central Control Structure
                    </h5>
                    <ul className="space-y-3 pl-1 text-gray-200 lg:text-base text-sm leading-relaxed mb-4">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Database className="w-5 h-5" />
                        </span>
                        <span>Collects information from the Divisions and submits it to the concerned Officers.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <Send className="w-5 h-5" />
                        </span>
                        <span>Communicates orders from the Head Quarters to the Divisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <Link className="w-5 h-5" />
                        </span>
                        <span>Acts as a vital link between Head Quarters operating officers and Divisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <UserCheck className="w-5 h-5" />
                        </span>
                        <span>The Chief Controller leads the Central Control and supervises all functions directly.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-pink-400">
                          <Users className="w-5 h-5" />
                        </span>
                        <span>Dy. Chief Controllers (Coaching, Goods, and Stock) assist the Chief Controller in all operations.</span>
                      </li>
                    </ul>
                    
                    <h6 className="font-semibold text-emerald-300 mb-3 flex flex-col lg:flex-row gap-3 text-center items-center">
                      <ClipboardList className="w-5 h-5 mr-2" />
                      Key Functions Performed by Central Control
                    </h6>
                    <ul className="space-y-3 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <Database className="w-5 h-5" />
                        </span>
                        <span>Prepare reports on wagons available in divisions, received and forwarding wagons, yard balances at ZERO hour and figures of wagons at 24:00 hours i.e. clearance.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-400">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span>Keeps a close watch on the relief trains.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <ClipboardList className="w-5 h-5" />
                        </span>
                        <span>Collection of figures of stabled wagons with description of vehicle / train.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-500">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span>Analysis of detention to trains.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-600">
                          <Target className="w-5 h-5" />
                        </span>
                        <span>Allotment and distribution of goods stock to the divisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-600">
                          <AlertTriangle className="w-5 h-5" />
                        </span>
                        <span>Issue proper instructions for train working during major dislocations affecting two or more divisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-700">
                          <Zap className="w-5 h-5" />
                        </span>
                        <span>Coordinating speedy relief in case of accident.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-700">
                          <Link className="w-5 h-5" />
                        </span>
                        <span>Help connecting the unconnected wagons.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-800">
                          <Cloud className="w-5 h-5" />
                        </span>
                        <span>Advice divisions regarding weather warning to take necessary precautions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-800">
                          <Calendar className="w-5 h-5" />
                        </span>
                        <span>Arrange periodic census.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-900">
                          <Route className="w-5 h-5" />
                        </span>
                        <span>Permissions for diversion, rebooking and short of destination delivery.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-900">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span>Monitoring local and foreign restrictions for loading.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-950">
                          <Globe className="w-5 h-5" />
                        </span>
                        <span>Inter zonal coordination like interchange, ODC movements, military movements etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-950">
                          <Users className="w-5 h-5" />
                        </span>
                        <span>Managing the manning of the disaster management room.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-100">
                          <MessageSquare className="w-5 h-5" />
                        </span>
                        <span>Ensuring that instructions of HQ officers like GM, AGM, PCOM, PCSO reach the divisional and field officers in case of emergencies.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Emergency Control
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex flex-col lg:flex-row gap-3 text-center items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Emergency Control Structure
                    </h5>
                    <ul className="space-y-3 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <UserCheck className="w-5 h-5" />
                        </span>
                        <span>The Chief of Emergency Control Office is CHC assisted by Dy. CHC in shifts.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span>Dy. CHC prepares figures of passenger trains run shift wise and as per the directives of CHC.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <BookOpen className="w-5 h-5" />
                        </span>
                        <span>In emergency control, advance diary is prepared in which special instructions are mentioned. This diary is made date wise in different pages.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Clock className="w-5 h-5" />
                        </span>
                        <span>Maintain punctuality of all passengers, M/E trains run in CR.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-600">
                          <Phone className="w-5 h-5" />
                        </span>
                        <span>Inform the running position of trains to foreign Railway along with late running and also the description of late running trains and departure time of trains.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span>Observe loss of punctuality percentage, its causes, and position of coaching stock, current situation of wagons, parcel vans etc and collection of data.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-700">
                          <Archive className="w-5 h-5" />
                        </span>
                        <span>Record of operation of special trains, bogies is kept in this office.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-700">
                          <MessageSquare className="w-5 h-5" />
                        </span>
                        <span>Concerned divisions are informed of passenger trains and other coaching trains.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-800">
                          <Database className="w-5 h-5" />
                        </span>
                        <span>All the data regarding coaching such as Fair Special, Summer Special, Relief Special etc., is collected.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-800">
                          <Calendar className="w-5 h-5" />
                        </span>
                        <span>Assist in the preparation of timetable in coordination with neighbouring divisions, and Railways.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                System Efficiency & Control
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The train operations between stations is thus regulated, monitored and controlled by the Control Organization. As the train running is sequential and any detention has a domino effect on all the train operations in the section, each activity is minutely controlled by the Control office, thereby achieving an efficient system of train running.
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

export default OMPage73