import React from 'react'
import Link from 'next/link'

type ITApplicationsPageLayoutProps = {
  children: React.ReactNode
}

const ITApplicationsPageLayout = ({ children }: ITApplicationsPageLayoutProps) => {
  return (
    <div>
      {children}

      <div className="mt-10 flex justify-center">
        <Link
          href="/topics/information-technology-apps"
          className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-black/15 ring-1 ring-cyan-500/10 transition hover:border-cyan-300/45 hover:bg-slate-900/90"
        >
          <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
            ←
          </span>
          <span>Back to IT Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default ITApplicationsPageLayout
