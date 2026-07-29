"use client"
import React from 'react'

const AMAppendixPage138 = () => {
  const governmentContacts = [
    {
      department: 'CM Office',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-300',
      borderColor: 'border-blue-400/30',
      contacts: [
        { title: 'Principal Secretary', details: 'BSNL: 040-23454664, 828 • Mobile: 09849482244' },
        { title: 'Special Secretary', details: 'BSNL: 040-23452421 • Mobile: 09849905130' },
        { title: 'Joint Secretary', details: 'BSNL: 040-23454071 • Mobile: 09848782043' },
        { title: 'Additional Secretary', details: 'BSNL: 040-23454193 • Mobile: 09849199226' }
      ]
    },
    {
      department: 'Chief Secretary',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-300',
      borderColor: 'border-green-400/30',
      contacts: [
        { title: 'Chief Secretary', details: 'BSNL: 040-23452620, 23455340 • Mobile: 09848054504' }
      ]
    },
    {
      department: 'Revenue (DM) Dept.',
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-300',
      borderColor: 'border-purple-400/30',
      contacts: [
        { title: 'Commissioner (DM)', details: 'BSNL: 040-23456005 • Mobile: 09849500909' },
        { title: 'Additional Commissioner', details: 'BSNL: 040-23452144 • Mobile: 09000150345' },
        { title: 'Special Commr. (SDMA)', details: 'BSNL: 040-23450211 • Mobile: 09000100191' },
        { title: 'Assistant Commr.', details: 'BSNL: 040-23451044 • Mobile: 09959277731' }
      ]
    }
  ]

  const homeAffairsContacts = [
    {
      title: 'Home Secretary',
      details: 'BSNL: 040-23093003, 31 • Mobile:'
    },
    {
      title: 'Joint Secretary(DM-I)',
      details: 'BSNL: 040-23092456 • Mobile: 09868819595'
    },
    {
      title: 'Joint Secretary(DM-II)',
      details: 'BSNL: 040-23092478 • Mobile: 09910320373'
    },
    {
      title: 'Executive Director Control Room',
      details: 'BSNL: 040-23702445 • Mobile: 09818394225'
    },
    {
      title: 'Control Room',
      details: 'BSNL: 040-23092923, 3054, 2763, 3563'
    }
  ]

  const ndmaContacts = [
    { title: 'Vice-Chairman', details: 'BSNL: 011-26701701 • Mobile: 09211822999' },
    { title: 'Member', details: 'BSNL: 011-26701775 • Mobile: 09871837999' },
    { title: 'Member', details: 'BSNL: 011-26701777 • Mobile: 09810111328' },
    { title: 'Member', details: 'BSNL: 011-26701735 • Mobile: 09810203406' },
    { title: 'Member', details: 'BSNL: 011-26701736 • Mobile: 09848046677 & 09810809456' }
  ]

  const defenseContacts = [
    {
      department: 'ARMY',
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-300',
      borderColor: 'border-amber-400/30',
      contacts: [
        { title: 'Commander, HQ (Andhra Sub-area)', details: 'BSNL: 040-27862278 • Mobile: 09849044764' },
        { title: 'Colonel, General Staff', details: 'BSNL: 040-27862086 • Mobile: 09849005243' }
      ]
    },
    {
      department: 'AIR FORCE',
      color: 'from-lime-500 to-lime-600',
      textColor: 'text-lime-300',
      borderColor: 'border-lime-400/30',
      contacts: [
        { title: 'Wing Commander', details: 'BSNL: 040-27862282 Ext.407 • Mobile: 09866638796' },
        { title: 'Group Captain, Begumpet Air Force Stn.', details: 'BSNL: 040-27753905 • Mobile: 09849022747' },
        { title: 'Air Office Commander, Hakimpet', details: 'BSNL: 040-27862064, 2282 to 87' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-indigo-300/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 py-8 lg:px-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            {/* Icon with glow effect */}
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative lg:p-4 p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full backdrop-blur-sm border border-white/20">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full shadow-2xl">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6">
              APPENDIX – I
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>

            <h2 className="lg:text-3xl text-xl font-bold text-white mb-4 tracking-wide">
               IMPORTANT CONTACT NUMBERS
            </h2>
            <p className="lg:text-lg text-base text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              GOVERNMENT OF ANDHRA PRADESH REVENUE (DM) DEPARTMENT – A.P. SECRETARIAT
            </p>
          </div>

          {/* Enhanced Content Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-8 lg:px-8 px-2 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="space-y-8">
              {/* Section Header */}
              <div className="group hover:bg-white/5 py-3 lg:px-8 px-2 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center space-y-6">
                  <div className="flex-shrink-0">
                    <div className="lg:w-20 lg:h-20 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 border border-white/20 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-2xl text-lg">6</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="lg:text-3xl text-xl font-bold text-white mb-3 flex flex-col items-center justify-center gap-3">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-3 rounded-xl shadow-lg">
                        <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      GOVERNMENT CONTACTS
                    </h3>
                  </div>
                </div>
              </div>

              {/* Government Departments Grid */}
              <div className="grid lg:grid-cols-2 gap-2">
                {governmentContacts.map((dept, index) => (
                  <div
                    key={dept.department}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Department Header */}
                    <div className={`bg-gradient-to-r ${dept.color} p-4 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative flex items-center justify-between">
                        <div>
                          <h4 className="lg:text-2xl text-xl font-bold text-white">{dept.department}</h4>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="py-4 px-2 space-y-4">
                      {dept.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="group/contact bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">
                                {contact.title}
                              </h5>
                              <p className="text-gray-300 text-sm leading-relaxed break-words">
                                {contact.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ministry of Home Affairs Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 lg:p-6 p-3">
                <div className="flex items-center flex-col text-center gap-4 mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-cyan-300">Ministry of Home Affairs (DM)</h4>
                  </div>
                </div>

                <div className="space-y-4">
                  {homeAffairsContacts.map((contact, index) => (
                    <div key={index} className="bg-white/5 rounded-xl py-4 px-2 border border-white/10">
                      <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">{contact.title}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {contact.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NDMA Section */}
              <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-rose-400/20 lg:p-6 p-3">
                <div className="flex items-center flex-col text-center gap-4 mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-rose-300">NDMA</h4>
                    <p className="text-rose-200 text-sm font-medium">National Disaster Management Authority</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {ndmaContacts.map((contact, index) => (
                    <div key={index} className="bg-white/5 rounded-xl py-4 px-2 border border-white/10">
                      <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">{contact.title}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {contact.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Defense Forces Grid */}
              <div className="grid lg:grid-cols-2 gap-2">
                {defenseContacts.map((dept, index) => (
                  <div
                    key={dept.department}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Department Header */}
                    <div className={`bg-gradient-to-r ${dept.color} p-4 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative flex items-center justify-between">
                        <div>
                          <h4 className="lg:text-2xl text-xl font-bold text-white">{dept.department}</h4>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="py-4 px-2 space-y-4">
                      {dept.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="group/contact bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">
                                {contact.title}
                              </h5>
                              <p className="text-gray-300 text-sm leading-relaxed break-words">
                                {contact.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Control Room Information */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-indigo-400/20 lg:p-6 p-3">
                <div className="flex items-center flex-col text-center gap-4 mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-indigo-300">Control Room/s</h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl py-4 px-2 border border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Toll Free No. 1077 common to all Districts within the District limits only.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl py-4 px-2 border border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Toll Free No. 1070 – Main Control Room, Secretariat
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-amber-400/20 lg:p-6 p-3">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-amber-300 lg:text-lg text-base mb-2">Important Note</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      These telephone numbers are subjected to change from time to time. They need to be updated by the concerned authorities.
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default AMAppendixPage138