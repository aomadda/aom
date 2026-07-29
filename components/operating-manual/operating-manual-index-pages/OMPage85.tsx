'use client'
import React from 'react'
import { 
  Flame,
  Train,
  Shield,
  AlertTriangle,
  Eye,
  CheckCircle,
  Wrench,
  Users,
  Zap,
  Lightbulb,
  UserCheck,
  Signal,
  Car,
  ArrowRight,
  ArrowLeft,
  AlertOctagon,
  Link,
  Key,
} from 'lucide-react'

const OMPage85 = () => {
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
              FIRE SAFETY & WAGON TILTING PROCEDURES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-yellow-300 mb-4">Emergency Response & Safety Protocols</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive procedures for handling fire incidents on trains and managing tilted wagons 
              to ensure passenger safety and prevent derailments.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Fire on Train Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Flame className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Fire on Train
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Immediate Detection & Response
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      If fire is noticed in a running train, the staff who noticed the fire shall alert Loco Pilot at once to stop the train by showing danger signal, red flag or red lamp or by any means available.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Zap className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In electrified sections, the OHE power supply should be switched off.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <Users className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Once the train is stopped, if it is a passenger carrying train, the passengers in the vehicles shall be evacuated at once with the help of on-board staff.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Vehicle Separation & Safety
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The vehicles behind (in the direction of wind) the one on fire shall be detached and the front portion of the train then moved forward so as to prevent the rear vehicles catching fire.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <ArrowLeft className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">As soon as the front portion of the train has moved forward to a sufficient distance, the burning vehicle shall be detached and the vehicles in front of it shall then be moved forward to a safe distance.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">While and after doing these actions, each portion of the train shall be secured properly as per the gradient so as to avoid rolling down.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      Vestibuled Stock Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Link className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">When a fire occurs in a train composed of vestibuled stock, the „Link‟ holding the Fastening Lever on both the sides of the vestibule connection shall be disconnected immediately and then the vestibule is separated with handle provided.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <Car className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The couplings of the vehicles shall be unfastened and then the vehicles are separated.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-600">
                          <AlertOctagon className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If circumstances do not permit unfastening the vestibule fitting, immediate action shall be taken to unfasten the couplings beneath the corridor footplate and an attempt shall be made to separate the vehicles by making the engine pull them apart, thereby tearing off the vestibule.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-400 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Key className="w-5 h-5 mr-2" />
                      CBC Coaches Procedures
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <UserCheck className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In case of CBC coaches, the Guard or Assistant Loco Pilot, whoever nearer to the affected coach, shall unlock the CBC operating handle and open the couplings for detaching affected coaches.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <Key className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The CBC operating handle key is provided as personal equipment of Loco Pilot and Guard.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-400 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Electrical Systems & Fire Control
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Lightbulb className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Guard shall immediately switch off the electric lights and fans, by operating the control switch to the „off‟ position.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The Guard shall disconnect the Kent couplers, at each end of the vehicles in which the fire has occurred.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <Flame className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">After isolating the vehicle every effort shall be made to extinguish the fire and to save the contents of the burning vehicle.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wagons Tilting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Car className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Wagons Tilting
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Causes of Wagon Tilting
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Wagons run tilted due to shifting of load inside the wagon. Loads get shifted inside the wagons due to improper stacking or unequal unloading of contents leaving more loads on one side.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <AlertOctagon className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Such wagons have possibility of derailment on sharp curves.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Detection & Response Protocol
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-cyan-400">
                          <Users className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Train crew, Station staff while exchanging alright signals, Gatemen and such other railway staff on noticing tilted wagons on a running train shall make efforts to stop the train.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-400 mb-3 flex flex-col lg:flex-row gap-4 items-center text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Safety Assessment & Action
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Once the train is stopped, if it is in the mid-section, it has to be examined by Loco Pilot and guard for safe running to clear the block section with restricted speed.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">If they are satisfied, the train shall be taken to the next station for getting the load adjusted.</span>
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
                      <Flame className="w-4 h-4 mr-2" />
                      Immediate Alert
                    </h5>
                    <p className="text-sm text-gray-200">
                      Alert Loco Pilot immediately when fire is detected.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-2 text-center">
                      <Zap className="w-4 h-4 mr-2" />
                      OHE Shutdown
                    </h5>
                    <p className="text-sm text-gray-200">
                      Switch off OHE power in electrified sections.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Users className="w-4 h-4 mr-2" />
                      Passenger Evacuation
                    </h5>
                    <p className="text-sm text-gray-200">
                      Evacuate passengers immediately from affected vehicles.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center flex-col gap-2 text-center">
                      <Train className="w-4 h-4 mr-2" />
                      Vehicle Separation
                    </h5>
                    <p className="text-sm text-gray-200">
                      Detach affected vehicles and move to safe distance.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-green-500 mb-2 flex items-center flex-col gap-2 text-center">
                      <Key className="w-4 h-4 mr-2" />
                      CBC Key Access
                    </h5>
                    <p className="text-sm text-gray-200">
                      Use CBC operating handle key for coach separation.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-500 mb-2 flex items-center flex-col gap-2 text-center">
                      <Car className="w-4 h-4 mr-2" />
                      Tilted Wagon Response
                    </h5>
                    <p className="text-sm text-gray-200">
                      Stop train immediately when tilted wagons detected.
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-purple-300 mb-2">1. Detection</h5>
                    <p className="text-sm text-gray-200">Notice fire or tilted wagons</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Signal className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-pink-300 mb-2">2. Alert</h5>
                    <p className="text-sm text-gray-200">Signal danger and stop train</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-purple-400 mb-2">3. Secure</h5>
                    <p className="text-sm text-gray-200">Separate and secure vehicles</p>
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

export default OMPage85