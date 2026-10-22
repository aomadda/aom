'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import GeneralRuleArticle from '@/components/topics/general-and-subsidiary-rules/GeneralRuleArticle'
import { findGeneralRulePage } from '@/lib/general-rule-pages'

export default function GeneralRulePage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const rule = findGeneralRulePage(slug)

  if (!rule) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Rule not found</h1>
          <Link
            href="/topics/general-and-subisidiary-rules"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-300"
          >
            Back to General & Subsidiary Rules
          </Link>
        </div>
      </div>
    )
  }

  return <GeneralRuleArticle rule={rule} />
}
