"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import SpeedRestrictions from '@/components/chief-controller/SpeedRestrictions'
import Timings from '@/components/chief-controller/Timings'
import Distances from '@/components/chief-controller/Distances'
import Percentages from '@/components/chief-controller/Percentages'
import Numbers from '@/components/chief-controller/Numbers'
import Years from '@/components/chief-controller/Years'
import Authorities from '@/components/chief-controller/Authorities'
import Permissions from '@/components/chief-controller/Perminssions'
import MarkerBoards from '@/components/chief-controller/MarkerBoards'
import WhistleCodes from '@/components/chief-controller/WhistleCodes'
import StandardForms from '@/components/chief-controller/StandardForms'
import BellCodes from '@/components/chief-controller/BellCodes'
import BellSignals from '@/components/chief-controller/BellSignals'
import GSRChapters from '@/components/chief-controller/GSRChapters'
import SWRChapters from '@/components/chief-controller/SWRChapters'
import GeneralRules from '@/components/chief-controller/GeneralRules'
import RailwaysAct1989AllChapters from '@/components/chief-controller/RailwaysAct1989AllChapters'
import RailwayDARules1968AllChapters from '@/components/chief-controller/RailwayDARules1968AllChapters'
import RailwayLeaveRules1949AllRules from '@/components/chief-controller/RailwayLeaveRules1949AllRules'
import RailwayRestRules2005AllRules from '@/components/chief-controller/RailwayRestRules2005AllRules'
import RailwayConductRules1966AllRules from '@/components/chief-controller/RailwayConductRules1966AllRules'
import GSRAppendix from '@/components/chief-controller/GSRAppendix'
import SWRAppendix from '@/components/chief-controller/SWRAppendix'

const TopicContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const topicId = params.topic as string
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

  // Map topic IDs to components
  const topicComponents: { [key: string]: React.ComponentType } = {
    'speed-restrictions': SpeedRestrictions,
    'timings': Timings,
    'distances': Distances,
    'percentages': Percentages,
    'numbers': Numbers,
    'years': Years,
    'authorities': Authorities,
    'permissions': Permissions,
    'marker-boards': MarkerBoards,
    'whistle-codes': WhistleCodes,
    'standard-forms': StandardForms,
    'bell-codes': BellCodes,
    'bell-signals': BellSignals,
    'gsr-chapters': GSRChapters,
    'swr-chapters': SWRChapters,
    'general-rules': GeneralRules,
    'railways-act-1989-all-chapters': RailwaysAct1989AllChapters,
    'railway-da-rules-1968-all-chapters': RailwayDARules1968AllChapters,
    'railway-leave-rules-1949-all-rules': RailwayLeaveRules1949AllRules,
    'railway-rest-rules-2005-all-rules': RailwayRestRules2005AllRules,
    'railway-conduct-rules-1966-all-rules': RailwayConductRules1966AllRules,
    'gsr-appendix': GSRAppendix,
    'swr-appendix': SWRAppendix
  }

  const topicNames: { [key: string]: string } = {
    'speed-restrictions': 'Speed Restrictions',
    'timings': 'Timings',
    'distances': 'Distances',
    'percentages': 'Percentages',
    'numbers': 'Numbers',
    'years': 'Years',
    'authorities': 'Authorities',
    'permissions': 'Permissions/Sanctions/Authorised',
    'marker-boards': 'Marker Boards',
    'whistle-codes': 'Whistle Codes',
    'standard-forms': 'Standard Forms',
    'bell-codes': 'Bell Codes',
    'bell-signals': 'Bell Signals',
    'gsr-chapters': 'G&SR Chapters',
    'swr-chapters': 'SWR Chapters',
    'general-rules': 'G&SR All Rules',
    'railways-act-1989-all-chapters': 'Railways Act 1989 - All Chapters',
    'railway-da-rules-1968-all-chapters': 'Railway DA Rules 1968 - All Parts',
    'railway-leave-rules-1949-all-rules': 'Railway Leave Rules 1949 - All Rules',
    'railway-rest-rules-2005-all-rules': 'Railway Rest Rules 2005 - All Parts',
    'railway-conduct-rules-1966-all-rules': 'Railway Conduct Rules 1966 - All Rules',
    'gsr-appendix': 'G&SR Appendix',
    'swr-appendix': 'SWR Appendix'
  }

  const TopicComponent = topicComponents[topicId]

  const topics = ['gsr-chapters', 'swr-chapters', 'gsr-appendix', 'swr-appendix', 'general-rules', 'railways-act-1989-all-chapters', 'railway-da-rules-1968-all-chapters', 'railway-leave-rules-1949-all-rules', 'railway-rest-rules-2005-all-rules', 'railway-conduct-rules-1966-all-rules', 'speed-restrictions', 'timings', 'distances', 'percentages', 'authorities', 'permissions', 'numbers', 'years', 'marker-boards', 'whistle-codes', 'standard-forms', 'bell-codes', 'bell-signals']
  const currentIndex = topics.indexOf(topicId)
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null

  if (!TopicComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Topic Not Found</h1>
          <p className="text-gray-300 mb-6">The requested topic does not exist.</p>
          <button
            onClick={() => router.push('/topics/chief-controller')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Chief Controller
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 relative">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/topics/chief-controller')}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors mb-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back to Chief Controller</span>
              </button>
              <div className="flex justify-center items-center w-full">
                <h1 className="text-2xl md:text-3xl font-bold font-serif uppercase text-center">
                  {topicNames[topicId]}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <TopicComponent />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            {/* Previous Topic Button */}
            <button
              onClick={() => {
                if (prevTopic) {
                  router.push(`/topics/chief-controller/content/${prevTopic}`)
                }
              }}
              disabled={!prevTopic}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                prevTopic
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {prevTopic ? topicNames[prevTopic] : 'N/A'}
              </span>
            </button>

            {/* Current Topic Indicator */}
            <div className="flex-1 text-center">
              <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-indigo-600 rounded-lg">
                <span className="text-white text-sm font-medium">
                  {topicNames[topicId]}
                </span>
              </div>
            </div>

            {/* Next Topic Button */}
            <button
              onClick={() => {
                if (nextTopic) {
                  router.push(`/topics/chief-controller/content/${nextTopic}`)
                }
              }}
              disabled={!nextTopic}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                nextTopic
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {nextTopic ? topicNames[nextTopic] : 'N/A'}
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

export default TopicContentPage

