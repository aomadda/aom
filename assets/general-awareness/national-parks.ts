export type NationalParkEntry = {
  serial: number;
  parkName: string;
  yearEstablished: string;
  unescoStatus: string;
};

export type NationalParkStateGroup = {
  state: string;
  parks: readonly NationalParkEntry[];
};

export const nationalParksByState: readonly NationalParkStateGroup[] = [
  {
    state: "A & N Islands",
    parks: [
      { serial: 1, parkName: "Campbell Bay", yearEstablished: "1992", unescoStatus: "-" },
      { serial: 2, parkName: "Galathea Bay", yearEstablished: "1992", unescoStatus: "-" },
      { serial: 3, parkName: "Mahatma Gandhi Marine", yearEstablished: "1983", unescoStatus: "-" },
      { serial: 4, parkName: "Middle Button Island", yearEstablished: "1987", unescoStatus: "-" },
      { serial: 5, parkName: "Mount Harriett", yearEstablished: "1987", unescoStatus: "-" },
      { serial: 6, parkName: "North Button Island", yearEstablished: "1979", unescoStatus: "-" },
      { serial: 7, parkName: "Rani Jhansi Marine", yearEstablished: "1996", unescoStatus: "-" },
      { serial: 8, parkName: "Saddle Peak", yearEstablished: "1979", unescoStatus: "-" },
      { serial: 9, parkName: "South Button Island", yearEstablished: "1987", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Andhra Pradesh",
    parks: [
      { serial: 10, parkName: "Papikonda", yearEstablished: "2008", unescoStatus: "-" },
      { serial: 11, parkName: "Rajiv Gandhi (Rameswaram)", yearEstablished: "2005", unescoStatus: "-" },
      { serial: 12, parkName: "Sri Venkateswara", yearEstablished: "1989", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Arunachal",
    parks: [
      { serial: 13, parkName: "Mouling", yearEstablished: "1986", unescoStatus: "-" },
      { serial: 14, parkName: "Namdapha", yearEstablished: "1983", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Assam",
    parks: [
      { serial: 15, parkName: "Dibru-Saikhowa", yearEstablished: "1999", unescoStatus: "-" },
      { serial: 16, parkName: "Dihing Patkai", yearEstablished: "2021", unescoStatus: "-" },
      { serial: 17, parkName: "Kaziranga", yearEstablished: "1974", unescoStatus: "Natural (1985)" },
      { serial: 18, parkName: "Manas", yearEstablished: "1990", unescoStatus: "Natural (1985)" },
      { serial: 19, parkName: "Nameri", yearEstablished: "1998", unescoStatus: "-" },
      { serial: 20, parkName: "Orang", yearEstablished: "1999", unescoStatus: "-" },
      { serial: 21, parkName: "Raimona", yearEstablished: "2021", unescoStatus: "-" },
      { serial: 22, parkName: "Sikhna Jwhwlao", yearEstablished: "2025", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Bihar",
    parks: [
      { serial: 23, parkName: "Valmiki", yearEstablished: "1989", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Chhattisgarh",
    parks: [
      { serial: 24, parkName: "Guru Ghasidas (Sanjay)", yearEstablished: "1981", unescoStatus: "-" },
      { serial: 25, parkName: "Indravati (Kutru)", yearEstablished: "1982", unescoStatus: "-" },
      { serial: 26, parkName: "Kanger Valley", yearEstablished: "1982", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Goa",
    parks: [
      { serial: 27, parkName: "Mollem", yearEstablished: "1992", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Gujarat",
    parks: [
      { serial: 28, parkName: "Blackbuck (Velavadar)", yearEstablished: "1976", unescoStatus: "-" },
      { serial: 29, parkName: "Gir", yearEstablished: "1975", unescoStatus: "-" },
      { serial: 30, parkName: "Marine (Gulf of Kachchh)", yearEstablished: "1982", unescoStatus: "-" },
      { serial: 31, parkName: "Vansda", yearEstablished: "1979", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Haryana",
    parks: [
      { serial: 32, parkName: "Kalesar", yearEstablished: "2003", unescoStatus: "-" },
      { serial: 33, parkName: "Sultanpur", yearEstablished: "1989", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "H. Pradesh",
    parks: [
      { serial: 34, parkName: "Great Himalayan", yearEstablished: "1984", unescoStatus: "Natural (2014)" },
      { serial: 35, parkName: "Inderkilla", yearEstablished: "2010", unescoStatus: "-" },
      { serial: 36, parkName: "Khirganga", yearEstablished: "2010", unescoStatus: "-" },
      { serial: 37, parkName: "Pin Valley", yearEstablished: "1987", unescoStatus: "-" },
      { serial: 38, parkName: "Simbalbara", yearEstablished: "2010", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "J & K",
    parks: [
      { serial: 39, parkName: "City Forest (Salim Ali)", yearEstablished: "1992", unescoStatus: "-" },
      { serial: 40, parkName: "Dachigam", yearEstablished: "1981", unescoStatus: "-" },
      { serial: 41, parkName: "Kazinag", yearEstablished: "2000", unescoStatus: "-" },
      { serial: 42, parkName: "Kishtwar", yearEstablished: "1981", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Jharkhand",
    parks: [
      { serial: 43, parkName: "Betla", yearEstablished: "1986", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Karnataka",
    parks: [
      { serial: 44, parkName: "Anshi (Kali)", yearEstablished: "1987", unescoStatus: "-" },
      { serial: 45, parkName: "Bandipur", yearEstablished: "1974", unescoStatus: "-" },
      { serial: 46, parkName: "Bannerghatta", yearEstablished: "1974", unescoStatus: "-" },
      { serial: 47, parkName: "Kudremukh", yearEstablished: "1987", unescoStatus: "Natural (2012)" },
      { serial: 48, parkName: "Nagarahole", yearEstablished: "1988", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Kerala",
    parks: [
      { serial: 49, parkName: "Anamudi Shola", yearEstablished: "2003", unescoStatus: "-" },
      { serial: 50, parkName: "Eravikulam", yearEstablished: "1978", unescoStatus: "Natural (2012)" },
      { serial: 51, parkName: "Mathikettan Shola", yearEstablished: "2003", unescoStatus: "-" },
      { serial: 52, parkName: "Pambadum Shola", yearEstablished: "2003", unescoStatus: "-" },
      { serial: 53, parkName: "Periyar", yearEstablished: "1982", unescoStatus: "Natural (2012)" },
      { serial: 54, parkName: "Silent Valley", yearEstablished: "1984", unescoStatus: "Natural (2012)" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Ladakh",
    parks: [
      { serial: 55, parkName: "Hemis", yearEstablished: "1981", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "M. Pradesh",
    parks: [
      { serial: 56, parkName: "Bandhavgarh", yearEstablished: "1968", unescoStatus: "-" },
      { serial: 57, parkName: "Dinosaur Fossils", yearEstablished: "2011", unescoStatus: "-" },
      { serial: 58, parkName: "Fossil (Mandla)", yearEstablished: "1983", unescoStatus: "-" },
      { serial: 59, parkName: "Indira Priyadarshini Pench", yearEstablished: "1975", unescoStatus: "-" },
      { serial: 60, parkName: "Kanha", yearEstablished: "1955", unescoStatus: "-" },
      { serial: 61, parkName: "Kuno", yearEstablished: "2018", unescoStatus: "-" },
      { serial: 62, parkName: "Madhav", yearEstablished: "1959", unescoStatus: "-" },
      { serial: 63, parkName: "Omkareshwar", yearEstablished: "2004", unescoStatus: "-" },
      { serial: 64, parkName: "Panna", yearEstablished: "1981", unescoStatus: "-" },
      { serial: 65, parkName: "Sanjay", yearEstablished: "1981", unescoStatus: "-" },
      { serial: 66, parkName: "Satpura", yearEstablished: "1981", unescoStatus: "-" },
      { serial: 67, parkName: "Van Vihar", yearEstablished: "1979", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Maharashtra",
    parks: [
      { serial: 68, parkName: "Chandoli", yearEstablished: "2004", unescoStatus: "-" },
      { serial: 69, parkName: "Gugamal", yearEstablished: "1975", unescoStatus: "-" },
      { serial: 70, parkName: "Navegaon", yearEstablished: "1975", unescoStatus: "-" },
      { serial: 71, parkName: "Pench (J. Nehru)", yearEstablished: "1975", unescoStatus: "-" },
      { serial: 72, parkName: "Sanjay Gandhi", yearEstablished: "1983", unescoStatus: "-" },
      { serial: 73, parkName: "Tadoba", yearEstablished: "1955", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Manipur",
    parks: [
      { serial: 74, parkName: "Keibul-Lamjao", yearEstablished: "1977", unescoStatus: "-" },
      { serial: 75, parkName: "Shirui", yearEstablished: "1982", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Meghalaya",
    parks: [
      { serial: 76, parkName: "Balphakram", yearEstablished: "1985", unescoStatus: "-" },
      { serial: 77, parkName: "Nokrek Ridge", yearEstablished: "1986", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Mizoram",
    parks: [
      { serial: 78, parkName: "Murlen", yearEstablished: "1991", unescoStatus: "-" },
      { serial: 79, parkName: "Phawngpui Blue Mtn", yearEstablished: "1992", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Nagaland",
    parks: [
      { serial: 80, parkName: "Intanki", yearEstablished: "1993", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Odisha",
    parks: [
      { serial: 81, parkName: "Bhitarkanika", yearEstablished: "1988", unescoStatus: "-" },
      { serial: 82, parkName: "Similipal", yearEstablished: "2025", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Rajasthan",
    parks: [
      { serial: 83, parkName: "Desert", yearEstablished: "1992", unescoStatus: "-" },
      { serial: 84, parkName: "Keoladeo Ghana", yearEstablished: "1981", unescoStatus: "Natural (1985)" },
      { serial: 85, parkName: "Mukundra Hills", yearEstablished: "2006", unescoStatus: "-" },
      { serial: 86, parkName: "Ranthambore", yearEstablished: "1980", unescoStatus: "-" },
      { serial: 87, parkName: "Sariska", yearEstablished: "1992", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Sikkim",
    parks: [
      { serial: 88, parkName: "Khangchendzonga", yearEstablished: "1977", unescoStatus: "Mixed (2016)" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Tamil Nadu",
    parks: [
      { serial: 89, parkName: "Guindy", yearEstablished: "1976", unescoStatus: "-" },
      { serial: 90, parkName: "Gulf of Mannar Marine", yearEstablished: "1980", unescoStatus: "-" },
      { serial: 91, parkName: "Indira Gandhi (Anamalai)", yearEstablished: "1989", unescoStatus: "-" },
      { serial: 92, parkName: "Mudumalai", yearEstablished: "1990", unescoStatus: "-" },
      { serial: 93, parkName: "Mukurthi", yearEstablished: "1990", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Telangana",
    parks: [
      { serial: 94, parkName: "Kasu Brahmananda Reddy", yearEstablished: "1994", unescoStatus: "-" },
      { serial: 95, parkName: "Mahaveer Harina Vanasthali", yearEstablished: "1994", unescoStatus: "-" },
      { serial: 96, parkName: "Mrugavani", yearEstablished: "1994", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Tripura",
    parks: [
      { serial: 97, parkName: "Bison (Rajbari)", yearEstablished: "2007", unescoStatus: "-" },
      { serial: 98, parkName: "Clouded Leopard", yearEstablished: "2007", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Uttar Pradesh",
    parks: [
      { serial: 99, parkName: "Dudhwa", yearEstablished: "1977", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "Uttarakhand",
    parks: [
      { serial: 100, parkName: "Gangotri", yearEstablished: "1989", unescoStatus: "-" },
      { serial: 101, parkName: "Govind", yearEstablished: "1990", unescoStatus: "-" },
      { serial: 102, parkName: "Jim Corbett", yearEstablished: "1936", unescoStatus: "-" },
      { serial: 103, parkName: "Nanda Devi", yearEstablished: "1982", unescoStatus: "Natural (1988)" },
      { serial: 104, parkName: "Valley of Flowers", yearEstablished: "1982", unescoStatus: "Natural (2005)" },
      { serial: 105, parkName: "Rajaji", yearEstablished: "1983", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  },
  {
    state: "West Bengal",
    parks: [
      { serial: 106, parkName: "Buxa", yearEstablished: "1992", unescoStatus: "-" },
      { serial: 107, parkName: "Gorumara", yearEstablished: "1992", unescoStatus: "-" }
    ] satisfies readonly NationalParkEntry[],
  }
] as const;

