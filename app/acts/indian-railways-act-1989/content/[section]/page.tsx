'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import RailwayActArticle from '@/components/indian-railways-act-1989/RailwayActArticle'
import { findRailwayActSection } from '@/lib/railway-act-pages'

export default function RailwayActSectionPage() {
  const params = useParams()
  const sectionParam = typeof params.section === 'string' ? params.section : ''
  const section = findRailwayActSection(sectionParam)

  if (!section) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Section not found</h1>
          <Link
            href="/acts/indian-railways-act-1989"
            className="mt-4 inline-flex text-sm font-semibold text-indigo-300"
          >
            Back to Indian Railways Act 1989
          </Link>
        </div>
      </div>
    )
  }

  return <RailwayActArticle section={section} />
}
