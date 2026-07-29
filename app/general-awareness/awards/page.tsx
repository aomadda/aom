import Link from 'next/link'
import React from 'react'
import {
  Activity,
  Atom,
  Award,
  BookOpen,
  ChevronRight,
  Clapperboard,
  Handshake,
  Medal,
  Newspaper,
  Shield,
  Sparkles,
  Star,
  Trophy,
} from 'lucide-react'

type AwardTopic = {
  href: string
  title: string
  subtitle: string
  description: string
  gradient: string
  ring: string
  iconBg: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

const awardTopics: AwardTopic[] = [
  {
    href: '/general-awareness/awards/india-civil-awards',
    title: 'Indian civil awards',
    subtitle: 'Bharat Ratna & Padma',
    description:
      'Bharat Ratna, Padma Vibhushan, Padma Bhushan, and Padma Shri — eligibility, history, and recent recipients.',
    icon: Medal,
    gradient: 'from-amber-600 to-orange-700',
    ring: 'ring-amber-500/30',
    iconBg: 'bg-amber-500/20',
  },
  {
    href: '/general-awareness/awards/indian-gallantary-awards',
    title: 'Indian gallantry awards',
    subtitle: 'PVC to Shaurya Chakra',
    description:
      'Param Vir Chakra, Maha Vir Chakra, Vir Chakra, Ashoka Chakra, Kirti Chakra, and Shaurya Chakra — wartime and peacetime gallantry.',
    icon: Shield,
    gradient: 'from-slate-600 to-slate-800',
    ring: 'ring-slate-500/30',
    iconBg: 'bg-slate-500/20',
  },
  {
    href: '/general-awareness/awards/sports-adventure-awards',
    title: 'Sports & adventure awards',
    subtitle: 'National & international',
    description:
      'National Sports Awards, BCCI Awards, ICC Hall of Fame, Laureus, international hockey, Rashtriya Khel Protsahan, Nari Shakti, Tenzing Norgay, Pradhan Mantri Rashtriya Bal Puraskar.',
    icon: Activity,
    gradient: 'from-emerald-600 to-teal-800',
    ring: 'ring-emerald-500/30',
    iconBg: 'bg-emerald-500/20',
  },
  {
    href: '/general-awareness/awards/literature-awards',
    title: 'Literature awards',
    subtitle: 'National & international',
    description:
      'Jnanpith, Moortidevi, Sahitya Academy, Saraswati Samman, Vyas Samman, Kalidas Samman, DSC Prize, Kaloji Narayana Rao, Kuswanth Singh Memorial, Man Booker, Man Booker International, Asia Book Award, Orange Prize.',
    icon: BookOpen,
    gradient: 'from-violet-600 to-indigo-900',
    ring: 'ring-violet-500/30',
    iconBg: 'bg-violet-500/20',
  },
  {
    href: '/general-awareness/awards/peace-service-awards',
    title: 'Peace & service awards',
    subtitle: 'National & international',
    description:
      'International Gandhi Peace Prize, Gandhi Peace Award, Indira Gandhi Peace Prize, National Integration, Rajiv Sadbhavana, Nehru, Tagore, Children Peace Prize, Mother Teresa, UNESCO, UN Human Rights, UNHCR Nansen, Amnesty, Ramon Magsaysay.',
    icon: Handshake,
    gradient: 'from-sky-600 to-slate-800',
    ring: 'ring-sky-500/30',
    iconBg: 'bg-sky-500/20',
  },
  {
    href: '/general-awareness/awards/journalism-awards',
    title: 'Journalism awards',
    subtitle: 'National & international',
    description:
      'Ramnath Goenka Excellence in Journalism, Chameli Devi Jain, Homi J Baba Memorial, Lal Bahadur Shastri National, G K Reddy Lifetime Achievement, World Press Freedom Prize.',
    icon: Newspaper,
    gradient: 'from-cyan-600 to-blue-900',
    ring: 'ring-cyan-500/30',
    iconBg: 'bg-cyan-500/20',
  },
  {
    href: '/general-awareness/awards/science-technology-awards',
    title: 'Science & technology awards',
    subtitle: 'National & international',
    description:
      'Dhanvantri, Aryabhatta, Dr. Y Naidamma Memorial, G D Birla, Shanti Swarup Bhatnagar, Vikram Sarabhai, B C Roy, Kalinga, Breakthrough Prize, Ramanujan, Abel, Fields, Nobel, Asian Awards.',
    icon: Atom,
    gradient: 'from-fuchsia-600 to-emerald-900',
    ring: 'ring-fuchsia-500/30',
    iconBg: 'bg-fuchsia-500/20',
  },
  {
    href: '/general-awareness/awards/cinema-awards',
    title: 'Cinema awards',
    subtitle: 'National & international',
    description:
      'Dada Saheb Phalke, Yash Chopra Memorial, NTR, ANR, Raghupati Venkaiah Nayudu, National Film, Film Fare, IIFA, IFFI, Oscar, Golden Globe, Grammy.',
    icon: Clapperboard,
    gradient: 'from-rose-600 to-amber-900',
    ring: 'ring-rose-500/30',
    iconBg: 'bg-rose-500/20',
  },
  {
    href: '/general-awareness/awards/other-awards',
    title: 'Other awards',
    subtitle: 'National & international',
    description:
      'Whitely, Right Livelihood, World Food, Pulitzer, Pritzker, Templeton, Tang, Golden Peacock, Global Agriculture Leadership, Ernst & Young.',
    icon: Star,
    gradient: 'from-indigo-600 to-slate-800',
    ring: 'ring-indigo-500/30',
    iconBg: 'bg-indigo-500/20',
  },
]

const AwardsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-teal-50 via-emerald-50/90 to-cyan-100/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_118_110/0.12)_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.35]"
        aria-hidden
      />
      <header className="relative overflow-hidden border-b border-amber-200/70 bg-linear-to-r from-amber-700 via-orange-700 to-rose-800 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(255,255,255,0.18),transparent)]" />
        <div className="pointer-events-none absolute -right-28 top-6 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-rose-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
          <Link
            href="/general-awareness"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-amber-100 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to General Awareness
          </Link>

          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-50 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              General Awareness
            </div>

            <div className="mb-5 flex justify-center">
              <div className="rounded-2xl bg-linear-to-br from-white/25 to-white/5 p-4 shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                <Trophy className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-amber-100">Awards</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-amber-50/95 sm:text-lg">
              Honour rolls for competitive exams — civilian honours, national awards, and related static GK.
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-1 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10 rounded-2xl border border-teal-200/60 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-teal-500/20 to-emerald-600/20 text-teal-800 ring-1 ring-teal-500/20">
              <Award className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Topics</h2>
              <p className="mt-0.5 text-sm text-slate-600 sm:text-base">Choose a topic below.</p>
            </div>
          </div>
        </div>

        <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {awardTopics.map((topic) => {
            const Icon = topic.icon
            return (
              <li key={topic.href}>
                <Link
                  href={topic.href}
                  className={`group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/15 ${topic.ring}`}
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
                  <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-amber-800 sm:text-xl">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{topic.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-amber-800">
                    Study topic
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default AwardsPage
