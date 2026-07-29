'use client'
import React from 'react'
import { 
  Scale,
  Building2,
  
} from 'lucide-react'

const RTIAct2005Section15 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">THE STATE INFORMATION COMMISSION</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Constitution of State Information Commission Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                15. Constitution of State Information Commission
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">1</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="font-semibold text-cyan-200"></span> Every State Government shall, by notification in the Official Gazette, constitute a body to be known as the ......... (name of the State) Information Commission to exercise the powers conferred on, and to perform the functions assigned to, it under this Act.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">2</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> The State Information Commission shall consist of—
                        </p>
                        <div className="ml-4 mt-3 space-y-2 border-l border-cyan-300/30 pl-4">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">a</span> the State Chief Information Commissioner, and
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">b</span> such number of State Information Commissioners, not exceeding ten, as may be deemed necessary.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">3</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> The State Chief Information Commissioner and the State Information Commissioners shall be appointed by the Governor on the recommendation of a committee consisting of—
                        </p>
                        <div className="ml-4 mt-3 space-y-2 border-l border-cyan-300/30 pl-4 mb-3">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">i</span> the Chief Minister, who shall be the Chairperson of the committee;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">ii</span> the Leader of Opposition in the Legislative Assembly; and
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">iii</span> a Cabinet Minister to be nominated by the Chief Minister.
                          </p>
                        </div>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                            <span className="font-semibold text-orange-300">Explanation.—</span> For the purposes of removal of doubts, it is hereby declared that where the Leader of Opposition in the Legislative Assembly has not been recognised as such, the Leader of the single largest group in opposition of the Government in the Legislative Assembly shall be deemed to be the Leader of Opposition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (4) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">4</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> The general superintendence, direction and management of the affairs of the State Information Commission shall vest in the State Chief Information Commissioner who shall be assisted by the State Information Commissioners and may exercise all such powers and do all such acts and things which may be exercised or done by the State Information Commission autonomously without being subjected to directions by any other authority under this Act.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (5) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">5</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> The State Chief Information Commissioner and the State Information Commissioners shall be persons of eminence in public life with wide knowledge and experience in law, science and technology, social service, management, journalism, mass media or administration and governance.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (6) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">6</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> The State Chief Information Commissioner or a State Information Commissioner shall not be a Member of Parliament or Member of the Legislature of any State or Union territory, as the case may be, or hold any other office of profit or connected with any political party or carrying on any business or pursuing any profession.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (7) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">7</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> The headquarters of the State Information Commission shall be at such place in the State as the State Government may, by notification in the Official Gazette, specify and the State Information Commission may, with the previous approval of the State Government, establish offices at other places in the State.
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

export default RTIAct2005Section15