"use client"
import React from 'react'

const PlacementAndRemoval = () => {
  const securingSteps = [
    'After shunting into siding, the Shunting staff shall ensure that the container rake is standing within fouling mark/signals of the concerned line on both ends.',
    'The rake shall be secured as per the rules for securing of vehicles laid down vide SR 5.23 of SCR G&SR.',
    'The In-charge of the Shunting Staff shall ensure that the above instructions have been complied and sign in the \'Stabled Load Register\' at the station, duly filling all the required columns given in the Register, along with date and time.',
    'In the absence of separate shunting staff, Guard of the train shall supervise the shunting and stabling of the rake and sign in the \'Stabled Load Register\'.',
    'If the siding is away from the Station, a separate \'Stabled Load Register\' shall be maintained in Siding, under control of Goods Supervisor/Goods Clerk. If there is no Goods Supervisor/Goods Clerk is posted, the Register shall be maintained by the siding in-charge designated by the siding authorities, under advice to the Station Master.',
    'The Station Master/Goods Supervisor/Goods Clerk/the designated Siding in-Charge shall countersign against the signature of the Shunting-in-charge/Guard in the respective column in the \'Stabled Load Register\', along with date and time.',
  ]

  const handlingPrecautions = [
    'Private operator supervisor at Goods Sheds/Sidings/Private Freight Terminals should monitor the Lifting-on (placing a container on the BLC wagon) and Lifting-off (lifting a container off the BLC wagon) Containers and all possible care should be taken to prevent damage to wagons by rough and careless handling. They will be held responsible for any damages.',
    'Containers must be evenly loaded so that the load is equally distributed on all springs. No overloading beyond carrying capacity is to be allowed.',
    'Before \'Lifting-on\' containers, siding authorities should check the condition of Automatic Twist Locks. In case of any defect/deficiency, same should be brought to the notice of the Railway staff for corrective action.',
    'Containers should be lowered equally, parallel to locks and positioned without any jerk or sudden drop by the Reach stacker, duly ensuring that twist locks are properly locked.',
    'The Reach Stacker deployed should be in good working condition.',
    'Crane Operator should work very carefully and should blow horn to alert if extra load is exerted while unloading of containers. Road mobile cranes preferably should have the provision of load cell should be used for unloading.',
    'One supervisor should be exclusively deputed by the siding authorities for ensuring proper locking/unlocking of ATLs. He will also guide the crane driver suitably. The supervisor shall also ensure that wagon is not lifted along with the container. In case any wagon is lifted, the supervisor shall alert the crane operator in this regard and ensure that the wagon\'s all wheels are again placed properly on the rails and will inform the same to the Siding authorities and Railway Authorities for further action.',
    'While Containers are being lifted, it should be ensured that lifting is done gently, evenly and vertically and see that twist locks are unlocked and under frame is not lifted while lifting the container.',
    'Crane operator and site supervisor should check and ensure that wagon is properly seated on bogie, wheels are not mounted on rails and wagon/bogie/wheel is not derailed while unloading/loading the containers.',
    'Before releasing the unloaded/loaded rakes, the Yard Supervisor of CONCOR shall ensure that all the wagons are properly seated on bogies, wheels are not mounted on rails and wagon/bogie/wheels are not derailed while unloading/loading the containers and all the containers loaded are positioned on the wagons properly and locked.',
    'Committee of Divisional Officers of Mechanical, Operating & Commercial departments should jointly inspect container sidings at regular intervals for ensuring availability and working condition of suitable machinery, facilities and proper Lift-on and Lift-off practices by the siding authorities.',
    'Precautions to be taken before releasing the rake:',
    'On duty Commercial Staff/SMR on duty at Lift-on-Lift-off operated terminals of containers at Goods-sheds/sidings/Private Freight Terminals (PFTs) should issue Release Memo mentioning the loading and unloading particulars as per the extant guidelines and after obtaining Certificate/Memo/Letter from the container Operator, duly indicating the following:',
    'Checked the rake and found all the wheels of wagons are intact on the rails.',
    'There are no abnormalities with regard to twist locks.',
    'Commercial staff should ensure that copies of Release Memo and Certificate/Memo/Letter of the Container Operator are handed over to the on duty Station Master.',
  ]

  const removalSteps = [
    'All rakes examined on CC pattern should be subjected to safe to run examination by TXR (at TXR point) or GLP check by Guard &Loco pilots (at other than TXR points) after every loading/un-loading. Such safe to run examination should be followed by endorsement on original BPC. In such safe to run examination brake power, hanging parts and other defects which can be noticed visually on wagon loaded with containers, should be checked and given proper attention.',
    'Container rakes detained for more than 24 hours at a TXR point should be subjected to safe to run examination and endorsement on BPC should be made by TXR that rake is safe to run for the remaining validity period of BPC. At non TXR point GDR check should be conducted.',
    'The rake shall be drawn forward slowly while backing/bringing onto station\'s running line. The Guard/Shunting staff shall travel by the brake van and see that the train is moving safely. One of the Shunting staff shall stay at the end of the line where from the rake is being drawn and be watchful for any unusuals and be ready to alert the Loco Pilot to stop the train. The Loco Pilot too shall be in an alertness to stop the train immediately upon Guard\'s/Shunting Staff\'s warning.',
  ]

  const generalGuidelines = [
    'Siding Authorities shall provide pathways and lighting on both sides of the line(s), where from rakes will be cleared, for movement of Shunting staff/Guard/Loco Pilot while checking the rakes.',
    'The Station Superintendents of Serving stations, Section TIs and SSE/C&W shall inspect the sidings regularly and counsel the siding staff, Shunting staff and Guards, who are involved in the activities detailed above. Acknowledgements shall be obtained from the staff who have been counselled.',
    'This JPO does not supersede any Agreements/Circulars, Manuals, etc., in this regard.',
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Joint Procedural Order for Placement and Removal of Container Rakes
            </h1>
            <p className="text-gray-300 text-lg mb-2">into & out of Goods Sheds/Sidings/Private Freight Terminals</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Introduction
            </h2>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
                  The following Joint Procedural Order shall be followed while placing and clearing of container rakes into and out of sidings.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Securing of the Rake */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                I. Securing of the Rake Before Placement
              </h2>
            </div>

            <div className="space-y-4">
              {securingSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-3 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Container Handling Precautions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                II. Precautions While Lifting-on and Lifting-off Containers
              </h2>
            </div>

            <div className="space-y-4">
              {handlingPrecautions.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Removal of Rake */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                III. Removal of Rake from the Siding
              </h2>
            </div>

            <div className="space-y-4">
              {removalSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg px-4 py-3 border border-orange-400/30 hover:border-orange-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-orange-400 via-red-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: General Guidelines */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                General Guidelines
              </h2>
            </div>

            <div className="space-y-4">
              {generalGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg px-4 py-3 border border-cyan-400/30 hover:border-cyan-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-sky-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {guideline}
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

export default PlacementAndRemoval