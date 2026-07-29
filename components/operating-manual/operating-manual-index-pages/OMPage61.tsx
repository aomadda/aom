'use client'
import React from 'react'
import { 
  Users, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Settings,
  Train,
  Crown,
  Star,
  Zap,
  Route,
  Flag,
  Car,
  Truck,
  Wrench,
  Info
} from 'lucide-react'

const OMPage61 = () => {
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
                <Train className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">General Order of Precedence of Trains</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines for train precedence order and operational principles to ensure 
              safe, efficient, and prioritized railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Train Precedence Order */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Crown className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Precedence Order
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Unless specific orders to the contrary are issued by the PCOM or by those acting on his behalf, 
                  the following general orders of procedure shall be observed by control and stations.
                </p>
                
                <div className="space-y-4">
                  {/* Priority 1-5 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        1. ARME/ART
                      </h6>
                      <p className="text-sm text-gray-200">
                        ARME/ART proceeding to the site of accident.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Crown className="w-4 h-4 mr-2" />
                        2. President&apos;s and VVIP&apos;s Specials
                      </h6>
                      <p className="text-sm text-gray-200">
                        President&apos;s and VVIP&apos;s specials (Unless otherwise specified in the Time Table).
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Users className="w-4 h-4 mr-2" />
                        3. Suburban Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        Suburban train in peak rush direction.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Zap className="w-4 h-4 mr-2" />
                        4. Superfast Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        Superfast trains like Shatabdi, Rajdhani etc.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Route className="w-4 h-4 mr-2" />
                        5. Mail/Express Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        Mail / Express trains.
                      </p>
                    </div>
                  </div>

                  {/* Priority 6-10 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Flag className="w-4 h-4 mr-2" />
                        6. Military Personnel Special
                      </h6>
                      <p className="text-sm text-gray-200">
                        Military personnel special, if instructed by emergency control/DOM.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Star className="w-4 h-4 mr-2" />
                        7. Fast Passenger Train
                      </h6>
                      <p className="text-sm text-gray-200">
                        Fast Passenger train.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Users className="w-4 h-4 mr-2" />
                        8. Public Specials
                      </h6>
                      <p className="text-sm text-gray-200">
                        Special engaged by the public.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Car className="w-4 h-4 mr-2" />
                        9. Passenger Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        Passenger trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Train className="w-4 h-4 mr-2" />
                        10. Mixed Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        Mixed trains.
                      </p>
                    </div>
                  </div>

                  {/* Priority 11-16 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Flag className="w-4 h-4 mr-2" />
                        11. Military Stores Special
                      </h6>
                      <p className="text-sm text-gray-200">
                        Military stores special.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Truck className="w-4 h-4 mr-2" />
                        12. Express/Special Goods
                      </h6>
                      <p className="text-sm text-gray-200">
                        Express or special goods train.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Truck className="w-4 h-4 mr-2" />
                        13. Through Goods Train
                      </h6>
                      <p className="text-sm text-gray-200">
                        Through goods train.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        14. Accident Relief Train
                      </h6>
                      <p className="text-sm text-gray-200">
                        Accident relief train returning from the site of accident (unless otherwise ordered).
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Settings className="w-4 h-4 mr-2" />
                        15. Shunting and Van Goods
                      </h6>
                      <p className="text-sm text-gray-200">
                        Shunting and van goods train.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center flex-col gap-3 text-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        16. Departmental Trains
                      </h6>
                      <p className="text-sm text-gray-200">
                        Departmental trains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Principles */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Info className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                General Principles for Controllers
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-3 text-center">
                    <Info className="w-5 h-5 mr-2" />
                    Important Note
                  </h4>
                  <p className="text-sm text-gray-200">
                    Following general principles are mentioned for the guidance of Controllers but it must be 
                    distinctly understood that nothing in these instructions modifies the safety precautions 
                    laid down in the rules (General and Subsidiary Rules, Station Working Rules etc.).
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Principle 1: End-of-Run Priority
                    </h5>
                    <p className="text-sm text-gray-200">
                      A Passenger train nearing the end of its run should not normally be detained in preference 
                      to a train which has a longer run before it, as the later train is more likely to make up 
                      time and reach its destination punctually than the former.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Principle 2: Single Line Crossing
                    </h5>
                    <p className="text-sm text-gray-200">
                      A train running to time should not be detained more than 30 minutes to effect crossing on 
                      single line. A train running late due to defective engine, or defect in rolling stock or 
                      any other cause which is likely to continue to operate against it and prevent it from making 
                      up time, should generally give way to a train running properly.
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

export default OMPage61