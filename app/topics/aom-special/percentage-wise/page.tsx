'use client'

import React from 'react'

interface Percentage {
  question: string
  answer: string
  category?: string
}

const PercentageWisePage = () => {
  const percentages: Percentage[] = [
    { 
      question: 'Percentage of spare coaches for Traffic requirements that must be kept at the depots for Non AC coaches is', 
      answer: '4%', 
      category: '4%' 
    },
    { 
      question: 'Percentage of spare coaches for Traffic requirements that must be kept at the depots for Rajdhani/Shatabdi trains is', 
      answer: '5%', 
      category: '5%' 
    },
    { 
      question: 'Percentage of spare coaches for Traffic requirements that must be kept at the depots for AC coaches is', 
      answer: '5%', 
      category: '5%' 
    },
    { 
      question: 'Percentage of spare coaches for Mechanical requirements that must be kept at the depots for Non AC coaches is', 
      answer: '5%', 
      category: '5%' 
    },
    { 
      question: 'Percentage of spare coaches for Mechanical requirements that must be kept at the depots for AC coaches is', 
      answer: '6%', 
      category: '6%' 
    },
    { 
      question: 'Percentage of spare coaches for Mechanical requirements that must be kept at the depots for RAJDHANI/SHATABDI coaches is', 
      answer: '6%', 
      category: '6%' 
    },
    {
      question: 'GPF subscription can be made minimum _______ of Basic Pay and maximum of 100% Basic Pay.', 
      answer: '6%', 
      category: '6%' 
    },
    { 
      question: '_______ Trainee Reserve is added to support ongoing training and development of new crew members.', 
      answer: '10%', 
      category: '10%' 
    },
    {
      question: 'Performance Guarantee percentage in Service Contracts',
      answer: '10%',
      category: '10%'
    },
    {
      question: 'Employee contribution to National Pension System (NPS) is ______ of Basic Pay + DA',
      answer: '10% of Basic Pay + DA',
      category: '10%'
    },
    {
      question: 'In Unified Pension Scheme (UPS), Employee contribution is ______ of Basic Pay + DA',
      answer: '10% of Basic Pay + DA',
      category: '10%'
    },
    {
      question: 'In Unified Pension Scheme (UPS), Government contribution is ______ of Basic Pay + DA',
      answer: '10% of Basic Pay + DA',
      category: '10%'
    },
    {
      question: 'Government contribution to National Pension System (NPS) is ______ of Basic Pay + DA',
      answer: '14% of Basic Pay + DA',
      category: '14%'
    },
    {
      question: 'If the longer route requested by the railway servant does not exceed _______ of the direct route distance, such passes may be issued.',
      answer: '15%',
      category: '15%'
    },
    {
      question: 'Even if there is a small portion of double journey, it is permitted for the benefit of terminal facilities as long as the total distance does not exceed _______ of the shortest route.',
      answer: '15%',
      category: '15%'
    },
    {
      question: 'According to the annual programme issued by the Department of Official Language, Ministry of Home Affairs, it is mandatory for officers of the Official Language Department to inspect the minimum percentage of their subordinate offices.',  
      answer: '20%',
      category: '20%'
    },
    {
      question: 'What percentage of Non-Practicing Allowance (NPA) is added for Pension purposes?',
      answer: '20%',
      category: '20%'
    },
    {
      question: 'Lump Sum on Pre-mature exit (before 60 years) from National Pension System (NPS) is:',
      answer: '20% of the corpus',
      category: '20%'
    },
    {
      question: 'What percentage of vacancies in Level-1 posts is reserved for CCAA (Course Completed Act Apprentices) candidates?',
      answer: '20% of the corpus',
      category: '20%'
    },
    {
      question: 'What is the percentage of Subsistence allowance that can be increased if suspension is increased due to administrative reasons?',
      answer: '25%',
      category: '25%'
    },
    {
      question: 'Maximum amount of partial withdrawal allowed in National Pension System (NPS) is:',
      answer: '25% of employee contribution',
      category: '25%'
    },
    { 
      question: '_______ Leave Reserve is usually added to the bare requirement to ensure adequate coverage during leave periods.', 
      answer: '30%', 
      category: '30%' 
    },
    {
      question: 'Absence from Head quarter for less than 6 hours the percentage of Travelling allowance granted is ______',
      answer: '30%',
      category: '30%'
    },
    {
      question: 'As per Railway Services Rules 2008, what is the Running Allowance?',
      answer: '30% of Basic Pay',
      category: '30%'
    },
    {
      question: 'In Old Pension Scheme (OPS), Normal family pension is ______ of last pay.',
      answer: '30%',
      category: '30%'
    },
    {
      question: 'What is the maximum percentage of discount allowed in the Station To Station (STS) scheme?',
      answer: '30%',
      category: '30%'
    },
    {
      question: 'Maximum commution of pension under Old Pension Scheme (OPS) allowed is ______ of the basic pension',
      answer: '40% of the basic pension',
      category: '40%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the grant of libraries is required to be spent on Hindi books, Hindi e-books',  
      answer: '50%',
      category: '50%'
    },
    {
      question: 'What amount is given as Subsistence Allowance to an employee during the suspension?',
      answer: '50% of last pay',
      category: '50%'
    },
    {
      question: 'In Unified Pension Scheme (UPS), Full assured pension is',
      answer: '50% of Last 12 months average payy',
      category: '50%'
    },
    {
      question: 'Full pension under Old Pension Scheme (OPS) is ______ of last pay',
      answer: '50% of last pay',
      category: '50%'
    },
    {
      question: 'What percentage of Running allowance is added for Retirement benefits?',
      answer: '55%',
      category: '55%'
    },
    {
      question: 'Family pension under Unified Pension Scheme (UPS) is',
      answer: '60%',
      category: '60%'
    },
    {
      question: 'Maximum Composite transfer grant as per VII Pay Commission is equivalent to ______ pay',
      answer: '65%',
      category: '65%'
    },
    {
      question: 'Absence from Head quarter for less than 12 hours but more than 6 hours the percentage of Travelling allowance granted is ______',
      answer: '70%',
      category: '70%'
    },
    {
      question: 'The Composite transfer grant (CTG) is admissible at the rate of _______ of last month\'s Basic pay in case of transfer involving a change of station',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'Upon what percentage of acquiring Working Knowledge of Hindi by the employees of Central Government offices, that office is required to be notified in the Gazette of Govt. of India.',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'The Staff of a Central Government office shall ordinarily be deemed to have acquired a working knowledge of Hindi if ______ of the Staff working therein have acquired such knowledge.',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'Maximum advance allowed before journey in All India Leave Travel Concession (AILTC) is ______',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'Mandatory annuity portion on Pre-mature exit (before 60 years) from National Pension System (NPS) is:',
      answer: '80%',
      category: '80%'
    },
    {
      question: 'The operating ratio of Indian Railway in 2024-25 is ____ %',
      answer: '85%',
      category: '85%'
    },
    { 
      question: 'The effective brake power in case of Mail/Express enroute should be not less than', 
      answer: '90%', 
      category: '90%' 
    },
    { 
      question: 'The effective brake power in case of passenger and CC rakes enroute shall be', 
      answer: '90%', 
      category: '90%' 
    },
    { 
      question: 'The effective brake power of material train shall not be less than _______%', 
      answer: '90%', 
      category: '90%' 
    },
    { 
      question: 'At the starting station, for all passenger carrying trains of all description brake power must be', 
      answer: '100%', 
      category: '100%' 
    },
    { 
      question: 'The effective brake power in case of Mail/Express at the originating station shall be', 
      answer: '100%', 
      category: '100%' 
    },
    
    { 
      question: 'The effective brake power in case of passenger and CC rakes at the originating station should not be less than', 
      answer: '100%', 
      category: '100%' 
    },

    {
      question: 'Absence from Head quarter when exceeds 12 hours the percentage of Travelling allowance granted is _______%',
      answer: '100%',
      category: '100%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the training material of training institutes should be in bilingual form',  
      answer: '100%',
      category: '100%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the code, manual, procedure, translation of literature, etc. used in government offices should be bilingual.',  
      answer: '100%',
      category: '100%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the training material of training institutes should be in bilingual form',  
      answer: '100%',
      category: '100%'
    },
  ]

  // Group percentages by category for better organization
  const groupedByCategory = percentages.reduce((acc, percentage) => {
    const categoryKey = percentage.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(percentage)
    return acc
  }, {} as Record<string, Percentage[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Brake Power':
        return 'bg-gradient-to-r from-red-600 to-red-700'
      case 'Traffic Requirements':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      case 'Mechanical Requirements':
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
            Percentages
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to percentages for AOM aspirants
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
              {percentages.length}
            </div>
            <div className="text-gray-300">Total Percentages</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              4%-100%
            </div>
            <div className="text-gray-300">Percentage Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PercentageWisePage