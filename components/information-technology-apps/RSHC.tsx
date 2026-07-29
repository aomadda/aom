"use client"
import React from 'react'

const RSHC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-red-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RPF SECURITY HELPLINE 182
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">(RSHC)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive CRM tool for handling distressed passenger calls and ensuring early resolution with integrated security support
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-2">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">To build a CRM tool for handling Distressed Passengers Calls and to ensure their early resolution.</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚨</span>
                  <span className="text-gray-200 lg:text-lg text-base">Provision to alert nearby RPF personnel to immediately attend the Distressed Passengers.</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">Provision to facilitate desired help to passengers on board or at forthcoming stations.</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">Provision to have an outgoing conference call with the complainant to further assist him/her till complaint resolution.</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">A challenging task of establishing a Passenger Helpline CRM tool with a full proof end to end distress handling mechanism.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📝</span>
                  <span className="text-gray-200 lg:text-lg text-base">To facilitate The Call Center Executive to record minimal necessary details obtained from distressed passenger.</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔗</span>
                  <span className="text-gray-200 lg:text-lg text-base">Seamless Integration with PRS and NTES Systems to obtain passenger details and train running details automatically in the event of distress.</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Capability to transfer the incident details to concerned RPF staff and the RPF escorting party for early resolution of the problem.</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">Facility to have an outgoing conference call with the complainant to help him / her.</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">An Automatic Call Distribution (ACD) supported and integrated system to ensure lodging, reporting, monitoring, tracking and resolution of travellers security complaints.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Passenger Complaint Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              Passenger Complaint Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">When a distressed passenger initiates a call it lands at RPF Divisional control room closest to the person</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                  <span className="text-gray-200 lg:text-lg text-base">A Ticket is generated after the call is attended recording the necessary details</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 lg:text-lg text-base">SMS for ticket generation is sent to the complainant along with unique ticket ID</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Conversation between the complainant and the Call Centre Representative is recorded and available for reference</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📤</span>
                  <span className="text-gray-200 lg:text-lg text-base">Registered ticket is forwarded to the post personnel</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">If the train is running in another division or zone, ticket can be forwarded to the concerned Division directly</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👮</span>
                  <span className="text-gray-200 lg:text-lg text-base">Post, on receiving the ticket, assigns the same to one of their field officers</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">✅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Once the issue is addressed, divisional control room is informed about the action taken who will contact the passenger to confirm if his/her issue has been resolved</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔒</span>
                  <span className="text-gray-200 lg:text-lg text-base">Ticket is closed or re-assigned accordingly</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">Facility of conference calling enables one to one communication among division, complainant and post officer in-charge</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 lg:text-lg text-base">SMS is sent to complainant on ticket (case) closure</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 lg:text-lg text-base">In case ticket is handed over to GRP, provision is there to provide concerned contact person&apos;s details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integration with PRS, NTES Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Integration with PRS, NTES
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 lg:text-lg text-base">Integration has been provided with the Passenger Reservation System and National Train Enquiry System</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 lg:text-lg text-base">If complainant provides PNR details, system fetches travelling passenger details from Passenger Reservation System</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 lg:text-lg text-base">If complainant provides train number, travel date and boarding station, onward journey can be fetched using National Train Enquiry System</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 lg:text-lg text-base">This facilitates providing help at the forthcoming stations also</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Support System Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Decision Support System (DSS)
            </h2>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">The system provides a dashboard for a snapshot view of the number of complaints received and attended</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">Monitoring and analytic purposes are served through comprehensive reports</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-gray-200 lg:text-lg text-base">Comprehensive reports have been provided to facilitate day to day working of the RPF personnel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alerting RPF Escort Party Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM4 11h6v-2H4v2zM10 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM10 11h6v-2h-6v2z" />
                </svg>
              </span>
              Alerting RPF Escort Party
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚨</span>
                  <span className="text-gray-200 lg:text-lg text-base">The system internally transfers the incident details to concerned RPF staff and the RPF escorting party</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Early resolution of the problem is facilitated</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-gray-200 lg:text-lg text-base">Facility to have an outgoing conference call with the complainant to help him</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Option to listen to the call recordings at a later point of time</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 lg:text-lg text-base">An SMS is also sent to the complainant at the time of ticket closure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-1 mb-12">
            {/* Monitoring Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              
              <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-600 to-red-700 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                Monitoring
              </h3>
              <p className="text-gray-200 lg:text-lg text-base">Easy monitoring of call Centre performance. Passenger can check their registered Ticket status by calling 182 from any location.</p>
            </div>

            {/* Reporting Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            
              <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-600 to-orange-700 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Reporting
              </h3>
              <p className="text-gray-200 lg:text-lg text-base">Comprehensive reports provided to facilitate day to day working like Daily Summary Report, tickets generated in a day. Caller report for the number of calls received from a particular number of Ticket report details.</p>
            </div>

            {/* Analysis Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              
              <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-600 to-red-700 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                Analysis
              </h3>
              <p className="text-gray-200 lg:text-lg text-base">Comprehensive dashboard has been made available to provide at a glance snapshot view of number of complaints received and attended. It also provides statistics related to Total, new and pending complaints including the specific number of complaints which are pending at various levels for action.</p>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-red-500 to-red-600 lg:text-5xl text-3xl font-bold p-8 rounded-full lg:w-40 lg:h-40 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-red-500/50 transition-shadow">
                  72
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Divisions Integrated</h3>
                <p className="text-gray-200 lg:text-lg text-base">With ACD System</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 lg:text-5xl text-3xl font-bold p-8 rounded-full lg:w-40 lg:h-40 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/50 transition-shadow">
                  10K+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Daily Calls</h3>
                <p className="text-gray-200 text-lg">Average calls received daily</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-red-600 to-red-700 lg:text-5xl text-3xl font-bold p-8 rounded-full lg:w-40 lg:h-40 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-red-600/50 transition-shadow">
                  2K+
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">Security Calls</h3>
                <p className="text-gray-200 text-lg">Average security related calls monthly</p>
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

export default RSHC