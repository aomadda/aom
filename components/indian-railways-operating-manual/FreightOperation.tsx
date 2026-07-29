'use client'
import { 
  Train,
  Package,
  Settings,
  AlertCircle
} from 'lucide-react'

const FreightOperation = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur-md shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Package className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-7xl text-3xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl">
              FREIGHT OPERATION
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Importance of Freight Operation Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <AlertCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Importance of Freight Operation
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The freight business is the major source of revenue for the Indian Railway.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Main activity centres of Freight operation include terminals, yards, control office and stations.
                </p>
              </div>
            </div>

            {/* I. Broad Classification of Goods Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        I
                      </span>
                    </span>
                  Broad Classification of Goods Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* 1. End to End */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">1. End to End:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Trains, generally run from the train-originating Terminal to the final destination. This is an express stream of freight trains and does not require any stoppage en route, except for crew change.
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Such trains will normally include container trains, air braked block rakes for single destination. These trains are planned to run like non stop Rajdhani trains and may have a fixed timetable and guaranteed transit time. This group may include trains of private freight operators.
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    Other through trains –Are also block rakes or may have two or more destinations on the same or adjacent section. These may have conventional bogie stock
                  </p>
                </div>

                {/* 2. Work Trains, Shunting Trains, Pilots etc. */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">2. Work Trains, Shunting Trains, Pilots etc.:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    These train movements are for short distances for clearance of damaged wagons made fit or for supply/removal of rakes to and from the sidings or important terminals served by a yard.
                  </p>
                </div>

                {/* 3. Departmental trains */}
                <div>
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">3. Departmental trains:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    These include Material Trains, Track maintenance trains, Ballast trains, Relief Trains, Wiring Special, Crane Specials etc. are known as departmental trains.
                  </p>
                </div>
              </div>
            </div>

            {/* II. Complexity of Freight operations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/60 border-2 border-white/20 shadow-lg text-purple-100 font-bold text-base mb-3">
                        II
                      </span>
                    </span>
                  Complexity of Freight operations
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  Freight operation is generally more complex than passenger train operations for the following reasons:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">1.</span> The changing pattern and fluctuations in demand for rakes/wagons due to changes in the level of production, changes in the pattern of distribution and changed consumption centres.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">2.</span> The variety of commodities to be moved, with different characteristics & type of wagons required
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">3.</span> Preferential traffic schedules, rationalisation scheme& other public policy regulations
                    </p>
                    <ul className="ml-6 mt-2 space-y-2">
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">i)</span> Seasonal variations in demand
                      </li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">ii)</span> Time taken in loading/unloading–whether manual or mechanical
                      </li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">iii)</span> Train examination Systems
                      </li>
                    </ul>
                    <ul className="ml-10 mt-2 space-y-1">
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• End to End/Intensive Examination</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Premium end to end</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• C.C. rake</li>
                    </ul>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mt-2">
                      This in turn results in -Sick Wagon detachments & attachment of fit wagons for completing the rake composition.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">4.</span> Following is the series of operations for empty rakes being offered for loading:-
                    </p>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Examination</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Supply/placement</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Loading</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Despatch</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">5.</span> For inward loaded trains which after placement and release have to be back loaded at the same terminal or at other location, withdrawal from loading points may require an outward examination unless the rake is fit for round trip or for a prescribed distance.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mt-2">
                      Once the train is fit in all respects and commercial formalities have been complete a set of activities are initiated these include –
                    </p>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Preparation of train documents</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Train ordering,</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Arranging train crew & locomotive</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Monitoring train movement</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">• Arrival at the destination</li>
                    </ul>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mt-2">
                      This cyclic operation requires constant monitoring and co-ordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* III. Ordering of Goods Train Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
               
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        III
                      </span>
                    </span>Ordering of Goods Train
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">a)</span> Each freight Train is required to be ordered to run under a unique number /name or Train ID for monitoring its movement through intermediate divisions, zones etc as also to facilitate all processes at control offices, yards, C&W depots station and Crew/Guard booking Lobby Power Controller/Traction Loco Controller.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">b)</span> The message from Divisional Control that a train is scheduled to leave from a Station or Yard at a certain time. is known as the Train Notice. The message is, in turn further conveyed to all concerned. The availability of suitable (i) Load (ii) Locomotive (iii) Crew/Guard and (iv) Path has to be kept in view for ordering of goods trains.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">c)</span> Co-ordination between the Traffic Controller/and the Power Controller (the shed, if fresh power is required) ; the Yard/Station, C&W staff and the Crew/Guard booking lobby is thus required.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">d)</span> Regular conference with yards, terminals, and the adjoining Division is held by the Control and for exchange of information regarding forecast of trains in yards; completion of loading/unloading at sidings etc. and interchange with adjoining Divisions. This monitoring should be enforced through FOIS so that time of staff spent on phone is reduced and more productive work is done by better planning.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">e)</span> Constant monitoring for expediting loading/unloading at major sidings/goods sheds is also done by Control and the Station Staff for ensuring the availability of load.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IV. Planning of Locomotives Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600/60 border-2 border-white/20 shadow-lg text-indigo-100 font-bold text-base mb-3">
                        IV
                      </span>
                    </span>Planning of Locomotives
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* a) Power Plan */}
                <div className="mb-8">
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">a) Power Plan:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    The power plan indicates the daily average number of locos required and planned for freight services section wise for each division
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    This bare requirement of Locos for Traffic use is calculated on the basis of the traffic turn round and average number of trains run on each section
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                    This represents the average number of locos needed on the Division.
                  </p>
                </div>

                {/* b) Loco Outage and Loco Utilisation */}
                <div className="mb-8">
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">b) Loco Outage and Loco Utilisation:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Loco Outage means the average number of locos available to traffic use in a day (24 hours). Since the Diesel and Electric Locos have long extended runs and may cover many divisions in a day, the position may be maintained graphically for the entire duration (0 to 24 hours) the loco is on line on the Division.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Different colour graphic representation on Bar Chart can represent the time spent by each Loco to serve as a good Management Information System e.g. (a) time taken by running train (b) time taken for Crew Changing (c) time for Fuelling (Diesel Locos) (d) time taken for Loco inspection (e) time for repairs on line (f) time for Light Engine running (g) time taken for Shunting (h) time spent at terminal/ destination (i) enroute detention.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Thus, the total hours for which the various Locos were available for Traffic use divided by 24 (number of hours in a day) would give the Loco outage.
                  </p>
                  <div className="bg-indigo-900/30 rounded-lg p-4 mb-4 border border-indigo-500/30">
                    <p className="text-indigo-100 font-mono lg:text-lg text-base text-center">
                      Loco outage = Engine Hours for traffic use / 24
                    </p>
                  </div>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    Loco outage can be prepared service-wise/shed-wise/railway-wise, traction wise etc. The actual Loco outage should generally be around the target fixed for each Division.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                    However, it should be appreciated that while the target is based on average, the actual requirement of Locos may fluctuate due to bunching of trains, increase in traffic or due to bottlenecks on account of operational reasons, equipment failure or after effect of interruption to traffic.
                  </p>
                </div>

                {/* c) Control of Operating Department on Loco running */}
                <div className="mb-8">
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">c) Control of Operating Department on Loco running:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Electric and Diesel Locos are maintained by the respective Loco Sheds and Locos once turned out of shed are available for utilisation for a number of days till prescribed maintenance/inspection schedule is due in the shed or the locos require out of course repairs. Thus, while the operating staff has the operational control over utilisation of Locos as well as flexibility of using the Locos as per operational requirement, they have to keep in view the maintenance/inspection schedules of the Locos and send the Locos to the Shed well in time. Overdue running of locos should be avoided by suitably planning the train running. Similarly, all out efforts should be made to send the dead locos or locos requiring attention in the home shed. The hauling capacity of the Locos and special restrictions as jointly agreed to by the officers of operations and loco departments should also be adhered to.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    While operating department has to optimise the work done by each Loco i.e. moving maximum traffic with the minimum number of Locos by adoption of operational strategies and improving the efficiency, the Shed and the Loco organisation should provide optimum number of Locos in good fettle, keeping in view the traffic needs as shortage of Locos can lead to transport bottlenecks and inability to move the existing and potential traffic.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Along with the availability, reliability, safety and predictability have to be aimed. Loco failures, Loco troubles en-route and ineffective locos should be kept to the bare minimum.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Balancing of Locos is also required to be done i.e. Locos without loads may be sent to other Divisions where they are required.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                    Reduction in terminal detentions and increasing average speed of goods trains would substantially improve engine utilisation.
                  </p>
                </div>

                {/* d) Availability of Engine Crew and Guard */}
                <div className="mb-8">
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">d) Availability of Engine Crew and Guard:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                    Running staff for Goods operations are generally booked on the principle of first in and first out, Balancing of Crews/Guards by sending staff spare is also required to be done in case the running of trains is not even in both directions on a section.
                  </p>
                </div>

                {/* e) Availability of Path */}
                <div className="mb-8">
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">e) Availability of Path:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Theoretically, on a double line section, a Goods Train can always be run when load, power and crew are available and the next block section is clear.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    On single line sections despatching a train out of path, will be counter productive, due to Mail/Express Blocks, Peak timings of Suburban or Commuter traffic. Readiness of the interchange point or the terminal to accept the trains are to be kept in view before pushing a goods train ahead. It is better to have directional flow if possible.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    Master Charts incorporating all Passenger carrying trains and realistic goods train paths are prepared in consultation with Operating Officers, Controllers, Yard Staff, Power Controller, Station Masters of important stations etc. in order to:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-indigo-300">i)</span> Find out line capacity of the section.
                    </li>
                    <li className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-indigo-300">ii)</span> To highlight the set of suitable paths for guidance of Control, which can be used for, goods train ordering also.
                    </li>
                    <li className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-indigo-300">iii)</span> To prepare tentative goods train time table for selected express stream of trains.
                    </li>
                  </ul>
                </div>

                {/* f) Lobby System */}
                <div>
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">f) Lobby System:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    A Lobby is like a Control Office in the field. It is established with the twin aim of reducing engine detention and crew detention in a Yard or a Crew or engine changing station by realistic ordering of trains and Crew/Guard booking.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    It is advantageous to have a combined Crew and Guard booking lobby so that both are available simultaneously. The lobby supervisors/staff can take forecast of a train running from the Deputy Controller/Section Controller along with details regarding the names of Crew, Guard and their signing in time, loco particulars, last C&W examination etc.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    They can verify the dates of Loco Schedules from the Chart available with them and keep liaison with the Power Controller/TLC. They also keep watch on &quot;expect&quot; of train formation, examination, readiness etc. and by constant chasing, planning and updating of information, trains are ordered on realistic expect, Trains may be put back or cancelled, if required and Crew booking and engine allocation changed promptly.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Some overlapping Crew/Guard may also be kept in the Lobby to take care of the last minute absenteeism. Shunters may also be kept in the Lobby of big yards/junctions to attach, detach, and run round locos or to pull the Train from Yards upto the Crew changing points, so as to avoid wastage of main line Loco pilots.
                  </p>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                    The pre-departure detention to the Crew, Crew hours balancing, rescheduling of Locos and Yard detentions to Locos can be thoroughly monitored by the Lobby and remedial measures taken.
                  </p>
                </div>
              </div>
            </div>

            {/* V. Role of Various Agencies in Freight Operation Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        V
                      </span>
                    </span>Role of Various Agencies in Freight Operation
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  Large number of agencies play important role in freight operation. Marshalling Yards, Train Examination, Locomotives and Lobbies have been discussed elsewhere in this Manual. Role of a few agencies is discussed below with special reference to freight operations.
                </p>
                
                {/* i) Control Office */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">i) Control Office:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The main function of the Control Office is planning, execution and review with all the three activities going on simultaneously.
                  </p>
                  
                  {/* ii) Planning */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">ii) Planning is aimed at forecasting and optimising the following:-</h4>
                    <ul className="ml-6 space-y-2 mb-4">
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">1. Interchange</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">2. Trains to be run section-wise</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">3. Supply of rakes/ for bulk loading,.</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">4. Release of inward loaded rakes placed for Unloading</li>
                    </ul>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Information regarding the following items is generally required for this purpose:
                    </p>
                    <ul className="ml-6 space-y-2 mb-4">
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) Analysis of divisional wagon holding</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) Power availability</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) Availability of loads</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) Disposal of empty rakes</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) Demands for loading</li>
                    </ul>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      The plan is made by Control in the early hours of morning and reviewed by Operating Officers. Changes in the plan, as deemed necessary are made at various stages on the basis of updated information received from the activity centres, adjacent divisions and instructions received from the Head Quarters.
                    </p>
                  </div>
                  
                  {/* iii) Execution */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">iii) Execution:</h4>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      The goods operation plan is executed on the basis of actual materialisation. of the forecast with suitable adjustments made for short falls /excesses. Yards, Loco Sheds, Stations, Terminals, Lobbies and TXR depots are actively involved in execution of the plan.
                    </p>
                  </div>
                  
                  {/* iv) Review */}
                  <div>
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">iv) Review:</h4>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The trend of the day&apos;s position is reviewed by the Chief Controllers and Officers in the afternoon. Detailed review of the previous day&apos;s performance is carried out early in the morning by the Operating Officers with the following objectives:
                    </p>
                    <ul className="ml-0 space-y-2 mb-4">
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">1. Analysing shortfalls of previous day to take remedial measures and pin-point weak spots.</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">2. Provide data for planning for the current day.</li>
                    </ul>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      The main features of performance, which can be reviewed, include:
                    </p>
                    <ul className="ml-0 space-y-1">
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Interchange failures</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Divisional Wagon Balance (Wagons on Division)</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Train Running</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Disposition of empties</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Loading at important terminals – and in case of shortfall, reason for the same.</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Review of unusual occurrences</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Examination of Control Charts</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Particulars of stabled loads</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Yard performance</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Unloading on Division</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Registrations and Loading</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Power position, utilisation of Locos & Terminal detention</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Sick line working</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Special type of stock</li>
                      <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">• Clearance of piecemeal wagons (sick or otherwise) from roadside stations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* VI. Head Quarter's Role in Freight Operations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        VI
                      </span>
                    </span>Head Quarter&apos;s Role in Freight Operations
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The Division&apos;s Freight Operations generally require close co-ordination and assistance from other Divisions and Railways. While direct contact is also maintained by the Control and Operating Officers of various Divisions, the Zonal Head Quarters play a pivotal role in this respect. Some of the functions performed by the Head Quarters are summarised below:
                </p>
              </div>
            </div>

            {/* VII. Management Information System Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
               
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        VII
                      </span>
                    </span>Management Information System
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="mb-8">
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    <span className="font-semibold text-blue-200">1)</span> Important information concerning the position of Freight Operations on various Divisions of Railways is obtained through line and stock report daily telephonically or through FOIS or Teleprinter or FAX to the Head Quarters (Central Control) from Divisional Control. Now more and more zones and Railway Board are shifting to FOIS generated reports.
                  </p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    This includes, loading and stock position, particulars of old outstanding and fresh registration of indents, category wise position of unloading, transhipment, Yard balances, important yards and wagons on Divisions, Train Running on each section, average speed, interchange position, Locomotive position and Locomotive utilization etc.
                  </p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The position is reviewed and analyzed by the COM/CFTM/ Dy.COM (Goods), STM (Goods) CMPE(R&L) and CELE. The important position pertaining to various Departments is conveyed to the Departments concerned as well as the General Manager. The Head Quarter Office also obtains the Statements at the end of each month or whenever required and the performance is compared with <br/> (i) The Targets <br/> (ii) The figures of the previous month <br/> (iii) The figures of the corresponding month of the previous year and <br/> (iv) the best ever record etc.
                  </p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    In addition, the Statistical Branch also provides Data to the General Manager and the Departments concerned with Operations for detailed analysis and review.
                  </p>
                </div>
                
                <div>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    <span className="font-semibold text-blue-200">2.</span> Head Quarters plays an important part in planning and co-ordinating freight operations. After detailed conference with the Operating Officers, and in terms of Railway Boards current-operating directives Head Quarters issues directions and instructions regarding the following items:
                  </p>
                  <ul className="ml-0 space-y-2">
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(a) Interchange transactions (category wise)</li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(b) Loading and Unloading</li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(c) Traffic insight from other Railways/Divisions This information is now available on FOIS terminal where a pipe line can be seen from end to end and expected arrival of train at destination is also estimated by FOIS system</li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(d) Conveying priorities for the day and setting quantified objectives to be achieved.</li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(e) Reviewing the work done at the important activity centres like Yards, Terminals etc.</li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(f) Train and Traffic regulation in case of accidents etc.</li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">(g) Certain items of Goods Operation are directly controlled by Head Quarters e.g. Coordination and directions regarding rake Loading of programmed and committed traffic, movement of special type of stock, movement of over dimensioned consignments, out of turn allotments and allotment despite restrictions etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VIII. Railway Board's Control on Freight Operations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        VIII
                      </span>
                    </span>Railway Board&apos;s Control on Freight Operations
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="list-inside space-y-4 text-indigo-50/95 lg:text-lg text-base leading-relaxed font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      The Railway Board provides <span className="font-semibold text-indigo-200">Unity of Control</span> and direction for freight operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      It plays a crucial role in <span className="font-semibold text-indigo-200">supervision and co-ordination</span>, essential for a vast and complex network like Indian Railways.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      The Control Office at Railway Board stays in touch with Zonal Head Quarters (Central Controls) and monitors <span className="font-semibold text-indigo-200">loading and movement of important streams of traffic</span> such as: coal, iron ore (raw material for steel plants), cement, food grains, fertilisers, POL, sugar, export ores, container traffic, etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      It also observes <span className="font-semibold text-indigo-200">loading, interchange, power position, and goods train running</span> on important sections to ensure that each Railway fulfills its obligation and optimizes use of assets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      While the items monitored are similar to those watched by Zonal Head Quarters for Divisions, the <span className="font-semibold text-indigo-200">Railway Board’s view is broader and more comprehensive</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      Railway Board acts as a <span className="font-semibold text-indigo-200">co-ordinator between different Railways and other Central Government Departments</span>, as well as vital sectors of the economy related to Railways.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300 mt-0.5 font-semibold">•</span>
                    <span>
                      <span className="font-semibold text-indigo-200">Policy formulation and Planning</span> with direct impact on Freight Operations is also a major function of the Railway Board.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IX. Role of Some Other Departments Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-4">
                        IX
                      </span>
                    </span>Role of Some Other Departments
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-4 pl-2">
                  <li className="flex items-start gap-3">
                    <span className="text-green-300 mt-1.5 text-lg">&#9670;</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                      <span className="font-semibold text-green-200">The Commercial Department</span> plays an important role in canvassing for traffic, improving marketing, customer relations in general, booking of traffic, expediting loading/unloading of wagons, quick disposal of unconnected wagons and transhipment of wagons detached out of course for Hot Axles etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-300 mt-1.5 text-lg">&#9670;</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                      <span className="font-semibold text-green-200">Other Departments</span> like Mechanical, Electrical, Civil Engineering, and S&T provide and maintain various assets and infrastructure (track, wagons, engines, S&T Network etc.).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-300 mt-1.5 text-lg">&#9670;</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                      These departments ensure sufficient availability, reliability, predictability, safety, and reduction in equipment failures; promptness in restoration in case of breakdowns and accidents should also be ensured.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-300 mt-1.5 text-lg">&#9670;</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                      They also endeavour for achievements in technology upgradation along with operating strategies and determine the level of excellence in Railway Operations to a great extent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-300 mt-1.5 text-lg">&#9670;</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                      <span className="italic">In nutshell, all the functionaries have to work as a dedicated team.</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* X. Some Indices of Freight Operation and Efficiency Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        X
                      </span>
                    </span>Some Indices of Freight Operation and Efficiency
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The important Operating Statistics, most of which are indices of Operating efficiency, have been discussed in detail later in this Manual (Operating Statistics). Some Indices of Freight Operations and efficiency are highlighted below:
                </p>
              </div>
            </div>

            {/* XI. Wagon Holding Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        XI
                      </span>
                    </span>Wagon Holding
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-6">
                  For a given amount of originating loading and receipts of loaded wagons from other Railways and making an allowance for percentage of stock out of commission for repairs, etc., there is an optimum number of wagons that a Railway, and separately its constituent divisions, should hold to maintain the fluidity of transport system. More wagons than the optimum number might lead to increase in the repairs and maintenance percentage, heavier detentions to wagons and trains and transport bottlenecks, i.e. more congestion in sidings, yards and sections without a proportionate increase in the tonnes lifted, or in the efficiency of operations. Similarly, excessive shortage of Wagons may lead to loss of traffic. Proper estimation and projection of requirement, proper planning and working at various stages of freight operations is necessary for keeping wagon holding low. &quot;Ineffective Stock&quot; percentage should also be kept minimum.
                </p>
                
                {/* i) Interchange Balance */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">i) Interchange Balance:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    Maintenance of the interchange target is an indication of a Railway&apos;s overall operating performance and its efforts to meet inter railway obligations, hence interchange balance should not be very high, even when maximum trains are interchanged. However, attempts should be made to see that on busy sections, interchange is not only confined to few hours of the day but uniformly distributed.
                  </p>
                </div>

                {/* ii) Load of trains */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">ii) Load of trains:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    A train is a unit of transport. Depending upon the load, suitable loco is provided for its haulage. In order to get the optimum use of motive power and to increase the capacity utilisation and throughput, each Locomotive is given a load approximately to the maximum hauling capacity, unless operating necessity requires utilisation of a loco for lesser load. The stations should also ensure that wagons are loaded to the carrying capacity or the minimum weight prescribed for some commodities.
                  </p>
                </div>

                {/* iii) Loading and Unloading */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">iii) Loading and Unloading:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    To optimise the loading is one of the most important items in freight operations because it is through loading that Railway earns the maximum revenue. Similarly, unloading is necessary so that wagon becomes available for next loading. Reducing the time taken for loading/unloading by technology upgradation and other strategies in co-ordination with the customers has to be endeavored.
                  </p>
                </div>

                {/* Iv) Empty Running */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">Iv) Empty Running:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    Ideally it is waste of transport capacity to run a wagon empty or with light load, but much of empty running is inescapable on account of the unbalanced nature and quantity of outward and inward traffic at terminals and necessity of supplying empty wagons. Certain special type of wagons for POL, Steel, Coal, Natural Gas, Ammonia, LPG etc. have to be generally run empty to the loading points. Operating skill lies in avoiding or reducing the extent of empty haulage and cross movements of similar type of empty stock.
                  </p>
                </div>

                {/* v) Despatch in Block Rakes */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">v) Despatch in Block Rakes:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    Despatching of wagons in small numbers always means transit delay while a block load can go direct to the farthest destination skipping many yards, thereby eliminating detention that the wagons might have suffered in the intermediate yards. Piecemeal wagons passing through a number of marshalling yards, where they have to be combined with other wagons to form train loads, cause huge amount of work for the staff and result in loss of efficiency, avoidable delay, anxiety and uncertainty regarding their arrival at destination. Unit train movement, i.e. a train load consigned by single consignee to single consignor, is ideal. Consignees can also be motivated to club their Indents to get trainload and block rakes. Also two points loading on same engine run can improve wagon usage. Close circuit rake movement can also be resorted to between selected pair of stations or rakes. Maintaining the purity of freight rakes has also to be ensured.
                  </p>
                </div>

                {/* vi) Long Distance Trains */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">vi) Long Distance Trains:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    It is an age-old principle of operations that full train loads should be formed at the earliest point for the longest possible distance. Long distance trains should have least stoppages like long distance passenger trains. Trains can also be run as &quot;crack trains&quot; or Link Train. A crack train/Link Train is a train when the same crew (and engine if possible) instead of &quot;Signing off&quot; at the intermediate crew changing point works a train to farther junction. Thus, a train running from Ujjain to Godhra or vice versa without Crew/Guard change at Ratlam can be run as X &apos;Crack&apos;. The Crew can also be utilised on &apos;Crack&apos; basis when the same Crew perform a round trip without &quot;Signing off&quot; at the outstation and is promptly provided a load so that Crew returns to its Head Quarters within normal duty hours.
                  </p>
                </div>

                {/* vii) Wagon Turn Round */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">vii) Wagon Turn Round:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The interval between two successive loadings calculated from the time a wagon is placed for loading till the time it again becomes available for reloading is the actual turn round. As the calculations for individual wagons in the manner stated above are not practicable, the following statistical formula is generally used:
                  </p>
                  <div className="bg-blue-900/30 rounded-lg p-4 mb-4 border border-blue-500/30">
                    <p className="text-blue-100 font-mono lg:text-lg text-base text-center mb-2">
                      Wagon Turn Round (T) = S / (L+R)
                    </p>
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                      Where &apos;S&apos; stand for the effective daily wagon holding or midnight wagon balance of a day (excluding sick, POH wagons in or waiting for shops, like departmental wagons, wagons lent for departmental use, and the wagons used for coaching traffic). &apos;L&apos; stands for the total number of wagons loaded on the Division/Railways plus the wagons loaded at Transhipment Point, &apos;R&apos; stands for the total number of loaded wagons received from other Railway/Divisions.
                    </p>
                  </div>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    Thus, for example, if a Division loads 350 Wagons on BG (including 50 BG Wagons loaded through transhipment of MG Wagons), 150 inward loaded wagons are received from other Divisions and its effective wagon holding at the end of the day (midnight) is 2250 wagons, the Divisional Wagon turn round will be 4.5 days.
                  </p>
                  <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                    <p className="text-blue-100 font-mono lg:text-base text-sm text-center">
                      i.e. 2250 / (350+150) = 2250 / 500 = 4.5 days WTR (Wagon Turn Round)
                    </p>
                  </div>
                </div>

                {/* viii) Detention to Trains and Wagons */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">viii) Detention to Trains and Wagons:</h3>
                  <div className="mb-4">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">(a) Detention to Trains:</span>
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed ml-4">
                      A check on the detention to trains (1) outside signals or at stations adjacent to Goods Terminals, (2) in shunting operations at road side stations and (3) enroute detentions for various reasons should be exercised regularly.
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">(b) Detention to Wagons:</span>
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed ml-4">
                      Close watch should be kept on the areas, e.g. Marshalling Yards, Goods Terminals, Stabling Points etc., where wagons are likely to suffer avoidable detention during various phases. Although this is watched through periodical data, special attention should be paid to pockets, where piecemeal Wagons suffer prolonged detention and often remain out of sight.
                    </p>
                  </div>
                </div>

                {/* Ix) Engine Utilisation */}
                <div className="mb-8">
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">Ix) Engine Utilisation:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Engines being costly resources their utilization have to be carefully monitored. Some of the measures for improving Engine Utilizations are as under:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(a)</span> Running of the Goods Trains on proper path: For this, the Master Charts have to be properly framed and consolidated.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(b)</span> Proper co-ordination between Control and Line Staff.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(c)</span> Reduction in Terminal detention of Locos by proper monitoring co-ordination and working of Yard Staff, C&W Staff etc.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(d)</span> Judicious ordering of Trains and Right time starts of Goods Trains.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(e)</span> Proper controlling, judicious crossings and preferences.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(f)</span> Loop Lines on critical block sections should not be generally blocked.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(g)</span> Stabling and picking up of load should be judicious and properly planned.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(h)</span> Loco pilot should run at maximum permissible speed subject to restrictions.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(i)</span> Light Engines can be coupled or attached to trains in order to save path and energy.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(j)</span> Light Engines (Single or Couple) should run at maximum permissible speed, for which they are fit, subject to speed restrictions
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(k)</span> Signals must be taken off promptly at Stations. Distant/Warner Signals must always be taken off promptly.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(l)</span> Tangible authority to proceed should be handed over at the appointed place instead of getting the train slowed down in front of the Station for handing over the Authority from the Platform.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(m)</span> Trains should be run through Main Line (as far as possible) since looping results in extra time on run.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(n)</span> Locomotives should be in good working order and staff should be well versed in Loco operations and trouble shooting.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(o)</span> Hauling capacity of the Locomotives should be properly utilised.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(p)</span> Engineering speed restrictions should be regularly reviewed and reduced by maximising the output of the Engineering staff and machines. Due care and foresight in offering blocks for track maintenance should be exercised.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(q)</span> Regular foot plating by officers and staff involved in operations, motivates train crew and alerts the line staff.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(r)</span> Effective control over traffic yards to reduce other engine hours, detention to locos at important loading/unloading points and industrial sidings.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(s)</span> The factors adversely affecting the Locomotive utilisation, speed of goods train, terminal detention etc. should be got analysed by suitable multi departmental teams and remedial measures taken.
                    </li>
                    <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-blue-300">(t)</span> Incentive schemes for motivation of staff connected with Goods Operation, so as to improve Engine utilisation Special watch on Loco pilots loosing time on run and not running on maximum permissible speed.
                    </li>
                  </ul>
                </div>

                {/* x) Average Speed of Goods Trains */}
                <div>
                  <h3 className="text-blue-200 font-bold lg:text-2xl text-xl mb-4">x) Average Speed of Goods Trains:</h3>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The average speed of goods trains is calculated by the following formula:-
                  </p>
                  <div className="bg-blue-900/30 rounded-lg p-4 mb-4 border border-blue-500/30">
                    <p className="text-blue-100 font-mono lg:text-base text-sm text-center">
                      Speed = (Average No. of Goods Trains X Distance travelled by each train in 24 hrs.) / Total time taken by all the Goods Trains run.
                    </p>
                  </div>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    The distance and the time taken are calculated from the Control Charts. Thus all detention to Goods Trains enroute enters into calculation and has the effect of bringing down the average speed. Almost all the factors affecting engine utilisation play part in the average speed of goods trains, the difference being that in the calculation of average speed of goods trains, the detention at originating point and terminating point as well as the Light Engine Running are not taken into consideration. While computing average speed of freight trains
                  </p>
                </div>
              </div>
            </div>

            {/* XII. Staff Supervisions Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
              <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        XII
                      </span>
                    </span>Staff Supervisions
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Excellence in freight operations requires that the staff offer their willing co-operation. To achieve this proper training for constantly developing the knowledge, skills and commitment is essential.
                </p>
              </div>
            </div>

            {/* XIII. Targets and Statistics Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        XIII
                      </span>
                    </span>Targets and Statistics
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="list-none space-y-4 text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pl-2">
                  <li className="flex items-start gap-3"><span className="mt-1 shrink-0"><span className="w-3 h-3 inline-block align-middle rotate-45 bg-purple-400/80 rounded-sm shadow-sm mr-2"></span></span>
                    One of the important means to utilise fully and efficiently the existing carrying capacity of a railway is to set measurable and specific targets for the various performances after taking into consideration all the local conditions.
                  </li>
                  <li className="flex items-start gap-3"><span className="mt-1 shrink-0"><span className="w-3 h-3 inline-block align-middle rotate-45 bg-purple-400/80 rounded-sm shadow-sm mr-2"></span></span>
                    Once the targets are laid down, all possible efforts must be made to attain them.
                  </li>
                  <li className="flex items-start gap-3"><span className="mt-1 shrink-0"><span className="w-3 h-3 inline-block align-middle rotate-45 bg-purple-400/80 rounded-sm shadow-sm mr-2"></span></span>
                    The targets should be set sufficiently high and reviewed constantly with a view to improving the performance further.
                  </li>
                  <li className="flex items-start gap-3"><span className="mt-1 shrink-0"><span className="w-3 h-3 inline-block align-middle rotate-45 bg-purple-400/80 rounded-sm shadow-sm mr-2"></span></span>
                    Details regarding Statistics pertaining to Railway Operations are given in chapter on Operating Statistics.
                  </li>
                  <li className="flex items-start gap-3"><span className="mt-1 shrink-0"><span className="w-3 h-3 inline-block align-middle rotate-45 bg-purple-400/80 rounded-sm shadow-sm mr-2"></span></span>
                    Where targets are not attained within a reasonable period, the causes must be traced and effective remedial action taken; if necessary, revised targets should be laid down.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default FreightOperation
