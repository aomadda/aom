"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, Eye, Shield, FileText, Settings, ChevronDown, ChevronUp, ExternalLink, BookOpenCheck, Gavel, Building2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const RTIAct2005Index = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

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

  const normalizeSectionNumber = (sectionNumber: string) => {
    if (/^\d+$/.test(sectionNumber)) {
      return sectionNumber
    }

    const digits = sectionNumber.match(/\d+/g)
    if (digits?.length) {
      return digits.join('')
    }

    return null
  }

  const openPDF = (sectionNumber: string) => {
    const normalized = normalizeSectionNumber(sectionNumber)
    if (!normalized) {
      return
    }

    const pdfFileName = `RTIACT2005Section${normalized}.pdf`
    const pdfPath = `/right-to-information-act-2005/${pdfFileName}`

    setOpeningPDF(sectionNumber)
    setTimeout(() => {
      if (isMobile) {
        window.location.href = pdfPath
      } else {
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (sectionNumber: string) => {
    setOpeningContent(sectionNumber)
    
    // Normalize section number for URL (handle Schedule sections)
    let normalizedSection = sectionNumber
    if (sectionNumber.includes('Schedule')) {
      // For Schedule I -> schedule-i, Schedule II -> schedule-ii
      normalizedSection = sectionNumber.toLowerCase().replace(/\s+/g, '-')
    }
    
    const route = `/acts/right-to-information-act-2005/content/${normalizedSection}`
    console.log('Navigating to:', route, 'from section:', sectionNumber)
    
    setTimeout(() => {
      router.push(route)
      setOpeningContent(null)
    }, 100)
  }

  const chapters = [
    {
      id: 1,
      title: "PRELIMINARY",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Short title, extent and commencement, definitions",
      sections: [
        { number: "1", title: "Short title, extent and commencement." },
        { number: "2", title: "Definitions." }
      ]
    },
    {
      id: 2,
      title: "RIGHT TO INFORMATION AND OBLIGATIONS OF PUBLIC AUTHORITIES",
      icon: <Eye className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Right to information, obligations, and procedures for information requests",
      sections: [
        { number: "3", title: "Right to information." },
        { number: "4", title: "Obligations of public authorities." },
        { number: "5", title: "Designation of Public Information Officers." },
        { number: "6", title: "Request for obtaining information." },
        { number: "7", title: "Disposal of request." },
        { number: "8", title: "Exemption from disclosure of information." },
        { number: "9", title: "Grounds for rejection to access in certain cases." },
        { number: "10", title: "Severability." },
        { number: "11", title: "Third party information." }
      ]
    },
    {
      id: 3,
      title: "THE CENTRAL INFORMATION COMMISSION",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Constitution, terms of office and removal of Central Information Commission",
      sections: [
        { number: "12", title: "Constitution of Central Information Commission." },
        { number: "13", title: "Terms of office and conditions of service." },
        { number: "14", title: "Removal of Chief Information Commissioner or Information Commissioner." }
      ]
    },
    {
      id: 4,
      title: "THE STATE INFORMATION COMMISSION",
      icon: <Shield className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Constitution, terms of office and removal of State Information Commission",
      sections: [
        { number: "15", title: "Constitution of State Information Commission." },
        { number: "16", title: "Term of office and conditions of service." },
        { number: "17", title: "Removal of State Chief Information Commissioner or State Information Commissioner." }
      ]
    },
    {
      id: 5,
      title: "POWERS AND FUNCTIONS OF THE INFORMATION COMMISSIONS, APPEAL AND PENALTIES",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-teal-600 to-emerald-700",
      description: "Powers, functions, appeals and penalties under the Information Commissions",
      sections: [
        { number: "18", title: "Powers and functions of Information Commissions." },
        { number: "19", title: "Appeal." },
        { number: "20", title: "Penalties." }
      ]
    },
    {
      id: 6,
      title: "MISCELLANEOUS",
      icon: <Settings className="w-6 h-6" />,
      color: "from-emerald-600 to-green-700",
      description: "Miscellaneous provisions, exemptions, and general powers",
      sections: [
        { number: "21", title: "Protection of action taken in good faith." },
        { number: "22", title: "Act to have overriding effect." },
        { number: "23", title: "Bar of jurisdiction of courts." },
        { number: "24", title: "Act not to apply to certain organisations." },
        { number: "25", title: "Monitoring and reporting." },
        { number: "26", title: "Appropriate Government to prepare programmes." },
        { number: "27", title: "Power to make rules by appropriate Government." },
        { number: "28", title: "Power to make rules by competent authority." },
        { number: "29", title: "Laying of rules." },
        { number: "30", title: "Power to remove difficulties." },
        { number: "31", title: "Repeal." }
      ]
    },
    {
      id: 7,
      title: "SCHEDULES",
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-600 to-teal-700",
      description: "First Schedule and Second Schedule",
      sections: [
        { number: "Schedule I", title: "THE FIRST SCHEDULE." },
        { number: "Schedule II", title: "THE SECOND SCHEDULE." }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <Eye className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              THE RIGHT TO INFORMATION ACT, 2005
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">ARRANGEMENT OF SECTIONS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Right To Information Act, 2005 - Comprehensive legal framework covering all 6 chapters 
              and 31 sections with detailed provisions, regulations, and procedures for transparency and accountability in public authorities.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Right To Information Act, 2005 - Legal Reference Document</p>
              <p className="text-blue-300/80 text-sm mt-1">Last Updated: 11-3-2022</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Chapter Header */}
                  <div 
                    className={`bg-linear-to-r ${chapter.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(chapter.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Chapter Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {chapter.icon}
                      </div>
                      
                      {/* Chapter Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Chapter {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : chapter.id === 4 ? 'IV' : chapter.id === 5 ? 'V' : chapter.id === 6 ? 'VI' : 'VII'}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {chapter.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {chapter.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Section Count */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        {chapter.id === 7 ? 'Schedules' : 'Sections'}: {chapter.sections.length}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(chapter.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sections List */}
                  {expandedSections.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.sections.map((section, index) => {
                          const pdfSection = normalizeSectionNumber(section.number)
                          const isPdfLoading = openingPDF === section.number
                          const isPdfAvailable = Boolean(pdfSection)

                          return (
                            <div
                              key={index}
                              className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                              <div className="shrink-0 w-12 h-8 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                                {section.number}
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-200 font-medium text-sm lg:text-base">
                                  {section.number.includes('Schedule') ? section.title : `Section ${section.number}: ${section.title}`}
                                </p>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                  {/* View Document Button */}
                                  <button
                                    onClick={() => isPdfAvailable && openPDF(section.number)}
                                    disabled={!isPdfAvailable || isPdfLoading}
                                    className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                      !isPdfAvailable
                                        ? 'bg-gray-500 cursor-not-allowed opacity-60'
                                        : isPdfLoading
                                          ? 'bg-gray-500 cursor-not-allowed'
                                          : 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105'
                                    }`}
                                  >
                                    {isPdfLoading ? (
                                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                      <FileText className="w-4 h-4" />
                                    )}
                                    <span>
                                      {!isPdfAvailable
                                        ? 'Document Unavailable'
                                        : isPdfLoading
                                          ? 'Opening...'
                                          : 'View Document'}
                                    </span>
                                    {!isMobile && isPdfAvailable && !isPdfLoading && <ExternalLink className="w-3 h-3" />}
                                  </button>
                                  
                                  {/* View Content Button */}
                                  <button
                                    onClick={() => openContent(section.number.includes('Schedule') ? section.number.toLowerCase().replace(' ', '-') : section.number)}
                                    disabled={openingContent === section.number}
                                    className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                      openingContent === section.number
                                        ? 'bg-gray-500 cursor-not-allowed'
                                        : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                    }`}
                                  >
                                    {openingContent === section.number ? (
                                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                      <BookOpenCheck className="w-4 h-4" />
                                    )}
                                    <span>{openingContent === section.number ? 'Opening...' : 'View Content'}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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

export default RTIAct2005Index
