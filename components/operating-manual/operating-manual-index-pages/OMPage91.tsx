'use client'
import React from 'react'
import { 
  BarChart3,
  TrendingUp,
  Calculator,
  Train,
  Users,
  Package,
  MapPin,
  Target,
  PieChart,
  Activity,
  BookOpen,
  Database,
  LineChart,
  Gauge,
  Scale,
  BarChart,
} from 'lucide-react'

const OMPage91 = () => {
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
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Chapter – VII: Operating Statistics
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Comprehensive Guide to Railway Performance Metrics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Essential statistics and metrics used in railway management functions to measure performance, 
              efficiency, and operational effectiveness across Indian Railways.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Understanding Operating Statistics
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Statistics is a collection of data which is used in management functions like finance, production, marketing, service operations etc. In Indian Railways, statistics are collected and published annually in the form of Annual Statistical Statements.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">One of the popular and significant statistics used to measure the performance of Indian Railways is Operating Ratio. It reflects the overall financial performance and health of the organization.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The data and indices that are related to train operations and used by operating department in its management and working are called Operating Statistics.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories of Operating Statistics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <PieChart className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Categories of Operating Statistics
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-green-300 mb-3 text-center">1. Traffic Output Statistics</h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      They measure the output of the train operations. The end service delivered by train operations is transportation of goods and people, which is measured by statistics like loading, no of passengers etc.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-emerald-300 mb-3 text-center">2. Operational Tools</h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      Some of the statistics are required for daily planning and monitoring of the train operations. They help in adjusting to actual field developments and take corrective action.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full lg:w-16 lg:h-16 w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                      <Gauge className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-semibold text-green-400 mb-3 text-center">3. Asset Utilization Statistics</h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      They measure the efficiency of utilization of assets like locomotive, rolling stock, crew and path. The more the efficiency, the lesser will be the asset requirement.
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed text-center">
                    Many statistics have multiple purposes and can fit into more than one of the above categories. They are used both for day to day working as well as long term decisions and policy making.
                  </p>
                </div>
              </div>
            </div>

            {/* Traffic Output Statistics Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Traffic Output Statistics
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-6">
                  
                  {/* Originating Loading */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <Package className="w-5 h-5 mr-2" />
                      Originating Loading
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Originating Loading is one of the important statistics in freight transportation. Loading in terms of number of wagons loaded is measured on a daily basis. With train loads becoming more common, this statistics is also measured in terms of number of rakes.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Scale className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">As Railway is essentially a bulk commodity carrier, Originating Loading in tonnes is a better measure of the freight output.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Since freight loading has close correlation with freight earnings which is the major part of overall railway earnings, Originating Loading is a closely monitored statistics at divisional, zonal and board level on a daily, monthly and annual basis.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <BarChart className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It is also collected and analyzed commodity wise, wagon type wise in order to monitor and take appropriate decisions and corrective measures.</span>
                      </div>
                    </div>
                  </div>

                  {/* Lead */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      Lead
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Lead is the distance for which transportation has been done. It is the distance between loading and unloading point in case of freight; boarding and alighting point in case of passenger.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Lead is affected by lot of factors that influence demand and supply. Longer lead traffic is generally favored by Railways because of the telescopic nature of freight and fare.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Lead is also measured commodity wise and siding/station wise to understand the business / traffic patterns.</span>
                      </div>
                    </div>
                  </div>

                  {/* Originating Passenger */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-yellow-400 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <Users className="w-5 h-5 mr-2" />
                      Originating Passenger
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      Originating Passenger in numbers is an important statistic in coaching operations. It is one of the significant measures targeted by Railways and is expected to continuously improve with the additional services and improvements made in coaching operations every year.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Performance Metrics Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calculator className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Performance Metrics
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* NTKM */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      NTKM – Net Tonne Kilometer
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      A longer lead loading of same quantity is different from a shorter lead one. To have a better idea of the loading incorporating both quantity and distance of transportation, NTKM is calculated.
                    </p>
                    <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                      <p className="text-purple-200 text-sm font-mono text-center">
                        NTKM = Loading in tonnes × Distance in km for which the load is moved
                      </p>
                    </div>
                    <p className="text-white lg:text-base text-sm leading-relaxed mt-3">
                      There are through running divisions / zones where originating loading is low. However, these units do operate loaded train movements. NTKM of a division / zone reflects these through load running also.
                    </p>
                  </div>

                  {/* GTKM */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-pink-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <Scale className="w-5 h-5 mr-2" />
                      GTKM – Gross Tonne Kilometer
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      The tare weight of the wagons is not included in NTKM. Hence, empty rakes earn zero NTKM. However, the tare weights add to haulage load and the resultant impact on infrastructure like track and OHE.
                    </p>
                    <div className="bg-pink-500/20 rounded-lg p-3 border border-pink-400/30">
                      <p className="text-pink-200 text-sm font-mono text-center">
                        GTKM = Total weight of train in tonnes × Distance in km traveled by the train
                      </p>
                    </div>
                    <p className="text-white lg:text-base text-sm leading-relaxed mt-3">
                      A ratio of NTKM to GTKM reflects the proportion of empty running in the freight operations. GTKM is an important statistic used in planning for track maintenance and haulage capacity of locomotives.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed">
                    GTKM also closely corroborates with electricity consumption in traction area and is used to decide on Maximum Demand projections to Electricity Boards, which is critical in keeping power costs under control.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Metrics Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <LineChart className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Additional Performance Metrics
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                <div className="space-y-6">
                  
                  {/* Passenger KM */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <Users className="w-5 h-5 mr-2" />
                      Passenger KM
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      Passenger KM includes the distance to which a passenger has travelled. Passenger-kilometers are measured as travel distance between origin and destination stations multiplied by the number of passengers traveled between them. Passenger KM when compared with Coach KM gives an indication about the occupancy ratio.
                    </p>
                  </div>

                  {/* Throughput */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <Activity className="w-5 h-5 mr-2" />
                      Throughput of a Section
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Throughput of a section is the total quantum of traffic which is transported over the section in a period of 24 hours.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-cyan-500/20 rounded-lg p-3 border border-cyan-400/30">
                        <h6 className="font-semibold text-cyan-200 mb-2">Passenger Throughput</h6>
                        <p className="text-cyan-100 text-sm">Could be measured in terms of number of passengers or passenger kms.</p>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                        <h6 className="font-semibold text-blue-200 mb-2">Goods Throughput</h6>
                        <p className="text-blue-100 text-sm">May be expressed in terms of:</p>
                        <ul className="text-blue-100 text-sm mt-2 space-y-1">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            Number of wagons or trains
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            GTKM or NTKM
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Throughput Improvement */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-cyan-400 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Improving Throughput
                    </h5>
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      In Railways, generally throughput refers to &apos;goods throughput&apos;. Improving throughput can be achieved by either operational means like increased train length, increased trailing load etc.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-cyan-400">
                          <Gauge className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It can also be enhanced by improvements in infrastructure like track strength, improved axle load of wagons, increased carrying capacity of coaches and wagons etc.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Target className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It can also be increased by implementing some of the freight incentive schemes like concessional fare in traditional empty flow direction.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Takeaways
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-green-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Performance Measurement
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-200">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Operating Ratio reflects financial health
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Daily, monthly, and annual monitoring
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Commodity and wagon type analysis
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-3 flex items-center justify-center text-center flex-col gap-2">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Efficiency Metrics
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-200">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        NTKM for freight output measurement
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        GTKM for infrastructure planning
                      </div>
                      <div className="flex items-center text-sm text-gray-200">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        Throughput optimization strategies
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

export default OMPage91