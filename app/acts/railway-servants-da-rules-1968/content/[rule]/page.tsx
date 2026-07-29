"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all DA Rule components (1-31)
import DARule1 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule1'
import DARule2 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule2'
import DARule3 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule3'
import DARule4 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule4'
import DARule5 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule5'
import DARule6 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule6'
import DARule7 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule7'
import DARule8 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule8'
import DARule9 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule9'
import DARule10 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule10'
import DARule11 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule11'
import DARule12 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule12'
import DARule13 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule13'
import DARule14 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule14'
import DARule15 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule15'
import DARule16 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule16'
import DARule17 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule17'
import DARule18 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule18'
import DARule19 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule19'
import DARule20 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule20'
import DARule21 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule21'
import DARule22 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule22'
import DARule23 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule23'
import DARule24 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule24'
import DARule25 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule25'
import DARule26 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule26'
import DARule27 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule27'
import DARule28 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule28'
import DARule29 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule29'
import DARule30 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule30'
import DARule31 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DARule31'

// Import Schedule components
import DASchedule1 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DASchedule1'
import DASchedule2 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DASchedule2'
import DASchedule3 from '@/components/railway-servants-da-rules-1968/da-rules-index-pages/DASchedule3'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const ruleNumber = params.rule as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [ruleNumber])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Map rule numbers to components
  const ruleComponents: { [key: string]: React.ComponentType } = {
    '1': DARule1,
    '2': DARule2,
    '3': DARule3,
    '4': DARule4,
    '5': DARule5,
    '6': DARule6,
    '7': DARule7,
    '8': DARule8,
    '9': DARule9,
    '10': DARule10,
    '11': DARule11,
    '12': DARule12,
    '13': DARule13,
    '14': DARule14,
    '15': DARule15,
    '16': DARule16,
    '17': DARule17,
    '18': DARule18,
    '19': DARule19,
    '20': DARule20,
    '21': DARule21,
    '22': DARule22,
    '23': DARule23,
    '24': DARule24,
    '25': DARule25,
    '25-a': DARule25, // 25-A uses Rule25 component
    '25-A': DARule25, // Alternative format
    '26': DARule26,
    '26-a': DARule26, // 26-A uses Rule26 component
    '26-A': DARule26, // Alternative format
    '27': DARule27,
    '28': DARule28,
    '29': DARule29,
    '30': DARule30,
    '31': DARule31,
    'schedule1': DASchedule1,
    'schedule2': DASchedule2,
    'schedule3': DASchedule3,
    'schedule-i': DASchedule1,
    'schedule-ii': DASchedule2,
    'schedule-iii': DASchedule3,
  }

  // All available rule numbers in order (as per ListOfRules structure)
  const allRules = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '25-a', '26', '26-a', '27', '28',
    '29', '30', '31', 'schedule1', 'schedule2', 'schedule3'
  ]

  const ContentComponent = ruleComponents[ruleNumber]

  const openPDF = () => {
    let pdfFileName = ''
    if (ruleNumber.startsWith('schedule')) {
      const scheduleNum = ruleNumber.replace('schedule', '').replace('-', '').toUpperCase()
      pdfFileName = `DASection${scheduleNum === '1' ? '1' : scheduleNum === '2' ? '2' : '3'}.pdf`
    } else {
      pdfFileName = `DARule${ruleNumber.replace(/[^0-9]/g, '')}.pdf`
    }
    const pdfPath = `/railway-servants-da-rules-1968/${pdfFileName}`
    window.open(pdfPath, '_blank')
  }

  const getRuleTitle = (rule: string): string => {
    if (rule.startsWith('schedule')) {
      const num = rule.replace('schedule', '').replace('-', '').toUpperCase()
      return `Schedule ${num === '1' ? 'I' : num === '2' ? 'II' : 'III'}`
    }
    // Handle rules with -a suffix
    if (rule.includes('-a') || rule.includes('-A')) {
      const ruleNum = rule.replace('-a', '').replace('-A', '').toUpperCase()
      return `Rule ${ruleNum}-A`
    }
    return `Rule ${rule}`
  }

  const getNextRule = (currentRule: string): string | null => {
    const currentIndex = allRules.indexOf(currentRule)
    if (currentIndex < allRules.length - 1) {
      return allRules[currentIndex + 1]
    }
    return null
  }

  const getPrevRule = (currentRule: string): string | null => {
    const currentIndex = allRules.indexOf(currentRule)
    if (currentIndex > 0) {
      return allRules[currentIndex - 1]
    }
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Rule Not Found</h1>
            <p className="text-gray-300 mb-6">Content for {getRuleTitle(ruleNumber)} is not available.</p>
            <button
              onClick={() => router.push('/acts/railway-servants-da-rules-1968')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  const nextRule = getNextRule(ruleNumber)
  const prevRule = getPrevRule(ruleNumber)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/acts/railway-servants-da-rules-1968')}
                className="flex items-center space-x-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base text-center">
                Topic : {getRuleTitle(ruleNumber)}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={openPDF}
                className="flex items-center space-x-2 bg-linear-to-r from-red-500 to-pink-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                <span>Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <ContentComponent />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            {/* Previous Rule Button */}
            <button
              onClick={() => {
                if (prevRule) {
                  router.push(`/acts/railway-servants-da-rules-1968/content/${prevRule}`)
                }
              }}
              disabled={!prevRule}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                prevRule
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {prevRule ? getRuleTitle(prevRule) : "Previous"}
              </span>
            </button>

            {/* Next Rule Button */}
            <button
              onClick={() => {
                if (nextRule) {
                  router.push(`/acts/railway-servants-da-rules-1968/content/${nextRule}`)
                }
              }}
              disabled={!nextRule}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                nextRule
                  ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {nextRule ? getRuleTitle(nextRule) : "Next"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-linear-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage

