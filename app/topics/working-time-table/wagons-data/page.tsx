import React from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import WagonsData from '@/components/topics/WagonsData'

const WagonsDataPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-white mb-4 text-center bg-linear-to-r from-amber-600 to-amber-700 p-4 rounded-lg">Complete list of wagons data and types of wagons</h1>
      <div className="max-w-7xl mx-auto space-y-12">
        <WagonsData />
      </div>
      <div className="mt-10 flex justify-center px-4 pb-4 sm:px-6">
        <Link
          href="/topics/working-time-table"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-teal-400/30 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-teal-50 shadow-lg shadow-teal-950/40 ring-1 ring-teal-400/15 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-300/55 hover:bg-slate-900 hover:shadow-teal-900/50"
        >
          <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-teal-400/10 via-cyan-400/5 to-transparent opacity-80 transition group-hover:opacity-100" />
          <ChevronLeft
            className="relative h-4 w-4 text-teal-200 transition-transform duration-200 group-hover:-translate-x-0.5"
            strokeWidth={2.4}
          />
          <span className="relative">Back to Working Time Table</span>
        </Link>
      </div>
    </div>
  )
}

export default WagonsDataPage