'use client'
import React from 'react'
import { 
  BarChart3,
  Train,
  Clock,
  Gauge,
  TrendingUp,
  Users,
  Calculator,
  Target,
  Activity,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Settings,
  Database,
  Network,
  BarChart,
  LineChart,
  Eye,
} from 'lucide-react'

const OMPage92 = () => {
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
              OPERATING TOOLS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Performance Metrics & Analysis</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to understanding key performance indicators, metrics, and tools used in railway operations 
              for efficient freight train operations and resource management.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Divisional Wagon Balance Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Divisional Wagon Balance (DWB)
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Divisional Wagon Balance (DWB) is the total number of wagons held by the division, including the ineffective and departmental. It indicates the status of freight train operations in a division.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">When there is a congestion or unusual change in demand for loading, the wagon balance of the division increases above the usual average or the railway board target.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <BarChart className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The wagon holding of a division is divided into effective and ineffective based on its fitness and availability for handling traffic.</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-semibold text-blue-300 mb-2 flex flex-col gap-3 text-center items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Effective Wagon Holding Consists Of:
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            <span className="text-white">Inwards (Terminal units)</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            <span className="text-white">Empties</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-white">Outwards (Foreign Loads)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interchange Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Network className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Interchange
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Interchange is the number of wagons or trains handed over / taken over between two units like divisions or zones. This is forecasted and exchanged between divisions and zones to their adjoining units on a daily basis.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Such forecasts help in controlling the traffic pattern and ensure the requirement of assets in a division for maintaining efficient train operations.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Efficiency of train operations can be assessed through fulfillment of the interchange commitments by a division / zone as planned in its forecast.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-600">
                          <Activity className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">An increase in interchange indicates improvement in freight train operations.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Detention Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Terminal Detention
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Terminal detention is measured in hours. Wagons get detained in terminals for loading, unloading and examination activities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">These detentions are closely monitored to keep them under minimum and ensure that wagons are on run as quickly as possible.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Speed Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Gauge className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Average Speed
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Average speed is measured in Kmph. Coaching trains are timetabled and hence their average speed is determined during timetabling.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <Train className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Mail Express trains are faster than passenger trains. Superfast trains have a higher average speed of &gt;= 55 kmph.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Freight trains receive the last priority in train running normally and hence their average speeds are lesser.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-600">
                          <Settings className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Any regulation, under powering, speed restrictions affect the speed of trains.</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-semibold text-purple-300 mb-2 flex items-center">
                          <Calculator className="w-4 h-4 mr-2" />
                          Calculation Method:
                        </h6>
                        <p className="text-sm text-white">
                          The average speed of goods train is calculated from the time it leaves the dispatching yard to the time it reaches the destination at the other end of the section. This includes detentions enroute on account of crossing, precedence, shunting etc. The total distance covered during the journey divided by the total time taken will be the average speed of a particular train.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Punctuality Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Punctuality
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Punctuality is the measure of adherence to time table timings by a coaching train. A coaching train based on the time it reached its destination is classified as &quot;before time (BT)&quot;; &quot;right time (RT)&quot;; &quot;not lost time (NLT)&quot;; &quot;lost time (LT)&quot;.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Punctuality is measured in terms of percentage of such trains on a daily basis.</span>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
                        <h6 className="font-semibold text-yellow-300 mb-2 flex items-center">
                          <Calculator className="w-4 h-4 mr-2" />
                          Punctuality Formula:
                        </h6>
                        <div className="text-center">
                          <div className="lg:text-2xl text-xl font-bold text-white mb-2">
                            Punctuality % = <span className="text-yellow-300">Number of (BT + RT + NLT) × 100</span>
                          </div>
                          <div className="text-lg text-white">
                            Total number of coaching trains
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outage Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Activity className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Outage
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Outage of an asset is the number of such assets made available for traffic use in a day (24 hours). Wagon and Loco outages are calculated on a daily basis.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <Database className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">When worked out for all locomotives owned by a shed irrespective of their physical location, it is termed as „shed outage‟.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <Network className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">When worked out for locomotives in a territory of an unit like a division, it is called as „territorial outage‟.</span>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg p-4 border border-indigo-400/30">
                        <h6 className="font-semibold text-indigo-300 mb-2 flex items-center">
                          <Calculator className="w-4 h-4 mr-2" />
                          Example Calculation:
                        </h6>
                        <p className="text-sm text-white">
                          If an engine is maintained in shed for 6 hours and provided for operations the rest of the day i.e. 18 hours, the outage is calculated as 18/24 = 0.75.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-600">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Whenever loco outage is disproportionate to wagon outage, the division/zone is asked to balance out the locos to the needy units adjacent.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fortnightly Crew Working Hours Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Fortnightly Crew Working Hours
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Crew utilization is a critical aspect in train operations in terms of safety as well as efficiency. Crew must be used optimally within the HOER (Hours of Employment and period of Rest Rules).
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <Activity className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This is being monitored through Crew Management System so that all crew are utilized fully and no crew is overworked.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Capacity Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <LineChart className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Line Capacity
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Path is measured in terms of line capacity. Line capacity is the number of trains which can be run in the line in 24 hours. It can be worked out block section wise, but usually it is worked out for a section.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The sectional line capacity is limited by the line capacity of the critical block section.</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h6 className="font-semibold text-red-300 mb-2 flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            Maximum Line Capacity
                          </h6>
                          <p className="text-sm text-white">
                            The maximum number of trains that can be run without giving any margins for other allowances and maintenance schedules.
                          </p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h6 className="font-semibold text-pink-300 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Practical Line Capacity
                          </h6>
                          <p className="text-sm text-white">
                            The number of trains that can be run making allowance for maintenance and traffic fluctuations.
                          </p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h6 className="font-semibold text-red-400 mb-2 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Economic Line Capacity
                          </h6>
                          <p className="text-sm text-white">
                            The optimum number of trains which can be run on the section economically.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-4 border border-red-400/30">
                        <h6 className="font-semibold text-red-300 mb-2 flex items-center">
                          <Calculator className="w-4 h-4 mr-2" />
                          Scott&apos;s Formula:
                        </h6>
                        <div className="text-center">
                          <div className="lg:text-2xl text-xl font-bold text-white mb-2">
                            C = <span className="text-red-300">1440 / (T + t) × E</span>
                          </div>
                          <div className="text-sm text-white space-y-1">
                            <div>Where:</div>
                            <div><span className="text-red-300">C</span> = Line Capacity</div>
                            <div><span className="text-red-300">T</span> = Running time of the slowest train over a critical Block section</div>
                            <div><span className="text-red-300">t</span> = Block Operation time</div>
                            <div><span className="text-red-300">E</span> = Efficiency Factor</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-400">
                            <Info className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Critical block section is one which takes longest running time to clear. It is usually the lengthiest block section or one with unfavorable geographical and other conditions.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-500">
                            <ArrowRight className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">The formula will give total number of trains including both directions for a single line section.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-600">
                            <Network className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">On Double line sections this will give number of trains separately for Up & Down directions. These can be different if the running time of critical block section in Up line and Down line are different.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="shrink-0 mt-1 mr-3 text-red-700">
                            <TrendingUp className="w-5 h-5" />
                          </span>
                          <span className="text-white lg:text-base text-sm">Any factor that reduces the running time in critical block section will improve the line capacity. It can be higher tractive power, easing out gradient, splitting up of block section through IBS or automatic block signaling etc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Performance Metrics Summary
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Database className="w-4 h-4 mr-2" />
                      DWB
                    </h5>
                    <p className="text-sm text-gray-200">
                      Total wagons held by division including ineffective and departmental
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-teal-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Network className="w-4 h-4 mr-2" />
                      Interchange
                    </h5>
                    <p className="text-sm text-gray-200">
                      Wagons/trains exchanged between divisions/zones
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Clock className="w-4 h-4 mr-2" />
                      Terminal Detention
                    </h5>
                    <p className="text-sm text-gray-200">
                      Hours wagons detained for loading/unloading
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-teal-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Gauge className="w-4 h-4 mr-2" />
                      Average Speed
                    </h5>
                    <p className="text-sm text-gray-200">
                      Measured in Kmph for all train types
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-emerald-500 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Target className="w-4 h-4 mr-2" />
                      Punctuality
                    </h5>
                    <p className="text-sm text-gray-200">
                      Percentage adherence to timetable
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-teal-500 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Activity className="w-4 h-4 mr-2" />
                      Outage
                    </h5>
                    <p className="text-sm text-gray-200">
                      Assets available for traffic use in 24 hours
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

export default OMPage92