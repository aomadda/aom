'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-linear-to-tr from-violet-600 via-fuchsia-500 to-amber-400 text-white shadow-2xl transition hover:scale-110 active:scale-95"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  )
}
