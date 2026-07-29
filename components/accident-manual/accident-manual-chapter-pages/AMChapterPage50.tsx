"use client"
import React from 'react'

const AMChapterPage50 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto"></div>
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in"> CHAPTER - V </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              PRO-FORMA TO BE FILLED UP IN CASE OF DERAILMENT
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section 504 */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">504</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      PRO-FORMA TO BE FILLED UP IN CASE OF DERAILMENT
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">
                  
                  {/* Introduction */}
                  <div className="space-y-4">
                    <p className="text-gray-200 leading-relaxed">
                      The relevant paras in this pro-forma are required to be filled in by the Inspectors/Officers of the respective departments before leaving the site of the accident and the complete pro-forma should be countersigned by the senior most Officer present at the site of the accident.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                      This pro-forma should form part of the proceedings of the inquiry and should be sent along with the proceedings.
                    </p>
                  </div>

                  {/* Section 504.1 */}
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">504.1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-3">Pro-forma for Track Measurement (PART-A) (Item No.8 of AS-6)</h4>
                      </div>
                    </div>
                  </div>

                  {/* Table Section */}
                  <div className="overflow-x-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                      <table className="w-full text-sm text-gray-200 border-collapse">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-l-lg">S. No</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Soil</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Ballast</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Drainage</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Sleepers</th>
                            <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-r-lg">Rails</th>
                          </tr>
                          <tr className="border-b border-white/20">
                            <th className="text-left p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></th>
                            <th className="text-left p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20">Type of formation</th>
                            <th className="text-left p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20">Ballast (contd.)</th>
                            <th className="text-left p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></th>
                            <th className="text-left p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></th>
                            <th className="text-left p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></th>
                          </tr>
                          <tr className="border-b border-white/20">
                            <th className="text-left p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></th>
                            <th className="text-left p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Rain fall</th>
                            <th className="text-left p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Width of shoulders in cms. from outside of..</th>
                            <th className="text-left p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></th>
                            <th className="text-left p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Sleeper end</th>
                            <th className="text-left p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-l-lg">1</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">Type (Sandy/ Loamy/ clay, Moorum Black Cotton etc.)</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">Type (Stone, Moorum Sand, Ash etc.)</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">Type (wooden CST-9, steel trough, PSC etc.)</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg">2</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Condition (firm/, wet, slushy etc.)</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Depth below sleeper bottom in centimetres, stating whether clean or caked.</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Condition (New, Second hand, damaged, unserviceable etc)</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg">3</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10">Density</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg">4</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10">Square or not</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-l-lg">5</td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10">Packing (Loose or sound)</td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-l-lg">6</td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-r-lg">Left</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg">7</td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg">Right</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-l-lg">8</td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-r-lg">Left</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-l-lg">9</td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-r-lg">Right</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-l-lg">10</td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-l-lg">11</td>
                            <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-l-lg">12</td>
                            <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-l-lg">13</td>
                            <td className="p-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-l-lg">14</td>
                            <td className="p-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-l-lg">15</td>
                            <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-l-lg">16</td>
                            <td className="p-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr>
                            <td className="p-2 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg">17</td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-l-lg">18</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">Rails</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg">19</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Rail fastenings</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg">20</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10">Dog/Screw spikes, keys, tie bars cotters, loose jaws etc.</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg">21</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10">Weight (60 Kg/ 52kg/90R/75Retc)</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg">(Year of Manufacturing)</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-l-lg">22</td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10">Condition of wear (attach rail profile if wear heavy)</td>
                            <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-r-lg">GMT</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-l-lg">23</td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10">Carried</td>
                            <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-r-lg">Number per sleeper seat</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg">24</td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">Condition: (Tight or loose or missing in each sleeper)</td>
                            <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg"></td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-l-lg">25</td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10">Rail Joints</td>
                            <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-r-lg">General remarks about cracks or fracture of flash- plates, fish bolts and other components</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-l-lg">26</td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10">Description of anti- sabotage measures like reverse jaws, welded rails etc.</td>
                            <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-r-lg">Condition: (Hogged, battered, low etc.)</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-center bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-l-lg">27</td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10">Staggered or square</td>
                            <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-r-lg">Creep - direction and extent of creep, type of creep anchors used with numbers per rail in the affected section)</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-l-lg">28</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">To Be Jointly Signed by</td>
                            <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-r-lg">SSE/SE(C&W)</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg">29</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10">Location of point of mount</td>
                            <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg">whether on straight, curve or transition</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="p-2 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg">30</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10">Location of point of Derailment</td>
                            <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg">whether on a falling grade, level, or rising grade and/or on sag</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-center bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg">31</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10">whether on straight, curve or transition</td>
                            <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg">whether on a falling grade, level or rising grade and /or on sag</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="mt-8 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-amber-400/20">
                    <div className="space-y-4">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mt-1">
                          <span className="text-white font-bold text-sm">!</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-amber-300 mb-3">Notes:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">1</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Left and right are with respect to direction of the train movement;
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">2</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  The data in Col.2 to 26 need not be collected when the defect is obviously and indisputably on account of sabotage and/or obstruction on track;
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">3</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Only broken track material which is not indisputably to be broken after the accident should be included in Col.26 and should be preserved;
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">4</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Col.27 needs to be filled in only when there is a suspicion about sabotage being the cause of derailment and
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mt-1">
                                <span className="text-white font-bold text-sm">5</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 leading-relaxed">
                                  Sag extends 90 metres on either side of theoretical junction of the grade lines columns 29 and 31.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Signature Section */}
                  <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">✍</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-blue-300 mb-3">To be jointly signed by</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">Supervisor (P.Way)</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">Supervisor (Traffic)</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 font-semibold text-center">Supervisor (C&W)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* Section 504.2 */}
              <div className="space-y-4 mt-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">504.2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3">Pro-forma for Track Measurement (PART-B)</h4>
                  </div>
                </div>
              </div>

              {/* Table Section for PART-B */}
              <div className="overflow-x-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                  <table className="w-full text-sm text-gray-200 border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-l-lg">Station No.</th>
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Distance apart (metres)</th>
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Gauge slack or tight from the exact in loaded condition</th>
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Cross level (mm) Under Loaded condition</th>
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Marks on sleeper or rail top</th>
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">Grinding or rubbing marks on rails</th>
                        <th className="text-left p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-r-lg">Examination of alignment for perceptible kinds of tack distortion in the vicinity of the point of mount and drop</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-l-lg">1</td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-l-lg">2</td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-l-lg">3</td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-l-lg">4</td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-l-lg">5</td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-l-lg">6</td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-l-lg">7</td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-r-lg"></td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-l-lg">8</td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-r-lg">Subsidence of track</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-l-lg">9</td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 rounded-r-lg">Versine in mm in loaded condition</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-l-lg">10</td>
                        <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-r-lg">Remarks regarding length of transition, degree of curve and specified super elevation general alignment etc.</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-l-lg">11</td>
                        <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-r-lg">Longitudinal level to be recorded in the case of MG and NG and in case of sags or curves</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-l-lg">12</td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></td>
                        <td className="p-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-r-lg">On 20M. or 10M. chord depending on the practice prevalent on the Railway for flat curves more than 600 M. radius. On 10M. or such shorter Chords as considered necessary for sharp curves (less than 600M. radius on B.G. and M.G.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Notes Section for PART-B */}
              <div className="mt-8 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-teal-400/20">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-teal-300 mb-3">Notes:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              The point of mount should be marked with station number &apos;0&apos; and the stations shall be numbered serially as (+) for measurements ahead of site of derailment and (-) for measurements in rear. In case of sudden derailment point of drop will be considered as &apos;0&apos; station. In case of gradual derailment point of mount will be treated as &apos;0&apos; station.  
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              The cross level will be measured on the left rail only as determined from the direction of movement.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              Normally measurement will be taken at stations three meters apart for a distance of 45 metres on either side of &apos;0&apos; station if the cause of derailment is indisputably known, otherwise they will be taken for a distance of 100 metres in rear and 45 meters ahead of zero station.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">4</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              Where necessary, measurement for columns 3, 4 and 5 may be taken additionally at individual sleepers up to 9 mts in rear of point of derailment.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">5</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              This Pro-forma need not be filled when the cause of derailment is obviously established as due to sabotage, obstruction on track, broken axle, and/or spring having fallen off prior to point of derailment, etc.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">6</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              Longitudinal levels should be recorded for 300 metres in rear and 100 metres in front, in case of straights at the middle of each rail and at versine recording points on curves at @ 20/10 metres intervals.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">7</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              *If the locomotive has also derailed, then one supervisor from loco branch will also sign the measurement pro-forma/sheet.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                            <span className="text-white font-bold text-sm">8</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed">
                              Site sketch of the derailment/accident location shall be prepared giving due care that all the relevant items are included along with the dimensions. A sample sketch is given in the following page for the guidance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature Section for PART-B */}
              <div className="mt-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-teal-400/20">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">✍</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-teal-300 mb-3">To be jointly signed by</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 font-semibold text-center">Supervisor (P.Way)</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 font-semibold text-center">Supervisor (Traffic)</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 font-semibold text-center">Supervisor (C&W)</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 font-semibold text-center">*Loco Inspector (when loco derails)</p>
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
export default AMChapterPage50