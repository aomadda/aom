'use client'
import React from 'react'
import { 
  AlertTriangle,
  Shield,
  Phone,
  Train,
  Eye,
  CheckCircle,
  AlertCircle,
  Signal,
  Wrench,
  MessageSquare,
  AlertOctagon,
  Lightbulb,
  Zap,
  Flame,
  Thermometer,
  Settings,
  Power,
  MapPin,
} from 'lucide-react'

const OMPagee83 = () => {
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
                <Flame className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              HOT AXLE DETECTION & PROCEDURES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-yellow-300 mb-4">Critical Safety Protocols for Running Trains</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive procedures for detecting and handling Hot Axle conditions in running trains 
              to prevent derailments and ensure railway safety.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Hot Axle Definition Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Thermometer className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                What is Hot Axle?
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Definition & Causes
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Hot Axle is a condition where the axle of the wheel gets heated up because of reasons like faulty bearings, insufficient greasing etc. that leads to excess friction during wheel rotation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If the condition continues, it can result in seizure of axle and derailment.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hot Axle Symptoms Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Eye className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Hot Axle Symptoms (8 Stages)
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Early Stage Symptoms
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-blue-400 text-sm font-bold">1.</span>
                        <span className="text-white text-sm">Splashed grease marks on wheels</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-blue-400 text-sm font-bold">2.</span>
                        <span className="text-white text-sm">Smell of Burning grease</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-blue-400 text-sm font-bold">3.</span>
                        <span className="text-white text-sm">Smoke from the Axle Box</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-blue-400 text-sm font-bold">4.</span>
                        <span className="text-white text-sm">Discoloration of Axle Box</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <AlertOctagon className="w-5 h-5 mr-2" />
                      Advanced Stage Symptoms
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-cyan-400 text-sm font-bold">5.</span>
                        <span className="text-white text-sm">Red glow of Axle Box (visible during night)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-cyan-400 text-sm font-bold">6.</span>
                        <span className="text-white text-sm">Whistling sound or metallic screech</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-cyan-400 text-sm font-bold">7.</span>
                        <span className="text-white text-sm">Flames coming out from Axle Box</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-2 text-cyan-400 text-sm font-bold">8.</span>
                        <span className="text-white text-sm">Wheel not rotating due to seizing of bearing</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start">
                    <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                      <Lightbulb className="w-5 h-5" />
                    </span>
                    <span className="text-white lg:text-base text-sm">These symptoms occur in stages in the order shown. As the stage shifts, the condition of bearings will progressively deteriorate. The earlier the detection, the lesser will be the damage.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detection & Immediate Action Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Signal className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Detection & Immediate Action
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Staff Responsibility
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Hence all the staff shall keenly look out for such possibility in a train which passes by them. As and when a Hot Axle is detected, efforts shall be made to show danger signal to the Loco pilot / guard to stop the train immediately.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <MessageSquare className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If the train could not be stopped, the incident shall be brought to the notice of the Station Master who in turn shall take action to stop the train if the train is approaching his/her station.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <Phone className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Or inform the other end Station Master who shall stop the train and advise train crew to examine the affected wagon.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Long Block Section Procedures Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Long Block Section Procedures
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-3 flex items-center">
                      <Power className="w-5 h-5 mr-2" />
                      OHE Shutdown Protocol
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      If the block section is long and the Hot axle is in an advanced stage, and Loco Pilot could not be alerted to stop the train, in electrified sections, efforts should be made to switch of OHE through control.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">On stopping, the train crew shall examine the suspected vehicle and share the details to the C&W control.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">After consultation, the train can be moved with necessary conditions to clear the block section.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception & Detachment Procedures Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <MapPin className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Reception & Detachment Procedures
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-indigo-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Main Line Reception
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The train with hot axle vehicle shall be received onto main line or in case of junction stations, onto the line not involving turnout negotiations.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <Signal className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In cases where these lines are not available for reception, the train shall be brought to stop at Home signal.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Loop Line & Detachment
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">After examining the wagon concerned and if found safe to run over turnouts, it shall be received in the most adjacent loop line.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The affected wagon shall be detached from the train for attention by TXR.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Safety Points Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Safety Points Summary
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Early Detection
                    </h5>
                    <p className="text-sm text-gray-200">
                      All staff must keenly observe passing trains for Hot Axle symptoms.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center">
                      <Signal className="w-4 h-4 mr-2" />
                      Immediate Action
                    </h5>
                    <p className="text-sm text-gray-200">
                      Show danger signal immediately when Hot Axle is detected.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      OHE Control
                    </h5>
                    <p className="text-sm text-gray-200">
                      Switch off OHE through control in electrified sections if needed.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center">
                      <Wrench className="w-4 h-4 mr-2" />
                      TXR Attention
                    </h5>
                    <p className="text-sm text-gray-200">
                      Affected wagon must be detached for TXR attention.
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

export default OMPagee83