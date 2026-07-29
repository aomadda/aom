import Link from 'next/link'
import React from 'react'
import { Award, ChevronRight, MapPinned, Sparkles } from 'lucide-react'

type StateTopic = {
  href: string
  title: string
  subtitle: string
  description: string
  gradient: string
  ring: string
  iconBg: string
}

const stateTopics: StateTopic[] = [
  {
    href: '/general-awareness/states-information/andaman-nicobar',
    title: 'Andaman & Nicobar',
    subtitle:
      'West Bengal · Andhra Pradesh · Tamil Nadu · Puducherry · Bay of Bengal · Odisha · Indian Ocean · Myanmar · Bangladesh · Sri Lanka',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-teal-800 to-emerald-950',
    ring: 'ring-emerald-500/35',
    iconBg: 'bg-teal-500/22',
  },
  {
    href: '/general-awareness/states-information/andhra-pradesh',
    title: 'Andhra Pradesh',
    subtitle: 'Coastal state',
    description: 'Capital, symbols, districts, industries, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-emerald-700 to-teal-900',
    ring: 'ring-emerald-500/30',
    iconBg: 'bg-emerald-500/20',
  },
  {
    href: '/general-awareness/states-information/arunachal-pradesh',
    title: 'Arunachal Pradesh',
    subtitle: 'Himalayan state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-teal-700 to-cyan-900',
    ring: 'ring-teal-500/30',
    iconBg: 'bg-teal-500/20',
  },
  {
    href: '/general-awareness/states-information/assam',
    title: 'Assam',
    subtitle: 'Brahmaputra valley',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-emerald-800 to-green-950',
    ring: 'ring-green-500/30',
    iconBg: 'bg-green-500/20',
  },
  {
    href: '/general-awareness/states-information/bihar',
    title: 'Bihar',
    subtitle: 'Ganga river state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-cyan-700 to-sky-900',
    ring: 'ring-sky-500/30',
    iconBg: 'bg-sky-500/20',
  },
  {
    href: '/general-awareness/states-information/chandigarh',
    title: 'Chandigarh',
    subtitle: 'Punjab · Haryana',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-cyan-700 to-teal-900',
    ring: 'ring-teal-500/30',
    iconBg: 'bg-cyan-500/22',
  },
  {
    href: '/general-awareness/states-information/dadra-nagar-haveli',
    title: 'Dadra & Nagar Haveli',
    subtitle: 'Gujarat · Maharashtra · Daman & Diu',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-lime-700 to-emerald-950',
    ring: 'ring-emerald-500/30',
    iconBg: 'bg-lime-500/22',
  },
  {
    href: '/general-awareness/states-information/daman-diu',
    title: 'Daman & Diu',
    subtitle: 'Gujarat',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-teal-700 to-cyan-950',
    ring: 'ring-cyan-500/35',
    iconBg: 'bg-cyan-500/22',
  },
  {
    href: '/general-awareness/states-information/delhi',
    title: 'Delhi',
    subtitle: 'Haryana · Uttar Pradesh',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-slate-600 to-teal-900',
    ring: 'ring-teal-500/30',
    iconBg: 'bg-slate-500/22',
  },
  {
    href: '/general-awareness/states-information/chhattisgarh',
    title: 'Chhattisgarh',
    subtitle: 'Central India state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-emerald-700 to-lime-900',
    ring: 'ring-lime-500/30',
    iconBg: 'bg-lime-500/20',
  },
  {
    href: '/general-awareness/states-information/goa',
    title: 'Goa',
    subtitle: 'Coastal state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-cyan-700 to-blue-900',
    ring: 'ring-cyan-500/30',
    iconBg: 'bg-cyan-500/20',
  },
  {
    href: '/general-awareness/states-information/gujarat',
    title: 'Gujarat',
    subtitle: 'Western state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-amber-700 to-orange-900',
    ring: 'ring-orange-500/30',
    iconBg: 'bg-orange-500/20',
  },
  {
    href: '/general-awareness/states-information/haryana',
    title: 'Haryana',
    subtitle: 'Northern plains state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-indigo-700 to-violet-900',
    ring: 'ring-violet-500/30',
    iconBg: 'bg-violet-500/20',
  },
  {
    href: '/general-awareness/states-information/himachal-pradesh',
    title: 'Himachal Pradesh',
    subtitle: 'Himalayan state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-sky-700 to-teal-900',
    ring: 'ring-sky-500/30',
    iconBg: 'bg-sky-500/20',
  },
  {
    href: '/general-awareness/states-information/jammu-kashmir',
    title: 'Jammu & Kashmir',
    subtitle: 'Himalayan state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-teal-800 to-emerald-950',
    ring: 'ring-teal-500/30',
    iconBg: 'bg-teal-500/20',
  },
  {
    href: '/general-awareness/states-information/jharkhand',
    title: 'Jharkhand',
    subtitle: 'Eastern plateau state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-lime-800 to-green-950',
    ring: 'ring-lime-500/30',
    iconBg: 'bg-lime-500/20',
  },
  {
    href: '/general-awareness/states-information/karnataka',
    title: 'Karnataka',
    subtitle: 'Deccan & coastal state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-fuchsia-800 to-purple-950',
    ring: 'ring-fuchsia-500/30',
    iconBg: 'bg-fuchsia-500/20',
  },
  {
    href: '/general-awareness/states-information/kerala',
    title: 'Kerala',
    subtitle: 'Malabar & backwaters state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-pink-700 to-rose-950',
    ring: 'ring-pink-500/35',
    iconBg: 'bg-pink-500/20',
  },
  {
    href: '/general-awareness/states-information/lakshadweep',
    title: 'Lakshadweep',
    subtitle: 'Kerala · Karnataka · Arabian Sea',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-cyan-600 to-teal-950',
    ring: 'ring-teal-500/35',
    iconBg: 'bg-cyan-500/22',
  },
  {
    href: '/general-awareness/states-information/madhya-pradesh',
    title: 'Madhya Pradesh',
    subtitle: 'Central heartland state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-amber-800 to-yellow-950',
    ring: 'ring-amber-500/35',
    iconBg: 'bg-amber-500/22',
  },
  {
    href: '/general-awareness/states-information/maharashtra',
    title: 'Maharashtra',
    subtitle: 'Western & coastal powerhouse',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-rose-700 to-orange-950',
    ring: 'ring-rose-500/35',
    iconBg: 'bg-rose-500/20',
  },
  {
    href: '/general-awareness/states-information/manipur',
    title: 'Manipur',
    subtitle: 'North-east hill state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-violet-700 to-purple-950',
    ring: 'ring-violet-500/35',
    iconBg: 'bg-violet-500/20',
  },
  {
    href: '/general-awareness/states-information/meghalaya',
    title: 'Meghalaya',
    subtitle: 'Cloud state of the north-east',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-sky-700 to-emerald-950',
    ring: 'ring-emerald-500/35',
    iconBg: 'bg-emerald-500/22',
  },
  {
    href: '/general-awareness/states-information/mizoram',
    title: 'Mizoram',
    subtitle: 'Hill ranges & Mizo homeland',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-cyan-800 to-teal-950',
    ring: 'ring-teal-500/40',
    iconBg: 'bg-teal-500/22',
  },
  {
    href: '/general-awareness/states-information/nagaland',
    title: 'Nagaland',
    subtitle: 'Hornbill festivals & tribal heritage',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-amber-800 to-red-950',
    ring: 'ring-amber-500/40',
    iconBg: 'bg-amber-500/22',
  },
  {
    href: '/general-awareness/states-information/odisha',
    title: 'Odisha',
    subtitle: 'Bay of Bengal coastline & Jagannath circuit',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-orange-700 to-amber-950',
    ring: 'ring-orange-500/35',
    iconBg: 'bg-orange-500/22',
  },
  {
    href: '/general-awareness/states-information/puducherry',
    title: 'Puducherry',
    subtitle: '---',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-indigo-600 to-violet-950',
    ring: 'ring-violet-500/35',
    iconBg: 'bg-indigo-500/22',
  },
  {
    href: '/general-awareness/states-information/punjab',
    title: 'Punjab',
    subtitle: 'Land of Five Rivers',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-amber-600 to-yellow-950',
    ring: 'ring-amber-400/35',
    iconBg: 'bg-amber-500/22',
  },
  {
    href: '/general-awareness/states-information/rajasthan',
    title: 'Rajasthan',
    subtitle: 'Land of Palaces & Forts',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-amber-700 to-rose-950',
    ring: 'ring-rose-500/35',
    iconBg: 'bg-orange-500/22',
  },
  {
    href: '/general-awareness/states-information/sikkim',
    title: 'Sikkim',
    subtitle: 'Teesta – Lifeline of Sikkim',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-emerald-700 to-teal-950',
    ring: 'ring-teal-500/40',
    iconBg: 'bg-emerald-500/22',
  },
  {
    href: '/general-awareness/states-information/tamil-nadu',
    title: 'Tamil Nadu',
    subtitle: 'Land of Temples',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-blue-800 to-indigo-950',
    ring: 'ring-indigo-500/35',
    iconBg: 'bg-indigo-500/22',
  },
  {
    href: '/general-awareness/states-information/telangana',
    title: 'Telangana',
    subtitle: 'Youngest Indian state',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-rose-700 to-pink-950',
    ring: 'ring-pink-500/35',
    iconBg: 'bg-pink-500/22',
  },
  {
    href: '/general-awareness/states-information/tripura',
    title: 'Tripura',
    subtitle: 'Asom · Mizoram · Bangladesh',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-teal-700 to-cyan-950',
    ring: 'ring-cyan-500/35',
    iconBg: 'bg-cyan-500/22',
  },
  {
    href: '/general-awareness/states-information/uttar-pradesh',
    title: 'Uttar Pradesh',
    subtitle:
      'Uttarakhand · Himachal Pradesh · Haryana · Rajasthan · Delhi · Madhya Pradesh · Chhattisgarh · Jharkhand · Bihar · Nepal',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-amber-700 to-orange-950',
    ring: 'ring-orange-500/35',
    iconBg: 'bg-amber-500/22',
  },
  {
    href: '/general-awareness/states-information/uttarakhand',
    title: 'Uttarakhand',
    subtitle: 'Uttara Pradesh · Himachal Pradesh · Haryana · Nepal · China',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-sky-700 to-indigo-950',
    ring: 'ring-sky-500/35',
    iconBg: 'bg-sky-500/22',
  },
  {
    href: '/general-awareness/states-information/west-bengal',
    title: 'West Bengal',
    subtitle:
      'Jharkhand · Bihar · Odisha · Sikkim · Assam · Bay of Bengal · Nepal · Bhutan · Bangladesh',
    description: 'Capital, symbols, districts, rivers, protected areas, airports, and miscellaneous facts.',
    gradient: 'from-violet-700 to-fuchsia-950',
    ring: 'ring-fuchsia-500/35',
    iconBg: 'bg-violet-500/22',
  },
  
]

const StatesInformationPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-teal-50 via-emerald-50/90 to-cyan-100/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_118_110/0.12)_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.35]"
        aria-hidden
      />
      <header className="relative overflow-hidden border-b border-emerald-200/70 bg-linear-to-r from-emerald-700 via-teal-700 to-cyan-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(255,255,255,0.18),transparent)]" />
        <div className="pointer-events-none absolute -right-28 top-6 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
          <Link
            href="/general-awareness"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-100 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to General Awareness
          </Link>

          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-50 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              General Awareness
            </div>

            <div className="mb-5 flex justify-center">
              <div className="rounded-2xl bg-linear-to-br from-white/25 to-white/5 p-4 shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                <MapPinned className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={1.25} />
              </div>
            </div>

            <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-emerald-50">States information</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-emerald-50/95 sm:text-lg">
              Static GK for exams — capitals, symbols, economy, and state-wise reference data.
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
              <p className="mt-0.5 text-sm text-slate-600 sm:text-base">Choose a state below.</p>
            </div>
          </div>
        </div>

        <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {stateTopics.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className={`group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/15 ${topic.ring}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-90 ${topic.gradient}`}
                  aria-hidden
                />
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${topic.iconBg} text-slate-800`}
                  >
                    <MapPinned className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`rounded-full bg-linear-to-r px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white opacity-0 transition group-hover:opacity-100 sm:text-xs ${topic.gradient}`}
                  >
                    Open
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-emerald-800 sm:text-xl">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{topic.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-emerald-800">
                  Study topic
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default StatesInformationPage
