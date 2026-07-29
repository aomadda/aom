'use client'

import React from 'react'

interface NumberItem {
  question: string
  answer: string
  category?: string
}

const Numbers = () => {
  const numbers: NumberItem[] = [
    {
      question: 'Maximum number of damaged vehicle or damaged engine shall be attached behind the rear brake van of goods/mixed train is ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'Number of dead engines is/are permitted to attach to passenger carrying train ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'No. of material trains permitted during the line block or integrated block or shadow block is ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'Minimum number of wagons to be given as support wagons from Loco when wagons containing explosives are attached by Goods Train are ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'When a Railway servant has availed all passes due to him in a current calendar year, ______ number of set of passes/PTO may be issued for journeys commencing in the next year',
      answer: '1',
      category: '1'
    },
    {
      question: 'Maximum number of coaches in addition to the officers inspection coach attached in rear of SLR of Passenger or Mail & Express trains is ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum number of bogies or its equivalent attached in rear of rear brake van by a goods train is ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'At stations, where Public Announcement (PA) system is not provided, to start the train Station Master (SM) shall arrange by ringing beats for Down trains is ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'Number of coaches permitted in rear of rear SLR for express trains ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'How many buttons have to be pressed and released simultaneously for operating a given function in Siemen’s panel',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum number of persons other than the Loco Pilot/Motorman or Guard are authorized to travel in the Cab of EMU/MEMU with special permits ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'No. of Private Number sheets supplied to each on duty Station Master.',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum commodities ______ can be clubbed in a wagon.',
      answer: '2',
      category: '2'
    },
    {
      question: 'First class privilege pass holders areentitled for ______ number of berths in 2AC byRajdhani/Durontotrains',
      answer: '2',
      category: '2'
    },
    {
      question: 'How many copies of the Station Working Rules (SWR) must be sent to the Chief Operations Manager (COM)?',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum number of dependents allowed on a Privilege pass is ______',
      answer: '2',
      category: '2'
    },
    {
      question: "Children's Education Allowance is permissible for how many number of surviving children",
      answer: '2',
      category: '2'
    },
    {
      question: 'The successive Leave encashment cannot be made before a minimum period of ______ (block period)',
      answer: '2',
      category: '2'
    },
    {
      question: 'How many sets of PTOs is/are a license Holder coolie is entitled in a calendar year?',
      answer: '2 (IInd/Sleeper)',
      category: '2'
    },
    {
      question: 'How many times the regular Hindi exams are conducted in a year?',
      answer: '2 times (May & November)',
      category: '2'
    },
    {
      question: 'How many dependants are allowed in Complimentary Pass?',
      answer: 'Maximum 2 dependants',
      category: '2'
    },
    {
      question: 'How many tiers are there in National Pension System (NPS)?',
      answer: '2',
      category: '2'
    },
    {
      question: 'On how many days in a week, is supply of rakes against "Premium indent" done on priority?',
      answer: '2 days (Monday & Friday)',
      category: '2'
    },
    {
      question: 'The maximum number of extensions after successful testing of the detonatoris ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'At stations, where Public Announcement (PA) system is not provided, to start the train SM shall arrange by ringing beats for Up trains is ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Maximum number of wagons containing explosives permitted by mixed train ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Minimum number of wagons required to be given as support wagons from B V / Passenger coach / other inflammables when explosives are carried by a train are ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'When center S L R is provided in short trains, a maximum number of coaches permitted on either side of S L R ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'How many sets of School Pass issued to Railway employee?',
      answer: '3 sets or 6 half sets per year',
      category: '3'
    },
    {
      question: 'How many Hindi courses are prescribed for central government employees?',
      answer: '3 courses',
      category: '3'
    },
    {
      question: 'With a view of implementation of Official Language, how many regions have been classified in India under Official Language Rules 1976?',
      answer: '3 regions (A, B & C)',
      category: '3'
    },
    {
      question: 'How many Sub-Committees are there in the Committee of Parliament on Official Language?',
      answer: '3 sub-committees',
      category: '3'
    },
    {
      question: 'The Railway Board has permitted marshalling of _____________in front and rear of the SLR on short trains, provided they have working brakes and subject to end coaches at either side are anti telescopic',
      answer: '3 coaches',
      category: '3'
    },
    {
      question: 'Maximum _________inspection carriages occupied by the officers can be attached and in case it exceeds, , rules regarding running of goods trains without brake van will apply.',
      answer: '3',
      category: '3'
    },
    {
      question: 'ODCs are divided into ____________according to the minimum clearance available between the consignment and minimum fixed structure profile.',
      answer: '3 classes',
      category: '3'
    },
    {
      question: 'How many times Home town Leave Travel Concession (LTC) can be availed in 4-year block?',
      answer: '3 times',
      category: '3'
    },
    {
      question: 'Privilege Pass sets for Non-Gazetted Railway Servants are ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'How many Annexures are there in Railway Pass Rules 1986?',
      answer: '3 annexures',
      category: '3'
    },
    {
      question: 'Number of Loco manufacturing Units on Indian railways are ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Number of Coach manufacturing Units on Indian railways are ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Maximum number of partial withdrawals allowed in National Pension System (NPS) is:',
      answer: '3 times',
      category: '3'
    },
    {
      question: 'How many pension funds are there in Unified Pension Scheme (UPS)?',
      answer: '3',
      category: '3'
    },
    {
      question: 'Continuous night duty for running staff should be limited to ______ nights with fourth night towards headquarters.',
      answer: '4',
      category: '4'
    },
    {
      question: 'Minimum number of persons required to go along with Push Trolley/Motor Trolley are ______',
      answer: '4',
      category: '4'
    },
    {
      question: 'Station Detonator Register contains ______ parts',
      answer: '4',
      category: '4'
    },
    {
      question: 'Signals are classified into how many types',
      answer: '4',
      category: '4'
    },
    {
      question: 'As per Hours of Employment Rules, employees are classified into how many categories',
      answer: '4',
      category: '4'
    },
    {
      question: 'How many times in a year are the meetings of the Regional Official Language Implementation Committee held?',
      answer: '4 times',
      category: '4'
    },
    {
      question: 'How many annexures should be attached with charge sheet for imposing major penalty?',
      answer: '4 annexures',
      category: '4'
    },
    {
      question: 'Maximum No. of officials/staff including engine crew at any time on the engine except in emergencies',
      answer: '5',
      category: '5'
    },
    {
      question: 'The number of persons permitted to travel in the brake-van of goods trains, in addition to the Guard, should not exceed',
      answer: '5',
      category: '5'
    },
    {
      question: 'Accidents are classified into how many categories',
      answer: '5',
      category: '5'
    },
    {
      question: 'Maximum number of persons allowed on a Privilege pass/PTO when dependents are included is ______',
      answer: '5',
      category: '5'
    },
    {
        question: 'Number of States covering South Central Railway is',
        answer: '6',
        category: '6'
      },
      {
        question: 'Maximum number of rail dollies can be worked in a group in any one block section.',
        answer: '6',
        category: '6'
      },
      {
        question: 'Group A and B officers are entitled to ______ sets of First Class A Privilege passes',
        answer: '6',
        category: '6'
      },
      {
        question: 'The road learning trips that are given to the Loco Pilot/Guard on Automatic section is ______ trips.',
        answer: '6 (Six) trips',
        category: '6'
      },
      {
        question: 'Minimum Surprise Inspections that shall be conducted by the sectional TI in a month is ________',
        answer: '6',
        category: '6'
      },
      {
        question: 'How many total number of system of working for Train running are there?',
        answer: '6',
        category: '6'
      },
      {
        question: 'For the purpose of Weather Warning, South Central Railway is divided into ______ zones',
        answer: '7',
        category: '7'
      },
      {
        question: 'Explosives are classified into how many classes?',
        answer: '7',
        category: '7'
      },
      {
        question: 'How many Schedules are there in Railway Pass Rules 1986?',
        answer: '7 Schedules',
        category: '7'
      },
      {
        question: 'In Indian Railway, Explosive are divided into how many classes?',
        answer: '7 classes (Gun powder, Nitrate mixture, Nitro compound, Chlorate mixture, Fulminate, Ammunition, Fireworks)',
        category: '7'
      },
      {
        question: 'How many articles are there in part XVII of the Constitution of India?',
        answer: '9 articles (Article 343 to Article 351)',
        category: '9'
      },
      {
        question: 'How many Sections are there in the Official Language Act 1963?',
        answer: '9 sections',
        category: '9'
      },
      {
        question: 'Under exceptional circumstances short formation trains not carrying passengers, not exceeding how many eight wheeler units may be run without guard and brakevan',
        answer: '10',
        category: '10'
      },
      {
        question: 'Maximum number of men allowed on a push trolly/motor trolly on BG shall not exceed ______',
        answer: '10',
        category: '10'
      },
      {
        question: 'Maximum number of wagons containing explosives permitted by goods trains is ______',
        answer: '10',
        category: '10'
      },
      {
        question: 'How many Rajya Sabha members will be there in the committee of parliamentary on official language?',
        answer: '10',
        category: '10'
      },
      {
        question: 'How many rules are there in the Official Language Rules 1976?',
        answer: '12',
        category: '12'
      },
      {
        question: 'How many digits are there in PPAN (Permanent Pension Account Number) in the account number of National Pension System (NPS) subscriber?',
        answer: '12 digits',
        category: '12'
      },
      {
        question: 'Number of Multi disciplinary Zonal training Institutes on Indian railways are',
        answer: '11',
        category: '11'
      },
      {
        question: 'According to Section 3(3) of the Official Language Act, 1963 how many documents are mandatory to be issued in the bilingual form?',
        answer: '13',
        category: '13'
      },
      {
        question: 'Maximum how many Artists can participate in Hindi drama competitions?',
        answer: 'Maximum 15 artists',
        category: '15'
      },
      {
        question: 'Total number of Appendices in General & Subsidiary are ______',
        answer: '17',
        category: '17'
      },
    {
        question: 'Total Number of zones on Indian Railways',
        answer: '18',
        category: '18'
      },
      {
        question: 'Total number of Chapters in General & Subsidiary Rules are ______',
        answer: '18',
        category: '18'
      },
      {
        question: 'Total number of Railway Pass Rules are ______',
        answer: '18',
        category: '18'
      },
      {
        question: 'The number of detonators that are given to each fog signalman is ______',
        answer: '20',
        category: '20'
      },
      {
        question: 'How many members of Lok Sabha are there in the Parliamentary Committee on Official Language constituted under section 4 of the Official Language Act?)',
        answer: '20',
        category: '20'
      },
      {
        question: 'With regard to marshalling of explosives and other dangerous goods, The rules are laid down in the I. R. C. A. Red Tariff No. for strict compliance in ______',
        answer: '20',
        category: '20'
      },
      {
        question: 'T otal number of classes in Classification of Goods freight rate table is ______',
        answer: '24',
        category: '24'
      },
      {
        question: 'How many members are there in the committee of parliamentary on official Language?',
        answer: '30',
        category: '30'
      },
      {
        question: 'An indent for a standard rake of BOXN should be for ______ wagons',
        answer: '59',
        category: '59'
      },
      {
        question: 'Eligibility for Home Ministry’s award scheme in region ‘C’ for Officer/employees for writing minimum of _______ words in Hindi?',
        answer: '10000',
        category: '10000'
      },
      {
        question: 'Eligibility for Home Ministry’s award scheme in region ‘A’ & ‘B’ for Officer/employees for writing minimum of _______ words in Hindi?',
        answer: '20000',
        category: '20000'
      },
      {
        question: 'How many days of Leave on Half Average Pay (LHAP) can be accumulated to an employee in his service life?',
        answer: 'Unlimited',
        category: 'Unlimited'
      }
  ]

  // Group numbers by category for better organization
  const groupedByCategory = numbers.reduce((acc, number) => {
    const categoryKey = number.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(number)
    return acc
  }, {} as Record<string, NumberItem[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Railway Zones':
        return 'bg-gradient-to-r from-red-600 to-red-700'
      case 'States':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      case 'Duty Hours':
        return 'bg-gradient-to-r from-blue-600 to-blue-700'
      default:
        return 'bg-gradient-to-r from-purple-600 to-purple-700'
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Numbers
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to important numbers for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Category Header */}
              <div className={`${getCategoryColor(category)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {category}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-900/50 border border-blue-700">
                          <span className="text-blue-300 font-semibold text-lg">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {numbers.length}
            </div>
            <div className="text-gray-300">Total Numbers</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              4-18
            </div>
            <div className="text-gray-300">Number Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers