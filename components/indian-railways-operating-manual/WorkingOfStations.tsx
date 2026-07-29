'use client'
import { 
  Building2, 
  MapPin, 
  Users, 
  ClipboardList} from 'lucide-react'

const WorkingOfStations = () => {
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

      <div className="relative z-10 py-8 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur-md shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-7xl text-3xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl">
              WORKING OF STATIONS
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Enhanced Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <MapPin className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Railway Stations Overview
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-5">
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Railway Stations, world wide, are located in prime city centres, as railways were started at a time when expansion of cities was yet to start. Railway station continues to be the focal point of central business district in all cities in the world.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    All description of rail business is transacted at the station, passengers start journey or complete it, outward parcels are booked and inward parcel consignments received and kept ready for delivery. At stations having attached goods shed, outward and inward freight cargo is handled there.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    In their historic evolution, the stations now have catering establishments, resting facilities in retiring rooms or a budget hotel. A world-class station may look or in fact be more like a mall with shops and catering establishments with attendant information, ticketing and reservation counters.
                  </p>
                  <div className="bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-5 border-l-4 border-cyan-400 shadow-lg">
                    <p className="text-cyan-100 lg:text-lg text-base leading-relaxed font-semibold">
                      Station Master is in overall charge of the station and includes Station Superintendent/ Station Manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Duty List of Staff */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Duty List of Staff
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The duties to be performed by different categories of staff in connection with movement of trains are detailed below. These duties must be read in conjunction with the Station Working Rules of the station, General & Subsidiary Rule Book, Chapter II of Operating Manual dealing with &quot;Working of Stations&quot; and Block working Manual as amended from time to time.
                </p>
              </div>
            </div>

            {/* Enhanced Responsibility of Station Master */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  I. Responsibility of Station Master (supervisory)/Station Manager
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-center flex-col  gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                       i
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       Station Master is responsible for the efficient discharge of duties by different members of staff at his Station. (General Rules 5.01)
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      ii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       Ensuring that the general working of the Station is being carried out in strict accordance with the current rules, procedures and instructions.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                       iii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       Providing prompt and courteous service with utmost safety and security of passengers and employees.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                       iv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       Availability, helpfulness and good conduct of station porters
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                       v
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       He shall be responsible for general up-keep of the station.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                       vi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      He shall be responsible for keeping the safety and operating literature including circulars, pamphlets, gazette etc. up to date and these must be explained to the staff working under him and got noted by them.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                       vii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      He shall be responsible for maintaining Accident register and Accident charts and keeping these up to date.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      viii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       He shall maintain figures in respect of the stock and get them relayed to the control in time.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      ix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      He shall investigate all public complaints and send the extracts of the complaint with explanation of the staff and his own remarks to Divisional Office in time. In case of complaints concerning the other department, intimation may be given to the subordinate In-Charge of that department immediately so that action may be taken to avoid recurrence.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      x
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       He shall promptly attend all accidents, assume charge of the site to and assist in relief measures ensuring prompt evacuation of injured & stranded passengers. He shall take note of all the information available and protect the clues/evidence, which may be helpful in the enquiry. He shall intimate the control office at regular interval for current information and ask for the required assistance i.e., Relief Train, Medical van etc. He shall investigate yard accidents, obtain statements of the staff responsible and submit his report with conclusions and joint note to the Divisional office.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       He shall ensure that fire fighting equipments at the station such as fire extinguisher, fire buckets etc. are in fine fettle and ready for use.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      The Station Master should regularly test and record in the charge book, the working of Points, Signals and Track Circuit to ensure that:
                      <ul className="mt-4 ml-0 space-y-3 bg-white/5 rounded-lg p-4 border border-white/10">
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">The Signals are back to &apos;ON&apos; position when the relevant slide/button/ lever is put back or intended train movement has been completed.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">it is not possible to take &apos;OFF&apos; conflicting signals at the same time.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Signals are not taken &apos;OFF&apos; until all points are correctly set and facing points locked.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Any other manner of testing prescribed by the Authorised Officer.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Panel testing: Normal/Abnormal by Station Master.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">At stations provided with continuous track circuits or at stations having solid state interlocking the method of testing shall be prescribed jointly by Signalling and Operating Branch which shall be described in the Station Working Rules to be followed by station masters.</span>
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       He must ensure that burners and wicks of the hand signal lamps are daily cleaned, trimmed and oiled properly.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                     He must ensure that the essential Safety equipments at his station are the same, complete and, if there is any deficiency should be made good without delay.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      He shall conduct night and surprise inspections to check the alertness of staff and working of signals, and points and visibility of the signals.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xvi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      The Station Master in charge at a station shall inspect his station daily with a view to ensure efficient working of-
                      <ul className="mt-4 ml-0 space-y-3 bg-white/5 rounded-lg p-4 border border-white/10">
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">All public facilities including, fans, lights, lifts, escalators,</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">All equipments being in efficient working order. Deficiencies must be promptly rectified or recorded in Petty Repairs Book</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Safe and efficient working of trains</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Cabins, Assistant Station Manager&apos;s office, yards, goods sheds and level crossing gates under his charge.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Reservation Enquiry, Public Address system, Public Information Display System, booking offices, Ticket Checking, catering and vending stalls etc.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">•</span>
                          <span className="text-purple-50/90">Drinking Water availability.</span>
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xvii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      He shall see that train signal register, station Diary, Inspection Note Book, reference books and other station record is property maintained and preserved for a minimum period as prescribed later in this chapter.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center mt-0.5 border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xviii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                      At the bigger stations Health Inspector is incharge of sanitation the Station Manager shall conduct daily inspections and bring out deficiencies. He shall conduct daily inspections of waiting rooms, bath rooms, lavatories, refreshment rooms and catering trollies, platforms, tracks and other station premises from sanitation point of view and ensure that arrangements in this regard are adequate and effective. Availability of safe drinking water to passengers & employees is joint responsibility of JE/SE (works) and health department he should check that same is available.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300">
                      xix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">
                       He shall ensure that sufficient stock is available for the requirement of the day. He shall keep in touch with the running of trains so that, in case of late running of connecting train, scratch rake can be turned out, if necessary. He shall also keep a check - on reserved stock
                    </span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Enhanced Deputy Station Master Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  II. Deputy Station Master (Outdoor)
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      i
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      The Deputy Station Manager shall be responsible for general up-keep and proper working of the station as under
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall maintain safety literature, rule books, safety record. He shall counsel staff regarding rules and safety- systems
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall deal with public complaints and counsel commercial staff for courteous behaviour.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure right time placement and removal of terminating/originating trains and keep records in this regard and also keep a watch on Shunting operations.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      v
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall inspect gate, panel, station, regularly during his shift.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall maintain close contact and co-ordination with Panel ASM and Log ASM for smooth running of trains and for better planning of operational work and will assist in case of any abnormal working.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall promptly attend to any incident or accident and assist in relief measures during his duty. He shall collect all information and inform the Control office for required assistance, i.e., Relief Train, Medical Van etc. He shall also inform the local civil authorities as required and safe guard the clues or evidences which may be helpful in enquiry.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      viii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of abnormal working, he shall be responsible for manual operation (Hand Cranking) of Points and piloting of trains.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure that all coaching trains scheduled to stop at the station, start within their allowed time.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      x
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      Whenever Special trains are arranged to run from his station, during his duty, he shall ensure that stock for the same is secured and placed on the proper line in time.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep close supervision on sanitation. He shall inspect the platforms, waiting halls, waiting rooms &amp; the track and see that the same are cleaned properly by the sanitary staff.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep close watch on passenger amenities provided at station and their up keep.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall look after any other work assigned to him by Station Manager, from time to time.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of emergency he shall also perform duty on Panel/Log.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      All instructions received from superiors shall be recorded in an Order Book. Senior officers should confirm these through a control order to avoid ambiguity. All such instructions shall be implemented, provided these do not violate safety rules &amp; procedures.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xvi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He will perform all the duties of SS in his absence.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Log ASM/Block ASM Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  III. Log ASM/Block ASM
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      i
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall handle the block instrument himself when on duty and shall not permit any unauthorized person to manipulate or handle the block panel/block instrument &amp; block telephone.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep the Station Manager&apos;s control keys block instruments in his personal custody whenever, he is required to leave his office even for a short duration.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall maintain TSR and other connected record/documents in good shape and ensure that all entries are completed and are upto date.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall attend the control and give arrival departure of trains promptly and shall carry out instructions given by superiors provided these do not violate safety rules &amp; procedures.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      v
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall inform the ESM/MSM through a written message, any failure of block working etc. and invariably enter these failures in signal failure register.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of any accident, he shall inform promptly the section control Station Manager/Station Master/ Dy. SM immediately. He shall give all the information available with him in regard to the nature, places, cause and assistance etc. in respect of the accident.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall communicate reasons for late start of out going trains and late arrival of incoming trains to control.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      viii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall come on duty after taking complete rest and shall not perform his duty under the influence of liquor, drugs, or intoxicants.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep his reference books upto date, posted with latest correction slips and shall keep himself fully conversant with the extant rules. He shall keep his books readily available for inspection when asked to do so.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      x
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall not absent himself from duty without prior permission of his superiors. He shall not leave his duty unless properly relieved by his relief and shall not exchange his duty without prior permission from his superiors.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall not consider himself relieved of duty unless he has completed transactions of trains for which he has given/obtained line clear till the complete arrival of such trains.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall always obey the lawful orders of his superiors so long as they do not contravene any of the extant rules in force.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of any abnormal working, he shall also perform the duties assigned to Panel ASM.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall advise the descriptions
                    </span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Enhanced Panel ASM Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  IV. Panel ASM
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      i
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      When on duty or when called upon to do so, in case of emergency, he shall be responsible for obtaining and granting line clear to trains or for shunting movements as per SWR &amp; GR.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall handle the control panel himself when on duty and shall not permit any unauthorized person to manipulate panel.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep the SM&apos;s control keys of control panel in his personal custody whenever, he is required to leave his office even for a short duration.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      While coming on duty, he shall ensure that all points and signals are in good working order and all the registers, records, pertaining to train passage are completed in all respect before taking over the charge.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      v
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall personally ensure that conditions for taking &apos;off&apos; the reception signals are fulfilled and the clearance of line is verified as per SWRs before actually pressing the relevant button for taking off the signals.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure from indications available in the panel that the signals are burning &apos;brightly and are giving correct indications.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall maintain complete and up to date record of the Engg. Restrictions. He shall be responsible for bringing forward the caution order register every Monday and displaying the restrictions on notice board as well.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      viii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible for ensuring delivery of proper caution orders to all trains.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure that all Shunting operations are carried out as per extant orders and GR 5.19 and SRs thereof.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      x
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall inform the ESM/MSM in writing or through a written message, any failure of track/signals/ points/keys or panels etc. and shall invariably enter these failures in signal failure register.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall allow shunting in between the arrival/departure of trains or during slack period as frequently as possible to the maximum extent.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall come on duty after taking complete rest and shall not perform his duty under the influence of drugs, or intoxicants.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep his reference books upto date, posted with latest correction slips and shall keep himself fully conversant with the extant rules. He shall keep his books, readily available for inspection when asked to do so.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall not absent himself from duty without prior permission of his superiors. He shall not leave his duty unless properly relieved by his relief and shall not exchange his duty without prior permission from his superiors.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall not consider himself relieved of duty unless he has completed transactions of trains for which he has given/obtained line clear till the complete arrival of such trains.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xvi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall always obey the lawful orders of his superiors so long as they do not contravene any of the extant rules in force.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xvii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure that proper indications of points, signals, track, circuits, crank handle, level crossing gate etc., are displayed at their proper places.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xviii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible for issuing required papers to trains entering/leaving the yard under the instructions of log ASM.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall issue shunting order for shunting operations as per extant rules.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xx
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep a watch on the working of shunting staff.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xxi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure clearance of running lines in case of failure of their track circuits.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xxii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall maintain log book regarding train and shunting movement.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xxiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible for giving complete arrival of all trains to log ASM supported by a private No.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xxiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of abnormal working he shall be responsible for cranking pad locking of points and piloting of trains in absence of Deputy Station Manager/out door.
                    </span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Enhanced Pointsman/Shuntman Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  V. Pointsman/Shuntman
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      i
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall obey all lawful orders of the ASM on duty or official in-charge supervising the shunting during the course of shunting operations including coupling or uncoupling of vehicles of wagons. Fixing rubber washers, closing wagon doors, displaying hand signals etc.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall exhibit danger signal to the official supervising the shunting should the crossing be fouled during the shunting operation.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall pilot the trains in case of abnormal working and when ordered by the SM on duty.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be in proper neat and clean uniform while on duty.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      v
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall come on duty after taking complete rest and shall not perform duty under the influence of liquor, drugs, or intoxicants.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      Neither shall he absent himself from duty nor shall he exchange his duty without prior permission of his superiors.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall not leave his duty unless properly relieved or authorized by his superiors.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      viii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall set the points properly in non-interlocked yard and man them for all shunting movements and shall not interfere with the points while the vehicles are standing and, or passing over them.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible to see that fouling marks are kept clear after completion of shunting.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      x
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall always commence his duty equipped with hand signal lamps during night and flags during day.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall verify the correct setting of route before delivering required papers to the loco pilot either through taking &apos;OFF&apos; the relevant shunt signal or by personal observation.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of track failure he shall assist the SM to ascertain the clearance of line.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible for lighting up of the indicators in the evening and putting out in the morning time fixed by DRM office and ensuring that these are burn brightly at night.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible for cleaning and oiling the burners and trimming wicks during day time under the supervision of Station Manger/Deputy Station Manager.
                    </span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Enhanced Gateman Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-10 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <MapPin className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  VI. Gateman
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      i
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be responsible for proper operation of the gate as per SWRs for the passage of trains.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure that no train suffers any detention on account of late closing of the gate.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep the channels of check-rails clean and shall clean the road within the railway limits and water the area regularly.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      iv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall clean the gate lamps and hand signal lamps daily. He shall ensure that the wicks of the burners are trimmed so that these are lighted properly and kept burning continuously from sun set to sunrise.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      v
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall keep the surroundings of his gate lodge clean tidy and neatly planted with shrubs, plants etc.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall remain alert on duty till properly relieved. If he is required to leave the gate in an emergency he shall close and lock the gate booms against the road traffic before leaving the gate.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      vii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure that the equipment at L-xing are complete and in working orders.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      viii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall produce the public complaint book when required by public for lodging complaint and to the railway officials for inspection.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      ix
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall ensure that road traffic is not unnecessarily held up at the gate.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      x
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall stand in attention near the gate lodge facing the track and be prepared to repeat any signal which the guard may intend to convey to the loco pilot or show caution or danger signal should anything appear to be wrong with the train itself as it passes.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall be polite and courteous in his behaviour towards the public.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall report any defect in the gate to the ASM on duty without delay.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiii
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall close the gate on sighting a train or when ordered by the ASM on panel duty.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xiv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall attract the attention of the loco pilots and guards by shouting and gesticulating instead of showing danger signal in case of tram parting.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xv
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      He shall obey all lawful orders of the SM on duty.
                    </span>
                  </li>
                  <li className="flex items-center flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:shadow-purple-500/30 transition-all duration-300 text-purple-100 font-bold lg:text-lg text-base">
                      xvi
                    </span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1 text-center">
                      In case of any obstruction, accident or damage to the gates, he shall protect the gate/obstruction as per instructions and rules in force.
                    </span>
                  </li>
                </ul>
              </div>
            </div>



            {/* Enhanced Duty list and hours of duty Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent text-center">
                  VII. Duty list and hours of duty
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Sr. DPO/DPO shall fix the duty hours for the staff at stations in accordance with the (Hours of employment regulations in consultation with Sr.DOM/DOM/ Sr.DCM/DCM). Copies of these duty hours (roaster) must be displayed at each station</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Station staff shall handover charge at the end of their hours of duty as prescribed at the station only when properly relieved. Such duty hours shall not be exchanged without the permission of the Station Master.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">3</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1"><span className="font-semibold text-blue-200">Daily Mustering of Staff:</span> The Station Master or the person authorised in this behalf shall fill in the attendance of staff at his station in Attendance Register.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced SM's responsibility for assurance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent text-center">
                  SM&apos;s responsibility for assurance
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-6 text-center italic">Station Master&apos;s responsibility before allowing employees to take independent charge-</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-green-600/60 to-emerald-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-green-100 font-bold lg:text-lg text-base">1</span>
                    <div className="flex-1">
                      <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Station Master must not allow any employee to take independent charge of a post connected with train working without satisfying himself after detailed oral examination about the knowledge of concerned staff. He must satisfy that the employee –</span>
                      <ul className="mt-4 ml-4 space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(a)</span>
                          <span className="text-green-50/90">Possesses the requisite Certificate of Competency.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(b)</span>
                          <span className="text-green-50/90">Has understood the working rules of the Station and is fully conversant with the duties he has to perform.</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-green-600/60 to-emerald-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-green-100 font-bold lg:text-lg text-base">2</span>
                    <div className="flex-1">
                      <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Before an employee takes independent charge of a post connected with train working for the first time, the pickup period is generally laid down by the DRM(Safety). However, following guidelines can be observed on first posting or when there is change of system/means of working of trains –</span>
                      <ul className="mt-4 ml-4 space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(a)</span>
                          <span className="text-green-50/90">Junction stations with marshalling yard and lobby - 10 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(b)</span>
                          <span className="text-green-50/90">Terminal stations with marshalling yard and lobby - 8 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(c)</span>
                          <span className="text-green-50/90">Large stations or junction stations - 5 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(d)</span>
                          <span className="text-green-50/90">Medium stations &amp; Road side station - 3 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-300 mt-1.5 font-bold">(e)</span>
                          <span className="text-green-50/90">Road side stations - 2 days</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-green-50/95 lg:text-lg text-base leading-relaxed font-light">If employee fails to give declaration in fixed period, he must be directed for Refresher Training at his expense.</p>
                      <p className="mt-2 text-green-50/95 lg:text-lg text-base leading-relaxed font-light">It must cover pickups in all the shifts.</p>
                      <p className="mt-2 text-green-50/95 lg:text-lg text-base leading-relaxed font-light">(Minimum one day for each shift.)</p>
                      <p className="mt-4 text-green-50/95 lg:text-lg text-base leading-relaxed font-light">He must read station-working rules and must witness the actual performance of these duties for the time specified as &apos;pick up&apos; time. In emergencies, however and in cases where the duties are of a simple character and similar to those already performed by an employee at stations where he has worked before, this pick up period may be reduced by the Sr.DOM.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Home Address Register Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  Home Address Register
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Every Station Master must maintain a Register containing the name and up-to-date address including telephone /mobile phone no. of each member of the staff employed at his station.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">A separate Register containing list of all shopkeepers, licensed vendors, licensed coolies, contractors coolies or any other persons working at station other than railway employees must be maintained along with their up to date address and telephone nos, blood group if available and office copy of their Photo Identity cards. Entry of such persons into station area will be permitted only after checking the I Card.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Public and Staff notices for exhibition Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent text-center">
                  Public and Staff notices for exhibition
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-6 text-center">The following Notices and Publications, besides those, which may be ordered from time to time, shall be exhibited at each station in conspicuous places.</p>
                <ul className="space-y-4">
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((num) => {
                    const notices = [
                      "Notice Board showing current running of trains in the waiting hall, or at the entrance.",
                      "Notices regarding hours of business of goods, luggage and parcels – outside the respective offices.",
                      "Notices regarding restrictions in Goods Booking.",
                      "Notices regarding Allotment of Wagons.",
                      "Rules regarding occupation/use of Waiting Rooms – Inside the waiting rooms.",
                      "Notice regarding date of payment of staff.",
                      "Duty Rosters and Classification lists of staff employed at stations.",
                      "Extract of Railways Act (24 of 1989) and payment of wages act.",
                      "A list of nearest Doctors and Hospitals, with telephone nos.",
                      "Rules for the occupation of Rest Houses and Rest Rooms.",
                      "A list of home addresses with telephone nos. of staff in Station Master's office.",
                      "List of persons with telephone nos. from whom conveyance can be requisitioned in emergency; list of tent houses.",
                      "List of nearest Fire Stations, Bus depots, Airports, OIL companies etc. with telephone numbers.",
                      "List of telephone numbers of Civil, Police, Military and Railway officials.",
                      "Other prescribed notices.",
                      "The List of Staff qualified in First Aid.",
                      "Blood groups of staff"
                    ];
                    return (
                      <li key={num} className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                        <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-base text-sm min-w-8">{num}</span>
                        <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">{notices[num-1]}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-6 text-blue-50/95 lg:text-lg text-base leading-relaxed font-light text-center italic">The Station Manager must be careful to see that out dated timetables and notices are removed and replaced with current ones. He should also ensure that the telephone nos. are updated from time to time.</p>
              </div>
            </div>

            {/* Enhanced Exhibition of public advertisements Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <MapPin className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent text-center">
                  Exhibition of public advertisements
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-green-600/60 to-emerald-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-green-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Public advertisements in the form of Boards, Posters, Showcases, Models, Neon-signs, or in any other form should not be allowed to be exhibited at any place within the station limit or premises without the written permission of the competent officer of commercial publicity branch etc. The Station Master will maintain a register showing full particulars of each advertisement exhibited at the station in the prescribed form.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-green-600/60 to-emerald-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-green-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Station Masters and other railway staff including Guards and Loco pilots of any train must not permit the display of advertisement matters on engines, passenger coaches and other rolling stock, unless the prior permission of the Divisional Railway Manager concerned has been obtained.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Rule Books, Manuals etc. at Stations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  Rule Books, Manuals etc. at Stations
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">The Station Master is personally responsible to see that rules books. are kept up-to-date and are available to staff for reference. (G&amp;SR 2.01, 5.02 and 5.03.)</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Station Master is also responsible to see that all registers, forms and charts are properly and neatly maintained and that they are not used for purposes other than those for which they are printed and supplied.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">3</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Station Masters are responsible for general accuracy of all periodical returns and for their submission in time.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">4</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Destructions of obsolete records shall be recorded in a register</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Station Records Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent text-center">
                  Station Records
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Each book/Register, when completed must be stocked in a bundle with a cover showing dates of commencement and completion.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Records must be placed on shelves and almirahs in dry and secure places, where they shall be safe from irregular handling or removal by any unauthorised person.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">3</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Periods for which Station records must be kept at Stations are given at the end of this chapter. Any records pertaining to court cases/enquiries must not be destroyed until the DRM&apos;s permission is obtained.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Books and Notices at Level Crossing Gates Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <MapPin className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent text-center">
                  Books and Notices at Level Crossing Gates
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-6 text-center">The following books and notices are maintained at a level crossing gate provided with Gate-lodge. Where Gate-lodges are not provided, the books shall be maintained in the Station Master&apos;s office.</p>
                <ul className="space-y-4">
                  {[1,2,3,4].map((num) => {
                    const items = [
                      "A Book showing the list of equipments.",
                      "Duty Rosters.",
                      "A copy of duty list with translation in regional language.",
                      "Level crossing working instructions, which should appear as separate appendix to SWR."
                    ];
                    return (
                      <li key={num} className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                        <span className="bg-linear-to-r from-green-600/60 to-emerald-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-green-100 font-bold lg:text-base text-sm min-w-8">{num}</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">{items[num-1]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Enhanced Hand Book for gateman Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  Hand Book for gateman
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-4">
                  {[1,2,3,4,5].map((num) => {
                    const items = [
                      "Extract of the Station Working Rules.",
                      "Public Complaint Book.",
                      "Vision test and Competency Certificate of the Gateman.",
                      "Results of last Traffic Census.",
                      "Inspection Books."
                    ];
                    return (
                      <li key={num} className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                        <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-base text-sm min-w-8">{num}</span>
                        <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">{items[num-1]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Enhanced Filing of Operating Circulars Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent text-center">
                  Filing of Operating Circulars
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Every Station must maintain files of circulars etc. subject wise.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-blue-600/60 to-cyan-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-blue-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Each circular must be got noted by members of the staff concerned. In case of Group &apos;D&apos; moderately literate staff, Station Master must record that circulars etc. have been correctly explained.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Instructions for Guards Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent text-center">
                  Instructions for Guards
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light text-center">Instructions for Guards issued from time to time must be kept in one file at Guards Headquarter stations. Guards must make themselves thoroughly acquainted with these instructions and should sign the circulars and assurance register of safety literature file, while &quot;signing on&quot; for duty.</p>
              </div>
            </div>

            {/* Enhanced Correspondence Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  Correspondence
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  {[1,2,3,4,5,6,7,8,9].map((num) => {
                    const items = [
                      "All official correspondence must be attended to by the Station Master, who must open all covers and see that all letters are replied without delay.",
                      "All inward letters must be registered in the inward letters register showing the dates & letter no. of reply with a copy placed in a file.",
                      "Station Masters are responsible for the accuracy of the information contained in all outgoing letters, which they must sign personally.",
                      "The Station's name must be stamped on all returns and letters and on envelopes in which they are despatched.",
                      "Every outward letter must be numbered, dated and must also bear reference no. of the subject. This must be adhered to in all subsequent correspondence when replying to correspondence; reference must be made to the letter number under reply.",
                      "Letters from the public asking for information must be replied to as promptly as possible. If there is any difficulty in supplying the required information, the receipt of the letter must be acknowledged and matter referred to the DRM,",
                      "SR.DOM shall provide model draft of letters, which are frequently received at stations, using a model draft will ensure that language used is polite, respectful and courteous. It should be written legibly at stations not having computers",
                      "When forwarding letters or complaints from staff working under them, Station Masters must submit their own remarks, while forwarding such letters.",
                      "Letters received by the Station Master, pertaining to departments under him e.g. Goods Shed, Booking/Parcel offices etc. may be marked by the Station Master for the In charge concerned, but the Station Master shall be personally responsible for the early compliance of such letters."
                    ];
                    return (
                      <li key={num} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                        <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">{num}</span>
                        <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">{items[num-1]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Enhanced Playing of Bands Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent text-center">
                  Playing of Bands and presentation of Guards of Honour etc. on Station platform
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light text-center">The playing of bands and presentation of Guard of Honour etc., on the Station Platform is prohibited, except with the prior permission of the DRM.</p>
              </div>
            </div>

            {/* Enhanced Prohibition against Photography Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <MapPin className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent text-center">
                  Prohibition against Photography/Film shooting on railway premises
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light text-center">Such Photography/Film shooting is strictly prohibited within Station limits and on the railway lines, except with the permission of the officers authorised by railway administration.</p>
              </div>
            </div>

            {/* Enhanced Religious Edifices Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent text-center">
                  Religious Edifices within the railway limits
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light text-center">Employees are forbidden to occupy any place in station area for praying holding religious functions speeches, discourses etc., to erect religious structures, either permanent or temporary, or to add or alter any existing religious structures on railway land, without the sanction of the General Manager. Station Masters will keep close watch and promptly report any violation of this instruction.</p>
              </div>
            </div>


            {/* Enhanced Normal period for Station Operating Registers Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-6 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group mt-8">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent text-center">
                  Normal period for which Station Operating Registers and Records are required to be preserved
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Table Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6 pb-4 border-b border-white/20">
                  <div className="lg:col-span-1 text-indigo-200 font-bold lg:text-base text-sm">S.No.</div>
                  <div className="lg:col-span-8 text-indigo-200 font-bold lg:text-base text-sm">Description of the Book/Form</div>
                  <div className="lg:col-span-3 text-indigo-200 font-bold lg:text-base text-sm">Period of preservation from the date of completion</div>
                </div>
                
                {/* Table Rows */}
                <div className="space-y-3">
                  {[
                    { desc: "Train passing registers/Books/Forms", period: "1 year" },
                    { desc: "Muster Roll", period: "Permanent record" },
                    { desc: "Caution order register and Caution Order books", period: "1 year" },
                    { desc: "Wagon Exchange Book/Wagon Exchange Register", period: "3 years" },
                    { desc: "Sick Wagon and Transhipment Register", period: "3 years" },
                    { desc: "Guard's Signature Book", period: "3 years" },
                    { desc: "Wagon Demand/Priority Register", period: "3 years" },
                    { desc: "Indent and Loading Register", period: "3 years" },
                    { desc: "Wagon Transfer Register", period: "3 years" },
                    { desc: "Damaged Stock Register/ Sick Wagon Register", period: "3 years" },
                    { desc: "Siding Voucher Book/Record of Time Wagon Handing over", period: "3 years" },
                    { desc: "Control Order Book/Conference Book", period: "3 years" },
                    { desc: "HQ Leaving Permission Register", period: "1 year" },
                    { desc: "Uniform Register", period: "Permanent Record" },
                    { desc: "Record of Station Equipment sent for repairs", period: "Permanent Record" },
                    { desc: "Register of Inward and Outward Letters", period: "3 years" },
                    { desc: "Register of Important Circulars", period: "Permanent Record" },
                    { desc: "Station Order Book", period: "Permanent Record" },
                    { desc: "Station Inspection Register", period: "Permanent Record" },
                    { desc: "Transportation Bio-data Register Register of Home Addresses of staff etc", period: "Permanent Record" },
                    { desc: "Spectacles Register", period: "1 year" },
                    { desc: "Station Diary and Charge Book", period: "1 year" },
                    { desc: "Unconnected Wagon Register", period: "3 years" },
                    { desc: "Load Report Register", period: "3 years" },
                    { desc: "Register showing Analysis of Late starts To Goods Trains at important Yards", period: "3 years" },
                    { desc: "Watering Register", period: "3 years" },
                    { desc: "Summary of Daily receipt and despatch of wagons and Work Done", period: "Local Orders to be issued by DRM" },
                    { desc: "Special Stock Register", period: "Local Orders to be issued by DRM" },
                    { desc: "Detention to Wagon at Train Marshalling stations", period: "Local Orders to be issued by DRM" },
                    { desc: "Register of occupation of reception lines", period: "3 years" },
                    { desc: "Detention to Trains outside signals and at adjacent stations", period: "3 years" },
                    { desc: "Marshalling Register for Inward and Outward trains", period: "Local Orders to be issued by DRM" },
                    { desc: "Register showing detailed Arrival, Placement, Despatch and Detention particulars of PU, Repack wagons, etc.", period: "Local Orders to be issued by DRM" },
                    { desc: "Register of Long Distance Goods Train run", period: "Local Orders to be issued by DRM" },
                    { desc: "Guard's and Assistant Guard Arrival Register", period: "3 years" },
                    { desc: "Register showing Detention to wagons at Break of Gauge Transhipment point", period: "3 years" },
                    { desc: "Number Taker Book", period: "3 years" },
                    { desc: "Yard Wagon Balance Register", period: "1 year" },
                    { desc: "Guard's Duty Register", period: "3 years" },
                    { desc: "Guard's Rough Journal", period: "3 years" },
                    { desc: "Register of Train Advices", period: "6 months" },
                    { desc: "Form of Train Examination advice", period: "1 year" },
                    { desc: "Register showing load of Goods Trains and Goods trains run under load", period: "3 years" },
                    { desc: "Statement of running of Passenger Trains", period: "3 years" },
                    { desc: "Diary of Yard Supervisor.", period: "Permanent Record" },
                    { desc: "Unusual Register, other registers and Records maintained in control offices and at specified stations", period: "Local Orders to be issued by DRM" }
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                      <div className="lg:col-span-1 flex items-center justify-center">
                        <span className="bg-linear-to-r from-indigo-600/60 to-purple-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg text-indigo-100 font-bold lg:text-base text-sm min-w-10">{index + 1}</span>
                      </div>
                      <div className="lg:col-span-8 flex items-center">
                        <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-light">{item.desc}</span>
                      </div>
                      <div className="lg:col-span-3 flex items-center">
                        <span className="text-indigo-200/95 lg:text-base text-sm leading-relaxed font-semibold">{item.period}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notes Section */}
                <div className="mt-8 p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-indigo-200 font-bold lg:text-xl text-lg mb-4">Note:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-300 mt-1.5 font-bold">(i)</span>
                      <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">In calculating the one year or the three years period, the year to which the books and documents relate, and the year in which they are to be destroyed should be excluded.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-300 mt-1.5 font-bold">(ii)</span>
                      <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">Record pertaining to Court Cases, departmental enquiries should not be destroyed till three years from the date the case is decided.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-300 mt-1.5 font-bold">(iii)</span>
                      <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">Record pertaining to public claims etc., or those under reference from Home or other railways, should not be destroyed without permission from DRM concerned.</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-indigo-50/95 lg:text-base text-sm leading-relaxed italic text-center">Most of these registers can be computerised, clubbed &amp; some can be eliminated</p>
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

export default WorkingOfStations