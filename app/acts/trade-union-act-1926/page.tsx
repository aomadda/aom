"use client"
import React from 'react'

const TradeUnionAct1926 = () => {
    return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              THE TRADE UNION ACT, 1926
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive legislation governing the formation, registration, and functioning of trade unions in India, 
              ensuring workers&apos; rights to organize and collectively bargain.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Overview
            </h2>
            <div className="space-y-4">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                The Trade Unions Act, 1926, is a key piece of legislation in India that governs the formation, registration, and functioning of trade unions. Enacted during British colonial rule, it provides a legal framework for trade unions to operate, ensuring workers&apos; rights to organize and collectively bargain.
              </p>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Features
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Objective</h3>
                  <p className="text-gray-200">The Act aims to provide for the registration of trade unions and define their rights, liabilities, and responsibilities, enabling workers to form associations to protect their interests.</p>
                </div>
                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Definition of Trade Union</h3>
                  <p className="text-gray-200">A trade union is any combination, temporary or permanent, formed primarily for regulating relations between workmen and employers, workmen and workmen, or employers and employers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Chapters and Sections
            </h2>
            
            {/* Chapter I */}
            <div className="space-y-6">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-white text-center mb-4 flex flex-col items-center">
                  
                  CHAPTER - I <br/> PRELIMINARY
                </h3>
                <div className="space-y-1">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-purple-400 mr-1 text-lg font-bold min-w-12">1.</span>
                    <span className="text-gray-200">Short title, extent and commencement</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-purple-400 mr-1 text-lg font-bold min-w-12">2.</span>
                    <span className="text-gray-200">Definitions</span>
                  </div>
                </div>
              </div>

              {/* Chapter II */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-white text-center mb-4 flex flex-col items-center">
                  
                  CHAPTER - II <br/> REGISTRATION OF TRADE UNIONS
                </h3>
                <div className="space-y-1">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">3.</span>
                    <span className="text-gray-200">Appointment of Registrars</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">4.</span>
                    <span className="text-gray-200">Mode of registration</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">5.</span>
                    <span className="text-gray-200">Application for registration</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">6.</span>
                    <span className="text-gray-200">Provisions to be contained in the rules of a Trade Union</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">7.</span>
                    <span className="text-gray-200">Power to call for further particulars and to require alteration of name</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">8.</span>
                    <span className="text-gray-200">Registration</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">9.</span>
                    <span className="text-gray-200">Certificate of registration</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">10.</span>
                    <span className="text-gray-200">Cancellation of registration</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">11.</span>
                    <span className="text-gray-200">Appeal</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">12.</span>
                    <span className="text-gray-200">Registered office</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">13.</span>
                    <span className="text-gray-200">Incorporation of registered Trade Unions</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-blue-400 mr-1 text-lg font-bold min-w-12">14.</span>
                    <span className="text-gray-200">Certain Acts not to apply to registered Trade Unions</span>
                  </div>
                </div>
              </div>

              {/* Chapter III */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-white text-center mb-4 flex flex-col items-center">
                  
                  CHAPTER - III <br/> RIGHTS AND LIABILITIES OF REGISTERED TRADE UNIONS
                </h3>
                <div className="space-y-1">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">15.</span>
                    <span className="text-gray-200">Objects on which general funds may be spent</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">16.</span>
                    <span className="text-gray-200">Constitution of a separate fund for political purposes</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">17.</span>
                    <span className="text-gray-200">Criminal conspiracy in trade disputes</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">18.</span>
                    <span className="text-gray-200">Immunity from civil suit in certain cases</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">19.</span>
                    <span className="text-gray-200">Enforceability of agreements</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">20.</span>
                    <span className="text-gray-200">Right to inspect books of Trade Union</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">21.</span>
                    <span className="text-gray-200">Rights of minors to membership of Trade Unions</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">21A.</span>
                    <span className="text-gray-200">Disqualifications of office-bearers of Trade Unions</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">22.</span>
                    <span className="text-gray-200">Proportion of office-bearers to be connected with the industry</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-4 mt-1 text-lg font-bold min-w-12">23.</span>
                    <span className="text-gray-200">Change of name</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">24.</span>
                    <span className="text-gray-200">Amalgamation of Trade Unions</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">25.</span>
                    <span className="text-gray-200">Notice of change of name or amalgamation</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">26.</span>
                    <span className="text-gray-200">Effects of change of name and of amalgamation</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">27.</span>
                    <span className="text-gray-200">Dissolution</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-green-400 mr-1 text-lg font-bold min-w-12">28.</span>
                    <span className="text-gray-200">Returns</span>
                  </div>
                </div>
              </div>

              {/* Chapter IV */}
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-white text-center mb-4 flex flex-col items-center">
                  
                  CHAPTER - IV <br/> REGULATIONS
                </h3>
                <div className="space-y-1">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-1 text-lg font-bold min-w-12">29.</span>
                    <span className="text-gray-200">Power to make regulations</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-orange-400 mr-1 text-lg font-bold min-w-12">30.</span>
                    <span className="text-gray-200">Publication of regulations</span>
                  </div>
                </div>
              </div>

              {/* Chapter V */}
              <div className="bg-linear-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-pink-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-white text-center mb-4 flex flex-col items-center">
                  
                  CHAPTER - V <br/> PENALTIES AND PROCEDURE
                </h3>
                <div className="space-y-1">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-pink-400 mr-1 text-lg font-bold min-w-12">31.</span>
                    <span className="text-gray-200">Failure to submit returns</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-pink-400 mr-1 text-lg font-bold min-w-12">32.</span>
                    <span className="text-gray-200">Supplying false information regarding Trade Unions</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-1 transition-all duration-300">
                    <span className="text-pink-400 mr-1 text-lg font-bold min-w-12">33.</span>
                    <span className="text-gray-200">Cognizance of offences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Context Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Historical Context
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Enactment</h3>
                  <p className="text-gray-200">Enacted in 1926, the Act was a response to growing labor movements in India, particularly after World War I, when workers began organizing to demand better wages and working conditions.</p>
                </div>
                <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Influence</h3>
                  <p className="text-gray-200">It was influenced by British trade union laws but tailored to the Indian context, balancing workers&apos; rights with regulatory oversight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Significance Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Significance
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Worker Empowerment</h3>
                <p className="text-gray-200">The Act legitimizes collective bargaining, enabling workers to negotiate better wages, working conditions, and benefits.</p>
              </div>
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Legal Protection</h3>
                <p className="text-gray-200">Immunity provisions protect union members from legal repercussions during lawful trade disputes.</p>
              </div>
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Regulation</h3>
                <p className="text-gray-200">Registration ensures transparency and accountability in union operations.</p>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 mb-6 border border-white/20">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Recent Developments
            </h2>
            <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1 lg:text-lg text-base">📜</span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    The Trade Unions Act, 1926, remains in force in India.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base">🔄</span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    In 2020, the Indian government consolidated 29 labor laws, including the Trade Unions Act, into four labor codes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1 lg:text-lg text-base">📚</span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    The four labor codes are: Code on Wages (2019), Industrial Relations Code (2020), Code on Social Security (2020), and Occupational Safety, Health and Working Conditions Code (2020).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1 lg:text-lg text-base">⚖️</span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    While the Trade Unions Act has not been repealed, some of its provisions may be affected by the Industrial Relations Code, 2020, which integrates trade union regulation with industrial dispute resolution.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1 lg:text-lg text-base">🗺️</span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    As of August 2025, the implementation of these new codes varies across states, and the 1926 Act continues to govern trade union registration.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20">
            <div className="text-center">
              <div className="inline-block lg:p-4 p-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
                <div className="bg-linear-to-r from-emerald-500 to-teal-600 lg:p-4 p-2 rounded-full">
                  <svg className="lg:w-10 lg:h-10 w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-4">
                Download The Trade Union Act 1926 PDF File
              </h2>
              <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                Get the complete The Trade Union Act, 1926 in PDF format for offline reading and reference.
              </p>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/The Trade Union Act 1926.pdf';
                  link.download = 'The Trade Union Act 1926.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  // Open PDF in new tab after a short delay
                  setTimeout(() => {
                    window.open('/The Trade Union Act 1926.pdf', '_blank');
                  }, 1000);
                }}
                className="group relative inline-flex items-center justify-center px-10 py-3 lg:px-12 lg:py-5 text-lg lg:text-xl font-bold text-white bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/50 hover:border-emerald-300/70 backdrop-blur-sm"
              >
                <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
                <div className="absolute inset-0 bg-linear-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>
              
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

export default TradeUnionAct1926