export const worldInformationPageTitle = 'World Information' as const
export const australianCountriesHeaderLine = 'Australian Countries' as const
export const australianCountriesSectionTitle = 'Countries, Capitals & Leaders' as const

export type AustralianCountryRow = {
  country: string
  capital: string
  currency: string
  headOfState: string
  headOfGovernment: string
}

export const australianCountriesRows: readonly AustralianCountryRow[] = [
  {
    country: 'Australia',
    capital: 'Canberra',
    currency: 'Australian Dollar',
    headOfState: 'King Charles III (Governor-General David Hurley)',
    headOfGovernment: 'Anthony Albanese',
  },
  {
    country: 'New Zealand',
    capital: 'Wellington',
    currency: 'New Zealand Dollar',
    headOfState: 'King Charles III (Governor-General Cindy Kiro)',
    headOfGovernment: 'Christopher Luxon',
  },
  {
    country: 'Papua New Guinea',
    capital: 'Port Moresby',
    currency: 'Kina',
    headOfState: 'King Charles III (Governor-General Bob Dadae)',
    headOfGovernment: 'James Marape',
  },
  {
    country: 'Fiji',
    capital: 'Suva',
    currency: 'Fijian Dollar',
    headOfState: 'President Ratu Naiqama Lalabalavu',
    headOfGovernment: 'Sitiveni Rabuka',
  },
  {
    country: 'Solomon Islands',
    capital: 'Honiara',
    currency: 'Solomon Islands Dollar',
    headOfState: 'King Charles III (Governor-General David Tiva Kapu)',
    headOfGovernment: 'Jeremiah Manele',
  },
  {
    country: 'Vanuatu',
    capital: 'Port Vila',
    currency: 'Vatu',
    headOfState: 'President Nikenike Vurobaravu',
    headOfGovernment: 'Jotham Napat',
  },
  {
    country: 'Samoa',
    capital: 'Apia',
    currency: 'Tala',
    headOfState: "Tuimalealiʻifano Va'aletoa Sualauvi II",
    headOfGovernment: 'Fiamē Naomi Mataʻafa',
  },
  {
    country: 'Tonga',
    capital: 'Nukuʻalofa',
    currency: 'Paʻanga',
    headOfState: 'King Tupou VI',
    headOfGovernment: 'Siaosi Sovaleni',
  },
  {
    country: 'Kiribati',
    capital: 'South Tarawa',
    currency: 'Australian Dollar (AUD)',
    headOfState: 'President Taneti Maamau',
    headOfGovernment: 'Taneti Maamau',
  },
  {
    country: 'Tuvalu',
    capital: 'Funafuti',
    currency: 'Tuvaluan Dollar / AUD',
    headOfState: 'King Charles III (Governor-General Tofiga Vaevalu Falani)',
    headOfGovernment: 'Feleti Teo',
  },
  {
    country: 'Nauru',
    capital: 'Yaren (de facto capital)',
    currency: 'Australian Dollar (AUD)',
    headOfState: 'President David Adeang',
    headOfGovernment: 'David Adeang',
  },
  {
    country: 'Marshall Islands',
    capital: 'Majuro',
    currency: 'US Dollar',
    headOfState: 'President Hilda Heine',
    headOfGovernment: 'Hilda Heine',
  },
  {
    country: 'Micronesia (FSM)',
    capital: 'Palikir',
    currency: 'US Dollar',
    headOfState: 'President Wesley Simina',
    headOfGovernment: 'Wesley Simina',
  },
  {
    country: 'Palau',
    capital: 'Ngerulmud',
    currency: 'US Dollar',
    headOfState: 'President Surangel Whipps Jr.',
    headOfGovernment: 'Surangel Whipps Jr.',
  },
]
