import { useState } from 'react'
import { inquire, type InquireResult } from '../server/inquire'

export function ContactForm() {
  const [pending, setPending] = useState(false)
  const [result, setResult] = useState<InquireResult | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setResult(null)
    try {
      const form = new FormData(e.currentTarget)
      const next = await inquire({ data: form })
      setResult(next)
      if (next.ok) e.currentTarget.reset()
    } catch {
      setResult({
        ok: false,
        error: 'Something went wrong sending that. Email us directly instead.',
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <p className="sr-only" aria-live="polite">
        {pending ? 'Sending.' : result?.ok ? 'Message received.' : result?.error || ''}
      </p>

      {result?.ok ? (
        <p
          className="border border-ok/30 bg-[#e6eee7] px-4 py-3 text-ok"
          role="status"
        >
          Received. We’ll reply with a time or a few questions — not a widget
          demo.
        </p>
      ) : null}

      {result && !result.ok ? (
        <p
          className="border border-copper/40 bg-[#f6e6df] px-4 py-3 text-copper-deep"
          role="alert"
        >
          {result.error}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Your name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className="field"
          />
        </Field>
        <Field id="email" label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            className="field"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="entity" label="City, county, or district">
          <input
            id="entity"
            name="entity"
            type="text"
            maxLength={160}
            className="field"
          />
        </Field>
        <Field id="url" label="Website URL">
          <input
            id="url"
            name="url"
            type="url"
            inputMode="url"
            placeholder="https://"
            className="field"
          />
        </Field>
      </div>

      <Field
        id="note"
        label="What should we look at first?"
        hint="Pay, permits, agendas, a document center — whatever residents actually use."
      >
        <textarea
          id="note"
          name="note"
          rows={5}
          maxLength={4000}
          className="field min-h-32 resize-y"
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper hover:bg-copper-deep disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  hint,
  required,
  children,
}: {
  id: string
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  const hintId = hint ? `${id}-hint` : undefined
  return (
    <div>
      <label htmlFor={id} className="block text-[0.95rem] font-medium text-ink">
        {label}
        {required ? (
          <span className="font-normal text-ink-soft"> (required)</span>
        ) : null}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-ink-soft">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">
        {/* clone would be nicer; fields already have ids */}
        {children}
      </div>
    </div>
  )
}
