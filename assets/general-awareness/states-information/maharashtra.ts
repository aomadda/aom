
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const maharashtraHeaderLine = 'MAHARASHTRA' as const

export const maharashtraBasicFacts = [
  { label: 'CAPITAL', value: "Mumbai (2nd Capital = Nagpur in winter)" },
  { label: 'ESTABLISHED', value: "1 May 1960" },
  { label: 'CHIEF MINISTER', value: "Uddhay Thakarey" },
  { label: 'GOVERNOR', value: "Bhagat Singh Kotari" },
  { label: 'RULING PARTY', value: "Siva Sena" },
  { label: 'HIGH COURT', value: "Mumbai, 1862" },
  { label: 'STATE ANIMAL', value: "Indian Giant Squirrel" },
  { label: 'STATE BIRD', value: "Yellow footed Green Pigeon" },
  { label: 'STATE TREE', value: "Mango" },
  { label: 'STATE FLOWER', value: "Jarul" },
  { label: 'STATE FRUIT', value: "---" },
  { label: 'STATE EMBLEM', value: "---" },
  { label: 'STATE SONG', value: "---" },
  { label: 'STATE SPORT', value: "Kabaddi" },
  {
    label: 'STATE LANGUAGE(S)',
    value: "Marathi (State Language),     English,     Hindi,   Konkani,",
  },
] as const


export type MaharashtraExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const maharashtraExtendedFacts: readonly MaharashtraExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: ["Lavani (State Dance)","Dashavatar","Lezim (folk dance)","Dahikala","Mauni","Thamasha","Povadas","Bhondla","Dindi","Dhangri Gaja","Dhangarj Gaja","Koli"] },
  { label: 'BOUNDARY STATES (7)', kind: 'ordered', items: ["Madhya Pradesh","Gujarath","Chhattisgarh","Telangana","Karnataka","Arabian Sea","Goa"] },
  {
    label: 'AREA',
    kind: 'text',
    value: "3,07,713 sq km (3rd),               Density: 370 per sq. km",
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value: "11,23, 74,333 (2nd), \t\tMales = 5,82,43, 056 & Females = 5,41,31, 277\n       \t\t\t\t\t\t\t\tMale : Female = 1000 : 925",
  },
  { label: 'LITERACY', kind: 'text', value: "82.90%" },
  { label: 'ASSEMBLY', kind: 'text', value: "288" },
  { label: 'LOK SABHA', kind: 'text', value: "48" },
  { label: 'RAJYA SABHA', kind: 'text', value: "19" },
  { label: 'TRIBES', kind: 'ordered', items: ["Varlilu","Garlis","Bhil","Gond – Madia","Katkari","Koli","Oraon"] },
  { label: 'FESTIVALS', kind: 'ordered', items: ["Gudi padva","Dev divali","Navaratri","Ganapati festival","Hatti Risala"] },
  { label: 'DISTRICTS (36)', kind: 'ordered', items: ["Ahmedanagar","Akola","Amravati","Beed","Bhandara","Aurangabad","Chandrapur","Dhule","Gondia","Hingoli","Gadchiroli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai Suburban","Buldhana","Nanded","Nandurbar","Nagpur","Mumbai City","Parbhani","Pune","Raighad","Ratnagiri","Osmanabad","Solapur","Thane","Wardha","Washim","Sindhudurg","Nasik","Palghar","Sangli","Satara","Yavatmal"] },
  { label: 'MAIN CITIES', kind: 'ordered', items: ["Aurangabad","Nagapur","Ratnagiri","Thane","Pune","Ahmadanagar","Dhule","Lathur","Sholapur","Sindri","Khadak vasla","Bhusawal","Jalgaon","Jalna","Kolhapur","Amravati","Wardha","Latur","Raighad","Trambe","Trambe","Satara","Akhola","Nasik (Godavari River)","Pandharpur (Bhima River)","Mumbai (Mithi River)"] },
] as const


export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID :' as const
export const templesRows = [{"name":"Siddivinayak Temple","location":"---"},{"name":"Trimbakeswar Temple","location":"Nasik"},{"name":"Shirdi Sai Baba Temple","location":"Shirdi"},{"name":"Kailasa Temple","location":"---"}] as const

export const industriesSectionTitle = 'INDUSTRIES :' as const
export const industriesRows = [{"name":"Security Paper Mill","year":"---","location":"Nasik"},{"name":"Currency Printing Press","year":"---","location":"Nasik"},{"name":"Ratnagiri Mines","year":"---","location":"Ratnagiri district"}] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [{"name":"Tarapur Atomic power plant","year":"---","location":"---"},{"name":"Jaitapur Atomic Power Plant","year":"---","location":"---"},{"name":"Trambe Thermal Power Plant","year":"---","location":"---"},{"name":"Chandrapur Super Thermal Power Plant","year":"---","location":"---"},{"name":"Koradi Thermal Power Plant","year":"---","location":"---"},{"name":"Tirora Thermal Power Plant","year":"---","location":"---"},{"name":"Amaravati Thermal Power Plant","year":"---","location":"---"},{"name":"Koyina Hydro Power Plant","year":"---","location":"---"},{"name":"Thal Heavy Water Plant","year":"---","location":"---"}] as const

export const riversOrdered = ["Godavari","Krishna","Kashyapi River","Mootha","Bhima","Penganga","Manjira","Varna","Panjhara","Wardha","Wainganga","Purna","Dudhana","Pravara","Mula","Ghod","Sina","Tima","Waghur","Terekhoi","Girna","Venna"] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [{"name":"Cratet Lake","river":"---","location":"---"},{"name":"Lonar Lake","river":"---","location":"Buldhana"},{"name":"Tansa Lake","river":"---","location":"---"},{"name":"Beale Lake","river":"---","location":"---"},{"name":"Mulshi Lake","river":"---","location":"---"},{"name":"Rangala Lake","river":"---","location":"---"},{"name":"Shiva Sagar Lake","river":"---","location":"Satara"},{"name":"Salim Ali Lake","river":"---","location":"Aurangabad"}] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [{"name":"Koyna Reseroir","river":"---","location":"---"},{"name":"Koyna Dam","river":"Koyna river","location":"---"},{"name":"Pawna Dam","river":"Pawna River","location":"---"},{"name":"Mulshi Dam","river":"Mula River","location":"---"},{"name":"Bhandardara Dam Arthur Lake","river":"---","location":"---"},{"name":"Vaitarna Dam","river":"Vaitarna River","location":"---"},{"name":"Khandakwasla","river":"Mutha River","location":"---"},{"name":"Girna Dam","river":"Girna River","location":"---"},{"name":"Jayakwadi Dam","river":"---","location":"---"},{"name":"Wilson Dam","river":"Pravara River","location":"---"},{"name":"Kashyapi Dam","river":"Kashyapi River","location":"Nasik"}] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{"name":"Kune Waterfalls","location":"Pune"},{"name":"Pandavgadh Waterfalls","location":"Thane"}] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{"name":"Mumbai Port","location":"---"},{"name":"Jawaharlal Nehru Port","location":"---"},{"name":"Navasheva Port (Jawaharlal Nehru Port)","location":"---"}] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{"name":"Elephenta Caves","location":"Mumbai"},{"name":"Ajantha Caves","location":"Aurangabad"},{"name":"Ellora Caves","location":"Aurangabad"},{"name":"Thrimoorthi Caves","location":"---"},{"name":"Malabar Hills","location":"Mumbai"},{"name":"Kanheri Caves","location":"Mumbai"}] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows = [{"name":"Melghat Tiger Reserve","year":"1974","location":"Amravati District"},{"name":"Thadoba Andhari T.R","year":"1994","location":"Chandrapur District"},{"name":"Pench Tiger Reserve","year":"1999","location":"Seoni District"},{"name":"Sahyadri Tiger Reserve","year":"2010","location":"Western Ghats"},{"name":"Nagzira – Navegaon Tiger Reserve","year":"2013","location":"Gondia District"},{"name":"Bor Tiger Reserve","year":"2014","location":"Wardha District"}] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [{"name":"Tadoba National Park","year":"1955","location":"Mumbai"},{"name":"Sanjay Gandhi National Park","year":"1969","location":"Mumbai"},{"name":"Navegaon National Park","year":"1975","location":"Gondia District"},{"name":"Gugamal National Park","year":"1987","location":"Amravati District"},{"name":"Chandoli National Park","year":"2004","location":"Satara, Kolhapur & Sangli Districts"}] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [{"name":"Thansa W.L.S","year":"1970","location":"Thane"},{"name":"Amba Barwa W.L.S","year":"1997","location":"-"},{"name":"Andhari W.L.S","year":"1986","location":"-"},{"name":"Gautala – Autramghat W.L.S","year":"1986","location":"-"},{"name":"Mansingdeo W.L.S","year":"2010","location":"-"},{"name":"Naigaon Mayur W.L.S","year":"1994","location":"-"},{"name":"Thane Creek Flamingo W.L.S","year":"2015","location":"-"},{"name":"Yawal W.L.S","year":"1969","location":"-"},{"name":"Yedsi Ramlin Ghat W.L.S","year":"1997","location":"-"},{"name":"Umred – Kharngla W.L.S","year":"2012","location":"-"},{"name":"Mhadei Wildlife Sanctuary","year":"---","location":"---"},{"name":"Narnala Bird W.L.S","year":"1997","location":"-"},{"name":"Dhyanganga W.L.S","year":"1997","location":"-"},{"name":"Chaprala W.L.S","year":"1986","location":"-"},{"name":"Deolgaon – Rehkuri W.L.S","year":"1980","location":"-"},{"name":"Painganga W.L.S","year":"1986","location":"-"},{"name":"Lonar W.L.S","year":"2000","location":"-"},{"name":"Radhangari W.L.S","year":"1958","location":"-"},{"name":"Bor W.L.S","year":"1970","location":"-"},{"name":"Bhamargarh W.L.S","year":"1997","location":"-"},{"name":"Aner Dam W.L.S","year":"1986","location":"-"},{"name":"Bhimashankar W.L.S","year":"1985","location":"-"},{"name":"Great Indian Bustard Sanctuary","year":"1979","location":"Sholapur"},{"name":"Koyana W.L.S","year":"1985","location":"-"},{"name":"Jaikwadi W.L.S","year":"1986","location":"-"},{"name":"Kalsubai Harichandragad W.L.S","year":"1986","location":"-"},{"name":"Malvan Marine W.L.S","year":"1987","location":"-"},{"name":"Mayureswar Super W.L.S","year":"1997","location":"-"},{"name":"Nagzira W.L.S","year":"1970","location":"-"},{"name":"Katepurna W.L.S","year":"1988","location":"-"},{"name":"Melghat W.L.S","year":"1985","location":"-"},{"name":"Tipeswar W.L.S","year":"1997","location":"-"},{"name":"Phansad W.L.S","year":"1986","location":"-"},{"name":"Nawegaon W.L.S","year":"2012","location":"-"},{"name":"New Bor W.L.S","year":"2012","location":"-"},{"name":"New Nagzira W.L.S","year":"2012","location":"-"},{"name":"Karanja Sohal Blackbuck W.L.S","year":"2000","location":"-"},{"name":"Sagareshwar W.L.S","year":"1985","location":"-"},{"name":"Nandur Madhameswar W.L.S","year":"1986","location":"-"},{"name":"Tungareshwar W.L.S","year":"2003","location":"-"},{"name":"Karnala Bird W.L.S","year":"1968","location":"Mumbai"},{"name":"Mayani Bird Sanctuary","year":"---","location":"Vaduj"}] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM :' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [{"name":"Jijamata Udyaan","city":"Mumbai"},{"name":"Maharajbagh Zoo","city":"Nagpur"},{"name":"Rajiv Gandhi Zoological Park","city":"Pune"},{"name":"Prince of Wales Museum","city":"Mumbai"}] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows = [{"name":"Chhatrapati Shivaji Maharaj International Airport","city":"Mumbai","category":"International"},{"name":"Dr. Babasaheb Ambedkar International Airport","city":"Nagpur","category":"International"},{"name":"Nashik International Airport","city":"Nashik","category":"International"}] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [{"name":"Aamby Valley Airport","city":"Aamby Valley City","category":"Private"},{"name":"Akola Airport","city":"Akola","category":"Domestic"},{"name":"Amravati Airport","city":"Amravati","category":"Domestic"},{"name":"Aurangabad Airport","city":"Aurangabad","category":"Domestic"},{"name":"Baramati Airport","city":"Baramati","category":"Domestic"},{"name":"Chandrapur Airport","city":"Chandrapur","category":"Domestic"},{"name":"Chandrapur Greenfield Airport","city":"Chandrapur","category":"Domestic"},{"name":"Dhule Airport","city":"Dhule","category":"Domestic"},{"name":"Gondia Airport","city":"Gondia","category":"Domestic"},{"name":"Jalgaon Airport","city":"Jalgaon","category":"Domestic"},{"name":"Kalyan Airstrip","city":"Kalyan","category":"Domestic"},{"name":"Karad Airport","city":"Karad","category":"Domestic"},{"name":"Chhatrapati Rajaram Maharaj Airport","city":"Kolhapur","category":"Domestic"},{"name":"Juhu Aerodrome","city":"Mumbai","category":"Domestic"},{"name":"Shri Guru Gobind Singh Ji Airport","city":"Nanded","category":"Domestic"},{"name":"Gandhinagar Airport","city":"Nashik","category":"Defense"},{"name":"Navi Mumbai International Airport","city":"Navi Mumbai","category":"Domestic"},{"name":"Osmanabad Airport","city":"Osmanabad","category":"Domestic"},{"name":"Hadapsar Airport","city":"Pune","category":"Domestic"},{"name":"Pune Airport","city":"Pune","category":"Domestic"},{"name":"Chhatrapati Sambhaji Raje International Airport","city":"Pune","category":"Domestic"},{"name":"Ratnagiri Airport","city":"Ratnagiri","category":"Defense"},{"name":"Shirdi Airport","city":"Shirdi","category":"Domestic"},{"name":"Shirpur Airstrip","city":"Shirpur","category":"Private"},{"name":"Sindhudurg Airport","city":"Sindhudurg","category":"Domestic"},{"name":"Solapur Airport","city":"Solapur","category":"Domestic"},{"name":"Yavatmal Airport","city":"Yavatmal","category":"Domestic"},{"name":"Latur Airport","city":"Latur","category":"Domestic"}] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows = [{"name":"Wankhede Cricket Stadium","location":"Mumbai"},{"name":"Gymkhana Cricket Stadium","location":"Mumbai"},{"name":"Dr. D Y Patil Stadium (Football & Cricket)","location":"Mumbai"},{"name":"Brabourne Cricket Stadium","location":"Mumbai"},{"name":"Mahindra Hockey Stadium","location":"Mumbai"},{"name":"Nehru Cricket Stadium","location":"Pune"},{"name":"VCA Cricket Stadium","location":"Nagpur"},{"name":"Guru Gobind Singh Cricket Stadium","location":"Nanded"},{"name":"Dadaji Kondadev Football Stadium","location":"Thane"}] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [{"name":"Indian Institute of Technology (IIT)","location":"Mumbai"},{"name":"Indian Institute of Information Technology (IIIT)","location":"Nagpur + Pune"},{"name":"All India Institute of Medical Sciences (AIIMS)","location":"Nagapur"},{"name":"Indian Institute of Information Technology (IIIT)","location":"Nagpur + Pune"},{"name":"Indian Institute of Management (IIM)","location":"Nagapur"}] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [{"name":"Symbiosis International University","location":"Pune"},{"name":"Swami Ramanand Teerth Marathwada University","location":"Nanded"},{"name":"Sant Gadge Baba Amravati University","location":"Amravati"}] as const

export const famousPersonsOrdered = ["Gopala Krishna Gokhale","Prabitha patil","B R Ambedkar","Ratan Tata","Bal Gangadhar Tilak (Lokmanya & Father of Indian Unrest & Maratha Kesari)","Salim Ali – Bird Man of India"] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph = "Ajantha Caves – Aurangabad (Buddhist Care Temples),     Gate Way of India – Mumbai, \nDiamond Crossing – Nagpur (The one place where North – South – East & West connect),\nArya Samaj – Mumbai,\nJahangir Art Gallary – Mumbai" as const
export const miscellaneousBlocks = [{"heading":"Mumbai","lines":["1.\tGate Way of India","2.\tCapital of Crimes ","3.\tTower of Silence ","4.\tCity of Seven Islands ","5.\tHollywood of India ","6.\tFinancial Capital of India ","7.\tCity of Dreams ","8.\tSleepless City "]},{"heading":"Pune ","lines":["1.\tOxford of the Eastern India","2.\tThe Jewel of Deccan ","3.\tQueen of Deccan "]},{"heading":"Nasik ","lines":["1.\tThe Grape City of India ","2.\tCalifornia of India ","3.\tGrapes City of India "]},{"heading":"Kolhapur ","lines":["1.\tCity of Wrestlers "]},{"heading":"Nagpur ","lines":["1.\tOrange City "]},{"heading":"Akola ","lines":["1.\tThe Cotton City"]},{"heading":"Mumbai ","lines":["1.\tIndian Cancer Research Institute","2.\tAutomotive Research Association of India","3.\tSilk & Art silk Mills Research Institute","4.\tWool Research Association ","5.\tInstitute of Research in Reproduction","6.\tAtomic Energy Commission ","7.\tBaba Atomic Research Centre , Trambe, ","8.\tSaha Institute of Fundemental Research","9.\tCentral Institute of Fisheries Education","10.\t National Institute of Industrial Engineering ","11.\t Hindustan Petroleum Corporation Limited (HPCL) ","12.\t Reserve Bank of India","13.\t Securities and Exchange Board of India (SEBI) ","14.\t Bhaba Atomic Research Centre (BARC) – Tromby ","15.\t Nuclear Power Corporation of India Limited (NPCIL) ","16.\t Indian Rare Earths Limited (IREL) ","17.\t Tata Institute of Fundemental Research (TIFR) = Mumbai + Hyderabad","18.\t Atomic Energy Regulatory Board (AERB)","19.\t Atomic Energy Commission of India (AECI)","20.\t Department of Atomeic Energy (DAE)","21.\t Institute for Artificial Intelligence","22.\t College of Naval Warfare ","23.\t National Museum for Indian Cinema ","24.\t Headquarter of Central Railway & Western Railway ","25.\t Mazagon Dock Shipyard ","26.\t Board of Radio Isotope Centre ","27.\t Indira Gandhi Insititute of Development Research ","28.\t Cotton Corporation of India ","29.\tUnderground Bunker Museum"]},{"heading":"Pune ","lines":["1.\tNational Institute of Virology","2.\tNational AIDS Research Institute","3.\tNational Chemical Laboratory ","4.\tIndian Institute of Science Education & Research (IISER)","5.\tNational Institute of Bank Management ","6.\tNational Defence Academy ","7.\tFilm and Television Institute of India ","8.\tArmed Forces Medical College ","9.\tNational Institute of Naturopathy ","10.\t Atomic Energy Commission ","11.\t National Institute of Cell Science ","12.\t Asian School of Cyber Law ","13.\t India's first Bio – CNG plant ","14.\t National Data Centre of National Informatics Centre = Pune + New Delhi + Hyderabad + Bhubaneshwar","15.\t National Institute of Bank Management (NIMB) ","16.\t Centre for Development of Advanced Technology (CDAT) ","17.\tSerum Institute of India (SII)","18.\tNational Centre for Cell Science (NCCS)","19.\tNational Research Centre for Grapes ","20.\tIndian Railways Institute of Civil Engineering (IRICEN)"]},{"heading":"Nagpur ","lines":["1.\tCentral Public Health Engineering Research Institute ","2.\tCentral AGMARK Laboratory ","3.\tNational Environmental Engineering Research Institute ","4.\tNational Civil Defence College ","5.\tNational Institute of Pharmaceutical Education & Research ","6.\tVisvesvaraya National Institute of Technology ","7.\tCentral Institute of Cotton Research (CISR) ","8.\tNational Environment Engineering Research Institute (NEERI)"]},{"heading":"Trambe ","lines":["1.\tRastriya Chemical & Fertilizers Limited "]},{"heading":"Khadak Vosla","lines":["1.\tNational Defence Academy"]},{"heading":"Sindri ","lines":["1.\tPencilin Factory"]},{"heading":"Vidarbha","lines":["1.\tDemand for new state"]},{"heading":"Aurangabad ","lines":["1.\tCentral Institute of Plastic Engineering & Research"]},{"heading":"Parbhani ","lines":["1.\tVasantrao Naik Marathwada Krishi Vidyapeeth"]}] as const
