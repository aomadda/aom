'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section45 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4 flex items-center justify-center gap-4">
              <span>CHAPTER VII - Railway Rates Tribunal</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 45 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    45
                  </span>
                  <span className="text-center">Revision of decisions given by the Tribunal.</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Main Provision */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                      Where a railway administration considers that since the date of decision by the Tribunal, it may, has been a material change in the circumstances on which it was based, it may, after the expiry of one year from such date, make an application to the Tribunal and the Tribunal may, after making such inquiry as it considers necessary, vary or revoke the decision.
                    </p>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 mt-6">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 45 confers on the Tribunal power in certain circumstances.
                      </p>
                      <div className="mt-3 pt-3 border-t border-blue-400/30">
                        <p className="text-blue-200 font-semibold lg:text-base text-sm mb-2">Appeal, an appeal lies from final judgment passed in a summary suit.-</p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          An appeal lies from the final judgment passed in a summary suit directing the defendant to pay the decree claim in default of security not having been furnished to suit under Order XXXVII rule3(2).
                        </p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-400/30">
                        <p className="text-blue-200 font-semibold lg:text-base text-sm mb-2">Plaint rejected, appeal cannot be a continuation of a non-existing thing.-</p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          The plaint had been rejected and , therefore, there was nothing before the Court. The appeal, therefore could not be said, in such a case, to be continuation of a non-existing thing.
                        </p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-400/30">
                        <p className="text-blue-200 font-semibold lg:text-base text-sm mb-2">Admissibility of the document cannot be assailed in appeal.-</p>
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                          Certified copy of the registered sale deed, dated 26th September, 1927, was admissible in evidence and the admissibility of the document could not have been assailed in appeal.
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

export default IRACT1989Section45