'use client'
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

import Section1 from '@/components/disaster-management-act-2005/Section1'
import Section2 from '@/components/disaster-management-act-2005/Section2'
import Section3 from '@/components/disaster-management-act-2005/Section3'
import Section4 from '@/components/disaster-management-act-2005/Section4'
import Section5 from '@/components/disaster-management-act-2005/Section5'
import Section6 from '@/components/disaster-management-act-2005/Section6'
import Section7 from '@/components/disaster-management-act-2005/Section7'
import Section8 from '@/components/disaster-management-act-2005/Section8'
import Section9 from '@/components/disaster-management-act-2005/Section9'
import Section10 from '@/components/disaster-management-act-2005/Section10'
import Section11 from '@/components/disaster-management-act-2005/Section11'
import Section12 from '@/components/disaster-management-act-2005/Section12'
import Section13 from '@/components/disaster-management-act-2005/Section13'
import Section14 from '@/components/disaster-management-act-2005/Section14'
import Section15 from '@/components/disaster-management-act-2005/Section15'
import Section16 from '@/components/disaster-management-act-2005/Section16'
import Section17 from '@/components/disaster-management-act-2005/Section17'
import Section18 from '@/components/disaster-management-act-2005/Section18'
import Section19 from '@/components/disaster-management-act-2005/Section19'
import Section20 from '@/components/disaster-management-act-2005/Section20'
import Section21 from '@/components/disaster-management-act-2005/Section21'
import Section22 from '@/components/disaster-management-act-2005/Section22'
import Section23 from '@/components/disaster-management-act-2005/Section23'
import Section24 from '@/components/disaster-management-act-2005/Section24'
import Section25 from '@/components/disaster-management-act-2005/Section25'
import Section26 from '@/components/disaster-management-act-2005/Section26'
import Section27 from '@/components/disaster-management-act-2005/Section27'
import Section28 from '@/components/disaster-management-act-2005/Section28'
import Section29 from '@/components/disaster-management-act-2005/Section29'
import Section30 from '@/components/disaster-management-act-2005/Section30'
import Section31 from '@/components/disaster-management-act-2005/Section31'
import Section32 from '@/components/disaster-management-act-2005/Section32'
import Section33 from '@/components/disaster-management-act-2005/Section33'
import Section34 from '@/components/disaster-management-act-2005/Section34'
import Section35 from '@/components/disaster-management-act-2005/Section35'
import Section36 from '@/components/disaster-management-act-2005/Section36'
import Section37 from '@/components/disaster-management-act-2005/Section37'
import Section38 from '@/components/disaster-management-act-2005/Section38'
import Section39 from '@/components/disaster-management-act-2005/Section39'
import Section40 from '@/components/disaster-management-act-2005/Section40'
import Section41 from '@/components/disaster-management-act-2005/Section41'
import Section42 from '@/components/disaster-management-act-2005/Section42'
import Section43 from '@/components/disaster-management-act-2005/Section43'
import Section44 from '@/components/disaster-management-act-2005/Section44'
import Section45 from '@/components/disaster-management-act-2005/Section45'
import Section46 from '@/components/disaster-management-act-2005/Section46'
import Section47 from '@/components/disaster-management-act-2005/Section47'
import Section48 from '@/components/disaster-management-act-2005/Section48'
import Section49 from '@/components/disaster-management-act-2005/Section49'
import Section50 from '@/components/disaster-management-act-2005/Section50'
import Section51 from '@/components/disaster-management-act-2005/Section51'
import Section52 from '@/components/disaster-management-act-2005/Section52'
import Section53 from '@/components/disaster-management-act-2005/Section53'
import Section54 from '@/components/disaster-management-act-2005/Section54'
import Section55 from '@/components/disaster-management-act-2005/Section55'
import Section56 from '@/components/disaster-management-act-2005/Section56'
import Section57 from '@/components/disaster-management-act-2005/Section57'
import Section58 from '@/components/disaster-management-act-2005/Section58'
import Section59 from '@/components/disaster-management-act-2005/Section59'
import Section60 from '@/components/disaster-management-act-2005/Section60'
import Section61 from '@/components/disaster-management-act-2005/Section61'
import Section62 from '@/components/disaster-management-act-2005/Section62'
import Section63 from '@/components/disaster-management-act-2005/Section63'
import Section64 from '@/components/disaster-management-act-2005/Section64'
import Section65 from '@/components/disaster-management-act-2005/Section65'
import Section66 from '@/components/disaster-management-act-2005/Section66'
import Section67 from '@/components/disaster-management-act-2005/Section67'
import Section68 from '@/components/disaster-management-act-2005/Section68'
import Section69 from '@/components/disaster-management-act-2005/Section69'
import Section70 from '@/components/disaster-management-act-2005/Section70'
import Section71 from '@/components/disaster-management-act-2005/Section71'
import Section72 from '@/components/disaster-management-act-2005/Section72'
import Section73 from '@/components/disaster-management-act-2005/Section73'
import Section74 from '@/components/disaster-management-act-2005/Section74'
import Section75 from '@/components/disaster-management-act-2005/Section75'
import Section76 from '@/components/disaster-management-act-2005/Section76'
import Section77 from '@/components/disaster-management-act-2005/Section77'
import Section78 from '@/components/disaster-management-act-2005/Section78'
import Section79 from '@/components/disaster-management-act-2005/Section79'

export default function DisasterManagementActSectionPage() {
  const params = useParams()
  const router = useRouter()
  const sectionNumber = params.section as string
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sectionComponents: { [key: string]: React.ComponentType } = {
    '1': Section1,
    '2': Section2,
    '3': Section3,
    '4': Section4,
    '5': Section5,
    '6': Section6,
    '7': Section7,
    '8': Section8,
    '9': Section9,
    '10': Section10,
    '11': Section11,
    '12': Section12,
    '13': Section13,
    '14': Section14,
    '15': Section15,
    '16': Section16,
    '17': Section17,
    '18': Section18,
    '19': Section19,
    '20': Section20,
    '21': Section21,
    '22': Section22,
    '23': Section23,
    '24': Section24,
    '25': Section25,
    '26': Section26,
    '27': Section27,
    '28': Section28,
    '29': Section29,
    '30': Section30,
    '31': Section31,
    '32': Section32,
    '33': Section33,
    '34': Section34,
    '35': Section35,
    '36': Section36,
    '37': Section37,
    '38': Section38,
    '39': Section39,
    '40': Section40,
    '41': Section41,
    '42': Section42,
    '43': Section43,
    '44': Section44,
    '45': Section45,
    '46': Section46,
    '47': Section47,
    '48': Section48,
    '49': Section49,
    '50': Section50,
    '51': Section51,
    '52': Section52,
    '53': Section53,
    '54': Section54,
    '55': Section55,
    '56': Section56,
    '57': Section57,
    '58': Section58,
    '59': Section59,
    '60': Section60,
    '61': Section61,
    '62': Section62,
    '63': Section63,
    '64': Section64,
    '65': Section65,
    '66': Section66,
    '67': Section67,
    '68': Section68,
    '69': Section69,
    '70': Section70,
    '71': Section71,
    '72': Section72,
    '73': Section73,
    '74': Section74,
    '75': Section75,
    '76': Section76,
    '77': Section77,
    '78': Section78,
    '79': Section79
  }

  const ContentComponent = sectionComponents[sectionNumber]

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Section Not Found</h1>
            <p className="text-gray-300 mb-6">Content for Section {sectionNumber} is not available.</p>
            <button
              onClick={() => router.push('/acts/disaster-management-act-2005')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/acts/disaster-management-act-2005')}
                className="flex items-center space-x-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <p className="text-white text-xs lg:text-base text-center">
                Topic : Section {sectionNumber}
              </p>
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
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availableSections.indexOf(currentSecNum)
                if (currentIndex > 0) {
                  router.push(`/acts/disaster-management-act-2005/content/${availableSections[currentIndex - 1]}`)
                }
              }}
              disabled={(() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                return availableSections.indexOf(currentSecNum) <= 0
              })()}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                (() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  return availableSections.indexOf(currentSecNum) > 0
                    ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                })()
              }`}
            >
              <span className="text-xs lg:text-sm">Previous</span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {(() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  const currentIndex = availableSections.indexOf(currentSecNum)
                  return currentIndex > 0 ? `Section ${availableSections[currentIndex - 1]}` : 'Previous'
                })()}
              </span>
            </button>

            <button
              onClick={() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availableSections.indexOf(currentSecNum)
                if (currentIndex < availableSections.length - 1) {
                  router.push(`/acts/disaster-management-act-2005/content/${availableSections[currentIndex + 1]}`)
                }
              }}
              disabled={(() => {
                const currentSecNum = parseInt(sectionNumber)
                const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                return availableSections.indexOf(currentSecNum) >= availableSections.length - 1
              })()}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                (() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  return availableSections.indexOf(currentSecNum) < availableSections.length - 1
                    ? 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                })()
              }`}
            >
              <span className="text-xs lg:text-sm">Next</span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {(() => {
                  const currentSecNum = parseInt(sectionNumber)
                  const availableSections = Object.keys(sectionComponents).map(Number).sort((a, b) => a - b)
                  const currentIndex = availableSections.indexOf(currentSecNum)
                  return currentIndex < availableSections.length - 1
                    ? `Section ${availableSections[currentIndex + 1]}`
                    : 'Next'
                })()}
              </span>
            </button>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-linear-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
