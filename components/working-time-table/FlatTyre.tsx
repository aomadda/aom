"use client"
import React from 'react'

const FlatTyre = () => {
  const detectionPoints = [
    'The Loco-Pilot and Guard should be vigilant in detection of unusual/hammering sound in the formation.',
    'TXR staff during \'rolling-in\' examination at all major train examination points to detect flat face on wheel tyre in train while in motion. Such a wagon in a motion train can be located by them as per procedure given below;',
    'Station Operating Staff while exchanging \'all-right\' signals shall be vigilant and attentive to hear any unusual / hammering sound in the running train and make efforts to stop and examine the train. If they hear such sound, they should start counting the location of such a wagon (counting it as one) till the BV. It will demarcate location of such a wagon in moving train and communicate it to control and next station.',
    'Traffic & Engineering Gatemen shall also be vigilant in detecting any unusual / hammering sound on a running train and they should be in readiness to exhibit STOP hand signal and stop the train; or intimate the SM if they failed to stop train. Such a wagon in moving train can be located by them as per procedure given above;',
    'Engineering Staff and Supervisors while at worksites or while doing trolley inspection or footplate inspection should also be advised to be vigilant towards detection of flat-tyre on the passing train/s and take suitable action for stopping the train or informing the train Crew / SM by the quickest means of communication available. Such a wagon in moving train can be located by them as per procedure given above;',
    'On-board staff like TTEs, Coach Attendants, AC Mechanics and other Supervisor / Officers travelling by the train can also detect any unusual / hammering sound in the coach / train.',
  ]

  const operatingStaffPoints = [
    'Once report about hammering sound is reported in the train from the SM in rear or by any Gateman from the rear block section, the SM shall definitely stop the train.',
    'Arrange to issue a memo to the TXR staff if available; to measure the length of flatness and allow the train further only if the measured flat is within the permissible limits.',
    'If no TXR staff is posted to work at that station, the SM shall take action to detach the coach/wagon in consultation with Control and allow the remaining train to proceed with normal speed.',
    'Under no circumstances, ASM shall allow the train to run with a suspected flat tyre, once the information is received.',
  ]

  const controlFunctions = [
    'The SCOR, after receiving information from the SM, shall stop the train at the next immediate station, duly taking the advice seriously as reported by stations and advise the Deputy Controller and Chief Controller.',
    'He shall take action as stated in Para 1.0 & Para 3.0, in consultation with the LP, Guard & ASM.',
    'The Deputy Controller shall co-ordinate with Engineering Control and depute the SSE (P. Way) / JE/P. Way / P. Way Supervisor of Engineering Department to inspect the rear block section either by travelling in a light engine/Tower Car with a restricted speed of 30 KMPH, or by proceeding on a motor/push trolley if Loco/Tower car is not readily available or arranging the same is likely to take more time.',
  ]

  const engineeringControlPoints = [
    'Engineering control shall co-ordinate with Traffic Control in alerting SSE/JE/P.Way Supervisor of Engineering department and getting the section inspected by Engineering official as laid down in Para 4.0 and 5.0 above.',
    'Thereafter, engineering control in consultation with SSE/JEP. Way Supervisor who has inspected the section shall impose SR of 50 KMPH for Passenger trains as well as for empty Goods trains in the affected section till USFD in the affected section (point of detection of unusual sound to next station) is completed and protective action thereafter is taken.',
    'No loaded goods train shall be allowed to run unless USFD testing is completed.',
    'Adequate number of Ultrasonic teams for checking the affected section shall be arranged, if required by pooling them from other Divisions so as to complete testing within the earliest possible time.',
    'On completion of USFD testing, speed of passenger trains and that of empty goods trains shall be raised to 75 KMPH and after observing for 24 hours, normal sectional speed shall be restored for these trains.',
    'Loaded goods shall be permitted at 50 KMPH on completion of USFD and after observing for 24 hours, normal speed shall be restored for such trains.',
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Joint Procedure Order on &quot;FLAT TYRE&quot;
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                There have been several instances where Flat-tyre has caused extensive damage to track by causing rail fractures and weld failures resulting into serious accidents. In order to prevent recurring of such incidences, following guidelines are to be followed:
              </p>
            </div>
          </div>

          {/* PREVENTIVE MEASURES Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              PREVENTIVE MEASURES
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <p className="text-gray-200 leading-relaxed mb-4">
                  The TXR staff in Depots / Sick lines must check the flatness of wheel tread with the help of tyre-defect gauge during Examination since; it is possible to detect flatness of tyre only when the train is stationary.
                </p>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The permissible flat on wheel tread is limited to 60mm for Goods Stock and 50mm for Coaching Stock / Locomotive. All train examination staff shall adhere to the provisions of Rule 2.8.4, 3.2.2 and &apos;S&apos; 4.21.1 &quot;Tyre Defects&quot; of Part IV IRCA Conference Rules for Coaching Stock and Para 4.18.1 of Part III of IRC A Conference Rules for Freight Stock.
                </p>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The train crew and Shunting staff should release brakes whenever DV Isolating Cock is operated by them.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  The empty / load device should be kept in the relevant position to avoid skidding of wheels, resulting into flatness of tyre during run by the GLP at the time of clearing empties from the Sidings.
                </p>
              </div>
            </div>
          </div>

          {/* DETECTION OF FLAT TYRE Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                DETECTION OF FLAT TYRE
              </h2>
            </div>
            
            <div className="space-y-4">
              {detectionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-blue-400 via-cyan-500 to-sky-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ROLE OF STAFF AFTER DETECTION Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              ROLE OF STAFF AFTER DETECTION OF A FLAT TYRE
            </h2>
            
            <div className="space-y-6">
              {/* 1.0 Loco Pilot & Guard */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 text-center">1.0 Loco Pilot & Guard of the train:</h3>
                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                  <p className="text-gray-200 leading-relaxed mb-4">
                    On detecting / getting information about the hammering sound on the formation in the block section, the train crew shall observe a speed restriction of 30 KMPH for clearing the section up to next station. After clearing the block section, the LP and Guard of the train shall ask for the TXR staff for examining the concerned coach / wagon.
                  </p>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    If no TXR staff is posted to work at that station, and it is likely to take more time for TXR staff to come, the LP, Guard and ASM shall decide in consultation with the SCOR to detach the coach / wagon at the same station. If the coach / wagon are detached at that station, the detached coach / wagon shall be moved by another train / loco as planned by the SCOR up to the next TXR examination point with a restricted speed of 30 KMPH.
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    If TXR staff is available at that station or they can come quickly from other station, the flat tyre shall be examined by them and they will certify whether the flatness is within the permissible limits or beyond. If the flatness is within the permissible limit, they can certify for running the train further at normal speed and if flatness is beyond the permissible limit, the wagon has to be detached at the same station.
                  </p>
                </div>
              </div>

              {/* 2.0 Mechanical Staff */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 text-center">2.0 Mechanical (C&W) Staff:</h3>
                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                  <p className="text-gray-200 leading-relaxed">
                    Mechanical staff /TXR staff working at the station shall inspect the wagon/ coach which were reported with flat tyre and take action as per the above mentioned guidelines in Para 1.0 above.
                  </p>
                </div>
              </div>

              {/* 3.0 Operating Staff */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">3.0 Operating Staff:</h3>
                <div className="space-y-4">
                  {operatingStaffPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                    >
                      <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                        {index + 1}
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4.0 Functions of Control Office */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">4.0 Functions of Control Office:</h3>
                <div className="space-y-4">
                  {controlFunctions.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                    >
                      <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                        {index + 1}
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5.0 Engineering Staff */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 text-center">5.0 Engineering Staff:</h3>
                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                  <p className="text-gray-200 leading-relaxed">
                    On getting the advice from the Control (Engineering or Traffic) they shall be in readiness to proceed for inspection and certification of track in the rear affected block section duly taking protective action for any failure noticed during such inspection.
                  </p>
                </div>
              </div>

              {/* 6.0 Engineering Control */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">6.0 Engineering Control:</h3>
                <div className="space-y-4">
                  {engineeringControlPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                    >
                      <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                        {index + 1}
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
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

export default FlatTyre