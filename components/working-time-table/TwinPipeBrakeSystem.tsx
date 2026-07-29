"use client"
import React from 'react'

const TwinPipeBrakeSystem = () => {
  const procedurePoints = [
    'The following to be stamped on the BPC of twin pipe rakes at the time of issuance of BPC by TXR duly endorsing FP pressure of locomotive and brake van.',
    'An item should be added to the list of items to be checked during GDR checks circulated vide Railway Board\'s letter No. 2005/M(N)/95/1/13 dated 08.02.06 as follows: " the rake should be cleared with twin pipe brake system if BPC has endorsement as twin pipe, subject to a compatible loco being attached to the train.',
    'Whenever the rake is maintained by TXR as a twin pipe rake, the Pool ID of the rake in FOIS shall be entered with a suffix of "TP" so that the users of FOIS are aware that the rake is twin pipe. The suffix of "TP" shall be entered into FOIS based on a certificate issued by TXR.',
    'The field operating staff may be directed to ensure that the twin pipe rakes should work on twin pipe brake system and the FP hoses should be reconnected, if they were disconnected for loading/ unloading.',
    'In case of defective/deficient feed pipe noticed during GDR they should replace using spare feed pipe available in the loco. In case this does not solve the problem, assistance of TXR staff should be sought at the first available opportunity to connect the rake to twin pipe and an endorsement should be made on the BPC to that effect.',
    'Frequent counselling of Guards and Driver in the crew lobby and on foot plate to be done by LI, TI and other officials advising them to clear such rakes as twin pipe to improve the running. These instructions to be passed to LPs, ALPs, and Guards through shed order book maintained in the crew lobbies.',
    'All cases, wherein twin pipe rakes have to be operated in single pipe shall be flagged on FOIS by control based on message conveyed by train crew. The report should be perused by operating and mechanical officers in the Divisional and Zonal Headquarters for taking suitable corrective action.',
    'Frequent surprise checks should be carried out by Traffic, Mechanical and Electrical department supervisors and officials and the Flying Squads of IRCA so as to ensure that the twin pipe brake rakes are actually working on twin pipe in the field.',
    'The FP gauge along with the adopter shall be provided to the Guards as a personal store by operating department.',
    'Locos having twin pipe air brake system in operational condition should be provided for working the twin pipe rakes.',
  ]

  const nonAvailabilityPoint = {
    main: 'Non-availability of twin pipe Brake Van: As far as possible, the Brake Vans having the provision of twin pipe air brake system should be provided for working the twin pipe rakes. However, in case of non-availability of twin pipe BVs, the train should work with twin pipe brake system up to the last wagon ahead of the BV and the BV may be with single pipe brake system. Such rakes shall be treated as twin pipe rakes for the purpose of entry of Pool ID in FOIS. However, it shall be ensured that the Feed Pipe (F.P) hose couplings are connected to form a continuous air passage from locomotive to last wagon ahead of the single pipe BV. The following point shall be ensured at the originating station / C&W examination point:',
    subPoints: [
      'Suitable arrangement shall be used by SSE/C&W for checking of Feed Pipe Pressure at the tail end of the last wagon (before single pipe BV) and to ensure that the FP Pressure is not less than 5.8 kg/cm2.',
      'After checking of Feed Pipe Pressure, it is to be ensured that the cut-off-angle cock of Feed Pipe of last wagon is in closed condition.',
      'Other general guidelines for operation and examination of twin pipe air brake system of complete train as per Amendment No.3 of January 2010 of G-97 are to be followed.',
    ]
  }

  const postLoadingChecks = [
    'All CBCs and Air Hoses are properly coupled and looked.',
    'All the angle cocks are in open condition.',
    'The last Angle cock in closed condition.',
    'Empty / Load device handle is in proper condition.',
    'There are no loose fittings / hanging parts like springs, Push pull rod, Brake Beam, Safety Brackets, Brake blocks etc., which may endanger safe running of the train.',
    'Hand brakes are released.',
    'Doors of wagons are closed and looked / secured.',
    'Check continuity of the air pressure / vacuum before starting.',
    'The rake should be cleared with twin pipe brake system if BPC has endorsement as twin pipe, subject to a compatible loco being attached to the train.',
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
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Joint Procedure Order for running freight trains with twin Pipe Brake System
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <div className="space-y-2 text-gray-200">
              <p className="text-lg">Ref: 1. Railway Board Lr No. 2010/M(N)/60/10 Pt.II dt: 25.08.15</p>
              <p className="text-lg">2. RDSO&apos;s letter No. MW/APB/TPM dt: 29.07.15.</p>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                Working of freight trains on twin pipe brake system improves the operational efficiency and the average speed of freight trains, as the brake releasing time is lesser. Data reveals that twin pipe brake system also results in a reduction in train parting cases.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                However, a large number of twin pipe rakes are returned with single pipe working, the main reason for which are non-coupling of feed pipe (FP) hoses at loading / unloading points, non-availability of brake vans and locomotives with twin pipe. In view of above JPO is issued in order to provide instructions and guidance to facilitate twin pipe working to concerned staff.
              </p>
            </div>
          </div>

          {/* Procedure Points Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                Procedure Points
              </h2>
            </div>
            
            <div className="space-y-4">
              {procedurePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
              
              {/* Point 11 with sub-points */}
              <div className="bg-white/5 backdrop-blur-lg rounded-lg px-4 py-4 border border-white/10 hover:border-white/25 transition-all">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-semibold flex items-center justify-center shadow-md">
                    11
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {nonAvailabilityPoint.main}
                  </p>
                </div>
                
                <div className="mt-4 space-y-3 pl-4">
                  {nonAvailabilityPoint.subPoints.map((subPoint, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-green-400/20"
                    >
                      <div className="mt-1 h-7 w-7 rounded-full bg-linear-to-br from-green-300 via-emerald-400 to-teal-400 text-white text-sm font-semibold flex items-center justify-center shadow-sm shrink-0">
                        {['i', 'ii', 'iii'][subIndex]}
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        {subPoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Revised Post loading / Post tippling checks Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                Revised Post loading / Post tippling checks by the Guard and the Driver
              </h2>
            </div>
            
            <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Items to be checked by Guard and Driver:</h3>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed font-semibold text-center">
                Post loading /Post tippling and rakes clearing from Non train examination point
              </p>
            </div>

            <div className="space-y-4">
              {postLoadingChecks.map((check, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-yellow-400 via-amber-500 to-orange-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {check}
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

export default TwinPipeBrakeSystem