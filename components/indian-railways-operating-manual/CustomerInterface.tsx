'use client'
import { 
  Users,
  FileText} from 'lucide-react'

const CustomerInterface = () => {
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
                      <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              CUSTOMER INTERFACE AND ROLE OF COMMERCIAL STAFF
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The physical movement of both passengers and freight cargo is handled by operating staff but it is the commercial staff, who interacts with our customers.
                </p>
              </div>
            </div>

            {/* Passenger Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Passenger
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Platform Ticket Checking staff:</span> - (a) Their foremost duty is to enforce rigid access control in station area to prevent ticket less travel and entry of undesirable elements in station premises.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          1
                        </span>
                      </span>Occupation of waiting rooms and waiting sheds
                  </span>
                </h2>
                    <ul className="ml-0 space-y-5">
                      {[
                        {
                          letter: "a",
                          text:
                            "Except under special orders from the Div. Railway Manager, passengers must not be allowed to use the waiting rooms at stations as rest houses, but passengers arriving at Road side stations at night may be allowed to occupy the waiting rooms or waiting halls between trains or until the morning. At junction stations passengers may use waiting rooms and waiting halls when waiting for connecting trains.",
                        },
                        {
                          letter: "b",
                          text:
                            "To ensure that bona fide use of waiting rooms is being made, they shall be checked by a ticket checking staff every eight hours.",
                        },
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-purple-400 via-indigo-500 to-cyan-500 text-white text-lg font-bold shadow-md ring-2 ring-white/20 border border-white/10 select-none mt-1"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl py-3 px-2 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          2
                        </span>
                      </span>Booking staff
                  </span>
                </h2>
                    <ul className="ml-0 space-y-4">
                      {[
                        {
                          letter: "a",
                          text:
                            "To issue tickets, release and display reservation slips and charts in time to avoid detention of trains in boarding of passengers.",
                        },
                        {
                          letter: "b",
                          text:
                            "To advise all commercial figures and occupation report of trains to Divisional office and SM on duty as required.",
                        },
                        {
                          letter: "c",
                          text:
                            "Station Master or Parcel Clerk shall ensure:- Parcel, luggage, goods and vendors' trays and barrows shall not be placed on passenger platforms within 3 meters of the edge of the platform. When parcels or luggage are loaded on platform, the barrows must be kept outside this distance at a point opposite where the vehicle, into which they are to be loaded is likely to stop. Packages unloaded from a train must be removed as quickly as possible to the usual place of stacking outside this distance, if they are not taken away into luggage and parcel offices or the goods shed. Under no circumstances should drums and barrels be left on the platform in such a position that they may roll into the track.",
                        }
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500 via-violet-600 to-purple-500 text-white text-lg font-bold shadow-md ring-2 ring-blue-400/30 border border-purple-200/30 select-none mt-1"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          3
                        </span>
                      </span>Precautions before starting a train carrying passengers
                  </span>
                </h2>
                    <ul className="ml-0 space-y-4">
                      {[
                        {
                          letter: "a",
                          text: "Control of electric lights and fans in coaches: -Switching 'On' and 'OFF' of lights and fans circuits in a rake is effected by operating rotary switches or MCBs in the Junction box provided inside individual coaches. Operation of these circuits is the duty of train-lighting staff deputed at important stations. Individual switches regulators of lights and fans are to be operated by passengers themselves."
                        },
                        {
                          letter: "b",
                          text: "Conductor or TTEs are responsible for ensuring that the electrical equipments and fittings of all coaches are functioning satisfactorily. Where any defect or deficiency is noticed, they should inform the electric staff on duty of AC coaches or advise through control to the next station where electrical staff is provided."
                        },
                        {
                          letter: "c",
                          text: "Conductor or TTE shall, before the train leaves the starting station, request the occupants of those compartments to test if the locking devices on doors and windows are in working order. In case of any defect, they shall arrange to have the defects put right by the TXR staff under advice to SM either at the starting station or at the next train examining station."
                        },
                        {
                          letter: "d",
                          text: "Travelling Ticket Examiners are to note that doors on both sides of carriages on a train carrying passengers shall never remain locked at the same time, except in the case of compartments reserved for ladies which may be locked at the request of the occupants."
                        },
                        {
                          letter: "e",
                          text: "Conductor and TTEs must see that passengers are not getting in and out of carriage when trains are about to start and that no one is travelling on the roofs of carriage."
                        },
                        {
                          letter: "f",
                          text: "Segregation of passengers suffering from infections or contagious diseases: - For greater safety of the travelling public, passengers suffering from infections or contagious diseases should be segregated from other passengers by TTE with the help of security forces."
                        },
                        {
                          letter: "g",
                          text: "Passengers to be courteously treated.-All passengers, irrespective of the class of tickets they hold, shall be courteously treated and all possible assistance and protection afforded to them while on Railway Premises."
                        },
                        {
                          letter: "h",
                          text: "Female passengers particularly when unaccompanied by males, friends or relatives shall be given special attention at all times."
                        },
                        {
                          letter: "i",
                          text: "Each member of staff who has to deal with passengers must be acquainted with the time of arrival and departure from their stations of all trains carrying passengers to answer in prompt and civil manner any question put to them by the public."
                        }
                      ].map(item => (
                        <li key={item.letter} className="flex items-start gap-4">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-purple-400 via-violet-500 to-indigo-500 text-white text-lg font-bold shadow-md ring-2 ring-violet-300/30 border border-purple-100/30 select-none mt-1"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          4
                        </span>
                      </span>Precautions during journey
                  </span>
                </h2>
                    <ul className="ml-0 space-y-4">
                      {[
                        {
                          letter: "a",
                          text: "In cases of long distance through trains coming from or going to other railways, which have yet to journey through the following night, the guard or conductor or TTE shall, at a convenient station some time during the day, approach the occupants of upper class and second class ladies compartments, and request them to check up if the door latches and window catches are in good working order; when the train arrives at a station where the TXR staff is required to attend to the safety catches, the TXR staff should be ready with the necessary material and should themselves check up the locking devices and put right any deficiencies detected by them or reported to them by passengers."
                        },
                        {
                          letter: "b",
                          text: "The Conductor or TTE should also make it a point to warn the passengers at convenient stations between 21 and 22 hrs to apply the locking devices, if not already done."
                        },
                        {
                          letter: "c",
                          text: "Should it be found that the alarm chain has been pulled mischievously or for an unjustifiable cause or the hose pipe has been disconnected by some miscreants, the Conductor or TTE in charge must ascertain the name of the person who pulled the chain or disconnected the hose pipe. His name and address with those of other occupants must be obtained and the Conductor or TTE should make a report regarding the alarm chain pulling or the hose pipe disconnection incident and hand over the same to SM/ASM of the station at which the incident occurs, if time permits or at the next stopping station, who will take action in lodging the report with the GRP of the station in whose jurisdiction the incident has occurred."
                        },
                        {
                          letter: "d",
                          text: "Calling out name of station - Travelling Ticket Examiners where employed and at Ticket Checking stations, the Ticket Examiners are required to give this information to passengers as they go from compartment to compartment checking tickets and at junction stations they shall advise passengers to change, if necessary."
                        }
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4">
                          <span
                            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-green-400 via-blue-500 to-purple-500 text-white text-lg font-bold shadow-lg ring-2 ring-blue-300/30 border border-purple-100/40 select-none mt-1"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          5
                        </span>
                      </span>Waking up passengers
                  </span>
                </h2>
                    <ul className="ml-0 space-y-4">
                      {[
                        {
                          letter: "a",
                          text: "Passenger of all classes occupying reserved accommodation shall not be roused for tickets, to be rechecked between the hours 22 and 6 except when there are reasons to believe that a certain passenger is travelling without a ticket or otherwise irregularly.",
                        },
                        {
                          letter: "b",
                          text: "TTE,s of Mail Express and passenger trains are to arouse Air Conditioned and First Class Passengers at night at any station when requested by the passengers to do so and will be assisted by the coach attendant. The Ticket Checking staff to whom such a request is made by a passenger shall enter in the \"wake up memo\" the name of the passengers the number and the class of the carriage occupied and the name of station at which the passenger is to be called.",
                        },
                        {
                          letter: "c",
                          text: "The Ticket Checking staff when intimating the arrival of the train at a station where a passenger has been noted to alight shall take care of that other passengers are not unnecessarily disturbed.",
                        },
                        {
                          letter: "d",
                          text: "Passengers shall not be placed in carriages of a higher class than that for which tickets are held except on payment of additional fares as per extant rules or on automatic upgradation.",
                        },
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4 group">
                          <span
                            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-pink-400 via-blue-500 to-emerald-400 text-white text-xl font-extrabold shadow-lg ring-2 ring-blue-300/30 border border-emerald-100/40 mt-1 transition-transform group-hover:scale-110"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-sm group-hover:bg-white/10 transition-all duration-300">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          6
                        </span>
                      </span>Ladies travelling alone at night
                  </span>
                </h2>
                    <ul className="ml-0 space-y-4">
                      {[
                        {
                          letter: "a",
                          text: "In no case, whatever, shall a male passenger (except a boy under twelve years of age) be allowed to travel in a compartment reserved for Ladies in any train.",
                        },
                        {
                          letter: "b",
                          text: "A lady travelling alone or with children under 12 years of age at night in a first class compartment reserved for ladies may take with her in the same compartment in which she is travelling, one women attendant holding a second class ticket for that portion of the journey which is performed between the hours 8 p.m. and 6 a.m. This rule may also apply when two or more ladies are travelling in the same compartment with out any objection and any inconvenience.",
                        },
                        {
                          letter: "c",
                          text: "A lady travelling alone or with children under 12 years of age in a first class compartment may take with her compartment one dog on payment of the dog-box rate, provided that if another lady enters the compartment, the dog shall only be allowed to remain in the compartment with the permission of the other passenger.",
                        },
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4 group">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-linear-to-br from-rose-400 via-pink-500 to-violet-400 text-white text-lg font-extrabold shadow-lg border-2 border-white/20 mt-1 transition-transform group-hover:scale-110"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <div className="text-purple-50/95 lg:text-base text-sm leading-relaxed bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-sm group-hover:bg-white/10 transition-all duration-300">
                            {item.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          7
                        </span>
                      </span>Medical Aid
                  </span>
                </h2>
                    <ul className="ml-0 space-y-3">
                      {[
                        {
                          letter: "a",
                          text: "It will be the duty of the train manning staff or station staff to render first aid to any injured person within Railway premises immediately.",
                        },
                        {
                          letter: "b",
                          text: "If the case is serious one, the senior most official available on the spot must arrange to summon medical aid from the nearest available source, whether Railway, Civil, Military or private.",
                        },
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4 group">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-linear-to-br from-emerald-400 via-green-500 to-teal-400 text-white text-lg font-extrabold shadow-lg border-2 border-white/20 mt-1 transition-transform group-hover:scale-110"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <div className="text-purple-50/95 lg:text-base text-sm leading-relaxed bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-sm group-hover:bg-white/10 transition-all duration-300">
                            {item.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          8
                        </span>
                      </span>Murder or serious Assaults
                  </span>
                </h2>
                    <ul className="ml-0 space-y-3">
                      {[
                        {
                          letter: "a",
                          text: "If a crime of serious nature such as a murder or a serious assault be committed in a Railway carriage on a running train, the following action shall be taken by the staff with a view to helping the Police Officials in their investigation: -",
                        },
                        {
                          letter: "b",
                          text: "The Conductor or TTE of the train shall have the compartment emptied and locked up after all shutters have been raised from outside immediately the commission of such an Offence is known so that blood stains, marks of struggle, foot prints, finger impressions etc. may remain undisturbed.",
                        },
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-4 group">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-linear-to-br from-purple-500 via-pink-400 to-rose-400 text-white text-lg font-extrabold shadow-lg border-2 border-white/20 mt-1 transition-transform group-hover:scale-110"
                            aria-label={`Item ${item.letter.toUpperCase()}`}
                          >
                            {item.letter}
                          </span>
                          <div className="text-purple-50/95 lg:text-base text-sm leading-relaxed bg-white/5 px-4 py-2 rounded-xl border border-white/10 shadow-sm group-hover:bg-white/10 transition-all duration-300">
                            {item.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          9
                        </span>
                      </span>Passenger trains overshooting Platform
                  </span>
                </h2>
                  </div>

                  <div className="bg-white/5 rounded-xl p-2 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                        <span className="flex items-center justify-center">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                            10
                          </span>
                        </span>Duties of Conductor
                      </span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Attendance
                    </p>
                    <ul className="ml-0 space-y-3">
                      {[
                        {
                          label: "i",
                          text: "He shall report to the train guard for his appearance and the time of his appearance shall be noted down by the train guard in the Constitution Report. The Conductors shall sign this entry and the train guard shall countersign it."
                        },
                        {
                          label: "ii",
                          text: "See that the window catches and other safety devices fitted in II Class compartments reserved for ladies are in perfect working order and get the deficiencies repaired."
                        },
                        {
                          label: "iii",
                          text: "See that the passenger carriages are thoroughly cleaned and filled with water."
                        },
                        {
                          label: "iv",
                          text: "Look after the safety and comfort of passengers of all classes and more particularly, of women and children, attend to complaints of passengers regarding cleanliness of carriages, water supply in lavatories, lights and fans and any other complaints and have them promptly attended to."
                        },
                        {
                          label: "v",
                          text: "Make it a practice to walk along his train at stations to see if passengers want any assistance or information and keep a careful look out for irregularities of any kind, specially at night."
                        },
                        {
                          label: "vi",
                          text: "Before a train begins a night journey, ensure that the safety bolts provided on the inside of windows and doors of Upper Class carriages and ladies compartment are in working order."
                        },
                        {
                          label: "vii",
                          text: "Arrange for the meals of passengers when requested to"
                        },
                        {
                          label: "viii",
                          text: "Wake up upper class passengers alighting at night if requested;"
                        },
                        {
                          label: "ix",
                          text: "See, in so far as is possible that there is no irregular or unauthorized travel by trains in contravention of any rules in force. All infringement of rules by passengers should be brought to the notice of the station master on duty."
                        },
                        {
                          label: "x",
                          text: "Note the Coach, which is to be detached short of the destination of the train, must see that such carriages are not occupied by passengers who have tickets for beyond the station to which they are booked. He must arrange that, if any passengers are allowed to ride in such coaches they are warned before starting that they shall have to vacate the coaches on arrival at the station at which they are to be detached."
                        },
                        {
                          label: "xi",
                          text: "Conductor must see that passengers are not getting in and out of carriages when trains are about to start and that no one is travelling on the roof of carriages"
                        }
                      ].map((item) => (
                        <li 
                          key={item.label} 
                          className="flex items-start gap-4 group hover:bg-white/10 px-4 py-2 rounded-xl transition-all"
                        >
                          <span
                            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-purple-500 via-pink-400 to-rose-500 text-white text-lg font-bold shadow-lg border-2 border-white/20 mt-1 group-hover:scale-110 transition-transform duration-300"
                            aria-label={`Item ${item.label}`}
                          >
                            {item.label}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed flex-1">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Duties and Responsibilities of TTEs</span>
                    </p>
                    <ul className="ml-0 space-y-2">
                      {[
                        {
                          label: "i",
                          text: "He shall see that all doors, bolts, windows and catches etc. of all the coaches particularly upper class and ladies compartments are in perfect working order and also that all through and sectional coaches are provided with proper destination boards."
                        },
                        {
                          label: "ii",
                          text: "If there are defects in the working of any of the fans and lights, he shall get them rectified by the train lighting staff."
                        },
                        {
                          label: "iii",
                          text: "He shall see that, where arrangements exist, the compartment are properly cleaned, dusted, and watered and shall make necessary enquiries from passengers in this connection."
                        },
                        {
                          label: "iv",
                          text: "He shall see that lights, fans and other fittings, and water in the carriages are not misused."
                        },
                        {
                          label: "v",
                          text: "He shall check Attendant compartments and ensures that only bonafide attendants of upper class passengers occupy them."
                        },
                        {
                          label: "vi",
                          text: "He shall check Vendors and G.R.P/RPF compartments to ensure their correct use."
                        },
                        {
                          label: "vii",
                          text: "He shall receive reservation charts well in time before the departure of the train, see that the same are completed in all respects and that the reservation labels are intact so that there is no hitch in providing berths to passengers."
                        },
                        {
                          label: "viii",
                          text: "He shall look after the safety and comforts of passengers in general and of upper class and women passengers in particulars."
                        },
                        {
                          label: "ix",
                          text: "He shall assist all classes of passengers in securing accommodation either reserved or available for them."
                        },
                        {
                          label: "x",
                          text: "During the course of the journey, he shall keep special watch on compartments occupied by women passengers without causing any annoyance to occupants. He shall, where halt permits; walk on platforms, to see that ladies compartment that everything is well. While inspecting a train in this manner, he should be ready to answer queries and receive complaints from all classes of passengers and complaints of special nature and action taken by him should be recorded."
                        },
                        {
                          label: "xi",
                          text: "During the night, he shall awake upper class passengers who express their desire to be called at a particular station and in the event of his change of duty en route, ask his reliever to do so."
                        },
                        {
                          label: "xii",
                          text: "He shall ascertain from Passengers their meal requirements and arrange it either from the Dining Cars running with the train or the next Refreshment Room station."
                        },
                        {
                          label: "xiii",
                          text: "He shall assist Refreshment Room bearers in finding out space for return of empty meals crockery, trays or thalies."
                        },
                        {
                          label: "xiv",
                          text: "He shall see that no suspicious characters attempt to enter upper class compartments and compartments reserved for women."
                        },
                        {
                          label: "xv",
                          text: "He shall not interfere with or annoy passengers by talking, smoking or slamming doors while entering, or leaving compartments."
                        },
                        {
                          label: "xvi",
                          text: "He shall keep an eye on vendors and licensed porters charging passengers excessively and promptly intervene where necessary. All such cases must be reported to the Divisional Commercial Manager concerned under intimation to the Station Master concerned."
                        },
                        {
                          label: "xvii",
                          text: "He shall see that vendors do not shout their wares at station during night."
                        },
                        {
                          label: "xviii",
                          text: "In the event of any passenger being found molested, a passenger's property being stolen or tempered with, he shall, promptly, take action in conjunction with the guard in-charge of the train, or the station master as the case may be and see that police is advised immediately. The passenger's name, address and ticket numbers of those who are allegedly responsible for the trouble and also the same particulars of some respectable witnesses, should be taken and full report submitted to the Divisional Commercial Manager concerned."
                        },
                        {
                          label: "xix",
                          text: "When alarm chain is pulled or hose pipe is disconnected, the disc at the end of the reserved coach should be returned to normal position (thereby closing the Clappet Valve) and FIR to be lodged to GRP under advice to Guard/ Station Master"
                        },
                        {
                          label: "xx",
                          text: "Similarly hosepipe disconnected should be reconnected by Asstt. Loco Pilot."
                        },
                      ].map((item) => (
                        <li
                          key={item.label}
                          className="flex items-start gap-4 group hover:bg-white/10 px-4 py-2 rounded-xl transition-all"
                        >
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-purple-600 via-pink-400 to-rose-500 text-white text-base font-extrabold shadow-lg border-2 border-white/20 mt-1 group-hover:scale-110 transition-transform duration-300 select-none"
                            style={{ fontFamily: "serif", letterSpacing: "0.01em" }}
                            aria-label={`Duties Item ${item.label}`}
                          >
                            {`${item.label}`}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed flex-1">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default CustomerInterface
