'use client'

import React from 'react'

interface YearItem {
  question: string
  answer: string
  category?: string
}

const Years = () => {
    const years: YearItem[] = [
      {
        question: 'The first non-passenger train in pre-independent India was made operational in:',
        answer: '1851',
        category: '1851'
      },
      {
        question: "The East India Railway Company's first passenger train ran on _____ covering a distance of 38 kms between Howrah and Hooghly:",
        answer: '15.08.1854',
        category: '1854'
      },
      {
        question: 'When was the Workmen\'s Compensation Act enforced in India?',
        answer: '01.07.1924',
        category: '1924'
      },
      {
        question: 'First electric locomotive was introduced in ______ year by the Government of India?',
        answer: '1925',
        category: '1925'
      },
      {
        question: 'When was the Trade Unions Act, 1926 passed',
        answer: '01.06.1927',
        category: '1927'
      },
      {
        question: 'The General Rules issued under the notification of the Government of India in the late Railway Department (Railway Board) No. 1078-T, dated the ______ are hereby repealed except as respects things done or action taken or omitted to be done or taken before such repeal.',
        answer: '9th March 1929',
        category: '1929'
      },
      {
        question: 'In which year the Station Staff Board (SBF) was implemented in the Railways',
        answer: '1931',
        category: '1931'
      },
      {
        question: 'Name the Act which aims prompt and regular payment of wages without any arbitrary deductions',
        answer: 'The Payment of Wages Act, 1936',
        category: '1936'
      },
      {
        question: 'Name the Law for investigation and settlement of disputes in railways',
        answer: 'The Industrial Dispute Act, 1947',
        category: '1947'
      },
      {
        question: 'Name the Act made to ensure prevention of exploitation of unorganised labour',
        answer: 'The Minimum Wages Act, 1948',
        category: '1948'
      },
      {
        question: 'The Minimum Wages Act was enacted in the year _____',
        answer: '1948',
        category: '1948'
      },
      {
        question: 'The Railway Services (Liberalised Leave) Rules, 1949 came into force on _______',
        answer: '1st February 1949',
        category: '1949'
      },
      {
        question: 'When did the Constituent Assembly accepted Hindi as the official language of the Union?',
        answer: '14.09.1949',
        category: '1949'
      },
      {
        question: 'When did The Factories Act, 1948 come into effect?',
        answer: '01.04.1949',
        category: '1949'
      },
      {
        question: 'When did the workshop act 1948 come into effect',
        answer: '01.04.1949',
        category: '1949'
      },
      {
        question: 'An example of Non Railway enquiries are Judicial Commission or Commission of Inquiry as per Enquiries Act of ______',
        answer: '1952',
        category: '1952'
      },
      {
        question: 'The Central Government may appoint a Commission of Inquiry under the Commission of Inquiry Act, ________ in a very serious accident.',
        answer: '1952',
        category: '1952'
      },
      {
        question: 'When PNM (Permanent Negotiating Machinery) for Indian Railways was established?',
        answer: '01.01.1952',
        category: '1952'
      },
      {
        question: 'In compliance of article 344 when was the official language commission formed in the year?',
        answer: '07.06.1955',
        category: '1955'
      },
      {
        question: 'In which year the Hindi translation of Railway Budget was prepared and who was the Railway Minister?',
        answer: '1956 and Lal Bahadur Shastri',
        category: '1956'
      },
      {
        question: 'When was pension introduced in Indian Railway',
        answer: '01.04.1957',
        category: '1957'
      },
      {
        question: 'Liberalized pension rules apply to all Railway Servants appointed on or after 16.11.1957',
        answer: '16.11.1957',
        category: '1957'
      },
      {
        question: 'In which year Hindi (Parliament) section was established in Railway Board?',
        answer: '1960',
        category: '1960'
      },
      {
        question: "In which year were the President's orders regarding the Official Language issued on 27 April?",
        answer: '1960',
        category: '1960'
      },
      {
        question: 'The General Rules framed in 1929, the revision for which was advocated by Railway accident committee in the year',
        answer: '1962',
        category: '1962'
      },
      {
        question: 'When was the Official Languages Act 1963 passed?',
        answer: '10.05.1963',
        category: '1963'
      },
      {
        question: 'In which year Family Pension is introduced in Indian Railways?',
        answer: '01.01.1964',
        category: '1964'
      },
      {
        question: 'From when did the Section 3(3) of the Official Languages Act take effect?',
        answer: '26.01.1965',
        category: '1965'
      },
      {
        question: 'When Joint Consultative Machinery (JCM) was formed',
        answer: '28.10.1966',
        category: '1966'
      },
      {
        question: 'When was official language Act 1963 ammended?',
        answer: '1967',
        category: '1967'
      },
      {
        question: 'The General Rules (GR) framed in 1929, the revision for which was advocated by Railway accident inquiry committee in the year',
        answer: '1968',
        category: '1968'
      },
      {
        question: 'Based on recommendations of Railway accident committee and Railway accident inquiry committee a Committee formed composed of officers of Traffic and S&T department was appointed by Railway board in ........ and they submitted draft rules in ........',
        answer: '1968, 1970',
        category: '1968'
      },
      {
        question: 'The Railway servants (Discipline & Appeal) Rules, 1968, shall come into force on the 1st day of October, 1968.',
        answer: 'October 1, 1968',
        category: '1968'
      },
      {
        question: 'During which year the Official Language Resolution was passed?',
        answer: '1968',
        category: '1968'
      },
      {
        question: 'Central Civil Services (Pension) Rules, 1972 (01.06.1972)',
        answer: '01.06.1972',
        category: '1972'
      },
      {
        question: 'Revised GR submitted by committee was circulated to RDSO, Commission of Railway Safety, Rly staff college Baroda, IRISET, IRMEE Jamalpur for suggestions vide Rly Board lr no 68-RR/2 Vol V in the month of........',
        answer: 'July 1974',
        category: '1974'
      },
    {
      question: 'General Rules for Indian Railways (open lines) is first administered by Government in the year ______ for the time being used for the public carriage of passenger, animals or Goods',
      answer: '1976',
      category: '1976'
    },
    {
      question: 'When was the Official Language Rules passed?',
      answer: '1976',
      category: '1976'
    },
    {
      question: 'The term same work or work of similar nature‘ is mentioned in the which Act',
      answer: 'Equal Remuneration Act, 1976',
      category: '1976'
    },
    {
      question: 'When was CGEGI (Central Government Employee Group Insurance) scheme introduced',
      answer: '01.01.1982',
      category: '1982'
    },
    {
      question: 'Vacuum Circuit Breakers were introduced on electric locomotives on Indian Rlys. in the year _______',
      answer: '1985',
      category: '1985'
    },
    {
      question: 'When was the first Central Administrative Tribunal established?',
      answer: '01.11.1985',
      category: '1985'
    },
    {
      question: 'Railway servants pass rules were implemented in which year?',
      answer: '1986',
      category: '1986'
    },
    {
      question: 'When the Official Language Rules were amended first?',
      answer: '1987',
      category: '1987'
    },
    {
      question: 'Widows of employees who were in service prior to _______ are eligible for the Widow Pass scheme on a one-time payment of Rs. 250.',
      answer: '12.03.1987',
      category: '1987'
    },
    {
      question: 'The Widow Pass scheme does not apply to widows of employees who retired or died before _______.',
      answer: '12.03.1987',
      category: '1987'
    },
    {
      question: 'CRS shall hold statutory enquiry into the accidents falling under Section 113 of Railways Act _________.',
      answer: '1989',
      category: '1989'
    },
    {
      question: 'The rule governing employment assistance on compassionate ground has framed w.e.f _______',
      answer: '30.04.1993',
      category: '1993'
    },
    {
      question: 'Railway Services (Pension) Rules, 1993 were issued in the year _______',
      answer: '1993',
      category: '1993'
    },
    {
      question: 'When Particpation of Railway Employees in Management (PREM) has been established for participation of Railway employees in management?',
      answer: '1994',
      category: '1994'
    },
    {
      question: 'Maximum limit of Leave on Average Pay (LAP) is 300 is effective from _______',
      answer: '01.07.1997',
      category: '1997'
    },
    {
      question: 'Paternity Leave is introduced with effect from _______',
      answer: '07.10.1997',
      category: '1997'
    },
    {
      question: 'Retired Railway Employees Liberalized Health Scheme (RELHS) - 1997',
      answer: '1997',
      category: '1997'
    },
    {
      question: 'Accident Free Service Award for railway staff implemented w.e.f _______',
      answer: '01.01.1999',
      category: '1999'
    },
    {
      question: 'National Pension Scheme (NPS) was introduced on',
      answer: '01.01.2004',
      category: '2004'
    },
    {
      question: 'Unmarried daughter above the age of 25 years is eligible for family pension w.e.f _______',
      answer: '06.09.2007',
      category: '2007'
    },
    {
      question: 'When maternity leave came into existence up to 180 days?',
      answer: '01.09.2008',
      category: '2008'
    },
    {
      question: 'The Modified Assured Career Progression (MACP) scheme was operative from which date',
      answer: '01.09.2008',
      category: '2008'
    },
    {
      question: 'Ministry of Railways (Railway Board) constituted a Committee for the revision of General Rules, 1976, who have submitted the final report in the year.',
      answer: '2009',
      category: '2009'
    },
    {
      question: 'When was the Sexual Harassment of women at work place Act enforced in India (Prevention, prohibition and redressal) act 2013 commonly known as POSH Act came into force on',
      answer: '09.12.2013',
      category: '2013'
    },
    
    {
      question: 'The benchmark “Very Good” grading in Annual Performance Appraisal Report (APAR) for grant of upgradation under Modified Assured Career Progression (MACP) has been made applicable w.e.f _______',
      answer: '25.07.2016',
      category: '2016'
    },
    {
      question: 'Railway employees are allowed to avail Leave Travel Concession (LTC) as per DoPT (Department of Personnel & Training) Office Memorandum dated _______',
      answer: '27.03.2018',
      category: '2018'
    },
    {
      question: '100% Objective Type Multiple Choice Questions (MCQs) tests for promotional examinations (departmental selections within Group "C" posts) have been introduced vide Railway Board Letter dated _______',
      answer: '14.12.2018',
      category: '2018'
    },
    {
      question: 'Introduction of provision for writing of Annual Performance Appraisal Report (APAR) of Railway employees working in Level-1 (GP-1800) and above was initiated from year ending _______',
      answer: '2019',
      category: '2019'
    },
    {
      question: 'Railways suspended running of Passenger, Mail/Express and other passenger carrying trains amid the nationwide lockdown to combat the spread of COVID-19 from',
      answer: '25.03.2020',
      category: '2020'
    },
    {
      question: 'To transport stranded migrant workers, students, pilgrims and tourists to their native states, Shramik Special trains were run from',
      answer: '01.05.2020',
      category: '2020'
    },
    {
      question: 'After outbreak of COVID-19 passenger carrying trains were cancelled and again reopened for general passengers on',
      answer: '12.05.2020',
      category: '2020'
    },
    {
      question: 'Unified Pension Scheme (UPS) was approved in which year?',
      answer: '24.08.2024',
      category: '2024'
    },
  ]

  // Group years by category for better organization
  const groupedByCategory = years.reduce((acc, year) => {
    const categoryKey = year.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(year)
    return acc
  }, {} as Record<string, YearItem[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'General Rules':
        return 'bg-gradient-to-r from-amber-600 to-amber-700'
      case 'Safety Regulations':
        return 'bg-gradient-to-r from-orange-600 to-orange-700'
      case 'Infrastructure':
        return 'bg-gradient-to-r from-yellow-600 to-yellow-700'
      case 'Operations':
        return 'bg-gradient-to-r from-amber-500 to-amber-600'
      default:
        return 'bg-gradient-to-r from-amber-600 to-amber-700'
    }
  }

  // Get year range for display
  const getYearRange = () => {
    const yearValues = years.map(y => parseInt(y.answer)).filter(y => !isNaN(y))
    if (yearValues.length === 0) return 'N/A'
    const min = Math.min(...yearValues)
    const max = Math.max(...yearValues)
    return min === max ? `${min}` : `${min}-${max}`
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Years
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to important years and time periods for railway operations and regulations
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
                    className="group p-3 rounded-xl border border-slate-700 hover:border-amber-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-900/50 border border-amber-700">
                          <span className="text-amber-300 font-semibold text-lg">
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
            <div className="text-3xl font-bold text-amber-400 mb-2">
              {years.length}
            </div>
            <div className="text-gray-300">Total Years</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {getYearRange()}
            </div>
            <div className="text-gray-300">Year Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Years
