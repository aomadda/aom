"use client"
import React from 'react'

const PMS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              PARCEL MANAGEMENT SYSTEM
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-indigo-300 mb-3">(PMS)</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive IT-enabled solution for parcel booking, tracking, and management across Indian Railways
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-sm">To strengthen parcel booking and movement system using IT</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🔧</span>
                  <span className="text-gray-200 text-sm">Removal of manual calculations and imposing of penalties</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🌐</span>
                  <span className="text-gray-200 text-sm">Online Internet based parcel booking facility</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📍</span>
                  <span className="text-gray-200 text-sm">To facilitate tracking of parcels sent through Indian Railways</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 text-sm">To leverage state-of-art technological solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">💻</span>
                  <span className="text-gray-200 text-sm">IT enablement of Parcel booking and tracking system throughout Indian Railways</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">🧮</span>
                  <span className="text-gray-200 text-sm">Automatic calculation of undercharge, demurrage and wharfage penalties</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-sm">Online access to General public for parcel booking activities</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Tracking parcel with barcode technology and SMS</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-2 mt-1 text-lg group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-gray-200 text-sm">Technology driven Parcel Management System implementation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modules Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Parcel Booking */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 pl-8 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 lg:p-4 p-3 rounded-full mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Parcel Booking</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Forwarding note generation, Railways Receipt generation, Parcel Way Bills, and SMS-based alerts to consignor and consignee.
              </p>
            </div>

            {/* Barcode Printing */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 pl-8 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 lg:p-4 p-3 rounded-full mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Barcode Printing (IR)</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Generate 2D Barcode Stickers for tracking consignments with Receipt no., source and destination information.
              </p>
            </div>

            {/* Loading/Unloading */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 pl-8 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 lg:p-4 p-3 rounded-full mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Loading/Unloading</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Prioritized loading, advance information, Hand Held Terminals for real-time status updates and SMS alerts.
              </p>
            </div>

            {/* Delivery Module */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 pl-8 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 lg:p-4 p-3 rounded-full mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Delivery Module</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Generation of delivery gate pass, automatic calculation of charges, and SMS alerts upon delivery.
              </p>
            </div>

            {/* MIS Reporting */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 pl-8 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 lg:p-4 p-3 rounded-full mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">MIS Reporting</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Generate reports for daily transactions in various formats required by station, division, TA and zonal offices.
              </p>
            </div>

            {/* Lease e-Registration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 pl-8 pr-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/15 group">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 lg:p-4 p-3 rounded-full mb-4 inline-block shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="lg:text-2xl text-xl font-semibold text-white mb-3">Lease e-Registration</h3>
              <p className="text-gray-300 lg:text-lg text-base">
                Online registration for new Lease holders to participate in e-tendering of luggage compartments.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-3">
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 text-sm">Direct capture of parcel weight electronically</span>
                </li>
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">🪟</span>
                  <span className="text-gray-200 text-sm">Universal windows for all destinations for booking</span>
                </li>
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">💳</span>
                  <span className="text-gray-200 text-sm">Single window for weighment and cash payment</span>
                </li>
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-gray-200 text-sm">Advance unloading guidance about inward parcel</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 text-sm">Tracking parcel with barcode technology and SMS</span>
                </li>
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 text-sm">Train Master entry along with scales by Railways</span>
                </li>
                <li className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 text-lg group-hover:scale-110 transition-transform">📄</span>
                  <span className="text-gray-200 text-sm">e-Forwarding Note facility for general public</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Customer Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Customer Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Track latest status through internet and SMS
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  Reduction in time required for weighment and booking
                </li>
              </ul>
            </div>

            {/* Staff Benefits */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Staff Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✓</span>
                  Automatic freight calculation based on latest rules
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✓</span>
                  Reduction in human errors
                </li>
              </ul>
            </div>

            {/* Railway Benefits */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl p-6 text-white hover:scale-105 transition-all duration-300 group">
              <h3 className="lg:text-2xl text-xl font-semibold mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Railway Benefits
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Loading as per priority, curtailing malpractices
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Beneficial to Accounts for internal check
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Reduction in Claims
                </li>
                <li className="flex items-center">
                  <span className="text-purple-200 mr-2">✓</span>
                  Potential for revenue generation
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Milestones Achieved
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  67
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-2">Divisional HQs Commissioned</h3>
                <p className="text-gray-200 lg:text-lg text-base">Successfully implemented across major divisional headquarters</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-2 mb-4 border border-white/20 hover:bg-white/15">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  87+
                </div>
                <h3 className="lg:text-2xl text-xl font-semibold text-white mb-2">Stations Covered</h3>
                <p className="text-gray-200 lg:text-lg text-base">Extensive network coverage across railway stations</p>
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

export default PMS