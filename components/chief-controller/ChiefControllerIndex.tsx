"use client"
import React, { useState, useEffect } from 'react'
import { Gauge, Clock, Ruler, FileText, ChevronDown, ChevronUp, BookOpenCheck, ExternalLink, BookOpen, Layers, FolderOpen, Percent, Hash, Shield, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ChiefControllerIndex = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
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

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(prev => prev === topicId ? null : topicId)
  }

  const openContent = (topicId: string) => {
    setOpeningContent(topicId)
    
    setTimeout(() => {
      router.push(`/topics/chief-controller/content/${topicId}`)
      setOpeningContent(null)
    }, 100)
  }

  const topics = [
    
    {
      id: 'gsr-chapters',
      title: 'G&SR Chapters',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-violet-500 to-violet-600',
      description: 'Complete guide to General and Subsidiary Rules chapters with all 18 chapters and their rules'
    },
    {
      id: 'swr-chapters',
      title: 'SWR Chapters',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      description: 'Complete guide to Station Working Rules chapters with all 12 chapters'
    },
    {
      id: 'gsr-appendix',
      title: 'G&SR Appendix',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-fuchsia-500 to-fuchsia-600',
      description: 'Complete guide to General and Subsidiary Rules appendices with all 17 appendices'
    },
    {
      id: 'swr-appendix',
      title: 'SWR Appendix',
      icon: <FolderOpen className="w-6 h-6" />,
      color: 'from-rose-500 to-rose-600',
      description: 'Complete guide to Station Working Rules appendices with all 7 appendices (A-G)'
    },
    {
      id: 'general-rules',
      title: 'G&SR All Rules',
      icon: <BookOpenCheck className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Complete guide to all General and Subsidiary Rules with detailed rules for all 18 chapters'
    },
    {
      id: 'railways-act-1989-all-chapters',
      title: 'Railways Act 1989 - All Chapters',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-slate-500 to-slate-600',
      description: 'Complete reference guide to all 16 chapters and 200 sections of the Railways Act, 1989'
    },
    {
      id: 'railway-da-rules-1968-all-chapters',
      title: 'Railway DA Rules 1968 - All Parts',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-gray-500 to-gray-600',
      description: 'Complete reference guide to all 7 parts and 33 rules of the Railway Servants (Discipline & Appeal) Rules, 1968'
    },
    {
      id: 'railway-leave-rules-1949-all-rules',
      title: 'Railway Leave Rules 1949 - All Rules',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-zinc-500 to-zinc-600',
      description: 'Complete reference guide to all 57 rules (501-557) of the Railway Servants (Liberalised Leave) Rules, 1949'
    },
    {
      id: 'railway-rest-rules-2005-all-rules',
      title: 'Railway Rest Rules 2005 - All Parts',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-neutral-500 to-neutral-600',
      description: 'Complete reference guide to all 5 parts and 18 rules of the Railway Servants (Hours of Work and Period of Rest) Rules, 2005'
    },
    {
      id: 'railway-conduct-rules-1966-all-rules',
      title: 'Railway Conduct Rules 1966 - All Rules',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-stone-500 to-stone-600',
      description: 'Complete reference guide to all 25 rules of the Railway Services (Conduct) Rules, 1966'
    },
    {
      id: 'speed-restrictions',
      title: 'Speed Restrictions',
      icon: <Gauge className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      description: 'Comprehensive guide to speed restrictions for various railway operations and scenarios'
    },
    {
      id: 'timings',
      title: 'Timings',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Essential timing regulations and intervals for railway operations and procedures'
    },
    {
      id: 'distances',
      title: 'Distances',
      icon: <Ruler className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Important distance measurements and clearance requirements for railway operations'
    },
    {
      id: 'percentages',
      title: 'Percentages',
      icon: <Percent className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Essential percentage requirements for brake power and spare coaches in railway operations'
    },
    {
      id: 'permissions',
      title: 'Permissions/Sanctions/Authorised',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600',
      description: 'Complete guide to permissions, sanctions, and authorized procedures for railway operations'
    },
    {
      id: 'numbers',
      title: 'Numbers',
      icon: <Hash className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      description: 'Important numerical values and counts for railway operations and zones'
    },
    {
      id: 'years',
      title: 'Years',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-amber-500 to-amber-600',
      description: 'Important years and time periods for railway operations and regulations'
    },
    {
      id: 'standard-forms',
      title: 'Standard Forms',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-slate-500 to-slate-600',
      description: 'Standard Forms for use in Disciplinary Proceedings - Complete guide to all SF forms (SF-1 to SF-14)'
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
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
                <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHIEF CONTROLLER
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">IMPORTANT TOPICS INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide covering Speed Restrictions, Timings, Distances, Percentages, Permissions, Numbers, Years, Standard Forms, G&SR Chapters, General Rules, G&SR Appendix, and SWR Appendix -
              Essential reference material for AOM aspirants in Indian Railways.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Chief Controller - Complete Study Material Reference</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Topic Header */}
                  <div 
                    className={`bg-linear-to-r ${topic.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Topic Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {topic.icon}
                      </div>
                      
                      {/* Topic Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {topic.title}
                        </h2>
                        <p className="text-white/80 text-sm mt-2">
                          {topic.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedTopic === topic.id ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Topic Content */}
                  {expandedTopic === topic.id && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="flex items-center justify-center space-x-4 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        {/* View Content Button */}
                        <button
                          onClick={() => openContent(topic.id)}
                          disabled={openingContent === topic.id}
                          className={`flex items-center space-x-2 px-6 py-3 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                            openingContent === topic.id
                              ? 'bg-gray-500 cursor-not-allowed'
                              : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                          }`}
                        >
                          {openingContent === topic.id ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <BookOpenCheck className="w-4 h-4" />
                          )}
                          <span>{openingContent === topic.id ? 'Opening...' : 'View Content'}</span>
                          {!isMobile && openingContent !== topic.id && <ExternalLink className="w-3 h-3" />}
                        </button>
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
                  <FileText className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Chief Controller Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all essential topics for Chief Controller examination,
                  providing complete reference material for Speed Restrictions, Timings, Distances, Percentages, Permissions, Numbers, Years, Standard Forms, G&SR Chapters, General Rules, G&SR Appendix, and SWR Appendix
                  required for AOM aspirants in Indian Railways.
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

export default ChiefControllerIndex

