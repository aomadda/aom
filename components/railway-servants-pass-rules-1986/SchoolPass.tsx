"use client"
import React from 'react'

const SchoolPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-900 via-teal-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-green-500/20 to-teal-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-green-500 to-teal-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-green-100 to-teal-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              SCHOOL PASS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-green-500 to-teal-600 mx-auto mb-4 rounded-full"></div>
            <p className="lg:text-lg text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Educational travel benefits for railway servants&apos; children studying in recognized institutions
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center">
              <span className="bg-linear-to-r from-green-500 to-teal-500 p-2 rounded-full mr-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Introduction
            </h3>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base mb-4">
              A school pass may be issued to the son or daughter of a railway
              servant who is a bona-fide student of any recognized educational
              institution.
            </p>
            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30">
              <p className="text-sm text-gray-200">
                <strong className="text-green-300">For Travel entitlement</strong> please refer RBE No.
                16/2019 Dated 31/01/2019
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* School Cheque Pass */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🎫</div>
                <h4 className="font-semibold text-white text-lg">School Cheque Pass</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                Can be issued to each such student son/daughter who is dependent
                on the railway servant on production of a certificate from the
                recognized institution where the student is studying and which
                is away from the headquarters of the Railway servant.
              </p>
            </div>

            {/* Both Parents Railway Servants */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-white text-lg">Both Parents Railway Servants</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                In cases where both husband and wife are railway servants, the
                passes shall be allowed against the account of either of the
                two.
              </p>
            </div>

            {/* Parent/Guardian Inclusion */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👨‍👩‍👦</div>
                <h4 className="font-semibold text-white text-lg">Parent/Guardian Inclusion</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                In case of a boy less than 18 years and a girl of any age, the
                parent or guardian may be included in the pass issued.
              </p>
            </div>

            {/* Separate Pass for Parent */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🎫</div>
                <h4 className="font-semibold text-white text-lg">Separate Pass for Parent</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                A parent including a stepparent or guardian in the same class
                may be included in a pass - outward or inward and he/she may be
                issued a separate pass for going to bring the student or
                returning alone after leaving the student at school/college.
              </p>
            </div>

            {/* Guardian II Class Pass */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👨‍💼</div>
                <h4 className="font-semibold text-white text-lg">Guardian II Class Pass</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                If the attendant be a guardian he/she will be issued only a II
                Class Pass.
              </p>
            </div>

            {/* Vacation Duration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📅</div>
                <h4 className="font-semibold text-white text-lg">Vacation Duration</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                This should be in case of recognized vacations of not less than
                three consecutive days duration (Sunday being included) or
                closure of institution due to unforeseen circumstances.
              </p>
            </div>

            {/* Admission/Jointing Travel */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🚂</div>
                <h4 className="font-semibold text-white text-lg">Admission/Jointing Travel</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                To travel to recognized institution for admission/joining and
                back to head quarters of the railway servant.
              </p>
            </div>

            {/* Break of Journey */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🔄</div>
                <h4 className="font-semibold text-white text-lg">Break of Journey</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                Break of journey en-route is permissible on school pass if
                endorsement to this effect is made on the pass.
              </p>
            </div>

            {/* Gazette Officer Approval */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">👨‍⚖️</div>
                <h4 className="font-semibold text-white text-lg">Gazette Officer Approval</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                In cases where a school Pass is sought to/from a place other
                than the Railway servant&apos;s headquarters or the permanent
                place of residence of the other parent, if it be different, the
                grant of such pass shall have the approval of the gazette
                officer.
              </p>
            </div>

            {/* Pass Stoppage */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">⏸️</div>
                <h4 className="font-semibold text-white text-lg">Pass Stoppage</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                Issue of School passes will not be affected by the stoppage of
                privilege passes of an employee on any account including by way
                of punishment.
              </p>
            </div>

            {/* Suspension Incidents */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">⚠️</div>
                <h4 className="font-semibold text-white text-lg">Suspension Incidents</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                Incidents of suspension will not affect the eligibility of
                Railway employees to such passes.
              </p>
            </div>

            {/* Bonafide Certificate */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📜</div>
                <h4 className="font-semibold text-white text-lg">Bonafide Certificate</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                Bonafide Certificate from institution to be submitted once in a
                year at the beginning of the academic year for School Pass.
              </p>
            </div>

            {/* Advance Issue */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">⏰</div>
                <h4 className="font-semibold text-white text-lg">Advance Issue</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                School Passes may also be issued up to 4 months advance (RBE
                101/2011).
              </p>
            </div>

            {/* Without Certificate */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📝</div>
                <h4 className="font-semibold text-white text-lg">Without Certificate</h4>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm">
                School Passes may be issued without Bonafide Certificate at the
                time of issuing but it should be submitted within a month.
              </p>
            </div>
          </div>

          {/* Entitlement Section */}
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center">
                <span className="bg-linear-to-r from-teal-500 to-emerald-500 p-2 rounded-full mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Entitlement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Group A & B Gazetted Officers */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 shadow-lg hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">👨‍💼</div>
                    <h4 className="font-semibold text-white text-lg">Group A & B Gazetted Officers</h4>
                    <span className="text-teal-300 text-sm">PLPM 8 TO 17</span>
                  </div>
                  <div className="text-sm text-gray-200">
                    <p>
                      <strong className="text-teal-300">Class:</strong> TO BE ISSUED WITH THE CLASS OF PASS
                      WHICH THE RAILWAY SERVANT IS ENTITLED AS ON PRIVILEGE
                      ACCOUNT.
                    </p>
                  </div>
                </div>

                {/* Non-Gazetted */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl py-4 px-3 border border-teal-400/30 shadow-lg hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">👨‍💻</div>
                    <h4 className="font-semibold text-white text-lg">Non-Gazetted</h4>
                    <span className="text-teal-300 text-sm">PLPM 1 TO 6 AND ABOVE</span>
                  </div>
                  <div className="text-sm text-gray-200">
                    <p>
                      <strong className="text-teal-300">Class:</strong> TO BE ISSUED WITH THE CLASS OF PASS
                      WHICH THE RAILWAY SERVANT IS ENTITLED AS ON PRIVILEGE
                      ACCOUNT.
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Case Note */}
              <div className="mt-6 bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 border border-yellow-400/30 hover:bg-yellow-500/25 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  <div className="text-3xl mr-4 mt-1">⚠️</div>
                  <div>
                    <h4 className="text-xl text-center font-semibold text-white mb-2">
                      Special Case
                    </h4>
                    <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                      HOWEVER, THE CHILDREN OF RAILWAY SERVANTS STUDYING IN OAK
                      GROVE SCHOOL, JHARPANI WHO ARE NOT ORDINARILY ENTITLED FC
                      PASSES MAY BE ISSUED FIRST CLASS PASS AS A SPECIAL CASE
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
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default SchoolPass