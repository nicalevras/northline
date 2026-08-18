import { ActionLink } from '../components/ActionLink'
import {
  ContentSection,
  SectionHeading,
  SectionLabel,
} from '../components/ContentSection'
import { DigitalEstate } from '../components/DigitalEstate'
import { MunicipalWork } from '../components/MunicipalWork'
import { ScreenReaderSpecimen } from '../components/ScreenReaderSpecimen'
import { deadlines, engagements, findings } from '../content/home'
import { assessmentEmailHref, site } from '../site'

export function HomePage() {
  return (
    <main id="main" className="flex-1">
      <HeroSection />
      <ScopeSection />
      <MandateSection />
      <MunicipalExperienceSection />
      <EngagementSection />
      <BeginSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-36">
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ADA Title II · 28 C.F.R. Part 35 · WCAG 2.1 Level AA
          </p>
          <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-[3.375rem]">
            Federal accessibility, implemented where residents{' '}
            <span className="text-primary">access, apply, and participate.</span>
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Northline brings municipal websites and official documents to WCAG
            2.1 Level AA—and gives contracted service providers tested
            requirements to do the same. The work happens on the systems
            already in production.
          </p>
          <ActionLink href="#start">Request an assessment</ActionLink>
        </div>
        <ScreenReaderSpecimen />
      </div>
    </section>
  )
}

function MandateSection() {
  return (
    <ContentSection tone="brand">
      <SectionLabel onBrand>§ 2 — Mandate</SectionLabel>
      <SectionHeading className="max-w-3xl">
        The Department of Justice established the standard. We implement it.
      </SectionHeading>
      <p className="mt-5 max-w-3xl text-pretty leading-relaxed opacity-85">
        In 2024, the Department of Justice adopted WCAG 2.1 Level AA as the
        technical standard for state and local government web content and
        mobile applications. Public entities with a population of 50,000 or
        more must conform by April 26, 2027. Smaller entities and special
        districts must conform by April 26, 2028.
      </p>
      <div className="mt-12 grid gap-px border border-primary-foreground/25 bg-primary-foreground/25 md:grid-cols-2">
        {deadlines.map((deadline) => (
          <article
            key={deadline.year}
            className="flex flex-col gap-4 bg-primary p-6 md:p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest opacity-75">
              {deadline.audience}
            </h3>
            <p
              className={`font-mono text-5xl font-medium tracking-tight md:text-6xl ${deadline.emphasis === 'accent' ? 'text-accent' : 'text-primary-foreground'}`}
            >
              {deadline.date}, <span className="block">{deadline.year}</span>
            </p>
            <p className="text-sm leading-relaxed opacity-80">
              {deadline.detail}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs opacity-75">
        Source:{' '}
        <a
          href="https://www.ada.gov/resources/2024-03-08-web-rule/"
          className="underline decoration-primary-foreground/40 underline-offset-4 transition-opacity hover:opacity-100"
        >
          U.S. Department of Justice Title II web and mobile accessibility rule
        </a>
        ; compliance dates extended by the interim final rule published April
        20, 2026.
      </p>
    </ContentSection>
  )
}

function ScopeSection() {
  return (
    <ContentSection tone="muted">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <SectionLabel>§ 1 — Scope</SectionLabel>
        <SectionHeading className="max-w-2xl">
          Where accessibility work happens.
        </SectionHeading>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Northline tests the paths residents use, then implements accessible
          structure, content, and documents in the systems already in
          production. Vendor-controlled services receive reproducible findings,
          implementation specifications, and acceptance criteria.
        </p>
      </div>
      <DigitalEstate />
    </ContentSection>
  )
}

function EngagementSection() {
  return (
    <ContentSection tone="muted">
      <SectionLabel>§ 4 — Engagement</SectionLabel>
      <SectionHeading>Three phases. Priced before work begins.</SectionHeading>
      <ol className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
        {engagements.map((engagement, index) => (
          <li
            key={engagement.name}
            className="flex flex-col gap-6 bg-background p-6 md:p-8"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs text-primary">
                {engagement.price}
              </span>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                {engagement.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {engagement.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground">
        Engagements are quoted in advance and structured for ordinary municipal
        purchasing.
      </p>
    </ContentSection>
  )
}

function MunicipalExperienceSection() {
  return (
    <ContentSection>
      <SectionLabel>§ 3 — Experience</SectionLabel>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-12">
        <SectionHeading className="max-w-xl">
          Municipal experience. Available nationwide.
        </SectionHeading>
        <div className="flex max-w-xl flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Northline&apos;s method is grounded in hands-on work with municipal
            governments and designed for cities, towns, counties, districts,
            and public authorities nationwide.
          </p>
          <p>
            The work aligns leadership, staff, publishers, and contracted
            providers around one technical standard and a practical sequence
            for implementation.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <MunicipalWork />
      </div>
    </ContentSection>
  )
}

function BeginSection() {
  return (
    <ContentSection
      id="start"
      tone="brand"
      innerClassName="grid gap-10 md:grid-cols-2 md:items-center"
    >
      <div className="flex flex-col items-start gap-6">
        <SectionLabel onBrand>§ 5 — Begin</SectionLabel>
        <SectionHeading>Start with an assessment.</SectionHeading>
        <p className="max-w-md text-pretty leading-relaxed opacity-85">
          A ranked review of the journeys and documents residents use.
          Recommended next steps, priced in writing. One written reply within
          two business days.
        </p>
        <ActionLink href={assessmentEmailHref} variant="inverse">
          Tell us the URL — {site.email}
        </ActionLink>
      </div>
      <div className="border border-primary-foreground/30">
        <p className="border-b border-primary-foreground/30 px-4 py-2 font-mono text-xs uppercase tracking-widest opacity-80">
          Assessment · p. 1 — Leadership brief
        </p>
        <dl>
          {findings.map((item, index) => (
            <div
              key={item.finding}
              className={`flex items-baseline justify-between gap-4 px-4 py-3 ${index < findings.length - 1 ? 'border-b border-primary-foreground/20' : ''}`}
            >
              <dt className="text-sm opacity-85">{item.finding}</dt>
              <dd className="font-mono text-xs">{item.priority}</dd>
            </div>
          ))}
        </dl>
      </div>
    </ContentSection>
  )
}
