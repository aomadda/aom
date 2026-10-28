export type DmaActItem = {
  key: string
  chapter: string
  title: string
  label: string
  slug: string
}

const chapters: { chapter: string; sections: { label: string; title: string }[] }[] = [
  {
    chapter: 'Chapter I - Preliminary',
    sections: [
      { label: '1', title: 'Short title, extent and commencement' },
      { label: '2', title: 'Definitions' },
    ],
  },
  {
    chapter: 'Chapter II - National Disaster Management Authority',
    sections: [
      { label: '3', title: 'Establishment of NDMA' },
      { label: '4', title: 'Meetings of National Authority' },
      { label: '5', title: 'Appointment of officers and other employees' },
      { label: '6', title: 'Powers and functions of National Authority' },
      { label: '7', title: 'Constitution of advisory committee' },
      { label: '8', title: 'Constitution of National Executive Committee' },
      { label: '9', title: 'Constitution of sub-committees' },
      { label: '10', title: 'Powers and functions of National Executive Committee' },
      { label: '11', title: 'National Plan' },
      { label: '12', title: 'Guidelines for minimum standards of relief' },
      { label: '13', title: 'Relief in loan repayment, etc.' },
    ],
  },
  {
    chapter: 'Chapter III - State Disaster Management Authority',
    sections: [
      { label: '14', title: 'Establishment of State Disaster Management Authority' },
      { label: '15', title: 'Meetings of the State Authority' },
      { label: '16', title: 'Appointment of officers and other employees' },
      { label: '17', title: 'Constitution of advisory committee' },
      { label: '18', title: 'Powers and functions of State Authority' },
      { label: '19', title: 'Guidelines for minimum standard of relief' },
      { label: '20', title: 'Constitution of State Executive Committee' },
      { label: '21', title: 'Constitution of sub-committees' },
      { label: '22', title: 'Functions of the State Executive Committee' },
      { label: '23', title: 'State Plan' },
      { label: '24', title: 'Powers and functions of State Executive Committee' },
    ],
  },
  {
    chapter: 'Chapter IV - District Disaster Management Authority',
    sections: [
      { label: '25', title: 'Constitution of District Disaster Management Authority' },
      { label: '26', title: 'Powers of Chairperson of District Authority' },
      { label: '27', title: 'Meetings' },
      { label: '28', title: 'Constitution of advisory committees' },
      { label: '29', title: 'Appointment of officers and other employees' },
      { label: '30', title: 'Powers and functions of District Authority' },
      { label: '31', title: 'District Plan' },
      { label: '32', title: 'Plans by different authorities at district level' },
      { label: '33', title: 'Requisition by the District Authority' },
      { label: '34', title: 'Powers and functions in threatening disaster situation' },
    ],
  },
  {
    chapter: 'Chapter V - Measures by the Government for Disaster Management',
    sections: [
      { label: '35', title: 'Central Government to take measures' },
      { label: '36', title: 'Responsibilities of Ministries or Departments' },
      { label: '37', title: 'Disaster management plans of Ministries' },
      { label: '38', title: 'State Government to take measures' },
      { label: '39', title: 'Responsibilities of departments of State Government' },
      { label: '40', title: 'Disaster management plan of departments of State' },
    ],
  },
  {
    chapter: 'Chapter VI - Local Authorities',
    sections: [{ label: '41', title: 'Functions of the local authority' }],
  },
  {
    chapter: 'Chapter VII - National Institute of Disaster Management',
    sections: [
      { label: '42', title: 'National Institute of Disaster Management' },
      { label: '43', title: 'Officers and other employees of the National Institute' },
    ],
  },
  {
    chapter: 'Chapter VIII - National Disaster Response Force',
    sections: [
      { label: '44', title: 'National Disaster Response Force' },
      { label: '45', title: 'Control, direction, etc.' },
    ],
  },
  {
    chapter: 'Chapter IX - Finance, Accounts and Audit',
    sections: [
      { label: '46', title: 'National Disaster Response Fund' },
      { label: '47', title: 'National Disaster Mitigation Fund' },
      { label: '48', title: 'Establishment of funds by State Government' },
      { label: '49', title: 'Allocation of funds by Ministries and Departments' },
      { label: '50', title: 'Emergency procurement and accounting' },
    ],
  },
  {
    chapter: 'Chapter X - Offences and Penalties',
    sections: [
      { label: '51', title: 'Punishment for obstruction, etc.' },
      { label: '52', title: 'Punishment for false claim' },
      { label: '53', title: 'Punishment for misappropriation of money' },
      { label: '54', title: 'Punishment for false warning' },
      { label: '55', title: 'Offences by Departments of the Government' },
      { label: '56', title: 'Failure of officer in duty' },
      { label: '57', title: 'Penalty for contravention of requisitioning order' },
      { label: '58', title: 'Offence by companies' },
      { label: '59', title: 'Previous sanction for prosecution' },
      { label: '60', title: 'Cognizance of offences' },
    ],
  },
  {
    chapter: 'Chapter XI - Miscellaneous',
    sections: [
      { label: '61', title: 'Prohibition against discrimination' },
      { label: '62', title: 'Power to issue direction by Central Government' },
      { label: '63', title: 'Powers to be made available for rescue operations' },
      { label: '64', title: 'Making or amending rules in certain circumstances' },
      { label: '65', title: 'Power of requisition of resources' },
      { label: '66', title: 'Payment of compensation' },
      { label: '67', title: 'Direction to media for communication of warnings' },
      { label: '68', title: 'Authentication of orders or decisions' },
      { label: '69', title: 'Delegation of powers' },
      { label: '70', title: 'Annual report' },
      { label: '71', title: 'Bar of jurisdiction of court' },
      { label: '72', title: 'Act to have overriding effect' },
      { label: '73', title: 'Action taken in good faith' },
      { label: '74', title: 'Immunity from legal process' },
      { label: '75', title: 'Power of Central Government to make rules' },
      { label: '76', title: 'Power to make regulations' },
      { label: '77', title: 'Rules and regulations to be laid before Parliament' },
      { label: '78', title: 'Power of State Government to make rules' },
      { label: '79', title: 'Power to remove difficulties' },
    ],
  },
]

export const dmaActItems: DmaActItem[] = chapters.flatMap((chapter) =>
  chapter.sections.map((section) => ({
    key: `${chapter.chapter}-${section.label}`,
    chapter: chapter.chapter,
    title: section.title,
    label: section.label,
    slug: section.label,
  })),
)

export function dmaActHeading(item: DmaActItem) {
  return `Section ${item.label}`
}
