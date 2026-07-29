"use client"
import React from 'react'

const DepartmentalMaterialTrains = () => {
  const derailmentReasons = [
    'Obstruction of running rails with excess ballast / heaps during unloading of ballast.',
    'Ballast between the running rail and check rail at the locations like Points & Crossings, Level Crossings, etc.',
    'Partial unloading of wagons leading to uneven loading.',
    'While backing of Ballast DMT during block without ensuring clear flange way clearance towards the gauge face side.',
  ]

  const generalPoints = [
    'All the relevant rules given in G&SR chapter IV, GR No\'s. 4.62, 4.63, & 4.64 and the relevant SRs pertaining to Working of material trains and Para 806 (I) of IRPWM-2020 are to be scrupulously followed.',
    'Sr.DEN/DEN/ADEN should counsel the P.Way staff responsible for loading/unloading of ballast hopper wagons. Trackmen with sufficient experience only should be deputed for DMT working.',
    'In case Ballast is unloaded by contractual agency, ensure that contractor\'s supervisor is available with authorized photo identity card. Contractor\'s Supervisor/workmen should be trained to work on the ballast train and properly counseled about the safety measures to be followed during loading/unloading.',
    'Staff overdue for Medical/refresher course should not be deputed to undertake the DMT work.',
    'Ensure proper planning and preparation before going for block working and ensure sufficient block before going for unloading.',
    'Any defect noticed on the wagons which may endanger the safety should be brought to the notice of C&W department i.e Control & Base depot for immediate attention by Engineering Department officials during the course of DMT (Departmental Material Trains) working.',
  ]

  const dutiesPoints = [
    { main: 'Respective SSE/JE/P.Way supervising the unloading shall be responsible for efficient functioning of the unloading operation of ballast train.' },
    { main: 'The Sectional P.Way Engineer, not below the rank of JE/P.Way shall be responsible for:', sub: [
      'Supervising safe unloading of ballast.',
      'Clearing of unloaded ballast, so that ballast does not infringe the Standard Moving Dimensions.'
    ]},
    { main: 'The loco pilot of ballast train shall be vigilant and follow the instructions of P.Way Engineer available in loco driving cab, who shall be on constant look out for signals from sectional P.Way Engineer/Guard while unloading of ballast and follow the signals given from rear of the train or otherwise.' },
    { main: 'A continuous proceed hand signal shall be shown by the Train Manager throughout the movement of the train during unloading.' },
    { main: 'During engine reversal, entire formation brakes are to be released by Train Manager/P. Way staff.' },
  ]

  const examinationPoints = [
    'All ballast wagons/sleeper carrier wagons of material trains should have a nominated Base depot and name of the nominated depot should be clearly stenciled on these wagons.',
    'These trains should be offered for examination at the Base depot at least once in a month where they will be thoroughly examined as per prescribed maintenance instructions.',
    'Door operating mechanism of all the ballast wagons should be maintained properly to ensure smooth and trouble free operation of doors.',
    'The rake should be offered for checking in empty condition at the time of issue of BPC, train examination staff should ensure that all the doors are kept in working condition with door fittings & gears intact. All the doors should be properly closed. BPC should be clearly endorsed by hand or with Stamp as "All Doors Checked and kept in working condition".',
    'The originating Brake power of these trains should not be less than 90%. The validity of the BPC for DMT is 30 days.',
    'The nominated Base depot should ensure adequate stock of maintenance spares for these wagons.',
    'The BPC is validity for movement of the rakes over SCR jurisdiction only.',
    'It is the responsibility of SSE/P.way in-charge of Ballast depot to move the rake to Base depot in Empty condition prior to expiry of BPC, so that running of these trains with invalid BPC is completely avoided.',
    'After loading/unloading, TMLP check should be conducted for ensuring safe running of DMT.',
  ]

  const preLoadingPoints = [
    'SSE/P.Way In-charge of Ballast Depot must ensure oiling and greasing of door operating mechanism in all the wagons of BOBYN rakes at Ballast Depot before loading of every trip and must keep a proper record in the form of a Log Book. The sectional ADEN and Sr. DEN during their inspection at ballast Depot should check the Log Book and ensure that the same is properly maintained.',
    'Door operation of all the wagons should be checked before offering the rake for loading of ballast.',
    'Wagon with defective doors should not be permitted for loading and prominently marked as "Not to be loaded" and the same to be informed to C&W control for attending repairs.',
    'Defective wagon should be examined and attended by C&W staff. If it is not possible to attend the repairs, same should be booked to Base depot for attention.',
    'SSE/P.Way/In-charge of Ballast Depot will maintain a Log Book on the following pro-forma in which deficiencies observed before loading of rake should be entered:',
    'Before entering into block section, opening of doors should be checked and if some of the doors of any BOBYN are not opening properly, unloading should not be done from that wagon and C&W staff should be booked on the next day to attend the same in the depot.',
    'The list of deficiencies should be handed over to TXR when rake goes for issuing BPC.',
  ]

  const beforeBlockPoints = [
    'Unloading should be done during day light hours only.',
    'The ballast train should be accompanied by a qualified Engineering Official-in-charge not below the rank of JE(P.Way) and one efficient Blacksmith with required tools. He should be well conversant with the rules & regulations pertaining to the working of DMT. The Official-in-charge should have the details of exact location at which the ballast has to be unloaded, duly approved by SSE/P.Way or ADEN. Proper planning for unloading of ballast hoppers TP wise should be done by SSE/JE/P.Way in advance and clear signal should be shown to drivers to stop at exact required locations.',
    'SSE/JE/P.Way should always be available during unloading of Ballast DMTs. SSE/JE should remain at site after completion of unloading and clear the track from heaps of ballast which obstruct DMT movement duly ensuring closing of the doors of empty hopper wagons.',
    'Adequate trained/competent experienced labour shall be made available during unloading of Ballast DMT.',
    'Ballast train should not be taken in to section for unloading if any hopper is having uneven load. The unevenly loaded wagon should be adjusted before taking in to the section.',
    'Ensure that the safety equipment and first aid boxes are available with supervisor and are in good working order and in updated condition.',
    'In case of non-operation of doors detected after loading of ballast/movement of DMT, a message to be given to C&W control for arranging staff to attend.',
  ]

  const duringUnloadingPoints = [
    'Direct unloading of ballast on Platform lines should not be undertaken. Ballast may be first unloaded on the adjoining non-platform lines in phases and then taken to Platform lines.',
    'DMT should not be moved at speeds higher than 8 to 10 KMPH while unloading ballast. Also DMT shall move only in one direction and no pushing back without clearing flange way.',
    'While ballast train is working, it should be ensured that all the doors are opened slowly to avoid sudden discharge and uniform spreading of the ballast. On curves, inner door should be adjusted so that the required quantity of unloading is ensured on both the sides.',
    'While unloading ballast from hoppers, care should be taken in Point and Xing Zones, so that check rails and gap between tongue rail and stock rail are clear. (Motors of points be covered with any wooden/MS sheet to avoid dropping of ballast between point rods)',
    'DMT should not be stopped while unloading is in process. If the ballast train has stopped during unloading, it should be ensured that the ballast is clear off the top table of rail and flange way before start of the train.',
    'All TL JB (Track Lead Junction Box) should be kept clear off ballast. OHE mast should be clear off ballast so that it can be checked whether bonding of mast with rail is intact or not.',
    'If for any reason one side door is not opened opposite door should also be closed so that uneven unloading is avoided.',
    'Due to poor visibility at the time of unloading, if it becomes difficult to exchange signal between LP and Train Manager/SSE/JE/P.Way, Walkie-Talkie sets should be made available to the LP and Train Manager/ SSE/JE/P.Way for proper and safe working of DMTs. Walkie-Talkie sets should have particular channel for Engg. staff so that loco pilot will not get disturbed and loco pilot will be advised of movements through the person available on engine orally. Sufficient Nos. of P.Way staff should be provided to exchange signal between driver and Guard/SSE/JE/P.Way.',
    'Wagons which cannot be opened / unloaded even with the help of Blacksmith, empty rake with such unloaded wagons shall be taken to nearest yard/stabling lines for getting the door attended by TXR. After repair of defective doors, ballast from these wagons shall be unloaded at convenient locations, ballast accounted for and empty rake dispatched to loading depot. By mistake, if unloading done unevenly those rakes should not be taken on to loop line via turnouts and also try to move such wagons on curves with restricted speed with all precautionary measures.',
  ]

  const afterUnloadingPoints = [
    'After unloading the ballast, it must be physically ensured that no uneven unloading of ballast exists. In case of uneven unloading in rake is noticed and the same cannot be attended to in the block, ballast in the wagon to be levelled manually duly taking care of OHE lines, the DMT must be taken to nearest station with speed restriction as considered necessary ensuring that speed is not more than 10 kmph.',
    'SEJs should be cleared off stone ballast after unloading.',
    'Ensure clearance of ballast heaps properly to avoid jamming of signal rods, gears and lock bars after unloading.',
    'Ensure that unloaded ballast from train should be kept clear off moving dimensions. If required suitable SR may be imposed.',
    'SSE/JE/P.Way who is official In-charge of DMT will ensure before leaving the site that no stone is left inadvertently between the stock rails, tongue rail, Check rail & nose of crossings etc.',
    'Ballast which has fallen between the running rail and check rail on curves & LCs should be cleared invariably before cancellation of block.',
    'Ballast heaps should not obstruct the movement of wheel.',
    'While giving the Memo to ASM for clearing the block of unloading of ballast, it must be ensured by SSE/JE (P.Way) supervising the work that there is no infringement to moving dimension.',
    'Despite all precautions it is likely that some ballast may hit the foot board of the train resulting in rising of dust etc. It is therefore, recommended that a speed restriction of 45 KMPH be imposed for the first two trains which passes over the portion where the ballast had been unloaded. Caution order shall indicate the location where the ballast had been unloaded and also that the temporary engineering indicator Board are not displayed at station.',
    'SSE/JE(P.Way)/Mate with gang shall remain at site standing at gaps to cover entire unloaded length until next two trains have passed. Without ensuring unloaded ballast clear off running gears of train Track FIT certificate should not be issued.',
    'After each unloading, SSE/P.way in-charge of Ballast depot should ensure clearing of the ballast dust from gear wheels of door operating mechanism and then oiling and greasing of door operating mechanism should be carried.',
    'In order to ensure complete unloading of ballast, the hopper doors must be in working order after unloading of ballast hoppers (BOBYN rakes), SSE/JE (P.Way) supervising unloading must also invariably record the unloading details in the following tabular form in a register.',
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              JOINT PROCEDURE ORDER FOR LOADING, UNLOADING AND TRANSPORTATION OF
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold bg-linear-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent mb-4">
              BALLAST DEPARTMENTAL MATERIAL TRAINS (DMTs)
            </h2>
            <p className="text-gray-300 text-lg mb-2">No.W.506/General/Track/Ballast loading-Unloading/JPO/2023</p>
            <p className="text-gray-300 text-lg mb-6">Date: 14.09.2023</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30 mb-6">
              <p className="text-gray-200 leading-relaxed text-center text-lg font-semibold">
                This JPO is issued to curb the cases of derailments involving the Departmental Material Trains.
              </p>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Derailments of ballast trains occur primarily due to the following reasons:</h3>
            <div className="space-y-4">
              {derailmentReasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {['i', 'ii', 'iii', 'iv'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: General */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                1. General
              </h2>
            </div>
            
            <div className="space-y-4">
              {generalPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {['i', 'ii', 'iii', 'iv', 'v', 'vi'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Duties */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                2. Duties of Train Manager/Loco Pilot/SSE/(P.Way)
              </h2>
            </div>
            
            <div className="space-y-4">
              {dutiesPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg px-4 py-4 border border-blue-400/30 hover:border-blue-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="flex items-center justify-center flex-col gap-3">
                    <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-blue-400 via-cyan-500 to-sky-500 text-white font-semibold flex items-center justify-center shadow-md">
                      {['i', 'ii', 'iii', 'iv', 'v'][index]}
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {point.main}
                    </p>
                  </div>
                  {point.sub && (
                    <div className="mt-4 space-y-3 pl-4">
                      {point.sub.map((subPoint, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-blue-400/20"
                        >
                          <div className="mt-1 h-7 w-7 rounded-full bg-linear-to-br from-blue-300 via-cyan-400 to-sky-400 text-white text-sm font-semibold flex items-center justify-center shadow-sm shrink-0">
                            {['a', 'b'][subIndex]}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">
                            {subPoint}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Examination */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                3. Examination of rake before sending to ballast depot for loading
              </h2>
            </div>
            
            <div className="space-y-4">
              {examinationPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Pre-loading */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                4. Pre-loading of the Ballast at depot
              </h2>
            </div>
            
            <div className="space-y-4">
              {preLoadingPoints.map((point, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg px-4 py-3 border border-orange-400/30 hover:border-orange-400/50 transition-all backdrop-blur-lg">
                    <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-orange-400 via-red-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                      {['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii'][index]}
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {point}
                    </p>
                  </div>
                  {index === 4 && (
                    <div className="bg-black/20 rounded-lg p-4 mt-4 overflow-x-auto border border-orange-400/20">
                      <table className="w-full text-sm text-gray-200 border-collapse">
                        <thead>
                          <tr className="border-b border-gray-600">
                            <th className="p-2 text-left">Date of Checking</th>
                            <th className="p-2 text-left">BOBYN Nos. in which doors are badly jammed and could not be opened</th>
                            <th className="p-2 text-left">BOBYN Nos. in which gap observed even in closed position of doors</th>
                            <th className="p-2 text-left">BOBYN Nos. in which door opening assembly is very tight and is not working smoothly and doors opened with a lot of extra effort</th>
                            <th className="p-2 text-left">BOBYN Nos. in which Oiling and Greasing done and doors handles have free movement</th>
                            <th className="p-2 text-left">Any other remark of the inspecting officials</th>
                            <th className="p-2 text-left">Signature of the inspecting officials</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={7} className="p-2 text-center text-gray-400">1 2 3 4 5 6 7</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Prior to departure from depot */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              5. Action to be taken prior to departure of Ballast DMT from depot
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <p className="text-gray-200 leading-relaxed">
                  The In-Charge of the Ballast Depot should ensure that the BOBYNs are loaded & levelled up to the pre-determined paint mark depending on the Carrying Capacity of the BOBYN.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Prior to departure before taking block */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                6. Action to be taken prior to departure of Ballast DMT before taking the block
              </h2>
            </div>
            
            <div className="space-y-4">
              {beforeBlockPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-yellow-500/20 to-amber-500/20 rounded-lg px-4 py-3 border border-yellow-400/30 hover:border-yellow-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-yellow-400 via-amber-500 to-orange-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: During unloading */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                7. Action to be taken during unloading of Ballast DMT by SSE/JE (P.Way) for unloading
              </h2>
            </div>
            
            <div className="space-y-4">
              {duringUnloadingPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg px-4 py-3 border border-cyan-400/30 hover:border-cyan-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: After unloading */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                8. Action to be taken after unloading of Ballast DMT by SSE/JE(P.Way)
              </h2>
            </div>
            
            <div className="space-y-4">
              {afterUnloadingPoints.map((point, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-pink-500/20 to-rose-500/20 rounded-lg px-4 py-3 border border-pink-400/30 hover:border-pink-400/50 transition-all backdrop-blur-lg">
                    <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-pink-400 via-rose-500 to-red-500 text-white font-semibold flex items-center justify-center shadow-md">
                      {['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii'][index]}
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {point}
                    </p>
                  </div>
                  {index === 11 && (
                    <div className="bg-black/20 rounded-lg p-4 mt-4 border border-pink-400/20">
                      <p className="text-gray-200 mb-2">No. of hoppers unloaded:</p>
                      <p className="text-gray-300">Empty | Partly unloaded | Fully unloaded | Total</p>
                    </div>
                  )}
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

export default DepartmentalMaterialTrains