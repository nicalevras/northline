import { Link, createFileRoute } from '@tanstack/react-router'
import { site } from '../site'

export const Route = createFileRoute('/approach')({
  component: Approach,
  head: () => ({
    meta: [{ title: `Approach — ${site.name}` }],
  }),
})

const steps = [
  {
    title: 'Inventory, not a dump',
    body: 'Domains, the document center, third-party pay and permit apps. We classify what we can fix, what the CMS vendor owns, what is excepted, and what is an active service that must work.',
  },
  {
    title: 'Automation as input',
    body: 'axe-core at scale catches contrast, unnamed controls, empty buttons. A clean scan is not the report. It is a list we then read.',
  },
  {
    title: 'Five journeys, by hand',
    body: 'Pay, apply, agenda, search, emergency — keyboard and a screen reader. We record the worst failure so a council does not have to imagine it.',
  },
  {
    title: 'Fix leverage first',
    body: 'Theme, then shared components, then the journeys, then active PDFs. Never page one of a four-thousand-URL crawl. Archives stay archives.',
  },
  {
    title: 'Leave a process',
    body: 'A statement, a grievance path, ninety minutes with the people who publish. The next agenda should be born tagged without us in the room.',
  },
]

function Approach() {
  return (
    <main id="main">
      <div className="wrap py-16 sm:py-24">
        <p className="eyebrow">Method</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
          We work on the site you have.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft">
          CivicPlus, Granicus, Revize, WordPress. The host keeps the contract.
          We attack the compliance claim — not the CMS. AI drafts. A person
          signs.
        </p>
      </div>

      <div className="bg-paper-2">
        <ol className="wrap py-8 sm:py-12">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-3 border-b border-rule py-8 first:border-t sm:grid-cols-[4.5rem_1fr] sm:py-10"
            >
              <span className="font-serif text-copper-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-xl font-medium">{step.title}</h2>
                <p className="mt-2 max-w-2xl text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="wrap py-16 sm:py-20">
        <aside className="card max-w-3xl p-6 sm:p-8">
          <h2 className="font-serif text-2xl tracking-[-0.03em]">
            What we will not say
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
            <li>That a widget made the site meet the rule.</li>
            <li>That we certify legal ADA compliance.</li>
            <li>That every PDF from 2011 belongs in the same lot.</li>
          </ul>
          <p className="mt-6">
            <Link to="/fees" className="font-medium text-copper-deep underline-offset-4 hover:underline">
              See what it costs
            </Link>
          </p>
        </aside>
      </div>
    </main>
  )
}
