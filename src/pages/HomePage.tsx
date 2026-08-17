import { ActionLink } from '../components/ActionLink'
import {
  ContentSection,
  SectionHeading,
  SectionLabel,
} from '../components/ContentSection'
import { ScreenReaderSpecimen } from '../components/ScreenReaderSpecimen'
import {
  commitments,
  deadlines,
  engagements,
  findings,
  hosts,
  journeys,
  ruleCards,
} from '../content/home'
import { site, snapshotEmailHref } from '../site'

export function HomePage() {
  return (
    <main id="main" className="flex-1">
      <HeroSection />
      <RuleSection />
      <JourneysSection />
      <DeadlinesSection />
      <EngagementSection />
      <IntegrationSection />
      <StartSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-20">
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ADA Title II · 28 CFR Part 35 · WCAG 2.1 AA
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            A toolbar is not <span className="text-primary">the rule.</span>
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            We find where residents get stuck — pay, permits, agendas — then fix
            the templates and the documents that matter.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ActionLink href="#start">Request a snapshot</ActionLink>
            <ActionLink href="#fees" variant="outline">
              Fees, in writing
            </ActionLink>
          </div>
        </div>
        <ScreenReaderSpecimen />
      </div>
    </section>
  )
}

function RuleSection() {
  return (
    <ContentSection id="rule" tone="brand">
      <SectionLabel onBrand>§ 1 — The rule</SectionLabel>
      <SectionHeading className="max-w-3xl">
        WCAG 2.1 AA is the test. A toolbar is not.
      </SectionHeading>
      <p className="mt-5 max-w-2xl text-pretty leading-relaxed opacity-85">
        Title II named a technical standard. If a resident cannot pay, apply, or
        read an agenda with a keyboard and a screen reader, the city has not met
        it — whatever the CMS add-on says.
      </p>
      <div className="mt-12 grid gap-px border border-primary-foreground/25 bg-primary-foreground/25 md:grid-cols-3">
        {ruleCards.map((card) => (
          <article key={card.title} className="bg-primary p-6">
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed opacity-80">{card.text}</p>
          </article>
        ))}
      </div>
      <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-10">
        {commitments.map((commitment) => (
          <li
            key={commitment}
            className="flex items-baseline gap-2 font-mono text-sm"
          >
            <span aria-hidden="true" className="opacity-60">
              ×
            </span>
            {commitment}
          </li>
        ))}
      </ul>
    </ContentSection>
  )
}

function JourneysSection() {
  return (
    <ContentSection>
      <SectionLabel>§ 2 — Journeys</SectionLabel>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading className="max-w-xl">
          Residents have to finish the thing.
        </SectionHeading>
        <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
          Four paths. If any one of them fails, the widget did not save you.
        </p>
      </div>
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {journeys.map((journey, index) => (
          <article
            key={journey.name}
            className="flex flex-col gap-10 bg-background p-6 transition-colors hover:bg-card"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(journeys.length).padStart(2, '0')}
            </span>
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                {journey.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {journey.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </ContentSection>
  )
}

function DeadlinesSection() {
  return (
    <ContentSection tone="muted">
      <SectionLabel>§ 3 — Deadlines</SectionLabel>
      <SectionHeading>Dates, not a countdown clock.</SectionHeading>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {deadlines.map((deadline) => (
          <article
            key={deadline.year}
            className="flex flex-col gap-4 border border-foreground/20 bg-background p-8"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {deadline.audience}
            </p>
            <p
              className={`font-mono text-5xl font-medium tracking-tight md:text-6xl ${deadline.emphasis === 'accent' ? 'text-accent' : 'text-primary'}`}
            >
              {deadline.date}, <span className="block">{deadline.year}</span>
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {deadline.detail}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        Source: DOJ interim final rule, effective April 20, 2026.
      </p>
    </ContentSection>
  )
}

function EngagementSection() {
  return (
    <ContentSection id="fees">
      <SectionLabel>§ 4 — Engagement</SectionLabel>
      <SectionHeading>How the work is sold.</SectionHeading>
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
        Priced by scope and quoted before work starts, with packages designed
        around practical municipal purchasing.
      </p>
    </ContentSection>
  )
}

function IntegrationSection() {
  return (
    <ContentSection tone="muted">
      <SectionLabel>§ 5 — Integration</SectionLabel>
      <SectionHeading>On the site you already have.</SectionHeading>
      <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        We do not replace CivicPlus, Granicus, Revize, or WordPress. The host
        keeps the contract. We work in staging or a limited editor role, file
        theme tickets when the template is locked, and write vendor letters for
        the apps we cannot edit.
      </p>
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
        {hosts.map((host) => (
          <article key={host.name} className="bg-background p-6 md:p-8">
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide text-primary">
              {host.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {host.text}
            </p>
          </article>
        ))}
      </div>
      <aside className="mt-6 border border-accent/50 bg-background p-6 md:p-8">
        <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide text-accent">
          What we do not patch
        </h3>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          RecDesk, InvoiceCloud, UniPay, CivicClerk, and the rest stay their
          problem. Title II still covers what you “make available,” so we test
          the handoff and send the letter. We do not take production admin on
          billing or police systems.
        </p>
      </aside>
    </ContentSection>
  )
}

function StartSection() {
  return (
    <ContentSection
      id="start"
      tone="brand"
      innerClassName="grid gap-10 md:grid-cols-2 md:items-center"
    >
      <div className="flex flex-col items-start gap-6">
        <SectionLabel onBrand>§ 6 — Start</SectionLabel>
        <SectionHeading>A snapshot first.</SectionHeading>
        <p className="max-w-md text-pretty leading-relaxed opacity-85">
          A brief a manager can take to council. A ranked list. Priced next
          steps. $2,500–$3,500 for a typical town; $6,000–$9,000 when the estate
          is larger.
        </p>
        <ActionLink href={snapshotEmailHref} variant="inverse">
          Tell us the URL — {site.email}
        </ActionLink>
        <p className="font-mono text-xs opacity-70">
          One reply within two business days. No sales sequence.
        </p>
      </div>
      <div className="border border-primary-foreground/30">
        <p className="border-b border-primary-foreground/30 px-4 py-2 font-mono text-xs uppercase tracking-widest opacity-80">
          Snapshot · p. 1 — Council brief
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
