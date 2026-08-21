'use client'

import React from 'react'

interface Distance {
  question: string
  answer: string
  distance?: string
}

const DistanceWisePage = () => {
  const distances: Distance[] = [
    { question: 'No consignment with less than ______ millimeter clearance from the overhead contact wire will be permitted in a 25 kV electrified section.', answer: '100 Millimeter', distance: '100 MM' },

    { question: 'The Gap between Contact wire and Over Dimensional Consignment (ODC) shall be not less than (For 25 KV AC Electrified Sections) _______', answer: '250 Millimeter & Above', distance: '250 MM' },

    { question: 'No consignment with less than _______ gross clearance from the over head contact wire will be permitted over electrified section.', answer: '10 CM', distance: '10 CM' },

    { question: 'The distance between the two tracks on Broad Gauge', answer: '1.676M', distance: '1.676M' },

    { question: '“Danger Zone” means the zone lying around any live equipment with in a radius of________', answer: '2M', distance: '2M' },

    { question: 'Station Master or Parcel Clerk shall ensure Parcel, luggage, goods and vendors‘ trays and barrows shall not be placed on passenger platforms within ______ meters of the edge of the platform.', answer: '3 meters', distance: '3M' },


    { question: 'At non interlocked gates, the gateman, before opening the gate for road traffic shall fix a banner flag by day and red light by night at a distance of', answer: '5 Meters from Gate', distance: '5M' },

    { question: 'The distance of derailing switch from the point is about ________ feet.', answer: '15 ', distance: '15 feet' },

    { question: 'Centre to centre distance between tracks for examination lines should be minimum ______ meters', answer: '7.5M', distance: '7.5M' },
    
    { question: 'In thick, foggy or tempestuous weather impairing visibility and his engine explodes two detonators within a distance of _______ metres apart, the Loco Pilot will control his train immediately and will follow the aspect of stop signal ahead.', answer: '10M', distance: '10M' },
    
    { question: 'In case of Class \'D\' stations, \'ENGINE STOP\' board shall be provided at a distance of 15M beyond the point/place on platform where train is required to be stopped.', answer: '15M', distance: '15M' },
    
    { question: 'While performing shunting on passenger carrying trains, the shunting engine or train engine, before coming on to the formation should be stopped before the formation at a distance of', answer: '20 M', distance: '20M' },
    
    { question: 'From the obstruction (work spot), Engineering Stop indicator is located at', answer: '30M', distance: '30M' },

    { question: 'Termination Indicator is a square board of side 610 mm with black letter "T" on white background and located at 30 metres beyond danger zone', answer: '30M', distance: '30M' },

    { question: 'When the train is required to Stop and the restriction is likely to last for more than a day.— A ___ shall be exhibited at a distance of ___from the place of obstruction and a _____ at 1200 metres on the Broad Gauge.', answer: 'Stop indicator, 30 metres, Caution indicator', distance: '30M' },

    { question: 'When the train is not required to Stop and the restriction is likely to last only for a day or less.— Proceed with caution hand signals shall be exhibited at a distance of ___and again at a distance of at least ___ from the place of obstruction.', answer: '30 metres, 800 metres', distance: '30M' },

    { question: 'When the train is not required to Stop and the restriction is likely to last for more than a day.— A ___ shall be exhibited at a distance of ___ from the place of obstruction and again a caution indicator at a distance of at least ___ or as specified by special instructions from the place of obstruction.', answer: 'speed indicator, 30 metres, 800 metres', distance: '30M' },
    
    { question: 'While receiving a train on an obstructed line, STOP hand signal shall be exhibited from the point of obstruction at a distance of not less than', answer: '45M', distance: '45M' },

    { question: 'A safety radius/distance of 45M should be maintained during the explosion of detonators.', answer: '45M', distance: '45M' },

    { question: 'Sand hump is an extended portion of rail embedded in sand of ____ in length with increasing gradient of 1 in 60', answer: '60M', distance: '60M' },

    { question: 'The distance of derailing switch from the points is about _____ feet.', answer: '15 feet', distance: '15 feet' },
    
    { question: 'When a train is stopped in an automatic block signalling section on single line and train cannot proceed further, the Guard shall protect in rear duly placing detonators at', answer: '90, 180, &190M', distance: '90M' },
    
    { question: 'When automatic danger level indicator is flashing red light the Loco Pilot shall stop the train before the indicator at', answer: '100M', distance: '100M' },
    
    { question: 'On Single line Multiple Aspect Signals(MAS), the Signal Over Lap(SOL) shall not be less than', answer: '120M', distance: '120M' },

    { question: 'On a Double line section, Advance Starter shall be placed at a distance of 120M from Starter signal in Multiple Aspect Signals(MAS).', answer: '120M', distance: '120M' },

    { question: 'On a Single line section, Advance Starter shall be placed at a distance of 120M from the Trailing points in Maultiple Aspect Signals(MAS).', answer: '120M', distance: '120M' },

    { question: 'On a Single line Shunting Limit Board (SLB) is located from Outermost points at a distance of 120M in Multiple Aspect Signals (MAS)', answer: '120M', distance: '120M' },

    { question: 'On Double line the automatic signal shall not assume OFF position unless the line is clear not only up to the next Automatic signal but also for an adequate distance of not less than', answer: '120M', distance: '120M' },
    
    { question: 'After passing an automatic signal at ON, LP of the following train hauled by any locomotive shall ensure that a minimum distance to be maintained between his train and preceding train is', answer: '150 metres or two OHE masts', distance: '150M' },
    
    { question: 'On a Double line, the distance from Home signal to Block Section Limit Board (BSLB) or Outermost facing points shall not be less than 180M in Multiple Aspect Signals (MAS)', answer: '180M', distance: '180M' },

    { question: 'On a Double line section, Advance Starter shall be placed at a distance of 180M from Starter signal in Two Aspect Signals(TAS).', answer: '180M', distance: '180M' },

    { question: 'On a Single line section, Advance Starter shall be placed at a distance of 180M from the Trailing points in Two Aspect Signals(TAS).', answer: '180M', distance: '180M' },

    { question: 'Home signal is shall be located on Single line section with Multiple Aspect Signals (MAS) at a distance of Not less than 180M from opposing Shunting Limit Board (SLB)/Advance Starter.', answer: '180M', distance: '180M' },

    { question: 'On a Single line Shunting Limit Board (SLB) is located from Outermost points at a distance of 180M in Two Aspect Signals (TAS)', answer: '180M', distance: '180M' },

    { question: 'From either side of SM office, the VTP is located at a distance of', answer: '180M', distance: '180M' },

    { question: 'Gate-cum-distant signal will be located in rear of the gate at a distance of', answer: '180M', distance: '180M' },

    { question: 'On absolute block system, the adequate distance (BOL) beyond FSS on multiple aspect signalling for granting line clear is not less than', answer: '180 M', distance: '180M' },

    { question: 'What should be minimum length of Snag Dead End?', answer: '180M', distance: '180M' },

    { question: 'Where two denotators are placed for protection of train stopped in automatic block signalling section', answer: '180M', distance: '180M' },
    
    { question: 'LP shall ensure head light produces illumination to see ahead clearly for a distance of', answer: '250M', distance: '250M' },

    { question: 'When material train, TTM and Tower wagon are permitted in the same block section to work, the distance to be kept between them shall be_____', answer: '250M', distance: '250M' },
    
    { question: 'During TIC on double line, when a train is stopped in the block section on account of accident, Guard shall protect the train by placing detonators at', answer: '250, 500, 510M', distance: '250M' },

    { question: 'When a train is stopped between stations and if the detention exceeds or is likely to exceed five minutes, it shall be protected in accordance with the provisions of Rule 6.03, except that the Guard going back to protect the train shall place one detonator, at 250 metres from the train on the way out, and two detonators, 10 metres apart, at 500 metres from the train, irrespective of gauge. (The Following Trains System)', answer: '250, 500, 510M', distance: '250M' },
    
    { question: 'Warning boards shall be fixed on OHE masts in rear of neutral sections at a distance of', answer: '250, 500M', distance: '250M' },
    
    { question: 'Fog Signal Post (FSP) is located at a distance of 270M in rear of FSS in either direction to indicate the location for placing detonators by Fog Signalman.', answer: '270M', distance: '270M' },
    
    { question: 'At a Class \'B\' station, Single line section with Multiple Aspect Signals (MAS), the distance from Home signal to outermost facing points shall not be less than 300M.', answer: '300M', distance: '300M' },
    
    { question: 'At a class \'C\' station line clear shall not be given unless- the whole of the last preceding train has passed complete at least __________beyond the Home signal and_________', answer: '400M, Continuing its journey', distance: '400M' },

    { question: 'At a \'A\' class station the distance to be kept free beyond Home signal, before granting line clear is', answer: '400M', distance: '400M' },

    { question: 'Home signal shall be located on Double line section with Two Aspect Signals (TAS) at a distance of Not less than 400M from Outer signal.', answer: '400M', distance: '400M' },

    { question: 'The adequate distance of IB Signal is 400M.', answer: '400M', distance: '400M' },

    { question: 'The Outer signal is located on a Single line section at a distance of Not less than 400M from opposing Shunting Limit Board (SLB)/Advance Starter.', answer: '400M', distance: '400M' },

    { question: 'The Outer signal is located on a Double line section at a distance of Not less than 400M from Home signal.', answer: '400M', distance: '400M' },

    { question: 'To treat any accident as averted collision, outside station limits, the distance between two trains shall be ______', answer: 'Less than 400 meters', distance: '400M' },

    { question: 'What is the Adequate distance beyond the First Stop Signal for granting line clear in case of two aspect lower quadrant signals?', answer: '400M', distance: '400M' },

    { question: '(On a single line section or a section of double or multiple lines when temporarily worked as a single line section). When a train is stopped between stations on account of accident, failure, obstruction or other exceptional cause and the Loco Pilot finds that his train cannot proceed, Guard should place detonators as follows: On the Metre gauge and Narrow Gauge, the first detonator shall be placed at 400 metres and the three detonators 10 metres apart not less than 800 metres or at such distance as has been fixed by special instructions, from the place where the train has stopped.', answer: '400M, 800M, 810M 820M', distance: '400M' },

    { question: '(On a double line section where trains on the two lines run in the opposite direction). As soon as the Loco Pilot comes to know that his train has met with an accident he shall at once switch on the flasher light and switch off the head light and thereafter either go himself and send his Assistant Loco Pilot or some other competent person to protect the adjacent line in front in the manner, In rear Guard should place detonators as follows and in front in adjacent line The Loco pilot should place detonators as follows: On the Metre gauge and Narrow Gauge, the first detonator shall be placed at 400 metres and the three detonators 10 metres apart not less than 800 metres or at such distance as has been fixed by special instructions, from the place where the train has stopped.', answer: '400M, 800M, 810M 820M', distance: '400M' },

    { question: 'What is Adequate distance beyond first stop signal for granting line in case of two aspect lower quadrant signalling?', answer: '400M', distance: '400M' },

    { question: 'Whenever dead loco is attached to a train, as a final check, the coupled locos should be run for about _________and the driver shall check for any abnormal rise in the temperature of the wheels of the dead locomotive and shall also check it at subsequent stops during the journey.', answer: '500M', distance: '500M' },

    { question: 'The Outer signal is located on a Single line section at a distance of Not less than 580M from Outermost points.', answer: '580M', distance: '580M' },
    
    { question: 'Whistle Board in case of approach to manned level crossing gates is at a distance of', answer: '600M', distance: '600M' },
    { question: 'When the train is required to stop and the restriction is likely to last only for a day or less, on BG a Banner flag shall be exhibited at a distance of', answer: '600M', distance: '600M' },
    
    { question: 'When a train is stopped in an automatic block signalling section on D/L (BG) and train cannot proceed further, the LP/ALP shall protect adjacent line in front duly placing detonators at', answer: '600, 1200, 1210 &1220 M', distance: '600M' },

    { question: 'When the train is required to Stop and the restriction is likely to last only for a day or less.— A banner flag shall be exhibited at a distance of _____ on the Broad Gauge and three detonators at a distance of ______. In addition, Stop hand signal shall be shown at a distance of ______ from the place of obstruction and _______ from last detonator', answer: '600 M, 1200 M, 30 M, 45M', distance: '600M' },

    { question: '(On a single line section or a section of double or multiple lines when temporarily worked as a single line section). When a train is stopped between stations on account of accident, failure, obstruction or other exceptional cause and the Loco Pilot finds that his train cannot proceed, Guard should place detonators as follows: One detonator at 600 metres from his train, to be placed on the way out and three detonators, 10 metres apart, not less than 1200 metres from his train or at such distance as has been fixed by special instructions.', answer: '600, 1200, 1210, 1220M', distance: '600M' },

    { question: '(On a double line section where trains on the two lines run in the opposite direction). As soon as the Loco Pilot comes to know that his train has met with an accident he shall at once switch on the flasher light and switch off the head light and thereafter either go himself and send his Assistant Loco Pilot or some other competent person to protect the adjacent line in front in the manner, In rear Guard should place detonators as follows and in front in adjacent line The Loco pilot should place detonators as follows: One detonator at 600 metres from his train, to be placed on the way out and three detonators, 10 metres apart, not less than 1200 metres from his train or at such distance as has been fixed by special instructions.', answer: '600, 1200, 1210, 1220M', distance: '600M' },

    { question: 'To protect the train from rear, the Guard shall place first detonator at', answer: '600M', distance: '600M' },

    { question: 'To protect train from rear Guard shall place first detonator in BG.', answer: '600M', distance: '600M' },
    
    { question: 'Loop Line clearance Board with legend \'T/Loop\' to be provided at stations at a distance of', answer: '720M', distance: '720M' },
    
    { question: 'Double distant is required where goods trains have a braking distance of more than', answer: '1000M', distance: '1000M' },
    { question: 'In rear of the stop signal Distant signal is provided at a distance of not less than', answer: '1000M', distance: '1000M' },
    
    { question: 'To indicate the Loco pilot of approaching A Class \'D\' stations, a retro reflective type  \'Warning Board\' shall be provided on approach end in rear of the \'D class station from \'ENGINE STOP\' board at distance of 1200M.', answer: '1200M', distance: '1200M' },
    { question: 'On B.G, from the obstruction (work spot) Engineering Caution indicator is located at', answer: '1200M', distance: '1200M' },
    
    { question: 'When the train is required to stop and the restriction is likely to last only for a day or less, on BG, detonators shall be placed at a distance of', answer: '1200, 1210, 1220 metres', distance: '1200M' },
    
    { question: 'Caution board before automatic danger level indicator shall be provided at', answer: '1300M', distance: '1300M' },
    
    { question: 'Signal Warning Board (SWB) is provided in rear of First Stop Signal (FSS) and Gate stop signal at a minimum distance of 1400M', answer: '1400M', distance: '1400M' },
    
    { question: 'After exploding the detonator, if no obstruction found further, the Loco Pilot, can pick up normal speed after proceeding cautiously up to a distance of', answer: '1500M', distance: '1500M' },
    
    { question: 'Wherever double distant is provided, from the stop signal, distant signal location is', answer: '2000M', distance: '2000M' },
    { question: 'When a manual SOS is generated from a station, within what radius will brakes be applied automatically to functional KAVACH locos?', answer: '3000M', distance: '3000M' },
    
    { question: 'The beat of the Patrolman shall no case exceed', answer: '5KM', distance: '5KM' },
    
    { question: 'Under no circumstances a patrolman should be rostered to walk more than', answer: '20KM', distance: '20KM' },
    
    { question: 'Maximum Station spacing distance on DFC will be ______ km', answer: '40KM', distance: '40KM' },

    { question: 'Separate Rate structure for running of MGR scheme, which is on number of trips per day basis as the distance is upto ______ Kms.', answer: '100KM', distance: '100KM' },

    { question: 'Concession under STS shall be applicable to cluster of stations also. The cluster is defined as stations/points within close proximity to each other with a maximum distance between any two stations/points not exceeding ______ km.', answer: '150 KM', distance: '150 KM' },

    { question: 'In FTR booking, Empty Haulage Charge is applied on a minimum chargeable distance of how many kilometres?', answer: '200KM', distance: '200KM' },

    
    { question: 'What is the maximum distance allowed for an End-to-End Rake movement under a GLP check?', answer: '400KM', distance: '400KM' },
    
    { question: 'What is the maximum distance limit (km cap) for GLP movements, as an exam-focused must-write point?', answer: '400KM', distance: '400KM' },

    { question: 'What is the validity period for BPC of an ICF Mail/Express Train?', answer: '3500 km or 96 hours (4 days)', distance: '3500KM' },

    { question: 'BPC for “Military/Election Special trains” in case of ICF coaches is valid for', answer: '3500 km or 7 days', distance: '3500KM' },

    { question: 'Passenger Trains (ICF Stock) Without Toilets have a BPC validity of 3500 km OR 7 days, whichever is earlier.', answer: '3500 km OR 7 days, whichever is earlier', distance: '3500KM' },

    { question: 'BPC for “Passenger trains with toilets” in case of ICF coaches is valid for', answer: '3500 kms or 96 hours', distance: '3500KM' },

    { question: 'Validity for “Mail/Express” in case of ICF coaches checked on pit line is', answer: '3500 kms or 96 hours', distance: '3500KM' },
    
    { question: 'What is the validity of BPC for LHB Coaching Stock running as a Mail/Express train?', answer: '4000KM or 96 hours (4 days)', distance: '4000KM' },

    { question: 'BPC for “Military/Election Special trains” in case of LHB coaches is valid for ______', answer: '4000 kms or 7 days', distance: '4000KM' },

    { question: 'Validity for “Mail/Express” in case of LHB coaches checked on pit line', answer: '4000 kms or 96 hours', distance: '4000KM' },

    { question: 'What is the validity of BPC for a Dedicated Parcel Express Train?', answer: '4500 km or 10 days', distance: '4500KM' },
    { question: 'What is the enhanced (under trial) validity for a BOXN/BOXNHL CC Rake?', answer: '10000 km or 35+5 days', distance: '1000KM' },

    { question: 'Sand hump is an extended portion of rail embedded in sand of 60 M in length with increasing gradient of ______', answer: '1 in 60', distance: 'Gradients' },
    
    { question: 'The provision of Catch siding is compulsory, where the falling gradient towards Station section is steeper than', answer: '1 in 80', distance: 'Gradients' },

    { question: 'The provision of slip siding is compulsory, where the falling gradient towards block section is steeper than', answer: '1 in 100', distance: 'Gradients' },

    { question: 'Dividing of Material train in the block section where the gradient is steeper than ________ is prohibited.', answer: '1 in 100', distance: 'Gradients' },

    { question: 'If the stoppage happened (more than 15 minutes) on a grade steeper than ________ for roller bearing stock(goods train), the number of hand brakes (10 inside engine+5 inside B/V or one third whichever is more) to be applied in addition to the application of brake van hand brake. ', answer: '1 in 150', distance: 'Gradients' },

    { question: 'Rail dollies shall not be worked on sections having gradients steeper than', answer: '1 in 200', distance: 'Gradients' },
    
    { question: 'For shunting purpose, the gradient considered as steep gradient for non roller bearing wagons', answer: '1 in 260', distance: 'Gradients' },

    { question: 'The gradient that is considered as steep gradient for the purpose shunting of roller bearing wagons', answer: '1 in 400', distance: 'Gradients' },

    { question: 'Hand shunting of roller bearing fitted vehicles strictly prohibited at a station yard where the outermost points are on a grade steeper than ________ or within 100 meters of such a gradient.', answer: '1 in 400', distance: 'Gradients' },

    { question: 'On a line isolated from other lines, particularly running lines, a stabled load/train should ideally be placed at a station with a gradient steeper than ________', answer: '1 in 400', distance: 'Gradients' },

    { question: 'In yard situated on gradients steeper than _____ no loose or hand shunting of any vehicle is to be permitted', answer: '1 in 400', distance: 'Gradients' },

    { question: 'The number of hand brakes of vehicles (Brake Van + 18 vehicles on train) that must be applied whenever the engine is to be detached out side station limits when the gradient is not steeper than ________', answer: '1 in 600', distance: 'Gradients' },

    { question: 'The number of hand brakes of vehicles (Brake Van + All vehicles on train) that must be applied whenever the engine is to be detached out side station limits when the gradient is steeper than ________', answer: '1 in 600', distance: 'Gradients' },
  ]

  // Group distances by range for better organization
  const groupedByDistance = distances.reduce((acc, distance) => {
    const distanceKey = distance.distance || 'Other'
    if (!acc[distanceKey]) {
      acc[distanceKey] = []
    }
    acc[distanceKey].push(distance)
    return acc
  }, {} as Record<string, Distance[]>)

  const getDistanceColor = (distance: string) => {
    if (distance === 'Gradients' || distance === 'Other') {
      return 'bg-gradient-to-r from-purple-600 to-purple-700'
    }
    const distanceNum = parseInt(distance.replace('M', '').replace('KM', ''))
    if (isNaN(distanceNum)) {
      return 'bg-gradient-to-r from-purple-600 to-purple-700'
    }
    if (distanceNum <= 50) return 'bg-gradient-to-r from-red-600 to-red-700'
    if (distanceNum <= 200) return 'bg-gradient-to-r from-orange-600 to-orange-700'
    if (distanceNum <= 500) return 'bg-gradient-to-r from-yellow-600 to-yellow-700'
    if (distanceNum <= 1000) return 'bg-gradient-to-r from-green-600 to-green-700'
    if (distanceNum <= 2000) return 'bg-gradient-to-r from-blue-600 to-blue-700'
    if (distance.includes('KM')) return 'bg-gradient-to-r from-indigo-600 to-indigo-700'
    return 'bg-gradient-to-r from-purple-600 to-purple-700'
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Distances
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to distances for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByDistance).map(([distance, items]) => (
            <div key={distance} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Distance Header */}
              <div className={`${getDistanceColor(distance)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {distance}
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-900/50 border border-blue-700">
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
              {distances.length}
            </div>
            <div className="text-gray-300">Total Distances</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByDistance).length}
            </div>
            <div className="text-gray-300">Distance Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              5M-20KM
            </div>
            <div className="text-gray-300">Distance Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DistanceWisePage
