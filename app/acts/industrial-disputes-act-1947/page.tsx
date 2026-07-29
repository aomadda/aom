"use client"
import React from 'react'
import { Scale, Gavel, AlertTriangle, FileText, Award, BookOpen, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const IndustrialDisputesAct1947 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-orange-500 to-red-600 p-3 rounded-full">
                <Gavel className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDUSTRIAL DISPUTES ACT
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-orange-300 mb-4">1947</h2>
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A landmark legislation in India that provides a comprehensive framework for resolving industrial disputes 
              between workers and employers, ensuring fair labor practices and protecting workers&apos; rights.
            </p>
          </div>

          {/* Objectives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Key Objectives
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🤝</span>
                <span className="text-gray-200 lg:text-lg text-base">Prevent and settle industrial disputes through negotiation and conciliation</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Promote measures for securing amity and good relations between employers and employees</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🔍</span>
                <span className="text-gray-200 lg:text-lg text-base">Provide mechanism for investigation and adjudication of disputes</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-gray-200 lg:text-lg text-base">Regulate layoffs, retrenchment, and closure of establishments</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                <span className="text-gray-200 lg:text-lg text-base">Ensure collective bargaining and protect workers&apos; rights</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-blue-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Provide legal recourse for unfair practices and wrongful terminations</span>
              </div>
            </div>
          </div>

          {/* Key Definitions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Key Definitions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Industrial Dispute
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Any dispute or difference between employers and employees, or between employees and employees, 
                  concerning employment, non-employment, terms of employment, or conditions of labor (Section 2(k)).
                </p>
              </div>

              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
                  Workman
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  A person employed in an industry to do manual, skilled, unskilled, technical, operational, 
                  clerical, or supervisory work for hire or reward (Section 2(s)).
                </p>
              </div>

              <div className="bg-linear-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
                  Industry
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Any business, trade, undertaking, manufacture, or calling of employers, including any service, 
                  employment, handicraft, or industrial occupation (Section 2(j)).
                </p>
              </div>
            </div>
          </div>

          {/* Machinery for Dispute Resolution Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Machinery for Dispute Resolution
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Works Committee
                </h3>
                <p className="text-gray-200 text-sm">
                  In establishments with 100+ workmen, promotes measures for securing amity and good relations (Section 3).
                </p>
              </div>

              <div className="bg-linear-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-pink-500 to-rose-500 rounded-full mr-3 animate-pulse"></span>
                  Conciliation Officers
                </h3>
                <p className="text-gray-200 text-sm">
                  Appointed by government to mediate and promote settlement of disputes (Section 4).
                </p>
              </div>

              <div className="bg-linear-to-br from-rose-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-rose-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-rose-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  Labour Courts
                </h3>
                <p className="text-gray-200 text-sm">
                  Adjudicate disputes related to discharge, dismissal, or legality of strikes/lockouts (Section 7).
                </p>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-red-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  Industrial Tribunals
                </h3>
                <p className="text-gray-200 text-sm">
                  Handle complex disputes involving wages, hours of work, or other terms of employment (Section 7-A).
                </p>
              </div>
            </div>
          </div>

          {/* Chapters and Sections Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Chapters and Key Sections
            </h2>
            <div className="space-y-6">
              {/* Chapter I */}
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  CHAPTER I: PRELIMINARY
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 1: Short title, extent and commencement</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 2: Definitions</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-amber-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 2A: Dismissal, etc., of an individual workman to be deemed to be an industrial dispute</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter II */}
              <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-yellow-500 to-orange-500 rounded-full mr-3 animate-pulse"></span>
                  CHAPTER II: AUTHORITIES UNDER THIS ACT
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 3: Works Committee</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 4: Conciliation officers</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 5: Board of Conciliation</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 7: Labour Courts</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 7A: Tribunals</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 7B: National Tribunals</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 8: Filling of vacancies</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 9: Finality of orders constituting Boards, etc.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter V */}
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-orange-500 to-red-500 rounded-full mr-3 animate-pulse"></span>
                  CHAPTER V: STRIKES AND LOCK-OUTS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                      <span className="text-gray-200">Section 22: Prohibition of strikes and lock-outs</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                      <span className="text-gray-200">Section 23: General prohibition of strikes and lock-outs</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                      <span className="text-gray-200">Section 24: Illegal strikes and lock-outs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                      <span className="text-gray-200">Section 25: Prohibition of financial aid to illegal strikes and lock-outs</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                      <span className="text-gray-200">Section 26: Penalty for illegal strikes and lock-outs</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-orange-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚨</span>
                      <span className="text-gray-200">Section 27: Penalty for instigation, etc.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter VA */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  CHAPTER VA: LAY-OFF AND RETRENCHMENT
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25A: Application of sections 25C to 25E</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25B: Definition of continuous service</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25C: Right of workmen laid-off for compensation</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25F: Conditions precedent to retrenchment of workmen</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25FF: Compensation to workmen in case of transfer of undertakings</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25FFA: Sixty days&apos; notice to be given of intention to close down any undertaking</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25G: Procedure for retrenchment</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25H: Re-employment of retrenched workmen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter VB */}
              <div className="bg-linear-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-pink-500 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  CHAPTER VB: SPECIAL PROVISIONS RELATING TO LAY-OFF, RETRENCHMENT AND CLOSURE IN CERTAIN ESTABLISHMENTS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25K: Application of Chapter VB</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25L: Definitions</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25M: Prohibition of lay-off</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25N: Conditions precedent to retrenchment of workmen</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25-O: Procedure for closing down an undertaking</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25P: Special provision as to restarting of undertakings closed down before commencement of the Industrial Disputes (Amendment) Act, 1976</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25Q: Penalty for lay-off and retrenchment without previous permission</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25R: Penalty for closure</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-pink-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📋</span>
                      <span className="text-gray-200">Section 25S: Certain provisions of Chapter VA to apply to an industrial establishment to which this Chapter applies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter VII */}
              <div className="bg-linear-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl px-2 py-6 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex flex-col gap-4 text-center items-center">
                  <span className="w-4 h-4 bg-linear-to-br from-purple-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  CHAPTER VII: MISCELLANEOUS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 32: Offence by companies, etc.</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 33: Conditions of service, etc., to remain unchanged under certain circumstances during pendency of proceedings</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 33A: Special provision for adjudication as to whether conditions of service, etc., changed during pendency of proceedings</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 33B: Power to transfer certain proceedings</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 33C: Recovery of money due from an employer</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 34: Cognizance of offences</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 35: Protection of persons</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 36: Representation of parties</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 36A: Power to remove difficulties</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 36B: Power to exempt</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 37: Protection of action taken under the Act</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 38: Power to make rules</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 39: Delegation of powers</span>
                    </div>
                    <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                      <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                      <span className="text-gray-200">Section 40: Power to amend Schedules</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Benefits and Significance
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🤝</span>
                <span className="text-gray-200 lg:text-lg text-base">Encourages collective bargaining and protects workers&apos; rights to form unions</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚖️</span>
                <span className="text-gray-200 lg:text-lg text-base">Provides structured mechanism to resolve conflicts, reducing industrial unrest</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🛡️</span>
                <span className="text-gray-200 lg:text-lg text-base">Balances interests of employers and employees by regulating layoffs and working conditions</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-emerald-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-gray-200 lg:text-lg text-base">Ensures legal recourse for unfair practices and wrongful terminations</span>
              </div>
            </div>
          </div>

          {/* Limitations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Limitations and Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">⏰</span>
                <span className="text-gray-200 lg:text-lg text-base">Complex and time-consuming procedures for dispute resolution</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">👥</span>
                <span className="text-gray-200 lg:text-lg text-base">Limited applicability to managerial or supervisory staff</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">🏛️</span>
                <span className="text-gray-200 lg:text-lg text-base">Bureaucratic delays in obtaining government approvals for layoffs or closures</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                <span className="text-amber-400 mr-4 mt-1 text-xl group-hover:scale-110 transition-transform">📊</span>
                <span className="text-gray-200 lg:text-lg text-base">Does not adequately address issues in the unorganized sector</span>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 border border-white/20">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </span>
              Historical Milestones
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl px-2 py-6 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <span className="text-2xl font-bold">1947</span>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Enactment Year</h3>
                <p className="text-blue-200 lg:text-lg text-base mb-6">Landmark legislation enacted after independence</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Historical</span>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl px-2 py-6 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <span className="text-2xl font-bold">75+</span>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Years of Service</h3>
                <p className="text-purple-200 lg:text-lg text-base mb-6">Serving as the backbone of industrial relations</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Enduring</span>
                </div>
              </div>

              <div className="bg-linear-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-2xl px-2 py-6 text-white text-center hover:scale-105 transition-all duration-300 group">
                <div className="bg-white/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <h3 className="lg:text-2xl text-xl font-bold mb-3">Coverage</h3>
                <p className="text-emerald-200 lg:text-lg text-base mb-6">Applies to all industrial establishments in India</p>
                <div className="flex justify-center">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Comprehensive</span>
                </div>
              </div>
            </div>

            {/* Recent Amendments */}
            <div className="mt-8 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl px-2 py-6 shadow-xl border border-white/20">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col gap-4 items-center justify-center">
                <span className="w-4 h-4 bg-linear-to-br from-indigo-500 to-blue-500 rounded-full mr-3 animate-pulse"></span>
                Recent Developments
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-linear-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg px-2 py-6 hover:shadow-lg transition-all duration-300 border border-indigo-400/30">
                  <h4 className="text-lg font-bold text-white text-center mb-3">Industrial Relations Code, 2020</h4>
                  <p className="text-gray-200 leading-relaxed">
                    Part of India&apos;s labor law reforms, seeks to consolidate and replace the Industrial Disputes Act, 
                    1947, along with other laws. Implementation is still underway.
                  </p>
                </div>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg px-2 py-6 hover:shadow-lg transition-all duration-300 border border-blue-400/30">
                  <h4 className="text-lg font-bold text-white text-center mb-3">State Amendments</h4>
                  <p className="text-gray-200 leading-relaxed">
                    Various states have increased the threshold for government permission for layoffs/closures 
                    from 100 to 300 workmen to improve ease of doing business.
                  </p>
                </div>
              </div>
            </div>
                     </div>
         </div>
       </div>

       {/* Download PDF Section */}
       <div className="relative z-10 py-12 px-2">
         <div className="max-w-4xl mx-auto">
           <div className="bg-linear-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-orange-400/30 hover:shadow-3xl transition-all duration-500 group">
             <div className="p-8 text-center">
               <div className="mb-6">
                 <div className="inline-block p-4 bg-linear-to-r from-orange-500 to-red-600 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                   <svg className="lg:w-12 lg:h-12 w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-semibold text-white mb-4 bg-linear-to-r from-orange-200 to-red-200 bg-clip-text">
                   Download Complete The Industrial Disputes Act 1947 PDF File
                 </h3>
                 <p className="text-gray-200 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                   Get the complete Industrial Disputes Act 1947 in PDF format for offline reference and detailed study.
                 </p>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <Link 
                   href="/Industrial Disputes Act 1947.pdf" 
                   download="Industrial_Disputes_Act_1947.pdf"
                   className="inline-flex items-center px-10 py-3 bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
                 >
                   <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

 export default IndustrialDisputesAct1947