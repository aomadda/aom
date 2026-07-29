"use client"
import React from 'react'

const TimeTabling = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TIME TABLING
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to train scheduling, time table management, and operational planning for Indian Railways.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                  The coaching train services are time tabled to serve the passengers. The arrival and departure times of the trains for all the stations through which it runs is published once in a year in the form of a time table.
                </p>
              </div>
            </div>
          </div>

          {/* Factors Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white text-center mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Factors for Scheduling Passenger Trains
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Passenger Needs */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Passenger&apos;s Needs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Convenient departure and arrivals at station based on types of service offered</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Speed and reasonable transit time</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Appropriate halt for meals/breakfast</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Sufficient time for entraining and detraining of passengers</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Requirements of short/medium/long distance passengers need to be balanced</span>
                  </div>
                </div>
              </div>

              {/* Service Requirements */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Service Requirements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Maintenance slot for primary, secondary and OEM</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Platform availability</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Coach Watering facility</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Catering for long distance trains</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-emerald-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-200">Fueling if diesel loco planned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Time Tables */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Types of Time Tables
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Public Time Table */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Public Time Table (PTT)
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Provides arrival and departure timings of train services at stations having passenger stoppages. Contains fare-tables, reservation rules, and accommodation details. Published Zonal Railway wise.
                </p>
              </div>

              {/* Suburban Time Tables */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Suburban Time Tables
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Pocket sized time tables containing detailed timings of all suburban services and other passenger services running over suburban sections.
                </p>
              </div>

              {/* Sheet Time Tables */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Sheet Time Tables
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Tabulated schedules of passenger carrying trains displayed at platforms and waiting halls on large sheets of papers.
                </p>
              </div>

              {/* Working Time Tables */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Working Time Tables (WTT)
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Issued separately for each division for Railway staff guidance. Includes arrival/departure timings, maintenance allowances, and sectional information.
                </p>
              </div>

              {/* Military Time Table */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  Military Time Table
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  For movement of troops and military specials. Framed annually with Joint Director, Military (MILRAIL). Strictly confidential and for official use only.
                </p>
              </div>
            </div>
          </div>

          {/* Revision Process */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              Revision of Time Table
            </h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                Based on data of tickets sold, representations from DRUCC, local leaders, passenger association, etc., divisions formulate proposals like new trains, additional services, extension of trains, augmentation of coaches, provision & elimination of halts, revision of timings and cancellation / diversion of trains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3 text-center">Proposal Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">1.</span>
                    <span className="text-gray-200">Divisions formulate proposals with probable timings</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">2.</span>
                    <span className="text-gray-200">Proposals reviewed and consolidated in zonal headquarters</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">3.</span>
                    <span className="text-gray-200">Discussed in Inter Railway Time Table Co-ordination Committee</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">4.</span>
                    <span className="text-gray-200">Changes approved in budget are implemented in new time table</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3 text-center">Timeline for Revision</h3>
                <div className="space-y-3">
                  <div className="flex items-start  group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">Sep</span>
                    <span className="text-gray-200">Division proposals finalized</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">Oct</span>
                    <span className="text-gray-200">Minutes sent to CPTM</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">Nov</span>
                    <span className="text-gray-200">CPTM&apos;s meetings with officials</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">Dec</span>
                    <span className="text-gray-200">CPTM&apos;s meeting with Sr. DOMs</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">Feb/Mar</span>
                    <span className="text-gray-200">Inter Railway Time Table committee meeting</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">May</span>
                    <span className="text-gray-200">Orders to print Time Table</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-blue-400 mr-3 text-lg group-hover:scale-110 transition-transform">Jun</span>
                    <span className="text-gray-200">Publishing time table to public</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Temporary Changes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl text-center font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Temporary Changes in Time Table
            </h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                During unusual incidents or for carrying out mega blocks / new works, temporary changes are done to coaching train services duly giving advance information to the public when possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Diversion */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3 text-center">
                  Diversion
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  A passenger carrying train may be diverted to another route due to serious accidents or floods or any obstruction causing dislocation of traffic and blockade of line, under advice to all concerned.
                </p>
              </div>

              {/* Cancellation */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3 text-center">
                  Cancellation
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  A passenger carrying train may be cancelled fully or partially due to serious accident/dislocation or abnormal delay in running. This should be done as a last resort only as it causes inconvenience to many passengers as well as results in loss of earnings.
                </p>
              </div>
            </div>
          </div>

          {/* Duplication */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl text-center font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2H8z" />
                </svg>
              </span>
              Duplication of Passenger Carrying Trains
            </h2>
            
            <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-6">
                A passenger carrying train may be duplicated, if the original train is either stranded due to accidents or floods or breaches or running so late as would cause serious inconvenience to passengers. The duplicate train starts at an intermediate station and follows the path of the original train so that passengers in those stations can board the duplicate train.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                In order to take care of very high demands for a train reflected by long waitlists, clone trains having similar origin and destination and stoppages are also run during peak seasons.
              </p>
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

export default TimeTabling