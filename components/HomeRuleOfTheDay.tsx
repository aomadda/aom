'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import RuleOfTheDayDialog from '@/components/RuleOfTheDayDialog'
import { getTodayRuleOfTheDay } from '@/assets/rule-of-the-day'

export const RULE_OF_THE_DAY_FLAG = 'aom-open-rule-of-the-day'

export default function HomeRuleOfTheDay() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)

  const rule = useMemo(() => getTodayRuleOfTheDay(new Date()), [])
  const fromLoginQuery = searchParams.get('ruleOfTheDay') === '1'

  // Open every time user lands on / returns to Home.
  useEffect(() => {
    if (pathname === '/') {
      setOpen(true)
      try {
        sessionStorage.removeItem(RULE_OF_THE_DAY_FLAG)
      } catch {
        // ignore
      }
    }
  }, [pathname, fromLoginQuery])

  // Also reopen when user clicks Home / brand link while already on Home.
  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a') as HTMLAnchorElement | null
      if (!anchor?.href) return

      try {
        const url = new URL(anchor.href, window.location.origin)
        if (url.origin === window.location.origin && url.pathname === '/') {
          setOpen(true)
        }
      } catch {
        // ignore invalid href
      }
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)

    try {
      sessionStorage.removeItem(RULE_OF_THE_DAY_FLAG)
    } catch {
      // ignore
    }

    if (fromLoginQuery) {
      const params = new URLSearchParams(searchParams.toString())
      params.delete('ruleOfTheDay')
      const query = params.toString()
      router.replace(query ? `${pathname}?${query}` : pathname)
    }
  }, [fromLoginQuery, searchParams, router, pathname])

  return (
    <RuleOfTheDayDialog
      rule={rule}
      open={open}
      onClose={handleClose}
      showPageLink
    />
  )
}
