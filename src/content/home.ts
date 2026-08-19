export const municipalities = [
  { name: 'Agawam', seal: '/seals/agawam.png' },
  { name: 'Amherst', seal: '/seals/amherst.png' },
  { name: 'Chicopee', seal: '/seals/chicopee.png' },
  { name: 'Easthampton', seal: '/seals/easthampton.png' },
  { name: 'Holyoke', seal: '/seals/holyoke.png' },
  {
    name: 'West Springfield',
    seal: '/seals/west-springfield.svg',
  },
  { name: 'Westfield', seal: '/seals/westfield.png' },
] as const

export const deadlines = [
  {
    audience: 'Population of 50,000 or more',
    date: 'Apr 26',
    year: '2027',
    detail: 'Counties, larger cities, and many districts. The earlier compliance date.',
  },
  {
    audience: 'Under 50,000 · special districts',
    date: 'Apr 26',
    year: '2028',
    detail: 'The majority of towns. The same technical standard applies.',
  },
] as const

export const engagements = [
  {
    price: 'Fixed-fee proposal',
    name: 'Assessment',
    text: 'Ten business days. Live inventory, manual review of priority journeys, ranked findings, and a leadership brief.',
  },
  {
    price: 'Scoped, in writing',
    name: 'Implementation',
    text: 'Remediation of templates, content, and active documents, plus specifications and acceptance criteria for contracted systems.',
  },
  {
    price: 'Optional ongoing support',
    name: 'Assurance',
    text: 'Scheduled inventory review, drift reporting, and a standing program that holds the standard as new content is published.',
  },
] as const

export const estateLayers = [
  {
    name: 'Public website',
    detail: 'Templates, navigation, forms, search, and published content.',
  },
  {
    name: 'Official documents',
    detail: 'Agendas, packets, applications, notices, and active records.',
  },
  {
    name: 'Contracted services',
    detail: 'Permitting, meetings, records, resident applications, and payment services.',
  },
] as const

export const findings = [
  { finding: 'Active permit application is untagged', priority: 'P1' },
  {
    finding: 'Vendor-controlled payment service blocks assistive technology',
    priority: 'P1',
  },
  { finding: 'Current agenda packet has no text layer', priority: 'P2' },
  { finding: 'Historic packet meets archive criteria', priority: 'Deferred' },
] as const
