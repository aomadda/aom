"use client"
import React from 'react'

const ElectrifiedSection = () => {
  const safetyInstructions = [
    'No work shall be done within a distance of 02 meters from live OHE without a permit to work.',
    'No fallen OHE shall be touched unless the power is switched off and OHE is earthed. In case, OHE snaps at a level crossing, the gate man shall make arrangements to stop all road vehicles and keep the public away.',
    'Any abnormality noticed in OHE/Loco/EMU should be intimated to Traction power Controller immediately for further guidance.',
    'Don\'t allow roof traveling.',
    'Keep the emergency telephone in good working condition and ensure it is tested periodically.',
    'Do not direct water jet from hose pipe towards live OHE.',
    'No crane shall be operated near Traction overhead equipment\'s unless authorized Representative of OHE is present.',
    'The muffing of foundations of Traction masts shall be kept clear of all materials. Unloading of Rails along the tracks, should be done such that Rails do not touch each other to form continuous metallic mass of length greater than 300 meters.',
    'Unloading of PSC sleepers should be taken in such a way that they will not hit any supporting structures.',
    'Permanent Way Staff should be clear of tracks and avoid contact with the rails when electrically hauled train is within 250 meters.',
    'During weld failures/Rail fractures, ensure two ends of rail shall be temporarily connected by rail jumpers.',
    'Don\'t climb on the roof of Loco/EMU/Coaches for attending any work unless the OHE is made dead and earthed properly.',
    'Stations masters should ensure that all precautions are taken to protect the power block/line block section. Any doubts regarding OHE section to be consulted with TPC for guidance.',
    'AC Loco Drivers/ Motor man to ensure "Open DJ" and "Close DJ" at neutral sections.',
    'AC Loco Drivers/ Motor Man ensure coasting of train without power at the coasting board locations to conserve energy.',
    'Regarding speed restrictions at Neutral section, S.R. 17.07 () may be referred to.',
    'Observe that stop boards & Caution boards are exhibited promptly.',
    'ASMS to prevent entry of Electric Locos in to dead section during power block.',
    'Commercial staff to secure tarpaulins firmly to the wagon to avoid entanglement with OHE.',
    'Commercial staff to close/secure and lock properly the flap doors of wagons, loaded or empty.',
    'Station staff should not allow Electric Locos with raised pantographs into a dead section or into an unwired turnout.',
    'Station staff shall not allow any traffic into the section when OHE is snapped or obstructing.',
    'Permanent Way staff to ensure not to stew track/re-alignment without the knowledge of Traction staff.',
    'Permanent Way staff shall ensure no disturbance to track bonding and earthing of TRD Installations.',
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Safety Instructions in Electrified Section
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Safety Instructions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white text-center">
                Safety Instructions
              </h2>
            </div>
            
            <div className="space-y-4">
              {safetyInstructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ElectrifiedSection