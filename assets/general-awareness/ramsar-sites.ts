export type RamsarSiteEntry = {
  serial: string
  siteName: string
  yearNotified: string
  unescoNaturalSite: string
}

export type RamsarSiteStateGroup = {
  state: string
  sites: readonly RamsarSiteEntry[]
}

export const ramsarSitesByState: readonly RamsarSiteStateGroup[] = [
  {
    state: 'Andhra Pradesh',
    sites: [
      {
        serial: '1',
        siteName: 'Kolleru Lake',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Assam',
    sites: [
      {
        serial: '2',
        siteName: 'Deepor Beel',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Bihar',
    sites: [
      {
        serial: '3',
        siteName: 'Kanwar (Kabar) Taal',
        yearNotified: '2020',
        unescoNaturalSite: '—',
      },
      {
        serial: '4',
        siteName: 'Nagi Bird Sanctuary',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
      {
        serial: '5',
        siteName: 'Nakti Bird Sanctuary',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
      {
        serial: '6',
        siteName: 'Gogabeel Lake',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
      {
        serial: '7',
        siteName: 'Gokul Reservoir',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
      {
        serial: '8',
        siteName: 'Udaipur Lake',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Chhattisgarh',
    sites: [
      {
        serial: '9',
        siteName: 'Kopra Reservoir',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Goa',
    sites: [
      {
        serial: '10',
        siteName: 'Nanda Lake',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Gujarat',
    sites: [
      {
        serial: '11',
        siteName: 'Nalsarovar Bird Sanctuary',
        yearNotified: '2012',
        unescoNaturalSite: '—',
      },
      {
        serial: '12',
        siteName: 'Thol Lake Wildlife Sanctuary',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
      {
        serial: '13',
        siteName: 'Wadhvana Wetland',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
      {
        serial: '14',
        siteName: 'Khijadiya Wildlife Sanctuary',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
      {
        serial: '15',
        siteName: 'Chhari-Dhand',
        yearNotified: '2026',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Haryana',
    sites: [
      {
        serial: '16',
        siteName: 'Sultanpur National Park',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
      {
        serial: '17',
        siteName: 'Bhindawas Wildlife Sanctuary',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Himachal Pradesh',
    sites: [
      {
        serial: '18',
        siteName: 'Pong Dam Lake',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '19',
        siteName: 'Chandra Taal',
        yearNotified: '2005',
        unescoNaturalSite: '—',
      },
      {
        serial: '20',
        siteName: 'Renuka Wetland (Smallest)',
        yearNotified: '2005',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Jammu & Kashmir',
    sites: [
      {
        serial: '21',
        siteName: 'Wular Lake',
        yearNotified: '1990',
        unescoNaturalSite: '—',
      },
      {
        serial: '22',
        siteName: 'Hokersar Wetland',
        yearNotified: '2005',
        unescoNaturalSite: '—',
      },
      {
        serial: '23',
        siteName: 'Surinsar-Mansar Lakes',
        yearNotified: '2005',
        unescoNaturalSite: '—',
      },
      {
        serial: '24',
        siteName: 'Hygam Wetland Conservation Reserve',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '25',
        siteName: 'Shallabugh Wetland Conservation Reserve',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Jharkhand',
    sites: [
      {
        serial: '26',
        siteName: 'Udhwa Lake Bird Sanctuary',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Karnataka',
    sites: [
      {
        serial: '27',
        siteName: 'Ranganathittu Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '28',
        siteName: 'Aghanashini Estuary',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
      {
        serial: '29',
        siteName: 'Ankasamudra Bird Conservation Reserve',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
      {
        serial: '30',
        siteName: 'Magadi Kere Conservation Reserve',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Kerala',
    sites: [
      {
        serial: '31',
        siteName: 'Ashtamudi Wetland',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '32',
        siteName: 'Sasthamkotta Lake',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '33',
        siteName: 'Vembanad-Kol Wetland',
        yearNotified: '2002',
        unescoNaturalSite: 'Part of Western Ghats',
      },
    ],
  },
  {
    state: 'Ladakh',
    sites: [
      {
        serial: '34',
        siteName: 'Tsomoriri Lake',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '35',
        siteName: 'Tso Kar Wetland Complex',
        yearNotified: '2020',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Madhya Pradesh',
    sites: [
      {
        serial: '36',
        siteName: 'Bhoj Wetland',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '37',
        siteName: 'Sakhya Sagar',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '38',
        siteName: 'Sirpur Lake',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '39',
        siteName: 'Yashwant Sagar',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '40',
        siteName: 'Tawa Reservoir',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Maharashtra',
    sites: [
      {
        serial: '41',
        siteName: 'Nandur Madhameshwar',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '42',
        siteName: 'Lonar Lake',
        yearNotified: '2020',
        unescoNaturalSite: '—',
      },
      {
        serial: '43',
        siteName: 'Thane Creek',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Manipur',
    sites: [
      {
        serial: '44',
        siteName: 'Loktak Lake',
        yearNotified: '1990',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Mizoram',
    sites: [
      {
        serial: '45',
        siteName: 'Pala Wetland',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Odisha',
    sites: [
      {
        serial: '46',
        siteName: 'Chilika Lake (Oldest)',
        yearNotified: '1981',
        unescoNaturalSite: '—',
      },
      {
        serial: '47',
        siteName: 'Bhitarkanika Mangroves',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '48',
        siteName: 'Satkosia Gorge',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '49',
        siteName: 'Ansupa Lake',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '50',
        siteName: 'Hirakud Reservoir',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '51',
        siteName: 'Tampara Lake',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Punjab',
    sites: [
      {
        serial: '52',
        siteName: 'Harike Wetland',
        yearNotified: '1990',
        unescoNaturalSite: '—',
      },
      {
        serial: '53',
        siteName: 'Kanjli Wetland',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '54',
        siteName: 'Ropar Wetland',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '55',
        siteName: 'Beas Conservation Reserve',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '56',
        siteName: 'Keshopur-Miani Community Reserve',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '57',
        siteName: 'Nangal Wildlife Sanctuary',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Rajasthan',
    sites: [
      {
        serial: '58',
        siteName: 'Keoladeo Ghana National Park',
        yearNotified: '1981',
        unescoNaturalSite: 'Natural Site (1985)',
      },
      {
        serial: '59',
        siteName: 'Sambhar Lake',
        yearNotified: '1990',
        unescoNaturalSite: '—',
      },
      {
        serial: '60',
        siteName: 'Siliserh Lake',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
      {
        serial: '61',
        siteName: 'Khichan Bird Sanctuary',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
      {
        serial: '62',
        siteName: 'Menar Bird Sanctuary',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Sikkim',
    sites: [
      {
        serial: '63',
        siteName: 'Khecheopalri Wetland',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Tamil Nadu',
    sites: [
      {
        serial: '64',
        siteName: 'Point Calimere Wildlife Sanctuary',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '65',
        siteName: 'Karikili Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '66',
        siteName: 'Pallikaranai Marsh Reserve Forest',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '67',
        siteName: 'Pichavaram Mangrove',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '68',
        siteName: 'Gulf of Mannar Marine Biosphere',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '69',
        siteName: 'Kanjirankulam Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '70',
        siteName: 'Chitrangudi Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '71',
        siteName: 'Suchindram Theroor Wetland',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '72',
        siteName: 'Uduvapur Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '73',
        siteName: 'Vedanthangal Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '74',
        siteName: 'Vellode Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '75',
        siteName: 'Vembannur Wetland Complex',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '76',
        siteName: 'Koonthankulam Bird Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '77',
        siteName: 'Karaivetti Bird Sanctuary',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
      {
        serial: '78',
        siteName: 'Longwood Shola Reserve Forest',
        yearNotified: '2024',
        unescoNaturalSite: '—',
      },
      {
        serial: '79-83',
        siteName: '(Addl. 5 TN sites notified 2024-25)',
        yearNotified: '2025',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Tripura',
    sites: [
      {
        serial: '84',
        siteName: 'Rudrasagar Lake',
        yearNotified: '2005',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Uttar Pradesh',
    sites: [
      {
        serial: '85',
        siteName: 'Upper Ganga River',
        yearNotified: '2005',
        unescoNaturalSite: '—',
      },
      {
        serial: '86',
        siteName: 'Nawabganj Bird Sanctuary',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '87',
        siteName: 'Parvati Arga Bird Sanctuary',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '88',
        siteName: 'Saman Bird Sanctuary',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '89',
        siteName: 'Samaspur Bird Sanctuary',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '90',
        siteName: 'Sandi Bird Sanctuary',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '91',
        siteName: 'Sarsai Nawar Jheel',
        yearNotified: '2019',
        unescoNaturalSite: '—',
      },
      {
        serial: '92',
        siteName: 'Sur Sarovar',
        yearNotified: '2020',
        unescoNaturalSite: '—',
      },
      {
        serial: '93',
        siteName: 'Haiderpur Wetland',
        yearNotified: '2021',
        unescoNaturalSite: '—',
      },
      {
        serial: '94',
        siteName: 'Bakhira Wildlife Sanctuary',
        yearNotified: '2022',
        unescoNaturalSite: '—',
      },
      {
        serial: '95',
        siteName: 'Patna Bird Sanctuary',
        yearNotified: '2026',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'Uttarakhand',
    sites: [
      {
        serial: '96',
        siteName: 'Asan Conservation Reserve',
        yearNotified: '2020',
        unescoNaturalSite: '—',
      },
    ],
  },
  {
    state: 'West Bengal',
    sites: [
      {
        serial: '97',
        siteName: 'East Kolkata Wetlands',
        yearNotified: '2002',
        unescoNaturalSite: '—',
      },
      {
        serial: '98',
        siteName: 'Sundarban Wetland',
        yearNotified: '2019',
        unescoNaturalSite: 'Natural Site (1987)',
      },
    ],
  },
] satisfies readonly RamsarSiteStateGroup[]

export const ramsarSitesTitleLine = 'Ramsar Sites in India (98)' as const
