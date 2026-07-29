export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const chhattisgarhHeaderLine = 'CHHATTISGARH' as const

export const chhattisgarhBasicFacts = [
  { label: 'CAPITAL', value: 'Naya Raipur' },
  { label: 'ESTABLISHED', value: 'November 1, 2000 (from Madhya Pradesh)' },
  { label: 'CHIEF MINISTER', value: 'Bhupesh Bhagel' },
  { label: 'GOVERNOR', value: 'Anasuiya Uikey' },
  { label: 'RULING PARTY', value: 'INC' },
  { label: 'HIGH COURT', value: 'Bilashpur (2000)' },
  { label: 'STATE ANIMAL', value: 'Wild Buffalo' },
  { label: 'STATE BIRD', value: 'Hill Myna' },
  { label: 'STATE TREE', value: 'Sal' },
  { label: 'STATE FLOWER', value: '---' },
  { label: 'STATE FRUIT', value: '----' },
  { label: 'STATE EMBLEM', value: '----' },
  { label: 'STATE SONG', value: '----' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Hindi,     Chhattisgarhi,     Oriya,     Marathi,     Gondi,     Korku',
  },
] as const

export const stateDancesOrdered = [
  'Panthi (Folk Dance)',
  'Danda',
  'Sarhul',
  'Raut Nacha (Folk Dance)',
  'Soowa     Karma',
  'Pandwani',
  'Kaksar',
  'Saila',
  'Khamb – swang',
  'Rahas',
  'Raai',
] as const

export const boundaryStatesOrdered = [
  'Telangana',
  'Jharkhand',
  'Maharashtra',
  'Madhya Pradesh',
  'Uttarakhand',
  'Odisha',
  'Andhra Pradesh',
] as const

export const tribesOrdered = ['Satnami'] as const

export const festivalsOrdered = [
  'Pola',
  'Nawakhi',
  'Durga Puja',
  'Diwali',
  'Holi',
  'Govardha Puja',
  'Madai Festival	Rajim Kumbh Mela',
  'Pakanjore Mela',
  'Goncha',
] as const

export const districtsOrdered = [
  'Balod',
  'Baloda Bazar',
  'Balrampur',
  'Bastar',
  'Bemetara',
  'Bijapur',
  'Bilaspur',
  'Dantewada',
  'Dhamtari',
  'Durg',
  'Gariaband',
  'Janjgir – Champa',
  'Jashpur',
  'Kabiradham',
  'Kanker',
  'Kondagaon',
  'Mahasamund',
  'Korba',
  'Koriya',
  'Mungeli',
  'Narayanpur',
  'Ranjnandgaon',
  'Raigarh',
  'Raipur',
  'Sukma',
  'Surajpur',
  'Surguja',
] as const

export const mainCitiesOrdered = [
  'Raipur',
  'Bastar',
  'Bilaspur',
  'Dantewada',
  'Ambikapur',
  'Bhilai',
  'Dhamtari',
  'Durg',
  'Sukma',
  'Surajpur',
  'Bijapur',
  'Dhamtari',
  'Balod',
  'Koriya',
  'Champa',
  'Janjgir',
  'Jagdalpur',
  'Korba',
  'Mahasamund',
  'Raigarh',
  'Rajnandgaon',
] as const

export type ChhattisgarhExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const chhattisgarhExtendedFacts: readonly ChhattisgarhExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (7)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value:
      '1, 35, 195 sq.km (10th),          	Density: 189 per sq. km',
  },
  {
    label: 'POLLUTION',
    kind: 'text',
    value:
      '2,55,45,198 (17th), 		Males = 1,28,32,895 & Females = 1,27,12,303 \n                                                             				Male : Female = 1000 : 991',
  },
  { label: 'LITERACY', kind: 'text', value: '71.04%' },
  { label: 'ASSEMBLY', kind: 'text', value: '90' },
  { label: 'LOK SABHA', kind: 'text', value: '11' },
  { label: 'RAJYA SABHA', kind: 'text', value: '5' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (27)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [{ name: '--------', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [
  { name: 'Bhilai Steel Plant', year: '---', location: '---' },
  { name: 'Bilaspur Steel Plant ', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  {
    name: 'Sipat (Rajiv Gandhi) Super Thermal Power Station',
    year: '---',
    location: 'Bilaspur',
  },
  { name: 'Hasdeo Thermal Power Station', year: '---', location: '---' },
  { name: 'Bhilai Expansion Power Station', year: '---', location: '---' },
  { name: 'Arasmeta Thermal Power Station', year: '---', location: '---' },
  { name: 'Korba Super Thermal Power Station', year: '---', location: 'Jamnipalli' },
  { name: 'Geothermal Power Plant', year: '---', location: 'Tittapani' },
] as const

export const riversOrdered = [
  'Mahanadi',
  'Godavari',
  'Indravati',
  'Sonu',
  'Pairi',
  'Hasdo',
  'Son',
  'Sabari',
  'Rihand',
  'Jonk',
  'Arpa',
  'Shionath',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Budhapura Lake', river: '---', location: '---' },
  { name: 'Munda Lake', river: '---', location: '---' },
  { name: 'Vivekanand Sarovar Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Hasdeo Bango Dam', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Amrit Dhara Waterfalls', location: 'Koriya' },
  { name: 'Teerathgarh Waterfalls', location: 'Baster' },
  { name: 'Chitrakot Waterfalls', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: ' ------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesRows = [
  {
    name: 'Indravati Tiger Reserve',
    year: '1983',
    location: 'Bijapur District',
  },
  {
    name: 'Sitanadi Tiger Reserve',
    year: '2009',
    location: 'Dhamtari District',
  },
  {
    name: 'Achanakmar Tiger Reserve',
    year: '2009',
    location: 'Mungeli District',
  },
] as const

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesNote = '' as const
export const elephantReservesRows = [
  {
    name: 'Lemru Elephant Reserve',
    year: '2022',
    location: 'Korba district',
  },
  {
    name: 'Badalkhol-Tamorpingl E.R',
    year: '2011',
    location: 'Surajpur & Jashpur',
  },
] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesRows = [
  {
    name: 'Kanwar (Kobar) Taal',
    year: '2025',
    location: 'Bilaspur District',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Sanjay (Guru Ghasi Das) N.P',
    year: '1981',
    location:
      'Koria District of Chhattisgarh\n                                                                                Sidhi, Singrauli District of Madhya Pradesh',
  },
  {
    name: 'Indravati National Park',
    year: '1981',
    location: 'Bijapur District',
  },
  {
    name: 'Kanger Ghati National Park',
    year: '1982',
    location: 'Jagadalpur',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Badalkhol Wildlife Sanctuary ', year: '1975', location: '--' },
  { name: 'Bhairamgarh Wildlife Sanctuary ', year: '1983', location: '--' },
  { name: 'Bhoramdev Wildlife Sanctuary ', year: '2001', location: '--' },
  { name: 'Udanti Wild Buffalo W.L.S', year: '1985', location: '-- ' },
  { name: 'Samarsot Wildlife Sanctuary ', year: '1978', location: '--' },

  { name: 'Sitanadi Wildlife Sanctuary ', year: '1974', location: '--' },
  { name: 'Achanakma Wildlife Sanctuary ', year: '1975', location: '--' },
  { name: 'Barnawapara Wildlife Sanctuary ', year: '1976', location: '-- ' },
  { name: 'Sarangarh – Gomardha W.L.S', year: '1975', location: '--' },
  { name: 'Pamed Wild Buffalo W.L.S', year: '1985', location: '--' },
  { name: 'Tamor Pingla Wildlife Sanctuary ', year: '1978', location: '--' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUMS :' as const
export const zooMuseumsRows = [
  { name: 'Maitri Bagh', city: 'Bhilai Nagar' },
  { name: 'Nandan Van Zoo', city: 'Raipur' },
  { name: 'Kannan Pendari Zoological Garden', city: 'Bilaspur' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly { name: string; city: string; category: string }[] = []

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Ambikapur Airport', city: 'Ambikapur', category: 'Domestic' },
  { name: 'Bhilai Airport', city: 'Bhilai', category: 'Private' },
  { name: 'Bilaspur Airport', city: 'Bilaspur', category: 'Domestic' },
  { name: 'Jagdalpur Airport', city: 'Jagdalpur', category: 'Domestic' },
  { name: 'Jashpur Airport', city: 'Jashpur', category: 'Domestic' },

  { name: 'Korba Airport', city: 'Korba', category: 'Domestic' },
  { name: 'Raigarh Airport', city: 'Raigarh ', category: 'Domestic' },
  { name: 'OP Jindal Airport ', city: 'Raigarh ', category: 'Private' },
  { name: 'Swami Vivekananda Airport ', city: 'Raipur', category: 'Domestic' },
  { name: 'Nandini Airport', city: 'Bhilai', category: '---' },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly { name: string; location: string }[] = []

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'National Institute of Technology (NIT)', location: 'Raipur' },
  { name: 'All India Institute of Medical Sciences (AIIMS)', location: 'Raipur' },
  { name: 'Indian Institute of Technology (IIT)', location: 'Bhilai' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  { name: 'Pandit Ravi Shankar Central University', location: 'Raipur' },
  { name: 'Indira Gandhi Central University', location: 'Raipur' },
  { name: 'Ayush and Health Sciences University', location: 'Raipur' },
  { name: 'Amity University', location: 'Raipur' },
  { name: 'Hidayatullah National Law University', location: 'Raipur' },
  { name: 'Indira Gandhi Agricultural University', location: 'Raipur' },
  {
    name: 'Kushabhau Thakre University of Journalism & Mass Communication',
    location: 'Raipur',
  },
  {
    name: 'Mahaveer Academy of Technology and Science (MATS) University',
    location: 'Raipur',
  },
  { name: 'Pandit Ravishankar Shukla University', location: 'Raipur' },
  { name: 'Kalinga University', location: 'Raipur' },

  { name: 'Dr C V Raman University', location: 'Bilaspur' },
  { name: 'Guru Ghasidas University', location: 'Bilaspur' },
  {
    name: 'Maharishi University of Management and Technology',
    location: 'Bilaspur',
  },
  {
    name: 'Pandit Sundarlal Sharma (Open) University',
    location: 'Bilaspur',
  },
  { name: 'Swami Vivekananda Technical University', location: 'Bhilai' },
] as const

export const famousPersonsOrdered = [] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Dakshina Kosala – Chattisgarh \nChattishgarh' as const

export const miscellaneousBlocks = [
  {
    heading: 'Chattishgarh',
    lines: ['1.	Rice Bowl of Central India'],
  },
  {
    heading: 'Bilaspur',
    lines: ['1.	Industrial Capital of Chhattisgarh '],
  },
  {
    heading: 'Korba',
    lines: ['1.	The Power Hub of Chhattisgarh '],
  },
  {
    heading: 'Jagdalpur',
    lines: ['1.	The Tourism Capital of Chhattisgarh'],
  },
  {
    heading: 'Durg',
    lines: ['1.	The Educational Capital of Chhattisgarh'],
  },

  {
    heading: 'Rayapur',
    lines: [
      '1.	State Forest Research and Training Institute',
      '2.	Institute of Chartered Financial Analysts of India (ICFAI)',
      '3.	International Institute of Information Technology (IIIT) – Naya Raipur',
    ],
  },
  {
    heading: 'Bilaspur',
    lines: ['1.	South East Central Railway (SECR)'],
  },
  {
    heading: 'Bhilai',
    lines: ['1.	Chatrapati Shivaji Institute of Technology (CSIT)'],
  },
  {
    heading: 'Raigarh',
    lines: ['1.	Junt Industry Centre '],
  },
  {
    heading: 'Khairagarh',
    lines: ['1.	Indira Kala Sangeet Vishwavidyalaya'],
  },
] as const
