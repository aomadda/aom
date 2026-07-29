"use client"
import React from 'react'

const LossPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-yellow-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-xl font-bold bg-linear-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              LOSS/ MISUSE/ FRAUDULENT USE
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-orange-300 mb-4">OF PASSES AND PTOs</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guidelines for handling pass security, loss reporting, and penalties for misuse of railway passes and privilege ticket orders.
            </p>
          </div>

          {/* Pass Security Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Pass Security and Loss Reporting
            </h2>
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Passes and PTOs are not transferable and should be used only by the person
                in whose favour they have been issued. <br /> <br /> Special care should be taken to ensure
                that passes and PTO&apos;s are not lost while in the custody of the pass holder. <br /> <br /> In
                the case of loss the pass or privilege ticket order may pass into unauthorised
                hands leading to fraudulent use for which the pass or PTO holder may have to share responsibility and be also liable for action under the rules. <br /> <br /> In case of loss
                of pass or PTO a report should be made immediately to the police by the pass
                or PTO holder sending a copy of the same to the Pass/Privilege Ticket Order
                issuing authority.
              </p>
            </div>
          </div>

          {/* Punishment Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </span>
              Punishment for Misuse
            </h2>
            <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Deterrent punishment should be awarded to railway servants detected
                misusing passes and privilege ticket orders; this may take the form of dismissal
                or removal from service or reduction to a lower post.
              </p>
            </div>
          </div>

          {/* Retired Railway Servants Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Retired Railway Servants
            </h2>
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                In case of a retired railway servant, misuse of post-retirement complimentary
                pass renders the retired railway servant liable to be declared ineligible for
                getting such passes.
              </p>
            </div>
          </div>

          {/* Fines Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </span>
              Fines for Improper Use
            </h2>
            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                A fine of Rs. 10/- for second class and Rs.25/- for First Class passes may be
                imposed on the Railway employees for not filling the date of commencement
                of the journey on the passes both privilege and duty granted them. <br /> <br /> This
                amount has to be recovered from the employee by the ticket checking staff
                and the proper receipt issued. <br /> <br /> This fact may also be endorsed on the passes.
                Passes may also be returned within one month of the expiry of the pass or its
                utilization whichever is earlier. For non-filling the date of commencement of
                journey on the passes, the following action may be taken:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-2">First case:</h4>
                  <p className="text-gray-200">Warning</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-red-300 mb-2">Subsequent:</h4>
                  <p className="text-gray-200">&apos;To be dealt with on merits&apos;. This should be taken serious view of and
                  suitable deterrent action taken against the defaulting staff.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Penalties Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Penalties for Loss of Passes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Duty Card Passes */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-purple-300 mb-4 text-center">Duty Card Passes</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">I Class:</span>
                    <span className="text-purple-300 font-semibold">Rs. 35/-</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">II Class:</span>
                    <span className="text-purple-300 font-semibold">Rs. 12.50</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">Trolley Pass:</span>
                    <span className="text-purple-300 font-semibold">Rs. 12.50</span>
                  </div>
                </div>
              </div>

              {/* Duty Cheque Passes */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-blue-300 mb-4 text-center">Duty Cheque Passes</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">I Class:</span>
                    <span className="text-blue-300 font-semibold">Rs. 10/-</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">II Class:</span>
                    <span className="text-blue-300 font-semibold">Rs. 5</span>
                  </div>
                </div>
              </div>

              {/* Privilege Passes */}
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-emerald-300 mb-4 text-center">Privilege Passes</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">I Class:</span>
                    <span className="text-emerald-300 font-semibold">Rs. 10/-</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">II Class:</span>
                    <span className="text-emerald-300 font-semibold">Rs. 5/-</span>
                  </div>
                </div>
              </div>

              {/* Residential Card Pass */}
              <div className="bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-amber-300 mb-4 text-center">Residential Card Pass</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">I-A & I Class:</span>
                    <span className="text-amber-300 font-semibold">Rs. 35/-</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">II Class:</span>
                    <span className="text-amber-300 font-semibold">Rs. 12.50</span>
                  </div>
                </div>
              </div>

              {/* Retired Railway Employees */}
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-red-300 mb-4 text-center">Retired Railway Employees</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">I Class:</span>
                    <span className="text-red-300 font-semibold">Rs. 25/-</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
                    <span className="text-gray-200">II Class:</span>
                    <span className="text-red-300 font-semibold">Rs. 10/-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes Section */}
          <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Notes
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl">1.</span>
                  <p className="text-gray-200 lg:text-lg text-base">
                    Office bearer of recognised Unions/Federations who are either serving Rly.
                    Employee or ex-Rly. employees will be treated at par with serving Rly.
                    employees
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl">2.</span>
                  <p className="text-gray-200 lg:text-lg text-base">
                    Whenever it is proposed to award a penalty of stoppage of passes and Privilege
                    Ticket Orders under RS(D&A) rules, as distinguished from action taken under
                    the above rule for irregularities in connection with the use of passes and PTOs
                    the procedures laid down in &quot;D&A Rules&quot; should be followed.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-yellow-400 mr-4 mt-1 text-xl">3.</span>
                  <p className="text-gray-200 lg:text-lg text-base">
                    3 times the cost to be recovered from serving officers who are on un
                    authorised absence from duty and have not returned the metal pass despite
                    request vide Board&apos;s Letter No. E(W)99 PS5-1/10 dated 2.7.1999 (RBE
                    158/1999)
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

export default LossPass