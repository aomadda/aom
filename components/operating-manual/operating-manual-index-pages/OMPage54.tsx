'use client'
import React from 'react'
import { 
  Truck, 
  Package, 
  TrendingUp, 
  BarChart3, 
  Users,
  MoveHorizontal,
  CheckCircle,
  DollarSign,
  Target,
  Award,
  Zap
} from 'lucide-react'

const OMPage54 = () => {
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
                <Truck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              FREIGHT MARKETING
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Strategic Initiatives for Rail Freight Growth</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive strategies and schemes to attract traffic, optimize wagon utilization, 
              and enhance freight operations through innovative marketing approaches.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Freight Marketing Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Freight Marketing Overview
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  In order to attract traffic to rail as well as address the issues of empty flow and lean
                  season loading, initiatives of freight marketing are taken up. Also, investments in
                  wagons which are the basic assets of freight movement are also attracted with
                  various schemes.
                </p>
              </div>
            </div>

            {/* Wagon Population Improvement */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Package className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Various Schemes for Improving Wagon Population
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Wagons are long term assets with life up to 20 years. Hence their production needs
                  to be strategically planned. Some of the methods for bringing up wagon production
                  with market needs are as follows:
                </p>
                
                <div className="space-y-6">
                  {/* Wagon Investment Scheme */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                        <h4 className="font-semibold text-blue-300 mb-5 flex flex-col gap-3 items-center text-center">
                          <DollarSign className="w-5 h-5 mr-2" />
                          Wagon Investment Scheme
                        </h4>
                        <div className="space-y-4 ml-0">
                          <div className="flex items-start">
                            <Users className="w-16 h-16 text-blue-400 mr-3 mt-1" />
                            <span className="text-sm text-gray-200">
                              Public-private partnership is encouraged for procurement of wagons to meet anticipated incremental freight traffic. The Wagon Investment Scheme (WIS) was introduced for this purpose.
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Package className="w-16 h-16 text-green-400 mr-3 mt-1" />
                            <span className="text-sm text-gray-200">
                              Customers investing in railway wagons are assured a guaranteed supply of rakes every month, based on the number of rakes procured and wagon turnaround, with a 10% concession in freight.
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Zap className="w-16 h-16 text-yellow-400 mr-3 mt-1" />
                            <span className="text-sm text-gray-200">
                              Investors opting for the Engine on Load (EOL) Scheme receive an additional bonus. This guaranteed supply is in addition to the normal supply of rakes to such customers.
                            </span>
                          </div>
                        </div>
                      </div>

                  {/* Wagon Leasing Scheme */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <MoveHorizontal className="w-5 h-5 mr-2" />
                      Wagon Leasing Scheme
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      The objective of this scheme is to develop a strong wagon leasing market by
                      encouraging third party leasing of wagons, particularly with a view to bring in wagons
                      of better designs.
                    </p>
                    <p className="text-sm text-gray-200 mb-3">
                      Following types of wagons may be procured for leasing:
                    </p>
                    <div className="space-y-2 ml-0">
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        High Capacity Wagons (HCW)
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Special Purpose Wagons (SPW) like BCBFG, BCACM
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Wagons for Container movement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Pricing Policy */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Dynamic Pricing Policy
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Introduced with the objective to optimize utilization of transport capacities and reduce
                    idling of assets by imposing busy season surcharge and granting attractive
                    concessions in freight and fare, during off season.
                  </p>
                </div>
              </div>
            </div>

            {/* Freight Incentive Schemes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Freight Incentive Schemes
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex flex-col gap-3 items-center text-center">
                    <Target className="w-5 h-5 mr-2" />
                    Main Objective
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Main objective of the Freight Incentive Scheme is to generate additional traffic
                    volumes and additional revenues. Grant of freight concessions should, therefore,
                    serve this very objective.
                  </p>
                  <p className="text-sm text-gray-200">
                    A close watch needs to be kept to ensure that this objective is being served.
                  </p>
                </div>

                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Following Schemes are included in this category:
                </p>

                <div className="space-y-6">
                  {/* Liberalized Automatic Freight Rebate Scheme */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-3 items-center text-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Liberalized Automatic Freight Rebate Scheme
                    </h4>
                    <p className="text-sm text-gray-200 mb-3">
                      For traffic loaded in Traditional Empty Flow Direction:
                    </p>
                    <p className="text-sm text-gray-200 mb-4">
                      This scheme is introduced with a objective to reduce the empty
                      running of freight trains on IR and garner additional revenue by a suitable pricing
                      mechanism based on discount offered to customers for booking their goods in trains,
                      which are normally run empty from unloading points.
                    </p>
                  </div>

                  {/* Incentive Scheme for Freight Forwarders */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex flex-col gap-3 items-center text-center">
                      <Users className="w-5 h-5 mr-2" />
                      Incentive Scheme for Freight Forwarders
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      This scheme is introduced to facilitate cargo aggregation & expand commodity basket on railways.
                    </p>
                    <p className="text-sm text-gray-200">
                      Since customers are required to book a minimum of half rake, which they may not have the goods
                      required, a single customer aggregates the different customer&apos;s cargo and book by
                      the railways.
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

export default OMPage54