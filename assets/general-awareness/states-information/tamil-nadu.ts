export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const tamilNaduHeaderLine = 'TAMIL NADU' as const

export const tamilNaduBasicFacts = [
  { label: 'CAPITAL', value: 'Chennai' },
  { label: 'ESTABLISHED', value: '26 January, 1950' },
  { label: 'CHIEF MINISTER', value: 'M K Stalin' },
  { label: 'GOVERNOR', value: 'Banwarilal Purohit' },
  { label: 'RULING PARTY', value: 'DMK' },
  { label: 'HIGH COURT', value: 'Chennai, 1862' },
  { label: 'STATE ANIMAL', value: 'Nilagiri Tahr,' },
  { label: 'STATE BIRD', value: 'Emerald Dove' },
  { label: 'STATE TREE', value: 'Palmyra Palm' },
  { label: 'STATE FLOWER', value: 'Glory Lily' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: 'Srivilliputhur Andal Temple' },
  { label: 'STATE SONG', value: 'Tamil Thai Valthu (Invocation to Goddess Tamil)' },
  { label: 'STATE SPORT', value: 'Kabaddi' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Tamil (State Language),     English,     Telugu,     Malayalam,     Kannada,     Urdu',
  },
] as const

export type TamilNaduExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const tamilNaduExtendedFacts: readonly TamilNaduExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Bharata Natyam (State Dance)',
      'Karagam (fold dance)',
      'Kalakshetra',
      'Oyilattam',
      'Terukkuttu',
      'Kamandi (Folk Dance)',
      'Devarattam',
      'Peacock dance',
      'Snake dance',
      'Karakattam',
      'Kummi',
      'Kavadi',
      'Kolatam',
    ],
  },
  {
    label: 'BOUNDARY STATES (6)',
    kind: 'ordered',
    items: ['Bay of Bengal', 'Kerala', 'Karnataka', 'Arabian Sea', 'Indian Sea', 'Puducherry'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '1,30,060 sq km (11th),                      Density: 550 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '7,21,47,030 (6th), 		Males = 3,61,37,975 & Females = 3,60,09,055\n    								Male : Female = 1000 : 995',
  },
  { label: 'LITERACY', kind: 'text', value: '80.33%' },
  { label: 'ASSEMBLY', kind: 'text', value: '234' },
  { label: 'LOK SABHA', kind: 'text', value: '39' },
  { label: 'RAJYA SABHA', kind: 'text', value: '18' },
  {
    label: 'TRIBES',
    kind: 'text',
    value:
      'Thodas,     Badaga,     Irula,     Kota,     Kanikara,       Malasar',
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Pongal (Tamizhar Tirunaal)',
      'Aadi Perukku',
      'Mahamagam fest',
      'Kanthuri',
      'Dasara',
      'Karthigai',
      'Navaratri',
      'Karagam',
      'Kavadi',
      'Kummi',
      'Vinayaka Chaturthi',
      'Muaharram',
      'Eid ul – Fitr',
      'Bakrid',
      'Vaikunta Ekadashi',
      'Thimithi – Fire Walking festival',
    ],
  },
  {
    label: 'DISTRICTS (32)',
    kind: 'ordered',
    items: [
      'Coimbattore',
      'Ariyalur',
      'Chennai',
      'Cuddalore',
      'Erode',
      'Dharmapuri',
      'Dindigul',
      'Kanyakumari',
      'Karur',
      'Krishnagiri',
      'Kanchipuram',
      'Madurai',
      'Niligiris',
      'Namakkal',
      'Salem',
      'Nagapattinam',
      'Tiruchirapalli',
      'Theni',
      'Tirunelveli',
      'Thanjavur',
      'Ramanathapuram',
      'Pudukottai',
      'Sivaganga',
      'Tirupur',
      'Perambalur',
      'Thoothukudi',
      'Tiruvallur',
      'Tiruvarur',
      'Virudhunagar',
      'Viluppuram',
      'Tiruvannamalai',
      'Vellore',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Rameswaram',
      'Kodainkenal',
      'Aavadi',
      'Tirupur',
      'Erode',
      'Chengalapattu',
      'Perambur',
      'Tuticoran',
      'Kanchi',
      'Vellore',
      'Thoothukudi',
      'Coimbatore',
      'Dindigu',
      'Hosur',
      'Ranipet',
      'Kumbakonam',
      'Nagercoil',
      'Arakkonam',
      'Tirunelveli',
      'Ooty',
      'Thanjavur',
      'Karur',
      'Sriperubudur',
      'Sivakashi',
      'Salem',
      'Madhurai(Vaiga River)',
      'Coimbatore (Noyyal River)',
      'Tirucharapalli (Kaveri River)',
      'Kanchipuram (Palar River)',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Meenakshi Amman Temple', location: 'Madhurai' },
  { name: 'Brihadeeswar Temple', location: 'Tanjavur' },
  { name: 'Ekambareswar Temple', location: 'Kanchipuram' },
  { name: 'Mahabaleswaram Temple', location: 'Gokarn' },
  { name: 'Rameswaram Temple', location: 'Ramanthapuram' },
  { name: 'Murugan Temple', location: 'Palani' },
  { name: 'Chidambaram Nataraja Temple', location: '---' },
  { name: 'Tiruvannamalai Arunachaleswar Temple', location: '---' },
  { name: 'Andal Temple', location: 'Srivvilliputhur' },
  { name: ' Kazimar Big Mosque', location: 'Madurai' },
  { name: ' Airavateswara Temple', location: 'Darasuram' },
  { name: ' Ranganatha Swamy Temple', location: 'Trichy' },
  { name: 'Shore Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [
  { name: 'Koramadal Fertilizers Factory', year: '---', location: '---' },
  { name: 'Salem Iron & Steel', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Kudankulam Atomic Power Plant', year: '---', location: '---' },
  { name: 'Kalpkkam Atomic Power Plant', year: '---', location: '---' },
  { name: 'Mettor Hydro Power Plant', year: '---', location: '---' },
  { name: 'Kundbi Hydro Power Plant', year: '---', location: '---' },
  { name: 'Ennore Thermal Power Station', year: '---', location: '---' },
  { name: 'Kundha Hydro Power Plant', year: '---', location: '---' },
  { name: 'Neyveli Thermal Power Plant', year: '---', location: '---' },
  { name: 'Tuticorin Thermal Power Plant', year: '---', location: '---' },
  { name: 'Papanashanam Hydro Power Plant', year: '---', location: '---' },
  { name: 'Mayoorakshi Hydro Power Plant', year: '---', location: '---' },
  { name: 'Vasavi Diesel Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Kaveri – Dakshina Ganga',
  'Vaigai',
  'Tamravarni',
  'Amaravati',
  'Ponniyar',
  'Chittar',
  'Vellar',
  'Noyyal',
  'Suruli',
  'Vaipar',
  'Bhavani',
  'Palar',
  'Cheyyar',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Pulicat salt lake', river: '---', location: '---' },
  { name: 'Chembarambakkam Lake', river: '---', location: 'Chennai ' },
  { name: 'Ooty Lake', river: '---', location: 'Nilgiris ' },
  { name: 'Veeranam Lake', river: 'Vadavaru', location: 'Cuddalore ' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Mullaperiyar Dam', river: 'Periyar River', location: '---' },
  { name: 'Hogenakkal Dam', river: 'Dharmapuri', location: '---' },
  { name: 'Pillur Dam', river: '---', location: '---' },
  { name: 'Mettur Dam', river: 'Kaveri River', location: '---' },
  { name: 'Pechparai Reservoir', river: 'Kodayar River', location: '---' },
  { name: 'Perunchani Dam', river: '---', location: '---' },
  { name: 'Thunakadavu Reservoir', river: 'Chalakudy River', location: '---' },
  { name: 'Wellingdon Reservoir', river: '---', location: '---' },
  { name: 'Upper Sholayar Dam', river: '---', location: '---' },
  { name: 'Gundar Reservior', river: '---', location: '---' },
  { name: 'Grand Dam', river: '---', location: '---' },
  { name: 'Vaigai Dam', river: 'Vaigai', location: 'Andipatti ' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Marina Beach', location: '---' },
  { name: 'Thalaiyar Waterfalls', location: 'Dindigul' },
  { name: 'Agaya Gangai Waterfalls', location: 'Salem' },
  { name: 'Kiliyur Waterfalls', location: 'Yercaud' },
  { name: 'Hogenikal Waterfalls', location: '---' },
  { name: 'Kuttaam Waterfalls', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [
  { name: 'Chennai Port', location: '---' },
  {
    name: 'Tutocorin Port(V O Chidabamran Port',
    location: '---',
  },
  { name: 'Kolachal Port', location: '---' },
  { name: 'Ennore Port', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Sittanavasal Cave', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = '' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export type TamilNaduTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly TamilNaduTigerReserveRow[] = [
  {
    name: 'Kalakad – Mundanthurai T.R',
    year: '1989',
    location: 'Tirunelveli & Kanyakumari Districts',
  },
  {
    name: 'Anamalaai Tiger Reserve',
    year: '2009',
    location: 'Coimbatore & Tiruppur',
  },
  {
    name: 'Mudumalai Tiger Reserve',
    year: '2009',
    location: 'Nilgiri District',
  },
  {
    name: 'Sathyamangalam Tiger Reserve',
    year: '2014',
    location: 'Erode District',
  },
  {
    name: 'Meghamalai – Srivilliputhur T.R',
    year: '2021',
    location: '--',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export type TamilNaduNationalParkRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const nationalParksRows: readonly TamilNaduNationalParkRow[] = [
  {
    name: 'Mudumalai National Park',
    year: '1940',
    location: 'Nilgiri District',
  },
  { name: 'Guindy National Park', year: '1976', location: 'Chennai' },
  {
    name: 'Gulf of Mannar Marine N.P',
    year: '1980',
    location: 'Thoothukudi & Ramanathpuram Dt',
  },
  {
    name: 'Anamalai (Indira Gandhi) N.P',
    year: '1989',
    location: 'Coimbatore & Tiruppur',
  },
  {
    name: 'Mukurthi National Park',
    year: '2001',
    location: 'Nilgiri District',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Vedanthangal Bird Sanctuary', year: '1936', location: 'Chengalpattu' },
  { name: 'Cauvery North W.L.S', year: '2014', location: '-' },
  { name: 'Satyamangalam W.L.S', year: '--', location: '-' },
  { name: 'Vaduvor W.L.S', year: '1991', location: '-' },
  {
    name: 'Chitrangudi Bird Sanctuary',
    year: '1989',
    location: 'Ramananthapuram',
  },
  {
    name: 'Kanjirankulam Bird Sanctuary',
    year: '1989',
    location: 'Ramananthapuram',
  },
  { name: 'Gangaikondam Spotted Deer W.L.S', year: '2013', location: '-' },
  { name: 'Mundanuthurai W.L.S', year: '1977', location: '-' },
  { name: 'Vellanadu Blackbuck W.L.S', year: '1987', location: '-' },
  { name: 'Vellode Bird Sanctuary', year: '1997', location: 'Erode' },
  { name: 'Kanyakumari W.L.S', year: '2002', location: '-' },
  { name: 'Oussudu Lake Bird Sanctuary', year: '2015', location: '-' },
  { name: 'Vettangudi Bird Sanctuary', year: '1977', location: '-' },
  { name: 'Nellai W.L.S', year: '2015', location: '-' },
  {
    name: 'Koonthankulam – Kadankulam W.L.S',
    year: '1994',
    location: '-',
  },
  { name: 'Kodaikanal W.L.S', year: '2013', location: '-' },
  { name: 'Grizzled Squirrel W.L.S', year: '1988', location: '-' },
  { name: 'Megamalai W.L.S', year: '2016', location: '-' },
  { name: 'Theerthangal W.L.S', year: '2016', location: '-' },
  { name: 'Sakkarkottai W.L.S', year: '2016', location: '-' },
  { name: 'Karikili W.L.S', year: '1989', location: '-' },
  { name: 'Karaivetti W.L.S', year: '1999', location: '-' },
  { name: 'Point Calimere W.L.S', year: '1967', location: '-' },
  { name: 'Pulicat Lake W.L.S', year: '1980', location: '-' },
  {
    name: 'Melaselvanur – Keelaselvanur W.L.S',
    year: '1998',
    location: '-',
  },
  { name: 'Kalakad W.L.S', year: '1976', location: '-' },
  { name: 'Mudumalai W.L.S', year: '1942', location: '-' },
  {
    name: 'Indira Gandhi (Annamalai) W.L.S',
    year: '1972',
    location: '-',
  },
  {
    name: 'Udayamathandapuram Lake W.L.S',
    year: '1991',
    location: 'Tiruvayur',
  },
  {
    name: 'Suchindram Theroor Bird Sanctuary',
    year: '----',
    location: 'Kanyakumari',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export type TamilNaduZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly TamilNaduZooRow[] = [
  { name: 'Vandalur Zoological Garden', city: 'Chennai' },
  { name: 'Amirthi Zoological Park', city: 'Vellore' },
  { name: 'Chennai Snake Park Trust', city: 'Chennai' },
  { name: 'Madras Crocodile Bank Trust', city: 'Chennai' },
  { name: 'Insects Museum', city: '---' },
  { name: 'Honey and Honeybee Museum ', city: 'Ooty' },
]

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export type TamilNaduIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly TamilNaduIntlAirportRow[] = [
  {
    name: 'Chennai International Airport',
    city: 'Chennai',
    category: 'International',
  },
  {
    name: 'Coimbatore International Airport',
    city: 'Coimbatore',
    category: 'International',
  },
  {
    name: 'Madurai International Airport',
    city: 'Madurai',
    category: 'International',
  },
  {
    name: 'Tiruchirappalli International Airport',
    city: 'Tiruchirappalli',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type TamilNaduDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly TamilNaduDomesticAirportRow[] = [
  { name: 'INS Rajali', city: 'Arakkonam', category: 'Defense' },
  { name: 'Cholavaram', city: 'Chennai', category: 'Defense' },
  { name: 'Tambaram Air Force Station', city: 'Chennai', category: 'Defense' },
  { name: 'Sulur Air Force Station', city: 'Coimbatore', category: 'Defense' },
  { name: 'Hosur Airport', city: 'Hosur', category: 'Private' },
  { name: 'Neyveli Airport', city: 'Neyveli', category: 'Private' },
  {
    name: 'INS Parundu',
    city: 'Ramanathapuram',
    category: 'Defense',
  },
  { name: 'Salem Airport', city: 'Salem', category: 'Domestic' },
  {
    name: 'Thanjavur Air Force Station',
    city: 'Thanjavur',
    category: 'Defense',
  },
  {
    name: 'Thoothukudi Airport',
    city: 'Thoothukudi',
    category: 'Domestic',
  },
  { name: 'Vellore Airport', city: 'Vellore', category: 'Domestic' },
  { name: 'Chettinad Airport', city: 'Karaikudi', category: 'Domestic' },
  { name: 'Ulundurpet Airport ', city: 'Ulundurpet', category: 'Defense' },
  { name: 'Kayatharu Airbase', city: 'Kayatharu', category: 'Defense' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: 'M A Chidambarm Cricket Stadium',
    location: 'Chennai',
  },
  {
    name: 'Chepauk Cricket Stadium',
    location: 'Chennai',
  },
  {
    name: 'Mayor Radhakrishnan Hockey Stadium',
    location: 'Chennai',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'Indian Institute of Technology (IIT)', location: 'Chennai' },
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'Sengiptti (Tanjavur)',
  },
  { name: 'Indian Institute of Management (IIM)', location: 'Tiruchirapalli' },
  {
    name: 'National Institute of Technology (NIT)',
    location: 'Tiruchirapalli (Trichy)',
  },
  {
    name: 'National Institute of Technology (NIT)',
    location: 'Karaikal',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'National Maritime University',
    location: 'Chennai',
  },
  {
    name: 'Tamil Nadu Dr Ambedkar Law University',
    location: 'Chennai',
  },
  {
    name: 'The Tamil Nadu Dr M G R Medical University',
    location: 'Chennai',
  },
  {
    name: 'Tamil Nadu Physical Education & Sports University',
    location: 'Chennai',
  },
  {
    name: 'Tamil Nadu Teachers Education University',
    location: 'Chennai',
  },
  {
    name: 'Tamil Nadu Veterinary and Animal Sciences University',
    location: 'Chennai',
  },
  {
    name: 'Indian Maritime University',
    location: 'Chennai',
  },
  {
    name: 'Vellore Institute of Technology (VIT) University',
    location: 'Vellore + Chennai + Amaravati (AP)',
  },
  {
    name: 'Tamilnadu Agriculture University',
    location: 'Coimbatore',
  },
  {
    name: 'Tamil Nadu Horticulture University',
    location: 'Coimbatore',
  },
  {
    name: 'Ramakrishna Mission Vivekananda University',
    location: 'Coimbatore',
  },
  {
    name: 'Annamalai University',
    location: 'Annamalai Nagar',
  },
  {
    name: 'Manonmaniam Sundaranar University',
    location: 'Tirunelveli',
  },
  {
    name: 'Mother Teresa Women’s University',
    location: 'Kodaikanal',
  },
  {
    name: 'Tamil Nadu Fisheries University',
    location: 'Nagapattinam',
  },
] as const

export const famousPersonsOrdered = [
  'A P J Abdul Kalam,',
  'Sarvepalli Radhakrishnan,',
  'Rakesh Sharma,     Viswanathan,',
  'C N Annadurai (DMK),',
  'M S Subbalaxmi,',
  'M S Swaminathan,',
  'E. V Ramaswamy Naiker – The Socrates of South East Asia,',
  'C Raja Gopalachari – Mango of krishnagiri,',
  'Rugmini Devi Arundela,	Subramanya Bharati,		Thiruvallvar',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Kanya Kumari (Temple of Virgin Goddess situated on the extreme southern tip of India),       \nJallikattu (Bull Taming Contest),\nDodda Betta Peak – 2636 meters,\nPillar Rock  - Kodaikanal,\nSocial Justice Day = 17 September (Birth Anniversary of E V Ramaswamy Periyar),\nMinorities Rights Day = December 18,\nEquality Day = April 14 (Birth Anniversary of Dr. B R Ambedkar),' as const

export const miscellaneousBlocks = [
  {
    heading: 'Tamil Nadu',
    lines: ['1.\tLand of Temples'],
  },
  {
    heading: 'Chennai',
    lines: [
      '1.\tGate Way of South India',
      '2.\tAutomobile Capital of India',
      '3.\tHealthcare Capital of India',
      '4.\tDetroit of Asia',
    ],
  },
  {
    heading: 'Madurai',
    lines: [
      '1.\tAthens of the East',
      '2.\tCity of Festivals',
      '3.\tCity that Never Sleeps',
    ],
  },
  {
    heading: 'Tirunelveli',
    lines: [
      '1.\tCity of Paddy Fields',
      '2.\tOxford City of South India',
      '3.\tHalwa City of India',
    ],
  },
  {
    heading: 'Coimbatore',
    lines: ['1.\tManchestor of South India', '2.\tMotor Sport Capital of India'],
  },
  {
    heading: 'Vaniyambadi',
    lines: ['1.\tLeather City of South India'],
  },
  {
    heading: 'Surat',
    lines: ['1.\tDiamond City of India'],
  },
  {
    heading: 'Kanchipuram',
    lines: ['1.\tCity of  Silks'],
  },
  {
    heading: 'Ooty',
    lines: ['1.\tThe Queen of Nilgiri Hills'],
  },
  {
    heading: 'Ennore Port',
    lines: ['1.\tEnergy Port of Asia'],
  },
  {
    heading: 'Nilgiri',
    lines: ['1.\tBlue Mountains'],
  },
  {
    heading: 'Thanjavur',
    lines: ['1.\tThe Granary of South India'],
  },
  {
    heading: 'Kanyakumari',
    lines: ['1.\tAlexandria of East'],
  },
  {
    heading: 'Sivakashi',
    lines: ['1.\tMini Japan'],
  },
  {
    heading: 'Chennai',
    lines: [
      '1.\tCentral Leather Institute',
      '2.\tT B Research Institute',
      '3.\tStructural Engineering Research Centre',
      '4.\tCentral Institute of Brackish of Brackish Water Aquaculture',
      '5.\tCentral Leather Research Institute',
      '6.\tIndian Institute of Information Technology, Design & Manufacturing',
      '7.\tNational Institute of Fashion Technology',
      '8.\tCentral Institute of Plastics Engineering & Technology',
      '9.\tInstitute of Mathematical Sciences',
      '10.\tDr M G R Educational and Research Institute',
      '11.\tNational Centre for Combuston Research & Development (NCCRD)',
      '12.\tM S Swaminathan Research Foundation',
      '13.\tNeyveli Lignite Corporation',
      '14.\tCloverleaf Flyover',
      '15.\tCyber Post Office',
      '16.\tNational Biodiversity Board',
      '17.\tNational Institute of Wind Energy',
      '18.\tNational Institute of Ocean Technology',
    ],
  },
  {
    heading: 'Coimbatore',
    lines: [
      '1.\tSouth India Textile Research Association',
      '2.\tSardar Vallabhai Patel International School of Textilies & Management',
      '3.\tAirforce Administrative College',
      '4.\tCentral Sugarcane Breeding Institute',
      '5.\tSalim Ali Centr for Ornithology and Natural History',
      '6.\tInstitute of Forest Genetics and Tree Breedig',
      '7.\tCentral Sugarcane Research Institute',
      '8.\tICAR – Sugarcane Breeding Institute (ICAR – SBI)',
    ],
  },
  {
    heading: 'Avadi',
    lines: [
      '1.\tHeavy Vehicles Tank Factory (War Tanks)',
      '2.\tHelicoptor Training School',
    ],
  },
  {
    heading: 'Tanjavur',
    lines: ['1.\tIndian Institute of Crop Processing Technology'],
  },
  {
    heading: 'Salem',
    lines: [
      '1.\tIndian Institute of Handloom Technology',
      '2.\tVinayaka Mission’s Research Foundation',
    ],
  },
  {
    heading: 'Ooty',
    lines: ['1.\tRadio Astronomy Centre'],
  },
  {
    heading: 'Perambur',
    lines: ['1.\tIntegral Coach Factory (Rail Bhogi, AC Coach)'],
  },
  {
    heading: 'Karaikudi',
    lines: ['1.\tCentral Electro Chemical Research Institute'],
  },
  {
    heading: 'Dindigul',
    lines: ['1.\tGandhigram Rural Institute'],
  },
] as const
