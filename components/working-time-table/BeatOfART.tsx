"use client"
import React from 'react'

const BeatOfART = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BEAT of ARTs, ARMVs & 140T BD Cranes with its normal jurisdiction on SCR
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* BEAT of ARTs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              BEAT of ARTs with its normal jurisdiction on SCR
            </h2>
            
            <div className="space-y-4">
              {/* Station Cards */}
              {[
                { num: 1, title: 'SC - SC - "B" Class', beat: 'SC-ALER, SC-WADI, VKB-PRLI, KHNP-TJSP, SC-DHNE, DKC-KSN, GWD-RC, SC-AKE' },
                { num: 2, title: 'SC - KZJ - "B" Class', beat: 'KZJ-KI, KZJ-ALER, KZJ-PDPL, DKJ-MUGR, KRA-SYI-SPSG, MTMI-JNPD, BDCR-JVRB' },
                { num: 3, title: 'SC - BPA - "B" Class', beat: 'BPA-BPQ, BPA-PDPLKRMR, MAGH-GDCR' },
                { num: 4, title: 'HYB - NZB - "B" Class', beat: 'NZB-AKE, NZB-MUE, NZB-KRMR, AKE-MDAK, MOB-GJWL, JKM-BDHN' },
                { num: 5, title: 'BZA - BZA - "B" Class', beat: 'BZA-KI, BZJ-CJM, BZA-BMD, BZA-MTM, GDV-BVRM' },
                { num: 6, title: 'BZA - RJY - "B" Class', beat: 'RJY-DVD, RJY-BMD, SLO-COA, NDD-NS' },
                { num: 7, title: 'BZA - BTTR - "B" Class', beat: 'BTTR-GDR, BTTR-CJM, VRJN-KAPT, VRJN-OBVP' },
                { num: 8, title: 'GTL - GTL - "B" Class', beat: 'GTL-WD, GTL-BAY, GTL-NDL-YA, GTL-KLU, GTL-YA, NDL-YA' },
                { num: 9, title: 'GTL - RU - "B" Class', beat: 'RU-KPD, RU-GDR, RU-YA, HX-PDMI' },
                { num: 10, title: 'GTL - DMM - "B" Class', beat: 'DMM-PAK, DMM-GY' },
                { num: 11, title: 'GNT - GNT - "B" Class', beat: 'GNT-KCC, GNT-PGDP, GNT-TEL-RAL, GNT-NDL, NDKD-MCLA, VNUP-JNPD, PGRN-SYM' },
                { num: 12, title: 'NED - PAU - "A" Class', beat: 'PAU-MMR, PAU-MUE-PMKT, PBN-PRLI, PAU-AK' },
              ].map((station, index) => {
                const getBadgeGradient = (idx: number) => {
                  const gradients = [
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                    'from-green-400 via-emerald-500 to-teal-500',
                  ]
                  return gradients[idx % gradients.length]
                }

                const getGradientColor = () => {
                  return 'from-green-500/20 to-emerald-500/20'
                }

                const getBorderColor = () => {
                  return 'border-green-400/30'
                }

                return (
                  <div key={station.num} className={`bg-linear-to-br ${getGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                    <div className="flex items-center justify-center flex-col gap-4">
                      <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                        {station.num}
                      </div>
                      <div className="flex-1 w-full pt-1">
                        <h3 className="lg:text-xl text-lg font-bold text-white mb-4 text-center">{station.title}</h3>
                        <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                          <p className="text-gray-200 leading-relaxed">
                            <span className="text-yellow-300 font-semibold">Beat:</span> {station.beat}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* BEAT of ARMVs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              BEAT of ARMVs with its normal jurisdiction on SCR
            </h2>
            
            <div className="space-y-4">
              {/* ARMVs Station Cards */}
              {[
                { num: 1, title: 'SC - SC - Scale-I - SPARMV', beat: 'SC-ALER, SC-WADI, VKB-PRLI, SC-AKE, KHNP-TJSP, DKC-KSN, GWD-RC, PGDP-NLDA, SC-DHNE' },
                { num: 2, title: 'SC - KZJ - Scale-I - HS-SPARMV', beat: 'KZJ-KI, KZJ-ALER, KZJ-PDPL, DKJ-MUGR, KRA-SYISPSG, MTMI-JNPD, KZJ-BPQ, PDPL-KRMR' },
                { num: 3, title: 'HYB - NZB - Scale-I - SPARMV', beat: 'NZB-AKE, NZB-MUE, NZB-KRMR, NZB-MDAK, MOB-GJWL, NZB-BDHN' },
                { num: 4, title: 'BZA - BZA - Scale-I - HS-SPARMV', beat: 'BZA-KI, BZJ-CJM, BZA-BMD, BZA-MTM, GDV-BVRM' },
                { num: 5, title: 'BZA - RJY - Scale-I - SPARMV', beat: 'RJY-DVD, RJY-BMD, SLO-COA, NDD-NS' },
                { num: 6, title: 'BZA - BTTR - Scale-I - SPARMV', beat: 'BTTR-GDR, BTTR-CJM, VRJN-KAPT, VRJN-OBVP' },
                { num: 7, title: 'GTL - GTL - Scale-I - HS-SPARMV', beat: 'GTL-WD, GTL-BAY, GTL-NDL, NDL-YA, GTL-KLU, GTL-YA' },
                { num: 8, title: 'GTL - RU - Scale-I - Conventional', beat: 'RU-KPD, RU-GDR, RU-YA, HX-PDMI' },
                { num: 9, title: 'GTL - DMM - Scale-I - Conventional', beat: 'DMM-PAK, DMM-GY' },
                { num: 10, title: 'GNT - GNT - Scale-I - HS-SPARMV', beat: 'GNT-MCLA, GNT-TEL, TEL-RAL, NDKD-NLDA, GNT-NDL, GNT-KCC, VNPD-JNPD, PGRN-SYM' },
                { num: 11, title: 'NED - PAU - Scale-I - HS-SPARMV', beat: 'PAU-MMR, PAU-MUE, MUE-PMKT, PBN-PRLI, PAU-AK' },
              ].map((station, index) => {
                const getBadgeGradient = (idx: number) => {
                  const gradients = [
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                    'from-blue-400 via-cyan-500 to-teal-500',
                  ]
                  return gradients[idx % gradients.length]
                }

                const getGradientColor = () => {
                  return 'from-blue-500/20 to-cyan-500/20'
                }

                const getBorderColor = () => {
                  return 'border-blue-400/30'
                }

                return (
                  <div key={station.num} className={`bg-linear-to-br ${getGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                    <div className="flex items-center justify-center flex-col gap-4">
                      <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                        {station.num}
                      </div>
                      <div className="flex-1 w-full pt-1">
                        <h3 className="lg:text-xl text-lg font-bold text-white mb-4 text-center">{station.title}</h3>
                        <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                          <p className="text-gray-200 leading-relaxed">
                            <span className="text-yellow-300 font-semibold">Beat:</span> {station.beat}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Beat of 140T BD Crane Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Beat of 140T BD Crane with its normal jurisdiction on SCR
            </h2>
            
            <div className="space-y-4">
              {/* BD Crane Station Cards */}
              {[
                { num: 1, title: 'SC - SC - "A" Class - Cowans Sheldon New', beat: 'SC-ALER, SC-WADI, SC-DHNE, DKC-KSN, GWD-RC, BN-NLDA, VKBUDGR, KHNPTJSP, SC-MUE, TLPRRCPT, MOBGJWL, AKEMDAK, JKMBDHN, MLY-SNF (By-pass)' },
                { num: 2, title: 'SC - KZJ - "A" Class - Cowans Sheldon Old', beat: 'KZJ-BPQ, KZJ-KI, KZJ-ALER, DKJMUGR, KRA-SYI, MAGHGDCR, PDPL-NZB, MTMIJNPD, BDCRJVRB' },
                { num: 3, title: 'BZA - BZA - "A" Class - Cowans Sheldon Old', beat: 'BZA-DVD, BZA-GDR, BZA-NLDA, VNUPJNPD, BZA-MTM, GDVBVRM, NDD-NS, SLO-COA, GNT-TELRAL, NDKDMCLA, GNT-DKD, PGRNSYM, VRJNOBVP, VRJNKAPT' },
                { num: 4, title: 'GTL - GY - "A" Class - Cowans Sheldon Old', beat: 'GY-RUTPTY, TPTY-KPD, RU-GDR, GY-GTLWADI, GY-DMM, GTL-KLU, DMM-PAK, GTL-BAY, GTL-DKD, NDL-YA, HX-PDMI, GY-PDL' },
                { num: 5, title: 'NED - PAU - "A" Class - Gottwald New', beat: 'PAU-MMR, PAU-MUE, PAU-AK, PAU-PBNUDGR, MUEPMKT' },
              ].map((station, index) => {
                const getBadgeGradient = (idx: number) => {
                  const gradients = [
                    'from-yellow-400 via-amber-500 to-orange-500',
                    'from-yellow-400 via-amber-500 to-orange-500',
                    'from-yellow-400 via-amber-500 to-orange-500',
                    'from-yellow-400 via-amber-500 to-orange-500',
                    'from-yellow-400 via-amber-500 to-orange-500',
                  ]
                  return gradients[idx % gradients.length]
                }

                const getGradientColor = () => {
                  return 'from-yellow-500/20 to-amber-500/20'
                }

                const getBorderColor = () => {
                  return 'border-yellow-400/30'
                }

                return (
                  <div key={station.num} className={`bg-linear-to-br ${getGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                    <div className="flex items-center justify-center flex-col gap-4">
                      <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                        {station.num}
                      </div>
                      <div className="flex-1 w-full pt-1">
                        <h3 className="lg:text-xl text-lg font-bold text-white mb-4 text-center">{station.title}</h3>
                        <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                          <p className="text-gray-200 leading-relaxed">
                            <span className="text-yellow-300 font-semibold">Beat:</span> {station.beat}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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

export default BeatOfART