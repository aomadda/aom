'use client'
import React from 'react'
import { 
  Monitor, 
  Keyboard, 
  Mouse, 
  Lock, 
  Cpu, 
  Zap,
  Shield,
  Database,
  FileText,
  Train,
  Settings,
  AlertTriangle,
  Users,
  Clock,
  BarChart3,
  Building2,
  Network,
  HardDrive,
  Search,
  TrendingUp,
  Key
} from 'lucide-react'

const OMPage7 = () => {
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
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter II - Station Equipment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding station equipment, control systems, 
              and technological infrastructure used in modern railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Panel Control System */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Monitor className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Panel Control System
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Relay Interlocked Panel */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                      <Keyboard className="w-5 h-5 mr-2" />
                      Relay Interlocked Panel
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      In relay interlocked stations, the operation of points and signals are done by
                      Station Masters through a panel of buttons and knobs.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h5 className="font-semibold text-blue-200 mb-2 flex flex-col gap-2 items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Security Features
                      </h5>
                      <ul className="space-y-3 text-sm text-gray-200 pl-1">
                        <li className="flex items-start gap-3 bg-blue-800/10 rounded-lg px-3 py-2 border border-blue-400/30">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 mt-0.5">
                            <Lock className="w-4 h-4" />
                          </span>
                          <span>
                            This panel can be locked by a SM&apos;s key so that no person other than authorized can use it
                          </span>
                        </li>
                        <li className="flex items-start gap-3 bg-blue-800/10 rounded-lg px-3 py-2 border border-blue-400/30">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 mt-0.5">
                            <Key className="w-4 h-4" />
                          </span>
                          <span>
                            This key should always be under the custody of the on duty Station Master
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Visual Display Unit (VDU) */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex flex-col gap-2 items-center">
                      <Monitor className="w-5 h-5 mr-2" />
                      Visual Display Unit (VDU)
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      After the introduction of EI, which is based on software, conventional panel has been replaced by VDU (Visual Display Unit), 
                      a monitor connected to a CPU for operation of points and signals by the Station Master.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                        <h6 className="font-semibold text-cyan-200 mb-2 flex flex-col gap-2 items-center">
                          <Cpu className="w-4 h-4 mr-2" />
                          System Features
                        </h6>
                        <p className="text-sm text-gray-200">
                          It depicts the station diagram duly indicating track circuits, points, signals etc., as shown in conventional panels.
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                        <h6 className="font-semibold text-blue-200 mb-2 flex flex-col gap-2 items-center">
                          <Mouse className="w-4 h-4 mr-2" />
                          Operation Method
                        </h6>
                        <p className="text-sm text-gray-200">
                          Functions are listed through pop-up menus for operation of points, signals, as stipulated in Station Working Rules.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h5 className="font-semibold text-cyan-200 mb-2 flex flex-col gap-2 items-center">
                        <Keyboard className="w-4 h-4 mr-2" />
                        User Interface
                      </h5>
                      <p className="text-sm text-gray-200">
                        Station Master uses mouse and keyboard for selecting the required function needed for train operation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block Instrument */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Block Instrument
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Purpose & Function
                  </h4>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                    Block Instrument is provided for granting/obtaining line clear for trains.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                    <h5 className="font-semibold text-green-200 mb-2 flex flex-col gap-2 items-center">
                      <Network className="w-4 h-4 mr-2" />
                      Interlocking System
                    </h5>
                    <p className="text-sm text-gray-200">
                      It is normally interlocked with the Block overlap or the Last Stop Signal of the station depending on
                      the block section for which it is meant for.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Isolators */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Section Isolators
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Emergency Power Control
                  </h4>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                    Section isolators are provided in electrified yards for isolating the power supply of
                    OHE in case of emergency.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                    <h5 className="font-semibold text-red-200 mb-2 flex flex-col gap-2 items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Operation Requirements
                    </h5>
                    <p className="text-base text-gray-200">
                      They shall be operated only by staff who have been trained and issued with competency certificate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Logger */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Data Logger
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-6">
                  {/* System Description */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 items-center">
                      <HardDrive className="w-5 h-5 mr-2" />
                      System Overview
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Data logger also known as event logger, is a microprocessor based digital storing
                      equipment which logs all the events occurring in the relay room at micro second levels.
                    </p>
                  </div>

                  {/* Applications */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Applications & Uses
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                          <h6 className="font-semibold text-purple-200 mb-2 flex flex-col gap-2 items-center">
                            <Search className="w-4 h-4 mr-2" />
                            Accident Investigation
                          </h6>
                          <p className="text-sm text-gray-200">
                            Such data stored is useful for accident investigation and failure analysis.
                          </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <h6 className="font-semibold text-pink-200 mb-2 flex flex-col gap-2 items-center">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Preventive Maintenance
                          </h6>
                          <p className="text-sm text-gray-200">
                            Data is valuable for preventive maintenance planning and system optimization.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                        <h6 className="font-semibold text-purple-200 mb-2 flex flex-col gap-2 items-center">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Exceptional Reports
                        </h6>
                        <p className="text-sm text-gray-200">
                          Exceptional Reports can be obtained by designing suitable logics for extracting specified information, 
                          which is useful in bringing out unsafe procedures/working needing corrective action.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Train Details Logging */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Details Logging System
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex flex-col gap-2 items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Station Coverage
                  </h4>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                    At important/originating/terminating/junction stations, a provision has been made for
                    Station Master to enter the train details and log it against the berthing track
                    occupation by the train.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                    <h5 className="font-semibold text-blue-200 mb-2 flex flex-col gap-2 items-center">
                      <Network className="w-4 h-4 mr-2" />
                      Control Office Integration
                    </h5>
                    <p className="text-base text-gray-200">
                      This enables the timings of trains at that station to be automatically updated in control office application.
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

export default OMPage7