export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const gujaratHeaderLine = 'GUJARAT' as const

export const gujaratBasicFacts = [
  { label: 'CAPITAL', value: 'Gandhi Nagar (Sabarmati River)' },
  { label: 'ESTABLISHED', value: 'May 1, 1960' },
  { label: 'CHIEF MINISTER', value: 'Vijay Bhai Rupani' },
  { label: 'GOVERNOR', value: 'Acharya Dev Vrat' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Ahmedabad (1960)' },
  { label: 'STATE ANIMAL', value: 'Asiatic Lion' },
  { label: 'STATE BIRD', value: 'Greater flamingo' },
  { label: 'STATE TREE', value: 'Mango' },
  { label: 'STATE FLOWER', value: 'Marigold' },
  { label: 'STATE FRUIT', value: 'Mango' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: 'Jai Jai Garavi Gujarat' },
  { label: 'STATE SPORT', value: '' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Gujarati (State Language),     Sindhi,     Urdu,     English,     Marwari,     Kutch,     Vasavi',
  },
] as const

export const stateDancesOrdered = [
  'Dandiya (Folk Dance)',
  'Tippani',
  'Rasila',
  'Jerian',
  'Thamal lasya nritya',
  'Bhavai',
  'Padhar',
  'Ghenaiya',
  'Garba (folk dance)',
  'Raas (folk dance)',
  'Hudo (Folk Dance)',
] as const

export const boundaryStatesOrdered = [
  'Madhya Pradesh',
  'Maharashtra',
  'Dadra Nagar Haveli',
  'Diu – Daman',
  'Rajasthan',
  'Pakistan',
  'Arabian Sea',
] as const

export const tribesOrdered = ['Gujjaru'] as const

export const festivalsOrdered = [
  'Gudi padva',
  'Navaratri',
  'Ganapati festival',
  'Janmastami',
  'Sankranti',
  'Ambaji Fair',
  'Diwali',
  'Madhavpur Mela',
] as const

export const districtsOrdered = [
  'Ahmedabad',
  'Amreli',
  'Anand',
  'Aravalli',
  'Banaskantha',
  'Chhota Udaipur',
  'Bharuch',
  'Bhavnagar',
  'Botad',
  'Dahod',
  'Gir Somanath',
  'Dang',
  'Dwaraka',
  'Gandhinagar',
  'Jamnagar',
  'Junagadh',
  'Kheda',
  'Kutch',
  'Mahisagar',
  'Mehsana',
  'Morbi',
  'Narmada',
  'Navsari',
  'Panchmahal',
  'Patan',
  'Porbandhar',
  'Rajkot',
  'Sabarkanth',
  'Surat',
  'Tapi',
  'Surendranagar',
  'Vadodara',
  'Valsad',
] as const

export const mainCitiesOrdered = [
  'Vadodhara',
  'Junagadh',
  'Bhavnagar',
  'Bhuj',
  'Botad',
  'Anand',
  'Ankaleswar',
  'Gandhidham',
  'Godhra',
  'Rajkot',
  'Junagadh',
  'Nadiad',
  'Patan',
  'Porbandar',
  'Vaslad',
  'Vapi',
  'Amreli',
  'Jamnagar',
  'Surat (Tapti River)',
  'Ahmedabad (Sabarmati River)',
] as const

export type GujaratExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const gujaratExtendedFacts: readonly GujaratExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (7)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '1, 96, 024 sq km (6th),              Density: 308 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '6,04,39,692(9th), 		Males = 3,14,91,260 & Females = 2, 49, 48, 432\n 								Male : Female = 1000 : 918',
  },
  {
    label: 'LITERACY',
    kind: 'text',
    value: '79.31%',
  },
  { label: 'ASSEMBLY', kind: 'text', value: '182' },
  { label: 'LOK SABHA', kind: 'text', value: '26' },
  { label: 'RAJYA SABHA', kind: 'text', value: '11' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (33)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Somanath Dev temple', location: '---' },
  { name: 'Dwarakadish temple', location: 'Dwaraka' },
  { name: 'Taranga Jain Temple', location: '---' },
  { name: 'Palitana Temple', location: '---' },
  { name: 'Jama Mosque', location: 'Champaran' },
  { name: 'Vaasi Jain Temple', location: '---' },
  { name: 'Sun Temple', location: 'Modhera' },
  { name: 'Hutheesing Jain Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [{ name: '------', year: '--', location: '--' }] as const

/** User power-plant sheet lists only name + location (no year column). */

export type GujaratPowerPlantRow = { readonly name: string; readonly location: string }
export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows: readonly GujaratPowerPlantRow[] = [
  { name: 'Kakrapara Atomic power plant', location: 'Vyara' },
  { name: 'Ukai thermal power plant', location: '---' },
  { name: 'Ankaleswar Thermal power plant', location: '---' },
  { name: 'Baroda heavy water plant', location: '---' },
  { name: 'Hazari Hydro Power Plant', location: '---' },
  { name: 'Akrimota Thermal Power Station', location: '---' },
  { name: 'Mundra Thermal Power Plant', location: '---' },
] as const

export const riversOrdered = [
  'Narmada',
  'Tapti',
  'Sabarmati',
  'Mahi',
  'Banas',
  'Saraswati',
  'Aji',
  'Ozat',
  'Rupen',
  'Hiran',
  'Damanganga',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Narayana Sarovaram Lake', river: '---', location: 'Kutch' },
  { name: 'Hamirsar Lake', river: '---', location: 'Kutch' },
  { name: 'Kankaria Lake', river: '---', location: 'Ahmedabad' },
  { name: 'Thol Lake', river: '---', location: 'Mehsana' },
  { name: 'Vastrapur Lake ', river: '---', location: 'Ahmedabad' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Sardar sarovaram dam', river: 'Narmada river', location: '---' },
  { name: 'Dharoi Dam', river: 'Sabarnati River', location: '---' },
  { name: 'Kadana Dam', river: 'Mahi River', location: '---' },
  { name: 'Dantiwada Dam', river: 'Sabarmati River', location: '---' },
  { name: 'Ukai Dam', river: 'Tapti River', location: '---' },
  { name: 'Mitti Dam', river: 'Mitti River', location: 'Abdasa Taluka' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{ name: 'Mandovi Beach ', location: 'Kutch' }] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [
  { name: ' Mundra Port', location: 'Kutch' },
  { name: 'Kandla Port (Renamed as Deendayal Port)', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: 'Junagarh Caves', location: 'Junagarh district' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export type GujaratTigerReserveRow = { readonly name: string; readonly year: string; readonly location: string }
export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly GujaratTigerReserveRow[] = []

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesNote = 'Nil' as const
export const elephantReservesRows = [{ name: '---', year: '---', location: '---' }] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesRows = [
  { name: 'Nalsarovar Bird Sanctuary', year: '2012', location: 'Ahmedabad' },
  { name: 'Thol Lake Wildlife Sanctuary', year: '2021', location: '' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Gir Forest National Park ',
    year: '1975',
    location: 'Gir Somnath & Amreli District',
  },
  {
    name: 'Blackbuck National Park ',
    year: '1976',
    location: 'Velavadar & Bhavnagar Districts',
  },
  {
    name: 'Vansda National Park ',
    year: '1979 ',
    location: 'Navasari District',
  },
  {
    name: 'Marine National Park ',
    year: '1980 ',
    location: 'Gulf of Kutch & Dwaraka',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Jessore Wildlife Sanctuary ', year: '1978', location: '--' },
  { name: 'Kutch Desert Wildlife Sanctuary ', year: '1986', location: '--' },
  { name: 'Jambugodha Wild Life Sanctuary ', year: '1990', location: '--' },
  { name: 'Purna Wildlife Sanctuary ', year: '1990', location: '--' },
  { name: 'Mitiyala Wildlife Sanctuary ', year: '2004', location: '--' },
  { name: 'Ratnamahal Wildlife Sanctuary ', year: '1982', location: '--' },
  { name: 'Rampara Vidi Wildlife Sanctuary ', year: '1988', location: '--' },
  { name: 'Gir Wildlife Sanctuary ', year: '1965', location: '--' },
  { name: 'Nal Sarovar Bird Sanctuary ', year: '1969', location: 'Ahmedabad ' },
  { name: 'Thol Lake Bird Sanctuary', year: '1988', location: 'Mehasana' },
  { name: 'Khijadiya Bird Sanctuary', year: '1981', location: 'Jamnagar' },
  { name: 'Porbandar Lake Bird Sanctuary ', year: '1988 ', location: 'Porbandar ' },
  { name: 'Wild Ass Wildlife Sanctuary ', year: '1973', location: '--' },
  { name: 'Kutch Bustard Sanctuary ', year: '1992', location: '--' },
  { name: 'Narayan Sarovar (Chinkara) W.L.S', year: '1995 ', location: '--' },
  { name: 'Balaram Ambaji Wildlife Sanctuary ', year: '1989 ', location: '--' },
  { name: 'Barda Wildlife Sanctuary ', year: '1979', location: '--' },
  { name: 'Gaga Great Indian Bustard W.LS', year: '1988 ', location: '--' },
  { name: 'Girnar Wildlife Sanctuary ', year: '2008 ', location: '--' },
  { name: 'Higolagadh Nature Reserve W.L.S', year: '1980 ', location: '--' },
  { name: 'Lala Great Indian Bustard W.L.S ', year: '1995 ', location: '--' },
  { name: 'Marine (Gulf of Kutch) W.L.S', year: '1980 ', location: '--' },
  { name: 'Paniya Wildlife Sanctuary ', year: '1989 ', location: '--' },
  { name: 'Shoolpaneswar (Dhumkhal) W.L.S', year: '1982', location: '--' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM :' as const
export const zooMuseumsRows = [
  { name: 'Kamla Nehru Zoological Park', city: 'Ahmedabad' },
  { name: 'Sakkarbaug Zoological Garden', city: 'Junagadh' },
  { name: 'Sarthana Zoo', city: 'Surat' },
  { name: 'Pradhyuman Zoological Park', city: 'Rajkot' },
  { name: 'Sayaji Baug Zoo', city: 'Vadodara' },
  { name: 'Calico Museum of Textiles', city: 'Ahmedabad' },
  { name: 'Baroda Museum & Picture Gallery ', city: 'Vadodara' },
  { name: 'Maharaja Fateh Singh Museum ', city: 'Vadodara' },
  { name: 'Sardrar Patel Zoological Park', city: '---' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows = [
  {
    name: 'Sardar Vallabhai Patel International Airport',
    city: 'Ahemdabad',
    category: 'International',
  },
  {
    name: 'Vadodara International Airport',
    city: 'Vadodara',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Amreli Airport', city: 'Amreli ', category: 'Domestic' },
  { name: 'Bhavnagar Airport', city: 'Bhavnagar', category: 'Domestic' },
  { name: 'Bhuj Airport', city: 'Bhuj', category: 'Domestic' },
  { name: 'Dholera Airport', city: 'Dholera', category: 'Domestic' },
  { name: 'Jamnagar Airport', city: 'Jamnagar', category: 'Domestic' },

  { name: 'Kandla Airport', city: 'Kandla', category: 'Domestic' },
  { name: 'Keshod Airport', city: 'Keshod', category: 'Domestic' },
  { name: 'Mehsana Airport', city: 'Mehsana', category: 'Private' },
  { name: 'Mundra Airport', city: 'Mundra ', category: 'Private' },
  { name: 'Naliya Air Force Station', city: 'Naliya', category: 'Defense' },

  { name: 'Palanpur Airport', city: 'Palanpur', category: 'Domestic' },
  { name: 'Porbandar Airport', city: 'Porbandar ', category: 'Domestic' },
  { name: 'Rajkot Airport', city: 'Rajkot', category: 'Domestic' },
  { name: 'Rajkot Greenfield Airport', city: 'Rajkot', category: 'Domestic' },
  { name: 'Surat Airport', city: 'Surat ', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export type GujaratStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsRows: readonly GujaratStadiumRow[] = [
  { name: 'Moti Bagh Cricket Stadium', location: 'Vadodara' },
  {
    name: 'Khanderi Cricket Stadium ',
    location: 'Rajkot',
  },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'Indian Institute of Management (IIM)', location: 'Ahmedabad' },
  { name: 'Indian Institute of Technology (IIT)', location: 'Gandhinagar' },
  {
    name: 'Indian Institute of Information Technology (IIIT)',
    location: 'Gandhinagar',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  { name: 'Nirmal University of Science and Technology', location: 'Ahmedabad' },
  { name: 'Baba Saheb Ambedkar Open University ', location: 'Ahmedabad' },
  { name: 'ITM Vocational University ', location: 'Vadodara' },
  {
    name: 'National Rail and Transportation University ',
    location: 'Vadodara',
  },
  {
    name: 'Pandit Deendayal Petroleum University',
    location: 'Gandhinagar',
  },
  { name: 'Central University of Gujarat ', location: 'Gandhinagar' },
  { name: 'Dharmasinh Desai University ', location: 'Nandid' },
  {
    name: 'National Forensic Science University',
    location: 'Gandhinagar',
  },
] as const

export const famousPersonsOrdered = [
  'Mahatma Gandhi – Sage of Sabarmati',
  'Vallabhai Patel – Bardoli Gandhi & Sardar & Indian Bismark & Iron Man',
  'Zaheer Khan – Baroda Express',
  'Hemachandracharya',
  'Mirabhai',
  'Medha Patkar',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Kirti Toran – Vadnagar,     Abhay Ghat – The resting place of Morarji Desai' as const

export const miscellaneousBlocks = [
  {
    heading: 'Gujarat',
    lines: [
      '1.	Sun Set State of India',
      '2.	Manchester of India',
      '3.	Land of Epics',
      '4.	Land of Legends',
    ],
  },
  {
    heading: 'Ahmedabad',
    lines: [
      '1.	Boston of East',
      '2.	Manchester of the East',
      '3.	Denim City of India',
    ],
  },
  {
    heading: 'Surat',
    lines: [
      '1.	Diamond City of India',
      '2.	Textile City of India',
      '3.	Commercial Capital of Gujarat',
    ],
  },
  {
    heading: 'Vadodara',
    lines: [
      '1.	Banyan City',
      '2.	World Capital of Garba',
      '3.	Cultural Capital of Gujarat',
      '4.	National Rail and Transportation Institute (NRTI)',
      '5.	National Academy of Indian Railways (NAIR)',
    ],
  },
  {
    heading: 'Gandhi Nagar',
    lines: ['1.	Green City of India'],
  },
  {
    heading: 'Gurjaram',
    lines: ['2.	Old name of Gujarat '],
  },
  {
    heading: 'Ahmedabad',
    lines: [
      '1.	Space Application centre',
      '2.	Institute of Plasma Research centre',
      '3.	National Institute of Occupational Health',
      '4.	Physical Research laboratory',
      '5.	Sardar Vallabhai Patel National Memorial',
      '6.	International Institute of Management & Technical Studies',
      '7.	Institute of Infrastructure Technology Reseach & Management',
      '8.	National Institute of Pharmaceutical Education & Research',
      '9.	National Institute of Design',
      '10.	Development & Educational Communication Unit',
      "11.	 The Training Centre of Cartoon Cinema in India",
      '12.	Darpana Academy for Performing Arts',
      "13.	 Headquarter of Self Employees Women’s Association (SEWA)",
      '14.	 Judicial Capital of Gujarat',
    ],
  },
  {
    heading: 'Vadodara',
    lines: [
      '1.	Railway staff college',
      '2.	Centralized Training Academy of Railway Accounts [& Secunderabad]',
      '3.	National Academy of Indian Railways',
      '4.	Electrical Research & Development Association',
      '5.	National Rail & Transportation Institute ',
    ],
  },
  {
    heading: 'Gandhinagar',
    lines: [
      '1.	Para Training Centre',
      '2.	Dhirubai Ambani Institute of Information & Communication Technology',
      '3.	Entrepreneurship Development Institute of India',
      '4.	National Institute of Fashion Technology',
      '5.	Bhaskaracharya Institute for Space Applications & Geo – Informatics',
      '6.	Gujarat Energry Research & Management Institute',
      '7.	National Authority of Ship Recycling',
      '8.	Humanitarian Forensics Centre (world’s 1st )',
    ],
  },
  {
    heading: 'Rajkot',
    lines: ['1.	Pandit Deendayal Upadhyay Medical College'],
  },
  {
    heading: 'Anand',
    lines: [
      '1.	Birla Vishwakarma Mahavidyalaya',
      '2.	Institute of Rural Management (IRM)',
    ],
  },
  {
    heading: 'Surat',
    lines: ['1.	Sardar Vallabhbhai National Institute of Technology'],
  },
  {
    heading: 'Bhav Nagar',
    lines: ['1.	Central salt & Marine Chemaical Research centre'],
  },
  {
    heading: 'Dwaraka',
    lines: ['1.	National Academy of Coastal Policing'],
  },
  {
    heading: 'Junagarh',
    lines: ['1.	Groundnut Research Institute'],
  },
  {
    heading: 'Changa',
    lines: ['1.	Charotar University of Science and Technology'],
  },
] as const
