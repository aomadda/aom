import Link from 'next/link'

import DescriptionBlock from '@/components/topics/general-and-subsidiary-rules/RuleDescription'
import {
  generalRuleNeighbors,
  type GeneralRulePage,
} from '@/lib/general-rule-pages'

function RuleLink({
  item,
  direction,
}: {
  item: GeneralRulePage
  direction: 'previous' | 'next'
}) {
  const isNext = direction === 'next'
  return (
    <Link
      href={`/topics/general-and-subisidiary-rules/${item.slug}`}
      className={`group flex min-w-0 flex-1 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-300/40 hover:bg-white/10 ${
        isNext ? 'items-end text-right' : ''
      }`}
    >
      <span className="text-xs font-semibold tracking-wide text-emerald-300 uppercase">
        {isNext ? 'Next rule' : 'Previous rule'}
      </span>
      <span className="mt-2 text-sm font-semibold text-cyan-200">{item.rule}</span>
      <span className="mt-1 line-clamp-2 text-sm text-white">{item.title}</span>
    </Link>
  )
}

export default function GeneralRuleArticle({ rule }: { rule: GeneralRulePage }) {
  const { previous, next } = generalRuleNeighbors(rule.slug)

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #134e4a, #0f172a)',
      }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 mix-blend-multiply blur-xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <Link
          href="/topics/general-and-subisidiary-rules"
          className="inline-flex items-center text-sm font-medium text-emerald-200 transition hover:text-white"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to General & Subsidiary Rules
        </Link>

        <article className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-md">
          <header className="relative border-b border-white/10 px-5 py-7 sm:px-8">
            <div
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
              style={{ background: 'linear-gradient(to right, #10b981, #06b6d4)' }}
            >
              {rule.number}
            </div>
            <p className="pr-14 text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              Chapter
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{rule.chapter}</p>
            <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              Title
            </p>
            <h1 className="mt-2 pr-14 text-2xl leading-tight font-bold text-white sm:text-4xl">
              {rule.title}
            </h1>
            <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              Rule
            </p>
            <p className="mt-2 text-lg font-semibold tracking-wide text-cyan-300">{rule.rule}</p>
          </header>

          <div className="px-5 py-7 sm:px-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
              Description
            </p>
            <DescriptionBlock description={rule.description} />
          </div>
        </article>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {previous ? <RuleLink item={previous} direction="previous" /> : <div className="hidden flex-1 sm:block" />}
          {next ? <RuleLink item={next} direction="next" /> : <div className="hidden flex-1 sm:block" />}
        </div>
      </div>
    </div>
  )
}
