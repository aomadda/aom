'use client'
import React from 'react'
import { 
  Users, 
  Clock, 
  Shield, 
  MapPin, 
  BarChart3, 
  FileText,
  AlertTriangle,
  CheckCircle,
  Settings,
  Building2,
  Brain,
  Radio,
  Train,
  Phone,
  Monitor,
  Database,
  Zap
} from 'lucide-react'

const OMPage59 = () => {
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
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter – IV: Control Organization</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to control organization, divisional control office operations, 
              control board management, and train running protocols for safe railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Control Organization Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Brain className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Control Organization Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Train operations happen round the clock on all days of the week and throughout the year. 
                  A train is run as a result of coordinated working of staff of various departmental field units. 
                  In order to have a center for coordinating all such field units, each division, zone and railway 
                  board has a control organization.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-3 text-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Nerve Center of Railway Operations
                  </h4>
                  <p className="text-sm text-gray-200">
                    Control Organization functions as the nerve center of the Railway Operations. It deals with 
                    monitoring, planning, directing, organizing, coordinating and controlling the multifarious 
                    activities associated with train running on a real time basis.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-blue-200 mb-2 flex items-center flex-col gap-3 text-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Safety Goals
                    </h6>
                    <p className="text-sm text-gray-200">
                      Safe running of trains, ensuring no harm to passengers; damage/loss to freight or 
                      impedance to smooth flow of traffic.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-cyan-200 mb-2 flex items-center flex-col gap-3 text-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Punctuality Goals
                    </h6>
                    <p className="text-sm text-gray-200">
                      Punctual running of coaching trains, ensuring path for freight train running and 
                      blocks for maintenance.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-green-200 mb-2 flex items-center flex-col gap-3 text-center">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Efficiency Goals
                    </h6>
                    <p className="text-sm text-gray-200">
                      Maximizing loading and freight movement with optimum asset utilization.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-orange-200 mb-2 flex items-center flex-col gap-3 text-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Disaster Management
                    </h6>
                    <p className="text-sm text-gray-200">
                      Coordination in disaster management to ensure relief and restoration of traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divisional Control Office */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Divisional Control Office
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Every division office has a Control Office for the entire jurisdiction of the division. 
                  It is under the administrative control of SrDOM. In few larger divisions in other zones, 
                  there are Area Controls also covering a specific part of the division.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Users className="w-4 h-4 mr-2" />
                      Leadership Structure
                    </h5>
                    <p className="text-sm text-gray-200">
                      The Chief Controller in charge heads the divisional control office. Chief Controllers, 
                      Section Controllers, Train Clerks and other assisting staff work under CHC in charge.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Jurisdiction Coverage
                    </h5>
                    <p className="text-sm text-gray-200">
                      Covers the entire jurisdiction of the division with potential area controls for larger divisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Board */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Monitor className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Control Board
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The divisional jurisdiction is split into many control boards, each of which covers one 
                  or few sections. Each board is operated by a Section Controller.
                </p>

                <div className="space-y-6">
                  {/* Communication Facilities */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Radio className="w-5 h-5 mr-2" />
                      Communication Facilities
                    </h4>
                    <p className="text-sm text-gray-200">
                      The control board is provided with continuous communication facility with all block stations, 
                      important cabins, freight terminals, loco shed etc. over a section.
                    </p>
                  </div>

                  {/* Section Controller Role */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Users className="w-5 h-5 mr-2" />
                      Section Controller Role
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      The Section Controller controls all the interstation train movements in the section. 
                      The timings of every train at every station are reported by Station masters to the controller.
                    </p>
                    <p className="text-sm text-gray-200">
                      On blocking of a train by adjacent SM, the action to be taken for the train at his/her 
                      station has to be obtained immediately by the SM from the controller.
                    </p>
                  </div>

                  {/* Decision Making */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Critical Decision Making
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      As many trains usually are on run at any point of time, many such events occur in parallel 
                      which requires the decision of the Section Controller.
                    </p>
                    <p className="text-sm text-gray-200">
                      For performing this function, a controller has to be sharp and swift. He/she should have 
                      a thorough knowledge of the section and train running.
                    </p>
                  </div>

                  {/* Real-time Operations */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Database className="w-5 h-5 mr-2" />
                      Real-time Operations
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      All these actions of timings sharing and decisions communicating happens seamlessly in order 
                      to ensure that there is no detention or slowing down of any train running in the section.
                    </p>
                    <p className="text-sm text-gray-200">
                      The real time data logger based simulation of train operations in all the stations of the 
                      section is also made available to the Section Controller so that voice interactions are reduced.
                    </p>
                  </div>

                  {/* Reference Materials */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Reference Materials
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Lay out diagrams of stations under its jurisdiction should also be kept in printed form 
                      with details of holding capacity of each of the running & non-running lines, gradients 
                      and signals including shunt signals for reference.
                    </p>
                    <p className="text-sm text-gray-200">
                      In electrified sections, OHE sectioning diagram depicting the elementary sections in 
                      different colors & other details of sectioning post (SP) and Sub-sectioning post (SSP) 
                      should also be available in each control board.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Train Running and Reporting */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Running and Reporting
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Comprehensive guidelines for train movement reporting, controller permissions, and operational 
                  procedures to ensure safe and efficient train operations.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Rule 1: Movement Reporting
                    </h5>
                    <p className="text-sm text-gray-200">
                      Every Station on the section must report the movement of every train-passenger, goods, 
                      special, departmental, light engines, TTMs, Tower Wagons, trollies etc. to the controller with timings.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Rule 2: Terminal Station Restrictions
                    </h5>
                    <p className="text-sm text-gray-200">
                      No Terminal Station should start a goods or unscheduled train or block the section 
                      without the permission of the controller.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Rule 3: Controller Permission
                    </h5>
                    <p className="text-sm text-gray-200">
                      When the control is in function, Station Master of every station shall take permission 
                      from SCOR to send the trains to advance block station.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Rule 4: Train Stopping Protocol
                    </h5>
                    <p className="text-sm text-gray-200">
                      The Controller&apos;s permission must be obtained before stopping a train that should run 
                      through except to avert an accident or dangerous condition.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Rule 5: Out-of-Course Stops
                    </h5>
                    <p className="text-sm text-gray-200">
                      No station should allow a train, which has been stopped out of course, to proceed, 
                      without first informing the controller that the train has been so stopped and receiving his further orders.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Rule 6: Detention Reporting
                    </h5>
                    <p className="text-sm text-gray-200">
                      Station Master must advise the controller of any unauthorized or undue detention 
                      to trains at their stations with full explanation.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Rule 7: Shunting Operations
                    </h5>
                    <p className="text-sm text-gray-200">
                      The permission of the Controller must be obtained before the performance of any 
                      shunting that will affect crossing and precedence of trains.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Database className="w-4 h-4 mr-2" />
                      Rule 8: Departure Reporting
                    </h5>
                    <p className="text-sm text-gray-200">
                      As soon as a train leaves a train starting station, the Station Master must intimate 
                      the following particulars to the control office: Number and description of train, 
                      Engine number, class and home shed, Loco Pilot&apos;s and Guard&apos;s name, load of the train 
                      (in tonnes and vehicles), content, BPC details, time of departure, particulars of 
                      shunting to be done on the journey, and brief reasons of late start, if any.
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

export default OMPage59