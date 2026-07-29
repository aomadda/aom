"use client"
import { useState, useEffect, type ComponentType } from 'react'
import { useParams, useRouter } from 'next/navigation'

import RTIAct2005Section1 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section1'
import RTIAct2005Section2 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section2'
import RTIAct2005Section3 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section3'
import RTIAct2005Section4 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section4'
import RTIAct2005Section5 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section5'
import RTIAct2005Section6 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section6'
import RTIAct2005Section7 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section7'
import RTIAct2005Section8 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section8'
import RTIAct2005Section9 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section9'
import RTIAct2005Section10 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section10'
import RTIAct2005Section11 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section11'
import RTIAct2005Section12 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section12'
import RTIAct2005Section13 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section13'
import RTIAct2005Section14 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section14'
import RTIAct2005Section15 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section15'
import RTIAct2005Section16 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section16'
import RTIAct2005Section17 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section17'
import RTIAct2005Section18 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section18'
import RTIAct2005Section19 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section19'
import RTIAct2005Section20 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section20'
import RTIAct2005Section21 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section21'
import RTIAct2005Section22 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section22'
import RTIAct2005Section23 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section23'
import RTIAct2005Section24 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section24'
import RTIAct2005Section25 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section25'
import RTIAct2005Section26 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section26'
import RTIAct2005Section27 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section27'
import RTIAct2005Section28 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section28'
import RTIAct2005Section29 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section29'
import RTIAct2005Section30 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section30'
import RTIAct2005Section31 from '@/components/right-to-information-act-2005/rti-act-2005-index-sections/RTIAct2005Section31'

const sectionComponents: Record<string, ComponentType> = {
  '1': RTIAct2005Section1,
  '2': RTIAct2005Section2,
  '3': RTIAct2005Section3,
  '4': RTIAct2005Section4,
  '5': RTIAct2005Section5,
  '6': RTIAct2005Section6,
  '7': RTIAct2005Section7,
  '8': RTIAct2005Section8,
  '9': RTIAct2005Section9,
  '10': RTIAct2005Section10,
  '11': RTIAct2005Section11,
  '12': RTIAct2005Section12,
  '13': RTIAct2005Section13,
  '14': RTIAct2005Section14,
  '15': RTIAct2005Section15,
  '16': RTIAct2005Section16,
  '17': RTIAct2005Section17,
  '18': RTIAct2005Section18,
  '19': RTIAct2005Section19,
  '20': RTIAct2005Section20,
  '21': RTIAct2005Section21,
  '22': RTIAct2005Section22,
  '23': RTIAct2005Section23,
  '24': RTIAct2005Section24,
  '25': RTIAct2005Section25,
  '26': RTIAct2005Section26,
  '27': RTIAct2005Section27,
  '28': RTIAct2005Section28,
  '29': RTIAct2005Section29,
  '30': RTIAct2005Section30,
  '31': RTIAct2005Section31
}

const getAvailableSections = () =>
  Object.keys(sectionComponents)
    .map(Number)
    .sort((a, b) => a - b)

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const sectionParam = (params.section as string) ?? ''
  const ContentComponent = sectionComponents[sectionParam]

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

  const openPDF = () => {
    const pdfFileName = `RTIACT2005Section${sectionParam}.pdf`
    const pdfPath = `/right-to-information-act-2005/${pdfFileName}`
    window.open(pdfPath, '_blank')
  }

  const goToSection = (offset: number) => {
    const current = parseInt(sectionParam, 10)
    if (Number.isNaN(current)) {
      return
    }

    const sections = getAvailableSections()
    const currentIndex = sections.indexOf(current)
    if (currentIndex === -1) {
      return
    }

    const targetIndex = currentIndex + offset
    if (targetIndex < 0 || targetIndex >= sections.length) {
      return
    }

    router.push(`/acts/right-to-information-act-2005/content/${sections[targetIndex]}`)
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Section Not Found</h1>
            <p className="text-gray-300 mb-6">
              Content for Section {sectionParam.toUpperCase()} is not available yet.
            </p>
            <button
              onClick={() => router.push('/acts/right-to-information-act-2005')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  const sections = getAvailableSections()
  const currentSectionNumber = parseInt(sectionParam, 10)
  const currentIndex = sections.indexOf(currentSectionNumber)
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/acts/right-to-information-act-2005')}
                className="flex items-center space-x-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base text-center">
                Topic : Section {sectionParam}
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
            {/* Previous Section Button */}
            <button
              onClick={() => goToSection(-1)}
              disabled={!previousSection}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                previousSection
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {previousSection ? `Section ${previousSection}` : 'Previous'}
              </span>
            </button>

            {/* Next Section Button */}
            <button
              onClick={() => goToSection(1)}
              disabled={!nextSection}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                nextSection
                  ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {nextSection ? `Section ${nextSection}` : 'Next'}
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
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage

