'use client'
import { 
  Package,
  Ruler,
  List,
  FileCheck,
  Zap,
  Train
} from 'lucide-react'

const OverDimensionalConsignment = () => {
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

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              MOVEMENT OF OVER DIMENSIONAL AND OTHER BULKY CONSIGNMENTS
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Definition Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileCheck className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Definition
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Consignments, which when loaded upon a wagon, would infringe the maximum standard moving dimension, at any point, on the entire route, from the booking station to the destination, including via break of gauge is called an Over Dimensional Consignment (ODC).
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Therefore, any consignment exceeding the dimension quoted below shall not be registered for booking unless prior sanction for its acceptance has been obtained from the Zonal headquarters.
                </p>
              </div>
            </div>

            {/* Maximum Moving Dimensions Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Ruler className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Maximum Moving Dimensions from rail level (at any point)
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-green-400/30">
                        <th className="text-green-200 font-bold lg:text-base text-sm p-3 text-left">Gauge</th>
                        <th className="text-green-200 font-bold lg:text-base text-sm p-3 text-left">Description</th>
                        <th className="text-green-200 font-bold lg:text-base text-sm p-3 text-left">BG (MM)</th>
                        <th className="text-green-200 font-bold lg:text-base text-sm p-3 text-left">MG (MM)</th>
                        <th className="text-green-200 font-bold lg:text-base text-sm p-3 text-left">NG (762 MM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-400/20">
                        <td className="text-green-50/95 lg:text-base text-sm p-3" rowSpan={2}>-</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">Height at Centre</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">4115</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">3430</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">3200</td>
                      </tr>
                      <tr className="border-b border-green-400/20">
                        <td className="text-green-50/95 lg:text-base text-sm p-3">Height at sides</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">3505</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">3200</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">2895</td>
                      </tr>
                      <tr className="border-b border-green-400/20">
                        <td className="text-green-50/95 lg:text-base text-sm p-3">-</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">Maximum Width</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">3050 for Bogie Wagon<br />3200 for 4 wheeled Wagon</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">2590</td>
                        <td className="text-green-50/95 lg:text-base text-sm p-3">2286</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    <span className="font-semibold text-green-200">Note:</span> (i) Above mentioned dimensions includes lashing and packing.
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    (ii) When a dummy truck is used, the maximum weight that may be loaded, in any wagon or truck is distinctly marked on each vehicle and must not be exceeded.
                  </p>
                </div>
              </div>
            </div>

            {/* Classification of ODC consignment Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <List className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Classification of ODC consignment
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  ODCs are divided into 3 classes according to the minimum clearance available between the consignment and minimum fixed structure profile.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">Class &apos;A&apos;:</span> Those ODC loads, which has a gross clearance of 22.86 cm (9 inches) and above.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">Class &apos;B&apos;:</span> Those ODC loads, which has a gross clearance of 15.24 cm (6 inches) and above, but less than 22.86 cm (9 inches),
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-purple-200">Class &apos;C&apos;:</span> Those ODC loads, which has a gross clearance of less than 15.24 cm (6 inches) but not less than 10.16 cm (4 inches).
                    </p>
                  </div>
                </div>
                
                {/* Classification Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-purple-400/30">
                        <th className="text-purple-200 font-bold lg:text-base text-sm p-3 text-left">Class</th>
                        <th className="text-purple-200 font-bold lg:text-base text-sm p-3 text-left">Sanctioning Authority</th>
                        <th className="text-purple-200 font-bold lg:text-base text-sm p-3 text-left">Maximum Permissible Sanctioned Speed</th>
                        <th className="text-purple-200 font-bold lg:text-base text-sm p-3 text-left">Movement During Day or Night</th>
                        <th className="text-purple-200 font-bold lg:text-base text-sm p-3 text-left">Required to be escorted by</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-purple-400/20">
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">A</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">Within Division : DRM<br />Inter Division of the same zone COM<br />Inter Rly.: COM of the Zone and COM of concerned Railway.</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">Sectional speed</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">Day & Night</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">--</td>
                      </tr>
                      <tr className="border-b border-purple-400/20">
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">B</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">Local : DRM<br />Inter Div/fgn.Rly.: COM</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">BG-40 KMPH<br />MG-25 KMPH<br />NG-15 KMPH</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">Day & Night</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">TXR</td>
                      </tr>
                      <tr>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">C</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">CRS</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">BG-25 KMPH<br />MG-25 KMPH<br />NG-15 KMPH</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">Day</td>
                        <td className="text-purple-50/95 lg:text-base text-sm p-3">SE (C&W)<br />SE(P.Way)<br />TI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Net Clearance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Ruler className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Net Clearance
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  The net clearance shall be worked out as under: The net clearance between the consignment as loaded in the train and any fixed structure should be calculated after making an allowance of 75 mm (3 inches) for lurch (horizontal) and 7.62 cm (3 inches) bounce (vertical) on the straight together with following additional factors applicable only when the structure in question is situated on a curve.
                </p>
                
                {/* Horizontal Clearance */}
                <div className="mb-6">
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">1. Horizontal Clearance:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        <span className="font-semibold text-indigo-200">(a)</span> Allowance for lean due to super-elevation and over hang due to curvature.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        The lean should be calculated for that point on the profile of the load which is likely to have the smallest clearance from fixed structure the formula being :- HC/G
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        where H = height in feet to the point being considered.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        C = Super elevation
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        G = gauge.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        For the central overhang due to curvature, the formula will be:- B²/8R
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        where B = distance between bogie centre
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        R = Radius of curve.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 ml-4">
                        In cases where the overhang at the end of a vehicle may have to be calculated by the formula will be: - (L²-B²)/8R
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed ml-4">
                        where L is the length of the vehicle.
                      </p>
                    </div>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold text-indigo-200">(b)</span> Additional lurch on curves may be taken 38 mm.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical clearance */}
                <div>
                  <h3 className="text-indigo-200 font-bold lg:text-2xl text-xl mb-4">Vertical clearance:</h3>
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                    In case where the top width of the consignment exceeds the gauge of the track the vertical tilt should be added to the height of consignment to work out the vertical clearance from the fixed structure.
                  </p>
                </div>
              </div>
            </div>

            {/* Procedure for sanctioning movement of ODC Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileCheck className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Procedure for sanctioning movement of ODC
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  When ODC consignment is offered at a station for booking SS/SM will verify if the consignment exceeds the maximum moving dimension from originating station to destination station including via. and break of gauge, if involved. He should apply to the Sr.DOM, who will obtain the necessary sanction of the competent authority.
                </p>
                <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  An application must show the length, width, height, and weight of the load accompanied by a sketch in duplicate of the consignment.
                </p>
                <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  In communicating sanction for the movement of ODC, specific route, through which the particular consignment will move, should be indicated, and it will be the responsibility of the SS/SM of the station from which the load originates.
                </p>
                <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed font-light">
                  In addition to strictly adhering to the specific route, the restrictions (eg. speed restrictions, night running restrictions, platform restrictions etc.) notified for conveyance of the consignment over the route, must be adhered to, and no relaxation in this regard is permitted.
                </p>
              </div>
            </div>

            {/* Loading Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Package className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Loading
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  On receipt of the sanction, the consignment should be loaded carefully, lashed and packed properly, so as to avoid any change of shifting enroute.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  While examining the wagon loaded, the SE(C&W) must pay attention on the following:
                </p>
                <ul className="ml-6 space-y-2 mb-6">
                  <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">Load is well secured;</li>
                  <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">Load is within the C.C. of the wagon;</li>
                  <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">Weight on any pair of wheels does not exceed;</li>
                  <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">Axle load restriction, if any;</li>
                  <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">Under gear of the wagon.</li>
                </ul>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  After loading the consignment, Sr. SE(C&W) will register the measurement and advise the SS/SM concerned of the various overall dimensions, including the packing and lashing etc., as loaded in truck.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  SE(C&W) must issue &quot;fit to run&quot; certificate to the effect that the loaded wagon concerned is safe to run via the particular route specified.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  SS/SM will inform, then to Sr.DOM/DOM and office of the COM, followed by a confirmation copy, to be sent to COM.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  The Operating Branch will arrange to advise the COM of the other Rlys. concerned, with full dimensions of the consignment, as loaded in the truck for issue of necessary final sanction for movement.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  Under any circumstance, provisional sanction must not be treated as final sanction and final sanction must invariably be awaited before consignment is despatched.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light mb-4">
                  SS/SM/YS/YM concerned must furnish full particulars of the wagon to the Control, such as Wagon No., Owning Rly., Type of Wagon, Station from and to, route over which it is required to move etc. After this, Control/Divisional office will give necessary permission to the concerned staff to despatch the wagon by a particular train on date advise and obtain their acknowledgement.
                </p>
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light">
                  A Caution Order will be given to the Guard and Loco pilot of the train carrying ODC to restrict the speed and observe any other speed restriction at any other point or other precautions as laid down.
                </p>
              </div>
            </div>

            {/* On Electrified Sections Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Zap className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  On Electrified Sections
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed font-light">
                    <span className="font-semibold text-yellow-200">a)</span> In addition to the precautions laid down above, the following special precautions must be observed for transport of over- dimensional loads on the electrified section:
                  </p>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed font-light">
                    <span className="font-semibold text-yellow-200">b)</span> In all cases, where oversize consignment is moving, it should be remembered by all staff accompanying the ODC, that the overhead electrical equipment is always &apos;LIVE&apos;, except when a particular power block has been obtained from the Traction Power Controller. Even when a power block has been obtained, it should be remembered that all the lines, other than those for which the power block has been granted, are &apos;LIVE&apos; at 25000 Volts.
                  </p>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed font-light">
                    <span className="font-semibold text-yellow-200">c)</span> No person should climb on the roof of carriages of wagons, when those vehicles are located beneath the overhead equipment, except when the equipment is made &apos;DEAD&apos; and earthed.
                  </p>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed font-light">
                    <span className="font-semibold text-yellow-200">d)</span> The following are the prescribed clearance from contact wires for the passage of over-dimensional loads through electrified traction areas and the special restrictions required:
                  </p>
                  <ul className="ml-2 space-y-2">
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">e)</span> Special speed restriction is not required when the gross clearance is at least 390 mm.
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">f)</span> Speed must be restricted to 15 kmph, when the gross clearance is in between 390 mm to 340 mm.
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">g)</span> Speed must be restricted to 15 kmph and over head power must be switched off when the gross clearance is less than 340 mm
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">h)</span> No consignment with less than 100 mm gross clearance from the over head contact wire will be permitted over electrified section.
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">i)</span> A representative of the Traction Department should also accompany all ODC having clearance as specified in item (b) and (c) of sub para (3) above, over electrified section.
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">j)</span> A representative of the Traction Department should accompany all ODC loads having width of more than 1981 mm for BG and 1910 mm for MG from the centre line of the track.
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">k)</span> Section Controllers and Traction Power Controller must co-ordinate, while an ODC moves on electrified area.
                    </li>
                    <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="text-yellow-300">l)</span> A list of structures, where the clearances are restricted on the electric traction area and also the clearance available under overbridges should be with the Section Controllers and Traction Power Controllers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Despatch of ODCs Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Despatch of ODCs
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">At the originating station the ODC wagon will be moved when final approval has been obtained from the competent authority.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">At the originating point the number of wagon/wagons carrying ODC should be entered by the Train Clerk/SM in the vehicle guidance in red ink to be handed over to the Guard of the train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">3</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">SS/SM should advise the Section Controller on duty, before starting the train and while asking line clear, describe the train number with letter &apos;X&apos; suffixed on it.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">4</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">It will be the duty of the Dy. Chief Controller to keep adjoining Control Office informed about the movement of such ODC, till such time, it is handed over to the adjoining division by specified train. Also ensure that the consignment is moved strictly by the authorised route.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">5</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Shunting of train with an ODC should be avoided. Loose and rough shunting of ODC wagon and against such wagon is prohibited.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">6</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">When any ODC wagon is detached from the train at any station, SM and Guard are responsible to ensure safe placement and securing of wagon/load.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">7</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Facility for accompanying staff for extra wagon/brake van should be provided if so required.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-purple-600/60 to-pink-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-purple-100 font-bold lg:text-lg text-base">8</span>
                    <span className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">When a load is so long that it cannot be accommodated in two trucks (i.e. two 8 wheelers), it must be loaded in three trucks so that the entire weight is carried on the centre vehicle and the end trucks are idlers. The load must be placed on packing in the centre truck, so that it is clear of the floor of the end trucks by not less 152 mm and there must not be less than 304 mm up side clearance in the end trucks between each of load and side of truck. If the weight of the load is such that it cannot be carried on the centre truck, then the load must be carried as equally as possible on the trucks and the centre vehicle must be an idler.</span>
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

export default OverDimensionalConsignment
