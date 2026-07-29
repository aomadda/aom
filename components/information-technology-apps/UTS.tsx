"use client"
import React from 'react'

const UTSApplication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              UNRESERVED TICKETING SYSTEM
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">(UTS)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital platform for unreserved train journey tickets with 24×7 booking facility across India
            </p>
          </div>

          {/* Challenges Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Challenges We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">24×7 booking facility for unreserved train journey tickets</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🌍</span>
                  <span className="text-gray-200 lg:text-lg text-base">To deliver ticketing at the remote corners of the country</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 lg:text-lg text-base">To provide a ticketing system for masses (small distance travellers, daily commuters, suburban passengers, etc)</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 lg:text-lg text-base">To enable Railways in prompt and speedy issuance of tickets</span>
                </li>
                <li className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-gray-200 lg:text-lg text-base">A challenging task to facilitate the ticketing needs of Unreserved journey passengers (Twenty one million approx. daily) on Indian Railways network</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Our Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎯</span>
                  <span className="text-gray-200 lg:text-lg text-base">To provide a hassle free and convenient way of ticket issuance mechanism with added transparency and accountability</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <span className="text-gray-200 lg:text-lg text-base">To provide a system having Centralised Change Management System and Centralised Accounting System</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">To adopt leading technologies and serve commuters with quick ticketing experience resulting in queue size reductions</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                  <span className="text-gray-200 lg:text-lg text-base">To promote Digital India and Cashless Economy through Mobile ticketing, Kiosks, integration of e-wallets, PoS(Point of Sale) machines at Counters, Automatic Ticket Vending Machine(ATVM), Currency Operated Ticket Vending Machine(CoTVM), etc</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚀</span>
                  <span className="text-gray-200 lg:text-lg text-base">The one stop objective of UTS system is to exploit the latest technologies and alleviate the plight of common man who stands in long queues for ticket bookings</span>
                </div>
              </div>
            </div>
          </div>

          {/* UTS at Railway Counters */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              UTS at Railway Counters
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">Started as a pilot project in August 2002 on Northern Railway</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 lg:text-lg text-base">Precursor was Self Printing Ticket Machines (SPTMs) - a standalone system phased out with UTS arrival</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏗️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Central hardware architecture supported with station level servers for business continuity during network failures</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🖥️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Booking office operators dispensed tickets using dumb terminals and dot matrix printers</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🌐</span>
                  <span className="text-gray-200 lg:text-lg text-base">Improved network reliability led to newer design with thin clients for operators</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 lg:text-lg text-base">Zonal Railways responsible for manning UTS counters and running services</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">CRIS maintains application and ensures business continuity at system level</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                  <span className="text-gray-200 lg:text-lg text-base">Nearly 100 ticket types sold based on class of travel, concessions, and season tickets</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-gray-200 text-lg">Business rules and fares determined by Ministry of Railways policies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Ticketing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              Mobile Ticketing
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📱</span>
                  <span className="text-gray-200 lg:text-lg text-base">Launched on 22nd April 2015 with paperless ticket option for Android and Windows smartphones</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🍎</span>
                  <span className="text-gray-200 lg:text-lg text-base">iOS app launched on 8th February 2018</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏪</span>
                  <span className="text-gray-200 lg:text-lg text-base">App named &quot;UTS&quot; available on Google Play Store, Windows Phone Store, and Apple App Store</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🌐</span>
                  <span className="text-gray-200 lg:text-lg text-base">Website www.utsonmobile.indianrail.gov.in for registration and R-wallet creation/recharge</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                  <span className="text-gray-200 text-lg">Payment options: Credit/debit cards and Netbanking</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                  <span className="text-gray-200 text-lg">Integrated e-wallets: Paytm, Mobikwik, and Freecharge</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                  <span className="text-gray-200 lg:text-lg text-base">Both paperless and paper tickets can be booked</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Railway tracks and surrounding areas are Geo-Fenced to prevent booking in Railway premises</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Prevents revenue leakage by stopping ticket booking when TTE/TC is seen at platform or in train</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🇮🇳</span>
                  <span className="text-gray-200 lg:text-lg text-base">Mobile application proliferated at Pan India level</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">Journey, platform, and season tickets can be booked through the app</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-purple-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🌍</span>
                  <span className="text-gray-200 lg:text-lg text-base">Inter-zonal mobile ticketing enabled in all zones</span>
                </div>
              </div>
            </div>
          </div>

          {/* CoTVM */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              CoTVM
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🪙</span>
                  <span className="text-gray-200 lg:text-lg text-base">Cash-Coin & Smart Card operated ticket vending machine concept evolved to prevent queue standing</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                  <span className="text-gray-200 lg:text-lg text-base">Promotes self-service based quick dispensing of tickets</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">Operational across 9 Zonal Railways: NR, CR, WR, SR, SWR, SCR, ER, SER, and SECR</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🤖</span>
                  <span className="text-gray-200 lg:text-lg text-base">Unmanned kiosk operated by passengers themselves</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🎫</span>
                  <span className="text-gray-200 lg:text-lg text-base">Features: Issuing Journey tickets, Platform tickets, and renewing Season tickets</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💳</span>
                  <span className="text-gray-200 lg:text-lg text-base">Can recharge Smart cards used in ATVMs (Automatic Ticket Vending Machines)</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💵</span>
                  <span className="text-gray-200 lg:text-lg text-base">Payment forms: Coins, bank notes, and smart cards</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🪙</span>
                  <span className="text-gray-200 lg:text-lg text-base">Accepts specific coins: Rs.5 and Rs.10</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💴</span>
                  <span className="text-gray-200 lg:text-lg text-base">Accepts bank notes: Rs.5, Rs.10, Rs.20, Rs.50, and Rs.100 of Gandhi series</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-orange-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">❌</span>
                  <span className="text-gray-200 lg:text-lg text-base">Does not accept currency notes with Ashoka Chakra Emblem</span>
                </div>
              </div>
            </div>
          </div>

          {/* JTBS */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              JTBS
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Jan Sadharan Ticket Booking Sewa (JTBS) scheme launched in January 2007</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <span className="text-gray-200 lg:text-lg text-base">Ticketing services for unreserved sector outsourced as per Railway Board&apos;s policy</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💼</span>
                  <span className="text-gray-200 lg:text-lg text-base">Outlets provide self-employment opportunities</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                  <span className="text-gray-200 lg:text-lg text-base">Operators offered nominal commission per passenger</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🖥️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Terminals at these counters connect to central servers for ticket issuance</span>
                </div>
              </div>
            </div>
          </div>

          {/* ATVM */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </span>
              ATVM
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🤖</span>
                  <span className="text-gray-200 lg:text-lg text-base">Automatic Ticket Vending Machines (ATVM) operated using smart cards and touch screens</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">First introduced in Mumbai in October 2007</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📈</span>
                  <span className="text-gray-200 lg:text-lg text-base">Success led to proliferation to other metropolitan cities</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏙️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Currently commissioned in: Chennai, Secunderabad, Delhi, and Kolkata</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-indigo-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 lg:text-lg text-base">Operational across 14 Zonal Railways: NR, NCR, NWR, NER, CR, WR, WCR, SR, SWR, SCR, ER, SER, ECOR, and SECR</span>
                </div>
              </div>
            </div>
          </div>

          {/* YTSK */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              YTSK
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-gray-200 lg:text-lg text-base">Yatri Ticket Suvidha Kendra (YTSK) scheme launched in August 2014</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🏢</span>
                  <span className="text-gray-200 lg:text-lg text-base">Ticketing services for unreserved sector outsourced as per Railway Board&apos;s policy</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💼</span>
                  <span className="text-gray-200 lg:text-lg text-base">Outlets provide self-employment opportunities</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">💰</span>
                  <span className="text-gray-200 lg:text-lg text-base">Operators offered commission per passenger</span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-1 rounded-lg transition-all duration-300">
                  <span className="text-pink-400 mr-3 mt-1 text-xl group-hover:scale-110 transition-transform">🖥️</span>
                  <span className="text-gray-200 lg:text-lg text-base">Terminals at these counters connect to central servers for ticket issuance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl py-6 px-4 lg:px-8 mb-12 text-white border border-blue-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <h2 className="lg:text-3xl text-2xl font-semibold mb-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
              <svg className="lg:w-8 lg:h-8 w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Convenience - Customer convenience/choice for purchase of ticket through different modes of Sale, reducing booking counters at stations</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Self Employment - Jan Sadharan Ticket Booking Sewa (JTBS) & YTSK (Yatri Ticket Suvidha Kendra) scheme. These outlets provide self-employment opportunities and the operators are offered a commission per passenger.</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Scheme for agents - A scheme has been launched for outside parties/agents namely Station Booking Agents (STBA) who work over UTS counters in Railway premises and get a commission based on collections.</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m2 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Digital Payment - UTS on Mobile Project has been launched for Android, Windows and iOS phones. Payments can be done through credit/debit card and Netbanking. Various e-wallets have been integrated with the App.</span>
                </div>
                <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">Mobile Application - The mobile application covers 9120 stations (6333 stations as source). Appx. 2.34 lakhs tickets are booked daily, covering appx. 14.21 lakh passenger travel & generating revenue of appx. Rs 1.33 Crore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-semibold text-white mb-8 flex lg:flex-row flex-col gap-4 items-center justify-center">Milestones Achieved</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="text-center group hover:scale-105 transition-all duration-300 mb-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                  8M+
                </div>
                <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Tickets Sale per day</h3>
                <p className="text-gray-200 text-sm">Daily ticket sales across India</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 mb-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transition-shadow">
                  500+
                </div>
                <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Passenger Earning per day (in Millions)</h3>
                <p className="text-gray-200 text-sm">Daily revenue generation</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 mb-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                  20+
                </div>
                <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Passengers Travelled per day (in Millions)</h3>
                <p className="text-gray-200 text-sm">Daily passenger count</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 mb-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transition-shadow">
                  12K+
                </div>
                <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Point of Sales (PoS) UTS Counters</h3>
                <p className="text-gray-200 text-sm">Active UTS counters nationwide</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 mb-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-teal-500/50 transition-shadow">
                  3K+
                </div>
                <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Automatic Ticket Vending Machines</h3>
                <p className="text-gray-200 text-sm">ATVMs across major cities</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300 mb-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-4 lg:px-8 border border-white/20">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-32 lg:h-32 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-shadow">  
                  300+
                </div>
                <h3 className="lg:text-xl text-lg font-bold text-white mb-3">Cash-Coin & Smart Card operated Ticket Machine</h3>
                <p className="text-gray-200 text-sm">CoTVMs operational</p>
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
      </div>
    </div>
  )
}

export default UTSApplication 