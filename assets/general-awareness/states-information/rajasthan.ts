export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const rajasthanHeaderLine = 'RAJASTHAN' as const

export const rajasthanBasicFacts = [
  { label: 'CAPITAL', value: 'Jaipur' },
  { label: 'ESTABLISHED', value: '26 January 1950' },
  { label: 'CHIEF MINISTER', value: 'Ashok Gehlot' },
  { label: 'GOVERNOR', value: 'Kalraj Mishra' },
  { label: 'RULING PARTY', value: 'INC' },
  { label: 'HIGH COURT', value: 'Jodhpur (Sun City)' },
  { label: 'STATE ANIMAL', value: 'Camel and Chikara' },
  { label: 'STATE BIRD', value: 'Great Indian Bustard' },
  { label: 'STATE TREE', value: 'Khejri,' },
  { label: 'STATE FLOWER', value: 'Rohira' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: 'Basketball' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Rajastani (State Language),     Hindi,     Gujarati,     English,     Dhundhari,      Mewari,   Mewati,     Harauti,',
  },
] as const

export type RajasthanExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const rajasthanExtendedFacts: readonly RajasthanExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Gopikaleela',
      'Chakri',
      'Tippani',
      'Ganguar',
      'Khayal',
      'Teratali (Folk Dance)',
      'Ghoomar (Classical dance)',
      'Gair (Folk dance)',
      'Chamar',
      'Panihari',
      'Chari',
      'Bhavai',
      'Kalbeliya',
      'Ginad',
      'Suisini (Folk Dance)',
    ],
  },
  {
    label: 'BOUNDARY STATES (7)',
    kind: 'ordered',
    items: ['Madhya Pradesh', 'Gujarat', 'Delhi', 'Haryana', 'Uttar Pradesh', 'Punjab', 'Pakistan'],
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '6,85,48,437 (7th) \t\tMales = 3,55,50,997 & Females = 3,29,97,440 \n      								Male : Female = 1000 : 926   ',
  },
  { label: 'LITERACY', kind: 'text', value: '67%' },
  { label: 'ASSEMBLY', kind: 'text', value: '200' },
  { label: 'LOK SABHA', kind: 'text', value: '25' },
  { label: 'RAJYA SABHA', kind: 'text', value: '10' },
  {
    label: 'TRIBES',
    kind: 'text',
    value: 'Myna,     Bhillulu,     Gujjarulu',
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Ghuamar',
      'Gangaur',
      'Chakri',
      'Jhulan',
      'Leela',
      'Jhuma',
      'Susini',
      'Ghapal',
      'Panihari',
      'Giand',
      'Camesl Festival – Bikaner',
      'Christamas',
      'Mahavir Fair',
      'Janbeswari Fair',
      'Elephant Festival',
    ],
  },
  {
    label: 'DISTRICTS (33)',
    kind: 'ordered',
    items: [
      'Hanumanagar',
      'Ajmer',
      'Alwar',
      'Bikaner',
      'Barmer',
      'Banswara',
      'Baran',
      'Bundi',
      'Bhilwara',
      'Churu',
      'Chittorgarh',
      'Dausa',
      'Dholpur',
      'Dungarpur',
      'Jaipur',
      'Ganganagar',
      'Jhunjuhunu',
      'Jalore',
      'Jodhpur',
      'Jaisalmer',
      'Sawai Madhopur',
      'Jhalawar',
      'Karauli',
      'Kota',
      'Nagaur',
      'Pratapgarh',
      'Udaipur',
      'Sikar',
      'Sirohi',
      'Tonk',
      'Rajsamand',
      'Pali',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Chittorgarh',
      'Udaypur',
      'Ajmeer',
      'Jodhpur',
      'Jaisalmer',
      'Bharatpur',
      'Sangeswar',
      'Puskar',
      'Kumbalghad',
      'Sikar',
      'Janthar Manthar',
      'Jalavar',
      'Bikaner',
      'Bilwara',
      'Alwar',
      'Hanumangarh',
      'Sawai',
      'Pali',
      'Madhopur',
      'Gangapur',
      'Bikner – Land of Camels',
      'Kota (Chambal River)',
      'Beawar',
      'Pilani',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Brahma Temple', location: 'Puskar' },
  { name: 'Dilwara Jain Temple', location: 'Mount Abu' },
  { name: 'Mirpur Jain Temple', location: '---' },
  { name: 'Lodurva Jain Temple', location: '---' },
  { name: 'Sarun Mata Temple', location: '---' },
  { name: 'Karni Mata Temple', location: '---' },
  { name: 'Om Shape Temple', location: 'Jodun Pal' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [
  { name: 'Hindustan Zinc Limited', year: 'Udaypur', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Rawatbatt Atomic power plant', year: '---', location: '---' },
  { name: 'Rawattbat Heavy water plant', year: '---', location: '---' },
  { name: 'Chhabra Thermal Power Station', year: '---', location: '---' },
  { name: 'Barsingsar Thermal Power Station', year: '---', location: '---' },
  { name: 'Suratgarh Power Station', year: '---', location: '---' },
] as const

export const riversOrdered = ['Luni,,', 'Banas', 'Kali Sindh', 'Chambal', 'Jawal', 'Mahi'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Sambhar Salt lake', river: '---', location: '\u2014' },
  { name: 'Puskara lake', river: '---', location: '---' },
  { name: 'Pichola lake', river: '---', location: '---' },
  { name: 'Dhebar Lake', river: '---', location: '---' },
  { name: 'Indira Gandhi Canal', river: '---', location: '---' },
  { name: 'Mandor Lake', river: '---', location: '---' },
  { name: 'Mansagar Lake', river: '---', location: '---' },
  { name: 'Rajasmand Lake', river: '---', location: 'Rajasmand ' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Rana Pratap Sagar Dam', river: 'Chambal River', location: 'Rawatbhata' },
  { name: 'Mahi Bajaj Sagar Dam', river: 'Mahi River', location: '---' },
  { name: 'Gandhi Sagar', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [
  { name: 'Hill Fort', location: '---' },
  { name: 'Jaigarh Fort', location: '---' },
  { name: 'Chittargarh Fort', location: '---' },
  { name: 'Bharatpur Fort', location: '---' },
  { name: 'Amber Fort', location: 'Jaipur' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: 'Mount Abu Hill Station', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export type RajasthanTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly RajasthanTigerReserveRow[] = [
  {
    name: 'Ratnambore Tiger Reserve',
    year: '1974',
    location: 'Sawai Madhopur',
  },
  {
    name: 'Sariska Tiger Reserve',
    year: '1979',
    location: 'Alwar District',
  },
  {
    name: 'Mukundra Hills Tiger Reserve',
    year: '2014',
    location: 'Kota, Bundi, Chittoragarh                            and Jhalawar Districts',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export type RajasthanNationalParkRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const nationalParksRows: readonly RajasthanNationalParkRow[] = [
  { name: 'Sariska National Park', year: '1979', location: 'Alwar District' },
  { name: 'Desert National Park', year: '1980', location: 'Near Jaisalmer' },
  { name: 'Keoladeo National Park', year: '1981', location: 'Bharatpur' },
  { name: 'Ranthambore National Park', year: '1981', location: 'Sawai Madhopur' },
  { name: 'Mukndra Hills National Park', year: '2006', location: '--' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Ghana Bird Sanctuary', year: '---', location: 'Bharatpur' },
  { name: 'Shergarh W.L.S', year: '1983', location: '-' },
  { name: 'Kailadevi W.L.S', year: '1983', location: '-' },
  { name: 'Bassi W.L.S', year: '1988', location: '-' },
  { name: 'Sajjangarh W.L.S', year: '1987', location: '-' },
  { name: 'Sita Mata W.L.S', year: '1979', location: '-' },
  { name: 'Kumbalgarh W.L.S', year: '1971', location: '-' },
  { name: 'Bhensrodgarh W.L.S', year: '1983', location: '-' },
  { name: 'Kesarbagh W.L.S', year: '1955', location: '-' },
  { name: ' Todgarh Raoli W.L.S', year: '1983', location: '-' },
  { name: ' Sawai Man Singh W.L.S', year: '1984', location: '-' },
  { name: ' Phulwari Ki Nal W.L.S', year: '1983', location: '-' },
  { name: ' Jaisamand W.L.S', year: '1955', location: '-' },
  { name: ' National Chambal W.L.S', year: '1979', location: '-' },
  { name: ' Ramsagar W.L.S', year: '1955', location: '-' },
  { name: ' Jamwa Ramgarh W.L.S', year: '1982', location: '-' },
  { name: ' Shergarh W.L.S', year: '1983', location: '-' },
  { name: ' Nahargarh W.L.S', year: '1980', location: '-' },
  { name: ' Sariska W.L.S', year: '1955', location: '-' },
  { name: ' Darrah W.L.S', year: '1955', location: '-' },
  { name: ' Ramgarh Vishdhari W.L.S', year: '1982', location: '-' },
  { name: ' Sawai Madhopur W.L.S', year: '1955', location: '-' },
  { name: ' Tal Chhapper Sanctuary', year: '1971', location: '-' },
  { name: ' Van Vihar W.L.S', year: '1955', location: '-' },
  { name: ' Bundh Baratha W.L.S', year: '---', location: '---' },
  { name: ' Jawahar Sagar W.L.S', year: '1975', location: '-' },
  { name: ' Mount Abu W.L.S', year: '1960', location: '-' },
  { name: 'Bandh Bharata W.L.S', year: '1985', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export type RajasthanZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly RajasthanZooRow[] = [
  { name: 'Gulab Bagh and Zoo', city: 'Udaipur' },
  { name: 'Jaipur Zoo', city: 'Jaipur' },
]

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export type RajasthanIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly RajasthanIntlAirportRow[] = [
  {
    name: 'Jaipur International Airport',
    city: 'Jaipur',
    category: 'International',
  },
]

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type RajasthanDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly RajasthanDomesticAirportRow[] = [
  { name: 'Kishangarh Airport', city: 'Ajmer', category: 'Domestic' },
  { name: 'Uttarlai Air Force Station', city: 'Barmer', category: 'Defense' },
  { name: 'Nal Airport', city: 'Bikaner', category: 'Domestic' },
  { name: 'Lalgarh Airport', city: 'Ganganagar', category: 'Domestic' },
  { name: 'Jaisalmer Airport', city: 'Jaisalmer', category: 'Domestic' },
  { name: 'Kolana Airport', city: 'Jhalawar', category: 'Domestic' },
  { name: 'Jodhpur Airport', city: 'Jodhpur', category: 'Domestic' },
  { name: 'Kota Airport', city: 'Kota', category: 'Domestic' },
  { name: 'Phalodi Air Force Station', city: 'Phaloda', category: 'Defense' },
  { name: 'Suratgarh Air Force Station', city: 'Suratgarh', category: 'Defense' },
  { name: 'Maharana Pratap Airport', city: 'Udaipur', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: 'Savai Mansing Cricket stadium',
    location: 'Jaipur',
  },
  {
    name: 'Barkatullah Khan Cricket Stadium',
    location: 'Jodhpur',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  {
    name: 'Malaviya National Institute of Technology (NIT)',
    location: 'Jaipur',
  },
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'Jodhpur',
  },
  { name: 'Indian Institute of Technology (IIT)', location: 'Jodhpur' },
  { name: 'Indian Institute of Management (IIM)', location: 'Udaipur' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'Jagadguru Ramanandacharya Rajastan Sanskrit University',
    location: 'Jaipur',
  },
  {
    name: 'Sardar Patel University of Police, Security & Criminal Justice',
    location: 'Jodhpur',
  },
  {
    name: 'Dr Sarvepalli Radhakrishnan Rajasthan Ayurved University',
    location: 'Jodhpur',
  },
  {
    name: 'Maharana Pratap University of Agriculture & Technology',
    location: 'Udaipur',
  },
  { name: 'Maharaja Ganga Singh University', location: 'Bikaner' },
  {
    name: 'Majaraja Surajmal Brij University',
    location: 'Bharatpur',
  },
  {
    name: 'Maharshi Dayananda Saraswati University',
    location: 'Ajmer',
  },
  {
    name: 'Pandit Deendayal Upadhyaya Shekhawati University',
    location: 'Sikar',
  },
  {
    name: 'Rajasthan Sports University',
    location: 'Jhunjhunu',
  },
] as const

export const famousPersonsOrdered = ['Vidhyadhar Bhattacharya – The Architect of Jaipur'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Thar Desert,             \nWorld Trade Park – Jaipur,       \nAravali Mountain Ranges, \nHawa Mahal – Jaipur,\nJal Mahal – Jaipur,\nGurusikhar Peak' as const

export const miscellaneousBlocks = [
  {
    heading: 'Rajasthan',
    lines: ['1.\tLand of Palaces & Forts'],
  },
  {
    heading: 'Udaipur',
    lines: [
      '1.\tCity of Lakes',
      '2.\tWhite City',
      '3.\tVenice of the East',
      '4.\tCity of Sun Rise or City of Dawn',
      '5.\tWine City of India',
    ],
  },
  {
    heading: 'Jodhpur',
    lines: ['1.\tBlue City', '2.\tSun City'],
  },
  {
    heading: 'Jaisalmer',
    lines: ['1.\tGolden City of India', '2.\tBrown City of India'],
  },
  {
    heading: 'Jaipur',
    lines: ['1.\tPink City'],
  },
  {
    heading: 'Amritsar',
    lines: ['1.\tHoli City'],
  },
  {
    heading: 'Jaipur',
    lines: [
      '1.\tNational Institute of Ayurvda',
      '2.\tLNM Institute of Information Technology',
      '3.\tNational Institute of Ayurveda',
      '4.\tHomeopathy Research Institute',
      '5.\tNorth Western Railway Headquarter',
      '6.\tHaridev Joshi University of Journalism & Mass Communication',
      '7.\tNational Institute of Agriculture Marketing',
    ],
  },
  {
    heading: 'Jodhpur',
    lines: [
      '1.\tArid Forest Research Institute',
      '2.\tFootware Designing and Development Institute',
      '3.\tNational Institute of Fashion Technology',
    ],
  },
  {
    heading: 'Pilani',
    lines: [
      '1.\tCentral Electronics Engineering Research Institute',
      '2.\tBirla Institute of Technology and Science (BITS Pilani)',
    ],
  },
] as const
