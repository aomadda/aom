'use client'
import React from 'react'
import { 
  Calendar, 
  Settings,
  FileText,
  ClipboardList,
  Target,
  TrendingUp,
  Users,
  Network,
  CheckCircle,
  CalendarDays,
  CalendarRange,
  Wrench,
} from 'lucide-react'

const OMPage78 = () => {
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
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              ROLLING BLOCK PROGRAMME
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Multi-Asset Maintenance & Planning System</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to rolling block programme implementation, 26-week planning cycles, 
              and integrated block coordination for efficient railway maintenance operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Rolling Block Programme Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Programme Objectives
                    </h5>
                    <ul className="space-y-3 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Target className="w-5 h-5" />
                        </span>
                        <span>In order to streamline the activity of planning, executing and reviewing the activities of traffic blocks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <ClipboardList className="w-5 h-5" />
                        </span>
                        <span>Guidelines were issued by the Railway Board in 2017-18 to implement the system of multi asset maintenance through formulation of annual traffic block plans.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Calendar className="w-5 h-5" />
                        </span>
                        <span>In June 2023, Railway board has given guidelines and instructions to formulate a 26 week rolling block programme by the divisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-700">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span>This should be continuously extended after each week, so that all the departments are aware of the blocks in advance for the next 26 weeks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-800">
                          <CalendarDays className="w-5 h-5" />
                        </span>
                        <span>After formulating 26 week programme, a 12 days programme for integrated blocks to be finalized at the divisional level.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-900">
                          <Users className="w-5 h-5" />
                        </span>
                        <span>This should be circulated among the various departments involved in safety.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-950">
                          <Network className="w-5 h-5" />
                        </span>
                        <span>The basic idea behind advance planning is to increase information flow across departments.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Three-Step Planning Process Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Three-Step Planning Process
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 relative">
                    <span className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg z-10">1</span>
                    <h5 className="font-semibold text-green-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <ClipboardList className="w-5 h-5 mr-2" />
                      Listing & Identifying Activities
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-400">
                          <ClipboardList className="w-4 h-4" />
                        </span>
                        <span>The first step is to list and identify all activities to be carried out in the next 26 weeks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-500">
                          <Wrench className="w-4 h-4" />
                        </span>
                        <span>This includes both renewals and maintenance activities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-green-600">
                          <CalendarRange className="w-4 h-4" />
                        </span>
                        <span>Comprehensive 26-week planning ensures all maintenance needs are identified.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 relative">
                    <span className="absolute top-2 right-2 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg z-10">2</span>
                    <h5 className="font-semibold text-emerald-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Network className="w-5 h-5 mr-2" />
                      Sequencing & Coordination
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-400">
                          <Network className="w-4 h-4" />
                        </span>
                        <span>The second step is sequencing the activities for the next 12 days.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-500">
                          <Users className="w-4 h-4" />
                        </span>
                        <span>Sequence activities to maximize coordination among all stakeholders.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-600">
                          <Calendar className="w-4 h-4" />
                        </span>
                        <span>12-day detailed planning ensures smooth execution and minimal disruption.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 relative">
                    <span className="absolute top-2 right-2 bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg z-10">3</span>
                    <h5 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Supplementary Activities Schedule
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-teal-400">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                        <span>The third step is to create a schedule of supplementary activities required for plan success.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-teal-500">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span>These activities support the main maintenance tasks and ensure successful execution.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-teal-600">
                          <Target className="w-4 h-4" />
                        </span>
                        <span>Comprehensive planning includes all necessary supporting activities for plan success.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Benefits of Rolling Block Programme
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-purple-300 mb-2 flex items-center flex-col gap-2 text-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Advance Planning
                      </h5>
                      <p className="text-sm text-gray-200">
                        26-week rolling programme provides long-term visibility and planning horizon.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-pink-300 mb-2 flex items-center flex-col gap-2 text-center">
                        <Users className="w-4 h-4 mr-2" />
                        Department Coordination
                      </h5>
                      <p className="text-sm text-gray-200">
                        All departments are aware of blocks in advance, improving coordination.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-purple-400 mb-2 flex items-center flex-col gap-2 text-center">
                        <Network className="w-4 h-4 mr-2" />
                        Information Flow
                      </h5>
                      <p className="text-sm text-gray-200">
                        Increased information flow across departments enhances operational efficiency.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-pink-400 mb-2 flex items-center flex-col gap-2 text-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Integrated Approach
                      </h5>
                      <p className="text-sm text-gray-200">
                        12-day integrated block programme ensures maximum stakeholder coordination.
                      </p>
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

export default OMPage78