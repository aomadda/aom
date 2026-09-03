'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AuthNav, { type AuthUser } from '@/components/AuthNav'

type TopicNavLink = { href: string; label: string; icon: string }

const topicsLinksRaw: TopicNavLink[] = [
  { href: '/topics/accident-manual', label: 'Accident Manual', icon: '⚠️' },
  { href: '/topics/aom-special', label: 'AOM Special', icon: '✨' },
  { href: '/topics/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
  { href: '/topics/establishment-rules', label: 'Establishment rules', icon: '📜' },
  { href: '/topics/financial-rules', label: 'Financial rules', icon: '💰' },
  { href: '/topics/general-rules', label: 'General rules', icon: '📘' },
  { href: '/topics/indian-railways', label: 'Indian Railways', icon: '🇮🇳' },
  { href: '/topics/information-technology-apps', label: 'Information technology apps', icon: '💻' },
  { href: '/topics/master-circulars', label: 'Master circulars', icon: '📜' },
  { href: '/topics/operating-manual', label: 'Operating Manual', icon: '📘' },
  { href: '/topics/operating-material', label: 'Operating material', icon: '📂' },
  { href: '/topics/railway-acts', label: 'Railway acts', icon: '⚖️' },
  { href: '/topics/railway-planning-schemes', label: 'Railway planning schemes', icon: '🗺️' },
  { href: '/topics/working-time-table', label: 'Working Time Table', icon: '⏰' },
]

const topicsLinks: TopicNavLink[] = topicsLinksRaw

type NavbarProps = {
  user?: AuthUser
}

function desktopNavPillClass(active: boolean) {
  return `relative inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] font-semibold text-white transition-all duration-300 lg:gap-1 lg:px-2.5 lg:text-[13px] xl:px-3 xl:text-sm ${
    active
      ? 'bg-white/20 font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] ring-1 ring-white/30'
      : 'hover:bg-white/12'
  }`
}

function Chevron({ open, className = 'h-3 w-3 lg:h-3.5 lg:w-3.5' }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${className} transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function DropdownShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`absolute top-full right-0 z-50 mt-2 overflow-hidden rounded-3xl border border-violet-200/50 bg-white shadow-[0_24px_50px_-18px_rgba(76,29,149,0.28)] ring-1 ring-violet-950/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

const dropdownHeaderClass =
  'shrink-0 border-b border-violet-100/80 bg-linear-to-r from-violet-50/95 via-indigo-50/80 to-blue-50/90 px-5 py-3.5'
const dropdownFooterClass =
  'shrink-0 border-t border-violet-100/80 bg-linear-to-r from-violet-50/90 via-indigo-50/75 to-blue-50/85 px-5 py-3'

function mobileNavItemClass(active: boolean) {
  return `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
    active
      ? 'border border-white/45 bg-white/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md'
      : 'border border-white/15 bg-white/10 text-white/90 backdrop-blur-sm hover:bg-white/18 hover:text-white'
  }`
}

function mobileChildLinkClass(active: boolean) {
  return `rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
    active
      ? 'border border-white/40 bg-white/25 text-white shadow-md shadow-white/10 backdrop-blur-md'
      : 'border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm hover:bg-white/15 hover:text-white'
  }`
}

const Navbar = ({ user = null }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isActsDropdownOpen, setIsActsDropdownOpen] = useState(false)
  const [isManualsDropdownOpen, setIsManualsDropdownOpen] = useState(false)
  const [isTopicsDropdownOpen, setIsTopicsDropdownOpen] = useState(false)
  const [isQuizzesDropdownOpen, setIsQuizzesDropdownOpen] = useState(false)
  const [isAomTestsDropdownOpen, setIsAomTestsDropdownOpen] = useState(false)
  const [isGeneralAwarenessDropdownOpen, setIsGeneralAwarenessDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const actsLinks = [
    { href: '/acts/disaster-management-act-2005', label: 'Disaster Management Act, 2005' },
    { href: '/acts/employees-compensation-act-2010', label: 'Employees Compensation Act, 2010' },
    { href: '/acts/factories-act-1948', label: 'Factories Act, 1948' },
    { href: '/acts/industrial-disputes-act-1947', label: 'Industrial Disputes Act, 1947' },
    { href: '/acts/industrial-relations-code-2010', label: 'Industrial Relations Code, 2010' },
    { href: '/acts/indian-railways-act-1989', label: 'Indian Railway Acts, 1989' },
    { href: '/acts/official-language-act-1963', label: 'Official Language Act, 1963' },
    { href: '/acts/railway-servants-da-rules-1968', label: 'Railway Servants (DA) Rules, 1968' },
    { href: '/acts/railway-servants-pass-rules-1986', label: 'Railway Servants (Pass) Rules, 1986' },
    { href: '/acts/railway-servants-leave-rules-1949', label: 'Railway Servants (Leave) Rules, 1949' },
    { href: '/acts/railway-servants-rest-rules-2005', label: 'Railway Servants (Rest) Rules, 2005' },
    { href: '/acts/railway-services-conduct-rules-1966', label: 'Railway Services (Conduct) Rules, 1966' },
    { href: '/acts/right-to-information-act-2005', label: 'Right to Information Act, 2005' },
    { href: '/acts/trade-union-act-1926', label: 'Trade Union Act, 1926' },
    { href: '/acts/workmen-compensation-act-1923', label: 'Workmen Compensation Act, 1923' },
  ]

  const manualsLinks = [
    { href: '/manuals/accident-manual', label: 'Accident Manual', icon: '⚠️' },
    { href: '/manuals/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
    { href: '/manuals/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
    { href: '/manuals/opertaing-manual', label: 'Operating Manual', icon: '📘' },
    { href: '/manuals/indian-railways-operating-manual', label: 'Indian Railways Operating Manual', icon: '🚂' },
    { href: '/manuals/station-working-rules', label: 'Station Working Rules', icon: '🚉' },
    { href: '/manuals/working-time-table', label: 'Working Time Table', icon: '⏰' },
  ]

  const quizzesLinks = [
    { href: '/quizzes/accident-manual', label: 'Accident Manual', icon: '⚠️' },
    { href: '/quizzes/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
    { href: '/quizzes/commercial-department', label: 'Commercial Department', icon: '💼' },
    { href: '/quizzes/establishment-rules', label: 'Establishment Rules', icon: '📜' },
    { href: '/quizzes/financial-rules', label: 'Financial Rules', icon: '💰' },
    { href: '/quizzes/general-awareness', label: 'General Awareness', icon: '🌐' },
    { href: '/quizzes/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
    { href: '/quizzes/kavach', label: 'Kavach', icon: '🛡️' },
    { href: '/quizzes/national-rail-plan', label: 'National Rail Plan', icon: '🗺️' },
    { href: '/quizzes/operating-department', label: 'Operating Department', icon: '🚂' },
    { href: '/quizzes/operating-manual', label: 'Operating Manual', icon: '📘' },
    { href: '/quizzes/rajabhasha', label: 'Rajabhasha', icon: '📝' },
    { href: '/quizzes/railway-gk', label: 'RailwayGK', icon: '🧠' },
    { href: '/quizzes/railway-statistics', label: 'Railway Statistics', icon: '📊' },
  ]

  const aomTestsLinks = [
    { href: '/aom-tests/aom-practice-tests', label: 'AOM Practice Tests', icon: '📝' },
    { href: '/aom-tests/aom-previous-years-papers', label: 'AOM Previous Years Papers', icon: '📂' },
    { href: '/aom-tests/aom-finance-establishment-rules-tests', label: 'Finance & Establishment Rules', icon: '💰' },
    { href: '/aom-tests/aom-gk-rajabhasha-tests', label: 'GK & Rajabhasha', icon: '🌐' },
    { href: '/aom-tests/aom-professional-subject-tests', label: 'Professional Subject', icon: '🚂' },
  ]

  const generalAwarenessLinks = [
    { href: '/general-awareness/abbreviations', label: 'Abbreviations', icon: '📝' },
    { href: '/general-awareness/awards', label: 'Awards', icon: '🏆' },
    { href: '/general-awareness/banking-finance', label: 'Banking & Finance', icon: '🏦' },
    { href: '/general-awareness/beauty-pageant', label: 'Beauty Pageant', icon: '👑' },
    { href: '/general-awareness/biology', label: 'Biology', icon: '🧬' },
    { href: '/general-awareness/biosphere-reserves', label: 'Biosphere Reserves', icon: '🌿' },
    { href: '/general-awareness/books-authors', label: 'Books & Authors', icon: '📚' },
    { href: '/general-awareness/chemistry', label: 'Chemistry', icon: '⚗️' },
    { href: '/general-awareness/committees', label: 'Committees', icon: '👥' },
    { href: '/general-awareness/elephant-reserves', label: 'Elephant Reserves', icon: '🐘' },
    { href: '/general-awareness/geography', label: 'Geography', icon: '🌍' },
    {
      href: '/general-awareness/geographical-indication',
      label: 'Geographical Indications',
      icon: '🏷️',
    },
    { href: '/general-awareness/history', label: 'History', icon: '📜' },
    { href: '/general-awareness/important-days', label: 'Important Days', icon: '📅' },
    { href: '/general-awareness/india-information', label: 'India Information', icon: '🇮🇳' },
    { href: '/general-awareness/indian-constitution', label: 'Indian Constitution', icon: '📖' },
    { href: '/general-awareness/indian-penal-code', label: 'Indian Penal Code', icon: '⚖️' },
    { href: '/general-awareness/index-reports', label: 'Index Reports', icon: '📊' },
    { href: '/general-awareness/international-airports', label: 'International Airports', icon: '🛫' },
    { href: '/general-awareness/international-organization', label: 'International Organization', icon: '🌐' },
    { href: '/general-awareness/maharatna-companies', label: 'Maharatna Companies', icon: '🏢' },
    { href: '/general-awareness/national-parks', label: 'National Parks', icon: '🌲' },
    { href: '/general-awareness/physics', label: 'Physics', icon: '⚛️' },
    { href: '/general-awareness/ramsar-sites', label: 'Ramsar Sites', icon: '🌊' },
    { href: '/general-awareness/schemes', label: 'Schemes', icon: '📋' },
    { href: '/general-awareness/science-technology-defence', label: 'Science Technology & Defence', icon: '🔬' },
    { href: '/general-awareness/sports', label: 'Sports', icon: '⚽' },
    { href: '/general-awareness/states-information', label: 'States Information', icon: '🗺️' },
    { href: '/general-awareness/summits', label: 'Summits', icon: '🏛️' },
    { href: '/general-awareness/tiger-reserves', label: 'Tiger Reserves', icon: '🐅' },
    { href: '/general-awareness/united-nations-organization', label: 'United Nations Organization', icon: '🇺🇳' },
    { href: '/general-awareness/unesco-world-heritage-sites', label: 'UNESCO World Heritage Sites', icon: '🏰' },
    { href: '/general-awareness/who-is-who', label: 'Who Is Who', icon: '👤' },
    { href: '/general-awareness/wildlife-sanctuaries', label: 'Wildlife Sanctuaries', icon: '🦅' },
    { href: '/general-awareness/world-information', label: 'World Information', icon: '🌐' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/20 shadow-[0_12px_40px_-12px_rgba(76,29,149,0.55)]'
          : 'border-b border-white/10 shadow-[0_8px_30px_-16px_rgba(67,56,202,0.45)]'
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-95'
        }`}
        style={{
          background:
            'linear-gradient(115deg, #4c1d95 0%, #5b21b6 28%, #4338ca 58%, #1d4ed8 100%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 120% at 0% 0%, rgba(255,255,255,0.18), transparent 55%),
            radial-gradient(ellipse 50% 100% at 100% 100%, rgba(56,189,248,0.2), transparent 50%)
          `,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{ WebkitBackdropFilter: 'blur(20px)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-360 px-3 sm:px-4 lg:px-6">
        <div className="flex h-16 items-center gap-2 lg:gap-3">
          {/* Left — brand */}
          <Link
            href="/"
            className="group shrink-0 rounded-xl px-1 py-1 transition-all duration-300 hover:bg-white/10"
          >
            <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white drop-shadow-sm sm:text-xl lg:text-2xl">
              AOM Adda
            </span>
          </Link>

          {/* Center — main nav (desktop): rounded-full pill covering Syllabus → General Awareness */}
          <div className="hidden min-w-0 flex-1 lg:flex lg:items-center lg:justify-center">
            <div className="flex w-max max-w-full flex-nowrap items-center gap-0.5 overflow-visible rounded-full border border-white/20 bg-white/10 px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:gap-1 lg:px-2">
              {/* Syllabus Link */}
              <Link
                href="/syllabus"
                className={desktopNavPillClass(pathname.startsWith('/syllabus'))}
              >
                Syllabus
              </Link>

            {/* Acts Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsActsDropdownOpen(true)}
              onMouseLeave={() => setIsActsDropdownOpen(false)}
            >
              <Link href="/acts" className={desktopNavPillClass(pathname.startsWith('/acts'))}>
                Acts & Rules
                <Chevron open={isActsDropdownOpen} />
              </Link>
              
              {/* Dropdown Menu */}
              {isActsDropdownOpen && (
                <DropdownShell className="w-100">
                  {/* Header */}
                  <div className={dropdownHeaderClass}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Acts & Rules
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{actsLinks.length} Acts & Rules</span>
                    </div>
                  </div>
                  
                  {/* Content - Single Column with Scroll */}
                  <div className="p-4 flex flex-col gap-2.5 max-h-100 overflow-y-auto">
                    {actsLinks.map((act) => {
                      const isActive = pathname === act.href
                      const year = act.href.match(/\d{4}/)?.[0] || ''
                      return (
                        <Link
                          key={act.href}
                          href={act.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                                ? 'bg-linear-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-br hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="flex items-start gap-2.5">
                              {year && (
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 ${
                                  isActive  
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600'
                                }`}>
                                  {year}
                                </span>
                              )}
                              <span className="text-xs font-medium leading-snug flex-1">
                                {act.label}
                              </span>
                            </div>
                          </div>
                          
                          {/* Hover arrow */}
                          <svg
                            className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 ${
                              isActive ? 'opacity-100' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className={dropdownFooterClass}>
                    <Link
                      href="/acts"
                      onClick={() => setIsActsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Acts</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </DropdownShell>
              )}
            </div>

            {/* Manuals Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsManualsDropdownOpen(true)}
              onMouseLeave={() => setIsManualsDropdownOpen(false)}
            >
              <Link href="/manuals" className={desktopNavPillClass(pathname.startsWith('/manuals'))}>
                Manuals
                <Chevron open={isManualsDropdownOpen} />
              </Link>
              
              {/* Dropdown Menu */}
              {isManualsDropdownOpen && (
                <DropdownShell className="w-125">
                  {/* Header */}
                  <div className={dropdownHeaderClass}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Manual Documents
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{manualsLinks.length} Manuals</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {manualsLinks.map((manual) => {
                      const isActive = pathname === manual.href
                      return (
                        <Link
                          key={manual.href}
                          href={manual.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{manual.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {manual.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className={dropdownFooterClass}>
                    <Link
                      href="/manuals"
                      onClick={() => setIsManualsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Manuals</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </DropdownShell>
              )}
            </div>

            {/* PDFs Link */}
            <Link href="/pdfs" className={desktopNavPillClass(pathname.startsWith('/pdfs'))}>
              PDFs
            </Link>

            {/* Circulars Link */}
            <Link href="/circulars" className={desktopNavPillClass(pathname.startsWith('/circulars'))}>
              Circulars
            </Link>

            {/* Topics Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTopicsDropdownOpen(true)}
              onMouseLeave={() => setIsTopicsDropdownOpen(false)}
            >
              <Link href="/topics" className={desktopNavPillClass(pathname.startsWith('/topics'))}>
                Topics
                <Chevron open={isTopicsDropdownOpen} />
              </Link>
              
              {/* Dropdown Menu */}
              {isTopicsDropdownOpen && (
                <DropdownShell className="flex max-h-[min(70vh,560px)] w-125 flex-col">
                  {/* Header */}
                  <div className={dropdownHeaderClass}>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Topics
                      </h3>
                      <span className="shrink-0 text-xs text-gray-500 font-medium">{topicsLinks.length} topics</span>
                    </div>
                  </div>
                  
                  {/* Content — scrollable so all topics stay reachable */}
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 flex flex-col gap-2">
                    {topicsLinks.map((topic) => {
                      const isActive = pathname === topic.href
                      return (
                        <Link
                          key={topic.href}
                          href={topic.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{topic.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {topic.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className={dropdownFooterClass}>
                    <Link
                      href="/topics"
                      onClick={() => setIsTopicsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Topics</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </DropdownShell>
              )}
            </div>

            {/* Quizzes Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsQuizzesDropdownOpen(true)}
              onMouseLeave={() => setIsQuizzesDropdownOpen(false)}
            >
              <Link href="/quizzes" className={desktopNavPillClass(pathname.startsWith('/quizzes'))}>
                Quizzes
                <Chevron open={isQuizzesDropdownOpen} />
              </Link>
              
              {/* Dropdown Menu */}
              {isQuizzesDropdownOpen && (
                <DropdownShell className="flex max-h-[min(70vh,560px)] w-125 flex-col">
                  {/* Header */}
                  <div className={dropdownHeaderClass}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Quizzes
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{quizzesLinks.length} Quizzes</span>
                    </div>
                  </div>
                  
                  {/* Content — scrollable so all quiz links stay reachable */}
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 flex flex-col gap-2">
                    {quizzesLinks.map((quiz) => {
                      const isActive = pathname === quiz.href
                      return (
                        <Link
                          key={quiz.href}
                          href={quiz.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{quiz.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {quiz.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className={dropdownFooterClass}>
                    <Link
                      href="/quizzes"
                      onClick={() => setIsQuizzesDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Quizzes</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </DropdownShell>
              )}
            </div>

            {/* AOM Tests Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsAomTestsDropdownOpen(true)}
              onMouseLeave={() => setIsAomTestsDropdownOpen(false)}
            >
              <Link href="/aom-tests" className={desktopNavPillClass(pathname.startsWith('/aom-tests'))}>
                AOM Tests
                <Chevron open={isAomTestsDropdownOpen} />
              </Link>

              {isAomTestsDropdownOpen && (
                <DropdownShell className="flex max-h-[min(70vh,560px)] w-100 flex-col">
                  <div className={dropdownHeaderClass}>
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        AOM Tests
                      </h3>
                      <span className="text-xs font-medium text-gray-500">{aomTestsLinks.length} Tests</span>
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain p-4">
                    {aomTestsLinks.map((test) => {
                      const isActive = pathname === test.href
                      return (
                        <Link
                          key={test.href}
                          href={test.href}
                          className={`group relative rounded-xl px-4 py-3 transition-all duration-200 ${
                            isActive
                              ? 'border-2 border-purple-300/60 bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 font-semibold text-purple-700 shadow-lg shadow-purple-200/50'
                              : 'border border-gray-200/50 text-gray-700 hover:border-purple-200/70 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute top-0 bottom-0 left-0 w-1.5 rounded-r-full bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500"></span>
                          )}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="shrink-0 text-xl">{test.icon}</span>
                            <span className="flex-1 text-sm leading-snug font-medium">{test.label}</span>
                            <svg
                              className={`h-4 w-4 shrink-0 text-purple-400 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  <div className={dropdownFooterClass}>
                    <Link
                      href="/aom-tests"
                      onClick={() => setIsAomTestsDropdownOpen(false)}
                      className="group flex items-center justify-center gap-2 text-xs font-semibold text-purple-600 hover:text-purple-700"
                    >
                      <span>View All AOM Tests</span>
                      <svg
                        className="h-3.5 w-3.5 transform transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </DropdownShell>
              )}
            </div>

            {/* General Awareness Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsGeneralAwarenessDropdownOpen(true)}
              onMouseLeave={() => setIsGeneralAwarenessDropdownOpen(false)}
            >
              <Link
                href="/general-awareness"
                className={desktopNavPillClass(pathname.startsWith('/general-awareness'))}
              >
                General Awareness
                <Chevron open={isGeneralAwarenessDropdownOpen} />
              </Link>
              
              {/* Dropdown Menu */}
              {isGeneralAwarenessDropdownOpen && (
                <DropdownShell className="w-125">
                  <div className={dropdownHeaderClass}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        General Awareness
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{generalAwarenessLinks.length} Topics</span>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col gap-2 max-h-100 overflow-y-auto">
                    {generalAwarenessLinks.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{item.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">{item.label}</span>
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  <div className={dropdownFooterClass}>
                    <Link
                      href="/general-awareness"
                      onClick={() => setIsGeneralAwarenessDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All General Awareness</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </DropdownShell>
              )}
            </div>
            </div>
          </div>

          {/* Right — username + admin */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2.5 lg:flex">
              <AuthNav user={user} variant="desktop" />
              {user?.role === 'admin' ? (
                <Link
                  href="/admin"
                  className={`inline-flex h-10 shrink-0 items-center rounded-full px-4 text-sm font-bold tracking-wide shadow-[0_8px_20px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/30 transition-all duration-300 ${
                    pathname.startsWith('/admin')
                      ? 'bg-white text-violet-700 ring-2 ring-white/80'
                      : 'bg-linear-to-r from-amber-300 to-orange-400 text-slate-900 hover:from-amber-200 hover:to-orange-300 hover:shadow-lg'
                  }`}
                >
                  Admin
                </Link>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-md transition-all duration-200 hover:bg-white/20 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="relative block h-3.5 w-4.5">
                <span
                  className={`absolute left-0 block h-0.5 w-4.5 rounded-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 block h-0.5 w-4.5 rounded-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-4.5 rounded-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu — cap to viewport so nested accordions can scroll inside the screen */}
        <div
          className={`lg:hidden overflow-y-auto overflow-x-hidden overscroll-contain transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[calc(100dvh-4.5rem)] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-1 flex flex-col space-y-2 rounded-3xl border border-white/15 bg-white/8 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md">
            {/* Syllabus Link */}
            <Link
              href="/syllabus"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavItemClass(pathname.startsWith('/syllabus'))}
            >
              <span>Syllabus</span>
            </Link>

            {/* Acts Link with Accordion */}
            <div>
              <button
                onClick={() => setIsActsDropdownOpen(!isActsDropdownOpen)}
                className={mobileNavItemClass(pathname.startsWith('/acts'))}
              >
                <span>Acts & Rules</span>
                <Chevron open={isActsDropdownOpen} className="h-5 w-5" />
              </button>
              
              {/* Mobile Acts Dropdown */}
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  isActsDropdownOpen ? 'max-h-150 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {actsLinks.map((act) => {
                    const isActive = pathname === act.href
                    return (
                      <Link
                        key={act.href}
                        href={act.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsActsDropdownOpen(false)
                        }}
                        className={mobileChildLinkClass(isActive)}
                      >
                        {act.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Manuals Link with Accordion */}
            <div>
              <button
                onClick={() => setIsManualsDropdownOpen(!isManualsDropdownOpen)}
                className={mobileNavItemClass(pathname.startsWith('/manuals'))}
              >
                <span>Manuals</span>
                <Chevron open={isManualsDropdownOpen} className="h-5 w-5" />
              </button>
              
              {/* Mobile Manuals Dropdown */}
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  isManualsDropdownOpen ? 'max-h-100 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {manualsLinks.map((manual) => {
                    const isActive = pathname === manual.href
                    return (
                      <Link
                        key={manual.href}
                        href={manual.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsManualsDropdownOpen(false)
                        }}
                        className={`${mobileChildLinkClass(isActive)} flex items-center gap-2`}
                      >
                        <span>{manual.icon}</span>
                        <span>{manual.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* PDFs Link */}
            <Link
              href="/pdfs"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavItemClass(pathname.startsWith('/pdfs'))}
            >
              <span>PDFs</span>
            </Link>

            {/* Circulars Link */}
            <Link
              href="/circulars"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavItemClass(pathname.startsWith('/circulars'))}
            >
              <span>Circulars</span>
            </Link>

            {/* Topics Link with Accordion */}
            <div>
              <button
                onClick={() => setIsTopicsDropdownOpen(!isTopicsDropdownOpen)}
                className={mobileNavItemClass(pathname.startsWith('/topics'))}
              >
                <span>Topics</span>
                <Chevron open={isTopicsDropdownOpen} className="h-5 w-5" />
              </button>
              
              {/* Mobile Topics — same A–Z order as desktop hover menu */}
              <div
                className={`relative touch-pan-y overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] transition-all duration-300 ease-in-out ${
                  isTopicsDropdownOpen
                    ? 'max-h-[min(65dvh,28rem)] opacity-100 mt-2'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="flex min-h-0 flex-col space-y-1 pl-4">
                  {topicsLinks.map((topic) => {
                    const isActive = pathname === topic.href
                    return (
                      <Link
                        key={topic.href}
                        href={topic.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsTopicsDropdownOpen(false)
                        }}
                        className={`${mobileChildLinkClass(isActive)} flex items-center gap-2`}
                      >
                        <span>{topic.icon}</span>
                        <span>{topic.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quizzes Link with Accordion */}
            <div>
              <button
                onClick={() => setIsQuizzesDropdownOpen(!isQuizzesDropdownOpen)}
                className={mobileNavItemClass(pathname.startsWith('/quizzes'))}
              >
                <span>Quizzes</span>
                <Chevron open={isQuizzesDropdownOpen} className="h-5 w-5" />
              </button>
              
              {/* Mobile Quizzes Dropdown — viewport-based height + touch scroll */}
              <div
                className={`relative touch-pan-y overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] transition-all duration-300 ease-in-out ${
                  isQuizzesDropdownOpen
                    ? 'max-h-[min(65dvh,28rem)] opacity-100 mt-2'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="flex min-h-0 flex-col space-y-1 pl-4">
                  {quizzesLinks.map((quiz) => {
                    const isActive = pathname === quiz.href
                    return (
                      <Link
                        key={quiz.href}
                        href={quiz.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsQuizzesDropdownOpen(false)
                        }}
                        className={`${mobileChildLinkClass(isActive)} flex items-center gap-2`}
                      >
                        <span>{quiz.icon}</span>
                        <span>{quiz.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsAomTestsDropdownOpen(!isAomTestsDropdownOpen)}
                className={mobileNavItemClass(pathname.startsWith('/aom-tests'))}
              >
                <span>AOM Tests</span>
                <Chevron open={isAomTestsDropdownOpen} className="h-5 w-5" />
              </button>

              <div
                className={`relative touch-pan-y overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] transition-all duration-300 ease-in-out ${
                  isAomTestsDropdownOpen
                    ? 'mt-2 max-h-[min(65dvh,28rem)] opacity-100'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="flex min-h-0 flex-col space-y-1 pl-4">
                  {aomTestsLinks.map((test) => {
                    const isActive = pathname === test.href
                    return (
                      <Link
                        key={test.href}
                        href={test.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsAomTestsDropdownOpen(false)
                        }}
                        className={`${mobileChildLinkClass(isActive)} flex items-center gap-2`}
                      >
                        <span>{test.icon}</span>
                        <span>{test.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* General Awareness Link with Accordion */}
            <div>
              <button
                onClick={() => setIsGeneralAwarenessDropdownOpen(!isGeneralAwarenessDropdownOpen)}
                className={mobileNavItemClass(pathname.startsWith('/general-awareness'))}
              >
                <span>General Awareness</span>
                <Chevron open={isGeneralAwarenessDropdownOpen} className="h-5 w-5" />
              </button>
              
              {/* Mobile General Awareness Dropdown */}
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  isGeneralAwarenessDropdownOpen ? 'max-h-125 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {generalAwarenessLinks.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsGeneralAwarenessDropdownOpen(false)
                        }}
                        className={`${mobileChildLinkClass(isActive)} flex items-center gap-2`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <AuthNav
              user={user}
              variant="mobile"
              onNavigate={() => setIsMobileMenuOpen(false)}
            />

            {user?.role === 'admin' ? (
              <Link
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-full px-4 py-3 text-center text-base font-bold shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)] ring-1 ring-white/25 transition-all duration-300 ${
                  pathname.startsWith('/admin')
                    ? 'bg-white text-violet-700'
                    : 'bg-linear-to-r from-amber-300 to-orange-400 text-slate-900'
                }`}
              >
                Admin
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar