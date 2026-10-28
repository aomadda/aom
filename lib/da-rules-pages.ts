export type DaRuleItem = {
  key: string
  chapter: string
  title: string
  label: string
  kind: 'rule' | 'schedule'
  slug: string
}

const parts: { chapter: string; rules: { label: string; title: string }[] }[] = [
  {
    chapter: 'Part I - General',
    rules: [
      { label: '1', title: 'Short title and commencement' },
      { label: '2', title: 'Definitions' },
      { label: '3', title: 'Application and Scope' },
    ],
  },
  {
    chapter: 'Part II - Suspension',
    rules: [
      { label: '4', title: 'Authorities competent to place a railway servant under suspension' },
      { label: '5', title: 'Suspension' },
    ],
  },
  {
    chapter: 'Part III - Penalties and Disciplinary Authorities',
    rules: [
      { label: '6', title: 'Penalties' },
      { label: '7', title: 'Disciplinary Authorities' },
      { label: '8', title: 'Authority to Institute Proceedings' },
    ],
  },
  {
    chapter: 'Part IV - Procedure for Imposing Major Penalties',
    rules: [
      { label: '9', title: 'Procedure for imposing major penalties' },
      { label: '10', title: 'Action on inquiry report' },
      { label: '11', title: 'Procedure for imposing minor penalties' },
      { label: '12', title: 'Communication of orders' },
      { label: '13', title: 'Common proceedings' },
      { label: '14', title: 'Special procedure in certain cases' },
      { label: '15', title: 'Provisions regarding railway servants lent to State Governments, etc.' },
      { label: '16', title: 'Provisions regarding officers borrowed from Central or State Governments, etc.' },
    ],
  },
  {
    chapter: 'Part V - Appeals',
    rules: [
      { label: '17', title: 'Orders against which no appeal lies' },
      { label: '18', title: 'Orders against which appeal lies' },
      { label: '19', title: 'Appellate Authority' },
      { label: '20', title: 'Period of limitation for appeals' },
      { label: '21', title: 'Form, contents, and submission of appeal' },
      { label: '22', title: 'Consideration of appeal' },
      { label: '23', title: 'Implementation of orders in appeal' },
      { label: '24', title: 'Special provisions for non-gazetted staff' },
    ],
  },
  {
    chapter: 'Part VI - Revision and Review',
    rules: [
      { label: '25', title: 'Revision' },
      { label: '25-A', title: 'Review' },
    ],
  },
  {
    chapter: 'Part VII - Miscellaneous',
    rules: [
      { label: '26', title: 'Service of orders, notices, etc.' },
      { label: '26-A', title: 'Service of orders, notices, etc. on behalf of the Railway Board or President' },
      { label: '27', title: 'Power to relax time limit and to condone delay' },
      { label: '28', title: "Supply of copy of Commission's advice" },
      { label: '29', title: 'Repeal and saving' },
      { label: '30', title: 'Removal of doubts' },
      { label: '31', title: 'Right to submit petitions to the President' },
    ],
  },
  {
    chapter: 'Schedules',
    rules: [
      {
        label: 'I',
        title: 'Disciplinary and appellate authorities for non-gazetted staff in various railway offices',
      },
      {
        label: 'II',
        title:
          'Disciplinary powers and suspension authority for officers and supervisors over non-gazetted staff in zonal railways and production units',
      },
      {
        label: 'III',
        title: 'Authorities empowered to suspend or impose penalties on gazetted officers (Groups A and B)',
      },
    ],
  },
]

function contentSlug(chapter: string, label: string) {
  if (chapter === 'Schedules') {
    if (label === 'I') return 'schedule1'
    if (label === 'II') return 'schedule2'
    return 'schedule3'
  }
  return label.toLowerCase()
}

export const daRuleItems: DaRuleItem[] = parts.flatMap((part) =>
  part.rules.map((rule) => ({
    key: `${part.chapter}-${rule.label}`,
    chapter: part.chapter,
    title: rule.title,
    label: rule.label,
    kind: part.chapter === 'Schedules' ? 'schedule' : 'rule',
    slug: contentSlug(part.chapter, rule.label),
  })),
)

export function daRuleHeading(item: DaRuleItem) {
  return item.kind === 'schedule' ? `Schedule ${item.label}` : `Rule ${item.label}`
}
