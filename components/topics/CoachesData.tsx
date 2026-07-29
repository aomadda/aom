import React from 'react'

const CoachesData = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Coaches Data</h1>
            <p className="text-amber-100/90 text-sm sm:text-base mt-1">Classification of Coaching Stock</p>
          </div>
        </section>

        {/* Prefixes */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Prefixes</h2>
          </div>
          <ul className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 text-sm list-none">
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">A</span>
              <span><strong className="text-amber-300"></strong> = EOG</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">G</span>
              <span><strong className="text-amber-300"></strong> = Self-Generating</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">L</span>
              <span><strong className="text-amber-300"></strong> = LHB (if prefixed) Otherwise Luggage</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">R</span>
              <span><strong className="text-amber-300"></strong> = Guards Brake Van</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">W</span>
              <span><strong className="text-amber-300"></strong> = Vestibuled</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">Y</span>
              <span><strong className="text-amber-300"></strong> = Suburban</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors sm:col-span-2">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">Y</span>
              <span><strong className="text-amber-300"></strong> = (Suffix) With ladies compartment</span>
            </li>
          </ul>
        </section>

        {/* Classification of Accommodation */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Classification of Accommodation</h2>
          </div>
          <ul className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-200 text-sm list-none">
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">F</span>
              <span><strong className="text-amber-300"></strong> = First Class</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">D</span>
              <span><strong className="text-amber-300"></strong> = Divyangajan</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">M</span>
              <span><strong className="text-amber-300"></strong> = Military</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold">S</span>
              <span><strong className="text-amber-300"></strong> = Second Class</span>
            </li>
          </ul>
        </section>

        {/* Types of Coaches */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Types of Coaches</h2>
          </div>
          <ul className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 text-sm list-none">
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">AC</span>
              <span><strong className="text-amber-300"></strong> = Air Conditioned</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">CB</span>
              <span><strong className="text-amber-300"></strong> = Pantry/Kitchen/Buffet Car</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">CD</span>
              <span><strong className="text-amber-300"></strong> = Dining Car</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">CN</span>
              <span><strong className="text-amber-300"></strong> = 3-Tier Sleeper Coach</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">CR</span>
              <span><strong className="text-amber-300"></strong> = State Saloon Coach</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">CW</span>
              <span><strong className="text-amber-300"></strong> = 2-Tier Sleeper Coach</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">CZ</span>
              <span><strong className="text-amber-300"></strong> = Chair Car</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors sm:col-span-2">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LL</span>
              <span><strong className="text-amber-300"></strong> = Combined Luggage and Lavatory (rare)</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors sm:col-span-2">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LR</span>
              <span><strong className="text-amber-300"></strong> = Luggage and Brake Van</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors sm:col-span-2">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">RR</span>
              <span><strong className="text-amber-300"></strong> = (In combination) End-on Generator car</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors sm:col-span-2">
              <span className="shrink-0 flex h-8 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">RU</span>
              <span><strong className="text-amber-300"></strong> = OHE Inspection Car</span>
            </li>
          </ul>
        </section>

        {/* Transportation Code For Coaches */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Transportation Code For Coaches</h2>
          </div>
          <ul className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200 text-sm list-none">
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">GS</span>
              <span>Second Class fitted with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">GSLR</span>
              <span>Second Class Luggage and Brake Van</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGSCN</span>
              <span>Vestibuled Second Class 3-Tier Sleeper with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGSCZ</span>
              <span>Vestibuled Second Class Chair Car with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGACCN</span>
              <span>Vestibuled Air Conditioned 3-Tier Sleeper with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGACCW</span>
              <span>Vestibuled Air Conditioned 2-Tier Sleeper with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGACCZ</span>
              <span>Vestibuled Air Conditioned Chair Car with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGFAC</span>
              <span>Vestibuled Air Conditioned First Class Sleeper with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGFACCW</span>
              <span>Vestibuled Air Conditioned First Class 2-Tier Sleeper with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WFC</span>
              <span>Vestibuled First Class</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WCB</span>
              <span>Vestibuled Pantry/Kitchen/Buffet Car</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGCB</span>
              <span>Vestibuled Pantry/Kitchen/Buffet Car with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WCD</span>
              <span>Vestibuled Dining Car</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WCTAC</span>
              <span>Vestibuled Air Conditioned Tourist Car</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WGSD</span>
              <span>Vestibuled Second Class Double Decker with Self Generating Equipment</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">OHE</span>
              <span>Overhead Equipment Inspection Car</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">NMG</span>
              <span>New Modified Goods</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">RA</span>
              <span>Inspection Carriage (Administrative)</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">RAAC</span>
              <span>Inspection Carriage (Administrative) Air Conditioned</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">RE</span>
              <span>Instrution Van (Mobile Training Car)</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">RHV</span>
              <span>Auxiliary Medical Van</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">SPART</span>
              <span>Self Profelled Accident Relief Train</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">SPMRV</span>
              <span>Self Profelled Medical Relief Van</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">SPIC</span>
              <span>Self Profelled Inspection Carriage</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">VP</span>
              <span>Parcel Van</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">VPH</span>
              <span>High capacity Parcel Van</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">VPU</span>
              <span>High capacity Motor Cum Parcel Van</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">WLRRM</span>
              <span>Power Car End on Generator</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">EMU</span>
              <span>Electric Multiple Unit</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">DEMU</span>
              <span>Diesel Electric Multiple Unit</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">DHM</span>
              <span>Diesel Hydraulic Multiple Unit</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LS</span>
              <span>LHB Second Class</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWSCN</span>
              <span>LHB Vestibuled Second Class 3-Tier Sleeper</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWACCN</span>
              <span>LHB Vestibuled Air Conditioned 3-Tier Sleeper</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWACCW</span>
              <span>LHB Vestibuled Air Conditioned 2-Tier Sleeper</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWFAC</span>
              <span>LHB Vestibuled First Class Sleeper Air Conditioned</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWCBAC</span>
              <span>LHB Vestibuled Pantry/Kitchen/Buffet Car Air Conditioned</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWCZAC</span>
              <span>LHB Vestibuled Chair Car Air Conditioned</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-3 hover:border-amber-500/40 hover:bg-slate-700/50 transition-colors">
              <span className="shrink-0 flex h-8 min-w-18 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs">LWLRRM</span>
              <span>LHB Vestibuled Luggage Guard Brake Van End on Generator</span>
            </li>
          </ul>
        </section>
        

      </div>
    </div>
  )
}

export default CoachesData
