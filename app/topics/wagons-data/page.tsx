import React from 'react'
import WagonsData from '@/components/topics/WagonsData'

const WagonsDataPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-white mb-4 text-center bg-linear-to-r from-amber-600 to-amber-700 p-4 rounded-lg">Complete list of wagons data and types of wagons</h1>
      <div className="max-w-7xl mx-auto space-y-12">
        <WagonsData />
      </div>
    </div>
  )
}

export default WagonsDataPage