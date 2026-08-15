import { Link, createFileRoute } from '@tanstack/react-router'
import { site } from '../site'

export const Route = createFileRoute('/fees')({
  component: Fees,
  head: () => ({
    meta: [{ title: `Fees — ${site.name}` }],
  }),
})

const rows = [
  {
    name: 'Title II Snapshot',
    who: 'Towns under ~25,000',
    price: '$2,500–$3,500',
    note: 'Ten business days. Council brief, ranked spreadsheet, priced next steps.',
  },
  {
    name: 'Title II Snapshot',
    who: 'County, 25k+, school district, multi-domain',
    price: '$6,000–$9,000',
    note: 'Same deliverable. Mid-market work, mid-market fee.',
  },
  {
    name: 'Critical-path remediations',
    who: 'After a snapshot',
    price: '$8,000–$18,000',
    note: 'Theme, journeys, statement, training. No PDF ocean.',
  },
  {
    name: 'Program',
    who: 'The RFP-shaped job',
    price: '$40,000–$65,000 NTE',
    note: 'Assess, fix, capped active PDFs, vendor letters, validation, 90 days of monitoring.',
  },
  {
    name: 'PDF lots',
    who: 'Active files only',
    price: '$4–$25 / page',
    note: 'Born-digital at the low end. Scans and forms at the high end. Never the archive on a fixed fee.',
  },
  {
    name: 'Monitoring',
    who: 'After the site is livable',
    price: '$399 or $749–$1,200 / mo',
    note: 'Watch matches the widget they were quoted. Program is a paper trail.',
  },
]

function Fees() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-medium tracking-[0.16em] text-copper-deep uppercase">
        Fees
      </p>
      <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
        Written down, so purchasing can compare apples.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-ink-soft">
        Snapshots are built to sit under a typical no-bid cap. Remediations are
        a not-to-exceed. We do not surprise-invoice a document center.
      </p>

      <div className="mt-14 overflow-x-auto">
        <table className="w-full min-w-[40rem] text-left">
          <caption className="sr-only">Service fees</caption>
          <thead>
            <tr className="border-b border-rule text-sm text-ink-soft">
              <th scope="col" className="py-3 pr-4 font-medium">
                Service
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                For
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Fee
              </th>
              <th scope="col" className="py-3 font-medium">
                Includes
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name + row.who} className="border-b border-rule/80 align-top">
                <th scope="row" className="py-5 pr-4 font-medium">
                  {row.name}
                </th>
                <td className="py-5 pr-4 text-ink-soft">{row.who}</td>
                <td className="py-5 pr-4 whitespace-nowrap">{row.price}</td>
                <td className="py-5 text-ink-soft">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-10 max-w-2xl text-ink-soft">
        Training is included in remediations and programs, or $1,500–$3,500
        alone. We never lead with a $5,000 workshop.
      </p>
      <p className="mt-8">
        <Link
          to="/contact"
          className="inline-flex bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper no-underline hover:bg-copper-deep"
        >
          Ask for a snapshot
        </Link>
      </p>
    </main>
  )
}
