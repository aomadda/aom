"use client"
import React from 'react'

const EntitlesPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              PRIVILEGE TICKET ORDER ENTITLES
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-purple-300 mb-3">THE HOLDER IRRESPECTIVE OF WHETHER HE BELONGS TO GROUP A, B, C OR D</h2>
            <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines for privilege ticket order entitlements, travel options, and benefits for railway employees across all groups
            </p>
          </div>

          {/* Travel Class Options Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Travel Class Options
            </h2>
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                To travel in the same class as on the privilege pass to which he is entitled as
                mentioned herein before or in a lower class by paying 1/3 of the fare of the
                entitled class or the lower class in which he is travelling, as the case may be.
                First class PTO holder can however travel in AC sleeper class by paying 1/3 of
                the fare of the AC-Sleeper Class.
              </p>
            </div>
          </div>

          {/* Attendant Travel Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Attendant Travel
            </h2>
            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                To carry one attendant in IInd Class /Sleeper Class in the case of First Class
                &apos;A&apos; and First Class Privilege Ticket Order by paying 1/3 of the fare of the IInd
                Class.
              </p>
            </div>
          </div>

          {/* Journey Break Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white text-center mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Journey Break and Distance Restrictions
            </h2>
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Break of journey and distance restriction as applicable in the case of ordinary
                ticket. However, a holder of ticket exchanged for a PTO travelling by mail train
                can break journey enroute without distance restriction.
              </p>
            </div>
          </div>

          {/* Higher Class Travel Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              Higher Class Travel
            </h2>
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Travel in a Class higher than the entitled class on payment of charges for travel
                in the entitled class on payment of charges for travel in the entitled class
                against Privilege Ticket order together with difference between the full fare of
                the class shown in the privilege ticket order and that of the class in which he
                elects to travel.
              </p>
            </div>
          </div>

          {/* Luggage Allowance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Luggage Allowance
            </h2>
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-4 px-3 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Free luggage allowance on the same condition applicable to a holder of an
                ordinary ticket for the same class in which he elects to travel.
              </p>
            </div>
          </div>

          {/* Key Benefits Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Flexible Travel Benefits */}
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🎫</span>
                Flexible Travel Options
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Same class travel entitlement
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  Lower class with reduced fare
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  AC sleeper upgrade option
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-200 mr-2">✓</span>
                  1/3 fare payment benefit
                </li>
              </ul>
            </div>

            {/* Attendant Benefits */}
            <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">👥</span>
                Attendant Travel Facility
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  One attendant allowed
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  IInd Class/Sleeper Class
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  First Class &apos;A&apos; eligibility
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Reduced fare for attendant
                </li>
              </ul>
            </div>

            {/* Journey Benefits */}
            <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl py-4 px-3 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="mr-2">🚂</span>
                Journey Flexibility
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Break journey option
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Mail train flexibility
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  No distance restriction
                </li>
                <li className="flex items-center">
                  <span className="text-pink-200 mr-2">✓</span>
                  Standard luggage allowance
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Flexible travel options with reduced fare payment</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Attendant travel facility for eligible classes</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Journey break options with certain conditions</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Upgrade to higher class with fare difference payment</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Standard luggage allowance as per class</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">Enhanced travel experience for all employee groups</span>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Groups Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-600 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Eligible Employee Groups
            </h2>
            <div className="grid md:grid-cols-4 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-indigo-500 to-indigo-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  A
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Group A</h3>
                <p className="text-gray-200 text-sm">Senior Officers</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-purple-500 to-purple-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  B
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Group B</h3>
                <p className="text-gray-200 text-sm">Gazetted Officers</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-pink-500 to-pink-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-pink-500/50 transition-shadow">
                  C
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Group C</h3>
                <p className="text-gray-200 text-sm">Non-Gazetted Staff</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-linear-to-br from-cyan-500 to-cyan-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transition-shadow">
                  D
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Group D</h3>
                <p className="text-gray-200 text-sm">Support Staff</p>
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

export default EntitlesPass