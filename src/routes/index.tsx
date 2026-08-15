import { Link, createFileRoute } from '@tanstack/react-router'
import { CitySpecimen } from '../components/CitySpecimen'
import { site } from '../site'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [{ title: `${site.name} — Title II web work` }],
  }),
})

const journeys = [
  {
    n: '01',
    name: 'Pay',
    text: 'A water bill or tax payment a keyboard and a screen reader can finish without help.',
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

const hosts = ['CivicPlus', 'Granicus', 'Revize', 'WordPress']

const process = [
  { n: '01', title: 'Snapshot', body: 'Ten days. Journeys, documents, a brief the council can hear.' },
  { n: '02', title: 'Repair', body: 'Theme first, then forms, then the active files. Caps on PDFs.' },
  { n: '03', title: 'Keep', body: 'A $399 watch or a real program. So the clerk does not undo the work.' },
]

function Home() {
  return (
    <main id="main">
      <section className="relative overflow-hidden border-b border-rule">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(180deg,transparent,rgba(138,61,39,0.05))] lg:block"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.16em] text-copper-deep uppercase">
              Title II · WCAG 2.1 AA
            </p>
            <h1 className="display mt-5 text-[2.6rem] text-ink sm:text-6xl lg:text-[4.1rem]">
              A toolbar
              <br />
              is not the rule.
            </h1>
            <p className="mt-7 max-w-md text-lg text-ink-soft sm:text-xl">
              We find where residents get stuck — pay, permits, agendas — then
              fix the templates and the documents that matter.
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
          </div>
          <div className="lg:col-span-6">
            <CitySpecimen />
            <p className="mt-3 text-sm text-ink-soft">
              What a screen reader often gets on a “modern” city homepage.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Platforms we work on"
        className="border-b border-rule bg-paper-2"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
          <p className="text-xs tracking-[0.14em] text-ink-soft uppercase">
            On the site you already have
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem]">
            {hosts.map((h) => (
              <li key={h} className="font-medium text-ink">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
            Residents have to finish the thing.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            {site.tagline} Four paths. If any one of them fails, the widget
            did not save you.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {journeys.map((j) => (
            <li
              key={j.n}
              className="flex min-h-[13.5rem] flex-col justify-between border border-rule bg-paper p-6 sm:p-7"
            >
              <span className="font-serif text-3xl text-copper">{j.n}</span>
              <div>
                <h3 className="text-xl font-medium">{j.name}</h3>
                <p className="mt-2 text-ink-soft">{j.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl lg:col-span-4">
            We will not sell you a story.
          </h2>
          <ul className="divide-y divide-white/15 lg:col-span-7 lg:col-start-6">
            {[
              'No overlays. The FTC already fined that pitch.',
              'No “you’re compliant” stamp. We are not a law firm.',
              'No unlimited archive of PDFs on a fixed fee.',
            ].map((line) => (
              <li
                key={line}
                className="py-6 font-serif text-2xl leading-snug tracking-[-0.03em] sm:text-3xl"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
            Dates, not a countdown clock.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="border border-rule bg-paper-2/70 p-7 sm:p-9">
              <p className="text-xs tracking-[0.14em] text-copper-deep uppercase">
                Population 50,000+
              </p>
              <p className="display mt-4 text-5xl sm:text-6xl">Apr 26</p>
              <p className="mt-1 font-serif text-3xl text-ink-soft">2027</p>
              <p className="mt-6 text-ink-soft">
                Counties, larger cities, many districts. The earlier clock.
              </p>
            </article>
            <article className="border border-rule bg-paper p-7 sm:p-9">
              <p className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                Under 50,000 · special districts
              </p>
              <p className="display mt-4 text-5xl sm:text-6xl">Apr 26</p>
              <p className="mt-1 font-serif text-3xl text-ink-soft">2028</p>
              <p className="mt-6 text-ink-soft">
                Most towns. Still the same standard. A scan score is not it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
          How the work is sold.
        </h2>
        <ol className="mt-12 grid gap-px bg-rule sm:grid-cols-3">
          {process.map((step) => (
            <li key={step.n} className="bg-paper p-7 sm:p-8">
              <p className="font-serif text-copper">{step.n}</p>
              <h3 className="mt-6 text-2xl font-medium">{step.title}</h3>
              <p className="mt-3 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8">
          <Link
            to="/approach"
            className="font-medium text-copper-deep underline-offset-4 hover:underline"
          >
            The full method
          </Link>
        </p>
      </section>

      <section className="border-t border-rule bg-paper-2/80">
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
              Start with a snapshot.
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-soft">
              A brief a manager can take to council. A ranked list. Priced next
              steps. $2,500–$3,500 for a typical town; $6,000–$9,000 when the
              estate is larger.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper no-underline hover:bg-copper-deep"
            >
              Tell us the URL
            </Link>
          </div>
          <div
            aria-hidden="true"
            className="border border-rule bg-paper p-6 shadow-[0_20px_40px_-24px_rgba(27,24,20,0.4)] lg:col-span-5 lg:col-start-8"
          >
            <p className="text-[0.65rem] tracking-[0.16em] text-ink-soft uppercase">
              Snapshot · p. 1
            </p>
            <p className="mt-4 font-serif text-2xl tracking-[-0.03em]">
              Council brief
            </p>
            <ol className="mt-6 space-y-3 border-t border-rule pt-5 text-sm">
              <li className="flex justify-between gap-4">
                <span>Pay control has no name</span>
                <span className="text-copper">P0</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Permit PDF, no tags</span>
                <span className="text-copper">P0</span>
              </li>
              <li className="flex justify-between gap-4 text-ink-soft">
                <span>2018 packet, archive</span>
                <span>excepted</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}
