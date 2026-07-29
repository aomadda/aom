"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all content components
import OMPage1 from '@/components/operating-manual/operating-manual-index-pages/OMPage1'
import OMPage3 from '@/components/operating-manual/operating-manual-index-pages/OMPage3'
import OMPage7 from '@/components/operating-manual/operating-manual-index-pages/OMPage7'
import OMPage8 from '@/components/operating-manual/operating-manual-index-pages/OMPage8'
import OMPage10 from '@/components/operating-manual/operating-manual-index-pages/OMPage10'
import OMPage12 from '@/components/operating-manual/operating-manual-index-pages/OMPage12'
import OMPage15 from '@/components/operating-manual/operating-manual-index-pages/OMPage15'
import OMPage20 from '@/components/operating-manual/operating-manual-index-pages/OMPage20'
import OMPage29 from '@/components/operating-manual/operating-manual-index-pages/OMPage29'
import OMPage31 from '@/components/operating-manual/operating-manual-index-pages/OMPage31'
import OMPage39 from '@/components/operating-manual/operating-manual-index-pages/OMPage39'
import OMPage42 from '@/components/operating-manual/operating-manual-index-pages/OMPage42'
import OMPage46 from '@/components/operating-manual/operating-manual-index-pages/OMPage46'
import OMPage47 from '@/components/operating-manual/operating-manual-index-pages/OMPage47'
import OMPage51 from '@/components/operating-manual/operating-manual-index-pages/OMPage51'
import OMPage53 from '@/components/operating-manual/operating-manual-index-pages/OMPage53'
import OMPage54 from '@/components/operating-manual/operating-manual-index-pages/OMPage54'
import OMPage56 from '@/components/operating-manual/operating-manual-index-pages/OMPage56'
import OMPage59 from '@/components/operating-manual/operating-manual-index-pages/OMPage59'
import OMPage61 from '@/components/operating-manual/operating-manual-index-pages/OMPage61'
import OMPage62 from '@/components/operating-manual/operating-manual-index-pages/OMPage62'
import OMPage66 from '@/components/operating-manual/operating-manual-index-pages/OMPage66'
import OMPage73 from '@/components/operating-manual/operating-manual-index-pages/OMPage73'
import OMPage75 from '@/components/operating-manual/operating-manual-index-pages/OMPage75'
import OMPage78 from '@/components/operating-manual/operating-manual-index-pages/OMPage78'
import OMPage79 from '@/components/operating-manual/operating-manual-index-pages/OMPage79'
import OMPage81 from '@/components/operating-manual/operating-manual-index-pages/OMPage81'
import OMPage82 from '@/components/operating-manual/operating-manual-index-pages/OMPage82'
import OMPage83 from '@/components/operating-manual/operating-manual-index-pages/OMPage83'
import OMPage85 from '@/components/operating-manual/operating-manual-index-pages/OMPage85'
import OMPage86 from '@/components/operating-manual/operating-manual-index-pages/OMPage86'
import OMPage87 from '@/components/operating-manual/operating-manual-index-pages/OMPage87'
import OMPage89 from '@/components/operating-manual/operating-manual-index-pages/OMPage89'
import OMPage91 from '@/components/operating-manual/operating-manual-index-pages/OMPage91'
import OMPage92 from '@/components/operating-manual/operating-manual-index-pages/OMPage92'
import OMPage95 from '@/components/operating-manual/operating-manual-index-pages/OMPage95'
import OMPage97 from '@/components/operating-manual/operating-manual-index-pages/OMPage97'
import OMPage98 from '@/components/operating-manual/operating-manual-index-pages/OMPage98'
import OMPage102 from '@/components/operating-manual/operating-manual-index-pages/OMPage102'
import OMPage105 from '@/components/operating-manual/operating-manual-index-pages/OMPage105'
import OMPage106 from '@/components/operating-manual/operating-manual-index-pages/OMPage106'
import OMPage109 from '@/components/operating-manual/operating-manual-index-pages/OMPage109'
import OMPage112 from '@/components/operating-manual/operating-manual-index-pages/OMPage112'
import OMPage113 from '@/components/operating-manual/operating-manual-index-pages/OMPage113'
import OMPage115 from '@/components/operating-manual/operating-manual-index-pages/OMPage115'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const pageNumber = params.page as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Reset loading state when page number changes
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
  }, [pageNumber])

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

  // Map page numbers to components
  const pageComponents: { [key: string]: React.ComponentType } = {
    '1': OMPage1,
    '3': OMPage3,
    '7': OMPage7,
    '8': OMPage8,
    '10': OMPage10,
    '12': OMPage12,
    '15': OMPage15,
    '20': OMPage20,
    '29': OMPage29,
    '31': OMPage31,
    '39': OMPage39,
    '42': OMPage42,
    '46': OMPage46,
    '47': OMPage47,
    '51': OMPage51,
    '53': OMPage53,
    '54': OMPage54,
    '56': OMPage56,
    '59': OMPage59,
    '61': OMPage61,
    '62': OMPage62,
    '66': OMPage66,
    '73': OMPage73,
    '75': OMPage75,
    '78': OMPage78,
    '79': OMPage79,
    '81': OMPage81,
    '82': OMPage82,
    '83': OMPage83,
    '85': OMPage85,
    '86': OMPage86,
    '87': OMPage87,
    '89': OMPage89,
    '91': OMPage91,
    '92': OMPage92,
    '95': OMPage95,
    '97': OMPage97,
    '98': OMPage98,
    '102': OMPage102,
    '105': OMPage105,
    '106': OMPage106,
    '109': OMPage109,
    '112': OMPage112,
    '113': OMPage113,
    '115': OMPage115
  }

  const ContentComponent = pageComponents[pageNumber]

  const openPDF = () => {
    let pdfFileName = ''
    
    if (pageNumber === '1') {
      pdfFileName = 'OMPaege1.pdf'
    } else {
      pdfFileName = `OMPage${pageNumber.padStart(2, '0')}.pdf`
    }
    
    const pdfPath = `/operating-manual-pdfs/${pdfFileName}`
    window.open(pdfPath, '_blank')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for page {pageNumber} is not available.</p>
            <button
              onClick={() => router.push('/manuals/opertaing-manual')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1e1b4b', minHeight: '100vh', width: '100%' }}> 
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/manuals/opertaing-manual')}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>
              
              
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 mr-2 rounded-sm backdrop-blur-sm border border-blue-400/30">
              <ul className="space-y-1 text-center">
                  {(() => {
                    // OPTGManualIndex లోని sections array ని ఇక్కడ define చేయాలి లేదా import చేయాలి.
                    // ఇక్కడ inline గా define చేస్తున్నాను (concise version, actual లో import చేయవచ్చు).
                    const sections = [
                      {
                        topics: [{ title: "Introduction", page: "1" }]
                      },
                      {
                        topics: [
                          { title: "Station Yard", page: "3" },
                          { title: "Station Equipment", page: "7" },
                          { title: "Station Buildings", page: "8" },
                          { title: "Station Staff", page: "10" },
                          { title: "Station Working Rules", page: "12" },
                          { title: "Station registers, books & forms", page: "15" },
                          { title: "Station Management", page: "20" }
                        ]
                      },
                      {
                        topics: [
                          { title: "Components of a train", page: "29" },
                          { title: "Coaching Train Operations", page: "31" },
                          { title: "Time Tabling", page: "39" },
                          { title: "Punctuality", page: "42" },
                          { title: "Passenger Marketing", page: "46" },
                          { title: "Freight Train Operations", page: "47" },
                          { title: "Complexity in Freight Operation", page: "51" },
                          { title: "Daily Monitoring of Goods Operation", page: "53" },
                          { title: "Freight Marketing", page: "54" },
                          { title: "Crew Management", page: "56" }
                        ]
                      },
                      {
                        topics: [
                          { title: "Divisional Control Office", page: "59" },
                          { title: "General Order of Precedence of Trains", page: "61" },
                          { title: "Charting", page: "62" },
                          { title: "Operational discipline", page: "66" },
                          { title: "Zonal Control Office", page: "73" }
                        ]
                      },
                      {
                        topics: [
                          { title: "Types of Blocks", page: "75" },
                          { title: "Rolling Block Programme", page: "78" },
                          { title: "Block Productivity", page: "79" }
                        ]
                      },
                      {
                        topics: [
                          { title: "Protection and Reporting", page: "81" },
                          { title: "Jerk due to track defect while train on run", page: "82" },
                          { title: "Obstruction on adjacent track", page: "83" },
                          { title: "Hot Axle", page: "83" },
                          { title: "Fire on train", page: "85" },
                          { title: "Train parting", page: "86" },
                          { title: "Flat-tyre", page: "87" },
                          { title: "Precaution to be taken during storm and heavy wind", page: "89" }
                        ]
                      },
                      {
                        topics: [
                          { title: "Traffic Output Statistics", page: "91" },
                          { title: "Operating Tools", page: "92" },
                          { title: "Asset Utilization Statistics", page: "95" }
                        ]
                      },
                      {
                        topics: [
                          { title: "Objectives of Inspections", page: "97" },
                          { title: "Types of Inspections", page: "98" },
                          { title: "Quality of Inspections", page: "102" }
                        ]
                      },
                      {
                        topics: [
                          { title: "New Projects / Works", page: "105" },
                          { title: "Traffic Survey", page: "106" },
                          { title: "Financial Internal Rate of Return", page: "109" },
                          { title: "Detailed Project Report (DPR)", page: "112" },
                          { title: "Uploading proposals in IRPSM", page: "113" },
                          { title: "Private Freight Handling Terminals", page: "115" }
                        ]
                      }
                    ];
                    // అన్ని topics ని ఒక array గా తీసుకోవాలి
                    const allTopics = sections.flatMap(section => section.topics);
                    // ఇప్పుడు pageNumber కి match అయ్యే topic తీసుకోవాలి
                    const topic = allTopics.find(t => t.page === pageNumber);
                    return topic ? (
                      <li className="flex items-center space-x-2">
                        <span className="text-white text-xs lg:text-base">Topic : {topic.title}</span>
                      </li>
                    ) : (
                      <li className="text-red-300">Topic title not found for this page.</li>
                    );
                  })()}
                </ul>
              </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={openPDF}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                <span>Document</span>
              </button>
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
              // Find the previous available page
              const currentPageNum = parseInt(pageNumber)
              const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
              const currentIndex = availablePages.indexOf(currentPageNum)
              
              if (currentIndex > 0) {
                const prevPage = availablePages[currentIndex - 1]
                router.push(`/manuals/opertaing-manual/content/${prevPage}`)
              }
            }}
            disabled={(() => {
              const currentPageNum = parseInt(pageNumber)
              const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
              const currentIndex = availablePages.indexOf(currentPageNum)
              return currentIndex <= 0
            })()}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
              (() => {
                const currentPageNum = parseInt(pageNumber)
                const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availablePages.indexOf(currentPageNum)
                return currentIndex > 0
              })()
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                : 'bg-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
              Previous
            </span>
            <hr className="border-white/30 w-full my-1" />
            <span className='text-xs lg:text-sm'>
              {(() => {
                const currentPageNum = parseInt(pageNumber)
                const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availablePages.indexOf(currentPageNum)
                
                if (currentIndex > 0) {
                  const prevPage = availablePages[currentIndex - 1]
                  const sections = [
                    { topics: [{ title: "Introduction", page: "1" }] },
                    { topics: [
                      { title: "Station Yard", page: "3" },
                      { title: "Station Equipment", page: "7" },
                      { title: "Station Buildings", page: "8" },
                      { title: "Station Staff", page: "10" },
                      { title: "Station Working Rules", page: "12" },
                      { title: "Station registers, books & forms", page: "15" },
                      { title: "Station Management", page: "20" }
                    ] },
                    { topics: [
                      { title: "Components of a train", page: "29" },
                      { title: "Coaching Train Operations", page: "31" },
                      { title: "Time Tabling", page: "39" },
                      { title: "Punctuality", page: "42" },
                      { title: "Passenger Marketing", page: "46" },
                      { title: "Freight Train Operations", page: "47" },
                      { title: "Complexity in Freight Operation", page: "51" },
                      { title: "Daily Monitoring of Goods Operation", page: "53" },
                      { title: "Freight Marketing", page: "54" },
                      { title: "Crew Management", page: "56" }
                    ] },
                    { topics: [
                      { title: "Divisional Control Office", page: "59" },
                      { title: "General Order of Precedence of Trains", page: "61" },
                      { title: "Charting", page: "62" },
                      { title: "Operational discipline", page: "66" },
                      { title: "Zonal Control Office", page: "73" }
                    ] },
                    { topics: [
                      { title: "Types of Blocks", page: "75" },
                      { title: "Rolling Block Programme", page: "78" },
                      { title: "Block Productivity", page: "79" }
                    ] },
                    { topics: [
                      { title: "Protection and Reporting", page: "81" },
                      { title: "Jerk due to track defect while train on run", page: "82" },
                      { title: "Obstruction on adjacent track", page: "83" },
                      { title: "Hot Axle", page: "83" },
                      { title: "Fire on train", page: "85" },
                      { title: "Train parting", page: "86" },
                      { title: "Flat-tyre", page: "87" },
                      { title: "Precaution to be taken during storm and heavy wind", page: "89" }
                    ] },
                    { topics: [
                      { title: "Traffic Output Statistics", page: "91" },
                      { title: "Operating Tools", page: "92" },
                      { title: "Asset Utilization Statistics", page: "95" }
                    ] },
                    { topics: [
                      { title: "Objectives of Inspections", page: "97" },
                      { title: "Types of Inspections", page: "98" },
                      { title: "Quality of Inspections", page: "102" }
                    ] },
                    { topics: [
                      { title: "New Projects / Works", page: "105" },
                      { title: "Traffic Survey", page: "106" },
                      { title: "Financial Internal Rate of Return", page: "109" },
                      { title: "Detailed Project Report (DPR)", page: "112" },
                      { title: "Uploading proposals in IRPSM", page: "113" },
                      { title: "Private Freight Handling Terminals", page: "115" }
                    ] }
                  ]
                  const allTopics = sections.flatMap(section => section.topics)
                  const prevTopic = allTopics.find(t => t.page === prevPage.toString())
                  return prevTopic ? prevTopic.title : `Page ${prevPage}`
                }
                return "Previous"
              })()}
            </span>
          </button>

          {/* Next Page Button */}
          <button
            onClick={() => {
              // Find the next available page
              const currentPageNum = parseInt(pageNumber)
              const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
              const currentIndex = availablePages.indexOf(currentPageNum)
              
              if (currentIndex < availablePages.length - 1) {
                const nextPage = availablePages[currentIndex + 1]
                router.push(`/manuals/opertaing-manual/content/${nextPage}`)
              }
            }}
            disabled={(() => {
              const currentPageNum = parseInt(pageNumber)
              const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
              const currentIndex = availablePages.indexOf(currentPageNum)
              return currentIndex >= availablePages.length - 1
            })()}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
              (() => {
                const currentPageNum = parseInt(pageNumber)
                const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availablePages.indexOf(currentPageNum)
                return currentIndex < availablePages.length - 1
              })()
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                : 'bg-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
              Next
            </span>
            <hr className="border-white/30 w-full my-1" />
            <span className='text-xs lg:text-sm'>
              {(() => {
                const currentPageNum = parseInt(pageNumber)
                const availablePages = Object.keys(pageComponents).map(Number).sort((a, b) => a - b)
                const currentIndex = availablePages.indexOf(currentPageNum)
                
                if (currentIndex < availablePages.length - 1) {
                  const nextPage = availablePages[currentIndex + 1]
                  const sections = [
                    { topics: [{ title: "Introduction", page: "1" }] },
                    { topics: [
                      { title: "Station Yard", page: "3" },
                      { title: "Station Equipment", page: "7" },
                      { title: "Station Buildings", page: "8" },
                      { title: "Station Staff", page: "10" },
                      { title: "Station Working Rules", page: "12" },
                      { title: "Station registers, books & forms", page: "15" },
                      { title: "Station Management", page: "20" }
                    ] },
                    { topics: [
                      { title: "Components of a train", page: "29" },
                      { title: "Coaching Train Operations", page: "31" },
                      { title: "Time Tabling", page: "39" },
                      { title: "Punctuality", page: "42" },
                      { title: "Passenger Marketing", page: "46" },
                      { title: "Freight Train Operations", page: "47" },
                      { title: "Complexity in Freight Operation", page: "51" },
                      { title: "Daily Monitoring of Goods Operation", page: "53" },
                      { title: "Freight Marketing", page: "54" },
                      { title: "Crew Management", page: "56" }
                    ] },
                    { topics: [
                      { title: "Divisional Control Office", page: "59" },
                      { title: "General Order of Precedence of Trains", page: "61" },
                      { title: "Charting", page: "62" },
                      { title: "Operational discipline", page: "66" },
                      { title: "Zonal Control Office", page: "73" }
                    ] },
                    { topics: [
                      { title: "Types of Blocks", page: "75" },
                      { title: "Rolling Block Programme", page: "78" },
                      { title: "Block Productivity", page: "79" }
                    ] },
                    { topics: [
                      { title: "Protection and Reporting", page: "81" },
                      { title: "Jerk due to track defect while train on run", page: "82" },
                      { title: "Obstruction on adjacent track", page: "83" },
                      { title: "Hot Axle", page: "83" },
                      { title: "Fire on train", page: "85" },
                      { title: "Train parting", page: "86" },
                      { title: "Flat-tyre", page: "87" },
                      { title: "Precaution to be taken during storm and heavy wind", page: "89" }
                    ] },
                    { topics: [
                      { title: "Traffic Output Statistics", page: "91" },
                      { title: "Operating Tools", page: "92" },
                      { title: "Asset Utilization Statistics", page: "95" }
                    ] },
                    { topics: [
                      { title: "Objectives of Inspections", page: "97" },
                      { title: "Types of Inspections", page: "98" },
                      { title: "Quality of Inspections", page: "102" }
                    ] },
                    { topics: [
                      { title: "New Projects / Works", page: "105" },
                      { title: "Traffic Survey", page: "106" },
                      { title: "Financial Internal Rate of Return", page: "109" },
                      { title: "Detailed Project Report (DPR)", page: "112" },
                      { title: "Uploading proposals in IRPSM", page: "113" },
                      { title: "Private Freight Handling Terminals", page: "115" }
                    ] }
                  ]
                  const allTopics = sections.flatMap(section => section.topics)
                  const nextTopic = allTopics.find(t => t.page === nextPage.toString())
                  return nextTopic ? nextTopic.title : `Page ${nextPage}`
                }
                return "Next"
              })()}
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
          className="fixed bottom-4 left-4 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
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
