"use client"
import React from 'react'

const AMChapterPage5 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CLASSIFICATION OF ROUTES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding route classification on South Central Railway
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 108.1 - Classification of Routes */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">108.1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      Classification of Routes
                    </h3>
                    <div className="bg-linear-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-4">
                        <p className="flex items-center flex-col gap-3">
                          <span className="mt-1 text-blue-400 text-xl">📋</span>
                          <span>
                            Classification of routes on South Central Railway is as follows:
                          </span>
                        </p>
                        
                        <div className="mt-6 space-y-6">
                          {/* SOUTH CENTRAL RAILWAY Header */}
                          <div className="text-center">
                            <h4 className="text-xl font-bold text-blue-300 mb-4">SOUTH CENTRAL RAILWAY</h4>
                          </div>

                          {/* Route A */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div>
                                <span className="font-semibold text-green-200">Routes &quot;A&quot;</span>
                                <span className="text-white"> – Speeds upto 160 KM/hour</span>
                              </div>
                            </div>
                            <div className="ml-2 space-y-2">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-green-400 text-lg">🔹</span>
                                <span className="text-white">Vijayawada – Balharshah, including Kazipet by pass. Gudur - Vijayawada</span>
                              </div>
                            </div>
                          </div>

                          {/* Route B */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div>
                                <span className="font-semibold text-blue-200">Route &quot;B&quot;</span>
                                <span className="text-white"> – Speeds upto 130 KM / hour</span>
                              </div>
                            </div>
                            <div className="ml-2 space-y-2">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Guntakal – Bellary</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Gudur – Renigunta - Tirupathi Katpadi – Pakala - Tirupathi Guntakal - Nandyal</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Vijayawada – Bhimavaram - Nidadavolu Bye pass near Bhimavaram</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Pagidipalli - Nadikude Guntur - Nadikude Guntur - Krishna Canal Guntur - Tenali</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Nallapadu – Donakonda - Nandyal Secunderabad – Falaknuma - Dhone Secunderabad – Bolarum - Mudkhed Manmad - Mudkhed</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Kazipet - Secunderabad Secunderabad - Wadi Hussainsagar - Hyderabad Bye pass near Hussainsagar Vijayawada - Visakhapatnam Wadi - Guntakal</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Guntakal - Renigunta Gooty - Dharmavaram</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-blue-400 text-lg">🔹</span>
                                <span className="text-white">Bye pass line at Renigunta</span>
                              </div>
                            </div>
                          </div>

                          {/* Route D */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div>
                                <span className="font-semibold text-yellow-200">Route &quot;D&quot;</span>
                                <span className="text-white"> Speeds upto 110 KMPH and the annual traffic density is less than 20 GMT</span>
                              </div>
                            </div>
                            <div className="ml-2 space-y-2">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-yellow-400 text-lg">🔹</span>
                                <span className="text-white">Vikarabad - Parlivaijnath Nadikude - Macherla Samalkot - Kakinada Port Parbhani - Parlivaijnath Gooty - Pendekallu</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-yellow-400 text-lg">🔹</span>
                                <span className="text-white">Dornakal - Bhadrachalam Road Bhadrachalam Road - Manuguru Karepalli - Singareni Collieries Purna - Akola</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-yellow-400 text-lg">🔹</span>
                                <span className="text-white">Pakala - Dharmavaram</span>
                              </div>
                            </div>
                          </div>

                          {/* Route D Spl */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div>
                                <span className="font-semibold text-orange-200">Route &quot;D&quot; Spl</span>
                                <span className="text-white"> – Speeds upto 110 KMPH and the annual traffic density is 20 GMT or more.</span>
                              </div>
                            </div>
                            <div className="ml-2 space-y-2">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-orange-400 text-lg">🔹</span>
                                <span className="text-white">Bye pass between Sanatnagar and Moula Ali</span>
                              </div>
                            </div>
                          </div>

                          {/* Route E */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div>
                                <span className="font-semibold text-red-200">Route &quot;E&quot;</span>
                                <span className="text-white">– All other Sections and branch lines with speed upto 100 KMPH</span>
                              </div>
                            </div>
                            <div className="ml-2 space-y-2">  
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-red-400 text-lg">🔹</span>
                                <span className="text-white">Venkatachalam - Krishnapatnam Peddapalli - Jagityal</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-red-400 text-lg">🔹</span>
                                <span className="text-white">Manigarh - Gadchandur Motumari - Jaggayapet Town Gudivada - Machilipatnam Bhimavaram - Narasapur Kakinada town – Kotipalli Tenali - Repalle</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-red-400 text-lg">🔹</span>
                                <span className="text-white">Adilabad - Pimpalkutti Mudkhed - Adilabad Janakampet - Bodhan Malkajgiri - Moula Ali chord line Bye pass at Malkajgiri</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-red-400 text-lg">🔹</span>
                                <span className="text-white">Bye pass at Secunderabad Bye pass at Dornakal Jn</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-red-400 text-lg">🔹</span>
                                <span className="text-white">Bye pass at Bhadrachalam Road Bye pass at Manikgarh</span>
                              </div>
                            </div>
                          </div>

                          {/* Meter Gauge */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div>
                                <span className="font-semibold text-purple-200">Meter Gauge</span>
                              </div>
                            </div>
                            <div className="ml-2 space-y-2">
                              <div className="flex items-start gap-3">
                                <span className="mt-1 text-purple-400 text-lg">🔹</span>
                                <span className="text-white">R3: Akola – Khandwa</span>
                              </div>
                            </div>
                          </div>

                          {/* Notes */}
                          <div className="mt-6 space-y-3">
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-amber-400 text-xl">📝</span>
                              <span className="text-white">
                                Note:- The actual section speed as notified in the working timetable for different types of loco motives and rolling stock should be followed.
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="mt-1 text-amber-400 text-xl">📝</span>
                              <span className="text-white">
                                The route classification of some sections may undergo a change from time to time.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default AMChapterPage5