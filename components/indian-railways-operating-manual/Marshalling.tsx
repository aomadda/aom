'use client'
import { 
  Train,
  List,
  FileCheck,
  ClipboardList,
  Settings,
  AlertCircle
} from 'lucide-react'

const Marshalling = () => {
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
                      <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-7xl text-3xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl">
              MARSHALLING
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Enhanced Marshalling Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <List className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Marshalling
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Marshalling is attaching of vehicles on a train in a predetermined manner to ensure train safety, provide operational expediency and to maximize customers convenience
                </p>
              </div>
            </div>

            {/* Enhanced Marshalling of Mail/Express/Passenger Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Marshalling of Mail/Express/Passenger Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  The general principles kept in view while marshalling are
                </p>
                
                {/* I. Position of upper class coaches */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 flex items-center gap-2 flex-col">
                    <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base">
                        I
                      </span>
                    </span>
                    Position of upper class coaches, ladies compartment, dining car,in respect of easy accessibility
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Normally the dining cars or the catering compartments, air-conditioned and upper class coaches, shall be marshalled in the middle of the train or as near to it as possible and ladies compartment will be near Guard&apos;s SLR.
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    Non-passenger carrying stock shall preferably be marshalled next to the engine or in the rear of the train, defining the area for stacking, loading and unloading of parcels packages and mails on platforms.
                  </p>
                </div>

                {/* 1. The Marshalling of SLRs */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4"><span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        1
                      </span>
                    </span> The Marshalling of SLRs and Anti-Telescopic/Steel- Bodied Coaches on Passenger Carrying Trains:</h3>
                  
                  {/* (a) Marshalling of Mail and Express trains */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">(a) Marshalling of Mail and Express trains:</h4>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(i)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">In case of SLRs which have passenger portion on one side, luggage-cum-brake portion on the other, the SLR should be marshalled in such a way that the luggage and brake portion is trailing outermost or next to engine.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(ii)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">In case of new design of SLRs with Passenger portion in the middle, these can be positioned in either way.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(iii)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">In case, anti-telescopic/steel-bodied SLR is marshalled with passenger portion next to the engine or rear SLR with the passenger portion towards the end of the train&quot; the passenger portion of SLR should be locked.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(iv)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">In case of shortage of SLRs, any other suitable coaching vehicle or a VPU may be provided, and in case a coaching vehicle is attached its doors should be locked to ensure that passengers can not occupy it.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(v)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">However on the M.G., if it is not feasible to position the SLR as mentioned in Item (a)(ii) above due to coupler arrangements marshalling, as operationally convenient may be allowed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(vi)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Two anti-telescopic or steel-bodied coaches should be marshalled inside the anti-telescopic or steel-bodied SLRs at both ends.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(vii)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">After providing anti-telescopic or steel bodied SLRs for Mail/Express trains, all the available anti-telescopic or steel-bodied SLRs should be used on main line passenger trains and after meeting this requirement, the rest should be used on Branch Line Passenger trains. Anti-telescopic or steel-bodied SLRs should be marshalled in the same way as in the case of Mail/Express trains.</span>
                      </li>
                    </ul>
                  </div>

                  {/* (b) Marhsalling of Short Service trains */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">(b) Marhsalling of Short Service trains:</h4>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The Railway Board has permitted marshalling of three coaches in front and rear of the SLR on short trains, provided they have working brakes and subject to two end coaches at either side are anti-telescopic.
                    </p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      An Inspection Carriage may be attached as fourth trailer coach on such trains.
                    </p>
                  </div>

                  {/* (c) Non-Passenger Coaches */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">(c) Non-Passenger Coaches:</h4>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      VPs LRs, WLRRMs and other coaching vehicles, which do not carry passengers may be marshalled as operationally convenient. Inspection carriage, whether anti-telescopic/steel-bodied or not and occupied or being worked empty may be marshalled as operationally convenient.
                    </p>
                  </div>

                  {/* (d) Reserved Bogies and Saloons Occupied by VIP */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">(d) Reserved Bogies and Saloons Occupied by VIP:</h4>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Reserved bogies occupied by passengers and Inspection Carriages/ Saloons occupied by VIPs should be treated as a passenger coach and marshalled accordingly.
                    </p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      If they are anti-telescopic or steel-bodied they can be marshalled anywhere as operationally convenient. If they are wooden-bodied, they should be marshalled inside the required number of anti-telescopic/steel-bodied coaches.
                    </p>
                  </div>

                  {/* (e) Sectional/Through Service Coaches */}
                  <div className="mb-6">
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">(e) Sectional/Through Service Coaches:</h4>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(i)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Sectional/through service coaches, if they are anti- telescopic or steel-bodied, may be marshalled as operationally convenient.</span>
                      </li>
                    </ul>
                  </div>

                  {/* (f) POH/Sick coaches returning to Shops */}
                  <div>
                    <h4 className="text-green-300 font-semibold lg:text-xl text-lg mb-3">(f) POH/Sick coaches returning to Shops:</h4>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(i)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">In the case of POH/sick coaches, which are returned to shops for major repairs and are attached to passenger trains, such coaches should be properly locked and windows secured, so as to prevent entry of any passenger into these coaches. In that case, it is not necessary to attach these coaches according to safety marshalling instructions and can be attached next to the train engine or rearmost as convenient. If for any reason, it is not possible to lock up these coaches, such coaches should be treated like other passenger coaches in the train formation and should, therefore, be marshalled inside the required number of anti-telescopic/steel bodied coaches.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">(ii)</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">It is also desired that the above instruction on safety marshalling of passenger carrying trains should be made known to all the staff and officers concerned and these should be followed strictly.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Block Rake Composition Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Block Rake Composition
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light">
                  For block rake composition and marshalling order, &apos;Normal composition and marshalling order and rake link of passenger trains&apos; are issued by COMs of respective railways from time to time.
                </p>
              </div>
            </div>

            {/* Enhanced Mixed Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Mixed Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-5">
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Classifying a passenger carrying train as a mixed train needs authorization by COM.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    On such a train, coaching and goods stock shall normally, remain in one block (except where a deviation is permitted) and their marshalling will also be laid down by the COM.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Normally goods stock should be attached next to engine and coaching stock inside the rear brake van.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Attaching of Four Wheelers Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Attaching of Four Wheelers on Passenger, and Mixed Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base">
                        1
                      </span>
                    </span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Rules on the subject contained in GR 4.08 and in the current Working Time Table should be followed.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base">
                        2
                      </span>
                    </span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">On MG and NG the single empty or loaded 4 wheeler must not be marshalled between an engine and bogie vehicle/wagon or between two bogies /wagons.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base">
                        3
                      </span>
                    </span>
                    <span className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">However, on BG the above restrictions do not apply to match trucks along with Break Down trains and whenever under special instructions four-wheeled brake-van is attached next to engine provided that such stock is fitted with center buffer couplers.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Attaching of Vehicles outside the Rear Brakevan Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <AlertCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Attaching of Vehicles outside the Rear Brakevan
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Vehicles outside the rear Brakevan can be attached in accordance with the provision of the following SRs:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1.5 font-bold">•</span>
                    <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Attaching of vehicles in rear of Brakevan in fully vacuum train</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1.5 font-bold">•</span>
                    <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Attaching of power plant bogies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1.5 font-bold">•</span>
                    <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Attaching of damaged vehicles</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced Marshalling Chart Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <FileCheck className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Marshalling Chart for Passenger/Mixed/Goods Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Table Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6 pb-4 border-b border-white/20">
                  <div className="lg:col-span-1 text-indigo-200 font-bold lg:text-base text-sm">S.No.</div>
                  <div className="lg:col-span-5 text-indigo-200 font-bold lg:text-base text-sm">Type of Stock</div>
                  <div className="lg:col-span-6 text-indigo-200 font-bold lg:text-base text-sm">Marshalling order</div>
                </div>
                
                {/* Table Rows */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <div className="lg:col-span-1 flex items-center justify-center">
                      <span className="bg-linear-to-r from-indigo-600/60 to-purple-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg text-indigo-100 font-bold lg:text-base text-sm min-w-10">1</span>
                    </div>
                    <div className="lg:col-span-5 flex items-center">
                      <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-light">Empty coaching stock, covered motor trucks etc.</span>
                    </div>
                    <div className="lg:col-span-6 flex items-center">
                      <span className="text-indigo-200/95 lg:text-base text-sm leading-relaxed font-semibold">As operationally convenient but preferably marshalled as outermost vehicle at either end.</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <div className="lg:col-span-1 flex items-center justify-center">
                      <span className="bg-linear-to-r from-indigo-600/60 to-purple-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg text-indigo-100 font-bold lg:text-base text-sm min-w-10">2</span>
                    </div>
                    <div className="lg:col-span-5 flex items-center">
                      <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-light">Motor car etc. loaded in open wagons covered with wagon sheets.</span>
                    </div>
                    <div className="lg:col-span-6 flex items-center">
                      <span className="text-indigo-200/95 lg:text-base text-sm leading-relaxed font-semibold">In the rear of the Train either as a last vehicle or inside the rear brake van</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <div className="lg:col-span-1 flex items-center justify-center">
                      <span className="bg-linear-to-r from-indigo-600/60 to-purple-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg text-indigo-100 font-bold lg:text-base text-sm min-w-10">3</span>
                    </div>
                    <div className="lg:col-span-5 flex items-center">
                      <span className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-light">Banking Engine</span>
                    </div>
                    <div className="lg:col-span-6 flex items-center">
                      <span className="text-indigo-200/95 lg:text-base text-sm leading-relaxed font-semibold">(a) On ascending gradients in rear of train. (b) On descending grades in front. (c) Both gradients in quick succession, if any, then in front.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced ATTACHMENT OF DEAD LOCOMOTIVES Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <AlertCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  ATTACHMENT OF DEAD LOCOMOTIVES
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light mb-6 italic text-center">
                  (Railway Board&apos;s letter: 1. No.. 99/Safety(A&amp;R)/19/10 dated 10.12.2001 and 2 No.2000/M(L)/466/803 dated 1/9th March 2004)
                </p>
                
                {/* I. Conditions for attachment of dead locomotive */}
                <div className="mb-8">
                  <h3 className="text-red-200 font-bold lg:text-2xl text-xl mb-4"><span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600/60 border-2 border-white/20 shadow-lg text-red-100 font-bold text-base mb-3">
                        I
                      </span>
                    </span>Conditions for attachment of dead locomotive:-</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">i)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">Certificate for &apos;Fit to run is issued by Section Engineer/Loco Inspector/Power Controller for Passenger/Goods train.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">ii)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">Maximum permissible speed of the train shall not be less than maximum permissible speed of the dead locomotive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">iii)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">Arrangements have been made to ensure that brakes can be applied on dead locomotives in synchronization with working locomotives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">i)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">Running of double/triple headed is permissible on the section over which the dead locomotive is to be hauled.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">ii)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">When a dead electric locomotive has to be moved on a non-electrified section, special check shall be made regarding its infringement to the schedule of maximum moving dimensions. In the case of any infringement, the dead locomotive shall be treated as an ODC.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">iii)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">As a final check, the coupled locos should be run for about 500 meters and the driver shall check for any abnormal rise in the temperature of the wheels of the dead locomotive and shall also check it at subsequent stops during the journey.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">iv)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">In addition to freight/passenger trains, a dead locomotive can also be attached to Mail/Express trains including Superfast trains but excluding Rajdhani and Shatabdi if the locomotive brakes including proportionate brakes are operational and maximum permissible speed of the locomotive is not less than the booked speed of the train in which it is being attached. Locos with inoperative brakes can be attached subject to the brake power of the train being within the permissible limits. Locomotive with defects in undergear equipment can be attached only in freight trains.</span>
                    </li>
                  </ul>
                </div>

                {/* II. Attaching/hauling of dead locomotives by Mail/Express/Super fast/Passenger trains */}
                <div className="mb-8">
                  <h3 className="text-red-200 font-bold lg:text-2xl text-xl mb-4 text-center"><span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600/60 border-2 border-white/20 shadow-lg text-red-100 font-bold text-base mb-3">
                        II
                      </span>
                    </span>Attaching/hauling of dead locomotives by Mail/Express/Super fast/Passenger trains: -</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">i)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">Only one dead locomotive (diesel/electric) can be attached.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">ii)</span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">Brake power of the train should be 100% excluding dead locomotive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-300 mt-1.5 font-bold">i)</span>
                      <div className="flex-1">
                        <span className="text-red-50/95 lg:text-base text-sm leading-relaxed">As far as possible, brake should work on dead locomotive. However, if it is not possible, then in the case of air-braked train, brake pipe and feed pipe of working locomotive shall be connected to brake pipe and feed pipe of trailing stock and dead locomotive will work as piped vehicle.</span>
                        <p className="text-red-50/95 lg:text-base text-sm leading-relaxed mt-2">In the case of vacuum braked train, vacuum pipe of locomotive shall be connected with vacuum train pipe of trailing stock and the dead locomotive shall be treated as a piped vehicle. If the locomotive is fitted with pure air braked system and vacuum pipe is not provided on locomotive then it should be attached with air braked trains only.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* III. Attaching/Hauling of dead locomotives by goods trains */}
                <div className="mb-8">
                  <h3 className="text-red-200 font-bold lg:text-2xl text-xl mb-4 text-center"><span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600/60 border-2 border-white/20 shadow-lg text-red-100 font-bold text-base mb-3">
                        III
                      </span>
                    </span>Attaching/Hauling of dead locomotives by goods trains:</h3>
                  <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                    Movement of maximum three locomotives (2 working+1 dead) with load is permissible subject to observations of all restrictions on operation of double/triple headed working locomotives in the section provided that brakes in dead locomotives are operational.
                  </p>
                  <p className="text-red-50/95 lg:text-base text-sm leading-relaxed mt-4">
                    The above instructions should be strictly followed and it is, therefore, advised that these guidelines be supplemented in the respective Subsidiary Rules also.
                  </p>
                </div>

                {/* IV. Escorting of dead Locomotives */}
                <div>
                  <h3 className="text-red-200 font-bold lg:text-2xl text-xl mb-4"><span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600/60 border-2 border-white/20 shadow-lg text-red-100 font-bold text-base mb-3">
                        IV
                      </span>
                    </span>Escorting of dead Locomotives:-</h3>
                  <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                    Escorting of locomotives (diesel as well as electric) attached to freight and passenger carrying trains is not necessary if the brakes including proportionate are fully operational and the dead locomotive is attached next to the train engine. The dead locomotive will continue to be escorted if attached in the rear of brake van or has defect in undergear equipment.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Medical Relief Van Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <AlertCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Medical Relief Van
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light text-center">
                  Can be run without brake van (Local SR should be followed for Ghat Section)
                </p>
              </div>
            </div>

            {/* Enhanced Inspection Carriages attached to Light Engine Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Inspection Carriages attached to Light Engine
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light text-center">
                  Maximum three inspection carriages occupied by the officers can be attached. In case more than 3 Inspection carriages are attached, rules regarding running of goods trains without brake van will apply.
                </p>
              </div>
            </div>

            {/* Enhanced Attaching of Travelling Cranes Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Attaching of Travelling Cranes
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light text-center">
                  Provisions of G&amp;SR 4.27 should be followed.
                </p>
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

export default Marshalling
