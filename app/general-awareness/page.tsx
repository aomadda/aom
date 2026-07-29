'use client'

import React from 'react'
import Link from 'next/link'
import {
  Atom,
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Crown,
  Dna,
  FlaskConical,
  Gavel,
  Globe2,
  Landmark,
  MapPinned,
  Medal,
  Microscope,
  Sparkles,
  Scroll,
  Scale,
  TextQuote,
  Trophy,
  UserCircle,
  UsersRound,
  Building2,
  FileSpreadsheet,
  Flag,
  Eye,
  Bird,
  Layers,
  Leaf,
  PawPrint,
  TreePine,
  Tags,
  Waves,
} from 'lucide-react'

type Topic = {
  href: string
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  gradient: string
  ring: string
  iconBg: string
}

const awarenessSections: { heading: string; blurb: string; items: Topic[] }[] = [
  {
    heading: 'India & law',
    blurb: 'Constitution, criminal law, and national & state facts.',
    items: [
      {
        href: '/general-awareness/indian-constitution',
        title: 'Indian Constitution',
        subtitle: 'Parts, schedules & articles',
        description: 'Preamble, fundamental rights, directive principles, amendments, and constitutional bodies.',
        icon: Scale,
        gradient: 'from-amber-600 to-orange-700',
        ring: 'ring-amber-500/30',
        iconBg: 'bg-amber-500/20',
      },
      {
        href: '/general-awareness/indian-penal-code',
        title: 'Indian Penal Code',
        subtitle: 'IPC essentials',
        description: 'Key offences, sections, and legal definitions frequently asked in competitive exams.',
        icon: Gavel,
        gradient: 'from-stone-600 to-neutral-800',
        ring: 'ring-stone-500/30',
        iconBg: 'bg-stone-500/20',
      },
      {
        href: '/general-awareness/india-information',
        title: 'India information',
        subtitle: 'National facts',
        description: 'Symbols, awards, demography, economy snapshots, and country-level reference data.',
        icon: Flag,
        gradient: 'from-orange-600 to-red-700',
        ring: 'ring-orange-500/30',
        iconBg: 'bg-orange-500/20',
      },
      {
        href: '/general-awareness/states-information',
        title: 'States information',
        subtitle: 'States & UTs',
        description: 'Capitals, formation dates, state symbols, and regional highlights across India.',
        icon: MapPinned,
        gradient: 'from-emerald-600 to-teal-700',
        ring: 'ring-emerald-500/30',
        iconBg: 'bg-emerald-500/20',
      },
    ],
  },
  {
    heading: 'Protected areas & conservation',
    blurb: 'National parks, tiger & elephant networks, wetlands, and wildlife habitats.',
    items: [
      {
        href: '/general-awareness/national-parks',
        title: 'National parks',
        subtitle: 'India NP network',
        description: 'Key national parks, locations, biodiversity, and conservation status for exams.',
        icon: TreePine,
        gradient: 'from-green-700 to-emerald-800',
        ring: 'ring-green-500/30',
        iconBg: 'bg-green-500/20',
      },
      {
        href: '/general-awareness/tiger-reserves',
        title: 'Tiger reserves',
        subtitle: 'Project Tiger',
        description: 'Tiger reserves, core/buffer zones, and population milestones across states.',
        icon: PawPrint,
        gradient: 'from-amber-700 to-orange-800',
        ring: 'ring-amber-500/30',
        iconBg: 'bg-amber-500/20',
      },
      {
        href: '/general-awareness/biosphere-reserves',
        title: 'Biosphere reserves',
        subtitle: 'UNESCO BRs',
        description: 'Biosphere zones, core/buffer/transition, and ecological significance in India.',
        icon: Leaf,
        gradient: 'from-lime-600 to-green-800',
        ring: 'ring-lime-500/30',
        iconBg: 'bg-lime-500/20',
      },
      {
        href: '/general-awareness/unesco-world-heritage-sites',
        title: 'UNESCO World Heritage Sites',
        subtitle: 'Site name, state name, year',
        description: 'Complete and updated list of India UNESCO World Heritage Sites.',
        icon: Landmark,
        gradient: 'from-indigo-600 to-cyan-700',
        ring: 'ring-indigo-500/30',
        iconBg: 'bg-indigo-500/20',
      },
      {
        href: '/general-awareness/elephant-reserves',
        title: 'Elephant reserves',
        subtitle: 'Project Elephant',
        description: 'Elephant corridors, reserve boundaries, and habitat conservation facts.',
        icon: Layers,
        gradient: 'from-stone-600 to-neutral-800',
        ring: 'ring-stone-500/30',
        iconBg: 'bg-stone-500/20',
      },
      {
        href: '/general-awareness/ramsar-sites',
        title: 'Ramsar sites',
        subtitle: 'Wetlands of India',
        description: 'Ramsar wetlands, criteria, state-wise listing, and recent additions.',
        icon: Waves,
        gradient: 'from-sky-600 to-cyan-800',
        ring: 'ring-sky-500/30',
        iconBg: 'bg-sky-500/20',
      },
      {
        href: '/general-awareness/geographical-indication',
        title: 'Geographical indications',
        subtitle: 'GI tags in India',
        description:
          'State-wise registered geographical indications with type and year of registration.',
        icon: Tags,
        gradient: 'from-violet-600 to-purple-800',
        ring: 'ring-violet-500/30',
        iconBg: 'bg-violet-500/20',
      },
      {
        href: '/general-awareness/wildlife-sanctuaries',
        title: 'Wildlife sanctuaries',
        subtitle: 'Sanctuary network',
        description: 'Notable sanctuaries, species, and how they differ from parks and reserves.',
        icon: Bird,
        gradient: 'from-teal-600 to-emerald-800',
        ring: 'ring-teal-500/30',
        iconBg: 'bg-teal-500/20',
      },
      {
        href: '/general-awareness/world-information',
        title: 'World information',
        subtitle: 'Global facts & figures',
        description: 'Key facts about countries, capitals, organizations, and the wider world.',
        icon: Globe2,
        gradient: 'from-blue-600 to-indigo-800',
        ring: 'ring-blue-500/30',
        iconBg: 'bg-blue-500/20',
      },
    ],
  },
  {
    heading: 'World & organizations',
    blurb: 'International bodies, diplomacy, and global institutions.',
    items: [
      {
        href: '/general-awareness/international-airports',
        title: 'International airports',
        subtitle: 'State, airport, city, year',
        description: 'International airports list in table format with state, airport name, city, and year details.',
        icon: Globe2,
        gradient: 'from-cyan-600 to-blue-700',
        ring: 'ring-cyan-500/30',
        iconBg: 'bg-cyan-500/20',
      },
      {
        href: '/general-awareness/international-organization',
        title: 'International organizations',
        subtitle: 'IGOs & agencies',
        description: 'World Bank, IMF, WTO, Commonwealth, and major multilateral forums.',
        icon: Globe2,
        gradient: 'from-blue-600 to-indigo-700',
        ring: 'ring-blue-500/30',
        iconBg: 'bg-blue-500/20',
      },
      {
        href: '/general-awareness/united-nations-organization',
        title: 'United Nations',
        subtitle: 'UN system',
        description: 'UN organs, specialised agencies, headquarters, and peace & development mandates.',
        icon: Landmark,
        gradient: 'from-sky-600 to-blue-800',
        ring: 'ring-sky-500/30',
        iconBg: 'bg-sky-500/20',
      },
      {
        href: '/general-awareness/who-is-who',
        title: 'Who is who',
        subtitle: 'Appointments & heads',
        description: 'Current heads of states, ministries, and important offices — quick reference.',
        icon: UserCircle,
        gradient: 'from-violet-600 to-purple-700',
        ring: 'ring-violet-500/30',
        iconBg: 'bg-violet-500/20',
      },
      {
        href: '/general-awareness/summits',
        title: 'Summits',
        subtitle: 'Global meets',
        description: 'G7, G20, BRICS, SCO, and major summit outcomes and venues.',
        icon: Building2,
        gradient: 'from-slate-600 to-zinc-700',
        ring: 'ring-slate-500/30',
        iconBg: 'bg-slate-500/20',
      },
    ],
  },
  {
    heading: 'Science & subjects',
    blurb: 'School-level science, geography, history, and defence tech.',
    items: [
      {
        href: '/general-awareness/physics',
        title: 'Physics',
        subtitle: 'Laws & discoveries',
        description: 'Mechanics, heat, light, electricity, and Nobel-linked milestones.',
        icon: Atom,
        gradient: 'from-cyan-600 to-blue-700',
        ring: 'ring-cyan-500/30',
        iconBg: 'bg-cyan-500/20',
      },
      {
        href: '/general-awareness/chemistry',
        title: 'Chemistry',
        subtitle: 'Elements & reactions',
        description: 'Periodic trends, acids & bases, organic basics, and everyday chemistry.',
        icon: FlaskConical,
        gradient: 'from-green-600 to-emerald-700',
        ring: 'ring-green-500/30',
        iconBg: 'bg-green-500/20',
      },
      {
        href: '/general-awareness/biology',
        title: 'Biology',
        subtitle: 'Life sciences',
        description: 'Cell biology, human systems, ecology, and health-related facts.',
        icon: Dna,
        gradient: 'from-lime-600 to-green-700',
        ring: 'ring-lime-500/30',
        iconBg: 'bg-lime-500/20',
      },
      {
        href: '/general-awareness/geography',
        title: 'Geography',
        subtitle: 'Physical & world',
        description: 'Rivers, mountains, climate, soils, and world geography for exams.',
        icon: Globe2,
        gradient: 'from-teal-600 to-cyan-700',
        ring: 'ring-teal-500/30',
        iconBg: 'bg-teal-500/20',
      },
      {
        href: '/general-awareness/history',
        title: 'History',
        subtitle: 'India & world',
        description: 'Ancient, medieval, modern India and world history timelines.',
        icon: Scroll,
        gradient: 'from-rose-600 to-red-800',
        ring: 'ring-rose-500/30',
        iconBg: 'bg-rose-500/20',
      },
      {
        href: '/general-awareness/science-technology-defence',
        title: 'Science, technology & defence',
        subtitle: 'ST & armed forces',
        description: 'Space, nuclear, IT milestones, missiles, ranks, and defence platforms.',
        icon: Microscope,
        gradient: 'from-indigo-600 to-violet-700',
        ring: 'ring-indigo-500/30',
        iconBg: 'bg-indigo-500/20',
      },
    ],
  },
  {
    heading: 'Economy & programmes',
    blurb: 'Banking, government schemes, CPSEs, and indices.',
    items: [
      {
        href: '/general-awareness/banking-finance',
        title: 'Banking & finance',
        subtitle: 'Money & markets',
        description: 'RBI, banking terms, monetary policy, NBFCs, and financial awareness.',
        icon: Landmark,
        gradient: 'from-emerald-600 to-green-800',
        ring: 'ring-emerald-500/30',
        iconBg: 'bg-emerald-500/20',
      },
      {
        href: '/general-awareness/schemes',
        title: 'Government schemes',
        subtitle: 'Welfare & flagship',
        description: 'Central and state welfare programmes, ministries, and objectives.',
        icon: FileSpreadsheet,
        gradient: 'from-fuchsia-600 to-pink-700',
        ring: 'ring-fuchsia-500/30',
        iconBg: 'bg-fuchsia-500/20',
      },
      {
        href: '/general-awareness/maharatna-companies',
        title: 'Maharatna companies',
        subtitle: 'CPSE league',
        description: 'Navratna, Maharatna criteria, and major public sector undertakings.',
        icon: Building2,
        gradient: 'from-blue-700 to-slate-800',
        ring: 'ring-blue-500/30',
        iconBg: 'bg-blue-500/20',
      },
      {
        href: '/general-awareness/index-reports',
        title: 'Index & reports',
        subtitle: 'Rankings & surveys',
        description: 'Ease of doing business, HDI, hunger index, and notable global reports.',
        icon: BarChart3,
        gradient: 'from-amber-700 to-yellow-800',
        ring: 'ring-amber-500/30',
        iconBg: 'bg-amber-500/20',
      },
    ],
  },
  {
    heading: 'General knowledge',
    blurb: 'Awards, sports, culture, days, and misc. facts.',
    items: [
      {
        href: '/general-awareness/abbreviations',
        title: 'Abbreviations',
        subtitle: 'Acronyms',
        description: 'Important abbreviations across polity, economy, defence, and organisations.',
        icon: TextQuote,
        gradient: 'from-neutral-600 to-stone-700',
        ring: 'ring-neutral-500/30',
        iconBg: 'bg-neutral-500/20',
      },
      {
        href: '/general-awareness/awards',
        title: 'Awards',
        subtitle: 'National & global',
        description: 'Bharat Ratna, Padma awards, Nobel, Oscars, and major honours.',
        icon: Trophy,
        gradient: 'from-yellow-600 to-amber-700',
        ring: 'ring-yellow-500/30',
        iconBg: 'bg-yellow-500/20',
      },
      {
        href: '/general-awareness/sports',
        title: 'Sports',
        subtitle: 'Games & records',
        description: 'Tournaments, venues, terminology, and recent sporting milestones.',
        icon: Medal,
        gradient: 'from-red-600 to-orange-700',
        ring: 'ring-red-500/30',
        iconBg: 'bg-red-500/20',
      },
      {
        href: '/general-awareness/books-authors',
        title: 'Books & authors',
        subtitle: 'Literature GK',
        description: 'Classic and contemporary works, autobiographies, and prize-winning books.',
        icon: BookOpen,
        gradient: 'from-purple-600 to-indigo-700',
        ring: 'ring-purple-500/30',
        iconBg: 'bg-purple-500/20',
      },
      {
        href: '/general-awareness/important-days',
        title: 'Important days',
        subtitle: 'Calendar GK',
        description: 'National and international observances, themes, and founding dates.',
        icon: CalendarDays,
        gradient: 'from-pink-600 to-rose-700',
        ring: 'ring-pink-500/30',
        iconBg: 'bg-pink-500/20',
      },
      {
        href: '/general-awareness/beauty-pageant',
        title: 'Beauty pageants',
        subtitle: 'Miss & Mister',
        description: 'Major pageants, winners, and host countries — factual reference.',
        icon: Crown,
        gradient: 'from-fuchsia-600 to-purple-700',
        ring: 'ring-fuchsia-500/30',
        iconBg: 'bg-fuchsia-500/20',
      },
      {
        href: '/general-awareness/committees',
        title: 'Committees',
        subtitle: 'Commissions & panels',
        description: 'Important committees, chairpersons, and recommendations for exams.',
        icon: UsersRound,
        gradient: 'from-cyan-600 to-slate-700',
        ring: 'ring-cyan-500/30',
        iconBg: 'bg-cyan-500/20',
      },
    ],
  },
]

const totalTopics = awarenessSections.reduce((n, s) => n + s.items.length, 0)

const GeneralAwarenessPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-emerald-50/90 to-cyan-100/80">
      <header className="relative overflow-hidden border-b border-teal-200/70 bg-linear-to-r from-teal-700 via-emerald-700 to-cyan-800 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(255,255,255,0.2),transparent)]" />
        <div className="pointer-events-none absolute -right-28 top-6 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-100 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-50 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Competitive exams
            </div>

            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-linear-to-br from-white/25 to-white/5 p-4 shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                <Eye className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              General <span className="text-emerald-200">awareness</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-teal-50 sm:text-lg">
              Static GK for railway and other competitive exams — polity, science, economy, world affairs, and
              miscellaneous facts in one index.
            </p>
            <p className="mt-3 text-sm font-medium text-emerald-100/95">{totalTopics} topic sections</p>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {awarenessSections.map((section) => (
          <section key={section.heading} className="mb-14 last:mb-0 lg:mb-16">
            <div className="mb-8 border-b border-teal-200/90 pb-4">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{section.heading}</h2>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">{section.blurb}</p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {section.items.map((topic) => {
                const Icon = topic.icon
                return (
                  <li key={topic.href}>
                    <Link
                      href={topic.href}
                      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-900/10 ${topic.ring}`}
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-90 ${topic.gradient}`}
                        aria-hidden
                      />
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${topic.iconBg} text-slate-800`}
                        >
                          <Icon className="h-6 w-6" strokeWidth={1.75} />
                        </div>
                        <span
                          className={`rounded-full bg-linear-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100 sm:text-xs ${topic.gradient}`}
                        >
                          Open
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-teal-800 sm:text-xl">
                        {topic.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-500">{topic.subtitle}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                      <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-teal-700">
                        Study topic
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </main>
    </div>
  )
}

export default GeneralAwarenessPage
