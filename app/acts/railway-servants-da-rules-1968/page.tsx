"use client"
import React from 'react'
import ListOfRules from '@/components/railway-servants-da-rules-1968/ListOfRules'
import Link from 'next/link'

const RailwayServantsDARules1968 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY SERVANTS (DISCIPLINE AND APPEAL) RULES 1968
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The Railway Servants (Discipline and Appeal) Rules, 1968, are a set of regulations that govern disciplinary proceedings and appeals for railway employees in India. Established under the authority of Article 309 of the Constitution of India, these rules aim to maintain discipline and efficiency within the railway service by providing a structured framework for addressing employee misconduct. They ensure that disciplinary actions are fair, transparent, and aligned with the principles of natural justice. Below is a comprehensive overview of the rules, covering key aspects such as suspension, penalties, appeals, and revisions.
            </p>
          </div>

          

          {/* Structure Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Parts */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">📚</span>
                Parts
              </h3>
              <div className="text-center">
                <div className="bg-white/20 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="lg:text-3xl text-2xl font-bold">7</span>
                </div>
                <p className="text-blue-200 lg:text-lg text-base">Comprehensive parts covering all aspects of disciplinary procedures</p>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">⚖️</span>
                Rules
              </h3>
              <div className="text-center">
                <div className="bg-white/20 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="lg:text-3xl text-2xl font-bold">31</span>
                </div>
                <p className="text-indigo-200 lg:text-lg text-base">Detailed rules governing disciplinary actions and appeals</p>
              </div>
            </div>

            {/* Schedules */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-6 px-4 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3">📋</span>
                Schedules
              </h3>
              <div className="text-center">
                <div className="bg-white/20 rounded-full lg:w-24 lg:h-24 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="lg:text-3xl text-2xl font-bold">3</span>
                </div>
                <p className="text-purple-200 lg:text-lg text-base">Supporting schedules with detailed authorities and procedures</p>
              </div>
            </div>
          </div>

          {/* List of Rules Component */}
          <ListOfRules />

          {/* Download PDF Section */}
          <div className="mt-16 mb-8">
            <div className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shadow-2xl p-8 text-white border border-emerald-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="lg:text-3xl text-2xl font-bold mb-4 bg-linear-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                RAILWAY SERVANTS (DISCIPLINE AND APPEAL) RULES 1968
                </h3>
                <p className="lg:text-lg text-base text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get the complete Railway Servants (Discipline and Appeal) Rules, 1968 document in PDF format for offline reference and detailed study.
                </p>
                <Link 
                  href="/railway-servants-da-rules-1968/DARULESACT1968.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold lg:text-lg text-base rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                  
                </Link>
                
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

export default RailwayServantsDARules1968