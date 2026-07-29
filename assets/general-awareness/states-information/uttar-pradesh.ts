export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const uttarPradeshHeaderLine = 'UTTAR PRADESH' as const

export const uttarPradeshBasicFacts = [
  { label: 'CAPITAL', value: 'Lucknow (Gomti River)' },
  { label: 'ESTABLISHED', value: 'January 24, 1950' },
  { label: 'CHIEF MINISTER', value: 'Yogi Adityanath' },
  { label: 'GOVERNOR', value: 'Anandiben Pates' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Allahabad' },
  { label: 'STATE ANIMAL', value: 'Swamp Deer' },
  { label: 'STATE BIRD', value: 'Sarus Crane' },
  { label: 'STATE TREE', value: 'Ashoka Tree' },
  { label: 'STATE FLOWER', value: 'Palash' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: 'Field Hockey' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Hindi (State Language),     Urdu,     Awadhi,     Bhojpuri,     Bundeli,     Bruj',
  },
] as const

export type UttarPradeshExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const uttarPradeshExtendedFacts: readonly UttarPradeshExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Kathak (State Dance)',
      'Chapeli',
      'Kajri',
      'Nauthanki',
      'Rasaleela',
      'Kumavan',
      'Karan',
      'Thora (Folk Dance)',
    ],
  },
  {
    label: 'BOUNDARY STATES (10)',
    kind: 'ordered',
    items: [
      'Uttarakhand',
      'Himachal Pradesh',
      'Haryana',
      'Rajasthan',
      'Delhi',
      'Madhya Pradesh',
      'Chhattisgarh',
      'Jharkhand',
      'Bihar',
      'Nepal',
    ],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '2,43,286 sq km (4th),          \tDensity: 820 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '19,98,12,341 (1st), \t\tMale = 10,44,80,510 & Female = 9,53,31,831\nMale : Female = 1000 : 908',
  },
  { label: 'LITERACY', kind: 'text', value: '67.70%' },
  {
    label: 'ASSEMBLY',
    kind: 'text',
    value: '403,               Vidhanaparishath = 108',
  },
  { label: 'LOK SABHA', kind: 'text', value: '80' },
  { label: 'RAJYA SABHA', kind: 'text', value: '31' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Brahmostav',
      'Ram navami',
      'Sravana festival',
      'Ban yatra',
      'Dasara',
      'Kans Ka Mela',
      'Kumbh Mela',
      'Jhoola fair',
      'Kartik Poornima',
      'Cattle fair',
    ],
  },
  {
    label: 'DISTRICTS (75)',
    kind: 'ordered',
    items: [
      'Ambedkar Nagar',
      'Agra',
      'Aliagarh',
      'Allahabad',
      'Amethi',
      'Bulandhshahr',
      'Auraiya',
      'Azamgarh',
      'Bagpat',
      'Bareilly',
      'Meerut',
      'Mirzapur',
      'Bahraich',
      'Ballia',
      'Balrampur',
      'Banda',
      'Farrukhabad',
      'Basti',
      'Bijnor',
      'Budaun',
      'Chandauli',
      'Lakhimpur Kheri',
      'Deoria',
      'Etah',
      'Etawah',
      'Faizabad',
      'Muzaffarnagar',
      'Firozabad',
      'Ghaziabad',
      'Ghazipur',
      'Gonda',
      'Saharanpur',
      'Gorakhpur',
      'Hamirpur',
      'Hardoi',
      'Barabanki',
      'Siddharthnagar',
      'Jalaun',
      'Janupur',
      'Jhansi',
      'Kannauj',
      'Sant Kabir Nagar',
      'Shamli',
      'Shravasti',
      'Chitrakoot',
      'Fatehpur',
      'Maharajganj',
      'Mahoba',
      'Mainpuri',
      'Mathura',
      'Mau',
      'Moradabad',
      'Kaushambi',
      'Kushinagar',
      'Lalitpur',
      'Lucknow',
      'Kanpur Nagar',
      'Pilibhit',
      'Pratapgarh',
      'Raebareli',
      'Rampur',
      'Shajahanpur',
      'Sitapur',
      'Sonbhadra',
      'Sultanpur',
      'Unnao',
      'Kasganj – Kanshi Ram',
      'Hapur – Panchasheel Nagar',
      'Bhadoi',
      'Amroha/Jyotiba Phule Nagar',
      'Gautam Budha Nagar',
      'Varanasi',
      'Hathras – Mahamaya Nagar',
      'Kanpur Dehat – Ramabai Nagar',
      'Sambhal –Bheem Nagar',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Allahabad',
      'Madhura',
      'Kushi',
      'Jhansi',
      'Sitapur',
      'Shahjahanpur',
      'Almora',
      'Sikindar',
      'Gorakhpur',
      'Moradabad',
      'Muzaffarnagar',
      'Ghaziabad',
      'Bareilly',
      'Aligarh',
      'Sarsawa',
      'Bulandshahr',
      'Faizabad',
      'Rae Bareli',
      'Sambhal',
      'Hapur',
      'Mau',
      'Ayodhya (Sarayu River)',
      'Lucknow (Gomti River)',
      'Meerut',
      'Kanpur (Ganga River)',
      'Varanasi (Ganga River)',
      'Agra (Yamuna River)',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Ram Janmabhumi', location: 'Ayodhya' },
  { name: 'Kashi Viswanath Temple', location: 'Varanasi' },
  { name: 'Maa Vindhyavasini Devi Temple', location: '---' },
  { name: 'Gola Gokaran Nath Tempe/Choti Kashi', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '------', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLATNS:' as const
export const powerPlantsRows = [
  { name: 'Narora Atomic Power Station', year: '---', location: '---' },
  { name: 'Rehand Hydro Power Plant', year: '---', location: '---' },
  { name: 'Auraiya Thermal Power Station', year: '---', location: '---' },
  { name: 'Singroli & Vobra Thermal Power Station', year: '---', location: '---' },
  { name: 'Dadri Thermal Power Station', year: '---', location: '---' },
  { name: 'Anpara Thermal Power Station', year: '---', location: '---' },
  { name: 'Ghatampur Thermal Power Station', year: '---', location: 'Ghatampur/Kanpur' },
] as const

export const riversOrdered = [
  'Ganga',
  'Yamuna',
  'Gomati',
  'Ramganga',
  'Gagra',
  'Sarayu',
  'Saraswati',
  'Varuna',
  'Betwa',
  'Ashi',
  'Chambal',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Keetham Lake', river: '---', location: '---' },
  { name: 'Belasagar Lake', river: '---', location: 'Kulphahar' },
  { name: 'Govind Ballabh Pant Sagar', river: '---', location: 'Sonbhadra' },
  { name: 'Barua Sagar Lake', river: '---', location: '---' },
  { name: 'Tal Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Rihand dam', river: '---', location: '---' },
  { name: 'Banasagar Canal Project', river: '---', location: 'Mirjapur' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type UttarPradeshNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows: readonly UttarPradeshNpWlsRow[] = [
  { name: 'Dudhwa Tiger Reserve', year: '1988', location: 'Lakhimpur Kheri' },
  { name: 'Amangarh Tiger Reserve', year: '2012', location: 'Bijnor District' },
  {
    name: 'Pilibhit Tiger Reserve',
    year: '2020',
    location: 'Pilibhit & Shahjahanpur Districts',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export const nationalParksRows: readonly UttarPradeshNpWlsRow[] = [
  {
    name: 'Dudwa National Park',
    year: '1977',
    location: 'Kheri & Lakhimpur Districts',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly UttarPradeshNpWlsRow[] = [
  { name: 'Chandra Prabha W.L.S', year: '1957', location: '-' },
  { name: 'Bakhira W.L.S', year: '1990', location: '-' },
  { name: 'Kaimur W.L.S', year: '1982', location: '-' },
  { name: 'Saman Bird W.L.S', year: '1990', location: '-' },
  { name: 'Mahavir Swami W.L.S', year: '1977', location: '-' },
  { name: 'Samsapur Bird Sanctuary', year: '1987', location: 'Rae Bareli' },
  { name: 'Dr. B R Ambedkar Bird W.L.S', year: '2003', location: '-' },
  { name: 'Lakh Bahosi Bird W.L.S', year: '1988', location: '-' },
  { name: 'Parvati Aranga W.L.S', year: '1990', location: '-' },
  { name: 'Sandi Bird Sanctuary', year: '1990', location: 'Hardoi' },
  { name: 'Nawabganj Bird Sanctuary', year: '1984', location: 'Kanpur' },
  { name: 'National Chambal W.L.S', year: '1979', location: '-' },
  { name: 'Patna W.L.S', year: '1990', location: '-' },
  { name: 'Sohelwa W.L.S', year: '1988', location: '-' },
  { name: 'Sur Sarovar W.L.S', year: '1991', location: '-' },
  { name: 'Jai Prakash Narayan (Surhatal) W.L.S', year: '1991', location: '-' },
  { name: 'Sohagibarwa W.L.S', year: '1987', location: '-' },
  { name: 'Hastinapur W.L.S', year: '1986', location: '-' },
  { name: 'Katerinaghat W.L.S', year: '1976', location: '-' },
  { name: 'Kishnapur W.L.S', year: '1972', location: '-' },
  { name: 'Okhala Bird Sanctuary', year: '1990', location: '-' },
  { name: 'Ranipur W.L.S', year: '1977', location: '-' },
  { name: 'Turtle W.L.S', year: '1989', location: 'Allahabad' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Janeshwar Mishra Park' as const
export const zooMuseumsRows = [
  { name: 'Gorakhpur Zoological Garden', city: 'Gorakhpur' },
  { name: 'Lucknow Zoo', city: 'Lucknow' },
  { name: 'Saranath Deer Park', city: 'Varanasi' },
  { name: 'Etawah Safaro Park', city: 'Etawah' },
  { name: 'Kanpur Zoological Park', city: 'Kanpur' },
  { name: 'Police museum', city: 'Ghajiabad' },
] as const

export type UttarPradeshAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows: readonly UttarPradeshAirportRow[] = [
  {
    name: 'Chaudhary Charan Singh International Airport',
    city: 'Lucknow',
    category: 'International',
  },
  {
    name: 'Lal Bahadur Shastri International Airport',
    city: 'Varanasi',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly UttarPradeshAirportRow[] = [
  { name: 'Agra Airport', city: 'Agra', category: 'Domestic' },
  { name: 'Akbarpur (Ambedkar Nagar) Airstrip', city: 'Akbarpur', category: 'Private' },
  { name: 'Aligarh Airport', city: 'Aligarh', category: 'Future' },
  { name: 'Allahabad Airport', city: 'Allahabad', category: 'Domestic' },
  { name: 'Faizabad Airport', city: 'Ayodhya', category: 'Future' },
  { name: 'Azamgarh Airport', city: 'Azamgarh', category: 'Future' },
  { name: 'Bareilly Airport', city: 'Bareilly', category: 'Domestic' },
  { name: 'Chitrakoot Airport', city: 'Chitrakoot', category: 'Future' },
  { name: 'Saifai Airport', city: 'Etawah', category: 'Private' },
  { name: 'Mohammadabad Airstrip', city: 'Farrukhabad', category: 'Private' },
  { name: 'Hindon Airport', city: 'Ghaziabad', category: 'Domestic' },
  { name: 'Andhau Airstrip', city: 'Ghazipur', category: 'Private' },
  { name: 'Gorakhpur Airport', city: 'Gorakhpur', category: 'Domestic' },
  { name: 'Jhansi Airport', city: 'Jhansi', category: 'Future' },
  { name: 'Kanpur Airport', city: 'Kanpur', category: 'Domestic' },
  { name: 'Flight Laboratory, IIT Kanpur', city: 'Kanpur', category: 'Private' },
  { name: 'Kanpur Civil Aerodrome', city: 'Kanpur', category: 'Domestci' },
  { name: 'Marthamtabad Airstrip', city: 'Kanpur Dehat', category: 'Private' },
  { name: 'Kushinagar International Airport', city: 'Kushinagar', category: 'Future' },
  { name: 'Palia Airstrip', city: 'Lakhimpur Kheri', category: 'Private' },
  { name: 'Lalitpur Airport', city: 'Lalitpur', category: 'Future' },
  { name: 'Lucknow Air Force Station', city: 'Lucknow', category: 'Defense' },
  { name: 'Dr. Bhimrao Ambedkar Airstrip', city: 'Meerut', category: 'Private' },
  { name: 'Moradabad Airport', city: 'Moradabad', category: 'Future' },
  { name: 'Noida International Airport', city: 'Noida', category: 'Future' },
  { name: 'Fursatgunj Airfield', city: 'Raebareli', category: 'Private' },
  { name: 'Sarsawa Air Force Station', city: 'Saharanpur', category: 'Defense' },
  { name: 'Shravasti Airport', city: 'Shravasti', category: 'Future' },
  { name: 'Muirpur Airport', city: 'Sonbhadra', category: 'Future' },
  { name: 'Amhat Airstrip', city: 'Sultanpur', category: 'Private' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  { name: 'K D Singh Babu Stadium (Multipurpose)', location: 'Lucknow' },
  { name: 'Green Park Cricket Stadium', location: 'Kanpur' },
  { name: 'Dhyan Chand Astroturf Hockey Stadium', location: 'Lucknow' },
  { name: 'BRSABV Ekana Cricket Stadium', location: 'Lucknow' },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'Indian Institute of Management (IIM)', location: 'Lucknow' },
  { name: 'Indian Institute of Information Technology (IIIT)', location: 'Lucknow + Allahabad' },
  { name: 'Indian Institute of Technology (IIT)', location: 'Kanpur' },
  {
    name: 'Motilala Nehru National Institute of Technology (NIT)',
    location: 'Allahabad',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'Baba Shahed Bhimrao Ambedkar University', location: 'Lucknow' },
  { name: 'Dr A P J Abdul Kalam Technical University', location: 'Lucknow' },
  { name: 'Dr Ram Manohar Lohiya National Law University', location: 'Lucknow' },
  { name: 'Dr Shakuntala Mirsa National Rehabilitation University', location: 'Lucknow' },
  {
    name: 'Khwaja Moinuddin Chishti Urdu, Arabi Farsi University',
    location: 'Lucknow',
  },
  { name: 'Chatrapati Shahu Ji Maharaj University', location: 'Kanpur' },
  {
    name: 'Chandra Shekar Azad University of Agriculture & Technology',
    location: 'Kanpur',
  },
  {
    name: 'Indian Institute of Technology (Banaras Hindu University)',
    location: 'Varanasi',
  },
  { name: 'Banaras Hindu University', location: 'Varanasi' },
  { name: 'Sampurnanandn Sanskrit Unversity', location: 'Varanasi' },
  { name: 'Deendayal Upadyaya University', location: 'Gorakhpur' },
  {
    name: 'Madan Mohan Malaviya University of Technology',
    location: 'Gorakhpur',
  },
  { name: 'Rajiv Gandhi National Aviation University', location: 'Raebareli' },
  { name: 'Chaudhary Charan Singh University', location: 'Meerut' },
  {
    name: 'Sardar Vallabhai Patel University of Agriculture & Technology',
    location: 'Meerut',
  },
  {
    name: 'Sardar Vallabhai Patel University of Agriculture & University',
    location: 'Meerut',
  },
  { name: 'Gautama Budha University', location: 'Noida' },
  { name: 'Aligarh Muslim University', location: 'Aligarh' },
  {
    name: 'Veer Bahadur Singh Purvanchal University',
    location: 'Jaunpur',
  },
  { name: 'Benaras Hindu Central University', location: '---' },
] as const

export const famousPersonsOrdered = [
  'Vijayalaxmi Pandit',
  'Patanjali',
  'Purushotham Das Tandon – UP Gandhi',
  'Jhansi Rani',
  'Sarojini Naidu – Nightingale of India',
  'Madan Mohan Malavya – Prince of Beggars & Mahamana',
  'Indira Gandhi – Iron Lady of India & Priyadarshini',
  'Jawaharlal Nehru – Rithurajan',
  'Amir Kusru – The Parrot of India',
  'Thulasidas',
  'Chandra Shekar Azad',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  "Taj Mahal – Agra,\nFatehpur Sikri,\nAkbar's Tomb – Sikindar (Agra),\nBuland Darwaza – Fatehpur Sikri (The highest and biggest gateway of India near Agra built by Akbar),\nBanasagar Canal Project – Mirjapur,\nBirbal Palace – Agra,\nOne day CM  =     Jagadambika pal" as const

export const miscellaneousBlocks = [
  {
    heading: 'Uttar Pradesh',
    lines: ['1.\tSugar Bowl of India'],
  },
  {
    heading: 'Kanpur',
    lines: [
      '1.\tFinancial Capital of U. P',
      '2.\tIndustrial Capital of U. P',
      '3.\tLeather City of the World',
      '4.\tLeather City of World',
      '5.\tManchester of North India',
      '6.\tLeather City of World',
      '7.\tManchester of North India',
    ],
  },
  {
    heading: 'Lucknow',
    lines: [
      '1.\tConstantinople of India',
      '2.\tGolden City of the East',
      '3.\tCity of Nawabs',
      '4.\tJagjivan Ram Railway Protection Force Academy (JRRPFA)',
      '5.\tIndian Railway Institute of Transport Management (IRITM)',
    ],
  },
  {
    heading: 'Varanasi',
    lines: ['1.\tSpiritual City of India', '2.\tHoli City'],
  },
  {
    heading: 'Allahabad',
    lines: ['1.\tCity of Prime Ministers'],
  },
  {
    heading: 'Lucknow',
    lines: [
      '1.\tCentral Drug Research Institute',
      '2.\tCentral Institute of Medicinal & Aromatic Plants',
      '3.\tIndustrial Toxicology Research Centre',
      '4.\tNational Botanical Research Institute',
      '5.\tSanjay Gandhi Postgraduate Institute of Medical Sciences',
      '6.\tBhatkhande Music Institute',
      '7.\tCentral Institute of Medicinal & Aromatic Plants',
      '8.\tBirbal Sahni Institute of Palaeobotany',
      '9.\tSmall Industries Development Bank of India (SIDBI)',
      '10.\tHuman DNA Bank',
      '11.\tAmbedkar Memorial and Cultural Centre',
      '12.\tIndian Railway Institute of Transport Management (IRITM)',
    ],
  },
  {
    heading: 'Kanpur',
    lines: [
      '1.\tIndian Institute of Pulses Research (IIPR)',
      '2.\tNational Sugar Institute',
    ],
  },
  {
    heading: 'Varanasi',
    lines: [
      '1.\tCentral Institute of Higher Tibetan Studies',
      '2.\tDiesel Locomotive Works',
    ],
  },
  {
    heading: 'Gorakhpur',
    lines: ['1.\tNorth Eastern Railway'],
  },
  {
    heading: 'Raebareli',
    lines: [
      '1.\tNational Institute of Fashion Technology',
      '2.\tRajiv Gandhi Institute of Petroleum Technology',
      '3.\tIndira Gandhi Rashtriya Uran Academy',
    ],
  },
  {
    heading: 'Noida',
    lines: [
      '1.\tFootwear Design and Development Institute',
      '2.\tJaypee Institute of Information Technology',
    ],
  },
  {
    heading: 'Allahabad',
    lines: ['1.\tNorth Central Railway Headquarter'],
  },
  {
    heading: 'Ijjat Nagar',
    lines: [
      '1.\tIndian Veternary Science College',
      '2.\tIndian Veternary Research Institute',
    ],
  },
  {
    heading: 'Bareilly',
    lines: ['1.\tIndian Veterinary Research Institute'],
  },
  {
    heading: 'Hapur',
    lines: ['1.\tIndian Grain Storage Research and Training Institute'],
  },
  {
    heading: 'Ghaziabad',
    lines: ['1.\tNational Institute of Organic Farming'],
  },
] as const
