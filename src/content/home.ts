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

export const phases = [
  {
    name: 'Assessment',
    text: 'Live inventory, manual testing, ranked findings, and a leadership brief.',
  },
  {
    name: 'Implementation',
    text: 'Templates, content, active documents, and vendor acceptance criteria.',
  },
  {
    name: 'Assurance',
    text: 'Inventory reviews, drift reporting, and publishing controls.',
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
  'Active permit application is untagged',
  'Vendor-controlled payment service blocks assistive technology',
  'Current agenda packet has no text layer',
  'Historic packet meets archive criteria',
] as const

export const certifications = [
  {
    abbreviation: 'CPACC',
    descriptor: 'Core competencies',
    name: 'IAAP Certified Professional in Accessibility Core Competencies',
    image: '/certifications/iaap-cpacc.png',
  },
  {
    abbreviation: 'WAS',
    descriptor: 'Web accessibility',
    name: 'IAAP Web Accessibility Specialist',
    image: '/certifications/iaap-was.png',
  },
] as const
