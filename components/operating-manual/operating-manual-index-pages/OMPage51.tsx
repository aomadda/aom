'use client'
import React from 'react'
import { 
  Train, 
  Package, 
  Settings, 
  Route, 
  Clock, 
  BarChart3, 
  MapPin,
  Gauge,
  AlertTriangle,
  FileText,
  Truck,
  Building2,
  Wrench,
  Target,
  MoveHorizontal
} from 'lucide-react'

const OMPage51 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              FREIGHT OPERATIONS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Complexity in Freight Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Understanding the dynamic nature of freight operations, loading processes, 
              and operational challenges in railway freight transportation.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Complexity in Freight Operations */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Complexity in Freight Operations
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Unlike Passenger Train operations which are time tabled & scheduled, freight
                  operations are dynamic and require constant intervention in all stages viz.,
                  examination, empty run to loading point, loading, loaded run to unloading point,
                  unloading.
                </p>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  At each of the above stages, the operations are prone to variations like
                  number of sick arising in examination; change in demand by customers; factors
                  affecting loading operations and so on.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Competing Commodities
                    </h4>
                    <p className="text-sm text-gray-200">
                      Some wagons have competing commodities and demands. For example,
                      BOXN wagons are loaded with coal, clinker etc. When coal demand goes up and
                      there is a power shortage in the country, supply for coal is prioritized and clinker
                      loading gets affected.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-5 h-5 mr-2" />
                      Power Balancing
                    </h4>
                    <p className="text-sm text-gray-200">
                      As loaded freight trains require higher hauling power than empty trains, 
                      there arises a continuous need for power balancing. Hence, sometimes freight 
                      trains are over powered and sometimes under powered requiring banking.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h5 className="font-semibold text-orange-200 mb-2 flex items-center flex-col gap-2 text-center">
                    <Package className="w-4 h-4 mr-2" />
                    Multi-Purpose Wagons
                  </h5>
                  <p className="text-sm text-gray-200">
                    Similar is the case for BCN, which can carry food grains, bagged cement and 
                    variety of other commodities.
                  </p>
                </div>
              </div>
            </div>

            {/* Loading Process */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Package className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Loading Process
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                
                <div className="space-y-6">
                  {/* Registration Process */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Registration Process
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      A customer wanting to dispatch goods by railway has to register an indent furnishing
                      particulars of commodity; type of wagon required and destination terminal by paying
                      the required Wagon demand registration fee (WDRF).
                    </p>
                    <p className="text-sm text-gray-200">
                      Empties are supplied duly checking for restrictions / quota allotment on the day of supply. 
                      Allotment / loading orders are issued in accordance with the priority of registration as per preferential traffic order.
                    </p>
                  </div>

                  {/* Loading Orders */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Loading Orders
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Loading order given by the SrDOM is called as Specific Loading Order (SLO).
                    </p>
                    <p className="text-sm text-gray-200">
                      Freight charges as prescribed in IRCA Goods Tariff Part-1 & 2 of Vol.II are
                      collected duly issuing an RR.
                    </p>
                  </div>

                  {/* Commodity Classification */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Commodity Classification
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      All commodities transported by freight trains are grouped in four classes &apos;A&apos;, &apos;B&apos; &apos;C&apos; & &apos;D&apos; 
                      for assigning priority in allotment of wagons.
                    </p>
                    <p className="text-sm text-gray-200">
                      Apart from the priority SrDOM may give preference for traffic offered in block rakes,
                      traffic covered by contractual obligations and/or guaranteed under specific Schemes,
                      traffic in rakes loaded from a Siding/Goods shed of the station having round the
                      clock working and having mechanized system of loading.
                    </p>
                  </div>

                  {/* Quotas and Restrictions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h5 className="font-semibold text-green-200 mb-3 flex items-center flex-col gap-2 text-center">
                        <Target className="w-4 h-4 mr-2" />
                        Quotas
                      </h5>
                                          <p className="text-sm text-gray-200">
                      In order to regulate the inflow of wagons into areas where facilities are not
                      available to handle the sufficient incoming traffic, &apos;quotas&apos; are fixed for loading of
                      wagons to such areas.
                    </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h5 className="font-semibold text-emerald-200 mb-3 flex items-center flex-col gap-2 text-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Restrictions
                      </h5>
                      <p className="text-sm text-gray-200">
                        In order to avoid detentions to wagons, whenever unusual occurrence
                        like accident, labour strike, mechanical failures etc. occur, restriction messages are
                        issued by operating department restricting the movement of goods traffic to a
                        particular terminal or station or via a junction or route.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loaded Train Running */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Loaded Train Running
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  After loading, the loaded trains are run towards its destination, through the &apos;booked
                  route&apos;. The booked route is usually the shortest route except in few cases, where the
                  freight is paid for a longer route by the customer for various reasons.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Rationalized Routes
                  </h4>
                  <p className="text-sm text-gray-200">
                    In order to keep the fare for customer not get affected due to operational constraints in the
                    railway network, in few routes authorized by Railway Board, trains are run via a
                    longer other than booked route. Such routes are called rationalized routes.
                  </p>
                </div>
              </div>
            </div>

            {/* Unloading Process */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Truck className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Unloading Process
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  On reaching the destination, the customer is required to unload the goods from the
                  wagons within a stipulated time, beyond which demurrage charges for detention of
                  stock will be levied.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Time Constraints
                  </h4>
                  <p className="text-sm text-gray-200">
                    The unloaded material in the railway premises is required to be
                    cleared within a stipulated time, beyond which wharfage charges for material
                    available are levied.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Route className="w-5 h-5 mr-2" />
                      Rebooking
                    </h4>
                    <p className="text-sm text-gray-200">
                      Booking of a consignment after reaching the original destination, without
                      taking delivery, to any other station, is known as rebooking.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <MoveHorizontal className="w-5 h-5 mr-2" />
                      Diversion
                    </h4>
                    <p className="text-sm text-gray-200">
                      Diversion means diverting a loaded wagon or rake from a common
                      junction to a new destination. PCOM of the zone in which wagons are physically
                      available is empowered to grant permission for diversion of the wagons / rake.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Delivery Short of Destination
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Delivery of goods short of destination is also treated as Diversion. In case of delivery short of destination, 
                    the party should give an undertaking in writing that he will not claim any refund of freight charges for the
                    portion of the journey not covered by the wagon. In this case, diversion fees need not be collected.
                  </p>
                  <p className="text-sm text-gray-200">
                    The party should affect book delivery, by surrendering the railway receipt and paying
                    all the charges due at the original destination and effect physical delivery of the
                                         consignment at short of destination by surrendering a &quot;No-due&quot; certificate issued by
                     the original destination.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Building2 className="w-5 h-5 mr-2" />
                                         Railway&apos;s Account Operations
                  </h4>
                  <p className="text-sm text-gray-200">
                    The railway administration with the consent of the consignee/consignor may permit
                    rebooking/diversion/delivery short of destination of consignments to nearby
                    alternative station for delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Empty Running */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Empty Running
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  In an ideal condition, all freight train runs can be in loaded conditions. But practically
                  empty running happens as there is not always a demand in return direction.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Special Type Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      Certain special type of wagons for POL, Steel, Coal, Natural Gas, Ammonia, LPG etc. have
                      to be generally run empty back to the loading points.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      Operating Acumen
                    </h4>
                    <p className="text-sm text-gray-200">
                      Avoiding or reducing the extent of empty haulage and cross movements of similar type of empty stock requires
                      operating acumen strengthened by advance information, close liaison with
                      customers and some freight incentive schemes.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Empty Wagon Management
                  </h4>
                  <p className="text-sm text-gray-200">
                    Empty wagons are run to loading points with demand or examination points as per their condition.
                  </p>
                </div>
              </div>
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

export default OMPage51