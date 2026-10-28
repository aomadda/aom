export type RestRuleItem = {
  key: string
  chapter: string
  title: string
  label: string
  slug: string
}

const parts: { chapter: string; rules: { label: string; title: string }[] }[] = [
  {
    chapter: 'Part I - Introduction',
    rules: [
      { label: '1', title: 'Short title, commencement and application' },
      { label: '2', title: 'Definitions' },
    ],
  },
  {
    chapter: 'Part II - Classification of Employment and Hours of Work',
    rules: [
      { label: '3', title: 'Prescribed authority to classify the employment of railway servant' },
      { label: '4', title: 'Appeals against classification' },
      { label: '5', title: 'Supervisory staff' },
      { label: '6', title: 'Excluded staff' },
      { label: '7', title: 'Criteria for determining classification of railway servants' },
      { label: '8', title: 'Fixation of hours of work' },
      { label: '9', title: 'Power to make temporary exemption' },
      { label: '10', title: 'Principle of averaging and payment of overtime allowance' },
      { label: '11', title: 'Register of extra hours of work' },
      { label: '12', title: 'Periodical Rest' },
      { label: '13', title: 'Compensatory periods of rest' },
    ],
  },
  {
    chapter: 'Part III - Authorities to Ensure Proper Implementation',
    rules: [
      { label: '14', title: 'Appointment of Supervisors' },
      { label: '15', title: 'Display of rules and notices' },
      { label: '16', title: 'Annual Return' },
    ],
  },
  {
    chapter: 'Part IV - Residuary Powers',
    rules: [{ label: '17', title: 'Power to make modification in special cases' }],
  },
  {
    chapter: 'Part V - Repeal and Saving',
    rules: [{ label: '18', title: 'The Railway Servants (Hours of Employment) Rules, 1961' }],
  },
]

export const restRuleItems: RestRuleItem[] = parts.flatMap((part) =>
  part.rules.map((rule) => ({
    key: `${part.chapter}-${rule.label}`,
    chapter: part.chapter,
    title: rule.title,
    label: rule.label,
    slug: rule.label,
  })),
)

export function restRuleHeading(item: RestRuleItem) {
  return `Rule ${item.label}`
}
