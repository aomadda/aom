export const worldInformationPageTitle = 'World Information' as const
export const southAmericanCountriesHeaderLine = 'South American Countries' as const
export const southAmericanCountriesSectionTitle = 'Countries, Capitals & Leaders' as const

export type SouthAmericanCountryRow = {
  country: string
  capital: string
  currency: string
  headOfState: string
  headOfGovernment: string
}

export const southAmericanCountriesRows: readonly SouthAmericanCountryRow[] = [
  {
    country: 'Argentina',
    capital: 'Buenos Aires',
    currency: 'Argentine Peso',
    headOfState: 'Javier Milei',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Bolivia',
    capital: 'Sucre (constitutional) / La Paz (seat of government)',
    currency: 'Bolivian Boliviano',
    headOfState: 'Luis Arce',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Brazil',
    capital: 'Brasília',
    currency: 'Brazilian Real',
    headOfState: 'Luiz Inácio Lula da Silva',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Chile',
    capital: 'Santiago',
    currency: 'Chilean Peso',
    headOfState: 'Gabriel Boric',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Colombia',
    capital: 'Bogotá',
    currency: 'Colombian Peso',
    headOfState: 'Gustavo Petro',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Ecuador',
    capital: 'Quito',
    currency: 'United States Dollar (USD)',
    headOfState: 'Daniel Noboa',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Guyana',
    capital: 'Georgetown',
    currency: 'Guyanese Dollar',
    headOfState: 'Irfaan Ali',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Paraguay',
    capital: 'Asunción',
    currency: 'Paraguayan Guaraní',
    headOfState: 'Santiago Peña',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Peru',
    capital: 'Lima',
    currency: 'Peruvian Sol',
    headOfState: 'Dina Boluarte',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Suriname',
    capital: 'Paramaribo',
    currency: 'Surinamese Dollar',
    headOfState: 'Chan Santokhi',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Uruguay',
    capital: 'Montevideo',
    currency: 'Uruguayan Peso',
    headOfState: 'Luis Lacalle Pou',
    headOfGovernment: 'No Prime Minister',
  },
  {
    country: 'Venezuela',
    capital: 'Caracas',
    currency: 'Venezuelan Bolívar',
    headOfState: 'Nicolás Maduro',
    headOfGovernment: 'No Prime Minister',
  },
]
