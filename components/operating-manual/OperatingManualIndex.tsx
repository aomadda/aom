"use client"
import React, { useState, useEffect, useRef } from 'react'
import { BookOpen, Train, Building, Settings, AlertTriangle, BarChart3, ChevronDown, ChevronUp, CheckCircle, Signal, Eye, Target, ExternalLink, FileText, BookOpenCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

const OPTGIndex = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()
  const navigatingRef = useRef(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId)
      }
      return [sectionId]
    })
  }

  const openPDF = (pageNumber: string) => {
    // Handle special cases for page numbers
    let pdfFileName = ''
    
    if (pageNumber === '1') {
      pdfFileName = 'OMPaege1.pdf' // Special case for page 1
    } else {
      pdfFileName = `OMPage${pageNumber.padStart(2, '0')}.pdf`
    }
    
    const pdfPath = `/operating-manual-pdfs/${pdfFileName}`
    
    setOpeningPDF(pageNumber)
    // Small delay to show loading state
    setTimeout(() => {
      if (isMobile) {
        // For mobile devices, open PDF directly in the same tab
        window.location.href = pdfPath
      } else {
        // For large devices, open PDF in new tab
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (pageNumber: string) => {
    // Prevent multiple clicks/navigations
    if (navigatingRef.current || openingContent === pageNumber) {
      return
    }
    
    navigatingRef.current = true
    setOpeningContent(pageNumber)
    
    // Use requestAnimationFrame for smoother navigation on mobile
    requestAnimationFrame(() => {
      setTimeout(() => {
        try {
          // Navigate to the content page
          router.push(`/manuals/opertaing-manual/content/${pageNumber}`)
        } catch (error) {
          console.error('Navigation error:', error)
        } finally {
          // Reset after navigation completes
          setTimeout(() => {
            setOpeningContent(null)
            navigatingRef.current = false
          }, 500)
        }
      }, 150)
    })
  }

  const sections = [
    {
      id: 1,
      title: "INTRODUCTION",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Overview and fundamental concepts of operating manual",
      topics: [
        { title: "Introduction", page: "1" }
      ]
    },
    {
      id: 2,
      title: "WORKING OF STATIONS",
      icon: <Building className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Station operations, equipment, and management procedures",
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
      id: 3,
      title: "WORKING OF TRAINS",
      icon: <Train className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Train operations, timetabling, and crew management",
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
      id: 4,
      title: "CONTROL ORGANIZATION",
      icon: <Settings className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Control office operations and operational discipline",
      topics: [
        { title: "Divisional Control Office", page: "59" },
        { title: "General Order of Precedence of Trains", page: "61" },
        { title: "Charting", page: "62" },
        { title: "Operational discipline", page: "66" },
        { title: "Zonal Control Office", page: "73" }
      ]
    },
    {
      id: 5,
      title: "TRAFFIC BLOCKS",
      icon: <Signal className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Block types, rolling programs, and productivity",
      topics: [
        { title: "Types of Blocks", page: "75" },
        { title: "Rolling Block Programme", page: "78" },
        { title: "Block Productivity", page: "79" }
      ]
    },
    {
      id: 6,
      title: "UNUSUAL OCCURRENCES",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Emergency procedures and safety protocols",
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
      id: 7,
      title: "OPERATING STATISTICS",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Traffic statistics and asset utilization",
      topics: [
        { title: "Traffic Output Statistics", page: "91" },
        { title: "Operating Tools", page: "92" },
        { title: "Asset Utilization Statistics", page: "95" }
      ]
    },
    {
      id: 8,
      title: "INSPECTIONS",
      icon: <Eye className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Inspection objectives, types, and quality standards",
      topics: [
        { title: "Objectives of Inspections", page: "97" },
        { title: "Types of Inspections", page: "98" },
        { title: "Quality of Inspections", page: "102" }
      ]
    },
    {
      id: 9,
      title: "TRAFFIC PLANNING",
      icon: <Target className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "Project planning, surveys, and financial analysis",
      topics: [
        { title: "New Projects / Works", page: "105" },
        { title: "Traffic Survey", page: "106" },
        { title: "Financial Internal Rate of Return", page: "109" },
        { title: "Detailed Project Report (DPR)", page: "112" },
        { title: "Uploading proposals in IRPSM", page: "113" },
        { title: "Private Freight Handling Terminals", page: "115" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">SCR 2023 - COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Operating Manual SCR 2023 - Comprehensive guide covering all 9 sections 
              with detailed procedures, operational guidelines, and safety protocols for railway operations.
            </p>
            <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Operating Manual SCR 2023 - For Official Use Only</p>
            </div>
            
            
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Section Header */}
                  <div 
                    className={`bg-gradient-to-r ${section.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Section Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {section.icon}
                      </div>
                      
                      {/* Section Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Section - {section.id}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {section.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {section.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Page Range */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Pages: {Math.min(...section.topics.map(topic => parseInt(topic.page)))} - {Math.max(...section.topics.map(topic => parseInt(topic.page)))}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(section.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Topics List */}
                  {expandedSections.includes(section.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {section.topics.map((topic, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {topic.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(topic.page)}
                                  disabled={openingPDF === topic.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === topic.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === topic.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === topic.page ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== topic.page && <ExternalLink className="w-3 h-3" />}
                                </button>
                                
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(topic.page)}
                                  disabled={openingContent === topic.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === topic.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === topic.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === topic.page ? 'Opening...' : 'View Content'}</span>
                                </button>
                                
                                {/* <span className="text-gray-400 text-xs lg:ml-2">
                                  {isMobile ? '📄 View Document & 📖 View Content' : '📄 PDF in new tab & 📖 Content in same tab'}
                                </span> */}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Operating Manual Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 9 sections of the Operating Manual SCR 2023, providing essential information 
                  for railway operations, station management, train operations, control organization, and safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default OPTGIndex