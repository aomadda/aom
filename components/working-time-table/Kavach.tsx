"use client"
import React from 'react'

const Kavach = () => {
  const systemOverviewItems = [
    { num: '1.1', text: 'Kavach Ver 3.2 is installed in Nagarsol-Mudkhed- Secunderabad- Dhone- Guntakal and - Bidar-Parli-Pharbhani sections in Nanded, Hyderabad, Guntakal and Secunderabad divisions as an additional safety aid to the Loco Pilots.' },
    { num: '1.2', text: 'The Loco Pilot/Assistant Loco pilot shall always act accordingly to the Track side signals aspects, warning boards and stop boards as per the General and Subsidiary Rules of SCR. At any point given of time, LP/ALP shall not fully rely upon the signal aspects displayed on the DMI. The operation of Kavach shall, never, interfere/infringe or override the stipulations of regular train operations mentioned in the G&SR in SCR, unless otherwise specified through amendments in G&SR.' },
    { num: '1.3', text: 'Kavach Ver 3.2 fitted Loco shall run in the Kavach territory as per Kavach Loco links.' },
  ]

  const trainingItems = [
    { num: '1.4', text: 'Training on Kavach Ver 3.2 is being imparted to CLI/LP/ALPs in STTC/MLY and competency certificates are being issued on successful completion. The LPs/ALPs with valid competency certificate shall be booked to work in Kavach fitted Locos.' },
    { num: '1.5', text: 'To ensure the authorized access to the Onboard TCAS, sealing of Onboard Computers, Break Interface Unit and Driver Machine Interface (DMI) shall be ensured. In case of tampering of seal, Onboard TCAS shall be declared defective. LP shall inform TLC, isolate LTCAS and shall work the Train.' },
  ]

  const maintenanceItems = [
    { num: '1.6', text: 'Signal Sighting Committee in Division shall carry out the Quarterly Inspection of existing Kavach system functionality based on the Kavach documents (RFID layout and Table of Control). Whenever there are alterations in existing Kavach installation or introduction of Kavach in Station/LC/IBS/ABS in the Kavach working territory, the Signal Sighting Committee shall also carry out the inspection of Kavach system, to check the correspondence of Track side Signals with signal aspects displayed on Kavach Driver Machine Interface (DMI). After verification, a certificate shall be issued in the format enclosed as Annexure-1.' },
    { num: '1.7', text: 'The Loco pilot shall follow the existing laid down procedures as per G&SR 4.08 in case of defective Speedometer of Loco irrespective of Speed Indication on Kavach DMI.' },
    { num: '1.8', text: 'After energizing the Locomotive, the Loco Pilots shall boot up Kavach loco system and configure the trailing load as per the train consist in DMI. Further, the LP shall configure trailing load whenever attaching/detaching any coach/coaches en-route.' },
  ]

  const emergencyItems = [
    { num: '1.9', text: 'In case of report of any Accidents and Unusual occurrences, the Station Master shall follow the laid down procedures as per G&SR 6.01. Further, the procedure issued vide JPO No. T.411/JPO/KAVACH/SMs dated 26.06.2024 shall be followed for generation of SoS through SMOCIP by Station Masters. The SoS facility shall be available only between two functional Kavach trains. The same shall be incorporated in SWRs. On receipt of SoS, SM shall act as per G&SR 6.01 and 6.07.' },
    { num: '1.10', text: 'G&SR 6.07 shall be followed by the Loco pilot, Guard and Station Masters as per the laid down procedures in case of any unusual circumstances. Further, the Loco pilot and Station Masters shall also generate SoS in addition to the laid down procedures. The SoS facility shall be available only between two functional Kavach trains.' },
  ]

  const psrItems = [
    { num: '1.13', text: 'Whenever a new PSR is introduced or existing PSR removed/relaxed or Speed restriction or Kilometre details are changed, the TI Caution Order will inform Test room staff, and they will in turn inform OEM and Project unit for carrying out necessary modifications in Kavach. The PSR modifications in Kavach shall be done expeditiously. LPs/ALPs shall follow the caution order only and if necessary, isolate the Kavach to avoid undesirable braking.' },
    { num: '1.14', text: 'Whenever a Loco pilot encounters any issue related to Kavach working during run with Kavach fitted Locos, the LP/ALP shall inform the TLC. TLC in turn shall inform the on-duty Test room staff of the division. The Test room staff shall guide the LP/ALP with the help of OEM Engineer to resolve the issue. If issue is resolved the LP can work normally. If the issue is not solved, then the LP shall isolate the Kavach and work the Train and shall make an entry in the CMS and Loco log book. The issue recorded in the CMS shall be passed on to the Projects unit and the OEM, by divisional Test room staff and the issue has to be resolved at the earliest, when the Loco comes back to Trip shed/Home shed based on the severity and time period required for attention. In case of any delay in attending of Loco Kavach, Loco can be given for service without Kavach in operations if there is traffic requirement or any operation exigency.' },
    { num: '1.15', text: 'After attending the Kavach related issues, the OEMs along with Project/Divisional S&T staff and Loco shed staff shall check the working of Kavach as per the check list issued and shall sign in check list and Loco log book.' },
  ]

  const monitoringItems = [
    { num: '1.16', text: 'The periodic maintenance of Pulse Generators shall be done by OEMs in coordination with Loco shed staff during the scheduled maintenance as per the procedure and schedule mentioned in the check list issued.' },
    { num: '1.17', text: 'Whenever there is change in wheel diameter due to turning of wheels done by Loco shed staff, the details shall be informed to OEM by Loco shed staff to carryout necessary modifications in the Loco Kavach. After modification in Loco Kavach, it will be jointly checked by OEM and Loco shed staff as per the check list enclosed.' },
    { num: '1.18', text: 'In case of Kavach SMOCIP is not functioning, Station Masters shall act as per the JPO issued vide JPO No. T.411/JPO/KAVACH/SMs dated 26.06.2024, and inform Divisional Test room staff for necessary action.' },
    { num: '1.19', text: 'Networking Monitoring System (NMS) is provided in Divisional Test rooms of SC, HYB, NED and GTL divisions to monitor the working of Kavach system. The Divisional Test room staff shall monitor the Kavach system performance on 24x7 basis and guide the field staff to resolve the issues.' },
  ]

  const accountabilityItems = [
    { num: '1.20', text: 'Train Punctuality loss and asset failure cases due to failure or malfunctioning/limitations of Loco Kavach or Station Kavach system shall be shown on S&T-Kavach account. However, the cases of Punctuality loss and asset failure due to wrong operation by LP (with Kavach 3.2 Competency Certificate) shall be shown on Loco crew account.' },
    { num: '1.21', text: 'In case of Maintenance or for carrying out alterations in the Kavach system at Stations/LCs/IBS/ABS locations, the existing procedure of disconnection/reconnections of S&T gears shall be followed.' },
    { num: '1.22', text: 'At present the Kavach Ver 3.2 is deployed in the Nagarsol-Mudkhed-Secunderabad- Dhone-Guntakal and Bidar-Parli-Pharbhani sections of South Central Railway. Based on the feedback from LP/ALPs the suggestions shall be advised by S&T to RDSO and CoE for necessary action.' },
    { num: '1.23', text: 'In view of the above observations, as Amendments in G&SR are to be approved by Railway Board, till such time as a temporary measures, the Kavach Ver 3.2 system shall be made Operational in the Nagarsol-Mudkhed-Secunderabad-Dhone-Guntakal and Bidar-Parli- Pharbhani sections of South Central Railway based on this JPO to take advantage of Kavach protection.' },
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
              Joint Procedural Order for Kavach Ver 3.2 Operations
            </h1>
            <p className="text-gray-300 text-sm mb-2">in SCR in Nagarsol-Mudkhed-Secunderabad-Dhone-Guntakal and Bidar-Parli-Parbhani sections of SC Railway</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: System Overview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              System Overview
            </h2>

            <div className="space-y-4">
              {systemOverviewItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg px-4 py-3 border border-blue-400/30 hover:border-blue-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-14 rounded-full bg-linear-to-br from-blue-400 via-cyan-500 to-sky-500 text-white font-bold flex items-center justify-center shadow-md">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Training & Security */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Training & Security Measures
            </h2>

            <div className="space-y-4">
              {trainingItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-3 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-14 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: System Maintenance & Operations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              System Maintenance & Operations
            </h2>

            <div className="space-y-4">
              {maintenanceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-14 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Emergency Procedures & SoS */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Emergency Procedures & SoS
            </h2>

            <div className="space-y-4">
              {emergencyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg px-4 py-3 border border-orange-400/30 hover:border-orange-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-16 rounded-full bg-linear-to-br from-orange-400 via-red-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md text-sm">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: System Limitations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              System Limitations
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg">
                <div className="mt-1 h-10 w-16 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md text-sm">
                  1.11
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Limitations of Kavach Ver 3.2 functionality in detection of collision scenarios at Junction stations where different kilometres converge from multiple directions shall be mentioned as PSRs in Caution Orders based on the information given by Sr.DSTE/Dy.CSTEs as per the format mentioned below. At such locations, LPs/ALPs shall follow the normal train operations with Kavach working. A special condition shall be incorporated in the SWRs of adjoining stations.
                </p>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Junction Station Collision Prevention Limitations:</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Station:</span>
                      <div className="mt-1">Station name</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Line:</span>
                      <div className="mt-1">Line designation</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">UP/DN:</span>
                      <div className="mt-1">Direction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Kilometer:</span>
                      <div className="mt-1">Km From To</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Speed limit in Kmph:</span>
                      <div className="mt-1">From To speed limits</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Reasons/Remarks:</span>
                      <div className="mt-1">Kavach collision prevention is not available from Km xx/xx-yy/yy due to limitation of Kavach Ver 3.2 functionality at Junction stations</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Date and time of imposition:</span>
                      <div className="mt-1">Permanent imposition in Kavach till further advice</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-sm">
                    <span className="font-semibold text-red-300">Additional Note:</span>
                    <div className="mt-1">LP/ALPs shall follow PSR, if imposed in these KMs. LPs/ALPs shall follow the normal train operations with Kavach.</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg">
                <div className="mt-1 h-10 w-16 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md text-sm">
                  1.12
                </div>
                <p className="text-gray-200 leading-relaxed">
                  There are limitations of Kavach functionality when Exit RFID tags are provided at stations/Locations, wherever, a new Station/LC/IBS/ABS commissioned or any modifications in Signalling Interlocking without Kavach modifications exist or during Non-Interlocking period. Kavach modifications as per the revised Signalling arrangements require some time to implement Kavach system. The Kilometre details of such locations shall be mentioned in Caution Orders based on the information given by Sr.DSTE/Dy.CSTEs. At such locations, LPs/ALPs shall follow the normal train operations procedures with Kavach working in Staff Responsible (SR) mode.
                </p>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">RFID Tag Installation Limitations:</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Station:</span>
                      <div className="mt-1">Station name</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Line:</span>
                      <div className="mt-1">Line designation</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">UP/DN:</span>
                      <div className="mt-1">Direction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Kilometre:</span>
                      <div className="mt-1">Km From To</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Speed limit in Kmph:</span>
                      <div className="mt-1">From To speed limits</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Reasons/Remarks:</span>
                      <div className="mt-1">New Station/LC/IBS/ABS commissioned or modifications in Signalling Interlocking without Kavach modifications</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-red-300">Date and time of imposition:</span>
                      <div className="mt-1">Temporary imposition in Kavach from .. hrs of DD/MM/YYYY until further advice</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-sm">
                    <span className="font-semibold text-red-300">Additional Note:</span>
                    <div className="mt-1">LP/ALPs shall follow PSR/TSR, if imposed in these KMs. Kavach will be in staff responsible mode.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: PSR Modifications & Issue Resolution */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              PSR Modifications & Issue Resolution
            </h2>

            <div className="space-y-4">
              {psrItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg px-4 py-3 border border-cyan-400/30 hover:border-cyan-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-16 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-sky-500 text-white font-bold flex items-center justify-center shadow-md text-sm">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Maintenance & Monitoring */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Maintenance & Monitoring
            </h2>

            <div className="space-y-4">
              {monitoringItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-yellow-500/20 to-amber-500/20 rounded-lg px-4 py-3 border border-yellow-400/30 hover:border-yellow-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-16 rounded-full bg-linear-to-br from-yellow-400 via-amber-500 to-orange-400 text-white font-bold flex items-center justify-center shadow-md text-sm">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: Accountability & Deployment */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Accountability & Deployment
            </h2>

            <div className="space-y-4">
              {accountabilityItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-emerald-500/20 to-green-500/20 rounded-lg px-4 py-3 border border-emerald-400/30 hover:border-emerald-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-16 rounded-full bg-linear-to-br from-emerald-400 via-green-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md text-sm">
                    {item.num}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
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

export default Kavach