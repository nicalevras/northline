import { Link, createFileRoute } from '@tanstack/react-router'
import { site } from '../site'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      {
        title: `${site.name} — Title II web work`,
      },
    ],
  }),
})

const journeys = [
  {
    n: '01',
    name: 'Pay',
    text: 'A water bill or tax payment that a keyboard and a screen reader can finish without help.',
  },
  {
    n: '02',
    name: 'Apply',
    text: 'Permit and license forms with names, order, and errors a person can actually use.',
  },
  {
    n: '03',
    name: 'Meet',
    text: 'Agendas and packets that are official records — not a Drive folder with no tagged path.',
  },
  {
    n: '04',
    name: 'Find',
    text: 'Search and emergency notices that are text, not pictures of text.',
  },
]

function Home() {
  return (
    <main id="main">
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <p className="text-xs font-medium tracking-[0.16em] text-copper-deep uppercase">
          Title II · WCAG 2.1 AA
        </p>
        <h1 className="display mt-5 max-w-4xl text-[2.7rem] text-ink sm:text-6xl md:text-[4.35rem]">
          A toolbar
          <br />
          is not the rule.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink-soft sm:text-xl">
          The Department of Justice named a standard: WCAG 2.1 Level AA. We
          find where residents get stuck — then fix the templates and the
          documents that matter.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            to="/contact"
            className="inline-flex bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper no-underline hover:bg-copper-deep"
          >
            Request a snapshot
          </Link>
          <Link
            to="/fees"
            className="text-[0.95rem] font-medium text-ink-soft underline decoration-rule underline-offset-4 hover:text-ink"
          >
            Fees, in writing
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <hr className="hairline border-t" />
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
            Residents have to finish the thing.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg text-ink-soft">
            {site.tagline} We work on CivicPlus, Granicus, Revize, and
            WordPress. We do not replace your CMS. We do not sell overlays. We
            do not stamp “legally compliant.”
          </p>
          <ol className="mt-10 divide-y divide-rule">
            {journeys.map((j) => (
              <li key={j.n} className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
                <span className="font-serif text-sm text-copper">{j.n}</span>
                <div>
                  <p className="font-medium">{j.name}</p>
                  <p className="mt-1 text-ink-soft">{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-2/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-serif text-3xl tracking-[-0.03em]">
            Dates, not panic.
          </h2>
          <table className="mt-8 w-full max-w-2xl text-left">
            <caption className="sr-only">
              Title II web and mobile compliance dates by population
            </caption>
            <thead>
              <tr className="border-b border-rule text-sm text-ink-soft">
                <th scope="col" className="py-3 pr-4 font-medium">
                  Entity
                </th>
                <th scope="col" className="py-3 font-medium">
                  Deadline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule/70">
                <th scope="row" className="py-4 pr-4 font-normal">
                  Population 50,000 or more
                </th>
                <td className="py-4">April 26, 2027</td>
              </tr>
              <tr className="border-b border-rule/70">
                <th scope="row" className="py-4 pr-4 font-normal">
                  Under 50,000, and special districts
                </th>
                <td className="py-4">April 26, 2028</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 max-w-xl text-ink-soft">
            A scan score is not the standard. Neither is a JavaScript toolbar.
            The test is whether someone can complete the service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
              Start with a snapshot.
            </h2>
            <p className="mt-4 max-w-lg text-ink-soft">
              Ten business days. A brief a manager can take to council. A
              ranked list. Priced next steps. Then remediations, documents, or
              a retainer — if you want them.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 self-start bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper no-underline hover:bg-copper-deep md:self-auto"
          >
            Tell us the URL
          </Link>
        </div>
      </section>
    </main>
  )
}
