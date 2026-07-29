"use client"
import React from 'react'

const DeadLocomotives = () => {
  const needForHaulage = [
    'To clear a block section and take locomotive to its destination in case of failure or breakdown on the railroad.',
    'For sending the locomotive to work shop/running shed for repairs and /or maintenance schedules.',
    'For link balancing from Shed/station/division to another station/division.',
    'Diesel loco bridging over made dead electric loco in Non-RE patch sections.',
  ]

  const permittedSections = [
    { division: 'HYB Division', route: 'KCG-DHNE - 290 KM' },
    { division: 'HYB Division', route: 'MUE-NZB-KCG - 247 KM' },
    { division: 'NED Division', route: 'MMR-ANK-PAU-MUE - 371 KM' },
    { division: 'NED Division', route: 'MUE-ADB - 162 KM' },
    { division: 'NED Division', route: 'PAU-AK - 207 KM' },
    { division: 'NED Division', route: 'PBN-PRLI - 63 KM' },
    { division: 'SC Division', route: 'HYB/SC-WD - 184 KM' },
    { division: 'SC Division', route: 'VKB-PRLI - 267 KM' },
    { division: 'SC Division', route: 'PDPL-KRMR-NZB - 178 KM' },
    { division: 'SC Division', route: 'HYB/SC-KZJ* - 143 KM' },
    { division: 'GTL Division', route: 'DHNE-GY/GTL-RU - 337 KM' },
    { division: 'GTL Division', route: 'GTL-DMM-TPTY - 370 KM' },
    { division: 'GTL Division', route: 'GTL-WD - 230 KM' },
    { division: 'BZA Division', route: 'BZA-GDV - 43 KM' },
    { division: 'BZA Division', route: 'NS-BVRM-NDD - 76 KM' },
  ]

  const goodsTrainCombinations = [
    'One live/working loco + One dead loco.',
    'One live/working loco + Two dead locos',
    'Two live/working locos + One dead loco.',
    'Two live/working locos + Two dead locos.',
  ]

  const coachingTrainCombinations = [
    'One live/working loco + One dead loco.',
    'One live/working loco + Two dead locos',
    'Two live/working locos + One dead loco.',
    'Two live/working locos + Two dead locos.',
  ]

  const conditions = [
    'Dead locomotives are attached next to working locomotives (train engine) and brakes on dead locomotives are functional.',
    'Dead locomotives can be attached to a mail/express/passenger trains including superfast trains excluding Rajdhani/Shatabdi/Duranto trains.',
    'As a result of attachment of dead locomotives, the maximum permissible length and maximum permissible load of the train should not be exceeded.',
    'In case of maximum permissible speed of the dead locos is less than the maximum permissible speed of the train, suitable speed restriction shall be imposed on the train while attaching the dead locomotives.',
    'Certificate for FIT to run shall be issued by Senior Section Engineer/Loco Inspector or power controller.',
    'As a final check, the coupled locos should be run about 500meters and the Loco Pilot shall check for any abnormal rise in temperature of wheels/axle boxes of dead locomotives and shall also check it at subsequent stops / halts during journey.',
    'Locomotives with defect(s) in under gear equipment should not be attached.',
    'The other conditions mentioned in General and Subsidiary Rules for train operations are to be followed.',
  ]

  const basicRequirements = [
    'As far as possible brakes should be applied on dead locomotives in synchronization with working locomotive.',
    'On dead locomotives all the circuit breakers and battery knife switch shall be off and such other steps taken to ensure that the dead locomotives cannot be started inadvertently.',
    'On diesel/electric locomotives it should be ensured that reverser handle placed in neutral position and removed.',
    'The locomotives brakes shall be released fully before starting.',
    'The brake pipe and main reservoir pressures shall be fully discharged. The MU2B or Lead trail switch should be placed in trail/dead position.',
    'The Loco Pilot shall be informed that he should work the train carefully as dead locomotives are attached.',
  ]

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
            <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              JOINT PROCEDURE ORDER
            </h1>
            <p className="text-gray-300 text-lg mb-2">(In suppression of JPO dated 13-08-2015)</p>
            <h2 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent mb-4">
              ON HAULAGE OF DIESEL/ELECTRICAL DEAD LOCOMOTIVES w.e.f OCTOBER 2021
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
              <p className="text-gray-200 leading-relaxed">
                The following are the instructions to haul dead locomotives by goods train and passenger carrying trains except Rajdhani/Shatabdi/Duranto trains:
              </p>
            </div>
          </div>

          {/* Section a: Need for haulage */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                a) Need for haulage of dead locomotives
              </h2>
            </div>
            
            <div className="mb-6 bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 border border-red-400/30">
              <p className="text-white font-semibold text-center">Locomotives may be required to be moved as dead:</p>
            </div>
            
            <div className="space-y-4">
              {needForHaulage.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md">
                    {['i', 'ii', 'iii', 'iv'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section b: Movement of 2 dead locos + 2 working locos */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                b) Movement of 2 dead locos + 2 working locos on coaching trains (Except Rajdhani, Duranto and Shatabdi trains) is permitted on the following sections of S.C.Railway
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {permittedSections.map((section, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg px-4 py-3 border border-blue-400/30 hover:border-blue-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-blue-400 via-cyan-500 to-sky-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed text-center">
                    <strong className="text-white">{section.division}:</strong> {section.route}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-center italic bg-blue-500/10 rounded-lg p-3 border border-blue-400/20">
              *Already permitted as per JPO dated 13-08-2015.
            </p>
          </div>

          {/* Section c: Combinations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                c) The following combination of dead locos along with working locos are permitted
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* 1. For goods trains */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-4 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    1
                  </div>
                  <p className="text-white font-semibold text-lg">For goods trains:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goodsTrainCombinations.map((combo, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-purple-400/20"
                    >
                      <div className="mt-1 h-8 w-8 rounded-full bg-linear-to-br from-purple-300 via-pink-400 to-fuchsia-400 text-white text-sm font-semibold flex items-center justify-center shadow-sm shrink-0">
                        {['i', 'ii', 'iii', 'iv'][index]}
                      </div>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {combo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. For coaching trains */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-4 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    2
                  </div>
                  <p className="text-white font-semibold text-lg">For coaching/passenger carrying trains except Rajdhani/Shatabdi/Duranto:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {coachingTrainCombinations.map((combo, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-purple-400/20"
                    >
                      <div className="mt-1 h-8 w-8 rounded-full bg-linear-to-br from-purple-300 via-pink-400 to-fuchsia-400 text-white text-sm font-semibold flex items-center justify-center shadow-sm shrink-0">
                        {['i', 'ii', 'iii', 'iv'][index]}
                      </div>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {combo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Additional note */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-4 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    3
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    However, the movement of two dead locomotives with two live/working locomotives on coaching trains(except Rajdhani/Shatabdi/Duranto) is permitted only during exigencies/failure of train engine (MU/SH)in the sections of SCR mentioned above, up to next loco change station or where the failed / dead locos can be detached.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section d: Conditions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                d) Movement of two dead locomotives with two live/working locomotives on coaching trains (except Rajdhani/Shatabdi/Duranto) is permitted in sections mentioned above subject to compliance of following conditions vide RDSO L.No.SD.DFM.A.7, dated 10.02.2015
              </h2>
            </div>
            
            <div className="space-y-4">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg px-4 py-3 border border-orange-400/30 hover:border-orange-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-orange-400 via-red-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {condition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section e: Other guidelines */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                e) Other guidelines issued vide RDSO instruction bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010 insection-1 for recommended instructions to haul dead diesel & electric locomotives are to be complied in addition to the conditions mentioned in RDSO L.No.SD.DFM.A.4.7, dt.10.02.2015 as under
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* 1. Basic requirements */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-4 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    1
                  </div>
                  <p className="text-white font-semibold text-lg">Basic requirements under para 2.3:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {basicRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-green-400/20"
                    >
                      <div className="mt-1 h-8 w-8 rounded-full bg-linear-to-br from-green-300 via-emerald-400 to-teal-400 text-white text-sm font-semibold flex items-center justify-center shadow-sm shrink-0">
                        {['a', 'b', 'c', 'd', 'e', 'f'][index]}
                      </div>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Haulage of dead locomotives */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-4 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    2
                  </div>
                  <p className="text-white font-semibold text-lg">Haulage of dead locomotives by Goods and mail/express/passenger trains under para 2.5 & 2.6 of RDSO instruction bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010.</p>
                </div>
                
                <div className="space-y-4">
                  {/* Goods train section */}
                  <div className="bg-black/20 rounded-lg p-4 border border-green-400/20">
                    <p className="text-white font-semibold mb-4 text-center">Haulage of dead locomotive by Goods train:</p>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-green-300 font-semibold mb-2">Para 2.5.1:</p>
                        <p className="text-gray-200">If the dead locos brakes are functional, it is attached next to working locomotive(s) and MR and BC equalizing pipes are connected so that the brake power of the dead locomotives can be utilized.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-green-300 font-semibold mb-3">Para 2.5.2: The dead locomotives to be treated as piped vehicle</p>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2 bg-black/30 rounded-lg p-2">
                            <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                              i
                            </div>
                            <p className="text-gray-200 text-sm">If the dead locos brake are functional but it is not attached next to working locomotive or.</p>
                          </div>
                          <div className="flex items-start gap-2 bg-black/30 rounded-lg p-2">
                            <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                              ii
                            </div>
                            <p className="text-gray-200 text-sm">MR & BC equalizing pipes are not connected.</p>
                          </div>
                          <div className="flex items-start gap-2 bg-black/30 rounded-lg p-2">
                            <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                              iii
                            </div>
                            <p className="text-gray-200 text-sm">Dead locomotives brakes are not functional.</p>
                          </div>
                        </div>
                        <p className="text-gray-200 mb-3 font-semibold">The conditions to be satisfied in these cases are as under:</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 bg-black/30 rounded-lg p-2 border border-green-400/10">
                            <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                              a
                            </div>
                            <p className="text-gray-200 text-sm">Only one dead diesel/electric locomotive is permitted to haul.</p>
                          </div>
                          <div className="bg-black/30 rounded-lg p-2 border border-green-400/10">
                            <div className="flex items-start gap-2 mb-2">
                              <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                                b
                              </div>
                              <p className="text-gray-200 text-sm">If the dead locomotive is not placed next to train locomotive, It may be marshalled anywhere on the goods train provided that the distance between dead loco and the train loco/banking loco (if any) shall be equalled to the largest span of bridge in the section duly following the below given safety requirements from the point of view of brakes.</p>
                            </div>
                            <p className="text-gray-200 text-sm italic ml-8 bg-black/20 rounded p-2">Brake pipe of dead loco: -Brake pipe of dead locomotive shall be attached to brake pipe of the train and at least ten fully braked wagons shall be attached behind the locomotive.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Passenger train section */}
                  <div className="bg-black/20 rounded-lg p-4 border border-green-400/20">
                    <p className="text-white font-semibold mb-4 text-center">Haulage of dead locomotive by mail/express/passenger/superfast trains:</p>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-green-300 font-semibold mb-2">Para 2.6.1:</p>
                        <p className="text-gray-200">If the dead locos brakes are functional, it is attached next to working locomotive(s) and MR and BC equalizing pipes connected so that the brake power of the dead locomotives can be utilized.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-green-300 font-semibold mb-2">Para 2.6.1.2:</p>
                        <p className="text-gray-200">Dead locomotive may be attached at originating station or enroute provided that the brake power of mail/express/passenger trains(excluding dead locos) is at least 90% when dead locomotive is attached.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-green-300 font-semibold mb-3">Para No.2.6.2: Dead locomotive brakes are not functional and it is hauled as piped vehicle.</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 bg-black/30 rounded-lg p-2">
                            <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                              i
                            </div>
                            <p className="text-gray-200 text-sm">Only one dead diesel/electric locomotive is permitted to haul.</p>
                          </div>
                          <div className="flex items-start gap-2 bg-black/30 rounded-lg p-2">
                            <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-green-200 via-emerald-300 to-teal-300 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                              ii
                            </div>
                            <p className="text-gray-200 text-sm">Brake power of mail/express/passenger trains (Excluding dead locos) is at least 90% when dead locomotive is attached.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note section */}
                  <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/30">
                    <p className="text-yellow-300 font-semibold mb-3 text-center">Note:</p>
                    <p className="text-gray-200 mb-3 bg-yellow-500/5 rounded-lg p-3 border border-yellow-400/20">It should be ensured that the brakes of dead locomotive is functional/ piped (synchronization of brakes),when attached in rear of the train as last vehicle.</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 bg-yellow-500/5 rounded-lg p-3 border border-yellow-400/20">
                        <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-yellow-300 via-amber-400 to-orange-400 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                          i
                        </div>
                        <p className="text-gray-200 text-sm">Only one dead locomotive is permitted to haul.</p>
                      </div>
                      <div className="flex items-start gap-2 bg-yellow-500/5 rounded-lg p-3 border border-yellow-400/20">
                        <div className="mt-0.5 h-6 w-6 rounded-full bg-linear-to-br from-yellow-300 via-amber-400 to-orange-400 text-gray-900 text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                          ii
                        </div>
                        <p className="text-gray-200 text-sm">Dead locomotive shall be accompanied by a competent person not less than ALP. This competent person should be provided with suitable equipment including walkie-talkie set, flags, detonators etc., The Guard of the train to which dead locomotive has been attached shall personally ensure that the dead locomotive is accompanied by such a competent person. It will be the duty and the responsibility of competent person to switch on the flasher light and secure in case uncouple occurs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. RDSO instruction */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-4 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    3
                  </div>
                  <p className="text-white font-semibold text-lg">RDSO instruction Bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010 in section-2:</p>
                  <p className="text-gray-200 leading-relaxed">Instructions concerning brake system for hauling dead locomotive should be notified to the crew through SOB for both diesel and electric locomotives separately.</p>
                </div>
              </div>

              {/* 4. Bridges instruction */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-4 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                    4
                  </div>
                  <p className="text-white font-semibold text-lg">RDSO instruction bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010 in section-1 of Para 3.0:</p>
                  <p className="text-gray-200 leading-relaxed"><strong className="text-white">Bridges:</strong> Instructions if any, related to Bridges on SCR for haulage of dead locomotives (Two live and two dead) will be advised by Engineering department to CPTM for incorporation in WTT.</p>
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

export default DeadLocomotives