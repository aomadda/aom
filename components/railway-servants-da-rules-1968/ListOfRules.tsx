"use client"
import React, { useState, useEffect } from 'react'
import { FileText, ChevronDown, ChevronUp, CheckCircle, ExternalLink, BookOpenCheck, Scale, FolderOpen, AlertCircle, Gavel, MessageSquare, RefreshCw, Settings, List } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ListOfRules = () => {
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

  const openPDF = (ruleNumber: string) => {
    setOpeningPDF(ruleNumber)
    
    setTimeout(() => {
      let pdfFileName = ''
      
      // Handle Schedule numbers
      if (ruleNumber.toLowerCase().includes('schedule')) {
        const scheduleNum = ruleNumber.toLowerCase().replace('schedule', '').trim()
        if (scheduleNum === 'i' || scheduleNum === '1') {
          pdfFileName = 'DASection1.pdf'
        } else if (scheduleNum === 'ii' || scheduleNum === '2') {
          pdfFileName = 'DASection2.pdf'
        } else if (scheduleNum === 'iii' || scheduleNum === '3') {
          pdfFileName = 'DASection3.pdf'
        } else {
          pdfFileName = `DASection${scheduleNum}.pdf`
        }
      } else {
        // Handle rules with -A suffix (they use the base rule PDF)
        const ruleNum = ruleNumber.replace(/[^0-9]/g, '')
        pdfFileName = `DARule${ruleNum}.pdf`
      }
      
      const pdfPath = `/railway-servants-da-rules-1968/${pdfFileName}`
      
      if (isMobile) {
        window.location.href = pdfPath
      } else {
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (ruleNumber: string) => {
    setOpeningContent(ruleNumber)
    
    setTimeout(() => {
      // Handle Schedule numbers
      if (ruleNumber.toLowerCase().includes('schedule')) {
        const scheduleNum = ruleNumber.toLowerCase().replace('schedule', '').trim()
        if (scheduleNum === 'i' || scheduleNum === '1') {
          router.push(`/acts/railway-servants-da-rules-1968/content/schedule1`)
        } else if (scheduleNum === 'ii' || scheduleNum === '2') {
          router.push(`/acts/railway-servants-da-rules-1968/content/schedule2`)
        } else if (scheduleNum === 'iii' || scheduleNum === '3') {
          router.push(`/acts/railway-servants-da-rules-1968/content/schedule3`)
        } else {
          router.push(`/acts/railway-servants-da-rules-1968/content/${ruleNumber.replace(/[^0-9]/g, '')}`)
        }
      } else {
        // Handle rules with -A suffix (e.g., 25-A, 26-A)
        const normalizedRule = ruleNumber.replace(/\s+/g, '-').toLowerCase()
        router.push(`/acts/railway-servants-da-rules-1968/content/${normalizedRule}`)
      }
      setOpeningContent(null)
    }, 100)
  }

  const parts = [
    {
      id: 1,
      title: "General",
      icon: <FolderOpen className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
      description: "Short title, commencement and definitions",
      rules: [
        { number: "1", title: "Short title and commencement" },
        { number: "2", title: "Definitions" },
        { number: "3", title: "Application and Scope" }
      ]
    },
    {
      id: 2,
      title: "Suspension",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Authorities and procedures for suspension",
      rules: [
        { number: "4", title: "Authorities competent to place a railway servant under suspension" },
        { number: "5", title: "Suspension" }
      ]
    },
    {
      id: 3,
      title: "Penalties and Disciplinary Authorities",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      description: "Penalties and disciplinary procedures",
      rules: [
        { number: "6", title: "Penalties" },
        { number: "7", title: "Disciplinary Authorities" },
        { number: "8", title: "Authority to Institute Proceedings" }
      ]
    },
    {
      id: 4,
      title: "Procedure for Imposing Major Penalties",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      description: "Detailed procedures for major penalty proceedings",
      rules: [
        { number: "9", title: "Procedure for imposing major penalties" },
        { number: "10", title: "Action on inquiry report" },
        { number: "11", title: "Procedure for imposing minor penalties" },
        { number: "12", title: "Communication of orders" },
        { number: "13", title: "Common proceedings" },
        { number: "14", title: "Special procedure in certain cases" },
        { number: "15", title: "Provisions regarding railway servants lent to State Governments, etc." },
        { number: "16", title: "Provisions regarding officers borrowed from Central or State Governments, etc." }
      ]
    },
    {
      id: 5,
      title: "Appeals",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Appeal procedures and authorities",
      rules: [
        { number: "17", title: "Orders against which no appeal lies" },
        { number: "18", title: "Orders against which appeal lies" },
        { number: "19", title: "Appellate Authority" },
        { number: "20", title: "Period of limitation for appeals" },
        { number: "21", title: "Form, contents, and submission of appeal" },
        { number: "22", title: "Consideration of appeal" },
        { number: "23", title: "Implementation of orders in appeal" },
        { number: "24", title: "Special provisions for non-gazetted staff" }
      ]
    },
    {
      id: 6,
      title: "Revision and Review",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      description: "Revision and review procedures",
      rules: [
        { number: "25", title: "Revision" },
        { number: "25-A", title: "Review" }
      ]
    },
    {
      id: 7,
      title: "Miscellaneous",
      icon: <Settings className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      description: "General provisions and miscellaneous rules",
      rules: [
        { number: "26", title: "Service of orders, notices, etc." },
        { number: "26-A", title: "Service of orders, notices, etc. on behalf of the Railway Board or President" },
        { number: "27", title: "Power to relax time limit and to condone delay" },
        { number: "28", title: "Supply of copy of Commission's advice" },
        { number: "29", title: "Repeal and saving" },
        { number: "30", title: "Removal of doubts" },
        { number: "31", title: "Right to submit petitions to the President" }
      ]
    },
    {
      id: 8,
      title: "Schedules",
      icon: <List className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      description: "Disciplinary and appellate authorities schedules",
      rules: [
        { number: "Schedule I", title: "Disciplinary and appellate authorities for non-gazetted staff in various railway offices" },
        { number: "Schedule II", title: "Disciplinary powers and suspension authority for officers and supervisors over non-gazetted staff in zonal railways and production units" },
        { number: "Schedule III", title: "Authorities empowered to suspend or impose penalties on gazetted officers (Groups A and B)" }
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
                <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The document is divided into parts, with each part containing specific rules and schedules. 
              There are total 7 parts with 31 rules and 3 schedules.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Disciplinary & Appeal Rules - Complete Reference Document</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {parts.map((part) => (
                <div
                  key={part.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Part Header */}
                  <div 
                    className={`bg-linear-to-r ${part.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(part.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Part Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {part.icon}
                      </div>
                      
                      {/* Part Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Part {part.id === 1 ? 'I' : part.id === 2 ? 'II' : part.id === 3 ? 'III' : part.id === 4 ? 'IV' : part.id === 5 ? 'V' : part.id === 6 ? 'VI' : part.id === 7 ? 'VII' : 'VIII'}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {part.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {part.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Rules Count */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Rules: {part.rules.length}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(part.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  {expandedSections.includes(part.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {part.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-12 h-8 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                              {rule.number}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium text-sm lg:text-base">
                                Rule {rule.number}: {rule.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.number)}
                                  disabled={openingPDF === rule.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === rule.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === rule.number ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== rule.number && <ExternalLink className="w-3 h-3" />}
                                </button>
                                
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(rule.number)}
                                  disabled={openingContent === rule.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === rule.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === rule.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === rule.number ? 'Opening...' : 'View Content'}</span>
                                </button>
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
                    Complete Disciplinary & Appeal Rules Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 7 parts with 31 rules and 3 schedules of the Disciplinary & Appeal Rules, 
                  providing complete framework for disciplinary proceedings, appeals, and regulatory provisions for railway servants.
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

export default ListOfRules