'use client'
import React from 'react'
import { 
  Train, 
  Building2, 
  Settings, 
  Users, 
  Zap,
  Route,
  Target,
  TrendingUp,
  Calendar,
  Gauge,
  RefreshCw,
  Link,
  Star,
  MapPin,
  Lock
} from 'lucide-react'

const OMPage46 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Passenger Marketing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to optimizing coach usage, managing seasonal demand fluctuations, 
              and implementing effective augmentation strategies for better passenger satisfaction.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Demand Management Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                  The demand for travel is always increasing in our country. However, it is also
                  seasonally fluctuating. All trains are not fully occupied throughout the year. Hence
                  there is an opportunity to plan & achieve the best method of coach usage to achieve
                  maximum demand fulfillment.
                </p>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  The following actions are taken in this regard…
                </p>
              </div>
            </div>

            {/* Temporary Augmentation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Temporary Augmentation
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Based on the availability of room in the formation, coaches available are attached for clearing the wait list passengers. This is subject to:
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Restricted Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Restricted Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      Additional carriage is attached to trains only with permission
                      of the Railway Board/ PCOM/CPTM.
                    </p>
                  </div>

                  {/* Prohibited Trains */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Lock className="w-5 h-5 mr-2" />
                      Prohibited Trains
                    </h4>
                    <p className="text-sm text-gray-200">
                      Additional coach cannot be attached by these trains. This
                      prohibition may be for a portion of journey or throughout to ensure punctuality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Permanent Augmentation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Permanent Augmentation
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Based on the demand and temporary augmentation done continuously for some of the trains, 
                  coaches can be permanently augmented for that service. This will be included in the coach 
                  composition and fired in the PRS.
                </p>
              </div>
            </div>

            {/* Coach Composition Review */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <RefreshCw className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Coach Composition Review
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Based on occupancy, changing nature of demand, passenger profile, coach composition 
                  may be reviewed and optimized.
                </p>
              </div>
            </div>

            {/* Rake Link Review */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Link className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Rake Link Review
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  As rake link based train services have come up, some of the limitations of one train 
                  service are passed on to the linked train. Hence it is better to link similar train 
                  services having similar demand. Even within the limitations, the following action 
                  shall be taken for improving coach utilization and better passenger satisfaction.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Standardization */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-5 h-5 mr-2" />
                      Standardization of Rakes
                    </h4>
                    <p className="text-sm text-gray-200">
                      Standardization of rakes with similar demand/loads reducing lie over period at
                      originating/destination stations.
                    </p>
                  </div>

                  {/* Extension */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Route className="w-5 h-5 mr-2" />
                      Extension/Running
                    </h4>
                    <p className="text-sm text-gray-200">
                      Extension/ running of train service in case of lie over period is more at
                      secondary maintenance stations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stoppage Analysis */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <MapPin className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Stoppage Analysis
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  Based on the sale of tickets, some halts may be eliminated. Based on the demand 
                  and requirement, stoppages may be provided.
                </p>
              </div>
            </div>

            {/* Train on Demand */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calendar className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train on Demand
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  During festival seasons and other occasions during which demand for travel shoots up, 
                  special trains are planned and run to cater to the particular time period.
                </p>
              </div>
            </div>

            {/* Additional Efforts */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Star className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Additional Operational Marketing Efforts
              </h2>
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-pink-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Apart from the above operational marketing efforts, other efforts like increase in the
                  capacity of the coaches, better berth utilization and providing better passenger
                  terminals with world class facilities also help in improving passenger satisfaction.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Coach Capacity */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-5 h-5 mr-2" />
                      Coach Capacity
                    </h4>
                    <p className="text-sm text-gray-200">
                      Increase in the capacity of the coaches to accommodate more passengers efficiently.
                    </p>
                  </div>

                  {/* Berth Utilization */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-rose-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Users className="w-5 h-5 mr-2" />
                      Berth Utilization
                    </h4>
                    <p className="text-sm text-gray-200">
                      Better berth utilization to maximize passenger accommodation and comfort.
                    </p>
                  </div>

                  {/* Passenger Terminals */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Passenger Terminals
                    </h4>
                    <p className="text-sm text-gray-200">
                      Providing better passenger terminals with world class facilities for enhanced experience.
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

export default OMPage46