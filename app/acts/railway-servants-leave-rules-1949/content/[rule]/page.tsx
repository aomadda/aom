"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all Leave Rules components (501-557)
import Rule501 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule501'
import Rule502 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule502'
import Rule503 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule503'
import Rule504 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule504'
import Rule505 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule505'
import Rule506 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule506'
import Rule507 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule507'
import Rule508 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule508'
import Rule509 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule509'
import Rule510 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule510'
import Rule511 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule511'
import Rule512 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule512'
import Rule513 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule513'
import Rule514 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule514'
import Rule515 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule515'
import Rule516 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule516'
import Rule517 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule517'
import Rule518 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule518'
import Rule519 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule519'
import Rule520 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule520'
import Rule521 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule521'
import Rule522 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule522'
import Rule523 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule523'
import Rule524 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule524'
import Rule525 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule525'
import Rule526 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule526'
import Rule527 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule527'
import Rule528 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule528'
import Rule529 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule529'
import Rule530 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule530'
import Rule531 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule531'
import Rule532 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule532'
import Rule533 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule533'
import Rule534 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule534'
import Rule535 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule535'
import Rule536 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule536'
import Rule537 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule537'
import Rule538 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule538'
import Rule539 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule539'
import Rule540 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule540'
import Rule541 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule541'
import Rule542 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule542'
import Rule543 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule543'
import Rule544 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule544'
import Rule545 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule545'
import Rule546 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule546'
import Rule547 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule547'
import Rule548 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule548'
import Rule549 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule549'
import Rule550 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule550'
import Rule551 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule551'
import Rule552 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule552'
import Rule553 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule553'
import Rule554 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule554'
import Rule555 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule555'
import Rule556 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule556'
import Rule557 from '@/components/railway-servants-leave-rules-1949/RailwayServantsLeaveRules1949Rule557'

const RuleContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const ruleNumber = params.rule as string
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

  // Map rule numbers to components
  const ruleComponents: { [key: string]: React.ComponentType } = {
    '501': Rule501,
    '502': Rule502,
    '503': Rule503,
    '504': Rule504,
    '505': Rule505,
    '506': Rule506,
    '507': Rule507,
    '508': Rule508,
    '509': Rule509,
    '510': Rule510,
    '511': Rule511,
    '512': Rule512,
    '513': Rule513,
    '514': Rule514,
    '515': Rule515,
    '516': Rule516,
    '517': Rule517,
    '518': Rule518,
    '519': Rule519,
    '520': Rule520,
    '521': Rule521,
    '522': Rule522,
    '523': Rule523,
    '524': Rule524,
    '525': Rule525,
    '526': Rule526,
    '527': Rule527,
    '528': Rule528,
    '529': Rule529,
    '530': Rule530,
    '531': Rule531,
    '532': Rule532,
    '533': Rule533,
    '534': Rule534,
    '535': Rule535,
    '536': Rule536,
    '537': Rule537,
    '538': Rule538,
    '539': Rule539,
    '540': Rule540,
    '541': Rule541,
    '542': Rule542,
    '543': Rule543,
    '544': Rule544,
    '545': Rule545,
    '546': Rule546,
    '547': Rule547,
    '548': Rule548,
    '549': Rule549,
    '550': Rule550,
    '551': Rule551,
    '552': Rule552,
    '553': Rule553,
    '554': Rule554,
    '555': Rule555,
    '556': Rule556,
    '557': Rule557,
  }

  const RuleComponent = ruleComponents[ruleNumber]

  // All available rule numbers in order
  const allRules = Array.from({ length: 57 }, (_, i) => (501 + i).toString())
  const currentIndex = allRules.indexOf(ruleNumber)
  const prevRule = currentIndex > 0 ? allRules[currentIndex - 1] : null
  const nextRule = currentIndex < allRules.length - 1 ? allRules[currentIndex + 1] : null

  if (!RuleComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Rule Not Found</h1>
          <p className="text-gray-300 mb-6">The requested rule does not exist.</p>
          <button
            onClick={() => router.push('/acts/railway-servants-leave-rules-1949')}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Back to Leave Rules
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900 relative">
      {/* Header */}
      <div className="bg-linear-to-r from-emerald-600 via-teal-700 to-cyan-700 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/acts/railway-servants-leave-rules-1949')}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors mb-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back to Leave Rules</span>
              </button>
              <div className="flex justify-center items-center w-full">
                <h1 className="text-xl md:text-3xl font-bold text-center">
                  Rule: {ruleNumber}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <RuleComponent />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            {/* Previous Rule Button */}
            <button
              onClick={() => {
                if (prevRule) {
                  router.push(`/acts/railway-servants-leave-rules-1949/content/${prevRule}`)
                }
              }}
              disabled={!prevRule}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                prevRule
                  ? 'bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {prevRule ? `Rule ${prevRule}` : 'N/A'}
              </span>
            </button>

            {/* Current Rule Indicator */}
            <div className="flex-1 text-center">
              <div className="inline-block px-4 py-2 bg-linear-to-r from-teal-500 to-emerald-600 rounded-lg">
                <span className="text-white text-sm font-medium">
                  Rule {ruleNumber}
                </span>
              </div>
            </div>

            {/* Next Rule Button */}
            <button
              onClick={() => {
                if (nextRule) {
                  router.push(`/acts/railway-servants-leave-rules-1949/content/${nextRule}`)
                }
              }}
              disabled={!nextRule}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                nextRule
                  ? 'bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {nextRule ? `Rule ${nextRule}` : 'N/A'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-linear-to-tr from-emerald-600 via-emerald-400 to-teal-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-emerald-700 hover:to-teal-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
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

export default RuleContentPage
