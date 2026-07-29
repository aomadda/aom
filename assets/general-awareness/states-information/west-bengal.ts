export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const westBengalHeaderLine = 'WEST BENGAL' as const

export const westBengalBasicFacts = [
  { label: 'CAPITAL', value: 'Kolkata (Hoogly River)' },
  { label: 'ESTABLISHED', value: '26 January, 1950' },
  { label: 'CHIEF MINISTER', value: 'Mamata Benerjee' },
  { label: 'GOVERNOR', value: 'Jagadish Dhankar' },
  { label: 'RULING PARTY', value: 'All India Trinamool Congress (AITC)' },
  { label: 'HIGH COURT', value: 'Kolkata' },
  { label: 'STATE ANIMAL', value: 'Fishing Cat' },
  { label: 'STATE BIRD', value: 'White Breasted Kingfisher' },
  { label: 'STATE TREE', value: 'Devil Tree' },
  { label: 'STATE FLOWER', value: 'Night – flowering Jasmine' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Bengali (State Language),     Hindi,     English,     Nepali',
  },
] as const

export type WestBengalExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const westBengalExtendedFacts: readonly WestBengalExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Chau (folk dance)',
      'Baul dance',
      'Kir – tan',
      'Gaudiya Nritya (classical dance)',
      'Gambhira',
      'Jatra',
      'Kathi',
    ],
  },
  {
    label: 'BOUNDARY STATES (9)',
    kind: 'ordered',
    items: [
      'Jharkhand',
      'Bihar',
      'Odisha',
      'Sikkim',
      'Assam',
      'Bay of Bengal',
      'Nepal',
      'Bhutan',
      'Bangladesh',
    ],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '88,752 sq km (14th),            \tDensity: 1029 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '9,13,47,736 (4th), \t\tMale = 4,68,09,027 & Female = 4,44,67,088\nMale : Female = 1000 : 947',
  },
  { label: 'LITERACY', kind: 'text', value: '77.08%' },
  { label: 'ASSEMBLY', kind: 'text', value: '295' },
  { label: 'LOK SABHA', kind: 'text', value: '42' },
  { label: 'RAJYA SABHA', kind: 'text', value: '16' },
  {
    label: 'TRIBES',
    kind: 'text',
    value: 'Santhalu,      Oraon,     Kora,      Tamang,       Sabar',
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Charakh',
      'Poila',
      'Baishaki',
      'Boi Mela',
      'Durga Puja',
      'Vasant Panchami',
      'Holi',
      'Laxmi Puja',
      'Id – Ul – Fitr',
      'Kali Puja',
      'Shivaratri',
      'Ganesh Chaturti',
      'Diwali',
      'Guru Purnima',
      'Budha Purnima',
      'Christamas',
    ],
  },
  {
    label: 'DISTRICTS (23)',
    kind: 'ordered',
    items: [
      'Paschim Bardhaman',
      'Alipurduar',
      'Bankura',
      'Birbhum',
      'Cooch',
      'Dakshin Dinajpur',
      'Kalimpong',
      'Darjeeling',
      'Hooghly',
      'Behar',
      'Purba Medinipur',
      'Jalpaiguri',
      'Jhargram',
      'Kolkata',
      'Nadia',
      'Paschim Medinipur',
      'Maldah',
      'Murshidabad',
      'Purulia',
      'North 24 Paraganas',
      'Howrah',
      'South 24 Parganas',
      'Uttar Dinajpur',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Kharagpur',
      'Sheharanpur',
      'Raniganj',
      'Barakpur',
      'Chitterajan',
      'Beluru',
      'Howrah',
      'Asansol',
      'Murshidabad',
      'Sealdah',
      'Bandel',
      'Siliguri',
      'Durgapur',
      'Jadhavpur',
      'Bardhaman',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '-------', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [
  { name: 'Durgapur Iron & Steel', year: '---', location: '---' },
  { name: 'Haldia Oil Refinery', year: '---', location: '---' },
  { name: 'Iron & Steel Plant', year: '---', location: 'Kulti' },
  { name: 'Asanol Coal Mine', year: '---', location: '---' },
  { name: 'Ranigunj Coal Mine', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLATNS:' as const
export const powerPlantsRows = [
  { name: 'Mayurakshi Hydro Power Plant', year: '---', location: '---' },
  { name: 'Farakka Thermal Power Plant', year: '---', location: '---' },
  { name: 'Kolaghat Thermal Power Plant', year: '---', location: '---' },
  { name: 'Barkeshwar Thermal Power Plant', year: '---', location: '---' },
  { name: 'Durgapur Steel Thermal Power Plant', year: '---', location: '---' },
  { name: 'Bandil Thermal Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Damordar',
  'Hugli',
  'Bhagirathi',
  'Mayurakshi',
  'Kangsbati',
  'Torsha',
  'Jaldhaka',
  'Subarnarekha',
  'Mahananda',
  'Ajay',
  'Teesta',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Rindra Sarovar Lake', river: '---', location: '---' },
  { name: 'Nalbel Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Farakka barrage', river: '---', location: '---' },
  { name: 'Damodar project', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: 'Digha Beach', location: '---' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: 'Halda Port', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Darjeeling Hills', location: '---' },
  { name: 'Siliguri Hills', location: '---' },
  { name: 'Ajodhya Hiils', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type WestBengalNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows: readonly WestBengalNpWlsRow[] = [
  { name: 'Sundarbans Tiger Reserve', year: '1974', location: 'South 24 Paraganas' },
  { name: 'Buxa Tiger Reserve', year: '1983', location: 'Alipurduar District' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export const nationalParksRows: readonly WestBengalNpWlsRow[] = [
  { name: 'Sundarbans National Park', year: '1984', location: 'South 24 Paraganas' },
  { name: 'Neora Valley National Park', year: '1986', location: 'Kalimpong District' },
  { name: 'Singalila National Park', year: '1986', location: 'Darjeeling District' },
  { name: 'Buxa National Park', year: '1992', location: 'Jalpaiguri District' },
  { name: 'Gorumara National Park', year: '1994', location: 'Jalpaiguri District' },
  { name: 'Jaldapara National Park', year: '2012', location: 'Alipurduar District' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly WestBengalNpWlsRow[] = [
  { name: 'Jaldapara W.L.S', year: '---', location: '---' },
  { name: 'Mahananda W.L.S', year: '1976', location: '-' },
  { name: 'Chapramari W.L.S', year: '1976', location: '-' },
  { name: 'Haliday Island W.L.S', year: '1976', location: '-' },
  { name: 'Chintamani Kar Bird Sanctuary', year: '1982', location: '-' },
  { name: 'Ballavpur W.L.S', year: '1977', location: '-' },
  { name: 'Lothian Island W.L.S', year: '1976', location: '-' },
  { name: 'Sajnakhal W.L.S', year: '1976', location: '-' },
  { name: 'Rasikbil Bird Sanctuary', year: '---', location: 'Coochbehal' },
  { name: 'Bethuadahari W.L.S', year: '1980', location: '-' },
  { name: 'Bibuthi Bhushan W.L.S', year: '1980', location: '-' },
  { name: 'Buxa W.L.S', year: '1986', location: '-' },
  { name: 'Jorepokhri Salamander W.L.S', year: '1985', location: '-' },
  { name: 'Raiganj/Kulik Bird Sanctuary', year: 's1985', location: '-' },
  { name: 'Ramnabagan W.L.S', year: '1981', location: '-' },
  { name: 'Senchal W.L.S', year: '1976', location: '-' },
  { name: 'West Sundarban W.L.S', year: '2013', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  { name: 'Alipore Zoological Garden', city: 'Kolkata' },
  { name: 'Padmaja Naidu Himalayan Zoological Park', city: 'Darjeeling' },
  { name: 'Marble Palace Zoo', city: 'Kolkata' },
  { name: 'Victoria Memorial Hall', city: 'Kolkata' },
  { name: 'Birla Industrial Technological Museum', city: 'Kolkata' },
  { name: 'Smaranika Tram Museum', city: 'Kolkata/2014' },
] as const

export type WestBengalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows: readonly WestBengalAirportRow[] = [
  {
    name: 'Netaji Subhas Chandra Bose International Airport',
    city: 'Kolkata',
    category: 'International',
  },
  {
    name: 'Bagdogra International Airport',
    city: 'Siliguri',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly WestBengalAirportRow[] = [
  { name: 'Burnpur Airport', city: 'Asansol', category: 'Private' },
  { name: 'Balurghat Airport', city: 'Balurghat', category: 'Domestic' },
  { name: 'Barrackpore Air Force Station', city: 'Barrackpore', category: 'Defense' },
  { name: 'Behala Airport', city: 'Behala', category: 'Domestic' },
  { name: 'Cooch Behar Airport', city: 'Cooch Behar', category: 'Domestic' },
  { name: 'Kazi Nazrul Islam Airport', city: 'Durgapur', category: 'Domestic' },
  { name: 'Hasimara Air Force Station', city: 'Hasimara', category: 'Defense' },
  { name: 'Kanchrapara Airfield', city: 'Kanchrapara', category: 'Defense' },
  { name: 'Kalaikunda Air Force Station', city: 'Kharagpur', category: 'Defense' },
  { name: 'Malda Airport', city: 'Malda', category: 'Domestic' },
  { name: 'Panagarh Airport', city: 'Panagarh', category: 'Defense' },
  { name: 'Charra Airfield', city: 'Purulia', category: 'Defense' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  { name: 'Eden Gardens (Cricket)', location: 'Kolkata' },
  { name: 'Salt Lake Stadium', location: 'Kolkata' },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'Indian Institute of Management (IIM)', location: 'Kolkata' },
  { name: 'National Institute of Technology (NIT)', location: 'Durgapur' },
  { name: 'Indian Institute of Technology (IIT)', location: 'Kharagpur' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'Ravindra  Bharati  Central University', location: 'Kolkata' },
  { name: 'Rabindra Bharati University', location: 'Kolkata' },
  { name: 'Ramakrishna Mission Vivekananda University', location: 'Belur' },
  { name: 'Visva – Bharati University', location: 'Shantiniketan' },
] as const

export const famousPersonsOrdered = [
  'Swami Vivekananda',
  'Ravindranath Tagore',
  'Pranab Mukerjee',
  'Jyotibasu',
  'Asha poornima devi',
  'Bipin Chandra Pal – Bengal Tiger',
  'B C Roy',
  'C R Das – Deshabandhu',
  'Saurav Ganguly – Bengal Tiger',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  "Demand for New State – Gorkhaland,\nSandakphu Peak – 3636 meters,\nRamakrishna Mission – Belur,\nSiliguri Corridor – Chicken's Neck" as const

export const miscellaneousBlocks = [
  {
    heading: 'Kolkata',
    lines: [
      '1.\tCity of Palaces',
      '2.\tCity of Joy',
      '3.\tCutltural Capital of India',
      '4.\tCity of Buildings',
      '5.\tCity of Castles',
      '6.\t6.\tHeaven of the Aged',
      '7.\tSt. Petersburg of East',
    ],
  },
  {
    heading: 'Siliguri',
    lines: ['1.\tThe Gate Way of Eastern India', '2.\tCity of Hospitality'],
  },
  {
    heading: 'Darjeeling',
    lines: ['1.\tQueen of Hills'],
  },
  {
    heading: 'Asansol',
    lines: ['1.\tLand of Black Diamond'],
  },
  {
    heading: 'Malda',
    lines: ['1.\tMango City'],
  },
  {
    heading: 'Damodar River',
    lines: ['1.\tSorrow of Bengal'],
  },
  {
    heading: 'Kolkata',
    lines: [
      '1.\tBotanical survey of  India',
      '2.\tZoological Survey of  India',
      '3.\tIndian Institute of Chemical Biology',
      '4.\tIndian Jute Industries Research Association',
      '5.\tAll India Institute of Hygiene & Public Health',
      '6.\tCentral Drug Laboratory',
      '7.\tChittaranjan Cancer Research Centre',
      '8.\tSchool of Trophical Medicine',
      '9.\tInternational Institute of  Hotel Management',
      '10.\t Coal India Limited (CIL)',
      '11.\t Indian Institute of Science Education and Research',
      '12.\t Saha Institute of Nuclear Physics',
      '13.\t Indian Association for the Cultivation of Sciences',
      '14.\t S N Bose National Centre for Basic Sciences',
      '15.  Variable Energy Cyclotron Centre',
      '16.\t Central Glass and Ceramic Research Institute',
      '17.\t Indian Institute of Chemical Biology',
      '18.\t Central Research Institute for Jute and Allied Fibers',
      '19.\t Indian Centre for Space Physics',
      '20.\t Finger Print Bureau',
      '21.\t Satyajit Ray Film and Television Institute',
      '22.\t Flood Forecasting & Early Warning System (FFEWS)',
    ],
  },
  {
    heading: 'Durgapur',
    lines: [
      '1.\tCentral Mechanical Engineering Research Institute',
      '2.\tCentral Mechanical Engineering Research Institute',
    ],
  },
  {
    heading: 'Kharagpur',
    lines: ['1.\tNational Digital Library of India (NDLI)'],
  },
  {
    heading: 'Jadhavpur',
    lines: ['1.\tCentral Glass and Ceramic Research Institute'],
  },
  {
    heading: 'Haringhata',
    lines: ['1.\tBidan Chandra Krishi Viswavidyalaya'],
  },
  {
    heading: 'Kalyani',
    lines: ['1.\tNational Institute of Biomedical Genomics'],
  },
  {
    heading: 'Chittaranjan',
    lines: ['1.\tChittaranjan Locomotive Works'],
  },
  {
    heading: 'Darjeeling',
    lines: ['1.\tHimalayan Mountaineering Institute'],
  },
  {
    heading: 'Dankuni (Hoogly district)',
    lines: ['1.\tDiesel Component Factory'],
  },
] as const
