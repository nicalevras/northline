import { createFileRoute } from '@tanstack/react-router'
import { site } from '../site'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
  head: () => ({
    meta: [{ title: `Privacy — ${site.name}` }],
  }),
})

function Privacy() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="display text-4xl sm:text-5xl">Privacy</h1>
      <div className="prose-ink mt-8 space-y-4 text-ink-soft">
        <p>
          We collect only what you send us through the contact form or by
          email: your name, address, organization, a URL, and your note.
        </p>
        <p>
          Inquiries are stored so we can reply. We do not sell them. We do
          not run advertising pixels. We do not use an overlay or a chat
          widget.
        </p>
        <p>
          If you are writing from a government address, your message may be a
          public record under your state’s law.
        </p>
        <p>
          Questions:{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </main>
  )
}
