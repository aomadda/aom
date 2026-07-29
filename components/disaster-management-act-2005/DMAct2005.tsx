"use client"
import React, { useState } from 'react'
import {
  BookOpen,
  Scale,
  Shield,
  Building2,
  Users,
  AlertTriangle,
  Gavel,
  Settings,
  Landmark,
  GraduationCap,
  Wallet,
  ChevronDown,
  ChevronUp,
  BookOpenCheck,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const roman = (n: number) =>
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'][n - 1] || String(n)

const DMAct2005 = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) => {
      if (prev.includes(sectionId)) {
        return prev.filter((id) => id !== sectionId)
      }
      return [sectionId]
    })
  }

  const openContent = (sectionNumber: string) => {
    setOpeningContent(sectionNumber)
    const route = `/acts/disaster-management-act-2005/content/${sectionNumber}`
    setTimeout(() => {
      router.push(route)
      setOpeningContent(null)
    }, 100)
  }

  const chapters = [
    {
      id: 1,
      title: 'PRELIMINARY',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-600',
      description: 'Short title, extent, commencement and definitions',
      sections: [
        { number: '1', title: 'Short title, extent and commencement' },
        { number: '2', title: 'Definitions' },
      ],
    },
    {
      id: 2,
      title: 'NATIONAL DISASTER MANAGEMENT AUTHORITY',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      description: 'Establishment, powers and plans of the National Authority',
      sections: [
        { number: '3', title: 'Establishment of NDMA' },
        { number: '4', title: 'Meetings of National Authority' },
        { number: '5', title: 'Appointment of officers and other employees' },
        { number: '6', title: 'Powers and functions of National Authority' },
        { number: '7', title: 'Constitution of advisory committee' },
        { number: '8', title: 'Constitution of National Executive Committee' },
        { number: '9', title: 'Constitution of sub-committees' },
        { number: '10', title: 'Powers and functions of National Executive Committee' },
        { number: '11', title: 'National Plan' },
        { number: '12', title: 'Guidelines for minimum standards of relief' },
        { number: '13', title: 'Relief in loan repayment, etc.' },
      ],
    },
    {
      id: 3,
      title: 'STATE DISASTER MANAGEMENT AUTHORITY',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      description: 'State Authority, Executive Committee and State Plan',
      sections: [
        { number: '14', title: 'Establishment of State Disaster Management Authority' },
        { number: '15', title: 'Meetings of the State Authority' },
        { number: '16', title: 'Appointment of officers and other employees' },
        { number: '17', title: 'Constitution of advisory committee' },
        { number: '18', title: 'Powers and functions of State Authority' },
        { number: '19', title: 'Guidelines for minimum standard of relief' },
        { number: '20', title: 'Constitution of State Executive Committee' },
        { number: '21', title: 'Constitution of sub-committees' },
        { number: '22', title: 'Functions of the State Executive Committee' },
        { number: '23', title: 'State Plan' },
        { number: '24', title: 'Powers and functions of State Executive Committee' },
      ],
    },
    {
      id: 4,
      title: 'DISTRICT DISASTER MANAGEMENT AUTHORITY',
      icon: <Landmark className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      description: 'District Authority, District Plan and local powers',
      sections: [
        { number: '25', title: 'Constitution of District Disaster Management Authority' },
        { number: '26', title: 'Powers of Chairperson of District Authority' },
        { number: '27', title: 'Meetings' },
        { number: '28', title: 'Constitution of advisory committees' },
        { number: '29', title: 'Appointment of officers and other employees' },
        { number: '30', title: 'Powers and functions of District Authority' },
        { number: '31', title: 'District Plan' },
        { number: '32', title: 'Plans by different authorities at district level' },
        { number: '33', title: 'Requisition by the District Authority' },
        { number: '34', title: 'Powers and functions in threatening disaster situation' },
      ],
    },
    {
      id: 5,
      title: 'MEASURES BY THE GOVERNMENT FOR DISASTER MANAGEMENT',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Central and State Government measures and departmental plans',
      sections: [
        { number: '35', title: 'Central Government to take measures' },
        { number: '36', title: 'Responsibilities of Ministries or Departments' },
        { number: '37', title: 'Disaster management plans of Ministries' },
        { number: '38', title: 'State Government to take measures' },
        { number: '39', title: 'Responsibilities of departments of State Government' },
        { number: '40', title: 'Disaster management plan of departments of State' },
      ],
    },
    {
      id: 6,
      title: 'LOCAL AUTHORITIES',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-600',
      description: 'Functions of the local authority',
      sections: [{ number: '41', title: 'Functions of the local authority' }],
    },
    {
      id: 7,
      title: 'NATIONAL INSTITUTE OF DISASTER MANAGEMENT',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-600',
      description: 'NIDM and its officers',
      sections: [
        { number: '42', title: 'National Institute of Disaster Management' },
        { number: '43', title: 'Officers and other employees of the National Institute' },
      ],
    },
    {
      id: 8,
      title: 'NATIONAL DISASTER RESPONSE FORCE',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      description: 'NDRF constitution and control',
      sections: [
        { number: '44', title: 'National Disaster Response Force' },
        { number: '45', title: 'Control, direction, etc.' },
      ],
    },
    {
      id: 9,
      title: 'FINANCE, ACCOUNTS AND AUDIT',
      icon: <Wallet className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-600',
      description: 'Funds, allocation and emergency procurement',
      sections: [
        { number: '46', title: 'National Disaster Response Fund' },
        { number: '47', title: 'National Disaster Mitigation Fund' },
        { number: '48', title: 'Establishment of funds by State Government' },
        { number: '49', title: 'Allocation of funds by Ministries and Departments' },
        { number: '50', title: 'Emergency procurement and accounting' },
      ],
    },
    {
      id: 10,
      title: 'OFFENCES AND PENALTIES',
      icon: <Gavel className="w-6 h-6" />,
      color: 'from-rose-500 to-red-600',
      description: 'Punishments, offences and cognizance',
      sections: [
        { number: '51', title: 'Punishment for obstruction, etc.' },
        { number: '52', title: 'Punishment for false claim' },
        { number: '53', title: 'Punishment for misappropriation of money' },
        { number: '54', title: 'Punishment for false warning' },
        { number: '55', title: 'Offences by Departments of the Government' },
        { number: '56', title: 'Failure of officer in duty' },
        { number: '57', title: 'Penalty for contravention of requisitioning order' },
        { number: '58', title: 'Offence by companies' },
        { number: '59', title: 'Previous sanction for prosecution' },
        { number: '60', title: 'Cognizance of offences' },
      ],
    },
    {
      id: 11,
      title: 'MISCELLANEOUS',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-slate-500 to-slate-600',
      description: 'Directions, powers, rules and miscellaneous provisions',
      sections: [
        { number: '61', title: 'Prohibition against discrimination' },
        { number: '62', title: 'Power to issue direction by Central Government' },
        { number: '63', title: 'Powers to be made available for rescue operations' },
        { number: '64', title: 'Making or amending rules in certain circumstances' },
        { number: '65', title: 'Power of requisition of resources' },
        { number: '66', title: 'Payment of compensation' },
        { number: '67', title: 'Direction to media for communication of warnings' },
        { number: '68', title: 'Authentication of orders or decisions' },
        { number: '69', title: 'Delegation of powers' },
        { number: '70', title: 'Annual report' },
        { number: '71', title: 'Bar of jurisdiction of court' },
        { number: '72', title: 'Act to have overriding effect' },
        { number: '73', title: 'Action taken in good faith' },
        { number: '74', title: 'Immunity from legal process' },
        { number: '75', title: 'Power of Central Government to make rules' },
        { number: '76', title: 'Power to make regulations' },
        { number: '77', title: 'Rules and regulations to be laid before Parliament' },
        { number: '78', title: 'Power of State Government to make rules' },
        { number: '79', title: 'Power to remove difficulties' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 lg:p-3 p-2 rounded-full">
                <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DISASTER MANAGEMENT ACT, 2005
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-cyan-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Chapter Index for the Disaster Management Act, 2005 — complete legal framework covering all 11 chapters with detailed provisions for disaster management in India.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Disaster Management Act, 2005 — Legal Reference</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  <div
                    className={`bg-linear-to-r ${chapter.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(chapter.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">{chapter.icon}</div>
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">Chapter {roman(chapter.id)}</h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">{chapter.title}</p>
                        <p className="text-white/80 text-sm mt-2">{chapter.description}</p>
                      </div>
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      <p className="text-white/70 text-sm font-medium mb-4">Sections: {chapter.sections.length}</p>
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(chapter.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedSections.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.sections.map((section, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-12 h-8 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                              {section.number}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium text-sm lg:text-base">{section.title}</p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                <button
                                  onClick={() => openContent(section.number)}
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
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default DMAct2005
