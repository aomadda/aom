'use client'
import React from 'react'
import { 
  Scale,
  FileText
} from 'lucide-react'

const IRACT1989Section2 = () => {
  const definitions = [
    { num: "(1)", term: "authorized", definition: "means authorized by a railway administration;" },
    { num: "(2)", term: "Carriage", definition: "means the carriage of passengers or goods by a railway administration;" },
    { num: "(3)", term: "Claims Tribunal", definition: "means the Railway Claims Tribunal established under section 3 of the Railway Claims Tribunal Act, 1987 (54 of 1987);" },
    { num: "(4)", term: "Classification", definition: "means the classification of commodities made under section 31 for the purpose of determining the rates to be charged for carriage of such commodities;" },
    { num: "(5)", term: "Class rates", definition: "means the rate fixed for a class of commodity in the classification;" },
    { num: "(6)", term: "Commissioner", definition: "means the Chief Security Commissioner of Railway Safety or the Commissioner of Railway Safety appointed under section 5;" },
    { num: "(7)", term: "Commodity", definition: "means a specific items of goods;" },
    { num: "(8)", term: "Consignee", definition: "means the person named as consignee in a railway receipt;" },
    { num: "(9)", term: "Consignment", definition: "means goods entrusted to a railway administration for carriage:" },
    { num: "(10)", term: "Consignor", definition: "means the person, named in a railway receipt as consignor, by whom or on whose behalf goods covered by the railway receipt are entrusted to a railway administration for carriage." },
    { num: "(11)", term: "demurrage", definition: "means the charge levied for the detention of any rolling stock after the expiry of free time, if any, allowed for such detention." },
    { num: "(12)", term: "endorsee", definition: "means the person in whose favour an endorsement is made, and in the case of successive endorsement, the person in whose favour the last endorsements, the person in whose favour the last endorsement is made;" },
    { num: "(13)", term: "endorsement", definition: "means the signing by the consignee or the endorsee after adding a direction on a railway receipt to pass the property in the goods mentioned in such receipt to a specific person;" },
    { num: "(14)", term: "fare", definition: "means the charge levied for the carriage of passengers;" },
    { num: "(15)", term: "ferry", definition: "includes a bridge of boats, platoons or rafts, a swing bridge, a fly-bridge and a temporary bridge and the approaches to, and landing places of, a ferry;" },
    { num: "(16)", term: "forwarding note", definition: "means the document executed under section 64;" },
    { num: "(17)", term: "freight", definition: "means the charge levied for the carriage of goods including transshipment charges, if any;" },
    { num: "(18)", term: "General Manager", definition: "means the General Manager of a Zonal Railway appointed under Section4;" },
    { 
      num: "(19)", 
      term: "goods", 
      definition: "includes –",
      subItems: [
        "(i) Containers, pallets or similar articles of transport used to consolidate goods; and",
        "(ii) Animals;"
      ]
    },
    { num: "(20)", term: "Government railway", definition: "means a railway owned by the Central Government;" },
    { 
      num: "(21)", 
      term: "in transit", 
      definition: "in relation to the carriage of goods by railway, means the period between the commencement and the termination of transit of such goods, and unless otherwise previously determined-",
      subItems: [
        "(a) transit commences as soon as the railway receipt is issued or the consignment is loaded, whichever is earlier;",
        "(b) transit terminates on the expiry of the free time allowed for unloading of consignment from any rolling stock and where such unloading has been completed within such free time, transit terminates on the expiry of the free time allowed, for the removal of the goods from the railway premises;"
      ]
    },
    { num: "(22)", term: "level crossing", definition: "means an inter-section of a road with lines of rails at the same level;" },
    { num: "(23)", term: "luggage", definition: "means the goods of a passenger either carried by him in his charge or entrusted to a railway administration for carriage;" },
    { num: "(24)", term: "lump sum rate", definition: "means the rate mutually agreed upon between a railway administration and a consignor for the carriage of goods and for any service in relation to such carriage;" },
    { num: "(25)", term: "non-Government railway", definition: "means a railway other than a Government railway;" },
    { num: "(26)", term: "notification", definition: "means a notification published in the official Gazette;" },
    { num: "(26-A)", term: "Officer Authorised", definition: "means an officer authorised by the Central Government under sub-section(2) of Section 179." },
    { num: "(27)", term: "parcel", definition: "means goods entrusted to a railway administration for carriage by a passenger or a parcel train;" },
    { num: "(28)", term: "pass", definition: "means an authority given by the Central Government or a railway administration to a person allowing him to travel as a passenger, but does not include a ticket;" },
    { num: "(29)", term: "passenger", definition: "means a person traveling with a valid pass or ticket;" },
    { num: "(30)", term: "prescribed", definition: "means prescribed by rules made under this Act;" },
    { 
      num: "(31)", 
      term: "railway", 
      definition: "means a railway, or any portion of a railway, for the public carriage of passengers or goods, and includes –",
      subItems: [
        "(a) all lands within the fences or other boundary marks indicating the limits of the land appurtenant to a railway;",
        "(b) all lines of rails, sidings, or yards, or branches used for the purposes of, or in connection with, a railway;",
        "(c) all electric traction equipments, power supply and distribution installation used for the purposes of, or in connection with, a railway;",
        "(d) all rolling stock, stations, offices, ware houses, wharves, workshops, manufactories, fixed plant and machinery, roads and streets, running rooms, rest houses, institutes, hospitals, water works and water supply installations, staff dwellings and any other works constructed for the purpose of, or in connection with railway;",
        "(e) all vehicles which are used any road for the purposes of traffic of a railway and owned, hired or worked by a railway; and",
        "(f) all ferries, ships, boats and rafts which are used on any canal, river, lake or other navigable inland waters for the purposes of the traffic of a railway and owned, hired, or worked by a railway administration,",
        "but does not include –",
        "i) a tramway wholly within a municipal area; and",
        "ii) lines of rails built in any exhibition ground, fair, park, or any other place solely for the purpose of recreation;"
      ]
    },
    { 
      num: "(32)", 
      term: "railway administration", 
      definition: "in relation to-",
      subItems: [
        "(a) a Government railway, means the General Manager of a Zonal Railway; and",
        "(b) a non-Government railway, means the person who is the owner or lessee of the railway or the person working the railway under an agreement;"
      ]
    },
    { num: "(33)", term: "railway receipt", definition: "means" },
    { num: "(34)", term: "Railway Servant", definition: "means any person employed by the Central Government or by a railway administration in connection with the service of a railway (including member of the Railway Protection Force appointed under clause © of sub-section (1) of section 2 of the Railway Protection Force Act, 1957 (23 of 1957)" }
  ]

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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4 flex items-center justify-center gap-4">
              <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                2
              </span>
              Definition
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              In this Act, unless the context otherwise requires,-
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Definitions List */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="text-center">Key Definitions</span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  {definitions.map((item, index) => {
                    const numMatch = item.num.match(/\((\d+)(?:-([A-Z]))?\)/);
                    const num = numMatch ? (numMatch[2] ? `${numMatch[1]}${numMatch[2]}` : numMatch[1]) : item.num.replace(/[()]/g, '');
                    
                    return (
                      <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10 group">
                        <div className="flex items-start gap-4">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-base text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            {num}
                          </span>
                          <div className="flex-1">
                            <span className="text-cyan-200 font-bold lg:text-lg text-base">&quot;{item.term}&quot;</span>
                            <span className="text-gray-200 lg:text-base text-sm ml-2">{item.definition}</span>
                            {item.subItems && (
                              <div className="mt-4 space-y-3">
                                {item.subItems.map((subItem, subIndex) => {
                                  // Check if subItem starts with (i), (ii), (a), (b), i), ii), etc.
                                  const subMatch = subItem.match(/^\(([a-z]+)\)|^\(([ivx]+)\)|^([a-z]+)\)|^([ivx]+)\)/i);
                                  let subLabel = '';
                                  let subText = subItem;
                                  
                                  if (subMatch) {
                                    subLabel = (subMatch[1] || subMatch[2] || subMatch[3] || subMatch[4] || '').toLowerCase();
                                    subText = subItem.replace(/^\(?[a-zivx]+\)?\s*/i, '').trim();
                                  }
                                  
                                  // Special handling for "but does not include" text
                                  const isSpecialText = subItem.toLowerCase().includes('but does not include') || 
                                                       subItem.toLowerCase().includes('and includes');
                                  
                                  return (
                                    <div key={subIndex} className={`flex items-start gap-3 ${!isSpecialText ? 'group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300' : ''}`}>
                                      {subLabel && !isSpecialText && (
                                        <span className="bg-linear-to-br from-blue-400/30 to-cyan-500/30 text-cyan-200 lg:w-6 lg:h-6 w-5 h-5 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                                          {subLabel}
                                        </span>
                                      )}
                                      <span className={`text-gray-200 lg:text-base text-sm leading-relaxed ${subLabel ? 'flex-1' : ''} ${isSpecialText ? 'font-semibold text-purple-300 italic' : ''}`}>
                                        {subText || subItem}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Indian Railways Act 1989 - Definitions
            </p>
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

export default IRACT1989Section2