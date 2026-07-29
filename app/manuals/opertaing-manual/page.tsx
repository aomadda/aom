"use client"
import React from 'react'
import { Download, FileText, BookOpen, Users, Shield, Train, Award } from 'lucide-react'
import OperatingManualIndex from '@/components/operating-manual/OperatingManualIndex'

const OperatingManual = () => {
  const handleDownloadPDF = () => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, open PDF directly in browser
      window.open('/Operating Manual SCR 2023.pdf', '_blank');
    } else {
      // For desktop devices, trigger download
      const link = document.createElement('a');
      link.href = '/Operating Manual SCR 2023.pdf';
      link.download = 'Operating Manual SCR 2023.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-slate-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto lg:px-6 px-2 text-center">
            <div className="inline-block lg:p-3 p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-8 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 lg:p-4 p-2 rounded-full">
                <Train className="lg:w-10 lg:h-10 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
            OPERATING MANUAL
            </h1>
            <h2 className="lg:text-5xl text-2xl font-bold text-cyan-300 mb-4">South Central Railway</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="lg:text-2xl text-lg text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide for railway personnel involved in train operations, 
              ensuring safety, efficiency, and excellence in railway operations.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-medium rounded-full shadow-2xl border border-red-500/30 backdrop-blur-sm">
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
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-xl">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
              <h2 className="lg:text-4xl text-2xl font-bold text-white">Preface</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-200 leading-relaxed space-y-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  &apos;Operating Manual for Indian Railways&apos; was issued in the year 2008 with an
                  objective to provide a ready handbook to officers and staff involved in train
                  operations. Railway Board has advised Zonal Railways for preparing Operating
                  Manuals for their Railway Zone.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  Preparation of &apos;Operating Manual for South Central Railway&apos; started in the
                  year 2015 by a team of Instructors of ZRTI, Moula ali. This effort was carried
                  forward in Zonal Headquarters enriching the content with instructions and letters
                  issued by Railway Board. The Manual has attained its present form by incorporating
                  various inputs given by many Instructors of ZRTI, supervisors and officers of SCR.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-emerald-400 mr-4 mt-1 shrink-0" />
                  <p className="lg:text-xl text-base text-emerald-100 font-medium leading-relaxed">
                    The contributions made by Shri H.Raghuram, Chief Instructor and team ZRTI, and
                    Shri Allada Murali Krishna, TI/Rules deserve mention.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  The Manual is an attempt to bring about an understanding of various facets of
                  train operations currently in vogue. The focus has been kept on the basics rather
                  than in detail, thus making it a concise book of knowledge for staff involved in train
                  operations as well as other readers who seek such knowledge. The instructions and
                  guidelines contained in this manual, do not in any way supersede or replace the
                  G&SR or other instructions issued at Railway Board, Zonal and Divisional levels.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  In the absence of such a Manual, many procedural instructions have got
                  incorporated as Subsidiary Rules in G&SR. As and when the Manual gets
                  established as an official document over a period of time, and finds its place, it is
                  expected that detailed procedures of many aspects of train operations will be added
                  to the manual in its future versions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-green-400 mr-4 mt-1 shrink-0" />
                  <p className="lg:text-xl text-base text-green-100 font-medium leading-relaxed">
                    I congratulate and compliment COM/G and his Team for undertaking a major
                    exercise in bringing out this book by referring many Railway Board letters and
                    Manuals.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <p className="lg:text-xl text-base text-gray-100 leading-relaxed">
                  I hope that the Operating Manual prepared by South Central Railway will
                  enrich the knowledge of Operating Staff in their day to day working and also will work
                  as guide for future entrants into Operating department.
                </p>
              </div>
              
              <div className="mt-6 pt-8 border-t border-white/20">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl py-6 lg:px-6 px-4 border border-white/20">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex items-center mb-6 lg:mb-0 flex-col lg:flex-row gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="lg:text-xl text-base text-gray-300 font-medium">Principal Chief Operations Manager</span>
                        <p className="lg:text-sm text-xs text-gray-400">South Central Railway</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="lg:text-2xl text-xl font-bold text-white mb-2">(B. Nagya)</p>
                      <p className="lg:text-lg text-base text-gray-300">Principal Chief Operations Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Manual Sections */}
          <div className="space-y-3">
            <OperatingManualIndex/>
          </div>
        </div>

        {/* Download PDF Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 py-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl py-6 px-4 border border-white/20 shadow-2xl">
              <div className="flex flex-col gap-6 items-center justify-center mb-10">
                <div className="lg:w-20 lg:h-20 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <FileText className="lg:w-10 lg:h-10 w-6 h-6 text-white" />
                </div>
                <h2 className="lg:text-4xl text-2xl font-bold text-white">
                  Download Operating Manual SCR 2023 PDF File
                </h2>
              </div>
              
              <p className="lg:text-xl text-lg text-indigo-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Get the complete Operating Manual SCR 2023 document. 
                Essential resource for railway personnel involved in train operations, 
                safety protocols, and operational excellence.
              </p>

              <button
                onClick={handleDownloadPDF}
                className="group relative inline-flex items-center justify-center lg:px-10 lg:py-5 px-6 py-3 lg:text-xl text-base font-semibold text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-yellow-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-4">
                  <Download className="lg:w-7 lg:h-7 w-5 h-5 animate-pulse" />
                  <span>Download PDF</span>
                </div>
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

export default OperatingManual