"use client"
import React from 'react'

const AMChapterPage14A = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">DUTIES OF RAILWAY STAFF</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to railway staff duties during accidents and emergencies
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-6 px-2 border border-white/20">
            <div className="space-y-8">
              {/* General Duty Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      General Duty of Railway Staff
                    </h3>
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 lg:p-4 p-2 rounded-lg border border-red-400/20">
                      <p className="text-white leading-relaxed">
                        Every Railway servant traveling by the affected train or available at the site, whether on duty or not, shall help in the disaster management by getting identified and rendering immediate assistance to the affected passengers at the site. Non-participation in accident relief operations will be considered as &apos;DERELICTION OF DUTY&apos;.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guard Duties Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">301</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Guard of The Train Involved in Accident
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <p className="text-white mb-4">The duties are given in the sequence in which they have to be performed.</p>
                        <p className="text-white">On occurrence of an accident to his train, the Guard of the train shall immediately:</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">1.</h4>
                        <p className="text-white">Note the time of accident.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">2.</h4>
                        <p className="text-white">If the accident has occurred on a double line section, the Guard should immediately check if the adjoining line is fouling or not. If it is fouling, he should immediately exhibit red flag by day and flashing light by night towards the direction in which train is expected on the adjoining line. He will continue to exhibit the hand danger signal until the time the adjoining line is protected as per rules in force.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">3.</h4>
                        <p className="text-white">Arrange to protect his train as per Rules in force, taking the assistance of any qualified staff, such as Assistant Guard, Assistant Loco Pilot, gangmen, gatemen etc.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">4.</h4>
                        <p className="text-white">Make a quick survey of the accident site for casualties, injuries, if any, and for deciding the assistance required.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">5.</h4>
                        <p className="text-white">Send the first information of accident to the control office and then to the nearest Station Master furnishing the following information, through mobile phone or portable telephone, or walkie-talkie or gate phone, etc.,</p>
                        <div className="mt-2 ml-4">
                          <p className="text-white">a) Time of Accident, b) Kilometer etc.,</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">6.</h4>
                        <p className="text-white">On the double line section a train passing on the other line should be stopped and the Loco Pilot and Guard given intimation about the accident if not already given vide para (5).</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">7.</h4>
                        <p className="text-white">Render first aid to any person injured, obtaining assistance of the railway staff, doctors and / or volunteers on the train, or near the site of accident; and transport the injured to the hospital by taking the help of 104/108 Ambulance service.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">8.</h4>
                        <p className="text-white">He will also arrange for preservation of clues and evidence until a senior Railway official takes over charge.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">9.</h4>
                        <p className="text-white">Remain in general charge till a senior Railway Official takes over charge. There after work as per the instructions of the senior official incharge of the accident.</p>
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

export default AMChapterPage14A