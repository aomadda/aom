'use client'
import React from 'react'
import { 
  Scale,
  Gavel
} from 'lucide-react'

const DARule10 = () => {
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
                10. Action on the inquiry report
              </h2>

              {/* Sub-rule (1) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-6">
                  <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-cyan-300 animate-fade-in">
                    1
                  </span>
                  <h3 className="text-xl lg:text-xl font-bold text-cyan-200 text-center bg-linear-to-r from-cyan-300 via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-slow">
                    If the disciplinary authority:-
                  </h3>
                </div>
                <div className="ml-0 space-y-4">
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        a
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        after considering the inquiry report, is of the opinion that further examination of any of the witnesses is necessary in the interests of justice, it may recall the said witness and examine, cross-examine and re-examine the witness;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-cyan-500 to-blue-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        b
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        is not itself the inquiring authority may, for reasons to be recorded by it in writing, remit the case to the inquiring authority for further inquiry and report and the inquiring authority shall thereupon proceed to hold further inquiry according to the provisions of rule 9, as far as may be.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (2) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-6">
                  <span className="bg-linear-to-r from-purple-500 via-pink-400 to-red-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-pink-300 animate-fade-in">
                    2
                  </span>
                  <h3 className="text-xl lg:text-xl font-bold text-purple-200 text-center bg-linear-to-r from-purple-300 via-pink-200 to-red-200 bg-clip-text text-transparent animate-fade-in-slow">
                    The disciplinary authority:-
                  </h3>
                </div>
                <div className="ml-0 space-y-4">
                  <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        a
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        shall forward or cause to be forwarded a copy of the report of the inquiry, if any, held by the disciplinary authority or where the disciplinary authority is not the inquiring authority a copy of the report of the inquiring authority, its findings on further examination of witnesses, if any, held under sub-rule(1) (a) together with its own tentative reasons for disagreement, if any, with findings of the inquiring authority on any article of charge to the Railway Servant, who shall be required to submit, if he so desires, his written representation or submission to the disciplinary authority within fifteen days, irrespective of whether the report is favourable or not to the Railway Servant;
                      </p>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-pink-500 to-purple-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        b
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        shall consider the representation if any, submitted by the Railway Servant and record its findings before proceeding further in the matter as specified in sub-rules (3), (4) and (5).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-rule (3) */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-2">
                  <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-cyan-300 animate-fade-in">
                    3
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    Where the disciplinary authority is of the opinion that the penalty warranted is such as is not within its competence, he shall forward the records of the inquiry to the appropriate disciplinary authority who shall act in the manner as provided in these rules.
                  </p>
                </div>
              </div>

              {/* Sub-rule (4) */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <span className="bg-linear-to-r from-purple-500 via-pink-400 to-red-500 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-pink-300 animate-fade-in">
                    4
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    If the disciplinary authority having regard to its findings on all or any of the articles of charge, is of the opinion that any of the penalties specified in clauses (i) to (iv) of rule 6 should be imposed on the railway servant, it shall, notwithstanding anything contained in rule 11, make an order imposing such penalty:
                  </p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-400/30">
                  <div className="flex items-center justify-center flex-col gap-2 mb-2">
                    <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                      P
                    </span>
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-yellow-300">Provided that</span> in every case where it is necessary to consult the Commission, the record of the inquiry shall be forwarded by the disciplinary authority to the Commission for its advice and such advice shall be taken into consideration before making any order imposing any penalty on the Railway Servant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-rule (5) */}
              <div className="bg-linear-to-br from-indigo-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <span className="bg-linear-to-r from-indigo-500 via-pink-400 to-yellow-400 text-white font-extrabold text-2xl shadow-xl rounded-full flex items-center justify-center w-14 h-14 border-4 border-pink-300 animate-fade-in">
                    5
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    If the disciplinary authority, having regard to its findings on all or any of the articles of charge and on the basis of the evidence adduced during the inquiry, is of the opinion that any of the penalties specified in clauses(v) to (ix) of rule 6 should be imposed on the railway servant, it shall make an order imposing such penalty and it shall not be necessary to give the railway servant any opportunity of making representation on the penalty proposed to be imposed:
                  </p>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-400/30">
                  <div className="flex items-center justify-center flex-col gap-2 mb-2">
                    <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                      P
                    </span>
                    <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-yellow-300">Provided that</span> in every case where it is necessary to consult the Commission, the record of the inquiry shall be forwarded by the disciplinary authority to the Commission for its advice and such advice shall be taken into consideration before making an order imposing any such penalty on the railway servant.
                    </p>
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

export default DARule10