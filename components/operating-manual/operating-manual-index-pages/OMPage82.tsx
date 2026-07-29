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
  ArrowRight,
  AlertOctagon,
  PhoneOff,
  Wifi,
} from 'lucide-react'

const OMPage82 = () => {
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
              UNUSUALS IN THE BLOCK SECTION
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-yellow-300 mb-4">Track Defects & Safety Procedures</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive procedures for handling track defects, jerks, and unusual occurrences during train operations 
              to ensure safety and proper communication protocols.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Track Defect Detection Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertOctagon className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Track Defect Detection
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Jerk Due to Track Defect
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      If Loco Pilot and/or Guard experiences a jerk of such severity that can only be caused by track defects like rail fracture, they shall stop the train to ensure that all wheels are on track and the track under the wheels is intact.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Once ascertained that the train is on track and it is safe to proceed, in absolute block system of working, they shall proceed cautiously.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <Signal className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Stop the train at home signal of the next block station and inform the Station Master through available means of communication or message.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IBS and Automatic Block Territories Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wifi className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                IBS and Automatic Block Territories
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Special Procedures Required
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Phone className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In case of IBS and automatic block territories, the Loco Pilot must not start the train from the spot without ensuring that all the Loco Pilots of trains that had already left the station in rear, are advised through available means of communications.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <MessageSquare className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This communication can be done either directly or through the Station Master.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <FileText className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Thereafter, the Loco pilot shall proceed and give a written memo indicating the details of the occurrence.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Station Master Actions Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <UserCheck className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Master Responsibilities
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Immediate Actions Required
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <MessageSquare className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Station Master on receipt of such a memo must issue a message to the Station Master at the other end of the block section.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Concerned Engineering Official must be informed.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-600">
                          <RadioTower className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">SCOR (Senior Control Office Representative) must be notified.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Official Inspection Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Engineering Official Inspection
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Track Inspection Process
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The engineering official will inspect the track and shall allow the train to pass only after satisfying that the track is safe for the passage of train.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <FileText className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">He/she shall advise the condition of the track and any restriction of speed to be imposed to the Station Master through a written memo.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-600">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This memo has to be conveyed to the Loco Pilot.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Absence of Engineering Official Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Absence of Engineering Official
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                      <PhoneOff className="w-5 h-5 mr-2" />
                      Emergency Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In rare case of absence of engineering official, a train can be sent towards the suspected spot with a Caution Order.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <Signal className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Caution Order instructs the Loco Pilot to stop dead before the affected kilometres.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-600">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">After satisfying himself about the condition of track, pass over the track in question at 10 kilometres per hour.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-700">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If he/she finds the line unsafe to pass, return to station in rear.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsequent Train Procedures Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Subsequent Train Procedures
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-indigo-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                      <Gauge className="w-5 h-5 mr-2" />
                      Speed Restrictions
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If the Loco Pilot is not able to find anything doubtful, subsequent trains shall be dispatched with a speed restriction of 10 kilometres per hour over the suspected track length.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <Clock className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This restriction continues until the track is certified to be safe by engineering officials.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-600">
                          <AlertTriangle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If the condition as reported earlier is confirmed by the Loco Pilot, then no train movement shall be allowed till the track is certified to be safe by engineering officials.</span>
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
                      <AlertOctagon className="w-4 h-4 mr-2" />
                      Immediate Stop
                    </h5>
                    <p className="text-sm text-gray-200">
                      Stop train immediately when severe jerks indicate track defects.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-2 text-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Communication
                    </h5>
                    <p className="text-sm text-gray-200">
                      Inform Station Master and other relevant officials immediately.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Wrench className="w-4 h-4 mr-2" />
                      Engineering Inspection
                    </h5>
                    <p className="text-sm text-gray-200">
                      Engineering official must inspect and certify track safety.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-4 h-4 mr-2" />
                      Speed Restrictions
                    </h5>
                    <p className="text-sm text-gray-200">
                      Apply 10 km/h speed restriction until track is certified safe.
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

export default OMPage82