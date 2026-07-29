"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Signal, Wrench, Settings, Shield, FileText, BookOpenCheck, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BWMAnnexureOne = () => {
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

  const openPDF = (page: string) => {
    const pdfFileName = `BWMAnnexureOnePage${page}.pdf`
    const pdfPath = `/block-working-manual-pdfs/BWMAnnexureOnePages/${pdfFileName}`
    
    setOpeningPDF(page)
    
    // Small delay to show loading state
    setTimeout(() => {
      try {
        // Always try to open in new tab
        window.open(pdfPath, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error('Error opening PDF:', error)
        // Fallback: try without parameters
        window.open(pdfPath, '_blank')
      } finally {
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (page: string) => {
    setOpeningContent(page)
    
    setTimeout(() => {
      router.push(`/bwm/content/O${page}`)
      setOpeningContent(null)
    }, 100)
  }

  const sections = [
    {
      id: 1,
      title: "BLOCK PANEL",
      icon: <Settings className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Overview and basic information about Block Panel systems",
      rules: [
        { number: "1.0", title: "Block Panel", page: "1A" }
      ]
    },
    {
      id: 2,
      title: "DESCRIPTION OF BLOCK PANEL",
      icon: <Signal className="w-6 h-6" />,
      color: "from-sky-500 to-sky-600",
      description: "Detailed description and components of Block Panel equipment",
      rules: [
        { number: "2.0", title: "Description of Block Panel", page: "1B" }
      ]
    },
    {
      id: 3,
      title: "OPERATIONS OF BLOCK PANEL",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Operational procedures and working methods for Block Panel",
      rules: [
        { number: "3.0", title: "Operations of Block Panel", page: "2A" },
        { number: "3.1", title: "Detailed operations procedures", page: "2B" },
        { number: "3.2", title: "Advanced operations", page: "3" },
        { number: "3.3", title: "Special procedures", page: "5" },
        { number: "3.4", title: "Catch siding operations", page: "6A" },
        { number: "3.5", title: "Slip siding operations", page: "6B" },
        { number: "3.6", title: "Additional operations", page: "6C" },
        { number: "3.7", title: "Shunting operations", page: "7" },
        { number: "3.8", title: "Testing procedures", page: "9" },
        { number: "3.9", title: "Maintenance operations", page: "10" },
        { number: "3.10", title: "Emergency operations", page: "11A" }
      ]
    },
    {
      id: 4,
      title: "BLOCK FAILURES & ACTIONS TO BE TAKEN",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Failure handling procedures and emergency actions for Block Panel systems",
      rules: [
        { number: "4.0", title: "Block Failures & Actions to be taken", page: "11B" },
        { number: "4.1", title: "Types of failures", page: "12" },
        { number: "4.2", title: "Failure procedures", page: "14" },
        { number: "4.2.1", title: "Failure of LSS", page: "16A" },
        { number: "4.2.2", title: "Failure of IBS", page: "16B" }
      ]
    },
    {
      id: 5,
      title: "SUSPENSION OF BLOCK INSTRUMENT WORKING",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Procedures for suspending block instrument operations when necessary",
      rules: [
        { number: "4.3", title: "Suspension of block instrument working", page: "18" },
        { number: "4.4", title: "Restoration procedures", page: "19" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-900 via-sky-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-sky-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-blue-400/20 to-sky-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-cyan-500/20 to-sky-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-cyan-500 to-sky-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-cyan-100 to-sky-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BLOCK WORKING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-blue-300 mb-4">ANNEXURE-I - SSBPAC (D)/UFSBI DOUBLE LINE</h2>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-sky-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Annexure-I for SSBPAC (D)/UFSBI Double Line Block Panel - Comprehensive guide covering 
              Block Panel operations, failures, and maintenance procedures for advanced signaling systems.
            </p>
            <div className="mt-6 bg-linear-to-r from-cyan-500/20 to-sky-500/20 rounded-lg p-4 backdrop-blur-sm border border-cyan-400/30">
              <p className="text-cyan-200 font-medium">BWMD Annexure-I - For Official Use Only</p>
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
                    className={`bg-linear-to-r ${section.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
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
                          Section {section.id}
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
                        Pages {(() => {
                          const pages = section.rules.map(rule => {
                            const pageStr = rule.page.split('-')[0];
                            return parseInt(pageStr) || 1;
                          });
                          const maxPages = section.rules.map(rule => {
                            const pageParts = rule.page.split('-');
                            return parseInt(pageParts[pageParts.length - 1]) || parseInt(pageParts[0]) || 1;
                          });
                          return `${Math.min(...pages)} - ${Math.max(...maxPages)}`;
                        })()}
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

                  {/* Rules List */}
                  {expandedSections.includes(section.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {section.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-cyan-500 to-sky-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {rule.title}
                              </p>
                              <p className="text-gray-400 text-sm mt-1">
                                Rule {rule.number} • Page - {rule.page}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.page)}
                                  disabled={openingPDF === rule.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === rule.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === rule.page ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== rule.page && <ExternalLink className="w-3 h-3" />}
                                </button>
                                
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(rule.page)}
                                  disabled={openingContent === rule.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === rule.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === rule.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === rule.page ? 'Opening...' : 'View Content'}</span>
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
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete SSBPAC (D)/UFSBI Block Panel Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive annexure covers all aspects of SSBPAC (D)/UFSBI Double Line Block Panel systems, 
                  providing essential information for railway signaling operations, failure handling, and maintenance 
                  procedures for advanced block working systems.
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

export default BWMAnnexureOne