'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section90 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2 flex items-center justify-center gap-4">
              <span>CHAPTER X</span>
            </h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Special Provisions as to Goods Booked to Notified Stations</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 90 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    90
                  </span>
                  <span className="text-center">Disposal of unremoved goods at stations.-</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        1
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        If any goods entrusted for carriage to any notified station by a train intended solely for he carriage of goods are not removed from such station by a person entitled to do so within a period of seven days after the termination of transit thereof at such station, the railway administration may, subject to the provisions of sub-section (2), sell such goods by public auction and apart from exhibiting, in accordance with the provisions of sub-sections (3) of Sec. 89, a statement containing a description of such goods, it shall not be necessary to give any notice of such public auction, but the date on which such auction may be held under this sub-section may be notified in one or more local newspapers, or where there are no such newspapers, in such manner as may be prescribed :
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided that</p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        if at any time before the sale of such goods under this sub-section, the person entitled thereto pays the freight and other charges and the expenses due in respect thereof to the railway administration, he shall be allowed to remove such goods.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If any goods which may be sold by public auction under sub-section (1) at a notified station, being essential commodities, are required by the Central Government or the State Government for its own use or if the Central Government or such State Government considers that it is necessary for securing the availability of all or any such essential commodities at fair prices to do, it may, by order in writing , direct the railway servant in-charge of such auction to transfer such goods to it or to such agency, co-operative society or other person (being an agency, co-operative society or other person subject to the control of the Government ) engaged in the business of selling such essential commodities as may be specified in the direction.
                    </span>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        3
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        Every direction issued under sub-section (2) in respect of any essential commodity shall be binding on the railway servant to whom it is issued and the railway administration and it shall be a sufficient defence against any claim by the person entitled to the goods that such essential commodities have been transferred in compliance with such direction :
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400 mb-4">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided that –</p>
                      <div className="space-y-4">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                          <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300 mb-3">
                            <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              a
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                              such direction shall not be binding on such railway servant or the railway administration –
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                i
                              </span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                If it has not been received by the railway servant sufficiently in time to enable him to prevent the sale of the essential commodities to which it relates; or
                              </span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                ii
                              </span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                if before the time appointed for such sale, the person entitled to such goods pays the freight and other charges and the expenses due in respect thereof and claims that he be allowed to remove the goods; or
                              </span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                iii
                              </span>
                              <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                                if the price payable for such goods (as estimated by the Central Government or, as the case may be, the State Government) is not credited to the railway administration in the prescribed manner and the and the railway administration is not indemnified against any additional amount which it may become liable to pay towards the price by reason of he of the price not having been computed in accordance with the provisions of sub-section (4);
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            b
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            Where directions are issued in respect of the same goods both by the Central Government , the directions received earlier shall prevail.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-section (4) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        4
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        The price payable for any essential commodity transferred in compliance with a direction issued under sub-section (2) shall be the price calculated in accordance with the provisions of sub-section (3) of Sec. 3 of the Essential Commodities Act, 1955 (10 of 1955).
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided that –</p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            a
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            in the case of any essential commodity being a food-stuff in respect whereof a notification issued under sub-section (2) shall be the price calculated in accordance with the provisions of sub-section (3) of Sec. 3 of the Essential Commodities Act, 1955 (10 of 1955) is in force in the locality in which the notified station is situated, the price payable shall be calculated in accordance with the provisions of Cls. (iii) and (ii) of that sub-section;
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            b
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            in the case of an essential commodity being any grade or variety of foodgrains, edible oil-seeds or edible oils in respect whereof no notification issued under sub-section (3-A) of Sec. 3 of Essential Commodities Act, 1955 (10 of 1955), is in force in the locality in which the notified station is situated, the price payable shall be calculated in accordance with the provisions of sub-section (3-B ) of that section;
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            c
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            in the case of an essential commodity being any kind of sugar in respect whereof no notification issued under sub-section (30A) of Sec. 3 of the Essential Commodities Act, 1955 (10 of 1955), is in force in the locality in which the notified station is situated, the price payable shall, if such sugar has been booked by the producer to himself, be calculated in accordance with the provisions of sub-sections (3-C) of that section
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mt-4">
                        Explanation.- For the purposes of this clause, the expressions &quot;Producer&quot; and &quot;Sugar&quot; shall have the meanings assigned to these expressions in the Explanation to sub-section (3-C) of Sec. 3 and Cl. (e) of Sec. 2 of the Essential Commodities Act, 1955 (10 of 1955) respectively.
                      </p>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 90 provides for the manner of disposal not removed from notified stations.
                      </p>
                    </div>
                  </div>
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

export default IRACT1989Section90
