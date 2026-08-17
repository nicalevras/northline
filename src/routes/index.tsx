import { Link, createFileRoute } from '@tanstack/react-router'
import { CitySpecimen } from '../components/CitySpecimen'
import { TrustMarquee } from '../components/TrustMarquee'
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

const hosts = [
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
]

const process = [
  {
    n: '01',
    title: 'Snapshot',
    body: 'Ten days. Journeys, documents, a brief the council can hear.',
  },
  {
    n: '02',
    title: 'Repair',
    body: 'Theme first, then forms, then the active files. Caps on PDFs.',
  },
  {
    n: '03',
    title: 'Keep',
    body: 'A $399 watch or a real program. So the clerk does not undo the work.',
  },
]

function Home() {
  return (
    <main id="main">
      <section className="wrap grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow">Title II · WCAG 2.1 AA</p>
          <h1 className="display mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.15rem]">
            A toolbar
            <br />
            is not the rule.
          </h1>
          <p className="mt-7 max-w-md text-lg text-ink-soft sm:text-xl">
            We find where residents get stuck — pay, permits, agendas — then
            fix the templates and the documents that matter.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link to="/contact" className="btn btn-primary">
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
      </section>

      <TrustMarquee />

      <section className="bg-ink text-paper">
        <div className="wrap py-20 sm:py-24">
          <p className="eyebrow eyebrow-on-ink">The rule</p>
          <h2 className="display mt-4 max-w-3xl text-3xl sm:text-5xl">
            WCAG 2.1 AA is the test. A toolbar is not.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-paper/70">
            Title II named a technical standard. If a resident cannot pay,
            apply, or read an agenda with a keyboard and a screen reader, the
            city has not met it — whatever the CMS add-on says.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-12">
            <li>
              <h3 className="eyebrow-on-ink text-xs font-medium tracking-[0.14em] uppercase">
                Overlay
              </h3>
              <p className="mt-3 text-paper/80">
                A script on top of the page. The FTC fined that pitch. Remove
                the widget and the site is the same inaccessible site.
              </p>
            </li>
            <li>
              <h3 className="eyebrow-on-ink text-xs font-medium tracking-[0.14em] uppercase">
                Scan score
              </h3>
              <p className="mt-3 text-paper/80">
                Automation catches a fraction of real barriers. A clean
                Lighthouse report is not a council brief, and it is not the
                rule.
              </p>
            </li>
            <li>
              <h3 className="eyebrow-on-ink text-xs font-medium tracking-[0.14em] uppercase">
                The journeys
              </h3>
              <p className="mt-3 text-paper/80">
                Pay. Permit. Agenda. Search. Emergency. Those are the paths we
                test by hand.
              </p>
            </li>
          </ul>
          <ul className="mt-16 grid gap-6 border-t border-white/15 pt-10 text-paper/65 sm:grid-cols-3">
            <li>No overlays.</li>
            <li>No “you’re compliant” stamp.</li>
            <li>No unlimited archive on a fixed fee.</li>
          </ul>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="wrap py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Journeys</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
              Residents have to finish the thing.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Four paths. If any one of them fails, the widget did not save
              you.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {journeys.map((j) => (
              <li
                key={j.n}
                className="card flex min-h-[13rem] flex-col justify-between p-6 sm:p-8"
              >
                <span className="font-serif text-3xl text-copper-deep">
                  {j.n}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{j.name}</h3>
                  <p className="mt-2 text-ink-soft">{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Deadlines</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
              Dates, not a countdown clock.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <article className="card p-7 sm:p-9">
              <p className="eyebrow">Population 50,000+</p>
              <p className="display mt-5 text-5xl sm:text-6xl">Apr 26</p>
              <p className="mt-1 font-serif text-3xl text-ink-soft">2027</p>
              <p className="mt-6 text-ink-soft">
                Counties, larger cities, many districts. The earlier clock.
              </p>
            </article>
            <article className="card p-7 sm:p-9">
              <p className="eyebrow">Under 50,000 · special districts</p>
              <p className="display mt-5 text-5xl sm:text-6xl">Apr 26</p>
              <p className="mt-1 font-serif text-3xl text-ink-soft">2028</p>
              <p className="mt-6 text-ink-soft">
                Most towns. Still the same standard. A scan score is not it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="wrap py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Engagement</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
              How the work is sold.
            </h2>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-3">
            {process.map((step) => (
              <li key={step.n} className="card p-7 sm:p-8">
                <p className="font-serif text-copper-deep">{step.n}</p>
                <h3 className="mt-8 text-2xl font-medium">{step.title}</h3>
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
        </div>
      </section>

      <section>
        <div className="wrap py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Integration</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
              On the site you already have
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              We do not replace CivicPlus, Granicus, Revize, or WordPress. The
              host keeps the contract. We work in staging or a limited editor
              role, file theme tickets when the template is locked, and write
              vendor letters for the apps we cannot edit — bill-pay, OpenGov,
              recreation.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {hosts.map((host) => (
              <li key={host.name} className="card p-6 sm:p-7">
                <h3 className="text-xl font-medium">{host.name}</h3>
                <p className="mt-3 text-ink-soft">{host.text}</p>
              </li>
            ))}
          </ul>
          <div className="card mt-4 p-6 sm:p-7">
            <h3 className="text-xl font-medium">What we do not patch</h3>
            <p className="mt-3 max-w-3xl text-ink-soft">
              RecDesk, InvoiceCloud, UniPay, CivicClerk, and the rest stay
              their problem. Title II still covers what you “make available,”
              so we test the handoff and send the letter. We do not take
              production admin on billing or police systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="wrap grid items-end gap-12 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">Start</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-5xl">
              A snapshot first.
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-soft">
              A brief a manager can take to council. A ranked list. Priced next
              steps. $2,500–$3,500 for a typical town; $6,000–$9,000 when the
              estate is larger.
            </p>
            <Link to="/contact" className="btn btn-primary mt-8">
              Tell us the URL
            </Link>
          </div>
          <div
            aria-hidden="true"
            className="card p-6 lg:col-span-5 lg:col-start-8"
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
                <span className="text-copper-deep">P0</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Permit PDF, no tags</span>
                <span className="text-copper-deep">P0</span>
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
