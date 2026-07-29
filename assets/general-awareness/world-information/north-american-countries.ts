export const worldInformationPageTitle = 'World Information' as const
export const northAmericanCountriesHeaderLine = 'North American Countries' as const
export const northAmericanCountriesSectionTitle = 'Countries, Capitals & Leaders' as const

export type NorthAmericanCountryRow = {
  country: string
  capital: string
  currency: string
  headOfState: string
  headOfGovernment: string
}

export const northAmericanCountriesRows: readonly NorthAmericanCountryRow[] = [
  {
    country: 'Antigua and Barbuda',
    capital: "Saint John's",
    currency: 'East Caribbean Dollar (XCD)',
    headOfState: 'King Charles III (represented by Governor-General Rodney Williams)',
    headOfGovernment: 'Gaston Browne',
  },
  {
    country: 'Bahamas',
    capital: 'Nassau',
    currency: 'Bahamian Dollar (BSD)',
    headOfState: 'King Charles III (represented by Governor-General Cynthia Pratt)',
    headOfGovernment: 'Philip Davis',
  },
  {
    country: 'Barbados',
    capital: 'Bridgetown',
    currency: 'Barbadian Dollar (BBD)',
    headOfState: 'Sandra Mason',
    headOfGovernment: 'Mia Mottley',
  },
  {
    country: 'Belize',
    capital: 'Belmopan',
    currency: 'Belize Dollar (BZD)',
    headOfState: 'King Charles III (represented by Governor-General Froyla Tzalam)',
    headOfGovernment: 'John Briceño',
  },
  {
    country: 'Canada',
    capital: 'Ottawa',
    currency: 'Canadian Dollar (CAD)',
    headOfState: 'King Charles III (represented by Governor General Mary Simon)',
    headOfGovernment: 'Mark Carney',
  },
  {
    country: 'Costa Rica',
    capital: 'San José',
    currency: 'Costa Rican Colón (CRC)',
    headOfState: 'Rodrigo Chaves Robles',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Cuba',
    capital: 'Havana',
    currency: 'Cuban Peso (CUP)',
    headOfState: 'Miguel Díaz-Canel',
    headOfGovernment: 'Manuel Marrero Cruz',
  },
  {
    country: 'Dominica',
    capital: 'Roseau',
    currency: 'East Caribbean Dollar (XCD)',
    headOfState: 'Sylvanie Burton',
    headOfGovernment: 'Roosevelt Skerrit',
  },
  {
    country: 'Dominican Republic',
    capital: 'Santo Domingo',
    currency: 'Dominican Peso (DOP)',
    headOfState: 'Luis Abinader',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'El Salvador',
    capital: 'San Salvador',
    currency: 'United States Dollar (USD)',
    headOfState: 'Nayib Bukele',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Grenada',
    capital: "Saint George's",
    currency: 'East Caribbean Dollar (XCD)',
    headOfState: 'King Charles III (represented by Governor-General Cécile La Grenade)',
    headOfGovernment: 'Dickon Mitchell',
  },
  {
    country: 'Guatemala',
    capital: 'Guatemala City',
    currency: 'Guatemalan Quetzal (GTQ)',
    headOfState: 'Bernardo Arévalo',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Haiti',
    capital: 'Port-au-Prince',
    currency: 'Gourde (HTG)',
    headOfState: 'Transitional Presidential Council',
    headOfGovernment: 'Alix Didier Fils-Aimé',
  },
  {
    country: 'Honduras',
    capital: 'Tegucigalpa',
    currency: 'Honduran Lempira (HNL)',
    headOfState: 'Xiomara Castro',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Jamaica',
    capital: 'Kingston',
    currency: 'Jamaican Dollar (JMD)',
    headOfState: 'King Charles III (represented by Governor-General Patrick Allen)',
    headOfGovernment: 'Andrew Holness',
  },
  {
    country: 'Mexico',
    capital: 'Mexico City',
    currency: 'Mexican Peso (MXN)',
    headOfState: 'Claudia Sheinbaum',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Nicaragua',
    capital: 'Managua',
    currency: 'Córdoba (NIO)',
    headOfState: 'Daniel Ortega and Rosario Murillo (Co-Presidents)',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Panama',
    capital: 'Panama City',
    currency: 'Balboa (PAB) & United States Dollar (USD)',
    headOfState: 'José Raúl Mulino',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    currency: 'East Caribbean Dollar (XCD)',
    headOfState: 'King Charles III (represented by Governor-General Marcella Liburd)',
    headOfGovernment: 'Terrance Drew',
  },
  {
    country: 'Saint Lucia',
    capital: 'Castries',
    currency: 'East Caribbean Dollar (XCD)',
    headOfState: 'King Charles III (represented by Governor-General Errol Charles)',
    headOfGovernment: 'Philip J. Pierre',
  },
  {
    country: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    currency: 'East Caribbean Dollar (XCD)',
    headOfState: 'King Charles III (represented by Governor-General Susan Dougan)',
    headOfGovernment: 'Ralph Gonsalves',
  },
  {
    country: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    currency: 'Trinidad and Tobago Dollar (TTD)',
    headOfState: 'Christine Kangaloo',
    headOfGovernment: 'Kamla Persad-Bissessar',
  },
  {
    country: 'United States',
    capital: 'Washington, D.C.',
    currency: 'United States Dollar (USD)',
    headOfState: 'Donald Trump',
    headOfGovernment: 'No Prime Minister',
  },
]
