"use client"
import { useState, useRef } from 'react'
import { BookOpen, Train, Building, Settings, AlertTriangle, BarChart3, ChevronDown, ChevronUp, Signal, Eye, FileText, BookOpenCheck, Users, Package, Container, Calendar, Monitor, Shield, Radio } from 'lucide-react'
import { useRouter } from 'next/navigation'

const IndianRailwaysOperatingManualIndex = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()
  const navigatingRef = useRef(false)

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId)
      }
      return [sectionId]
    })
  }

  const openContent = (chapterId: string) => {
    // Prevent multiple clicks/navigations
    if (navigatingRef.current || openingContent === chapterId) {
      return
    }
    
    navigatingRef.current = true
    setOpeningContent(chapterId)
    
    // Use requestAnimationFrame for smoother navigation on mobile
    requestAnimationFrame(() => {
      setTimeout(() => {
        try {
          // Navigate to the content page
          router.push(`/manuals/indian-railways-operating-manual/content/${chapterId}`)
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
      title: "WORKING OF STATIONS",
      icon: <Building className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Station operations, equipment, and management procedures",
      topics: [
        { title: "Working of Stations", chapter: "working-of-stations" }
      ]
    },
    {
      id: 2,
      title: "WORKING OF TRAINS",
      icon: <Train className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Train operations, timetabling, and crew management",
      topics: [
        { title: "Working of Trains", chapter: "working-of-trains" }
      ]
    },
    {
      id: 3,
      title: "MARSHALLING",
      icon: <Package className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Train marshalling and formation procedures",
      topics: [
        { title: "Marshalling", chapter: "marshalling" }
      ]
    },
    {
      id: 4,
      title: "FREIGHT OPERATION",
      icon: <Package className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Freight train operations and logistics",
      topics: [
        { title: "Freight Operation", chapter: "freight-operation" }
      ]
    },
    {
      id: 5,
      title: "PREFERENTIAL SCHEDULE",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      description: "Priority scheduling and train precedence",
      topics: [
        { title: "Preferential Schedule", chapter: "preferential-schedule" }
      ]
    },
    {
      id: 6,
      title: "OVER DIMENSIONAL CONSIGNMENT",
      icon: <Package className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Handling of over-dimensional cargo",
      topics: [
        { title: "Over Dimensional Consignment", chapter: "over-dimensional-consignment" }
      ]
    },
    {
      id: 7,
      title: "CONTROL ORGANIZATION",
      icon: <Settings className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Control office operations and operational discipline",
      topics: [
        { title: "Control Organization", chapter: "control-organization" }
      ]
    },
    {
      id: 8,
      title: "COMMAND CONTROL AND COORDINATION",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-600",
      description: "Emergency rescue operations and coordination",
      topics: [
        { title: "Command Control and Coordination", chapter: "command-control-coordination" }
      ]
    },
    {
      id: 9,
      title: "MARSHALLING YARDS",
      icon: <Building className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Yard operations and management",
      topics: [
        { title: "Marshalling Yards", chapter: "marshalling-yards" }
      ]
    },
    {
      id: 10,
      title: "CONTAINER TRAIN OPERATION",
      icon: <Container className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      description: "Container train operations and management",
      topics: [
        { title: "Container Train Operation", chapter: "container-train-operation" }
      ]
    },
    {
      id: 11,
      title: "CUSTOMER INTERFACE",
      icon: <Users className="w-6 h-6" />,
      color: "from-lime-500 to-lime-600",
      description: "Customer service and interface management",
      topics: [
        { title: "Customer Interface", chapter: "customer-interface" }
      ]
    },
    {
      id: 12,
      title: "INSPECTIONS",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      description: "Inspection objectives, types, and quality standards",
      topics: [
        { title: "Inspections", chapter: "inspections" }
      ]
    },
    {
      id: 13,
      title: "INTERLOCKING",
      icon: <Signal className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Signaling and interlocking systems",
      topics: [
        { title: "Interlocking", chapter: "interlocking" }
      ]
    },
    {
      id: 14,
      title: "STATION WORKING RULES",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Rules and regulations for station operations",
      topics: [
        { title: "Station Working Rules", chapter: "station-working-rules" }
      ]
    },
    {
      id: 15,
      title: "NON-INTERLOCKED WORKING",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "Working procedures for non-interlocked sections",
      topics: [
        { title: "Non-Interlocked Working", chapter: "non-interlocked-working" }
      ]
    },
    {
      id: 16,
      title: "OPERATING STATISTICS",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      description: "Traffic statistics and asset utilization",
      topics: [
        { title: "Operating Statistics", chapter: "operating-statistics" }
      ]
    },
    {
      id: 17,
      title: "FREIGHT OPERATION INFORMATION SYSTEM",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "IT systems for freight operations",
      topics: [
        { title: "Freight Operation Information System", chapter: "freight-operation-information-system" }
      ]
    },
    {
      id: 18,
      title: "DERAILMENT INVESTIGATION",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-orange-600",
      description: "Derailment investigation procedures and protocols",
      topics: [
        { title: "Derailment Investigation", chapter: "derailment-investigation" }
      ]
    },
    
    {
      id: 19,
      title: "CONTROL OFFICE APPLICATION",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "IT applications in control office operations",
      topics: [
        { title: "Control Office Application", chapter: "control-office-application" }
      ]
    },
    {
      id: 20,
      title: "ANTI COLLISION DEVICE",
      icon: <Radio className="w-6 h-6" />,
      color: "from-fuchsia-500 to-purple-600",
      description: "Anti-collision device systems and safety mechanisms",
      topics: [
        { title: "Anti Collision Device", chapter: "anti-collision-device" }
      ]
    },
    {
      id: 21,
      title: "VARIOUS CONCEPTS",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      description: "Miscellaneous operational concepts",
      topics: [
        { title: "Various Concepts", chapter: "various-concepts" }
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden">
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
                <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Indian Railways Operating Manual - Comprehensive guide covering all 21 chapters 
              with detailed procedures, operational guidelines, and safety protocols for railway operations.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Indian Railways Operating Manual - For Official Use Only</p>
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
                          Chapter - {section.id}
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
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {topic.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(topic.chapter)}
                                  disabled={openingContent === topic.chapter}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === topic.chapter
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === topic.chapter ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === topic.chapter ? 'Opening...' : 'View Content'}</span>
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

export default IndianRailwaysOperatingManualIndex

