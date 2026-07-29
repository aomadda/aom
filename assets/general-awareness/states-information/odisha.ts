
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const odishaHeaderLine = 'ODISHA' as const

export const odishaBasicFacts = [
  { label: 'CAPITAL', value: 'Bhubaneswar' },
  { label: 'ESTABLISHED', value: 'April 1, 1936' },
  { label: 'CHIEF MINISTER', value: 'Naveen Patnaik' },
  { label: 'GOVERNOR', value: 'Ganesh Lal' },
  { label: 'RULING PARTY', value: 'Biju Janata Dal (BJD)' },
  { label: 'HIGH COURT', value: 'Cuttak, 1984' },
  { label: 'STATE ANTHEM', value: 'Bande Utkala Janani' },
  { label: 'STATE ANIMAL', value: 'Sambar' },
  { label: 'STATE BIRD', value: 'Indian Roller' },
  { label: 'STATE TREE', value: 'Aswatha' },
  { label: 'STATE FLOWER', value: 'Ashoka' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Odia (State Language),     Santhali,      Driya',
  },
] as const

export type OdishaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const odishaExtendedFacts: readonly OdishaExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Odissi (State Dance)',
      'Sambalpuri Dance (Folk Dance)',
      'Chhau (folk dance)',
      'Bahu kavata',
      'Jaddur',
      'Gotipua',
      'Dalkai',
      'Chhadaya (folk dance)',
      'Ranapa',
      'Danda Nacha',
      'Baagh Naach',
      'Keisabadi',
      'Mahari',
      'Dalkhai',
      'Ghumura',
      'Changu (Folk Dance)',
      'Karma Naach',
    ],
  },
  {
    label: 'BOUNDARY STATES (4)',
    kind: 'ordered',
    items: ['Andhra Pradesh', 'Jharkhand', 'West Bengal', 'Chhattisgarh'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '1, 55, 820 sq km (9th),               Density: 270 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '4,19,74,218 (11th), 		Males = 2,12,12,136 & Females = 2,07,62,082 \n    \t\t\t\t\t\tMale : Female = 1000 : 978',
  },
  { label: 'LITERACY', kind: 'text', value: '73.45%' },
  { label: 'ASSEMBLY', kind: 'text', value: '147' },
  { label: 'LOK SABHA', kind: 'text', value: '21' },
  { label: 'RAJYA SABHA', kind: 'text', value: '10' },
  {
    label: 'TRIBES',
    kind: 'ordered',
    items: [
      'Chenchu',
      'Santhal',
      'Chengu',
      'Oran',
      'Bagata',
      'Baiga',
      'Khond',
      'Munda',
      'Ho',
      'Kisan',
    ],
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Rath Yatra – Puri',
      'Shraban Purnima',
      'Ashokastami',
      'Chandan yatra',
      'Konark Festival',
      'Nabakalebara',
      'Makar',
      'Dola Yatra',
      'Baliyatra Festival',
      'Naukhai Festival',
      'Bhaijiuntia',
      'Phangun',
      'Puni',
    ],
  },
  {
    label: 'DISTRICTS (30)',
    kind: 'ordered',
    items: [
      'Jagatsinghpur',
      'Angul',
      'Boudh',
      'Bhadrak',
      'Balangir',
      'Nabarangpur',
      'Balasore',
      'Cuttack',
      'Debagarh',
      'Dhenkanal',
      'Sundargarh',
      'Ganjam',
      'Gajapati',
      'Naupada',
      'Nayagarh',
      'Jharsuguda',
      'Jajpur',
      'Khordha',
      'Kendujpur',
      'Kalahandi',
      'Kandhamal',
      'Koraput',
      'Kednujhar',
      'Kalahandi',
      'Kandhamal',
      'Kendrapara',
      'Malkangiri',
      'Koraput',
      'Sambalpur',
      'Subarnapur',
      'Mayurbhanj',
      'Puri',
      'Rayagada',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Mayurbhanju',
      'Baleswar',
      'Cuttack',
      'Puri',
      'Brahmapur',
      'Bhadrak',
      'Baripada',
      'Rourkela',
      'Bolangir',
      'Cuttak (Mahanadi River)',
      'Daringbadi (Kashmir of Odisha)',
      'Sambalpur (Mahanadi River)',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Sun Temple', location: 'Konark' },
  { name: 'Jagannath Temple', location: 'Puri' },
  { name: 'Lingaraja Temple', location: 'Bubaneswar' },
  { name: 'Maa Sarala Temple', location: '---' },
  { name: 'Maa Tarini Temple', location: '---' },
  { name: 'Muktheswara Temple', location: '---' },
  { name: 'Dhauli Buddhist Temple', location: '---' },
  { name: 'Raja Rani Temple', location: '---' },
  { name: 'Pabaneswar Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [
  { name: 'Rourkela Steel Plant', year: '---', location: '---' },
  { name: 'Magnitogorsk Iron & Steel Company', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Hirakud Hydro Power Plant', year: '---', location: '---' },
  { name: 'Thalcheru Thermal Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Mahanadi – Sorrow of Odisha',
  'Nagavali',
  'Brahmani',
  'Baitarani',
  'Rushikulya',
  'Sabari',
  'Vanshadhara',
  'Kolab',
  'Subarnarekha',
  'Budhabalanga',
  'Indravati',
  'Tel',
  'Salandi',
  'Koina',
  'Bhargavi',
  'Daya',
  'Devi',
  'Sileru',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Chilaka lake', river: '---', location: 'Puri' },
  { name: 'Kanjia Lake', river: '---', location: 'Bhubaneswar' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Hirakud Reservoir', river: '---', location: '---' },
  { name: 'Hirakud Dam', river: 'Mahanadi River', location: '---' },
  { name: 'Balimela Reseroir', river: 'Sileru River', location: '---' },
  {
    name: 'Rukura Medium Irrigation Dam Project',
    river: 'Sundargarh',
    location: '---',
  },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Joranda Waterfalls', location: 'Mayurbhanj' },
  { name: 'Khandadhar Waterfalls', location: 'Sundargarh' },
  { name: 'Barehipani Waterfalls', location: 'Mayurbhanj' },
  { name: 'Duduma Waterfalls', location: 'Mayurbhanj' },
  { name: 'Gahirmatha Beach', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS/:' as const
export const portsPeakRows = [
  { name: 'Paradip Port', location: '---' },
  { name: 'Dhamara Port', location: '---' },
  { name: 'Gopalpur Port', location: '---' },
  { name: 'Subarnarekha Port', location: '---' },
  { name: 'Chandipur Port', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES/PEAK:' as const
export const hillsValleyCavesRows = [
  { name: 'Udayagiri Hills', location: '---' },
  { name: 'Khandagiri Hills', location: '---' },
  { name: 'Mahendra Hills', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export type OdishaTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly OdishaTigerReserveRow[] = [
  { name: 'Similipal Tiger Reserve', year: '1974', location: 'Mayurbhanj District' },
  { name: 'Satkosia Tiger Reserve', year: '2009', location: 'Angul District' },
]

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksRows = [
  { name: 'Similipal National Park', year: '1980', location: 'Mayurbhanj District' },
  {
    name: 'Bitar Karnika National Park',
    year: '1988',
    location: 'Kendrapara District',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Nandankanan W.L.S', year: '1979', location: '-' },
  { name: 'Similipal W.L.S', year: '1979', location: '-' },
  { name: 'Sunabeda W.L.S', year: '1988', location: '-' },
  { name: 'Satkosia Gorge W.L.S', year: '1976', location: '-' },
  { name: 'Baisipalli W.L.S', year: '1981', location: '-' },
  { name: 'Balukhand Konark W.L.S', year: '1984', location: '-' },
  { name: 'Chandaka Dampara W.L.S', year: '1982', location: '-' },
  { name: 'Chilika (Nalaban) W.L.S', year: '1987', location: '-' },
  { name: 'Bhitarkankia W.L.S', year: '1975', location: '-' },
  { name: 'Hadgarh W.L.S', year: '1978', location: '-' },
  { name: 'Debrigarh W.L.S', year: '1985', location: '-' },
  { name: 'Khalasuni W.L.S', year: '1982', location: '-' },
  { name: 'Badram W.L.S', year: '1962', location: '-' },
  { name: 'Gahirmatha Marine W.L.S', year: '1997', location: '-' },
  { name: 'Karlapat W.L.S', year: '1992', location: '-' },
  { name: 'Kotagarh W.L.S', year: '1981', location: '-' },
  { name: 'Kuldiha W.L.S', year: '1984', location: '-' },
  { name: 'Lakhari Valley W.L.S', year: '1985', location: '-' },
  { name: 'Kapilash W.L.S', year: '---', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = '' as const
export type OdishaZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly OdishaZooRow[] = [
  { name: 'Nandakanan Zoological Park', city: 'Bhubaneswar' },
  { name: 'Deer Park (Mini Zoo)', city: 'Sambalpur' },
]

export const internationalAirportsSectionTitle = 'INTERNATIONAL PARKS:' as const
export const internationalAirportsNote = '' as const
export type OdishaIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly OdishaIntlAirportRow[] = [
  {
    name: 'Biju Patnaik International Airport',
    city: 'Bhubaneswar',
    category: 'International',
  },
]

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type OdishaDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly OdishaDomesticAirportRow[] = [
  { name: 'Savitri Zindal Airport', city: 'Angul', category: 'Private' },
  { name: 'Tusura Airstrip', city: 'Balangir', category: 'Domestic' },
  { name: 'Barbil Tonto Aerodrome', city: 'Barbil', category: 'Private' },
  { name: 'Satibhata Airstrip', city: 'Bargarh', category: 'Domestic' },
  { name: 'Rasgovindpur Airstrip', city: 'Baripada', category: 'Domestic' },
  { name: 'Berhampur Airport', city: 'Berhampur', category: 'Domestic' },
  { name: 'Utkela Airstrip', city: 'Bhawanipatna', category: 'Domestic' },
  { name: 'Charbatia Airbase', city: 'Cuttack', category: 'Defense' },
  { name: 'Dharma Airport', city: 'Dharma', category: 'Domestic' },
  { name: 'Birasal Airstrip', city: 'Dhenkanal', category: 'Domestic' },
  { name: 'Hirakud Airstrip', city: 'Sambalpur', category: 'Domestic' },
  { name: 'Jajpur Airstrip', city: 'Jajpur', category: 'Private' },
  { name: 'Jeypore Airport', city: 'Jeypore', category: 'Domestic' },
  { name: 'Veer Surendra Sai Airport', city: 'Jharsuguda', category: 'Domestic' },
  { name: 'Kendujhar Airstrip', city: 'Kendujhar', category: 'Private' },
  { name: 'Lanjigarh Airstrip', city: 'Lanjigarh', category: 'Private' },
  { name: 'Nawapara Airport', city: 'Nuapada', category: 'Domestic' },
  { name: 'Phulbani Airstrip', city: 'Phulbani', category: 'Private' },
  { name: 'Rairangpur Airport', city: 'Rairangpur', category: 'Domestic' },
  { name: 'Gunupur Airstrip', city: 'Rayagada', category: 'Domestic' },
  { name: 'Therubali Airport', city: 'Rayagada', category: 'Domestic' },
  { name: 'Rourkela Airport', city: 'Rourkela', category: 'Private' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: 'Kalinga Hockey Stadium',
    location: 'Bhubaneswar',
  },
  { name: 'Barabati Cricket Stadium', location: 'Cuttack' },
  {
    name: 'Barabati International Cricket Stadium',
    location: 'Cuttack',
  },
  { name: 'Biju Patnaik Hockey Stadium', location: 'Rourkela' },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'Bhubaneswar',
  },
  { name: 'Indian Institute of Technology (IIT)', location: 'Bhubaneswar' },
  {
    name: 'International Institute of Information Technology (IIIT)',
    location: 'Bhubaneswar',
  },
  { name: 'Indian Institute of Management (IIM)', location: 'Sambalpur' },
  { name: 'National Institute of Technology (NIT)', location: 'Rourkela' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'Central University of Orissa', location: 'Koraput' },
  {
    name: 'Biju Patnaik University of Technology',
    location: 'Rourkela',
  },
] as const

export const famousPersonsOrdered = [
  'Varaha Venkata Giri (V V Giri)',
  'Charan Mahapatra',
  'Panigrahi',
  'Netaji Subash Chandra Bose',
  'Otto Koensberger (Architect of Bubaneswar)',
  'Gopinath Mohanty',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Netaji Subash Chandra Bose Bridge (2.88 km) on Kathajodi river – Cuttak,\nOdisha Day (Utkal Diwas) – April 1st ,\nHoneymoon Island,         		Breakfast Island,			Birds Island,\nCuttack – Millennium City & Silver City,\nJagannath Temple – White Pagoda     Konark Temple- Black Pagoda,\nChilaka Lake (Chilaka Lake is the brackish water lake and is the largest coastal lake,\nThe Chilaka lake in situated in Orissa and is Asia\u2019s largest inland salt water lagoon),' as const

export const miscellaneousBlocks = [
  {
    heading: 'Cuttack',
    lines: [
      '1.\tIndustrial Capital of Odisha',
      '2.\tJudicial Capital of Odisha',
      '3.\tCultural Capital of Odisha',
      '4.\tCentral Rice Research Institute',
      '5.\tSilver City of India',
    ],
  },
  {
    heading: 'Bhubaneswar',
    lines: [
      '1.\tTemple Town of India',
      '2.\tThe Cathedral City of India',
    ],
  },
  {
    heading: 'Rourkela',
    lines: ['1.\tIndustrial Capital of India'],
  },
  {
    heading: 'Bhubaneswar',
    lines: [
      '1.\tEast Coast Railway Headquarters',
      '2.\tNational Institute of Science Education & Research (NISER)',
      '3.\tInstitute of Mathematics & Applications',
      '4.\tNational Skill Training Institute',
      '5.\tNational Data Centre of National Informatics Centre = Bubaneshwar + New Delhi + Hyderabad + Pune',
    ],
  },
  {
    heading: 'Cuttack',
    lines: [
      '1.\tCentral Rice Research Institute (CRRI)',
      '2.\tRegional Spinal Injury Centre',
    ],
  },
  {
    heading: 'Brahmapur',
    lines: [
      '1.\tIndian Institute of Science Education & Research (IISER)',
      '2.\tNational Institute of Science & Technology',
    ],
  },
  {
    heading: 'Manila',
    lines: ['1.\tInternational Rice Research Institute (IRRI)'],
  },
  {
    heading: 'Chandipur',
    lines: ['1.\tAPJ Abdul Kalam Island'],
  },
  {
    heading: 'Damanjodi',
    lines: ['1.\tNational Aluminium Company Limited'],
  },
] as const
