"use client"
import React from 'react'

const MembersPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              MEMBERS PERMITTED IN PRIVILEGE PASS & PTOs
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Eligible family members and dependents who can be included in railway employee privilege passes
            </p>
          </div>

          {/* Family Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Spouse */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👫</div>
                <h4 className="font-semibold text-white text-lg">Spouse</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Spouse of a railway servant whether earning or not
              </p>
            </div>

            {/* Sons under 21 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👦</div>
                <h4 className="font-semibold text-white text-lg">Sons under 21</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Son or sons who have not attained the age of 21 years and are
                wholly dependent on the railway servant
              </p>
            </div>

            {/* Sons/Dependent Brothers 21+ */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🎓</div>
                <h4 className="font-semibold text-white text-lg">Sons/Dependent Brothers 21+</h4>
              </div>
              <div className="text-gray-200 leading-relaxed space-y-2">
                <p>
                  Son or sons / Dependent brothers of the age of 21 and above
                  who are:
                </p>
                <ul className="list-disc pl-1 space-y-1">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">📚</span>
                    Bonafide students of any recognized educational institution
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">🔬</span>
                    Engaged in any research work and do not get any scholarship/stipend
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">📋</span>
                    Working as an articled clerk under the Chartered Accountant
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">🏥</span>
                    Invalid, on appropriate certificate from Railway Doctor
                  </li>
                </ul>
              </div>
            </div>

            {/* Unmarried Daughters */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👧</div>
                <h4 className="font-semibold text-white text-lg">Unmarried Daughters</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Unmarried daughters of any age whether earning or not
              </p>
            </div>

            {/* Widowed Daughters */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">5</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👩‍🦳</div>
                <h4 className="font-semibold text-white text-lg">Widowed Daughters</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Widowed daughters provided they are dependent on the Railway
                Servant
              </p>
            </div>

            {/* Legally Divorced Daughter */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">6</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">💔</div>
                <h4 className="font-semibold text-white text-lg">Legally Divorced Daughter</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Legally divorced daughter who is dependent on the Railway
                Servant
              </p>
            </div>

            {/* Adopted Child */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">7</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👶</div>
                <h4 className="font-semibold text-white text-lg">Adopted Child</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                &quot;Adopted child&quot; means a child for whom there is
                satisfactory proof of adoption irrespective of the fact whether
                such adoption is permissible or not under the personal law
                governing the Railway Servant concerned.
              </p>
            </div>

            {/* Mother */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">8</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👵</div>
                <h4 className="font-semibold text-white text-lg">Mother</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Mother including a divorced mother
              </p>
            </div>

            {/* Unmarried/Widowed Sister */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">9</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👭</div>
                <h4 className="font-semibold text-white text-lg">Unmarried/Widowed Sister</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Unmarried or widowed sister
              </p>
            </div>

            {/* Brother/Step-brother under 21 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">10</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👨‍🦱</div>
                <h4 className="font-semibold text-white text-lg">Brother/Step-brother under 21</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Brother/step-brother under twenty one years of age [provided he
                is wholly dependent]
              </p>
            </div>

            {/* Invalid Brother */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-gray-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">11</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🦽</div>
                <h4 className="font-semibold text-white text-lg">Invalid Brother</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Invalid brother of any age
              </p>
            </div>

            {/* Brother 21+ Student */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">12</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🎓</div>
                <h4 className="font-semibold text-white text-lg">Brother 21+ Student</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Brother who has attained the age of twenty one years and is a
                Bonafide student of a recognized educational institution
              </p>
            </div>

            {/* Legally Divorced Sister */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-linear-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">13</span>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">💔</div>
                <h4 className="font-semibold text-white text-lg">Legally Divorced Sister</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Legally divorced sister (when father is not alive)
              </p>
            </div>
          </div>

          {/* Special Conditions Section */}
          <div className="space-y-6">
            {/* Pass Validity Period */}
            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-green-400/30 hover:bg-green-500/25 transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-green-500 to-emerald-500 p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Pass Validity Period (Point 14)
              </h4>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-l-4 border-green-500 shadow-lg hover:bg-white/15 transition-all duration-300">
                  <h5 className="font-semibold text-green-300 mb-2 text-base flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-green-400 mr-2">📅</span>
                    [i] Son&apos;s Age Limit
                  </h5>
                  <p className="text-gray-200 leading-relaxed">
                    The Privilege pass may be issued in favour of a Rly. Servant
                    with validity period up to the date preceding the date on
                    which the son will be attaining the age of 21 years.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl py-4 px-2 border-l-4 border-green-500 shadow-lg hover:bg-white/15 transition-all duration-300">
                  <h5 className="font-semibold text-green-300 mb-2 text-base flex flex-col lg:flex-row gap-2 items-center">
                    <span className="text-green-400 mr-2">⏰</span>
                    [ii] 5-Month Validity
                  </h5>
                  <p className="text-gray-200 leading-relaxed">
                    Privilege pass may be issued with validity of full 5 months
                    excluding the name of the son of the employee.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Conditions */}
            <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-2 border border-blue-400/30 hover:bg-blue-500/25 transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-blue-500 to-indigo-500 p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Additional Conditions
              </h4>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white/10 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-lg text-base font-bold group-hover:scale-110 transition-transform">15</span>
                  <p className="text-gray-200 leading-relaxed">
                                         The word &apos;Adopted&apos; should not be mentioned on the Pass/PTO
                  </p>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-lg text-base font-bold group-hover:scale-110 transition-transform">16</span>
                  <p className="text-gray-200 leading-relaxed">
                    Step sons/step daughters may be included in the privilege
                    pass of Railway employees, on specific request…. (RBE
                    No.47/2003)
                  </p>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-lg text-base font-bold group-hover:scale-110 transition-transform">17</span>
                  <p className="text-gray-200 leading-relaxed">
                    Widows of ex-railway employees who are dependent on their
                    son / daughter employed on the Railways, may exercise an
                    option either to avail of pass facility as a dependent
                    widowed mother by getting their name included in the
                    privilege pass drawn by their son/ daughter or they may draw
                                         pass(es) as per their entitlement under the &apos;Widow
                     Pass&apos; scheme…..ACS 20 issued. RBE 312/1999
                  </p>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-lg text-base font-bold group-hover:scale-110 transition-transform">18</span>
                  <p className="text-gray-200 leading-relaxed">
                    Dependent widow mother of the deceased railway employee may
                    be included in the privilege pass of the widows appointed on
                    compassionate grounds
                  </p>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-lg text-base font-bold group-hover:scale-110 transition-transform">19</span>
                  <p className="text-gray-200 leading-relaxed">
                    Widow mother-in-law in case of widows appointed on
                    compassionate grounds, whether her father is alive or
                    not….ACS 37 RBE 194/2001.
                  </p>
                </div>
                <div className="flex items-start group hover:bg-white/10 p-1 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-4 mt-1 lg:text-lg text-base font-bold group-hover:scale-110 transition-transform">20</span>
                  <p className="text-gray-200 leading-relaxed">
                    Not more than two dependents can be included in pass/ PTO
                    subject to the condition that the total number of persons
                    included in the Pass/ PTO will not exceed 5 exclusive of
                    Attendants wherever permissible…. This limit will not apply
                    if only family members are included in the Pass/ PTO….. Para
                    3 (ii) under the head &quot;Conditions of entitlement&quot;
                    of Schedule II of Pass Rules
                  </p>
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

export default MembersPass