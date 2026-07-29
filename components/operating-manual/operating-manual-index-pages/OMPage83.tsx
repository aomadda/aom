'use client'
import React from 'react'
import { 
  AlertTriangle,
  Shield,
  Phone,
  Train,
  Eye,
  FileText,
  CheckCircle,
  AlertCircle,
  RadioTower,
  UserCheck,
  Signal,
  Wrench,
  MessageSquare,
  Clock,
  Gauge,
  AlertOctagon,
  Lightbulb,
  Users,
  Zap,
  Headphones,
  Clipboard,
} from 'lucide-react'

const OMPage83 = () => {
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
              OBSTRUCTION & PATROL PROCEDURES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-yellow-300 mb-4">Track Safety & Communication Protocols</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive procedures for handling obstructions on adjacent tracks and patrolman coordination 
              to ensure railway safety and proper communication protocols.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Obstruction on Adjacent Track Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertOctagon className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Obstruction on Adjacent Track
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Immediate Detection & Response
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      If Loco Pilot and/or Guard notices any obstruction or any other unsafe condition, on or near the track adjacent to the line over which his train has passed, they shall immediately switch on the flasher light of loco and inform the Station Master(s) concerned through the available means of communication.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Signal className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Concurrently, the Loco pilot and Guard shall also stop their train and proceed with danger hand signals to protect the obstructed line.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <Zap className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If there are trains on run towards the obstructed track that cannot be stopped by the Station Master, in electrified section, OHE shall be immediately switched off from the Traction Power Control.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex flex-col lg:flex-row gap-4 items-center flex-col gap-2 text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Cautious Journey Continuation
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Once it is ensured that there are no trains that are on run towards the affected spot, they shall continue journey to the next station cautiously keeping flasher light on.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Be prepared to stop any incoming train approaching on the affected line by exhibiting danger hand signal or any other available means of communication like walkie talkie.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex flex-col lg:flex-row gap-4 items-center flex-col gap-2 text-center">
                      <Clipboard className="w-5 h-5 mr-2" />
                      Written Report & Station Master Action
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <FileText className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">On arrival at the next station, he/she shall inform the Station Master through a written memo about the occurrence.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <UserCheck className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">On receipt of such information, the Station Master shall take action as per SR 6.07.1(c) to (f).</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patrolman Procedures Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Patrolman Not Turned Up in Time
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Time-Based Response Protocol
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      When patrolling is in force, if a Patrolman does not turn up within 15 minutes of his/her scheduled arrival, the Station Master shall stop run through trains proceeding into the block section.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Issue a Caution Order to all trains proceeding into the block section advising the Loco Pilot to be alert and specify a speed restriction of 40 KMPH.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Communication & Coordination
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-cyan-400">
                          <Phone className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Station Master shall also immediately advise the Station Master at the other end of the block section to take similar action.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-cyan-500">
                          <RadioTower className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Advise the SCOR, the concerned section Gangmate and the PWI.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-400 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Continuation of Caution Orders
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <AlertTriangle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Caution Orders shall continue to be issued till the Patrolman arrives and report that the line is safe for passage of trains.</span>
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
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Flasher Light Activation
                    </h5>
                    <p className="text-sm text-gray-200">
                      Immediately switch on flasher light when obstruction detected.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-2 text-center">
                      <Headphones className="w-4 h-4 mr-2" />
                      Communication Priority
                    </h5>
                    <p className="text-sm text-gray-200">
                      Inform Station Master through available means immediately.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Zap className="w-4 h-4 mr-2" />
                      OHE Shutdown
                    </h5>
                    <p className="text-sm text-gray-200">
                      Switch off OHE in electrified sections if needed.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Clock className="w-4 h-4 mr-2" />
                      15-Minute Rule
                    </h5>
                    <p className="text-sm text-gray-200">
                      Act within 15 minutes if patrolman doesn&apos;t arrive.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-4 h-4 mr-2" />
                      40 KMPH Speed Limit
                    </h5>
                    <p className="text-sm text-gray-200">
                      Apply speed restriction during patrolman absence.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-500 mb-2 flex items-center flex-col gap-2 text-center">
                      <Clipboard className="w-4 h-4 mr-2" />
                      Written Documentation
                    </h5>
                    <p className="text-sm text-gray-200">
                      Always provide written memo for record keeping.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Emergency Contact Priority
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <RadioTower className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-purple-300 mb-2">SCOR</h5>
                    <p className="text-sm text-gray-200">Senior Control Office Representative</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-pink-300 mb-2">Gangmate</h5>
                    <p className="text-sm text-gray-200">Section Maintenance Team</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-purple-400 mb-2">PWI</h5>
                    <p className="text-sm text-gray-200">Permanent Way Inspector</p>
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

export default OMPage83