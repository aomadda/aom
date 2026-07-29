'use client'

import React from 'react'

interface SpeedRestriction {
  question: string
  answer: string
  speed?: string
}

const SpeedRestrictions = () => {
  const restrictions: SpeedRestriction[] = [
    { question: 'Maximum Hand shunting speed is', answer: '5 kmph', speed: '5 kmph' },
    
    { question: 'The maximum shunting speed of wagons containing Explosives or POL products shall not exceed', answer: '8 kmph', speed: '8 kmph' },

    { question: 'When engine is pushing a train and Guard is not travelling in leading vehicle, the speed shall not exceed', answer: '8 kmph', speed: '8 kmph' },

    { question: 'After stopping at the stop indicator, Loco Pilot shall sign in this book and proceed with restricted speed of ______ kmph.', answer: 'ER-7, 8 kmph', speed: '8 kmph' },
    
    { question: 'Testing of detonator shall be done by moving an empty wagon hauled by a locomotive at a speed of', answer: '8 to 11 kmph', speed: '8-11 kmph' },
    
    { question: 'When \'lurch\' is reported and subsequently a train is sent in the absence of engineering official, Caution Order is given to the LP to stop dead if considered safe, proceed at a speed of', answer: '10 kmph', speed: '10 kmph' },
    { question: 'Rail fracture of less than 30mm, the speed of first train shall be restricted to ______ kmph', answer: '10 kmph', speed: '10 kmph' },

    { question: 'Maximum speed during fog in Automatic Signalling system while passing Semi-Automatic signal at ON when A marker is illuminated is restricted to ______ kmph', answer: '10 kmph', speed: '10 kmph' },

    { question: 'Maximum speed of trains during dense fog in automatic block system is restricted to ______ kmph when aspect of signal ahead is caution.', answer: '10 kmph', speed: '10 kmph' },
    
    { question: 'Maximum speed of motor trolley over points and crossings is restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The speed of a goods train while entering terminal yard is restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'When leading compartment of an electric or diesel engine with twin cab is defective and the train is driven from trailing compartment by Loco Pilot, the speed shall not exceed ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The speed during shunting operations shall not exceed ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'Rail fracture of less than 30mm, the speed of second and subsequent trains shall be restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The Station Master who received the message about the rail fracture through LP, he shall arrange to issue caution order of ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'When a train is dispatched on T/J602, when view ahead is clear, the speed shall not exceed ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'When Loco Pilot passes an automatic signal at ON without any authority after waiting 1/2 minutes during day/night with great caution so as to stop short of any obstruction is restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'In cases where the leading cab of an EMU/MEMU has become defective, brake equipment in the leading cab is inoperative; the maximum speed shall be', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The Loco Pilot on observing PHS shall be pass the defective signal at "ON" position at a speed not exceeding ______ kmph..', answer: '15 kmph', speed: '15 kmph' },

    { question: 'Light engine/vehicle which is going for opening of communication shall proceed with a restricted speed of _______ kmph.', answer: '15 kmph', speed: '15 kmph' },

    { question: '(The engine of the first train waiting to go forward will be detached and sent light accompanied by the pilot Guard to the next station for establishing The Pilot Guard System working)The Loco Pilot shall proceed very cautiously at a speed not exceeding ______ kilometres an hour and be prepared to stop within a short distance.', answer: '15 kmph', speed: '15 kmph' },

    { question: 'What is the default supervised speed in Shunt (SH) mode? is restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },
    
    { question: 'Loco Pilot can pass an Automatic Signal at "ON" position without any authority after waiting 1/2 minutes during day/night with great caution so as to stop short of any obstruction is restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The Gap between Contact wire and Over Dimensional Consignment (ODC) between 250 mm and 200 mm(For 25 KV AC Electrified Sections) the speed shall be restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The Gap between Contact wire and Over Dimensional Consignment (ODC) less than 200 mm (For 25 KV AC Electrified Sections) the speed shall be restricted to ______ kmph and over head power shall be switched off is restricted to ______ kmph', answer: '15 kmph', speed: '15 kmph' },

    { question: 'The Loco Pilot of a train while passing an Outer, a Home or a Routing signal, when it is "on" or defective, shall ensure that the speed of his train does not exceed ______ kmph.', answer: '15 kmph', speed: '15 kmph' },
    
    { question: 'When IBS is at "ON" and the telephone is out of order, Loco Pilot after waiting for five minutes shall proceed when view is clear/not clear up to next stop signal at a speed of ______ kmph.', answer: '15/8 kmph', speed: '15/8 kmph' },
    
    { question: 'Speed of Light engine/vehicle, going for opening of communication, is restricted to ______ kmph', answer: '15/10 kmph', speed: '15/10 kmph' },
    { question: 'Relief loco/train shall proceed with a restricted speed of', answer: '15/10 KMPH', speed: '15/10 kmph' },
    
    { question: 'When engine is pushing a train and Guard is travelling in brake van, which is leading, the speed shall not exceed ______ kmph', answer: '25 kmph', speed: '25 kmph' },

    { question: 'No engine or self-propelled vehicle shall push any train outside station limits, except in accordance with special instructions and at a speed not exceeding ______ kmph.', answer: '25 kmph', speed: '25 kmph' },

    { question: 'During T S L working, the speed of first train shall be restricted to ______ kmph', answer: '25 kmph', speed: '25 kmph' },

    { question: 'The first train running in the wrong direction during TSL working on Automatic block system shall proceed with a restricted speed of ______ kmph', answer: '25 KMPH', speed: '25 kmph' },

    { question: 'The light engine which is coming on T/609 to pick up the second portion shall come with a restricted speed of ______ kmph', answer: '25 KMPH', speed: '25 kmph' },
    
    { question: 'During prolonged failure of signals but communications are available on D/L Automatic Block System, the speed of first train and second and subsequent trains respectively are restricted to ______ kmph and ______ kmph', answer: '25 kmph & Sectional speed', speed: '25 kmph' },

    { question: 'What is the default supervised speed in Reverse (RV) mode? is restricted to ______ kmph', answer: '25 kmph', speed: '25 kmph' },

    { question: 'What is the maximum permissible speed for a Class "B" ODC on Metre Gauge (MG) section?', answer: '25 kmph', speed: '25 kmph' },

    { question: 'What is the maximum permissible speed for a Class "C" ODC on Broad Gauge (BG) section?', answer: '25 kmph', speed: '25 kmph' },

    { question: 'In The Following Trains System, all the trains following the first train shall be timed to run at the same speed and such speed shall not exceed ______ kmph.', answer: '25 kmph', speed: '25 kmph' },

    
    { question: 'During T I C on double line, the Loco Pilot to proceed with a restricted speed of ______ kmph', answer: '25/10 kmph', speed: '25/10 kmph' },
    { question: 'If enquiry is made for more than one train and reply is also received, after a clear interval of 30 minutes the second train can be allowed to go with a restricted speed of ______ kmph', answer: '25/10 KMPH', speed: '25/10 kmph' },

    { question: 'In The Following Trains System, The Pilot Guard System, The Train Staff & Ticket Systems, speed of all the trains following the first train shall not exceed ______ kmph except under special instructions', answer: '25/10 kmph', speed: '25/10 kmph' },
    
    { question: 'During dense fog maximum speed of a train on Automatic block system when signal showing two yellow lights shall be restricted to ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'Unless permitted under approved special instructions the maximum speed permitted on turn out/cross over is restricted to ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'The speed of trains over Non-Interlocked points, turnouts and crossover shall not exceed ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'Maximum speed of motor trolley during night is restricted to ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'The speed of the train while passing through Neutral section shall not be less than ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'During Non interlocking working, allowed to enter (taking off signals) cautiously at speed not exceeding ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'LP and Guard notice Flat tyre on Run in Block Section should clear block section with a speed restriction of ______ kmph', answer: '30 kmph', speed: '30 kmph' },

    { question: 'After an SOS brings a train to a stop, KAVACH supervises the train speed at ______ kmph Until the train passes the originating location of the "SOS" message', answer: '30 kmph', speed: '30 kmph' },

    { question: 'Inspection can be done by either by travelling in a light engine/Tower Car with a restricted speed of ______ kmph or by proceeding on a motor/push trolley if Loco/Tower car is not readily available (In case of Flat Tyre).', answer: '30 kmph', speed: '30 kmph' },

    
    { question: '\'Patrol\' or \'Search-light\' special with one or more vehicles in front of the engine may be permitted to run at a maximum speed of ______ kmph', answer: '40 kmph', speed: '40 kmph' },
    { question: 'If the night patrolman does not turn up even after 15 minutes beyond the schedule arrival time, SM shall stop all the trains and issue caution order restricting the speed to ______ kmph', answer: '40 kmph', speed: '40 kmph' },
    { question: 'When head light is defective after putting marker lights \'on\' train can go with a restricted speed of ______ kmph or severest speed of the section', answer: '40 kmph or severest speed of the section', speed: '40 kmph' },
    { question: 'In case of emergency the Assistant Loco Pilot can be authorized to drive the train at a restricted speed up to the nearest point where he can be relieved, not exceeding ______ kmph', answer: '40 kmph', speed: '40 kmph' },

    { question: 'When leading compartment of an electric or diesel engine with twin cab is defective and the train is driven from trailing compartment by Assistant Loco Pilot, the speed shall not exceed ______ kmph', answer: '40 kmph', speed: '40 kmph' },

    { question: 'What is the typical speed restriction for a Class "B" ODC on Broad Gauge (BG)? is restricted to ______ kmph', answer: '40 kmph', speed: '40 kmph' },

    { question: 'The Track should be fit for running of goods train with axle load of 22.9 tonne at a speed not lower than ______ kmph (MGR Scheme)', answer: '40 kmph', speed: '40 kmph' },

    { question: 'What is the maximize speed at which a train is permitted to run from the defective weighbridge to next availabe weighbridge?', answer: '40 kmph', speed: '40 kmph' },

    { question: 'Isolation is necessary where the trains are to run through a station at a speed exceeding ______ kmph', answer: '50 kmph', speed: '50 kmph' },

    { question: 'When major work such as relaying and re-girdering is in progress, a speed restriction that shall be observed on the adjoining line of DL/MULTIPLE line section is restricted to ______ kmph', answer: '50 kmph', speed: '50 kmph' },

    { question: 'At standard – I R interlocked station the maximum speed permitted for the train over main line points is restricted to ______ kmph', answer: '50 KMPH', speed: '50 kmph' },

    { question: 'At stations with manually operated multiple-aspect signals and train speed not exceeding ______ kmph, Distant and Home signals may be provided in each direction', answer: '50 KMPH', speed: '50 kmph' },

    { question: 'If a train runs through at a speed exceeding ______ kmph without stopping, a Warner signal shall be provided at a class "B" station (both on a single and a double line)?', answer: '50 KMPH', speed: '50 kmph' },
    
    { question: 'What is the maximum permissible train speed for the proviso under GR 3.33? is restricted to ______ kmph', answer: '50 KMPH', speed: '50 kmph' },

    { question: 'Engineering Control in consultation with SSE/JE-P.Way Supervisor who has inspected the section (In case of of Flat Tyre) shall impose Speed Restriction of ______ kmph for Passenger trains as well as for empty Goods trains in the affected section till USFD test is conducted.', answer: '50 KMPH', speed: '50 kmph' },
    { question: 'Loaded goods shall be permitted at ______ kmph on completion of USFD and after observing for 24 hours, normal speed shall be restored for such trains (In case of Flat Tyre).', answer: '50 KMPH', speed: '50 kmph' },

    { question: 'What is the maximum permitted speed for loaded long haul trains? is restricted to ______ kmph', answer: '55 KMPH', speed: '55 kmph' },

    { question: 'Super fast train means ,The average speed is ______ kmph & above', answer: '55 kmph', speed: '55 kmph' },

    { question: 'Mail Express trains are faster than passenger trains. Superfast trains have a higher average speed of greater than or equal to ______ kmph.', answer: '55 kmph', speed: '55 kmph' },
    { question: 'During dense fog maximum speed of a train on Automatic block system when signal showing green light shall be restricted to ______ kmph', answer: '60kmph', speed: '60 kmph' },

    { question: 'In case of heavy leakage or deflated air spring, the defective bogie is to be isolated with the help of isolaing valves and driver should observe a speed restriction of ______ kmph upto terminal point for maintenance.', answer: '60 kmph', speed: '60 kmph' },
    
    { question: 'When healthy section is temporarily isolated and re-energised, if train entered faulty section, the speed of the first train by day / night shall be restricted to ______ kmph', answer: '60/30 kmph', speed: '60/30 kmph' },

    { question: 'Heavy wind is considered dangerous for running trains if wind velocity is________ kmph or more', answer: '65 kmph or more', speed: '65 kmph' },
    
    { question: 'During dense fog maximum speed of a train on Automatic block system when signal showing green light and fog safety device is provided shall be restricted to ______ kmph', answer: '75kmph', speed: '75 kmph' },

    { question: 'During dense fog and fog safety device is provided maximum speed of a train on Absolute block system shall be restricted to ______ kmph', answer: '75 kmph', speed: '75 kmph' },

    { question: 'On completion of USFD testing, speed of passenger trains and that of empty goods trains shall be raised to ______ kmph and after observing for 24 hours, normal sectional speed shall be restored for these trains (In case of Flat Tyre).', answer: '75 kmph', speed: '75 kmph' },

    { question: 'What is Maximum speed of BOXNR Empty Rake is restricted to ______ kmph', answer: '80 kmph', speed: '80 kmph' },

    { question: 'In case of en-route breakage of outer flexi-coil spring of primary stage suspension, the LHB coach can be permitted to run upto destination with escorting TXR staff at a restricted speed of ______ kmph. (In case of Flat Tyre)', answer: '80 kmph', speed: '80 kmph' },

    { question: 'In case of en-route breakage of outer flexi-coil spring of secondary stage suspension the LHB coach can be permitted to run with a restricted speed of ______ kmph upto the destination with TXR staff to escort the train and critically monitor the broken spring. (In case of Flat Tyre)', answer: '90 kmph', speed: '90 kmph' },

    { question: 'Maximum speed of 140 T Hydraulic Crane (BG) is restricted to ______ kmph', answer: '100 kmph', speed: '100 kmph' },

    { question: 'What is Maximum speed of WAG 9 Locomotive over SC Rly is restricted to ______ kmph', answer: '100 kmph', speed: '100 kmph' },


    { question: 'Maximum speed of the trains over DFC willbe ______ kmph', answer: '100 kmph', speed: '100 kmph' },

    { question: 'Maximum speed of BVZI wagon is ______ kmph', answer: '100 kmph', speed: '100 kmph' },
    
    { question: 'At standard – II R interlocked station the maximum speed permitted for the train over main line points is restricted to ______ kmph', answer: '110 KMPH', speed: '110 kmph' },

    { question: 'Where necessary (when sectional speed is more than 110 kmph) two distant signals (Double distant) may be provided in the same direction', answer: '110 KMPH', speed: '110 kmph' },
    
    { question: 'At standard – III R interlocked station the maximum speed permitted for the train over main line points is restricted to ______ kmph', answer: '140 KMPH', speed: '140 kmph' },

    { question: 'In case Loco is not equipped with Kavach or Loco Kavach becomes defective, the maximum speed of train shall not exceed __________ kmph subject to other speed restrictions.', answer: '140 kmph', speed: '140 kmph' },
    
    { question: 'At standard – IV R interlocked station the maximum speed permitted for the train over main line points is restricted to ______ kmph', answer: '160 KMPH', speed: '160 kmph' },

    { question: 'KAVACH RFID tags are designed to be reliable for train speeds up to what limit? is restricted to ______ kmph', answer: '200 KMPH', speed: '200 kmph' },
    
    { question: 'When the train is working without BV, while pushing back the LP has to observe the hand signals of guard and proceed with ______ kmph', answer: 'Walking speed', speed: 'Walking' },
    { question: 'During dense fog maximum speed of a train on Automatic block system when it is showing single yellow light shall be restricted to ______ kmph', answer: 'Restricted speed to stop at next stop signal', speed: 'Restricted' },
    { question: 'Even under normal circumstances subject to observance of permanent / temporary speed restrictions in force all Passenger carrying trains should run at ______ kmph', answer: 'maximum permissible speed', speed: 'Max' },
    { question: 'In case speedometer is defective between crew changing stations it should be further worked', answer: '10% reduction of speed up to next crew changing station', speed: '10%' },
    { question: 'The speed of a passenger/goods train on 1 in 8 ½ turnout (straight switch) is restricted to ______ kmph', answer: 'as sanctioned', speed: 'As sanctioned' },
    { question: 'When Station Masters of both ends received Trolly/Lorry Notice, they shall stop all the trains entering into the section and issue ______ kmph', answer: 'Caution Order', speed: 'Caution' },
  ]

  // Group restrictions by speed for better organization
  const groupedBySpeed = restrictions.reduce((acc, restriction) => {
    const speedKey = restriction.speed || 'Other'
    if (!acc[speedKey]) {
      acc[speedKey] = []
    }
    acc[speedKey].push(restriction)
    return acc
  }, {} as Record<string, SpeedRestriction[]>)

  const getSpeedColor = (speed: string) => {
    const speedNum = parseInt(speed)
    if (isNaN(speedNum)) {
      return 'bg-linear-to-r from-purple-600 to-purple-700'
    }
    if (speedNum <= 10) return 'bg-linear-to-r from-red-600 to-red-700'
    if (speedNum <= 20) return 'bg-linear-to-r from-orange-600 to-orange-700'
    if (speedNum <= 40) return 'bg-linear-to-r from-yellow-600 to-yellow-700'
    if (speedNum <= 60) return 'bg-linear-to-r from-green-600 to-green-700'
    if (speedNum <= 100) return 'bg-linear-to-r from-blue-600 to-blue-700'
    return 'bg-linear-to-r from-indigo-600 to-indigo-700'
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Speed Restrictions
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to speed restrictions for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedBySpeed).map(([speed, items]) => (
            <div key={speed} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Speed Header */}
              <div className={`${getSpeedColor(speed)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {speed}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700">
                          <span className="text-blue-300 font-semibold text-lg">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {restrictions.length}
            </div>
            <div className="text-gray-300">Total Restrictions</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedBySpeed).length}
            </div>
            <div className="text-gray-300">Speed Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              5-160
            </div>
            <div className="text-gray-300">Speed Range (kmph)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeedRestrictions
