'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { X } from 'lucide-react'
import type { RuleOfTheDayItem } from '@/assets/rule-of-the-day'

type RuleOfTheDayDialogProps = {
  rule: RuleOfTheDayItem
  open: boolean
  onClose: () => void
  showPageLink?: boolean
}

export default function RuleOfTheDayDialog({
  rule,
  open,
  onClose,
  showPageLink = false,
}: RuleOfTheDayDialogProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-9999 px-3 sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rule-of-the-day-title"
    >
      <button
        type="button"
        aria-label="Close dialog backdrop"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Mobile: fit width · Large: medium size (max-w-lg) */}
      <div
        className="fixed left-1/2 z-10 w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 overflow-hidden rounded-xl border border-amber-400/30 bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:w-full sm:max-w-lg lg:max-w-2xl"
        style={{ top: '5.0rem' }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-300 via-orange-400 to-rose-400" />

        <div className="relative px-3.5 pb-3.5 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-100 sm:text-xs">
              Rule of the Day
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white sm:h-8 sm:w-8"
              aria-label="Close"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mb-2 flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-slate-300 sm:text-xs">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
              {rule.date}
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
              Day {rule.id}/365
            </span>
          </div>

          <p className="mb-1.5 line-clamp-2 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
            {rule.chapter}
          </p>

          <div
            id="rule-of-the-day-title"
            className="rounded-xl border border-white/10 bg-slate-950/55 px-3 py-3 text-center shadow-inner shadow-black/20 sm:px-4 sm:py-4 mb-2"
          >
            <p className="mb-1 text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-orange-200 to-yellow-100">
              GR {rule.rule}
            </p>
            <p className="text-xs leading-relaxed text-slate-100 sm:text-sm">
              {rule.title}
            </p>
          </div>

          
        </div>
      </div>
    </div>,
    document.body,
  )
}
