"use client"
import React from 'react'

// Locomotive types
const locomotiveTypes = [
  'WDM2', 'WDM3A', 'WDG 3A', 'WDP1', 'WDM3D', 'WDM 3F', 'WDG4', 
  'WDP4', 'WDP4B', 'WDP4D', 'WDG 4D', 'WDG 4G', 'WDG 6G'
]

// Diesel locomotive parameter type definition
interface DieselLocoParameter {
  serialNo: number
  description: string
  values: string[]
}

// Diesel locomotive parameters data
const dieselLocoParameters: DieselLocoParameter[] = [
  { serialNo: 1, description: 'Induction in IR', values: ['1960', '1995-96', '1995-96', '1998-99', '2003', '2009', '2009', '2000-01', '2001-02', '2001-02', '2001-02', '2001-02', '2021', '2021'] },
  { serialNo: 2, description: 'Service', values: ['Mixed', 'Mixed', 'Freight', 'Coaching', 'Mixed', 'Mixed', 'Freight', 'Coaching', 'Coaching', 'Coaching', 'Freight', 'Freight', 'Freight'] },
  { serialNo: 3, description: 'Length in mm (over Buffers)', values: ['17120', '17145', '19132', '16092', '18632', '19920', '21240', '21240', '19182', '21700', '22982', '22573', '22319'] },
  { serialNo: 4, description: 'Width in mm', values: ['3010', '3010', '3016', '3016', '3090', '3084', '3070', '3070', '3000', '3050', '3050', '3200', '3250'] },
  { serialNo: 5, description: 'Height in mm', values: ['4185', '4185', '4162', '4162', '4265', '4265', '4220', '4220', '4185', '4211', '4258', '4227', '4227'] },
  { serialNo: 6, description: 'Buffer height from Rail (mm)', values: ['1090', '1090', '1090', '1090', '1090', '1090', '1090', '1090', '1090', '1090', '1090', '1090', '1090'] },
  { serialNo: 7, description: 'Weight in working order (t)', values: ['112.8', '112.8', '123.6', '80', '117', '118.2', '120', '126', '117', '121', '123', '130.2', '132', '138'] },
  { serialNo: 8, description: 'Axle Load in (t)', values: ['18.8', '18.8', '20.5', '20', '19.5', '19.7', '20', '21', '19.5', '20.2', '20.5', '21.7', '22', '23'] },
  { serialNo: 9, description: 'Adhesion in %', values: ['27', '27', '33', '25', '33', '42', '42', '42', '42', '42', '42', '42'] },
  { serialNo: 10, description: 'Type of bogie & Wheel arrgt.', values: ['Trimount CO-CO type, 2 side bearers, 1 centre pivot', 'Bolsterless high adhesion HAHS', 'Co-Co type, 4 side load pads, 1cent pivot', 'Bolster less BOBo type, Flexi coil (side spring groups, centre pivot)', 'Bolsterless high adhesion HAHS Co-Co type, 4 side load pads, 1 center pivot', 'Bolsterless high adhesion HTSC CO-CO type, 4 side load pads, 1 centre pivot', 'Bolsterless high adhesion HTSC A-A-1,1-A-A type, 4 side load pads, 1centre pivot', 'Bolsterless high adhesion HTSC CO-CO type, 4 side load pads, 1centre pivot', 'Bolsterless high adhesion HTSC CO-CO type, 4 side load pads, 1centre pivot', 'CO-CO fabricated type, 4 side load pads', 'CO-CO fabricated type, 4 side load pads'] },
  { serialNo: 11, description: 'Bogie Structure', values: ['Cast steel', 'Cast steel', 'Fabricated', 'Fabricated', 'Fabricated', 'Cast steel (HTSE)', 'Cast steel (HTSE)', 'Cast steel (HTSE)', 'Cast steel (HTSE)', 'Cast steel (HTSE)', 'fabricated high adhesion', 'fabricated high adhesion'] },
  { serialNo: 12, description: 'Weight transfer', values: ['C.P 60% S.B 40%', 'C.P 60% S.B 40%', 'Side load pads 100%', 'Side spring group 100%', 'Side load pads 100%', 'Side load pads 100%', 'Side load pads 100%', 'CP/side springs', 'Side load pads 100%', 'Side load pads 100%', 'Side load pads 100%', 'Side load pads 100%'] },
  { serialNo: 13, description: 'Tractive effort in Kgs - Max.', values: ['30450', '30450', '40600', '20000', '38610', '38500', '53000', '27550', '39200', '39200', '540 KN', '54.4t', '58.1'] },
  { serialNo: 14, description: 'Tractive effort in Kgs -Cont.', values: ['24600', '28050', '31920', '16400', '25950', '----', '40774', '20377', '30570', '30570', '405KN', '420KN'] },
  { serialNo: 15, description: 'Maximum rated speed Kmph', values: ['120', '120', '105', '120', '120', '105', '160', '135', '135', '100', '100', '100'] },
  { serialNo: 16, description: 'Min.continuous speed in KMPH', values: ['18', '22.8', '20', '29', '26.1', '----', '20', '22.5', '22.5', '22.5', '22.5'] },
  { serialNo: 17, description: 'Fuel oil capacity in Liters', values: ['5000', '5000', '6000', '3000', '6000', '----', '6000', '4000', '5000', '5000', '6000', '6000', '8000'] },
  { serialNo: 18, description: 'Lube oil capacity in Liters', values: ['1070', '1270', '760', '1270', '----', '950', '1073', '1073', '1073', '1073', '2400', '2400'] },
  { serialNo: 19, description: 'Cooling water capacity in Ltrs', values: ['1210', '1210', '1210', '1210', '1210', '1210', '----', '1045', '1045', '1045', '1045', '1045', '1249', '1468'] },
  { serialNo: 20, description: 'Sand cap.(cu.m)/No.of boxes', values: ['0.40/4', '0.16m3/4', '0.16m3/4', '----', '0.04/8', '0.028/8', '0.028/8', '0.028/8', '0.028/8', '0.085/8', '0.085/8'] },
  { serialNo: 21, description: 'Rated HP of Eng', values: ['2600', '3100', '3100', '2300', '3300', '3600', '4500', '4000', '4500', '4500', '4500', '4500', '6000'] },
  { serialNo: 22, description: 'HP available for traction', values: ['2400', '2750', '2000', '2950', '2750', '3726', '3726', '4150', '4150', '4150', '4260', '5686'] },
  { serialNo: 23, description: 'Engine RPM idle', values: ['400', '350', '400', '269/200', '269/200', '269/200', '269/201', '269/200', '440', '440'] },
  { serialNo: 24, description: 'Engine RPM Max', values: ['1000', '1050', '1000', '1050', '904', '904', '954', '954', '954', '1050', '1050'] },
  { serialNo: 25, description: 'Engine RPM during OSTA tripping', values: ['1110-1150', '1160-1200', '1180-1220', '1110-1150', '1180-1220', '4000HP-1035-1050', '4500HP-1085-1100', '1085-1100', '1085-1100', '1085-1100', '1085-1100', '1150', '1150'] },
  { serialNo: 26, description: 'Type of Transmission', values: ['DC/DC', 'AC/DC', 'AC/DC', 'AC/DC', 'AC/DC', 'AC/DC', 'AC/AC', 'AC/AC', 'AC/AC', 'AC/AC', 'AC/AC', 'AC/AC', 'AC/AC'] },
  { serialNo: 27, description: 'Type of Turbo', values: ['720 A, ABB/Napier', 'ABB/Napier', 'ABB/Napier', 'GE 7S 1716 / ABB TPR-61', 'EMD Model G', 'EMD Model G', 'EMD Model G', 'EMD Model G', 'GE Model no.7S1712', 'GE Model no. 7S1408D5/D9'] },
  { serialNo: 28, description: 'Type of Engine Governor', values: ['GE/WW', 'GE/WW', 'EDC', 'PGEV', 'PGEV', '------------', 'WW', 'WW', 'WW', 'WW', 'WW', 'EUI', 'EUI'] },
  { serialNo: 29, description: 'Traction motor isolation', values: ['Individual motors can be isolated', 'Individual motors can be isolated', 'Individual motors can be isolated', 'Individual motors can be isolated', 'Individual motors can be isolated', 'Individual motors can be isolated', 'EMD/Siemens-Full truck to be isolated in which defective motor is available', 'Medha-Individual motor', 'EMD/Siemens-Full truck to be isolated in which defective motor is available', 'Medha-Individual motor', 'EMD/Siemens-Full truck to be isolated in which defective motor is available', 'Medha-Individual motor', 'EMD/Siemens-Full truck to be isolated in which defective motor is available', 'Medha-Individual motor', 'Individual motor', 'Individual motor'] },
  { serialNo: 30, description: 'No.of transitions', values: ['3', '1', '1', '0', '2', '----', '0', '0', '0', '0', '0', '0', '0'] },
  { serialNo: 31, description: 'Traction motor arrangement', values: ['LLR/LRR', 'LLR/LRR', 'LLL/RRR', 'LR/RL', 'LLR/LRR', 'LLL/RRR', 'LLL/RRR', 'LL/RR', 'LLL/RRR', 'LLL/RRR', 'LLL/RRR', 'LLL/RRR', 'LLL/RRR'] },
  { serialNo: 32, description: 'No.of T.M\'s', values: ['6', '4', '6', '6', '4', '6', '6', '6', '6', '6'] },
  { serialNo: 33, description: 'Gear ratio', values: ['18/65', '18/74', '18/65', '18/65', '17/90', '17/77', '17/77', '17/77', '17/90', '18/85', '16/85'] },
  { serialNo: 34, description: 'Engine cranking done by', values: ['Traction Generator', 'Exciter & Auxliary generator', 'Exciter & Auxliary generator', '2 DC Starter motors', '2 DC Starter motors', '2 DC Starter motors', '2 DC Starter motors', '2 DC Starter motors', 'Starter motor', 'Starter motor'] },
  { serialNo: 35, description: 'Brake system', values: ['28 LAV-1', 'IRAB-1', '28LAV-1', 'IRAB-1', 'CCB', 'CCB', 'CCB', 'CCB', 'CCB', 'EAB', 'EAB'] },
  { serialNo: 36, description: 'Dynamic brake facility', values: ['Available', 'Not Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'] },
  { serialNo: 37, description: 'Dynamic brake working in case of traction motor isolation', values: ['Can not be used', '------------', 'Can not be used', 'Effective for one truck', 'Effective for one truck', 'Effective for one truck', 'Effective for one truck', 'Effective for one truck', 'Effective for remaining TMs', 'Effective for remaining TMs'] },
  { serialNo: 38, description: 'Dynamic braking force', values: ['22.0t', '22.0t', '21.0t', '------------', '17.94t', '19.8', '26.25t', '16.3t', '26.25t', '26.25t', '27t', '27.52t', '29.15t'] },
]

const DieselLocomotiveParameters = () => {
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
              Technical details of Diesel Loco Parameters
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-200 text-center leading-relaxed mb-4">
              This comprehensive data includes detailed technical parameters for all diesel locomotive types used in railway operations.
              Each parameter is displayed with values for different locomotive models in an organized box format.
            </p>
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
              <p className="text-yellow-200 text-sm text-center font-semibold">
                📊 Total Parameters: 38 | Locomotive Types: 13
              </p>
            </div>
          </div>

          {/* Parameter Boxes */}
          <div className="space-y-4 mb-6">
            {dieselLocoParameters.map((parameter, index) => (
              <div
                key={parameter.serialNo}
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {locomotiveTypes.map((locType, locIndex) => {
                        const value = parameter.values[locIndex] || '-'
                        return (
                          <div key={locIndex} className="bg-black/20 rounded-lg p-3 border border-white/10">
                            <p className="text-yellow-300 text-xs mb-1 font-semibold">{locType}</p>
                            <p className="text-white font-semibold text-sm whitespace-normal">{value}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-300 text-sm text-center">
              <span className="text-yellow-400 font-semibold">📝 Note:</span> For detailed specifications of any specific diesel locomotive type, please refer to the official railway technical manuals.
            </p>
            <div className="mt-4 text-gray-400 text-xs text-center space-y-1">
              <p>* With Equal beam</p>
              <p># Without Equal beam</p>
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

export default DieselLocomotiveParameters
