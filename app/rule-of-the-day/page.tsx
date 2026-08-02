'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import RuleOfTheDayDialog from '@/components/RuleOfTheDayDialog'
import { getTodayRuleOfTheDay } from '@/assets/rule-of-the-day'

export default function RuleOfTheDayPage() {
  const rule = useMemo(() => getTodayRuleOfTheDay(new Date()), [])
  const [open, setOpen] = useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_60%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-16">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
            <CalendarDays className="h-3.5 w-3.5" />
            01-01-2026 → 31-12-2026
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl">
            Rule of the Day
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            One G&SR rule every day — today is Day {rule.id}: Rule {rule.rule}.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 items-center rounded-full bg-linear-to-r from-amber-300 to-orange-400 px-6 text-sm font-bold text-slate-900 shadow-lg transition hover:from-amber-200 hover:to-orange-300"
        >
          View today&apos;s rule
        </button>

        <Link
          href="/"
          className="mt-6 text-sm font-medium text-slate-400 transition hover:text-amber-100"
        >
          ← Back to Home
        </Link>
      </div>

      <RuleOfTheDayDialog rule={rule} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
