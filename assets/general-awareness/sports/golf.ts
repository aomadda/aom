export const golfPageTitle = 'GOLF' as const

export const golfOverviewSection = {
  intro:
    'Golf is a precision outdoor sport in which players use clubs to hit a ball into a series of holes on a course using as few strokes as possible. It is played individually or in teams and is known for requiring skill, accuracy, and concentration.',
  keyFeaturesHeading: 'Key Features',
  keyFeatures: [
    { label: 'Players', value: 'Individual players or teams.' },
    { label: 'Course', value: 'Usually consists of 18 holes (sometimes 9 holes).' },
    { label: 'Equipment', value: 'Golf clubs, golf balls, tees, and golf bag.' },
    { label: 'Objective', value: 'Complete the course in the fewest number of strokes.' },
  ],
  basicRulesHeading: 'Basic Rules',
  basicRules: [
    'Players start each hole by striking the ball from the teeing area.',
    'The ball is then played from where it comes to rest until it is holed.',
    "Each stroke counts toward the player's score.",
    'Penalty strokes may be added for rule violations or hitting the ball into hazards.',
    'The player with the lowest total score wins.',
  ],
  scoringTermsHeading: 'Scoring Terms',
  scoringTerms: [
    { label: 'Par', value: 'Expected number of strokes for a hole.' },
    { label: 'Birdie', value: 'One stroke under par.' },
    { label: 'Eagle', value: 'Two strokes under par.' },
    { label: 'Bogey', value: 'One stroke over par.' },
    { label: 'Hole-in-One', value: 'Ball enters the hole with a single stroke from the tee.' },
  ],
} as const

export const golfIntroParagraph =
  'The Golf is a club – and – ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.'

export const ryderCupSection = {
  heading: 'Ryder Cup',
  introParagraphs: [
    'The Ryder Cup is Biennial Men’s golf competition between teams from Europe and United States.',
    'The competition is contested every two years with the venue alternating between courses in the United States and Europe.',
    'The Ryder Cup is named after English Businessman Samuel Ryder who donated the trophy.',
  ],
  sinceLine: 'Since : 1927',
  editionLine: '2022 Ryder Cup (44th)',
  placeLine: 'Place : Italy',
} as const

export const trophiesSection = {
  heading: 'Trophies',
  lines: ['Ryder Cup, Walker Cup, Canada Cup'],
} as const

export const relatedTermsSection = {
  heading: 'Related Terms',
  text: 'Course, Links, Tee, Nibble, Hole, Eagle, Par, Put, Club, Iron, Rough',
} as const

export const famousPlayersSection = {
  heading: 'Famous Players',
  lines: [
    'AnirbanLahiri (India)',
    'Viraj Madappa (India)',
    'Jyoti Randhawa (India',
    'Gaurav Gei (India)',
    'Jeev Milkha Singh (India)',
    'Arjun Atwal (India)',
    'Shiv Kapur (India)',
    'Sharmila Nicollet (Indo – French)',
  ],
} as const
