'use client'
import React from 'react'
import { 
  Monitor, 
  Target, 
  Package, 
  Settings, 
  BarChart3, 
  Building2,
  Users,
  MoveHorizontal,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const OMPage53 = () => {
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
                <Monitor className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DAILY MONITORING
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Daily Monitoring of Goods Operation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding the key goal posts and operational strategies for effective 
              daily freight operations monitoring and management.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Important Goal Posts */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Important Goal Posts of Daily Freight Operation
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                
                <div className="space-y-6">
                  {/* Loading Goal */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Loading
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      All the on hand empty wagons to be loaded are supplied for loading
                      in time to achieve the maximum loading for the day.
                    </p>
                    <p className="text-sm text-gray-200">
                      Empty wagons taken over early in the day shall also be strived to be loaded. 
                      Efforts are also taken to ensure a demand pipeline for the next day loading.
                    </p>
                  </div>

                  {/* Unloading Goal */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Unloading
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      All on hand inward wagons are placed for unloading in time to
                      achieve the maximum unloading for the day.
                    </p>
                    <p className="text-sm text-gray-200">
                      Inwards taken over early in the day shall also be strived to be unloaded. 
                      Wherever possible back loading shall be planned and achieved.
                    </p>
                  </div>

                  {/* Maximizing Handover */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <MoveHorizontal className="w-5 h-5 mr-2" />
                      Maximizing Handover
                    </h4>
                    <p className="text-sm text-gray-200">
                      Maximizing handing over of outward & surplus empties to other divisions.
                    </p>
                  </div>

                  {/* Locomotive Planning */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Locomotive Planning
                    </h4>
                    <p className="text-sm text-gray-200">
                      Planning appropriate locomotives to clear wagons from terminals after
                      loading/unloading with minimum terminal detentions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Office Requirements */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Control Office Requirements
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  In order to achieve all this control office in the divisions are required to do the
                  following on a continuous basis.
                </p>
                
                <div className="space-y-6">
                  {/* Planning/Forecasting */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Planning/Forecasting
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Forecasting is done based on odd hours wagon holding duly targeting the above
                      objectives. This brings the requirements for achieving the targets as well as the list of
                      trains that can be run with existing resources.
                    </p>
                    <p className="text-sm text-gray-200 mb-4">
                      As divisions exchange such information with each other, the forecast can be updated based on expected trains.
                    </p>
                    <p className="text-sm text-gray-200 mb-4">
                      DyCHC night shift should chalk out a rough plan in consultation with the
                      adjoining DyCHC. Rough plan must be ready in all respects.
                    </p>
                    <p className="text-sm text-gray-200">
                      Chief controller has to finalize the day&apos;s forecast/planning after checking the information, 
                      draft plan, and consultation with CHC of adjoining divisions.
                    </p>
                    <p className="text-sm text-gray-200">
                      Copies of the forecast should be sent to SrDOM/DOM. After scrutinizing the same, 
                      the SrDOM/DOM gives instructions to CHC for final amendments. All HQ/RB instructions need to be complied. 
                      Once finalized, it must be repeated to Central Control.
                    </p>
                  </div>

                  {/* Execution */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Execution
                    </h4>
                    <p className="text-sm text-gray-200">
                      Finalized plan should be communicated to all concerned supervisors viz
                      Deputy Chief Controller, Controller, Yard Master, SSE/Loco Shed, Terminal SMs,
                      crew lobbies, customers. All out efforts are to be taken to achieve forecasted loading
                      & interchange.
                    </p>
                  </div>

                  {/* Review */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Review
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      As many aspects of the freight operations are dynamic, there can be
                      changes to the expected operations. Any failure or deviation would lead to
                      consequent failure in interchange.
                    </p>
                    <p className="text-sm text-gray-200">
                      Hence initial commitments to interchange have to be achieved by planning for alternatives 
                      and making appropriate changes to original plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zonal Head Quarter Role */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Zonal Head Quarter Role
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The Zonal HQ plays a vital role in day-to-day operations of Divisions in two important
                  ways, by giving suitable guidance and assistance.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Users className="w-5 h-5 mr-2" />
                    Inter-Divisional Coordination
                  </h4>
                  <p className="text-sm text-gray-200">
                    Similar actions to the ones taken by divisions are taken by the zonal headquarters
                    for inter divisional co-ordinations and forecasting zonal interchange & loading.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    Information Collection
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Latest Freight operations position of various divisions in the zone is obtained by the
                    HQ central control from divisions through FOIS and other modes of communications.
                  </p>
                  <p className="text-sm text-gray-200">
                    The information includes, stock position, loading and particulars of old outstanding
                    and fresh registration of indents, freight trains running on each section, category
                    wise position of unloading, Yard balances, average speed, interchange position,
                    Locomotive position and Locomotive utilization etc.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Position Review and Analysis
                  </h4>
                  <p className="text-sm text-gray-200">
                    The position is reviewed and analyzed by the PCOM/CFTM/ Dy.COM(Goods),
                    STM(Goods) CEE/Plng. & Operations and CELE. The important position pertaining
                    to various departments is conveyed to the concerned departments as well as the
                    General Manager.
                  </p>
                </div>
              </div>
            </div>

            {/* Railway Board Role */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Railway Board Role
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Inter zonal co-ordination is done by Railway Board on a daily basis. Such close
                  monitoring helps in ensuring that overall best operations for Indian Railways are
                  achieved.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Operational Discipline
                  </h4>
                  <p className="text-sm text-gray-200">
                    Inter zonal interchange commitments and inter divisional interchange
                    commitments are flagged and compliance is sacrosanct. This operational discipline
                    is the driving force for freight operations.
                  </p>
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

export default OMPage53