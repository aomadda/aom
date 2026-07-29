'use client'
import React from 'react'
import { 
  BarChart3,
  Train,
  TrendingUp,
  Calculator,
  Target,
  Activity,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Settings,
  Database,
  Network,
  LineChart,
  Eye,
  Truck,
  Route,
  Timer,
  TrendingDown,
  Cpu,
  Wrench,
  Users,
  Map,
  Compass,
} from 'lucide-react'

const OMPage95 = () => {
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
              ASSET UTILIZATION STATISTICS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to key performance indicators and statistical measures used for monitoring 
              and optimizing railway asset utilization, including wagons, locomotives, and infrastructure.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Wagon Turn Round Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Timer className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Wagon Turn Round (WTR)
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Wagon Turn Round is the time interval between two successive loadings. It is normally expressed in number of days. It is the time taken by a wagon to go through one complete cycle of loading, movement to destination, unloading and next loading.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <TrendingDown className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">A drop in wagon turn round without a corresponding drop in lead is a healthy sign indicating better wagon mobility.</span>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg lg:p-6 p-3 border border-blue-400/30">
                        <h6 className="font-semibold text-blue-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                          Divisional WTR Formula:
                        </h6>
                        <div className="text-center">
                          <div className="lg:text-xl text-lg font-semibold text-white mb-2">
                            T = <span className="text-blue-300">B / (L+R)</span>
                          </div>
                          <div className="text-sm text-white space-y-1">
                            <div>Where:</div>
                            <div><span className="text-blue-300">T</span> = Wagon Turn round (in days)</div>
                            <div><span className="text-blue-300">B</span> = Number of effective wagons held at odd hours</div>
                            <div><span className="text-blue-300">L</span> = Loading for the day in number of wagons</div>
                            <div><span className="text-blue-300">R</span> = Number of loaded wagons received during the day</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wagon KM per Wagon Day Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Truck className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Wagon KM per Wagon Day
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Wagon KM per wagon day is a measure of wagon mobility and indicates the average number of kilometers moved by a wagon per day, both loaded and empties run included.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                        </span>
                        <span className="text-white lg:text-base text-sm">A drop in this index indicates wagons are not smoothly moving and there is a hold up.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The time spent under maintenance by a wagon is not included while working out this index.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-600">
                          <Eye className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">However any other idling when on line will bring down the figure.</span>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg lg:p-6 p-3 border border-green-400/30">
                        <h6 className="font-semibold text-green-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                          <Calculator className="w-4 h-4 mr-2" />
                          Example Calculation:
                        </h6>
                        <div className="text-center">
                          <div className="lg:text-xl text-lg font-semibold text-white mb-2">
                            For a freight train that ran 1000 kms in 36 hours:
                          </div>
                          <div className="text-lg text-white">
                            WKM per wagon day = <span className="text-green-300">1000/36 × 24 = 667 kms/day</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engine Kilometer Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Engine Kilometer (EKM)
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      EKM – Engine Kilometer is the distance traveled by an engine in a day. It includes train kms hauled by the engine as well as distance travelled by the engine as „light engine‟.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Route className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It also includes „shunting kms‟ to include work done by the engine for shunting in a station calculated as a thumb rule of 15 km per hour.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Activity className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This statistics is daily and periodically monitored for ensuring that locos are not kept unwarrantedly idle and they are put to maximum use.</span>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg lg:p-6 p-3 border border-orange-400/30">
                        <h6 className="font-semibold text-orange-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                          <Calculator className="w-4 h-4 mr-2" />
                          EKM Formula:
                        </h6>
                        <div className="text-center">
                          <div className="lg:text-xl text-lg font-semibold text-white mb-2">
                            EKM = <span className="text-orange-300">Total Engine kilometers earned in a day / Outage</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coach KM per Coach Day Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Coach KM per Coach Day
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Coach KM per coach day - This unit of measure gives an idea of how efficiently the coaching stock is being utilized.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">When same numbers of coaching trains are run with lesser number of coaches, coach kilometer per coach day improves.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <Settings className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">The rake links are reviewed to maximize coach kilometer per coach day.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-600">
                          <Calculator className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This is worked out in lines of WKM per wagon day.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Crew Kilometer Run Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">  
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Crew Kilometer Run
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Crew Kilometer Run is the number of kms worked by a crew. The higher the km, the better is the utilization of the crew.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Zap className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Some short lead movements which are significant for train operations are given benefit of additional kms (pilot kms) in order not to disincentivize the crew engaged in such critical operations.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Capacity Utilization Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <LineChart className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Line Capacity Utilization
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Line Capacity Utilization is the percentage of actual number of trains run in a section as compared to the designed line capacity. It gives an indication on level of congestion.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-400">
                          <Map className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It helps to identify, propose and execute works to improve the designed line capacity.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-500">
                          <AlertCircle className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">As infrastructure works take time and cost for execution, quite often busy sections face with the challenge of accommodating more number of trains as well as ensuring maintenance blocks.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-indigo-600">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">In these sections, any improvement in either of the aspects will lead to improved line capacity utilization.</span>
                      </div>
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h6 className="font-semibold text-indigo-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Improvement Measures:
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                            <span className="text-white">Running long haul trains</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            <span className="text-white">Reducing ineffective block time</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            <span className="text-white">Improving block output</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-white">Integrated blocks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Gross Train Load Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Average Gross Train Load (in tonnes)
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      This figure is the average overall load of a goods train i.e. the freight load plus the weight of the rolling stock.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg lg:p-6 p-3 border border-red-400/30">
                        <h6 className="font-semibold text-red-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                          <Calculator className="w-4 h-4 mr-2" />
                          Average Gross Train Load Formula:
                        </h6>
                        <div className="text-center">
                          <div className="lg:text-xl text-lg font-semibold text-white mb-2">
                            Average Gross Train Load = <span className="text-red-300">GTKM / Total train kms</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <Compass className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">This statistics gives an idea of the load required to be hauled and hence significant in planning for adequate tractive effort.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">It helps determine the most economic or the best for seamless operations.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Statistics Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Additional Statistics & Data Analysis
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                      Many more indices are measured depending on the need to understand the train operations better, thereby contributing to better decision making. These can either be directly collected or derived through various formulae using two or more sets of data.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-400">
                          <Cpu className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">With the implementation of IT in many areas of train running like FOIS, ICMS, TMS, Data logger etc., Indian Railways now has „big data‟.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-500">
                          <Network className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Web reports in required format can be sought from CRIS, New Delhi for deciding on any specific matter.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-600">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span className="text-white lg:text-base text-sm">Analyzing these big data based on traditional indices and improved indices will go a long way in improving the efficiency of train operations.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Asset Utilization Metrics Summary
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Timer className="w-4 h-4 mr-2" />
                      Wagon Turn Round
                    </h5>
                    <p className="text-sm text-gray-200">
                      Time interval between successive loadings (days)
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-indigo-300 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Truck className="w-4 h-4 mr-2" />
                      Wagon KM/Day
                    </h5>
                    <p className="text-sm text-gray-200">
                      Average kilometers moved per wagon per day
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-purple-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Train className="w-4 h-4 mr-2" />
                      Engine KM
                    </h5>
                    <p className="text-sm text-gray-200">
                      Distance traveled by engine per day including shunting
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-indigo-400 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Route className="w-4 h-4 mr-2" />
                      Coach KM/Day
                    </h5>
                    <p className="text-sm text-gray-200">
                      Coach utilization efficiency measure
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-purple-500 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <Users className="w-4 h-4 mr-2" />
                      Crew KM Run
                    </h5>
                    <p className="text-sm text-gray-200">
                      Kilometers worked by crew with pilot km benefits
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <h5 className="font-semibold text-indigo-500 mb-2 flex items-center justify-center text-center flex-col gap-2">
                      <LineChart className="w-4 h-4 mr-2" />
                      Line Capacity Utilization
                    </h5>
                    <p className="text-sm text-gray-200">
                      Percentage of actual vs designed line capacity
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

export default OMPage95