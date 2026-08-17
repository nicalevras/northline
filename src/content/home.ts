export const ruleCards = [
  {
    title: 'Overlay',
    text: 'A script on top of the page. The FTC fined that pitch. Remove the widget and the site is the same inaccessible site.',
  },
  {
    title: 'Scan score',
    text: 'Automation catches a fraction of real barriers. A clean Lighthouse report is not a council brief, and it is not the rule.',
  },
  {
    title: 'The journeys',
    text: 'Pay. Permit. Agenda. Search. Emergency. Those are the paths we test by hand.',
  },
] as const

export const commitments = [
  'No overlays.',
  'No “you’re compliant” stamp.',
  'No unlimited archive on a fixed fee.',
] as const

export const journeys = [
  {
    name: 'Pay',
    text: 'A water bill or tax payment a keyboard and a screen reader can finish without help.',
  },
  {
    name: 'Apply',
    text: 'Permit and license forms with names, order, and errors a person can actually use.',
  },
  {
    name: 'Meet',
    text: 'Agendas and packets that are official records — not a Drive folder with no tagged path.',
  },
  {
    name: 'Find',
    text: 'Search and emergency notices that are text, not pictures of text.',
  },
] as const

export const deadlines = [
  {
    audience: 'Population 50,000+',
    date: 'Apr 26',
    year: '2027',
    detail: 'Counties, larger cities, many districts. The earlier clock.',
    emphasis: 'accent',
  },
  {
    audience: 'Under 50,000 · special districts',
    date: 'Apr 26',
    year: '2028',
    detail: 'Most towns. Still the same standard. A scan score is not it.',
    emphasis: 'primary',
  },
] as const

export const engagements = [
  {
    price: '$2,500–$3,500',
    name: 'Snapshot',
    text: 'Ten days. Journeys, documents, a brief the council can hear.',
  },
  {
    price: 'Scoped, in writing',
    name: 'Repair',
    text: 'Theme first, then forms, then the active files. Caps on PDFs.',
  },
  {
    price: 'From $399/mo',
    name: 'Keep',
    text: 'A watch or a real program. So the clerk does not undo the work.',
  },
] as const

export const hosts = [
  {
    name: 'CivicPlus',
    text: 'We stay on your hosted site. Theme and component fixes go through their tickets when the template is locked. Content, forms, and the document center are ours.',
  },
  {
    name: 'Granicus',
    text: 'OpenCities and agenda tools included. We do not rip the CMS. We fix the journeys the vendor does not cover — Drive packets, untagged forms, third-party pay.',
  },
  {
    name: 'Revize',
    text: 'Same rule: staging or a limited editor role, then template-level work and a clerk kit so the next upload does not undo it.',
  },
  {
    name: 'WordPress',
    text: 'We work in the theme and the blocks you already publish. No rebuild unless the theme itself is the barrier.',
  },
] as const

export const findings = [
  { finding: 'Pay portal has no name', priority: 'P1' },
  { finding: 'Permit PDF, no tags', priority: 'P1' },
  { finding: 'Agenda is a scan, no text', priority: 'P2' },
  { finding: '2018 packet, archive', priority: 'excepted' },
] as const
