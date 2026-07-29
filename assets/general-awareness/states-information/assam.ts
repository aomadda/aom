export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const assamHeaderLine = 'ASSAM (ASOM)' as const

export const assamBasicFacts = [
  { label: 'CAPITAL', value: 'Dispur' },
  { label: 'ESTABLISHED', value: '26 January 1950' },
  { label: 'CHIEF MINISTER', value: 'Himanta B Sharma' },
  { label: 'GOVERNOR', value: 'Lakshman Prasad Acharya' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Guhavathi' },
  { label: 'STATE ANIMAL', value: 'One – horned Rhino' },
  { label: 'STATE BIRD', value: 'White Pagad Wood Duck' },
  { label: 'STATE TREE', value: 'Hollong' },
  { label: 'STATE FLOWER', value: 'Foxtail Orchids' },
  { label: 'STATE FRUIT', value: '' },
  { label: 'STATE EMBLEM', value: '' },
  { label: 'STATE SONG', value: 'O Mur Apunar Dex' },
  { label: 'STATE SPORT', value: 'Dhopkhel' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Assamese (State Language),     Bengali,     Bodo,     Meitei,     Hindi',
  },
] as const

export const stateDancesOrdered = [
  'Bihu Dance (State Dance)',
  'Jhumur dance (Traditional Dance)',
  'Bishaki Bihu (Folk Dance)',
  'Khanoy',
  'Nongkrem',
  'Khelgopal',
  'Bagurumba',
  'Naga Dance',
  'Maharas',
  'Ojapali',
  'Sattriya (Classical Dance)',
] as const

export const stateRiverOrdered = ['Brahmaputra', 'Barak'] as const

export const boundaryStatesOrdered = [
  'Meghalaya',
  'Nagaland',
  'Manipur',
  'Tripura',
  'Mizoram',
  'West Bengal',
  'Bhutan',
  'Bangladesh',
  'Arunachal Pradesh',
] as const

export const tribesOrdered = [
  'Bodo (Karbi)',
  'Garo',
  'Khasi',
  'Avo',
  'Mickry',
  'Chutiya',
] as const

export const festivalsOrdered = [
  'Wanchuwa Festival',
  'Bhagel Bihu',
  'Bohag Bihu',
  'Kati Bihu',
  'Konyak Nagas',
  'Ambubachi Mela',
  'Durga Puja',
  'Eid ul – Fitr',
  'Bushu Dima',
  'Jatinga',
  'Parasuram Mela',
  'Bwisagu',
  'Rangoli Bihu',
  'Bagurumba Dwho',
] as const

export const districtsOrdered = [
  'Baksa',
  'Barpeta',
  'Bishwanath',
  'Bongaigaon',
  'Cachar',
  'Charaideo',
  'Chirang',
  'Drrang',
  'Dhemaji',
  'Dhuri',
  'Dibrugarh',
  'Dima Hasao',
  'Goalpara',
  'Golaghat',
  'Hailakandi',
  'Hojai',
  'Jorhat',
  'Karbi Anglong',
  'Kamrup',
  'Karimganj',
  'Korajhar',
  'Lakhimpur',
  'Majuli',
  'Morigaon',
  'Nagaon',
  'Nalbari',
  'Sivasagar',
  'Sonitpur',
  'Tinsukia',
  'Udalguri',
  'West Karbi Anglong',
  'Kamrup Metropolitan',
  'South Salmara – Mankachar',
] as const

export const mainCitiesOrdered = [
  'Guwahati',
  'Dispur',
  'Jorhat',
  'Karimganj',
  'Silchar',
  'Diphu',
  'Nagaon',
  'Marigaon',
  'Barpeta',
  'Dhuburi',
  'Matia',
  'Dibrugarh (Brahmaputra River)',
] as const

export type AssamExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const assamExtendedFacts: readonly AssamExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'STATE RIVER', kind: 'ordered', items: stateRiverOrdered },
  { label: 'BOUNDARY STATES (9)', kind: 'ordered', items: boundaryStatesOrdered },
  { label: 'AREA', kind: 'text', value: '78, 550 sq km (16th)' },
  {
    label: 'POPULATION (2011)',
    kind: 'text',
    value:
      '3,12,05,576 (15th) Males = 1,59,39,443 and Females = 1,52,66,133 Male : Female = 1000 : 954',
  },
  { label: 'LITERACY', kind: 'text', value: '72.19%' },
  { label: 'ASSEMBLY', kind: 'text', value: '126' },
  { label: 'LOK SABHA', kind: 'text', value: '14' },
  { label: 'RAJYA SABHA', kind: 'text', value: '7' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (33)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
]

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Kamakhya Temple', location: '-----' },
  { name: 'Surkeswar Temple', location: '-----' },
  { name: 'Madan Kamdev Temple', location: '-----' },
  { name: 'Gita Mandir', location: '-----' },
] as const

export const industriesSectionTitle = 'INDUSTRIES :' as const
export const industriesRows = [{ name: '------', year: '----', location: '----' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Bongaigaon Thermal Power Plant', year: '---', location: '---' },
  { name: 'Lakwa Thermal Power Station', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Brahmaputra – Sorrow of Assam',
  'Manas',
  'Subansiri',
  'Sonai',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Chandubi Lake', river: '---', location: 'Kamrup' },
  { name: 'Haflong Lake', river: '---', location: 'Silchar' },
  { name: 'Deepor Beel Lake', river: '---', location: 'Kamrup' },
  { name: 'Saron Lake', river: '---', location: '---' },
  { name: 'Son Beel Lake', river: '---', location: 'Karimganj' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [{ name: '-------', river: 'Subansiri', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{ name: '-------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: '------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '--------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const
export const biosphereRows: readonly {
  name: string
  year: string
  location: string
  area: string
}[] = []

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesRows = [
  {
    name: 'Manas Tiger Reserve',
    year: '1974',
    location: 'Chirang & Baksa District',
    area: '950',
  },
  {
    name: 'Nameri Tiger Reserve',
    year: '2000',
    location: 'Sonitpur',
    area: '200',
  },
  {
    name: 'Kaziranga Tiger Reserve',
    year: '2009',
    location: 'Golaghat & Nagaon',
    area: '430',
  },
  {
    name: 'Orang Tiger Reserve',
    year: '2016',
    location: 'Udalguri & Sonitpur Districts',
    area: '78.81',
  },
] as const

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesRows = [
  {
    name: 'Sonipur Elephant Reserve',
    year: '2003',
    location: 'Eastern Himalayas',
    area: '1420',
  },
  {
    name: 'Dihing-Patkai Elephant Reserve',
    year: '2003',
    location: 'Dibrugarh & Tinsukia Dist',
    area: '937',
  },
  {
    name: 'Kaziranga-Karbi Anglong E.R',
    year: '2003',
    location: 'Central Assam',
    area: '3270',
  },
  {
    name: 'Dhansiri-Lungding E.R',
    year: '2003',
    location: 'Karbi Anglong District',
    area: '2740',
  },
  {
    name: 'Chirang-Ripu Elephant Reserve',
    year: '2003',
    location: 'Western Assam',
    area: '2600',
  },
] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesNote = 'Nil' as const
export const ramsarSitesRows = [
  { name: 'Deepor Beel', year: '2002', location: 'Kamrup District', area: '40' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Kaziranga National Park',
    year: '1974',
    location: 'Golaghat & Nagaon District',
    area: '858.98',
  },
  {
    name: 'Nameri National Park',
    year: '1978',
    location: 'Sonitpur',
    area: '137.07',
  },
  {
    name: 'Manas National Park',
    year: '1990',
    location: 'Chirang & Baksa',
    area: '950',
  },
  {
    name: 'Dibru – Saikhowa National Park',
    year: '1999',
    location: 'Dibrugarh & Tinsuka District',
    area: '340',
  },
  {
    name: 'Orang National Park',
    year: '1999',
    location: 'Udalguri & Sonitpur Districts',
    area: '78.81',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Amchang Wildlife Sanctuary', year: '2004', location: '--', area: '78.64' },
  { name: 'Chakrashila Wildlife Sanctuary', year: '1994', location: '--', area: '45.56' },
  { name: 'Nambor Wildlife Sanctuary', year: '2000', location: '--', area: '37' },
  { name: 'Dihing Patkai Wildlife Sanctuary', year: '2004', location: '--', area: '111.19' },
  { name: 'East Karbi Anglong W.L.S', year: '2000', location: '--', area: '221.81' },
  { name: 'Garampani Wildlife Sanctuary', year: '1952', location: '--', area: '6.05' },
  { name: 'Barail Wildlife Sanctuary', year: '2004', location: '--', area: '326.25' },
  { name: 'Barnadi Wildlife Sanctuary', year: '1980', location: '--', area: '26.22' },
  { name: 'Bherjan – Borajan Padummoni W.L.S', year: '1999', location: '--', area: '7.22' },
  { name: 'Bura Chapori Wildlife Sanctuary', year: '1995', location: '--', area: '44.06' },
  { name: 'Deepor Beel Wildlife Sanctuary', year: '--', location: '--', area: '4.14' },
  { name: 'Hollongapar Gibbon W.L.S', year: '1997', location: '--', area: '20.98' },
  { name: 'Lawkhowa Wildlife Sanctuary', year: '1972', location: '--', area: '70.14' },
  { name: 'Marat Longri Wildlife Sanctuary', year: '2003', location: '--', area: '451' },
  { name: 'Nambor Doigrung W.L.S', year: '2003', location: '--', area: '97.15' },
  { name: 'Porbitora Wildlife Sanctuary', year: '1987', location: '--', area: '38.81' },
  { name: 'Pani – Dihing Bird W.L.S', year: '1995', location: '--', area: '33.93' },
  { name: 'Sonai Rupai Wildlife Sanctuary', year: '1998', location: '--', area: '220' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUMS :' as const
export const zooMuseumsRows = [
  { name: 'Assam State Zoo – Cum – Botanical Garden', city: 'Guwahati' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsRows = [
  {
    name: 'Lokpriya Gopinath Bordololi International Airport',
    city: 'Guwahati',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Chabua Air Force Station', city: 'Chabua', category: 'Defence' },
  { name: 'Dibrugarh Airport', city: 'Dibrugarh', category: 'Domestic' },
  { name: 'Dinjan Airfield', city: 'Dinjan', category: 'Defence' },
  { name: 'Jorhat Airport', city: 'Jorhat', category: 'Domestic' },
  { name: 'Ledo Airfield', city: 'Ledo', category: 'Defence' },
  { name: 'Lilabari Airport', city: 'North Lakhimpur', category: 'Domestic' },
  { name: 'Rupsi Airport', city: 'Dhubri', category: 'Domestic' },
  { name: 'Silchar Airport', city: 'Silchar', category: 'Domestic' },
  { name: 'Sookerating Air Force Station', city: 'Doom Dooma', category: 'Defence' },
  { name: 'Tezpur Airport', city: 'Tezpur', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly { name: string; location: string }[] = []

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'Indian Institute of Technology (IIT)', location: 'Guwahati' },
  { name: 'Indian Institute of Information Technology (IIIT)', location: 'Guwahati' },
  { name: 'National Institute of Technology (NIT)', location: 'Silchar' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  { name: 'Assam Agricultural University', location: 'Jorhat' },
  { name: 'Assam Women’s University', location: 'Jorhat' },
  { name: 'Bodoland University', location: 'Kokrajhar' },
] as const

export const famousPersonsOrdered = [
  'Indira Goswami',
  'Hemachandra Goswami',
  'Hemachandra Baruva',
  'Bhupen Hazarika (Bard of Brahmaputhra) – Bharat Ratna 2019',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const

export const miscellaneousIntroParagraph =
  'Umananda Island (Peacock Island) = Small Island in the midst of the River Brahmaputra' as const

export const miscellaneousBlocks = [
  {
    heading: 'ASSAM',
    lines: [
      '1. Gate Way of North – East India',
      '2. The Land of Red River & Blue Hills',
      '3. Tea State/Garden of India',
      '4. Lungs of the North – East',
      '5. Muga Silk is produced only in Assam State in the world',
    ],
  },
  {
    heading: 'DIBRUGARH',
    lines: ['1. Tea City of India'],
  },
  {
    heading: 'TEZPUR',
    lines: ['1. City of Blood'],
  },
  {
    heading: 'SALKUCHI',
    lines: ['1. Manchester of East'],
  },
  {
    heading: 'GUWAHATI',
    lines: [
      '1. Central Institute of Plastics Engineering and Technology – Changsari',
      '2. Mahabahu Brahmaputra River Heritage CentreMAH',
    ],
  },
  {
    heading: 'TEZPUR',
    lines: ['1. Indian Statistical Institute'],
  },
  {
    heading: 'DARRANG',
    lines: ['1. Skill University'],
  },
] as const
