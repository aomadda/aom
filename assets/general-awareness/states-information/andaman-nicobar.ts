export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const andamanNicobarHeaderLine = 'ANDAMAN & NICOBAR' as const

export const andamanNicobarBasicFacts = [
  { label: 'CAPITAL', value: 'Port Blair' },
  { label: 'ESTABLISHED', value: 'November 1, 1956' },
  { label: 'CHIEF MINISTER', value: '------' },
  { label: 'GOVERNOR', value: 'Admiral (Retd.) Devendra Kumar Joshi' },
  { label: 'RULING PARTY', value: '-------' },
  { label: 'HIGH COURT', value: 'Kolkata' },
  { label: 'STATE ANIMAL', value: 'Sea Cow' },
  { label: 'STATE BIRD', value: 'Andaman wood Pigeon' },
  { label: 'STATE TREE', value: 'Andaman Padauk' },
  { label: 'STATE FLOWER', value: '------' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Hindi,     Bengali,     Telugu,     Tamil,     Niocbarese,     Malayalam,     English',
  },
] as const

export type AndamanNicobarExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const andamanNicobarExtendedFacts: readonly AndamanNicobarExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'text', value: '---' },
  {
    label: 'BOUNDARY STATES (10)',
    kind: 'ordered',
    items: [
      'West Bengal',
      'Andhra Pradesh',
      'Tamil Nadu',
      'Puducherry',
      'Bay of Bengal',
      'Odisha',
      'Indian Ocean',
      'Myanmar',
      'Bangladesh',
      'Sri Lanka',
    ],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '8,249 sq km (1st),                 Density: 46 per kq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value: '3,80,581 (4th), \t\tMale = 2,02,871 & Female = 1,77,710\nMale : Female = 1000  : 878',
  },
  { label: 'LITERACY', kind: 'text', value: '---' },
  { label: 'ASSEMBLY', kind: 'text', value: '---' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  {
    label: 'TRIBES',
    kind: 'text',
    value:
      'Onges,\t\tAndamanese,\t\tChariar,\tChari,\t\tKora,\t\nBo,\t\t\tYere,\t\tKede,\t\tBea,\t\tBalawa,\nBojigiyab,\t\tJuwai,\t\tKol,\t\tJarawas,\tSentineles,\nOnges,\t\t\tShom Pens,       Tabo',
  },
  { label: 'FESTIVALS', kind: 'text', value: '---' },
  {
    label: 'DISTRICTS (3)',
    kind: 'ordered',
    items: ['Nicobar', 'North & Middle Andaman', 'South Andaman]'],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Shyamnagar',
      'Nabagram',
      'Mayabunder',
      'Uttara',
      'Herber – tahad',
      'Wandoor',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '-----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '-----', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: '-----', year: '--', location: '---' }] as const

export const riversOrdered = ['Kalpong'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: '------', river: '---', location: '-----' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: '-----', river: 'Subansiri', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '-----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '-----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type AndamanNicobarNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly AndamanNicobarNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export const nationalParksRows: readonly AndamanNicobarNpWlsRow[] = [
  { name: 'Saddle Peak National Park', year: '1979', location: '--' },
  { name: 'North Button Island National Park', year: '1979', location: '--' },
  {
    name: 'Mahatma Gandhi Marine N.P',
    year: '1983',
    location: 'South Andaman',
  },
  { name: 'Middle Button Island N.P', year: '1987', location: '--' },
  { name: 'South Button Island National Park', year: '1987', location: '--' },
  { name: 'Mount Harriet National Park', year: '1987', location: '--' },
  { name: 'Campbel Bay National Park', year: '1992', location: 'Great Nicobar' },
  { name: 'Galathea National Park', year: '1992', location: 'Great Nicobar' },
  {
    name: 'Rani Jhansi Marine National Park',
    year: '1996',
    location: 'Ritchie’s Archipelago',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly AndamanNicobarNpWlsRow[] = [
  { name: 'Arial Island W.L.S', year: '1987', location: '-' },
  { name: 'Bamboo Island W.L.S', year: '1987', location: '-' },
  { name: 'Barren Island W.L.S', year: '1997', location: '-' },
  { name: 'Battimlav Island W.L.S', year: '1985', location: '-' },
  { name: 'Belle Island W.L.S', year: '1987', location: '-' },
  { name: 'Benett Island W.L.S', year: '1987', location: '-' },
  { name: 'Bingham Island W.L.S', year: '1987', location: '-' },
  { name: 'Blister Island W.L.S', year: '1987', location: '-' },
  { name: 'Bluff Island W.L.S', year: '1987', location: '-' },
  { name: 'Bondoville Island W.L.S', year: '1987', location: '-' },
  { name: 'Brush Island W.L.S', year: '1983', location: '-' },
  { name: 'Buchanana Island W.L.S', year: '1987', location: '-' },
  { name: 'Channel Island W.L.S', year: '1987', location: '-' },
  { name: 'Cinque Island W.L.S', year: '1987', location: '-' },
  { name: 'Clyde Island W.L.S', year: '1987', location: '-' },
  { name: 'Cone Island W.L.S', year: '1987', location: '-' },
  { name: 'Curlew (B.P) Island W.L.S', year: '1987', location: '-' },
  { name: 'Curlew Island W.L.S', year: '1987', location: '-' },
  { name: 'Cuthbert Bay Island W.L.S', year: '1997', location: '-' },
  { name: 'Defence Island W.L.S', year: '1987', location: '-' },
  { name: 'Dot Island W.L.S', year: '1987', location: '-' },
  { name: 'Dottrell Island W.L.S', year: '1987', location: '-' },
  { name: 'Duncan Island W.L.S', year: '1987', location: '-' },
  { name: 'East Island W.L.S', year: '1987', location: '-' },
  { name: 'East of Inglis Island W.L.S', year: '1987', location: '-' },
  { name: 'Egg Island W.L.S', year: '1987', location: '-' },
  { name: 'Elat Island W.L.S', year: '1987', location: '-' },
  { name: 'Entrance Island W.L.S', year: '1987', location: '-' },
  { name: 'Gander Island W.L.S', year: '1987', location: '-' },
  { name: 'Girjan Island W.L.S', year: '1987', location: '-' },
  { name: 'Galathea Bay Island W.L.S', year: '1987', location: '-' },
  { name: 'Goose Island W.L.S', year: '1987', location: '-' },
  { name: 'Hump Island W.L.S', year: '1987', location: '-' },
  { name: 'Interview Island W.L.S', year: '1987', location: '-' },
  { name: 'James Island W.L.S', year: '1987', location: '-' },
  { name: 'Jungle Island W.L.S', year: '1987', location: '-' },
  { name: 'Kwantung Island W.L.S', year: '1987', location: '-' },
  { name: 'Kyd Island W.L.S', year: '1987', location: '-' },
  { name: 'Landfall Island W.L.S', year: '1987', location: '-' },
  { name: 'Latouche Island W.L.S', year: '1987', location: '-' },
  {
    name: 'Lohabarrak (Saltwater Crocodile) W.L.S',
    year: '1987',
    location: '-',
  },
  { name: 'Mangrove Island W.L.S', year: '1987', location: '-' },
  { name: 'Mask Island W.L.S', year: '1987', location: '-' },
  { name: 'Mayo Island W.L.S', year: '1987', location: '-' },
  { name: 'Megapode Island W.L.S', year: '1987', location: '-' },
  { name: 'Montogemery Island W.L.S', year: '1987', location: '-' },
  { name: 'Narcondam Island W.L.S', year: '1987', location: '-' },
  { name: 'North Brother Island W.L.S', year: '1987', location: '-' },
  { name: 'North Island W.L.S', year: '1987', location: '-' },
  { name: 'North Reef Island W.L.S', year: '1987', location: '-' },
  { name: 'Oliver Island W.L.S', year: '1987', location: '-' },
  { name: 'Orchid Island W.L.S', year: '1987', location: '-' },
  { name: 'Ox Island W.L.S', year: '1987', location: '-' },
  { name: 'Oyster Island – I W.L.S', year: '1987', location: '-' },
  { name: 'Oyster Island – II W.L.S', year: '1987', location: '-' },
  { name: 'Paget Island W.L.S', year: '1987', location: '-' },
  { name: 'Parkinson Island W.L.S', year: '1987', location: '-' },
  { name: 'Passage Island W.L.S', year: '1987', location: '-' },
  { name: 'Patric Island W.L.S', year: '1987', location: '-' },
  { name: 'Peacock Island W.L.S', year: '1987', location: '-' },
  { name: 'Pitman Island W.L.S', year: '1987', location: '-' },
  { name: 'Point Island W.L.S', year: '1987', location: '-' },
  { name: 'Potanma Island W.L.S', year: '1987', location: '-' },
  { name: 'Ranger Island W.L.S', year: '1987', location: '-' },
  { name: 'Reef Island W.L.S', year: '1987', location: '-' },
  { name: 'Roper Island W.L.S', year: '1987', location: '-' },
  { name: 'Ross Island W.L.S', year: '1987', location: '-' },
  { name: 'Rowe Island W.L.S', year: '1987', location: '-' },
  { name: 'Sandy Island W.L.S', year: '1987', location: '-' },
  { name: 'Sea Serpent Island W.L.S', year: '1987', location: '-' },
  { name: 'Shark Island W.L.S', year: '1987', location: '-' },
  { name: 'Shearme Island W.L.S', year: '1987', location: '-' },
  { name: 'Sir Hugh Rose Island W.L.S', year: '1987', location: '-' },
  { name: 'Sisters Island W.L.S', year: '1987', location: '-' },
  { name: 'Snake Island – I W.L.S', year: '1987', location: '-' },
  { name: 'Snake Island – II W.L.S', year: '1987', location: '-' },
  { name: 'South Brother Island W.L.S', year: '1987', location: '-' },
  { name: 'South Reef Island W.L.S', year: '1987', location: '-' },
  { name: 'South Sentinel Island W.L.S', year: '1987', location: '-' },
  { name: 'Spike Island – I W.L.S', year: '1987', location: '-' },
  { name: 'Spike Island – II W.L.S', year: '1987', location: '-' },
  { name: 'Stoat Island W.L.S', year: '1987', location: '-' },
  { name: 'Surat Island W.L.S', year: '1987', location: '-' },
  { name: 'Swamp Island W.L.S', year: '1987', location: '-' },
  { name: 'Table (Dolgarno) Island W.L.S', year: '1987', location: '-' },
  { name: 'Table (Excelsior) Island W.L.S', year: '1987', location: '-' },
  { name: 'Talabaicha Island W.L.S', year: '1987', location: '-' },
  { name: 'Temple Island W.L.S', year: '1987', location: '-' },
  { name: 'Tillongchang Island W.L.S', year: '1987', location: '-' },
  { name: 'Tree Island W.L.S', year: '1987', location: '-' },
  { name: 'Trilby Island W.L.S', year: '1987', location: '-' },
  { name: 'Tuft Island W.L.S', year: '1987', location: '-' },
  { name: 'Turtle Island W.L.S', year: '1987', location: '-' },
  { name: 'West Island W.L.S', year: '1987', location: '-' },
  { name: 'Wharf Island W.L.S', year: '1987', location: '-' },
  { name: 'White Cliff Island W.L.S', year: '1987', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Nil' as const
export const zooMuseumsRows: readonly { readonly name: string; readonly city: string }[] = []

export type AndamanNicobarAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows: readonly AndamanNicobarAirportRow[] = [
  {
    name: 'Vir Savarkar International Airport',
    city: 'Port Blair',
    category: 'Domestic',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly AndamanNicobarAirportRow[] = [
  {
    name: 'Car Nicobar Air Force Base',
    city: 'Car Nicobar',
    category: 'Defence',
  },
  { name: 'INS Baaz', city: 'Campbell Bay', category: 'Defence' },
  { name: 'INS Kohassa', city: 'Diglipur', category: 'Defence' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '------', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '-----', location: '---' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [{ name: '-----', location: '---' }] as const

export const famousPersonsOrdered = ['---'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph = '---' as const
export const miscellaneousBlocks: readonly { readonly heading: string; readonly lines: readonly string[] }[] = []
