'use client'
import React from 'react'
import { 
  Scale,
  MessageSquare,
  BookOpen
} from 'lucide-react'

const IRACT1989Section138 = () => {
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
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XV</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Penalties and Offences</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 138 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                138. Levy of excess charge and fare for traveling without proper pass or ticket or beyond authorized distance
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          1
                        </span>
                        <div className="flex-1 space-y-3">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            If any passenger,-
                          </p>
                          <div className="space-y-3 ml-4">
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                a
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                being in or having alighted from at train, fails or refuses to present for examination or to deliver up his pass or ticket immediately on a demand being made therefore under Sec. 54 , or
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                b
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                travels in a train in contravention of the provisions of Sec. 55, he shall be liable to pay, on the demand of any railway servant authorized in this behalf, the excess charge mentioned in sub-section (3) in addition to the ordinary single fare for the distance which he has traveled or, where there is any doubt as to the station from which he started, the ordinary single fare from the station from which the train originally started, or, if the tickets of passengers traveling in the train have been examined since the original starting of the train, the ordinary single fare from the place where the tickets were so examined or in the case of their having been examined more than once, were last examined.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          2
                        </span>
                        <div className="flex-1 space-y-3">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            If any passenger , -
                          </p>
                          <div className="space-y-3 ml-4">
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                a
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                travels or attempts to travel in or on a carriage, or by a train, of a higher class than that for which he has obtained a pass or purchased a ticket; or
                              </p>
                            </div>
                            <div className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                b
                              </span>
                              <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                travels in or on a carriage beyond the place authorized by his pass or ticket,
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            he shall be liable to pay, on the demand of any railway servant authorized in this behalf, any difference between the fare paid by him and the fare payable in respect of the journey he has made and the excess referred to in sub-section (3)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          3
                        </span>
                        <div className="flex-1 space-y-3">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            The excess charge shall be a sum equal to the amount payable under sub-section (1) or sub-section (1) or sub-section (2), as the case may be, or fifty rupees, whichever is more :
                          </p>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300 border border-white/10 ml-4">
                            <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              Provided that if the passenger has with him a certificate granted under sub-section (2) of Sec. 55, no excess charge shall be payable.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          4
                        </span>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          If any passenger liable to pay the excess charge and the fare mentioned in sub-section (1) or the excess charge and any difference of fare mentioned in sub-section (2), fails or refuses to pay the same on a demand being made therefore under one or other of these sub-sections, as the case may be, any railway servant authorized by the railway administration in this behalf may apply to any Metropolitan Magistrate or a Judicial Magistrate of the first of second class, as the case may be, for the recovery of the sum payable as if it were a fine and the Magistrate if satisfied that the sum is payable shall order it to be so recovered, and may order that the person liable for the payment shall in default of payment suffer imprisonment of either description for a term which may extend to one month but not less than ten days.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          5
                        </span>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          Any sum recovered under sub-section (4) shall, as and when it is recovered, be paid to the railway administration.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sec. 138 provides for levy of excess charge and fare for traveling proper pass of ticket or beyond authorized distances and for punishment in case of refusal or failure to pay fare and excess charge.
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
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default IRACT1989Section138