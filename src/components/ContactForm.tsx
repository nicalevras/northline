import { useEffect, useRef, useState, type FormEvent } from 'react'
import { verifyContactInquiry } from '../server/contact'
import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from './TurnstileWidget'

type ContactFormProps = {
  className?: string
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [status, setStatus] = useState('')
  const [intent, setIntent] = useState<'assessment' | 'general' | ''>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileStatus, setTurnstileStatus] = useState('')
  const turnstileRef = useRef<TurnstileWidgetHandle>(null)

  useEffect(() => {
    function syncIntentFromHash() {
      if (window.location.hash === '#contact-assessment') {
        setIntent('assessment')
      } else if (window.location.hash === '#contact') {
        setIntent('')
      }
    }

    syncIntentFromHash()
    window.addEventListener('hashchange', syncIntentFromHash)
    return () => window.removeEventListener('hashchange', syncIntentFromHash)
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('')

    if (!turnstileToken) {
      setTurnstileStatus('Complete the spam protection check and try again.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSubmitting(true)
    setTurnstileStatus('')

    try {
      await verifyContactInquiry({
        data: {
          intent: formData.get('intent'),
          name: formData.get('name'),
          email: formData.get('email'),
          organization: formData.get('organization'),
          website: formData.get('website'),
          message: formData.get('message'),
          token: turnstileToken,
        },
      })
      setStatus(
        'Verification passed. This form is still a preview, so your information was not sent.',
      )
    } catch {
      setStatus('Verification failed. Please try again.')
    } finally {
      turnstileRef.current?.reset()
      setTurnstileToken('')
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id="contact-assessment"
      aria-label="Contact Public Layer"
      aria-describedby="contact-form-note contact-form-status"
      onSubmit={handleSubmit}
      className={`scroll-mt-32 text-primary-foreground md:scroll-mt-16 ${className}`.trim()}
    >
      <fieldset>
        <legend className="text-sm font-medium">
          Reason for contacting us
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <label
            className={`flex min-h-12 items-center gap-3 border px-4 py-3 text-sm font-medium transition-colors ${intent === 'assessment' ? 'border-primary-foreground bg-primary-foreground/10' : 'border-primary-foreground/45 hover:border-primary-foreground'}`}
          >
            <input
              name="intent"
              type="radio"
              value="assessment"
              required
              checked={intent === 'assessment'}
              onChange={() => setIntent('assessment')}
              className="focus-on-primary size-4 shrink-0 accent-primary"
            />
            Request an assessment
          </label>
          <label
            className={`flex min-h-12 items-center gap-3 border px-4 py-3 text-sm font-medium transition-colors ${intent === 'general' ? 'border-primary-foreground bg-primary-foreground/10' : 'border-primary-foreground/45 hover:border-primary-foreground'}`}
          >
            <input
              name="intent"
              type="radio"
              value="general"
              required
              checked={intent === 'general'}
              onChange={() => setIntent('general')}
              className="focus-on-primary size-4 shrink-0 accent-primary"
            />
            General inquiry
          </label>
        </div>
      </fieldset>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="focus-on-primary mt-2 min-h-11 w-full border border-primary-foreground/45 bg-primary-foreground px-3 py-2.5 font-normal text-foreground"
          />
        </label>

        <label className="text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="focus-on-primary mt-2 min-h-11 w-full border border-primary-foreground/45 bg-primary-foreground px-3 py-2.5 font-normal text-foreground"
          />
        </label>

        <label className="text-sm font-medium sm:col-span-2">
          Organization or public entity{' '}
          <span className="font-normal opacity-75">(optional)</span>
          <input
            name="organization"
            type="text"
            autoComplete="organization"
            className="focus-on-primary mt-2 min-h-11 w-full border border-primary-foreground/45 bg-primary-foreground px-3 py-2.5 font-normal text-foreground"
          />
        </label>

        <label className="text-sm font-medium sm:col-span-2">
          Website or system URL{' '}
          <span className="font-normal opacity-75">(optional)</span>
          <input
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            className="focus-on-primary mt-2 min-h-11 w-full border border-primary-foreground/45 bg-primary-foreground px-3 py-2.5 font-normal text-foreground"
          />
        </label>

        <label className="text-sm font-medium sm:col-span-2">
          How can we help?
          <textarea
            name="message"
            rows={5}
            required
            className="focus-on-primary mt-2 w-full resize-y border border-primary-foreground/45 bg-primary-foreground px-3 py-2.5 font-normal text-foreground"
          />
        </label>

        <div className="sm:col-span-2">
          <p className="text-sm font-medium">Spam protection</p>
          <div className="mt-2 max-w-sm">
            <TurnstileWidget
              ref={turnstileRef}
              onVerify={(token) => {
                setTurnstileToken(token)
                if (token) setTurnstileStatus('')
              }}
              onError={() => {
                setTurnstileToken('')
                setTurnstileStatus(
                  'Spam protection could not load. Refresh the page and try again.',
                )
              }}
            />
          </div>
          <p
            id="turnstile-status"
            aria-live="polite"
            className="mt-2 text-sm font-medium"
          >
            {turnstileStatus}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-on-primary bg-primary-foreground px-5 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isSubmitting ? 'Verifying…' : 'Send inquiry'}
        </button>
        <p
          id="contact-form-note"
          className="text-xs leading-relaxed opacity-75"
        >
          Preview only. Submissions are not yet enabled. Do not include
          sensitive personal information.
        </p>
        <p
          id="contact-form-status"
          aria-live="polite"
          className="text-sm font-medium text-primary-foreground"
        >
          {status}
        </p>
      </div>
    </form>
  )
}
