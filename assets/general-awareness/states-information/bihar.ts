export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const biharHeaderLine = 'BIHAR' as const

export const biharBasicFacts = [
  { label: 'CAPITAL', value: 'Patna (Ganga River)' },
  { label: 'ESTABLISHED', value: '26 January, 1950' },
  { label: 'CHIEF MINISTER', value: 'Nitish Kumar' },
  { label: 'GOVERNOR', value: 'Phagu Chauhan' },
  { label: 'RULING PARTY', value: 'Janata Dal (U)' },
  { label: 'HIGH COURT', value: 'Patna (1916)' },
  { label: 'STATE ANIMAL', value: 'Gaur (Ox)' },
  { label: 'STATE BIRD', value: 'House Sparrow' },
  { label: 'STATE TREE', value: 'Peepal' },
  { label: 'STATE FLOWER', value: 'White Orchid' },
  { label: 'STATE FRUIT', value: '' },
  { label: 'STATE EMBLEM', value: '' },
  { label: 'STATE SONG', value: '' },
  { label: 'STATE SPORT', value: '' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Hindi     Urdu     Bhojpuri     Magahi     Maithili     Angika     Awadhi     Nepali',
  },
] as const

export const stateDancesOrdered = [
  'Bako',
  'Natuna',
  'Jadhana',
  'Chhau (Folk Dance)',
  'Jati Jatin',
  'Jhijhiya',
  'Gadur',
  'Karma',
  'Bidesia',
  'Seraikella',
  'Sohar - Khilouna',
  'Kajari',
  'Jhumeri',
] as const

export const boundaryStatesOrdered = ['Jharkhand', 'Uttar Pradesh', 'West Bengal', 'Nepal'] as const
export const tribesOrdered = ['Munda', 'Sarhul', 'Karam'] as const
export const festivalsOrdered = ['Chhath'] as const

export const districtsOrdered = [
  'Araria',
  'Arwal',
  'Aurangabad',
  'Banka',
  'Begusarai',
  'Bhagalpur',
  'Bhojpur',
  'East Champaran',
  'Darbhanga',
  'Buxar',
  'Gaya',
  'Gopalganj',
  'Jamul',
  'Jehanabad',
  'Khagaria',
  'Kishanganj',
  'Kalmur',
  'Katihar',
  'Lashisarai',
  'Madhubani',
  'Munger',
  'Madhepura',
  'Muzzafnagar',
  'Nalanda',
  'Nawada',
  'Patna',
  'Purnia',
  'Rohatas',
  'Saharsa',
  'Samastipur',
  'Sheohar',
  'Saran',
  'Sheikhpura',
  'Sitamrahi',
  'Supaul',
  'Siwan',
  'Vaishali',
  'West Champaran',
] as const

export const mainCitiesOrdered = [
  'Champaran',
  'Barauni',
  'Poosa',
  'Bodhgaya',
  'Aurangabad',
  'Buxar',
  'Chapra',
  'Sindri',
  'Sasaram',
  'Sitamarhi',
  'Katihar',
  'Vaishali',
  'Patna (Ganga River)',
  'Hajipur',
  'Barauni',
  'Dehri',
  'Bhagalpur',
  'Darbhanga',
  'Jehangabad',
  'Kishanganj',
  'Muzaffarpur',
] as const

export type BiharExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const biharExtendedFacts: readonly BiharExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (4)', kind: 'ordered', items: boundaryStatesOrdered },
  { label: 'AREA', kind: 'text', value: '94, 163 sq km (13th)                Density: 1, 102 per sq. km' },
  {
    label: 'POPULATION',
    kind: 'text',
    value: '10,40,99,452 (3rd)    Males = 5,42,78,157 & Females = 4,98,21,295    Male : Female = 916 : 1000',
  },
  { label: 'LITERACY', kind: 'text', value: '63.80%' },
  { label: 'ASSEMBLY', kind: 'text', value: '243, Legisletive Council = 75' },
  { label: 'LOK SABHA', kind: 'text', value: '40' },
  { label: 'RAJYA SABHA', kind: 'text', value: '16' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (38)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Mahabodhi Temple', location: 'Bodh Gaya' },
  { name: 'Vishnupadh Temple', location: 'Gaya' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [
  { name: 'Fertilizers Corporation of India', year: '---', location: 'Sindri' },
  { name: 'Barauni Oil Refinery', year: '---', location: '---' },
  { name: 'Dalmia Cement Factory', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Kahalgaon Super Thermal Power Station', year: '---', location: '---' },
  { name: 'Barauni Thermal Power Station', year: '---', location: '---' },
  { name: 'Suvarnalekha Hydro Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Ganga',
  'Son',
  'Gandak',
  'Kosi',
  'Panar',
  'Saura',
  'Durgawati',
  'Karmanasa',
  'Damodar',
  'Subarnarekha',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Anupam Lake', river: '---', location: '---' },
  { name: 'Kanwar (Kabar) Thal Lake', river: '---', location: 'Begusarai' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Mahatma Gandhi Sethu', river: 'Ganga River', location: 'Patna' },
  { name: 'Kosi Project', river: '---', location: '---' },
  { name: 'Gandak Project', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{ name: '------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: '-------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '-------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesRows = [
  {
    name: 'Valmiki Tiger Reserve',
    year: '1990',
    location: 'West Champaran District',
    area: '898.45',
  },
] as const

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesNote = 'Nil' as const
export const elephantReservesRows = [{ name: '---', year: '---', location: '---', area: '---' }] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesRows = [
  { name: 'Kanwar (Kobar) Taal', year: '2020', location: 'Begusarai District', area: '26.2' },
  { name: 'Nagi Dam Bird Sanctuary', year: '2024', location: 'Jamui District', area: '2.1' },
  { name: 'Nakti Dam Bird Sanctuary', year: '2024', location: 'Jamui District', area: '3.3' },
  { name: 'Gogabeel (Oxbow) Lake', year: '2025', location: 'Katihar District', area: '8.66' },
  { name: 'Gokul Reservoir', year: '2025', location: 'Buxar', area: '4.48' },
  { name: 'Udaipur Lake', year: '2025', location: 'Champaran District', area: '3.19' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Valmiki National Park',
    year: '1976',
    location: 'West Champaran District',
    area: '898.45',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Gautam Budha Wildlife Sanctuary', year: '1976', location: 'Gaya', area: '138.34' },
  { name: 'Kaimur Wildlife Sanctuary', year: '1992', location: 'Kaimur District', area: '1342' },
  { name: 'Pant (Rajgir) WildlLife Sanctuary', year: '1978', location: '', area: '35.84' },
  { name: 'Valmiki Wildlife Sanctuary', year: '1978', location: '', area: '545.15' },
  { name: 'Bhimaband Wild life Sanctuary', year: '1976', location: '', area: '681.99' },
  { name: 'Vikramashila Gangetic Dolphin Sanctuary', year: '1990', location: '', area: '50' },
  { name: 'Barela Jheel Saleem Ali Bird W.L.S', year: '1997', location: '', area: '1.96' },
  { name: 'Kanwarjheel W.L.S', year: '1989', location: '', area: '63.11' },
  { name: 'Kusheshwar Asthan Bird W.L.S', year: '1994', location: '', area: '29.17' },
  { name: 'Nagi Dam Wildlife Sanctuary', year: '1987', location: '', area: '1.92' },
  { name: 'Nakti Dam Wildlife Sanctuary', year: '1987', location: '', area: '3.33' },
  { name: 'Udaipur Wildlife Sanctuary', year: '1978', location: '', area: '8.87' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUMS :' as const
export const zooMuseumsRows = [
  { name: 'Sanjay Gandhi Jaivik Udyan', city: 'Patna' },
  { name: 'Khuda Bakhsh Oriental Library', city: 'Patna' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly { name: string; city: string; category: string }[] = []

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Bihta Air Force Station', city: 'Bihta', category: 'Defence' },
  { name: 'Bhagalpur Airport', city: 'Bhagalpur', category: 'Domestic' },
  { name: 'Darbhanga Airport', city: 'Darbhanga', category: 'Domestic' },
  { name: 'Gaya Airport', city: 'Gaya', category: 'Customs' },
  { name: 'Jogbani Airport', city: 'Jogbani', category: 'Domestic' },
  { name: 'Munger Airport', city: 'Munger', category: 'Domestic' },
  { name: 'Muzaffarpur Airport', city: 'Muzaffarpur', category: 'Domestic' },
  { name: 'Jaya Prakash Narayan Airport', city: 'Patna', category: 'Customs' },
  { name: 'Purnea Airport', city: 'Purnea', category: 'Defence' },
  { name: 'Raxaul Airport', city: 'Raxaul', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly { name: string; location: string }[] = []

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'Indian Institute of Technology (IIT)', location: 'Patna' },
  { name: 'National Institute of Technology (NIT)', location: 'Patna' },
  { name: 'Indian Institute of Management (IIM)', location: 'Bodh Gaya' },
  { name: 'Jayaprakash Narayan All India Institute of Medical Sciences (AIIMS)', location: 'Patna' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  { name: 'Chanakya National Law University', location: '---' },
  { name: 'Dr Rajendra Prasad Central Agricultural University', location: '---' },
  { name: 'Nalanda University', location: 'Nalanda' },
  { name: 'Vikramshila University', location: 'Bhagalpur' },
  { name: 'Mahatma Gandhi Central University', location: 'Motihari' },
] as const

export const famousPersonsOrdered = [
  'Gautama Budha – Light of Asia',
  'Babu Rajendra Prasad – Bihar Gandhi',
  'Bharat Ratna Ustad Bismillah Khan – Musician',
  'Jaya Prakash Narayan – Lok Nayak',
  'Vardhamana Mahaveerudu',
  'First woman Loksabha Speaker = Meira Kumar',
  'First woman Chief Minister = Rabri Devi',
  'Rabri Devi     Thatagath     Ashokudu     Guru Gobind Singh',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Vikramshila Monastery     Shersha’s Tomb – Sasaram     Asia’s First Dolphin Research Centre = Patna University' as const

export const miscellaneousBlocks = [
  { heading: 'BHAGALPUR', lines: ['1. The Silk City of India'] },
  { heading: 'MUZAFFARPUR', lines: ['1. The Land of Leechi'] },
  { heading: 'NALANDA', lines: ['1. The Land of Knowledge'] },
  { heading: 'GAYA', lines: ['1. The City of Enlightenment'] },
  {
    heading: 'PATNA',
    lines: [
      '1. National Institute of Fashion Technology',
      '2. National Inland Navigation Institute',
      '3. The Dolphin Training Centre of Asia',
    ],
  },
  { heading: 'BODH GAYA', lines: ['1. Gautama Budha attained Enlightenment'] },
  {
    heading: 'HAJIPUR',
    lines: [
      '1. National Institute of Pharmaceutical Education & Research',
      '2. Institute of Hotel Management (IHM)',
    ],
  },
  { heading: 'POOSA', lines: ['1. Lord Curgon Agriculture Research Institute'] },
  { heading: 'CHHAPRA', lines: ['1. Loknayak Jaya Prakash Institute of Technology'] },
] as const
