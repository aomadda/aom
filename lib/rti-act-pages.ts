export type RtiActItem = {
  key: string
  chapter: string
  title: string
  label: string
  kind: 'section' | 'schedule'
  slug: string
}

const chapters: { chapter: string; items: { label: string; title: string; kind: 'section' | 'schedule' }[] }[] = [
  {
    chapter: 'Chapter I - Preliminary',
    items: [
      { label: '1', title: 'Short title, extent and commencement', kind: 'section' },
      { label: '2', title: 'Definitions', kind: 'section' },
    ],
  },
  {
    chapter: 'Chapter II - Right to Information and Obligations of Public Authorities',
    items: [
      { label: '3', title: 'Right to information', kind: 'section' },
      { label: '4', title: 'Obligations of public authorities', kind: 'section' },
      { label: '5', title: 'Designation of Public Information Officers', kind: 'section' },
      { label: '6', title: 'Request for obtaining information', kind: 'section' },
      { label: '7', title: 'Disposal of request', kind: 'section' },
      { label: '8', title: 'Exemption from disclosure of information', kind: 'section' },
      { label: '9', title: 'Grounds for rejection to access in certain cases', kind: 'section' },
      { label: '10', title: 'Severability', kind: 'section' },
      { label: '11', title: 'Third party information', kind: 'section' },
    ],
  },
  {
    chapter: 'Chapter III - The Central Information Commission',
    items: [
      { label: '12', title: 'Constitution of Central Information Commission', kind: 'section' },
      { label: '13', title: 'Terms of office and conditions of service', kind: 'section' },
      { label: '14', title: 'Removal of Chief Information Commissioner or Information Commissioner', kind: 'section' },
    ],
  },
  {
    chapter: 'Chapter IV - The State Information Commission',
    items: [
      { label: '15', title: 'Constitution of State Information Commission', kind: 'section' },
      { label: '16', title: 'Term of office and conditions of service', kind: 'section' },
      { label: '17', title: 'Removal of State Chief Information Commissioner or State Information Commissioner', kind: 'section' },
    ],
  },
  {
    chapter: 'Chapter V - Powers and Functions of the Information Commissions, Appeal and Penalties',
    items: [
      { label: '18', title: 'Powers and functions of Information Commissions', kind: 'section' },
      { label: '19', title: 'Appeal', kind: 'section' },
      { label: '20', title: 'Penalties', kind: 'section' },
    ],
  },
  {
    chapter: 'Chapter VI - Miscellaneous',
    items: [
      { label: '21', title: 'Protection of action taken in good faith', kind: 'section' },
      { label: '22', title: 'Act to have overriding effect', kind: 'section' },
      { label: '23', title: 'Bar of jurisdiction of courts', kind: 'section' },
      { label: '24', title: 'Act not to apply to certain organisations', kind: 'section' },
      { label: '25', title: 'Monitoring and reporting', kind: 'section' },
      { label: '26', title: 'Appropriate Government to prepare programmes', kind: 'section' },
      { label: '27', title: 'Power to make rules by appropriate Government', kind: 'section' },
      { label: '28', title: 'Power to make rules by competent authority', kind: 'section' },
      { label: '29', title: 'Laying of rules', kind: 'section' },
      { label: '30', title: 'Power to remove difficulties', kind: 'section' },
      { label: '31', title: 'Repeal', kind: 'section' },
    ],
  },
  {
    chapter: 'Schedules',
    items: [
      { label: 'I', title: 'The First Schedule', kind: 'schedule' },
      { label: 'II', title: 'The Second Schedule', kind: 'schedule' },
    ],
  },
]

export const rtiActItems: RtiActItem[] = chapters.flatMap((chapter) =>
  chapter.items.map((item) => ({
    key: `${chapter.chapter}-${item.label}`,
    chapter: chapter.chapter,
    title: item.title,
    label: item.label,
    kind: item.kind,
    slug: item.kind === 'schedule' ? `schedule-${item.label.toLowerCase()}` : item.label,
  })),
)

export function rtiActHeading(item: RtiActItem) {
  return item.kind === 'schedule' ? `Schedule ${item.label}` : `Section ${item.label}`
}
