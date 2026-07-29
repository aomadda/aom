"use client"
import React from 'react'

const COA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CONTROL OFFICE APPLICATION
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">(COA)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive system designed to automate and streamline train operations control rooms, 
              ensuring systematic monitoring and fluidity of train movements 24/7.
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="space-y-2">
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">To automate the nerve centre of Train operations i.e. the Control Rooms.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                <span className="text-gray-200 lg:text-lg text-base">To ensure systematic control, monitoring and fluidity of train movements 24*7.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">To capture the train movements Real Time / Near Real Time.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">💡</span>
                <span className="text-gray-200 lg:text-lg text-base">To provide an analytical DSS tool for improving operational efficiency.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-red-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                <span className="text-gray-200 lg:text-lg text-base">To design a challenging cohesive system integrable with a number of applications to effectively utilize the train operations information.</span>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="space-y-2">
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🚀</span>
                <span className="text-gray-200 lg:text-lg text-base">Charting of train running, reporting of unusual events, monitoring line occupancy, caution orders, and any abnormal working.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                <span className="text-gray-200 lg:text-lg text-base">Handing over of train to the adjacent divisions as per its physical movement to maintain continuous flow of information.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                <span className="text-gray-200 lg:text-lg text-base">Provision to the controllers to order trains, view all possible routes, divert or re-route trains, crew, locomotive details, etc.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                <span className="text-gray-200 lg:text-lg text-base">Provision to forecast or extrapolate the running of trains which allows the controller to plan better.</span>
              </div>
              <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                <span className="text-gray-200 lg:text-lg text-base">The system must be able to share all data of train movements, BPC (Break Power Certificate), Caution Order, Train Order, Regulation, Stabling, Yarding, schedule modification, diversions, etc in between respective applications.</span>
              </div>
            </div>
          </div>

          {/* COA Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              COA Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Core Functionality
                </h3>
                <p className="text-gray-200 lg:text-lg text-base">
                  The Control Office Application requires the controllers to enter data related to the train operations as they receive information from the control points or stations. The application charts the running of the train in a section (a portion of the divisional network) and also generates the advance forecast based on various operational parameters.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-1">
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">✦</span>
                    <span className="text-gray-200 lg:text-lg text-base">Ability to forecast or extrapolate train running for better planning</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">✦</span>
                    <span className="text-gray-200 lg:text-lg text-base">Charts can be printed for managerial supervision</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">✦</span>
                    <span className="text-gray-200 lg:text-lg text-base">Structured MIS reports generation</span>
                  </div>
                  <div className="flex items-start group/feature hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform duration-300">✦</span>
                    <span className="text-gray-200 lg:text-lg text-base">Designed for seamless integration with other applications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Services Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Integration Services
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-semibold text-white text-center mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Integrated Applications
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">FOIS</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">ICMS</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">NTES</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">PAM</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">RTIS</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">REMMLOT</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="text-purple-400 mr-3 text-xl">🔗</span>
                    <span className="text-white font-semibold text-lg">CMS</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white text-center mb-6 flex items-center">
                  <span className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Shared Data Elements
                </h3>
                <div className="grid md:grid-cols-2 gap-1">
                  <div className="flex items-start group/data hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-base group-hover/data:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Train BPC, Caution Order, Train Order</span>
                  </div>
                  <div className="flex items-start group/data hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-base group-hover/data:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Regulation, Stabling, Yarding</span>
                  </div>
                  <div className="flex items-start group/data hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-base group-hover/data:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Train schedule modification</span>
                  </div>
                  <div className="flex items-start group/data hover:bg-white/10 rounded-lg p-2 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 lg:text-xl text-base group-hover/data:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Consist and Train Modification (Diversion)</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 backdrop-blur-sm">
                  <p className="text-gray-200 lg:text-lg text-base">
                    <strong className="text-purple-300">Data Flow:</strong> TSR data is sent to COA divisional server and updates in NTES, FOIS and ICMS through CAS server.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="flex items-start group/benefit hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/benefit:scale-110 transition-transform">🎨</span>
                <span className="text-gray-200 lg:text-lg text-base">Removes drudgery of the manual system of drawing control charts with various colour pencils</span>
              </div>
              <div className="flex items-start group/benefit hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/benefit:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">All details of trains running in a section are available which helps to take more informed decisions quickly.</span>
              </div>
              <div className="flex items-start group/benefit hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/benefit:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Quick reference tools such as Blocks, cautions, loco details, crew details, stabled/regulated trains and siding position reduces retrieval time of information.</span>
              </div>
              <div className="flex items-start group/benefit hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/benefit:scale-110 transition-transform">🔔</span>
                <span className="text-gray-200 lg:text-lg text-base">Alerts such as more than stipulated hours on run etc. to help controller in planning. Reduces time taken for shift change.</span>
              </div>
              <div className="flex items-start group/benefit hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/benefit:scale-110 transition-transform">🌱</span>
                <span className="text-gray-200 lg:text-lg text-base">Usage of paper has been reduced considerably thereby taking one step towards green environment.</span>
              </div>
              <div className="flex items-start group/benefit hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover/benefit:scale-110 transition-transform">🚄</span>
                <span className="text-gray-200 lg:text-lg text-base">COA System has made train information available accurately and promptly to the passengers. The National Train Enquiry System (NTES) gets update as soon as the time for train movement is marked by section controller in COA.</span>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Milestones Achieved
            </h2>
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {/* Train Signal Register */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-4 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Train Signal Register</h3>
                <p className="text-blue-200 lg:text-lg text-base mb-6">Comprehensive signal management system</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Active</span>
                </div>
              </div>

              {/* 600+ Locations */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl p-4 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="lg:text-4xl text-2xl font-bold mb-3">600+</h3>
                <p className="text-emerald-200 lg:text-lg text-base mb-6">Locations Covered</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Nationwide</span>
                </div>
              </div>

              {/* All Divisions */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-4 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full lg:w-20 lg:h-20 w-10 h-10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">All Divisions</h3>
                <p className="text-purple-200 text-lg mb-6">Complete coverage across Indian Railways</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">100%</span>
                </div>
              </div>
            </div>

            {/* System Performance */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/20">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-8 flex items-center justify-center">
                <span className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                System Performance
              </h3>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="text-center bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-indigo-400/30">
                  <div className="lg:text-3xl text-2xl font-bold text-white">24/7</div>
                  <div className="lg:text-lg text-base text-gray-300 mt-2">Availability</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-green-400/30">
                  <div className="lg:text-3xl text-2xl font-bold text-white">99.9%</div>
                  <div className="lg:text-lg text-base text-gray-300 mt-2">Uptime</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                  <div className="lg:text-3xl text-2xl font-bold text-white">Real-time</div>
                  <div className="lg:text-lg text-base text-gray-300 mt-2">Data Sync</div>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-purple-400/30">
                  <div className="lg:text-3xl text-2xl font-bold text-white">Secure</div>
                  <div className="lg:text-lg text-base text-gray-300 mt-2">Operations</div>
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

export default COA