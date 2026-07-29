"use client"
import React from 'react'

const Weighbridges = () => {
  const weighbridges = [
    { id: 1, name: "Rajahmundry", type: "Electronic", commissionDate: "14.06.06" },
    { id: 2, name: "Bitragunta", type: "Electronic", commissionDate: "05.05.06" },
    { id: 3, name: "Sarpavaram", type: "Electronic", commissionDate: "08.11.20" },
    { id: 4, name: "Samalkot", type: "Electronic", commissionDate: "24.10.14" },
    { id: 5, name: "Annavaram", type: "Electronic", commissionDate: "06.09.18" },
    { id: 6, name: "Gudivada", type: "Electronic", commissionDate: "18.07.22" },
    { id: 7, name: "Guntakal west", type: "Electronic", commissionDate: "12.04.97" },
    { id: 8, name: "Garladinne", type: "Electronic", commissionDate: "15.02.21" },
    { id: 9, name: "Malkapuram", type: "Electronic", commissionDate: "28.02.09" },
    { id: 10, name: "Koduru", type: "Electronic", commissionDate: "11.01.10" },
    { id: 11, name: "Nallapadu", type: "Electronic", commissionDate: "10.01.06" },
    { id: 12, name: "Nandyal", type: "Electronic", commissionDate: "30.06.20" },
    { id: 13, name: "Nadikudi", type: "Electronic", commissionDate: "24.03.23" },
    { id: 14, name: "Tondalagopavaram", type: "Electronic", commissionDate: "27.07.11" },
    { id: 15, name: "Manikgarh", type: "Electronic", commissionDate: "31.03.08" },
    { id: 16, name: "Kazipet", type: "Electronic", commissionDate: "30.10.06" },
    { id: 17, name: "Sulahelli", type: "Electronic", commissionDate: "24.01.20" },
    { id: 18, name: "Sultanabad", type: "Electronic", commissionDate: "09.06.15" },
    { id: 19, name: "Charlapalli", type: "Electronic", commissionDate: "10.02.15" },
    { id: 20, name: "Shankarpalli", type: "Electronic", commissionDate: "10.06.15" },
    { id: 21, name: "Hasanparthi Road", type: "Electronic", commissionDate: "11.06.15" },
    { id: 22, name: "Metpalli", type: "Electronic", commissionDate: "08.11.22" },
    { id: 23, name: "Sadashivapet Road", type: "Electronic", commissionDate: "13.03.23" },
    { id: 24, name: "Shivani Shivapur", type: "Electronic", commissionDate: "06.09.19" },
    { id: 25, name: "Maltekdi", type: "Electronic", commissionDate: "08.11.21" },
    { id: 26, name: "Aurangabad", type: "Electronic", commissionDate: "28.08.12" },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY WEIGHBRIDGES
            </h1>
            <h2 className="lg:text-2xl text-lg font-bold text-blue-300 mb-4">South Central Railway - Electronic Weighbridge Network</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-md text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive electronic weighbridge network ensuring accurate parcel van weight measurement across SCR
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="p-4 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-300">Total Weighbridges</p>
                  <p className="text-2xl font-bold text-white">{weighbridges.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="p-4 bg-linear-to-br from-green-500/20 to-green-600/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-300">Type</p>
                  <p className="text-2xl font-bold text-white">Electronic</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="p-4 bg-linear-to-br from-purple-500/20 to-purple-600/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-300">Latest Commission</p>
                  <p className="text-2xl font-bold text-white">2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weighbridges Grid */}
          <div className="mb-16">
            <h3 className="lg:text-4xl text-2xl font-bold text-white mb-12 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Weighbridge Network
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {weighbridges.map((weighbridge) => (
                <div
                  key={weighbridge.id}
                  className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="lg:w-12 lg:h-12 w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {weighbridge.id}
                      </div>
                      <div className="px-4 py-2 bg-linear-to-r from-green-500/20 to-green-600/20 text-green-300 text-sm font-medium rounded-full backdrop-blur-sm border border-green-400/30">
                        {weighbridge.type}
                      </div>
                    </div>
                    
                    <h3 className="lg:text-xl text-lg font-semibold text-white mb-4 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
                      {weighbridge.name}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <svg className="lg:w-5 lg:h-5 w-4 h-4 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Commissioned: {weighbridge.commissionDate}</span>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-6 py-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Weighbridge ID</span>
                      <span className="text-xs font-medium text-blue-300">#{weighbridge.id.toString().padStart(3, '0')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg shadow-2xl p-4 text-white border border-blue-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="inline-block lg:p-4 p-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <svg className="lg:w-12 lg:h-12 w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="lg:text-3xl text-xl font-bold mb-6">
                Parcel Van Weighment Services
              </h3>
              <p className="lg:text-xl text-md text-blue-100 leading-relaxed max-w-4xl mx-auto">
                All weighbridges are equipped with electronic systems for accurate parcel van weight measurement across South Central Railway network.
              </p>
            </div>
          </div>

          {/* Network Coverage Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-4 px-4 border border-white/20">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-12 text-center">Network Coverage</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-linear-to-br from-blue-500 to-blue-600 lg:text-5xl text-2xl font-bold lg:p-8 p-4 rounded-full lg:w-40 lg:h-40 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  26
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Total Locations</h3>
                <p className="text-gray-200 text-lg">Electronic weighbridges operational</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-linear-to-br from-indigo-500 to-indigo-600 lg:text-5xl text-2xl font-bold lg:p-8 p-4 rounded-full lg:w-40 lg:h-40 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  100%
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Electronic</h3>
                <p className="text-gray-200 text-lg">All weighbridges are electronic type</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-linear-to-br from-purple-500 to-purple-600 lg:text-5xl text-2xl font-bold lg:p-8 p-4 rounded-full lg:w-40 lg:h-40 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  24/7
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Availability</h3>
                <p className="text-gray-200 text-lg">Round the clock weighing services</p>
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

export default Weighbridges