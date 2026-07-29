'use client'
import React from 'react'
import { 
  BarChart3,
  FileText,
  PieChart,
  Activity,
  Train,
  Package,
  Zap
} from 'lucide-react'

const OperatingStatistics = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-rose-500/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-purple-500/70 via-pink-500/70 to-rose-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-purple-700/60 to-pink-800/60 backdrop-blur-md shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <BarChart3 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              OPERATING STATISTICS
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Railway Statistics Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <BarChart3 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Railway Statistics
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Essential for planning prioritizing and exceeding activities connected with operation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The railway statistics are based on four factors -
                    </p>
                    <div className="space-y-2">
                      {['Quantity', 'Distance', 'Duration and', 'service.'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-400/20 hover:bg-blue-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br from-blue-500/50 to-cyan-500/50 border border-blue-300/30 text-blue-100 font-bold text-xs shadow group-hover:scale-110 transition-all duration-300">
                            {idx + 1}
                          </span>
                          <span className="text-blue-50/95 lg:text-sm text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      In Railway environment these relate to –
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-indigo-400 border-2 border-blue-300/30 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300">
                            1
                          </span>
                          <h3 className="text-blue-200 font-semibold pt-2">Primary Units:</h3>
                        </div>
                        <div className="ml-14 space-y-2">
                          {[
                            { letter: 'a', text: 'Quantity - Expressed as tonnes and number of passenger carried and earnings derived.' },
                            { letter: 'b', text: 'Distance - Expressed in kilometres.' },
                            { letter: 'c', text: 'Duration- Expressed in minutes, hours & days' },
                            { letter: 'd', text: 'Service performed - Expressed in terms of trains, vehicles, wagons Engines.' }
                          ].map((item) => (
                            <div key={item.letter} className="flex items-start gap-3 bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-400/20 hover:bg-blue-800/40 transition-all duration-300 group">
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-blue-500/60 to-cyan-500/60 border border-blue-300/30 text-blue-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                                {item.letter}
                              </span>
                              <span className="text-blue-50/95 text-xs flex-1 leading-relaxed">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-indigo-400 border-2 border-blue-300/30 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300">
                            2
                          </span>
                          <h3 className="text-blue-200 font-semibold pt-2">Fundamental Units:</h3>
                        </div>
                        <p className="text-blue-50/95 lg:text-sm text-xs mb-3 ml-14">
                          Relationship between primary units, expressed in composite terms is called &apos;Fundamental units&apos;. The fundamental units express two primary ideas in their relationship to one another viz.
                        </p>
                        <div className="ml-14 space-y-1.5">
                          {['Tonne-kms,', 'Passenger kilometres,', 'Train-kilometres,', 'Wagon-kilometres,', 'Engine hours,', 'Wagon days etc.'].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-blue-900/20 rounded-lg px-2 py-1 border border-blue-400/10 hover:bg-blue-800/30 transition-all duration-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                              <span className="text-blue-50/95 text-xs">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-indigo-400 border-2 border-blue-300/30 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300">
                            3
                          </span>
                          <h3 className="text-blue-200 font-semibold pt-2">Derived Units:</h3>
                        </div>
                        <p className="text-blue-50/95 lg:text-sm text-xs mb-3 ml-14">
                          Expresses the relationship that exists between two sets of primary or fundamental units and the results thus arrived is termed &apos;Derived Units&apos;. The process by which this relationship is ascertained is as illustrated in the following examples.
                        </p>
                        <div className="ml-14 space-y-2 mb-3">
                          {[
                            { letter: 'a', text: 'Passenger earning (Primary): Passenger carried (Primary = Earning per passenger' },
                            { letter: 'b', text: 'Passenger earning (Primary): Passenger kilometres (fundamental) = Earning per passenger kilometre.' },
                            { letter: 'c', text: 'Passenger kilometer (fundamental): Number of passenger (Primary) = Average distance travelled by a passenger also called lead of passenger traffic.' },
                            { letter: 'd', text: 'Wagon kilometres (fundamental): Wagon days (fundamental) = Wagon kilometres per wagon day.' }
                          ].map((item) => (
                            <div key={item.letter} className="flex items-start gap-3 bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-400/20 hover:bg-blue-800/40 transition-all duration-300 group">
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-blue-500/60 to-cyan-500/60 border border-blue-300/30 text-blue-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                                {item.letter}
                              </span>
                              <span className="text-blue-50/95 text-xs flex-1 leading-relaxed">{item.text}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-blue-50/95 lg:text-sm text-xs mt-2 ml-14">
                          These &apos;Derived Units&apos; highlight special features of transportation output and are useful in evolving suitable management strategies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Classification of Railway Statistics Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <PieChart className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Classification of Railway Statistics
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                  The principal heads under which the railway statistics are generally grouped are indicated below:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-green-200 font-semibold lg:text-lg text-base mb-2">Economic and financial statistics:</h3>
                    <p className="text-green-50/95 lg:text-sm text-xs leading-relaxed">
                      Under this head are to be included detailed statistics relating to the advance statement of gross earning and traffic handled i.e.the number of passenger booked and tonnage lifted and wagons loaded for current information and the statistics of revenue and expenditure as booked in monthly and yearly accounts.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-green-200 font-semibold lg:text-lg text-base mb-2">Operating statistics:</h3>
                    <p className="text-green-50/95 lg:text-sm text-xs leading-relaxed mb-3">
                      Operating statistics are broadly be divided into (i) Traffic (ii) Power.(iii) Rolling Stock
                    </p>
                    <div className="space-y-2">
                      {[
                        { num: 'ii', text: 'The traffic statistics include statistics of wagons loaded, wagon mobility, wagon usage, train loads, train mobility, productive and unproductive services, wagon detention, marshalling yard, terminal goods station and punctuality' },
                        { num: 'iii', text: 'The power statistics include engine usage, fuel and energy consumption, and engine failure statistics etc.' },
                        { num: 'iv', text: 'Rolling stock holding & availability, repairs& maintenance % age' }
                      ].map((item) => (
                        <div key={item.num} className="flex items-start gap-3 bg-green-900/30 rounded-lg px-3 py-2 border border-green-400/20 hover:bg-green-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500/60 to-emerald-500/60 border border-green-300/30 text-green-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                            {item.num}
                          </span>
                          <span className="text-green-50/95 text-xs flex-1 leading-relaxed">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-green-200 font-semibold lg:text-lg text-base mb-2">Commercial Statistics:</h3>
                    <p className="text-green-50/95 lg:text-sm text-xs leading-relaxed">
                      Coaching and freight revenue and volumes and earnings by class of passengers, for different commodities, claims paid for compensation of goods and parcels lost or damaged Rolling stock and workshop repair statistics:
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-green-200 font-semibold lg:text-lg text-base mb-2">Rolling stock and workshop repair statistics:</h3>
                    <p className="text-green-50/95 lg:text-sm text-xs leading-relaxed">
                      Under this head are grouped statistics dealing with POH of coaches, wagons, locomotives and other information relating to workshop activity.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-green-200 font-semibold lg:text-lg text-base mb-2">Administrative statistics:</h3>
                    <p className="text-green-50/95 lg:text-sm text-xs leading-relaxed">
                      These statistics relating the staff matters, numbers, by categories and classes of staff.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-green-200 font-semibold lg:text-lg text-base mb-2">Other statistics</h3>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-green-50/95">Number of stations by Class, halt stations</li>
                      <li className="text-green-50/95">Standard of interlocking,</li>
                      <li className="text-green-50/95">Medical statistics relate to sickness of staff etc</li>
                      <li className="text-green-50/95">Engineering statistics give details of track and bridges requiring attention – ultra sonic tests done or overdue, track renewals, distress bridges etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Compilation of Railway Statistics Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Compilation of Railway Statistics
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  {[
                    { num: '1', text: 'Compilation of statistics of Indian Railways falls broadly under two categories, namely (i) the statistics required to be compiled by the railways for submission to the Railway Board in order to keep the Board generally informed about the different activities of the Indian Railways and (ii) further detailed Railway statistics which individual railway may undertake for their own respective domestic requirements.' },
                    { num: '2', text: 'The statistical compilation work on the zonal Railways is in the charge of a Statistical Officer working under Finance deptt. The format and the methods of compilation of the monthly Statistical statements and the Annual Statistics required to be submitted to the Board are detailed in the Manual Statistical Instructions, Volumes I and II respectively.' }
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-purple-400/20 hover:bg-white/10 transition-all duration-300 group">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-purple-500 via-pink-400 to-rose-400 border-2 border-purple-300/30 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300 shrink-0">
                        {item.num}
                      </span>
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Operating Statistics Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Activity className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  Operating Statistics
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-orange-400/20 hover:bg-white/10 transition-all duration-300 group">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-orange-500 via-amber-400 to-yellow-400 border-2 border-orange-300/30 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300 shrink-0">
                      1
                    </span>
                    <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed flex-1">Operating Statistics for the various Indian Railways are issued in the form of various pamphlets published periodically by the Railway Board. Detailed Statistics relating to each division and gauge are contained in various parts of the &apos;Domestic&apos; statistics issued quarterly (Parts, I, II and IIB &amp; C).</p>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-orange-400/20 hover:bg-white/10 transition-all duration-300 group">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-orange-500 via-amber-400 to-yellow-400 border-2 border-orange-300/30 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300 shrink-0">
                      2
                    </span>
                    <div className="flex-1">
                      <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed mb-3">
                        Some of the important statistics include.
                      </p>
                      <div className="bg-white/5 rounded-lg p-3 border border-orange-400/10">
                        <h3 className="text-orange-200 font-semibold mb-2">Operating ratio:</h3>
                        <p className="text-orange-50/95 lg:text-sm text-xs leading-relaxed">
                          The ratio of workings expense (excluding suspense but including appropriation to Depreciation Reserve Fund and Pension Fund) to Gross Earnings.
                        </p>
                        <p className="text-orange-50/95 lg:text-xs text-xs mt-2 italic">
                          (Expenditure incurred in connection with Administration, Operation, Maintenance and repairs of line open for traffic)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A - Passenger Train Performance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-cyan-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  A – Passenger Train Performance
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Punctuality */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-lg text-base mb-3">Punctuality:</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Punctuality is the main criterion for judging passenger train performance, some of the statistics compiled separately for &apos;Mail and Express trains&apos;, &apos;Other Passenger Trains&apos;, and &apos;Mixed&apos; trains are:
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 border border-cyan-400/10">
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        RT + NLT
                      </p>
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Punctuality = -------------------------------------- x 100
                      </p>
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center">
                        Total no. of Mail/Express trains
                      </p>
                      <div className="mt-3 space-y-1 text-xs">
                        <p className="text-cyan-50/95">RT = Trains arriving Right Time</p>
                        <p className="text-cyan-50/95">NLT = Trains not loosing time</p>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Kilometres per Vehicles Day */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-lg text-base mb-3">Vehicle Kilometres per Vehicles Day:</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure indicates by the vehicle days which are the product of average number of coaching vehicles on line /in use and the number of days in the period under reference.
                    </p>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure indicates the extent to which coaching vehicles are kept &apos;on the move&apos;. The main factors affecting its value are:
                    </p>
                    <div className="space-y-2">
                      {[
                        { letter: 'a', text: 'The average speed of trains' },
                        { letter: 'b', text: 'The average length of train run (average load)' },
                        { letter: 'c', text: 'The idle periods provided for in rake links.' }
                      ].map((item) => (
                        <div key={item.letter} className="flex items-start gap-3 bg-cyan-900/30 rounded-lg px-3 py-2 border border-cyan-400/20 hover:bg-cyan-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-cyan-500/60 to-blue-500/60 border border-cyan-300/30 text-cyan-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                            {item.letter}
                          </span>
                          <span className="text-cyan-50/95 text-xs flex-1 leading-relaxed">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-cyan-50/95 lg:text-sm text-xs mt-3">
                      Since in the short run, train composition is not susceptible to change, it is only by increasing the speeds of trains and tightening up rake links that an improved performance can be achieved.
                    </p>
                    <p className="text-cyan-50/95 lg:text-sm text-xs mt-3">
                      This result is calculated by dividing the coaching vehicles kilometres by the vehicles days which is the product of average number of coaching vehicles on line and the number of days in the period under reference.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-cyan-400/10 mt-3">
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Coaching Vehicle Km
                      </p>
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center">
                        Vehicle km. Per Vehicle day = ----------------------------
                      </p>
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center">
                        Vehicle day
                      </p>
                    </div>
                  </div>

                  {/* Average Speeds */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-lg text-base mb-3">Average Speeds:</h3>
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      This figure represents the average time tabled speeds of passenger trains. The higher this figure, the better the service to the passengers
                    </p>
                  </div>

                  {/* Shunting Kilometres per 100 Train Kilometres */}
                  <div className="bg-white/5 rounded-xl p-5 border border-cyan-400/20">
                    <h3 className="text-cyan-200 font-bold lg:text-lg text-base mb-3">Shunting Kilometres per 100 Train Kilometres (Passenger including proportion of Mixed):</h3>
                    <div className="space-y-3 mb-3">
                      <div className="flex items-start gap-3 bg-cyan-900/20 rounded-lg px-3 py-2 border border-cyan-400/20 hover:bg-cyan-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-cyan-500/60 to-blue-500/60 border border-cyan-300/30 text-cyan-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          1
                        </span>
                        <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed flex-1">This figure indicates the amount of unproductive service that has to be performed per 100 train kilometres (Passenger including proportion of mixed). Since the amount of shunting to be done on a passenger train depends upon various local factors, the figure will vary from Division to Division and from Railway to Railway, traffic conditions remaining constant, is indicative of wasteful shunting.</p>
                      </div>
                      <div className="flex items-start gap-3 bg-cyan-900/20 rounded-lg px-3 py-2 border border-cyan-400/20 hover:bg-cyan-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-cyan-500/60 to-blue-500/60 border border-cyan-300/30 text-cyan-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          2
                        </span>
                        <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed flex-1">The figure is arrived at by multiplying by 100 the quotient of shunting kilometres divided by train kilometres (passenger including proportion of mixed). It can be depicted by formula given below:-</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-cyan-400/10">
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Shunting Kms x 100
                      </p>
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center">
                        -----------------------------
                      </p>
                      <p className="text-cyan-50/95 lg:text-sm text-xs font-mono text-center">
                        Train kms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B – Wagon Usage Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-emerald-500/30 to-teal-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-teal-500/30 transition-all duration-500">
                  <Package className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  B – Wagon Usage
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Average Starting Wagon Load */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">Average Starting Wagon Load:</h3>
                    <div className="space-y-3 mb-3">
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          1
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">This figure is compiled separately for coal and coke, heavy merchandise and lightmerchandise, thus affording an indication of the extent to which wagon space is utilised by stations from which traffic originates. It is extremely important that wagons be given as full a load as possible because this means economy, in wagon usage and hence engine power and less strain on line and yard capacity. Even a slight improvement in the starting wagon load can mean a tremendous saving to the Railway.</p>
                      </div>
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          2
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">The result is calculated by dividing the number of tonnes loaded by the number of wagons loaded (in terms of four wheelers), CR and TR vans as also wagons used for live stock and departmental purposes, however, are excluded.</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Tonnes Loaded
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Average Starting Wagon Load = -----------------------------
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        No. of Wagons Loaded
                      </p>
                    </div>
                  </div>

                  {/* Wagon Kilometres per Wagon Day */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">Wagon Kilometres per Wagon Day:</h3>
                    <div className="space-y-3 mb-3">
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          1
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">This figure is a measure of wagon mobility and indicates the average number of kilometres moved by a wagon, on the average, per day, both loaded and empty journeys being included. Delays in marshalling yards, delays at stations when loading or unloading, delays in clearance from roadside stations, decrease in average speed of goods trains, increase in the number of wagons awaiting repairs, and shorter loads of trains are some of the factors normally responsible for poor mobility.</p>
                      </div>
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          2
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">This result is obtained by dividing wagon kilometres by wagon days which is the product of daily average number of wagons on line and number of days in period.</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Wagon Kms.
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Wagon Km. Per Wagon day = ---------------
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Wagon Days
                      </p>
                    </div>
                  </div>

                  {/* Net Tonne Kilometres per Wagon Day */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">Net Tonne Kilometres per Wagon Day:</h3>
                    <div className="space-y-3 mb-3">
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          1
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">This unit is a measure of the revenue earning work done by the wagons and reflects both mobility and loading. A decrease in this figure may be due interalia to any of the causes which effect the figure of wagon kilometres per wagon day. The proportion of loaded to total wagon kilometer age, the average loaded wagon and the relative amount of heavy and light merchandise carried, are some of the other factors which may effect this figure.</p>
                      </div>
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          2
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">The numerator in this case is the net tonne kilometres (excluding departmental) and the denominator wagon days.</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Net Tonne kms.
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Net Tonne km. Per wagon day = --------------------
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Wagon days
                      </p>
                    </div>
                  </div>

                  {/* Wagon Turn Round */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">Wagon Turn Round:</h3>
                    <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This future expresses the ratio between the total number of serviceable wagons on a Railway and the number of wagons required daily for effective use on the railway for its outward, inward and transhipment traffic. Stated in a different way, wagon turn round represents the average period of time in which a particular wagon completes its average loaded trip and after which it again becomes available for loading.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        No. of effective wagon holding
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Wagon Turn Round = -----------------------------------------------------
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Loaded Wagons + Loaded received wagons
                      </p>
                    </div>
                  </div>

                  {/* Average Wagon Load during the Run */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">Average Wagon Load during the Run:</h3>
                    <div className="space-y-3 mb-3">
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          1
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">This unit is a good index of wagon utilisation as it refers to the average load of all loaded wagons carried. It suffers from the draw back that it does not directly reflect the performance of the division, gauge or railway to which it applies, as only a proportion of the loaded wagons carried is loaded locally and the balance consists of both received traffic and cross traffic.</p>
                      </div>
                      <div className="flex items-start gap-3 bg-emerald-900/20 rounded-lg px-3 py-2 border border-emerald-400/20 hover:bg-emerald-800/30 transition-all duration-300 group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500/60 to-teal-500/60 border border-emerald-300/30 text-emerald-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          2
                        </span>
                        <p className="text-emerald-50/95 lg:text-base text-sm leading-relaxed flex-1">For obtaining this figure net tonne kilometres are divided by loaded wagon kilometres, (the figure relating to departmental trains are excluded).</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10">
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Net Tonnes Kms.
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Average Wagon Load during the run = --------------------------
                      </p>
                      <p className="text-emerald-50/95 lg:text-sm text-xs font-mono text-center">
                        Loaded Wagon kms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goods Trains Performance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  Goods Trains Performance
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-amber-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Average Speed of Goods Trains */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Average Speed of Goods Trains:</h3>
                    <div className="flex items-start gap-3 bg-yellow-900/20 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/30 transition-all duration-300 group mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                        1
                      </span>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex-1">This result is calculated separately for &apos;through goods trains&apos; and all goods trains and is arrived at by dividing the total train kilometres by total train engine hours of the concerned service. Detentions to goods trains at roadside stations enter into the calculations and have therefore the effect of bringing down average speeds.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10 mb-3">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Train kms.
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Average Speed of Goods Trains = ------------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Train Engine hours.
                      </p>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-start gap-3 bg-yellow-900/20 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/30 transition-all duration-300 group mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                          2
                        </span>
                        <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex-1">Some of the factors on which the average speed of goods trains depends are:</p>
                      </div>
                      <div className="ml-11 space-y-2">
                        {[
                          { letter: 'a', text: 'The proportion of the density of trains to the sectional capacity. The nearer a section is worked to its sectional capacity, the proper the speeds obtained.' },
                          { letter: 'b', text: 'Hauling power of the engines used, quality of coal and quality and adequacy of water supply, standard of maintenance of engines and time taken by loco pilots for loco requirements.' },
                          { letter: 'c', text: 'Loads of trains.' },
                          { letter: 'd', text: 'Condition of rolling stock, particularly the brake power available.' },
                          { letter: 'e', text: 'Standards and maintenance of signalling and interlocking.' },
                          { letter: 'f', text: 'Facilities at watering stations, facilities at roadside stations to complete shunting in the minimum time and shorter block sections which will increase the sectional capacity.' },
                          { letter: 'g', text: 'Engineering restrictions – permanent and temporary gradients and curves.' }
                        ].map((item) => (
                          <div key={item.letter} className="flex items-start gap-3 bg-yellow-900/30 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/40 transition-all duration-300 group">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                              {item.letter}
                            </span>
                            <span className="text-yellow-50/95 text-xs flex-1 leading-relaxed">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Average Net Train Loads */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Average Net Train Loads (in tonnes):</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure refers to the average freight load carried in tonnes, i.e., to that portion of load which earns revenue for the railway.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Net Tonne kms.
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Average Net Train Loads = ---------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Train kms.
                      </p>
                    </div>
                  </div>

                  {/* Average Gross Train Loads */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Average Gross Train Loads (in tonnes):</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure represents the average overall load of goods trains i.e. the freight load plus the weight of the rolling stock.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10 mb-3">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Gross Tonne kms.
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Average Gross Train Loads = ----------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Train kms.
                      </p>
                    </div>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      The principal factors affecting this figure are:
                    </p>
                    <div className="space-y-2">
                      {[
                        'The tractive capacity of engines on goods train services.',
                        'The gradients on various sections of the line.',
                        'The nature of goods carried.'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-yellow-900/30 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-yellow-50/95 text-xs flex-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shunting Engine Kilometres per 100 Train Kilometres */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Shunting Engine Kilometres per 100 Train Kilometres:</h3>
                    <div className="flex items-start gap-3 bg-yellow-900/20 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/30 transition-all duration-300 group mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                        1
                      </span>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex-1">This figure indicates the amount of non-revenue earning work done per 100 train kilometres (Goods and proportion of mixed). Its value is affected mainly by the load of goods trains, and the amount of terminal work involved.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10 mb-3">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Shunting kms. x 100
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Shunting Engine kms. per 100 Train kms. = --------------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Train kms.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 bg-yellow-900/20 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/30 transition-all duration-300 group">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 shrink-0">
                        2
                      </span>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex-1">However, for the same division or/railway, the pattern of traffic remaining the same, rise in this figure is indicative of wasteful shunting.</p>
                    </div>
                  </div>

                  {/* Net Tonne Kilometres per Engine Hour */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Net Tonne Kilometres per Engine Hour:</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The figure of net tonne kilometres per Engine hour is a very useful index of the efficiency of freight working on a division. Net tonne kilometres indicate the amount of revenue earning work done while engine hour measure the cost of if doing it.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10 mb-3">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Net Tonne kms.
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Net Tonne Kilometers per Engine Hours = --------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Engine hours
                      </p>
                    </div>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      A decrease in net tonne Kilometres per engine hour may be due to factors such as:
                    </p>
                    <div className="space-y-2">
                      {[
                        'Shunting engine hours not using cut down in proportion to the decrease in traffic offering.',
                        'Increase in departmental, assistance required, assisting hot required and light engine running.',
                        'Decreasing in the average train and or the average speed of goods train.',
                        'Decrease in the average starting wagon load or in the wagon loads of wagons received from other divisions.',
                        'Increase in the proportion of unbalanced traffic.',
                        'The type of traffic carried heavy or light.'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-yellow-900/30 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-yellow-50/95 text-xs flex-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Average Detention per Wagon */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Average Detention per Wagon:</h3>
                    <div className="space-y-2 mb-3">
                      {['All wagons', 'Through loaded wagons:'].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-yellow-900/30 rounded-lg px-3 py-2 border border-yellow-400/20 hover:bg-yellow-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-yellow-500/60 to-orange-500/60 border border-yellow-300/30 text-yellow-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-yellow-50/95 lg:text-sm text-xs flex-1">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Detention suffered by stock in a yard depends, interalia, on the layout of the yard and on the number of trains per day that can be despatched in various directions. Target figures have been laid down for each yard for detentions to all wagons and through loaded wagons. Such targets take into consideration the condition of work and facilities available in the yard concerned. Detentions in excess of this figure indicate inefficient yard work. Lesser detentions mean lesser cost of handling wagons in yards.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Total Detention Hours
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Average Detention per Wagon = ----------------------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        No. of Wagons despatched
                      </p>
                    </div>
                  </div>

                  {/* Number of Wagons Dealt with per Shunting Engine Hour */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">Number of Wagons Dealt with per Shunting Engine Hour:</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The number of wagons that a given yard can deal with per shunting hour depends, interalia, on its layout. Accordingly a target figure has been prescribed for each yard to enable the efficiency of yard work to be gauged. As shunting involves cost, the higher this result, greater the efficiency of the yard.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-400/10">
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        No. of Wagons dealt with
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        No. of wagons dealt with per shunting engine hour = ---------------------------
                      </p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs font-mono text-center">
                        Shunting Engine hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Locomotive Performance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Zap className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Locomotive Performance
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Engine Kilometres per Day per Engine in Use */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-3">Engine Kilometres per Day per Engine in Use:</h3>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure is compiled separately for passenger, mixed and goods train services as well as for all services refers to &apos;engines in use&apos;. This is affected by such factors as:
                    </p>
                    <div className="space-y-2 mb-3">
                      {[
                        'The average run of trains.',
                        'The average speed of trains.',
                        'The engine links',
                        'The location of engine shed with respects to the stations which they serve.'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-indigo-900/30 rounded-lg px-3 py-2 border border-indigo-400/20 hover:bg-indigo-800/40 transition-all duration-300 group">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-indigo-500/60 to-purple-500/60 border border-indigo-300/30 text-indigo-100 font-bold text-sm shadow group-hover:scale-110 transition-all duration-300 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-indigo-50/95 text-xs flex-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Engine kms.
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Engine kms. per day per engine in use = ----------------------
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Engine days in use
                      </p>
                    </div>
                  </div>

                  {/* Engine Kilometres per Day per Engine on Line */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-3">Engine Kilometres per Day per Engine on Line:</h3>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure is also compiled by services and for all services put together. The proportion that this figure bears to the corresponding figure of &apos;engine kilometres per engine day per engine in use&apos; indicates the proportion of available engines &apos;on line&apos; that were put to effective use during the period in question.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Engine kms.
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Engine kms. per day per eigine on line = ------------------------
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Engine days on line
                      </p>
                    </div>
                  </div>

                  {/* Quantity of Fuel Consumed per Engine Kilometre by Service */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-3">Quantity of Fuel Consumed per Engine Kilometre by Service:</h3>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure indicates the fuel consumption in relation to engine kilometres only and does not reflect the tonnes hauled.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Quantity of Fuel Consumed
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Quantity of fuel consumed per engine km by service = -----------------------
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Engine kms.
                      </p>
                    </div>
                  </div>

                  {/* Quantity of Fuel Consumed per 1000 Gross Tonne Kilometres by Services */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-3">Quantity of Fuel Consumed per 1000 Gross Tonne Kilometres by Services:</h3>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      This figure indicates the fuel consumption in relation to the work done and is, therefore, a better index of fuel consumption than the quantity of fuel consumed per engine kilometer figure. The main factor that influences this result is the gross load of the train. It is derived by the formula given below:
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10 mb-3">
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center mb-2">
                        Quantity of Fuel Consumed x 1000
                      </p>
                      <p className="text-indigo-50/95 lg:text-sm text-xs font-mono text-center">
                        Gross Tonne kms.
                      </p>
                    </div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      Traction Energy consumption per engine km and per 1000 gross tonne kms is worked out exactly in the same way, replacing 1000 litres of diesel by kwhs.
                    </p>
                  </div>
                </div>
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

export default OperatingStatistics
