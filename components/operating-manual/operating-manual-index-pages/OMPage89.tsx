'use client'
import React from 'react'
import { 
  Cloud,
  AlertTriangle,
  Wind,
  Shield,
  Train,
  Users,
  Eye,
  CheckCircle,
  MapPin,
  RadioTower,
  Clock,
  Gauge,
  ArrowRight,
  MessageSquare,
  Users2,
  Lightbulb,
  UserCheck,
  AlertOctagon,
  HardHat,
} from 'lucide-react'

const OMPage89 = () => {
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
                <Cloud className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STORM & HEAVY WIND SAFETY PROTOCOLS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Comprehensive Safety Procedures for Adverse Weather Conditions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Essential procedures for handling storms, cyclones, and strong winds to ensure railway operational safety 
              and prevent accidents during adverse weather conditions.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Weather Warning & Train Detention Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Weather Warning & Train Detention
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center flex-col gap-2">
                      <Cloud className="w-5 h-5 mr-2" />
                      Meteorological Department Warnings
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      When the weather warning message regarding forecasting cyclone, storm or strong wind has been received from the Meteorological Department and/or there is a reasonable doubt that severe storm is going to break out endangering the safety of passengers, trains, etc.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Station Master shall, in consultation with the Guard and the Loco Pilot of the train, detain the train and also refuse to grant &quot;Line Clear&quot; to a train coming to his station until storm abates and he/she considers movements of trains safe.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Train Caught in Storm Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center flex-col gap-2">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wind className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Caught in Storm During Operation
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center flex-col gap-2">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Immediate Response Required
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      If a train is caught on the run either in a cyclone, storm or strong wind of an intensity which, in the opinion of the Loco pilot, is likely to endanger the safety of the train
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Gauge className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">He/she shall immediately control the speed of the train and bring it to a stop at the first convenient place</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <MapPin className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Taking care as far as possible to avoid stoppage of the train at places like sharp curves, high embankments and bridges (including approaches thereof)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center flex-col gap-2">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Safe Stopping Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In controlling the speed and bringing the train to a halt, the Loco Pilot shall stop the train carefully and without a jerk</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Clock className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">He/she shall restart the train in consultation with Guard only after the cyclone, storm or strong wind abates and it is considered safe to proceed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coach Safety Measures Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center flex-col gap-2 text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Coach Safety & Passenger Protection
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center flex-col gap-2">
                      <Eye className="w-5 h-5 mr-2" />
                      Staff Cooperation & Vigilance
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <Users2 className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Guard and the Loco Pilot of the train in co-operation with the Railway staff travelling in the train shall try to see that doors and windows of the coaches are kept open by the passengers to allow free passage of the wind through the coaches</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety During Vulnerable Periods Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">  
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertOctagon className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Safety During Vulnerable Periods
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-3 flex items-center text-center flex-col gap-2">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Critical Safety Awareness
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Unusual and failure occurrences are vulnerable periods for safety of train operations. It is that time when the human interface is enhanced and becomes critical as compliance to all conditions for ensuring safety is ensured manually.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <UserCheck className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">An alert and knowledgeable staff can prevent major mishaps by detecting unsafe conditions in time</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Taking immediate action to prevent accident and inform all concerned immediately through available means</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Safety Points Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Safety Points Summary
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2 flex items-center text-center flex-col gap-2">
                      <Cloud className="w-4 h-4 mr-2" />
                      Weather Monitoring
                    </h5>
                    <p className="text-sm text-gray-200">
                      Monitor Meteorological Department warnings for storms and cyclones.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-2 flex items-center text-center flex-col gap-2">
                      <Train className="w-4 h-4 mr-2" />
                      Train Detention
                    </h5>
                    <p className="text-sm text-gray-200">
                      Detain trains and refuse Line Clear during severe weather conditions.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-cyan-400 mb-2 flex items-center text-center flex-col gap-2">
                      <Gauge className="w-4 h-4 mr-2" />
                      Speed Control
                    </h5>
                    <p className="text-sm text-gray-200">
                      Control speed and stop at safe locations during storms.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-400 mb-2 flex items-center text-center flex-col gap-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      Safe Stopping Locations
                    </h5>
                    <p className="text-sm text-gray-200">
                      Avoid stopping at curves, embankments, and bridges.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-cyan-500 mb-2 flex items-center text-center flex-col gap-2">
                      <Users className="w-4 h-4 mr-2" />
                      Coach Safety
                    </h5>
                    <p className="text-sm text-gray-200">
                      Keep doors and windows open for wind passage through coaches.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-500 mb-2 flex items-center text-center flex-col gap-2">
                      <HardHat className="w-4 h-4 mr-2" />
                      Staff Vigilance
                    </h5>
                    <p className="text-sm text-gray-200">
                      Maintain high alert during vulnerable weather periods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Response Flow */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Emergency Response Flow
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Step 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20 text-center flex flex-col items-center shadow-md hover:shadow-purple-400/30 transition-shadow duration-300">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-purple-200/30">
                      1
                    </span>
                    <h5 className="font-semibold text-purple-300 mb-2 text-lg leading-snug">Weather Alert</h5>
                    <p className="text-sm text-gray-200">Receive meteorological warnings</p>
                  </div>
                  {/* Step 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20 text-center flex flex-col items-center shadow-md hover:shadow-pink-400/30 transition-shadow duration-300">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-pink-200/30">
                      2
                    </span>
                    <h5 className="font-semibold text-pink-300 mb-2 text-lg leading-snug">Train Detention</h5>
                    <p className="text-sm text-gray-200">Stop trains and refuse Line Clear</p>
                  </div>
                  {/* Step 3 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20 text-center flex flex-col items-center shadow-md hover:shadow-purple-500/30 transition-shadow duration-300">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-purple-300/30">
                      3
                    </span>
                    <h5 className="font-semibold text-purple-400 mb-2 text-lg leading-snug">Safe Stopping</h5>
                    <p className="text-sm text-gray-200">Control speed and stop safely</p>
                  </div>
                  {/* Step 4 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20 text-center flex flex-col items-center shadow-md hover:shadow-pink-500/30 transition-shadow duration-300">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-pink-300/30">
                      4
                    </span>
                    <h5 className="font-semibold text-pink-400 mb-2 text-lg leading-snug">Resume Operations</h5>
                    <p className="text-sm text-gray-200">Restart after weather improves</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Priority */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <MessageSquare className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Communication Priority
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <RadioTower className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-cyan-300 mb-2">Station Master</h5>
                    <p className="text-sm text-gray-200">Primary decision maker for train detention</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Train className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-blue-300 mb-2">Loco Pilot</h5>
                    <p className="text-sm text-gray-200">Speed control and safe stopping decisions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-cyan-400 mb-2">Guard & Staff</h5>
                    <p className="text-sm text-gray-200">Coach safety and passenger protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Safety Checklist */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Weather Safety Checklist
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-3 flex items-center text-center flex-col gap-2">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Before Storm
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Monitor weather warnings
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Prepare detention procedures
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Inform all concerned staff
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-3 flex items-center text-center flex-col gap-2">
                      <Shield className="w-5 h-5 mr-2" />
                      During Storm
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                        Detain trains if necessary
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                        Control speed of running trains
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                        Ensure coach safety measures
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-3 flex items-center text-center flex-col gap-2">
                      <Clock className="w-5 h-5 mr-2" />
                      After Storm
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Assess weather conditions
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Resume operations safely
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Monitor for any damage
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-3 flex items-center text-center flex-col gap-2">
                      <Users className="w-5 h-5 mr-2" />
                      Staff Responsibilities
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                        Maintain high vigilance
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                        Follow safety protocols
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                        Communicate effectively
                      </div>
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

export default OMPage89