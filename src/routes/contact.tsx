import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '../components/ContactForm'
import { site } from '../site'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => ({
    meta: [{ title: `Contact — ${site.name}` }],
  }),
})

function Contact() {
  return (
    <main id="main">
      <div className="wrap grid gap-16 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-4 text-4xl sm:text-5xl">
            Send the URL. We’ll tell you if a snapshot is the right next
            thing.
          </h1>
          <p className="mt-6 text-ink-soft">
            Twenty minutes if a call helps. We do not do free full audits. We
            do not install a toolbar.
          </p>
          <dl className="mt-10 space-y-4 text-[0.98rem]">
            <div>
              <dt className="text-sm text-ink-soft">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-copper-deep underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Where</dt>
              <dd>{site.region}</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
