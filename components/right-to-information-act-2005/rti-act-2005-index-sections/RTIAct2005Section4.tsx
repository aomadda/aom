'use client'
import React from 'react'
import { 
  Scale,
  Shield,
} from 'lucide-react'

const RTIAct2005Section4 = () => {
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
            
            {/* Obligations of public authorities Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                4. Obligations of public authorities
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Subsection (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">
                        1
                      </span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2">
                        <span className="font-semibold text-cyan-200">Every public authority shall—</span>
                      </p>

                      {/* Clause (a) */}
                      <div className="w-full rounded-lg border border-cyan-300/20 bg-white/5 p-3">
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed flex flex-col items-center justify-center gap-3 lg:gap-4">
                          <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">a</span> maintain all its records duly catalogued and indexed in a manner and the form which facilitates the right to information under this Act and ensure that all records that are appropriate to be computerised are, within a reasonable time and subject to availability of resources, computerised and connected through a network all over the country on different systems so that access to such records is facilitated;
                        </p>
                      </div>

                      {/* Clause (b) */}
                      <div className="w-full rounded-lg border border-blue-300/20 bg-white/5 p-3">
                        <div className="flex-1">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed mb-3 flex flex-col items-center justify-center gap-3 lg:gap-4">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">b</span> publish within one hundred and twenty days from the enactment of this Act,—
                          </p>
                          <div className="ml-4 mt-3 space-y-2 border-l border-cyan-300/30 pl-4">
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">i</span> the particulars of its organisation, functions and duties;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">ii</span> the powers and duties of its officers and employees;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">iii</span> the procedure followed in the decision making process, including channels of supervision and accountability;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">iv</span> the norms set by it for the discharge of its functions;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">v</span> the rules, regulations, instructions, manuals and records, held by it or under its control or used by its employees for discharging its functions;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">vi</span> a statement of the categories of documents that are held by it or under its control;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">vii</span> the particulars of any arrangement that exists for consultation with, or representation by, the members of the public in relation to the formulation of its policy or implementation thereof;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">viii</span> a statement of the boards, councils, committees and other bodies consisting of two or more persons constituted as its part or for the purpose of its advice, and as to whether meetings of those boards, councils, committees and other bodies are open to the public, or the minutes of such meetings are accessible for public;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">ix</span> a directory of its officers and employees;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">x</span> the monthly remuneration received by each of its officers and employees, including the system of compensation as provided in its regulations;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xi</span> the budget allocated to each of its agency, indicating the particulars of all plans, proposed expenditures and reports on disbursements made;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xii</span> the manner of execution of subsidy programmes, including the amounts allocated and the details of beneficiaries of such programmes;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xiii</span> particulars of recipients of concessions, permits or authorisations granted by it;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xiv</span> details in respect of the information, available to or held by it, reduced in an electronic form;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xv</span> the particulars of facilities available to citizens for obtaining information, including the working hours of a library or reading room, if maintained for public use;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xvi</span> the names, designations and other particulars of the Public Information Officers;</p>
                            <p className="text-gray-300 lg:text-base text-sm leading-relaxed"><span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">xvii</span> such other information as may be prescribed;</p>
                          </div>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed mt-3">
                            and thereafter update these publications every year;
                          </p>
                        </div>
                      </div>

                      {/* Clause (c) */}
                      <div className="w-full rounded-lg border border-cyan-300/20 bg-white/5 p-3">
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed flex flex-col items-center justify-center gap-3 lg:gap-4">
                          <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">c</span> publish all relevant facts while formulating important policies or announcing the decisions which affect public;
                        </p>
                      </div>

                      {/* Clause (d) */}
                      <div className="w-full rounded-lg border border-blue-300/20 bg-white/5 p-3">
                        <p className="text-gray-300 lg:text-base text-sm leading-relaxed flex flex-col items-center justify-center gap-3 lg:gap-4">
                          <span className="inline-flex min-w-9 justify-center rounded-full bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-200 mr-2">d</span> provide reasons for its administrative or quasi-judicial decisions to affected persons.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subsection (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">2</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        It shall be a constant endeavour of every public authority to take steps in accordance with the requirements of clause (b) of sub-section (1) to provide as much information suomotu to the public at regular intervals through various means of communications, including internet, so that the public have minimum resort to the use of this Act to obtain information.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (3) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">3</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        For the purposes of sub-section (1), every information shall be disseminated widely and in such form and manner which is easily accessible to the public.
                      </p>
                    </div>
                  </div>

                  {/* Subsection (4) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">4</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        All materials shall be disseminated taking into consideration the cost effectiveness, local language and the most effective method of communication in that local area and the information should be easily accessible, to the extent possible in electronic format with the Central Public Information Officer or State Public Information Officer, as the case may be, available free or at such cost of the medium or the print cost price as may be prescribed.
                      </p>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">
                        !
                      </span>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-orange-300">Explanation.</span>—For the purposes of sub-sections (3) and (4), &quot;disseminated&quot; means making known or communicated the information to the public through notice boards, newspapers, public announcements, media broadcasts, the internet or any other means, including inspection of offices of any public authority.
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

export default RTIAct2005Section4