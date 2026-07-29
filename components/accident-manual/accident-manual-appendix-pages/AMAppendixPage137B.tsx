"use client"
import React from 'react'

const AMAppendixPage137B = () => {
  const divisions = [
    {
      code: 'SC',
      name: 'Secunderabad',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-300',
      borderColor: 'border-blue-400/30',
      contacts: [
        { title: 'DRM', details: 'Railway: 070–86199, BSNL: 040–27830449, Mobile: 09701371000' },
        { title: 'ADRM/O', details: 'Railway: 070–86197, BSNL: 040–27825102, Mobile: 09701371001' },
        { title: 'ADRM/T', details: 'Railway: 070–86198, BSNL: 040–27834083, Mobile: 09701371002' },
        { title: 'Control Office', details: 'Railway: 070–86634, 86637, 88116, BSNL: 040–27823156' }
      ]
    },
    {
      code: 'HYB',
      name: 'Hyderabad',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-300',
      borderColor: 'border-green-400/30',
      contacts: [
        { title: 'DRM', details: 'Railway: 070–86099, BSNL: 040–27820152, Mobile: 09701372000' },
        { title: 'ADRM', details: 'Railway: 070–86098, BSNL: 040–27825757, Mobile: 09701372001' },
        { title: 'Control Office', details: 'Railway: 070–88298, 88257, BSNL: 040–27834535, 27823905' }
      ]
    },
    {
      code: 'BZA',
      name: 'Vijayawada',
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-300',
      borderColor: 'border-purple-400/30',
      contacts: [
        { title: 'DRM', details: 'Railway: 67000, BSNL: 0866–2572690, Mobile: 09701373000' },
        { title: 'ADRM', details: 'Railway: 67002, BSNL: 0866–2573302, Mobile: 09701373001' },
        { title: 'Control Office', details: 'Railway: 68128, 68130, 68134, BSNL: 0866–2578860' }
      ]
    },
    {
      code: 'GNT',
      name: 'Guntur',
      color: 'from-rose-500 to-rose-600',
      textColor: 'text-rose-300',
      borderColor: 'border-rose-400/30',
      contacts: [
        { title: 'DRM', details: 'Railway: 32000, BSNL: 0863–2234229, Mobile: 09701379000' },
        { title: 'ADRM', details: 'Railway: 32002, BSNL: 0863–2234451, Mobile: 09701379001' },
        { title: 'Control Office', details: 'Railway: 32920, BSNL: 0863–2234613' }
      ]
    },
    {
      code: 'GTL',
      name: 'Guntakal',
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-300',
      borderColor: 'border-amber-400/30',
      contacts: [
        { title: 'DRM', details: 'Railway: 27000, BSNL: 08552–226467, Mobile: 09701374000' },
        { title: 'ADRM', details: 'Railway: 27002, BSNL: 08552–226674, Mobile: 09701374001' },
        { title: 'Control Office', details: 'Railway: 27687, 28640, BSNL: 08552–226427, 226417' }
      ]
    },
    {
      code: 'NED',
      name: 'Nanded',
      color: 'from-lime-500 to-lime-600',
      textColor: 'text-lime-300',
      borderColor: 'border-lime-400/30',
      contacts: [
        { title: 'DRM', details: 'Railway: 52200, BSNL: 02462–260333, Mobile: 09730471000' },
        { title: 'ADRM', details: 'Railway: 52211, BSNL: 02462–260694, Mobile: 09740471001' },
        { title: 'Control Office', details: 'Railway: 52258, 52255, BSNL: 02462–261729' }
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

      <div className="relative z-10 py-8 lg:px-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            {/* Icon with glow effect */}
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative lg:p-4 p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full backdrop-blur-sm border border-white/20">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 lg:p-4 p-2 rounded-full shadow-2xl">
                  <svg className="lg:w-10 lg:h-10 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6">
              APPENDIX – I
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>

            <h2 className="lg:text-3xl text-xl font-bold text-white mb-4 tracking-wide">
               DISASTER MANAGEMENT
            </h2>
            <p className="lg:text-lg text-base text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              DISASTER MANAGEMENT ACT • NATIONAL DISASTER MANAGEMENT AUTHORITY (NDMA) • NATIONAL DISASTER RESPONSE FORCE (NDRF)
            </p>
            <p className="lg:text-base text-sm text-gray-400 max-w-5xl mx-auto leading-relaxed mt-4">
              Zonal Disaster Management Related Contact Numbers
            </p>
          </div>

          {/* Enhanced Content Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-8 px-2 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="space-y-8">
              {/* Section Header */}
              <div className="group hover:bg-white/5 py-3 lg:px-8 px-2 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center space-y-6">
                  <div className="flex-shrink-0">
                    <div className="lg:w-20 lg:h-20 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 border border-white/20 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-xl text-lg">5</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="lg:text-3xl text-xl font-bold text-white mb-3 flex flex-col items-center justify-center gap-3">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-3 rounded-xl shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      IMPORTANT CONTACT NUMBERS
                    </h3>
                    <p className="text-xl text-blue-300 font-semibold">RAILWAYS</p>
                  </div>
                </div>
              </div>

              {/* Railway Divisions Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {divisions.map((division, index) => (
                  <div
                    key={division.code}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Division Header */}
                    <div className={`bg-gradient-to-r ${division.color} p-4 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative flex items-center justify-between">
                        <div>
                          <h4 className="text-2xl font-bold text-white">{division.code}</h4>
                          <p className="text-white/90 text-sm font-medium">{division.name} Division</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="py-4 px-2 space-y-4">
                      {division.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="group/contact bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${division.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
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

              {/* Headquarters Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 lg:p-6 p-3">
                <div className="flex items-center flex-col text-center gap-4 mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="lg:text-2xl text-xl font-bold text-cyan-300">HQRS</h4>
                    <p className="text-cyan-200 text-sm font-medium">Headquarters Division</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">Central Control</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Railway: 070–88120, 86446, 86447, 86455, 86103 • BSNL: 040-27820326
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">Disaster Management Control Room</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Railway: 070–88430, 88431, 88432, 88433 • BSNL: 040-27821430, 1466, 1720
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-2">Emergency Control</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Railway: 86412 • BSNL: 040-27820326
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

export default AMAppendixPage137B
