export const site = {
  name: 'Public Layer',
  legalName: 'Public Layer',
  title: 'Public Layer — Title II implementation for public entities',
  description:
    'Public Layer implements WCAG 2.1 Level AA for municipal websites, official documents, and contracted resident services under ADA Title II.',
  url: 'https://northline.nickalevras.workers.dev',
  email: 'hello@publiclayer.example',
  region: 'Nationwide. Based in Massachusetts.',
} as const

const assessmentSubject = 'Accessibility assessment request'
const assessmentBody = 'Public entity:\nWebsite URL:\nYour role:'

export const assessmentEmailHref = `mailto:${site.email}?subject=${encodeURIComponent(assessmentSubject)}&body=${encodeURIComponent(assessmentBody)}`
