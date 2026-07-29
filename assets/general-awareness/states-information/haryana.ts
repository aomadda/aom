export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const haryanaHeaderLine = 'HARYANA' as const

export const haryanaBasicFacts = [
  { label: 'CAPITAL', value: 'Chandigarh' },
  { label: 'ESTABLISHED', value: 'November 1, 1966 (from Punjab)' },
  { label: 'CHIEF MINISTER', value: 'Manohar Lal Khattar' },
  { label: 'GOVERNOR', value: 'Satyadev Narayan Arya' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Chandigarh (1975)' },
  { label: 'STATE ANIMAL', value: 'Black Buck' },
  { label: 'STATE BIRD', value: 'Black Fronkolin' },
  { label: 'STATE TREE', value: 'Peepal' },
  { label: 'STATE FLOWER', value: 'Lotus' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  { label: 'STATE LANGUAGE(S)', value: 'Hindi,     Punjabi,     Urdu,     Haryanvi' },
] as const

export const stateDancesOrdered = [
  'Thamal',
  'Koriya',
  'Duf',
  'Phag Dance',
  'Dhamal',
  'Loor',
  'Gagga',
  'Swang',
  'Gagor',
  'Ghoomar',
  'Jhumar',
] as const

export const boundaryStatesOrdered = [
  'Punjab',
  'Rajasthan',
  'Delhi',
  'Chandigarh',
  'Himachal Pradesh',
  'Uttarakhand',
] as const

export const tribesOrdered = ['---'] as const

export const festivalsOrdered = [
  'Holi',
  'Lohri',
  'Baisakhi',
  'Diwali',
  'Teej',
  'Sanjhi',
] as const

export const districtsOrdered = [
  'Ambala',
  'Bhiwani',
  'Charki Dadri',
  'Faridabad',
  'Fatehabad',
  'Gurgaon',
  'Hissar',
  'Jhajjar',
  'Jind',
  'Kaithal',
  'Karnal',
  'Kurukshetra',
  'Mahendragarh',
  'Nuh',
  'Palwal',
  'Panchkula',
  'Panipat',
  'Rewari',
  'Rohtak',
  'Sirsa',
  'Sonipat',
  'Yamuna Nagar',
] as const

export const mainCitiesOrdered = [
  'Panipat',
  'Kurukshetra',
  'Pinjore',
  'Ray',
  'Gurugram',
  'Binola',
  'Bahadurgarh',
  'Karnal',
  'Kaithal',
  'Palwal',
  'Rewari',
  'Sirsa',
  'Thanesar',
  'Ambala',
  'Panchkula',
  'Fatehabad',
  'Hisar',
  'Jhajjar',
  'Rothak',
  'Sonipat',
  'Nuh',
  'Mahendragarh',
  'Jind',
  'Yamunanagar',
] as const

export type HaryanaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const haryanaExtendedFacts: readonly HaryanaExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (6)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '44,212 sq km (21st),           	Density: 573 per sq. km',
  },
  {
    label: 'POPULATION- 2011',
    kind: 'text',
    value:
      '2,53,51,462 (18th), 		Males = 1,34,94,734 & Females = 1,18,56,728]\n    								Male : Female = 1000 = 877',
  },
  {
    label: 'LITERACY (2011)',
    kind: 'text',
    value: '83.78%',
  },
  { label: 'ASSEMBLY', kind: 'text', value: '90' },
  { label: 'LOK SABHA', kind: 'text', value: '10' },
  { label: 'RAJYA SABHA', kind: 'text', value: '¬Nill' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (22)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [{ name: '------', location: '---' }] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [{ name: '----', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Gorakhpur Atomic Power Station', year: '---', location: '---' },
  { name: 'Deenabandu Chotu Ram Thermal Power Station', year: '---', location: '---' },
  { name: 'Rajiv Gandhi Thermal Power Station', year: '---', location: '---' },
  { name: 'Panipat Thermal Power Station', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Ghagghar',
  'Yamuna',
  'Markhanda River',
  'Kaushalya River',
  'Tangri',
  'Saraswati River',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Sirajkhand Lake', river: '---', location: '---' },
  { name: 'Badkhal Lake', river: '---', location: 'Fardiabad' },
  { name: 'Blue Bird Lake', river: '---', location: 'Hisar' },
  { name: 'Chakarvati Lake', river: '---', location: '---' },
  { name: 'Karna Lake', river: '---', location: 'Karnal' },
  { name: 'Damdama Lake', river: '---', location: 'Sohna' },
  { name: 'Brahma Sarovar Lake', river: '---', location: 'Thaneswar' },
  { name: 'Tilyar Lake ', river: '---', location: 'Rothak' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Kaushalya Dam ', river: 'Kaushalya River', location: '---' },
  { name: 'Kathni Kund Barrage ', river: 'Yamuna River', location: '---' },
  { name: 'Tajewala Barrage – Yamuna River', river: 'Yamuna River', location: '---' },
  { name: 'Surajkund Reservoir (Lake of the Sun)', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{ name: '-----', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: ' -----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export type HaryanaTigerReserveRow = { readonly name: string; readonly year: string; readonly location: string }
export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly HaryanaTigerReserveRow[] = []

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesNote = 'Nil' as const
export const elephantReservesRows = [{ name: '---', year: '---', location: '---' }] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Sultanpur National Park ',
    year: '1991',
    location: 'Sultanpur Village (Gurugram District)',
  },
  {
    name: 'Kalesar National Park ',
    year: '2003',
    location: 'Yamunanagar District ',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTURIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Kalesar Wildlife Sanctuary ', year: '1996', location: '--' },
  { name: 'Khaparwas Wildlife Sanctuary ', year: '1987', location: 'Jhajjar District' },
  { name: 'Sultanpur Bird Sanctuary', year: '1972', location: 'Gurgaon' },
  { name: 'Nahar Wildlife Sanctuary ', year: '1987', location: 'Kosali' },
  { name: 'Chhilchhila Wildlife Sanctuary ', year: '1986', location: 'Bhoor Saiyda' },
  { name: 'Bindawas Wildlife Sanctuary ', year: '1986', location: 'Jhajjar' },
  { name: 'Saraswati Wildlife Sanctuary ', year: '1988', location: 'Pahowa' },
  { name: 'Bhir Shikargarh Wildlife Sanctuary ', year: '1987', location: 'Pinjore' },
  { name: 'Abubshahar Wildlife Sanctuary ', year: '1987', location: 'Mandi Dabwali' },
  { name: 'Morni Hills (Khol Hi – Raitan) W.L.S', year: '2004', location: 'Panchkula' },
  { name: ' Bir Bara Ban Wildlife Sanctuary ', year: '2007', location: '--' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM :' as const
export const zooMuseumsRows = [
  { name: 'Black Buck Breeding Centre', city: 'Kurukshetra' },
  { name: 'Chinkara Breeding Centre', city: 'Bahal' },
  { name: 'Hisar Deer Park', city: '---' },
  { name: 'Peacock and Chinkara Breeding Centre', city: 'Rewari' },
  { name: 'Pheasant Breeding Centre', city: 'Berwala (Panchkula District)' },
  { name: 'Pheasant Breeding Centre ', city: 'Morni (Panchkula District)' },
  { name: 'Rothak Zoo', city: '-----' },
  { name: 'Bhor Saidan Crocodile Breeding Centre', city: 'Kurukshetra' },
  { name: 'Steam Locomotive Museum', city: 'Rewari' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = 'Nil' as const
export type HaryanaInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly HaryanaInternationalAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Ambala Air Force Station', city: 'Ambala', category: 'Defence' },
  { name: ' Bhiwani Airport', city: 'Bhiwani', category: 'Domestic' },
  { name: 'Gurugram Airstrip', city: 'Gurugram', category: 'Domestic' },
  { name: 'Hisar Airport', city: 'Hisar', category: 'Domestic' },
  { name: 'Karnal Airport', city: 'Karnal', category: 'Domestic' },
  { name: 'Narnaul Airport', city: 'Narnaul', category: 'Domestic' },
  { name: 'Pinjore Airport', city: 'Panchkula', category: 'Domestic' },
  { name: 'Sirsa Air Force Station', city: 'Sirsa', category: 'Defence' },
] as const

export type HaryanaStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly HaryanaStadiumRow[] = [
  { name: 'Nahar Singh Cricket Stadium', location: 'Faridabad' },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'Indian Institute of Management (IIM)', location: 'Rothak' },
  { name: 'National Institute of Technology (NIT)', location: 'Kurukshetra' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  { name: 'Indian National Defence University ', location: 'Gurgaon' },
  { name: 'Amity University', location: 'Gurgaon' },
  { name: 'Al – Falah University', location: 'Faridabad' },
  { name: 'Lingaya’s University ', location: 'Faridabad' },
  { name: 'Manav Rachna International University ', location: 'Faridabad' },
  { name: 'National Dairy Research University ', location: 'Karnal' },
  { name: 'Maharana Pratap Horticulture University ', location: 'Karnal' },
  { name: 'Chaudhary Devi Lal University ', location: 'Sirsa' },
  { name: 'Chaudhary Charan Singh Haryana Agricultural University ', location: 'Hisar' },
  { name: ' Guru Jambheshwar University of Science & Technology    ', location: 'Hisar' },
  { name: ' Lala Lajipat Rai University of Veterinary & Animal Sciences', location: 'Hisar' },
  { name: ' Maharshi Dayanand University ', location: 'Rothak' },
  { name: ' Pandit Bhagwat Dayal Sharma University of Health Sciences     ', location: 'Rothak' },
  { name: ' World University of Design ', location: 'Sonipat' },
  { name: ' Indian National Defence University ', location: 'Binola' },
  { name: ' Maharshi Markandeshwar University ', location: 'Ambala' },
  { name: ' Central University of Haryana ', location: 'Mahendragarh' },
  { name: ' Indira Gandhi University Meerpur ', location: 'Rewari' },
  { name: ' Chaudhary Bansi Lal University ', location: 'Bhiwani' },
  { name: ' Chaudhary Ranbir Singh University ', location: 'Jind' },
  { name: ' Deenbandhu Chhotu Ram University of Science & Technology ', location: 'Murthal' },
  { name: ' Haryana Vishwakarma Skill University ', location: 'Dudhola' },
] as const

export const famousPersonsOrdered = [
  'Kalpana chawla',
  'Susma swaraj',
  'Kapil Dev (Haryana hurricane)',
  'Chaudhary Devi Lal – Lion of Haryana',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph = 'Nil' as const

export const miscellaneousBlocks = [
  {
    heading: 'Haryana',
    lines: ['1.	Abode of God ', '2.	Milk Pail of India '],
  },
  {
    heading: 'Panipat',
    lines: ['1.	City of Weavers '],
  },
  {
    heading: 'Faridabad',
    lines: ['1.	Industrial City of Haryana '],
  },
  {
    heading: 'Ambala',
    lines: ['1.	City of Scientific Instruments '],
  },
  {
    heading: 'Rewari ',
    lines: ['1.	Brass Capital of Haryana'],
  },
  {
    heading: 'Gurgaon (Gurugram)',
    lines: [
      '1.	Indian School of Communications & Reputations        ',
      '2.	National Institute of Solar Energy ',
    ],
  },
  {
    heading: 'Faridabad',
    lines: ['1.	National Hydroelectric Power Corporation (NHPC)                  '],
  },
  {
    heading: 'Karnal',
    lines: [
      '1.	National Dairy Research Institute                                     \t ',
      '2.	Central Soil Salinity Research Institute \t\t\t\t       ',
    ],
  },
  {
    heading: 'Hisar ',
    lines: [
      '1.	Haryana Institute of Civil Aviation – Hisar & Karnal & Kalka',
      '2.	Central Institute of Research on Buffaloes 			   ',
    ],
  },
  {
    heading: 'Sonipat ',
    lines: [
      '1.	Bhagat Phool Singh Mahila Vishwavidyalaya                         ',
      '2.	National Institute of Food Technology Entrepreneurship & Management (NIFTEM) ',
      '3.	India International Horticulture Market (IIHM) 			    ',
    ],
  },
  {
    heading: 'Manesar',
    lines: ['1.	National Brain Research Centre'],
  },
  {
    heading: 'Ray',
    lines: ['1.	Nehru School of Sports                                                        '],
  },
  {
    heading: 'Ballabgarh ',
    lines: ['1.	Cement Research Institute of India                                   '],
  },
  {
    heading: 'Jhajjar ',
    lines: ['1.	PG Institute for Research in Yoga                                             '],
  },
  {
    heading: 'Rewari',
    lines: ['1.	Brass Capital of Haryana'],
  },
] as const
