'use client'
import React from 'react'

const SWR = () => {
  const topics = [
    "Station Working Rule diagram",
    "Description of station",
    "General (location)",
    "Block stations, IBH, IBS on either side and their distance and Outlying Sidings",
    "Block section limits on either side of the station on different directions",
    "Gradients, if any",
    "Layout",
    "Running lines, Direction of movement & holding capacity in CSR",
    "Non running lines and their capacity in CSR",
    "Any special feature in the layout",
    "Level crossings",
    "System and means of working",
    "System of signalling and interlocking",
    "Custody of Relay Room key and procedure for its handing over and taking over between Station Master and S&T maintenance staff",
    "Power supply",
    "Telecommunication",
    "System of train working",
    "Duties of train working staff",
    "Train working staff in each shift",
    "Responsibility for ascertaining clearance of the lines and Zones of responsibility",
    "Assurance of staff in the assurance register",
    "Conditions for granting Line Clear",
    "Any special conditions to be observed while receiving or despatching a train",
    "Conditions for taking &apos;off&apos; approach signals",
    "Commissioner of Railway Safety approval",
    "Responsibility of Station Master for restoration of signals to &apos;on&apos;",
    "Simultaneous reception/despatch, crossing and precedence of trains",
    "Complete arrival of trains",
    "Despatch of trains",
    "Trains running through",
    "Working in case of failure",
    "Provision for working of trollies/motor trollies /material lorries",
    "Blocking of lines",
    "Shunting",
    "Abnormal conditions",
    "Total failure of communication",
    "Temporary single line working on double line section",
    "Despatch of train under authority to proceed without Line Clear or to assist the crippled train (T/A.602)",
    "Visibility Test Object",
    "Essential equipment at the station",
    "Fog signalmen nominated to be called in case of fog"
  ]

  const appendices = [
    {
      title: "Appendix 'A'",
      subtitle: "Working of Level Crossing Gates",
      description: "(Interlocked LC gates – to be jointly signed by DSTE, DOM & DEN) (Non-interlocked LC gates – to be jointly signed by DEN & DOM)",
      icon: "🚦"
    },
    {
      title: "Appendix 'B'",
      subtitle: "System of signaling and interlocking and communication arrangements at the station",
      description: "(to be signed by DSTE)",
      icon: "⚡"
    },
    {
      title: "Appendix 'C'",
      subtitle: "Anti Collision Device (Raksha Kavach)",
      description: "(as and when brought into force)",
      icon: "🛡️"
    },
    {
      title: "Appendix 'D'",
      subtitle: "Duties of train passing staff and staff in each shift",
      description: "(to be signed by DOM)",
      icon: "👥"
    },
    {
      title: "Appendix 'E'",
      subtitle: "List of essential equipment provided at the station",
      description: "(to be signed by DOM)",
      icon: "🔧"
    },
    {
      title: "Appendix 'F'",
      subtitle: "Rules for working of DK stations, Halts, IBH, IBS and outlying sidings",
      description: "(to be jointly signed by DOM & DSTE)",
      icon: "🚉"
    },
    {
      title: "Appendix 'G'",
      subtitle: "Rules for working trains in electrified sections",
      description: "(to be jointly signed by Sr.DOM, Sr.DEE (TRD) & Sr.DSTE or DOM, DEE(TRD) & DSTE)",
      icon: "⚡"
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}  
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STATION WORKING RULES
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-cyan-300 mb-4">Appendix - XIV</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to station working rules and procedures for railway operations, 
              ensuring systematic control and monitoring of train movements.
            </p>
          </div>

          {/* Topics Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-purple-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Topics Covered in Station Working Rules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-blue-400/30 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
                > 
                  <div className="flex items-start">
                    <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-full lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold lg:text-sm text-xs">{index + 1}</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed lg:text-lg text-base group-hover:text-white transition-colors duration-300">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appendices Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Essential Appendices
            </h2>
            <p className="text-gray-300 text-center mb-8 lg:text-lg text-base">Comprehensive documentation and procedures for railway operations</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appendices.map((appendix, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 lg:p-6 shadow-lg border border-amber-400/30 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{appendix.icon}</div>
                    <h3 className="text-xl font-bold text-amber-300 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{appendix.title}</h3>
                    <h4 className="text-lg font-semibold text-white mb-2 leading-tight">{appendix.subtitle}</h4>
                    <p className="text-sm text-gray-300 italic">{appendix.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-3 lg:gap-6">
              <div className="flex items-start group/feature hover:bg-white/5 rounded-xl p-1 lg:p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🚦</span>
                <span className="text-gray-200 lg:text-lg text-base">Comprehensive signal management and interlocking systems</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/5 rounded-xl p-1 lg:p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Real-time monitoring and control of train operations</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/5 rounded-xl p-1 lg:p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🛡️</span>
                <span className="text-gray-200 lg:text-lg text-base">Enhanced safety protocols and collision prevention</span> 
              </div>
              <div className="flex items-start group/feature hover:bg-white/5 rounded-xl p-1 lg:p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Clear staff responsibilities and shift management</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/5 rounded-xl p-1 lg:p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🔧</span>
                <span className="text-gray-200 lg:text-lg text-base">Essential equipment management and maintenance</span>
              </div>
              <div className="flex items-start group/feature hover:bg-white/5 rounded-xl p-1 lg:p-6 transition-all duration-300">
                <span className="text-green-400 mr-4 mt-1 text-xl group-hover/feature:scale-110 transition-transform">🚉</span>
                <span className="text-gray-200 lg:text-lg text-base">Specialized rules for different station types and operations</span>
              </div>
            </div>
          </div>

          {/* Implementation Guidelines */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-3 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Implementation Guidelines
            </h2>
            <div className="space-y-8">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 lg:p-8 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex lg:flex-row flex-col gap-3 items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Documentation Requirements
                </h3>
                <div className="grid md:grid-cols-2 lg:gap-6 gap-3">
                  <div className="flex items-start group/req hover:bg-white/10 rounded-lg p-1 lg:p-4 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/req:scale-110 transition-transform duration-300">📋</span>
                    <span className="text-gray-200 lg:text-lg text-base">All appendices must be properly signed by authorized personnel</span>
                  </div>
                  <div className="flex items-start group/req hover:bg-white/10 rounded-lg p-1 lg:p-4 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/req:scale-110 transition-transform duration-300">🔐</span>
                    <span className="text-gray-200 lg:text-lg text-base">Regular updates and maintenance of working rules</span>
                  </div>
                  <div className="flex items-start group/req hover:bg-white/10 rounded-lg p-1 lg:p-4 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/req:scale-110 transition-transform duration-300">📊</span>
                    <span className="text-gray-200 lg:text-lg text-base">Systematic monitoring and reporting procedures</span>
                  </div>
                  <div className="flex items-start group/req hover:bg-white/10 rounded-lg p-1 lg:p-4 transition-all duration-300">
                    <span className="text-purple-400 mr-4 mt-1 text-xl group-hover/req:scale-110 transition-transform duration-300">⚡</span>
                    <span className="text-gray-200 lg:text-lg text-base">Integration with modern railway control systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-5 text-white text-center">
            <h3 className="lg:text-3xl text-2xl font-bold mb-4">Ready to Master Station Working Rules?</h3>
            <p className="lg:text-xl text-base mb-8 opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive study materials and practice tests to excel in your railway examinations.
            </p>
            <button className="bg-white text-blue-600 lg:px-8 lg:py-4 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 lg:text-lg text-base">
              Start Learning Now
            </button>
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

export default SWR






