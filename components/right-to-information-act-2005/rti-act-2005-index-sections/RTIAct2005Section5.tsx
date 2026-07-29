'use client'
import React from 'react'
import { 
  Scale,
  User,
  AlertCircle
} from 'lucide-react'

const RTIAct2005Section5 = () => {
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
              RIGHT TO INFORMATION ACT 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER II</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">RIGHT TO INFORMATION AND OBLIGATIONS OF PUBLIC AUTHORITIES</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Designation of Public Information Officers Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center text-center">
                  <User className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                5. Designation of Public Information Officers
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">1</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> Every public authority shall, within one hundred days of the enactment of this Act, designate as many officers as the Central Public Information Officers or State Public Information Officers, as the case may be, in all administrative units or offices under it as may be necessary to provide information to persons requesting for the information under this Act.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">2</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> Without prejudice to the provisions of sub-section (1), every public authority shall designate an officer, within one hundred days of the enactment of this Act, at each sub-divisional level or other sub-district level as a Central Assistant Public Information Officer or a State Assistant Public Information Officer, as the case may be, to receive the applications for information or appeals under this Act for forwarding the same forthwith to the Central Public Information Officer or the State Public Information Officer or senior officer specified under sub-section (1) of section 19 or the Central Information Commission or the State Information Commission, as the case may be:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                          <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                            <span className="bg-linear-to-r from-orange-500 to-red-500 p-1.5 rounded-full flex items-center justify-center mt-1 shrink-0">
                              <AlertCircle className="lg:w-4 lg:h-4 w-3 h-3 text-orange-200" />
                            </span>
                            <p className="text-gray-200 lg:text-base text-sm leading-relaxed ">
                              <span className="font-semibold text-orange-300">Provided that</span> where an application for information or appeal is given to a Central Assistant Public Information Officer or a State Assistant Public Information Officer, as the case may be, a period of five days shall be added in computing the period for response specified under sub-section (1) of section 7.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">3</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> Every Central Public Information Officer or State Public Information Officer, as the case may be, shall deal with requests from persons seeking information and render reasonable assistance to the persons seeking such information.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (4) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">4</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> The Central Public Information Officer or State Public Information Officer, as the case may be, may seek the assistance of any other officer as he or she considers it necessary for the proper discharge of his or her duties.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (5) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">5</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> Any officer, whose assistance has been sought under sub-section (4), shall render all assistance to the Central Public Information Officer or State Public Information Officer, as the case may be, seeking his or her assistance and for the purposes of any contravention of the provisions of this Act, such other officer shall be treated as a Central Public Information Officer or State Public Information Officer, as the case may be.
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

export default RTIAct2005Section5