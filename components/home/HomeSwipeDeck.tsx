'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'

export type HomeSwipeItem = {
  href: string
  label: string
  icon?: string
}

export default function HomeSwipeDeck({
  title,
  href,
  panel,
  items,
}: {
  title: string
  href: string
  panel: string
  items: HomeSwipeItem[]
}) {
  const scroller = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const last = Math.max(items.length - 1, 0)

  const syncIndex = () => {
    const el = scroller.current
    if (!el || el.clientWidth === 0) return
    setIndex(Math.min(last, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))))
  }

  const go = (next: number) => {
    const el = scroller.current
    if (!el) return
    const clamped = Math.max(0, Math.min(last, next))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setIndex(clamped)
  }

  return (
    <section className={`relative overflow-hidden rounded-3xl bg-linear-to-br ${panel} shadow-xl`}>
      <div className="absolute inset-0 bg-black/15" aria-hidden />
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-black/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col px-4 py-6 sm:px-6 sm:py-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>

        <div className="relative mt-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label={`Previous ${title}`}
            className="absolute top-1/2 left-0 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-35 lg:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === last}
            aria-label={`Next ${title}`}
            className="absolute top-1/2 right-0 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-35 lg:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            ref={scroller}
            onScroll={syncIndex}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] lg:mx-16 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-64 w-full shrink-0 snap-center flex-col items-center justify-center gap-4 rounded-2xl border border-white/30 bg-white/15 px-6 py-8 text-center shadow-lg backdrop-blur-sm transition hover:bg-white/25 sm:min-h-72 lg:min-h-80"
              >
                {item.icon ? (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl sm:h-24 sm:w-24 sm:text-5xl" aria-hidden>
                    {item.icon}
                  </span>
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white sm:h-24 sm:w-24 sm:text-4xl" aria-hidden>
                    {item.label.charAt(0)}
                  </span>
                )}
                <span className="line-clamp-3 text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-3 text-center text-xs font-semibold tracking-wide text-white/80">
          {index + 1} / {items.length}
        </p>
        <div className="mx-auto mt-2 h-1 w-28 overflow-hidden rounded-full bg-white/25">
          <div
            className="h-full rounded-full bg-white transition-all"
            style={{ width: `${((index + 1) / items.length) * 100}%` }}
          />
        </div>

        <Link
          href={href}
          className="mx-auto mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow-md transition hover:scale-[1.02]"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
