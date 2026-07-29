"use client"
import React from 'react'
import { Train, Shield, BookOpen, Download, FileText } from 'lucide-react'
import IndianRailwaysOperatingManualIndex from '@/components/indian-railways-operating-manual/IndianRailwaysOperatingManualIndex'

const IndianRailwaysOperatingManual = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-slate-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto lg:px-6 px-2 text-center">
            <div className="inline-block lg:p-3 p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-8 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 lg:p-4 p-2 rounded-full">
                <Train className="lg:w-10 lg:h-10 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-5xl text-2xl font-bold text-cyan-300 mb-4">FOR INDIAN RAILWAYS</h2>
            <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8 border-l-4 border-blue-500 border border-gray-700 inline-block">
              <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                GOVERNMENT OF INDIA
              </h4>
              <h5 className="text-lg lg:text-xl font-semibold text-gray-200 mb-1">
                MINISTRY OF RAILWAYS
              </h5>
              <p className="text-sm lg:text-base font-medium text-gray-300 uppercase tracking-wide">
                (RAILWAY BOARD)
              </p>
            </div>
            <p className="lg:text-2xl text-lg text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide for railway personnel involved in train operations, 
              ensuring safety, efficiency, and excellence in railway operations.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-linear-to-r from-red-600 to-red-700 text-white text-lg font-medium rounded-full shadow-2xl border border-red-500/30 backdrop-blur-sm">
              <Shield className="w-5 h-5 mr-3" />
              For official use only
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto lg:px-6 px-2 py-4">
          {/* Introduction Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl py-6 lg:px-4 px-2 mb-16 border border-white/20 hover:bg-white/15 transition-all duration-500">
            <div className="flex items-center text-center flex-col gap-4 mb-10">
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-xl">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
              <h2 className="lg:text-4xl text-2xl font-bold text-white">Preface</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-200 leading-relaxed space-y-4">
              <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  The objective behind the Operating Manual is to provide a ready handbook to officers and staff involved in train operations. The Manual contains a broad framework of guidelines, which cover various aspects of train operations, and an effort has been made to standardise the diverse operating practices over IR.
                </p>
              </div>
              
              <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  New areas covered in the Manual include changes in train operations brought about by IT, &apos;Non-Interlocked working&apos;, &apos;Derailment Investigations&apos; and &apos;Command Control and Coordination of Emergency Rescue Operations&apos;. It is hoped that the inclusion of the latter shall sensitise staff in matters on which texts are not available. However, instructions and guidelines contained in the Manual do not in any way supersede or replace the G&amp;SR or other instructions at Zonal and Divisional levels.
                </p>
              </div>
              
              <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  I am extremely thankful to Shri Govind Ballabh, IRTS (retd.), for his painstaking effort without which this Operating Manual would not have been possible. I am also thankful to Shri Vinay Mittal, COM/CR, Shri V.K.Roy, COM/NR and Shri S. Jayanth, COM/SR for their valuable suggestions.
                </p>
              </div>
              
              <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed font-medium">
                  I hope all officials involved with train operations will find this Manual useful in their day to day working.
                </p>
              </div>
            </div>
          </div>

          {/* Manual Sections */}
          <div className="space-y-3">
            <IndianRailwaysOperatingManualIndex/>
          </div>

          {/* Download Indian Railways Operating Manual PDF Section */}
          <div className="mt-8 mb-8">
            <div className="bg-linear-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-12 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
                  <div className="bg-linear-to-r from-blue-500 to-purple-600 p-4 rounded-full">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-4">
                  Download Indian Railways Operating Manual PDF
                </h2>
                <p className="text-gray-300 lg:text-lg text-base max-w-2xl mx-auto">
                  Get the complete Operating Manual for Indian Railways in PDF format. 
                  This comprehensive guide covers all aspects of train operations and railway management.
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="/indian-railways-operating-manual-pdf/Indian Railway Operating Manual.pdf"
                  download="Indian Railway Operating Manual.pdf"
                  className="group relative inline-flex items-center justify-center px-8 py-4 lg:px-12 lg:py-5 text-lg lg:text-xl font-bold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 border-2 border-blue-400/30 hover:border-blue-300/50"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Download className="w-6 h-6 lg:w-7 lg:h-7 mr-3 group-hover:animate-bounce" />
                  <span className="relative z-10">Download PDF</span>
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">21</div>
                  <div className="text-gray-300 text-sm">Chapters</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">171</div>
                  <div className="text-gray-300 text-sm">Pages</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">PDF</div>
                  <div className="text-gray-300 text-sm">Format</div>
                </div>
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

export default IndianRailwaysOperatingManual