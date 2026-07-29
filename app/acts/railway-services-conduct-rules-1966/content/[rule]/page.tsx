"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import ConductRules1966Rule1 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule1'
import ConductRules1966Rule2 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule2'
import ConductRules1966Rule3 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule3'
import ConductRules1966Rule4 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule4'
import ConductRules1966Rule5 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule5'
import ConductRules1966Rule6 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule6'
import ConductRules1966Rule7 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule7'
import ConductRules1966Rule8 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule8'
import ConductRules1966Rule9 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule9'
import ConductRules1966Rule10 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule10'
import ConductRules1966Rule11 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule11'
import ConductRules1966Rule12 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule12'
import ConductRules1966Rule13 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule13'
import ConductRules1966Rule14 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule14'
import ConductRules1966Rule15 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule15'
import ConductRules1966Rule16 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule16'
import ConductRules1966Rule17 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule17'
import ConductRules1966Rule18 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule18'
import ConductRules1966Rule19 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule19'
import ConductRules1966Rule20 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule20'
import ConductRules1966Rule21 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule21'
import ConductRules1966Rule22 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule22'
import ConductRules1966Rule23 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule23'
import ConductRules1966Rule24 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule24'
import ConductRules1966Rule25 from '@/components/railway-services-conduct-rules-1966/conduct-rules-1966-index-topics/ConductRules1966Rule25'

const ruleComponents: Record<string, React.ComponentType> = {
  '1': ConductRules1966Rule1,
  '2': ConductRules1966Rule2,
  '3': ConductRules1966Rule3,
  '4': ConductRules1966Rule4,
  '5': ConductRules1966Rule5,
  '6': ConductRules1966Rule6,
  '7': ConductRules1966Rule7,
  '8': ConductRules1966Rule8,
  '9': ConductRules1966Rule9,
  '10': ConductRules1966Rule10,
  '11': ConductRules1966Rule11,
  '12': ConductRules1966Rule12,
  '13': ConductRules1966Rule13,
  '14': ConductRules1966Rule14,
  '15': ConductRules1966Rule15,
  '16': ConductRules1966Rule16,
  '17': ConductRules1966Rule17,
  '18': ConductRules1966Rule18,
  '19': ConductRules1966Rule19,
  '20': ConductRules1966Rule20,
  '21': ConductRules1966Rule21,
  '22': ConductRules1966Rule22,
  '23': ConductRules1966Rule23,
  '24': ConductRules1966Rule24,
  '25': ConductRules1966Rule25
}

const ConductRuleContentPage = () => {
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

  const ContentComponent = ruleComponents[ruleNumber]

  const openPDF = () => {
    const pdfFileName = `ConductRules1966Rule${ruleNumber}.pdf`
    const pdfPath = `/railway-services-conduct-rules-1966/${pdfFileName}`
    window.open(pdfPath, '_blank')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading rule content...</p>
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
            <p className="text-gray-300 mb-6">Content for Rule {ruleNumber} is not available.</p>
            <button
              onClick={() => router.push('/acts/railway-services-conduct-rules-1966')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  const availableRules = Object.keys(ruleComponents).map(Number).sort((a, b) => a - b)
  const currentRuleNumber = parseInt(ruleNumber, 10)
  const currentIndex = availableRules.indexOf(currentRuleNumber)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < availableRules.length - 1
  const prevRule = hasPrev ? availableRules[currentIndex - 1] : null
  const nextRule = hasNext ? availableRules[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/acts/railway-services-conduct-rules-1966')}
                className="flex items-center space-x-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base text-center">
                Topic : Rule {ruleNumber}
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

      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <ContentComponent />

        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            <button
              onClick={() => {
                if (prevRule !== null) {
                  router.push(`/acts/railway-services-conduct-rules-1966/content/${prevRule}`)
                }
              }}
              disabled={!hasPrev}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                hasPrev
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {hasPrev ? `Rule ${prevRule}` : 'Previous'}
              </span>
            </button>

            <button
              onClick={() => {
                if (nextRule !== null) {
                  router.push(`/acts/railway-services-conduct-rules-1966/content/${nextRule}`)
                }
              }}
              disabled={!hasNext}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                hasNext
                  ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {hasNext ? `Rule ${nextRule}` : 'Next'}
              </span>
            </button>
          </div>
        </div>
      </div>

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

export default ConductRuleContentPage

