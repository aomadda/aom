"use client"
import React from 'react'

const WidowPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-rose-500/20 to-pink-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-rose-500 to-pink-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              WIDOW PASS
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-rose-500 to-pink-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Compassionate travel benefits for widows of railway servants
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Widow Pass
              </h2>
              <p className="text-rose-300 font-medium text-sm sm:text-base">
                Compassionate travel benefits for widows of railway servants
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md border border-rose-200/30 mb-6">
              <p className="text-gray-200 leading-relaxed">
                After the demise of a railway employee, eligible widows are
                entitled to special travel benefits through the Widow Pass scheme.
                The main rules, eligibility, and special conditions are detailed
                below.
              </p>
            </div>
          </div>

          {/* Eligibility Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Service on 12.03.1987 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-rose-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-white">
                  In Service on 12.03.1987
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Widows of railway employees who were in service as on
                12.03.1987, or who joined after that date and are compulsorily
                governed under the Widow Pass scheme, are eligible. They are
                entitled to 4 sets of PTOs per year while in service.
              </p>
            </div>

            {/* One-time Payment */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-rose-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-white">
                  One-time Payment
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Widows of employees who were in service prior to 12.03.1987 are
                eligible for the Widow Pass scheme on a one-time payment of Rs.
                250.
              </p>
            </div>

            {/* Public Sector Absorption */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-rose-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-white">
                  Public Sector Absorption
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Widows of employees who were permanently absorbed in public
                sector/autonomous bodies prior to 12.03.1987 and were in receipt
                of post-retirement complimentary passes are also eligible for
                the Widow Pass scheme on a one-time payment of Rs. 250.
              </p>
            </div>

            {/* Opted Out Cases */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-rose-500 hover:bg-white/15 transition-all duration-300 group">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h4 className="font-semibold text-white">Opted Out Cases</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Widows who had opted out of the Widow Pass scheme can also be
                admitted to the scheme on a one-time payment of Rs. 250.
              </p>
            </div>
          </div>

          {/* Passes Admissible Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Passes Admissible Per Year
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👷</span>
                  <span className="text-gray-200 text-sm">
                    <b>Group D Widows:</b> One complimentary pass every alternate year.
                  </span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">💔</span>
                  <span className="text-gray-200 text-sm">
                    <b>Widows of employees who die in service:</b> At least one complimentary pass every alternate year (even if qualifying service is less).
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🔄</span>
                  <span className="text-gray-200 text-sm">
                    <b>Multiple widows:</b> Passes are given by rotation in specified years.
                  </span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👵</span>
                  <span className="text-gray-200 text-sm">
                    <b>Widows above 65 years:</b> Companion facility is available.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Class and Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Class of Pass
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                The class of Widow Pass will be the same as that admissible to
                the employee on retirement or as would be admissible notionally
                if the date of death is reckoned as the date of retirement.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Special Conditions
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                The terms and conditions applicable to Privilege Passes also
                apply to Widow Passes, except that dependent relatives are not
                eligible. However, the dependent widow mother can be included as
                a family member.
              </p>
            </div>
          </div>

          {/* Special Conditions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Important Rules
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👥</span>
                  <span className="text-gray-200 text-sm">
                    Dependent relatives are not eligible for inclusion in Widow Passes. However, the dependent widow mother of the deceased employee can be included as a family member.
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-yellow-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                  <span className="text-gray-200 text-sm">
                    If the widow becomes otherwise eligible for pass facility due to her son&apos;s/daughter&apos;s employment in Railways, her own employment, or remarriage, she will not be entitled to the Widow Pass. Once an option is exercised, it is final and cannot be changed.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg lg:p-6 p-3 border-l-4 border-purple-500 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Option on Compassionate Appointment
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Widows appointed on compassionate grounds may choose either to
                avail pass facilities as a railway servant or continue under the
                Widow Pass scheme. Once exercised, the option is final.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">
                  Option at Retirement
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                At the time of retirement/quitting service, widows may choose to
                be governed by the Widow Pass Scheme or the Post-retirement
                Complimentary Pass Scheme as per their status. Once exercised,
                the option is final.
              </p>
            </div>
          </div>

          {/* Senior Citizen Companion */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Senior Citizen Companion Facility
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👵</span>
                  <span className="text-gray-200 text-sm">
                    Companion facility in 1st/1st &apos;A&apos; Widow Pass is available only for widows above 65 years of age.
                  </span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">🚂</span>
                  <span className="text-gray-200 text-sm">
                    Companion facility is available in lieu of Attendant, only when the widow herself travels in Sleeper/2nd Class.
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-teal-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📝</span>
                  <span className="text-gray-200 text-sm">
                    Specific request must be made for companion facility. The ages of persons above 65 years included in the pass must be mentioned.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="p-4 bg-indigo-500/20 rounded-lg border border-indigo-300/30">
                <p className="text-sm italic text-gray-200">
                  &quot;Companion in lieu of Attendant permitted when the Pass Holder travel in Sleeper Class/2nd Class.&quot;
                </p>
              </div>
              <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-300/30">
                <p className="text-sm italic text-gray-200">
                  &quot;Companion in lieu of Attendant is permitted only when the pass holder and/or other family member of more than 65 years of age is/are travelling in Sleeper Class/II Class.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Exclusions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Exclusions
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-gray-200 text-sm">
                    This scheme does not apply to widows of employees who retired or died before 12.03.1987.
                  </span>
                </div>
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👷</span>
                  <span className="text-gray-200 text-sm">
                    It does not apply to casual labour unless they are absorbed as regular employees.
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">⚖️</span>
                  <span className="text-gray-200 text-sm">
                    The facility available to the widow of a male employee is also available to the widower of a female employee.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Members Permitted */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Members Permitted in Widow Pass
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">👵</span>
                  <span className="text-gray-200 text-sm">
                    The dependent widow mother of the deceased employee can be included as a family member.
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">❌</span>
                  <span className="text-red-300 text-sm">
                    Children born out of void marriage are not eligible for inclusion in the Widow Pass.
                  </span>
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

export default WidowPass