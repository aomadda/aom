"use client"
import React from 'react'

const AMChapterPage2B = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">GRIEVOUS INJURIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Detailed classification of grievous injuries as per Indian Penal Code
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 104.1 - Grievous Injuries */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">104.1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-red-400 to-red-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Grievous Injuries
                    </h3>
                    <div className="bg-linear-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-6">
                        As defined in section 320 of Indian Penal Code 45 of 1860 the following kinds of injuries are termed as grievous injuries:
                      </div>
                      <ul className="space-y-5 text-left mx-auto max-w-4xl text-gray-200 lg:text-lg text-base leading-relaxed">
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in">
                            a
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Emasculation.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in delay-75">
                            b
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Permanent privation of the sight of either eye.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in delay-100">
                            c
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Permanent privation of the hearing of either ear.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in delay-150">
                            d
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Privation of any member, or joint.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in delay-200">
                            e
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Destruction or permanent impairing of the powers of any member, or joint.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in delay-250">
                            f
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Fracture or dislocation of a bone, or tooth.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-white/10 shadow-md w-10 h-10 flex items-center justify-center text-red-400 font-extrabold text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 drop-shadow-lg animate-fade-in delay-300">
                            g
                          </span>
                          <span className="pt-1.5">
                            <span className="font-semibold text-white/90">Any hurt which endangers life or which causes the sufferer to be in severe body pain or unable to follow his ordinary pursuits for a period of 20 days after the accident.</span>
                          </span>
                        </li>
                      </ul>
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

export default AMChapterPage2B