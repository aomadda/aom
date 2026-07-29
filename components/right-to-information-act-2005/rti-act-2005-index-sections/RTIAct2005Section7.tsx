'use client'
import React from 'react'
import { 
  Scale,
  CheckCircle
} from 'lucide-react'

const RTIAct2005Section7 = () => {
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
            
            {/* Disposal of request Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <CheckCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                7. Disposal of request
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">1</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> Subject to the proviso to sub-section (2) of section 5 or the proviso to sub-section (3) of section 6, the Central Public Information Officer or State Public Information Officer, as the case may be, on receipt of a request under section 6 shall, as expeditiously as possible, and in any case within thirty days of the receipt of the request, either provide the information on payment of such fee as may be prescribed or reject the request for any of the reasons specified in sections 8 and 9:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                          <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 px-2 py-0.5 font-bold text-white mt-0.5 shadow-sm">!</span>
                            <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              <span className="font-semibold text-orange-300">Provided that</span> where the information sought for concerns the life or liberty of a person, the same shall be provided within forty-eight hours of the receipt of the request.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">2</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> If the Central Public Information Officer or State Public Information Officer, as the case may be, fails to give decision on the request for information within the period specified under sub-section (1), the Central Public Information Officer or State Public Information Officer, as the case may be, shall be deemed to have refused the request.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">3</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> Where a decision is taken to provide the information on payment of any further fee representing the cost of providing the information, the Central Public Information Officer or State Public Information Officer, as the case may be, shall send an intimation to the person making the request, giving—
                        </p>
                        <div className="ml-4 mt-3 space-y-2 border-l border-cyan-300/30 pl-4">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">a</span> the details of further fees representing the cost of providing the information as determined by him, together with the calculations made to arrive at the amount in accordance with fee prescribed under sub-section (1), requesting him to deposit that fees, and the period intervening between the despatch of the said intimation and payment of fees shall be excluded for the purpose of calculating the period of thirty days referred to in that sub-section;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">b</span> information concerning his or her right with respect to review the decision as to the amount of fees charged or the form of access provided, including the particulars of the appellate authority, time limit, process and any other forms.
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
                        <span className="font-semibold text-cyan-200"></span> Where access to the record or a part thereof is required to be provided under this Act and the person to whom access is to be provided is sensorily disabled, the Central Public Information Officer or State Public Information Officer, as the case may be, shall provide assistance to enable access to the information, including providing such assistance as may be appropriate for the inspection.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (5) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">5</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> Where access to information is to be provided in the printed or in any electronic format, the applicant shall, subject to the provisions of sub-section (6), pay such fee as may be prescribed:
                        </p>
                        <div className="bg-orange-500/20 rounded-lg p-3 mt-3 border border-orange-400/30">
                          <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 px-2 py-0.5 font-bold text-white mt-0.5 shadow-sm">!</span>
                            <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                              <span className="font-semibold text-orange-300">Provided that</span> the fee prescribed under sub-section (1) of section 6 and sub-sections (1) and (5) of section 7 shall be reasonable and no such fee shall be charged from the persons who are of below poverty line as may be determined by the appropriate Government.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (6) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">6</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> Notwithstanding anything contained in sub-section (5), the person making request for the information shall be provided the information free of charge where a public authority fails to comply with the time limits specified in sub-section (1).
                      </p>
                    </div>
                  </div>

                  {/* Subsection (7) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">7</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> Before taking any decision under sub-section (1), the Central Public Information Officer or State Public Information Officer, as the case may be, shall take into consideration the representation made by a third party under section 11.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (8) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">8</span>
                      <div className="flex-1 w-full">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          <span className="font-semibold text-cyan-200"></span> Where a request has been rejected under sub-section (1), the Central Public Information Officer or State Public Information Officer, as the case may be, shall communicate to the person making the request,—
                        </p>
                        <div className="ml-4 mt-3 space-y-2 border-l border-cyan-300/30 pl-4">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">i</span> the reasons for such rejection;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">ii</span> the period within which an appeal against such rejection may be preferred; and
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">iii</span> the particulars of the appellate authority.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (9) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">9</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        <span className="font-semibold text-cyan-200"></span> An information shall ordinarily be provided in the form in which it is sought unless it would disproportionately divert the resources of the public authority or would be detrimental to the safety or preservation of the record in question.
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

export default RTIAct2005Section7