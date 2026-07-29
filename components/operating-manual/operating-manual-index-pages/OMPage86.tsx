'use client'
import React from 'react'
import { 
  Train,
  AlertTriangle,
  Eye,
  CheckCircle,
  Wrench,
  Users,
  Lightbulb,
  UserCheck,
  Signal,
  Car,
  ArrowRight,
  ArrowLeft,
  AlertOctagon,
  Shield,
  Phone,
  RadioTower,
  MessageSquare,
  Bell,
} from 'lucide-react'

const OMPage86 = () => {
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
                <Train className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TRAIN PARTING & ESCAPED VEHICLES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Emergency Response & Safety Protocols</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive procedures for handling train parting incidents and managing escaped vehicles 
              to ensure railway safety and prevent accidents.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Train Parting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Parting
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Immediate Detection & Response
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      If any portion of a train, while in motion gets parted, the staff who notices the same has to attract the attention of the Loco Pilot and guard by shouting that the train has parted and displaying train parting hand signal by putting both hands together above the head and separating them repeatedly.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Lightbulb className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In night time, train parting signal is shown by waving a white light up and down vertically as high and as low as possible.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <AlertOctagon className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The staff shall not show stop signal to Loco Pilot.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Loco Pilot Response
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">On becoming aware of the train parting, the Loco Pilot shall use his/her judgment to keep the front portion in motion, if possible, until the rear portion has been brought to a stand so as to avoid the chance of a collision between the two portions.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <Bell className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Sound the prescribed code of whistle to inform the Guard of the parting.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-400 mb-3 flex items-center flex-col gap-2 text-center">
                      <UserCheck className="w-5 h-5 mr-2" />
                      Guard Response & Brake Application
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Guard in the rear portion shall promptly apply hand-brakes of the Brake van and take all other possible steps to stop the rear portion of the train to prevent it colliding with front portion.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-indigo-400 mb-3 flex items-center flex-col gap-2 text-center">
                      <Car className="w-5 h-5 mr-2" />
                      Banking Engine Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If there is any Banking Engine, the Loco Pilot of a banking engine, shall bring the rear portion to a stand and sound the prescribed code of whistle to attract the attention of the Loco Pilot of the front portion.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">As soon as the rear portion of a train has been brought to a stand, the Guard of the train shall take steps to secure the vehicles in stationary position by applying hand brakes and by use of wedges.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-600">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Protect that portion in accordance with GR 6.03 and SRs thereunder both in the front and in the rear.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-500 mb-3 flex items-center flex-col gap-2 text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Coupling & Station Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">When both portions of a parted train are brought to a stand within sight of each other and it is possible and safe to couple them, the train shall be coupled with due caution under hand signals from the Guard.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Bell className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If the Loco Pilot of the parted train has already reached the block station in advance before he/she could bring the front portion to a stop, he/she shall instantly warn the Station Master or the railway servant in charge of a cabin, if passed on the way, of the parting, with „one long, one short, one long, one short‟ whistle repeatedly.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-700">
                          <Signal className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">However, the Loco Pilot shall act as per the aspect of the signals at gate or station, while proceeding.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-indigo-500 mb-3 flex items-center flex-col gap-2 text-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Station Master Response
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">On receiving information of train parting, the Station Master shall promptly admit the front portion of the train into the station on a vacant line, and immediately inform the station in rear and SCOR that the train has parted and that the rear portion may roll back.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-600">
                          <ArrowLeft className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If, the rear portion has not stopped and is following the front portion, the Station Master shall endeavor to divert it, if possible, to a vacant loop or siding line or bring it to a stand by the application of wagon brakes or by heaping up earth on the rails or other suitable means.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicles Escaping from Station Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Car className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Vehicles Escaping from Station
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Immediate Warning & Communication
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Phone className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If any vehicle escapes from a station, the Station Master shall take immediate steps to warn the other stations or persons concerned, such as Gatemen of Level Crossing gates, as far as practicable, to prevent an accident.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Signal className="w-5 h-5 mr-2" />
                      Block Section Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <AlertOctagon className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If the vehicles/train has escaped into a block section, the SM has to put the concerned block instrument on a refusal to line clear position and inform the adjacent SM to set the point to an unoccupied line.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">After the escaped vehicles come to a stop, they shall be secured and moved to clear the block section.</span>
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
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Immediate Alert
                    </h5>
                    <p className="text-sm text-gray-200">
                      Shout and show hand signals when train parting detected.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-2 text-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Night Signals
                    </h5>
                    <p className="text-sm text-gray-200">
                      Use white light vertically for night time parting signals.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Prevent Collision
                    </h5>
                    <p className="text-sm text-gray-200">
                      Keep front portion moving until rear portion stops.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Wrench className="w-4 h-4 mr-2" />
                      Hand Brakes
                    </h5>
                    <p className="text-sm text-gray-200">
                      Apply hand brakes immediately in rear portion.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center flex-col gap-2 text-center">
                      <Bell className="w-4 h-4 mr-2" />
                      Whistle Codes
                    </h5>
                    <p className="text-sm text-gray-200">
                      Use prescribed whistle codes to inform parting.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-500 mb-2 flex items-center flex-col gap-2 text-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Station Communication
                    </h5>
                    <p className="text-sm text-gray-200">
                      Inform SCOR and adjacent stations immediately.
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
                  {/* 1. Detection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-5 border border-white/20 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-400 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/30 animate-fade-in">
                      1
                    </div>
                    <h5 className="font-semibold text-purple-200 lg:text-lg text-base mb-2 tracking-wide">Detection</h5>
                    <p className="text-sm text-gray-200">Notice train parting</p>
                  </div>
                  {/* 2. Alert */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-5 border border-white/20 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
                    <div className="bg-gradient-to-br from-pink-500 to-purple-400 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/30 animate-fade-in">
                      2
                    </div>
                    <h5 className="font-semibold text-pink-200 lg:text-lg text-base mb-2 tracking-wide">Alert</h5>
                    <p className="text-sm text-gray-200">Show parting signals</p>
                  </div>
                  {/* 3. Secure */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-5 border border-white/20 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/30 animate-fade-in">
                      3
                    </div>
                    <h5 className="font-semibold text-purple-300 lg:text-lg text-base mb-2 tracking-wide">Secure</h5>
                    <p className="text-sm text-gray-200">Stop and secure portions</p>
                  </div>
                  {/* 4. Communicate */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-5 border border-white/20 text-center flex flex-col items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white font-bold text-2xl lg:text-3xl w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 border-white/30 animate-fade-in">
                      4
                    </div>
                    <h5 className="font-semibold text-pink-300 lg:text-lg text-base mb-2 tracking-wide">Communicate</h5>
                    <p className="text-sm text-gray-200">Inform authorities</p>
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
                    <h5 className="font-semibold text-cyan-300 mb-2">SCOR</h5>
                    <p className="text-sm text-gray-200">Senior Control Office Representative</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Train className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-blue-300 mb-2">Adjacent Stations</h5>
                    <p className="text-sm text-gray-200">Immediate notification required</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-cyan-400 mb-2">Level Crossing Gates</h5>
                    <p className="text-sm text-gray-200">Gatemen warning priority</p>
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

export default OMPage86