"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import all content components
import WorkingOfStations from '@/components/indian-railways-operating-manual/WorkingOfStations'
import WorkingOfTrains from '@/components/indian-railways-operating-manual/WorkingOfTrains'
import StationWorkingRules from '@/components/indian-railways-operating-manual/StationWorkingRules'
import ControlOrganization from '@/components/indian-railways-operating-manual/ControlOrganization'
import ControlOfficeApplication from '@/components/indian-railways-operating-manual/ControlOfficeApplication'
import Interlocking from '@/components/indian-railways-operating-manual/Interlocking'
import NonInterlockedWorking from '@/components/indian-railways-operating-manual/NonInterlockedWorking'
import Marshalling from '@/components/indian-railways-operating-manual/Marshalling'
import MarshallingYards from '@/components/indian-railways-operating-manual/MarshallingYards'
import FreightOperation from '@/components/indian-railways-operating-manual/FreightOperation'
import FreightOperationInformationSystem from '@/components/indian-railways-operating-manual/FreightOperationInformationSystem'
import ContainerTrainOperation from '@/components/indian-railways-operating-manual/ContainerTrainOperation'
import OverDimensionalConsignment from '@/components/indian-railways-operating-manual/OverDimensionalConsignment'
import PreferentialSchedule from '@/components/indian-railways-operating-manual/PreferentialSchedule'
import DerailmentInvestigation from '@/components/indian-railways-operating-manual/DerailmentInvestigation'
import CustomerInterface from '@/components/indian-railways-operating-manual/CustomerInterface'
import OperatingStatistics from '@/components/indian-railways-operating-manual/OperatingStatistics'
import Inspections from '@/components/indian-railways-operating-manual/Inspections'
import VariousConcepts from '@/components/indian-railways-operating-manual/VariousConcepts'
import CommandControlCoordination from '@/components/indian-railways-operating-manual/CommandControlCoordination'
import AntiCollisionDevice from '@/components/indian-railways-operating-manual/AntiCollisionDevice'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const chapterId = params.chapter as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Reset loading state when chapter changes
    const resetTimer = setTimeout(() => {
      setIsLoading(true)
    }, 0)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => {
      clearTimeout(resetTimer)
      clearTimeout(timer)
    }
  }, [chapterId])

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

  // Map chapter IDs to components
  const chapterComponents: { [key: string]: React.ComponentType } = {
    'working-of-stations': WorkingOfStations,
    'working-of-trains': WorkingOfTrains,
    'station-working-rules': StationWorkingRules,
    'control-organization': ControlOrganization,
    'control-office-application': ControlOfficeApplication,
    'interlocking': Interlocking,
    'non-interlocked-working': NonInterlockedWorking,
    'marshalling': Marshalling,
    'marshalling-yards': MarshallingYards,
    'freight-operation': FreightOperation,
    'freight-operation-information-system': FreightOperationInformationSystem,
    'container-train-operation': ContainerTrainOperation,
    'over-dimensional-consignment': OverDimensionalConsignment,
    'preferential-schedule': PreferentialSchedule,
    'derailment-investigation': DerailmentInvestigation,
    'customer-interface': CustomerInterface,
    'operating-statistics': OperatingStatistics,
    'inspections': Inspections,
    'various-concepts': VariousConcepts,
    'command-control-coordination': CommandControlCoordination,
    'anti-collision-device': AntiCollisionDevice
  }

  // Chapter metadata for navigation
  const chapters = [
    { id: 'working-of-stations', title: 'Working of Stations' },
    { id: 'working-of-trains', title: 'Working of Trains' },
    { id: 'marshalling', title: 'Marshalling' },
    { id: 'freight-operation', title: 'Freight Operation' },
    { id: 'preferential-schedule', title: 'Preferential Schedule' },
    { id: 'over-dimensional-consignment', title: 'Over Dimensional Consignment' },
    { id: 'control-organization', title: 'Control Organization' },
    { id: 'command-control-coordination', title: 'Command Control and Coordination' },
    { id: 'marshalling-yards', title: 'Marshalling Yards' },
    { id: 'container-train-operation', title: 'Container Train Operation' },
    { id: 'customer-interface', title: 'Customer Interface' },
    { id: 'inspections', title: 'Inspections' },
    { id: 'interlocking', title: 'Interlocking' },
    { id: 'station-working-rules', title: 'Station Working Rules' },
    { id: 'non-interlocked-working', title: 'Non-Interlocked Working' },
    { id: 'operating-statistics', title: 'Operating Statistics' },
    { id: 'freight-operation-information-system', title: 'Freight Operation Information System' },
    { id: 'derailment-investigation', title: 'Derailment Investigation' },
    { id: 'control-office-application', title: 'Control Office Application' },
    { id: 'anti-collision-device', title: 'Anti Collision Device' },
    { id: 'various-concepts', title: 'Various Concepts' },
  ]

  const ContentComponent = chapterComponents[chapterId]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Chapter Not Found</h1>
            <p className="text-gray-300 mb-6">Content for chapter {chapterId} is not available.</p>
            <button
              onClick={() => router.push('/manuals/indian-railways-operating-manual')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentIndex = chapters.findIndex(ch => ch.id === chapterId)
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null
  const currentChapter = chapters[currentIndex]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1e1b4b', minHeight: '100vh', width: '100%' }}> 
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/manuals/indian-railways-operating-manual')}
                className="flex items-center space-x-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base font-medium">
                Chapter {currentIndex + 1}: {currentChapter?.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full" style={{ backgroundColor: 'transparent', margin: 0, padding: 0, width: '100%', position: 'relative', zIndex: 1 }}>
        <ContentComponent />
      </div>

      {/* Navigation Buttons - At bottom of content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="mt-1 mb-1 p-3">
            <div className="flex items-center justify-between space-x-8">
              {/* Previous Page Button */}
              <button
                onClick={() => {
                  if (prevChapter) {
                    router.push(`/manuals/indian-railways-operating-manual/content/${prevChapter.id}`)
                  }
                }}
                disabled={!prevChapter}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  prevChapter
                    ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm text-center'>
                  {prevChapter ? prevChapter.title : 'Previous'}
                </span>
              </button>

              {/* Next Page Button */}
              <button
                onClick={() => {
                  if (nextChapter) {
                    router.push(`/manuals/indian-railways-operating-manual/content/${nextChapter.id}`)
                  }
                }}
                disabled={!nextChapter}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                  nextChapter
                    ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
                  Next
                  <ChevronRight className="w-4 h-4" />
                </span>
                <hr className="border-white/30 w-full my-1" />
                <span className='text-xs lg:text-sm text-center'>
                  {nextChapter ? nextChapter.title : 'Next'}
                </span>
              </button>
            </div>
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
          {/* Up Arrow Icon */}
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

