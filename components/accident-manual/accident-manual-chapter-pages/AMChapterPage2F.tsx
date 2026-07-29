"use client"
import React from 'react'

const AMChapterPage2F = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CONSEQUENTIAL TRAIN ACCIDENTS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive classification of consequential train accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Rule 105.2 - Consequential Train Accidents */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">105.2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-linear-to-r from-red-400 to-red-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      Consequential Train Accidents
                    </h3>
                    <div className="bg-linear-to-r from-red-500/10 to-orange-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-red-400/20">
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-6">
                        Include train accidents having serious repercussion in terms of-
                      </div>
                      <ul className="space-y-6 text-left mx-auto max-w-3xl text-gray-200 lg:text-lg text-base leading-relaxed mb-8">
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-red-400 bg-linear-to-tr from-red-600 to-pink-500 text-white shadow-lg w-10 h-10 flex items-center justify-center font-semibold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-400/50 select-none">
                            a
                          </span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-red-500/10 transition-colors duration-300">
                            <span className="font-semibold text-red-200 block mb-1 tracking-wide">Loss of Human Life</span>
                            <span className="text-gray-300">Such as casualties resulting from the accident.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-orange-400 bg-linear-to-tr from-orange-500 to-yellow-400 text-white shadow-lg w-10 h-10 flex items-center justify-center font-semibold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-400/50 select-none">
                            b
                          </span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-yellow-500/10 transition-colors duration-300">
                            <span className="font-semibold text-orange-200 block mb-1 tracking-wide">Human Injury</span>
                            <span className="text-gray-300">Including grievous or serious injuries to persons.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-yellow-400 bg-linear-to-tr from-yellow-500 to-orange-300 text-white shadow-lg w-10 h-10 flex items-center justify-center font-semibold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-yellow-400/50 select-none">
                            c
                          </span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-orange-500/10 transition-colors duration-300">
                            <span className="font-semibold text-yellow-200 block mb-1 tracking-wide">Loss to Railway Property</span>
                            <span className="text-gray-300">Significant damage or destruction of railway assets.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-4 group">
                          <span className="shrink-0 rounded-full border-2 border-pink-400 bg-linear-to-tr from-pink-500 to-red-300 text-white shadow-lg w-10 h-10 flex items-center justify-center font-semibold text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-pink-400/50 select-none">
                            d
                          </span>
                          <span className="flex-1 bg-white/5 backdrop-blur-md px-4 py-3 rounded-lg shadow group-hover:bg-pink-500/10 transition-colors duration-300">
                            <span className="font-semibold text-pink-200 block mb-1 tracking-wide">Interruption to Rail Traffic</span>
                            <span className="text-gray-300">Causing major disruption or suspension of train operations.</span>
                          </span>
                        </li>
                      </ul>
                      <div className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                        Train accidents under following classifications will be termed as consequential train accidents.
                      </div>
                      <ol className="grid gap-4 md:grid-cols-2 text-left mx-auto max-w-4xl lg:text-lg text-base leading-relaxed">
                        <li className="flex items-center gap-4 rounded-xl bg-linear-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 shadow hover:shadow-red-200/30 transition p-4 group">
                          <span className="rounded-full bg-linear-to-br from-red-500 via-orange-500 to-orange-400 w-10 h-10 flex items-center justify-center font-extrabold text-white text-xl shadow-lg border-4 border-white/20 group-hover:scale-110 group-hover:from-red-600 transition-transform duration-300 animate-pulse">{1}</span>
                          <div>
                            <span className="font-bold text-red-300 tracking-wide block">Collision</span>
                            <span className="ml-2 text-gray-300 tracking-wide">A 1 to A 4</span>
                          </div>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl bg-linear-to-r from-orange-500/10 to-yellow-400/10 border border-orange-400/30 shadow hover:shadow-orange-200/30 transition p-4 group">
                          <span className="rounded-full bg-linear-to-br from-orange-400 via-yellow-400 to-red-400 w-10 h-10 flex items-center justify-center font-extrabold text-white text-xl shadow-lg border-4 border-white/20 group-hover:scale-110 group-hover:from-orange-500 transition-transform duration-300 animate-pulse">{2}</span>
                          <div>
                            <span className="font-bold text-orange-300 tracking-wide block">Fire</span>
                            <span className="ml-2 text-gray-300 tracking-wide">B 1 to B 4</span>
                          </div>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl bg-linear-to-r from-yellow-400/10 to-orange-200/10 border border-yellow-400/30 shadow hover:shadow-yellow-200/30 transition p-4 group">
                          <span className="rounded-full bg-linear-to-br from-yellow-400 via-orange-200 to-orange-300 w-10 h-10 flex items-center justify-center font-extrabold text-white text-xl shadow-lg border-4 border-white/20 group-hover:scale-110 group-hover:from-yellow-500 transition-transform duration-300 animate-pulse">{3}</span>
                          <div>
                            <span className="font-bold text-yellow-300 tracking-wide block">Level Crossing</span>
                            <span className="ml-2 text-gray-300 tracking-wide">C 1 to C 4</span>
                          </div>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl bg-linear-to-r from-pink-400/10 to-red-200/10 border border-pink-400/30 shadow hover:shadow-pink-200/30 transition p-4 group">
                          <span className="rounded-full bg-linear-to-br from-pink-400 via-red-400 to-red-300 w-10 h-10 flex items-center justify-center font-extrabold text-white text-xl shadow-lg border-4 border-white/20 group-hover:scale-110 group-hover:from-pink-500 transition-transform duration-300 animate-pulse">{4}</span>
                          <div>
                            <span className="font-bold text-pink-300 tracking-wide block">Derailment</span>
                            <span className="ml-2 text-gray-300 tracking-wide">D 1 to D 4</span>
                          </div>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl bg-linear-to-r from-purple-400/10 to-red-100/10 border border-purple-400/30 shadow hover:shadow-purple-200/30 transition p-4 group">
                          <span className="rounded-full bg-linear-to-br from-purple-400 via-red-200 to-pink-200 w-10 h-10 flex items-center justify-center font-extrabold text-white text-xl shadow-lg border-4 border-white/20 group-hover:scale-110 group-hover:from-purple-500 transition-transform duration-300 animate-pulse">{5}</span>
                          <div>
                            <span className="font-bold text-purple-200 tracking-wide block">Miscellaneous</span>
                            <span className="ml-2 text-gray-300 tracking-wide">E 1</span>
                          </div>
                        </li>
                      </ol>
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

export default AMChapterPage2F