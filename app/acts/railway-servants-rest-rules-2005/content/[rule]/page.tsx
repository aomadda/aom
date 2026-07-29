"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all Rest Rules components (1-18)
import Rule1 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule1'
import Rule2 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule2'
import Rule3 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule3'
import Rule4 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule4'
import Rule5 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule5'
import Rule6 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule6'
import Rule7 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule7'
import Rule8 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule8'
import Rule9 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule9'
import Rule10 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule10'
import Rule11 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule11'
import Rule12 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule12'
import Rule13 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule13'
import Rule14 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule14'
import Rule15 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule15'
import Rule16 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule16'
import Rule17 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule17'
import Rule18 from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Rule18'

const ruleComponents: Record<string, React.ComponentType> = {
  '1': Rule1,
  '2': Rule2,
  '3': Rule3,
  '4': Rule4,
  '5': Rule5,
  '6': Rule6,
  '7': Rule7,
  '8': Rule8,
  '9': Rule9,
  '10': Rule10,
  '11': Rule11,
  '12': Rule12,
  '13': Rule13,
  '14': Rule14,
  '15': Rule15,
  '16': Rule16,
  '17': Rule17,
  '18': Rule18,
}

const ruleDescriptions: Record<string, string> = {
  '1': 'Short title, commencement and application',
  '2': 'Definitions',
  '3': 'Prescribed authority to classify the employment of railway servant',
  '4': 'Appeals against classification',
  '5': 'Supervisory staff',
  '6': 'Excluded staff',
  '7': 'Criteria for determining classification of railway servants',
  '8': 'Fixation of hours of work',
  '9': 'Power to make temporary exemption',
  '10': 'Principle of averaging and payment of overtime allowance',
  '11': 'Register of extra hours of work',
  '12': 'Periodical Rest',
  '13': 'Compensatory periods of rest',
  '14': 'Appointment of Supervisors',
  '15': 'Display of rules and notices',
  '16': 'Annual Return',
  '17': 'Power to make modification in special cases',
  '18': 'The Railway Servants (Hours of Employment) Rules, 1961',
}

const RulePage = () => {
  const params = useParams()
  const router = useRouter()
  const ruleId = params.rule as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  useEffect(() => {
    if (ruleId && ruleComponents[ruleId]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false)
    } else if (ruleId) {
      // Invalid rule ID, redirect to main page
      router.push('/acts/railway-servants-rest-rules-2005')
    }
  }, [ruleId, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const RuleComponent = ruleComponents[ruleId]
  const description = ruleDescriptions[ruleId]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 via-purple-700 to-pink-800 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/acts/railway-servants-rest-rules-2005')}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors mb-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back to Rules Index</span>
              </button>
              <div className="flex justify-center items-center w-full">
                <h1 className="text-2xl md:text-3xl font-bold font-serif uppercase text-center">
                  Rule {ruleId}: {description}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <RuleComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            {/* Previous Rule Button */}
            <button
              onClick={() => {
                const currentRule = parseInt(ruleId)
                if (currentRule > 1) {
                  const prevRule = currentRule - 1
                  router.push(`/acts/railway-servants-rest-rules-2005/content/${prevRule}`)
                }
              }}
              disabled={parseInt(ruleId) <= 1}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                parseInt(ruleId) > 1
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {parseInt(ruleId) > 1
                  ? `Rule ${parseInt(ruleId) - 1}`
                  : "Previous"
                }
              </span>
            </button>

            {/* Current Rule Indicator */}
            <div className="flex-1 text-center">
              <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-indigo-600 rounded-lg">
                <span className="text-white text-sm font-medium">
                  Rule {ruleId}: {description}
                </span>
              </div>
            </div>

            {/* Next Rule Button */}
            <button
              onClick={() => {
                const currentRule = parseInt(ruleId)
                if (currentRule < 18) {
                  const nextRule = currentRule + 1
                  router.push(`/acts/railway-servants-rest-rules-2005/content/${nextRule}`)
                }
              }}
              disabled={parseInt(ruleId) >= 18}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                parseInt(ruleId) < 18
                  ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {parseInt(ruleId) < 18
                  ? `Rule ${parseInt(ruleId) + 1}`
                  : "Next"
                }
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

export default RulePage
