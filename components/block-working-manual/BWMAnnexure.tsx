"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, AlertTriangle, CheckCircle, Clipboard, ChevronDown, ChevronUp, Train, Signal, Wrench, FileText, Mail, Phone, Shield, BookOpenCheck, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BWMAnnexure = () => {
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
    const pdfFileName = `BWMAnnexurePage${page}.pdf`
    const pdfPath = `/block-working-manual-pdfs/BWMAnnexurePages/${pdfFileName}`
    
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
      router.push(`/bwm/content/A${page}`)
      setOpeningContent(null)
    }, 100)
  }

  const sections = [
    {
      id: 1,
      title: "USE OF LINE CLEAR INQUIRY MESSAGE",
      icon: <Mail className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "T/A 1425- Outward/T/B1425-Inward message procedures and protocols",
      rules: [
        { number: "1.1", title: "Use of Line Clear inquiry message- (T/A 1425- Outward/T/B1425-Inward)", page: "1" }
      ]
    },
    {
      id: 2,
      title: "DAILY SERIAL NUMBERS AND PRIVATE NUMBERS",
      icon: <Clipboard className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      description: "Management of daily serial numbers and private number systems",
      rules: [
        { number: "1.2", title: "Daily serial numbers and Private Numbers", page: "2A" }
      ]
    },
    {
      id: 3,
      title: "PRESERVATION OF FORMS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Proper preservation and maintenance of T/A1425, T/B 1425, T/C 1425 and T/D 1425 forms",
      rules: [
        { number: "1.3", title: "Preservation of T/A1425, T/B 1425, T/C 1425 and T/D 1425", page: "2B" }
      ]
    },
    {
      id: 4,
      title: "METHOD OF SENDING TRAINS",
      icon: <Train className="w-6 h-6" />,
      color: "from-lime-500 to-lime-600",
      description: "Procedures for sending trains from 'X' to 'Y' using the specified forms",
      rules: [
        { number: "1.4", title: "Method of sending a train from 'X' to 'Y' using T/A1425, T/B 1425, T/C 1425 and T/D 1425", page: "2C" }
      ]
    },
    {
      id: 5,
      title: "DELIVERY OF PAPER LINE CLEAR TICKET",
      icon: <Signal className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Proper delivery procedures for Paper Line Clear Ticket to the Driver",
      rules: [
        { number: "1.5", title: "Delivery of Paper Line Clear Ticket to the Driver", page: "3" }
      ]
    },
    {
      id: 6,
      title: "COUNTER 'LINE CLEAR' ENQUIRY",
      icon: <Phone className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Handling Line Clear enquiries during control phone interruption",
      rules: [
        { number: "1.6", title: "Counter 'Line Clear' enquiry during interruption of control phone", page: "4A" }
      ]
    },
    {
      id: 7,
      title: "REFUSAL AND WITHDRAWAL OF 'LINE CLEAR'",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Emergency procedures for refusing or withdrawing Line Clear authorization",
      rules: [
        { number: "1.7", title: "Refusal of 'Line Clear'", page: "4B" },
        { number: "1.8", title: "Withdrawal of 'Line Clear' in case of emergency", page: "4C" }
      ]
    },
    {
      id: 8,
      title: "APPLYING 'LINE CLEAR' FOR SHUNTING",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Special procedures for shunting trains outside First Stop Signal areas",
      rules: [
        { number: "1.9", title: "Applying 'Line Clear' for shunting train outside the First Stop Signal on Single line token territory and Single line token less territory", page: "5A" }
      ]
    },
    {
      id: 9,
      title: "CANCELLING 'LINE CLEAR'",
      icon: <Shield className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "Procedures for cancelling Line Clear authorization when necessary",
      rules: [
        { number: "1.10", title: "Cancelling 'Line Clear'", page: "5B" }
      ]
    },
    {
      id: 10,
      title: "SPECIMEN FORMS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Complete specimen forms for T/A1425, T/B 1425, T/C 1425 and T/D 1425",
      rules: [
        { number: "SPECIMEN", title: "Specimen Forms (T/A1425, T/B 1425, T/C 1425 and T/D 1425)", page: "6" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-900 via-amber-900 to-yellow-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-orange-500/20 to-amber-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-orange-500 to-amber-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BLOCK WORKING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-yellow-300 mb-4">ANNEXURE - PAPER LINE CLEAR TICKETS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Annexure for Paper Line Clear Tickets - Comprehensive guide covering all procedures, 
              forms, and protocols for working trains through Paper Line Clear Tickets (T/C.1425-UP PLCT & T/D.1425-DOWN PLCT).
            </p>
            <div className="mt-6 bg-linear-to-r from-orange-500/20 to-amber-500/20 rounded-lg p-4 backdrop-blur-sm border border-orange-400/30">
              <p className="text-orange-200 font-medium">BWMD Annexure - For Official Use Only</p>
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
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-orange-500 to-amber-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {rule.title}
                              </p>
                              <p className="text-gray-400 text-sm mt-1">
                                {rule.number === "SPECIMEN" ? "Specimen Forms" : `Rule ${rule.number}`} • Page - {rule.page}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.page)}
                                  disabled={openingPDF === rule.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 hover:shadow-lg hover:scale-105'
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
                    Complete Paper Line Clear Tickets Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive annexure covers all procedures for working trains through Paper Line Clear Tickets, 
                  providing essential information for railway operations during communication failures, emergency situations, 
                  and special working conditions requiring paper-based authorization systems.
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

export default BWMAnnexure