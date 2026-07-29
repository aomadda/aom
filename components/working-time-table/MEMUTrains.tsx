"use client"
import React from 'react'

// MEMU Train types
const memuTypes = [
  'Conv. MEMU (Steel Spring)',
  'Conv. MEMU (Air Spring)',
  '3-Phase MEMU (on Board) IGBT based Propulsion (MEDHA)',
  '3-Phase MEMU (Under Slung) IGBT based propulsion (MEDHA)',
  '3-Phase MEMU (on Board) IGBT based propulsion (BT)'
]

// EMU Train types
const emuTypes = [
  'Conv. EMU (Air Spring)',
  '3-Phase EMU (On Board) IGBT based propulsion (MEDHA)'
]

// Parameter type definition
interface TrainParameter {
  serialNo: number
  description: string
  values: string[]
}

// MEMU Technical details data
const memuParameters: TrainParameter[] = [
  { serialNo: 1, description: 'Service', values: ['Coaching', 'Coaching', 'Coaching', 'Coaching', 'Coaching'] },
  { serialNo: 2, description: 'Length (mm)', values: ['21337', '21337', '21337', '21337', '21337'] },
  { serialNo: 3, description: 'Height (mm)', values: ['4255', '4255', '4255', '4255', '4255'] },
  { serialNo: 4, description: 'Weight (in tons)', values: ['60', '60', '60', '60', '60'] },
  { serialNo: 5, description: 'Horse power', values: ['900 (TM – 4601)\n1120- (4303/C1005)', '900 (TM – 4601)\n1120- (4303/C1005)', '1450', '1450', '1450'] },
  { serialNo: 6, description: 'Maximum Speed Certified by RDSO', values: ['100', '105', '100', '110', '110'] },
  { serialNo: 7, description: 'Maximum speed sanctioned by CRS/GM', values: ['100', '105', '100', '110', '110'] },
  { serialNo: 8, description: 'Axle load (in Tons)', values: ['MC : 20.32T\nTC : 16.25 T', 'MC : 20.32T\nTC : 16.25 T', 'MC : 18.135T\nTC : 14.633 T', 'MC : 19.124 T\nTC 7 : 16.816 T\nTC 8 :17.103', 'MC : 18.35T\nTC : 14.00 T'] },
  { serialNo: 9, description: 'Type of Propulsion', values: ['Conventional\n(Tap Changer & DC\nTraction Motors)', 'Conventional\n(Tap Changer & DC\nTraction Motors)', 'IGBT', 'IGBT', 'IGBT'] },
  { serialNo: 10, description: 'Type of Suspension', values: ['Steel Spring', 'Air Spring', 'Air Spring', 'Air Spring', 'Air Spring'] },
  { serialNo: 11, description: 'Tractive effort (in Tons)', values: ['9.6', '9.6', '14.27', '14.28', '13.4'] },
  { serialNo: 12, description: 'Traction motor type', values: ['DC series motor', 'DC series motor', '3 Phase Squirrel Cage\nInduction Motor', '3 Phase Squirrel Cage\nInduction Motor', '3 Phase Squirrel Cage\nInduction Motor'] },
  { serialNo: 13, description: 'Dynamic brake', values: ['No', 'No', 'Regenerative', 'Regenerative', 'Regenerative'] },
  { serialNo: 14, description: 'Gear ratio', values: ['1:4.55', '1:4.55', '23:103', '23:103', '23:103'] },
  { serialNo: 15, description: 'Brake system', values: ['EP brake system', 'EP brake system', 'EP brake system', 'EP brake system', 'EP brake system'] },
  { serialNo: 16, description: 'No.of motors', values: ['04', '04', '04', '04', '04'] },
  { serialNo: 17, description: 'Passenger Seating Capacity (per Motor Coach)', values: ['65', '65', '55', '84', '65'] },
  { serialNo: 18, description: 'Passenger Standing Capacity (per Motor Coach)', values: ['150', '150', '171', '195', '142'] },
  { serialNo: 19, description: 'Passenger Seating Capacity (per Trailer Coach)', values: ['80', '80', '84', '96', '80'] },
  { serialNo: 20, description: 'Passenger Standing Capacity (per Trailer Coach)', values: ['200', '200', '241', '247', '245'] },
]

// EMU Technical details data
const emuParameters: TrainParameter[] = [
  { serialNo: 1, description: 'Service', values: ['Coaching', 'Coaching'] },
  { serialNo: 2, description: 'Length (mm)', values: ['21521', '21521'] },
  { serialNo: 3, description: 'Height (mm)', values: ['4398', '4398'] },
  { serialNo: 4, description: 'Weight (in tons)', values: ['60', '60'] },
  { serialNo: 5, description: 'Horse power (in HP)', values: ['900', '1450'] },
  { serialNo: 6, description: 'Maximum Speed Certified by RDSO', values: ['105', '105'] },
  { serialNo: 7, description: 'Maximum speed sanctioned by CRS/GM', values: ['100', '105'] },
  { serialNo: 8, description: 'Axle load (in Tons)', values: ['20', '20'] },
  { serialNo: 9, description: 'Type of Propulsion', values: ['Conventional\n(Tap Changer & DC Traction Motors)', 'IGBT'] },
  { serialNo: 10, description: 'Type of Suspension', values: ['Air Spring', 'Air Spring'] },
  { serialNo: 11, description: 'Tractive effort (in Tons)', values: ['9.6', '13.76'] },
  { serialNo: 12, description: 'Traction motor type', values: ['DC series motor', '3 Phase Squirrel Cage Induction Motor'] },
  { serialNo: 13, description: 'Dynamic brake', values: ['No', 'Regenerative'] },
  { serialNo: 14, description: 'Gear ratio', values: ['1:4.55', '23:103'] },
  { serialNo: 15, description: 'Brake system', values: ['EP brake system', 'EP brake system'] },
  { serialNo: 16, description: 'No.of motors', values: ['04', '04'] },
  { serialNo: 17, description: 'Passenger Seating Capacity (per Motor Coach)', values: ['80', '93'] },
  { serialNo: 18, description: 'Passenger Standing Capacity (per Motor Coach)', values: ['197', '433'] },
  { serialNo: 19, description: 'Passenger Seating Capacity (per Trailer Coach)', values: ['84 (C coach)\n76 (D coach)', '93 (DTC)\n104 (TC)\n110 (NDTC)'] },
  { serialNo: 20, description: 'Passenger Standing Capacity (per Trailer Coach)', values: ['272 (C coach)\n277 (D coach)', '433 (DTC)\n449 (TC)\n402 (NDTC)'] },
]

const MEMUTrains = () => {
  // Color gradients for different parameter groups
  const getGradientColor = (index: number) => {
    const gradients = [
      'from-blue-500/20 to-cyan-500/20',
      'from-green-500/20 to-emerald-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-orange-500/20 to-red-500/20',
      'from-yellow-500/20 to-amber-500/20',
      'from-indigo-500/20 to-blue-500/20',
      'from-pink-500/20 to-rose-500/20',
      'from-teal-500/20 to-cyan-500/20',
    ]
    return gradients[index % gradients.length]
  }
  
  const getBorderColor = (index: number) => {
    const borders = [
      'border-blue-400/30',
      'border-green-400/30',
      'border-purple-400/30',
      'border-orange-400/30',
      'border-yellow-400/30',
      'border-indigo-400/30',
      'border-pink-400/30',
      'border-teal-400/30',
    ]
    return borders[index % borders.length]
  }
  
  const getBadgeGradient = (index: number) => {
    const badges = [
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-green-400 via-emerald-500 to-teal-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-orange-400 via-red-500 to-rose-500',
      'from-yellow-400 via-amber-500 to-orange-500',
      'from-indigo-400 via-blue-500 to-cyan-500',
      'from-pink-400 via-rose-500 to-red-500',
      'from-teal-400 via-cyan-500 to-blue-500',
    ]
    return badges[index % badges.length]
  }

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
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              MEMU & EMU Technical details
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-200 text-center leading-relaxed mb-4">
              This comprehensive data includes detailed technical parameters for MEMU (Mainline Electric Multiple Unit) and EMU (Electric Multiple Unit) trains used in railway operations.
              Each parameter is displayed with values for different train models in an organized box format.
            </p>
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
              <p className="text-yellow-200 text-sm text-center font-semibold">
                📊 MEMU Parameters: 20 | MEMU Types: 5 | EMU Parameters: 20 | EMU Types: 2
              </p>
            </div>
          </div>

          {/* MEMU Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-3">
                MEMU Technical details
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              {memuParameters.map((parameter, index) => (
                <div
                  key={`memu-${parameter.serialNo}`}
                  className={`bg-linear-to-br ${getGradientColor(index)} rounded-lg px-2 py-4 border ${getBorderColor(index)} hover:border-opacity-50 transition-all backdrop-blur-lg shadow-lg`}
                >
                  <div className="flex items-center justify-center flex-col gap-4">
                    {/* Serial Number Badge */}
                    <div className={`mt-1 h-12 w-12 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                      {parameter.serialNo}
                    </div>
                    
                    {/* Parameter Details */}
                    <div className="flex-1 w-full">
                      <h3 className="text-white font-bold text-lg mb-4 text-center">{parameter.description}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                        {memuTypes.map((trainType, typeIndex) => {
                          const value = parameter.values[typeIndex] || '-'
                          return (
                            <div key={typeIndex} className="bg-black/20 rounded-lg p-3 border border-white/10">
                              <p className="text-yellow-300 text-xs mb-1 font-semibold">{trainType}</p>
                              <p className="text-white font-semibold text-sm whitespace-pre-line">{value}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EMU Section */}
          <div className="mb-6">
            <div className="text-center mb-6">
              <h2 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-3">
                EMU Technical details
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              {emuParameters.map((parameter, index) => (
                <div
                  key={`emu-${parameter.serialNo}`}
                  className={`bg-linear-to-br ${getGradientColor(index)} rounded-lg px-2 py-4 border ${getBorderColor(index)} hover:border-opacity-50 transition-all backdrop-blur-lg shadow-lg`}
                >
                  <div className="flex items-center justify-center flex-col gap-4">
                    {/* Serial Number Badge */}
                    <div className={`mt-1 h-12 w-12 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                      {parameter.serialNo}
                    </div>
                    
                    {/* Parameter Details */}
                    <div className="flex-1 w-full">
                      <h3 className="text-white font-bold text-lg mb-4 text-center">{parameter.description}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {emuTypes.map((trainType, typeIndex) => {
                          const value = parameter.values[typeIndex] || '-'
                          return (
                            <div key={typeIndex} className="bg-black/20 rounded-lg p-3 border border-white/10">
                              <p className="text-yellow-300 text-xs mb-1 font-semibold">{trainType}</p>
                              <p className="text-white font-semibold text-sm whitespace-pre-line">{value}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-300 text-sm text-center">
              <span className="text-yellow-400 font-semibold">📝 Note:</span> For detailed specifications of any specific MEMU or EMU train type, please refer to the official railway technical manuals.
            </p>
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

export default MEMUTrains