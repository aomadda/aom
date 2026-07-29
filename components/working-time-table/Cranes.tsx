"use client"
import React from 'react'

const Cranes = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Status of 140T BD Cranes, ARTs, ARMVs & RARVs over SCR
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Accident Relief Trains Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Accident Relief Trains (ARTs)
            </h2>
            
            <div className="space-y-4 mb-6">
              {/* ART Items */}
              {[
                { num: '01', station: 'SC', description: 'SC "A" Class - Cowans Sheldon New Design-140T' },
                { num: '02', station: 'SC', description: '"B" Class (SPART)' },
                { num: '03', station: 'KZJ', description: '"A" Class - Cowans Sheldon Old Design-140T' },
                { num: '04', station: 'KZJ', description: '"B" Class (SPART)' },
                { num: '05', station: 'BPA', description: '"B" Class' },
                { num: '06', station: 'HYB', description: 'NZB "B" Class' },
                { num: '07', station: 'BZA', description: 'BZA "B" Class (SPART)' },
                { num: '08', station: 'BZA', description: '"A" Class - Cowans Sheldon Old Design-140T' },
                { num: '09', station: 'RJY', description: '"B" Class' },
                { num: '10', station: 'BTTR', description: '"B" Class' },
                { num: '11', station: 'GTL', description: 'GTL "B" Class' },
                { num: '12', station: 'GY', description: '"A" Class - Cowans Sheldon Old Design-140T' },
                { num: '13', station: 'RU', description: '"B" Class' },
                { num: '14', station: 'DMM', description: '"B" Class' },
                { num: '15', station: 'GNT', description: 'GNT "B" Class' },
                { num: '16', station: 'NED', description: 'PAU "A" Class - Gottwald New Design-140T' },
              ].map((item, index) => {
                const getBadgeGradient = (idx: number) => {
                  const gradients = [
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                  ]
                  return gradients[idx % gradients.length]
                }

                const getGradientColor = () => {
                  return 'from-green-500/20 to-emerald-500/20'
                }

                const getBorderColor = () => {
                  return 'border-green-400/30'
                }

                return (
                  <div key={item.num} className={`bg-linear-to-br ${getGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                    <div className="flex items-center justify-center flex-col gap-4">
                      <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                        {item.num}
                      </div>
                      <div className="flex-1 w-full pt-1">
                        <p className="text-gray-200 leading-relaxed text-center">
                          <strong className="text-white">{item.station}</strong> - {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-2">
                <strong>&quot;A&quot; Class ART</strong> – 140T DHBD Crane + HRE Set.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                <strong>&quot;B&quot; Class ART</strong> - HRE Set.
              </p>
            </div>
          </div>

          {/* 140-T DHBD Cranes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              140-T DHBD Cranes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30">
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Station:</strong> SC, KZJ, BZA, GY, PAU
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Division:</strong> SC, SC, BZA, GTL, NED
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Type of ART:</strong> &quot;A&quot; Class, &quot;A&quot; Class, &quot;A&quot; Class, &quot;A&quot; Class, &quot;A&quot; Class
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Capacity of the Crane:</strong> 140 Ton, 140 Ton, 140 Ton, 140 Ton, 140 Ton
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Make of the Crane:</strong> Cowans Sheldon, Cowans Sheldon, Cowans Sheldon, Cowans Sheldon, Gottwald
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Design (Old/New):</strong> New, Old, Old, Old, New
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Year of Manufacturing of Crane:</strong> 2001, 1989, 1990, 1990, 2009
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Return date of POH/MLR:</strong> 2029, 2025, 2026, 2026, 2025
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                  <strong>Capacity to run at Speed (kmph):</strong> 100, 75, 75, 75, 100
                </p>
              </div>
            </div>
          </div>

          {/* ARMVs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Accident Relief Medical Vans (ARMVs)
            </h2>
            
            <div className="space-y-4">
              {/* ARMVs Items */}
              {[
                { num: '01', station: 'SC', description: 'SC - SPARMV' },
                { num: '02', station: 'KZJ', description: 'HS-SPARMV' },
                { num: '03', station: 'HYB', description: 'NZB - SPARMV' },
                { num: '04', station: 'BZA', description: 'BZA - HS-SPARMV' },
                { num: '05', station: 'RJY', description: 'SPARMV' },
                { num: '06', station: 'BTTR', description: 'SPARMV' },
                { num: '07', station: 'GTL', description: 'GTL - HS-SPARMV' },
                { num: '08', station: 'RU', description: 'Conventional' },
                { num: '09', station: 'DMM', description: 'Conventional' },
                { num: '10', station: 'GNT', description: 'GNT - HS-SPARMV' },
                { num: '11', station: 'NED', description: 'PAU - HS-SPARMV' },
              ].map((item, index) => {
                const getBadgeGradient = (idx: number) => {
                  const gradients = [
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                  ]
                  return gradients[idx % gradients.length]
                }

                const getGradientColor = () => {
                  return 'from-blue-500/20 to-cyan-500/20'
                }

                const getBorderColor = () => {
                  return 'border-blue-400/30'
                }

                return (
                  <div key={item.num} className={`bg-linear-to-br ${getGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                    <div className="flex items-center justify-center flex-col gap-4">
                      <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                        {item.num}
                      </div>
                      <div className="flex-1 w-full pt-1">
                        <p className="text-gray-200 leading-relaxed text-center">
                          <strong className="text-white">{item.station}</strong> - {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RARVs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              List of Road Accident Restoration Vehicles (RARVs)
            </h2>
            
            <div className="space-y-4">
              {/* RARVs Items */}
              {[
                { num: '01', station: 'SC', description: 'SC' },
                { num: '02', station: 'BDCR', description: '' },
                { num: '03', station: 'HYB', description: 'KCG' },
                { num: '04', station: 'BZA', description: 'BZA' },
                { num: '05', station: 'GTL', description: 'GTL' },
                { num: '06', station: 'GNT', description: 'GNT' },
                { num: '07', station: 'NED', description: 'PAU' },
              ].map((item, index) => {
                const getBadgeGradient = (idx: number) => {
                  const gradients = [
                    'from-purple-400 via-pink-500 to-rose-500',
                    'from-purple-400 via-pink-500 to-rose-500',
                    'from-purple-400 via-pink-500 to-rose-500',
                    'from-purple-400 via-pink-500 to-rose-500',
                    'from-purple-400 via-pink-500 to-rose-500',
                    'from-purple-400 via-pink-500 to-rose-500',
                    'from-purple-400 via-pink-500 to-rose-500',
                  ]
                  return gradients[idx % gradients.length]
                }

                const getGradientColor = () => {
                  return 'from-purple-500/20 to-pink-500/20'
                }

                const getBorderColor = () => {
                  return 'border-purple-400/30'
                }

                return (
                  <div key={item.num} className={`bg-linear-to-br ${getGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                    <div className="flex items-center justify-center flex-col gap-4">
                      <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                        {item.num}
                      </div>
                      <div className="flex-1 w-full pt-1">
                        <p className="text-gray-200 leading-relaxed text-center">
                          <strong className="text-white">{item.station}</strong>{item.description ? ` - ${item.description}` : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
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

export default Cranes