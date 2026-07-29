"use client"
import React from 'react'

// Wagon data type definition
interface WagonData {
  serialNo: string
  type: string
  lengthOverHdStock: string
  lengthOverBuffer: string
  lengthInside: string
  widthInside: string
  heightInside: string
  bogieCenters: string
  journalCenters: string
  wheelDia: string
  maxAxleLoad: string
  tare: string
  payLoad: string
  ratio: string
  grossLoad: string
  wagonsPerRake: string
  throughput: string
  loadingDensity: string
  cubicCapacity: string
  speed: string
  couplerType: string
  bearingType: string
  brakingSystem: string
}

// Helper function to parse wagon data
const parseWagonData = (dataString: string): WagonData[] => {
  const lines = dataString.trim().split('\n')
  const wagons: WagonData[] = []
  
  lines.forEach((line) => {
    const trimmedLine = line.trim()
    if (!trimmedLine || trimmedLine.startsWith('Sl.No.') || trimmedLine.startsWith('WAGON DATA') || trimmedLine.startsWith('Notes:')) {
      return
    }
    
    // Split by pipe and clean up
    const parts = trimmedLine.split('|').map(p => p.trim())
    
    // Check if first part is a number (serial number)
    const serialMatch = parts[0]?.match(/^(\d+)/)
    if (serialMatch && parts.length >= 3) {
      const wagon = {
        serialNo: serialMatch[1],
        type: parts[1] || '-',
        lengthOverHdStock: parts[2] || '-',
        lengthOverBuffer: parts[3] || '-',
        lengthInside: parts[4] || '-',
        widthInside: parts[5] || '-',
        heightInside: parts[6] || '-',
        bogieCenters: parts[7] || '-',
        journalCenters: parts[8] || '-',
        wheelDia: parts[9] || '-',
        maxAxleLoad: parts[10] || '-',
        tare: parts[11] || '-',
        payLoad: parts[12] || '-',
        ratio: parts[13] || '-',
        grossLoad: parts[14] || '-',
        wagonsPerRake: parts[15] || '-',
        throughput: parts[16] || '-',
        loadingDensity: parts[17] || '-',
        cubicCapacity: parts[18] || '-',
        speed: parts[19] || '-',
        couplerType: parts[20] || '-',
        bearingType: parts[21] || '-',
        brakingSystem: parts[22] || '-',
      }
      wagons.push(wagon)
    }
  })
  
  return wagons
}

// Wagon data string
const wagonDataString = `1  | BOXNM1-22.32t          | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.32 | 22.53 | 66.75 | 2.96  | 89.28 | 58 | 3871    | 8.33  | 56.29 | 60/80      | CBC  | CTRB | A
2  | BOXNM1-22.82t          | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.82 | 22.53 | 68.75 | 3.01  | 91.28 | 58 | 3987    | 8.52  | 56.29 | 60/80      | CBC  | CTRB | A
3  | BOXNM2-22.82t          | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.82 | 22.53 | 68.75 | 3.01  | 91.28 | 58 | 3987    | 8.52  | 56.29 | 75/100     | CBC  | CTRB | A
4  | BOXNHS-20.32t          | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 20.32 | 22.51 | 58.77 | 2.61  | 81.28 | 58 | 3410    | 7.59  | 56.29 | 100/100    | CBC  | CTRB | A
5  | BOXNHSM1-22.32t        | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.32 | 22.53 | 66.75 | 2.96  | 89.28 | 58 | 3871    | 8.33  | 56.29 | 60/90      | CBC  | CTRB | A
6  | BOXNHSM1-22.82t        | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.82 | 22.53 | 68.75 | 3.05  | 91.28 | 58 | 3987    | 8.52  | 56.29 | 60/80      | CBC  | CTRB | A
7  | BOXNHSM2-22.82t        | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.9  | 22.53 | 69.07 | 3.06  | 91.6  | 58 | 4006    | 8.59  | 56.29 | 75/100     | CBC  | CTRB | A
8  | BOXNHA-22.82t          | 9784  | 10713 | 9784  | 2950/3200  | 2175/3450  | 6524 | 2260 | 1000 | 22.82 | 23.17 | 68.11 | 2.94  | 91.28 | 58 | 3950    | 8.52  | 62.8  | 75/100     | CBC  | CTRB | A
9  | BOXNHAM-22.82t         | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.82 | 23.1  | 68.18 | 2.95  | 91.28 | 58 | 3954    | 8.52  | 56.28 | 75/100     | CBC  | CTRB | A
10 | BOXNHL-22.9t           | 10034 | 10963 | 10034 | 3022/3250  | 2028/3301  | 6690 | 2260 | 1000 | 22.9  | 20.52 | 71.08 | 3.46  | 91.6  | 58 | 4123    | 8.35  | 61.5  | 75/100     | CBC  | CTRB | A
11 | BOXNHL-25t             | 10034 | 10963 | 10034 | 3022/3250  | 2028/3301  | 6690 | 2260 | 1000 | 25    | 20.52 | 79.48 | 3.87  | 100   | 58 | 4610    | 9.12  | 61.5  | 45/100     | CBC  | CTRB | A
12 | BOXNEL-25t             | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 25    | 22.77 | 77.23 | 3.39  | 100   | 59 | 4556    | 9.33  | 56.29 | 45/85      | CBC  | CTRB | A
13 | BOXNS-22.9t            | 9784  | 10713 | 9784  | 3111/3135  | 2300/3581  | 6524 | 2260 | 840  | 22.9  | 19.85 | 71.75 | 3.615 | 91.6  | 59 | 4322.25 | 8.55  | 69.36 | 75/100     | CBC  | CTRB | A
14 | BOXNS-25t              | 9784  | 10713 | 9784  | 3111/3135  | 2300/3581  | 6524 | 2260 | 840  | 25    | 19.85 | 80.15 | 4.04  | 100   | 59 | 4729    | 9.33  | 69.36 | 45/100     | CBC  | CTRB | A
15 | BOXNRM2                | 9784  | 10713 | 9784  | 2954/3176  | 2127/3408  | 6524 | 2260 | 1000 | 22.9  | 21.2  | 70.4  | 3.32  | 91.6  | 58 | 4083    | 8.55  | 61.47 | 75/100     | CBC  | CTRB | A
16 | BOXNRHS-22.9t          | 9784  | 10713 | 9784  | 2954/3176  | 2127/3408  | 6524 | 2260 | 1000 | 22.9  | 21.2  | 70.4  | 3.32  | 91.6  | 58 | 4083    | 8.55  | 61.47 | 75/100     | CBC  | CTRB | A
17 | BOXNLWM2-22.82t        | 9784  | 10713 | 9784  | 3022/3250  | 1990/3263  | 6524 | 2260 | 1000 | 22.82 | 20.52 | 70.76 | 3.45  | 91.28 | 58 | 4104    | 8.52  | 58.84 | 75/100     | CBC  | CTRB | A
18 | BOST-20.32t            | 12800 | 13729 | 12800 | 2850/3100  | 1805/3077  | 8800 | 2260 | 1000 | 20.32 | 25.5  | 55.78 | 2.19  | 81.28 | 45 | 2510.1  | 5.92  | 65.79 | 75/80      | CBC  | CTRB | A
19 | BOST-22.9t             | 12800 | 13729 | 12800 | 2850/3101  | 1805/3077  | 8800 | 2260 | 1000 | 22.9  | 25.5  | 66.1  | 2.59  | 91.6  | 46 | 3040.6  | 6.67  | 65.79 | 50/80      | CBC  | CTRB | A
20 | BOSTM1-22.32           | 12800 | 13729 | 12800 | 2850/3100  | 1805/3077  | 8800 | 2260 | 1000 | 22.32 | 25.5  | 63.78 | 2.5   | 89.28 | 45 | 2870    | 6.5   | 65.79 | 60/65      | CBC  | CTRB | A
21 | BOSTHS-20.32t          | 12800 | 13729 | 12800 | 2850/3100  | 1805/3078  | 8800 | 2260 | 1000 | 20.32 | 25.5  | 55.78 | 2.19  | 81.28 | 45 | 2510.1  | 5.92  | 65.79 | 75/100     | CBC  | CTRB | A
22 | BOSTHSM1-22.9t         | 12800 | 13729 | 12800 | 2850/3100  | 1805/3080  | 8800 | 2260 | 1000 | 22.9  | 25.5  | 66.1  | 2.59  | 91.6  | 46 | 3040.6  | 6.67  | 65.79 | 60/80      | CBC  | CTRB | A
23 | BOSTHSM2-22.32t        | 12800 | 13729 | 12800 | 2850/3100  | 1805/3078  | 8800 | 2260 | 1000 | 22.32 | 25.5  | 63.78 | 2.5   | 89.28 | 45 | 2933    | 6.5   | 65.79 | 75/100     | CBC  | CTRB | A
24 | BOSTHSM3-22.32t        | 12800 | 13729 | 12800 | 2850/3100  | 1805/3078  | 8800 | 2260 | 1000 | 22.32 | 25.3  | 64.03 | 2.54  | 89.28 | 45 | 2933    | 6.5   | 65.79 | 75/100     | CBC  | CTRB | A
25 | BOMN-16.4t             | 18460 | 19724 | 18460 | 3100/3200  | 1275       | 13890| 2260 | 1000 | 16.4  | 29.78 | 35.85 | 1.2   | 65.62 | 31 | -       | 3.324 | -     | 75/75      | CBC  | CTRB | A
26 | BCNM1-22.32t           | 14500 | 15429 | 14494 | 2944/3100  | 2446/3789  | 10000| 2260 | 1000 | 22.32 | 27.2  | 62.08 | 2.28  | 89.28 | 40 | 2483    | 5.79  | 104   | 60/80      | CBC  | CTRB | A
27 | BCNM1-22.82t           | 14500 | 15429 | 14494 | 2944/3100  | 2446/3789  | 10000| 2260 | 1000 | 22.82 | 27.2  | 64.08 | 2.36  | 91.28 | 40 | 2563    | 5.92  | 104   | 60/80      | CBC  | CTRB | A
28 | BCNM2-22.82t           | 14500 | 15429 | 14494 | 2944/3100  | 2446/3789  | 10000| 2260 | 1000 | 22.82 | 27.2  | 64.08 | 2.36  | 91.28 | 41 | 2627.28 | 5.92  | 104   | 75/100     | CBC  | CTRB | A
29 | BCNHSM1-22.32t         | 14500 | 15429 | 14494 | 2944/3100  | 2446/3786  | 10000| 2260 | 1000 | 22.32 | 27.2  | 62.08 | 2.28  | 89.28 | 41 | 2545    | 5.79  | 104   | 60/90      | CBC  | CTRB | A
30 | BCNHSM1-22.82t         | 14500 | 15429 | 14494 | 2944/3100  | 2446/3786  | 10000| 2260 | 1000 | 22.82 | 27.2  | 64.08 | 2.36  | 91.28 | 41 | 2627    | 5.92  | 104   | 75/90      | CBC  | CTRB | A
31 | BCNHL-22.9t            | 10034 | 10963 | 10034 | 3345/3450  | 3024/4305  | 7153 | 2260 | 1000 | 22.9  | 20.8  | 70.8  | 3.4   | 91.6  | 58 | 4106    | 8.35  | 92.54 | 75/70      | CBC  | CTRB | A
32 | BCNAM1-22.32t          | 13521 | 14450 | 13515 | 2944/3200  | 2677/4017  | 9500 | 2260 | 1000 | 22.32 | 24.6  | 64.73 | 2.63  | 89.28 | 44 | 2848    | 6.18  | 103.4 | 60/80      | CBC  | CTRB | A
33 | BCNAM1-22.82t          | 13521 | 14450 | 13515 | 2944/3200  | 2677/4017  | 9500 | 2260 | 1000 | 22.82 | 24.6  | 66.73 | 2.71  | 91.28 | 44 | 2936    | 6.32  | 103.4 | 60/80      | CBC  | CTRB | A
34 | BCNAHS-                | 13521 | 14450 | 13515 | 2944/3200  | 2677/4017  | 9500 | 2260 | 1000 | 20.32 | 24.6  | 56.73 | 2.3   | 81.28 | 43 | 2439    | 5.625 | 103.4 | 100/100    | CBC  | CTRB | A
35 | BCNAHSM1-22.32         | 13521 | 14450 | 13515 | 2944/3200  | 2677/4017  | 9500 | 2260 | 1000 | 22.32 | 24.6  | 64.73 | 2.63  | 89.28 | 43 | 2783    | 6.18  | 103.4 | 60/100     | CBC  | CTRB | A
36 | BCNAHSM1-22.82t        | 13521 | 14450 | 13515 | 2944/3200  | 2677/4017  | 9500 | 2260 | 1000 | 22.9  | 24.6  | 67    | 2.72  | 91.6  | 43 | 2881    | 6.34  | 103.4 | 75/100     | CBC  | CTRB | A
37 | BCNAHSM2-22.82t        | 13521 | 14450 | 13515 | 2944/3200  | 2677/4017  | 9500 | 2260 | 1000 | 22.82 | 24.6  | 66.98 | 2.71  | 91.6  | 44 | 2947    | 6.32  | 103.4 | 75/100     | CBC  | CTRB | A
38 | BCBFG                  | 11861 | 12790 | 11770 | 3140/3250  | -/4260     | 8661 | 2260 | 1000 | 21.82 | 25.96 | 61.32 | 2.36  | 87.28 | 48 | 2942    | 6.82  | 81.76 | 75/75      | CBC  | CTRB | A
39 | BCCNR-A-10.5t          | 19071 | 20000 | -     | 2895/3150  | -/4265     | 13621| 2260 | 840  | 10.5  | 28.3  | 13.7  | 0.484 | 42    | 12 | 164.4   | 2.1   | -     | 75/75      | CBC  | CTRB | A
40 | BCCNR-B-10.5t          | 19071 | 20000 | -     | 2895/3150  | -/4265     | 13621| 2260 | 840  | 10.5  | 28.3  | 13.7  | 0.484 | 42    | 18 | 246.6   | 2.1   | -     | 75/75      | CBC  | CTRB | A
41 | BCACM-A-8.28t          | 13625 | 14569 | -     | -/2600     | -/4305     | 9675 | 2260 | 810  | 8.28  | 26.3  | 6.825 | 0.259 | 33.125| _  | _       | 2.27  | _     | 100/100    | CBC  | CTRB | A
42 | BCACM-B-7.9t           | 12212 | 13171 | -     | -/2600     | -/4305     | 8812 | 2260 | 810  | 7.906 | 24.8  | 6.825 | 0.275 | 31.625| _  | _       | 2.4   | _     | 100/100    | CBC  | CTRB | A
43 | BCACBM-A-12.715        | 22626 | 23555 | _     | -/2900     | -/4305     | 14345| 2260 | 840  | 12.715| 35.86 | 15    | 0.418 | 50.86 | 6  | _       | 2.16  | _     | 90/90      | CBC  | CTRB | A
44 | BCACBM-B-12.680t       | 22626 | 23555 | _     | -/2900     | -/4305     | 14345| 2260 | 840  | 12.68 | 35.72 | 15    | 0.419 | 50.72 | 21 | _       | 2.15  | _     | 90/90      | CBC  | CTRB | A
45 | BCFC-22.32             | 9784  | 10713 | 10084 | 3128/3245  | -/4165     | 6684 | 2260 | 1000 | 22.32 | 22    | 67.3  | 3.06  | 89.3  | 58 | 3904    | 8.335 | 72.8  | 60/65      | CBC  | CTRB | A
46 | BCFCM-22.9             | 9784  | 10713 | 10084 | 3128/3245  | -/4265     | 6684 | 2260 | 1000 | 22.9  | 23.1  | 68.5  | 2.97  | 91.6  | 59 | 4041.5  | 8.55  | 78.98 | 60/100     | CBC  | CTRB | A
47 | BCFCM1-22.9            | 9784  | 10713 | 10084 | 3128/3245  | -/4265     | 6684 | 2260 | 1000 | 22.9  | 23.1  | 68.5  | 2.97  | 91.6  | 59 | 4041.5  | 8.55  | 78.98 | 75/100     | CBC  | CTRB | A
48 | BRN-20.32              | 13716 | 14645 | 13716 | 2845       | -          | 9144 | 2260 | 1000 | 20.32 | 24.39 | 56.88 | 2.33  | 81.28 | 42 | 2389    | 5.55  | -     | 65/65      | CBC  | CTRB | A
49 | BRN-22.9t              | 13716 | 14645 | 13716 | 2930       | -          | 9144 | 2260 | 1000 | 22.9  | 23.3  | 68.3  | 2.93  | 91.6  | 42 | 2868    | 5.42  | -     | 65/65      | CBC  | CTRB | A
50 | BRN-22.9M1             | 13716 | 14645 | 13716 | 2930       | -          | 9144 | 2260 | 1000 | 22.9  | 23.3  | 68.3  | 2.93  | 91.6  | 42 | 2868    | 5.42  | -     | 75/100     | CBC  | CTRB | A
51 | BRNA-20.32             | 13716 | 14645 | 13716 | 2845       | 2544       | 9144 | 2260 | 1000 | 20.32 | 23.54 | 57.73 | 2.452 | 81.28 | 42 | -       | 5.55  | -     | 75/80      | CBC  | CTRB | A
52 | BRNM1-20.32t           | 13716 | 14645 | 13716 | 2845       | -          | 9144 | 2260 | 1000 | 20.32 | 24.39 | 56.88 | 2.33  | 81.28 | 42 | -       | 5.55  | -     | 100/100    | CBC  | CTRB | A
53 | BRNAM1-20.32t          | 13716 | 14645 | 13716 | 2845       | 2544       | 9144 | 2260 | 1000 | 20.32 | 23.54 | 57.73 | 2.452 | 81.28 | 42 | -       | 5.55  | -     | 100/100    | CBC  | CTRB | A
54 | BRNAHS-                | 13716 | 14645 | 13716 | 2845       | 2544       | 9144 | 2260 | 1000 | 20.32 | 23.54 | 57.73 | 2.452 | 81.28 | 42 | -       | 5.55  | -     | 100/100    | CBC  | CTRB | A
55 | BRHNEHS-20.32t         | 13716 | 14998 | 13716 | 3049       | 2008       | 9144 | 2260 | 1000 | 20.32 | 22.6  | 58.68 | 2.596 | 81.28 | 41 | -       | 5.419 | -     | 65/65      | CBC  | CTRB | A
56 | BRHNEHSM1-20.32t       | 13716 | 14998 | 13716 | 3049       | 2008       | 9144 | 2260 | 1000 | 20.32 | 22.6  | 58.68 | 2.596 | 81.28 | 41 | -       | 5.419 | -     | 100/95     | CBC  | CTRB | A
57 | BRSTN-20.32t           | 13716 | 14998 | 13716 | 3200       | 1264       | 9144 | 2260 | 1000 | 20.32 | 25.01 | 56.27 | 2.25  | 81.28 | 41 | -       | 5.419 | -     | 80/75      | CBC  | CTRB | A
58 | BFNS-20.32t            | 13716 | 14645 | 13716 | 3045       | 2772       | 9144 | 2260 | 1000 | 20.32 | 26.71 | 54.57 | 2.043 | 81.28 | 42 | -       | 5.55  | -     | 75/80      | CBC  | CTRB | A
59 | BFNS-22.9t             | 13716 | 14645 | 13716 | 3045       | 2772       | 9144 | 2260 | 1000 | 22.9  | 26.71 | 64.89 | 2.429 | 91.6  | 42 | -       | 6.25  | -     | 60/60      | CBC  | CTRB | A
60 | FLATCOIL3-22.9t        | 13716 | 14645 | 13716 | 3045       | 2776       | 9144 | 2260 | 1000 | 22.9  | 26.71 | 64.89 | 2.429 | 91.6  | 43 | -       | 6.25  | -     | 75/100     | CBC  | CTRB | A
61 | BFNSM-22.9t            | 10034 | 10963 | -     | 2945       | 1791       | 6690 | 2260 | 1000 | 22.9  | 23.6  | 68    | 2.88  | 91.6  | 58 | 3944    | 8.35  | -     | 60/60      | CBC  | CTRB | A
62 | BFNSM1-22.9t           | 10034 | 10963 | -     | 2945       | 1791       | 6690 | 2260 | 1000 | 22.9  | 22    | 69.6  | 3.16  | 91.6  | 58 | 4036    | 8.35  | -     | 75/95      | CBC  | CTRB | A
63 | BFNV-22.9t             | 10034 | 10963 | -     | 2800       | -          | 6690 | 2260 | 840  | 22.9  | 22    | 69.6  | 3.16  | 91.6  | 58 | 4036.8  | 8.355 | -     | 60/100     | CBC  | CTRB | A
64 | BTALNM1 (20.03t)       | 16600 | 17529 | 16325 | -/3050     | -/4265     | 11570| 2260 | 1000 | 20.03 | 47.97 | 32.13 | 0.67  | 80.1  | 33 | -       | -     | 60.663| 90/100     | CBC  | CTRB | A
65 | BTAPM1 (21.82t)        | 11400 | 12329 | -     | -/3200     | -/4350     | 8300 | 2260 | 1000 | 21.92 | 27.32 | 60.36 | 2.21  | 87.68 | 47 | -       | 7.11  | 62    | 60/65      | CBC  | CTRB | A
66 | BTPN                   | 11491 | 12420 | 11434 | 2850       | -/4265     | 8391 | 2260 | 1000 | 20.32 | 27    | 54.28 | 2.01  | 81.28 | 47 | 2552    | 6.54  | 67.58 | 75/80      | CBC  | CTRB | A
67 | BTPNM1 (20.32t)        | 11491 | 12420 | 11434 | 2850       | -/4265     | 8391 | 2260 | 1000 | 20.32 | 27    | 54.28 | 2.01  | 81.28 | 47 | 2552    | 6.54  | 67.58 | 80/100     | CBC  | CTRB | A
68 | BTPGLN-19.8t           | 18000 | 18929 | 17960 | 2400/3049  | 2400/4285  | 12970| 2260 | 1000 | 19.8  | 41.6  | 37.6  | 0.9   | 79.2  | 31 | -       | 4.184 | 79.48 | 90/90      | CBC  | CTRB | A
69 | BTFLN-20.32t           | 11491 | 12420 | 11522 | 2950/3191  | 2950/4358  | 8391 | 2260 | 1000 | 20.32 | 23.33 | 57.95 | 2.48  | 81.28 | 47 | 2724    | 6.54  | 76    | 65/65      | CBC  | CTRB | A
70 | BTFLNM1-20.32t         | 11491 | 12420 | 11522 | 2950/3191  | 2950/4359  | 8391 | 2260 | 1000 | 20.32 | 23.53 | 57.75 | 2.45  | 81.28 | 47 | 2714.25 | 6.54  | 76    | 85/100     | CBC  | CTRB | A
71 | BTCS                   | 9784  | 10713 | 9760  | 2300/2834  | 2300/4110  | 6524 | 2260 | 1000 | 20.32 | 24.77 | 55.28 | 2.23  | 81.28 | -  | -       | 7.59  | 38.75 | 60/60      | CBC  | CTRB | A
72 | BLC-A (S.S)            | 13625 | 14566 | -     | -/2438     | -/3893*    | 9675 | 2260 | 840  | 20.32 | 19.1  | 61    | 3.19  | 80.1  | 18 | 1098    | 5.5   | -     | 100/100    | CBC/SDB | CTRB | A
73 | BLC-B (S.S)            | 12212 | 13165 | -     | -/2438     | -/3893*    | 8812 | 2260 | 840  | 20.32 | 18.1  | 61    | 3.39  | 79    | 27 | 1647    | 6     | -     | 100/100    | SDB  | CTRB | A
74 | BLCS-A-22.32t (S.S)    | 13625 | 14554 | -     | -/2438     | -/3893*    | 9675 | 2260 | 840  | 25    | 19.2  | 80.8  | 4.21  | 100   | 18 | 1454.4  | 6.87  | -     | 60/65      | CBC/SDB | CTRB | A
75 | BLCS-B 22.32t (S.S)    | 12212 | 13141 | -     | -/2438     | -/3893*    | 8812 | 2260 | 840  | 25    | 18.1  | 81.9  | 4.52  | 100   | 27 | 2211.3  | 7.6   | -     | 60/65      | SDB  | CTRB | A
76 | BLC & BLCM A Car (DSDC)| 13625 | 14566 | -     | 2600       | -/4877     | 9675 | 2260 | 840  |20.32&22| 19.1  |62.18&68.9|3.25&3.6|81.28&88| 18 |1463&1584| 5.58&6.04| -  | 65/65      | CBC/SDB | CTRB | A
77 | BLC & BLCM B Car (DSDC)| 12212 | 13165 | -     | 2600       | -/4877     | 8812 | 2260 | 840  |20.32&22| 18    |63.28&70|3.51&3.89|81.28&88| 27 |1708.5&1891|6.17&6.68| - | 65/65      | SDB  | CTRB | A
78 | BLL-A (S.S)            | 15220 | 16161 | -     | -/2438     | -/3893*    | 10700| 2260 | 840  | 20.32 | 19.8  | 61    | 3.08  | 80.8  | 16 | 976     | 5     | -     | 100/100    | CBC/SDB | CTRB | A
79 | BLL-B (S.S)            | 13810 | 14763 | -     | -/2438     | -/3893*    | 9810 | 2260 | 840  | 20.32 | 19    | 61    | 3.21  | 80    | 24 | 1464    | 5.42  | -     | 100/100    | SDB  | CTRB | A
80 | BLSS-A (S.S) (22.9t)   | 13607.5| 14537 | 13607.5| 2480      | -/3893*    | 9657.5| 2260| 840  | 25    | 18.85 | 72.75 | 3.8594| 91.6  | 4  | 291     | 6.3   | -     | 65/65      | CBC/SDB | CTRB | A
81 | BLSS-B (S.S) (22.9t)   | 12177 | 13106 | 13106 | 2480       | -/3893*    | 8777 | 2260 | 840  | 20.32 | 17.6  | 74    | 4.2045| 91.6  | 44 | 3256    | 5.6463| -     | 65/65      | SDB  | CTRB | A
82 | BWTB                   | 15510 | 16792 | -     | -/3048     | 1306       | 11850| 2260 | 1000 | 22.9  | 31.21 | 60.39 | 1.93  | 91.6  | -  | -       | 5.45  | -     | 65/65      | CBC  | CTRB | A
83 | BVZI                   | 13540 | 14469 | -     | -/3200     | 2448/3894  | 9026 | -    | 915  | 5.875 | 23.5  | -     | -     | -     | 1  | -       | 1.624 | -     | -/100      | CBC  | SRB  | A
84 | BVZC                   | 8540  | 9469  | -     | -/3200     | -/3894     | 5400 | 2240 | 1000 | 7     | 13.97 | -     | -     | -     | 1  | -       | 1.499 | -     | -/100      | CBC  | RB   | A
85 | BVCM                   | 9784  | 10713 | _     | -/3200     | -/3894     | 6524 | 2260 | 1000 | 20.32 | 21.10 | -     | -     | -     | 1  | -       | 1.97  | -     | -/100      | CBC  | CTRB | A
86 | BOBR/BOBRM1            | 10671 | 11600 | 8732  | 3340/3500  | 2461/3735  | 7571 | 2260 | 1000 | 22.32 | 26.4  | 62.88 | 2.38  | 89.28 | 53 | 3333    | 7.7   | 57.2  | 60/75      | CBC  | CTRB | A
87 | BOBRN                  | 9671  | 10600 | 9327  | 3340/3500  | 2466/3735  | 6790 | 2260 | 1000 | 20.32 | 25.61 | 55.67 | 2.174 | 81.28 | 58 | 3229    | 7.67  | 56.78 | 70/75      | CBC  | CTRB | A
88 | BOBRNM1                | 9671  | 10600 | 9327  | 3340/3500  | 2466/3735  | 6790 | 2260 | 1000 | 22.9  | 25.61 | 65.99 | 2.5767| 91.6  | 58 | 3827.42 | 8.65  | 56.78 | 65/80      | CBC  | CTRB | A
89 | BOBRNHS                | 9671  | 10600 | 9327  | 3340/3500  | 2466/3735  | 6790 | 2260 | 1000 | 20.32 | 25.61 | 55.67 | 2.173 | 81.28 | 58 | 3228.86 | 7.67  | 56.78 | 100/100    | CBC  | CTRB | A
90 | BOBRNHSM1 - 22.9t      | 9671  | 10600 | 9327  | 3340/3500  | 2466/3735  | 6790 | 2260 | 1000 | 22.9  | 25.61 | 65.99 | 2.5767| 91.6  | 58 | -       | 8.65  | 56.78 | 65/65      | CBC  | CTRB | A
91 | BOBRNHSM2-22.32t       | 9671  | 10600 | 9327  | 3340/3500  | 2466/3735  | 6790 | 2260 | 1000 | 22.32 | 25.61 | 63.67 | 2.48  | 89.28 | 58 | -       | 8.42  | 56.78 | 75/100     | CBC  | CTRB | A
92 | BOBRNEL                | 9671  | 10600 | 9327  | 3340/3500  | 2466/3735  | 6790 | 2260 | 1000 | 25    | 26.61 | 74.39 | 2.8   | 100   | 58 | 4314.62 | 8.6415| -     | 45+5/60+5  | CBC  | CTRB | A
93 | BOBRNAL                | 9671  | 10600 | 9327  | 3316/3500  | 2466/3735  | 6790 | 2260 | 1000 | 20.32 | 22.4  | 58.88 | 2.62  | 81.28 | 58 | 3414    | 7.67  | 56.6  | _          | CBC  | CTRB | A
94 | BOBRNAL HSM1           | 9671  | 10600 | 9327  | 3316/3501  | 2466/3736  | 6790 | 2260 | 1000 | 21.82 | 23.54 | 63.74 | 2.7077| 87.28 | 58 | _       | _     | _     | 60/65      | CBC  | CTRB | A
95 | BOBSN-22.9             | 10668 | 11597 | 9296  | 2743/3020  | -/3301     | 7112 | 2260 | 1000 | 22.9  | 30    | 61.6  | 2.07  | 91.6  | -  | _       | 7.9   | 34    | 45/60      | CBC  | CTRB | A
96 | BOBSNS - 22.9t         | 9784  | 10713 | _     | -/3015     | -/3435     | 6524 | 2260 | 1000 | 22.9  | 28.5  | 63.1  | 2.214 | 91.6  | 59 | 3723    | 8.55  | 34    | 75/100     | CBC  | CTRB | A
97 | BOBSNM1 (25t)          | 10668 | 11597 | 9296  | 2743/3020  | -/3301     | 7112 | 2260 | 1000 | 25    | 30    | 70    | 2.33  | 100   | -  | -       | 8.62  | 34    | 45/55      | CBC  | CTRB | A
98 | BOBY/BOBYN             | 10718 | 11647 | 9000  | 2863/3189  | 2018/3287  | 7470 | 2260 | 1000 | 22.9  | 25.2  | 66.4  | 2.6   | 91.6  | 54 | 3320    | 7.86  | 46.1  | 65/65      | CBC  | CTRB | A
99 | BOBYNM1 (22.32)        | 10718 | 11647 | 9000  | 2863/3189  | 2018/3050  | 7470 | 2260 | 1000 | 22.32 | 24.9  | 66.3  | 2.59  | 89.28 | 54 | 3580.2  | 7.86  | 46.16 | 75/100     | CBC  | CTRB | A
100| BOBYNHSM1-22.9t        | 10718 | 11647 | 9000  | 2863/3189  | 2024/3293  | 7470 | 2260 | 1000 | 22.9  | 25.2  | 66.4  | 2.6   | 91.6  | 54 | 3586    | 7.86  | 46.16 | 75/100     | CBC  | CTRB | A
101| BOSM - 22.9t           | 12600 | 13529 | 12592 | 3052/3250  | 2250/3530  | 8500 | 2260 | 840  | 22.9  | 23.4  | 68.2  | 2.9   | 91.6  | 47 | 3205.4  | 6.77  | 86.46 | 75/85      | CBC  | CTRB | A
102| BOY/IR BOY/Iron ore Spl| 11000 | 11929 | 10990 | 2924/3134  | 1175/2450  | 7330 | 2260 | 1000 | 22.9  | 20.71 | 70.89 | 3.422 | 91.6  | 52 | 3686    | 7.678 | 37.8  | 65         | CBC  | CTRB | A
103| BOYEL                  | 11000 | 11929 | 10990 | 2924/3134  | 1175/2450  | 7330 | 2260 | 1000 | 25    | 20.71 | 70.89 | 3.422 | 91.6  | 52 | -       | 8.38  | 37.8  | 45/100     | CBC  | CTRB | A
104| BCN                    | 14500 | 15429 | 14494 | 2944/3100  | 2446/3788  | 10000| 2260 | 1000 | 20.32 | 27.2  | 54.08 | 1.99  | 81.28 | 40 | 2163    | 5.268 | 104   | 75/80      | CBC  | CTRB | A
105| BCCNA                  | 19071 | 20000 | -     | 2895/3150  | -/4265     | 13621| -    | 840  |10.425 | 31.7  | 10    | 1.315 | 41.7  | 12 | -       | 2.085 | -     | 100/100    | CBC  | RB   | A
106| BCCNB                  | 19071 | 20000 | -     | -          | -/3617     | 13621| -    | 840  | 10.5  | 32    | 10    | 1.312 | 42    | 18 | -       | 2.1   | -     | 100/100    | CBC  | RB   | A
107| BOXN-22.82             | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.82 | 23.1  | 68.18 | 2.95  | 91.28 | 58 | 3954    | 8.52  | 56.29 | 75/80      | CBC  | CTRB | A
108| BOXN-22.32             | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 22.32 | 23.1  | 66.18 | 2.86  | 89.28 | 58 | 3838    | 8.33  | 56.29 | 75/80      | CBC  | CTRB | A
109| BOXNR                  | 9784  | 10713 | 9784  | 2594/3176  | 2127/3408  | 6524 | 2260 | 1000 | 22.9  | 21.2  | 70.04 | 4.32  | 91.6  | 58 | -       | 8.55  | 61.47 | 75/100     | CBC  | CTRB | A
110| BOXNCR                 | 9784  | 10713 | 9784  | 2950/3200  | 1950/3233  | 6524 | 2260 | 1000 | 20.32 | 23.2  | 58.08 | 2.5   | 81.28 | 58 | -       | 7.59  | 56.29 | 75/80      | CBC  | CTRB | A
111| BOXNLW                 | 9784  | 10713 | 9784  | 2066/3341  | 1990/3263  | 6524 | 2260 | 1000 | 20.32 | 20.41 | 60.87 | 2.98  | 81.28 | 58 | 3530    | 7.59  | 58.84 | 100/100    | CBC  | CTRB | A
112| BOXNAL                 | 9784  | 10713 | 9784  | 3022/3250  | 2066/3341  | 6524 | 2260 | 1000 | 20.32 | 18.26 | 63.02 | 3.45  | 81.28 | 58 | 3655    | 7.59  | 61.09 | -          | CBC  | CTRB | A
113| BFAT                   | 14500 | 15782 | -     | -/3550     | -/4406     | 10000| -    | -    | 20    | 45    | 75    | -     | 120   | -  | -       | -     | -     | 25/40      | CBC  | Cyl  | V
114| BAFRDR                 | -     | -     | -     | -/2438     | -/3910     | -    | 2260 | 1000 | 20.32 | -     | -     | -     | -     | 50 | -       | -     | -     | 70/75      | CBC  | CTRB | A
115| FMP-22.0t (A Car)      | 14371 | 15300 | -     | -/2990     | -/4080     | 9681 | 2260 | 840  | 22    | 26    | 60/62 | -     | 88    |45# |2770/2860| 5.75  | -     | 90$        | CBC  | CTRB | A
116| FMP-22.0t (B Car)      | 12871 | 13800 | -     | -/2990     | -/4080     | 8681 | 2260 | 840  | 22    | 24    | 60/64 | -     | 88    | 6.38| -      | -     | -     | -          | CBC  | CTRB | A
117| BCCW                   | 9784  | 10713 | 9776  | -/3248     | -/4115     | 6524 | 2260 | 1000 | 22.9  | 23.25 | 64.3  | 2.77  | 87.55 | 59 | 3793.7  | 8.2   | 70    | 65/65      | CBC  | CTRB | A
118| ACT1                   | 18343 | 19272 | -     | 2500/2600  | -/4875     | 13700| 2260 | 840  | 20.32 | 30    | 14    | 0.47  | 44    | 33 | 462     | 2.28  | -     | 95/100     | CBC  | CTRB | A`

const WagonData = () => {
  const wagons = parseWagonData(wagonDataString)
  
  // Color gradients for different wagon groups
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
              WAGON DATA (ALL TYPE OF WAGONS)
            </h1>
            <p className="text-gray-300 text-lg mb-2">Complete Technical Specifications - 118 Wagon Types</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-200 text-center leading-relaxed mb-4">
              This comprehensive data includes detailed specifications for all wagon types used in railway operations.
              Each wagon is displayed with complete technical specifications in an organized box format.
            </p>
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-400/30">
              <p className="text-yellow-200 text-sm text-center font-semibold">
                📊 Total Wagon Types: 118 | All measurements in mm unless specified
              </p>
            </div>
          </div>

          {/* Wagon Data Boxes */}
          <div className="space-y-4 mb-6">
            {wagons.map((wagon, index) => (
              <div
                key={index}
                className={`bg-linear-to-br ${getGradientColor(index)} rounded-lg px-2 py-4 border ${getBorderColor(index)} hover:border-opacity-50 transition-all backdrop-blur-lg shadow-lg`}
              >
                <div className="flex items-center justify-center flex-col  gap-4">
                  {/* Serial Number Badge */}
                  <div className={`mt-1 h-12 w-12 rounded-full bg-linear-to-br ${getBadgeGradient(index)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                    {wagon.serialNo}
                  </div>
                  
                  {/* Wagon Details */}
                  <div className="flex-1 w-full">
                    <h3 className="text-white font-bold text-lg mb-3">{wagon.type}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Length over Hd. Stock</p>
                        <p className="text-white font-semibold text-sm">{wagon.lengthOverHdStock} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Length over Buffer</p>
                        <p className="text-white font-semibold text-sm">{wagon.lengthOverBuffer} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Length Inside</p>
                        <p className="text-white font-semibold text-sm">{wagon.lengthInside} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Width Inside/Overall</p>
                        <p className="text-white font-semibold text-sm">{wagon.widthInside} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Height Inside</p>
                        <p className="text-white font-semibold text-sm">{wagon.heightInside} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Bogie Centers</p>
                        <p className="text-white font-semibold text-sm">{wagon.bogieCenters} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Journal Centers</p>
                        <p className="text-white font-semibold text-sm">{wagon.journalCenters} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Wheel Dia On Tread</p>
                        <p className="text-white font-semibold text-sm">{wagon.wheelDia} mm</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Max. Axle Load</p>
                        <p className="text-white font-semibold text-sm">{wagon.maxAxleLoad} tonnes</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Tare</p>
                        <p className="text-white font-semibold text-sm">{wagon.tare} tonnes</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Pay Load</p>
                        <p className="text-white font-semibold text-sm">{wagon.payLoad} tonnes</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Ratio Pay Load/Tare</p>
                        <p className="text-white font-semibold text-sm">{wagon.ratio}</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Gross Load</p>
                        <p className="text-white font-semibold text-sm">{wagon.grossLoad} tonnes</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Wagons per Rake</p>
                        <p className="text-white font-semibold text-sm">{wagon.wagonsPerRake}</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Throughput per Rake</p>
                        <p className="text-white font-semibold text-sm">{wagon.throughput} tonnes</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Loading Density</p>
                        <p className="text-white font-semibold text-sm">{wagon.loadingDensity} tonne/m³</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Cubic Capacity</p>
                        <p className="text-white font-semibold text-sm">{wagon.cubicCapacity} Cu.m</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Speed (Load/Empty)</p>
                        <p className="text-white font-semibold text-sm">{wagon.speed} kmph</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Coupler Type</p>
                        <p className="text-white font-semibold text-sm">{wagon.couplerType}</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Bearing Type</p>
                        <p className="text-white font-semibold text-sm">{wagon.bearingType}</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-2 border border-white/10">
                        <p className="text-yellow-300 text-sm mb-1">Braking System</p>
                        <p className="text-white font-semibold text-sm">{wagon.brakingSystem}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-300 text-sm text-center">
              <span className="text-yellow-400 font-semibold">📝 Note:</span> For detailed specifications of any specific wagon type, please refer to the official railway technical manuals.
            </p>
            <div className="mt-4 text-gray-400 text-sm text-center space-y-1">
              <p>* for 9&lsquo;6&rdquo; high container</p>
              <p># A car-10 & B Car-35</p>
              <p>$ Empty (without trucks)</p>
              <p>& 100-Empty & Loaded</p>
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

export default WagonData

