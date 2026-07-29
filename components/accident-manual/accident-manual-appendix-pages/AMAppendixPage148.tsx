"use client"
import React from 'react'

const AMAppendixPage148 = () => {
  const emergencyContacts = [
    'Railway Control Room',
    'Divisional Railway Manager',
    'Chief Medical Officer',
    'District Collector',
    'Police Control Room',
    'Fire Services',
    'NDRF Teams'
  ]

  const responseProtocols = [
    {
      title: 'Immediate Response',
      steps: [
        'Assess the situation and ensure safety',
        'Activate emergency response teams',
        'Establish incident command center',
        'Secure the accident site'
      ]
    },
    {
      title: 'Communication Protocol',
      steps: [
        'Notify all concerned authorities',
        'Establish communication channels',
        'Coordinate with external agencies',
        'Keep public informed through media'
      ]
    },
    {
      title: 'Resource Management',
      steps: [
        'Deploy medical teams and equipment',
        'Arrange transportation for injured',
        'Coordinate relief operations',
        'Manage logistics and supplies'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">APPENDIX – IV</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              EMERGENCY RESPONSE SYSTEM - COMPREHENSIVE GUIDE
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Emergency Contacts */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-red-300">Emergency Contact Directory</h4>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center lg:gap-3 gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 font-medium">{contact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Protocols */}
              {responseProtocols.map((protocol, protocolIndex) => (
                <div key={protocolIndex} className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-lg rounded-2xl border border-blue-400/20 lg:p-6 p-3">
                  <div className="flex items-center flex-col gap-4 mb-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-xl">{protocolIndex + 2}</span>
                    </div>
                    <div>
                      <h4 className="lg:text-2xl text-xl font-bold text-blue-300">{protocol.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {protocol.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start lg:gap-3 gap-2">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white font-bold text-lg">{String.fromCharCode(97 + stepIndex)}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Action Button */}
              <div className="text-center">
                <button
                  onClick={() => window.open('/accident-manual-pdfs/am-appendix-pages/AMAppendixPage148A.pdf', '_blank')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 font-semibold text-lg"
                >
                  📄 Open Emergency Response Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AMAppendixPage148
