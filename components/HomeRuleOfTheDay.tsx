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

  useEffect(() => {
    let shouldOpen = fromLoginQuery

    try {
      if (sessionStorage.getItem(RULE_OF_THE_DAY_FLAG) === '1') {
        shouldOpen = true
      }
    } catch {
      // ignore storage errors
    }

    if (shouldOpen) {
      setOpen(true)
    }
  }, [fromLoginQuery])

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
