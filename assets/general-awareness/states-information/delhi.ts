export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const delhiHeaderLine = 'DELHI' as const

export const delhiBasicFacts = [
  { label: 'CAPITAL', value: 'New Delhi (Yamuna River)' },
  { label: 'ESTABLISHED', value: 'February 1, 1992' },
  { label: 'CHIEF MINISTER', value: 'Arvind Kejiriwal' },
  { label: 'GOVERNOR', value: 'Anil Baijal' },
  { label: 'RULING PARTY', value: 'Aam Admi Party (AAP)' },
  { label: 'HIGH COURT', value: 'Delhi, 1966' },
  { label: 'STATE ANIMAL', value: 'Nilgai' },
  { label: 'STATE BIRD', value: 'House Sparrow' },
  { label: 'STATE TREE', value: 'Flamboyant' },
  { label: 'STATE FLOWER', value: 'Alfalfa' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Hindi (State Language),     	Punjabi,     	Urdu,     	English',
  },
] as const

export type DelhiExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const delhiExtendedFacts: readonly DelhiExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'text', value: '---' },
  {
    label: 'BOUNDARY STATES (2)',
    kind: 'ordered',
    items: ['Haryana', 'Uttar Pradesh'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '1484 sq. km (2nd),                   		Density: 11,297 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '1,67,87,941 (1st), \t\t	Male = 89,87,326 & Female = 78,00,615 \nMale : Female = 1000 : 866',
  },
  { label: 'LITERACY', kind: 'text', value: '87.40%' },
  { label: 'ASSEMBLY', kind: 'text', value: '70' },
  { label: 'LOK SABHA', kind: 'text', value: '7' },
  { label: 'RAJYA SABHA', kind: 'text', value: '3' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Diwali',
      'Mahavir Jayanti',
      'Guru Nayak Jayanti',
      'Durga Puja',
      'Holi',
      'Raksha Bandhan',
      'Chauth',
      'Krishna Janmastami',
      'Maha Shivaratri',
      'Eid ul – Fitr',
      'Moharram',
      'Buddha Jayanti',
      'Lohri',
    ],
  },
  {
    label: 'DISTRICTS (11)',
    kind: 'ordered',
    items: [
      'Central Delhi',
      'East Delhi',
      'New Delhi',
      'North Delhi',
      'North East Delhi',
      'North West Delhi',
      'South West Delhi',
      'South Delhi',
      'South East Delhi',
      'West Delhi',
      'Shadara',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'New Delhi',
      'Palam',
      'Mehrauli',
      'Shahdara',
      'Alipur',
      'Badaali',
      'Nazafgarh',
      'Narela',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Lotus Temple', location: '---' },
  { name: 'Akshardham Temple', location: '---' },
  { name: 'Laxmi Narayan Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '---', year: '---', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Bhagalpur Thermal Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = ['Yamuna'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: '----', river: '---', location: '-----' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: '-----', river: '---', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/VALLEY/CAVES:' as const
export const waterfallsBeachRows = [{ name: '----', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: ' ----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type DelhiNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly DelhiNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = 'Nil' as const
export const nationalParksRows: readonly DelhiNpWlsRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly DelhiNpWlsRow[] = [
  {
    name: 'Asola Bhatti (Indira Priyadarsini)W.L.S',
    year: '1992',
    location: 'Delhi',
  },
  {
    name: 'Nazafgarh Drain Bird Sanctuary',
    year: '---',
    location: 'Delhi',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  { name: 'National Rail Museum', city: 'New Delhi' },
  { name: 'National Sports Museum', city: 'New Delhi' },
  { name: 'National War Memorial', city: 'New Delhi' },
  { name: 'National Tribal Museum', city: 'New Delhi' },
  { name: 'Indian Airforce Museum', city: 'New Delhi' },
  { name: 'National Police Museum', city: 'New Delhi' },
] as const

export type DelhiAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows: readonly DelhiAirportRow[] = [
  {
    name: 'Indira Gandhi International Airport',
    city: 'Delhi NCR',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly DelhiAirportRow[] = [
  {
    name: 'Safdarjung Airport',
    city: 'Safdarjung',
    category: 'Domestic',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: 'Feroz Shah Kotla Ground (Cricket)',
    location: '---',
  },
  {
    name: 'Jawahar Lal Nehru Stadium (Cricket & Football)',
    location: '---',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'New Delhi',
  },
  { name: 'Indian Institute of Technology (IIT)', location: '---' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'Indira Gandhi National Open University',
    location: 'New Delhi',
  },
  {
    name: 'Guru Gobind Singh Indraprastha University',
    location: 'New Delhi',
  },
  {
    name: 'Indira Gandhi National Open University',
    location: 'New Delhi',
  },
  { name: 'Jamia Hamdard University', location: 'New Delhi' },
  {
    name: 'South Asian (SAARC) University',
    location: 'New Delhi',
  },
  {
    name: 'The Energy & Resources Institute (TERI) University',
    location: '---',
  },
] as const

export const famousPersonsOrdered = [
  'Anna Hazare – Abinava Gandhi',
  'N Krishna Nair – Delhi Gandhi',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  "Lotus Temple (Temple with a flower like design),\nGandhi Sadan (Birla House – where Gandhiji was assassinated in 1948),\nRajghat (Samadhi of Mahatma Gandhi on the bank of Yamuna river),\nRed Fort (a red stone structure built by Sha Jahan on the bank of Yamuna river),\nShaktisthal (Samadhi of Indira Gandhi),\nQutab Minar,   India Gate,    Shantivan (Samadhi of Jawahar Lal Nehru),\nVir Bhumi (Samadhi of Rajiv Gandhi),\nVijay Ghat (Samadhi of Lal Bahadur Shastri),\nHumayun’s Tomb" as const

export const miscellaneousBlocks = [
  {
    heading: 'New Delhi',
    lines: ['1.\tCity of Rallies'],
  },
  {
    heading: 'New Delhi',
    lines: [
      '1.\tAll India Malaria Research Institute',
      '2.\tAll India Institute of Ayurveda',
      '3.\tAll India Football Federation (AIFF)',
      '4.\tArchaeological Survey of India (ASI)',
      '5.\tIndian Institute of Mass Communications',
      '6.\tCentral Road Research Institute',
      '7.\tIndian National Scientific Documentation Centre',
      '8.\tNational Institute of Communicable Diseases',
      '9.\tSteel Authority of India Limited (SAIL)',
      '10.\tThe Indian Council of Agriculture Research',
      '11.\tNational Physical Laboratory',
      '12.\tIndian Council of Medical Research',
      '13.\t Vallabhai Patel Chest Institute',
      '14.\t International Institute of Hotel Management',
      '15.\t Food Safety and Standards Authority of India (FSSAI)',
      '16.\t Indian Agricultural Research Institute',
      '17.\t Indian Council of Food & Agricuture',
      '18.\t Northern Railway Headquarters',
      '19.\t Indian Agricultural Research Institute',
      '20.\t Indian Institute of Foreign Trade',
      '21.\t Indian Institute of Mass Communication',
      '22.\t Indian Statistical Institute',
      '23.\t Institute of Liver and Biliary Sciences',
      '24.\t National Institute of Fashion Technology',
      '25.\t National Museum Institute of the History of Art, Conservation & Museology',
      '26.\t National University of Educational Planning & Administration',
      '27.\t School of Planning and Architecture',
      '28.\t Shri Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeetha',
      '29.\t Central Council for Research in Yoga & Naturopathy (CCRYN)',
      '30.\t National School of Drama',
      '31.  National Defence College',
      '32.\t National Data Centre of National Informatics Centre = New Delhi + Hyderabad + Pune +Bubaneshwar',
      '33.\t India International Convention & Expo Centre (IICC)',
      '34.\t National Council of Educational Research & Training (NCERT)',
      '35.\t Cyber Prevention Awareness and Detection (CYPAD) Centre',
      '36.\t National Yoga Olympiad of School Children',
      '37.\t National Consumer Disputes Reddressal Commission (NCDRC)',
      '38.\t UIDAI Aadhar Seva Kendra',
      '39.\tNational Centre for Agricultural Economics and Policy Research',
      '40.\tFood Corporation of India (FCI)',
      '41.\tNational Rail Museum',
      '42.\tPension Fund Regulatory and Development Authority (PFRDA)',
    ],
  },
] as const
