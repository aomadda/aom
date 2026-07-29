'use client'
import React from 'react'
import { 
  Clipboard,
  Building,
  TrendingUp,
  Target,
  Settings,
  Heart,
  Zap,
  BarChart3,
  DollarSign,
  Briefcase,
  Handshake,
  Globe,
  Network,
  Route,
  Construction,
} from 'lucide-react'

const OMPage105 = () => {
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
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Chapter – IX
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-purple-300 mb-4">Traffic Planning</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Strategic planning for railway network expansion, capacity improvement, and infrastructure development 
              to meet growing transportation demands in India&apos;s expanding economy.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Globe className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Growing Economy & Transportation Demand
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    In a growing economy like ours&apos;, the need for transportation keeps on increasing. Without a commensurate increase in capacity / efficiency in transportation, this growing demand leads to congestion and resultant strain on the existing assets.
                  </p>
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <p className="text-white text-sm">
                      <strong>Solution:</strong> In order to avoid such a scenario, Network expansion and capacity improvement works are planned and executed by Railways.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Planning Critical Role Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Critical Role of Traffic Planning
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Traffic planning is critical in deciding the scope and requirement of such works. It includes planning for new lines (Plan Head 11), doubling/tripling/quadrupling of sections (Plan Head 15) and works that remove the current constraints in the yards, terminals and sections improve the capacity and efficiency of train operations that are called as Traffic Facility Works (Plan Head 16).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10 text-center">
                      <div className="bg-green-500/20 p-2 rounded-full inline-block mb-2">
                        <Route className="w-5 h-5 text-green-400" />
                      </div>
                      <h4 className="text-sm font-semibold text-green-300 mb-1">Plan Head 11</h4>
                      <p className="text-xs text-gray-300">New Lines</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <div className="bg-emerald-500/20 p-2 rounded-full inline-block mb-2">
                        <Network className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h4 className="text-sm font-semibold text-emerald-300 mb-1">Plan Head 15</h4>
                      <p className="text-xs text-gray-300">Doubling/Tripling/Quadrupling</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <div className="bg-teal-500/20 p-2 rounded-full inline-block mb-2">
                        <Settings className="w-5 h-5 text-teal-400" />
                      </div>
                      <h4 className="text-sm font-semibold text-teal-300 mb-1">Plan Head 16</h4>
                      <p className="text-xs text-gray-300">Traffic Facility Works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Sidings Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Briefcase className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Private Sidings & Terminals
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Apart from these works that form part of the capital expenditure budget of Indian Railways, private sidings/terminals are also planned and approved by operating department. These works are executed by private entities themselves or by depositing money with Railways for execution.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        Private Execution
                      </h4>
                      <p className="text-xs text-gray-300">Works executed by private entities themselves</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-pink-300 mb-2 flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Railway Execution
                      </h4>
                      <p className="text-xs text-gray-300">Works executed by Railways with deposited funds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Projects Works Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Construction className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                New Projects / Works
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-6">
                  
                  {/* General Requirements */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-orange-500/20 p-2 rounded-full mr-3">
                        <Clipboard className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-orange-300">General Requirements</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Any new work required to be executed in the Railway requires specific sanction of competent authority with associate finance concurrence as per Schedule of Powers and corresponding earmarking/availability of funds. Depending upon the nature of the work, they can be processed under different sources of funds.
                    </p>
                  </div>

                  {/* Railway Revenue Expenditure */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-red-500/20 p-2 rounded-full mr-3">
                        <DollarSign className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-red-300">Railway Revenue Expenditure</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Projects/works of very urgent nature/safety related works and works having lesser financial implications can be processed for sanction under Railway revenue expenditure.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-red-300 mb-2">Eligible Works:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Very urgent nature works</li>
                        <li>• Safety related works</li>
                        <li>• Works with lesser financial implications</li>
                      </ul>
                    </div>
                  </div>

                  {/* CSR Fund Projects */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                        <Heart className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-yellow-300">CSR Fund Projects</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Projects/works related to passenger amenities which are having lesser financial implications can be processed for sanctions through Corporate Social Responsibility (CSR) fund duly following extant policy guidelines.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-yellow-300 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Passenger amenities related works</li>
                        <li>• Lesser financial implications</li>
                        <li>• Following extant policy guidelines</li>
                      </ul>
                    </div>
                  </div>

                  {/* Siding Related Works */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                        <Route className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-300">Siding Related Works</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Projects/works which are going to remove the bottlenecks at the serving station and enhance the mobility and throughput due to the additional traffic offered by the siding (siding related works viz., doubling of the lead line to the siding, Y connectivity, additional loop line etc.,) can be processed based on the lumpsum amount deposited by the siding authorities with proper justification, associate finance concurrence and sanction of the competent authority as per the Schedule of Powers (SOP) or as per extant policy guidelines.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-blue-300 mb-2">Work Types:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Doubling of lead line to siding</li>
                          <li>• Y connectivity</li>
                          <li>• Additional loop line</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-blue-300 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Lumpsum amount deposit</li>
                          <li>• Proper justification</li>
                          <li>• Finance concurrence</li>
                          <li>• Competent authority sanction</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Works Programme IRPSM */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
                        <BarChart3 className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-indigo-300">Works Programme IRPSM</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      All the remaining projects/works having higher financial implications can be processed through Works Programme in the Indian Railway Projects and Sanctions Management (IRPSM) system.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-indigo-300 mb-2">System:</h4>
                      <p className="text-sm text-gray-300">Indian Railway Projects and Sanctions Management (IRPSM) system</p>
                    </div>
                  </div>

                  {/* Public Private Partnership */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3">
                        <Handshake className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-300">Public Private Partnership (PPP)</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Some projects/works which are of huge financial implications which have long term benefits for the private party and also going to decongest the existing Railway lines and increase the mobility of the trains for the additional traffic offered can be processed in Public Private Partnership (PPP) as per the Memorandum of Understanding (MOU) signed at the Apex level of the respective organizations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-green-300 mb-2">Criteria:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Huge financial implications</li>
                          <li>• Long term benefits for private party</li>
                          <li>• Decongest existing Railway lines</li>
                          <li>• Increase train mobility</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-green-300 mb-2">Process:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• MOU at Apex level</li>
                          <li>• Respective organizations</li>
                          <li>• PPP framework</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Funding Sources Summary
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-red-500/20 p-3 rounded-full inline-block mb-3">
                      <DollarSign className="w-6 h-6 text-red-400" />
                    </div>
                    <h5 className="font-semibold text-red-300 mb-2">Railway Revenue</h5>
                    <p className="text-sm text-gray-200">Urgent & safety works with lesser financial implications</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-yellow-500/20 p-3 rounded-full inline-block mb-3">
                      <Heart className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h5 className="font-semibold text-yellow-300 mb-2">CSR Funds</h5>
                    <p className="text-sm text-gray-200">Passenger amenities with lesser financial implications</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-indigo-500/20 p-3 rounded-full inline-block mb-3">
                      <BarChart3 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h5 className="font-semibold text-indigo-300 mb-2">IRPSM System</h5>
                    <p className="text-sm text-gray-200">Works with higher financial implications</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-green-500/20 p-3 rounded-full inline-block mb-3">
                      <Handshake className="w-6 h-6 text-green-400" />
                    </div>
                    <h5 className="font-semibold text-green-300 mb-2">PPP Model</h5>
                    <p className="text-sm text-gray-200">Huge financial implications with long-term benefits</p>
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

export default OMPage105