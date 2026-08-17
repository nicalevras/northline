export const site = {
  name: 'Northline',
  legalName: 'Northline LLC',
  title: 'Northline — Title II web accessibility for local government',
  description:
    'We make town, city, and county websites meet WCAG 2.1 AA for the DOJ Title II rule. No overlays, no compliance stamps — hand-tested resident journeys, fixed.',
  url: 'https://northline.nickalevras.workers.dev',
  email: 'hello@northline.example',
  region: 'Nationwide. Based in Massachusetts.',
} as const

export const navigation = [
  { href: '/#rule', label: 'The rule', showInHeader: true },
  { href: '/#fees', label: 'Fees', showInHeader: true },
  { href: '/#start', label: 'Start', showInHeader: false },
] as const

const snapshotSubject = 'Snapshot request'
const snapshotBody = 'Town/city:\nSite URL:\nYour role:'

export const snapshotEmailHref = `mailto:${site.email}?subject=${encodeURIComponent(snapshotSubject)}&body=${encodeURIComponent(snapshotBody)}`
