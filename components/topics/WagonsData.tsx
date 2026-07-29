import React from 'react'

const WagonsData = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Introudction</h1>
          </div>
          <ol className="p-6 space-y-4 text-slate-200 leading-relaxed list-none">
            <li className="flex gap-3 items-start"><span className="shrink-0">1.</span><span>Rolling stock used exclusively for transport of goods is termed as freight stock</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">2.</span><span>In order to transport goods, the wagons are required</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">3.</span><span>The earliest types of wagons were in the form of four sided wooden boxes, either open or closed at top</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">4.</span><span>Earlier wagons were four wheeler type</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">5.</span><span>Gradually, the design of the wagon has gone under considerable changes and modifications</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">6.</span><span>Indian railways transports all types of goods such as building materials, coal, sugarcane, animals, chemicals, cloths, food grains, oils, petrol, explosives, automobiles, medicines, perishable goods, milk, finished products of high and low values, paper etc.</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">7.</span><span>In order to meet the requirements of each type of goods, the wagons of different designs are employed.</span></li>
          </ol>
        </section>

        {/* Classification of Wagon */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CLASSIFICATION OF WAGON</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200">
            <p className="leading-relaxed">
              Freight Stock are broadly classified either according to their under gear or according to utility
            </p>
            <p className="font-medium text-amber-200">According to:</p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Under gear</li>
              <li>Utility</li>
            </ol>
          </div>
        </section>

        {/* According to Under gear */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">ACCORDING TO UNDER GEAR</h2>
          </div>
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-amber-300 font-semibold text-lg mb-3">1. Four wheeler wagon</h3>
              <ol className="space-y-2 ml-4 text-slate-200 list-none">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Conventional Wagons</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Modified Wagons</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Tank Wagons</span></li>
              </ol>
              <p className="mt-3 text-slate-300 text-sm italic">At present only Brake van is in service</p>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold text-lg mb-3">2. Bogie wagons</h3>
              <ol className="space-y-2 ml-4 text-slate-200 list-none">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Diamond frame bogie</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Cast steel Bogie</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>UIC fabricated bogie</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>CASNUB Bogie</span></li>
              </ol>
              <p className="mt-3 text-slate-300 text-sm italic">At present only CASNUB bogie wagon is in service.</p>
            </div>
          </div>
        </section>

        {/* According to Utility */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">ACCORDING TO UTILITY</h2>
          </div>
          <ol className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 list-none [counter-reset:utility]">
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Open wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Covered wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Flat wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Well wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Hopper wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Container wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Tank wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Brake vans</span></li>
          </ol>
        </section>
        {/* Transportation Codes Used for Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-center">TRANSPORTATION CODES<br />USED FOR WAGONS</h2>
          </div>
          <div className="p-6 space-y-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200 text-sm">
              {[
                ['B', '(prefix) Bogie wagon'],
                ['B', 'Hopper wagon'],
                ['BV', 'Brake van'],
                ['C', 'Centre discharge'],
                ['C', 'Covered wagon'],
                ['E', 'Explosive wagon'],
                ['EL', 'Enhanced loading'],
                ['F', 'Flat car'],
                ['FK', 'Flat car for container'],
                ['H', 'Heavy load'],
                ['HA', 'Higher Axle Load'],
                ['HL', 'Higher Pay Load'],
                ['HS', 'High Speed'],
                ['L', 'Low sided'],
                ['LA', 'Low flat car with standard buffer height'],
                ['LAB', 'Low flat car, one end with low buffers, the other with high buffers'],
                ['LB', 'Low flat car with low buffer height'],
                ['LW', 'Light weight'],
                ['M', '(suffix) Military'],
                ['MR', 'Horse/Cattle'],
                ['N', 'Air braked'],
                ['O', 'Open wagon (Gondola)'],
                ['R', 'Rail carrying wagon'],
                ['R', 'Rapid bottom discharge'],
                ['S', 'Side discharge'],
                ['T', 'Tanker'],
                ['U', 'Well wagon'],
                ['V', 'Brake/parcel van'],
                ['W', 'Well wagon'],
                ['X', '(also) High sided'],
                ['X', 'Centre & side discharge'],
                ['Y', 'Low (medium) side walls'],
              ].map(([code, desc], i) => (
                <li
                  key={`${code}-${i}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-2.5 transition-colors hover:border-amber-500/40 hover:bg-slate-700/50"
                >
                  <span className="flex h-6 w-7 shrink-0 items-center justify-center rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="text-amber-300">{code}</strong>
                    <span className="text-slate-400"> : </span>
                    <span className="text-slate-200">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-slate-600">
              <h3 className="text-amber-300 font-semibold text-lg mb-3">Type of Coupling</h3>
              <ol className="space-y-2 text-slate-200 text-sm list-none">
                <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">1.</span><span><strong className="text-amber-300">C</strong> : Centre buffer coupler (CBC)</span></li>
                <li className="text-slate-300 italic">Usually not written as all stock are fitted with CBC</li>
                <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">2.</span><span><strong className="text-amber-300">R</strong> = Screw coupling only</span></li>
                <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">3.</span><span><strong className="text-amber-300">T</strong> = Transition coupler (CBC with additional side buffers and screw coupling)</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Nomenclature of Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">NOMENCLATURE OF WAGONS</h2>
          </div>
          <ol className="p-6 pl-10 space-y-4 text-slate-200 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2 list-none [counter-reset:nomen]">
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOY</strong> Bogie open low sided wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOYEL</strong> Bogie open low sided wagon for enhanced loading</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXN</strong> Bogie open wagon fitted with air brakes</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNCR</strong> Bogie open wagon fitted with air brakes and stainless steel body</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNHA</strong> Bogie open wagon with IRF 108 HS bogies, air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNLW</strong> Bogie open light weighted wagon fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNHS</strong> Bogie open wagon with CASNUB 22HS bogies, air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNAL</strong> Bogie open Aluminium wagon with CASNUB 22HS bogies fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNHL</strong> Bogie open stainless steel wagon with CASNUB 22HS bogies (modified for 22.9 t axle load), air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNEL</strong> Bogie open wagon fitted with air brakes and high axle load</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNR</strong> Bogie open wagon fitted with air brakes (Rehabilated)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOST</strong> Bogie open wagon with CASNUB HS bogies, air brake for loading steel sections</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCN</strong> Bogie covered wagon fitted with air brakes</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCCN</strong> Bogie covered wagon fitted with & air brakes for loading Auto cars</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNA</strong> Bogie covered wagon fitted with air brakes. All welded Broad gauge covered wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNAHS</strong> Bogie Covered wagon with CASNUB 22 HS bogies & air brakes</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNHL</strong> Bogie Covered wagon with CASNUB 22HS bogies (modified for 22.9t axle load), air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNEL</strong> Bogie Covered wagon fitted with air brakes and high axle load</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRN / BRNA</strong> Bogie Rail Truck with Air Brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFNS</strong> Bogie Flat wagon with Casnub bogies & air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRSTN</strong> Bogie Rail Wagon for heavy vehicles</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BWTB</strong> Well wagon for Battle Tank (well height 1055 mm)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBYN</strong> Hopper with top and 4 row controlled bottom discharge with Casnub bogies fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBR</strong> Hopper wagon with casnub bogies bottom automatic discharge system wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBRN</strong> Hopper wagon with casnub bogies automatic rapid bottom discharge wagon, air bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBRNEL</strong> Hopper wagon with casnub bogies, high axle load and automatic discharge system wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCBFG</strong> Bogie covered Hopper Wagon for Food Grain</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BLCA/BLCB/BLLA/BLLB/BLCAM/BLCBM</strong> Bogie Low platform container flat wagon (A Car & B Car) with LCCF 20 (C) type Cast Steel Bogies with Air Brake system with LSD</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFKN</strong> Container flat wagon with standard floor height</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCACM</strong> Bogie covered auto car modified wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCACBM</strong> Bogie covered auto car carrier wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOMN</strong> Bogie open Millitary wagons for defence Equipments</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRSTN</strong> Bogie Rail Wagon for heavy vehicles</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTPN</strong> Bogie Tank wagon for petroleum product</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTPGLN</strong> Bogie tank wagon for LPG/petroleum product fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTFLN</strong> Bogie Frameless Tank wagon for Petroleum product with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTAP</strong> Bogie Tank wagon for Alumina Powder</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTCS</strong> Bogie Tank wagon for Caustic Soda</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTALN</strong> Bogie Tank wagon Ammonia Liquefied with Air Bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTALNM</strong> Bogie Tank wagon for Ammonia fitted with air bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BVZC</strong> Brake van, Conventional with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BVZI</strong> Covered Brake Van with ICF bogie and air bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRH</strong> Bogie Flat for Rail (Roller Bearing)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBSN</strong> Bogie Hopper Wagon Bottom side Discharge with Pneumatic Brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCGT</strong> Brake Van Goods with Transitional Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCXR</strong> Bogie Wagon Covered with Screw Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCXT</strong> Bogie Wagon Covered with Transitional Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BKH</strong> Bogie Open Hopper Wagon (Side Discharge)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXC</strong> Bogie Open with CBC Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXR</strong> Bogie Open with Screw Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXT</strong> Bogie Open with Transitional Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOYN</strong> Bogie Open Wagon for Ores Loading with Pneumatic Brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTFLN</strong> Bogie Frameless Tank wagon for Petroleum product with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTPGL</strong> Bogie Tank Wagon for LPG (Vaccum Brake)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BVGC</strong> Brake Van Goods with CBC Coupling 4 Wheeler (Air Brake)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFR</strong> Bogie Flat for Rail (Vaccuum Brake)</span></li>  
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFU</strong> Bogie Well Wagon</span></li>          
            </ol>
        </section>

        {/* Terminology Used */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">TERMINOLOGY USED</h2>
          </div>
          <ul className="p-6 space-y-3 text-slate-200 text-sm">
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">1.</span><span><strong className="text-amber-300">Tare weight</strong> Wt. of wagon in empty condition</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">2.</span><span><strong className="text-amber-300">Pay load</strong> Wt. of commodity loaded on wagon</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">3.</span><span><strong className="text-amber-300">Gross load/weight</strong> Tare weight + Pay load</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">4.</span><span><strong className="text-amber-300">Axle load</strong> Gross load /No. of axle</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">5.</span><span><strong className="text-amber-300">Pay to tare ratio</strong> Ratio of Pay load to Tare wt.</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">6.</span><span><strong className="text-amber-300">Carrying Capacity (CC)</strong> Gross load/weight that can carried by the axles of the wagon</span></li>
          </ul>
        </section>

        {/* Open Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">OPEN WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used for transportation of coal, ore, limestone&apos;s etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>For commodities do not require protection from rain</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Provided with flap doors for ease of loading/ unloading of consignment</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BOY', 'BOYEL', 'BOXN', 'BOXNAL', 'BOXNCR', 'BOXNEL', 'BOXNHA', 'BOXNHL', 'BOXNHS', 'BOXNHSM1', 'BOXNLW', 'BOXNLWM1', 'BOXNM1', 'BOXNR', 'BOXNS', 'BOST', 'BOSTHS', 'BOSTHSM1', 'BOSTHSM2', 'BOSTM1'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Covered Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">COVERED WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used for transportation of bagged commodity i.e consignments which require to be protected from rain etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Generally carry food grains, cement, fertilizers, fruits & vegetables etc.</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type :</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BCN', 'BCNA', 'BCNM1', 'BCNAM1', 'BCNAHS', 'BCNAHSM1', 'BCNHL', 'BCCN'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Flat Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">FLAT WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Without side walls</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Generally used for carrying steel coils, billets, rail, rails sleepers etc.</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BRN', 'BRNA', 'BRNAHS', 'BFNS', 'BRHNEHS', 'BRN22.9'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Well Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">WELL WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Having well shaped under frame</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Used to carry the bulky articles of excessive height</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Used for larger consignments like military tanks, heavy equipments etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Provided with lashing chains and couplings and the folding ramps on either end of the head stock of the wagon to facilitate loading of motor vehicle</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BFU', 'BWTB'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hopper Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">HOPPER WAGON</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Special wagons designed for Rapid discharge from either bottom or side or both</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Wagon has a hopper shape</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Used for transporting minerals, coal and ballast</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Provided with electro pneumatically operated door operating mechanism</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BOBR', 'BOBRM1', 'BOBRN', 'BOBRNM1', 'BOBRNHSM1', 'BOBRNEL', 'BOBSN', 'BOBSNM1', 'BOBYN', 'BCBFG'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Container Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CONTAINER WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Special flat wagons designed for handling containers</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type :</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BFKN', 'BLCA/BLCB', 'BLLA/BLLB'].map((code, i) => (
                  <li key={`type-${i}`} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tank Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">TANK WAGON</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Designed to carry liquid consignment like petroleum products, corrosive liquids, milk, edible oils etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Wagon underframes fitted with bulky barrels</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Barrel consists manholes and covers on their tops for filling liquids</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Delivery valves at the bottom of the barrel centre for discharging</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">5.</span><span>Baffle plates have been provided inside the barrel to control other liquids coming on any one side under dynamic condition and on gradient</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BTPN', 'BTFLN', 'BTPGLN', 'BTAL', 'BTALN', 'BTCS', 'BTAP'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Brake Vans */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">BRAKE VANS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Guards van used with freight trains as last vehicle</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type :</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BVZC', 'BVZI', 'BVCM'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Some Other Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">SOME OTHER WAGON</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200 text-sm">
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">Cattle wagon</h3>
              <ul className="list-none space-y-2">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used to transport cattle</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Troughs of suitable sizes are provided for feeding and drinking the cattle during the journey</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Arrangements for proper ventilation and disposal of waste matters</span></li>
              </ul>
            </div>
            <div className="pt-2 border-t border-slate-600">
              <h3 className="text-amber-300 font-semibold mb-2">Powder wagon</h3>
              <ul className="list-none space-y-2">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used to transport chemicals and explosives</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>A heavy timber lining is provided to check the transmission of heat</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>All the metallic fittings such as hinge, clips, brackets etc. are made of gun metal to minimize the risk of sparking by metallic contact with the explosives</span></li>
              </ul>
            </div>
          </div>
        </section>

{/* Codal Life of Wagon Stock */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CODAL LIFE OF WAGON STOCK</h2>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-slate-200 text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-amber-300 font-semibold text-left py-3 px-3">S.No.</th>
                  <th className="text-amber-300 font-semibold text-left py-3 px-3">Type of wagon stock</th>
                  <th className="text-amber-300 font-semibold text-left py-3 px-3">Codal life</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">01</td><td className="py-2 px-3">All open wagons & variants [BOX N etc.]</td><td className="py-2 px-3"> 30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">02</td><td className="py-2 px-3">All covered wagons & variants [BCN etc.]</td><td className="py-2 px-3"> 35 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">03</td><td className="py-2 px-3">Tank wagons & variants [BTPN etc.]</td><td className="py-2 px-3">40 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">04</td><td className="py-2 px-3">All Flat wagons & variants [BRN , BLC</td><td className="py-2 px-3">30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">05</td><td className="py-2 px-3">BOBRN, BOBS wagons & variants</td><td className="py-2 px-3">30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">06</td><td className="py-2 px-3">BOBY & BOBY N</td><td className="py-2 px-3">30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">07</td><td className="py-2 px-3">Brake Vans BVZC & BVZI]</td><td className="py-2 px-3"> 30 Years</td></tr>
              </tbody>
            </table>
          </div>
        </section>



{/* Wagon Numbering System */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">WAGON NUMBERING SYSTEM</h2>
          </div>
          <div className="p-6 space-y-5 text-slate-200 text-sm">
            <p className="leading-relaxed">Wagon numbering system is being done as per Railway board&apos;s instruction issued vide letter No. 2000/M (N)/60/2/wagon census dated 4 th July 2003</p>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>The wagon number shall consist of 11 digits</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>First two digits will indicate types of wagon</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Next two digits will indicate owning railway</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Next two digits will indicate year of manufacture</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">5.</span><span>Next four digits will indicate individual wagon number</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">6.</span><span>The last digit will be a check digit</span></li>
            </ul>
            <div className="pt-6 mt-6 border-t border-slate-600/80">
              <p className="text-amber-300/90 text-xs font-medium uppercase tracking-wider mb-4 text-center">Position Legend</p>
              <div className="space-y-4">
                {/* C1, C2 = Type of wagon */}
                <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-3 sm:p-4">
                  <p className="text-amber-400/80 text-xs font-medium uppercase tracking-wider mb-2">Type of wagon</p>
                  <div className="flex flex-wrap gap-2">
                    {['C1 : Type of wagon', 'C2 : Type of wagon'].map((c) => (
                      <span key={c} className="inline-flex items-center justify-center rounded-lg border border-amber-500/40 bg-linear-to-br from-amber-500/20 to-amber-600/10 text-amber-300 font-semibold px-3 py-1.5 text-sm shadow-sm">{c}</span>
                    ))}
                  </div>
                </div>
                {/* C3, C4 = Owning Railway */}
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3 sm:p-4">
                  <p className="text-emerald-400/80 text-xs font-medium uppercase tracking-wider mb-2">Owning Railway</p>
                  <div className="flex flex-wrap gap-2">
                    {['C3 : Owning Railway', 'C4 : Owning Railway'].map((c) => (
                      <span key={c} className="inline-flex items-center justify-center rounded-lg border border-emerald-500/40 bg-linear-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-300 font-semibold px-3 py-1.5 text-sm shadow-sm">{c}</span>
                    ))}
                  </div>
                </div>
                {/* C5, C6 = Year of manufacturing */}
                <div className="rounded-xl border border-sky-500/25 bg-sky-500/5 p-3 sm:p-4">
                  <p className="text-sky-400/80 text-xs font-medium uppercase tracking-wider mb-2">Year of manufacturing</p>
                  <div className="flex flex-wrap gap-2">
                    {['C5 : Year of manufacturing', 'C6 : Year of manufacturing'].map((c) => (
                      <span key={c} className="inline-flex items-center justify-center rounded-lg border border-sky-500/40 bg-linear-to-br from-sky-500/20 to-sky-600/10 text-sky-300 font-semibold px-3 py-1.5 text-sm shadow-sm">{c}</span>
                    ))}
                  </div>
                </div>
                {/* C7, C8, C9, C10 = Individual Wagon Number */}
                <div className="rounded-xl border border-violet-500/25 bg-violet-500/5 p-3 sm:p-4">
                  <p className="text-violet-400/80 text-xs font-medium uppercase tracking-wider mb-2">Individual Wagon Number</p>
                  <div className="flex flex-wrap gap-2">
                    {['C7 : Individual Wagon Number', 'C8 : Individual Wagon Number', 'C9 : Individual Wagon Number', 'C10 : Individual Wagon Number'].map((c) => (
                      <span key={c} className="inline-flex items-center justify-center rounded-lg border border-violet-500/40 bg-linear-to-br from-violet-500/20 to-violet-600/10 text-violet-300 font-semibold px-3 py-1.5 text-sm shadow-sm">{c}</span>
                    ))}
                  </div>
                </div>
                {/* C11 = Check Digit */}
                <div className="rounded-xl border border-rose-500/25 bg-rose-500/5 p-3 sm:p-4">
                  <p className="text-rose-400/80 text-xs font-medium uppercase tracking-wider mb-2">Check Digit</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center justify-center rounded-lg border border-rose-500/40 bg-linear-to-br from-rose-500/20 to-rose-600/10 text-rose-300 font-semibold px-3 py-1.5 text-sm shadow-sm">C11 : Check Digit</span>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </section>

        {/* Types of Wagon (C1,C2) */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">TYPES OF WAGON (C1,C2)</h2>
            <p className="text-amber-100/90 text-sm mt-1">(ACCORDING TO BODY)</p>
          </div>
          <div className="p-4 sm:p-6 space-y-6">
          <h3 className="text-amber-300 font-semibold mb-2">OPEN WAGON <span className="text-slate-400 font-normal">code allotted 10 to 29</span></h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[['BOXN', '10'], ['BOXNHA', '11'], ['BOXNHS', '12'], ['BOXNCR', '13'], ['BOXNLW', '14'], ['BOXNB', '15'], ['BOXNF', '16'], ['BOXNG', '17'], ['BOY', '18'], ['BOST', '19'], ['BOXNAL', '20'],   ['BOSTHS', '21'],   ['BOXNHL', '22'],   ['BOXNS', '24']].map(([name, code]) => (
                <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
              ))}
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">COVERED WAGON <span className="text-slate-400 font-normal">code allotted 30 to 39</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[['BCNA', '30'], ['BCNAHS', '31'], ['BCCNR', '32'],  ['BCNHL', '33']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">TANK WAGON <span className="text-slate-400 font-normal">code allotted 40 to 54</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[['BTPN', '40'], ['BTPNHS', '41'], ['BTPGLN', '42'], ['BTALN', '43'], ['BTCS', '44'], ['BTPH', '45'], ['BTAP', '46'], ['BTFLN', '47']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">FLAT WAGON <span className="text-slate-400 font-normal">code allotted 55 to 69</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {[['BRNA', '55'], ['BRNAHS', '56'], ['BFNS', '57'], ['BOMN', '58'], ['BRSTH', '59'], ['BFAT', '60'], ['BLCA', '61'], ['BLCB', '62'], ['BLLA', '63'], ['BLLB', '64'], ['BRS', '65'], ['BFU', '66'], ['BRHNEHS', '67'], ['BCL', '68'], ['BCLA', '69']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">HOPPER WAGON <span className="text-slate-400 font-normal">code allotted 70 to 79</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[['BOBYN', '70'], ['BOBYNHS', '71'], ['BOBRN', '72'], ['BOBRNHS', '73'], ['BOBRAL', '74'], ['BOBSN', '75']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[['BWTB', '80'], ['MBWT', '81'], ['DBKM', '82'], ['MBWZ', '83']].map(([name, code]) => (
                <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[['BVZC', '85'], ['BVZI', '86'], ['BVCM', '87']].map(([name, code]) => (
                <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* OWNERSHIP (RAILWAYS') CODE (C3,C4) */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-emerald-600 to-emerald-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">OWNERSHIP (RAILWAYS&apos;) CODE (C3,C4)</h2>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-slate-200 text-sm border-collapse">
              <thead>
                <tr className="border-b border-emerald-500/40 bg-emerald-500/10">
                  <th className="text-emerald-300 font-semibold text-left py-3 px-3 rounded-tl-lg">Sl No.</th>
                  <th className="text-emerald-300 font-semibold text-left py-3 px-3">Name of the Railways</th>
                  <th className="text-emerald-300 font-semibold text-left py-3 px-3 rounded-tr-lg">Numerical Codes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">1</td><td className="py-2.5 px-3">Central Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">01</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">2</td><td className="py-2.5 px-3">Eastern Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">02</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">3</td><td className="py-2.5 px-3">Northern Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">03</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">4</td><td className="py-2.5 px-3">North East Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">04</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">5</td><td className="py-2.5 px-3">Northeast Frontier Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">05</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">6</td><td className="py-2.5 px-3">Southern Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">06</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">7</td><td className="py-2.5 px-3">South Eastern Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">07</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">8</td><td className="py-2.5 px-3">Western Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">08</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">9</td><td className="py-2.5 px-3">South Central Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">09</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">10</td><td className="py-2.5 px-3">East Central Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">10</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">11</td><td className="py-2.5 px-3">North Western Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">11</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">12</td><td className="py-2.5 px-3">East Coast Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">12</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">13</td><td className="py-2.5 px-3">North Central Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">13</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">14</td><td className="py-2.5 px-3">South East Central Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">14</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">15</td><td className="py-2.5 px-3">South Western Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">15</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">16</td><td className="py-2.5 px-3">West Central Railway</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">16</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">17</td><td className="py-2.5 px-3">Wagon owned by Defense</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">24</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">18</td><td className="py-2.5 px-3">Wagon owned by CONCOR</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">25</td></tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"><td className="py-2.5 px-3 text-amber-400 font-medium">19</td><td className="py-2.5 px-3">Wagon owned by other private parties</td><td className="py-2.5 px-3 text-emerald-400 font-semibold">26</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* YEAR OF MANUFACTURE CODE (C5, C6) */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-sky-600 to-sky-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">YEAR OF MANUFACTURE CODE (C5, C6)</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-3">
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-xs">•</span>
                <span>Consists of last two digits of the year of manufacture</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-xs">•</span>
                <span>For example, wagon manufacture in 2016 will have code 16</span>
              </li>
            </ul>
          </div>
        </section>


        {/* INDIVIDUAL WAGON No. (C7, C8, C9, C10) */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-violet-600 to-violet-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">INDIVIDUAL WAGON No. (C7, C8, C9, C10)</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-3">
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400 text-xs">•</span>
                <span>This will be running serial number from 0001 to 9999</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400 text-xs">•</span>
                <span>0001 to 0999 will be departmental stock, after completing upto 0999, the number will begin from 0001</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400 text-xs">•</span>
                <span>1000 to 9999 will be for other (traffic) stock, after completing upto 9999, the number will begin from 1000</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400 text-xs">•</span>
                <span>The series will not change with type of wagon</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400 text-xs">•</span>
                <span>For example on ECR if 1001 is BOXNHS, next wagon which may be BCNHS will be 1002</span>
              </li>
            </ul>
          </div>
        </section>


        {/* CHECK DIGIT: Method of calculation */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-rose-600 to-rose-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CHECK DIGIT: Method of calculation</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200 text-sm">
            <div className="flex flex-wrap gap-2">
              {['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11'].map((c) => (
                <span key={c} className="inline-flex h-8 w-10 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 font-semibold">{c}</span>
              ))}
            </div>
            <ol className="list-none space-y-4 [counter-reset:step]">
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-rose-500/20 before:text-rose-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the characters in the even number<br /><span className="text-rose-300 font-mono font-semibold mt-1 inline-block">S1 = C2+C4+C6+C8+C10</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-rose-500/20 before:text-rose-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Multiply S1 by 3 =3 S1</span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-rose-500/20 before:text-rose-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the character in the odd number<br /><span className="text-rose-300 font-mono font-semibold mt-1 inline-block">S2 = C1+C3+C5+C7+C9 (Except check digit)</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-rose-500/20 before:text-rose-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Add the sum of step 2 to the sum of step 3; <span className="text-rose-300 font-mono font-semibold">S4=3S1+S2</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-rose-500/20 before:text-rose-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Round this total up to the next multiple of 10</span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-rose-500/20 before:text-rose-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>The check digit is the number required to be added to round up to the next multiple of 10. If the total in S4 is already a multiple of 10, then the check digit will be Zero (0).</span>
              </li>
            </ol>
          </div>
        </section>


        {/* EXAMPLE */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">EXAMPLE</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200 text-sm">
            <p className="leading-relaxed">
              Northern Railway owned BOXNHS wagon number 4567 manufactured in 2003 would be stenciled as 1203034567. C alculate the check digit and write down the wagon number which will be stenciled on wagon body.
            </p>
            <div className="overflow-x-auto">
              <h3 className="text-sky-400 font-bold text-center mb-3 underline decoration-sky-400">Check digit calculation</h3>
              <div className="rounded-xl overflow-hidden border-2 border-white">
                <table className="w-full text-sm border-collapse bg-orange-800/90">
                  <thead>
                    <tr className="border border-white">
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Type of wagon</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Railway Code</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Year of manufacturing</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={4}>Individual Wagon Number</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white">Check Digit</th>
                    </tr>
                    <tr className="border border-white">
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">1</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">2</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">0</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">3</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">0</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">3</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">4</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">5</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">6</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">7</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">?</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-white">
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>BOXNHS</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>N. Rly.</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>2003</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={4}></td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ol className="list-none space-y-3 [counter-reset:step]">
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-amber-500/20 before:text-amber-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the characters in the even number<br /><span className="text-amber-300 font-mono font-semibold mt-1 inline-block">S1 = C2+C4+C6+C8+C10 = 2+3+3+5+7 = 20</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-amber-500/20 before:text-amber-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Multiply S1 by 3 =3 S1 = 3X20 = 60</span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-amber-500/20 before:text-amber-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the character in the odd number<br /><span className="text-amber-300 font-mono font-semibold mt-1 inline-block">S2 = C1+C3+C5+C7+C9 = 1+0+0+4+6 = 11</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-amber-500/20 before:text-amber-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Add the sum of step 2 to the sum of step 3; <span className="text-amber-300 font-mono font-semibold">S4=3S1+S2=60+11=71</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-amber-500/20 before:text-amber-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Round this total up to the next multiple of 10.<br /><span className="text-amber-300 font-mono font-semibold mt-1 inline-block">71+</span><span className="text-amber-300 font-mono font-semibold">9 =80</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-amber-500/20 before:text-amber-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>The check digit is the number required to be added to round up to the next multiple of 10. Check digit is 9</span>
              </li>
            </ol>
            <div className="pt-4 border-t border-slate-600">
              <p className="text-amber-300 font-semibold mb-2">Therefore, the wagon number will be stenciled as :</p>
              <div className="flex flex-col gap-1 font-mono text-amber-400 font-semibold">
                <span>BOXNHS</span>
                <span>12030345679</span>
              </div>
            </div>
          </div>
        </section>


        {/* EXERCISE 1 */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600 to-teal-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">EXERCISE</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200 text-sm">
            <p className="leading-relaxed">
              East Central Railway owned a BCNAHS wagon having number 9521, manufactured in 2016 would be stenciled as 3110169521. Calculate the check digit and write down the wagon number which will be stenciled on wagon body.
            </p>
            <div className="overflow-x-auto">
              <h3 className="text-sky-400 font-bold text-center mb-3 underline decoration-sky-400">Check digit calculation</h3>
              <div className="rounded-xl overflow-hidden border-2 border-white">
                <table className="w-full text-sm border-collapse bg-orange-800/90">
                  <thead>
                    <tr className="border border-white">
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Type of wagon</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Railway Code</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Year of manufacturing</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={4}>Individual Wagon Number</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white">Check Digit</th>
                    </tr>
                    <tr className="border border-white">
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">3</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">1</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">1</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">0</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">1</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">6</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">9</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">5</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">2</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">1</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">?</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-white">
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>BCNAHS</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>E. C. Rly.</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>2016</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={4}></td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ol className="list-none space-y-3 [counter-reset:step]">
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-teal-500/20 before:text-teal-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the characters in the even number<br /><span className="text-teal-300 font-mono font-semibold mt-1 inline-block">S1 = C2+C4+C6+C8+C10 = 1+0+6+5+1 = 13</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-teal-500/20 before:text-teal-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Multiply S1 by 3 = 3S1 = 3×13 = 39</span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-teal-500/20 before:text-teal-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the character in the odd number<br /><span className="text-teal-300 font-mono font-semibold mt-1 inline-block">S2 = C1+C3+C5+C7+C9 = 3+1+1+9+2 = 16</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-teal-500/20 before:text-teal-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Add the sum of step 2 to the sum of step 3; <span className="text-teal-300 font-mono font-semibold">S4=3S1+S2=39+16=55</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-teal-500/20 before:text-teal-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Round this total up to the next multiple of 10.<br /><span className="text-teal-300 font-mono font-semibold mt-1 inline-block">55+5=60</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-teal-500/20 before:text-teal-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>The check digit is the number required to be added to round up to the next multiple of 10. Check digit is 5</span>
              </li>
            </ol>
            <div className="pt-4 border-t border-slate-600">
              <p className="text-teal-300 font-semibold mb-2">Therefore, the wagon number will be stenciled as :</p>
              <div className="flex flex-col gap-1 font-mono text-teal-400 font-semibold">
                <span>BCNAHS</span>
                <span>31101695215</span>
              </div>
            </div>
          </div>
        </section>


        {/* EXERCISE 2 */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-cyan-600 to-cyan-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">EXERCISE 2</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200 text-sm">
            <p className="leading-relaxed">
              Eastern Railway owned a BLLA wagon having number 6557, manufactured in 2020 would be stenciled as 6302206557. Calculate the check digit and write down the wagon number which will be stenciled on wagon body.
            </p>
            <div className="overflow-x-auto">
              <h3 className="text-sky-400 font-bold text-center mb-3 underline decoration-sky-400">Check digit calculation</h3>
              <div className="rounded-xl overflow-hidden border-2 border-white">
                <table className="w-full text-sm border-collapse bg-orange-800/90">
                  <thead>
                    <tr className="border border-white">
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Type of wagon</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Railway Code</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>Year of manufacturing</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={4}>Individual Wagon Number</th>
                      <th className="text-white font-bold text-center py-2 px-2 border border-white">Check Digit</th>
                    </tr>
                    <tr className="border border-white">
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">6</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">3</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">0</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">2</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">2</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">0</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">6</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">5</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">5</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">7</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white">?</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-white">
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>BLLA</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>E. Rly.</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={2}>2020</td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white" colSpan={4}></td>
                      <td className="text-white font-bold text-center py-2 px-2 border border-white"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ol className="list-none space-y-3 [counter-reset:step]">
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-cyan-500/20 before:text-cyan-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the characters in the even number<br /><span className="text-cyan-300 font-mono font-semibold mt-1 inline-block">S1 = C2+C4+C6+C8+C10 = 3+2+0+5+7 = 17</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-cyan-500/20 before:text-cyan-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Multiply S1 by 3 = 3S1 = 3×17 = 51</span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-cyan-500/20 before:text-cyan-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span className="flex-1">Add all the character in the odd number<br /><span className="text-cyan-300 font-mono font-semibold mt-1 inline-block">S2 = C1+C3+C5+C7+C9 = 6+0+2+6+5 = 19</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-cyan-500/20 before:text-cyan-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Add the sum of step 2 to the sum of step 3; <span className="text-cyan-300 font-mono font-semibold">S4=3S1+S2=51+19=70</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-cyan-500/20 before:text-cyan-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>Round this total up to the next multiple of 10.<br /><span className="text-cyan-300 font-mono font-semibold mt-1 inline-block">70 is already a multiple of 10, so add 0</span></span>
              </li>
              <li className="flex gap-3 items-start [counter-increment:step] before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-cyan-500/20 before:text-cyan-300 before:text-xs before:font-bold before:content-[counter(step)]">
                <span>The check digit is the number required to be added to round up to the next multiple of 10. Check digit is 0</span>
              </li>
            </ol>
            <div className="pt-4 border-t border-slate-600">
              <p className="text-cyan-300 font-semibold mb-2">Therefore, the wagon number will be stenciled as :</p>
              <div className="flex flex-col gap-1 font-mono text-cyan-400 font-semibold">
                <span>BLLA</span>
                <span>63022065570</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WagonsData
