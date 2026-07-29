'use client'
import React from 'react'
import { 
  Scale,
  Gavel
} from 'lucide-react'

const DARule6 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - III</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PENALTIES AND DISCIPLINARY AUTHORITIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Railway Servants (Discipline & Appeal) Rules, 1968 - Rule 6
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Penalties */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Gavel className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                6. Penalties
              </h2>
              
              {/* Introductory Text */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 text-white font-extrabold text-xl shadow-xl rounded-full flex items-center justify-center w-20 h-20 border-4 border-cyan-300 animate-fade-in">
                    Intro
                  </span>
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                    The following penalties may, for good and sufficient reasons and as hereinafter provided, be imposed on a Railway servant, namely:-
                  </p>
                </div>
              </div>

              {/* Minor Penalties */}
              <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-yellow-400/30 mb-6">
                <h3 className="text-2xl font-bold text-yellow-200 mb-6 text-center">Minor Penalties -</h3>
                
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        i
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Censure;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-orange-500 to-yellow-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        ii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Withholding of his promotion for a specified period;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        iii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Recovery from his pay of the whole or part of any pecuniary loss caused by him to the Government or Railway Administration by negligence or breach of orders;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-orange-500 to-yellow-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        iii-a
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Withholding of the Privilege Passes or Privilege Ticket Orders or both;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        iii-b
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Reduction to a lower stage in the time scale of pay by one stage for a period not exceeding three years, without cumulative effect and not adversely affecting his pension;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-orange-500 to-yellow-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        iv
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Withholding of increments of pay for a specified period with further directions as to whether on the expiry of such period this will or will not have the effect of postponing the future increments of his pay;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Major Penalties */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-red-400/30 mb-6">
                <h3 className="text-2xl font-bold text-red-200 mb-6 text-center">Major Penalties -</h3>
                
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-red-500 to-pink-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        v
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Save as provided for in clause (iii-b) reduction to a lower stage in the time-scale of pay for a specified period, with further directions as to whether on the expiry of such period, the reduction will or will not have the effect of postponing the future increments of his pay;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-pink-500 to-red-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        vi
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Reduction to a lower time scale of pay, grade, post, or service, with or without further directions regarding conditions of restoration to the grade or post or service from which the Railway servant was reduced and his seniority and pay on such restoration to that grade, post or service;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-red-500 to-pink-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        vii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Compulsory retirement;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-pink-500 to-red-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        viii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Removal from service which shall not be a disqualification for future employment under the Government or Railway Administration;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-red-500 to-pink-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        ix
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Dismissal from service which shall ordinarily be a disqualification for future employment under the Government or Railway Administration:
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* First Provision */}
              <div className="bg-linear-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-purple-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-r from-purple-500 to-indigo-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12">
                    P1
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-purple-200">Provided that</span> in cases of persons found guilty of any act or omission which resulted or would have, ordinarily, resulted in collision of Railway trains, one of the penalties specified in clauses (viii) and (ix) shall, ordinarily, be imposed and in cases of passing Railway signals at danger, one of the penalties specified in clauses (v) to (ix) shall, ordinarily be imposed and where such penalty is not imposed, the reasons therefor shall be recorded in writing:
                  </span>
                </div>
              </div>

              {/* Second Provision */}
              <div className="bg-linear-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-indigo-400/30 mb-6">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-r from-indigo-500 to-blue-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12">
                    P2
                  </span>
                  <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    <span className="font-semibold text-indigo-200">Provided further that</span> in case of persons found guilty of possessing assets disproportionate to known sources of income or found guilty of having accepted or having obtained from any person any gratification, other than legal remuneration, as a motive or reward for doing or forbearing to do any official act, one of the penalties specified in clauses (viii) or (ix) shall ordinarily be imposed and where such penalty is not imposed, the reasons therefor shall be recorded in writing.
                  </span>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="mb-6">
                  <div className="flex items-center justify-center flex-col gap-3">
                    <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12">
                      Exp
                    </span>
                    <h3 className="text-xl font-bold text-green-200 text-center">
                      Explanation - The following shall not amount to a penalty within the meaning of this rule, namely:-
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        i
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        withholding of increments of pay of a Railway servant for failure to pass any departmental examination in accordance with the rules or orders governing the Service to which he belongs or post which he holds or the terms of his appointment;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-emerald-500 to-green-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        ii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        stoppage of a Railway servant at the efficiency bar in the time-scale of pay on the ground of his unfitness to cross the bar;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        iii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        non-promotion of a Railway servant, whether in a substantive or officiating capacity, after consideration of his case, to a Service, grade or post for promotion to which he is eligible;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-emerald-500 to-green-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        iv
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        reversion of a Railway servant officiating in higher Service, grade or post to a lower Service, grade or post, on the ground that he is considered to be unsuitable for such higher Service, grade or post, or on any administrative ground unconnected with his conduct;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        v
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        reversion of a Railway servant, appointed on probation to any other Service, grade or post, to his permanent Service, grade or post during or at the end of the period of probation in accordance with the terms of his appointment or the rules and orders governing such probation;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-emerald-500 to-green-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        vi
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        replacement of the services of a Railway servant, whose services had been borrowed from any other Ministry or Department of the Central Government or a State Government or an authority under the control of the Central Government or State Government, at the disposal of the Government or the authority from which the services of such Railway servant had been borrowed;
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-2">
                      <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        vii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        compulsory retirement of a Railway servant in accordance with the provisions relating to his superannuation or retirement;
                      </p>
                    </div>
                  </div>
                  
                  {/* (viii) with sub-clauses */}
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-r from-emerald-500 to-green-400 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        viii
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-semibold">
                        termination of the services -
                      </p>
                    </div>
                    <div className="ml-0 space-y-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-green-400/20">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="bg-linear-to-r from-green-400 to-emerald-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                            a
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            of a Railway servant appointed on probation, during or at the end of the period of his probation, in accordance with the terms of his appointment or the rules and orders governing such probation, or
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-green-400/20">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="bg-linear-to-r from-emerald-400 to-green-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                            b
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            of a temporary Railway servant in accordance with rule 301 contained in Volume I of the Indian Railway Establishment Code (Fifth Edition -1985), or
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-green-400/20">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="bg-linear-to-r from-green-400 to-emerald-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                            c
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            of a Railway servant employed under an agreement, in accordance with the terms of such agreement;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* (ix) with sub-clauses */}
                  <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold lg:text-xl text-lg px-4 py-2 rounded-full shadow-lg min-w-12 text-center">
                        ix
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-semibold">
                        discharge of Railway servants -
                      </p>
                    </div>
                    <div className="ml-0 space-y-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-green-400/20">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="bg-linear-to-r from-green-400 to-emerald-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                            a
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            for inefficiency due to failure to conform to the requisite standard of physical fitness;
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-green-400/20">
                        <div className="flex items-center justify-center flex-col gap-2">
                          <span className="bg-linear-to-r from-emerald-400 to-green-400 text-white font-bold px-3 py-1 rounded-full shadow-md min-w-10 text-center text-sm">
                            b
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            on reduction of establishment.
                          </p>
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

export default DARule6