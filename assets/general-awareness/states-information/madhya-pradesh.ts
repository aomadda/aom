export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const madhyaPradeshHeaderLine = 'MADHYA PRADESH' as const

export const madhyaPradeshBasicFacts = [
  { label: 'CAPITAL', value: 'Bhopal' },
  { label: 'ESTABLISHED', value: 'November 1, 1956' },
  { label: 'CHIEF MINISTER', value: 'Siva Raj Singh Chauhan' },
  { label: 'GOVERNOR', value: 'Anandiben Patel' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Jabalpur, 1956' },
  { label: 'STATE ANIMAL', value: 'Bharasinga (Swamp Deer)' },
  { label: 'STATE BIRD', value: 'Asian Paradise Flycatcher' },
  { label: 'STATE TREE', value: 'Banyan' },
  { label: 'STATE FLOWER', value: 'Parrot Tree' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Hindi (State Language),     Punjabi,     Malvi,     Nimadi,     Gondi,     Bilodi,     \n                                                     Korku,     Nihali,      Kalto',
  },
] as const

export const stateDancesOrdered = [
  'Pandavani',
  'Matcha',
  'Lota',
  'Chero',
  'Gaur (folk dance)',
  'Koli',
  'Lanvani',
  'Tamasha',
  'Bhagoria',
  'Dindi',
  'Matki',
  'Badhai',
  'Mariya',
  'Sahariya',
] as const

export const boundaryStatesOrdered = [
  'Chattisgarh',
  'Rajasthan',
  'Utter Pradesh',
  'Maharashtra',
  'Gujarat',
] as const

export const tribesOrdered = [
  'Baiga',
  'Bhillulum Mukiya',
  'Kaul',
  'Bhuya',
  'Biror',
  'Katkari',
  'Khond',
  'Gondu',
  'Khariya',
  'Adivasi',
  'Korku',
  'Bhariya',
  'Halba',
] as const

export const festivalsOrdered = [
  'Gangaur',
  'Teej',
  'Pushkar Fair',
  'Bhagoria',
  'Holi',
  'Sravan Somavar',
  'Id',
  'Diwali',
  'Dussehra',
  'Ramnavami',
  'Shivaratri',
  'Malwa',
  'Jhabua',
  'Panchamarhi',
  'Corn Festival',
] as const

export const districtsOrdered = [
  'Agar Malwa',
  'Alirajpur',
  'Anuppur',
  'Ashok Nagar',
  'Balaghat',
  'Barwani',
  'Betul',
  'Bhind',
  'Bhopal',
  'Burhanpur',
  'Hoshangabad',
  'Jabalpur',
  'Jhabua',
  'Katni',
  'Khandwa',
  'Chhindwara',
  'Khargone',
  'Mandla',
  'Mandsaur',
  'Morena',
  'Narsinghpur',
  'Damoh',
  'Datia',
  'Dewas',
  'Dhar',
  'Chhatarpur',
  'Dindori',
  'Guna',
  'Gwalior',
  'Harda',
  'Neemuch',
  'Panna',
  'Raisen',
  'Raigarh',
  'Ratlam',
  'Sheopur',
  'Shivapuri',
  'Sidhi',
  'Singrauli',
  'Indore',
  'Tikamgarh',
  'Ujjain',
  'Umaria',
  'Vidisha',
  'Rewa',
  'Seoni',
  'Shahdol',
  'Shajapur',
  'Sagar',
  'Satna',
  'Sehore',
] as const

export const mainCitiesOrdered = [
  'Nephanagar',
  'Balaghat',
  'Ujjain',
  'Indore',
  'Mandu',
  'Panchamarhi',
  'Bhimetka',
  'Bhojpur',
  'Maheswar',
  'Gwalior',
  'Chhatarpur',
  'Rewa',
  'Betul',
  'Guna',
  'Khandwa',
  'Kajuraho',
  'Tatlam',
  'Kanha',
  'Sagar',
  'Dewas',
  'Morena',
  'Vidisha',
  'Satna',
  'Khargone',
  'Ujjain – Kshripa River',
  'Jabalpur (Narmada River)',
] as const

export type MadhyaPradeshExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const madhyaPradeshExtendedFacts: readonly MadhyaPradeshExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (5)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '3,08,252 sq km (2nd),               Density: 236 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '7,26,26,089 (5th), 		Males = 3,76,12,306 & Females = 3,50,14,503\n   								Male : Female = 1000 : 930',
  },
  { label: 'LITERACY', kind: 'text', value: '72.60%' },
  { label: 'ASSEMBLY', kind: 'text', value: '230' },
  { label: 'LOK SABHA', kind: 'text', value: '29' },
  { label: 'RAJYA SABHA', kind: 'text', value: '11' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (51)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Laxmana Temple ', location: 'Khajuraho' },
  { name: 'Mahakaleshwar Jyothirlinga', location: '---' },
  { name: 'Khandaria Mahadeva Temple', location: 'Khajuraho' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [
  { name: 'Bharat Heavy Electrical Limited ', year: '---', location: 'Bhopal' },
  { name: 'Bank Note Press ', year: '---', location: 'Dewas' },
  { name: 'Security Paper Mill ', year: '---', location: 'Hoshangabad' },
  { name: 'Newsprint Factory ', year: '---', location: 'Nepanagar' },
  { name: 'Grey Iron Foundry ', year: '---', location: 'Jabalpur' },
  { name: 'Gun Carriage Factory ', year: '---', location: 'Jabalpur' },
  { name: 'Neemanch Alkaloid Factory', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Korba Thermal Power Plant', year: '---', location: '---' },
  { name: 'Vindyachal Thermal Power Station', year: '---', location: '---' },
  { name: 'Satpura Thermal Power Station', year: '---', location: '---' },
  { name: 'Amarkantak Thermal Power Station', year: '---', location: '---' },
  { name: 'Sasan Ultra Mega Power Project', year: '---', location: '---' },
  { name: 'Sant Singaji Thermal Power Plant', year: '---', location: '---' },
  { name: 'Solar Power Station ', year: '---', location: 'Bhagwanpur' },
  { name: 'Neemuch Solar Power Plant', year: '2013', location: 'Diken/Neemuch' },
] as const

export const riversOrdered = [
  'Chambal',
  'Betwa',
  'Kalisindhu',
  'Tapti',
  'Mahanadi',
  'Kshipra',
  'Ken',
  'Kulo',
  'Son',
  'Banjar',
  'Tawa',
  'Machna',
  'Shakkar',
  'Denwa',
  'Sonbhadra',
  'Prabati',
  'Indravati',
  'Narmada',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Upper Lake', river: '---', location: '---' },
  { name: 'Bhojtal Lake ', river: '---', location: 'Bhopal ' },
  { name: 'Lower Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Indhira sagar dam ', river: 'Narmada River', location: '---' },
  { name: 'Rajghat Dam ', river: 'Betwa River', location: '---' },
  { name: 'Gandhi Sagar Dam', river: '---', location: '---' },
  { name: 'Narmada Dam ', river: 'Narmada River', location: '---' },
  { name: 'Bansagar Project ', river: 'Son River', location: '---' },
  { name: 'Tawa Reservoir ', river: 'Tawa River', location: '---' },
  { name: 'Omkareshwar Dam ', river: 'Narmada River', location: '---' },
  { name: 'Madikheda Dam', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Apsara Waterfalls', location: '---' },
  { name: 'Chachai Waterfalls ', location: 'Rewa' },
  { name: 'Keoti Waterfalls ', location: 'Rewa' },
  {
    name: 'Rajat Prapat Waterfalls ',
    location: 'Hoshangabad',
  },
  { name: 'Gatha Waterfalls ', location: 'Panna' },
  {
    name: 'Dhaundhar Waterfalls',
    location: 'Bhedaghat/Jabalpur district/Narmada riverA',
  },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [
  { name: ' The Shri Ram Ghat', location: 'UjjainIMP' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows = [
  {
    name: 'Kanha Tiger Reserve ',
    year: '1974 ',
    location: 'Mandla & Balaghat',
  },
  {
    name: 'Pench Tiger Reserve ',
    year: '1993',
    location: 'Seoni District',
  },
  {
    name: 'Bandhavgarh Tiger Reserve ',
    year: '1994',
    location: 'Umaria	 District',
  },
  {
    name: 'Panna Tiger Reserve ',
    year: '1995 ',
    location: 'Panna & Chhatarpur District',
  },
  {
    name: 'Satpura Tiger Reserve ',
    year: '2000 ',
    location: 'Hoshangabad',
  },
  {
    name: 'Sanjay – Dubri Tiger Reserve ',
    year: '2009 ',
    location: 'Sidhi District',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Kanha National Park ',
    year: '1955 ',
    location: 'Mandla & Balaghat Districts',
  },
  {
    name: 'Madhav National Park ',
    year: '1959 ',
    location: 'Shivapuri & Gwarlior Districts',
  },
  {
    name: 'Pench National Park ',
    year: '1977 ',
    location: 'Seoni & Chhindwara',
  },
  {
    name: 'Panna National Park ',
    year: '1981 ',
    location: 'Panna & Chhatarpur Districts',
  },
  {
    name: 'Sanjay National Park ',
    year: '1981 ',
    location:
      'Koria District of Chhattisgarh\n                                                                                              Sindhi & Singrauli Dist. Of M.P',
  },
  {
    name: 'Satpura National Park',
    year: '1981',
    location: 'Hoshangabad',
  },
  {
    name: 'Bandhavgarh National Park ',
    year: '1982 ',
    location: 'Umaria District',
  },
  {
    name: 'Mandla Plant Fossil National Park ',
    year: '1983',
    location: 'Mandla District',
  },
  {
    name: 'Van Vihar National Park ',
    year: '1983 ',
    location: 'Bhopal',
  },
  {
    name: ' Omkareshwar National Park ',
    year: '2014 ',
    location: '--',
  },
  {
    name: ' Kuno National Park ',
    year: '2018',
    location: 'Sheopur & Morena Districts ',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Gandhi Sagar W.L.S ', year: '1981', location: '' },
  { name: 'Panna (Gangau) W.L.S ', year: '1979', location: '' },
  { name: 'Bori W.L.S ', year: '1977', location: '' },
  { name: 'National Chambal W.L.S ', year: '1978 ', location: '' },
  { name: 'Orcha W.L.S ', year: '1994 ', location: '' },
  { name: 'Kuno W.L.S ', year: '1981 ', location: '' },
  { name: 'Sardarpur W.L.S ', year: '1983 ', location: '' },
  { name: 'Son Gharial W.L.S ', year: '1974 ', location: '' },
  { name: 'Karera Bird Sanctuary ', year: '1981 ', location: 'Shivpuri' },
  { name: ' Ratapani W.L.S ', year: '1978 ', location: '' },
  { name: ' Pachmarhi W.L.S ', year: '1977 ', location: '' },
  { name: ' Bagdara W.L.S ', year: '1978 ', location: '' },
  { name: ' Ghatigaon W.L.S ', year: '1981 ', location: '' },
  { name: ' Ken Gharial W.L.S ', year: '1981 ', location: '' },
  { name: ' Kheoni W.L.S ', year: '1955 ', location: '' },
  { name: ' Narsinghgarh W.L.S ', year: '1974 ', location: '' },
  { name: ' Noradehi W.L.S ', year: '1984 ', location: '' },
  { name: ' Panpatha W.L.S ', year: '1983 ', location: '' },
  { name: ' Pench W.L.S ', year: '1977 ', location: '' },
  {
    name: ' Phen Wildlife Sanctuary ',
    year: '1983 ',
    location: '',
  },
  { name: ' Ralamandal W.L.S ', year: '1989 ', location: '' },
  {
    name: ' Sailana Wildlife Sanctuary ',
    year: '1983 ',
    location: '',
  },
  { name: ' Sanjay Dubri W.L.S ', year: '1975 ', location: '' },
  { name: ' Singhori W.L.S ', year: '1976 ', location: '' },
  {
    name: ' Veerangna Durgawati W.L.S ',
    year: '1997 ',
    location: '',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS :' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [{ name: 'Indore Zoo', city: 'Indore' }] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export type MadhyaPradeshInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly MadhyaPradeshInternationalAirportRow[] = [
  {
    name: 'Devi Ahilya Bai Holkar Airport',
    city: 'Indore',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Raja Bhoj Airport', city: 'Bhopal', category: 'Domestic' },
  { name: 'Chhindwara Airport', city: 'Chhindwara ', category: 'Domestic' },
  { name: 'Gwalior Airport', city: 'Gwalior', category: 'Domestic' },
  { name: 'Jabalpur Airport', city: 'Jabalpur', category: 'Domestic' },
  { name: 'Khajuraho Airport', city: 'Khajuraho', category: 'Domestic' },
  { name: 'Khandwa Airport', city: 'Khandwa', category: 'Domestic' },
  { name: 'Dhana Airport', city: 'Sagar', category: 'Domestic' },
  {
    name: 'Ujjain Airstrip',
    city: 'Ujjain',
    category: 'Domestic',
  },
] as const

export type MadhyaPradeshStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly MadhyaPradeshStadiumRow[] = [
  { name: 'Holkar Cricket Stadium', location: '---' },
  {
    name: 'Maharani Usharaje Trust Cricket Stadium ',
    location: 'Indore',
  },
  {
    name: 'Nehru Cricket Stadium',
    location: 'Indore',
  },
  {
    name: 'Roopsingh Cricket Stadium',
    location: 'Gwalior',
  },
  {
    name: 'Caption Roop Man Singh Stadium',
    location: 'Gwalior',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'Bhopal',
  },
  {
    name: 'Indian Institute of Management (IIM)',
    location: 'Indore',
  },
  {
    name: 'Indian Institute of Technology (IIT)',
    location: 'Indore',
  },
  {
    name: 'Nanaji Deshmukh Veterinary Science University ',
    location: 'Jabalpur + Mhow + Rewa',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'National Law Institute University',
    location: 'Bhopal',
  },
  {
    name: 'Makhanlal Chaturvedi National University of Journalism & Communication ',
    location: 'Bhopal',
  },
  {
    name: 'Devi Ahalya Central University',
    location: 'Indore',
  },
  {
    name: 'Rani Durgavati Central University',
    location: 'Jabalpur',
  },
  {
    name: 'Jawaharlal Nehru Krishi Central University ',
    location: 'Jabalpur',
  },
  {
    name: 'Indira Gandhi National Tribal University ',
    location: 'Amarkantak',
  },
  {
    name: 'Lakshmibai National University of Physical Education ',
    location: 'Gwalior ',
  },
] as const

export const famousPersonsOrdered = [
  'Latha Mungesker',
  'Kalidas – Indian Shakespear',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Buddhist Monuments – Sanchi, \n                                           	The Rock Shelters of Bhimbetka – Abdullaganj,     Sanch Sthupa                                                               \n                                                     The Khajuraho Monument,        Bhopal Gas Tragedy – December 3rd 1984,' as const

export const miscellaneousBlocks = [
  {
    heading: 'Madhya Pradesh ',
    lines: ['1.\tSoya State of India ', '2.\tState of Tigers '],
  },
  {
    heading: 'Indore ',
    lines: ['1.\tCommercial Capital of Madhya Pradesh '],
  },
  {
    heading: 'Jabalpur ',
    lines: ['1.\tOrdinance Hub of India '],
  },
  {
    heading: 'Narmada River',
    lines: ["1.\tLife Line of Madhya Pradesh"],
  },
  {
    heading: 'Bhopal',
    lines: ['1.\tCity of Lakes'],
  },
  {
    heading: 'Bhopal ',
    lines: [
      '1.\tForest Research Institute',
      '2.\tMaulana Azad National Institute of Technology',
      '3.\tIndian Institute of Science Education & Research (IISER)',
      '4.\tNational Judicial Academy ',
      '5.\tCentral Institute of Agricultural Engineering ',
      '6.\tIndian Institute of Forest Management ',
      '7.\tIndira Gandhi Rashtriya Manav Sangrahalaya ',
      '8.\tMoulana Azad Institute of Technolgy ',
      '9.\tIndian Institute of Soil Science ',
      '10.\t Bharat Heavy Electricals Limited (BHEL)',
      '11.\t Central Agricultural Engineering Colllege ',
    ],
  },
  {
    heading: 'Indore ',
    lines: ['1.\tInstitute of Engineering & Science IPS Academy'],
  },
  {
    heading: 'Jabalpur ',
    lines: [
      '1.\tWest Central Railway Zone Headquarters',
      '2.\tTropical Forest Research Institute',
      '3.\tIndian Institute of Information Technology, Design & Manufacturing',
    ],
  },
  {
    heading: 'Gwalior ',
    lines: [
      '1.\tIndian Institute of Information Technology & Management ',
      '2.\tIndian Institute of Tourism & Travel Management ',
      '3.\tLaxmi Bhai National Institute of Physical Education ',
      '4.\tAtal Bihari Vajpayee Indian Institute of Information Technology & Management ',
      '5.\tCentre for Disability Sport ',
    ],
  },
  {
    heading: 'Panwa ',
    lines: ['1.\tMega Food Park'],
  },
  {
    heading: 'Batiagarh ',
    lines: ['1.\tIndo – Tibetan Boarder Police Weapon Training Centre'],
  },
  {
    heading: 'Sehore ',
    lines: ['1.\tNational Institute of Mental Health Rehabilitation'],
  },
] as const
