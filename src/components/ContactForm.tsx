import { useState, type FormEvent } from 'react'

type ContactFormProps = {
  className?: string
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(
      'This form is a preview and is not connected yet. Your information was not sent.',
    )
  }

  return (
    <form
      aria-labelledby="contact-form-heading"
      aria-describedby="contact-form-note contact-form-status"
      onSubmit={handleSubmit}
      className={`bg-background p-5 text-foreground sm:p-6 md:p-8 ${className}`.trim()}
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Assessment request
        </p>
        <h3
          id="contact-form-heading"
          className="mt-3 text-2xl font-bold tracking-tight"
        >
          Tell us about your public website.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Start with the public entity, its website, and the person we should
          reply to.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 min-h-11 w-full border border-border bg-card px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-medium">
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 min-h-11 w-full border border-border bg-card px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-medium sm:col-span-2">
          Public entity
          <input
            name="organization"
            type="text"
            autoComplete="organization"
            required
            className="mt-2 min-h-11 w-full border border-border bg-card px-3 py-2.5 font-normal"
          />
        </label>

        <label className="text-sm font-medium sm:col-span-2">
          Website URL
          <input
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            required
            className="mt-2 min-h-11 w-full border border-border bg-card px-3 py-2.5 font-normal"
          />
        </label>

      </div>

      <div className="mt-6 flex flex-col items-start gap-3">
        <button
          type="submit"
          className="bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Request an assessment
        </button>
        <p
          id="contact-form-note"
          className="text-xs leading-relaxed text-muted-foreground"
        >
          Preview only. Submissions are not yet enabled. Do not include
          sensitive personal information.
        </p>
        <p
          id="contact-form-status"
          aria-live="polite"
          className="text-sm font-medium text-primary"
        >
          {status}
        </p>
      </div>
    </form>
  )
}
