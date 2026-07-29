"use client"
import React from 'react'

// Coach parameter type definition
interface CoachParameter {
  label: string
  value: string
}

interface Coach {
  serialNo: number
  description: string
  code: string
  parameters: CoachParameter[]
}

// Section 1: Hybrid SG Variant Coaches (LHB Shell with ICF Bogie)
const section1Coaches: Coach[] = [
  { serialNo: 1, description: 'AC Ist Class', code: 'SWGFAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '47.52' }, { label: 'Carrying Capacity (T)', value: '2.04' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '24/24' }
  ]},
  { serialNo: 2, description: 'AC 2 tier', code: 'SWGACCW', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '46.87' }, { label: 'Carrying Capacity (T)', value: '4.44' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '54/54' }
  ]},
  { serialNo: 3, description: 'AC 3 tier', code: 'SWGACCN', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '50.60' }, { label: 'Carrying Capacity (T)', value: '5.66' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '72/72' }
  ]},
  { serialNo: 4, description: 'AC Ist class cum 2 tier sleeper', code: 'SWGFCWAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '47.20' }, { label: 'Carrying Capacity (T)', value: '3.16' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '10-Ist\n28-2 tier' }
  ]},
  { serialNo: 5, description: 'AC First class cum 3 tier sleeper', code: 'SWGFCNAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '49.10' }, { label: 'Carrying Capacity (T)', value: '4.96' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '10-Ist\n38-3 tier' }
  ]},
  { serialNo: 6, description: 'AC 2 tier cum 3 tier sleeper', code: 'SWGCWNAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '48.70' }, { label: 'Carrying Capacity (T)', value: '5.24' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '24-2 tier\n40-3 tier' }
  ]},
  { serialNo: 7, description: 'AC chair car', code: 'SWGSCZAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '44.66' }, { label: 'Carrying Capacity (T)', value: '5.10' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '83 seats' }
  ]},
  { serialNo: 8, description: 'AC 3 tier sleeper cum AC pantry car', code: 'SWGCBNAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '51.2' }, { label: 'Carrying Capacity (T)', value: '6' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '35/35' }
  ]},
  { serialNo: 9, description: '2nd class cum luggage & brake van with AC & Non AC disabled compartment', code: 'SGSLRDAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '48.1' }, { label: 'Carrying Capacity (T)', value: '10.3' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '40-2nd' }
  ]},
  { serialNo: 10, description: '2nd class with disabled friendly compartment lugg & brake van', code: 'SGSLR', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '38.30' }, { label: 'Carrying Capacity (T)', value: '16.0' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '60-seat' }
  ]},
  { serialNo: 11, description: 'High capacity motor cum parcel van', code: 'SVPHU', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '34' }, { label: 'Carrying Capacity (T)', value: '30' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '30 tonne' }
  ]},
  { serialNo: 12, description: '2nd class', code: 'SGS', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '37.6' }, { label: 'Carrying Capacity (T)', value: '12' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '99 seat' }
  ]},
  { serialNo: 13, description: '2nd class sleeper', code: 'SWGSCN', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '39.6' }, { label: 'Carrying Capacity (T)', value: '6' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '80/80' }
  ]},
  { serialNo: 14, description: '2nd class with disabled friendly compartment lug & brake van', code: 'SGSLRD', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '37.9' }, { label: 'Carrying Capacity (T)', value: '3.3' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '30-2nd\n4-disabled' }
  ]},
  { serialNo: 15, description: '2nd class with disabled friendly compartment and brake van', code: 'SGSRD', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '37.9' }, { label: 'Carrying Capacity (T)', value: '3.3' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '69-sleeper\n4-disabled' }
  ]},
  { serialNo: 16, description: '2nd class day coach', code: 'SSGCZ', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '42.4' }, { label: 'Carrying Capacity (T)', value: '8.8' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '86-seat' }
  ]},
  { serialNo: 17, description: 'Non AC Pantry cum sleeper class', code: 'SWGCBN', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '40.2' }, { label: 'Carrying Capacity (T)', value: '6.2' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '40/40\n12-pantry' }
  ]},
  { serialNo: 18, description: 'Chair car (Non AC)', code: 'SWGSCZ', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '39.1' }, { label: 'Carrying Capacity (T)', value: '9.7' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2896' },
    { label: 'Max. Axle Load (T)', value: '13' }, { label: 'Accommodation', value: '114-seat' }
  ]},
]

// Section 2: LHB SG Variant coaches with FIAT bogies
const section2Coaches: Coach[] = [
  { serialNo: 1, description: 'AC Ist class Sleeper', code: 'LWGFAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '45.90' }, { label: 'Carrying Capacity (T)', value: '4.80' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '24 to SEAT/SLEEP' }
  ]},
  { serialNo: 2, description: 'AC 2 tier Sleeper', code: 'LWGACCW', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '48.00' }, { label: 'Carrying Capacity (T)', value: '7.04' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '54 to SEAT/SLEEP' }
  ]},
  { serialNo: 3, description: 'AC 3 tier Sleeper', code: 'LWGACCN', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '50.50' }, { label: 'Carrying Capacity (T)', value: '8.00' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '72 to SEAT/SLEEP' }
  ]},
  { serialNo: 4, description: 'Non-AC 3-Tier sleeper', code: 'LWGSCN', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '36.28' }, { label: 'Carrying Capacity (T)', value: '6.63' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '78 to SEAT/SLEEP' }
  ]},
  { serialNo: 5, description: 'Non-AC second class', code: 'LGS', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '35.29' }, { label: 'Carrying Capacity (T)', value: '15.20' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '99 to SEAT' }
  ]},
  { serialNo: 6, description: 'A/C First class cum 2Tier sleeper', code: 'LWGFCWAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '---' }, { label: 'Carrying Capacity (T)', value: '---' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '---' }
  ]},
  { serialNo: 7, description: 'A/C First class cum 3-Tier sleeper', code: 'LWGFCNAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '---' }, { label: 'Carrying Capacity (T)', value: '---' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '---' }
  ]},
  { serialNo: 8, description: 'A/C 2-Tier cum 3-Tier', code: 'LWGCWNAC', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3240' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '---' }, { label: 'Carrying Capacity (T)', value: '---' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '---' }
  ]},
  { serialNo: 9, description: 'Non-AC Second class Luggage cum Guard van', code: 'LGSLR', parameters: [
    { label: 'Length over Buffers (mm)', value: '24000' }, { label: 'Length Over Body (mm)', value: '23540' },
    { label: 'Overall Width (mm)', value: '3053' }, { label: 'Height of floor from RL (mm)', value: '1320' },
    { label: 'Tare Weight (T)', value: '35.40' }, { label: 'Carrying Capacity (T)', value: '9.10' },
    { label: 'Bogie Centres (mm)', value: '14900' }, { label: 'Wheel Base (mm)', value: '2560' },
    { label: 'Max. Axle Load (T)', value: '16.25' }, { label: 'Accommodation', value: '36 to SEAT' }
  ]},
]

// Section 3: LHB Variant coaches with FIAT bogies
const section3Coaches: Coach[] = [
  { serialNo: 1, description: 'Non-AC second class', code: 'LWS', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.2' },
    { label: 'Carrying Capacity (T)', value: '13.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'passengers to seat -100' }
  ]},
  { serialNo: 2, description: 'Non-AC second class', code: 'LS2', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.19' },
    { label: 'Carrying Capacity (T)', value: '13.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '200/16t' }
  ]},
  { serialNo: 3, description: 'Non-AC second class', code: 'LS3', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring/140kN' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.0' },
    { label: 'Carrying Capacity (T)', value: '13.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'passengers to seat -99' }
  ]},
  { serialNo: 4, description: 'Non-AC second class', code: 'LS5', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.19' },
    { label: 'Carrying Capacity (T)', value: '13.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'passengers to seat -100' }
  ]},
  { serialNo: 5, description: 'Non-AC second class', code: 'LS 5A', parameters: [
    { label: 'Secondary Suspension', value: '160 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.19' },
    { label: 'Carrying Capacity (T)', value: '13.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'passengers to seat -100' }
  ]},
  { serialNo: 6, description: 'Non-AC Second class chair car', code: 'LWSCZ', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '40.55' },
    { label: 'Carrying Capacity (T)', value: '8.64' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '106 to seat' }
  ]},
  { serialNo: 7, description: 'Non-AC Second class chair car', code: 'LWSCZ1', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.60' },
    { label: 'Carrying Capacity (T)', value: '8.64' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '102 to seat' }
  ]},
  { serialNo: 8, description: 'Non-AC Second class chair car', code: 'LWSCZA', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.29' },
    { label: 'Carrying Capacity (T)', value: '8.64' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '102 to seat' }
  ]},
  { serialNo: 9, description: 'Non-AC Second class chair car', code: 'LWSCZAA', parameters: [
    { label: 'Secondary Suspension', value: '160 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.29' },
    { label: 'Carrying Capacity (T)', value: '8.64' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '108 to seat' }
  ]},
  { serialNo: 10, description: 'AC 2nd class chair car', code: 'LWSCZAC', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.03' },
    { label: 'Carrying Capacity (T)', value: '9.27' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '78 to seat' }
  ]},
  { serialNo: 11, description: 'AC 2nd class chair car', code: 'LWSCZAC2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.03' },
    { label: 'Carrying Capacity (T)', value: '9.27' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '78 to seat' }
  ]},
  { serialNo: 12, description: 'AC Ist class chair car (executive chair car)', code: 'LWFCZAC', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.37' },
    { label: 'Carrying Capacity (T)', value: '7.36' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '56 to seat' }
  ]},
  { serialNo: 13, description: 'AC Ist class chair car (executive chair car)', code: 'LWFCZAC2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.37' },
    { label: 'Carrying Capacity (T)', value: '7.36' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '56 to seat' }
  ]},
  { serialNo: 14, description: 'AC chair car double Decker', code: 'LWCZDAC', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3050' },
    { label: 'Height of floor from RL (mm)', value: '353/1320' }, { label: 'Tare Weight (T)', value: '49.15' },
    { label: 'Carrying Capacity (T)', value: '10.24' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '120 to seat' }
  ]},
  { serialNo: 15, description: 'AC chair car double Decker', code: 'LWSCZDAC1', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3053' },
    { label: 'Height of floor from RL (mm)', value: '353/1320' }, { label: 'Tare Weight (T)', value: '49.60' },
    { label: 'Carrying Capacity (T)', value: '8.64' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '120 to seat' }
  ]},
  { serialNo: 16, description: 'AC Vista Dome Chair Car', code: 'LWCTZAC', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.07' },
    { label: 'Carrying Capacity (T)', value: '4.64' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '44 to seat' }
  ]},
  { serialNo: 17, description: 'Non-AC 3-Tier sleeper', code: 'LWSCN', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '36.28' },
    { label: 'Carrying Capacity (T)', value: '6.63' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '78 to seat/sleep' }
  ]},
  { serialNo: 18, description: 'Non-AC 3-Tier sleeper', code: 'LWSCN1', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '41.63' },
    { label: 'Carrying Capacity (T)', value: '--' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '80 to seat/sleep' }
  ]},
  { serialNo: 19, description: 'Non-AC 3-Tier sleeper', code: 'LWSCNA', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '42.73' },
    { label: 'Carrying Capacity (T)', value: '6.4' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '80 to seat/sleep' }
  ]},
  { serialNo: 20, description: 'Non-AC 3-Tier sleeper', code: 'LWSCNAA', parameters: [
    { label: 'Secondary Suspension', value: '160 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.3' },
    { label: 'Carrying Capacity (T)', value: '5.76' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '80 to seat/sleep' }
  ]},
  { serialNo: 21, description: 'AC Ist class SLEEPER', code: 'LWFAC', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.30' },
    { label: 'Carrying Capacity (T)', value: '1.92' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '24 to seat/sleep' }
  ]},
  { serialNo: 22, description: 'AC Ist class SLEEPER', code: 'LWFAC2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.59' },
    { label: 'Carrying Capacity (T)', value: '2.0' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '24 to seat/sleep' }
  ]},
  { serialNo: 23, description: 'A/C First class cum 2Tier sleeper', code: 'LWFCWAC', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '47.35' },
    { label: 'Carrying Capacity (T)', value: '3.20' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'ac 1 tier to seat/sleep -10\nac 2 tier to seat/sleep -28' }
  ]},
  { serialNo: 24, description: 'A/C First class cum 2Tier sleeper', code: 'LWFCWACA', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '47.05' },
    { label: 'Carrying Capacity (T)', value: '3.20' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'ac 1 tier to seat/sleep -10\nac 2 tier to seat/sleep -28' }
  ]},
  { serialNo: 25, description: 'AC 2 tier SLEEPER', code: 'LWACCW', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '44.50' },
    { label: 'Carrying Capacity (T)', value: '4.32' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '52 to seat/sleep' }
  ]},
  { serialNo: 26, description: 'AC 2 tier SLEEPER', code: 'LWACCW2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '44.49' },
    { label: 'Carrying Capacity (T)', value: '4.32' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '52 to seat/sleep' }
  ]},
  { serialNo: 27, description: 'AC 3 tier SLEEPER', code: 'LWACCN', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.60' },
    { label: 'Carrying Capacity (T)', value: '5.76' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '72 to seat/sleep' }
  ]},
  { serialNo: 28, description: 'AC 3 tier SLEEPER', code: 'LWACCN2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.3' },
    { label: 'Carrying Capacity (T)', value: '5.76' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '72 to seat/sleep' }
  ]},
  { serialNo: 29, description: 'AC 3 tier SLEEPER', code: 'LWACCNAA', parameters: [
    { label: 'Secondary Suspension', value: '160 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.3' },
    { label: 'Carrying Capacity (T)', value: '5.76' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '72 to seat/sleep' }
  ]},
  { serialNo: 30, description: 'Third AC economy coach', code: 'LWACCNE', parameters: [
    { label: 'Secondary Suspension', value: '160 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '47.67' },
    { label: 'Carrying Capacity (T)', value: '6.72' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '80 to seat/sleep' }
  ]},
  { serialNo: 31, description: 'AC Hot buffet car', code: 'LWCBAC', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '40.80' },
    { label: 'Carrying Capacity (T)', value: '1.44' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '18 to seat/sleep' }
  ]},
  { serialNo: 32, description: 'AC Hot buffet car', code: 'LWCBAC2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '40.81' },
    { label: 'Carrying Capacity (T)', value: '4.440' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '18 to seat/sleep' }
  ]},
  { serialNo: 33, description: 'AC Hot buffet car', code: 'LWCBACDQ', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.61' },
    { label: 'Carrying Capacity (T)', value: '---' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '40 to seat-dining' }
  ]},
  { serialNo: 34, description: 'AC Inspection Carriage-Administrative', code: 'LRAAC', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '49.122' },
    { label: 'Carrying Capacity (T)', value: '1.26' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '---' }
  ]},
  { serialNo: 35, description: 'AC Track Recording Car', code: 'LRZAC', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '40.0' },
    { label: 'Carrying Capacity (T)', value: '---' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '04 to seat/sleep' }
  ]},
  { serialNo: 36, description: 'A/C First class cum 3-Tier sleeper', code: 'LWFCNAC', parameters: [
    { label: 'Secondary Suspension', value: '---' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.30' },
    { label: 'Carrying Capacity (T)', value: '5.76' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '---' }
  ]},
  { serialNo: 37, description: 'A/C 2-Tier cum 3-Tier', code: 'LWCWNAC', parameters: [
    { label: 'Secondary Suspension', value: '---' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '45.30' },
    { label: 'Carrying Capacity (T)', value: '5.76' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '---' }
  ]},
  { serialNo: 38, description: 'High capacity parcel van without luggage racks', code: 'LVPH', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '33.50' },
    { label: 'Carrying Capacity (T)', value: '24.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '24 t to carry' }
  ]},
  { serialNo: 39, description: 'High capacity parcel van without luggage racks', code: 'LVPHR', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '33.50' },
    { label: 'Carrying Capacity (T)', value: '24.00' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '24 t to carry' }
  ]},
  { serialNo: 40, description: 'Second class cum luggage and brake van with compartment for Divyangjan passengers', code: 'LSLRD', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '48.84' },
    { label: 'Carrying Capacity (T)', value: '8.82' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'other passengers to seat -31\nDivyangjan passengers/attendant to seat-6' }
  ]},
  { serialNo: 41, description: 'Second class cum luggage and brake van with compartment for Divyangjan passengers', code: 'LSLRDAA', parameters: [
    { label: 'Secondary Suspension', value: '160 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '43.84' },
    { label: 'Carrying Capacity (T)', value: '8.82' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'other passengers to seat -31\nDivyangjan passengers/attendant to seat – 6\nDivyangjan passengers/attendant to sleep – 2+2' }
  ]},
  { serialNo: 42, description: 'Power car with underslung DG set having compartment for luggage, second class unreserved passengers & disabled passengers', code: 'LDSLRA', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '48.90' },
    { label: 'Carrying Capacity (T)', value: '8.60' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'other passengers to seat -30\nno. of pwds to seat – 6\nno. of pwds to sleep -2\nno. of attendants to sleep -2' }
  ]},
  { serialNo: 43, description: 'Generator car', code: 'LWLRRM', parameters: [
    { label: 'Secondary Suspension', value: 'Coil Spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '53.60' },
    { label: 'Carrying Capacity (T)', value: '3.05' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '5 (4-crews & 1-guard)' }
  ]},
  { serialNo: 44, description: 'Generator car', code: 'LWLRRM2', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '54.90' },
    { label: 'Carrying Capacity (T)', value: '4.380' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '5 (4-crews & 1-guard)' }
  ]},
  { serialNo: 45, description: 'Non-AC EOG/HOG Brake, Luggage cum Generator Van (on board DA sets)', code: 'LWLRRMD', parameters: [
    { label: 'Secondary Suspension', value: '140 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '53.60' },
    { label: 'Carrying Capacity (T)', value: '---' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: 'divyangjan passengers/attendant to seat – 9\ndivyangjan passengers/attendant to sleep – 3+3' }
  ]},
  { serialNo: 46, description: 'Non-AC SLR Coach with Under Slung DG set', code: 'LWLRRMU', parameters: [
    { label: 'Secondary Suspension', value: '120 kN Air spring' }, { label: 'Length over Buffers (mm)', value: '24000' },
    { label: 'Length Over Body (mm)', value: '23540' }, { label: 'Overall Width (mm)', value: '3240' },
    { label: 'Height of floor from RL (mm)', value: '1320' }, { label: 'Tare Weight (T)', value: '40.0' },
    { label: 'Carrying Capacity (T)', value: '---' }, { label: 'Bogie Centres (mm)', value: '14900' },
    { label: 'Wheel Base (mm)', value: '2560' }, { label: 'Max. Axle Load (T)', value: '16.25' },
    { label: 'Accommodation', value: '5 (4-crews & 1-guard)' }
  ]},
]

const LHBCoaches = () => {
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

  const renderCoachCard = (coach: Coach, index: number, sectionPrefix: string) => (
    <div
      key={`${sectionPrefix}-${coach.serialNo}`}
      className={`bg-linear-to-br ${getGradientColor(index)} rounded-lg px-2 py-4 border ${getBorderColor(index)} hover:border-opacity-50 transition-all backdrop-blur-lg shadow-lg`}
    >
      <div className="flex items-center justify-center flex-col gap-4">
        {/* Serial Number Badge */}
        <div className={`mt-1 h-12 w-12 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
          {coach.serialNo}
        </div>
        
        {/* Coach Details */}
        <div className="flex-1 w-full">
          <h3 className="text-white font-bold text-lg mb-2 text-center">{coach.description}</h3>
          <p className="text-yellow-300 text-sm mb-4 text-center font-semibold">Code: {coach.code}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {coach.parameters.map((param, paramIndex) => (
              <div key={paramIndex} className="bg-black/20 rounded-lg p-3 border border-white/10">
                <p className="text-yellow-300 text-xs mb-1 font-semibold">{param.label}</p>
                <p className="text-white font-semibold text-sm whitespace-pre-line">{param.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Leading Dimensions of LHB Coaches
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-200 text-center leading-relaxed mb-4">
              This comprehensive data includes detailed leading dimensions for all LHB (Linke Hofmann Busch) coach variants used in railway operations.
              Each coach is displayed with its technical specifications in an organized card format.
            </p>
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
              <p className="text-yellow-200 text-sm text-center font-semibold">
                📊 Section 1: 18 Coaches | Section 2: 9 Coaches | Section 3: 46 Coaches
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent mb-3">
                Leading dimensions of Hybrid SG Variant Coaches (LHB Shell with ICF Bogie) with air spring suspension
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              {section1Coaches.map((coach, index) => renderCoachCard(coach, index, 's1'))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent mb-3">
                Leading dimensions of LHB SG Variant coaches with FIAT bogies
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              {section2Coaches.map((coach, index) => renderCoachCard(coach, index, 's2'))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <div className="text-center mb-6">
              <h2 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-3">
                Leading dimensions of LHB Variant coaches with FIAT bogies
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              {section3Coaches.map((coach, index) => renderCoachCard(coach, index, 's3'))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-300 text-sm text-center">
              <span className="text-yellow-400 font-semibold">📝 Note:</span> For detailed specifications of any specific LHB coach type, please refer to the official railway technical manuals.
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

export default LHBCoaches
