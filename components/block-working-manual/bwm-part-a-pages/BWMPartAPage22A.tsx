"use client"
import React from 'react'

const BWMPartAPage22A = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4"> 3.10 &apos;Is line clear&apos; - when to be asked</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <ul className="space-y-5 list-none text-gray-200 lg:text-lg text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  {/* ⏰ clock icon */}
                  <span className="mt-1 text-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"></path>
                    </svg>
                  </span>
                  <span>
                    <strong>At train originating stations:</strong> &apos;Is line clear&apos; should be asked
                    <span className="text-blue-300 font-semibold"> five minutes before </span>
                    the booked departure time of <strong>passenger carrying trains</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {/* 🚂 goods icon */}
                  <span className="mt-1 text-green-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="8" width="18" height="8" rx="3" strokeWidth="2"></rect>
                      <circle cx="7.5" cy="18" r="1.5" />
                      <circle cx="16.5" cy="18" r="1.5" />
                    </svg>
                  </span>
                  <span>
                    <strong>For goods trains:</strong> &apos;Is line clear&apos; shall be asked when the train is <span className="text-green-300 font-semibold">formed and ready to start</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {/* 🛤️ station icon */}
                  <span className="mt-1 text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="5" y="12" width="14" height="6" rx="2" strokeWidth="2"></rect>
                      <rect x="7" y="6" width="10" height="6" rx="2" strokeWidth="2"></rect>
                    </svg>
                  </span>
                  <span>
                    <strong>At intermediate stations, for all stopping trains (halt &lt; 5 minutes):</strong>
                    &apos;Is line clear&apos; shall be asked <span className="text-indigo-300 font-semibold">when the train is sighted</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  {/* ⏳ time icon */}
                  <span className="mt-1 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path>
                      <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                    </svg>
                  </span>
                  <span>
                    <strong>For trains booked to pass through the station:</strong>
                    &apos;Is line clear&apos; shall be asked 
                    <span className="text-purple-300 font-semibold"> seven minutes before </span>
                    the train is due to pass (from the time &apos;Train entering block section&apos; signal is received), or 
                    <span className="text-purple-300 font-semibold">immediately</span> after signal is received if running time is less than seven minutes.
                  </span>
                </li>
              </ul>
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

export default BWMPartAPage22A