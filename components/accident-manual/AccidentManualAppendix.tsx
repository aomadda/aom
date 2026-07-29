"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, FileText, AlertTriangle, CheckCircle, AlertCircle, Gavel, Heart, ChevronDown, ChevronUp, FileSpreadsheet, ExternalLink, BookOpenCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AccidentManualAppendix = () => {
  const [expandedAppendix, setExpandedAppendix] = useState<number[]>([])
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

  const toggleAppendix = (appendixId: number) => {
    setExpandedAppendix(prev => {
      // If appendix is already expanded, collapse it
      if (prev.includes(appendixId)) {
        return prev.filter(id => id !== appendixId)
      }
      // If appendix is collapsed, expand it and collapse all others (accordion behavior)
      return [appendixId]
    })
  }

  const openPDF = (pageNumber: string) => {
    // Handle special cases for page numbers that have different file names
    let pdfFileName = ''
    
    // Special cases for pages that don't follow the standard naming pattern
    const specialCases: { [key: string]: string } = {
      '145': 'AMAppendixPage145A.pdf', // This page has multiple variants
      '146': 'AMAppendixPage146A.pdf', // This page has multiple variants
      '147': 'AMAppendixPage147A.pdf', // This page has multiple variants
      '148': 'AMAppendixPage148A.pdf', // This page has multiple variants
      '149': 'AMAppendixPage149A.pdf', // This page has multiple variants
      '156': 'AMAppendixPage156A.pdf', // This page has multiple variants
      '161': 'AMAppendixPage161A.pdf', // This page has multiple variants
      '188': 'AMAppendixPage188A.pdf', // This page has multiple variants  
      '190': 'AMAppendixPage190A.pdf', // This page has multiple variants
      '205': 'AMAppendixPage205A.pdf', // This page has multiple variants
      '208': 'AMAppendixPage208A.pdf'  // This page has multiple variants
    }
    
    if (specialCases[pageNumber]) {
      pdfFileName = specialCases[pageNumber]
    } else {
      pdfFileName = `AMAppendixPage${pageNumber}.pdf`
    }
    
    const pdfPath = `/accident-manual-pdfs/am-appendix-pages/${pdfFileName}`

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
    setOpeningContent(pageNumber)

    // Small delay to show loading state
    setTimeout(() => {
      // Navigate to the content page
      router.push(`/manuals/accident-manual/content/${pageNumber}`)
      setOpeningContent(null)
    }, 100)
  }

  const appendices = [
    {
      id: 1,
      title: "DISASTER MANAGEMENT",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Comprehensive disaster management procedures and protocols",
      pageRange: "135 to 138",
      content: [
        { number: "1", title: "DISASTER MANAGEMENT ACT (2005)", page: "135A" },
        { number: "2", title: "NDMA (National Disaster Management Authority)", page: "135B" },
        { number: "3", title: "NDRF (National Disaster Relief Force)", page: "136" },
        { number: "4", title: "Definition of Disaster", page: "137A" },
        { number: "5", title: "IMPORTANT CONTACT NUMBERS – RAILWAYS", page: "137B" },
        { number: "6", title: "IMPORTANT CONTACT NUMBERS GOVERNMENT OF ANDHRA PRADESH", page: "138" }
      ]
    },
    {
      id: 2,
      title: "FIRST AID",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Essential first aid procedures and medical response guidelines",
      pageRange: "139 to 147",
      content: [
        { number: "1", title: "Aim / Objectives", page: "139A" },
        { number: "2", title: "Contents of the First Aid box", page: "139B" },
        { number: "3", title: "Types of Accident Relief Medical Equipment", page: "139C" },
        { number: "4", title: "Steps to be followed while rendering effective help to a person", page: "140" },
        { number: "5", title: "ASPHYXIA (SUFFOCATION)", page: "141" },
        { number: "6", title: "SHOCK", page: "142" },
        { number: "7", title: "WOUNDS AND HEMORRHAGES (BLEEDINGS)", page: "143" },
        { number: "8", title: "BURNS AND SCALDS", page: "145" },
        { number: "9", title: "FRACTURE, DISLOCATION, SPRAIN AND CRAMP", page: "145" },
        { number: "10", title: "POISONS", page: "146" },
        { number: "11", title: "SNAKE / DOG / SCORPION BITE TREATMENT", page: "146" },
        { number: "12", title: "UNCONSCIOUSNESS (INSENSIBILITY)", page: "147" },
        { number: "13", title: "EPILEPSY (FITS)", page: "147" },
      ]
    },
    {
      id: 3,
      title: "EXTRACT FROM THE RAILWAYS ACT, 1989",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Relevant sections from the Railways Act applicable to accident management",
      pageRange: "148 to 155",
      content: [
        {number: "1", title: "Sections relating to Commissioner of Railway Safety", page: "148"},
        {number: "2", title: "Sections relating to Construction and Maintenance of Works", page: "148"},
        {number: "3", title: "Sections relating to Opening of Railways", page: "149"},
        {number: "4", title: "Sections relating to Accidents", page: "149"},
        {number: "5", title: "Sections relating to Liability of Railway administration for Death and Injury to passengers due to Accidents", page: "151"},
        {number: "6", title: "Sections relating to Penalties and Offences", page: "153"},
        
      ]
    },
    {
      id: 4,
      title: "WEATHER WARNING - CYCLONE WARNINGS",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Weather-related safety protocols and cyclone warning systems",
      pageRange: "156 to 170",
      content: [
        {number: "1", title: "Weather Warning Message", page: "156"},
        {number: "1.1", title: "Terminology Used in Meteorological Bulletins regarding Cyclones", page: "156"},
        {number: "1.2", title: "Normal Weather Warnings", page: "156"},
        {number: "1.3", title: "Dissemination of Messages within Railway", page: "157"},
        {number: "1.4", title: "Flood Warning", page: "160"},
        {number: "1.5", title: "Danger to track and bridges due to Railway Affecting Tanks", page: "161"},
        {number: "1.6", title: "Action to be taken in the event of the East Coast being threatened by Cyclonic storms: Receipt and Transmission of Messages", page: "161"},
        {number: "1.7", title: "Action to be taken in case of hold up of trains due to Cyclone-(General)", page: "162"},
        {number: "2", title: "ANNEXURE-‘A’", page: "163"},
        {number: "3", title: "ANNEXURE-‘B’", page: "168"},
        {number: "4", title: "Annexure ‘C’", page: "169"},
      ]
    },
    {
      id: 5,
      title: "PUNISHMENT NORMS IN ACCIDENT CASES",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Disciplinary procedures and punishment guidelines for accident cases",
      pageRange: "171 to 176",
      content: [
        {number: "1", title: "PUNISHMENT NORMS IN ACCIDENT CASES", page: "171"},
        {number: "2", title: "PUNISHMENT NORMS IN ACCIDENT CASES CIVIL ENGINEERING DEPARTMENT", page: "174"},
        {number: "3", title: "STAFF OF ELECTRICAL DEPARTMENT", page: "175"},
        {number: "4", title: "Penalties for Serving Railway Employees", page: "176"},
      ]
    },
    {
      id: 6,
      title: "SPECIMEN FORMS",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Standard forms and templates for accident reporting and documentation",
      pageRange: "177 to 208",
      content: [
        {number: "1", title: "Specimen Form Acc 1 (i)", page: "177"},
        {number: "2", title: "Specimen Form Acc 1 (ii)", page: "178"},
        {number: "3", title: "Specimen Form Acc 1(iii)", page: "179"},
        {number: "4", title: "Specimen Form Acc.2", page: "180"},
        {number: "5", title: "Specimen form ACC.3", page: "181"},
        {number: "6", title: "Specimen Form ACC.4", page: "183"},
        {number: "7", title: "Specimen Form ACC.5", page: "185"},
        {number: "8", title: "Specimen Form ACC.6", page: "186"},
        {number: "9", title: "Specimen form Acc. 6-A", page: "188"},
        {number: "10", title: "Specimen Form ACC, 6-B", page: "188"},
        {number: "11", title: "Specimen Form Acc. 6-C", page: "189"},
        {number: "12", title: "Specimen Form ACC 6-D", page: "190"},
        {number: "13", title: "Specimen Form Acc. 7", page: "190"},
        {number: "14", title: "Specimen Form Acc. 8", page: "191"},
        {number: "15", title: "Form Acc.9", page: "192"},
        {number: "16", title: "Form Acc. 9-A", page: "193"},
        {number: "17", title: "Form Acc 9-B", page: "194"},
        {number: "18", title: "Form Acc. 9-C", page: "195"},
        {number: "19", title: "Form Acc. 9-D", page: "196"},
        {number: "20", title: "Form Acc. 9-E", page: "197"},
        {number: "21", title: "Form Acc. 9-F", page: "198"},
        {number: "22", title: "Form Acc. 9-G", page: "199"},
        {number: "23", title: "Form Acc. 9-H", page: "200"},
        {number: "24", title: "Form Acc. 9-I", page: "201"},
        {number: "25", title: "Form Acc. 9-J", page: "202"},
        {number: "26", title: "Form Acc. 9-K", page: "203"},
        {number: "27", title: "Form Acc. 9-L", page: "204"},
        {number: "28", title: "Form Acc. 9-M", page: "205"},
        {number: "29", title: "Form Acc. 9-N", page: "205"},
        {number: "30", title: "Form Acc. 9-O", page: "205"},
        {number: "31", title: "Form Acc.10", page: "206"},
        {number: "32", title: "Form Acc.11", page: "207"},
        {number: "32", title: "Form Acc.12", page: "208"},
        {number: "32", title: "Form Acc.13", page: "208"},
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}  
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>    
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              ACCIDENT MANUAL APPENDIX
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-amber-300 mb-4">Comprehensive Reference Guide for Railway Accidents</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Appendix Index for Railway Accident Manual - Essential reference materials covering disaster management, 
              first aid, legal extracts, weather warnings, punishment norms, and specimen forms for comprehensive accident response.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {appendices.map((appendix) => (
                <div
                  key={appendix.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                                     {/* Appendix Header */}
                   <div
                     className={`bg-linear-to-r ${appendix.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                     onClick={() => toggleAppendix(appendix.id)}
                   >
                    <div className="flex flex-col items-center text-center">
                      {/* Appendix Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {appendix.icon}
                      </div>
                      
                      {/* Appendix Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          APPENDIX - {appendix.id}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {appendix.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {appendix.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Page Range */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Pages: {appendix.pageRange}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedAppendix.includes(appendix.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  {expandedAppendix.includes(appendix.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {appendix.content.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-red-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {item.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(item.page)}
                                  disabled={openingPDF === item.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === item.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === item.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === item.page ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== item.page && <ExternalLink className="w-3 h-3" />}
                                </button>

                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(item.page)}
                                  disabled={openingContent === item.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === item.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === item.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === item.page ? 'Opening...' : 'View Content'}</span>
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
                    Complete Appendix Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive appendix guide covers all 6 appendices of the Accident Manual, providing essential reference materials 
                  for disaster management, first aid procedures, legal extracts, weather protocols, disciplinary guidelines, and documentation standards.
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

export default AccidentManualAppendix