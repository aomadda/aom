import React, { Suspense } from 'react'
import Link from 'next/link'
import {
} from 'lucide-react'
import { getSession } from '@/lib/auth/session'
import HomeRuleOfTheDay from '@/components/HomeRuleOfTheDay'

type NavBox = { href: string; label: string; icon?: string }

const topicsLinks: NavBox[] = [
  { href: '/topics/chief-controller', label: 'Chief Controller', icon: '👨‍💼' },
  { href: '/topics/container-rail-terminals', label: 'Container rail terminals', icon: '🏗️' },
  { href: '/topics/public-complaints', label: 'Public complaints', icon: '📢' },
  { href: '/topics/establishment-rules', label: 'Establishment rules', icon: '📜' },
  { href: '/topics/financial-rules', label: 'Financial rules', icon: '💰' },
  { href: '/topics/general-rules', label: 'General rules', icon: '📘' },
  { href: '/topics/railway-acts', label: 'Railway acts', icon: '⚖️' },
  { href: '/topics/operating-material', label: 'Operating material', icon: '📂' },
  { href: '/topics/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
  { href: '/topics/accident-manual', label: 'Accident Manual', icon: '⚠️' },
  { href: '/topics/operating-manual', label: 'Operating Manual', icon: '📘' },
  { href: '/topics/working-time-table', label: 'Working Time Table', icon: '⏰' },
  { href: '/topics/indian-railways', label: 'Indian Railways', icon: '🇮🇳' },
  { href: '/topics/irec', label: 'IREC', icon: '📕' },
  { href: '/topics/irem', label: 'IREM', icon: '📗' },
  { href: '/topics/joint-consultative-machinery', label: 'Joint consultative machinery', icon: '💬' },
  { href: '/topics/cat', label: 'CAT', icon: '📝' },
  { href: '/topics/master-circulars', label: 'Master circulars', icon: '📜' },
  { href: '/topics/merry-go-round', label: 'Merry go round', icon: '🎠' },
  { href: '/topics/mission-3000MT', label: 'Mission 3000 MT', icon: '🎯' },
  { href: '/topics/leave-travel-concession', label: 'Leave travel concession', icon: '🎫' },
  { href: '/topics/govt-pension', label: 'Government pension', icon: '🏛️' },
  { href: '/topics/government-e-market', label: 'Government e-market', icon: '🛒' },
  { href: '/topics/national-logistics-policy', label: 'National logistics policy', icon: '📦' },
  { href: '/topics/national-pension-scheme', label: 'National pension scheme', icon: '💰' },
  { href: '/topics/permanent-negotiating-machinery', label: 'Permanent negotiating machinery', icon: '🗣️' },
  { href: '/topics/prem', label: 'PREM', icon: '📑' },
  { href: '/topics/national-rail-plan', label: 'National rail plan', icon: '🗺️' },
  { href: '/topics/schemes', label: 'Schemes', icon: '📋' },
  { href: '/topics/engine-on-load', label: 'Engine on load', icon: '🚂' },
  { href: '/topics/gati-shakti-terminals', label: 'Gati Shakti terminals', icon: '⚡' },
  { href: '/topics/information-technology-apps', label: 'Information technology apps', icon: '💻' },
]

const actsLinks: NavBox[] = [
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

const manualsLinks: NavBox[] = [
  { href: '/manuals/accident-manual', label: 'Accident Manual', icon: '⚠️' },
  { href: '/manuals/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
  { href: '/manuals/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
  { href: '/manuals/opertaing-manual', label: 'Operating Manual', icon: '📘' },
  { href: '/manuals/indian-railways-operating-manual', label: 'Indian Railways Operating Manual', icon: '🚂' },
  { href: '/manuals/station-working-rules', label: 'Station Working Rules', icon: '🚉' },
  { href: '/manuals/working-time-table', label: 'Working Time Table', icon: '⏰' },
]

const generalAwarenessLinks: NavBox[] = [
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
  { href: '/general-awareness/geographical-indication', label: 'Geographical Indications', icon: '🏷️' },
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

const quizzesLinks: NavBox[] = [
  { href: '/quizzes/accident-manual', label: 'Accident Manual', icon: '⚠️' },
  { href: '/quizzes/aom-previous-papers', label: 'AOM Previous Papers', icon: '📝' },
  { href: '/quizzes/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
  { href: '/quizzes/commercial-department', label: 'Commercial Department', icon: '💼' },
  { href: '/quizzes/establishment-rules', label: 'Establishment Rules', icon: '📜' },
  { href: '/quizzes/financial-rules', label: 'Financial Rules', icon: '💰' },
  { href: '/quizzes/general-awareness', label: 'General Awareness', icon: '🌐' },
  { href: '/quizzes/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
  { href: '/quizzes/kavach', label: 'Kavach', icon: '🛡️' },
  { href: '/quizzes/operating-department', label: 'Operating Department', icon: '🚂' },
  { href: '/quizzes/operating-manual', label: 'Operating Manual', icon: '📘' },
  { href: '/quizzes/rajabhasha', label: 'Rajabhasha', icon: '📝' },
  { href: '/quizzes/railway-gk', label: 'RailwayGK', icon: '🧠' },
]

const exploreSections = [
  {
    title: 'Topics',
    href: '/topics',
    panel: 'from-rose-600 via-pink-500 to-orange-500 shadow-rose-300/50',
    items: topicsLinks,
  },
  {
    title: 'Acts & Rules',
    href: '/acts',
    panel: 'from-blue-700 via-indigo-600 to-sky-500 shadow-indigo-300/50',
    items: actsLinks,
  },
  {
    title: 'Manuals',
    href: '/manuals',
    panel: 'from-violet-700 via-purple-600 to-fuchsia-500 shadow-purple-300/50',
    items: manualsLinks,
  },
  {
    title: 'General Awareness',
    href: '/general-awareness',
    panel: 'from-teal-700 via-cyan-600 to-emerald-500 shadow-teal-300/50',
    items: generalAwarenessLinks,
  },
  {
    title: 'Quizzes',
    href: '/quizzes',
    panel: 'from-emerald-700 via-green-600 to-lime-500 shadow-emerald-300/50',
    items: quizzesLinks,
  },
]

const Home = async () => {
  let fullName: string | null = null
  try {
    const session = await getSession()
    fullName = session?.fullName ?? null
  } catch {
    fullName = null
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-sky-50 to-violet-50">
      <Suspense fallback={null}>
        <HomeRuleOfTheDay />
      </Suspense>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        {fullName ? (
          <div className="relative z-20 flex justify-end px-4 pt-3 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-white/95 sm:text-base md:text-lg">
              Welcome, <span className="font-bold text-white">{fullName}</span>
            </p>
          </div>
        ) : null}

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Content — left on large screens */}
            <div className="order-2 w-full max-w-2xl text-center lg:order-1 lg:flex-1 lg:text-left">
              <h1 className="mb-6 text-4xl font-bold tracking-tight animate-fade-in sm:text-5xl md:text-6xl lg:text-7xl">
                AOM Adda
              </h1>

              <p className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-blue-100 sm:text-xl md:text-2xl lg:mx-0">
              AOM Adda is an online preparation platform, designed for candidates studying for the Assistant Operations Manager (AOM) and related departmental or promotional examinations.
                
              </p>

             
            </div>

            {/* Profile — small circle top-center on mobile; full picture right on large screens */}
            <div className="order-1 flex w-full justify-center lg:order-2 lg:w-auto lg:shrink-0 lg:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpeg"
                alt="AOM Aspirant profile"
                width={520}
                height={520}
                className="size-20 rounded-full border-4 border-white/40 object-cover object-top shadow-2xl sm:size-24 lg:size-105 lg:rounded-3xl lg:border lg:border-white/30 lg:bg-[#f5f0e8] lg:object-contain xl:size-120"
              />
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        
      </div>

     

      {/* Explore sections */}
      <div className="relative overflow-hidden bg-linear-to-br from-sky-100 via-indigo-50 to-fuchsia-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-teal-300/25 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.55),transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-9xl space-y-8 px-4 py-10 sm:px-6 sm:py-12 lg:space-y-10 lg:px-8 lg:py-16">
          {exploreSections.map((section) => (
            <section
              key={section.href}
              className={`relative overflow-hidden rounded-xl bg-linear-to-br p-4 shadow-xl sm:p-6 lg:p-8 ${section.panel}`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {section.title}
                    </h2>
                  </div>
                  <Link
                    href={section.href}
                    className="shrink-0 rounded-full border border-white/35 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
                  >
                    View all →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex min-h-20 items-center gap-3 rounded-lg border border-white/25 bg-white/15 px-3.5 py-3.5 text-left shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-lg sm:min-h-24 sm:gap-3.5 sm:px-4 sm:py-4"
                    >
                      {item.icon ? (
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl sm:h-12 sm:w-12 sm:text-2xl"
                          aria-hidden
                        >
                          {item.icon}
                        </span>
                      ) : (
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg"
                          aria-hidden
                        >
                          {item.label.charAt(0)}
                        </span>
                      )}
                      <span className="line-clamp-2 text-sm font-semibold leading-snug text-white sm:text-base">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      

      
    </div>
  )
}

export default Home
