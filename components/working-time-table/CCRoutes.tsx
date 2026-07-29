"use client"
import React from 'react'

const CCRoutes = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-linear-to-r from-green-500/20 to-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-green-500 to-blue-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent mb-6 animate-fade-in">
               CC+8+2t Routes
            </h1>
            <h2 className="lg:text-4xl text-xl font-lg text-cyan-300 mb-4">South Central Railway as on 31-03-2024</h2>
            <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          </div>
          
          {/* Container Carrying Routes Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-4 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Container Carrying Routes
            </h2>
            <p className="lg:text-lg text-md text-gray-200 mb-6 text-center">
              As per CTE/SC&rsquo;s Lr No. W.506/CRS/TR/CC+6+2t/Vol.IV, dated 23.05.2024
            </p>
            
            <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
              <h3 className="lg:text-3xl text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-4 h-4 bg-linear-to-br from-blue-500 to-indigo-500 rounded-full lg:mr-3 mr-2 lg:w-6 lg:h-6 animate-pulse"></span>
                Route Statistics
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-linear-to-br from-blue-600/30 to-blue-700/30 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 border border-blue-400/30">
                  <p className="lg:text-4xl text-xl font-bold text-blue-300 mb-2">5567.914</p>
                  <p className="lg:text-lg text-md text-blue-200">Total CC+8+2t Route Km</p>
                </div>
                <div className="bg-linear-to-br from-green-600/30 to-green-700/30 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 border border-green-400/30">
                  <p className="lg:text-4xl text-xl font-bold text-green-300 mb-2">6532.475</p>
                  <p className="lg:text-lg text-md text-green-200">Total Route Km of S.C.Railway</p>
                </div>
                <div className="bg-linear-to-br from-purple-600/30 to-purple-700/30 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 border border-purple-400/30">
                  <p className="lg:text-4xl text-xl font-bold text-purple-300 mb-2">85.23%</p>
                  <p className="lg:text-lg text-md text-purple-200">Percentage of CC+8+2t Route</p>
                </div>
              </div>
            </div>
          </div>

          {/* CC+8+2t Routes */}
          <div className="mb-12">
            <h3 className="lg:text-4xl text-2xl font-bold text-white mb-8 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              CC+8+2t Routes List
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { sl: 1, section: "Bellary - Guntakal", date: "15.05.05", length: "46.20", speed: "60" },
                { sl: 2, section: "Guntakal-Renigunta", date: "15.05.05", length: "309.50", speed: "60" },
                { sl: 3, section: "Guntakal-Guntur", date: "06.02.06", length: "401.28", speed: "60" },
                { sl: 4, section: "Guntur-Krishna canal Jn.", date: "06.02.06", length: "27.12", speed: "60" },
                { sl: 5, section: "Krishna canal Jn.-Vijayawada", date: "06.02.06", length: "5.05", speed: "60" },
                { sl: 6, section: "Vijayawada-Samalkot", date: "06.02.06", length: "199.57", speed: "60" },
                { sl: 7, section: "Visakhapatnam – Samalkot (incl By pass line Duvvada)", date: "11.07.07", length: "131.37", speed: "60" },
                { sl: 8, section: "Samalkot-Kakinada Port", date: "06.02.06", length: "15.60", speed: "60" },
                { sl: 9, section: "Vijayawada - Kondapalli Power House", date: "11.07.07", length: "17.49", speed: "60" },
                { sl: 10, section: "Dornakal - Kondapalli incl. Siding", date: "30.11.07", length: "107.69", speed: "60" },
                { sl: 11, section: "Manikgarh - Dornakal", date: "31.12.07", length: "319.41", speed: "60" },
                { sl: 12, section: "Manikgarh - Ballarshah", date: "31.12.07", length: "6.91", speed: "60" },
                { sl: 13, section: "Manuguru- Bhadrachalam Rd incl Siding", date: "30.11.07", length: "51.10", speed: "60" },
                { sl: 14, section: "Bhadrachalam Rd - Dornakal incl. Siding", date: "30.11.07", length: "56.01", speed: "60" },
                { sl: 15, section: "Komatpalli (incl Kazipet bypass)-Kazipet - SC -(incl by pass ) -WADI", date: "31.12.07", length: "327.75", speed: "60" },
                { sl: 16, section: "Vijayawada - Gudur", date: "31.12.07", length: "294.46", speed: "60" },
                { sl: 17, section: "Pendekallu - Gooty - Dharmavaram - Bangalore Area", date: "31.12.07", length: "119.88", speed: "60" },
                { sl: 18, section: "Secunderabad - Manmad", date: "31.12.07", length: "617.40", speed: "60" },
                { sl: 19, section: "Vikarabad - Parbhani", date: "31.12.07", length: "331.38", speed: "60" },
                { sl: 20, section: "Wadi - Raichur - Guntakal", date: "17.04.08", length: "226.44", speed: "60" },
                { sl: 21, section: "Motumari - Jagayapet Town branch line", date: "17.04.08", length: "25.82", speed: "60" },
                { sl: 22, section: "Renigunta - Gudur Jn", date: "17.04.08", length: "83.17", speed: "60" },
                { sl: 23, section: "Renigunta - Tirupati", date: "17.3.16", length: "9.79", speed: "60" },
                { sl: 24, section: "Guntur Jn - Tenali Jn", date: "17.04.08", length: "25.47", speed: "60" },
                { sl: 25, section: "Singreni Collieries- Karepalli Branch line", date: "17.04.08", length: "10.36", speed: "30" },
                { sl: 26, section: "Gadchandur - Manikgarh Jn Branch line (inc. Bye-Pass Line)", date: "17.04.08", length: "31.51", speed: "60" },
                { sl: 27, section: "Guntakal-Kalluru", date: "20.07.10", length: "40.26", speed: "60" },
                { sl: 28, section: "Adilabad-Mudkhed", date: "20.07.10", length: "161.95", speed: "60" },
                { sl: 29, section: "Pimpalkutti-Adilabad", date: "20.07.10", length: "20.40", speed: "60" },
                { sl: 30, section: "Purna-Akola", date: "25.06.11", length: "206.88", speed: "60" },
                { sl: 31, section: "Venkatachalam-Krishnapatnam", date: "25.06.11", length: "20.28", speed: "60" },
                { sl: 32, section: "Peddapalli-Karimnagar", date: "02.03.15", length: "34.93", speed: "60" },
                { sl: 33, section: "Malkajgiri - Moula-Ali &apos;B&apos; Cabin Chord Line", date: "17.3.16", length: "4.90", speed: "20" },
                { sl: 34, section: "Katpadi - Tirupati", date: "17.3.16", length: "103.59", speed: "60" },
                { sl: "35a", section: "Karimnagar-Lingampet Jagityal", date: "16.2.18", length: "47.83", speed: "60" },
                { sl: "35b", section: "LingampetJagityal-Mortad-Nizamabad", date: "16.2.18", length: "95.05", speed: "60" },
                { sl: 36, section: "Nallapadu-Nadikude", date: "8.12.18", length: "90.25", speed: "60" },
                { sl: 37, section: "Pagidipalli-Nadikude", date: "8.12.18", length: "148.67", speed: "60" },
                { sl: 38, section: "Vijayawada-Gudivada-Bhimavaram-Nidadavolu (incl. Bye-Pass)", date: "16.5.19", length: "155.76", speed: "60" },
                { sl: 39, section: "Gudivada-Machilipatnam", date: "16.5.19", length: "36.74", speed: "60" },
                { sl: 40, section: "Bhimavaram-Narasapur", date: "16.5.19", length: "29.48", speed: "60" },
                { sl: 41, section: "Obulavaripalle-Venkatachalam Rd.Jn.", date: "4.7.19", length: "95.40", speed: "60" },
                { sl: 42, section: "Janakampet-Bodhan", date: "11.11.19", length: "20.05", speed: "50" },
                { sl: 43, section: "Jaggayyapeta Town – Janpahad-Vishnupuram", date: "11.11.19", length: "62.99", speed: "40" },
                { sl: 44, section: "Bhadrachalam Road(excl.) – Bhavanapalem (SL)", date: "27.05.22", length: "37.567", speed: "50" },
                { sl: 45, section: "Bhavanapalem (excl.) – Sattupalli (SL)", date: "27.05.22", length: "13.949", speed: "40" },
                { sl: 46, section: "Akanapet-Medak", date: "08.07.22", length: "17.338", speed: "40" },
                { sl: 47, section: "Devarakadra – Krishna (SL)", date: "", length: "65.825", speed: "60" },
                { sl: 48, section: "Manoharabad – Siddipet (SL)", date: "", length: "76.135", speed: "60" },
                { sl: 49, section: "New Piduguralla Jn.–Savalyapuram(SL)", date: "", length: "45.85", speed: "60" },
                { sl: 50, section: "Secunderabad-Falaknuma-Mahaboobnagar(DN)", date: "", length: "112.98", speed: "60" },
                { sl: 51, section: "Mahaboobnagar-Devarakadra (SL)", date: "", length: "24.4", speed: "30" },
                { sl: 52, section: "Bye pass at Secunderabad (Sitaphalmandi-Lallaguda Gate)", date: "", length: "0.74", speed: "20" }
              ].map((route, index) => (
                <div key={index} className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="bg-linear-to-r from-green-600 to-blue-600 text-white py-4 px-6">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xl">#{route.sl}</span>
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-semibold">
                        {route.speed} kmph
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-white mb-4 text-base leading-tight">
                      {route.section}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Date:</span>
                        <span className="font-medium text-white">{route.date || "N/A"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Length:</span>
                        <span className="font-bold text-green-400 text-lg">{route.length} km</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CC+6+2t Routes */}
          <div className="mb-12">
            <h3 className="lg:text-4xl text-xl font-bold text-white mb-8 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              CC+6+2t Routes
            </h3>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl px-2 py-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="lg:text-3xl text-xl font-semibold text-blue-300 mb-8 text-center">CC+6+2t Routes on South Central Railway as on 31-03-2024</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { sl: 1, route: "Khanapur-Taj Sultanpur (SL)", divn: "SC", length: "97.7" },
                  { sl: 2, route: "Telapur-Ramachandrapuram (SL)", divn: "SC", length: "5.337" },
                  { sl: 3, route: "Kakinada – Kothapalli (SL)", divn: "BZA", length: "45.2" },
                  { sl: 4, route: "Dharmavaram-Pakala", divn: "GTL", length: "227.42" },
                  { sl: 5, route: "Kadapa-Pendlimarri (SL)", divn: "GTL", length: "21.3" },
                  { sl: 6, route: "Nadikude-Macherla (SL)", divn: "GNT", length: "35.01" },
                  { sl: 7, route: "Tenali-Repalle (SL)", divn: "GNT", length: "33.85" },
                  { sl: 8, route: "Gundlakamma-Darsi (SL)", divn: "GNT", length: "22.889" },
                  { sl: 9, route: "Nandyal-Yerraguntla (SL)", divn: "GNT", length: "123" },
                  { sl: 10, route: "Secunderabad-Mahabubnagar (UP line)", divn: "HYB", length: "112.98" },
                  { sl: 11, route: "Devarakadra – Dhone (SL)", divn: "HYB", length: "159.71" },
                  { sl: 12, route: "Raichur-Gadwal (SL)", divn: "HYB", length: "57.16" },
                  { sl: 13, route: "Akola-Akot (SL)", divn: "NED", length: "45.54" },
                  { sl: 14, route: "Khandwa (Excl.)-Amlakhurd (SL)", divn: "NED", length: "53.447" }
                ].map((route, index) => (
                  <div key={index} className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 border border-blue-400/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg">
                        #{route.sl}
                      </span>
                      <span className="bg-blue-400/30 backdrop-blur-sm text-blue-200 px-3 py-2 rounded-lg text-xs font-semibold border border-blue-400/50">
                        {route.divn}
                      </span>
                    </div>
                    <h5 className="font-semibold text-white mb-4 text-base leading-tight">
                      {route.route}
                    </h5>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Length:</span>
                      <span className="font-bold text-blue-300 text-lg">{route.length} km</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total for C+6+2t */}
              <div className="mt-8 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 text-center shadow-2xl border border-blue-400/30">
                <h4 className="lg:text-3xl text-xl font-bold mb-3">CC+6+2t Routes Summary</h4>
                <p className="lg:text-5xl text-xl font-bold mb-2">1040.543 km</p>
                <p className="lg:text-lg text-md text-blue-200">Total Route Length</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl px-2 py-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="lg:text-3xl text-xl font-bold text-white mb-8 text-center flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-yellow-500 lg:p-4 p-3 rounded-full lg:mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Route Summary
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="lg:text-2xl text-xl font-bold text-green-300 mb-6 flex items-center">
                  CC+8+2t Routes
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Total Routes:</span>
                    <span className="font-bold text-green-400 text-xl">52</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Total Length:</span>
                    <span className="font-bold text-green-400 text-xl">5567.914 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Coverage:</span>
                    <span className="font-bold text-green-400 text-xl">85.23%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h4 className="lg:text-2xl text-xl font-bold text-blue-300 mb-6 flex items-center">
                  CC+6+2t Routes
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Total Routes:</span>
                    <span className="font-bold text-blue-400 text-xl">14</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Total Length:</span>
                    <span className="font-bold text-blue-400 text-xl">1040.543 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Divisions:</span>
                    <span className="font-bold text-blue-400 text-xl">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="bg-linear-to-r from-green-600 to-blue-600 text-white rounded-2xl shadow-2xl p-3 border border-green-400/30">
            <h3 className="lg:text-3xl text-xl font-bold mb-4 text-center">Container Carrying Network</h3>
            <p className="lg:text-lg text-md mb-4 text-green-100">
              Comprehensive network of container carrying routes across South Central Railway
            </p>
            <p className="text-sm opacity-90 text-green-200">(For Official Railway Operations Reference)</p>
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

export default CCRoutes