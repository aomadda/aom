'use client'
import React from 'react'
import { 
  Scale,
  Gavel
} from 'lucide-react'

const DARule11 = () => {
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
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PROCEDURE FOR IMPOSING PENALTIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Gavel className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                11. Procedure for imposing minor penalties
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-6">
                  <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-cyan-300 animate-fade-in">
                    1
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    Subject to the provisions of sub-clause (iv) of clause (a) of sub-rule (9) of Rule 9 and of sub-rule (4) of Rule 10, no order imposing on a Railway servant any of the penalties specified in clauses (i) to (iv) of Rule 6 shall be made except after -
                  </p>
                </div>
                <div className="ml-0 space-y-4">
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        a
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        informing the Railway servant in writing of the proposal to take action against him and of the imputations of misconduct or misbehaviour on which it is proposed to be taken, and giving him a reasonable opportunity of making such representation as he may wish to make against the proposal;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        b
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        holding an inquiry in the manner laid down in sub-rules (6) to (25) of Rule 9, in every case in which the disciplinary authority is of the opinion that such inquiry is necessary;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        c
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        taking the representation, if any, submitted by the Railway servant under clause (a) and the record of inquiry, if any, held under clause (b) into consideration;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        d
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        recording a finding on each imputation of misconduct or misbehaviour; and
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        e
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        consulting the Commission where such consultation is necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-2">
                  <span className="bg-linear-to-r from-purple-500 via-pink-400 to-red-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-pink-300 animate-fade-in">
                    2
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    Notwithstanding anything contained in clause (b) of sub-rule (1), if in a case, it is proposed, after considering the representation, if any, made by the Railway servant under clause (a) of that sub-rule to withhold increments of pay and such withholding of increments is likely to affect adversely the amount of pension or special contribution to Provident Fund payable to the Railway servant or to withhold increments of pay for a period exceeding three years or to withhold increments of pay with cumulative effect for any period, an inquiry shall be held in the manner laid down in sub-rules (6) to (25) of Rule 9, before making any order imposing on the Railway servant any such penalty.
                  </p>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-2">
                  <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-cyan-300 animate-fade-in">
                    3
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    Deleted.
                  </p>
                </div>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-linear-to-br from-indigo-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="flex items-center justify-center flex-col gap-3 mb-6">
                  <span className="bg-linear-to-r from-indigo-500 via-pink-400 to-yellow-400 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-pink-300 animate-fade-in">
                    4
                  </span>
                  <h3 className="text-xl lg:text-xl font-bold text-indigo-200 text-center bg-linear-to-r from-indigo-300 via-pink-200 to-yellow-200 bg-clip-text text-transparent animate-fade-in-slow">
                    The record of the proceedings in cases specified in sub-rules (1) and (2) shall include-
                  </h3>
                </div>
                <div className="ml-0 space-y-3">
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-indigo-500 to-pink-500 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        i
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        a copy of the intimation to the Railway servant of the proposal to take action against him;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-pink-500 to-indigo-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        ii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        a copy of the statement of imputations of misconduct or misbehaviour delivered to him;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-indigo-500 to-pink-500 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        iii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        his representation, if any;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-pink-500 to-indigo-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        iv
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        the evidence produced during the inquiry, if any;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-indigo-500 to-pink-500 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        v
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        the advice of the Commission, if any;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-pink-500 to-indigo-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        vi
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        the findings on each imputation of misconduct or misbehaviour; and
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-indigo-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-2">
                      <span className="bg-linear-to-r from-indigo-500 to-pink-500 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                        vii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        the orders on the case together with the reasons therefor.
                      </p>
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
        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default DARule11